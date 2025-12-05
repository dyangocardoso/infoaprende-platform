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

Notas sobre PRs recientes: separación CI vs tests
-----------------------------------------------

Para mantener PRs enfocados y facilitar revisiones, recientemente se separaron los cambios de CI y los cambios de tests en ramas distintas:

- PR/branch de CI: `ci/downgrade-upload-artifact` (PR #2)
  - Contiene únicamente la modificación del workflow E2E (`.github/workflows/e2e.yml`) para usar `actions/upload-artifact@v3` y eliminar advertencias en GitHub Actions.
  - Revisión: comprobar ejecución del workflow E2E desde el PR y que los artefactos se suban sin advertencias.

- PR/branch de tests: `test/plantilla-stub` (PR #3)
  - Añade un helper de tests `backend/test/helpers/plantillaStub.js`, documentación en `backend/test/helpers/README.md` y la integración en `backend/test/preview.test.js` (se resolvieron conflictos y se cherry-pickearon los commits correspondientes).
  - Revisión: revisar el helper y ejecutar los tests del backend.

Ubicación del helper de tests
- `backend/test/helpers/plantillaStub.js` — instala un stub en `global.Plantilla` para evitar dependencias reales de BD en tests de preview.
- Documentación: `backend/test/helpers/README.md`.

Comandos útiles
- Ejecutar toda la suite de tests del backend:
  npm --prefix backend test
- Ejecutar sólo el test de preview:
  npm --prefix backend test -- backend/test/preview.test.js
- Para probar localmente la rama de tests:
  git fetch origin && git checkout test/plantilla-stub && npm --prefix backend test

Notas finales
- No se han cerrado los PRs; ambos están abiertos para revisión y la conversación en cada PR contiene notas sobre la separación de cambios y la resolución de conflictos.
- Si quieres, puedo añadir esta nota también en el README principal del repo o commitearla y crear un PR desde la rama que prefieras. Indica si deseas que haga commit y push y a qué rama.

Problemas comunes

- Error de conexión: verificar `DB_HOST`, `DB_USER`, `DB_PASS`, y que Postgres acepte conexiones desde la máquina.
- Permisos: el usuario de la BD necesita permisos para crear tablas.

Si quieres, puedo:
- Añadir seeders iniciales para datos de ejemplo (admin/docente/estudiante).
- Añadir instrucciones para CI o despliegue.

---
Generado automáticamente para facilitar la puesta en marcha del backend docente.
