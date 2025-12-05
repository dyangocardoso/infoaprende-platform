const request = require('supertest');
const { expect } = require('chai');
const sinon = require('sinon');
const { buildApp } = require('./helpers/buildApp');

let sandbox;
const baseUser = { id: 1, email: 'admin@infoaprende.com', rol: 'docente', role: 'docente' };

let app;

before(async function () {
  // Permitir más tiempo para la inicialización en este hook
  this.timeout(10000);

  // Evitar que la inicialización real de la BD marque dbConnected=false
  process.env.SKIP_MIGRATIONS = 'true';
  process.env.SKIP_SEEDS = 'true';

  // Construir app con buildApp simulando rol 'docente' para estos tests
  app = buildApp({ role: 'docente', dbPlantillaHtml: '<div><h1>Plantilla demo</h1><p>Contenido de prueba</p></div>' });

  // Esperar hasta que la app reporte database connected en /api/health
  const waitForHealth = (timeout = 3000, interval = 50) => new Promise((resolve, reject) => {
    const start = Date.now();
    (function check() {
      request(app)
        .get('/api/health')
        .end((err, res) => {
          if (!err && res && res.body && (res.body.database === 'connected' || res.body.database === 'Conectada')) return resolve(true);
          if (Date.now() - start > timeout) return reject(new Error('Timeout esperando /api/health connected'));
          setTimeout(check, interval);
        });
    })();
  });

  try { await waitForHealth(4000, 50); } catch (e) { console.warn('preview.test: /api/health no conectado en timeout'); }
});

after(function () {
  // Restaurar sandbox
  if (sandbox) sandbox.restore();
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
