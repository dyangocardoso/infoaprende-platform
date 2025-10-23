/**
 * Tema 6: Papelera de reciclaje
 * Curso: Introducción al Sistema Operativo Windows
 */

export default {
  id: '6',
  titulo: "Papelera de reciclaje",
  tematica: "Gestión de archivos eliminados, restauración y configuración",
  duracion: "20-25 minutos",
  objetivos: [
    "Comprender el funcionamiento de la papelera de reciclaje",
    "Restaurar archivos y carpetas eliminados",
    "Vaciar la papelera de forma segura",
    "Configurar el comportamiento de la papelera",
    "Evitar la pérdida accidental de información",
    "Aplicar buenas prácticas en la gestión de archivos eliminados"
  ],
  secciones: [
    {
      id: 1,
      titulo: "¿Qué es la papelera de reciclaje?",
      contenido: `
        <h3>🗑️ Introducción a la Papelera de Reciclaje</h3>
        <p>La <strong>papelera de reciclaje</strong> es una ubicación especial donde se almacenan temporalmente los archivos y carpetas eliminados. Permite recuperar información borrada por error antes de eliminarla definitivamente.</p>
        <ul>
          <li>Acceso desde el escritorio</li>
          <li>Al eliminar un archivo, va primero a la papelera</li>
          <li>Se puede restaurar o eliminar permanentemente</li>
        </ul>
      `
    },
    {
      id: 2,
      titulo: "Restaurar y eliminar archivos",
      contenido: `
        <h4>♻️ Restaurar Archivos</h4>
        <ul>
          <li>Seleccionar archivo y hacer clic en "Restaurar"</li>
          <li>El archivo vuelve a su ubicación original</li>
          <li>Se pueden restaurar varios archivos a la vez</li>
        </ul>
        <h4>🗑️ Eliminar Permanentemente</h4>
        <ul>
          <li>Vaciar la papelera elimina todo su contenido</li>
          <li>Archivos eliminados de la papelera no se pueden recuperar fácilmente</li>
        </ul>
      `
    },
    {
      id: 3,
      titulo: "Configuración de la papelera de reciclaje",
      contenido: `
        <h4>⚙️ Opciones de Configuración</h4>
        <ul>
          <li>Establecer tamaño máximo de almacenamiento</li>
          <li>Elegir si mostrar confirmación al eliminar</li>
          <li>Excluir discos o particiones específicas</li>
          <li>Vaciar automáticamente al cerrar sesión</li>
        </ul>
      `
    },
    {
      id: 4,
      titulo: "Buenas prácticas y prevención",
      contenido: `
        <h4>🛡️ Buenas Prácticas</h4>
        <ul>
          <li>Revisar la papelera antes de vaciarla</li>
          <li>No vaciar la papelera automáticamente sin revisar</li>
          <li>Utilizar la papelera como medida de seguridad</li>
          <li>Evitar eliminar archivos del sistema</li>
        </ul>
      `
    },
    {
      id: 5,
      titulo: "Trucos y consejos",
      contenido: `
        <h4>💡 Trucos y Consejos</h4>
        <ul>
          <li>Eliminar archivos directamente (Shift+Supr) para saltar la papelera</li>
          <li>Recuperar archivos incluso después de vaciar la papelera (con software especializado)</li>
          <li>Personalizar el icono de la papelera en el escritorio</li>
        </ul>
      `
    }
  ],
  actividades: [
    "Elimina un archivo y recupéralo desde la papelera de reciclaje",
    "Vacía la papelera y observa el cambio de icono",
    "Configura la papelera para pedir confirmación antes de eliminar",
    "Prueba eliminar un archivo usando Shift+Supr",
    "Personaliza el icono de la papelera en el escritorio"
  ],
  recursos: {
    documentos: [
      {
        titulo: "Guía visual de la papelera de reciclaje",
        url: "/recursos/intro-windows/guia-papelera-reciclaje.pdf",
        tipo: "pdf"
      }
    ],
    enlaces: [],
    videos: [
      {
        titulo: "Video: Gestión avanzada de la papelera de reciclaje",
        url: "/videos/intro-windows/gestion-papelera-reciclaje.mp4",
        duracion: "06:20"
      }
    ],
    imagenes: []
  },
  evaluacion: {
    tipo: "cuestionario",
    preguntas: [
      {
        pregunta: "¿Cuál es la función principal de la papelera de reciclaje?",
        opciones: [
          "Eliminar archivos permanentemente",
          "Almacenar temporalmente archivos eliminados",
          "Respaldar archivos importantes",
          "Actualizar el sistema operativo"
        ],
        respuesta: 1
      },
      {
        pregunta: "¿Cómo se puede restaurar un archivo eliminado?",
        opciones: [
          "Vaciar la papelera",
          "Seleccionar y hacer clic en 'Restaurar'",
          "Eliminarlo nuevamente",
          "No se puede restaurar"
        ],
        respuesta: 1
      },
      {
        pregunta: "¿Qué sucede al vaciar la papelera de reciclaje?",
        opciones: [
          "Los archivos se restauran automáticamente",
          "Los archivos se eliminan permanentemente",
          "Se crea una copia de seguridad",
          "No ocurre nada"
        ],
        respuesta: 1
      }
    ]
  }
};
