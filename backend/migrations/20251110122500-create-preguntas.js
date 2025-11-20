'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('preguntas', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      evaluacion_id: { type: Sequelize.INTEGER, allowNull: false, references: { model: 'evaluaciones', key: 'id' }, onDelete: 'CASCADE' },
      tipo: { type: Sequelize.ENUM('mcq','tf','short'), allowNull: false, defaultValue: 'mcq' },
      enunciado: { type: Sequelize.TEXT, allowNull: false },
      opciones: { type: Sequelize.JSON, allowNull: true },
      respuesta_correcta: { type: Sequelize.JSON, allowNull: true },
      peso: { type: Sequelize.FLOAT, allowNull: false, defaultValue: 1 },
      orden: { type: Sequelize.INTEGER, allowNull: true },
      created_at: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updated_at: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') }
    });

    await queryInterface.addIndex('preguntas', ['evaluacion_id']);
    await queryInterface.addIndex('preguntas', ['tipo']);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('preguntas');
  }
};
