'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('evaluaciones', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      titulo: { type: Sequelize.STRING(512), allowNull: false },
      nivel: { type: Sequelize.ENUM('inicial','primario','secundario','tecnico','otros'), allowNull: false },
      descripcion: { type: Sequelize.TEXT, allowNull: true },
      preguntas: { type: Sequelize.JSON, allowNull: true },
      tiempo_limite_min: { type: Sequelize.INTEGER, allowNull: true },
      ponderacion_total: { type: Sequelize.FLOAT, allowNull: true },
      autor_id: { type: Sequelize.INTEGER, allowNull: false, references: { model: 'usuarios', key: 'id' }, onDelete: 'CASCADE' },
      estado: { type: Sequelize.ENUM('borrador','publicada'), defaultValue: 'borrador' },
      plantilla_id: { type: Sequelize.INTEGER, allowNull: true },
      created_at: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updated_at: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') }
    });

    await queryInterface.addIndex('evaluaciones', ['autor_id']);
    await queryInterface.addIndex('evaluaciones', ['nivel']);
    await queryInterface.addIndex('evaluaciones', ['estado']);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('evaluaciones');
  }
};
