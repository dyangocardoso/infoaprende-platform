README - Backend InfoAprende

Resumen rápido

Este README indica pasos para configurar y ejecutar el backend (Node + Sequelize + Postgres) y para aplicar las migraciones del módulo docente (temarios/evaluaciones/plantillas/asignaciones/intentos).

Requisitos

- Node.js (>=16)
- PostgreSQL accesible (o ajustar variables para otro RDBMS)
- PowerShell en Windows (comandos indicados)

Variables de entorno (.env)

Crear un `.env` en `backend/` con al menos:

DB_USER=postgres
DB_PASS=postgres
DB_NAME=infoaprende_dev
DB_HOST=127.0.0.1
PORT=4000

Instalación de dependencias

En PowerShell, dentro de `backend`:

npm install
npm install --save-dev sequelize-cli
npm install sequelize pg pg-hstore

Scripts útiles

- npm run dev            # iniciar servidor en modo desarrollo (nodemon)
- npm run start          # iniciar servidor normalmente
- npm run migrate        # ejecutar migraciones (npx sequelize db:migrate)
- npm run migrate:undo   # deshacer todas las migraciones
- npm run migrate:status # ver estado de migraciones
- npm run seed           # ejecutar seeders (si se agregan)

Configurar y ejecutar migraciones

1. Asegurar `.env` con conexión a Postgres.
2. Ejecutar en PowerShell:
   npx sequelize db:migrate

Esto creará las tablas de: `temarios`, `evaluaciones`, `plantillas`, `asignaciones`, `intentos` (entre otras ya existentes).

Archivos relevantes

- models/: modelos Sequelize y algunos modelos Mongoose existentes.
  - temario.sql.model.js
  - evaluacion.sql.model.js
  - plantilla.sql.model.js
  - asignacion.sql.model.js
  - intento.sql.model.js
- migrations/: migraciones generadas para las tablas docentes.
- routes/: rutas nuevas del módulo docente (docente.temarios.routes.js, docente.evaluaciones.routes.js, docente.plantillas.routes.js, docente.reporte.routes.js)
- middlewares/: docente.middleware.js y otros middlewares de auth/admin.
- config/config.js: configuración de sequelize (lee variables de entorno).
- .sequelizerc: rutas usadas por sequelize-cli.

Notas

- Las migraciones usan convenciones de timestamps y FK a la tabla `usuarios` (modelo `User` existente). Asegúrate de que la tabla `usuarios` exista antes de ejecutar migraciones dependientes.
- Si prefieres sincronizar con `sequelize.sync()` en lugar de migraciones, ajusta `config/database-init.js` (actualmente sincroniza modelos existentes para el core del sistema).

Notas sobre migraciones automáticas

- El backend ejecuta migraciones automáticamente al arrancar mediante Umzug (si está configurado Postgres).
- Para omitir la ejecución automática de migraciones durante el arranque (p. ej. en entornos de desarrollo donde prefieres ejecutar manualmente), añade a tu `.env`:

SKIP_MIGRATIONS=true

- Si SKIP_MIGRATIONS=true el servidor seguirá iniciando pero no aplicará migraciones; puedes ejecutar migraciones manualmente con:

npx sequelize db:migrate

- Para omitir también la creación automática de datos iniciales (usuarios, cursos, lecciones) al arrancar, añade a tu `.env`:

SKIP_SEEDS=true

- Si SKIP_SEEDS=true la generación automática de usuarios/cursos/lecciones será omitida; puedes insertar los seeders manualmente con:

npx sequelize db:seed:all

Sección: Testing y estrategia de mocks

### Variables de entorno útiles para tests

- `SKIP_DB_CHECK=true` — (solo en tests) omite el middleware que devuelve 503 si la base de datos no está todavía lista. NO activar en staging/production.
- `SKIP_MIGRATIONS=true` — evita ejecutar migraciones automáticas al arrancar (útil en tests locales rápidos).
- `SKIP_SEEDS=true` — evita ejecutar seeders automáticos al arrancar.

> Nota: la variable `TEST_FORCE_USER` fue eliminada del runtime de la app. Los tests deben inyectar/mockear el auth explícitamente.

### Estrategia recomendada para tests (mocha / sinon / supertest)

1. En el setup de cada test (antes de `require('../index')`):

   - Insertar mocks en `require.cache` para: `./config/database-init`, `./middlewares/auth.middleware`, `./middlewares/docente.middleware`, etc.
   - Borrar del cache las rutas que usan esos middlewares (por ejemplo `require.resolve('../routes/docente.plantillas.routes')`) y la entrada de `require.cache` de `../index`.
   - (Opcional) establecer temporalmente `process.env.SKIP_DB_CHECK = 'true'` antes de `require` para evitar 503 si la BD se mockea.
   - Requerir `../index` para cargar la app con los mocks activos.
   - Restaurar variables de entorno modificadas.

2. Mantener un `test/_setup.js` que limpie `require.cache` antes y después de cada test para evitar contaminación entre pruebas.

3. Evitar modificaciones permanentes en `index.js` para pruebas (prefiere mocks por test).

### Ejemplos concretos de tests

A continuación hay ejemplos reducidos y listos para usar que demuestran la estrategia recomendada: helpers para insertar mocks en `require.cache`, un `test/_setup.js` para aislar pruebas, un test unitario del middleware `docente.middleware` y un test de integración que verifica el RBAC del endpoint de preview.

