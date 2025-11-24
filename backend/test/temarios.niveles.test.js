const request = require('supertest');
const { expect } = require('chai');
const path = require('path');

describe('GET /api/docente/temarios/niveles', () => {
  let app;

  before(() => {
    // Insertar stubs en require.cache antes de cargar la app
    const dbInitPath = path.resolve(__dirname, '..', 'config', 'database-init.js');
    require.cache[dbInitPath] = {
      id: dbInitPath,
      filename: dbInitPath,
      loaded: true,
      exports: {
        initializeDatabase: async () => {
          // devolver objetos mínimos necesarios
          return {
            User: {}, Curso: {}, Leccion: {}, ProgresoUsuario: {}, Temario: null, Evaluacion: null, Plantilla: null, Asignacion: null, Intento: null, Pregunta: null, sequelize: {}
          };
        }
      }
    };

    const authPath = path.resolve(__dirname, '..', 'middlewares', 'auth.middleware.js');
    require.cache[authPath] = {
      id: authPath,
      filename: authPath,
      loaded: true,
      exports: {
        verifyToken: (req, res, next) => {
          req.user = { id: 2, role: 'docente' };
          return next();
        }
      }
    };

    const docentePath = path.resolve(__dirname, '..', 'middlewares', 'docente.middleware.js');
    require.cache[docentePath] = {
      id: docentePath,
      filename: docentePath,
      loaded: true,
      exports: (req, res, next) => next()
    };

    // Cargar la app (index.js) después de los stubs
    app = require('../index');
  });

  it('debe devolver la lista de niveles permitidos', async () => {
    const res = await request(app)
      .get('/api/docente/temarios/niveles')
      .expect(200);

    expect(res.body).to.have.property('niveles').that.is.an('array');
    expect(res.body.niveles).to.include.members(['inicial','primario','secundario','tecnico','otros']);
  });
});
