module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Esta migración estaba vacía y provocaba error 'Could not find migration method: up'.
    // Por ahora dejamos un noop (sin operaciones) para que la secuencia de migraciones pueda continuar.
    // Si es necesario aplicar cambios reales al tipo ENUM de 'Temarios.nivel', crear una migración específica.
    return Promise.resolve();
  },

  down: async (queryInterface, Sequelize) => {
    // No-op. Revertir cambios de ENUM requiere recreación del tipo en Postgres; manejar en migración específica si es necesario.
    return Promise.resolve();
  }
};