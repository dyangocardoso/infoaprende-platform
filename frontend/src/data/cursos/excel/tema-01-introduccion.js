/**
 * Tema 1: Introducción
 * Curso: Tabulador Electrónico Excel
 */

export default {
  id: '1',
  titulo: "Introducción",
  tematica: "Familiarización con el entorno",
  duracion: "20-30 minutos",
  objetivos: [
    "Comprender el propósito y la utilidad de Excel en la gestión de datos",
    "Reconocer y explicar los elementos principales de la interfaz de Excel",
    "Diferenciar los tipos de datos y su impacto en los cálculos",
    "Aplicar acciones básicas de navegación y personalización en la hoja de cálculo",
    "Relacionar conceptos teóricos con ejemplos y procedimientos prácticos"
  ],
  secciones: [
    {
      id: 1,
      titulo: "¿Qué es Excel y para qué sirve?",
      contenido: `
        <h3>📘 ¿Qué es Excel y para qué se utiliza?</h3>
        <p><strong>Excel</strong> es un programa de hoja de cálculo desarrollado por Microsoft, diseñado para organizar, analizar y visualizar datos de manera eficiente. Su principal fortaleza radica en la capacidad de automatizar cálculos, gestionar grandes volúmenes de información y facilitar la toma de decisiones basada en datos.</p>
        <p><strong>¿Por qué usar Excel?</strong> Porque permite:</p>
        <ul>
          <li>Realizar cálulos automáticos y complejos con fórmulas y funciones.</li>
          <li>Visualizar datos mediante gráficos y tablas dinámicas.</li>
          <li>Ordenar, filtrar y validar información para encontrar patrones y errores.</li>
          <li>Automatizar tareas repetitivas (por ejemplo, cálculo de promedios mensuales).</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un docente puede usar Excel para registrar las calificaciones de sus estudiantes, calcular promedios automáticamente y detectar quiénes necesitan refuerzo.</p>
      `,
      multimedia: [
        {
          tipo: "imagen",
          url: "/images/excel/que-es-excel.png",
          descripcion: "Pantalla de inicio de Excel mostrando una hoja de cálculo en blanco"
        },
        {
          tipo: "video",
          url: "/videos/excel/que-es-excel.mp4",
          descripcion: "Video introductorio: ¿Qué es Excel y para qué sirve?"
        }
      ],
      actividades: [
        "Describe con tus palabras para qué sirve Excel y da un ejemplo de uso en tu vida cotidiana.",
        "Identifica tres ventajas de usar Excel para organizar información."
      ]
    },
    {
      id: 2,
      titulo: "Elementos del entorno y su función práctica",
      contenido: `
        <h4>🧩 Elementos Principales de la Interfaz</h4>
        <ul>
          <li><strong>Cinta de opciones:</strong> Agrupa comandos por pestañas (Inicio, Insertar, Fórmulas, etc.). <br> <em>Ejemplo:</em> Para dar formato a una celda, selecciona la celda y usa la pestaña "Inicio" &rarr; grupo "Fuente".</li>
          <li><strong>Barra de fórmulas:</strong> Muestra y permite editar el contenido de la celda activa. <br> <em>Ejemplo:</em> Si escribes <code>=SUMA(A1:A10)</code>, la barra de fórmulas mostrará la fórmula y el resultado aparecerá en la celda.</li>
          <li><strong>Área de trabajo:</strong> Espacio donde se ingresan y manipulan los datos (celdas organizadas en filas y columnas).</li>
          <li><strong>Panel de hojas:</strong> Permite gestionar varias hojas dentro de un mismo archivo (libro).</li>
          <li><strong>Barra de estado:</strong> Muestra información útil (promedio, suma, recuento de celdas seleccionadas, etc.).</li>
        </ul>
        <p><strong>Vinculación práctica:</strong> Para sumar rápidamente una columna de números, selecciona el rango y observa la barra de estado: Excel muestra la suma automáticamente.</p>
      `,
      multimedia: [
        {
          tipo: "imagen",
          url: "/images/excel/interfaz-excel.png",
          descripcion: "Elementos principales de la interfaz de Excel señalados en pantalla"
        },
        {
          tipo: "video",
          url: "/videos/excel/interfaz-excel.mp4",
          descripcion: "Video: Recorrido por la interfaz de Excel"
        }
      ],
      actividades: [
        "Explora el entorno de Excel y localiza sus elementos principales. Describe para qué sirve cada uno.",
        "Realiza una suma rápida usando la barra de estado."
      ]
    },
    {
      id: 3,
      titulo: "Navegación y acciones básicas en Excel",
      contenido: `
        <h4>🧭 Navegación y Acciones Básicas</h4>
        <ul>
          <li>Desplazarse entre celdas con el teclado (flechas, Tab, Enter).</li>
          <li>Cambiar de hoja con los controles inferiores.</li>
          <li>Ir a una celda específica usando el cuadro de nombre.</li>
        </ul>
        <p><strong>Ejemplo práctico:</strong> Para ingresar una fórmula en la celda B2, navega con las flechas hasta B2, escribe <code>=A2*10</code> y presiona Enter.</p>
        <p><strong>Algoritmo básico (pseudocódigo):</strong></p>
        <pre>
// Calcular el promedio de una columna de notas
Suma = 0
Para cada celda en el rango A2:A11:
    Suma = Suma + valor de la celda
Promedio = Suma / cantidad de celdas
        </pre>
        <p>En Excel: <code>=PROMEDIO(A2:A11)</code></p>
      `,
      multimedia: [
        {
          tipo: "video",
          url: "/videos/excel/navegacion-basica.mp4",
          descripcion: "Video: Navegación y acciones básicas en Excel"
        }
      ],
      actividades: [
        "Desplázate entre hojas y celdas usando el teclado y realiza una suma simple.",
        "Calcula el promedio de una columna de notas usando la función PROMEDIO."
      ]
    },
    {
      id: 4,
      titulo: "Tipos de datos y su impacto en los cálculos",
      contenido: `
        <h4>🔢 Tipos de Datos en Excel</h4>
        <ul>
          <li><strong>Números:</strong> Permiten operaciones matemáticas. <br> <em>Ejemplo:</em> <code>2025</code>, <code>3.14</code></li>
          <li><strong>Texto:</strong> Información alfanumérica. <br> <em>Ejemplo:</em> <code>"Aprobado"</code>, <code>"Juan Pérez"</code></li>
          <li><strong>Fechas y horas:</strong> Se pueden comparar, sumar o restar. <br> <em>Ejemplo:</em> <code>18/09/2025</code>, <code>12:30</code></li>
          <li><strong>Fórmulas:</strong> Inician con <code>=</code> y devuelven un resultado. <br> <em>Ejemplo:</em> <code>=A1+B1</code></li>
          <li><strong>Valores lógicos:</strong> <code>VERDADERO</code> o <code>FALSO</code>. <br> <em>Ejemplo:</em> <code>=A1>10</code> devuelve <code>VERDADERO</code> si A1 es mayor que 10.</li>
        </ul>
        <p><strong>Importancia:</strong> El tipo de dato determina qué operaciones puedes realizar y cómo se visualizan los resultados.</p>
        <p><strong>Ejemplo de función condicional:</strong> <code>=SI(A2>=11, "Aprobado", "Desaprobado")</code></p>
        <p><strong>Diagrama de flujo:</strong></p>
        <img src="/recursos/excel/diagrama-flujo-si.png" alt="Diagrama de flujo función SI" style="max-width:300px;">
      `,
      multimedia: [
        {
          tipo: "imagen",
          url: "/recursos/excel/diagrama-flujo-si.png",
          descripcion: "Diagrama de flujo de la función SI en Excel"
        },
        {
          tipo: "video",
          url: "/videos/excel/tipos-datos.mp4",
          descripcion: "Video: Tipos de datos y su impacto en los cálculos en Excel"
        }
      ],
      actividades: [
        "Identifica los diferentes tipos de datos que puedes ingresar en una celda.",
        "Prueba una función condicional (SI) en una hoja de cálculo."
      ]
    },
    {
      id: 5,
      titulo: "Personalización de la interfaz y experiencia de usuario",
      contenido: `
        <h4>🎨 Personalización y Ajustes</h4>
        <ul>
          <li>Cambiar el tema de color de Excel para reducir fatiga visual.</li>
          <li>Mostrar u ocultar barras y paneles según la tarea.</li>
          <li>Ajustar el zoom y la vista de la hoja para trabajar con comodidad.</li>
        </ul>
        <p><strong>Ejemplo práctico:</strong> Para cambiar el tema, ve a "Archivo" &rarr; "Opciones" &rarr; "General" &rarr; "Personalizar la copia de Microsoft Office".</p>
      `,
      multimedia: [
        {
          tipo: "video",
          url: "/videos/excel/personalizacion-excel.mp4",
          descripcion: "Video: Personalización de la interfaz y experiencia de usuario en Excel"
        }
      ],
      actividades: [
        "Cambia el tema de color de Excel y ajusta el zoom. Explica cómo mejora tu experiencia.",
        "Muestra u oculta la barra de fórmulas y la barra de estado."
      ]
    }
  ],
  recursos: {
    documentos: [
      {
        titulo: "Guía visual de Excel",
        url: "/recursos/excel/guia-introduccion-excel.pdf"
      }
    ],
    enlaces: [
      {
        titulo: "Documentación oficial de Microsoft Excel para principiantes",
        url: "https://support.microsoft.com/es-es/office/introducción-a-excel-7b8ab8e0-7e7c-4f0d-8b3c-3e7e3fa5b8e0"
      }
    ],
    videos: [
      {
        titulo: "Video: Primeros pasos en Excel",
        url: "/videos/excel/primeros-pasos-excel.mp4"
      }
    ]
  },
  evaluacion: {
    tipo: "cuestionario",
    cuestionario: [
      {
        pregunta: "¿Qué elemento permite escribir fórmulas en Excel?",
        tipo: "opcion-multiple",
        opciones: [
          "Barra de fórmulas",
          "Cinta de opciones",
          "Área de trabajo",
          "Hoja de cálculo"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Cómo se llama el archivo principal de Excel?",
        tipo: "opcion-multiple",
        opciones: [
          "Libro",
          "Hoja",
          "Celda",
          "Área de trabajo"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Cuál de los siguientes NO es un tipo de dato en Excel?",
        tipo: "opcion-multiple",
        opciones: [
          "Imagen",
          "Texto",
          "Número",
          "Fecha"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Para qué sirve la cinta de opciones?",
        tipo: "opcion-multiple",
        opciones: [
          "Acceder a comandos y herramientas",
          "Insertar imágenes únicamente",
          "Cambiar el idioma de Windows",
          "Cerrar el archivo"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Cuál es el algoritmo básico para calcular el promedio de una columna de notas?",
        tipo: "opcion-multiple",
        opciones: [
          "Sumar todos los valores y dividir por la cantidad de celdas",
          "Restar el menor valor al mayor",
          "Multiplicar todos los valores",
          "Sumar solo los valores pares"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Qué función de Excel permite tomar decisiones según un criterio?",
        tipo: "opcion-multiple",
        opciones: [
          "SI",
          "SUMA",
          "PROMEDIO",
          "MAX"
        ],
        respuestaCorrecta: 0
      }
    ]
  }
};
