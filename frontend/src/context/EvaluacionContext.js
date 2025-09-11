import { createContext } from 'react';

// Contexto para el sistema de evaluaciones
export const EvaluacionContext = createContext({
  evaluaciones: {
    quizzesCompletados: [],
    evaluacionesAprobadas: [],
    intentosRealizados: {},
    mejoresPuntuaciones: {},
    tiempoRespuestas: {}
  },
  getPreguntas: () => null,
  completarQuiz: () => null,
  getEstadisticasQuiz: () => null,
  reiniciarEvaluaciones: () => null
});