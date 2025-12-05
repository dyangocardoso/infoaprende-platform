const path = require('path');
const proxyquire = require('proxyquire').noCallThru();

function buildApp({ role = null, dbPlantillaHtml = '<div><h1>Plantilla demo</h1></div>' } = {}) {
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
      if (role) req.user = { id: role === 'docente' ? 11 : 10, email: `${role}@example.com`, role };
      next();
    },
    verifyTokenOptional: (req, res, next) => {
      if (role) req.user = { id: role === 'docente' ? 11 : 10, email: `${role}@example.com`, role };
      next();
    }
  };

  const stubs = {
    '../config/database-init': dbInitStub,
    './config/database-init': dbInitStub,
    '../middlewares/auth.middleware': authMiddlewareStub,
    './middlewares/auth.middleware': authMiddlewareStub
  };

  try { stubs[path.resolve(__dirname, '..', 'config', 'database-init')] = dbInitStub; } catch (e) {}
  try { stubs[path.resolve(__dirname, '..', 'middlewares', 'auth.middleware')] = authMiddlewareStub; } catch (e) {}

  const app = proxyquire(path.resolve(__dirname, '..', '..', 'index'), stubs);
  return app;
}

module.exports = { buildApp };
