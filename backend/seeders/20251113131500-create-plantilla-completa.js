'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date();

    const recursos = [
      {
        tipo: 'css',
        url: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css'
      },
      {
        tipo: 'inline-css',
        content: 'body { font-family: Arial, Helvetica, sans-serif; margin: 24px; } .header { background:#004080; color:#fff; padding:12px; text-align:center; } .content { margin-top:16px; }'
      },
      {
        tipo: 'partial',
        name: 'header',
        content: '<div class="header"><h1>{{titulo}}</h1><p>Institución - Curso ejemplo</p></div>'
      }
    ];

    await queryInterface.bulkInsert('plantillas', [
      {
        nombre: 'Plantilla Completa - CDN + Partials',
        tipo: 'pdf',
        descripcion: 'Plantilla que incluye CSS externo, CSS inline y partials para exportación PDF de prueba',
        contenido_html: '<div>{{> header}}</div><div class="content"><h2>Introducción</h2><div>{{contenido}}</div></div>',
        css: '',
        recursos: JSON.stringify(recursos),
        version: '1.0',
        created_by: 1,
        created_at: now,
        updated_at: now
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('plantillas', { nombre: 'Plantilla Completa - CDN + Partials' }, {});
  }
};
