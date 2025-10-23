/**
 * Tema 3: Manipulación de celdas
 * Curso: Tabulador Electrónico Excel
 */

export default {
  id: '3',
  titulo: "Manipulación de celdas",
  tematica: "Organización del contenido digital",
  duracion: "20-25 minutos",
  objetivos: [
    "Comprender la importancia de la manipulación de celdas para la organización y análisis de datos",
    "Seleccionar, mover y copiar celdas de manera eficiente",
    "Insertar y eliminar celdas, filas y columnas comprendiendo su impacto en la estructura de la hoja",
    "Utilizar el portapapeles y el autollenado para agilizar tareas repetitivas",
    "Aplicar algoritmos básicos de organización y edición de datos en Excel"
  ],
  secciones: [
    {
      id: 1,
      titulo: "Selección y movimiento de celdas",
      contenido: `
        <h3>🟩 Selección y Movimiento de Celdas: Fundamentos y Aplicaciones</h3>
        <p>La manipulación de celdas es la base para cualquier tarea en Excel, ya que cada dato se almacena en una celda. <strong>Seleccionar correctamente</strong> permite aplicar formatos, fórmulas o mover información de manera precisa.</p>
        <ul>
          <li><strong>¿Por qué seleccionar celdas?</strong> Para editar, copiar, eliminar o aplicar funciones sobre datos específicos.</li>
          <li><strong>¿Cómo seleccionar?</strong> Haz clic en una celda para seleccionarla. Para un rango, haz clic y arrastra o usa <code>Shift + flechas</code>.</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un profesor selecciona el rango <code>B2:B12</code> para copiar las calificaciones de sus estudiantes a otra hoja.</p>
        <h4>Movimiento y Copia</h4>
        <ul>
          <li><strong>Mover:</strong> Selecciona la celda/rango, coloca el cursor en el borde y arrastra.</li>
          <li><strong>Copiar:</strong> Usa <code>Ctrl+C</code> y <code>Ctrl+V</code> o arrastra con <code>Ctrl</code> presionado.</li>
        </ul>
        <p><strong>Portapapeles:</strong> Permite copiar y pegar datos entre hojas o libros.</p>
        <p><strong>Vinculación teoría-práctica:</strong> Para reorganizar una lista de alumnos, selecciona el rango, cópialo y pégalo en la posición deseada.</p>
        <p><strong>Algoritmo básico (pseudocódigo):</strong></p>
        <pre>
// Copiar un rango de celdas a otra ubicación
Para cada celda en el rango origen:
    Leer valor de la celda
    Escribir valor en la celda destino correspondiente
        </pre>
      `,
      multimedia: [
        {
          tipo: "video",
          url: "/videos/excel/seleccion-movimiento.mp4",
          descripcion: "Video: Selección y movimiento de celdas en Excel"
        }
      ],
      actividades: [
        "Selecciona y mueve celdas en una hoja de cálculo, luego copia el rango a otra ubicación y verifica que los datos se mantengan.",
        "Explica con tus palabras el algoritmo que sigue Excel al copiar un rango de celdas."
      ]
    },
    {
      id: 2,
      titulo: "Inserción y eliminación de celdas, filas y columnas",
      contenido: `
        <h4>➕ Inserción y Eliminación: Estructurando la Hoja</h4>
        <p>Insertar o eliminar celdas, filas y columnas permite adaptar la estructura de la hoja a nuevas necesidades.</p>
        <ul>
          <li><strong>¿Por qué insertar/eliminar?</strong> Para agregar nuevos datos o eliminar información obsoleta sin perder la organización.</li>
          <li><strong>¿Cómo insertar?</strong> Selecciona una celda/fila/columna, haz clic derecho y elige "Insertar".</li>
          <li><strong>¿Cómo eliminar?</strong> Selecciona y haz clic derecho &rarr; "Eliminar".</li>
        </ul>
        <p><strong>Ejemplo práctico:</strong> Si un nuevo estudiante se une al grupo, inserta una fila en la posición correspondiente para registrar sus datos.</p>
        <p><strong>Impacto:</strong> Al insertar o eliminar, los datos se desplazan. Es importante revisar fórmulas dependientes.</p>
        <p><strong>Algoritmo (pseudocódigo):</strong></p>
        <pre>
// Insertar una fila en la posición N
Desplazar hacia abajo todas las filas desde N
Crear una nueva fila vacía en N
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para eliminar una columna de notas antiguas, selecciónala y usa el comando de eliminación. Observa cómo se ajustan las fórmulas automáticamente.</p>
      `,
      multimedia: [
        {
          tipo: "imagen",
          url: "/images/excel/insercion-eliminacion.png",
          descripcion: "Ejemplo de inserción y eliminación de filas y columnas en Excel"
        },
        {
          tipo: "video",
          url: "/videos/excel/insercion-eliminacion.mp4",
          descripcion: "Video: Inserción y eliminación de celdas, filas y columnas en Excel"
        }
      ],
      actividades: [
        "Inserta una fila y una columna en una tabla de datos, luego elimina una columna y observa el ajuste de las fórmulas.",
        "Describe con tus palabras el algoritmo que sigue Excel al insertar una fila en medio de una tabla de datos."
      ]
    },
    {
      id: 3,
      titulo: "Autollenado y organización de datos",
      contenido: `
        <h4>🔄 Autollenado y Organización: Automatizando Tareas</h4>
        <p>El <strong>autollenado</strong> permite completar series de datos (números, fechas, patrones) de forma automática, ahorrando tiempo y evitando errores.</p>
        <ul>
          <li><strong>¿Por qué usar autollenado?</strong> Para crear listas secuenciales, copiar fórmulas o repetir patrones rápidamente.</li>
          <li><strong>¿Cómo se usa?</strong> Escribe el primer valor, selecciona la celda y arrastra el controlador de relleno (esquina inferior derecha).</li>
        </ul>
        <p><strong>Ejemplo contextualizado:</strong> Un docente crea una lista de fechas de asistencia usando autollenado desde "01/09/2025".</p>
        <p><strong>Algoritmo (pseudocódigo):</strong></p>
        <pre>
// Autollenar una serie numérica
Valor = valor inicial
Para cada celda en el rango destino:
    Escribir Valor
    Valor = Valor + incremento
        </pre>
        <p><strong>Vinculación teoría-práctica:</strong> Para copiar una fórmula de suma a lo largo de una columna, escribe la fórmula en la primera celda y usa autollenado para replicarla en las demás.</p>
      `,
      multimedia: [
        {
          tipo: "imagen",
          url: "/images/excel/autollenado-organizacion.png",
          descripcion: "Ejemplo de autollenado y organización de datos en Excel"
        },
        {
          tipo: "video",
          url: "/videos/excel/autollenado-organizacion.mp4",
          descripcion: "Video: Autollenado y organización de datos en Excel"
        }
      ],
      actividades: [
        "Utiliza el autollenado para crear una serie de fechas y otra de números pares.",
        "Explica cómo el autollenado puede ahorrar tiempo en la gestión de listas o cálculos repetitivos."
      ]
    }
  ],
  recursos: {
    documentos: [
      {
        titulo: "Guía de manipulación de celdas",
        url: "/recursos/excel/guia-manipulacion-celdas.pdf"
      }
    ],
    enlaces: [
      {
        titulo: "Documentación oficial de Microsoft Excel sobre manipulación de celdas",
        url: "https://support.microsoft.com/es-es/office/mover-o-copiar-celdas-y-contenido-de-celdas-7ab0bb7b-3a9e-4b56-a3c9-6c943"
      }
    ]
  }
};
