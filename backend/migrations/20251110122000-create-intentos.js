'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('intentos', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      evaluacion_id: { type: Sequelize.INTEGER, allowNull: false, references: { model: 'evaluaciones', key: 'id' }, onDelete: 'CASCADE' },
      alumno_id: { type: Sequelize.INTEGER, allowNull: false, references: { model: 'usuarios', key: 'id' }, onDelete: 'CASCADE' },
      respuestas: { type: Sequelize.JSON, allowNull: true },
      puntuacion: { type: Sequelize.FLOAT, allowNull: true, defaultValue: 0 },
      estado: { type: Sequelize.ENUM('en-progreso','completado'), defaultValue: 'en-progreso' },
      started_at: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      finished_at: { type: Sequelize.DATE, allowNull: true },
      created_at: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updated_at: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') }
    });

    await queryInterface.addIndex('intentos', ['evaluacion_id']);
    await queryInterface.addIndex('intentos', ['alumno_id']);
    await queryInterface.addIndex('intentos', ['finished_at']);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('intentos');
  }
};
