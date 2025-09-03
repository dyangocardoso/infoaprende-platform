import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CursoBase.css';

export default function Paint3D() {
  const [selectedTema, setSelectedTema] = useState(null);

  const unidadData = {
    titulo: "Diseñador Gráfico Paint 3D",
    icono: "fas fa-cube",
    descripcion: "Explora el diseño tridimensional con Paint 3D",
    temas: [
      {
        id: 1,
        titulo: "Exploración de Paint 3D",
        tematica: "Entorno, herramientas y funcionalidades",
        contenido: "Familiarízate con la interfaz de Paint 3D y descubre todas las herramientas disponibles para crear diseños tridimensionales.",
        actividades: [
          "Conocer la interfaz de Paint 3D",
          "Explorar herramientas 3D",
          "Navegar por el espacio tridimensional",
          "Configurar vistas y perspectivas"
        ]
      },
      {
        id: 2,
        titulo: "Creación de objetos 3D",
        tematica: "Modelado básico tridimensional",
        contenido: "Aprende a crear y modificar objetos tridimensionales usando las herramientas de modelado de Paint 3D.",
        actividades: [
          "Crear formas 3D básicas",
          "Modificar dimensiones de objetos",
          "Combinar múltiples formas",
          "Usar herramientas de extrusión"
        ]
      },
      {
        id: 3,
        titulo: "Pintura y decoración",
        tematica: "Personalización visual con efectos",
        contenido: "Decora tus objetos 3D con colores, texturas y efectos para crear diseños visualmente atractivos.",
        actividades: [
          "Aplicar colores y texturas",
          "Usar pinceles especializados",
          "Añadir efectos de iluminación",
          "Crear patrones y decoraciones"
        ]
      },
      {
        id: 4,
        titulo: "Escenarios y composición",
        tematica: "Construcción de escenas narrativas",
        contenido: "Combina múltiples elementos para crear escenas completas y narrativas visuales en 3D.",
        actividades: [
          "Organizar objetos en escenas",
          "Configurar fondos y ambientes",
          "Gestionar capas y profundidad",
          "Crear composiciones equilibradas"
        ]
      },
      {
        id: 5,
        titulo: "Exposición creativa",
        tematica: "Socialización y presentación del trabajo",
        contenido: "Aprende a exportar y compartir tus creaciones 3D para presentarlas a otros.",
        actividades: [
          "Exportar proyectos en diferentes formatos",
          "Crear animaciones simples",
          "Preparar presentaciones",
          "Compartir creaciones en línea"
        ]
      }
    ]
  };

  const handleTemaClick = (tema) => {
    setSelectedTema(selectedTema?.id === tema.id ? null : tema);
  };

  return (
    <div className="curso-container">
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link to="/">🏠 Inicio</Link>
        <span> / </span>
        <span>Diseñador Gráfico Paint 3D</span>
      </nav>

      {/* Header de la unidad */}
      <header className="curso-header">
        <div className="curso-icon">
          <i className={unidadData.icono}></i>
        </div>
        <div className="curso-info">
          <h1>{unidadData.titulo}</h1>
          <p>{unidadData.descripcion}</p>
          <div className="curso-stats">
            <span><i className="fas fa-book"></i> {unidadData.temas.length} Temas</span>
            <span><i className="fas fa-clock"></i> 3-4 horas</span>
            <span><i className="fas fa-signal"></i> Intermedio</span>
          </div>
        </div>
      </header>

      {/* Lista de temas */}
      <div className="temas-container">
        <h2>📚 Contenido del Curso</h2>
        <div className="temas-list">
          {unidadData.temas.map((tema) => (
            <div key={tema.id} className={`tema-item ${selectedTema?.id === tema.id ? 'active' : ''}`}>
              <div className="tema-header" onClick={() => handleTemaClick(tema)}>
                <div className="tema-numero">{tema.id}</div>
                <div className="tema-title">
                  <h3>{tema.titulo}</h3>
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
                    <p>{tema.contenido}</p>
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
                    <button className="btn btn-primary">
                      <i className="fas fa-play"></i> Comenzar Tema
                    </button>
                    <Link to={`/contenido/paint-3d/${tema.id}`}>
                      <button className="btn btn-info">
                        <i className="fas fa-book"></i> 
                        Contenido Teórico
                      </button>
                    </Link>
                    <Link to={`/quiz/paint-3d/${tema.id}`}>
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
          ))}
        </div>
      </div>

      {/* Acciones del curso */}
      <div className="curso-actions">
        <button className="btn btn-success btn-lg">
          <i className="fas fa-play-circle"></i> Comenzar Curso Completo
        </button>
        <button className="btn btn-outline btn-lg">
          <i className="fas fa-bookmark"></i> Guardar para después
        </button>
      </div>
    </div>
  );
}
