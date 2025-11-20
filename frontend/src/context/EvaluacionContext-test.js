import React, { createContext, useState } from 'react';

export const EvaluacionContext = createContext();

export const EvaluacionProvider = ({ children }) => {
  const [evaluaciones] = useState({});
  const [estadisticas] = useState({});

  // Datos de evaluaciones por curso y tema
  const evaluacionesData = {
    'intro-windows': {
      '1': {
        titulo: "Evaluación - Elementos y funciones básicas",
        descripcion: "Evalúa tus conocimientos sobre los elementos básicos de Windows",
        duracion: 15,
        preguntas: [
          {
            id: 1,
            pregunta: "¿Cuál es la función principal del clic derecho del ratón?",
            opciones: [
              "Seleccionar elementos",
              "Abrir menú contextual",
              "Arrastrar elementos",
              "Hacer doble clic"
            ],
            respuestaCorrecta: 1,
            explicacion: "El clic derecho abre el menú contextual, que muestra opciones específicas según el elemento seleccionado."
          },
          {
            id: 2,
            pregunta: "¿Qué combinación de teclas permite copiar un elemento seleccionado?",
            opciones: [
              "Ctrl + X",
              "Ctrl + V",
              "Ctrl + C",
              "Ctrl + Z"
            ],
            respuestaCorrecta: 2,
            explicacion: "Ctrl + C es el atajo universal para copiar elementos seleccionados."
          }
        ]
      }
    }
  };

  // Obtener preguntas de un tema específico
  const getPreguntas = (cursoId, temaId) => {
    return evaluacionesData[cursoId]?.[temaId] || null;
  };

  const value = {
    evaluaciones,
    estadisticas,
    getPreguntas
  };

  return (
    <EvaluacionContext.Provider value={value}>
      {children}
    </EvaluacionContext.Provider>
  );
};
