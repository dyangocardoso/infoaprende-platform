import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CursoBase.css';

export default function Paint() {
  const [selectedTema, setSelectedTema] = useState(null);

  const unidadData = {
    titulo: "Diseñador Gráfico Paint",
    icono: "fas fa-paint-brush",
    descripcion: "Crea y edita imágenes con la herramienta clásica de Windows",
    temas: [
      {
        id: 1,
        titulo: "Herramientas básicas de dibujo",
        tematica: "Exploración y uso de herramientas creativas",
        contenido: "Descubre y domina las herramientas fundamentales de Paint para crear dibujos y diseños básicos.",
        actividades: [
          "Conocer la interfaz de Paint",
          "Usar pincel y lápiz",
          "Aplicar herramienta de borrado",
          "Seleccionar colores de la paleta"
        ]
      },
      {
        id: 2,
        titulo: "Formas",
        tematica: "Creación y manipulación visual",
        contenido: "Aprende a crear formas geométricas y manipularlas para crear composiciones visuales atractivas.",
        actividades: [
          "Dibujar líneas y curvas",
          "Crear círculos y rectángulos",
          "Usar herramienta de polígono",
          "Rellenar formas con colores"
        ]
      },
      {
        id: 3,
        titulo: "Texto y recortes",
        tematica: "Incorporación de elementos gráficos adicionales",
        contenido: "Incorpora texto a tus creaciones y aprende técnicas de recorte para combinar diferentes elementos.",
        actividades: [
          "Insertar y formatear texto",
          "Seleccionar y recortar áreas",
          "Copiar y pegar elementos",
          "Combinar texto e imágenes"
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
        <span>Diseñador Gráfico Paint</span>
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
            <span><i className="fas fa-clock"></i> 2-3 horas</span>
            <span><i className="fas fa-signal"></i> Principiante</span>
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
                    <Link to={`/contenido/paint/${tema.id}`}>
                      <button className="btn btn-info">
                        <i className="fas fa-book"></i> 
                        Contenido Teórico
                      </button>
                    </Link>
                    <Link to={`/quiz/paint/${tema.id}`}>
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
