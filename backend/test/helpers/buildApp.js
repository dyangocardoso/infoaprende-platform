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

  const authMiddlewareStub = {
    verifyToken: (req, res, next) => {
      const effectiveRole = process.env.CURRENT_TEST_ROLE || role;
      if (effectiveRole) req.user = { id: effectiveRole === 'docente' ? 11 : 10, email: `${effectiveRole}@example.com`, role: effectiveRole };
      next();
    },
    verifyTokenOptional: (req, res, next) => {
      const effectiveRole = process.env.CURRENT_TEST_ROLE || role;
      if (effectiveRole) req.user = { id: effectiveRole === 'docente' ? 11 : 10, email: `${effectiveRole}@example.com`, role: effectiveRole };
      next();
    }
  };

  // Expose current role via environment variable too to avoid stale closures
  const __prevTestRole = process.env.CURRENT_TEST_ROLE;
  process.env.CURRENT_TEST_ROLE = role || '';

  const stubs = {
    '../config/database-init': dbInitStub,
    './config/database-init': dbInitStub,
    '../middlewares/auth.middleware': authMiddlewareStub,
    './middlewares/auth.middleware': authMiddlewareStub
  };

  // register absolute-resolved stubs (also try the require.resolve variant)
  try {
    const absDb = path.resolve(__dirname, '..', '..', 'config', 'database-init');
    stubs[absDb] = dbInitStub;
    try { stubs[require.resolve(absDb)]; } catch (e) {}
    try { stubs[require.resolve(absDb)] = dbInitStub; } catch (e) {}
  } catch (e) {}
  try {
    const absAuth = path.resolve(__dirname, '..', '..', 'middlewares', 'auth.middleware');
    stubs[absAuth] = authMiddlewareStub;
    try { stubs[require.resolve(absAuth)]; } catch (e) {}
    try { stubs[require.resolve(absAuth)] = authMiddlewareStub; } catch (e) {}
  } catch (e) {}

  // Remove cached index and middleware modules to force proxyquire to load fresh with our stubs
  const indexPath = path.resolve(__dirname, '..', '..', 'index');
  try {
    const resolvedIndex = require.resolve(indexPath);
    if (require.cache[resolvedIndex]) delete require.cache[resolvedIndex];
  } catch (e) { /* ignore */ }
  // Also remove any middleware cache entries that could have been loaded
  ['auth.middleware','admin.middleware','docente.middleware','role.middleware','logger.middleware','rateLimit.middleware'].forEach(m => {
    try {
      const p = path.resolve(__dirname, '..', '..', 'middlewares', `${m}`);
      const r = require.resolve(p);
      if (require.cache[r]) delete require.cache[r];
    } catch (e) { /* ignore */ }
  });

  // Ensure any direct require of auth.middleware returns our stub by pre-populating require.cache
  let __restoreAuthCache = null;
  try {
    const authResolved = require.resolve(path.resolve(__dirname, '..', '..', 'middlewares', 'auth.middleware'));
    try {
      const origAuthCache = require.cache[authResolved];
      // Inject stub into cache
      require.cache[authResolved] = { id: authResolved, filename: authResolved, loaded: true, exports: authMiddlewareStub };
      __restoreAuthCache = () => {
        try {
          if (origAuthCache) require.cache[authResolved] = origAuthCache;
          else delete require.cache[authResolved];
        } catch (e) { /* ignore */ }
      };
    } catch (e) { /* ignore */ }
  } catch (e) { /* ignore */ }

  let app;
  try {
    app = proxyquire(indexPath, stubs);
  } finally {
    // restore auth cache if we modified it
    try { if (__restoreAuthCache) __restoreAuthCache(); } catch (e) { /* ignore */ }
    // restore previous CURRENT_TEST_ROLE
    try { process.env.CURRENT_TEST_ROLE = __prevTestRole; } catch (e) { /* ignore */ }
  }
  return app;
}

module.exports = { buildApp };
