import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useProgreso } from '../../hooks/useProgreso';
import ciberTemas from '../../data/cursos/ciberseguridad/index.js';
import './CursoBase.css';

export default function Ciberseguridad() {
  const [selectedTema, setSelectedTema] = useState(null);
  const [notification, setNotification] = useState({ show: false, message: '', type: 'success' });
  const navigate = useNavigate();
  const { getProgresoCurso, isTemaCompletado, isLeccionCompletada } = useProgreso();

  // Preferir arreglo ordenado exportado por el índice del curso si está disponible.
  const temasArray = Array.isArray(ciberTemas.temasArray)
    ? ciberTemas.temasArray
    : Object.values(ciberTemas.temas || {}).map((t, idx) => (t && t.id ? t : Object.assign({ id: String(idx + 1) }, t || {})));

  const nombreCurso = ciberTemas.info?.titulo || ciberTemas.titulo || 'Gestión de Amenazas en Ciberseguridad';
  const descripcionCurso = ciberTemas.info?.descripcion || ciberTemas.descripcion || '';

  const showNotification = (message, type = 'success') => {
    setNotification({ show: true, message, type });
    setTimeout(() => setNotification({ show: false, message: '', type: 'success' }), 4000);
  };

  const handleTemaClick = (tema) => {
    setSelectedTema(selectedTema?.id === tema.id ? null : tema);
  };

  const handleComenzarCursoCompleto = () => {
    try {
      const progreso = getProgresoCurso('ciberseguridad');

      if (!temasArray || temasArray.length === 0) {
        showNotification('Error: No hay temas disponibles en este curso', 'error');
        return;
      }

      let siguienteTema = null;
      for (let t of temasArray) {
        const temaCom = isTemaCompletado('ciberseguridad', t.id);
        if (!temaCom) { siguienteTema = t; break; }
      }
      if (!siguienteTema) siguienteTema = temasArray[0];

      const navegarA = `/leccion/ciberseguridad/${siguienteTema?.id || temasArray[0]?.id}`;

      let mensaje = '';
      if (progreso.porcentaje === 0) {
        mensaje = `🎓 ¡Bienvenido al curso "${nombreCurso}"!\n\n` +
          `📚 Este curso incluye ${temasArray.length} temas:\n` +
          temasArray.map((t, i) => `${i + 1}. ${t?.titulo || 'Tema ' + (i + 1)}`).join('\n') +
          `\n\n¿Deseas comenzar con el Tema 1: "${siguienteTema?.titulo || 'Tema 1'}"?`;
      } else if (progreso.porcentaje === 100) {
        mensaje = `🎉 ¡Felicidades! Has completado este curso al ${progreso.porcentaje}%.\n\n¿Deseas revisarlo desde el principio?`;
      } else {
        mensaje = `📖 Continúas con tu progreso del ${progreso.porcentaje}% en este curso.\n\n` +
          `🎯 Siguiente tema: "${siguienteTema.titulo}"\n\n¿Estás listo para continuar?`;
      }

      if (window.confirm(mensaje)) {
        showNotification(progreso.porcentaje === 0 ? `🚀 Iniciando curso: ${siguienteTema.titulo}` : `📖 Continuando con: ${siguienteTema.titulo}`, 'success');
        try { navigate(navegarA); } catch { window.location.href = navegarA; }
      }

    } catch (err) {
      console.error('Error iniciando curso ciberseguridad:', err);
      showNotification('Error inesperado: ' + (err.message || err), 'error');
    }
  };

  const handleComenzarTema = (tema) => {
    try {
      if (!tema || !tema.id) { showNotification('Tema no válido', 'error'); return; }
      const navegarA = `/leccion/ciberseguridad/${tema.id}`;
      const temaCom = isTemaCompletado('ciberseguridad', tema.id);
      const accion = temaCom ? 'revisar' : 'comenzar';
      const mensaje = `¿Deseas ${accion} el tema "${tema.titulo}"?`;
      if (window.confirm(mensaje)) {
        showNotification(`${temaCom ? 'Revisando' : 'Iniciando'} tema: ${tema.titulo}`, 'success');
        try { navigate(navegarA); } catch { window.location.href = navegarA; }
      }
    } catch (err) {
      console.error('Error al comenzar tema:', err);
      showNotification('Error inesperado: ' + (err.message || err), 'error');
    }
  };

  const handleGuardarParaDespues = () => {
    const cursosGuardados = JSON.parse(localStorage.getItem('cursosGuardados') || '[]');
    const cursoId = 'ciberseguridad';
    if (!cursosGuardados.includes(cursoId)) {
      cursosGuardados.push(cursoId);
      localStorage.setItem('cursosGuardados', JSON.stringify(cursosGuardados));
      showNotification('📚 Curso guardado en tu lista "Para después"', 'success');
    } else {
      showNotification('📋 Este curso ya está en tu lista "Para después".', 'info');
    }
  };

  const progresoCurso = getProgresoCurso('ciberseguridad');

  const getBotonPrincipalInfo = () => {
    if (progresoCurso.porcentaje === 0) return { texto: 'Comenzar Curso Completo', icono: 'fas fa-play-circle', clase: 'btn btn-success btn-lg', descripcion: 'Inicia el curso' };
    if (progresoCurso.porcentaje === 100) return { texto: 'Revisar Curso Completo', icono: 'fas fa-redo-alt', clase: 'btn btn-primary btn-lg', descripcion: 'Repasar todo el curso' };

    let proximoTema = temasArray.find(t => !isTemaCompletado('ciberseguridad', t.id));
    const descripcionTema = proximoTema ? `Continúa con: ${proximoTema.titulo}` : 'Continúa donde lo dejaste';
    return { texto: `Continuar Curso (${progresoCurso.porcentaje}%)`, icono: 'fas fa-play', clase: 'btn btn-warning btn-lg', descripcion: descripcionTema };
  };

  const botonInfo = getBotonPrincipalInfo();

  const diagnosticarBotones = () => {
    console.log('Diagnóstico curso ciberseguridad - progreso:', getProgresoCurso('ciberseguridad'));
    console.log('Temas detectados:', temasArray.length, temasArray.map(t => t.id));
    showNotification('🔍 Diagnóstico completado. Revisa la consola para detalles.', 'info');
  };

  return (
    <div className="curso-container">
      {notification.show && (
        <div className={`notification alert alert-${notification.type}`} style={{ position: 'fixed', top: 20, right: 20, zIndex: 1000, maxWidth: 400, padding: '15px 20px', borderRadius: 8, backgroundColor: notification.type === 'success' ? '#d4edda' : notification.type === 'error' ? '#f8d7da' : '#d1ecf1', border: `1px solid ${notification.type === 'success' ? '#c3e6cb' : notification.type === 'error' ? '#f5c6cb' : '#bee5eb'}`, color: notification.type === 'success' ? '#155724' : notification.type === 'error' ? '#721c24' : '#0c5460' }}> 
          {notification.message}
        </div>
      )}

      <nav className="breadcrumb">
        <Link to="/">🏠 Inicio</Link>
        <span> / </span>
        <span>{nombreCurso}</span>
      </nav>

      <header className="curso-header">
        <div className="curso-icon"><i className="fas fa-shield-alt"></i></div>
        <div className="curso-info">
          <h1>{nombreCurso}</h1>
          <p>{descripcionCurso}</p>
          <div className="curso-stats">
            <span><i className="fas fa-book"></i> {temasArray.length} Temas</span>
            <span><i className="fas fa-clock"></i> {ciberTemas.info?.duracion || '4-6 horas'}</span>
            <span><i className="fas fa-signal"></i> {ciberTemas.info?.nivel || 'Intermedio'}</span>
            <span><i className="fas fa-chart-line"></i> {progresoCurso.porcentaje}% Completado</span>
          </div>
        </div>
      </header>

      <div className="temas-container">
        <h2>📚 Contenido del Curso</h2>
        <div className="temas-list">
          {temasArray.map((tema, index) => {
            const temaId = tema?.id || String(index + 1);
            const temaCompletado = isTemaCompletado('ciberseguridad', temaId);
            const leccionCompletada = isLeccionCompletada('ciberseguridad', temaId);
            return (
              <div key={temaId} className={`tema-item ${selectedTema?.id === temaId ? 'active' : ''} ${temaCompletado ? 'completed' : ''}`}>
                <div className="tema-header" onClick={() => handleTemaClick(tema)}>
                  <div className={`tema-numero ${temaCompletado ? 'completed' : ''}`}>{temaCompletado ? '✓' : temaId}</div>
                  <div className="tema-title">
                    <h3>{tema?.titulo || `Tema ${temaId}`}{temaCompletado && <span className="completion-badge">Completado</span>}</h3>
                    <p className="tema-subtitle">{tema?.tematica || ''}</p>
                  </div>
                  <div className="tema-toggle"><i className={`fas fa-chevron-${selectedTema?.id === tema.id ? 'up' : 'down'}`}></i></div>
                </div>

                {selectedTema?.id === tema.id && (
                  <div className="tema-content">
                    <div className="tema-description"><h4>📖 Descripción</h4><p dangerouslySetInnerHTML={{ __html: tema.secciones?.[0]?.contenido || tema.descripcion || '' }} /></div>

                    <div className="tema-activities"><h4>🎯 Actividades</h4>
                      <ul>
                        {(tema.actividades || []).map((act, idx) => (
                          <li key={`${temaId}-act-${idx}`}>{act.titulo ? act.titulo : act}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="tema-actions">
                      <Link to={`/contenido/ciberseguridad/${temaId}`}><button className="btn btn-info"><i className="fas fa-book"></i> Contenido Teórico</button></Link>
                      <button className="btn btn-primary" onClick={() => handleComenzarTema(tema)} title={leccionCompletada ? 'Revisar este tema' : 'Comenzar a estudiar este tema'}><i className="fas fa-play"></i> {leccionCompletada ? 'Revisar Tema' : 'Comenzar Tema'}</button>
                      <Link to={`/quiz/ciberseguridad/${temaId}`}><button className="btn btn-warning"><i className="fas fa-clipboard-check"></i> Evaluación</button></Link>
                      <button className="btn btn-outline"><i className="fas fa-file-pdf"></i> Material de Apoyo</button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="curso-actions">
        <button className={botonInfo.clase} onClick={handleComenzarCursoCompleto} title={botonInfo.descripcion}><i className={botonInfo.icono}></i> {botonInfo.texto}</button>
        <button className="btn btn-outline btn-lg" onClick={handleGuardarParaDespues} title="Guarda este curso en tu lista para estudiarlo más tarde"><i className="fas fa-bookmark"></i> Guardar para después</button>

        <button className="btn btn-info btn-sm" onClick={diagnosticarBotones} title="Diagnóstico completo de funcionalidades" style={{fontSize:12, padding:'8px 12px', marginRight:10}}><i className="fas fa-stethoscope"></i> Diagnóstico</button>

        <button className="btn btn-danger btn-sm" onClick={() => { localStorage.removeItem('progreso-infoaprende'); window.location.reload(); }} title="Limpiar todo el progreso guardado" style={{fontSize:12, padding:'8px 12px', marginRight:10}}><i className="fas fa-trash"></i> Limpiar Progreso</button>

        {progresoCurso.porcentaje > 0 && (
          <div className="progreso-info"><small><i className="fas fa-chart-line"></i> Progreso: {progresoCurso.completadas} de {temasArray.length} temas completados</small></div>
        )}
      </div>
    </div>
  );
}
