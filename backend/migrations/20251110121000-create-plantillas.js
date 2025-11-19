'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('plantillas', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      nombre: { type: Sequelize.STRING(255), allowNull: false },
      tipo: { type: Sequelize.ENUM('pdf','html'), allowNull: false },
      descripcion: { type: Sequelize.TEXT, allowNull: true },
      contenido_html: { type: Sequelize.TEXT, allowNull: true },
      css: { type: Sequelize.TEXT, allowNull: true },
      recursos: { type: Sequelize.JSON, allowNull: true },
      version: { type: Sequelize.STRING(50), defaultValue: '1.0' },
      created_by: { type: Sequelize.INTEGER, allowNull: true },
      created_at: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updated_at: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') }
    });

    await queryInterface.addIndex('plantillas', ['nombre']);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('plantillas');
  }
};
