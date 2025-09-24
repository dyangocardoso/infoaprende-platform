/**
 * Tema 1: Entorno de Word
 * Curso: Procesador de Texto Word
 */

export default {
  id: '1',
  titulo: "Entorno de Word",
  tematica: "Interfaz, cinta de opciones, paneles y navegación básica",
  duracion: "20-25 minutos",
  objetivos: [
    "Comprender el propósito y la importancia del entorno de Word para la creación de documentos profesionales",
    "Identificar y utilizar las partes clave de la interfaz y la cinta de opciones",
    "Personalizar el espacio de trabajo para mejorar la productividad",
    "Aplicar algoritmos básicos para la gestión y organización de documentos en Word",
    "Vincular la teoría con la práctica mediante ejemplos y procedimientos en la interfaz de Word"
  ],
  secciones: [
    {
      id: 1,
      titulo: "¿Qué es Word y para qué sirve?",
      contenido: `
        <h3>📘 Introducción a Word</h3>
        <p><strong>Word</strong> es mucho más que un procesador de texto: es una herramienta para <strong>comunicar ideas, organizar información y presentar resultados</strong> de manera profesional.<br>
        <strong>¿Por qué usar Word?</strong> Porque permite crear documentos claros, estructurados y visualmente atractivos, facilitando la edición, revisión y colaboración.<br>
        <strong>¿Para qué?</strong> Para redactar informes, cartas, proyectos, manuales y cualquier tipo de documento que requiera formato y organización.</p>
        <p><strong>Ejemplo contextualizado:</strong> Un estudiante utiliza Word para entregar un informe académico con portada, índice y formato uniforme.</p>
        <h4>Algoritmo básico (pseudocódigo):</h4>
        <pre>
// Crear un documento profesional
Abrir Word
Seleccionar plantilla o documento en blanco
Agregar título y secciones
Aplicar formato y revisar ortografía
Guardar y exportar
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para presentar un proyecto, usa Word para estructurar el contenido, aplicar estilos y exportar a PDF.</p>
      `
    },
    {
      id: 2,
      titulo: "Interfaz principal de Word: partes y funciones",
      contenido: `
        <h4>🖥️ Partes de la Interfaz</h4>
        <ul>
          <li><strong>Barra de título:</strong> Muestra el nombre del documento y la aplicación. Permite identificar el archivo abierto.</li>
          <li><strong>Cinta de opciones:</strong> Acceso a todas las herramientas y comandos organizados por pestañas.</li>
          <li><strong>Barra de herramientas de acceso rápido:</strong> Personalizable para incluir los comandos más usados (guardar, deshacer, rehacer).</li>
          <li><strong>Área de trabajo:</strong> Espacio donde se edita el documento, se insertan elementos y se aplica formato.</li>
          <li><strong>Barra de estado:</strong> Información sobre la página, palabras, idioma, modo de visualización, etc.</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un docente personaliza la barra de herramientas de acceso rápido para agilizar la edición de exámenes.</p>
        <h4>Algoritmo (pseudocódigo):</h4>
        <pre>
// Personalizar la interfaz
Abrir Word
Ir a "Archivo" > "Opciones"
Configurar barra de herramientas y tema
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para trabajar más rápido, agrega los comandos de uso frecuente a la barra de acceso rápido y cambia el tema a oscuro para reducir la fatiga visual.</p>
      `
    },
    {
      id: 3,
      titulo: "Cinta de opciones y pestañas: uso estratégico",
      contenido: `
        <h4>🧩 Cinta de Opciones</h4>
        <ul>
          <li>Pestaña <strong>Inicio</strong>: Formato básico, portapapeles, fuente, párrafo. <br> <em>Ejemplo:</em> Aplica negrita y color a los títulos usando los comandos de fuente.</li>
          <li>Pestaña <strong>Insertar</strong>: Tablas, imágenes, formas, encabezados. <br> <em>Ejemplo:</em> Inserta una tabla para organizar datos y un encabezado para la portada.</li>
          <li>Pestaña <strong>Diseño</strong>: Temas, colores, bordes de página. <br> <em>Ejemplo:</em> Cambia el tema del documento para darle identidad visual.</li>
          <li>Pestaña <strong>Disposición</strong>: Márgenes, orientación, tamaño de página. <br> <em>Ejemplo:</em> Ajusta los márgenes para cumplir requisitos de entrega.</li>
          <li>Pestaña <strong>Revisar</strong>: Ortografía, comentarios, control de cambios. <br> <em>Ejemplo:</em> Revisa la ortografía y agrega comentarios para retroalimentación.</li>
          <li>Pestaña <strong>Vista</strong>: Modos de visualización, zoom, ventanas. <br> <em>Ejemplo:</em> Divide la ventana para comparar dos secciones del documento.</li>
        </ul>
        <h4>Algoritmo (pseudocódigo):</h4>
        <pre>
// Usar la cinta de opciones
Seleccionar pestaña según tarea
Ejecutar comando deseado
Volver a la pestaña principal
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para editar un informe, alterna entre las pestañas para aplicar formato, insertar elementos y revisar el contenido.</p>
      `
    },
    {
      id: 4,
      titulo: "Paneles y navegación eficiente",
      contenido: `
        <h4>🗂️ Paneles y Herramientas</h4>
        <ul>
          <li>Panel de navegación: Buscar y moverse entre secciones y títulos rápidamente.</li>
          <li>Panel de estilos: Aplicar y modificar estilos para mantener la coherencia visual.</li>
          <li>Panel de comentarios: Revisar y responder anotaciones colaborativas.</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un estudiante usa el panel de navegación para saltar entre capítulos de su tesis y el panel de estilos para aplicar formato uniforme.</p>
        <h4>Algoritmo (pseudocódigo):</h4>
        <pre>
// Navegar por el documento
Abrir panel de navegación
Buscar sección o palabra clave
Ir a la ubicación seleccionada
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para revisar un documento extenso, utiliza el panel de navegación y los estilos para facilitar la edición y revisión.</p>
      `
    },
    {
      id: 5,
      titulo: "Gestión de documentos: abrir, crear y guardar",
      contenido: `
        <h4>📁 Gestión de Documentos</h4>
        <ol>
          <li>Abrir documentos existentes desde el menú "Archivo" o la lista de recientes.</li>
          <li>Crear un nuevo documento en blanco o desde plantilla.</li>
          <li>Guardar y guardar como: diferencias entre formatos (.docx, .pdf, .rtf).</li>
          <li>Exportar a PDF para compartir o imprimir.</li>
        </ol>
        <p><strong>Ejemplo contextualizado:</strong> Un docente guarda el examen en formato PDF para enviarlo por correo y evitar modificaciones.</p>
        <h4>Algoritmo (pseudocódigo):</h4>
        <pre>
// Guardar documento en diferentes formatos
Crear o editar documento
Ir a "Archivo" > "Guardar como"
Seleccionar formato deseado
Confirmar y cerrar
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para entregar trabajos, guarda el documento en PDF y verifica que el formato se mantenga.</p>
      `
    },
    {
      id: 6,
      titulo: "Personalización del entorno de trabajo",
      contenido: `
        <h4>⚙️ Personalización</h4>
        <ul>
          <li>Cambiar el tema de Word (oscuro, claro, colorido) para comodidad visual.</li>
          <li>Mostrar u ocultar reglas y líneas de cuadrícula para facilitar la edición.</li>
          <li>Configurar la barra de herramientas de acceso rápido según preferencias.</li>
          <li>Organizar ventanas y dividir el área de trabajo para multitarea.</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un usuario configura el entorno para trabajar con dos documentos abiertos y la regla visible para ajustar márgenes.</p>
        <h4>Algoritmo (pseudocódigo):</h4>
        <pre>
// Personalizar entorno de trabajo
Ir a "Vista" o "Archivo" > "Opciones"
Seleccionar preferencias de tema y herramientas
Guardar configuración
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para editar varios documentos, organiza las ventanas y personaliza la interfaz para mayor eficiencia.</p>
      `
    }
  ],
  actividades: [
    "Abre Word y explora cada parte de la interfaz",
    "Crea un documento nuevo y guárdalo en tu equipo",
    "Personaliza la barra de herramientas de acceso rápido",
    "Utiliza el panel de navegación para buscar una palabra o sección",
    "Cambia el tema de Word a oscuro o colorido y organiza ventanas para trabajar con varios documentos"
  ],
  recursos: [
    {
      titulo: "Guía visual del entorno de Word",
      url: "/recursos/word/guia-entorno-word.pdf",
      tipo: "pdf"
    },
    {
      titulo: "Video: Primeros pasos en Word",
      url: "/videos/word/primeros-pasos-word.mp4",
      tipo: "video"
    }
  ],
  evaluacion: {
    tipo: "cuestionario",
    preguntas: [
      {
        pregunta: "¿Cuál es la función principal de la cinta de opciones?",
        opciones: [
          "Mostrar información sobre el documento",
          "Acceder a herramientas y comandos organizados en pestañas",
          "Guardar el documento",
          "Cambiar el idioma de Word"
        ],
        respuesta: 1
      },
      {
        pregunta: "¿Para qué sirve el panel de navegación?",
        opciones: [
          "Buscar y moverse entre secciones del documento",
          "Cambiar el color de la página",
          "Insertar imágenes",
          "Revisar ortografía"
        ],
        respuesta: 0
      },
      {
        pregunta: "¿Qué permite la barra de herramientas de acceso rápido?",
        opciones: [
          "Acceso rápido a comandos frecuentes",
          "Insertar tablas",
          "Cambiar el diseño de página",
          "Cerrar Word"
        ],
        respuesta: 0
      }
    ]
  }
};
