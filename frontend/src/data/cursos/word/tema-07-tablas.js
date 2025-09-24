/**
 * Tema 7: Tablas
 * Curso: Procesador de Texto Word
 */

export default {
  id: '7',
  titulo: "Tablas",
  tematica: "Creación, edición y formato de tablas en documentos",
  duracion: "20-25 minutos",
  objetivos: [
    "Comprender el propósito y ventajas de las tablas para organizar información en documentos",
    "Insertar y crear tablas en Word de diferentes formas",
    "Editar, combinar y dividir celdas, filas y columnas",
    "Aplicar formato y estilos para mejorar la presentación de tablas",
    "Utilizar herramientas de diseño y presentación para optimizar el uso de tablas"
  ],
  secciones: [
    {
      id: 1,
      titulo: "Insertar y crear tablas",
      contenido: `
        <h3>📋 Insertar y Crear Tablas</h3>
        <p>Las <strong>tablas</strong> permiten organizar datos de manera estructurada y visualmente clara.<br>
        <strong>¿Por qué es importante?</strong> Porque facilitan la comparación, el análisis y la presentación de información.<br>
        <strong>¿Para qué?</strong> Para crear horarios, listas, registros y cualquier información tabular.</p>
        <ul>
          <li>Insertar tabla desde la cinta de opciones</li>
          <li>Dibujar tabla manualmente</li>
          <li>Insertar tabla rápida desde plantillas</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un docente crea una tabla para organizar el cronograma de actividades de un curso.</p>
        <h4>Algoritmo básico (pseudocódigo):</h4>
        <pre>
// Insertar tabla
Ir a "Insertar" > "Tabla"
Seleccionar número de filas y columnas
Colocar la tabla en el documento
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para presentar datos ordenados, inserta tablas y adapta su tamaño según la información.</p>
      `
    },
    {
      id: 2,
      titulo: "Edición de filas, columnas y celdas",
      contenido: `
        <h4>✏️ Edición de Tablas</h4>
        <ul>
          <li>Agregar y eliminar filas o columnas.</li>
          <li>Modificar el tamaño de celdas.</li>
          <li>Seleccionar y mover celdas.</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un estudiante agrega una columna para notas y elimina filas vacías en una tabla de calificaciones.</p>
        <h4>Algoritmo (pseudocódigo):</h4>
        <pre>
// Editar tabla
Seleccionar fila/columna/celda
Usar opciones de agregar/eliminar/mover
Ajustar tamaño según necesidad
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para actualizar información, edita las filas y columnas de la tabla según los cambios requeridos.</p>
      `
    },
    {
      id: 3,
      titulo: "Formato y estilos de tablas",
      contenido: `
        <h4>🎨 Formato y Estilos</h4>
        <ul>
          <li>Aplicar estilos predefinidos de tabla.</li>
          <li>Cambiar color de fondo y bordes.</li>
          <li>Personalizar el diseño de la tabla.</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un usuario aplica un estilo de tabla con colores alternos para mejorar la legibilidad de los datos.</p>
        <h4>Algoritmo (pseudocódigo):</h4>
        <pre>
// Formatear tabla
Seleccionar tabla
Ir a "Herramientas de tabla" > "Diseño"
Elegir estilo y personalizar colores/bordes
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para destacar información relevante, aplica formato y estilos que faciliten la lectura.</p>
      `
    },
    {
      id: 4,
      titulo: "Combinar y dividir celdas",
      contenido: `
        <h4>🔀 Combinar y Dividir</h4>
        <ul>
          <li>Combinar varias celdas en una sola.</li>
          <li>Dividir una celda en varias.</li>
          <li>Usar herramientas de diseño de tabla.</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un docente combina celdas para crear un encabezado que abarque varias columnas en una tabla de asistencia.</p>
        <h4>Algoritmo (pseudocódigo):</h4>
        <pre>
// Combinar/dividir celdas
Seleccionar celdas
Usar opción "Combinar" o "Dividir" en herramientas de tabla
Ajustar el diseño según necesidad
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para adaptar la estructura de la tabla, combina o divide celdas según el tipo de información.</p>
      `
    },
    {
      id: 5,
      titulo: "Herramientas de diseño y presentación",
      contenido: `
        <h4>🛠️ Herramientas de Diseño</h4>
        <ul>
          <li>Agregar encabezados y totales.</li>
          <li>Repetir filas de encabezado en varias páginas.</li>
          <li>Ordenar y filtrar datos en tablas.</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un estudiante ordena los datos de una tabla alfabéticamente y repite el encabezado en cada página impresa.</p>
        <h4>Algoritmo (pseudocódigo):</h4>
        <pre>
// Usar herramientas de diseño
Seleccionar tabla
Ir a "Herramientas de tabla" > "Presentación"
Agregar encabezados, ordenar y filtrar datos
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para mejorar la presentación y análisis de datos, utiliza las herramientas de diseño y presentación de tablas.</p>
      `
    }
  ],
  actividades: [
    "Crea una tabla y aplica diferentes estilos de formato",
    "Agrega y elimina filas y columnas en una tabla de prueba",
    "Combina y divide celdas en una tabla",
    "Personaliza el diseño de una tabla con colores y bordes",
    "Ordena los datos de una tabla alfabéticamente"
  ],
  recursos: [
    {
      titulo: "Guía de tablas en Word",
      url: "/recursos/word/guia-tablas-word.pdf",
      tipo: "pdf"
    },
    {
      titulo: "Video: Tablas en Word",
      url: "/videos/word/tablas-word.mp4",
      tipo: "video"
    }
  ],
  evaluacion: {
    tipo: "cuestionario",
    preguntas: [
      {
        pregunta: "¿Cómo se inserta una tabla en Word?",
        opciones: [
          "Desde la cinta de opciones, pestaña Insertar",
          "Desde la barra de estado",
          "Desde el panel de navegación",
          "No se pueden insertar tablas"
        ],
        respuesta: 0
      },
      {
        pregunta: "¿Para qué sirve la opción de combinar celdas?",
        opciones: [
          "Unir varias celdas en una sola",
          "Dividir una celda en varias",
          "Eliminar filas",
          "Cambiar el color de la tabla"
        ],
        respuesta: 0
      },
      {
        pregunta: "¿Qué permite hacer la herramienta de diseño de tabla?",
        opciones: [
          "Personalizar el formato y presentación de la tabla",
          "Insertar imágenes",
          "Corregir ortografía",
          "Traducir el documento"
        ],
        respuesta: 0
      }
    ]
  }
};
