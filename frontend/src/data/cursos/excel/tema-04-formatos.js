/**
 * Tema 4: Formatos
 * Curso: Tabulador Electrónico Excel
 */

export default {
  id: '4',
  titulo: "Formatos",
  tematica: "Personalización visual de datos",
  duracion: "20-25 minutos",
  objetivos: [
    "Comprender la importancia del formato en la interpretación y presentación de datos",
    "Aplicar formatos a celdas, filas y columnas para mejorar la legibilidad",
    "Modificar tipo de letra, color, bordes y estilos para destacar información relevante",
    "Ajustar alineación y estilos de celda según el contexto de los datos",
    "Utilizar formatos condicionales para resaltar patrones y facilitar el análisis visual"
  ],
  secciones: [
    {
      id: 1,
      titulo: "Formato de celdas: ¿Por qué y para qué?",
      contenido: `
        <h3>🎨 Formato de Celdas: Más que apariencia</h3>
        <p>El formato de celdas en Excel no solo embellece la hoja, sino que <strong>facilita la interpretación y el análisis de los datos</strong>. Un formato adecuado permite identificar rápidamente información clave, evitar errores y comunicar resultados de manera efectiva.</p>
        <ul>
          <li><strong>¿Por qué aplicar formato?</strong> Para diferenciar tipos de datos, resaltar valores importantes y mejorar la comprensión visual.</li>
          <li><strong>¿Cómo se aplica?</strong> Selecciona la celda o rango, haz clic derecho y elige "Formato de celdas" o usa la pestaña "Inicio" &rarr; grupo "Fuente".</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un docente resalta en verde las celdas con notas aprobatorias y en rojo las desaprobadas para identificar rápidamente el desempeño de sus estudiantes.</p>
        <h4>Opciones de formato:</h4>
        <ul>
          <li>Cambiar tipo y tamaño de letra</li>
          <li>Aplicar colores de fondo y texto</li>
          <li>Agregar bordes y estilos personalizados</li>
        </ul>
        <p><strong>Vinculación teoría-práctica:</strong> Para destacar los totales de una tabla, selecciona la fila de totales y aplica negrita y color de fondo diferente.</p>
        <p><strong>Algoritmo básico (pseudocódigo):</strong></p>
        <pre>
// Resaltar celdas con valores mayores a 10
Para cada celda en el rango:
    Si valor de la celda > 10:
        Aplicar formato de fondo verde
    Si valor de la celda <= 10:
        Aplicar formato de fondo rojo
        </pre>
      `,
      multimedia: [
        {
          tipo: "imagen",
          url: "/images/excel/formato-celdas-ejemplo.png",
          descripcion: "Ejemplo de celdas con diferentes formatos de color y fuente"
        },
        {
          tipo: "video",
          url: "/videos/excel/formatos-excel.mp4",
          descripcion: "Video: Cómo aplicar formatos básicos en Excel"
        }
      ],
      actividades: [
        "Aplica diferentes formatos a una tabla de datos: cambia tipo de letra, color de fondo y agrega bordes.",
        "Resalta en verde las celdas con valores mayores a 10 y en rojo las menores o iguales a 10."
      ]
    },
    {
      id: 2,
      titulo: "Alineación y estilos: Claridad y orden visual",
      contenido: `
        <h4>📐 Alineación y Estilos: Organización visual</h4>
        <p>La alineación y los estilos ayudan a que los datos sean más fáciles de leer y comparar.</p>
        <ul>
          <li><strong>¿Por qué alinear?</strong> Para que los datos numéricos, textos y títulos se presenten de forma coherente y profesional.</li>
          <li><strong>¿Cómo se alinea?</strong> Usa las opciones de alineación horizontal y vertical en la barra de herramientas.</li>
        </ul>
        <p><strong>Ejemplo práctico:</strong> Centra los títulos de las columnas y alinea a la derecha los valores numéricos para facilitar la comparación.</p>
        <p><strong>Estilos predefinidos:</strong> Permiten aplicar combinaciones de formato rápidamente (colores, bordes, fuentes).</p>
        <p><strong>Vinculación teoría-práctica:</strong> Para una tabla de asistencia, aplica un estilo de tabla para diferenciar encabezados y filas alternas.</p>
        <p><strong>Algoritmo (pseudocódigo):</strong></p>
        <pre>
// Aplicar alineación y estilo a una tabla
Para cada celda en la fila de encabezado:
    Aplicar negrita y centrar texto
Para cada celda en las filas de datos:
    Alinear texto según el tipo de dato
        </pre>
      `,
      multimedia: [
        {
          tipo: "imagen",
          url: "/images/excel/alineacion-estilos-ejemplo.png",
          descripcion: "Ejemplo de alineación y estilos en una tabla de Excel"
        },
        {
          tipo: "video",
          url: "/videos/excel/alineacion-estilos.mp4",
          descripcion: "Video: Alineación y estilos en tablas de Excel"
        }
      ],
      actividades: [
        "Alinea los títulos de una tabla al centro y los datos numéricos a la derecha.",
        "Crea una tabla de asistencia y aplica un estilo predefinido para diferenciar encabezados y filas alternas."
      ]
    },
    {
      id: 3,
      titulo: "Formatos condicionales: Resaltando patrones",
      contenido: `
        <h4>🟢 Formato condicional: Automatizando el análisis visual</h4>
        <p>El formato condicional permite <strong>resaltar automáticamente</strong> celdas que cumplen ciertos criterios, facilitando la detección de tendencias, errores o valores atípicos.</p>
        <ul>
          <li><strong>¿Por qué usarlo?</strong> Para identificar rápidamente datos relevantes sin revisar manualmente toda la hoja.</li>
          <li><strong>¿Cómo se aplica?</strong> Selecciona el rango, ve a "Inicio" &rarr; "Formato condicional" y elige una regla (por ejemplo, "Mayor que...").</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> En una lista de pagos, el formato condicional resalta en amarillo los valores vencidos y en verde los pagados.</p>
        <p><strong>Algoritmo (pseudocódigo):</strong></p>
        <pre>
// Resaltar pagos vencidos
Para cada celda en la columna "Estado":
    Si valor = "Vencido":
        Aplicar fondo amarillo
    Si valor = "Pagado":
        Aplicar fondo verde
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para monitorear el avance de tareas, usa formato condicional para marcar en rojo las tareas pendientes y en verde las completadas.</p>
      `,
      multimedia: [
        {
          tipo: "imagen",
          url: "/images/excel/condicional-ejemplo.png",
          descripcion: "Ejemplo de formato condicional resaltando pagos vencidos y pagados"
        },
        {
          tipo: "video",
          url: "/videos/excel/formato-condicional.mp4",
          descripcion: "Video: Cómo aplicar formato condicional en Excel"
        }
      ],
      actividades: [
        "Utiliza formato condicional para resaltar automáticamente las celdas con valores superiores a un umbral definido.",
        "Describe con tus palabras el algoritmo que sigue Excel al aplicar formato condicional a un rango de celdas."
      ]
    }
  ],
  recursos: {
    documentos: [
      {
        titulo: "Guía de formato condicional en Excel",
        url: "/recursos/excel/guia-formato-condicional.pdf"
      }
    ],
    enlaces: [
      {
        titulo: "Documentación oficial de Microsoft Excel sobre formato de celdas",
        url: "https://support.microsoft.com/es-es/office/dar-formato-a-una-hoja-de-c%C3%A1lculo-3f2b1b4e-2c7e-4b8a-8c5e-1b8e6c7c1e7c"
      }
    ],
    videos: [
      {
        titulo: "Video: Formatos en Excel",
        url: "/videos/excel/formatos-excel.mp4"
      },
      {
        titulo: "Video: Alineación y estilos en tablas de Excel",
        url: "/videos/excel/alineacion-estilos.mp4"
      },
      {
        titulo: "Video: Cómo aplicar formato condicional en Excel",
        url: "/videos/excel/formato-condicional.mp4"
      }
    ],
    imagenes: [
      {
        titulo: "Ejemplo de celdas con diferentes formatos de color y fuente",
        url: "/images/excel/formato-celdas-ejemplo.png"
      },
      {
        titulo: "Ejemplo de alineación y estilos en una tabla de Excel",
        url: "/images/excel/alineacion-estilos-ejemplo.png"
      },
      {
        titulo: "Ejemplo de formato condicional resaltando pagos vencidos y pagados",
        url: "/images/excel/condicional-ejemplo.png"
      },
      {
        titulo: "Diagrama de flujo: formato condicional",
        url: "/recursos/excel/diagrama-flujo-formato-condicional.png"
      }
    ]
  },
  evaluacion: {
    tipo: "cuestionario",
    cuestionario: [
      {
        pregunta: "¿Cuál es el objetivo principal de aplicar formato a las celdas en Excel?",
        tipo: "opcion-multiple",
        opciones: [
          "Facilitar la interpretación y presentación de los datos",
          "Eliminar datos duplicados",
          "Insertar gráficos",
          "Validar datos"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Cómo se aplica un formato condicional a un rango de celdas?",
        tipo: "opcion-multiple",
        opciones: [
          "Seleccionando el rango y usando la opción 'Formato condicional' en la barra de herramientas",
          "Haciendo doble clic en la celda",
          "Arrastrando la celda",
          "Insertando una imagen"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Qué algoritmo sigue Excel al resaltar celdas con valores mayores a un umbral?",
        tipo: "opcion-multiple",
        opciones: [
          "Evalúa cada celda y aplica el formato solo si cumple la condición",
          "Cambia el color de toda la hoja",
          "Elimina las celdas que no cumplen",
          "No realiza ninguna acción"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Por qué es importante la alineación de los datos en una tabla?",
        tipo: "opcion-multiple",
        opciones: [
          "Para mejorar la legibilidad y comparación de la información",
          "Para cambiar el color de la hoja",
          "Para insertar imágenes",
          "No es importante"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Qué recurso puedes consultar para aprender a aplicar formato condicional en Excel?",
        tipo: "opcion-multiple",
        opciones: [
          "Guía de formato condicional en Excel",
          "Manual de instalación de Windows",
          "Tutorial de PowerPoint",
          "Guía de macros en Word"
        ],
        respuestaCorrecta: 0
      }
    ]
  }
};
