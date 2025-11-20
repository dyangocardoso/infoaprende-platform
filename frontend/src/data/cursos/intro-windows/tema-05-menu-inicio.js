/**
 * Tema 5: Menú de Inicio
 * Curso: Introducción al Sistema Operativo Windows
 */

export default {
  id: '5',
  titulo: "Menú de Inicio",
  tematica: "Funciones, personalización, búsqueda y accesos rápidos",
  duracion: "25-30 minutos",
  objetivos: [
    "Identificar todas las secciones y funciones del menú de inicio",
    "Personalizar el menú de inicio con mosaicos y accesos directos",
    "Buscar programas, archivos y configuraciones desde el menú",
    "Organizar y agrupar aplicaciones para mayor productividad",
    "Configurar la lista de aplicaciones más usadas y recientes",
    "Aplicar trucos de búsqueda y personalización avanzada"
  ],
  secciones: [
    {
      id: 1,
      titulo: "¿Qué es el menú de inicio?",
      contenido: `
        <h3>🟩 Introducción al Menú de Inicio</h3>
        <p>El <strong>menú de inicio</strong> es el punto de partida para acceder a todas las aplicaciones, configuraciones y archivos en Windows. Es una herramienta clave para la navegación y organización del sistema.</p>
        <ul>
          <li>Ubicación: esquina inferior izquierda de la pantalla</li>
          <li>Acceso rápido a programas y configuraciones</li>
          <li>Permite búsqueda instantánea</li>
        </ul>
      `
    },
    {
      id: 2,
      titulo: "Partes y secciones del menú de inicio",
      contenido: `
        <h4>🧩 Componentes del Menú de Inicio</h4>
        <ul>
          <li><strong>Lista de aplicaciones:</strong> Todas las apps instaladas</li>
          <li><strong>Mosaicos:</strong> Accesos directos personalizables</li>
          <li><strong>Barra de búsqueda:</strong> Buscar apps, archivos y configuraciones</li>
          <li><strong>Acceso rápido:</strong> Apagar, reiniciar, configuración, usuario</li>
          <li><strong>Carpetas ancladas:</strong> Documentos, imágenes, descargas</li>
        </ul>
      `
    },
    {
      id: 3,
      titulo: "Personalización del menú de inicio",
      contenido: `
        <h4>🎨 Opciones de Personalización</h4>
        <ul>
          <li>Anclar y desanclar mosaicos</li>
          <li>Cambiar tamaño y posición de mosaicos</li>
          <li>Crear grupos de aplicaciones</li>
          <li>Mostrar/ocultar lista de apps más usadas</li>
          <li>Elegir carpetas que aparecen</li>
        </ul>
      `
    },
    {
      id: 4,
      titulo: "Búsqueda y accesos rápidos",
      contenido: `
        <h4>🔎 Búsqueda desde el Menú de Inicio</h4>
        <ul>
          <li>Buscar programas, archivos y configuraciones</li>
          <li>Filtrar resultados por tipo</li>
          <li>Acceso rápido a resultados recientes</li>
          <li>Usar comandos directos (ej: calc, notepad)</li>
        </ul>
        <h4>⚡ Accesos Rápidos</h4>
        <ul>
          <li>Apagar, reiniciar, suspender</li>
          <li>Cambiar de usuario o cerrar sesión</li>
          <li>Acceso a configuración y explorador</li>
        </ul>
      `
    },
    {
      id: 5,
      titulo: "Trucos y productividad",
      contenido: `
        <h4>💡 Trucos de Productividad</h4>
        <ul>
          <li>Personalizar grupos de mosaicos</li>
          <li>Usar atajos de teclado para abrir el menú (Windows)</li>
          <li>Anclar sitios web y carpetas</li>
          <li>Buscar directamente desde el teclado</li>
          <li>Restablecer el menú de inicio si hay problemas</li>
        </ul>
      `
    }
  ],
  actividades: [
    "Personaliza el menú de inicio anclando y organizando mosaicos",
    "Utiliza la barra de búsqueda para encontrar una aplicación y un archivo",
    "Crea un grupo de aplicaciones en el menú de inicio",
    "Configura las carpetas que aparecen junto al botón de encendido",
    "Prueba los atajos de teclado para abrir y navegar el menú de inicio"
  ],
  recursos: {
    documentos: [
      {
        titulo: "Guía visual del menú de inicio",
        url: "/recursos/intro-windows/guia-menu-inicio.pdf",
        tipo: "pdf"
      },
      {
        titulo: "Guía rápida: Mosaicos y grupos en el menú de inicio",
        url: "/recursos/intro-windows/atajos-menu-inicio.pdf",
        tipo: "pdf"
      }
    ],
    enlaces: [
      {
        titulo: "Soporte Microsoft - Personalizar el menú de inicio",
        url: "https://support.microsoft.com/es-es/windows/personalizar-el-men%C3%BA-de-inicio-en-windows",
        tipo: "externo"
      }
    ],
    videos: [
      {
        titulo: "Video: Personalización avanzada del menú de inicio",
        url: "/videos/intro-windows/personalizacion-menu-inicio.mp4",
        duracion: "05:45"
      }
    ],
    imagenes: [
      {
        titulo: "Ejemplo: menú de inicio con mosaicos organizados",
        url: "/images/intro-windows/menu-inicio-ejemplo.png"
      }
    ]
  },
  evaluacion: {
    tipo: "cuestionario",
    preguntas: [
      {
        pregunta: "¿Cuál es la función principal del menú de inicio?",
        opciones: [
          "Buscar archivos únicamente",
          "Acceder a aplicaciones, archivos y configuraciones",
          "Cerrar la sesión de usuario",
          "Cambiar el fondo de pantalla"
        ],
        respuesta: 1
      },
      {
        pregunta: "¿Cómo se puede personalizar el menú de inicio?",
        opciones: [
          "Cambiando el color únicamente",
          "Anclando/desanclando mosaicos y organizando grupos",
          "No se puede personalizar",
          "Solo cambiando el tamaño de los iconos"
        ],
        respuesta: 1
      },
      {
        pregunta: "¿Qué permite la barra de búsqueda del menú de inicio?",
        opciones: [
          "Buscar solo aplicaciones",
          "Buscar programas, archivos y configuraciones",
          "Buscar en internet únicamente",
          "No tiene función de búsqueda"
        ],
        respuesta: 1
      }
    ]
  }
};
