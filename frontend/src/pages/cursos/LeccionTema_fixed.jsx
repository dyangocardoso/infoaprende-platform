import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useProgreso } from '../../hooks/useProgreso';
import './LeccionTema.css';

// Datos de ejemplo para las lecciones
const leccionData = {
  'nociones-computador': {
    '1': {
      titulo: "Algoritmo de encendido y apagado",
      tematica: "Procedimiento básico de uso seguro",
      duracion: "15 minutos",
      pasos: [
        {
          titulo: "Paso 1: Verificar conexiones",
          contenido: "Antes de encender el computador, asegúrate de que todos los cables estén conectados correctamente.",
          imagen: "/images/conexiones.jpg",
          interactivo: {
            tipo: "checklist",
            elementos: [
              "Cable de alimentación conectado",
              "Monitor conectado",
              "Teclado y ratón conectados",
              "Cables de red (si es necesario)"
            ]
          }
        },
        {
          titulo: "Paso 2: Encender el computador",
          contenido: "Presiona el botón de encendido del computador. Generalmente se encuentra en la parte frontal de la torre.",
          video: "/videos/encendido.mp4",
          interactivo: {
            tipo: "simulacion",
            descripcion: "Simula presionar el botón de encendido"
          }
        },
        {
          titulo: "Paso 3: Esperar el arranque",
          contenido: "El computador tardará unos segundos en arrancar. Verás la pantalla de inicio del sistema operativo.",
          interactivo: {
            tipo: "quiz",
            pregunta: "¿Qué NO debes hacer mientras el computador está arrancando?",
            opciones: [
              "Esperar pacientemente",
              "Presionar varias teclas",
              "Mover el ratón",
              "Apagar el monitor"
            ],
            respuestaCorrecta: 1
          }
        },
        {
          titulo: "Paso 4: Apagado seguro",
          contenido: "Para apagar el computador, siempre usa la opción 'Apagar' del menú de inicio. Nunca desconectes directamente.",
          interactivo: {
            tipo: "practica",
            descripcion: "Practica el procedimiento de apagado seguro"
          }
        }
      ]
    },
    '2': {
      titulo: "Elementos que componen al computador",
      tematica: "Monitor, CPU, bocinas, ratón y teclado",
      duracion: "20 minutos",
      pasos: [
        {
          titulo: "Paso 1: Identificar el Monitor",
          contenido: "El monitor es la pantalla donde ves toda la información. Aprende a identificar sus partes principales y controles básicos.",
          imagen: "/images/monitor.jpg",
          interactivo: {
            tipo: "identificacion",
            elementos: [
              "Pantalla LCD/LED",
              "Botón de encendido",
              "Controles de brillo",
              "Puertos de conexión"
            ]
          }
        },
        {
          titulo: "Paso 2: Conocer la CPU",
          contenido: "La CPU o torre es el cerebro del computador. Identifica sus partes principales y puertos de conexión.",
          imagen: "/images/cpu.jpg",
          interactivo: {
            tipo: "identificacion",
            elementos: [
              "Botón de encendido",
              "Puertos USB",
              "Puerto de audio",
              "Puerto de red"
            ]
          }
        },
        {
          titulo: "Paso 3: Configurar las Bocinas",
          contenido: "Las bocinas permiten escuchar el audio del computador. Aprende a conectarlas y configurarlas correctamente.",
          audio: "/audio/test-sound.mp3",
          interactivo: {
            tipo: "configuracion",
            descripcion: "Configura el audio del sistema",
            elementos: [
              "Conectar a puerto de audio verde",
              "Ajustar volumen de Windows",
              "Probar sonido del sistema"
            ]
          }
        },
        {
          titulo: "Paso 4: Familiarizarse con el Ratón",
          contenido: "El ratón es tu herramienta principal de navegación. Conoce sus botones y funciones básicas.",
          interactivo: {
            tipo: "practica-raton",
            descripcion: "Practica los diferentes tipos de clic",
            actividades: [
              "Clic izquierdo: seleccionar",
              "Clic derecho: menú contextual",
              "Doble clic: abrir programas",
              "Rueda: desplazarse"
            ]
          }
        },
        {
          titulo: "Paso 5: Explorar el Teclado",
          contenido: "El teclado permite escribir y dar comandos al computador. Identifica las teclas más importantes.",
          interactivo: {
            tipo: "teclado-virtual",
            descripcion: "Identifica las teclas principales",
            zonas: [
              "Teclas alfabéticas (A-Z)",
              "Teclas numéricas (0-9)",
              "Teclas especiales (Enter, Espacio, Shift)",
              "Teclas de función (F1-F12)"
            ]
          }
        }
      ]
    },
    '3': {
      titulo: "Manejo del ratón",
      tematica: "Uso correcto y movimiento del cursor",
      duracion: "18 minutos",
      pasos: [
        {
          titulo: "Paso 1: Postura Correcta",
          contenido: "Aprende la posición correcta de la mano y el brazo para usar el ratón sin fatiga ni lesiones.",
          imagen: "/images/postura-raton.jpg",
          interactivo: {
            tipo: "postura",
            descripcion: "Ajusta tu postura según las recomendaciones",
            tips: [
              "Mano relajada sobre el ratón",
              "Muñeca recta y apoyada",
              "Brazo paralelo al escritorio",
              "Hombros relajados"
            ]
          }
        },
        {
          titulo: "Paso 2: Tipos de Clic",
          contenido: "Domina los diferentes tipos de clic y cuándo usar cada uno.",
          interactivo: {
            tipo: "practica-clics",
            descripcion: "Practica cada tipo de clic",
            clics: [
              "Clic simple: seleccionar elemento",
              "Doble clic: abrir archivo o programa",
              "Clic derecho: mostrar menú contextual",
              "Clic prolongado: arrastrar elemento"
            ]
          }
        },
        {
          titulo: "Paso 3: Movimiento del Cursor",
          contenido: "Desarrolla precisión en el movimiento del cursor para una navegación eficiente.",
          interactivo: {
            tipo: "precision",
            descripcion: "Ejercicios de precisión del cursor",
            ejercicios: [
              "Seguir líneas rectas",
              "Trazar círculos",
              "Apuntar a objetivos pequeños",
              "Movimiento suave y controlado"
            ]
          }
        },
        {
          titulo: "Paso 4: Arrastrar y Soltar",
          contenido: "Aprende la técnica de arrastrar y soltar para mover elementos en la pantalla.",
          interactivo: {
            tipo: "arrastrar-soltar",
            descripcion: "Practica arrastrar y soltar elementos",
            actividades: [
              "Seleccionar objeto",
              "Mantener presionado el botón",
              "Mover a la nueva posición",
              "Soltar el botón del ratón"
            ]
          }
        },
        {
          titulo: "Paso 5: Uso de la Rueda",
          contenido: "La rueda del ratón te permite desplazarte rápidamente por documentos y páginas web.",
          interactivo: {
            tipo: "rueda-scroll",
            descripcion: "Practica el desplazamiento con la rueda",
            tecnicas: [
              "Rodar hacia arriba para subir",
              "Rodar hacia abajo para bajar",
              "Clic en la rueda para desplazamiento automático",
              "Control de velocidad de desplazamiento"
            ]
          }
        },
        {
          titulo: "Paso 6: Ejercicios de Coordinación",
          contenido: "Combina todos los movimientos aprendidos en ejercicios que mejoran tu coordinación mano-cursor.",
          interactivo: {
            tipo: "coordinacion-avanzada",
            descripcion: "Completa ejercicios que combinan diferentes habilidades",
            desafios: [
              "Laberinto con el cursor",
              "Juego de precisión",
              "Selección rápida de objetivos",
              "Prueba de velocidad de clic"
            ]
          }
        }
      ]
    }
  }
};

