/**
 * Tema 5: Estilos
 * Curso: Procesador de Texto Word
 */

export default {
  id: '5',
  titulo: "Estilos",
  tematica: "Aplicación, creación y gestión de estilos en documentos",
  duracion: "20-25 minutos",
  objetivos: [
    "Comprender el propósito y ventajas de los estilos para la presentación profesional y estructurada de documentos",
    "Aplicar estilos predefinidos y personalizados para títulos, subtítulos y texto",
    "Gestionar la galería de estilos y reutilizar estilos en diferentes documentos",
    "Implementar algoritmos básicos para la organización y formato mediante estilos en Word",
    "Vincular la teoría con la práctica mediante ejemplos y procedimientos en la interfaz de Word"
  ],
  secciones: [
    {
      id: 1,
      titulo: "¿Qué son los estilos en Word?",
      contenido: `
        <h3>🎨 ¿Qué son los Estilos?</h3>
        <p>Un <strong>estilo</strong> en Word es un conjunto de formatos (fuente, color, tamaño, espaciado, alineación) que se aplican de forma rápida y uniforme a diferentes partes del documento.<br>
        <strong>¿Por qué es importante?</strong> Porque permite mantener coherencia visual, facilita la navegación y ahorra tiempo en la edición.<br>
        <strong>¿Para qué?</strong> Para estructurar el documento y generar índices automáticos.</p>
        <p><strong>Ejemplo contextualizado:</strong> Un docente aplica el estilo "Título 1" a los capítulos y "Título 2" a los subtemas, logrando un documento organizado y fácil de navegar.</p>
        <h4>Algoritmo básico (pseudocódigo):</h4>
        <pre>
// Aplicar estilo a texto
Seleccionar texto
Elegir estilo en la galería
Verificar formato aplicado
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para entregar un informe profesional, utiliza estilos para títulos y subtítulos, facilitando la generación de tabla de contenido.</p>
      `,
      multimedia: [
        {
          tipo: "imagen",
          url: "/images/word/estilos-ejemplo.png",
          descripcion: "Ejemplo visual de estilos aplicados en un documento Word"
        }
      ],
      actividades: [
        "Identifica en un documento real las partes que podrían beneficiarse del uso de estilos.",
        "Explica con tus palabras por qué los estilos facilitan la edición de documentos largos."
      ]
    },
    {
      id: 2,
      titulo: "Aplicar estilos predefinidos",
      contenido: `
        <h4>🖱️ Aplicar Estilos</h4>
        <ul>
          <li>Seleccionar texto y elegir un estilo de la galería.</li>
          <li>Estilos para títulos, subtítulos, texto normal, citas, etc.</li>
          <li>Vista previa instantánea al pasar el mouse.</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un estudiante selecciona el texto de un capítulo y aplica el estilo "Título 1" para diferenciarlo visualmente.</p>
        <h4>Algoritmo (pseudocódigo):</h4>
        <pre>
// Aplicar estilo predefinido
Seleccionar texto
Ir a la galería de estilos
Elegir el estilo deseado
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para mejorar la presentación, aplica estilos predefinidos en cada sección del documento.</p>
      `,
      multimedia: [
        {
          tipo: "video",
          url: "/videos/word/aplicar-estilos.mp4",
          descripcion: "Demostración de aplicación de estilos predefinidos en Word"
        }
      ],
      actividades: [
        "Abre un documento y aplica al menos tres estilos diferentes en distintas secciones.",
        "Describe cómo cambia la apariencia del documento al usar estilos."
      ]
    },
    {
      id: 3,
      titulo: "Crear y modificar estilos personalizados",
      contenido: `
        <h4>✏️ Crear y Modificar Estilos</h4>
        <ul>
          <li>Crear un nuevo estilo desde formato seleccionado.</li>
          <li>Modificar fuente, color, espaciado y alineación.</li>
          <li>Actualizar un estilo existente con nuevos formatos.</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un usuario crea un estilo personalizado para resaltar citas textuales con fondo amarillo y fuente cursiva.</p>
        <h4>Algoritmo (pseudocódigo):</h4>
        <pre>
// Crear estilo personalizado
Seleccionar texto con formato deseado
Ir a "Nuevo estilo" en la galería
Asignar nombre y guardar
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para destacar elementos clave, crea estilos personalizados y aplícalos en todo el documento.</p>
      `,
      multimedia: [
        {
          tipo: "video",
          url: "/videos/word/crear-estilo-personalizado.mp4",
          descripcion: "Cómo crear y modificar estilos personalizados en Word"
        }
      ],
      actividades: [
        "Crea un estilo personalizado para resaltar advertencias en tus documentos.",
        "Modifica un estilo existente y observa el cambio global en el documento."
      ]
    },
    {
      id: 4,
      titulo: "Gestión de la galería de estilos",
      contenido: `
        <h4>📚 Galería de Estilos</h4>
        <ul>
          <li>Agregar o quitar estilos de la galería.</li>
          <li>Organizar estilos favoritos.</li>
          <li>Restablecer la galería a valores predeterminados.</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un docente elimina estilos que no utiliza y organiza los más frecuentes para agilizar la edición de sus guías.</p>
        <h4>Algoritmo (pseudocódigo):</h4>
        <pre>
// Gestionar galería de estilos
Abrir galería de estilos
Agregar/quitar estilos según preferencia
Organizar estilos favoritos
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para optimizar el flujo de trabajo, personaliza la galería de estilos según tus necesidades.</p>
      `,
      multimedia: [
        {
          tipo: "imagen",
          url: "/images/word/galeria-estilos.png",
          descripcion: "Vista de la galería de estilos personalizada en Word"
        }
      ],
      actividades: [
        "Organiza la galería de estilos de acuerdo a tus necesidades.",
        "Elimina estilos que no utilices y agrega tus favoritos."
      ]
    },
    {
      id: 5,
      titulo: "Estructura y navegación con estilos",
      contenido: `
        <h4>🗂️ Estructura y Navegación</h4>
        <ul>
          <li>Usar estilos para crear una tabla de contenido.</li>
          <li>Navegar rápidamente entre secciones.</li>
          <li>Mejorar la accesibilidad del documento.</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un estudiante aplica estilos a los títulos y genera automáticamente la tabla de contenido y el panel de navegación.</p>
        <h4>Algoritmo (pseudocódigo):</h4>
        <pre>
// Generar tabla de contenido
Aplicar estilos a títulos y subtítulos
Ir a "Referencias" > "Tabla de contenido"
Insertar tabla automática
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para facilitar la consulta, estructura el documento con estilos y genera la tabla de contenido.</p>
      `,
      multimedia: [
        {
          tipo: "video",
          url: "/videos/word/tabla-contenido.mp4",
          descripcion: "Generación de tabla de contenido usando estilos en Word"
        }
      ],
      actividades: [
        "Aplica estilos a títulos y subtítulos y genera una tabla de contenido automática.",
        "Utiliza el panel de navegación para moverte entre secciones."
      ]
    },
    {
      id: 6,
      titulo: "Reutilización y actualización de estilos",
      contenido: `
        <h4>♻️ Reutilización de Estilos</h4>
        <ul>
          <li>Copiar estilos entre documentos.</li>
          <li>Actualizar estilos en todo el documento.</li>
          <li>Guardar estilos personalizados como plantilla.</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un usuario guarda sus estilos personalizados en una plantilla y los reutiliza en nuevos proyectos.</p>
        <h4>Algoritmo (pseudocódigo):</h4>
        <pre>
// Reutilizar estilos
Guardar estilos como plantilla
Abrir nuevo documento y aplicar plantilla
Actualizar estilos según necesidad
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para mantener la coherencia en varios documentos, reutiliza y actualiza estilos mediante plantillas.</p>
      `,
      multimedia: [
        {
          tipo: "imagen",
          url: "/images/word/plantilla-estilos.png",
          descripcion: "Ejemplo de plantilla de estilos reutilizable en Word"
        }
      ],
      actividades: [
        "Guarda tus estilos personalizados como plantilla y aplícalos en un nuevo documento.",
        "Actualiza un estilo en la plantilla y observa el cambio en todos los documentos que la usan."
      ]
    }
  ],
  recursos: {
    documentos: [
      {
        titulo: "Guía de estilos en Word",
        url: "/recursos/word/guia-estilos-word.pdf"
      }
    ],
    enlaces: [
      {
        titulo: "Documentación oficial de Microsoft Word sobre estilos",
        url: "https://support.microsoft.com/es-es/office/usar-estilos-en-word-1d4d4dce-5b1a-4542-9e9a-7b3e7e3fa5b8"
      }
    ],
    videos: [
      {
        titulo: "Video: Uso avanzado de estilos en Word",
        url: "/videos/word/estilos-avanzados-word.mp4"
      }
    ]
  },
  evaluacion: {
    tipo: "cuestionario",
    cuestionario: [
      {
        pregunta: "¿Para qué sirven los estilos en Word?",
        tipo: "opcion-multiple",
        opciones: [
          "Aplicar formato uniforme y estructurar el documento",
          "Insertar imágenes",
          "Corregir ortografía",
          "Cambiar el idioma del documento"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Cómo se crea un estilo personalizado?",
        tipo: "opcion-multiple",
        opciones: [
          "Solo desde la galería de estilos",
          "Aplicando formato y guardando como nuevo estilo",
          "No se pueden crear estilos personalizados",
          "Desde el panel de navegación"
        ],
        respuestaCorrecta: 1
      },
      {
        pregunta: "¿Qué permite la galería de estilos?",
        tipo: "opcion-multiple",
        opciones: [
          "Organizar y acceder rápidamente a estilos frecuentes",
          "Insertar tablas",
          "Revisar ortografía",
          "Traducir el documento"
        ],
        respuestaCorrecta: 0
      }
    ]
  }
};
