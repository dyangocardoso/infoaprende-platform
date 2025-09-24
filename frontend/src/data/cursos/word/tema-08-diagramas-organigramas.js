/**
 * Tema 8: Diagramas y organigramas
 * Curso: Procesador de Texto Word
 */

export default {
  id: '8',
  titulo: "Diagramas y organigramas",
  tematica: "Creación y edición de diagramas, organigramas y SmartArt",
  duracion: "20-25 minutos",
  objetivos: [
    "Comprender el propósito y ventajas de los diagramas y organigramas para la presentación visual de información",
    "Insertar y crear diagramas SmartArt de diferentes tipos",
    "Editar y personalizar organigramas y diagramas",
    "Aplicar estilos y formatos para mejorar la presentación de SmartArt",
    "Vincular la teoría con la práctica mediante ejemplos y procedimientos en la interfaz de Word"
  ],
  secciones: [
    {
      id: 1,
      titulo: "Insertar diagramas SmartArt",
      contenido: `
        <h3>🔷 Insertar Diagramas SmartArt</h3>
        <p>Los <strong>diagramas SmartArt</strong> permiten representar visualmente procesos, jerarquías, ciclos y relaciones.<br>
        <strong>¿Por qué es importante?</strong> Porque facilitan la comprensión de información compleja y mejoran la presentación.<br>
        <strong>¿Para qué?</strong> Para mostrar flujos de trabajo, estructuras organizativas y secuencias de pasos.</p>
        <ul>
          <li>Insertar > SmartArt > Elegir tipo de diagrama</li>
          <li>Diagramas de proceso, jerarquía, ciclo, etc.</li>
          <li>Agregar texto y elementos a cada figura</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un docente inserta un diagrama de proceso para explicar los pasos de un experimento científico.</p>
        <h4>Algoritmo básico (pseudocódigo):</h4>
        <pre>
// Insertar diagrama SmartArt
Ir a "Insertar" > "SmartArt"
Seleccionar tipo de diagrama
Agregar texto y elementos
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para presentar procedimientos, utiliza diagramas SmartArt y personaliza cada elemento según el contenido.</p>
      `
    },
    {
      id: 2,
      titulo: "Crear y editar organigramas",
      contenido: `
        <h4>👥 Organigramas</h4>
        <ul>
          <li>Seleccionar plantilla de organigrama en SmartArt.</li>
          <li>Agregar y eliminar niveles jerárquicos.</li>
          <li>Editar nombres y posiciones.</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un usuario crea un organigrama para mostrar la estructura de una empresa y edita los nombres de cada puesto.</p>
        <h4>Algoritmo (pseudocódigo):</h4>
        <pre>
// Crear organigrama
Ir a "Insertar" > "SmartArt" > "Jerarquía"
Agregar/eliminar niveles
Editar nombres y posiciones
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para visualizar la organización de un grupo, crea y edita organigramas con los niveles jerárquicos necesarios.</p>
      `
    },
    {
      id: 3,
      titulo: "Personalización de diagramas",
      contenido: `
        <h4>🎨 Personalización</h4>
        <ul>
          <li>Cambiar colores y estilos de SmartArt.</li>
          <li>Aplicar efectos y formatos a figuras.</li>
          <li>Modificar el diseño del diagrama.</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un estudiante personaliza los colores de un diagrama de ciclo para diferenciar cada etapa y aplica efectos de sombra a las figuras.</p>
        <h4>Algoritmo (pseudocódigo):</h4>
        <pre>
// Personalizar diagrama
Seleccionar diagrama SmartArt
Ir a "Herramientas de SmartArt" > "Diseño/Formato"
Cambiar colores, estilos y efectos
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para destacar información clave, personaliza los diagramas con colores y estilos apropiados.</p>
      `
    },
    {
      id: 4,
      titulo: "Agregar y organizar elementos",
      contenido: `
        <h4>➕ Agregar y Organizar</h4>
        <ul>
          <li>Agregar nuevas formas y conectores.</li>
          <li>Reorganizar elementos arrastrando.</li>
          <li>Utilizar panel de texto para edición rápida.</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un docente agrega nuevas formas a un diagrama de proceso y reorganiza los elementos para reflejar cambios en el procedimiento.</p>
        <h4>Algoritmo (pseudocódigo):</h4>
        <pre>
// Agregar y organizar elementos
Seleccionar diagrama
Agregar formas desde "Herramientas de SmartArt"
Arrastrar para reorganizar
Editar texto en el panel
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para adaptar diagramas a nuevas necesidades, agrega y organiza elementos según el contenido a presentar.</p>
      `
    },
    {
      id: 5,
      titulo: "Usos y ventajas de los diagramas",
      contenido: `
        <h4>💡 Usos y Ventajas</h4>
        <ul>
          <li>Visualizar procesos y jerarquías.</li>
          <li>Mejorar la comprensión de información compleja.</li>
          <li>Presentar ideas de forma atractiva y profesional.</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un estudiante utiliza un diagrama de ciclo para explicar el proceso de reciclaje y facilita la comprensión del tema.</p>
        <h4>Algoritmo (pseudocódigo):</h4>
        <pre>
// Usar diagramas para presentar información
Identificar el tipo de información
Seleccionar diagrama adecuado
Insertar y personalizar según el contenido
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para comunicar ideas complejas, utiliza diagramas y organigramas que faciliten la interpretación visual.</p>
      `
    }
  ],
  actividades: [
    "Crea un organigrama con al menos tres niveles jerárquicos",
    "Personaliza un diagrama SmartArt con diferentes colores y estilos",
    "Agrega y reorganiza elementos en un diagrama de proceso",
    "Utiliza el panel de texto para editar rápidamente un diagrama",
    "Presenta información compleja usando un diagrama visual"
  ],
  recursos: [
    {
      titulo: "Guía de diagramas y organigramas en Word",
      url: "/recursos/word/guia-diagramas-organigramas.pdf",
      tipo: "pdf"
    },
    {
      titulo: "Video: Diagramas y SmartArt en Word",
      url: "/videos/word/diagramas-smartart-word.mp4",
      tipo: "video"
    }
  ],
  evaluacion: {
    tipo: "cuestionario",
    preguntas: [
      {
        pregunta: "¿Cómo se inserta un diagrama SmartArt en Word?",
        opciones: [
          "Insertar > SmartArt",
          "Insertar > Imagen",
          "Insertar > Tabla",
          "Insertar > Gráfico"
        ],
        respuesta: 0
      },
      {
        pregunta: "¿Para qué sirve un organigrama?",
        opciones: [
          "Visualizar jerarquías y relaciones en una organización",
          "Insertar imágenes",
          "Corregir ortografía",
          "Traducir el documento"
        ],
        respuesta: 0
      },
      {
        pregunta: "¿Qué permite hacer el panel de texto en SmartArt?",
        opciones: [
          "Editar rápidamente el contenido de las figuras",
          "Cambiar el idioma del documento",
          "Insertar tablas",
          "Corregir ortografía"
        ],
        respuesta: 0
      }
    ]
  }
};