```javascript
// test/_helpers.js
function mockModule(relPath, exportsObj) {
  try {
    const resolved = require.resolve(relPath);
    require.cache[resolved] = { id: resolved, filename: resolved, loaded: true, exports: exportsObj };
  } catch (e) {
    // si el módulo no existe aún, ignorar
  }
}

function clearModule(relPath) {
  try { delete require.cache[require.resolve(relPath)]; } catch (e) {}
}

module.exports = { mockModule, clearModule };
```

```javascript
// test/_setup.js
// Ejecutar desde mocha con --file test/_setup.js
const { beforeEach, afterEach } = require('mocha');

function clearRequireCache() {
  // limpia módulos cargados dinámicamente que puedan contaminar otros tests
  Object.keys(require.cache).forEach((key) => {
    if (key.includes('/backend/test/') || key.includes('\\backend\\test\\')) return; // conservar el propio test
    delete require.cache[key];
  });
}

beforeEach(() => {
  clearRequireCache();
});

afterEach(() => {
  clearRequireCache();
  // limpiar cualquier global temporal
  try { delete global.Plantilla; } catch (e) {}
});
```

```javascript
// test/unit/docente.middleware.test.js
const { expect } = require('chai');
const sinon = require('sinon');
const docenteMiddleware = require('../middlewares/docente.middleware');

describe('docente.middleware (unit)', () => {
  it('permite acceso cuando req.user.rol === "docente"', (done) => {
    const req = { user: { rol: 'docente' } };
    const res = {};
    const next = sinon.spy();

    docenteMiddleware(req, res, next);
    expect(next.calledOnce).to.be.true;
    done();
  });

  it('deniega acceso cuando no es docente', (done) => {
    const req = { user: { rol: 'alumno' } };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    const next = sinon.spy();

    docenteMiddleware(req, res, next);
    expect(res.status.calledWith(403)).to.be.true;
    expect(next.notCalled).to.be.true;
    done();
  });
});
```

```javascript
// test/integration/preview.rbac.test.js
const request = require('supertest');
const { mockModule, clearModule } = require('./_helpers');

describe('GET /api/docente/plantillas/:id/preview (integration)', () => {
  let app;

  beforeEach(() => {
    // stub de database-init que expone global.Plantilla
    const dbInitStub = {
      initializeDatabase: async () => {
        global.Plantilla = {
          findByPk: async (id) => (id === '1' ? { id: 1, contenido_html: '<p>hola</p>' } : null)
        };
        return { Plantilla: global.Plantilla, sequelize: {} };
      }
    };
    mockModule('../config/database-init', dbInitStub);

    // stub de auth para inyectar usuario distinto según el caso
    const authMock = {
      verifyToken: (req, res, next) => { req.user = { id: 1, rol: 'docente' }; next(); },
      verifyTokenOptional: (req, res, next) => { req.user = { id: 1, rol: 'docente' }; next(); }
    };
    mockModule('../middlewares/auth.middleware', authMock);

    // forzar bypass del chequeo DB solo en este test
    process.env.SKIP_DB_CHECK = 'true';

    // asegurar que index y rutas se recarguen con los mocks
    clearModule('../index');
    clearModule('../routes/docente.plantillas.routes');
    app = require('../index');
  });

  afterEach(() => {
    delete process.env.SKIP_DB_CHECK;
    try { delete global.Plantilla; } catch (e) {}
    clearModule('../index');
  });

  it('devuelve 200 y el HTML para usuario docente', async () => {
    await request(app)
      .get('/api/docente/plantillas/1/preview')
      .expect(200)
      .expect((res) => {
        if (!res.text.includes('<p>hola</p>')) throw new Error('contenido esperado ausente');
      });
  });

  it('devuelve 403 para usuario no docente (mock diferente)', async () => {
    // reinstalar auth mock que devuelve rol distinto
    const authMockAlumno = {
      verifyToken: (req, res, next) => { req.user = { id: 2, rol: 'alumno' }; next(); },
      verifyTokenOptional: (req, res, next) => { req.user = { id: 2, rol: 'alumno' }; next(); }
    };
    mockModule('../middlewares/auth.middleware', authMockAlumno);

    // recargar app para que tome el nuevo mock
    clearModule('../index');
    const app2 = require('../index');

    await request(app2)
      .get('/api/docente/plantillas/1/preview')
      .expect(403);
  });
});
```

> Nota: estos ejemplos están intencionados como plantilla. Adapta rutas relativas y nombres de módulos si tu estructura difiere. Mantén `SKIP_DB_CHECK` activado solo durante la carga de la app en tests que mockean la BD.

### Helpers de tests

Se ha añadido un helper para tests de preview/RBAC en `test/helpers/plantillaStub.js` (documentado en `test/helpers/README.md`). Este helper centraliza la creación de un `global.Plantilla` controlado y el manejo temporal de `SKIP_DB_CHECK` para evitar inicializar la BD real durante la carga de la app en tests.

Uso rápido:

- Importar:

  `const { setupPlantillaStub, teardownPlantillaStub } = require('./test/helpers/plantillaStub');`

- En hooks de test:

  `beforeEach(() => { setupPlantillaStub('<div>contenido prueba</div>'); delete require.cache[require.resolve('../index')]; app = require('../index'); });`

  `afterEach(() => { teardownPlantillaStub(); delete require.cache[require.resolve('../index')]; });`

Recomendación: usar este helper solo en tests que mockean la BD; para pruebas que requieren la BD real no lo emplees.

---

Generado automáticamente para facilitar la puesta en marcha del backend docente.
