const { expect } = require('chai');
const sinon = require('sinon');

describe('docente.middleware RBAC', () => {
  let docenteMiddleware;

  before(() => {
    // Forzar carga fresca del módulo para evitar mocks en require.cache
    try {
      const resolved = require.resolve('../middlewares/docente.middleware');
      if (require.cache[resolved]) delete require.cache[resolved];
    } catch (e) {
      // ignore if not resolvable
    }
    docenteMiddleware = require('../middlewares/docente.middleware');
  });

  it('debe rechazar acceso si no está autenticado', () => {
    const req = {};
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub().returnsThis() };
    const next = sinon.spy();

    docenteMiddleware(req, res, next);

    expect(res.status.calledWith(401)).to.be.true;
    expect(next.notCalled).to.be.true;
  });

  it('debe rechazar acceso si el rol no es docente', () => {
    const req = { user: { id: 2, email: 'user@example.com', role: 'estudiante' } };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub().returnsThis() };
    const next = sinon.spy();

    docenteMiddleware(req, res, next);

    expect(res.status.calledWith(403)).to.be.true;
    expect(res.json.called).to.be.true;
    expect(next.notCalled).to.be.true;
  });

  it('debe permitir acceso para usuarios con rol docente', () => {
    const req = { user: { id: 3, email: 'docente@example.com', role: 'docente' } };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub().returnsThis() };
    const next = sinon.spy();

    docenteMiddleware(req, res, next);

    expect(next.calledOnce).to.be.true;
  });
});
