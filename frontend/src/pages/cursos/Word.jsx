import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CursoBase.css';

export default function Word() {
  const [selectedTema, setSelectedTema] = useState(null);

  const unidadData = {
    titulo: "Procesador de Texto Word",
    icono: "fas fa-file-word",
    descripcion: "Domina la creación y edición de documentos profesionales",
    temas: [
      {
        id: 1,
        titulo: "Entorno de Word",
        tematica: "Navegación y manejo básico",
        contenido: "Familiarízate con la interfaz de Microsoft Word y aprende a navegar por sus herramientas y menús.",
        actividades: [
          "Conocer la cinta de opciones",
          "Usar el panel de navegación",
          "Configurar vistas del documento",
          "Personalizar barra de herramientas"
        ]
      },
      {
        id: 2,
        titulo: "Edición básica",
        tematica: "Gestión del texto y elementos simples",
        contenido: "Aprende las técnicas fundamentales de edición de texto: escribir, seleccionar, copiar, cortar y pegar.",
        actividades: [
          "Escribir y editar texto",
          "Seleccionar texto de diferentes formas",
          "Usar copiar, cortar y pegar",
          "Deshacer y rehacer acciones"
        ]
      },
      {
        id: 3,
        titulo: "Formato del documento",
        tematica: "Estética y organización textual",
        contenido: "Mejora la apariencia de tus documentos aplicando formatos de fuente, párrafo y página.",
        actividades: [
          "Cambiar fuente, tamaño y color",
          "Aplicar negrita, cursiva y subrayado",
          "Configurar alineación de párrafos",
          "Establecer márgenes y orientación"
        ]
      },
      {
        id: 4,
        titulo: "Ortografía y gramática",
        tematica: "Corrección y revisión lingüística",
        contenido: "Utiliza las herramientas de corrección de Word para mejorar la calidad lingüística de tus documentos.",
        actividades: [
          "Revisar ortografía automática",
          "Corregir gramática y estilo",
          "Usar el diccionario de sinónimos",
          "Configurar idiomas del documento"
        ]
      },
      {
        id: 5,
        titulo: "Estilos",
        tematica: "Estandarización y personalización",
        contenido: "Aplica y crea estilos para mantener consistencia visual y facilitar el formato de documentos extensos.",
        actividades: [
          "Aplicar estilos predefinidos",
          "Crear estilos personalizados",
          "Modificar estilos existentes",
          "Gestionar conjunto de estilos"
        ]
      },
      {
        id: 6,
        titulo: "Imágenes y gráficos",
        tematica: "Enriquecimiento visual del contenido",
        contenido: "Incorpora elementos visuales como imágenes, formas y gráficos para enriquecer tus documentos.",
        actividades: [
          "Insertar imágenes desde archivo",
          "Buscar e insertar imágenes en línea",
          "Crear y modificar formas",
          "Ajustar posición y tamaño de elementos"
        ]
      },
      {
        id: 7,
        titulo: "Tablas",
        tematica: "Organización estructurada de información",
        contenido: "Crea y formatea tablas para organizar información de manera clara y profesional.",
        actividades: [
          "Insertar y modificar tablas",
          "Formatear celdas y bordes",
          "Combinar y dividir celdas",
          "Aplicar estilos de tabla"
        ]
      },
      {
        id: 8,
        titulo: "Diagramas y organigramas",
        tematica: "Representación visual de relaciones",
        contenido: "Usa SmartArt para crear diagramas, organigramas y representaciones visuales de información compleja.",
        actividades: [
          "Crear diagramas con SmartArt",
          "Personalizar organigramas",
          "Modificar colores y estilos",
          "Añadir y organizar elementos"
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
        <span>Procesador de Texto Word</span>
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
            <span><i className="fas fa-clock"></i> 5-6 horas</span>
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
                    <Link to={`/contenido/word/${tema.id}`}>
                      <button className="btn btn-info">
                        <i className="fas fa-book"></i> 
                        Contenido Teórico
                      </button>
                    </Link>
                    <Link to={`/quiz/word/${tema.id}`}>
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
