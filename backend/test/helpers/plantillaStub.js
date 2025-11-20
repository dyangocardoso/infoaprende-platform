// Helper para tests: stub de Plantilla y control de SKIP_DB_CHECK
// Este stub evita inicialización real de BD y provee un modelo Plantilla controlado
// para tests de preview/RBAC. Uso:
// const { setupPlantillaStub, teardownPlantillaStub } = require('./helpers/plantillaStub');
// beforeEach(() => setupPlantillaStub());
// afterEach(() => teardownPlantillaStub());

function setupPlantillaStub(html = '<p>contenido stub</p>') {
  // instalar stub en require.cache para config/database-init
  const dbInitStub = {
    initializeDatabase: async () => {
      const plantillaModel = {
        findByPk: async (id) => (String(id) === '1' || id === 1 ? { id: 1, contenido_html: html } : null)
      };
      const dummy = { sync: async () => {} };
      try { global.Plantilla = plantillaModel; } catch (e) { /* ignore */ }
      return { Plantilla: plantillaModel, User: dummy, Curso: dummy, Leccion: dummy, ProgresoUsuario: dummy, sequelize: dummy };
    }
  };

  // Intentar varios paths/resolutions para cubrir distintas formas de require usadas en tests
  const candidates = [
    '../../config/database-init',
    '../config/database-init',
    '../../config/database-init.js',
    '../config/database-init.js',
    // absolute resolves based on project root
    require('path').resolve(process.cwd(), 'config', 'database-init'),
    require('path').resolve(process.cwd(), 'config', 'database-init.js')
  ];

  candidates.forEach((p) => {
    try {
      const resolved = require.resolve(p);
      // borrar previa entrada si existe
      try { delete require.cache[resolved]; } catch (e) {}
      require.cache[resolved] = { id: resolved, filename: resolved, loaded: true, exports: dbInitStub };
    } catch (e) {
      // ignore resolution errors
    }
  });

  // Forzar bypass del chequeo DB solo durante la carga de la app
  process.env.__PLANTILLA_STUB_SKIP_DB_CHECK = process.env.SKIP_DB_CHECK; // guardar prev
  process.env.SKIP_DB_CHECK = 'true';
}

function teardownPlantillaStub() {
  try {
    if (typeof process.env.__PLANTILLA_STUB_SKIP_DB_CHECK !== 'undefined') {
      process.env.SKIP_DB_CHECK = process.env.__PLANTILLA_STUB_SKIP_DB_CHECK;
      delete process.env.__PLANTILLA_STUB_SKIP_DB_CHECK;
    } else {
      try { delete process.env.SKIP_DB_CHECK; } catch (e) {}
    }
  } catch (e) {}
  try { delete global.Plantilla; } catch (e) {}

  // intentar limpiar entradas en require.cache para database-init si existen
  const candidates = [
    '../../config/database-init',
    '../config/database-init',
    '../../config/database-init.js',
    '../config/database-init.js',
    require('path').resolve(process.cwd(), 'config', 'database-init'),
    require('path').resolve(process.cwd(), 'config', 'database-init.js')
  ];
  candidates.forEach((p) => {
    try { const r = require.resolve(p); if (require.cache[r]) delete require.cache[r]; } catch (e) {}
  });
}

module.exports = { setupPlantillaStub, teardownPlantillaStub };
