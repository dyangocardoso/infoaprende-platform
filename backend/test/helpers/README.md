# Helpers de tests - plantillaStub

Propósito

Este archivo documenta el helper `plantillaStub` creado para los tests de preview/RBAC. Centraliza la creación de un modelo `Plantilla` controlado y el manejo temporal de la variable de entorno `SKIP_DB_CHECK` para evitar inicializar la BD real durante la carga de la app en tests.

Archivos relevantes

- `test/helpers/plantillaStub.js` — exporta `setupPlantillaStub(html)` y `teardownPlantillaStub()`.

Funciones exportadas

- `setupPlantillaStub(html)`:
  - Inserta un stub de `config/database-init` en `require.cache` que expone `initializeDatabase()` y un modelo `Plantilla` con `findByPk` controlado.
  - Guarda el valor previo de `SKIP_DB_CHECK` y lo establece a `'true'` para la carga segura de la app.
  - Parámetro `html` (opcional): contenido HTML devuelto por `findByPk` para id `1`.

- `teardownPlantillaStub()`:
  - Restaura `SKIP_DB_CHECK` a su valor anterior y elimina `global.Plantilla`.
  - Limpia entradas en `require.cache` asociadas a `config/database-init`.

Uso recomendado

- Importar y usar en hooks de tests para asegurar aislamiento:

```javascript
const { setupPlantillaStub, teardownPlantillaStub } = require('./helpers/plantillaStub');

beforeEach(() => {
  setupPlantillaStub('<div>contenido de prueba</div>');
  // borrar require.cache de ../index antes de require si es necesario
  try { delete require.cache[require.resolve('../index')]; } catch (e) {}
  app = require('../index');
});

afterEach(() => {
  teardownPlantillaStub();
  try { delete require.cache[require.resolve('../index')]; } catch (e) {}
});
```

Buenas prácticas

- Activar `SKIP_DB_CHECK` solo durante la carga de la app en tests que mockean la BD; el helper lo hace temporalmente.
- Preferir reinstalar el stub en `beforeEach` para evitar condiciones de carrera entre tests.
- No usar el helper en tests que verdaderamente requieren la BD real (migrations/seeders).
- Documentar en cada test por qué se usa el stub si el motivo no es obvio.

Ejecución de tests

- Ejecutar la suite desde `backend/`:

```
npm test
```

Contacto

Mantener este helper pequeño y bien documentado. Para cambios mayores (p. ej. múltiples variantes de `Plantilla` o simulación de recursos), crear helpers adicionales o parametrizar más el existente.
