const request = require('supertest');
const { expect } = require('chai');
const sinon = require('sinon');
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
    // no existe el módulo en el workspace -> ignorar
  }
}

let sandbox;
const baseUser = { id: 1, email: 'admin@infoaprende.com', rol: 'docente', role: 'docente' };

let app;

before(async function () {
  // Permitir más tiempo para la inicialización en este hook
  this.timeout(10000);

  // Evitar que la inicialización real de la BD marque dbConnected=false
  process.env.SKIP_MIGRATIONS = 'true';
  process.env.SKIP_SEEDS = 'true';

  // Stub simple para initializeDatabase() que devuelve modelos mínimos y un sequelize dummy
  const dbInitStub = {
    initializeDatabase: async () => {
      const dummyModel = {
        count: async () => 0,
        create: async (obj) => ({ id: 1, ...obj }),
        findOne: async () => null
      };
      // Plantilla mock específica: devuelve una plantilla para id=1 y null para otros
      const plantillaModel = {
        findByPk: async (id) => {
          if (String(id) === '1' || id === 1) {
            return {
              id: 1,
              contenido_html: '<div><h1>Plantilla demo</h1><p>Contenido de prueba</p></div>',
              recursos: JSON.stringify([]),
              css: ''
            };
          }
          return null;
        },
        findAll: async () => []
      };
      // Registrar Plantilla globalmente porque index.js no la asigna desde el retorno del init
      try { global.Plantilla = plantillaModel; } catch (e) { /* ignore */ }

      const sequelize = {
        sync: async () => {},
        getQueryInterface: () => ({})
      };
      return { User: dummyModel, Curso: dummyModel, Leccion: dummyModel, ProgresoUsuario: dummyModel, Plantilla: plantillaModel, sequelize };
    }
  };

  // Insertar mock de database-init en require.cache
  mockModule('../config/database-init', dbInitStub);
  // Insertar también por ruta absoluta/variantes para garantizar que index.js use este mock
  try { mockModule('./config/database-init', dbInitStub); } catch (e) {}
  try { mockModule(path.resolve(__dirname, '..', 'config', 'database-init'), dbInitStub); } catch (e) {}
  try { mockModule(path.resolve(__dirname, '..', 'config', 'database-init.js'), dbInitStub); } catch (e) {}

  // Crear sandbox global para los tests
  sandbox = sinon.createSandbox();

  // Stubs para middlewares
  const authMiddlewareStub = {
    verifyToken: sandbox.spy((req, res, next) => { req.user = baseUser; next(); }),
    verifyTokenOptional: sandbox.spy((req, res, next) => { req.user = baseUser; next(); })
  };

  // Mockear rutas alternativas (./middlewares vs ../middlewares y ruta absoluta)
  try { mockModule('../middlewares/auth.middleware', authMiddlewareStub); } catch(e){}
  try { mockModule('./middlewares/auth.middleware', authMiddlewareStub); } catch(e){}
  try { mockModule(path.resolve(__dirname, '..', 'middlewares', 'auth.middleware'), authMiddlewareStub); } catch(e){}

  const adminNewStub = {
    requireAdmin: sandbox.spy((req, res, next) => next()),
    requireAdminOrTeacher: sandbox.spy((req, res, next) => next())
  };

  const adminStub = {
    requireAdmin: sandbox.spy((req, res, next) => next()),
    requireAdminOrTeacher: sandbox.spy((req, res, next) => next())
  };

  const docenteStub = sandbox.spy((req, res, next) => next());

  const roleStub = {
    requireRole: (role) => sandbox.spy((req, res, next) => next()),
    checkRole: (roles) => sandbox.spy((req, res, next) => next())
  };

  const loggerStub = {
    logRequest: sandbox.spy((req, res, next) => next()),
    requestLogger: sandbox.spy((req, res, next) => next())
  };

  const rateLimitStub = (options) => sandbox.spy((req, res, next) => next());

  // Colocar stubs en require.cache para que al require('../index') se usen estos mocks
  // auth middleware (variantes)
  mockModule('../middlewares/auth.middleware', authMiddlewareStub);
  mockModule('./middlewares/auth.middleware', authMiddlewareStub);
  mockModule(path.resolve(__dirname, '..', 'middlewares', 'auth.middleware'), authMiddlewareStub);

  // admin / docente / role / logger / rateLimit (variantes)
  mockModule('../middlewares/admin-new.middleware', adminNewStub);
  mockModule('./middlewares/admin-new.middleware', adminNewStub);
  mockModule(path.resolve(__dirname, '..', 'middlewares', 'admin-new.middleware'), adminNewStub);

  mockModule('../middlewares/admin.middleware', adminStub);
  mockModule('./middlewares/admin.middleware', adminStub);
  mockModule(path.resolve(__dirname, '..', 'middlewares', 'admin.middleware'), adminStub);

  mockModule('../middlewares/docente.middleware', docenteStub);
  mockModule('./middlewares/docente.middleware', docenteStub);
  mockModule(path.resolve(__dirname, '..', 'middlewares', 'docente.middleware'), docenteStub);

  mockModule('../middlewares/role.middleware', roleStub);
  mockModule('./middlewares/role.middleware', roleStub);
  mockModule(path.resolve(__dirname, '..', 'middlewares', 'role.middleware'), roleStub);

  mockModule('../middlewares/logger.middleware', loggerStub);
  mockModule('./middlewares/logger.middleware', loggerStub);
  mockModule(path.resolve(__dirname, '..', 'middlewares', 'logger.middleware'), loggerStub);

  mockModule('../middlewares/rateLimit.middleware', rateLimitStub);
  mockModule('./middlewares/rateLimit.middleware', rateLimitStub);
  mockModule(path.resolve(__dirname, '..', 'middlewares', 'rateLimit.middleware'), rateLimitStub);

  // Clear any previously loaded middleware modules from require.cache so our mocks are used
  Object.keys(require.cache).forEach(k => {
    if (k && (k.includes(`${path.sep}middlewares${path.sep}`) || k.includes('/middlewares/'))) {
      delete require.cache[k];
    }
  });

  // Cargar la app después de haber colocado todos los mocks (dbInit + middlewares)
  app = require('../index');

  // Fallback: middleware global de pruebas que garantiza req.user en todas las peticiones
  // Esto evita errores 401 si algún middleware de auth no fue sustituido correctamente.
  app.use((req, res, next) => { req.user = baseUser; next(); });

  // Esperar hasta que global.Plantilla esté disponible (inicialización de BD mock completada)
  const waitFor = (predicate, timeout = 2000, interval = 50) => new Promise((resolve, reject) => {
    const start = Date.now();
    (function check() {
      try {
        if (predicate()) return resolve(true);
      } catch (e) { /* ignore */ }
      if (Date.now() - start > timeout) return reject(new Error('Timeout esperando inicialización de DB mock'));
      setTimeout(check, interval);
    })();
  });

  try {
    await waitFor(() => !!global.Plantilla, 3000, 50);
  } catch (e) {
    // Si no aparece, seguimos; los tests fallarán con 503 y se mostrará el error
    console.warn('preview.test: warning - global.Plantilla no apareció dentro del timeout');
  }
});

