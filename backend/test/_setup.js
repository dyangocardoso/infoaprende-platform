// Setup que se ejecuta antes de todos los tests: limpia require.cache de módulos app/middlewares/config/models/routes
const path = require('path');

// Forzar bypass del checkDB en tests (evita 503 cuando la inicialización de BD está mockeada)
process.env.SKIP_DB_CHECK = 'true';

// Eliminar referencias antiguas a app, middlewares, config, modelos y rutas para evitar contaminación entre tests
function clearAppAndMiddlewares() {
  Object.keys(require.cache).forEach(k => {
    if (!k) return;
    const nk = k.replace(/\\/g, '/');
    if (nk.includes('/index.js') || nk.endsWith('/index.js')) {
      delete require.cache[k];
    }
    if (nk.includes('/middlewares/') || nk.includes('/test/')) {
      delete require.cache[k];
    }
    if (nk.includes('/config/') || nk.includes('/models/') || nk.includes('/database/') || nk.includes('/routes/')) {
      delete require.cache[k];
    }
  });

  // Limpiar globals que puedan ser establecidos por stubs (ej. global.Plantilla)
  try { delete global.Plantilla; } catch (e) { /* ignore */ }
  try { delete global.sequelize; } catch (e) { /* ignore */ }
}

clearAppAndMiddlewares();

// Hacer que se vuelva a limpiar antes de cada test para máxima aislación
beforeEach(() => clearAppAndMiddlewares());

// También limpiar después de cada test por si algo queda
afterEach(() => clearAppAndMiddlewares());
