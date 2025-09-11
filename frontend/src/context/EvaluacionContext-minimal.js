import React, { createContext } from 'react';

export const EvaluacionContext = createContext();

export const EvaluacionProvider = ({ children }) => {
  // Datos básicos de evaluaciones
  const evaluacionesData = {
    'intro-windows': {
      '1': {
        titulo: "Evaluación - Elementos básicos",
        descripcion: "Evalúa conocimientos básicos de Windows",
        duracion: 15,
        preguntas: [
          {
            id: 1,
            pregunta: "¿Cuál es la función del clic derecho?",
            opciones: ["Seleccionar", "Menú contextual", "Arrastrar", "Doble clic"],
            respuestaCorrecta: 1,
            explicacion: "El clic derecho abre el menú contextual."
          },
          {
            id: 2,
            pregunta: "¿Qué teclas copian un elemento?",
            opciones: ["Ctrl+X", "Ctrl+V", "Ctrl+C", "Ctrl+Z"],
            respuestaCorrecta: 2,
            explicacion: "Ctrl+C copia elementos."
          },
          {
            id: 3,
            pregunta: "¿Cómo maximizar ventana?",
            opciones: ["Doble clic barra título", "Botón X", "Arrastrar", "Alt+F4"],
            respuestaCorrecta: 0,
            explicacion: "Doble clic en barra de título maximiza."
          },
          {
            id: 4,
            pregunta: "¿Para qué sirve Teclado en Pantalla?",
            opciones: ["Decorar", "Escribir sin teclado físico", "Acelerar", "Bloquear"],
            respuestaCorrecta: 1,
            explicacion: "Permite escribir sin teclado físico."
          },
          {
            id: 5,
            pregunta: "¿Qué hace la tecla Windows?",
            opciones: ["Cerrar", "Abrir menú Inicio", "Minimizar", "Explorador"],
            respuestaCorrecta: 1,
            explicacion: "Abre el menú Inicio."
          }
        ]
      },
      '2': {
        titulo: "Evaluación - Explorador",
        descripcion: "Gestión de archivos",
        duracion: 15,
        preguntas: [
          {
            id: 1,
            pregunta: "¿Función del panel navegación?",
            opciones: ["Propiedades", "Navegar carpetas", "Multimedia", "Editar"],
            respuestaCorrecta: 1,
            explicacion: "Panel navegación para carpetas."
          },
          {
            id: 2,
            pregunta: "¿Atajo Explorador Windows?",
            opciones: ["Ctrl+E", "Windows+E", "Alt+E", "Shift+E"],
            respuestaCorrecta: 1,
            explicacion: "Windows+E abre Explorador."
          },
          {
            id: 3,
            pregunta: "¿Diferencia Cortar vs Copiar?",
            opciones: ["No hay", "Cortar elimina original", "Copiar más rápido", "Solo carpetas"],
            respuestaCorrecta: 1,
            explicacion: "Cortar mueve, Copiar duplica."
          },
          {
            id: 4,
            pregunta: "¿Qué muestra vista Detalles?",
            opciones: ["Solo nombres", "Nombre, tamaño, fecha", "Íconos grandes", "Solo carpetas"],
            respuestaCorrecta: 1,
            explicacion: "Vista Detalles muestra información completa."
          },
          {
            id: 5,
            pregunta: "¿Cómo buscar archivos?",
            opciones: ["Solo manual", "Cuadro búsqueda", "Reiniciar", "Solo menú Inicio"],
            respuestaCorrecta: 1,
            explicacion: "Usar cuadro de búsqueda."
          }
        ]
      }
    }
  };

  const getPreguntas = (cursoId, temaId) => {
    return evaluacionesData[cursoId]?.[temaId] || null;
  };

  const completarQuiz = (cursoId, temaId, respuestas, tiempoTotal) => {
    const evaluacion = evaluacionesData[cursoId]?.[temaId];
    if (!evaluacion) return null;

    const correctas = respuestas.filter((r, i) => 
      r === evaluacion.preguntas[i].respuestaCorrecta
    ).length;

    const porcentaje = Math.round((correctas / evaluacion.preguntas.length) * 100);
    
    const resultado = {
      fecha: new Date().toISOString(),
      respuestasCorrectas: correctas,
      totalPreguntas: evaluacion.preguntas.length,
      porcentaje,
      tiempoTotal,
      aprobado: porcentaje >= 70
    };

    const key = `quiz_${cursoId}_${temaId}`;
    const historial = JSON.parse(localStorage.getItem(key) || '[]');
    historial.push(resultado);
    localStorage.setItem(key, JSON.stringify(historial));

    return resultado;
  };

  const getEstadisticasQuiz = (cursoId, temaId) => {
    const key = `quiz_${cursoId}_${temaId}`;
    const historial = JSON.parse(localStorage.getItem(key) || '[]');
    
    if (historial.length === 0) return null;

    return {
      mejorPuntuacion: Math.max(...historial.map(h => h.porcentaje)),
      intentos: historial.length,
      aprobados: historial.filter(h => h.aprobado).length
    };
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
