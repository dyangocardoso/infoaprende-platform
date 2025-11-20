/**
 * Tema 7: Formato condicional
 * Curso: Tabulador Electrónico Excel
 */

export default {
  id: '7',
  titulo: "Formato condicional",
  tematica: "Representación dinámica de criterios",
  duracion: "20-25 minutos",
  objetivos: [
    "Comprender el propósito y la lógica del formato condicional en Excel",
    "Aplicar reglas de formato condicional para resaltar información relevante",
    "Configurar reglas basadas en valores, fórmulas y criterios personalizados",
    "Visualizar datos de manera dinámica mediante escalas de color, iconos y barras de datos",
    "Interpretar y construir algoritmos para la aplicación de reglas condicionales"
  ],
  secciones: [
    {
      id: 1,
      titulo: "Reglas de formato condicional: ¿Qué, por qué y para qué?",
      contenido: `
        <h3>🟨 Reglas de Formato Condicional: Automatización visual</h3>
        <p>El formato condicional permite <strong>resaltar automáticamente celdas</strong> que cumplen ciertos criterios, facilitando la interpretación y el análisis de grandes volúmenes de datos.</p>
        <ul>
          <li><strong>¿Por qué usarlo?</strong> Para identificar rápidamente valores críticos, tendencias o errores sin revisar manualmente toda la hoja.</li>
          <li><strong>¿Cómo se aplica?</strong> Selecciona el rango, ve a "Inicio" &rarr; "Formato condicional" y elige una regla (por ejemplo, "Mayor que...").</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un docente resalta en rojo las notas menores a 11 y en verde las aprobadas usando formato condicional.</p>
        <p><strong>Vinculación teoría-práctica:</strong> Si cambias una nota, el color de la celda se actualiza automáticamente según la regla definida.</p>
        <p><strong>Algoritmo básico (pseudocódigo):</strong></p>
        <pre>
// Aplicar formato condicional a un rango
Para cada celda en el rango:
    Si valor cumple la condición:
        Aplicar formato especial (color, icono, etc.)
    Si no:
        Mantener formato normal
        </pre>
      `,
      multimedia: [
        {
          tipo: "imagen",
          url: "/images/excel/condicional-ejemplo.png",
          descripcion: "Ejemplo de formato condicional resaltando notas aprobadas y desaprobadas"
        },
        {
          tipo: "video",
          url: "/videos/excel/formato-condicional.mp4",
          descripcion: "Video: Formato condicional en Excel"
        }
      ],
      actividades: [
        "Aplica formato condicional para resaltar automáticamente las celdas con valores inferiores a un umbral definido.",
        "Describe con tus palabras el algoritmo que sigue Excel al aplicar formato condicional a un rango de celdas."
      ]
    },
    {
      id: 2,
      titulo: "Visualización dinámica: Escalas, iconos y barras",
      contenido: `
        <h4>🌈 Visualización Dinámica: Más allá del color</h4>
        <p>Excel permite aplicar <strong>escalas de color, barras de datos e iconos</strong> para visualizar tendencias y comparaciones de manera intuitiva.</p>
        <ul>
          <li><strong>¿Por qué usar visualización dinámica?</strong> Para detectar patrones, valores atípicos o progresos de un vistazo.</li>
          <li><strong>¿Cómo se aplica?</strong> Selecciona el rango, "Formato condicional" &rarr; "Escalas de color", "Barras de datos" o "Conjunto de iconos".</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> En una lista de asistencia, las celdas con más faltas se colorean en rojo y las de asistencia perfecta en verde.</p>
        <p><strong>Otras opciones:</strong> Barras de datos muestran el avance relativo; iconos (flechas, semáforos) indican niveles de cumplimiento.</p>
        <p><strong>Vinculación teoría-práctica:</strong> Para monitorear ventas mensuales, usa barras de datos para comparar rápidamente el rendimiento de cada mes.</p>
        <p><strong>Algoritmo (pseudocódigo):</strong></p>
        <pre>
// Aplicar escala de color
Para cada celda en el rango:
    Determinar valor mínimo y máximo del rango
    Asignar color según la posición relativa del valor
        </pre>
      `,
      multimedia: [
        {
          tipo: "imagen",
          url: "/images/excel/escalas-barras-iconos.png",
          descripcion: "Ejemplo de escalas de color, barras de datos e iconos en Excel"
        },
        {
          tipo: "video",
          url: "/videos/excel/escalas-barras-iconos.mp4",
          descripcion: "Video: Visualización dinámica con escalas, barras e iconos en Excel"
        }
      ],
      actividades: [
        "Utiliza escalas de color para visualizar el rendimiento de un grupo de estudiantes.",
        "Emplea iconos para indicar niveles de cumplimiento en una lista de tareas."
      ]
    },
    {
      id: 3,
      titulo: "Reglas personalizadas y fórmulas",
      contenido: `
        <h4>⚙️ Reglas Personalizadas: Flexibilidad total</h4>
        <p>Además de las reglas predefinidas, puedes crear <strong>reglas personalizadas usando fórmulas</strong> para cubrir necesidades específicas.</p>
        <ul>
          <li><strong>¿Por qué usarlas?</strong> Para aplicar formatos basados en condiciones complejas o múltiples criterios.</li>
          <li><strong>¿Cómo se hace?</strong> "Formato condicional" &rarr; "Nueva regla" &rarr; "Usar una fórmula que determine las celdas a aplicar formato".</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Resalta en azul las celdas donde la asistencia sea menor al 80% y la nota mayor a 15: <code>=Y(B2<0.8;C2>15)</code>.</p>
        <p><strong>Vinculación teoría-práctica:</strong> Permite combinar criterios de diferentes columnas para análisis avanzados.</p>
        <p><strong>Algoritmo (pseudocódigo):</strong></p>
        <pre>
// Aplicar formato con fórmula personalizada
Para cada fila en la tabla:
    Si fórmula lógica devuelve VERDADERO:
        Aplicar formato especial
        </pre>
      `,
      multimedia: [
        {
          tipo: "imagen",
          url: "/images/excel/formula-condicional-ejemplo.png",
          descripcion: "Ejemplo de regla personalizada con fórmula en Excel"
        },
        {
          tipo: "video",
          url: "/videos/excel/formulas-condicionales.mp4",
          descripcion: "Video: Reglas personalizadas y fórmulas en formato condicional"
        }
      ],
      actividades: [
        "Crea una regla personalizada con fórmula para resaltar casos especiales en una tabla."
      ]
    }
  ],
  recursos: {
    documentos: [
      {
        titulo: "Guía de reglas y fórmulas de formato condicional",
        url: "/recursos/excel/guia-formato-condicional.pdf"
      }
    ],
    enlaces: [
      {
        titulo: "Documentación oficial de Microsoft Excel sobre formato condicional",
        url: "https://support.microsoft.com/es-es/office/aplicar-formato-condicional-en-excel-3f2b1b4e-2c7e-4b8a-8c5e-1b8e6c7c1e7c"
      }
    ],
    videos: [
      {
        titulo: "Video: Formato condicional en Excel",
        url: "/videos/excel/formato-condicional.mp4"
      },
      {
        titulo: "Video: Visualización dinámica con escalas, barras e iconos en Excel",
        url: "/videos/excel/escalas-barras-iconos.mp4"
      },
      {
        titulo: "Video: Reglas personalizadas y fórmulas en formato condicional",
        url: "/videos/excel/formulas-condicionales.mp4"
      }
    ],
    imagenes: [
      {
        titulo: "Ejemplo de formato condicional resaltando notas aprobadas y desaprobadas",
        url: "/images/excel/condicional-ejemplo.png"
      },
      {
        titulo: "Ejemplo de escalas de color, barras de datos e iconos en Excel",
        url: "/images/excel/escalas-barras-iconos.png"
      },
      {
        titulo: "Ejemplo de regla personalizada con fórmula en Excel",
        url: "/images/excel/formula-condicional-ejemplo.png"
      },
      {
        titulo: "Diagrama de flujo: aplicación de formato condicional",
        url: "/recursos/excel/diagrama-flujo-formato-condicional.png"
      }
    ]
  },
  evaluacion: {
    tipo: "cuestionario",
    cuestionario: [
      {
        pregunta: "¿Cuál es el objetivo principal del formato condicional en Excel?",
        tipo: "opcion-multiple",
        opciones: [
          "Resaltar automáticamente información relevante según criterios definidos",
          "Eliminar datos duplicados",
          "Insertar gráficos",
          "Validar datos"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Cómo se aplica una regla de formato condicional a un rango de celdas?",
        tipo: "opcion-multiple",
        opciones: [
          "Desde el menú de formato condicional, seleccionando la regla deseada",
          "Insertando una imagen",
          "Cambiando el color de fondo manualmente",
          "Eliminando celdas"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Qué algoritmo sigue Excel al aplicar una escala de color?",
        tipo: "opcion-multiple",
        opciones: [
          "Asigna colores según la posición relativa del valor entre el mínimo y el máximo",
          "Cambia el color de toda la hoja",
          "Elimina las celdas que no cumplen",
          "No realiza ninguna acción"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Para qué sirven las reglas personalizadas con fórmulas en formato condicional?",
        tipo: "opcion-multiple",
        opciones: [
          "Para aplicar formatos basados en condiciones complejas o múltiples criterios",
          "Para sumar valores",
          "Para buscar datos en otra tabla",
          "Para unir textos"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Qué recurso puedes consultar para aprender a crear reglas avanzadas de formato condicional?",
        tipo: "opcion-multiple",
        opciones: [
          "Guía de reglas y fórmulas de formato condicional",
          "Manual de instalación de Windows",
          "Tutorial de PowerPoint",
          "Guía de macros en Word"
        ],
        respuestaCorrecta: 0
      }
    ]
  }
};
