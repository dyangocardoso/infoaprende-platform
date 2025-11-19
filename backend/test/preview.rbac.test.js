const request = require('supertest');
const { expect } = require('chai');
const path = require('path');

// Helper para mockear módulos por ruta relativa (establece entry en require.cache)
function mockModule(relPath, exportsObj) {
  try {
    const resolved = require.resolve(relPath);
    require.cache[resolved] = {
      id: resolved,
      filename: resolved,
      loaded: true,
      exports: exportsObj
    };
  } catch (e) {
    // ignorar si no existe
  }
}

let app;

before(async function () {
  this.timeout(8000);

  // Mock de initializeDatabase para evitar dependencia real de BD
  const dbInitStub = {
    initializeDatabase: async () => {
      const plantillaModel = {
        findByPk: async (id) => {
          if (String(id) === '1' || id === 1) {
            return {
              id: 1,
              contenido_html: '<div><h1>Plantilla demo</h1></div>',
              recursos: JSON.stringify([]),
              css: ''
            };
          }
          return null;
        }
      };
      const dummy = { sync: async () => {} };
      try { global.Plantilla = plantillaModel; } catch (e) { /* ignore */ }
      return { User: dummy, Curso: dummy, Leccion: dummy, ProgresoUsuario: dummy, Plantilla: plantillaModel, sequelize: dummy };
    }
  };

  mockModule('../config/database-init', dbInitStub);
  mockModule('./config/database-init', dbInitStub);
  mockModule(path.resolve(__dirname, '..', 'config', 'database-init'), dbInitStub);

  // Stub auth middleware que establece un usuario NO docente
  const authMiddlewareStub = {
    verifyToken: (req, res, next) => { req.user = { id: 10, email: 'user@example.com', role: 'estudiante' }; next(); },
    verifyTokenOptional: (req, res, next) => { req.user = { id: 10, email: 'user@example.com', role: 'estudiante' }; next(); }
  };

  mockModule('../middlewares/auth.middleware', authMiddlewareStub);
  mockModule('./middlewares/auth.middleware', authMiddlewareStub);
  mockModule(path.resolve(__dirname, '..', 'middlewares', 'auth.middleware'), authMiddlewareStub);

  // NOTA: NO mockear docente.middleware -> queremos ejecutar el middleware real para comprobar RBAC

  // Cargar la app
  app = require('../index');
});

describe('Integración RBAC en preview (solo docente)', () => {
  it('debe devolver 403 cuando el usuario no es docente', async () => {
    const res = await request(app)
      .get('/api/docente/plantillas/1/preview')
      .expect(403);

    expect(res.body).to.have.property('message').that.is.a('string');
  });

  it('debe permitir acceso cuando el usuario es docente (control rápido)', async () => {
    // Para este caso reiniciamos app con auth que sí devuelve role: 'docente'
    // Limpiar cache y volver a cargar con un auth stub que devuelve docente
    try {
      const resolved = require.resolve('../index');
      delete require.cache[resolved];
    } catch (e) {}

    const dbInitStub = {
      initializeDatabase: async () => {
        const plantillaModel = {
          findByPk: async (id) => {
            if (String(id) === '1' || id === 1) {
              return { id: 1, contenido_html: '<div><h1>Plantilla demo</h1></div>', recursos: JSON.stringify([]), css: '' };
            }
            return null;
          }
        };
        const dummy = { sync: async () => {} };
        try { global.Plantilla = plantillaModel; } catch (e) { /* ignore */ }
        return { User: dummy, Curso: dummy, Leccion: dummy, ProgresoUsuario: dummy, Plantilla: plantillaModel, sequelize: dummy };
      }
    };

    mockModule('../config/database-init', dbInitStub);

    const authMiddlewareStubDocente = {
      verifyToken: (req, res, next) => { req.user = { id: 11, email: 'docente@example.com', role: 'docente' }; next(); },
      verifyTokenOptional: (req, res, next) => { req.user = { id: 11, email: 'docente@example.com', role: 'docente' }; next(); }
    };

    mockModule('../middlewares/auth.middleware', authMiddlewareStubDocente);
    mockModule('./middlewares/auth.middleware', authMiddlewareStubDocente);
    mockModule(path.resolve(__dirname, '..', 'middlewares', 'auth.middleware'), authMiddlewareStubDocente);

    // Reload app module
    app = require('../index');

    const res = await request(app)
      .get('/api/docente/plantillas/1/preview')
      .expect(200);

    expect(res.headers['content-type']).to.match(/html/);
  });
});
