// Setup que se ejecuta antes de todos los tests: limpia require.cache de módulos app/middlewares
const path = require('path');

// Eliminar referencias antiguas a app y middlewares para evitar contaminación entre tests
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
  });
}

clearAppAndMiddlewares();

// Hacer que se vuelva a limpiar antes de cada test para máxima aislación
beforeEach(() => clearAppAndMiddlewares());
