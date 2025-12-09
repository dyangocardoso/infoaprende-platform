const { expect } = require('chai');
const sinon = require('sinon');

describe('role.middleware.requireRole', () => {
  let requireRole;

  before(() => {
    // Cargar módulo fresco
    try {
      const resolved = require.resolve('../middlewares/role.middleware');
      if (require.cache[resolved]) delete require.cache[resolved];
    } catch (e) {}
    requireRole = require('../middlewares/role.middleware');
  });

  it('debe rechazar si no está autenticado', () => {
    const req = {};
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub().returnsThis() };
    const next = sinon.spy();

    const mw = requireRole('docente');
    mw(req, res, next);

    expect(res.status.calledWith(401)).to.be.true;
    expect(next.notCalled).to.be.true;
  });

  it('debe rechazar si rol distinto a docente', () => {
    const req = { user: { id: 2, role: 'estudiante' } };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub().returnsThis() };
    const next = sinon.spy();

    const mw = requireRole('docente');
    mw(req, res, next);

    expect(res.status.calledWith(403)).to.be.true;
    expect(next.notCalled).to.be.true;
  });

  it('debe permitir si rol es docente', () => {
    const req = { user: { id: 3, role: 'docente' } };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub().returnsThis() };
    const next = sinon.spy();

    const mw = requireRole('docente');
    mw(req, res, next);

    expect(next.calledOnce).to.be.true;
  });

  it('debe permitir lista de roles', () => {
    const req = { user: { id: 4, role: 'administrador' } };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub().returnsThis() };
    const next = sinon.spy();

    const mw = requireRole(['docente', 'administrador']);
    mw(req, res, next);

    expect(next.calledOnce).to.be.true;
  });

  it('debe permitir cuando la propiedad es `rol` (variación en español)', () => {
    const req = { user: { id: 5, rol: 'docente' } };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub().returnsThis() };
    const next = sinon.spy();

    const mw = requireRole('docente');
    mw(req, res, next);

    expect(next.calledOnce).to.be.true;
  });

  it('debe rechazar si el usuario existe pero no tiene rol definido', () => {
    const req = { user: { id: 6 } };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub().returnsThis() };
    const next = sinon.spy();

    const mw = requireRole('docente');
    mw(req, res, next);

    expect(res.status.calledWith(403)).to.be.true;
    expect(next.notCalled).to.be.true;
  });
});
