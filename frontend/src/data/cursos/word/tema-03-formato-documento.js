/**
 * Tema 3: Formato de documento
 * Curso: Procesador de Texto Word
 */

const tema03 = {
  id: '3',
  titulo: "Formato de documento",
  tematica: "Formato de texto, párrafos, alineación, listas y estilos",
  duracion: "25-30 minutos",
  objetivos: [
    "Comprender el propósito y la importancia del formato para la presentación profesional de documentos",
    "Aplicar técnicas de formato de texto, párrafos y listas para mejorar la claridad y el impacto visual",
    "Utilizar estilos rápidos y personalizados para mantener la coherencia en el documento",
    "Implementar algoritmos básicos para la organización y formato de contenido en Word",
    "Vincular la teoría con la práctica mediante ejemplos y procedimientos en la interfaz de Word"
  ],
  secciones: [
    {
      id: 1,
      titulo: "Formato de texto: claridad y énfasis",
      contenido: `
        <h3>🔤 Formato de Texto</h3>
        <p>El <strong>formato de texto</strong> permite destacar, organizar y facilitar la lectura de la información.<br>
        <strong>¿Por qué es importante?</strong> Porque ayuda a resaltar ideas clave, diferenciar secciones y mejorar la presentación.<br>
        <strong>¿Para qué?</strong> Para que el lector identifique rápidamente títulos, subtítulos y conceptos relevantes.</p>
        <p><strong>Ejemplo contextualizado:</strong> Un docente aplica color y negrita a los títulos de una guía de estudio para facilitar la navegación.</p>
        <h4>Algoritmo básico (pseudocódigo):</h4>
        <pre>
// Aplicar formato de texto
Seleccionar texto
Elegir tipo de fuente, tamaño y color
Aplicar negrita, cursiva o subrayado según necesidad
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para entregar un informe, aplica formato a los títulos y resalta las conclusiones con color y subrayado.</p>
      `,
      multimedia: {
        imagen: "/images/word/formato-texto.png"
      },
      actividades: [
        {
          tipo: "practica",
          pregunta: "Aplica diferentes formatos de texto en un documento de prueba.",
          ayuda: "Utiliza la cinta de opciones para cambiar fuente, tamaño y color."
        }
      ]
    },
    {
      id: 2,
      titulo: "Alineación y justificación de párrafos: orden visual",
      contenido: `
        <h4>📏 Alineación y Justificación</h4>
        <ul>
          <li>Alinear a la izquierda, derecha, centrar y justificar para organizar el texto.</li>
          <li>Usar atajos de teclado para agilizar la edición (Ctrl + Q, Ctrl + D, Ctrl + T, Ctrl + J).</li>
          <li>Configurar sangría y espaciado para separar ideas y mejorar la presentación.</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un estudiante justifica los párrafos de su tesis para lograr una presentación profesional y ajusta el espaciado para facilitar la lectura.</p>
        <h4>Algoritmo (pseudocódigo):</h4>
        <pre>
// Alinear y justificar párrafos
Seleccionar párrafo
Elegir tipo de alineación en la cinta de opciones
Configurar sangría y espaciado según requerimientos
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para cumplir normas de entrega, ajusta la alineación y el espaciado de los párrafos en el documento final.</p>
      `,
      multimedia: {
        imagen: "/images/word/alineacion-justificacion.png"
      },
      actividades: [
        {
          tipo: "practica",
          pregunta: "Alinea y justifica varios párrafos en un documento de prueba.",
          ayuda: "Prueba los diferentes tipos de alineación en la cinta de opciones."
        }
      ]
    },
    {
      id: 3,
      titulo: "Listas con viñetas y numeración: organización eficiente",
      contenido: `
        <h4>🔢 Listas</h4>
        <ul>
          <li>Crear listas con viñetas para enumerar elementos sin orden específico.</li>
          <li>Crear listas numeradas para pasos o secuencias.</li>
          <li>Personalizar símbolos y estilos de listas para adaptarse al contexto.</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un usuario crea una lista numerada para los pasos de un procedimiento y una lista con viñetas para los materiales necesarios.</p>
        <h4>Algoritmo (pseudocódigo):</h4>
        <pre>
// Crear lista
Seleccionar texto
Elegir tipo de lista en la cinta de opciones
Personalizar símbolo o estilo si es necesario
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para estructurar instrucciones, utiliza listas numeradas y viñetas en el documento.</p>
      `,
      multimedia: {
        imagen: "/images/word/listas.png"
      },
      actividades: [
        {
          tipo: "practica",
          pregunta: "Crea listas con viñetas y numeración personalizadas en un documento de Word.",
          ayuda: "Utiliza las opciones de listas en la cinta de opciones."
        }
      ]
    },
    {
      id: 4,
      titulo: "Estilos rápidos y títulos: coherencia visual",
      contenido: `
        <h4>🎨 Estilos y Títulos</h4>
        <ul>
          <li>Aplicar estilos predefinidos para mantener la coherencia visual.</li>
          <li>Crear y modificar estilos personalizados para adaptarse a las necesidades del documento.</li>
          <li>Usar estilos para títulos, subtítulos y texto normal para facilitar la navegación y el índice automático.</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un docente crea un estilo personalizado para los títulos de los capítulos y lo aplica en todo el documento.</p>
        <h4>Algoritmo (pseudocódigo):</h4>
        <pre>
// Aplicar estilo rápido
Seleccionar texto
Elegir estilo en la cinta de opciones
Modificar estilo si es necesario
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para generar un índice automático, aplica estilos a los títulos y subtítulos del documento.</p>
      `,
      multimedia: {
        imagen: "/images/word/estilos-titulos.png"
      },
      actividades: [
        {
          tipo: "practica",
          pregunta: "Utiliza estilos rápidos para títulos y subtítulos en un documento de Word.",
          ayuda: "Prueba los estilos predefinidos y crea uno personalizado."
        }
      ]
    },
    {
      id: 5,
      titulo: "Espaciado y sangría de párrafos: estructura y legibilidad",
      contenido: `
        <h4>↔️ Espaciado y Sangría</h4>
        <ul>
          <li>Configurar espaciado antes y después de párrafos para separar ideas.</li>
          <li>Modificar sangría izquierda y derecha para destacar citas o bloques de texto.</li>
          <li>Usar reglas para ajustar visualmente la estructura del documento.</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un estudiante ajusta la sangría de las citas textuales y el espaciado entre párrafos para cumplir normas APA.</p>
        <h4>Algoritmo (pseudocódigo):</h4>
        <pre>
// Configurar espaciado y sangría
Seleccionar párrafo
Ir a opciones de párrafo en la cinta
Ajustar valores de espaciado y sangría
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para mejorar la legibilidad, ajusta el espaciado y la sangría en los apartados del documento.</p>
      `,
      multimedia: {
        imagen: "/images/word/espaciado-sangria.png"
      },
      actividades: [
        {
          tipo: "practica",
          pregunta: "Configura el espaciado y la sangría de un párrafo en un documento de Word.",
          ayuda: "Utiliza las opciones de párrafo en la cinta."
        }
      ]
    }
  ],
  recursos: {
    documentos: [
      {
        titulo: "Guía de formato de documentos en Word",
        url: "/recursos/word/guia-formato-documento.pdf",
        tipo: "pdf"
      }
    ],
    enlaces: [],
    videos: [
      {
        titulo: "Video: Formato y estilos en Word",
        url: "/videos/word/formato-estilos-word.mp4",
        duracion: "6:00"
      }
    ]
  },
  evaluacion: {
    tipo: "cuestionario",
    preguntas: [
      {
        pregunta: "¿Cómo se cambia el tipo de fuente en Word?",
        tipo: "opcion_multiple",
        opciones: [
          "Desde la barra de estado",
          "Desde la cinta de opciones, pestaña Inicio",
          "Desde el panel de navegación",
          "No se puede cambiar"
        ],
        respuestaCorrecta: 1
      },
      {
        pregunta: "¿Para qué sirven los estilos rápidos?",
        tipo: "opcion_multiple",
        opciones: [
          "Insertar imágenes",
          "Aplicar formato predefinido a títulos y texto",
          "Crear tablas",
          "Cambiar el idioma del documento"
        ],
        respuestaCorrecta: 1
      },
      {
        pregunta: "¿Qué permite la opción de justificar un párrafo?",
        tipo: "opcion_multiple",
        opciones: [
          "Alinear el texto a ambos márgenes",
          "Centrar el texto únicamente",
          "Alinear a la derecha únicamente",
          "No tiene función"
        ],
        respuestaCorrecta: 0
      }
    ]
  }
};

export default tema03;
