'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('asignaciones', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      evaluacion_id: { type: Sequelize.INTEGER, allowNull: false, references: { model: 'evaluaciones', key: 'id' }, onDelete: 'CASCADE' },
      curso_id: { type: Sequelize.INTEGER, allowNull: true },
      grupo_id: { type: Sequelize.STRING(255), allowNull: true },
      fecha_asignacion: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      fecha_cierre: { type: Sequelize.DATE, allowNull: true },
      publicado_por: { type: Sequelize.INTEGER, allowNull: false, references: { model: 'usuarios', key: 'id' }, onDelete: 'SET NULL' },
      condiciones: { type: Sequelize.JSON, allowNull: true },
      created_at: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updated_at: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') }
    });

    await queryInterface.addIndex('asignaciones', ['evaluacion_id']);
    await queryInterface.addIndex('asignaciones', ['curso_id', 'grupo_id']);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('asignaciones');
  }
};
