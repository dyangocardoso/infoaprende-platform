const request = require('supertest');
const { expect } = require('chai');
const path = require('path');
const proxyquire = require('proxyquire').noCallThru();
const { buildApp } = require('./helpers/buildApp');

let sandbox;

describe('Integración RBAC en preview (solo docente)', () => {
  beforeEach(function () {
    // preparar sandbox y evitar contaminación entre tests
    sandbox = require('sinon').createSandbox();
    process.env.SKIP_MIGRATIONS = 'true';
    process.env.SKIP_SEEDS = 'true';
    try { delete global.sequelize; } catch (e) {}
    try { delete global.Plantilla; } catch (e) {}

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
  });

  afterEach(function () {
    if (sandbox) {
      try { sandbox.restore(); } catch (e) {}
      sandbox = null;
    }
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

  it('debe devolver 403 cuando el usuario no es docente', async () => {
    const app = buildApp({ role: 'estudiante' });

    const waitFor = (predicate, timeout = 2000, interval = 50) => new Promise((resolve, reject) => {
      const start = Date.now();
      (function check() {
        try { if (predicate()) return resolve(true); } catch (e) {}
        if (Date.now() - start > timeout) return reject(new Error('Timeout esperando inicialización de DB mock'));
        setTimeout(check, interval);
      })();
    });
    try { await waitFor(() => !!global.Plantilla, 3000, 50); } catch (e) { console.warn('preview.rbac.test: global.Plantilla no listo'); }

    const res = await request(app)
      .get('/api/docente/plantillas/1/preview')
      .expect(403);

    // DEBUG: mostrar cuerpo real para diagnosticar formato
    /* istanbul ignore next */
    console.log('DEBUG preview.rbac non-docente response:', JSON.stringify(res.body));

    // Aceptar varios formatos comunes de error:
    // - { message: '...' }
    // - { error: { message: '...' } }
    // - { error: '...' }
    const msg = res.body && (
      res.body.message ||
      (res.body.error && (typeof res.body.error === 'string' ? res.body.error : res.body.error.message))
    );
    expect(msg).to.be.a('string');
  });

  it('debe permitir acceso cuando el usuario es docente (control rápido)', async () => {
    const app = buildApp({ role: 'docente' });
    try { await (async function waitFor() { const start = Date.now(); while (!global.Plantilla && Date.now()-start<3000) await new Promise(r=>setTimeout(r,50)); })(); } catch (e) { console.warn('preview.rbac.test: global.Plantilla no listo'); }

    const res = await request(app)
      .get('/api/docente/plantillas/1/preview')
      .expect(200);

    expect(res.headers['content-type']).to.match(/html/);
  });
});
