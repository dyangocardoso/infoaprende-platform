// Setup que se ejecuta antes de todos los tests: limpia require.cache de módulos app/middlewares
const path = require('path');

// Eliminar referencias antiguas a app y middlewares para evitar contaminación entre tests
function clearAppAndMiddlewares() {
  Object.keys(require.cache).forEach(k => {
    if (!k) return;
    const nk = k.replace(/\\/g, '/');
    // Borrar solo entradas relacionadas con la app o middlewares (no borrar archivos de test/helpers)
    if (nk.includes('/index.js') || nk.endsWith('/index.js') || nk.includes('/middlewares/')) {
      try { delete require.cache[k]; } catch (e) { /* ignore */ }
    }
  });
}

clearAppAndMiddlewares();

// Hacer que se vuelva a limpiar antes de cada test para máxima aislación
beforeEach(() => clearAppAndMiddlewares());

// Además, limpiar variables globales usadas por tests cuando terminen
afterEach(() => {
  try { delete global.Plantilla; } catch (e) { /* ignore */ }
  try { delete global.User; } catch (e) { /* ignore */ }
  try { delete global.Curso; } catch (e) { /* ignore */ }
  try { delete global.Leccion; } catch (e) { /* ignore */ }
  try { delete global.ProgresoUsuario; } catch (e) { /* ignore */ }
});
