'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('temarios', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      titulo: { type: Sequelize.STRING(512), allowNull: false },
      nivel: { type: Sequelize.ENUM('inicial','primario','secundario','tecnico','otros'), allowNull: false },
      descripcion: { type: Sequelize.TEXT, allowNull: true },
      unidades: { type: Sequelize.JSON, allowNull: true },
      autor_id: { type: Sequelize.INTEGER, allowNull: false, references: { model: 'usuarios', key: 'id' }, onDelete: 'CASCADE' },
      estado: { type: Sequelize.ENUM('borrador','publicado'), defaultValue: 'borrador' },
      metadata: { type: Sequelize.JSON, allowNull: true },
      created_at: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updated_at: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') }
    });

    await queryInterface.addIndex('temarios', ['autor_id']);
    await queryInterface.addIndex('temarios', ['nivel']);
    await queryInterface.addIndex('temarios', ['estado']);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('temarios');
  }
};
