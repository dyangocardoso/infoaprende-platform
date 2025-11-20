import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import accessTemas from '../../data/cursos/access';
import { useProgreso } from '../../hooks/useProgreso';
import './CursoBase.css';

export default function Access() {
  const [selectedTema, setSelectedTema] = useState(null);
  const [notification, setNotification] = useState({ show: false, message: '', type: 'success' });
  const navigate = useNavigate();
  const { obtenerInfoCurso } = accessTemas;
  const { getProgresoCurso, isTemaCompletado, isLeccionCompletada } = useProgreso();

  const cursoInfo = obtenerInfoCurso();
  const temas = Object.values(accessTemas.temas);

  // Función para mostrar notificaciones
  const showNotification = (message, type = 'success') => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: '', type: 'success' });
    }, 4000);
  };

  const handleTemaClick = (tema) => {
    setSelectedTema(selectedTema?.id === tema.id ? null : tema);
  };

  const handleComenzarCursoCompleto = () => {
    try {
      const progreso = getProgresoCurso('access');
      if (!temas.length) {
        showNotification('Error: No hay temas disponibles en este curso', 'error');
        return;
      }
      let siguienteTema = temas.find(t => !isTemaCompletado('access', t.id)) || temas[0];
      let mensaje = '';
      let navegarA = `/leccion/access/${siguienteTema.id}`;
      if (progreso.porcentaje === 0) {
        mensaje = `🎓 ¡Bienvenido al curso "Gestor de Base de Datos Access"!\n\n` +
          `📚 Este curso incluye ${temas.length} temas:\n` +
          temas.map((tema, index) => `${index + 1}. ${tema.titulo}`).join('\n') +
          `\n\n¿Deseas comenzar con el Tema 1: "${siguienteTema.titulo}"?`;
      } else if (progreso.porcentaje === 100) {
        mensaje = `🎉 ¡Felicidades! Ya has completado este curso al ${progreso.porcentaje}%.\n\n¿Deseas revisar el curso desde el principio?`;
      } else {
        mensaje = `📖 Continúas con tu progreso del ${progreso.porcentaje}% en este curso.\n\n🎯 Siguiente tema: "${siguienteTema.titulo}"\n\n¿Estás listo para continuar?`;
      }
      const confirmacion = window.confirm(mensaje);
      if (confirmacion) {
        let notificacionMsg = '';
        if (progreso.porcentaje === 0) {
          notificacionMsg = `🚀 Iniciando curso: ${siguienteTema.titulo}`;
        } else if (progreso.porcentaje === 100) {
          notificacionMsg = `🔄 Revisando curso desde el principio`;
        } else {
          notificacionMsg = `📖 Continuando con: ${siguienteTema.titulo}`;
        }
        showNotification(notificacionMsg, 'success');
        try {
          navigate(navegarA);
        } catch {
          window.location.href = navegarA;
        }
      }
    } catch (error) {
      showNotification('Error inesperado: ' + error.message, 'error');
    }
  };

  const handleComenzarTema = (tema) => {
    try {
      if (!tema || !tema.id) {
        showNotification('Error: Tema no válido', 'error');
        return;
      }
      const leccionCompletada = isLeccionCompletada('access', tema.id);
      let mensaje = '';
      let accion = '';
      if (leccionCompletada) {
        mensaje = `🔄 Ya has completado el tema "${tema.titulo}".\n\n¿Deseas revisarlo nuevamente?`;
        accion = 'revisar';
      } else {
        mensaje = `🎯 Vas a comenzar el tema "${tema.titulo}".\n\n📖 Tema: ${tema.tematica}\n\n¿Estás listo para comenzar?`;
        accion = 'comenzar';
      }
      const confirmacion = window.confirm(mensaje);
      if (confirmacion) {
        const navegarA = `/leccion/access/${tema.id}`;
        const notificacionMensaje = accion === 'revisar' 
          ? `🔄 Revisando tema: ${tema.titulo}` 
          : `🚀 Iniciando tema: ${tema.titulo}`;
        showNotification(notificacionMensaje, 'success');
        try {
          navigate(navegarA);
        } catch {
          window.location.href = navegarA;
        }
      }
    } catch (error) {
      showNotification('Error inesperado: ' + error.message, 'error');
    }
  };

  const handleGuardarParaDespues = () => {
    const cursosGuardados = JSON.parse(localStorage.getItem('cursosGuardados') || '[]');
    const cursoId = 'access';
    if (!cursosGuardados.includes(cursoId)) {
      cursosGuardados.push(cursoId);
      localStorage.setItem('cursosGuardados', JSON.stringify(cursosGuardados));
      showNotification('📚 Curso guardado en tu lista "Para después". ¡Puedes continuar cuando quieras!', 'success');
    } else {
      showNotification('📋 Este curso ya está en tu lista "Para después".', 'info');
    }
  };

  const progresoCurso = getProgresoCurso('access');

  const getBotonPrincipalInfo = () => {
    if (progresoCurso.porcentaje === 0) {
      return {
        texto: 'Comenzar Curso Completo',
        icono: 'fas fa-play-circle',
        clase: 'btn btn-success btn-lg',
        descripcion: 'Inicia tu primera experiencia con este curso'
      };
    } else if (progresoCurso.porcentaje === 100) {
      return {
        texto: 'Revisar Curso Completo',
        icono: 'fas fa-redo-alt',
        clase: 'btn btn-primary btn-lg',
        descripcion: 'Repasa todo el contenido del curso completado'
      };
    } else {
      let proximoTema = temas.find(t => !isTemaCompletado('access', t.id));
      const descripcionTema = proximoTema 
        ? `Continúa con: ${proximoTema.titulo}` 
        : 'Continúa donde lo dejaste';
      return {
        texto: `Continuar Curso (${progresoCurso.porcentaje}%)`,
        icono: 'fas fa-play',
        clase: 'btn btn-warning btn-lg',
        descripcion: descripcionTema
      };
    }
  };

  const botonInfo = getBotonPrincipalInfo();

  return (
    <div className="curso-container">
      {notification.show && (
        <div className={`notification alert alert-${notification.type}`} style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 1000,
          maxWidth: '400px',
          padding: '15px 20px',
          borderRadius: '8px',
          backgroundColor: notification.type === 'success' ? '#d4edda' : '#d1ecf1',
          border: `1px solid ${notification.type === 'success' ? '#c3e6cb' : '#bee5eb'}`,
          color: notification.type === 'success' ? '#155724' : '#0c5460',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}>
          {notification.message}
        </div>
      )}
      <nav className="breadcrumb">
        <Link to="/">🏠 Inicio</Link>
        <span> / </span>
        <span>Gestor de Base de Datos Access</span>
      </nav>
      <header className="curso-header">
        <div className="curso-icon">
          <i className="fas fa-database"></i>
        </div>
        <div className="curso-info">
          <h1>{cursoInfo.titulo}</h1>
          <p>{cursoInfo.descripcion}</p>
          <div className="curso-stats">
            <span><i className="fas fa-book"></i> {temas.length} Temas</span>
            <span><i className="fas fa-clock"></i> {cursoInfo.duracion}</span>
            <span><i className="fas fa-signal"></i> {cursoInfo.nivel}</span>
            <span><i className="fas fa-chart-line"></i> {progresoCurso.porcentaje}% Completado</span>
          </div>
        </div>
      </header>
      <div className="temas-container">
        <h2>📚 Contenido del Curso</h2>
        <div className="temas-list">
          {temas.map((tema) => {
            const temaCompletado = isTemaCompletado('access', tema.id);
            const leccionCompletada = isLeccionCompletada('access', tema.id);
            return (
            <div key={tema.id} className={`tema-item ${selectedTema?.id === tema.id ? 'active' : ''} ${temaCompletado ? 'completed' : ''}`}>
              <div className="tema-header" onClick={() => handleTemaClick(tema)}>
                <div className={`tema-numero ${temaCompletado ? 'completed' : ''}`}>
                  {temaCompletado ? '✓' : tema.id}
                </div>
                <div className="tema-title">
                  <h3>
                    {tema.titulo}
                    {temaCompletado && <span className="completion-badge">Completado</span>}
                  </h3>
                  <p className="tema-subtitle">{tema.tematica}</p>
                </div>
                <div className="tema-toggle">
                  <i className={`fas fa-chevron-${selectedTema?.id === tema.id ? 'up' : 'down'}`}></i>
                </div>
              </div>
              {selectedTema?.id === tema.id && (
                <div className="tema-content">
                  <div className="tema-description">
                    <h4>📖 Descripción</h4>
                    <p>{tema.descripcion}</p>
                  </div>
                  <div className="tema-activities">
                    <h4>🎯 Actividades</h4>
                    <ul>
                      {tema.actividades.map((actividad, index) => (
                        <li key={index}>{actividad}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="tema-actions">
                    <Link to={`/contenido/access/${tema.id}`}>
                      <button className="btn btn-info">
                        <i className="fas fa-book"></i> 
                        Contenido Teórico
                      </button>
                    </Link>
                    <button 
                      className="btn btn-primary"
                      onClick={() => handleComenzarTema(tema)}
                      title={leccionCompletada ? 'Revisar este tema específico' : 'Comenzar a estudiar este tema'}
                    >
                      <i className="fas fa-play"></i> 
                      {leccionCompletada ? 'Revisar Tema' : 'Comenzar Tema'}
                    </button>
                    <Link to={`/quiz/access/${tema.id}`}>
                      <button className="btn btn-warning">
                        <i className="fas fa-clipboard-check"></i> 
                        Evaluación
                      </button>
                    </Link>
                    <button className="btn btn-outline">
                      <i className="fas fa-file-pdf"></i> Material de Apoyo
                    </button>
                  </div>
                </div>
              )}
            </div>
            );
          })}
        </div>
      </div>
      <div className="curso-actions">
        <button 
          className={botonInfo.clase}
          onClick={handleComenzarCursoCompleto}
          title={botonInfo.descripcion}
        >
          <i className={botonInfo.icono}></i> {botonInfo.texto}
        </button>
        <button 
          className="btn btn-outline btn-lg"
          onClick={handleGuardarParaDespues}
          title="Guarda este curso en tu lista para estudiarlo más tarde"
        >
          <i className="fas fa-bookmark"></i> Guardar para después
        </button>
      </div>
    </div>
  );
}
