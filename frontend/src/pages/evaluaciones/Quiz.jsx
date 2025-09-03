import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useEvaluacion } from '../../context/EvaluacionContext';
import { useProgreso } from '../../context/ProgresoContext';
import './Quiz.css';

export default function Quiz() {
  const { cursoId, temaId } = useParams();
  const navigate = useNavigate();
  const { getPreguntas, completarQuiz, getEstadisticasQuiz } = useEvaluacion();
  const { progreso } = useProgreso();
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [respuestas, setRespuestas] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [resultado, setResultado] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);

  const preguntasData = getPreguntas(cursoId, temaId);
  const estadisticas = getEstadisticasQuiz(cursoId, temaId);

  // Timer para el quiz
  useEffect(() => {
    let interval;
    if (quizStarted && !showResult) {
      interval = setInterval(() => {
        setTimeElapsed(Date.now() - startTime);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [quizStarted, showResult, startTime]);

  const formatTime = (ms) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    return `${minutes}:${(seconds % 60).toString().padStart(2, '0')}`;
  };

  const handleStartQuiz = () => {
    setQuizStarted(true);
    setStartTime(Date.now());
    setCurrentQuestion(0);
    setRespuestas([]);
    setSelectedOption(null);
    setShowResult(false);
  };

  const handleOptionSelect = (optionIndex) => {
    setSelectedOption(optionIndex);
  };

  const handleNextQuestion = () => {
    if (selectedOption === null) {
      alert('Por favor selecciona una respuesta antes de continuar.');
      return;
    }

    const newRespuestas = [...respuestas];
    newRespuestas[currentQuestion] = selectedOption;
    setRespuestas(newRespuestas);

    if (currentQuestion < preguntasData.preguntas.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      // Quiz completado
      const tiempoTotal = Math.round((Date.now() - startTime) / 1000);
      const result = completarQuiz(cursoId, temaId, newRespuestas, tiempoTotal);
      setResultado(result);
      setShowResult(true);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(respuestas[currentQuestion - 1] || null);
    }
  };

  const getCursoTitulo = (cursoId) => {
    const titulos = {
      'nociones-computador': 'Nociones generales del computador',
      'intro-windows': 'Introducción al Sistema Operativo Windows',
      'paint': 'Microsoft Paint',
      'paint-3d': 'Paint 3D',
      'word': 'Microsoft Word',
      'powerpoint': 'Microsoft PowerPoint',
      'excel': 'Microsoft Excel'
    };
    return titulos[cursoId] || 'Curso';
  };

  if (!preguntasData) {
    return (
      <div className="quiz-container">
        <div className="error-message">
          <h2>Quiz no disponible</h2>
          <p>Este tema aún no tiene evaluaciones disponibles.</p>
          <Link to={`/curso/${cursoId}`}>Volver al curso</Link>
        </div>
      </div>
    );
  }

  if (!quizStarted) {
    return (
      <div className="quiz-container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/">🏠 Inicio</Link>
          <span> / </span>
          <Link to={`/curso/${cursoId}`}>{getCursoTitulo(cursoId)}</Link>
          <span> / </span>
          <span>Evaluación - Tema {temaId}</span>
        </nav>

        {/* Pantalla de inicio del quiz */}
        <div className="quiz-intro">
          <div className="quiz-header">
            <div className="quiz-icon">
              <i className="fas fa-clipboard-check"></i>
            </div>
            <h1>{preguntasData.titulo}</h1>
            <p>Evalúa tus conocimientos sobre este tema</p>
          </div>

          <div className="quiz-info">
            <div className="info-grid">
              <div className="info-item">
                <i className="fas fa-question-circle"></i>
                <h3>Preguntas</h3>
                <p>{preguntasData.preguntas.length} preguntas</p>
              </div>
              <div className="info-item">
                <i className="fas fa-clock"></i>
                <h3>Tiempo</h3>
                <p>Sin límite</p>
              </div>
              <div className="info-item">
                <i className="fas fa-percentage"></i>
                <h3>Aprobación</h3>
                <p>70% mínimo</p>
              </div>
              <div className="info-item">
                <i className="fas fa-redo"></i>
                <h3>Intentos</h3>
                <p>Ilimitados</p>
              </div>
            </div>
          </div>

          {/* Estadísticas previas si las hay */}
          {estadisticas.intentos > 0 && (
            <div className="stats-previas">
              <h3>📊 Tus estadísticas:</h3>
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-label">Intentos realizados:</span>
                  <span className="stat-value">{estadisticas.intentos}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Mejor puntuación:</span>
                  <span className="stat-value">{estadisticas.mejorPuntuacion}%</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Estado:</span>
                  <span className={`stat-value ${estadisticas.completado ? 'completed' : 'pending'}`}>
                    {estadisticas.completado ? '✅ Aprobado' : '⏳ Pendiente'}
                  </span>
                </div>
              </div>
            </div>
          )}

          <div className="quiz-actions">
            <button className="btn btn-primary btn-lg" onClick={handleStartQuiz}>
              <i className="fas fa-play"></i> Comenzar Evaluación
            </button>
            <Link to={`/curso/${cursoId}`}>
              <button className="btn btn-outline btn-lg">
                <i className="fas fa-arrow-left"></i> Volver al Curso
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="quiz-container">
        {/* Pantalla de resultados */}
        <div className="quiz-results">
          <div className="result-header">
            <div className={`result-icon ${resultado.aprobado ? 'success' : 'fail'}`}>
              <i className={`fas ${resultado.aprobado ? 'fa-check-circle' : 'fa-times-circle'}`}></i>
            </div>
            <h1>{resultado.aprobado ? '¡Felicidades!' : 'Necesitas practicar más'}</h1>
            <div className="score-display">
              <span className="score-number">{resultado.puntuacion}%</span>
              <span className="score-text">
                {resultado.correctas} de {resultado.total} correctas
              </span>
            </div>
            <div className="time-display">
              <i className="fas fa-clock"></i>
              Tiempo: {formatTime(timeElapsed)}
            </div>
          </div>

          <div className="result-details">
            <h3>📋 Revisión de Respuestas</h3>
            <div className="answers-review">
              {resultado.resultados.map((respuesta, index) => (
                <div key={index} className={`answer-item ${respuesta.esCorrecta ? 'correct' : 'incorrect'}`}>
                  <div className="question-number">{index + 1}</div>
                  <div className="answer-content">
                    <h4>{respuesta.pregunta}</h4>
                    <div className="answer-options">
                      <p className={`user-answer ${respuesta.esCorrecta ? 'correct' : 'incorrect'}`}>
                        <strong>Tu respuesta:</strong> {preguntasData.preguntas[index].opciones[respuesta.respuestaUsuario]}
                        <i className={`fas ${respuesta.esCorrecta ? 'fa-check' : 'fa-times'}`}></i>
                      </p>
                      {!respuesta.esCorrecta && (
                        <p className="correct-answer">
                          <strong>Respuesta correcta:</strong> {preguntasData.preguntas[index].opciones[respuesta.respuestaCorrecta]}
                        </p>
                      )}
                    </div>
                    <div className="explanation">
                      <p><strong>Explicación:</strong> {respuesta.explicacion}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="result-actions">
            {!resultado.aprobado && (
              <button className="btn btn-primary btn-lg" onClick={() => {
                setQuizStarted(false);
                setShowResult(false);
                setResultado(null);
              }}>
                <i className="fas fa-redo"></i> Intentar de Nuevo
              </button>
            )}
            <Link to={`/curso/${cursoId}`}>
              <button className="btn btn-success btn-lg">
                <i className="fas fa-arrow-right"></i> Continuar al Curso
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestionData = preguntasData.preguntas[currentQuestion];

  return (
    <div className="quiz-container">
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link to="/">🏠 Inicio</Link>
        <span> / </span>
        <Link to={`/curso/${cursoId}`}>{getCursoTitulo(cursoId)}</Link>
        <span> / </span>
        <span>Evaluación en progreso</span>
      </nav>

      {/* Header del quiz en progreso */}
      <div className="quiz-progress-header">
        <div className="progress-info">
          <h2>Pregunta {currentQuestion + 1} de {preguntasData.preguntas.length}</h2>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{width: `${((currentQuestion + 1) / preguntasData.preguntas.length) * 100}%`}}
            ></div>
          </div>
        </div>
        <div className="quiz-timer">
          <i className="fas fa-clock"></i>
          {formatTime(timeElapsed)}
        </div>
      </div>

      {/* Pregunta actual */}
      <div className="question-container">
        <div className="question-content">
          <h3>{currentQuestionData.pregunta}</h3>
          <div className="options-container">
            {currentQuestionData.opciones.map((opcion, index) => (
              <button
                key={index}
                className={`option-button ${selectedOption === index ? 'selected' : ''}`}
                onClick={() => handleOptionSelect(index)}
              >
                <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                <span className="option-text">{opcion}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Navegación del quiz */}
      <div className="quiz-navigation">
        <button 
          className="btn btn-outline" 
          onClick={handlePrevQuestion}
          disabled={currentQuestion === 0}
        >
          <i className="fas fa-chevron-left"></i> Anterior
        </button>
        
        <div className="question-indicators">
          {preguntasData.preguntas.map((_, index) => (
            <button 
              key={index}
              className={`question-dot ${index === currentQuestion ? 'current' : ''} ${respuestas[index] !== undefined ? 'answered' : ''}`}
              onClick={() => {
                if (index < currentQuestion || respuestas[index] !== undefined) {
                  setCurrentQuestion(index);
                  setSelectedOption(respuestas[index] || null);
                }
              }}
            >
              {index + 1}
            </button>
          ))}
        </div>
        
        <button 
          className="btn btn-primary" 
          onClick={handleNextQuestion}
        >
          {currentQuestion === preguntasData.preguntas.length - 1 ? 'Finalizar' : 'Siguiente'}
          <i className={`fas ${currentQuestion === preguntasData.preguntas.length - 1 ? 'fa-check' : 'fa-chevron-right'}`}></i>
        </button>
      </div>
    </div>
  );
}
