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
      `,
      multimedia: [
        {
          tipo: "imagen",
          url: "/images/word/ejemplo-tabla-insercion.png",
          descripcion: "Ejemplo de tabla insertada en Word para organizar información"
        },
        {
          tipo: "video",
          url: "/videos/word/insertar-tabla.mp4",
          descripcion: "Video: Cómo insertar y crear tablas en Word"
        }
      ],
      actividades: [
        "Inserta una tabla en un documento y organiza datos relevantes.",
        "Explica cómo la tabla mejora la presentación de la información."
      ]
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
      `,
      multimedia: [
        {
          tipo: "imagen",
          url: "/images/word/edicion-tabla-ejemplo.png",
          descripcion: "Ejemplo de edición de filas y columnas en una tabla de Word"
        },
        {
          tipo: "video",
          url: "/videos/word/editar-tabla.mp4",
          descripcion: "Video: Edición de filas, columnas y celdas en Word"
        }
      ],
      actividades: [
        "Agrega y elimina filas y columnas en una tabla de prueba.",
        "Modifica el tamaño de las celdas y observa el resultado."
      ]
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
      `,
      multimedia: [
        {
          tipo: "imagen",
          url: "/images/word/estilos-tabla-ejemplo.png",
          descripcion: "Ejemplo de formato y estilos aplicados a una tabla en Word"
        },
        {
          tipo: "video",
          url: "/videos/word/formato-tabla.mp4",
          descripcion: "Video: Aplicar formato y estilos a tablas en Word"
        }
      ],
      actividades: [
        "Aplica diferentes estilos de formato a una tabla.",
        "Personaliza el diseño de una tabla con colores y bordes."
      ]
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
      `,
      multimedia: [
        {
          tipo: "imagen",
          url: "/images/word/combinar-celdas-ejemplo.png",
          descripcion: "Ejemplo de combinación y división de celdas en una tabla de Word"
        },
        {
          tipo: "video",
          url: "/videos/word/combinar-dividir-celdas.mp4",
          descripcion: "Video: Cómo combinar y dividir celdas en tablas de Word"
        }
      ],
      actividades: [
        "Combina y divide celdas en una tabla de ejemplo.",
        "Crea un encabezado que abarque varias columnas combinando celdas."
      ]
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
      `,
      multimedia: [
        {
          tipo: "imagen",
          url: "/images/word/herramientas-tabla-ejemplo.png",
          descripcion: "Ejemplo de herramientas de diseño y presentación en tablas de Word"
        },
        {
          tipo: "video",
          url: "/videos/word/herramientas-tabla.mp4",
          descripcion: "Video: Herramientas de diseño y presentación de tablas en Word"
        }
      ],
      actividades: [
        "Ordena los datos de una tabla alfabéticamente.",
        "Repite el encabezado de una tabla en varias páginas impresas."
      ]
    }
  ],
  recursos: {
    documentos: [
      {
        titulo: "Guía de tablas en Word",
        url: "/recursos/word/guia-tablas-word.pdf"
      }
    ],
    enlaces: [
      {
        titulo: "Documentación oficial de Microsoft Word sobre tablas",
        url: "https://support.microsoft.com/es-es/office/insertar-o-crear-una-tabla-en-word-0b8ad8c9-0b8a-4b4a-bc3e-7b3e7e3fa5b8"
      }
    ],
    videos: [
      {
        titulo: "Video: Tablas en Word",
        url: "/videos/word/tablas-word.mp4"
      }
    ]
  },
  evaluacion: {
    tipo: "cuestionario",
    cuestionario: [
      {
        pregunta: "¿Cómo se inserta una tabla en Word?",
        tipo: "opcion-multiple",
        opciones: [
          "Desde la cinta de opciones, pestaña Insertar",
          "Desde la barra de estado",
          "Desde el panel de navegación",
          "No se pueden insertar tablas"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Para qué sirve la opción de combinar celdas?",
        tipo: "opcion-multiple",
        opciones: [
          "Unir varias celdas en una sola",
          "Dividir una celda en varias",
          "Eliminar filas",
          "Cambiar el color de la tabla"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Qué permite hacer la herramienta de diseño de tabla?",
        tipo: "opcion-multiple",
        opciones: [
          "Personalizar el formato y presentación de la tabla",
          "Insertar imágenes",
          "Corregir ortografía",
          "Traducir el documento"
        ],
        respuestaCorrecta: 0
      }
    ]
  }
};
