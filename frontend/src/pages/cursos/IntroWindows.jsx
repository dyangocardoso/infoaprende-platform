import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CursoBase.css';

export default function IntroWindows() {
  const [selectedTema, setSelectedTema] = useState(null);

  const unidadData = {
    titulo: "Introducción al Sistema Operativo Windows",
    icono: "fab fa-windows",
    descripcion: "Aprende a navegar y utilizar Windows de manera eficiente",
    temas: [
      {
        id: 1,
        titulo: "Dispositivos básicos",
        tematica: "Reconocimiento de elementos de interacción",
        contenido: "Identifica y comprende el funcionamiento de los dispositivos básicos necesarios para interactuar con Windows.",
        actividades: [
          "Reconocer mouse, teclado y monitor",
          "Conectar dispositivos correctamente",
          "Verificar funcionamiento básico",
          "Solución de problemas simples"
        ]
      },
      {
        id: 2,
        titulo: "Manejo de ventanas",
        tematica: "Interacción con el entorno gráfico",
        contenido: "Aprende a manipular ventanas: abrir, cerrar, minimizar, maximizar y redimensionar para una mejor experiencia de uso.",
        actividades: [
          "Abrir y cerrar ventanas",
          "Minimizar y maximizar",
          "Redimensionar ventanas",
          "Organizar múltiples ventanas"
        ]
      },
      {
        id: 3,
        titulo: "Escritorio de Windows",
        tematica: "Organización visual y funcional",
        contenido: "Domina el escritorio de Windows, personalízalo y organiza tus elementos para un trabajo más eficiente.",
        actividades: [
          "Personalizar fondo de pantalla",
          "Organizar iconos del escritorio",
          "Crear y eliminar accesos directos",
          "Configurar resolución de pantalla"
        ]
      },
      {
        id: 4,
        titulo: "Barra de tareas",
        tematica: "Acceso rápido y control de aplicaciones",
        contenido: "Utiliza la barra de tareas para acceder rápidamente a programas y controlar aplicaciones abiertas.",
        actividades: [
          "Anclar programas a la barra",
          "Cambiar entre aplicaciones",
          "Personalizar área de notificaciones",
          "Configurar opciones de la barra"
        ]
      },
      {
        id: 5,
        titulo: "Menú de Inicio",
        tematica: "Navegación y personalización del sistema",
        contenido: "Navega eficientemente por el menú de inicio y personalízalo según tus necesidades y preferencias.",
        actividades: [
          "Buscar programas y archivos",
          "Organizar mosaicos y grupos",
          "Acceder a configuraciones",
          "Personalizar menú de inicio"
        ]
      },
      {
        id: 6,
        titulo: "Explorador de Windows",
        tematica: "Gestión de archivos y carpetas",
        contenido: "Gestiona tus archivos y carpetas de manera eficiente usando el Explorador de Windows.",
        actividades: [
          "Navegar por carpetas",
          "Crear y eliminar archivos",
          "Copiar y mover elementos",
          "Buscar archivos específicos"
        ]
      },
      {
        id: 7,
        titulo: "Papelera de reciclaje",
        tematica: "Restauración y eliminación de elementos",
        contenido: "Comprende el funcionamiento de la papelera de reciclaje para gestionar elementos eliminados.",
        actividades: [
          "Enviar archivos a la papelera",
          "Restaurar elementos eliminados",
          "Vaciar papelera de reciclaje",
          "Eliminación permanente"
        ]
      },
      {
        id: 8,
        titulo: "Usuarios y control parental",
        tematica: "Configuración de perfiles y seguridad",
        contenido: "Configura usuarios y controles parentales para un uso seguro y personalizado del sistema.",
        actividades: [
          "Crear cuentas de usuario",
          "Configurar controles parentales",
          "Gestionar permisos de usuario",
          "Cambiar entre usuarios"
        ]
      },
      {
        id: 9,
        titulo: "Aplicaciones y configuración",
        tematica: "Herramientas, protección y personalización del entorno",
        contenido: "Instala aplicaciones, configura el sistema y personaliza tu entorno de trabajo en Windows.",
        actividades: [
          "Instalar y desinstalar programas",
          "Configurar opciones del sistema",
          "Personalizar apariencia",
          "Configurar seguridad básica"
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
        <span>Introducción al Sistema Operativo Windows</span>
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
                    <Link to={`/contenido/intro-windows/${tema.id}`}>
                      <button className="btn btn-info">
                        <i className="fas fa-book"></i> 
                        Contenido Teórico
                      </button>
                    </Link>
                    <Link to={`/quiz/intro-windows/${tema.id}`}>
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
