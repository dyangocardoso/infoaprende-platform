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
          <li>Realizar cálculos automáticos y complejos con fórmulas y funciones.</li>
          <li>Visualizar datos mediante gráficos y tablas dinámicas.</li>
          <li>Ordenar, filtrar y validar información para encontrar patrones y errores.</li>
          <li>Automatizar tareas repetitivas (por ejemplo, cálculo de promedios mensuales).</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un docente puede usar Excel para registrar las calificaciones de sus estudiantes, calcular promedios automáticamente y detectar quiénes necesitan refuerzo.</p>
      `
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
      `
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
      `
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
      `
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
      `
    }
  ],
  actividades: [
    "Explora el entorno de Excel y localiza sus elementos principales. Describe para qué sirve cada uno.",
    "Desplázate entre hojas y celdas usando el teclado y realiza una suma simple.",
    "Cambia el tema de color de Excel y ajusta el zoom. Explica cómo mejora tu experiencia.",
    "Identifica los diferentes tipos de datos que puedes ingresar en una celda y prueba una función condicional (SI)."
  ],
  recursos: [
    {
      titulo: "Guía visual de Excel",
      url: "/recursos/excel/guia-introduccion-excel.pdf",
      tipo: "pdf"
    },
    {
      titulo: "Video: Primeros pasos en Excel",
      url: "/videos/excel/primeros-pasos-excel.mp4",
      tipo: "video"
    },
    {
      titulo: "Diagrama de flujo: función SI",
      url: "/recursos/excel/diagrama-flujo-si.png",
      tipo: "imagen"
    }
  ],
  evaluacion: {
    tipo: "cuestionario",
    preguntas: [
      {
        pregunta: "¿Qué elemento permite escribir fórmulas en Excel?",
        opciones: [
          "Barra de fórmulas",
          "Cinta de opciones",
          "Área de trabajo",
          "Hoja de cálculo"
        ],
        respuesta: 0
      },
      {
        pregunta: "¿Cómo se llama el archivo principal de Excel?",
        opciones: [
          "Libro",
          "Hoja",
          "Celda",
          "Área de trabajo"
        ],
        respuesta: 0
      },
      {
        pregunta: "¿Cuál de los siguientes NO es un tipo de dato en Excel?",
        opciones: [
          "Imagen",
          "Texto",
          "Número",
          "Fecha"
        ],
        respuesta: 0
      },
      {
        pregunta: "¿Para qué sirve la cinta de opciones?",
        opciones: [
          "Acceder a comandos y herramientas",
          "Insertar imágenes únicamente",
          "Cambiar el idioma de Windows",
          "Cerrar el archivo"
        ],
        respuesta: 0
      },
      {
        pregunta: "¿Cuál es el algoritmo básico para calcular el promedio de una columna de notas?",
        opciones: [
          "Sumar todos los valores y dividir por la cantidad de celdas",
          "Restar el menor valor al mayor",
          "Multiplicar todos los valores",
          "Sumar solo los valores pares"
        ],
        respuesta: 0
      },
      {
        pregunta: "¿Qué función de Excel permite tomar decisiones según un criterio?",
        opciones: [
          "SI",
          "SUMA",
          "PROMEDIO",
          "MAX"
        ],
        respuesta: 0
      }
    ]
  }
};
