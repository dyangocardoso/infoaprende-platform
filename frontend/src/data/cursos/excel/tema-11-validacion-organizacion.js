/**
 * Tema 11: Validación y organización de datos
 * Curso: Tabulador Electrónico Excel
 */

export default {
  id: '11',
  titulo: "Validación y organización de datos",
  tematica: "Ordenar, filtrar, validar y depurar",
  duracion: "25-30 minutos",
  objetivos: [
    "Comprender la importancia de la validación y organización para la calidad de los datos",
    "Aplicar técnicas de ordenamiento y filtrado para facilitar el análisis",
    "Implementar reglas de validación para evitar errores y duplicados",
    "Utilizar algoritmos básicos para depurar y organizar información en Excel",
    "Vincular la teoría con la práctica mediante ejemplos y procedimientos en la interfaz de Excel"
  ],
  secciones: [
    {
      id: 1,
      titulo: "¿Por qué y para qué validar y organizar datos?",
      contenido: `
        <h3>📘 Fundamentos de la Validación y Organización</h3>
        <p>La <strong>validación y organización de datos</strong> son procesos clave para <strong>garantizar la calidad, confiabilidad y utilidad de la información</strong> en Excel.<br>
        <strong>¿Por qué validar?</strong> Para evitar errores, inconsistencias y valores no permitidos que pueden afectar los resultados.<br>
        <strong>¿Para qué organizar?</strong> Para facilitar el análisis, la búsqueda y la presentación de datos relevantes.</p>
        <p><strong>Ejemplo contextualizado:</strong> Un docente valida que las calificaciones ingresadas estén entre 0 y 20, y organiza la lista de alumnos por orden alfabético para facilitar la revisión.</p>
        <h4>Algoritmo básico (pseudocódigo):</h4>
        <pre>
// Validar datos en una columna
Para cada celda en la columna:
    Si valor < mínimo o valor > máximo:
        Mostrar advertencia y bloquear ingreso
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para evitar errores en la captura de notas, aplica validación de datos y ordena la lista antes de imprimir reportes.</p>
      `
    },
    {
      id: 2,
      titulo: "Ordenar y filtrar datos: pasos y recomendaciones",
      contenido: `
        <h3>🔎 Ordenar y Filtrar en Excel</h3>
        <ol>
          <li><strong>Ordenar:</strong> Selecciona el rango y usa las opciones de "Ordenar A-Z" o "Ordenar Z-A" para organizar datos alfabética o numéricamente.</li>
          <li><strong>Filtrar:</strong> Aplica filtros para mostrar solo la información relevante según criterios definidos.</li>
        </ol>
        <p><strong>Ejemplo contextualizado:</strong> Para analizar la asistencia, filtra la columna para mostrar solo los estudiantes con faltas y ordena por número de ausencias.</p>
        <h4>Algoritmo (pseudocódigo):</h4>
        <pre>
// Ordenar y filtrar datos
Seleccionar rango de datos
Aplicar ordenamiento según criterio
Activar filtro y seleccionar valores deseados
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para preparar un informe, filtra los datos por grupo y ordena por promedio para identificar a los mejores estudiantes.</p>
      `
    },
    {
      id: 3,
      titulo: "Validación de datos: reglas y procedimientos",
      contenido: `
        <h4>✅ Validación de Datos en Excel</h4>
        <ul>
          <li>Definir criterios de validación (rango de valores, tipo de dato, lista de opciones).</li>
          <li>Aplicar reglas para restringir la entrada y evitar duplicados.</li>
          <li>Mostrar mensajes de advertencia o error al ingresar datos incorrectos.</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Para evitar duplicados en la columna de matrícula, aplica validación única y muestra un mensaje si se repite el valor.</p>
        <h4>Algoritmo (pseudocódigo):</h4>
        <pre>
// Validar datos únicos
Para cada celda en la columna:
    Si valor ya existe en otra celda:
        Mostrar advertencia y bloquear ingreso
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para asegurar la calidad de los registros, aplica validación de lista y rango en las columnas clave.</p>
      `
    },
    {
      id: 4,
      titulo: "Depuración y organización avanzada de datos",
      contenido: `
        <h4>⚙️ Depuración y Organización Avanzada</h4>
        <ul>
          <li>Eliminar duplicados y valores erróneos</li>
          <li>Aplicar formatos y filtros avanzados</li>
          <li>Preparar los datos para análisis y presentación</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un coordinador elimina registros duplicados y aplica formato condicional para resaltar valores fuera de rango.</p>
        <h4>Algoritmo (pseudocódigo):</h4>
        <pre>
// Eliminar duplicados
Seleccionar rango de datos
Ir a "Datos" > "Quitar duplicados"
Confirmar columnas a revisar
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Antes de generar reportes, depura la base de datos y aplica filtros para mostrar solo la información relevante.</p>
      `
    }
  ],
  actividades: [
    "Ordena una lista de datos por diferentes criterios y filtra la información relevante.",
    "Aplica validación para restringir valores y evitar duplicados en una columna.",
    "Depura una base de datos eliminando registros erróneos y duplicados.",
    "Utiliza formato condicional para resaltar valores fuera de rango.",
    "Describe con tus palabras el algoritmo que sigue Excel al validar y organizar datos."
  ],
  recursos: [
    {
      titulo: "Guía de validación y organización de datos",
      url: "/recursos/excel/guia-validacion-organizacion.pdf",
      tipo: "pdf"
    },
    {
      titulo: "Video: Validación y depuración de datos en Excel",
      url: "/videos/excel/validacion-depuracion-datos.mp4",
      tipo: "video"
    },
    {
      titulo: "Diagrama de flujo: proceso de validación de datos",
      url: "/recursos/excel/diagrama-flujo-validacion-datos.png",
      tipo: "imagen"
    }
  ],
  evaluacion: {
    tipo: "cuestionario",
    preguntas: [
      {
        pregunta: "¿Cuál es el objetivo principal de la validación de datos en Excel?",
        opciones: [
          "Evitar errores, inconsistencias y valores no permitidos",
          "Insertar imágenes",
          "Eliminar celdas",
          "Cambiar el formato de celda"
        ],
        respuesta: 0
      },
      {
        pregunta: "¿Cómo se ordenan y filtran los datos en Excel?",
        opciones: [
          "Usando las opciones de ordenar y filtrar en la barra de herramientas",
          "Eliminando celdas",
          "Insertando una imagen",
          "Cambiando el color de fondo"
        ],
        respuesta: 0
      },
      {
        pregunta: "¿Qué algoritmo sigue Excel al eliminar duplicados?",
        opciones: [
          "Revisa las columnas seleccionadas y elimina registros repetidos",
          "Elimina los datos originales",
          "Cambia el color de toda la hoja",
          "No realiza ninguna acción"
        ],
        respuesta: 0
      },
      {
        pregunta: "¿Por qué es útil aplicar formato condicional en la organización de datos?",
        opciones: [
          "Para resaltar información clave y facilitar la depuración visual",
          "Para sumar valores",
          "Para buscar datos en otra tabla",
          "Para unir textos"
        ],
        respuesta: 0
      },
      {
        pregunta: "¿Qué recurso puedes consultar para aprender a validar y depurar datos en Excel?",
        opciones: [
          "Guía de validación y organización de datos",
          "Manual de instalación de Windows",
          "Tutorial de PowerPoint",
          "Guía de macros en Word"
        ],
        respuesta: 0
      }
    ]
  }
};
