'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date();

    // Crear un temario de ejemplo asociado al profesor con id=2
    await queryInterface.bulkInsert('temarios', [
      {
        titulo: 'Temario: Introducción a la Programación',
        nivel: 'secundario',
        descripcion: 'Conceptos básicos de programación y algoritmos',
        unidades: JSON.stringify([
          { titulo: 'Unidad 1: Algoritmos', objetivos: ['Entender algoritmos', 'Resolver problemas simples'], recursos: [] },
          { titulo: 'Unidad 2: Variables y tipos', objetivos: ['Usar variables', 'Tipos de datos'], recursos: [] }
        ]),
        autor_id: 2,
        estado: 'publicado',
        metadata: JSON.stringify({ visitas: 0 }),
        created_at: now,
        updated_at: now
      }
    ], {});

    // Crear una evaluación de ejemplo
    await queryInterface.bulkInsert('evaluaciones', [
      {
        titulo: 'Evaluación: Quiz básico de programación',
        nivel: 'secundario',
        descripcion: 'Pequeño cuestionario MCQ y TF',
        preguntas: JSON.stringify([]),
        tiempo_limite_min: 15,
        ponderacion_total: 10,
        autor_id: 2,
        estado: 'publicada',
        plantilla_id: 1,
        created_at: now,
        updated_at: now
      }
    ], {});

    // Añadir preguntas a la tabla preguntas
    await queryInterface.bulkInsert('preguntas', [
      {
        evaluacion_id: 1,
        tipo: 'mcq',
        enunciado: '¿Qué es un algoritmo?',
        opciones: JSON.stringify([{ texto: 'Conjunto de pasos', valor: 'a' }, { texto: 'Lenguaje de programación', valor: 'b' }]),
        respuesta_correcta: JSON.stringify('a'),
        peso: 1,
        orden: 1,
        created_at: now,
        updated_at: now
      },
      {
        evaluacion_id: 1,
        tipo: 'tf',
        enunciado: 'JavaScript es un lenguaje de programación compilado.',
        opciones: JSON.stringify([]),
        respuesta_correcta: JSON.stringify(false),
        peso: 1,
        orden: 2,
        created_at: now,
        updated_at: now
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('preguntas', { evaluacion_id: 1 }, {});
    await queryInterface.bulkDelete('evaluaciones', { autor_id: 2, titulo: 'Evaluación: Quiz básico de programación' }, {});
    await queryInterface.bulkDelete('temarios', { autor_id: 2, titulo: 'Temario: Introducción a la Programación' }, {});
  }
};
