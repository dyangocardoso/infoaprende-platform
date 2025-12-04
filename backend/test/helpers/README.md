Helpers de tests del backend

plantillaStub.js
----------------

Proporciona un stub simple para el modelo `Plantilla` que se instala en `global.Plantilla`.

API:
- install(overrides): instala el stub y devuelve el objeto del modelo. `overrides` permite cambiar `id`, `contenido_html`, `recursos`, `css`, y `findAll`.
- uninstall(): elimina el stub de `global` y limpia `SKIP_DB_CHECK`.

Ejemplo de uso en tests (Mocha):

const plantillaStub = require('./plantillaStub');

before(() => {
  plantillaStub.install({ id: 1, contenido_html: '<div>...</div>' });
  // cargar app / mocks...
});

after(() => {
  plantillaStub.uninstall();
});

Notas:
- El helper también establece `process.env.SKIP_DB_CHECK = 'true'` para evitar verificaciones que intenten conectarse a la BD real.
- Si necesitas más campos o comportamientos para Plantilla, extiende `overrides` con funciones como `findByPk` o `findAll`.
