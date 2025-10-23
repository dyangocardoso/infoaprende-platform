/**
 * Tema 5: Estructura del libro
 * Curso: Tabulador Electrónico Excel
 */

export default {
  id: '5',
  titulo: "Estructura del libro",
  tematica: "Gestión de hojas y organización interna",
  duracion: "20-25 minutos",
  objetivos: [
    "Comprender la importancia de la estructura del libro para la organización y análisis de datos complejos",
    "Crear, renombrar y eliminar hojas de cálculo de manera eficiente",
    "Organizar la información en diferentes hojas según criterios temáticos o funcionales",
    "Mover y copiar hojas dentro del libro y entre archivos para reutilizar información",
    "Gestionar la estructura interna del archivo para facilitar el trabajo colaborativo y la navegación"
  ],
  secciones: [
    {
      id: 1,
      titulo: "Gestión de hojas: ¿Por qué y para qué?",
      contenido: `
        <h3>📑 Gestión de Hojas: Organización y eficiencia</h3>
        <p>Un libro de Excel puede contener múltiples hojas, lo que permite <strong>organizar la información por temas, periodos o áreas</strong>. Esta estructura facilita el análisis, la comparación y la actualización de datos.</p>
        <ul>
          <li><strong>¿Por qué crear varias hojas?</strong> Para separar datos (por ejemplo, ventas por mes, áreas de una empresa, listas de alumnos por grado) y evitar confusiones.</li>
          <li><strong>¿Cómo se gestiona?</strong> Usa el botón <code>+ (Nueva hoja)</code> en la parte inferior, haz doble clic en el nombre para renombrar y clic derecho para eliminar.</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un docente crea una hoja para cada bimestre y otra para promedios generales, facilitando el seguimiento del rendimiento estudiantil.</p>
        <h4>Acciones clave:</h4>
        <ul>
          <li>Crear nuevas hojas de cálculo</li>
          <li>Renombrar y eliminar hojas según necesidades</li>
          <li>Organizar información por temas o periodos</li>
        </ul>
        <p><strong>Vinculación teoría-práctica:</strong> Para analizar la evolución de las ventas, crea una hoja por mes y una hoja resumen con los totales.</p>
        <p><strong>Algoritmo básico (pseudocódigo):</strong></p>
        <pre>
// Crear y organizar hojas por periodo
Para cada periodo en la lista de periodos:
    Crear nueva hoja con nombre del periodo
    Copiar datos correspondientes a esa hoja
        </pre>
      `,
      multimedia: [
        {
          tipo: "imagen",
          url: "/images/excel/gestion-hojas-ejemplo.png",
          descripcion: "Ejemplo de libro de Excel con varias hojas organizadas por periodo"
        },
        {
          tipo: "video",
          url: "/videos/excel/gestion-hojas.mp4",
          descripcion: "Video: Cómo crear, renombrar y eliminar hojas en Excel"
        }
      ],
      actividades: [
        "Crea y renombra varias hojas en un libro de Excel para diferentes periodos o áreas.",
        "Organiza la información de un proyecto en hojas separadas y crea una hoja resumen con totales."
      ]
    },
    {
      id: 2,
      titulo: "Mover y copiar hojas: Reutilización y flexibilidad",
      contenido: `
        <h4>🔀 Mover y Copiar Hojas: Adaptando la estructura</h4>
        <p>Mover y copiar hojas permite <strong>reorganizar la información</strong> y reutilizar plantillas o datos sin tener que reconstruirlos desde cero.</p>
        <ul>
          <li><strong>¿Por qué mover/copiar?</strong> Para ajustar el orden de las hojas, duplicar estructuras para nuevos periodos o compartir información entre libros.</li>
          <li><strong>¿Cómo se hace?</strong> Arrastra la pestaña de la hoja para moverla. Para copiar, haz clic derecho en la pestaña &rarr; "Mover o copiar..." y selecciona la opción deseada.</li>
        </ul>
        <p><strong>Ejemplo práctico:</strong> Una empresa copia la hoja de "Presupuesto 2025" para crear la de "Presupuesto 2026" manteniendo fórmulas y formatos.</p>
        <p><strong>Impacto:</strong> Al copiar una hoja, se duplican datos, fórmulas y formatos, lo que ahorra tiempo y reduce errores.</p>
        <p><strong>Algoritmo (pseudocódigo):</strong></p>
        <pre>
// Copiar una hoja a otro libro
Seleccionar hoja origen
Clic derecho → "Mover o copiar..."
Elegir libro destino y marcar "Crear una copia"
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para iniciar un nuevo ciclo escolar, copia la hoja de control de asistencia y actualiza solo los nombres de los estudiantes.</p>
      `,
      multimedia: [
        {
          tipo: "imagen",
          url: "/images/excel/mover-copiar-hojas-ejemplo.png",
          descripcion: "Ejemplo de mover y copiar hojas en Excel"
        },
        {
          tipo: "video",
          url: "/videos/excel/mover-copiar-hojas.mp4",
          descripcion: "Video: Mover y copiar hojas en Excel"
        }
      ],
      actividades: [
        "Copia una hoja de plantilla a otro archivo y actualiza los datos según el nuevo contexto."
      ]
    },
    {
      id: 3,
      titulo: "Estructura interna y gestión avanzada",
      contenido: `
        <h4>🗂️ Estructura interna: Organización avanzada</h4>
        <p>La gestión avanzada de la estructura interna incluye <strong>agrupar hojas, proteger información y vincular datos entre hojas</strong> para un trabajo más seguro y eficiente.</p>
        <ul>
          <li><strong>¿Por qué agrupar/proteger?</strong> Para realizar cambios simultáneos en varias hojas o evitar modificaciones accidentales.</li>
          <li><strong>¿Cómo se hace?</strong> Selecciona varias hojas con <code>Ctrl</code> o <code>Shift</code>, haz clic derecho y elige "Proteger hoja" para restringir cambios.</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un coordinador agrupa las hojas de todos los grados para aplicar el mismo formato y protege la hoja de promedios para evitar cambios no autorizados.</p>
        <p><strong>Vinculación teoría-práctica:</strong> Para consolidar datos de varias hojas, usa fórmulas como <code>=SUMA(Hoja1!B2, Hoja2!B2)</code> o referencias 3D.</p>
        <p><strong>Algoritmo (pseudocódigo):</strong></p>
        <pre>
// Consolidar datos de varias hojas
Total = 0
Para cada hoja en el libro:
    Total = Total + valor de la celda objetivo
Mostrar Total
        </pre>
      `,
      multimedia: [
        {
          tipo: "imagen",
          url: "/images/excel/estructura-interna-ejemplo.png",
          descripcion: "Ejemplo de agrupación y protección de hojas en Excel"
        },
        {
          tipo: "video",
          url: "/videos/excel/estructura-interna.mp4",
          descripcion: "Video: Gestión avanzada de la estructura interna en Excel"
        }
      ],
      actividades: [
        "Agrupa varias hojas y aplica el mismo formato a todas simultáneamente.",
        "Protege la hoja de promedios y explica por qué es importante restringir cambios en ciertas hojas."
      ]
    }
  ],
  recursos: {
    documentos: [
      {
        titulo: "Guía de gestión de hojas",
        url: "/recursos/excel/guia-gestion-hojas.pdf"
      }
    ],
    enlaces: [
      {
        titulo: "Documentación oficial de Microsoft Excel sobre gestión de hojas",
        url: "https://support.microsoft.com/es-es/office/insertar-eliminar-y-organizar-hojas-de-c%C3%A1lculo-19d3d21a-0b11-4b8c-9c3b-6c6b6b49148b"
      }
    ],
    videos: [
      {
        titulo: "Video: Organización avanzada de libros en Excel",
        url: "/videos/excel/organizacion-libros-avanzada.mp4"
      },
      {
        titulo: "Video: Cómo crear, renombrar y eliminar hojas en Excel",
        url: "/videos/excel/gestion-hojas.mp4"
      },
      {
        titulo: "Video: Mover y copiar hojas en Excel",
        url: "/videos/excel/mover-copiar-hojas.mp4"
      },
      {
        titulo: "Video: Gestión avanzada de la estructura interna en Excel",
        url: "/videos/excel/estructura-interna.mp4"
      }
    ],
    imagenes: [
      {
        titulo: "Ejemplo de libro de Excel con varias hojas organizadas por periodo",
        url: "/images/excel/gestion-hojas-ejemplo.png"
      },
      {
        titulo: "Ejemplo de mover y copiar hojas en Excel",
        url: "/images/excel/mover-copiar-hojas-ejemplo.png"
      },
      {
        titulo: "Ejemplo de agrupación y protección de hojas en Excel",
        url: "/images/excel/estructura-interna-ejemplo.png"
      },
      {
        titulo: "Diagrama de flujo: consolidación de datos entre hojas",
        url: "/recursos/excel/diagrama-flujo-consolidacion-hojas.png"
      }
    ]
  },
  evaluacion: {
    tipo: "cuestionario",
    cuestionario: [
      {
        pregunta: "¿Cuál es la principal ventaja de organizar la información en varias hojas dentro de un libro de Excel?",
        tipo: "opcion-multiple",
        opciones: [
          "Facilita la organización, el análisis y la actualización de datos",
          "Elimina datos duplicados",
          "Inserta gráficos automáticamente",
          "Valida datos sin intervención"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Cómo se copia una hoja a otro libro de Excel?",
        tipo: "opcion-multiple",
        opciones: [
          "Clic derecho en la pestaña de la hoja, 'Mover o copiar...', elegir libro destino y marcar 'Crear una copia'",
          "Arrastrando una celda",
          "Insertando una imagen",
          "Cambiando el formato de celda"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Qué algoritmo sigue Excel al consolidar datos de varias hojas?",
        tipo: "opcion-multiple",
        opciones: [
          "Suma los valores de la celda objetivo en cada hoja y muestra el total",
          "Elimina las hojas vacías",
          "Cambia el color de las hojas",
          "No realiza ninguna acción"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Por qué es importante proteger ciertas hojas en un libro de Excel?",
        tipo: "opcion-multiple",
        opciones: [
          "Para evitar modificaciones accidentales o no autorizadas",
          "Para cambiar el color de la hoja",
          "Para insertar imágenes",
          "No es importante"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Qué recurso puedes consultar para aprender a consolidar datos entre hojas?",
        tipo: "opcion-multiple",
        opciones: [
          "Diagrama de flujo: consolidación de datos entre hojas",
          "Manual de instalación de Windows",
          "Tutorial de PowerPoint",
          "Guía de macros en Word"
        ],
        respuestaCorrecta: 0
      }
    ]
  }
};
