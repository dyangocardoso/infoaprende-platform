import React, { createContext } from 'react';

export const EvaluacionContext = createContext();

export const EvaluacionProvider = ({ children }) => {
  const evaluacionesData = {
    'intro-windows': {
      '1': {
        titulo: "Evaluación - Tema 1",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Cuál es la función del clic derecho?",
            opciones: ["Seleccionar", "Menú contextual", "Arrastrar", "Doble clic"],
            respuestaCorrecta: 1
          },
          {
            id: 2,
            pregunta: "¿Qué teclas copian un elemento?",
            opciones: ["Ctrl+X", "Ctrl+V", "Ctrl+C", "Ctrl+Z"],
            respuestaCorrecta: 2
          }
        ]
      }
    }
  };

  const getPreguntas = (cursoId, temaId) => {
    return evaluacionesData[cursoId]?.[temaId] || null;
  };

  const completarQuiz = () => {
    return { porcentaje: 100, aprobado: true };
  };

  const getEstadisticasQuiz = () => {
    return { mejorPuntuacion: 100 };
  };

  const value = {
    getPreguntas,
    completarQuiz,
    getEstadisticasQuiz
  };

  return (
    <EvaluacionContext.Provider value={value}>
      {children}
    </EvaluacionContext.Provider>
  );
};
