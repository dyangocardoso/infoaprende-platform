import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useContenido } from '../../hooks/useContenido';
import { useProgreso } from '../../hooks/useProgreso';
import './ContenidoTeorico.css';

export default function ContenidoTeorico() {
  const { cursoId, temaId, seccionId } = useParams();
  const navigate = useNavigate();
  const { getContenidoLeccion, getSecciones, getSeccion, getRecursos } = useContenido();
  const { completarLeccion, agregarTiempoEstudio } = useProgreso();
  
  const [seccionActual, setSeccionActual] = useState(1);
  const [respuestaActividad, setRespuestaActividad] = useState('');
  const [actividadesCompletadas, setActividadesCompletadas] = useState([]);
  
  // Usar ref para el tiempo de inicio para evitar re-renders
  const tiempoInicioRef = useRef(Date.now());

  const contenidoLeccion = getContenidoLeccion(cursoId, temaId);
  const secciones = getSecciones(cursoId, temaId);
  const seccion = getSeccion(cursoId, temaId, seccionId || seccionActual);
  const recursos = getRecursos(cursoId, temaId);

  // Función para registrar tiempo de estudio
  const registrarTiempoEstudio = useCallback(() => {
    const tiempoEstudio = Math.round((Date.now() - tiempoInicioRef.current) / 60000); // en minutos
    if (tiempoEstudio > 0) {
      agregarTiempoEstudio(tiempoEstudio);
    }
  }, [agregarTiempoEstudio]);

  // Registrar tiempo de estudio al salir del componente
  useEffect(() => {
    return () => {
      registrarTiempoEstudio();
    };
  }, [registrarTiempoEstudio]);

  // Navegación entre secciones
  const irASeccion = (numeroSeccion) => {
    setSeccionActual(numeroSeccion);
    navigate(`/contenido/${cursoId}/${temaId}/${numeroSeccion}`);
  };

  const seccionSiguiente = () => {
    if (seccionActual < secciones.length) {
      irASeccion(seccionActual + 1);
    }
  };

  const seccionAnterior = () => {
    if (seccionActual > 1) {
      irASeccion(seccionActual - 1);
    }
  };

  // Completar actividad
  const completarActividad = (actividadIndex) => {
    const nuevasCompletadas = [...actividadesCompletadas, `${seccionActual}-${actividadIndex}`];
    setActividadesCompletadas(nuevasCompletadas);
    setRespuestaActividad('');
  };

  // Completar lección completa
  const completarLeccionCompleta = useCallback(() => {
    // Registrar tiempo de estudio antes de completar
    registrarTiempoEstudio();
    completarLeccion(cursoId, temaId, 15); // 15 puntos por completar contenido teórico
    navigate(`/curso/${cursoId}`);
  }, [cursoId, temaId, completarLeccion, navigate, registrarTiempoEstudio]);

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

  if (!contenidoLeccion || !seccion) {
    return (
      <div className="contenido-container">
        <div className="error-message">
          <h2>Contenido no disponible</h2>
          <p>Este tema aún no tiene contenido teórico desarrollado.</p>
          <Link to={`/curso/${cursoId}`}>Volver al curso</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="contenido-container">
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link to="/">🏠 Inicio</Link>
        <span> / </span>
        <Link to={`/curso/${cursoId}`}>{getCursoTitulo(cursoId)}</Link>
        <span> / </span>
        <span>{contenidoLeccion.titulo}</span>
      </nav>

      {/* Header de la lección */}
      <div className="leccion-header">
        <div className="leccion-info">
          <h1>{contenidoLeccion.titulo}</h1>
          <div className="leccion-meta">
            <span><i className="fas fa-clock"></i> {contenidoLeccion.duracion}</span>
            <span><i className="fas fa-book-open"></i> Sección {seccionActual} de {secciones.length}</span>
            <span><i className="fas fa-target"></i> Teórico</span>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="progreso-leccion">
          <div className="progreso-bar">
            <div 
              className="progreso-fill" 
              style={{width: `${(seccionActual / secciones.length) * 100}%`}}
            ></div>
          </div>
          <span className="progreso-texto">{Math.round((seccionActual / secciones.length) * 100)}% completado</span>
        </div>
      </div>

      {/* Objetivos de aprendizaje */}
      {seccionActual === 1 && (
        <div className="objetivos-section">
          <h3>🎯 Objetivos de Aprendizaje</h3>
          <ul className="objetivos-list">
            {contenidoLeccion.objetivos.map((objetivo, index) => (
              <li key={index}>{objetivo}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Contenido principal */}
      <div className="contenido-principal">
        {/* Sidebar de navegación */}
        <aside className="sidebar-navegacion">
          <h4>📚 Contenidos</h4>
          <ul className="lista-secciones">
            {secciones.map((sec) => (
              <li 
                key={sec.id} 
                className={`seccion-item ${seccionActual === sec.id ? 'active' : ''}`}
                onClick={() => irASeccion(sec.id)}
              >
                <span className="seccion-numero">{sec.id}</span>
                <span className="seccion-titulo">{sec.titulo}</span>
                {seccionActual > sec.id && <i className="fas fa-check-circle completed"></i>}
              </li>
            ))}
          </ul>

          {/* Recursos adicionales */}
          {recursos.documentos && recursos.documentos.length > 0 && (
            <div className="recursos-sidebar">
              <h4>📎 Recursos</h4>
              <ul>
                {recursos.documentos.map((doc, index) => (
                  <li key={index}>
                    <a href={doc.url} target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-file-pdf"></i> {doc.titulo}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>

        {/* Área de contenido */}
        <main className="area-contenido">
          <article className="seccion-contenido">
            <header className="seccion-header">
              <h2>{seccion.titulo}</h2>
            </header>

            {/* Contenido HTML renderizado */}
            <div 
              className="contenido-html"
              dangerouslySetInnerHTML={{ __html: seccion.contenido }}
            />

            {/* Multimedia */}
            {seccion.multimedia && (
              <div className="multimedia-section">
                {seccion.multimedia.imagen && (
                  <div className="multimedia-item">
                    <img 
                      src={seccion.multimedia.imagen} 
                      alt={`Imagen de ${seccion.titulo}`}
                      className="contenido-imagen"
                    />
                  </div>
                )}
                
                {seccion.multimedia.video && (
                  <div className="multimedia-item">
                    <video 
                      controls 
                      className="contenido-video"
                      poster="/images/video-placeholder.jpg"
                    >
                      <source src={seccion.multimedia.video} type="video/mp4" />
                      Tu navegador no soporta video HTML5.
                    </video>
                  </div>
                )}

                {seccion.multimedia.infografia && (
                  <div className="multimedia-item">
                    <img 
                      src={seccion.multimedia.infografia} 
                      alt={`Infografía de ${seccion.titulo}`}
                      className="infografia"
                    />
                  </div>
                )}
              </div>
            )}

            {/* Actividades interactivas */}
            {seccion.actividades && seccion.actividades.length > 0 && (
              <div className="actividades-section">
                <h3>🎯 Actividades de Refuerzo</h3>
                {seccion.actividades.map((actividad, index) => {
                  const actividadId = `${seccionActual}-${index}`;
                  const completada = actividadesCompletadas.includes(actividadId);
                  
                  return (
                    <div key={index} className={`actividad-item ${completada ? 'completada' : ''}`}>
                      <div className="actividad-header">
                        <h4>
                          {actividad.tipo === 'reflexion' && '🤔 Reflexión'}
                          {actividad.tipo === 'investigacion' && '🔍 Investigación'}
                          {actividad.tipo === 'identificacion' && '🎯 Identificación'}
                          {actividad.tipo === 'comparacion' && '⚖️ Comparación'}
                          {actividad.tipo === 'clasificacion' && '📂 Clasificación'}
                        </h4>
                        {completada && <span className="badge-completada">✅ Completada</span>}
                      </div>
                      
                      <p className="actividad-pregunta">{actividad.pregunta}</p>
                      
                      {actividad.ayuda && (
                        <div className="actividad-ayuda">
                          <i className="fas fa-lightbulb"></i>
                          <span>{actividad.ayuda}</span>
                        </div>
                      )}

                      {!completada && (
                        <div className="actividad-respuesta">
                          <textarea
                            placeholder="Escribe tu respuesta o reflexión aquí..."
                            value={respuestaActividad}
                            onChange={(e) => setRespuestaActividad(e.target.value)}
                            rows={4}
                          />
                          <button 
                            className="btn btn-primary"
                            onClick={() => completarActividad(index)}
                            disabled={respuestaActividad.trim().length < 10}
                          >
                            Completar Actividad
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </article>

          {/* Navegación de secciones */}
          <nav className="navegacion-secciones">
            <button 
              className="btn btn-outline" 
              onClick={seccionAnterior}
              disabled={seccionActual === 1}
            >
              <i className="fas fa-chevron-left"></i> Anterior
            </button>

            <div className="navegacion-centro">
              <span>Sección {seccionActual} de {secciones.length}</span>
            </div>

            {seccionActual < secciones.length ? (
              <button 
                className="btn btn-primary" 
                onClick={seccionSiguiente}
              >
                Siguiente <i className="fas fa-chevron-right"></i>
              </button>
            ) : (
              <button 
                className="btn btn-success" 
                onClick={completarLeccionCompleta}
              >
                <i className="fas fa-check"></i> Completar Lección
              </button>
            )}
          </nav>
        </main>
      </div>
    </div>
  );
}
