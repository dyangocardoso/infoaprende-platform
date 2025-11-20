/**
 * Tema 6: Fórmulas y funciones
 * Curso: Tabulador Electrónico Excel
 */

export default {
  id: '6',
  titulo: "Fórmulas y funciones",
  tematica: "Automatización del cálculo",
  duracion: "30-35 minutos",
  objetivos: [
    "Comprender la sintaxis y lógica de las fórmulas en Excel",
    "Utilizar operadores matemáticos y lógicos para resolver problemas reales",
    "Aplicar funciones básicas y avanzadas en contextos prácticos",
    "Automatizar cálculos y análisis de datos en hojas de Excel",
    "Interpretar y construir algoritmos para cálculos, búsquedas y decisiones"
  ],
  secciones: [
    {
      id: 1,
      titulo: "Sintaxis de fórmulas: ¿Qué, por qué y para qué?",
      contenido: `
        <h3>🧮 Sintaxis de Fórmulas: Fundamentos y utilidad</h3>
        <p>Las fórmulas en Excel permiten <strong>automatizar cálculos</strong> y obtener resultados dinámicos. Toda fórmula inicia con <code>=</code> y puede combinar referencias a celdas, operadores y funciones.</p>
        <ul>
          <li><strong>¿Por qué usar fórmulas?</strong> Para evitar cálculos manuales, reducir errores y actualizar resultados automáticamente al cambiar los datos.</li>
          <li><strong>¿Cómo se construye?</strong> <code>=A1+B1</code> suma los valores de A1 y B1. Se pueden usar operadores: <code>+</code> (suma), <code>-</code> (resta), <code>*</code> (multiplicación), <code>/</code> (división), <code>^</code> (potencia).</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un docente calcula el total de puntos obtenidos por un estudiante con <code>=B2+C2+D2</code>.</p>
        <p><strong>Vinculación teoría-práctica:</strong> Si cambias el valor de C2, el total se actualiza automáticamente.</p>
        <p><strong>Algoritmo básico (pseudocódigo):</strong></p>
        <pre>
// Sumar valores de varias celdas
Total = 0
Para cada celda en el rango:
    Total = Total + valor de la celda
Mostrar Total
        </pre>
      `,
      multimedia: [
        {
          tipo: "imagen",
          url: "/images/excel/formula-basica-ejemplo.png",
          descripcion: "Ejemplo de fórmula básica sumando varias celdas"
        },
        {
          tipo: "video",
          url: "/videos/excel/formulas-basicas.mp4",
          descripcion: "Video: Cómo crear y editar fórmulas en Excel"
        }
      ],
      actividades: [
        "Crea fórmulas para sumar, restar y promediar datos de una tabla.",
        "Modifica un dato y observa cómo se actualiza el resultado de la fórmula."
      ]
    },
    {
      id: 2,
      titulo: "Funciones básicas: Automatizando tareas comunes",
      contenido: `
        <h4>🔢 Funciones Básicas: Suma, promedio, máximo, mínimo</h4>
        <p>Las funciones son fórmulas predefinidas que simplifican cálculos frecuentes.</p>
        <ul>
          <li><strong>¿Por qué usar funciones?</strong> Para ahorrar tiempo y evitar errores al realizar operaciones repetitivas.</li>
          <li><strong>¿Cómo se usan?</strong> <code>=SUMA(A1:A10)</code> suma los valores del rango. <code>=PROMEDIO(B2:B12)</code> calcula el promedio.</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un profesor obtiene el promedio de notas de sus estudiantes con <code>=PROMEDIO(C2:C31)</code>.</p>
        <p><strong>Otras funciones útiles:</strong> <code>=MAX(D2:D31)</code> (máximo), <code>=MIN(D2:D31)</code> (mínimo), <code>=CONTAR(A2:A31)</code> (cuenta celdas con datos).</p>
        <p><strong>Vinculación teoría-práctica:</strong> Si agregas una nueva nota, el promedio se recalcula automáticamente.</p>
        <p><strong>Algoritmo (pseudocódigo):</strong></p>
        <pre>
// Calcular promedio de un rango
Suma = 0
Contador = 0
Para cada celda en el rango:
    Suma = Suma + valor de la celda
    Contador = Contador + 1
Promedio = Suma / Contador
        </pre>
      `,
      multimedia: [
        {
          tipo: "imagen",
          url: "/images/excel/funciones-basicas-ejemplo.png",
          descripcion: "Ejemplo de uso de funciones SUMA y PROMEDIO en Excel"
        },
        {
          tipo: "video",
          url: "/videos/excel/funciones-basicas.mp4",
          descripcion: "Video: Uso de funciones básicas en Excel"
        }
      ],
      actividades: [
        "Utiliza funciones básicas para encontrar el valor máximo y mínimo de un conjunto de datos.",
        "Calcula el promedio de una columna de notas y agrega un nuevo dato para ver el cambio."
      ]
    },
    {
      id: 3,
      titulo: "Funciones avanzadas: Decisiones y búsquedas",
      contenido: `
        <h4>🧠 Funciones Avanzadas: SI, BUSCARV, CONCATENAR, FECHA</h4>
        <p>Las funciones avanzadas permiten <strong>automatizar decisiones, buscar información y manipular datos</strong> de manera flexible.</p>
        <ul>
          <li><strong>¿Por qué usarlas?</strong> Para resolver problemas complejos, tomar decisiones automáticas y vincular datos de diferentes tablas.</li>
          <li><strong>¿Cómo se usan?</strong> <code>=SI(A2>=11, "Aprobado", "Desaprobado")</code> devuelve "Aprobado" si A2 es mayor o igual a 11.</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un docente clasifica automáticamente a los estudiantes según su nota con <code>=SI(C2>=11, "Aprobado", "Desaprobado")</code>.</p>
        <p><strong>Otras funciones:</strong> <code>=BUSCARV("Juan",A2:B31,2,FALSO)</code> busca el apellido de Juan en una tabla. <code>=CONCATENAR(A2," ",B2)</code> une nombre y apellido. <code>=FECHA(2025,9,23)</code> genera una fecha.</p>
        <p><strong>Vinculación teoría-práctica:</strong> Si cambias la nota de un estudiante, la función SI actualiza automáticamente el resultado.</p>
        <p><strong>Algoritmo (pseudocódigo):</strong></p>
        <pre>
// Clasificar estudiantes según nota
Para cada estudiante en la lista:
    Si nota >= 11:
        Estado = "Aprobado"
    Si nota < 11:
        Estado = "Desaprobado"
        </pre>
        <p><strong>Diagrama de flujo:</strong></p>
        <img src="/recursos/excel/diagrama-flujo-si.png" alt="Diagrama de flujo función SI" style="max-width:300px;">
      `,
      multimedia: [
        {
          tipo: "imagen",
          url: "/images/excel/funcion-si-ejemplo.png",
          descripcion: "Ejemplo de función SI y BUSCARV en Excel"
        },
        {
          tipo: "video",
          url: "/videos/excel/funciones-avanzadas.mp4",
          descripcion: "Video: Uso de funciones avanzadas en Excel"
        }
      ],
      actividades: [
        "Aplica la función SI para clasificar automáticamente los resultados de una evaluación.",
        "Emplea BUSCARV para buscar información en una tabla de alumnos.",
        "Concatena nombre y apellido de una lista usando la función CONCATENAR."
      ]
    }
  ],
  recursos: {
    documentos: [
      {
        titulo: "Guía de fórmulas y funciones",
        url: "/recursos/excel/guia-formulas-funciones.pdf"
      }
    ],
    enlaces: [
      {
        titulo: "Documentación oficial de Microsoft Excel sobre fórmulas y funciones",
        url: "https://support.microsoft.com/es-es/office/introducción-a-las-fórmulas-en-excel-ecfdc708-9162-49e8-b993-c311f47ca173"
      }
    ],
    videos: [
      {
        titulo: "Video: Uso práctico de funciones en Excel",
        url: "/videos/excel/uso-funciones-excel.mp4"
      },
      {
        titulo: "Video: Cómo crear y editar fórmulas en Excel",
        url: "/videos/excel/formulas-basicas.mp4"
      },
      {
        titulo: "Video: Uso de funciones básicas en Excel",
        url: "/videos/excel/funciones-basicas.mp4"
      },
      {
        titulo: "Video: Uso de funciones avanzadas en Excel",
        url: "/videos/excel/funciones-avanzadas.mp4"
      }
    ],
    imagenes: [
      {
        titulo: "Ejemplo de fórmula básica sumando varias celdas",
        url: "/images/excel/formula-basica-ejemplo.png"
      },
      {
        titulo: "Ejemplo de uso de funciones SUMA y PROMEDIO en Excel",
        url: "/images/excel/funciones-basicas-ejemplo.png"
      },
      {
        titulo: "Ejemplo de función SI y BUSCARV en Excel",
        url: "/images/excel/funcion-si-ejemplo.png"
      },
      {
        titulo: "Diagrama de flujo: función SI",
        url: "/recursos/excel/diagrama-flujo-si.png"
      }
    ]
  },
  evaluacion: {
    tipo: "cuestionario",
    cuestionario: [
      {
        pregunta: "¿Con qué símbolo inicia una fórmula en Excel?",
        tipo: "opcion-multiple",
        opciones: ["=", "+", "-", "*"],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Cuál es una función básica de Excel?",
        tipo: "opcion-multiple",
        opciones: ["SUMA", "BUSCARV", "SI", "FECHA"],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Qué algoritmo sigue Excel al calcular el promedio de un rango?",
        tipo: "opcion-multiple",
        opciones: [
          "Suma los valores y divide entre la cantidad de celdas",
          "Multiplica todos los valores",
          "Resta el menor valor al mayor",
          "Concatena los valores como texto"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Para qué sirve la función SI en Excel?",
        tipo: "opcion-multiple",
        opciones: [
          "Tomar decisiones automáticas según un criterio",
          "Sumar valores",
          "Buscar datos en otra tabla",
          "Unir textos"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Qué recurso puedes consultar para aprender a usar funciones avanzadas en Excel?",
        tipo: "opcion-multiple",
        opciones: [
          "Guía de fórmulas y funciones",
          "Manual de instalación de Windows",
          "Tutorial de PowerPoint",
          "Guía de macros en Word"
        ],
        respuestaCorrecta: 0
      }
    ]
  }
};
