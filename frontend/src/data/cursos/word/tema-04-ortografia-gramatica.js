/**
 * Tema 4: Ortografía y gramática
 * Curso: Procesador de Texto Word
 */

const tema04 = {
  id: '4',
  titulo: "Ortografía y gramática",
  tematica: "Corrección ortográfica, gramatical y herramientas de revisión",
  duracion: "20-25 minutos",
  objetivos: [
    "Comprender el propósito y la importancia de la corrección ortográfica y gramatical para la calidad de los documentos",
    "Utilizar el corrector automático y las herramientas de revisión para evitar errores",
    "Configurar el idioma y el diccionario personalizado para adaptarse a diferentes contextos",
    "Implementar algoritmos básicos para la revisión y mejora de textos en Word",
    "Vincular la teoría con la práctica mediante ejemplos y procedimientos en la interfaz de Word"
  ],
  secciones: [
    {
      id: 1,
      titulo: "Corrector ortográfico y gramatical: calidad y precisión",
      contenido: `
        <h3>📝 Corrector Ortográfico y Gramatical</h3>
        <p>La <strong>corrección automática</strong> es fundamental para garantizar la calidad y profesionalismo de los documentos.<br>
        <strong>¿Por qué es importante?</strong> Porque evita errores que pueden afectar la comprensión y credibilidad.<br>
        <strong>¿Para qué?</strong> Para entregar textos claros, precisos y sin faltas.</p>
        <p><strong>Ejemplo contextualizado:</strong> Un estudiante revisa su ensayo y corrige palabras subrayadas en rojo y azul antes de entregar el trabajo.</p>
        <h4>Algoritmo básico (pseudocódigo):</h4>
        <pre>
// Corregir texto en Word
Activar corrector automático
Revisar palabras subrayadas
Corregir errores con clic derecho
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para evitar errores en un informe, activa la revisión automática y corrige cada sugerencia antes de guardar.</p>
      `,
      multimedia: {
        imagen: "/images/word/corrector-ortografico.png"
      },
      actividades: [
        {
          tipo: "practica",
          pregunta: "Escribe un texto con errores y utiliza el corrector para corregirlos.",
          ayuda: "Observa las palabras subrayadas y usa el clic derecho para corregir."
        }
      ]
    },
    {
      id: 2,
      titulo: "Revisión y sugerencias: mejora continua",
      contenido: `
        <h4>🔍 Revisión y Sugerencias</h4>
        <ul>
          <li>Revisar todo el documento (F7) para detectar errores ocultos.</li>
          <li>Aceptar o ignorar sugerencias según el contexto.</li>
          <li>Ver explicaciones de errores para aprender y mejorar la redacción.</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un docente revisa un examen y utiliza las sugerencias para mejorar la claridad de las preguntas.</p>
        <h4>Algoritmo (pseudocódigo):</h4>
        <pre>
// Revisar documento
Presionar F7 para iniciar revisión
Aceptar o ignorar sugerencias
Corregir errores y guardar cambios
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para mejorar la calidad de los textos, revisa y acepta sugerencias relevantes antes de imprimir.</p>
      `,
      multimedia: {
        imagen: "/images/word/revision-sugerencias.png"
      },
      actividades: [
        {
          tipo: "practica",
          pregunta: "Revisa todo el documento usando la función F7.",
          ayuda: "Presiona F7 y sigue las sugerencias del corrector."
        }
      ]
    },
    {
      id: 3,
      titulo: "Diccionario personalizado: adaptación y flexibilidad",
      contenido: `
        <h4>📚 Diccionario Personalizado</h4>
        <ul>
          <li>Agregar palabras propias al diccionario para evitar falsas alertas.</li>
          <li>Eliminar palabras incorrectas para mantener la precisión.</li>
          <li>Administrar varios diccionarios según el tipo de documento.</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un usuario agrega términos técnicos de su área al diccionario para evitar que se marquen como errores.</p>
        <h4>Algoritmo (pseudocódigo):</h4>
        <pre>
// Administrar diccionario personalizado
Seleccionar palabra
Agregar o eliminar del diccionario
Verificar que no se marque como error
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para trabajar con documentos especializados, personaliza el diccionario y revisa los términos clave.</p>
      `,
      multimedia: {
        imagen: "/images/word/diccionario-personalizado.png"
      },
      actividades: [
        {
          tipo: "practica",
          pregunta: "Agrega una palabra nueva al diccionario personalizado.",
          ayuda: "Haz clic derecho sobre la palabra y selecciona 'Agregar al diccionario'."
        }
      ]
    },
    {
      id: 4,
      titulo: "Configuración de idioma de revisión: internacionalización",
      contenido: `
        <h4>🌐 Configuración de Idioma</h4>
        <ul>
          <li>Cambiar el idioma de revisión para adaptar el documento a diferentes contextos.</li>
          <li>Revisar documentos multilingües y evitar errores por idioma incorrecto.</li>
          <li>Descargar y agregar nuevos idiomas según necesidad.</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un docente configura el idioma de revisión en inglés para corregir un artículo científico.</p>
        <h4>Algoritmo (pseudocódigo):</h4>
        <pre>
// Configurar idioma de revisión
Ir a "Revisar" > "Idioma"
Seleccionar idioma deseado
Aplicar a todo el documento
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para entregar trabajos en otro idioma, configura la revisión y verifica que no haya errores.</p>
      `,
      multimedia: {
        imagen: "/images/word/idioma-revision.png"
      },
      actividades: [
        {
          tipo: "practica",
          pregunta: "Cambia el idioma de revisión del documento.",
          ayuda: "Ve a la pestaña Revisar y selecciona Idioma."
        }
      ]
    },
    {
      id: 5,
      titulo: "Herramientas de sinónimos y sugerencias: riqueza léxica",
      contenido: `
        <h4>💡 Sinónimos y Sugerencias</h4>
        <ul>
          <li>Utilizar el diccionario de sinónimos (Shift + F7) para enriquecer el vocabulario.</li>
          <li>Buscar sugerencias de palabras y frases para mejorar la redacción.</li>
          <li>Mejorar la claridad y el estilo con sugerencias contextuales.</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un estudiante utiliza el diccionario de sinónimos para evitar repeticiones y mejorar la calidad de su ensayo.</p>
        <h4>Algoritmo (pseudocódigo):</h4>
        <pre>
// Usar sinónimos y sugerencias
Seleccionar palabra
Presionar Shift + F7
Elegir sinónimo adecuado
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para enriquecer la redacción, consulta sinónimos y sugerencias antes de finalizar el documento.</p>
      `,
      multimedia: {
        imagen: "/images/word/sinonimos-sugerencias.png"
      },
      actividades: [
        {
          tipo: "practica",
          pregunta: "Utiliza el diccionario de sinónimos para mejorar una frase en tu documento.",
          ayuda: "Selecciona una palabra y presiona Shift + F7."
        }
      ]
    }
  ],
  recursos: {
    documentos: [
      {
        titulo: "Guía de ortografía y gramática en Word",
        url: "/recursos/word/guia-ortografia-gramatica.pdf",
        tipo: "pdf"
      }
    ],
    enlaces: [],
    videos: [
      {
        titulo: "Video: Revisión ortográfica y gramatical en Word",
        url: "/videos/word/revision-ortografica-word.mp4",
        duracion: "5:30"
      }
    ]
  },
  evaluacion: {
    tipo: "cuestionario",
    preguntas: [
      {
        pregunta: "¿Cómo se activa el corrector ortográfico en Word?",
        tipo: "opcion_multiple",
        opciones: [
          "Desde la barra de estado",
          "Desde la cinta de opciones, pestaña Revisar",
          "No se puede activar",
          "Solo con atajos de teclado"
        ],
        respuestaCorrecta: 1
      },
      {
        pregunta: "¿Qué significa una palabra subrayada en rojo?",
        tipo: "opcion_multiple",
        opciones: [
          "Error gramatical",
          "Error ortográfico",
          "Palabra aceptada",
          "No tiene significado"
        ],
        respuestaCorrecta: 1
      },
      {
        pregunta: "¿Para qué sirve el diccionario de sinónimos?",
        tipo: "opcion_multiple",
        opciones: [
          "Buscar palabras con significado similar",
          "Corregir errores ortográficos",
          "Traducir palabras",
          "Eliminar palabras duplicadas"
        ],
        respuestaCorrecta: 0
      }
    ]
  }
};

export default tema04;
