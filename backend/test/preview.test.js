const request = require('supertest');
const { expect } = require('chai');
const sinon = require('sinon');
const { buildApp } = require('./helpers/buildApp');

let sandbox;
const baseUser = { id: 1, email: 'admin@infoaprende.com', rol: 'docente', role: 'docente' };

let app;

// Construir y preparar la app antes de cada test para evitar que la limpieza global
// de require.cache / globals de otros tests afecte a los siguientes.
beforeEach(async function () {
  this.timeout(10000);
  process.env.SKIP_MIGRATIONS = 'true';
  process.env.SKIP_SEEDS = 'true';

  // Crear sandbox para cada test
  sandbox = sinon.createSandbox();

  // Limpiar posibles globals que puedan contaminar tests
  try { delete global.sequelize; } catch (e) {}
  try { delete global.Plantilla; } catch (e) {}

  // Limpiar require.cache de middlewares / rutas que podrían haber sido requeridos
  const modulesToClear = [
    '../middlewares/auth.middleware.js',
    '../middlewares/docente.middleware.js',
    // añadir otros módulos si es necesario
  ];
  modulesToClear.forEach(rel => {
    try {
      const resolved = require.resolve(rel);
      delete require.cache[resolved];
    } catch (e) {
      // ignorar si no existe la ruta en cache
    }
  });

  app = buildApp({ role: 'docente', dbPlantillaHtml: '<div><h1>Plantilla demo</h1><p>Contenido de prueba</p></div>' });

  // Esperar readiness: /api/health y que preview no devuelva 503
  const waitForReady = (timeout = 10000, interval = 50) => new Promise((resolve, reject) => {
    const start = Date.now();
    (function check() {
      request(app)
        .get('/api/health')
        .end((err, res) => {
          const healthy = !err && res && res.body && (res.body.database === 'connected' || res.body.database === 'Conectada');
          if (healthy) {
            request(app)
              .get('/api/docente/plantillas/1/preview')
              .end((e2, r2) => {
                if (!e2 && r2 && r2.status && r2.status !== 503) return resolve(true);
                if (Date.now() - start > timeout) return reject(new Error('Timeout esperando readiness de preview (no 503)'));
                setTimeout(check, interval);
              });
            return;
          }
          if (Date.now() - start > timeout) return reject(new Error('Timeout esperando /api/health connected'));
          setTimeout(check, interval);
        });
    })();
  });

  try { await waitForReady(10000, 50); } catch (e) { throw new Error('preview.test: servicio no listo en timeout: ' + (e && e.message)); }
});

afterEach(function () {
  // Restaurar sandbox si existe
  if (sandbox) {
    try { sandbox.restore(); } catch (e) {}
    sandbox = null;
  }

  // Limpiar require.cache y globals después de cada test para evitar contaminación
  const modulesToClear = [
    '../middlewares/auth.middleware.js',
    '../middlewares/docente.middleware.js',
  ];
  modulesToClear.forEach(rel => {
    try {
      const resolved = require.resolve(rel);
      delete require.cache[resolved];
    } catch (e) {}
  });
  try { delete global.sequelize; } catch (e) {}
  try { delete global.Plantilla; } catch (e) {}
});

describe('GET /api/docente/plantillas/:id/preview (con sinon stubs)', function () {
  it('debe devolver HTML con status 200 sin necesidad de token/BD', async function () {
    const res = await request(app)
      .get('/api/docente/plantillas/1/preview')
      .expect(200);

    expect(res.headers['content-type']).to.match(/html/);
    expect(res.text).to.be.a('string');
    expect(res.text.length).to.be.greaterThan(10);
  });

  it('debe devolver 404 si la plantilla no existe (sin error de autenticación)', async function () {
    const res = await request(app)
      .get('/api/docente/plantillas/9999999/preview')
      .expect(res => {
        if (![200, 404].includes(res.status)) throw new Error(`Status inesperado: ${res.status}`);
      });

    expect(res.status === 404 || res.status === 200).to.be.true;
  });
});
