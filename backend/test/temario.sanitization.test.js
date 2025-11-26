const request = require('supertest');
const { expect } = require('chai');
const path = require('path');

// Helper para insertar mocks en require.cache
function mockModule(relPath, exportsObj) {
  try {
    const resolved = require.resolve(relPath);
    require.cache[resolved] = {
      id: resolved,
      filename: resolved,
      loaded: true,
      exports: exportsObj
    };
  } catch (e) {
    // ignorar
  }
}

let app;
let recordedRef = null;

describe('POST /api/docente/temarios - sanitización de generated_html', function () {
  before(function () {
    // Mock de database-init para exponer un Temario con create que captura la entrada
    recordedRef = { last: null };
    const TemarioMock = {
      create: async (data) => {
        // Simular persistencia y devolver el objeto creado
        recordedRef.last = data;
        return Object.assign({ id: 999 }, data);
      },
      findAll: async () => []
    };

    const dbInitStub = {
      initializeDatabase: async () => {
        try { global.Temario = TemarioMock; } catch (e) {}
        return { Temario: TemarioMock };
      }
    };

    mockModule('../config/database-init', dbInitStub);
    try { mockModule('./config/database-init', dbInitStub); } catch (e) {}
    try { mockModule(path.resolve(__dirname, '..', 'config', 'database-init'), dbInitStub); } catch (e) {}

    // Asegurar que global.Temario exista incluso si SKIP_DB_CHECK evita la llamada a initializeDatabase
    try { global.Temario = TemarioMock; } catch (e) {}

    // Mock de auth middleware para establecer usuario docente
    const authMiddlewareStub = {
      verifyToken: (req, res, next) => { req.user = { id: 42, email: 'docente@test', role: 'docente', rol: 'docente' }; next(); },
      verifyTokenOptional: (req, res, next) => { req.user = { id: 42, email: 'docente@test', role: 'docente', rol: 'docente' }; next(); }
    };

    mockModule('../middlewares/auth.middleware', authMiddlewareStub);
    try { mockModule('./middlewares/auth.middleware', authMiddlewareStub); } catch (e) {}
    try { mockModule(path.resolve(__dirname, '..', 'middlewares', 'auth.middleware'), authMiddlewareStub); } catch (e) {}

    // Forzar recarga de app
    try { const idx = require.resolve('../index'); if (require.cache[idx]) delete require.cache[idx]; } catch (e) {}
    app = require('../index');

    // Exponer el recorded object para pruebas posteriores
    // recordedRef is module-scoped and accessible from the test
  });

  it('debe sanitizar el generated_html antes de persistir', async function () {
    const maliciousHtml = '<div>Safe</div><script>alert(1)</script><img src="x" onerror="alert(2)">';

    const res = await request(app)
      .post('/api/docente/temarios')
      .send({ titulo: 'Prueba', descripcion: 'Desc', nivel: 'inicial', generated_html: maliciousHtml })
      .set('Accept', 'application/json')
      .expect(201);

    expect(res.body).to.have.property('temario');

    // Comprobar que el objeto pasado a create fue sanitizado
    const recorded = recordedRef.last;
    expect(recorded).to.be.an('object');
    expect(recorded).to.have.property('metadata');
    expect(recorded.metadata).to.have.property('generated_html');
    const saved = recorded.metadata.generated_html;

    // No debe contener etiquetas de script ni atributos on* peligrosos
    expect(saved).to.not.match(/<script/i);
    expect(saved).to.not.match(/on\w+=/i);

    // Debe conservar contenido seguro como 'Safe' y la etiqueta img (sin onerror)
    expect(saved).to.match(/Safe/);
    expect(saved).to.match(/<img[^>]*src=\"x\"/);
  });
});
