// Helper para tests: stub de modelo Plantilla y gestión de variable global.Plantilla
// Uso: const plantillaStub = require('./plantillaStub');
// const plantillaModel = plantillaStub.install({ id: 1, contenido_html: '...' });
// ... ejecutar tests ...
// plantillaStub.uninstall();

module.exports = {
  // Crea e instala un modelo Plantilla minimal y devuelve el objeto del modelo
  // overrides: { id, contenido_html, recursos, css, findAll }
  install(overrides = {}) {
    const idValue = overrides.id || 1;
    const plantillaModel = {
      findByPk: async (id) => {
        if (String(id) === String(idValue)) {
          return {
            id: idValue,
            contenido_html: overrides.contenido_html || '<div><h1>Plantilla demo</h1><p>Contenido de prueba</p></div>',
            recursos: JSON.stringify(overrides.recursos || []),
            css: overrides.css || ''
          };
        }
        return null;
      },
      findAll: async () => (typeof overrides.findAll !== 'undefined' ? overrides.findAll : [])
    };

    try {
      global.Plantilla = plantillaModel;
    } catch (e) {
      // En entornos donde global no se pueda modificar, ignorar
    }

    // Señal para evitar checks de BD reales en algunos tests/configs
    process.env.SKIP_DB_CHECK = 'true';

    return plantillaModel;
  },

  // Limpia el stub instalado
  uninstall() {
    try {
      if (global && global.Plantilla) delete global.Plantilla;
    } catch (e) { /* ignore */ }
    try { delete process.env.SKIP_DB_CHECK; } catch (e) { /* ignore */ }
  }
};