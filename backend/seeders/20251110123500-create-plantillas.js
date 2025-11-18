'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date();
    const plantillas = [
      {
        nombre: 'Presentacion Institucional - A4',
        tipo: 'pdf',
        descripcion: 'Plantilla PDF A4 con encabezado institucional y pie de página',
        contenido_html: '<html><body><h1>{{titulo}}</h1><div>{{contenido}}</div></body></html>',
        css: 'body { font-family: Arial, sans-serif; }',
        recursos: JSON.stringify([]),
        version: '1.0',
        created_by: 1,
        created_at: now,
        updated_at: now
      },
      {
        nombre: 'Presentacion Web - Estándar',
        tipo: 'html',
        descripcion: 'Plantilla HTML para previsualización en la web',
        contenido_html: '<div class="inst-header">...cabecera...</div><main>{{contenido}}</main>',
        css: '.inst-header { background:#004080; color:#fff; padding:12px }',
        recursos: JSON.stringify([]),
        version: '1.0',
        created_by: 1,
        created_at: now,
        updated_at: now
      }
    ];

    await queryInterface.bulkInsert('plantillas', plantillas, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('plantillas', { nombre: ['Presentacion Institucional - A4', 'Presentacion Web - Estándar'] }, {});
  }
};
