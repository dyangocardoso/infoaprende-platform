import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CursoBase.css';

export default function PowerPoint() {
  const [selectedTema, setSelectedTema] = useState(null);

  const unidadData = {
    titulo: "Diseñador de Presentaciones PowerPoint",
    icono: "fas fa-file-powerpoint",
    descripcion: "Crea presentaciones impactantes y profesionales",
    temas: [
      {
        id: 1,
        titulo: "Primeros pasos",
        tematica: "Inicio y guardado de presentaciones",
        contenido: "Aprende los conceptos básicos para crear, abrir, guardar y gestionar presentaciones en PowerPoint.",
        actividades: [
          "Crear una nueva presentación",
          "Abrir presentaciones existentes",
          "Guardar en diferentes formatos",
          "Configurar propiedades del archivo"
        ]
      },
      {
        id: 2,
        titulo: "Vistas y diapositivas",
        tematica: "Estructuración y navegación de contenido",
        contenido: "Domina las diferentes vistas de PowerPoint y aprende a gestionar diapositivas de manera eficiente.",
        actividades: [
          "Navegar entre vistas Normal, Esquema y Clasificador",
          "Añadir, eliminar y reordenar diapositivas",
          "Duplicar y copiar diapositivas",
          "Usar diseños predefinidos"
        ]
      },
      {
        id: 3,
        titulo: "Manejo de objetos",
        tematica: "Interacción visual con elementos de diseño",
        contenido: "Aprende a insertar, manipular y organizar diferentes tipos de objetos en tus presentaciones.",
        actividades: [
          "Insertar cuadros de texto",
          "Trabajar con formas y líneas",
          "Agrupar y desagrupar objetos",
          "Alinear y distribuir elementos"
        ]
      },
      {
        id: 4,
        titulo: "Diseño",
        tematica: "Temas, fondos y estilos",
        contenido: "Mejora la apariencia visual de tus presentaciones aplicando temas, colores y estilos consistentes.",
        actividades: [
          "Aplicar temas prediseñados",
          "Personalizar colores y fuentes",
          "Modificar fondos de diapositivas",
          "Crear plantillas personalizadas"
        ]
      },
      {
        id: 5,
        titulo: "Texto",
        tematica: "Presentación escrita y estética",
        contenido: "Optimiza la presentación de texto con formatos, estilos y técnicas de diseño efectivas.",
        actividades: [
          "Formatear texto y párrafos",
          "Crear listas con viñetas y numeración",
          "Usar WordArt para títulos impactantes",
          "Aplicar efectos de texto"
        ]
      },
      {
        id: 6,
        titulo: "Imágenes y formas",
        tematica: "Complementos gráficos y expresivos",
        contenido: "Incorpora elementos visuales como imágenes, iconos y formas para hacer más atractivas tus presentaciones.",
        actividades: [
          "Insertar y editar imágenes",
          "Aplicar efectos a imágenes",
          "Crear diagramas con formas",
          "Usar iconos y elementos gráficos"
        ]
      },
      {
        id: 7,
        titulo: "Animaciones y transiciones",
        tematica: "Dinamización de presentaciones",
        contenido: "Añade movimiento y dinamismo a tus presentaciones con animaciones y transiciones profesionales.",
        actividades: [
          "Aplicar transiciones entre diapositivas",
          "Animar objetos y texto",
          "Configurar tiempos de animación",
          "Crear secuencias de animación"
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
        <span>Diseñador de Presentaciones PowerPoint</span>
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
            <span><i className="fas fa-clock"></i> 4-5 horas</span>
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
                    <Link to={`/contenido/powerpoint/${tema.id}`}>
                      <button className="btn btn-info">
                        <i className="fas fa-book"></i> 
                        Contenido Teórico
                      </button>
                    </Link>
                    <Link to={`/quiz/powerpoint/${tema.id}`}>
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
