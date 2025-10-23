/**
 * Tema 6: Imágenes y gráficos
 * Curso: Procesador de Texto Word
 */

export default {
  id: '6',
  titulo: "Imágenes y gráficos",
  tematica: "Insertar, editar y dar formato a imágenes, formas y gráficos",
  duracion: "25-30 minutos",
  objetivos: [
    "Comprender el propósito y ventajas de utilizar imágenes, formas y gráficos para enriquecer documentos",
    "Insertar y editar imágenes desde el equipo o en línea",
    "Personalizar y organizar elementos gráficos para mejorar la presentación",
    "Implementar algoritmos básicos para la gestión de elementos visuales en Word",
    "Vincular la teoría con la práctica mediante ejemplos y procedimientos en la interfaz de Word"
  ],
  secciones: [
    {
      id: 1,
      titulo: "Insertar imágenes",
      contenido: `
        <h3>🖼️ Insertar Imágenes</h3>
        <p>Las <strong>imágenes</strong> permiten ilustrar, complementar y hacer más atractivo el contenido de un documento.<br>
        <strong>¿Por qué es importante?</strong> Porque facilitan la comprensión y aportan valor visual.<br>
        <strong>¿Para qué?</strong> Para explicar conceptos, mostrar ejemplos y mejorar la presentación.</p>
        <ul>
          <li>Desde el equipo: Insertar &gt; Imágenes &gt; Este dispositivo</li>
          <li>En línea: Insertar &gt; Imágenes en línea</li>
          <li>Arrastrar y soltar imágenes en el documento</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un docente inserta imágenes de diagramas y fotografías en una guía de laboratorio para ilustrar los pasos del procedimiento.</p>
        <h4>Algoritmo básico (pseudocódigo):</h4>
        <pre>
// Insertar imagen
Ir a "Insertar" > "Imágenes"
Seleccionar origen (equipo o en línea)
Elegir imagen y colocar en el documento
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para mejorar la explicación de un tema, inserta imágenes relevantes y colócalas junto al texto correspondiente.</p>
      `,
      multimedia: [
        {
          tipo: "imagen",
          url: "/images/word/ejemplo-insercion-imagen.png",
          descripcion: "Ejemplo de imagen insertada en Word para ilustrar un procedimiento"
        },
        {
          tipo: "video",
          url: "/videos/word/insertar-imagen.mp4",
          descripcion: "Video demostrativo: Cómo insertar imágenes en Word"
        }
      ],
      actividades: [
        "Inserta una imagen en un documento y ubícala junto al texto explicativo.",
        "Explica cómo la imagen mejora la comprensión del contenido."
      ]
    },
    {
      id: 2,
      titulo: "Editar y dar formato a imágenes",
      contenido: `
        <h4>✂️ Edición y Formato</h4>
        <ul>
          <li>Recortar, girar y cambiar tamaño.</li>
          <li>Ajustar brillo, contraste y color.</li>
          <li>Aplicar estilos y efectos artísticos.</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un estudiante recorta una imagen para eliminar el fondo y aplica un efecto artístico para destacar el contenido visual.</p>
        <h4>Algoritmo (pseudocódigo):</h4>
        <pre>
// Editar imagen
Seleccionar imagen
Usar herramientas de formato (recortar, ajustar, efectos)
Aplicar cambios y verificar resultado
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para resaltar información clave, edita las imágenes y aplica estilos que se adapten al contexto del documento.</p>
      `,
      multimedia: [
        {
          tipo: "imagen",
          url: "/images/word/edicion-imagen-ejemplo.png",
          descripcion: "Ejemplo de imagen recortada y con efecto artístico aplicado"
        },
        {
          tipo: "video",
          url: "/videos/word/editar-imagen.mp4",
          descripcion: "Video: Edición y formato de imágenes en Word"
        }
      ],
      actividades: [
        "Recorta una imagen y aplica un efecto artístico en Word.",
        "Compara el resultado antes y después de la edición."
      ]
    },
    {
      id: 3,
      titulo: "Insertar y personalizar formas",
      contenido: `
        <h4>🔷 Formas y SmartArt</h4>
        <ul>
          <li>Insertar formas básicas (rectángulos, círculos, flechas, etc.).</li>
          <li>Personalizar color, borde y efectos de las formas.</li>
          <li>Insertar y editar gráficos SmartArt.</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un usuario inserta flechas y cuadros de texto para crear un diagrama de flujo explicativo en un informe.</p>
        <h4>Algoritmo (pseudocódigo):</h4>
        <pre>
// Insertar forma
Ir a "Insertar" > "Formas"
Seleccionar tipo de forma
Personalizar color y borde
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para organizar ideas visualmente, utiliza formas y SmartArt en esquemas y diagramas.</p>
      `,
      multimedia: [
        {
          tipo: "imagen",
          url: "/images/word/ejemplo-formas.png",
          descripcion: "Ejemplo de formas básicas y SmartArt en Word"
        },
        {
          tipo: "video",
          url: "/videos/word/insertar-formas.mp4",
          descripcion: "Video: Cómo insertar y personalizar formas en Word"
        }
      ],
      actividades: [
        "Inserta al menos dos formas y personaliza sus colores y bordes.",
        "Crea un diagrama de flujo sencillo usando SmartArt."
      ]
    },
    {
      id: 4,
      titulo: "Crear y modificar gráficos de datos",
      contenido: `
        <h4>📊 Gráficos de Datos</h4>
        <ul>
          <li>Insertar gráficos (barras, líneas, pastel, etc.).</li>
          <li>Editar datos del gráfico en Excel integrado.</li>
          <li>Personalizar diseño y formato del gráfico.</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un docente inserta un gráfico de barras para mostrar resultados de una encuesta y personaliza los colores para cada categoría.</p>
        <h4>Algoritmo (pseudocódigo):</h4>
        <pre>
// Crear gráfico de datos
Ir a "Insertar" > "Gráfico"
Elegir tipo de gráfico
Editar datos y personalizar formato
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para presentar información cuantitativa, crea gráficos y ajusta su diseño para facilitar la interpretación.</p>
      `,
      multimedia: [
        {
          tipo: "imagen",
          url: "/images/word/grafico-barras-ejemplo.png",
          descripcion: "Ejemplo de gráfico de barras personalizado en Word"
        },
        {
          tipo: "video",
          url: "/videos/word/crear-grafico.mp4",
          descripcion: "Video: Creación y personalización de gráficos de datos en Word"
        }
      ],
      actividades: [
        "Crea un gráfico de barras y personaliza los colores de las categorías.",
        "Edita los datos de un gráfico y observa los cambios en el diseño."
      ]
    },
    {
      id: 5,
      titulo: "Organización y alineación de elementos gráficos",
      contenido: `
        <h4>📐 Organización y Alineación</h4>
        <ul>
          <li>Alinear imágenes y formas respecto al texto.</li>
          <li>Ajustar posición y superposición de elementos.</li>
          <li>Agrupar y desagrupar objetos gráficos.</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un estudiante agrupa varias imágenes y formas para moverlas juntas y alinea los elementos para lograr una presentación ordenada.</p>
        <h4>Algoritmo (pseudocódigo):</h4>
        <pre>
// Organizar elementos gráficos
Seleccionar elementos
Usar opciones de alineación y agrupación
Ajustar posición según necesidad
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para lograr un diseño profesional, organiza y alinea los elementos gráficos en el documento.</p>
      `,
      multimedia: [
        {
          tipo: "imagen",
          url: "/images/word/organizacion-graficos.png",
          descripcion: "Ejemplo de organización y alineación de elementos gráficos en Word"
        },
        {
          tipo: "video",
          url: "/videos/word/organizar-graficos.mp4",
          descripcion: "Video: Organización y alineación de elementos gráficos en Word"
        }
      ],
      actividades: [
        "Agrupa al menos dos imágenes y formas y muévelas juntas.",
        "Alinea los elementos gráficos respecto al texto y observa el resultado."
      ]
    }
  ],
  recursos: {
    documentos: [
      {
        titulo: "Guía de imágenes y gráficos en Word",
        url: "/recursos/word/guia-imagenes-graficos.pdf"
      }
    ],
    enlaces: [
      {
        titulo: "Documentación oficial de Microsoft Word sobre imágenes y gráficos",
        url: "https://support.microsoft.com/es-es/office/insertar-im%C3%A1genes-en-microsoft-word-7e5e6b0e-9c3c-4b8a-8c5e-1b8e6c7c1e7c"
      }
    ],
    videos: [
      {
        titulo: "Video: Imágenes y gráficos en Word",
        url: "/videos/word/imagenes-graficos-word.mp4"
      }
    ]
  },
  evaluacion: {
    tipo: "cuestionario",
    cuestionario: [
      {
        pregunta: "¿Cómo se inserta una imagen desde el equipo?",
        tipo: "opcion-multiple",
        opciones: [
          "Insertar > Imágenes > Este dispositivo",
          "Insertar > Formas",
          "Insertar > Gráfico",
          "Insertar > SmartArt"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Para qué sirve la herramienta Recortar?",
        tipo: "opcion-multiple",
        opciones: [
          "Cambiar el color de la imagen",
          "Eliminar partes no deseadas de la imagen",
          "Insertar una nueva imagen",
          "Aplicar efectos artísticos"
        ],
        respuestaCorrecta: 1
      },
      {
        pregunta: "¿Qué permite hacer la opción Agrupar?",
        tipo: "opcion-multiple",
        opciones: [
          "Unir varios objetos gráficos para moverlos juntos",
          "Insertar una tabla",
          "Cambiar el idioma del documento",
          "Corregir ortografía"
        ],
        respuestaCorrecta: 0
      }
    ]
  }
};
