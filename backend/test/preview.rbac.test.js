const request = require('supertest');
const { expect } = require('chai');
const path = require('path');
const proxyquire = require('proxyquire').noCallThru();
const { buildApp } = require('./helpers/buildApp');

describe('Integración RBAC en preview (solo docente)', () => {
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

    expect(res.body).to.have.property('message').that.is.a('string');
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