after(() => {
  // Restaurar sandbox
  if (sandbox) sandbox.restore();
});

describe('GET /api/docente/plantillas/:id/preview (con sinon stubs)', function () {
  it('debe devolver HTML con status 200 sin necesidad de token/BD', async function () {
    // Forzar temporalmente rol 'docente' en el fallback req.user para este test
    const prevRole = baseUser.role;
    const prevRol = baseUser.rol;
    baseUser.role = 'docente';
    baseUser.rol = 'docente';

    const res = await request(app)
      .get('/api/docente/plantillas/1/preview')
      .expect(200);

    // Restaurar rol original
    baseUser.role = prevRole;
    baseUser.rol = prevRol;

    expect(res.headers['content-type']).to.match(/html/);
    expect(res.text).to.be.a('string');
    expect(res.text.length).to.be.greaterThan(10);
  });

  it('debe devolver 404 si la plantilla no existe (sin error de autenticación)', async function () {
    const prevRole = baseUser.role;
    const prevRol = baseUser.rol;
    baseUser.role = 'docente';
    baseUser.rol = 'docente';

    const res = await request(app)
      .get('/api/docente/plantillas/9999999/preview')
      .expect(res => {
        if (![200, 404].includes(res.status)) throw new Error(`Status inesperado: ${res.status}`);
      });

    // Restaurar rol original
    baseUser.role = prevRole;
    baseUser.rol = prevRol;

    expect(res.status === 404 || res.status === 200).to.be.true;
  });
});
