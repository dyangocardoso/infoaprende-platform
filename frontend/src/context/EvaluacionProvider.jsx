import React, { useState, useEffect } from 'react';
import { useProgreso } from '../hooks/useProgreso';
import { EvaluacionContext } from './EvaluacionContext';
import evaluacionPaint3DTema1 from '../data/evaluaciones/paint-3d/tema-01.js';
import evaluacionPaint3DTema2 from '../data/evaluaciones/paint-3d/tema-02.js';
import evaluacionPaint3DTema3 from '../data/evaluaciones/paint-3d/tema-03.js';
import evaluacionPaint3DTema4 from '../data/evaluaciones/paint-3d/tema-04.js';
import evaluacionPaint3DTema5 from '../data/evaluaciones/paint-3d/tema-05.js';
import evaluacionNocionesTema1 from '../data/evaluaciones/nociones-computador/tema-01.js';
import evaluacionNocionesTema2 from '../data/evaluaciones/nociones-computador/tema-02.js';
import evaluacionNocionesTema3 from '../data/evaluaciones/nociones-computador/tema-03.js';
import evaluacionIntroInfTema1 from '../data/evaluaciones/intro-informatica/tema-01.js';
import evaluacionIntroInfTema2 from '../data/evaluaciones/intro-informatica/tema-02.js';
import evaluacionIntroInfTema3 from '../data/evaluaciones/intro-informatica/tema-03.js';
import evaluacionIntroInfTema4 from '../data/evaluaciones/intro-informatica/tema-04.js';
import evaluacionIntroInfTema5 from '../data/evaluaciones/intro-informatica/tema-05.js';
import evaluacionIntroInfTema6 from '../data/evaluaciones/intro-informatica/tema-06.js';
import evaluacionIntroInfTema7 from '../data/evaluaciones/intro-informatica/tema-07.js';
import evaluacionIntroWinTema1 from '../data/evaluaciones/intro-windows/tema-01.js';
import evaluacionIntroWinTema2 from '../data/evaluaciones/intro-windows/tema-02.js';
import evaluacionIntroWinTema3 from '../data/evaluaciones/intro-windows/tema-03.js';
import evaluacionIntroWinTema4 from '../data/evaluaciones/intro-windows/tema-04.js';
import evaluacionIntroWinTema5 from '../data/evaluaciones/intro-windows/tema-05.js';
import evaluacionIntroWinTema6 from '../data/evaluaciones/intro-windows/tema-06.js';
import evaluacionIntroWinTema7 from '../data/evaluaciones/intro-windows/tema-07.js';
import evaluacionIntroWinTema8 from '../data/evaluaciones/intro-windows/tema-08.js';
import evaluacionPaintTema1 from '../data/evaluaciones/paint/tema-01.js';
import evaluacionPaintTema2 from '../data/evaluaciones/paint/tema-02.js';
import pptTema01 from '../data/evaluaciones/powerpoint/tema-01.js';
import pptTema02 from '../data/evaluaciones/powerpoint/tema-02.js';
import pptTema03 from '../data/evaluaciones/powerpoint/tema-03.js';
import pptTema04 from '../data/evaluaciones/powerpoint/tema-04.js';
import pptTema05 from '../data/evaluaciones/powerpoint/tema-05.js';
import pptTema06 from '../data/evaluaciones/powerpoint/tema-06.js';
import pptTema07 from '../data/evaluaciones/powerpoint/tema-07.js';
import wordTema01 from '../data/evaluaciones/word/tema-01.js';
import wordTema02 from '../data/evaluaciones/word/tema-02.js';
import wordTema03 from '../data/evaluaciones/word/tema-03.js';
import wordTema04 from '../data/evaluaciones/word/tema-04.js';
import wordTema05 from '../data/evaluaciones/word/tema-05.js';
import wordTema06 from '../data/evaluaciones/word/tema-06.js';
import wordTema07 from '../data/evaluaciones/word/tema-07.js';
import wordTema08 from '../data/evaluaciones/word/tema-08.js';
import excelTema01 from '../data/evaluaciones/excel/tema-01.js';
import excelTema02 from '../data/evaluaciones/excel/tema-02.js';
import excelTema03 from '../data/evaluaciones/excel/tema-03.js';
import excelTema04 from '../data/evaluaciones/excel/tema-04.js';
import excelTema05 from '../data/evaluaciones/excel/tema-05.js';
import excelTema06 from '../data/evaluaciones/excel/tema-06.js';
import excelTema07 from '../data/evaluaciones/excel/tema-07.js';
import excelTema08 from '../data/evaluaciones/excel/tema-08.js';
import excelTema09 from '../data/evaluaciones/excel/tema-09.js';
import excelTema10 from '../data/evaluaciones/excel/tema-10.js';
import excelTema11 from '../data/evaluaciones/excel/tema-11.js';
import accessTema01 from '../data/evaluaciones/access/tema-01.js';
import accessTema02 from '../data/evaluaciones/access/tema-02.js';
import accessTema03 from '../data/evaluaciones/access/tema-03.js';
import accessTema04 from '../data/evaluaciones/access/tema-04.js';
import accessTema05 from '../data/evaluaciones/access/tema-05.js';
import accessTema06 from '../data/evaluaciones/access/tema-06.js';
import accessTema07 from '../data/evaluaciones/access/tema-07.js';
import accessTema08 from '../data/evaluaciones/access/tema-08.js';
import accessTema09 from '../data/evaluaciones/access/tema-09.js';
import redesTema01 from '../data/evaluaciones/redes/tema-01.js';
import redesTema02 from '../data/evaluaciones/redes/tema-02.js';
import redesTema03 from '../data/evaluaciones/redes/tema-03.js';
import redesTema04 from '../data/evaluaciones/redes/tema-04.js';
import redesTema05 from '../data/evaluaciones/redes/tema-05.js';
import redesTema06 from '../data/evaluaciones/redes/tema-06.js';
import redesTema07 from '../data/evaluaciones/redes/tema-07.js';
import redesTema08 from '../data/evaluaciones/redes/tema-08.js';
import redesTema09 from '../data/evaluaciones/redes/tema-09.js';
import ciberSegTema01 from '../data/evaluaciones/ciberseguridad/tema-01.js';
import ciberSegTema02 from '../data/evaluaciones/ciberseguridad/tema-02.js';
import ciberSegTema03 from '../data/evaluaciones/ciberseguridad/tema-03.js';
import ciberSegTema04 from '../data/evaluaciones/ciberseguridad/tema-04.js';
import ciberSegTema05 from '../data/evaluaciones/ciberseguridad/tema-05.js';
import ciberSegTema06 from '../data/evaluaciones/ciberseguridad/tema-06.js';
import ciberSegTema07 from '../data/evaluaciones/ciberseguridad/tema-07.js';
import ciberSegTema08 from '../data/evaluaciones/ciberseguridad/tema-08.js';

