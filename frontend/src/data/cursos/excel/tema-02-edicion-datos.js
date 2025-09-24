/**
 * Tema 2: Edición de datos
 * Curso: Tabulador Electrónico Excel
 */

export default {
  id: '2',
  titulo: "Edición de datos",
  tematica: "Ingreso y modificación de información",
  duracion: "20-30 minutos",
  objetivos: [
    "Comprender la importancia del ingreso y edición precisa de datos en Excel",
    "Distinguir los diferentes métodos de edición y manipulación de información",
    "Aplicar técnicas de validación y corrección de datos",
    "Relacionar la teoría con la práctica mediante ejemplos y procedimientos reales"
  ],
  secciones: [
    {
      id: 1,
      titulo: "¿Por qué es fundamental la edición de datos en Excel?",
      contenido: `
        <h3>📘 Importancia de la Edición de Datos</h3>
        <p>El ingreso y la edición correcta de datos es la base para cualquier análisis en Excel. Si los datos son incorrectos o están mal organizados, los resultados de los cálculos y gráficos serán erróneos.</p>
        <p><strong>¿Para qué?</strong> Para garantizar la confiabilidad de la información, facilitar el análisis y evitar errores en reportes y cálculos.</p>
        <p><strong>Ejemplo contextualizado:</strong> En una lista de asistencia, un error en la fecha o el nombre puede afectar el conteo de presentes y ausentes.</p>
      `
    },
    {
      id: 2,
      titulo: "Ingreso de datos: tipos y recomendaciones",
      contenido: `
        <h4>🧩 Ingreso de Datos</h4>
        <ul>
          <li>Escribir texto, números y fechas directamente en las celdas.</li>
          <li>Utilizar el autocompletar para series (ejemplo: lunes, martes, miércoles...)</li>
          <li>Validar el tipo de dato: evita ingresar texto donde debe ir un número.</li>
        </ul>
        <p><strong>Ejemplo práctico:</strong> Para ingresar una fecha, escribe <code>18/09/2025</code> y presiona Enter. Excel la reconocerá como fecha y permitirá operaciones como sumar días.</p>
      `
    },
    {
      id: 3,
      titulo: "Modificación y eliminación de datos: teoría y práctica",
      contenido: `
        <h4>✏️ Modificar y Eliminar</h4>
        <ul>
          <li>Editar el contenido de una celda con doble clic o usando la barra de fórmulas.</li>
          <li>Eliminar datos seleccionando la celda y presionando Supr.</li>
          <li>Deshacer y rehacer cambios con Ctrl+Z y Ctrl+Y.</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Si un valor fue ingresado incorrectamente, edítalo y observa cómo se actualizan automáticamente los resultados de las fórmulas relacionadas.</p>
        <p><strong>Algoritmo básico (pseudocódigo):</strong></p>
        <pre>
// Ordenar una lista de nombres alfabéticamente
Para i desde 1 hasta N-1:
    Para j desde i+1 hasta N:
        Si nombre[i] > nombre[j]:
            Intercambiar nombre[i] y nombre[j]
        </pre>
        <p>En Excel: selecciona el rango y usa "Ordenar A-Z" en la pestaña "Datos".</p>
      `
    },
    {
      id: 4,
      titulo: "Portapapeles: copiar, cortar y pegar con sentido",
      contenido: `
        <h4>📋 Portapapeles</h4>
        <ul>
          <li>Copiar (Ctrl+C), cortar (Ctrl+X) y pegar (Ctrl+V) datos y formatos.</li>
          <li>Pegar valores, fórmulas o formatos según la necesidad.</li>
          <li>Opciones avanzadas: pegado especial, transponer, etc.</li>
        </ul>
        <p><strong>Ejemplo práctico:</strong> Copia una columna de notas y pégala en otra hoja usando Ctrl+C y Ctrl+V. Usa "Pegado especial" para pegar solo los valores y no las fórmulas.</p>
      `
    },
    {
      id: 5,
      titulo: "Validación y corrección de datos: teoría y acción",
      contenido: `
        <h4>🧪 Validación y Corrección</h4>
        <ul>
          <li>Utilizar la herramienta de validación de datos para restringir valores permitidos.</li>
          <li>Detectar y corregir errores con las herramientas de revisión.</li>
        </ul>
        <p><strong>Ejemplo práctico:</strong> Para evitar que se ingresen valores fuera de un rango, selecciona la columna, ve a "Datos" &rarr; "Validación de datos" y define el criterio (por ejemplo, solo números entre 0 y 20).</p>
      `
    }
  ],
  actividades: [
    "Ingresa datos en varias celdas y modifícalos. Explica cómo afecta a los cálculos automáticos.",
    "Utiliza copiar, cortar y pegar para reorganizar información en una hoja de Excel.",
    "Ordena una lista de nombres y describe el proceso paso a paso.",
    "Configura una validación de datos para restringir los valores permitidos en una columna."
  ],
  recursos: [
    {
      titulo: "Guía de edición de datos en Excel",
      url: "/recursos/excel/guia-edicion-datos.pdf",
      tipo: "pdf"
    },
    {
      titulo: "Video: Edición y validación de datos en Excel",
      url: "/videos/excel/edicion-validacion-datos.mp4",
      tipo: "video"
    },
    {
      titulo: "Diagrama de flujo: ordenamiento de datos",
      url: "/recursos/excel/diagrama-flujo-ordenar.png",
      tipo: "imagen"
    }
  ],
  evaluacion: {
    tipo: "cuestionario",
    preguntas: [
      {
        pregunta: "¿Por qué es importante validar los datos en Excel?",
        opciones: [
          "Para evitar errores y asegurar la calidad de la información",
          "Para cambiar el color de las celdas",
          "Para insertar imágenes",
          "Para crear gráficos"
        ],
        respuesta: 0
      },
      {
        pregunta: "¿Qué comando permite deshacer un cambio?",
        opciones: [
          "Ctrl+Z",
          "Ctrl+X",
          "Ctrl+C",
          "Ctrl+V"
        ],
        respuesta: 0
      },
      {
        pregunta: "¿Cuál es el algoritmo básico para ordenar una lista de nombres?",
        opciones: [
          "Comparar e intercambiar elementos hasta que estén en orden",
          "Sumar todos los valores",
          "Multiplicar los valores",
          "Copiar y pegar los datos"
        ],
        respuesta: 0
      },
      {
        pregunta: "¿Qué herramienta de Excel permite restringir los valores que se pueden ingresar en una celda?",
        opciones: [
          "Validación de datos",
          "Formato condicional",
          "Pegado especial",
          "Autocompletar"
        ],
        respuesta: 0
      }
    ]
  }
};
