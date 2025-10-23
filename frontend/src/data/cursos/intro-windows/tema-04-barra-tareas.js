/**
 * Tema 4: Barra de tareas
 * Curso: Introducción al Sistema Operativo Windows
 */

export default {
  id: '4',
  titulo: "Barra de tareas",
  tematica: "Partes, funciones, personalización y trucos de productividad",
  duracion: "25-30 minutos",
  objetivos: [
    "Identificar y comprender todos los elementos de la barra de tareas",
    "Personalizar la barra de tareas según las necesidades del usuario",
    "Anclar y desanclar programas para acceso rápido",
    "Gestionar ventanas abiertas y el área de notificaciones",
    "Utilizar la vista de tareas y escritorios virtuales",
    "Aplicar trucos de productividad con la barra de tareas"
  ],
  secciones: [
    {
      id: 1,
      titulo: "¿Qué es la barra de tareas?",
      contenido: `
        <h3>🟦 Introducción a la Barra de Tareas</h3>
        <p>La <strong>barra de tareas</strong> es una de las áreas más importantes de Windows. Permite acceder rápidamente a programas, ver las ventanas abiertas, gestionar notificaciones y controlar funciones clave del sistema.</p>
        <ul>
          <li>Ubicación predeterminada: parte inferior de la pantalla</li>
          <li>Se puede mover a los lados o arriba</li>
          <li>Permite personalización y organización</li>
        </ul>
      `
    },
    {
      id: 2,
      titulo: "Elementos principales de la barra de tareas",
      contenido: `
        <h4>🧩 Componentes de la Barra de Tareas</h4>
        <ul>
          <li><strong>Botón Inicio:</strong> Acceso al menú de inicio</li>
          <li><strong>Barra de búsqueda:</strong> Buscar programas, archivos y configuraciones</li>
          <li><strong>Programas anclados:</strong> Acceso rápido a aplicaciones favoritas</li>
          <li><strong>Ventanas abiertas:</strong> Vista y cambio entre aplicaciones activas</li>
          <li><strong>Área de notificaciones:</strong> Iconos de sistema, reloj, red, volumen, etc.</li>
          <li><strong>Botón mostrar escritorio:</strong> Minimiza todas las ventanas</li>
        </ul>
      `
    },
    {
      id: 3,
      titulo: "Personalización de la barra de tareas",
      contenido: `
        <h4>🎨 Opciones de Personalización</h4>
        <ul>
          <li>Cambiar posición (abajo, arriba, izquierda, derecha)</li>
          <li>Mostrar u ocultar iconos de sistema</li>
          <li>Anclar/desanclar programas</li>
          <li>Agrupar botones de ventanas</li>
          <li>Usar iconos pequeños o grandes</li>
          <li>Transparencia y color</li>
        </ul>
      `
    },
    {
      id: 4,
      titulo: "Gestión de ventanas y notificaciones",
      contenido: `
        <h4>🪟 Gestión de Ventanas</h4>
        <ul>
          <li>Cambiar entre ventanas abiertas (Alt+Tab, clic en iconos)</li>
          <li>Agrupar ventanas de la misma aplicación</li>
          <li>Vista previa de ventanas al pasar el mouse</li>
          <li>Minimizar, maximizar o cerrar desde la barra</li>
        </ul>
        <h4>🔔 Área de Notificaciones</h4>
        <ul>
          <li>Ver notificaciones del sistema y aplicaciones</li>
          <li>Acceso rápido a configuración de red, volumen, batería</li>
          <li>Personalizar iconos visibles</li>
        </ul>
      `
    },
    {
      id: 5,
      titulo: "Vista de tareas y escritorios virtuales",
      contenido: `
        <h4>🖥️ Vista de Tareas y Escritorios Virtuales</h4>
        <ul>
          <li>Acceso a la vista de tareas (Windows + Tab)</li>
          <li>Crear y gestionar escritorios virtuales</li>
          <li>Mover ventanas entre escritorios</li>
          <li>Organizar el trabajo por áreas temáticas</li>
        </ul>
      `
    },
    {
      id: 6,
      titulo: "Trucos y productividad",
      contenido: `
        <h4>⚡ Trucos de Productividad</h4>
        <ul>
          <li>Anclar carpetas y sitios web</li>
          <li>Usar atajos de teclado para la barra de tareas</li>
          <li>Reiniciar el Explorador de Windows desde la barra</li>
          <li>Acceso rápido al administrador de tareas (Ctrl+Shift+Esc)</li>
          <li>Personalizar la barra para diferentes usuarios</li>
        </ul>
      `
    }
  ],
  actividades: [
    "Personaliza la barra de tareas cambiando su posición y color",
    "Ancla y desancla al menos dos programas",
    "Utiliza la vista de tareas para crear un escritorio virtual",
    "Configura los iconos visibles en el área de notificaciones",
    "Prueba los atajos de teclado para cambiar entre ventanas"
  ],
  recursos: {
    documentos: [
      {
        titulo: "Guía visual de la barra de tareas",
        url: "/recursos/intro-windows/guia-barra-tareas.pdf",
        tipo: "pdf"
      },
      {
        titulo: "Cheatsheet: Atajos para barra de tareas",
        url: "/recursos/intro-windows/atajos-barra-tareas.pdf",
        tipo: "pdf"
      }
    ],
    enlaces: [
      {
        titulo: "Soporte Microsoft - Barra de tareas",
        url: "https://support.microsoft.com/es-es/windows/barra-de-tareas-en-windows",
        tipo: "externo"
      }
    ],
    videos: [
      {
        titulo: "Video: Personalización avanzada de la barra de tareas",
        url: "/videos/intro-windows/personalizacion-barra-tareas.mp4",
        duracion: "06:12"
      }
    ],
    imagenes: [
      {
        titulo: "Ejemplo: barra de tareas personalizada",
        url: "/images/intro-windows/barra-tareas-ejemplo.png"
      }
    ]
  },
  evaluacion: {
    tipo: "cuestionario",
    preguntas: [
      {
        pregunta: "¿Cuál es la función principal del botón 'Mostrar escritorio'?",
        opciones: [
          "Abrir el menú de inicio",
          "Minimizar todas las ventanas",
          "Cerrar la sesión de usuario",
          "Abrir el administrador de tareas"
        ],
        respuesta: 1
      },
      {
        pregunta: "¿Cómo se accede a la vista de tareas?",
        opciones: [
          "Ctrl + Alt + Supr",
          "Windows + Tab",
          "Alt + F4",
          "Windows + E"
        ],
        respuesta: 1
      },
      {
        pregunta: "¿Qué permite la barra de tareas al anclar programas?",
        opciones: [
          "Acceso rápido a aplicaciones frecuentes",
          "Eliminar programas del sistema",
          "Cambiar la resolución de pantalla",
          "Actualizar Windows"
        ],
        respuesta: 0
      }
    ]
  }
};
