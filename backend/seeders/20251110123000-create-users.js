'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date();
    const users = [
      {
        nombre: 'Administrador del Sistema',
        email: 'admin@infoaprende.com',
        password: bcrypt.hashSync('admin123', 10),
        grado: null,
        rol: 'administrador',
        created_at: now,
        updated_at: now
      },
      {
        nombre: 'Profesor Demo',
        email: 'profesor@infoaprende.com',
        password: bcrypt.hashSync('profesor123', 10),
        grado: null,
        rol: 'docente',
        created_at: now,
        updated_at: now
      },
      {
        nombre: 'Estudiante Demo',
        email: 'estudiante@infoaprende.com',
        password: bcrypt.hashSync('estudiante123', 10),
        grado: '5to Grado',
        rol: 'estudiante',
        created_at: now,
        updated_at: now
      }
    ];

    await queryInterface.bulkInsert('usuarios', users, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('usuarios', {
      email: ['admin@infoaprende.com', 'profesor@infoaprende.com', 'estudiante@infoaprende.com']
    }, {});
  }
};
