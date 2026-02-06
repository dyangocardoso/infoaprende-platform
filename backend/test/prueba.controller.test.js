const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');

let app;

describe('PruebaEvaluativa controller', function() {
  before(async function() {
    // Stub del middleware de auth para controlar req.user en tests
    try {
      const auth = require('../middlewares/auth.middleware');
      // Guardar original si existe
      if (!auth.__orig_verifyToken) auth.__orig_verifyToken = auth.verifyToken;
      auth.verifyToken = (req, res, next) => { req.user = { id: 1, role: 'docente', rol: 'docente' }; next(); };
    } catch (e) {
      // ignore
    }

    app = require('../index');
    let attempts = 0;
    while (!global.sequelize && attempts < 20) {
      await new Promise(r => setTimeout(r, 200));
      attempts++;
    }
    if (!global.sequelize) throw new Error('DB no inicializada en tiempo de test');
  });

  after(async function() {
    // limpiar pruebas creadas
    if (global.PruebaEvaluativa) await global.PruebaEvaluativa.destroy({ where: {}, truncate: true });
    // Restaurar middleware original
    try {
      const auth = require('../middlewares/auth.middleware');
      if (auth.__orig_verifyToken) auth.verifyToken = auth.__orig_verifyToken;
    } catch (e) {}
  });

  it('should create a prueba evaluativa when request valid and user is docente', async function() {
    // Obtener modelo User robustamente
    const User = (global.sequelize && global.sequelize.models && global.sequelize.models.Usuario) || global.User;
    // Crear usuario docente (si el modelo expuesto tiene create)
    if (User && typeof User.create === 'function') {
      await User.create({ nombre: 'Docente Test', email: `docente+${Date.now()}@test.local`, password: 'x', rol: 'docente' });
    }

    const agent = request.agent(app);

    const payload = {
      curso: 'paint',
      tipo: 'inicial',
      titulo: 'Prueba Inicial Test',
      preguntas: [ { id: 'q1', tipo: 'multiple-choice', enunciado: '¿2+2?', opciones: ['1','2','3','4'], respuestaCorrecta: 3, puntos: 1 } ],
      criteriosEvaluacion: [ { criterio: 'Teoría', peso: 50 }, { criterio: 'Práctica', peso: 50 } ]
    };

    const res = await agent
      .post('/api/docente/pruebas')
      .set('Content-Type', 'application/json')
      .send(payload);

    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('prueba');
    expect(res.body.prueba).to.have.property('curso', 'paint');
  });

  it('should reject creation if not docente', async function() {
    // Reemplazar stub para simular usuario no-docente
    const auth = require('../middlewares/auth.middleware');
    // replace handler to set estudiante
    auth.verifyToken = (req, res, next) => { req.user = { id: 2, role: 'estudiante', rol: 'estudiante' }; next(); };

    // Reload app so routes use the new middleware function
    // Clear require cache for app and its routes so Express re-mounts with updated middleware
    delete require.cache[require.resolve('../index')];
    try { delete require.cache[require.resolve('../routes/docente.pruebas.routes')]; } catch (e) {}
    app = require('../index');

    // wait for DB init if needed
    let attempts = 0;
    while (!global.sequelize && attempts < 20) {
      await new Promise(r => setTimeout(r, 200));
      attempts++;
    }

    const agent = request.agent(app);
    const payload = { curso: 'paint', tipo: 'inicial', preguntas: [], criteriosEvaluacion: [ { criterio: 'c', peso: 100 } ] };
    const res = await agent.post('/api/docente/pruebas').set('Content-Type', 'application/json').send(payload);
    expect(res.status).to.equal(403);
  });

});
