'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Fallback si Sequelize no es pasado por el entorno de ejecución
    const Seq = Sequelize || require('sequelize');

    await queryInterface.createTable('usuarios', {
      id: { type: Seq.INTEGER, primaryKey: true, autoIncrement: true },
      nombre: { type: Seq.STRING(255), allowNull: false },
      email: { type: Seq.STRING(255), allowNull: false, unique: true },
      password: { type: Seq.STRING(255), allowNull: false },
      grado: { type: Seq.STRING(100), allowNull: true },
      rol: { type: Seq.ENUM('estudiante','docente','administrador'), allowNull: false, defaultValue: 'estudiante' },
      created_at: { type: Seq.DATE, allowNull: false, defaultValue: Seq.literal('CURRENT_TIMESTAMP') },
      updated_at: { type: Seq.DATE, allowNull: false, defaultValue: Seq.literal('CURRENT_TIMESTAMP') }
    });

    await queryInterface.addIndex('usuarios', ['email'], { unique: true });
    await queryInterface.addIndex('usuarios', ['rol']);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('usuarios');
  }
};
