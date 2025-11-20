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
      `,
      multimedia: [
        {
          tipo: "imagen",
          url: "/images/excel/edicion-datos-importancia.png",
          descripcion: "Ejemplo de datos correctamente y erróneamente ingresados en Excel"
        },
        {
          tipo: "video",
          url: "/videos/excel/importancia-edicion-datos.mp4",
          descripcion: "Video: Importancia de la edición de datos en Excel"
        }
      ],
      actividades: [
        "Explica con tus palabras por qué es fundamental ingresar datos correctamente en Excel.",
        "Da un ejemplo de cómo un error de edición puede afectar un cálculo."
      ]
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
      `,
      multimedia: [
        {
          tipo: "video",
          url: "/videos/excel/ingreso-datos.mp4",
          descripcion: "Video: Ingreso de datos y recomendaciones en Excel"
        }
      ],
      actividades: [
        "Ingresa datos de diferentes tipos en varias celdas y observa cómo los reconoce Excel.",
        "Utiliza el autocompletar para crear una serie de días o meses."
      ]
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
      `,
      multimedia: [
        {
          tipo: "imagen",
          url: "/images/excel/modificar-eliminar-datos.png",
          descripcion: "Ejemplo de edición y eliminación de datos en Excel"
        },
        {
          tipo: "video",
          url: "/videos/excel/modificar-eliminar-datos.mp4",
          descripcion: "Video: Modificación y eliminación de datos en Excel"
        }
      ],
      actividades: [
        "Modifica y elimina datos en una hoja de Excel y observa cómo cambian los resultados de las fórmulas.",
        "Ordena una lista de nombres y describe el proceso paso a paso."
      ]
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
      `,
      multimedia: [
        {
          tipo: "video",
          url: "/videos/excel/portapapeles.mp4",
          descripcion: "Video: Copiar, cortar y pegar datos en Excel"
        }
      ],
      actividades: [
        "Utiliza copiar, cortar y pegar para reorganizar información en una hoja de Excel.",
        "Prueba el pegado especial para copiar solo valores o formatos."
      ]
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
      `,
      multimedia: [
        {
          tipo: "imagen",
          url: "/images/excel/validacion-correccion.png",
          descripcion: "Ejemplo de validación y corrección de datos en Excel"
        },
        {
          tipo: "video",
          url: "/videos/excel/validacion-correccion.mp4",
          descripcion: "Video: Validación y corrección de datos en Excel"
        }
      ],
      actividades: [
        "Configura una validación de datos para restringir los valores permitidos en una columna.",
        "Detecta y corrige un error usando las herramientas de revisión."
      ]
    }
  ],
  recursos: {
    documentos: [
      {
        titulo: "Guía de edición de datos en Excel",
        url: "/recursos/excel/guia-edicion-datos.pdf"
      }
    ],
    enlaces: [
      {
        titulo: "Documentación oficial de Microsoft Excel sobre edición de datos",
        url: "https://support.microsoft.com/es-es/office/editar-o-reemplazar-datos-en-una-celda-3f2b1b4e-2c7e-4b8a-8c5e-1b8e6c7c1e7c"
      }
    ],
    videos: [
      {
        titulo: "Video: Edición y validación de datos en Excel",
        url: "/videos/excel/edicion-validacion-datos.mp4"
      }
    ],
    imagenes: [
      {
        titulo: "Diagrama de flujo: ordenamiento de datos",
        url: "/recursos/excel/diagrama-flujo-ordenar.png"
      }
    ]
  },
  evaluacion: {
    tipo: "cuestionario",
    cuestionario: [
      {
        pregunta: "¿Por qué es importante validar los datos en Excel?",
        tipo: "opcion-multiple",
        opciones: [
          "Para evitar errores y asegurar la calidad de la información",
          "Para cambiar el color de las celdas",
          "Para insertar imágenes",
          "Para crear gráficos"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Qué comando permite deshacer un cambio?",
        tipo: "opcion-multiple",
        opciones: [
          "Ctrl+Z",
          "Ctrl+X",
          "Ctrl+C",
          "Ctrl+V"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Cuál es el algoritmo básico para ordenar una lista de nombres?",
        tipo: "opcion-multiple",
        opciones: [
          "Comparar e intercambiar elementos hasta que estén en orden",
          "Sumar todos los valores",
          "Multiplicar los valores",
          "Copiar y pegar los datos"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Qué herramienta de Excel permite restringir los valores que se pueden ingresar en una celda?",
        tipo: "opcion-multiple",
        opciones: [
          "Validación de datos",
          "Formato condicional",
          "Pegado especial",
          "Autocompletar"
        ],
        respuestaCorrecta: 0
      }
    ]
  }
};
