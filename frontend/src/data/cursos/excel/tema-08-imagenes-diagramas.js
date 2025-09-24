/**
 * Tema 8: Imágenes y diagramas
 * Curso: Tabulador Electrónico Excel
 */

export default {
  id: '8',
  titulo: "Imágenes y diagramas",
  tematica: "Inserción y ajuste",
  duracion: "20-25 minutos",
  objetivos: [
    "Comprender la importancia de los elementos gráficos en la presentación de datos",
    "Insertar imágenes y diagramas en hojas de cálculo para enriquecer la información",
    "Ajustar tamaño, posición y formato de elementos gráficos para lograr una presentación profesional",
    "Vincular imágenes y diagramas con datos para mejorar la interpretación visual",
    "Aplicar algoritmos básicos para la organización visual y la integración de gráficos en el análisis de datos"
  ],
  secciones: [
    {
      id: 1,
      titulo: "Inserción de imágenes: ¿Qué, por qué y para qué?",
      contenido: `
        <h3>🖼️ Inserción de Imágenes: Valor agregado visual</h3>
        <p>Las imágenes en Excel permiten <strong>ilustrar, contextualizar y complementar los datos</strong>. Su uso adecuado facilita la comprensión y hace más atractiva la presentación.</p>
        <ul>
          <li><strong>¿Por qué insertar imágenes?</strong> Para ilustrar conceptos, mostrar evidencias o asociar datos con elementos visuales.</li>
          <li><strong>¿Cómo se insertan?</strong> Ve a "Insertar" &rarr; "Imágenes" y selecciona el archivo deseado.</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un docente inserta la foto de un experimento junto a la tabla de resultados para reforzar la evidencia.</p>
        <h4>Ajuste de imágenes:</h4>
        <ul>
          <li>Redimensionar arrastrando los bordes</li>
          <li>Reubicar la imagen con el mouse</li>
          <li>Recortar o aplicar estilos desde la pestaña "Formato de imagen"</li>
        </ul>
        <p><strong>Vinculación teoría-práctica:</strong> Para un informe de ventas, inserta el logotipo de la empresa y ajusta su tamaño para que no oculte los datos.</p>
        <p><strong>Algoritmo básico (pseudocódigo):</strong></p>
        <pre>
// Insertar y ajustar una imagen
Seleccionar celda destino
Insertar imagen desde archivo
Redimensionar y mover según necesidad
        </pre>
      `
    },
    {
      id: 2,
      titulo: "Diagramas y gráficos: Visualización y análisis",
      contenido: `
        <h4>📊 Diagramas y Gráficos: Potenciando el análisis visual</h4>
        <p>Los diagramas y gráficos permiten <strong>representar datos de manera visual</strong>, facilitando la identificación de patrones, tendencias y relaciones.</p>
        <ul>
          <li><strong>¿Por qué usarlos?</strong> Para transformar datos numéricos en información visualmente comprensible.</li>
          <li><strong>¿Cómo se crean?</strong> Selecciona los datos, ve a "Insertar" &rarr; "Gráficos" y elige el tipo adecuado (barras, líneas, pastel, etc.).</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un profesor crea un gráfico de barras para comparar el rendimiento de diferentes grupos de estudiantes.</p>
        <h4>Formato y personalización:</h4>
        <ul>
          <li>Cambiar colores, estilos y leyendas desde la pestaña "Formato de gráfico"</li>
          <li>Agregar títulos y etiquetas para mayor claridad</li>
        </ul>
        <p><strong>Vinculación teoría-práctica:</strong> Para analizar la evolución de las ventas, crea un gráfico de líneas y personaliza los colores para cada periodo.</p>
        <p><strong>Algoritmo (pseudocódigo):</strong></p>
        <pre>
// Crear y personalizar un gráfico
Seleccionar rango de datos
Insertar gráfico del tipo deseado
Personalizar colores y etiquetas
        </pre>
      `
    },
    {
      id: 3,
      titulo: "Integración de gráficos e imágenes con datos",
      contenido: `
        <h4>🔗 Integración Visual: Relacionando datos y elementos gráficos</h4>
        <p>La integración de imágenes y diagramas con los datos permite <strong>enriquecer el análisis y la comunicación de resultados</strong>.</p>
        <ul>
          <li><strong>¿Por qué integrarlos?</strong> Para contextualizar la información y facilitar la toma de decisiones.</li>
          <li><strong>¿Cómo se hace?</strong> Inserta imágenes o gráficos junto a los datos relevantes y usa títulos, leyendas o comentarios para explicar su relación.</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> En un reporte de asistencia, se inserta un diagrama de flujo que explica el proceso de registro junto a la tabla de datos.</p>
        <p><strong>Vinculación teoría-práctica:</strong> Para un dashboard, combina gráficos, imágenes y tablas para ofrecer una visión integral.</p>
        <p><strong>Algoritmo (pseudocódigo):</strong></p>
        <pre>
// Integrar imagen/diagrama con datos
Insertar elemento gráfico junto a los datos
Agregar título o comentario explicativo
Ajustar formato para evitar superposición
        </pre>
      `
    }
  ],
  actividades: [
    "Inserta una imagen relevante en una hoja de Excel y ajusta su tamaño y posición.",
    "Crea un gráfico de barras a partir de una tabla de datos y personaliza su formato.",
    "Integra un diagrama de flujo junto a una tabla de datos y explica su relación.",
    "Elabora un dashboard sencillo combinando imágenes, gráficos y tablas.",
    "Describe con tus palabras el algoritmo que sigue Excel al insertar y ajustar un elemento gráfico."
  ],
  recursos: [
    {
      titulo: "Guía de imágenes y diagramas",
      url: "/recursos/excel/guia-imagenes-diagramas.pdf",
      tipo: "pdf"
    },
    {
      titulo: "Video: Creación y ajuste de gráficos en Excel",
      url: "/videos/excel/creacion-ajuste-graficos.mp4",
      tipo: "video"
    },
    {
      titulo: "Diagrama de flujo: integración de gráficos y datos",
      url: "/recursos/excel/diagrama-flujo-integracion-graficos.png",
      tipo: "imagen"
    }
  ],
  evaluacion: {
    tipo: "cuestionario",
    preguntas: [
      {
        pregunta: "¿Cuál es el objetivo principal de insertar imágenes en una hoja de Excel?",
        opciones: [
          "Ilustrar, contextualizar y complementar los datos",
          "Eliminar datos duplicados",
          "Insertar fórmulas automáticamente",
          "Validar datos"
        ],
        respuesta: 0
      },
      {
        pregunta: "¿Cómo se inserta y ajusta una imagen en Excel?",
        opciones: [
          "Desde el menú 'Insertar', luego redimensionando y moviendo la imagen",
          "Arrastrando una celda",
          "Cambiando el formato de celda",
          "Eliminando datos duplicados"
        ],
        respuesta: 0
      },
      {
        pregunta: "¿Qué algoritmo sigue Excel al crear y personalizar un gráfico?",
        opciones: [
          "Selecciona los datos, inserta el gráfico y permite personalizar colores y etiquetas",
          "Elimina los datos originales",
          "Cambia el color de toda la hoja",
          "No realiza ninguna acción"
        ],
        respuesta: 0
      },
      {
        pregunta: "¿Por qué es útil integrar imágenes y diagramas con los datos?",
        opciones: [
          "Para enriquecer el análisis y facilitar la comunicación de resultados",
          "Para sumar valores",
          "Para buscar datos en otra tabla",
          "Para unir textos"
        ],
        respuesta: 0
      },
      {
        pregunta: "¿Qué recurso puedes consultar para aprender a crear y ajustar gráficos en Excel?",
        opciones: [
          "Guía de imágenes y diagramas",
          "Manual de instalación de Windows",
          "Tutorial de PowerPoint",
          "Guía de macros en Word"
        ],
        respuesta: 0
      }
    ]
  }
};
