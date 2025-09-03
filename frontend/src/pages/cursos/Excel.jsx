import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CursoBase.css';

export default function Excel() {
  const [selectedTema, setSelectedTema] = useState(null);

  const unidadData = {
    titulo: "Tabulador Electrónico Excel",
    icono: "fas fa-file-excel",
    descripcion: "Gestiona datos y crea análisis con hojas de cálculo",
    temas: [
      {
        id: 1,
        titulo: "Introducción",
        tematica: "Familiarización con el entorno",
        contenido: "Conoce la interfaz de Excel, sus elementos principales y las funciones básicas para comenzar a trabajar.",
        actividades: [
          "Explorar la interfaz de Excel",
          "Conocer filas, columnas y celdas",
          "Navegar por hojas de cálculo",
          "Usar la cinta de opciones"
        ]
      },
      {
        id: 2,
        titulo: "Edición de datos",
        tematica: "Ingreso y modificación de información",
        contenido: "Aprende a ingresar, editar y validar diferentes tipos de datos en las celdas de Excel.",
        actividades: [
          "Introducir texto y números",
          "Editar contenido de celdas",
          "Usar tipos de datos especiales",
          "Validar entrada de datos"
        ]
      },
      {
        id: 3,
        titulo: "Manipulación de celdas",
        tematica: "Organización del contenido digital",
        contenido: "Domina las técnicas para seleccionar, copiar, mover y organizar el contenido en las celdas.",
        actividades: [
          "Seleccionar rangos de celdas",
          "Copiar, cortar y pegar datos",
          "Insertar y eliminar filas/columnas",
          "Redimensionar celdas"
        ]
      },
      {
        id: 4,
        titulo: "Formatos",
        tematica: "Personalización visual de datos",
        contenido: "Mejora la presentación de tus datos aplicando formatos de número, texto y celdas.",
        actividades: [
          "Formatear números y fechas",
          "Aplicar estilos de fuente",
          "Usar colores y bordes",
          "Crear formatos personalizados"
        ]
      },
      {
        id: 5,
        titulo: "Estructura del libro",
        tematica: "Gestión de hojas y organización interna",
        contenido: "Organiza tu trabajo gestionando múltiples hojas dentro de un libro de Excel.",
        actividades: [
          "Crear y eliminar hojas",
          "Renombrar y reordenar hojas",
          "Vincular datos entre hojas",
          "Proteger hojas y libros"
        ]
      },
      {
        id: 6,
        titulo: "Fórmulas",
        tematica: "Automatización del cálculo",
        contenido: "Crea fórmulas y usa funciones para automatizar cálculos y análisis de datos.",
        actividades: [
          "Crear fórmulas básicas",
          "Usar funciones matemáticas",
          "Aplicar referencias de celdas",
          "Usar funciones lógicas simples"
        ]
      },
      {
        id: 7,
        titulo: "Formato condicional",
        tematica: "Representación dinámica de criterios",
        contenido: "Aplica formato condicional para resaltar datos importantes y crear representaciones visuales dinámicas.",
        actividades: [
          "Crear reglas de formato condicional",
          "Usar escalas de colores",
          "Aplicar barras de datos",
          "Configurar iconos condicionales"
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
        <span>Tabulador Electrónico Excel</span>
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
                    <Link to={`/contenido/excel/${tema.id}`}>
                      <button className="btn btn-info">
                        <i className="fas fa-book"></i> 
                        Contenido Teórico
                      </button>
                    </Link>
                    <Link to={`/quiz/excel/${tema.id}`}>
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
