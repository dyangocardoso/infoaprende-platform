import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useProgreso } from '../hooks/useProgreso';
import './Home.css';

export default function Home() {
  const [activeTab, setActiveTab] = useState('practica');
  const [notification, setNotification] = useState({ show: false, message: '', type: 'success' });
  const { progreso, getProgresoCurso } = useProgreso();

  // Función para mostrar notificaciones
  const showNotification = (message, type = 'success', duration = 3000) => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: '', type: 'success' });
    }, duration);
  };

  // Verificar si el usuario está autenticado
  const isAuthenticated = localStorage.getItem('token');
  const userData = isAuthenticated ? JSON.parse(localStorage.getItem('user') || '{}') : null;

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-container">
      {/* Notificaciones */}
      {notification.show && (
        <div className={`main-notification alert alert-${notification.type}`}>
          {notification.message}
        </div>
      )}

      {/* Hero Section */}
      <section id="inicio" className="hero">
        <div className="container">
          <h2>Aprende Informática con Contenidos Especializados</h2>
          <p>Explora áreas de conocimiento en informática con contenido interactivo y práctico para todos los niveles</p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary btn-lg"
              onClick={() => scrollToSection('cursos')}
            >
              Explora Cursos
            </button>
            <button 
              className="btn btn-outline-light btn-lg"
              onClick={() => {
                scrollToSection('pruebas');
                showNotification('¡Acceso a la prueba gratis habilitado!', 'info');
              }}
            >
              Prueba Gratis
            </button>
          </div>
        </div>
      </section>

      {/* Cursos Section */}
      <section id="cursos" className="cursos">
        <div className="container">
          <h2><i className="fas fa-graduation-cap"></i> Nuestros Cursos</h2>
          <p className="cursos-intro">Explora nuestras áreas de conocimiento en informática, disponibles para todos los niveles</p>
          <div className="temas-grid">
            {/* 1. Nociones generales del computador */}
            <div className="tema-card" data-course-id="nociones-computador">
              <div className="tema-icon">
                <i className="fas fa-desktop"></i>
              </div>
              <div className="curso-progress">
                <div className="progress-bar-mini">
                  <div 
                    className="progress-fill-mini" 
                    style={{width: `${getProgresoCurso('nociones-computador').porcentaje}%`}}
                  ></div>
                </div>
                <span className="progress-text-mini">
                  {getProgresoCurso('nociones-computador').porcentaje}% completado
                </span>
              </div>
              <h3>Nociones generales del computador</h3>
              <p>Conoce los fundamentos básicos de la informática y el hardware</p>
              <Link to="/curso/nociones-computador">
                <button className="btn-tema">
                  {getProgresoCurso('nociones-computador').completado ? '✅ Completado' : 'Explorar'}
                </button>
              </Link>
            </div>

            {/* 2. Introducción a la Informática */}
            <div className="tema-card" data-course-id="intro-informatica">
              <div className="tema-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <div className="curso-progress">
                <div className="progress-bar-mini">
                  <div 
                    className="progress-fill-mini" 
                    style={{width: `${getProgresoCurso('intro-informatica').porcentaje}%`}}
                  ></div>
                </div>
                <span className="progress-text-mini">
                  {getProgresoCurso('intro-informatica').porcentaje}% completado
                </span>
              </div>
              <h3>Introducción a la Informática</h3>
              <p>Conceptos fundamentales de la ciencia de la computación</p>
              <Link to="/curso/intro-informatica">
                <button className="btn-tema">
                  {getProgresoCurso('intro-informatica').completado ? '✅ Completado' : 'Explorar'}
                </button>
              </Link>
            </div>

            {/* 3. Introducción al Sistema Operativo Windows */}
            <div className="tema-card" data-course-id="intro-windows">
              <div className="tema-icon">
                <i className="fab fa-windows"></i>
              </div>
              <div className="curso-progress">
                <div className="progress-bar-mini">
                  <div 
                    className="progress-fill-mini" 
                    style={{width: `${getProgresoCurso('intro-windows').porcentaje}%`}}
                  ></div>
                </div>
                <span className="progress-text-mini">
                  {getProgresoCurso('intro-windows').porcentaje}% completado
                </span>
              </div>
              <h3>Introducción al Sistema Operativo Windows</h3>
              <p>Aprende a navegar y utilizar Windows de manera eficiente</p>
              <Link to="/curso/intro-windows">
                <button className="btn-tema">
                  {getProgresoCurso('intro-windows').completado ? '✅ Completado' : 'Explorar'}
                </button>
              </Link>
            </div>

            {/* 4. Diseñador Gráfico Paint */}
            <div className="tema-card" data-course-id="paint">
              <div className="tema-icon">
                <i className="fas fa-paint-brush"></i>
              </div>
              <div className="curso-progress">
                <div className="progress-bar-mini">
                  <div 
                    className="progress-fill-mini" 
                    style={{width: `${getProgresoCurso('paint').porcentaje}%`}}
                  ></div>
                </div>
                <span className="progress-text-mini">
                  {getProgresoCurso('paint').porcentaje}% completado
                </span>
              </div>
              <h3>Diseñador Gráfico Paint</h3>
              <p>Crea y edita imágenes con la herramienta clásica de Windows</p>
              <Link to="/curso/paint">
                <button className="btn-tema">
                  {getProgresoCurso('paint').completado ? '✅ Completado' : 'Explorar'}
                </button>
              </Link>
            </div>

            {/* 5. Diseñador Gráfico Paint 3D */}
            <div className="tema-card" data-course-id="paint-3d">
              <div className="tema-icon">
                <i className="fas fa-cube"></i>
              </div>
              <div className="curso-progress">
                <div className="progress-bar-mini">
                  <div 
                    className="progress-fill-mini" 
                    style={{width: `${getProgresoCurso('paint-3d').porcentaje}%`}}
                  ></div>
                </div>
                <span className="progress-text-mini">
                  {getProgresoCurso('paint-3d').porcentaje}% completado
                </span>
              </div>
              <h3>Diseñador Gráfico Paint 3D</h3>
              <p>Explora el diseño tridimensional con Paint 3D</p>
              <Link to="/curso/paint-3d">
                <button className="btn-tema">
                  {getProgresoCurso('paint-3d').completado ? '✅ Completado' : 'Explorar'}
                </button>
              </Link>
            </div>

            {/* 6. Diseñador de Presentaciones PowerPoint */}
            <div className="tema-card" data-course-id="powerpoint">
              <div className="tema-icon">
                <i className="fas fa-file-powerpoint"></i>
              </div>
              <div className="curso-progress">
                <div className="progress-bar-mini">
                  <div 
                    className="progress-fill-mini" 
                    style={{width: `${getProgresoCurso('powerpoint').porcentaje}%`}}
                  ></div>
                </div>
                <span className="progress-text-mini">
                  {getProgresoCurso('powerpoint').porcentaje}% completado
                </span>
              </div>
              <h3>Diseñador de Presentaciones PowerPoint</h3>
              <p>Crea presentaciones impactantes y profesionales</p>
              <Link to="/curso/powerpoint">
                <button className="btn-tema">
                  {getProgresoCurso('powerpoint').completado ? '✅ Completado' : 'Explorar'}
                </button>
              </Link>
            </div>

            {/* 7. Procesador de Texto Word */}
            <div className="tema-card" data-course-id="word">
              <div className="tema-icon">
                <i className="fas fa-file-word"></i>
              </div>
              <div className="curso-progress">
                <div className="progress-bar-mini">
                  <div 
                    className="progress-fill-mini" 
                    style={{width: `${getProgresoCurso('word').porcentaje}%`}}
                  ></div>
                </div>
                <span className="progress-text-mini">
                  {getProgresoCurso('word').porcentaje}% completado
                </span>
              </div>
              <h3>Procesador de Texto Word</h3>
              <p>Domina la creación y edición de documentos profesionales</p>
              <Link to="/curso/word">
                <button className="btn-tema">
                  {getProgresoCurso('word').completado ? '✅ Completado' : 'Explorar'}
                </button>
              </Link>
            </div>

            {/* 8. Tabulador Electrónico Excel */}
            <div className="tema-card" data-course-id="excel">
              <div className="tema-icon">
                <i className="fas fa-file-excel"></i>
              </div>
              <div className="curso-progress">
                <div className="progress-bar-mini">
                  <div 
                    className="progress-fill-mini" 
                    style={{width: `${getProgresoCurso('excel').porcentaje}%`}}
                  ></div>
                </div>
                <span className="progress-text-mini">
                  {getProgresoCurso('excel').porcentaje}% completado
                </span>
              </div>
              <h3>Tabulador Electrónico Excel</h3>
              <p>Gestiona datos y crea análisis con hojas de cálculo</p>
              <Link to="/curso/excel">
                <button className="btn-tema">
                  {getProgresoCurso('excel').completado ? '✅ Completado' : 'Explorar'}
                </button>
              </Link>
            </div>

            {/* 9. Gestor de Base de Datos Access */}
            <div className="tema-card" data-course-id="access">
              <div className="tema-icon">
                <i className="fas fa-database"></i>
              </div>
              <div className="curso-progress">
                <div className="progress-bar-mini">
                  <div 
                    className="progress-fill-mini" 
                    style={{width: `${getProgresoCurso('access').porcentaje}%`}}
                  ></div>
                </div>
                <span className="progress-text-mini">
                  {getProgresoCurso('access').porcentaje}% completado
                </span>
              </div>
              <h3>Gestor de Base de Datos Access</h3>
              <p>Crea y gestiona bases de datos profesionales</p>
              <Link to="/curso/access">
                <button className="btn-tema">
                  {getProgresoCurso('access').completado ? '✅ Completado' : 'Explorar'}
                </button>
              </Link>
            </div>

            {/* 10. Gestión de Amenazas en Ciberseguridad */}
            <div className="tema-card" data-course-id="ciberseguridad">
              <div className="tema-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <div className="curso-progress">
                <div className="progress-bar-mini">
                  <div 
                    className="progress-fill-mini" 
                    style={{width: `${getProgresoCurso('ciberseguridad').porcentaje}%`}}
                  ></div>
                </div>
                <span className="progress-text-mini">
                  {getProgresoCurso('ciberseguridad').porcentaje}% completado
                </span>
              </div>
              <h3>Gestión de Amenazas en Ciberseguridad</h3>
              <p>Protege sistemas y datos contra amenazas digitales</p>
              <Link to="/curso/ciberseguridad">
                <button className="btn-tema">
                  {getProgresoCurso('ciberseguridad').completado ? '✅ Completado' : 'Explorar'}
                </button>
              </Link>
            </div>

            {/* 11. Introducción a las Redes Informáticas */}
            <div className="tema-card" data-course-id="redes">
              <div className="tema-icon">
                <i className="fas fa-network-wired"></i>
              </div>
              <div className="curso-progress">
                <div className="progress-bar-mini">
                  <div 
                    className="progress-fill-mini" 
                    style={{width: `${getProgresoCurso('redes').porcentaje}%`}}
                  ></div>
                </div>
                <span className="progress-text-mini">
                  {getProgresoCurso('redes').porcentaje}% completado
                </span>
              </div>
              <h3>Introducción a las Redes Informáticas</h3>
              <p>Fundamentos de conectividad y comunicación digital</p>
              <Link to="/curso/redes">
                <button className="btn-tema">
                  {getProgresoCurso('redes').completado ? '✅ Completado' : 'Explorar'}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pruebas Section */}
      <section id="pruebas" className="pruebas">
        <div className="container">
          <h2><i className="fas fa-clipboard-check"></i> Pruebas Evaluativas</h2>
          <div className="pruebas-grid">
            <div className="prueba-card">
              <div className="prueba-icon">
                <i className="fas fa-search"></i>
              </div>
              <h3>Evaluación Inicial</h3>
              <p>Descubre tu nivel de conocimientos</p>
              <button className="btn-empezar" onClick={() => showNotification('Evaluación inicial próximamente', 'info')}>
                Empezar
              </button>
            </div>
            <div className="prueba-card">
              <div className="prueba-icon">
                <i className="fas fa-layer-group"></i>
              </div>
              <h3>Por Niveles</h3>
              <p>Pruebas específicas para cada grado</p>
              <button className="btn-empezar" onClick={() => showNotification('Pruebas por niveles próximamente', 'info')}>
                Seleccionar
              </button>
            </div>
            <div className="prueba-card">
              <div className="prueba-icon">
                <i className="fas fa-puzzle-piece"></i>
              </div>
              <h3>Por Módulos</h3>
              <p>Evalúa conocimientos por temas</p>
              <button className="btn-empezar" onClick={() => showNotification('Pruebas por módulos próximamente', 'info')}>
                Explorar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ejercicios Section */}
      <section id="ejercicios" className="ejercicios">
        <div className="container">
          <h2><i className="fas fa-laptop-code"></i> Ejercitación</h2>
          <div className="ejercicios-tabs">
            <button 
              className={`tab-btn ${activeTab === 'practica' ? 'active' : ''}`}
              onClick={() => handleTabClick('practica')}
            >
              <i className="fas fa-pen-fancy"></i> Práctica Guiada
            </button>
            <button 
              className={`tab-btn ${activeTab === 'proyectos' ? 'active' : ''}`}
              onClick={() => handleTabClick('proyectos')}
            >
              <i className="fas fa-project-diagram"></i> Proyectos
            </button>
            <button 
              className={`tab-btn ${activeTab === 'retos' ? 'active' : ''}`}
              onClick={() => handleTabClick('retos')}
            >
              <i className="fas fa-flag-checkered"></i> Retos
            </button>
          </div>
          
          <div className={`tab-content ${activeTab === 'practica' ? 'active' : ''}`}>
            <h3>Ejercicios por temas</h3>
            <p>Selecciona un tema para practicar con ejercicios interactivos</p>
            <div className="ejercicios-list">
              <p>Contenido de práctica guiada próximamente...</p>
            </div>
          </div>
          
          <div className={`tab-content ${activeTab === 'proyectos' ? 'active' : ''}`}>
            <h3>Proyectos Guiados</h3>
            <p>Desarrolla proyectos completos paso a paso</p>
            <div className="proyectos-list">
              <p>Proyectos guiados próximamente...</p>
            </div>
          </div>
          
          <div className={`tab-content ${activeTab === 'retos' ? 'active' : ''}`}>
            <h3>Retos de Programación</h3>
            <p>Supera estos desafíos para mejorar tus habilidades</p>
            <div className="retos-list">
              <p>Retos de programación próximamente...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Progreso */}
      <section id="progress" className="progress-section">
        <div className="container">
          <h2><i className="fas fa-chart-line"></i> Mi Progreso</h2>
          <div className="progress-dashboard">
            {isAuthenticated && userData ? (
              <div className="user-progress">
                <h3>¡Hola, {userData.nombre}!</h3>
                <p>Tu progreso en InfoAprende:</p>
                <div className="progress-stats">
                  <div className="stat-card">
                    <h4>Cursos Completados</h4>
                    <span className="stat-number">{progreso.cursosCompletados.length}</span>
                  </div>
                  <div className="stat-card">
                    <h4>Lecciones Completadas</h4>
                    <span className="stat-number">{progreso.leccionesCompletadas.length}</span>
                  </div>
                  <div className="stat-card">
                    <h4>Puntos Ganados</h4>
                    <span className="stat-number">{progreso.puntosTotales}</span>
                  </div>
                </div>
                
                {/* Mostrar logros recientes */}
                {progreso.logros.length > 0 && (
                  <div className="logros-recientes">
                    <h4>🏆 Logros Obtenidos</h4>
                    <div className="logros-grid">
                      {progreso.logros.slice(-3).map((logro, index) => (
                        <div key={index} className="logro-item">
                          <span className="logro-icono">{logro.icono}</span>
                          <div className="logro-info">
                            <h5>{logro.titulo}</h5>
                            <p>{logro.descripcion}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="guest-message">
                <p>Inicia sesión para ver tu progreso y estadísticas</p>
                <Link to="/login">
                  <button className="btn btn-primary">Iniciar Sesión</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Sección de Recursos */}
      <section id="recursos" className="recursos">
        <div className="container">
          <h2><i className="fas fa-book-open"></i> Recursos Adicionales</h2>
          <div className="recursos-grid">
            <div className="recurso-card">
              <i className="fas fa-video"></i>
              <h3>Video Tutoriales</h3>
              <p>Colección de videos explicativos sobre diversos temas</p>
              <button className="btn-recurso" onClick={() => showNotification('Videos próximamente', 'info')}>
                Ver videos
              </button>
            </div>
            <div className="recurso-card">
              <i className="fas fa-file-pdf"></i>
              <h3>Guías Descargables</h3>
              <p>Material de apoyo en formato PDF para complementar tu aprendizaje</p>
              <button className="btn-recurso" onClick={() => showNotification('Guías próximamente', 'info')}>
                Descargar
              </button>
            </div>
            <div className="recurso-card">
              <i className="fas fa-link"></i>
              <h3>Enlaces Útiles</h3>
              <p>Recursos externos seleccionados para profundizar en los temas</p>
              <button className="btn-recurso" onClick={() => showNotification('Enlaces próximamente', 'info')}>
                Explorar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3><i className="fas fa-laptop-code"></i> Informática Educativa</h3>
              <p>Enseñanza de calidad en informática para todos los niveles</p>
            </div>
            <div className="footer-section">
              <h3><i className="fas fa-envelope"></i> Contacto</h3>
              <p><i className="fas fa-envelope"></i> dyangocardoso@hotmail.com</p>
              <p><i className="fas fa-phone"></i> +593 995 851 129</p>
            </div>
            <div className="footer-section">
              <h3><i className="fas fa-share-alt"></i> Síguenos</h3>
              <div className="social-icons">
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
                <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Informática Educativa - InfoAprende. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
