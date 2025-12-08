const path = require('path');
const proxyquire = require('proxyquire').noCallThru();

function buildApp({ role = null, dbPlantillaHtml = '<div><h1>Plantilla demo</h1></div>' } = {}) {
  // buildApp: crear instancia de la app para tests con stubs
  const dbInitStub = {
    initializeDatabase: async () => {
      const plantillaModel = {
        findByPk: async (id) => {
          if (String(id) === '1' || id === 1) {
            return {
              id: 1,
              contenido_html: dbPlantillaHtml,
              recursos: JSON.stringify([]),
              css: ''
            };
          }
          return null;
        },
        findAll: async () => []
      };
      const dummy = { sync: async () => {} };
      try { global.Plantilla = plantillaModel; } catch (e) { /* ignore */ }
      return { User: dummy, Curso: dummy, Leccion: dummy, ProgresoUsuario: dummy, Plantilla: plantillaModel, sequelize: dummy };
    }
  };

  // auth middleware stub factory: soporta export como función y como objeto con verifyToken/verifyTokenOptional
  const authMiddlewareStubFactory = (roleArg) => {
    const authFn = function (req, res, next) {
      if (roleArg) req.user = { id: roleArg === 'docente' ? 11 : 10, email: `${roleArg}@example.com`, role: roleArg, rol: roleArg };
      return next();
    };
    authFn.verifyToken = function (req, res, next) {
      if (roleArg) req.user = { id: roleArg === 'docente' ? 11 : 10, email: `${roleArg}@example.com`, role: roleArg, rol: roleArg };
      return next();
    };
    authFn.verifyTokenOptional = function (req, res, next) {
      if (roleArg) req.user = { id: roleArg === 'docente' ? 11 : 10, email: `${roleArg}@example.com`, role: roleArg, rol: roleArg };
      return next();
    };
    return authFn;
  };

  // construir stubs usando el role actual
  const authMiddlewareStub = authMiddlewareStubFactory(role);
  const stubs = {
    '../config/database-init': dbInitStub,
    './config/database-init': dbInitStub,
    '../middlewares/auth.middleware': authMiddlewareStub,
    './middlewares/auth.middleware': authMiddlewareStub
  };

  // intentar registrar variantes absolutas/resueltas para maximizar compatibilidad con require-resolution
  try {
    const absDb = path.resolve(__dirname, '..', '..', 'config', 'database-init');
    stubs[absDb] = dbInitStub;
    try { stubs[require.resolve(absDb)] = dbInitStub; } catch (e) {}
  } catch (e) {}
  try {
    const absAuth = path.resolve(__dirname, '..', '..', 'middlewares', 'auth.middleware');
    stubs[absAuth] = authMiddlewareStub;
    try { stubs[require.resolve(absAuth)] = authMiddlewareStub; } catch (e) {}
  } catch (e) {}

  // Remove cached index and auth middleware to force proxyquire to apply our stubs
  const indexPath = path.resolve(__dirname, '..', '..', 'index');
  try { delete require.cache[require.resolve(indexPath)]; } catch (e) { /* ignore */ }
  try { delete require.cache[require.resolve(path.resolve(__dirname, '..', '..', 'middlewares', 'auth.middleware'))]; } catch (e) { /* ignore */ }
  
  // Ensure any previously cached modules that may have required the real auth middleware are cleared
  try {
    Object.keys(require.cache).forEach(k => {
      if (!k) return;
      const nk = k.replace(/\\/g, '/');
      const routesDir = path.resolve(__dirname, '..', '..', 'routes').replace(/\\/g, '/');
      const middlewaresDir = path.resolve(__dirname, '..', '..', 'middlewares').replace(/\\/g, '/');
      if (nk.includes(routesDir) || nk.includes(middlewaresDir)) {
        try { delete require.cache[k]; } catch (e) { /* ignore */ }
      }
    });
  } catch (e) { /* ignore */ }

  // Pre-populate require.cache for the resolved auth.middleware path so any require returns our stub
  try {
    const authResolved = require.resolve(path.resolve(__dirname, '..', '..', 'middlewares', 'auth.middleware'));
    const orig = require.cache[authResolved];
    require.cache[authResolved] = { id: authResolved, filename: authResolved, loaded: true, exports: authMiddlewareStub };
    // keep original stored to restore if necessary (not restoring here to keep tests isolated)
  } catch (e) { /* ignore */ }

  // Cargar la app con proxyquire aplicando los stubs
  const app = proxyquire(indexPath, stubs);
  return app;
}

module.exports = { buildApp };
