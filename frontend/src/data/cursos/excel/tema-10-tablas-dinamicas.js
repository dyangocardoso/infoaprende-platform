/**
 * Tema 10: Tablas y tablas dinámicas
 * Curso: Tabulador Electrónico Excel
 */

export default {
  id: '10',
  titulo: "Tablas y tablas dinámicas",
  tematica: "Creación, análisis y personalización avanzada",
  duracion: "25-30 minutos",
  objetivos: [
    "Comprender el propósito y ventajas de las tablas y tablas dinámicas en Excel",
    "Crear y personalizar tablas para organizar y analizar información",
    "Construir tablas dinámicas para resumir y explorar grandes volúmenes de datos",
    "Aplicar algoritmos básicos para la organización, filtrado y análisis de datos en tablas",
    "Vincular la teoría con la práctica mediante ejemplos y procedimientos en la interfaz de Excel"
  ],
  secciones: [
    {
      id: 1,
      titulo: "¿Por qué y para qué usar tablas en Excel?",
      contenido: `
        <h3>📘 Fundamentos de las Tablas</h3>
        <p>Una <strong>tabla</strong> en Excel es una estructura organizada que permite <strong>gestionar, analizar y visualizar datos</strong> de manera eficiente.<br>
        <strong>¿Por qué usar tablas?</strong> Porque facilitan la manipulación de grandes volúmenes de información, permiten aplicar filtros, ordenar y realizar cálculos automáticos.<br>
        <strong>¿Para qué?</strong> Para organizar registros, comparar valores, aplicar formatos y preparar los datos para análisis avanzados.</p>
        <p><strong>Ejemplo contextualizado:</strong> Un docente crea una tabla para registrar la asistencia diaria de los estudiantes y aplicar filtros por fecha o grupo.</p>
        <h4>Algoritmo básico (pseudocódigo):</h4>
        <pre>
// Crear una tabla a partir de un rango
Seleccionar rango de datos
Ir a "Insertar" > "Tabla"
Confirmar el rango y encabezados
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para analizar calificaciones, convierte la lista de notas en una tabla y usa el filtro para ver solo los aprobados.</p>
      `
    },
    {
      id: 2,
      titulo: "Creación y personalización de tablas",
      contenido: `
        <h3>🧩 Creación y Formato de Tablas</h3>
        <ol>
          <li><strong>Selecciona el rango de datos</strong> que deseas convertir en tabla.</li>
          <li>Haz clic en <strong>"Insertar" &rarr; "Tabla"</strong> y confirma el rango.</li>
          <li>Personaliza el formato: aplica estilos, colores y formatos condicionales.</li>
        </ol>
        <p><strong>Ejemplo contextualizado:</strong> Para visualizar mejor la asistencia, aplica un estilo de tabla con filas alternas de color y resalta los días con ausencias.</p>
        <h4>Algoritmo (pseudocódigo):</h4>
        <pre>
// Personalizar tabla
Seleccionar tabla
Aplicar estilo predefinido
Agregar formato condicional según criterios
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para identificar rápidamente los estudiantes con más faltas, usa formato condicional en la columna de asistencia.</p>
      `
    },
    {
      id: 3,
      titulo: "Tablas dinámicas: análisis avanzado de datos",
      contenido: `
        <h4>🔄 Tablas Dinámicas: Resumen y exploración de información</h4>
        <p>Una <strong>tabla dinámica</strong> permite <strong>resumir, analizar y explorar grandes volúmenes de datos</strong> de forma flexible.<br>
        <strong>¿Por qué usar tablas dinámicas?</strong> Porque facilitan la agrupación, el filtrado y el cálculo automático de totales, promedios y porcentajes.<br>
        <strong>¿Para qué?</strong> Para responder preguntas complejas, comparar categorías y descubrir patrones ocultos en los datos.</p>
        <p><strong>Ejemplo contextualizado:</strong> Un coordinador crea una tabla dinámica para analizar la asistencia por grupo y mes, obteniendo totales y promedios automáticamente.</p>
        <h4>Algoritmo (pseudocódigo):</h4>
        <pre>
// Crear tabla dinámica
Seleccionar tabla o rango de datos
Ir a "Insertar" > "Tabla dinámica"
Elegir ubicación y campos a analizar
Configurar filas, columnas y valores
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para analizar el rendimiento académico por materia y periodo, crea una tabla dinámica y agrupa los datos según los criterios deseados.</p>
      `
    },
    {
      id: 4,
      titulo: "Operaciones y análisis en tablas dinámicas",
      contenido: `
        <h4>⚙️ Operaciones y Análisis en Tablas Dinámicas</h4>
        <ul>
          <li>Filtrar y agrupar datos para obtener información específica</li>
          <li>Calcular totales, promedios y porcentajes automáticamente</li>
          <li>Modificar el diseño y formato para facilitar la interpretación</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un docente filtra la tabla dinámica para ver solo los estudiantes con asistencia perfecta y calcula el porcentaje de participación por grupo.</p>
        <h4>Algoritmo (pseudocódigo):</h4>
        <pre>
// Analizar tabla dinámica
Aplicar filtros y agrupaciones
Configurar cálculos automáticos
Modificar formato y diseño
Extraer conclusiones de los resultados
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Usa la tabla dinámica para justificar decisiones administrativas basadas en datos reales y actualizados.</p>
      `
    }
  ],
  actividades: [
    "Convierte un rango de datos en una tabla y aplica formato condicional para resaltar valores clave.",
    "Crea una tabla dinámica para analizar la asistencia por grupo y periodo.",
    "Filtra y agrupa los datos en una tabla dinámica para responder preguntas específicas.",
    "Modifica el diseño y formato de una tabla dinámica para mejorar la interpretación visual.",
    "Describe con tus palabras el algoritmo que sigue Excel al crear y analizar una tabla dinámica."
  ],
  recursos: [
    {
      titulo: "Guía de tablas y tablas dinámicas",
      url: "/recursos/excel/guia-tablas-dinamicas.pdf",
      tipo: "pdf"
    },
    {
      titulo: "Video: Creación y análisis de tablas dinámicas en Excel",
      url: "/videos/excel/creacion-analisis-tablas-dinamicas.mp4",
      tipo: "video"
    },
    {
      titulo: "Diagrama de flujo: proceso de tabla dinámica",
      url: "/recursos/excel/diagrama-flujo-tabla-dinamica.png",
      tipo: "imagen"
    }
  ],
  evaluacion: {
    tipo: "cuestionario",
    preguntas: [
      {
        pregunta: "¿Cuál es el objetivo principal de una tabla dinámica?",
        opciones: [
          "Resumir, analizar y explorar grandes volúmenes de datos",
          "Eliminar datos duplicados",
          "Insertar imágenes",
          "Validar datos"
        ],
        respuesta: 0
      },
      {
        pregunta: "¿Cómo se convierte un rango en tabla?",
        opciones: [
          "Usando el menú 'Insertar' > 'Tabla'",
          "Eliminando celdas",
          "Cambiando el formato de celda",
          "Insertando una imagen"
        ],
        respuesta: 0
      },
      {
        pregunta: "¿Qué algoritmo sigue Excel al crear una tabla dinámica?",
        opciones: [
          "Selecciona los datos, configura campos y calcula automáticamente totales y promedios",
          "Elimina los datos originales",
          "Cambia el color de toda la hoja",
          "No realiza ninguna acción"
        ],
        respuesta: 0
      },
      {
        pregunta: "¿Por qué es útil aplicar formato condicional en una tabla?",
        opciones: [
          "Para resaltar información clave y facilitar el análisis visual",
          "Para sumar valores",
          "Para buscar datos en otra tabla",
          "Para unir textos"
        ],
        respuesta: 0
      },
      {
        pregunta: "¿Qué recurso puedes consultar para aprender a crear y analizar tablas dinámicas en Excel?",
        opciones: [
          "Guía de tablas y tablas dinámicas",
          "Manual de instalación de Windows",
          "Tutorial de PowerPoint",
          "Guía de macros en Word"
        ],
        respuesta: 0
      }
    ]
  }
};