export default function LeccionTema() {
  const { cursoId, temaId } = useParams();
  const [currentStep, setCurrentStep] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [error, setError] = useState(null);
  const { completarLeccion, agregarTiempoEstudio, isLeccionCompletada } = useProgreso();
  
  // Validar parámetros al cargar el componente
  useEffect(() => {
    if (!cursoId || !temaId) {
      setError('Parámetros de curso o tema no válidos');
      return;
    }
    
    // Convertir temaId a número para validación
    const temaNumero = parseInt(temaId);
    if (isNaN(temaNumero) || temaNumero < 1) {
      setError('ID de tema no válido');
      return;
    }
    
    // Verificar que el curso existe en los datos
    if (!leccionData[cursoId]) {
      setError(`Curso "${cursoId}" no encontrado`);
      return;
    }
    
    // Verificar que el tema existe en el curso
    if (!leccionData[cursoId][temaId]) {
      setError(`Tema ${temaId} no encontrado en el curso ${cursoId}`);
      return;
    }
    
    // Si todo está bien, inicializar tiempo
    setStartTime(Date.now());
    setError(null);
  }, [cursoId, temaId]);
  
  // Función para completar la lección
  const handleCompletarLeccion = () => {
    if (!isLeccionCompletada(cursoId, temaId)) {
      // Calcular tiempo de estudio
      const tiempoEstudio = startTime ? Math.round((Date.now() - startTime) / 60000) : 15; // default 15 min
      
      // Completar lección y agregar tiempo
      completarLeccion(cursoId, temaId, 20); // 20 puntos por lección
      agregarTiempoEstudio(tiempoEstudio);
      
      // Mostrar notificación de logro
      alert(`¡Felicidades! Has completado la lección y ganado 20 puntos. Tiempo de estudio: ${tiempoEstudio} minutos.`);
    }
  };

  const cursoTitulos = {
    'nociones-computador': 'Nociones generales del computador'
  };

  // Manejar casos de error
  if (error) {
    return (
      <div className="leccion-container">
        <div className="error-message" style={{
          textAlign: 'center',
          padding: '40px',
          backgroundColor: '#f8d7da',
          border: '1px solid #f5c6cb',
          borderRadius: '8px',
          color: '#721c24',
          margin: '20px'
        }}>
          <h2>⚠️ Error</h2>
          <p>{error}</p>
          <Link to="/" style={{
            display: 'inline-block',
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px'
          }}>
            🏠 Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  const leccion = leccionData[cursoId]?.[temaId];
  const cursoTitulo = cursoTitulos[cursoId];

  if (!leccion) {
    return (
      <div className="leccion-container">
        <div className="error-message">
          <h2>Lección no encontrada</h2>
          <Link to="/">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  const handleNextStep = () => {
    if (currentStep < leccion.pasos.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentPaso = leccion.pasos[currentStep];

  return (
    <div className="leccion-container">
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link to="/">🏠 Inicio</Link>
        <span> / </span>
        <Link to={`/curso/${cursoId}`}>{cursoTitulo}</Link>
        <span> / </span>
        <span>Tema {temaId}: {leccion.titulo}</span>
      </nav>

      {/* Header de la lección */}
      <header className="leccion-header">
        <div className="leccion-meta">
          <span className="tema-badge">Tema {temaId}</span>
          <span className="duracion">⏱️ {leccion.duracion}</span>
        </div>
        <h1>{leccion.titulo}</h1>
        <p className="leccion-subtitulo">{leccion.tematica}</p>
        
        {/* Barra de progreso */}
        <div className="progreso-leccion">
          <div className="progreso-bar">
            <div 
              className="progreso-fill" 
              style={{width: `${((currentStep + 1) / leccion.pasos.length) * 100}%`}}
            ></div>
          </div>
          <span className="progreso-texto">
            Paso {currentStep + 1} de {leccion.pasos.length}
          </span>
        </div>
      </header>

      {/* Contenido del paso actual */}
      <div className="paso-container">
        <div className="paso-content">
          <h2>{currentPaso.titulo}</h2>
          <p>{currentPaso.contenido}</p>
          
          {/* Imagen del paso */}
          {currentPaso.imagen && (
            <div className="paso-imagen">
              <img src={currentPaso.imagen} alt={currentPaso.titulo} />
            </div>
          )}
          
          {/* Video del paso */}
          {currentPaso.video && (
            <div className="paso-video">
              <video controls>
                <source src={currentPaso.video} type="video/mp4" />
                Tu navegador no soporta video HTML5.
              </video>
            </div>
          )}
          
          {/* Audio del paso */}
          {currentPaso.audio && (
            <div className="paso-audio">
              <audio controls>
                <source src={currentPaso.audio} type="audio/mpeg" />
                Tu navegador no soporta audio HTML5.
              </audio>
            </div>
          )}
          
          {/* Elementos interactivos */}
          {currentPaso.interactivo && (
            <div className="elemento-interactivo">
              {currentPaso.interactivo.tipo === 'checklist' && (
                <div className="checklist">
                  <h4>✅ Lista de verificación:</h4>
                  <div className="checklist-items">
                    {currentPaso.interactivo.elementos.map((elemento, index) => (
                      <label key={index} className="checklist-item">
                        <input type="checkbox" />
                        <span>{elemento}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
              
              {currentPaso.interactivo.tipo === 'identificacion' && (
                <div className="identificacion">
                  <h4>🔍 Identifica los elementos:</h4>
                  <div className="elementos-list">
                    {currentPaso.interactivo.elementos.map((elemento, index) => (
                      <div key={index} className="elemento-item">
                        {elemento}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {currentPaso.interactivo.tipo === 'quiz' && (
                <div className="quiz">
                  <h4>❓ Pregunta:</h4>
                  <p>{currentPaso.interactivo.pregunta}</p>
                  <div className="quiz-opciones">
                    {currentPaso.interactivo.opciones.map((opcion, index) => (
                      <button key={index} className="quiz-opcion">
                        {opcion}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {currentPaso.interactivo.tipo === 'simulacion' && (
                <div className="simulacion">
                  <h4>🖱️ Simulación:</h4>
                  <p>{currentPaso.interactivo.descripcion}</p>
                  <button className="btn-simulacion">Iniciar Simulación</button>
                </div>
              )}
              
              {currentPaso.interactivo.tipo === 'practica' && (
                <div className="practica">
                  <h4>🎯 Práctica:</h4>
                  <p>{currentPaso.interactivo.descripcion}</p>
                  <button className="btn-practica">Comenzar Práctica</button>
                </div>
              )}

              {/* Elementos interactivos adicionales para otros tipos */}
              {(currentPaso.interactivo.actividades || currentPaso.interactivo.zonas || 
                currentPaso.interactivo.tips || currentPaso.interactivo.ejercicios) && (
                <div className="actividades">
                  <h4>📋 Actividades:</h4>
                  <ul>
                    {(currentPaso.interactivo.actividades || 
                      currentPaso.interactivo.zonas || 
                      currentPaso.interactivo.tips || 
                      currentPaso.interactivo.ejercicios || 
                      currentPaso.interactivo.tecnicas ||
                      currentPaso.interactivo.desafios || 
                      currentPaso.interactivo.clics)?.map((actividad, index) => (
                      <li key={index}>{actividad}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Navegación de pasos */}
      <div className="navegacion-pasos">
        <button 
          className="btn btn-outline" 
          onClick={handlePrevStep}
          disabled={currentStep === 0}
        >
          <i className="fas fa-chevron-left"></i> Anterior
        </button>
        
        <div className="pasos-indicator">
          {leccion.pasos.map((_, index) => (
            <button 
              key={index}
              className={`paso-dot ${index === currentStep ? 'active' : ''} ${index < currentStep ? 'completed' : ''}`}
              onClick={() => setCurrentStep(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        
        {currentStep < leccion.pasos.length - 1 ? (
          <button 
            className="btn btn-primary" 
            onClick={handleNextStep}
          >
            Siguiente <i className="fas fa-chevron-right"></i>
          </button>
        ) : (
          <Link to={`/curso/${cursoId}`}>
            <button 
              className="btn btn-success"
              onClick={handleCompletarLeccion}
            >
              <i className="fas fa-check"></i> Completar Lección
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
