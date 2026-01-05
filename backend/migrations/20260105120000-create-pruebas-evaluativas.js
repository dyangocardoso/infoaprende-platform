'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pruebas_evaluativas', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      curso: { type: Sequelize.STRING(255), allowNull: false },
      tipo: { type: Sequelize.ENUM('inicial','por-niveles','por-modulos'), allowNull: false },
      nivel: { type: Sequelize.STRING(128), allowNull: true },
      modulos: { type: Sequelize.JSON, allowNull: true },
      titulo: { type: Sequelize.STRING(512), allowNull: true },
      descripcion: { type: Sequelize.TEXT, allowNull: true },
      preguntas: { type: Sequelize.JSON, allowNull: false, defaultValue: [] },
      criterios_evaluacion: { type: Sequelize.JSON, allowNull: false, defaultValue: [] },
      tiempo_limite_min: { type: Sequelize.INTEGER, allowNull: true },
      creado_en: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      publicado: { type: Sequelize.BOOLEAN, defaultValue: false },
      updated_at: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') }
    });

    await queryInterface.addIndex('pruebas_evaluativas', ['curso']);
    await queryInterface.addIndex('pruebas_evaluativas', ['tipo']);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('pruebas_evaluativas');
  }
};
