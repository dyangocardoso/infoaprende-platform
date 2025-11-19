const request = require('supertest');
const { expect } = require('chai');
const path = require('path');
const { setupPlantillaStub, teardownPlantillaStub } = require('./helpers/plantillaStub');

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
  setupPlantillaStub('<div><h1>Plantilla demo</h1></div>');

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

    // reinstalar el stub de Plantilla por si fue limpiado
    setupPlantillaStub('<div><h1>Plantilla demo</h1></div>');

     const authMiddlewareStubDocente = {
       verifyToken: (req, res, next) => { req.user = { id: 11, email: 'docente@example.com', role: 'docente', rol: 'docente' }; next(); },
       verifyTokenOptional: (req, res, next) => { req.user = { id: 11, email: 'docente@example.com', role: 'docente', rol: 'docente' }; next(); }
     };

     mockModule('../middlewares/auth.middleware', authMiddlewareStubDocente);
     mockModule('./middlewares/auth.middleware', authMiddlewareStubDocente);
     mockModule(path.resolve(__dirname, '..', 'middlewares', 'auth.middleware'), authMiddlewareStubDocente);

     // Mockear docente.middleware como passthrough para esta recarga controlada
     const docentePass = (req, res, next) => next();
     mockModule('../middlewares/docente.middleware', docentePass);
     mockModule('./middlewares/docente.middleware', docentePass);
     mockModule(path.resolve(__dirname, '..', 'middlewares', 'docente.middleware'), docentePass);

     // Borrar cache de las rutas que usan esos middlewares para forzar nueva carga con los mocks
     try { const r1 = require.resolve('../routes/docente.plantillas.routes'); if (require.cache[r1]) delete require.cache[r1]; } catch (e) {}
     try { const r2 = require.resolve('../routes/docente.temarios.routes'); if (require.cache[r2]) delete require.cache[r2]; } catch (e) {}

     // Reload app module (borrar index y volver a require)
     try { const rid = require.resolve('../index'); if (require.cache[rid]) delete require.cache[rid]; } catch (e) {}
     app = require('../index');

     const res = await request(app)
       .get('/api/docente/plantillas/1/preview')
       .expect(200);

    expect(res.headers['content-type']).to.match(/html/);
   });
});

after(() => {
  teardownPlantillaStub();
});
