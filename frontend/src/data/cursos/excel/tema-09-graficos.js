/**
 * Tema 9: Gráficos
 * Curso: Tabulador Electrónico Excel
 */

export default {
  id: '9',
  titulo: "Gráficos",
  tematica: "Creación, interpretación y formato avanzado",
  duracion: "25-30 minutos",
  objetivos: [
    "Comprender el propósito y el impacto de los gráficos en el análisis de datos",
    "Crear gráficos adecuados según el tipo de información y objetivo comunicativo",
    "Modificar y personalizar el formato de los gráficos para mejorar la interpretación visual",
    "Interpretar correctamente la información representada en los gráficos",
    "Aplicar algoritmos básicos para la selección, construcción y análisis de gráficos en Excel"
  ],
  secciones: [
    {
      id: 1,
      titulo: "¿Por qué y para qué usar gráficos en Excel?",
      contenido: `
        <h3>📘 Fundamentos de los Gráficos</h3>
        <p>Un gráfico es una <strong>representación visual de datos</strong> que facilita la identificación de patrones, tendencias y relaciones. <br>
        <strong>¿Por qué usar gráficos?</strong> Porque permiten transformar datos numéricos en información visualmente comprensible, agilizando la toma de decisiones y la comunicación de resultados.<br>
        <strong>¿Para qué?</strong> Para comparar valores, mostrar evoluciones, analizar distribuciones y resaltar información clave.</p>
        <p><strong>Ejemplo contextualizado:</strong> Un docente utiliza un gráfico de barras para comparar el rendimiento de diferentes grupos de estudiantes en un examen.</p>
        <h4>Algoritmo básico (pseudocódigo):</h4>
        <pre>
// Selección de tipo de gráfico
Si los datos son comparativos:
    Usar gráfico de barras o columnas
Si los datos muestran evolución temporal:
    Usar gráfico de líneas
Si se desea mostrar proporciones:
    Usar gráfico circular
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para analizar ventas mensuales, selecciona los datos y crea un gráfico de líneas para visualizar la evolución.</p>
      `,
      multimedia: [
        {
          tipo: "imagen",
          url: "/images/excel/ejemplo-grafico-barras.png",
          descripcion: "Ejemplo de gráfico de barras en Excel"
        },
        {
          tipo: "video",
          url: "/videos/excel/creacion-graficos.mp4",
          descripcion: "Video: Creación y personalización de gráficos en Excel"
        }
      ],
      actividades: [
        "Crea un gráfico de barras para comparar resultados de diferentes grupos y personaliza los colores."
      ]
    },
    {
      id: 2,
      titulo: "Creación de gráficos: pasos y recomendaciones",
      contenido: `
        <h3>🧩 Creación de Gráficos en Excel</h3>
        <ol>
          <li><strong>Selecciona el rango de datos relevante</strong> (incluye etiquetas y valores).</li>
          <li>Ve a la pestaña <strong>Insertar</strong> y elige el tipo de gráfico adecuado.</li>
          <li>Personaliza el gráfico: agrega títulos, leyendas y etiquetas.</li>
        </ol>
        <p><strong>Ejemplo contextualizado:</strong> Para mostrar la asistencia de alumnos por mes, selecciona la tabla de asistencia y crea un gráfico de columnas.</p>
        <h4>Algoritmo (pseudocódigo):</h4>
        <pre>
// Crear y personalizar un gráfico
Seleccionar rango de datos
Insertar gráfico del tipo deseado
Agregar título y etiquetas
Personalizar colores y formato
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para comparar promedios de calificaciones, selecciona la columna de promedios y crea un gráfico de barras. Personaliza los colores para cada grupo.</p>
      `,
      multimedia: [
        {
          tipo: "imagen",
          url: "/images/excel/ejemplo-grafico-columnas.png",
          descripcion: "Ejemplo de gráfico de columnas en Excel"
        }
      ],
      actividades: [
        "Elabora un gráfico de líneas para mostrar la evolución de un indicador a lo largo del tiempo."
      ]
    },
    {
      id: 3,
      titulo: "Formato y personalización avanzada",
      contenido: `
        <h4>⚙️ Formato y Personalización de Gráficos</h4>
        <ul>
          <li>Modificar colores, estilos y leyendas para mejorar la claridad visual.</li>
          <li>Agregar etiquetas de datos para mostrar valores exactos.</li>
          <li>Resaltar elementos clave usando formatos especiales.</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un coordinador escolar resalta en rojo las barras de alumnos con asistencia baja y en verde las de asistencia perfecta.</p>
        <h4>Algoritmo (pseudocódigo):</h4>
        <pre>
// Personalizar formato de gráfico
Seleccionar gráfico
Modificar colores y estilos
Agregar etiquetas y leyendas
Resaltar elementos según criterios
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para presentar resultados en una reunión, personaliza el gráfico con colores institucionales y agrega el logotipo de la escuela.</p>
      `,
      multimedia: [
        {
          tipo: "imagen",
          url: "/images/excel/ejemplo-grafico-personalizado.png",
          descripcion: "Ejemplo de gráfico personalizado con colores y etiquetas"
        }
      ],
      actividades: [
        "Agrega etiquetas de datos y leyendas a un gráfico existente para mejorar la interpretación."
      ]
    },
    {
      id: 4,
      titulo: "Interpretación y análisis de gráficos",
      contenido: `
        <h4>🔎 Interpretación de la Información Visual</h4>
        <p>Interpretar un gráfico implica <strong>analizar tendencias, comparar valores y extraer conclusiones</strong> a partir de la representación visual.</p>
        <ul>
          <li>Identificar el valor máximo y mínimo</li>
          <li>Detectar patrones o anomalías</li>
          <li>Relacionar los datos con el contexto</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Al observar un gráfico de asistencia, se detecta que el mes de marzo tuvo la menor participación, lo que permite tomar acciones correctivas.</p>
        <h4>Algoritmo (pseudocódigo):</h4>
        <pre>
// Analizar gráfico
Para cada elemento del gráfico:
    Comparar valores
    Identificar tendencias
    Extraer conclusiones
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Utiliza el gráfico para justificar propuestas de mejora en el área educativa o administrativa.</p>
      `,
      multimedia: [
        {
          tipo: "imagen",
          url: "/images/excel/ejemplo-analisis-grafico.png",
          descripcion: "Ejemplo de análisis e interpretación de un gráfico en Excel"
        }
      ],
      actividades: [
        "Analiza un gráfico y redacta conclusiones sobre los datos representados.",
        "Describe con tus palabras el algoritmo que sigue Excel al crear y personalizar un gráfico."
      ]
    }
  ],
  recursos: {
    documentos: [
      {
        titulo: "Guía de interpretación de gráficos",
        url: "/recursos/excel/guia-interpretacion-graficos.pdf"
      }
    ],
    enlaces: [
      {
        titulo: "Documentación oficial de Microsoft Excel sobre gráficos",
        url: "https://support.microsoft.com/es-es/office/crear-un-gr%C3%A1fico-desde-inicio-a-fin-0baf3996-3d5e-4118-b3ac-74fb7b2b6b8a"
      }
    ],
    videos: [
      {
        titulo: "Video: Creación y personalización de gráficos en Excel",
        url: "/videos/excel/creacion-graficos.mp4"
      }
    ],
    imagenes: [
      {
        titulo: "Ejemplo de gráfico de barras en Excel",
        url: "/images/excel/ejemplo-grafico-barras.png"
      },
      {
        titulo: "Ejemplo de gráfico de columnas en Excel",
        url: "/images/excel/ejemplo-grafico-columnas.png"
      },
      {
        titulo: "Ejemplo de gráfico personalizado con colores y etiquetas",
        url: "/images/excel/ejemplo-grafico-personalizado.png"
      },
      {
        titulo: "Ejemplo de análisis e interpretación de un gráfico en Excel",
        url: "/images/excel/ejemplo-analisis-grafico.png"
      },
      {
        titulo: "Diagrama de flujo: proceso de creación de gráficos",
        url: "/recursos/excel/diagrama-flujo-creacion-graficos.png"
      }
    ]
  },
  evaluacion: {
    tipo: "cuestionario",
    cuestionario: [
      {
        pregunta: "¿Cuál es el objetivo principal de crear gráficos en Excel?",
        tipo: "opcion-multiple",
        opciones: [
          "Transformar datos en información visual para facilitar el análisis",
          "Eliminar datos duplicados",
          "Insertar imágenes automáticamente",
          "Validar datos"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Cómo se crea y personaliza un gráfico en Excel?",
        tipo: "opcion-multiple",
        opciones: [
          "Seleccionando datos, insertando el gráfico y modificando colores y etiquetas",
          "Arrastrando una celda",
          "Cambiando el formato de celda",
          "Eliminando datos duplicados"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Qué algoritmo sigue Excel al analizar un gráfico?",
        tipo: "opcion-multiple",
        opciones: [
          "Compara valores, identifica tendencias y extrae conclusiones",
          "Elimina los datos originales",
          "Cambia el color de toda la hoja",
          "No realiza ninguna acción"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Por qué es útil personalizar el formato de los gráficos?",
        tipo: "opcion-multiple",
        opciones: [
          "Para mejorar la interpretación y resaltar información clave",
          "Para sumar valores",
          "Para buscar datos en otra tabla",
          "Para unir textos"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Qué recurso puedes consultar para aprender a interpretar gráficos en Excel?",
        tipo: "opcion-multiple",
        opciones: [
          "Guía de interpretación de gráficos",
          "Manual de instalación de Windows",
          "Tutorial de PowerPoint",
          "Guía de macros en Word"
        ],
        respuestaCorrecta: 0
      }
    ]
  }
};