export default function EvaluacionProvider({ children }) {
  const { completarLeccion } = useProgreso();
  const [evaluaciones, setEvaluaciones] = useState({
    quizzesCompletados: [],
    evaluacionesAprobadas: [],
    intentosRealizados: {},
    mejoresPuntuaciones: {},
    tiempoRespuestas: {}
  });

  // Cargar evaluaciones desde localStorage
  useEffect(() => {
    const evaluacionesGuardadas = localStorage.getItem('evaluaciones-infoaprende');
    if (evaluacionesGuardadas) {
      setEvaluaciones(JSON.parse(evaluacionesGuardadas));
    }
  }, []);

  // Guardar evaluaciones en localStorage
  useEffect(() => {
    localStorage.setItem('evaluaciones-infoaprende', JSON.stringify(evaluaciones));
  }, [evaluaciones]);

  // Base de datos de preguntas por curso y tema
  const preguntasDB = {
    'nociones-computador': {
      '1': evaluacionNocionesTema1,
      '2': evaluacionNocionesTema2,
      '3': evaluacionNocionesTema3,
    },
    'intro-windows': {
      '1': evaluacionIntroWinTema1,
      '2': evaluacionIntroWinTema2,
      '3': evaluacionIntroWinTema3,
      '4': evaluacionIntroWinTema4,
      '5': evaluacionIntroWinTema5,
      '6': evaluacionIntroWinTema6,
      '7': evaluacionIntroWinTema7,
      '8': evaluacionIntroWinTema8,
    },
    'paint': {
      '1': evaluacionPaintTema1,
      '2': evaluacionPaintTema2,
    },
    'paint-3d': {
      '1': evaluacionPaint3DTema1,
      '2': evaluacionPaint3DTema2,
      '3': evaluacionPaint3DTema3,
      '4': evaluacionPaint3DTema4,
      '5': evaluacionPaint3DTema5,
    },
    'word': {
      '1': wordTema01,
      '2': wordTema02,
      '3': wordTema03,
      '4': wordTema04,
      '5': wordTema05,
      '6': wordTema06,
      '7': wordTema07,
      '8': wordTema08,
    },
    'powerpoint': {
      '1': pptTema01,
      '2': pptTema02,
      '3': pptTema03,
      '4': pptTema04,
      '5': pptTema05,
      '6': pptTema06,
      '7': pptTema07,
    },
    'excel': {
      '1': excelTema01,
      '2': excelTema02,
      '3': excelTema03,
      '4': excelTema04,
      '5': excelTema05,
      '6': excelTema06,
      '7': excelTema07,
      '8': excelTema08,
      '9': excelTema09,
      '10': excelTema10,
      '11': excelTema11,
    },
    'intro-informatica': {
      '1': evaluacionIntroInfTema1,
      '2': evaluacionIntroInfTema2,
      '3': evaluacionIntroInfTema3,
      '4': evaluacionIntroInfTema4,
      '5': evaluacionIntroInfTema5,
      '6': evaluacionIntroInfTema6,
      '7': evaluacionIntroInfTema7,
    },
    'access': {
      '1': accessTema01,
      '2': accessTema02,
      '3': accessTema03,
      '4': accessTema04,
      '5': accessTema05,
      '6': accessTema06,
      '7': accessTema07,
      '8': accessTema08,
      '9': accessTema09,
    },
    'redes': {
      '1': redesTema01,
      '2': redesTema02,
      '3': redesTema03,
      '4': redesTema04,
      '5': redesTema05,
      '6': redesTema06,
      '7': redesTema07,
      '8': redesTema08,
      '9': redesTema09,
    },
    'ciberseguridad': {
      '1': ciberSegTema01,
      '2': ciberSegTema02,
      '3': ciberSegTema03,
      '4': ciberSegTema04,
      '5': ciberSegTema05,
      '6': ciberSegTema06,
      '7': ciberSegTema07,
      '8': ciberSegTema08
    },
    
  };

  // Obtener preguntas para un quiz específico
  const getPreguntas = (cursoId, temaId) => {
    return preguntasDB[cursoId]?.[temaId] || null;
  };

  // Calcular puntuación de un quiz
  const calcularPuntuacion = (respuestas, preguntasData) => {
    let correctas = 0;
    const resultados = [];

    preguntasData.preguntas.forEach((pregunta, index) => {
      const respuestaUsuario = respuestas[index];
      const esCorrecta = respuestaUsuario === pregunta.respuestaCorrecta;
      
      if (esCorrecta) correctas++;
      
      resultados.push({
        preguntaId: pregunta.id,
        pregunta: pregunta.pregunta,
        respuestaUsuario,
        respuestaCorrecta: pregunta.respuestaCorrecta,
        esCorrecta,
        explicacion: pregunta.explicacion
      });
    });

    const puntuacion = Math.round((correctas / preguntasData.preguntas.length) * 100);
    
    return {
      puntuacion,
      correctas,
      total: preguntasData.preguntas.length,
      resultados,
      aprobado: puntuacion >= 70 // 70% para aprobar
    };
  };

  // Completar un quiz
  const completarQuiz = (cursoId, temaId, respuestas, tiempoTotal) => {
    const preguntasData = getPreguntas(cursoId, temaId);
    if (!preguntasData) return null;

    const resultado = calcularPuntuacion(respuestas, preguntasData);
    const quizId = `${cursoId}-${temaId}`;
    
    setEvaluaciones(prev => {
      const intentosActuales = prev.intentosRealizados[quizId] || 0;
      const mejorPuntuacion = prev.mejoresPuntuaciones[quizId] || 0;
      
      return {
        ...prev,
        quizzesCompletados: resultado.aprobado && !prev.quizzesCompletados.includes(quizId)
          ? [...prev.quizzesCompletados, quizId]
          : prev.quizzesCompletados,
        evaluacionesAprobadas: resultado.aprobado && !prev.evaluacionesAprobadas.includes(quizId)
          ? [...prev.evaluacionesAprobadas, quizId]
          : prev.evaluacionesAprobadas,
        intentosRealizados: {
          ...prev.intentosRealizados,
          [quizId]: intentosActuales + 1
        },
        mejoresPuntuaciones: {
          ...prev.mejoresPuntuaciones,
          [quizId]: Math.max(mejorPuntuacion, resultado.puntuacion)
        },
        tiempoRespuestas: {
          ...prev.tiempoRespuestas,
          [quizId]: tiempoTotal
        }
      };
    });

    // Si aprobó, otorgar puntos de progreso
    if (resultado.aprobado) {
      const puntosBonus = Math.round(resultado.puntuacion / 10); // 7-10 puntos bonus
      completarLeccion(cursoId, `quiz-${temaId}`, puntosBonus);
    }

    return resultado;
  };

  // Verificar si un quiz está completado
  const isQuizCompletado = (cursoId, temaId) => {
    const quizId = `${cursoId}-${temaId}`;
    return evaluaciones.quizzesCompletados.includes(quizId);
  };

  // Obtener estadísticas de un quiz
  const getEstadisticasQuiz = (cursoId, temaId) => {
    const quizId = `${cursoId}-${temaId}`;
    return {
      completado: evaluaciones.quizzesCompletados.includes(quizId),
      intentos: evaluaciones.intentosRealizados[quizId] || 0,
      mejorPuntuacion: evaluaciones.mejoresPuntuaciones[quizId] || 0,
      tiempoPromedio: evaluaciones.tiempoRespuestas[quizId] || 0
    };
  };

  // Obtener resumen general de evaluaciones
  const getResumenEvaluaciones = () => {
    const totalQuizzes = Object.keys(preguntasDB).reduce((total, curso) => {
      return total + Object.keys(preguntasDB[curso]).length;
    }, 0);

    return {
      quizzesCompletados: evaluaciones.quizzesCompletados.length,
      totalQuizzes,
      porcentajeCompletado: totalQuizzes > 0 ? Math.round((evaluaciones.quizzesCompletados.length / totalQuizzes) * 100) : 0,
      promedioGeneral: evaluaciones.mejoresPuntuaciones 
        ? Math.round(Object.values(evaluaciones.mejoresPuntuaciones).reduce((a, b) => a + b, 0) / Object.values(evaluaciones.mejoresPuntuaciones).length) || 0
        : 0
    };
  };

  // Reiniciar evaluaciones (para testing)
  const reiniciarEvaluaciones = () => {
    setEvaluaciones({
      quizzesCompletados: [],
      evaluacionesAprobadas: [],
      intentosRealizados: {},
      mejoresPuntuaciones: {},
      tiempoRespuestas: {}
    });
    localStorage.removeItem('evaluaciones-infoaprende');
  };

  const value = {
    evaluaciones,
    getPreguntas,
    completarQuiz,
    isQuizCompletado,
    getEstadisticasQuiz,
    getResumenEvaluaciones,
    reiniciarEvaluaciones
  };

  return (
    <EvaluacionContext.Provider value={value}>
      {children}
    </EvaluacionContext.Provider>
  );
};
