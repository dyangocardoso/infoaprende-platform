/**
 * Tema 2: Edición básica
 * Curso: Procesador de Texto Word
 */

export default {
  id: '2',
  titulo: "Edición básica",
  tematica: "Escritura, selección, copiar, cortar, pegar y deshacer cambios",
  duracion: "20-25 minutos",
  objetivos: [
    "Comprender el propósito y la importancia de la edición básica para la creación de documentos claros y profesionales",
    "Aplicar técnicas de selección, copia, corte y pegado de texto de manera eficiente",
    "Utilizar las funciones de deshacer y rehacer para mejorar la productividad y evitar errores",
    "Implementar algoritmos básicos para la edición y organización de texto en Word",
    "Vincular la teoría con la práctica mediante ejemplos y procedimientos en la interfaz de Word"
  ],
  secciones: [
    {
      id: 1,
      titulo: "Escritura y edición de texto: fundamentos y utilidad",
      contenido: `
        <h3>✍️ Escritura y Edición</h3>
        <p>La <strong>edición básica</strong> es el primer paso para crear documentos efectivos. <br>
        <strong>¿Por qué es importante?</strong> Porque permite corregir errores, mejorar la redacción y adaptar el contenido a diferentes necesidades.<br>
        <strong>¿Para qué?</strong> Para comunicar ideas de forma clara y profesional.</p>
        <p><strong>Ejemplo contextualizado:</strong> Un estudiante redacta un ensayo y edita frases para mejorar la coherencia y ortografía.</p>
        <h4>Algoritmo básico (pseudocódigo):</h4>
        <pre>
// Editar texto en Word
Escribir texto
Revisar y corregir errores
Modificar palabras y frases según necesidad
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para entregar un trabajo escolar, revisa y edita el texto antes de guardar el documento final.</p>
      `
    },
    {
      id: 2,
      titulo: "Selección de texto: técnicas y aplicaciones",
      contenido: `
        <h4>🖱️ Selección de Texto</h4>
        <ul>
          <li>Seleccionar con el mouse (clic y arrastrar) para editar o aplicar formato.</li>
          <li>Seleccionar con el teclado (Shift + flechas) para mayor precisión.</li>
          <li>Seleccionar todo (Ctrl + E) para cambios globales.</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un docente selecciona todo el texto para cambiar el tipo de letra y tamaño en un examen.</p>
        <h4>Algoritmo (pseudocódigo):</h4>
        <pre>
// Seleccionar texto
Ubicar cursor al inicio
Mantener Shift y mover con flechas
Soltar Shift al finalizar selección
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para aplicar formato a todo el documento, selecciona todo el texto y usa la cinta de opciones.</p>
      `
    },
    {
      id: 3,
      titulo: "Copiar, cortar y pegar: flujo de trabajo eficiente",
      contenido: `
        <h4>📋 Copiar, Cortar y Pegar</h4>
        <ul>
          <li>Copiar (Ctrl + C): Duplicar texto seleccionado para reutilizarlo.</li>
          <li>Cortar (Ctrl + X): Mover texto seleccionado a otra ubicación.</li>
          <li>Pegar (Ctrl + V): Insertar texto copiado o cortado en el lugar deseado.</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un usuario copia una cita de un artículo y la pega en su informe, luego corta un párrafo para reorganizar el contenido.</p>
        <h4>Algoritmo (pseudocódigo):</h4>
        <pre>
// Copiar y pegar texto
Seleccionar texto
Presionar Ctrl + C para copiar
Ubicar cursor en destino
Presionar Ctrl + V para pegar
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para reorganizar ideas, corta y pega párrafos en el orden más lógico.</p>
      `
    },
    {
      id: 4,
      titulo: "Deshacer y rehacer cambios: control y seguridad",
      contenido: `
        <h4>↩️ Deshacer y Rehacer</h4>
        <ul>
          <li>Deshacer (Ctrl + Z): Revertir la última acción y evitar errores.</li>
          <li>Rehacer (Ctrl + Y): Repetir la última acción deshecha para recuperar cambios.</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un estudiante borra accidentalmente un párrafo y lo recupera usando la función rehacer.</p>
        <h4>Algoritmo (pseudocódigo):</h4>
        <pre>
// Deshacer y rehacer
Realizar acción
Si hay error, presionar Ctrl + Z
Si se desea recuperar, presionar Ctrl + Y
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para evitar perder información, usa deshacer y rehacer durante la edición.</p>
      `
    },
    {
      id: 5,
      titulo: "Formato básico de texto: claridad y énfasis",
      contenido: `
        <h4>🅱️ Formato Básico</h4>
        <ul>
          <li>Negrita (Ctrl + N) para resaltar títulos y palabras clave.</li>
          <li>Cursiva (Ctrl + K) para enfatizar conceptos o citas.</li>
          <li>Subrayado (Ctrl + S) para destacar información importante.</li>
          <li>Aplicar formato desde la cinta de opciones para mayor control.</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un docente aplica negrita a los encabezados y cursiva a las definiciones en una guía de estudio.</p>
        <h4>Algoritmo (pseudocódigo):</h4>
        <pre>
// Aplicar formato básico
Seleccionar texto
Elegir formato en la cinta de opciones o usar atajo
Verificar resultado
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para mejorar la presentación, aplica formato a los elementos clave del documento.</p>
      `
    },
    {
      id: 6,
      titulo: "Insertar y eliminar párrafos: organización del contenido",
      contenido: `
        <h4>📑 Párrafos y Saltos de Línea</h4>
        <ul>
          <li>Insertar nuevos párrafos (Enter) para separar ideas.</li>
          <li>Eliminar párrafos (retroceso o suprimir) para depurar el texto.</li>
          <li>Insertar saltos de línea (Shift + Enter) para controlar la estructura.</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un usuario organiza un informe separando cada sección en párrafos distintos y elimina los que no aportan información relevante.</p>
        <h4>Algoritmo (pseudocódigo):</h4>
        <pre>
// Insertar y eliminar párrafos
Ubicar cursor en posición deseada
Presionar Enter para nuevo párrafo
Seleccionar y borrar para eliminar
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para estructurar correctamente el documento, inserta y elimina párrafos según la lógica del contenido.</p>
      `
    }
  ],
  actividades: [
    "Escribe un párrafo y edítalo usando las funciones de copiar, cortar y pegar",
    "Utiliza deshacer y rehacer para revertir y repetir acciones",
    "Aplica formato de negrita, cursiva y subrayado a diferentes palabras",
    "Inserta y elimina varios párrafos en un documento de prueba",
    "Selecciona todo el texto y cambia su formato desde la cinta de opciones"
  ],
  recursos: [
    {
      titulo: "Guía de edición básica en Word",
      url: "/recursos/word/guia-edicion-basica.pdf",
      tipo: "pdf"
    },
    {
      titulo: "Video: Edición y formato básico en Word",
      url: "/videos/word/edicion-formato-basico-word.mp4",
      tipo: "video"
    }
  ],
  evaluacion: {
    tipo: "cuestionario",
    preguntas: [
      {
        pregunta: "¿Cuál es la función de Ctrl + C en Word?",
        opciones: [
          "Cortar texto seleccionado",
          "Copiar texto seleccionado",
          "Pegar texto copiado",
          "Deshacer la última acción"
        ],
        respuesta: 1
      },
      {
        pregunta: "¿Cómo se selecciona todo el texto de un documento?",
        opciones: [
          "Ctrl + E",
          "Ctrl + N",
          "Ctrl + S",
          "Ctrl + Z"
        ],
        respuesta: 0
      },
      {
        pregunta: "¿Qué permite la función deshacer?",
        opciones: [
          "Repetir la última acción",
          "Revertir la última acción realizada",
          "Aplicar formato de texto",
          "Insertar una imagen"
        ],
        respuesta: 1
      }
    ]
  }
};
