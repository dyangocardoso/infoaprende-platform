Seeders incluidos:

- 20251110123000-create-users.js : Crea 3 usuarios de ejemplo (admin, docente, estudiante).
- 20251110123500-create-plantillas.js : Inserta 2 plantillas de ejemplo (PDF y HTML).

Cómo ejecutar:
1. Configurar `.env` con conexión a Postgres.
2. Ejecutar migraciones:
   npx sequelize db:migrate
3. Ejecutar seeders:
   npx sequelize db:seed:all

Nota: los seeders usan `created_by: 1` y asumen que el usuario administrador creado por el seeder de usuarios tiene id=1; si la tabla `usuarios` ya tenía datos, ajustar manualmente el `created_by` en la tabla `plantillas` o el seeder.
