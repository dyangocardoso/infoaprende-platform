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
        titulo: "Elementos y funciones básicas",
        tematica: "Ratón, teclado, ventanas, escritorio, barra de tareas y menú Inicio",
        contenido: "Aprende los elementos básicos de Windows y las funciones fundamentales para interactuar eficientemente con el sistema operativo.",
        actividades: [
          "Ratón: uso correcto, tipos de clic y navegación",
          "Teclado: teclas principales y atajos básicos",
          "Teclado en pantalla: activación y uso",
          "Ventanas: maximizar, minimizar, cerrar y organizar",
          "Escritorio: personalización y accesos directos",
          "Barra de tareas: funciones básicas y configuración",
          "Menú Inicio: navegación y búsqueda básica"
        ]
      },
      {
        id: 2,
        titulo: "Explorador de Windows",
        tematica: "Partes, vistas, personalización, archivos, carpetas, unidades y operaciones",
        contenido: "Domina el Explorador de Windows para gestionar eficientemente todos tus archivos, carpetas y unidades de almacenamiento.",
        actividades: [
          "Partes del Explorador: panel de navegación, área principal",
          "Vistas: iconos, lista, detalles y personalización",
          "Archivos: propiedades, tipos y extensiones",
          "Carpetas: crear, organizar y estructura",
          "Unidades: discos duros, USB y unidades de red",
          "Operaciones: copiar, mover, renombrar y eliminar",
          "Búsqueda avanzada de archivos",
          "Personalización: ordenar, filtrar y agrupar"
        ]
      },
      {
        id: 3,
        titulo: "Escritorio de Windows",
        tematica: "Partes, organización visual y personalización",
        contenido: "Conoce a fondo el escritorio de Windows, sus componentes y cómo personalizarlo para optimizar tu experiencia de trabajo.",
        actividades: [
          "Partes del escritorio: iconos, fondo, área de trabajo",
          "Iconos del escritorio: tipos y funciones",
          "Organización visual: alineación y distribución",
          "Personalización del fondo de pantalla",
          "Temas y combinaciones de colores",
          "Protector de pantalla y configuración",
          "Resolución de pantalla y escalado",
          "Accesos directos: crear, modificar y eliminar"
        ]
      },
      {
        id: 4,
        titulo: "Barra de tareas",
        tematica: "Partes, acceso rápido y control de aplicaciones",
        contenido: "Aprende a utilizar la barra de tareas como centro de control para acceder rápidamente a programas y gestionar aplicaciones.",
        actividades: [
          "Partes de la barra: botón Inicio, área de aplicaciones, notificaciones",
          "Anclar y desanclar programas",
          "Cambio entre aplicaciones abiertas",
          "Área de notificaciones: íconos del sistema",
          "Acceso rápido a herramientas",
          "Personalización de la barra de tareas",
          "Control de aplicaciones en ejecución",
          "Configuración de opciones avanzadas"
        ]
      },
      {
        id: 5,
        titulo: "Menú de Inicio",
        tematica: "Navegación y personalización del sistema",
        contenido: "Domina el menú de Inicio como punto central de navegación y personalización de tu sistema Windows.",
        actividades: [
          "Navegación por las secciones del menú",
          "Lista de aplicaciones y programas",
          "Mosaicos y grupos de aplicaciones",
          "Búsqueda de programas y archivos",
          "Personalización de mosaicos",
          "Configuración de opciones del menú",
          "Acceso a configuraciones del sistema",
          "Apagado y opciones de energía"
        ]
      },
      {
        id: 6,
        titulo: "Papelera de reciclaje",
        tematica: "Restauración y eliminación de elementos",
        contenido: "Comprende el funcionamiento de la papelera de reciclaje para gestionar eficientemente elementos eliminados.",
        actividades: [
          "Ubicación y acceso a la papelera",
          "Enviar archivos y carpetas a la papelera",
          "Visualizar contenido de la papelera",
          "Restaurar elementos eliminados",
          "Restauración a ubicación original",
          "Eliminación permanente de elementos",
          "Vaciar papelera de reciclaje",
          "Configuración de propiedades de la papelera"
        ]
      },
      {
        id: 7,
        titulo: "Gestión de usuarios y seguridad",
        tematica: "Tipos de cuentas, control parental, compartir carpetas y permisos",
        contenido: "Aprende a gestionar usuarios y configurar medidas de seguridad para proteger tu sistema y datos.",
        actividades: [
          "Tipos de cuentas: administrador, estándar y invitado",
          "Crear y eliminar cuentas de usuario",
          "Configuración de control parental",
          "Restricciones de tiempo y aplicaciones",
          "Compartir carpetas en la red",
          "Configuración de permisos de archivos",
          "Permisos de lectura, escritura y ejecución",
          "Seguridad básica del sistema"
        ]
      },
      {
        id: 8,
        titulo: "Herramientas y utilidades",
        tematica: "Windows Defender, compresión de archivos e instalación/desinstalación de programas",
        contenido: "Conoce las herramientas esenciales de Windows para mantener tu sistema seguro, organizado y funcionando correctamente.",
        actividades: [
          "Windows Defender: protección antivirus",
          "Análisis de seguridad del sistema",
          "Firewall de Windows",
          "Compresión de archivos: crear archivos ZIP",
          "Extraer archivos comprimidos",
          "Instalación de programas y aplicaciones",
          "Desinstalación de programas",
          "Panel de control y configuración del sistema"
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
