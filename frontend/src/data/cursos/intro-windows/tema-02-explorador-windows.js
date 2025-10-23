/**
 * Tema 2: Explorador de Windows
 * Curso: Introducción al Sistema Operativo Windows
 * Versión: adaptado a modelo enriquecido
 */

export default {
  id: '2',
  titulo: "Explorador de Windows",
  tematica: "Partes, vistas, personalización, archivos, carpetas, unidades y operaciones",
  duracion: "35-40 minutos",
  objetivos: [
    "Dominar la interfaz completa del Explorador de Windows",
    "Gestionar eficientemente archivos y carpetas",
    "Utilizar las diferentes vistas y opciones de organización",
    "Realizar operaciones avanzadas de búsqueda y filtrado",
    "Comprender la estructura de unidades y almacenamiento",
    "Ejecutar operaciones básicas: copiar, mover, renombrar, eliminar"
  ],
  recursos: {
    documentos: [
      { titulo: "Manual completo: Explorador de Windows (resumen)", url: "/docs/manual-explorador-windows-completo.pdf", tipo: "pdf" },
      { titulo: "Guía rápida de atajos de teclado", url: "/docs/atajos-explorador-rapido.pdf", tipo: "pdf" }
    ],
    enlaces: [
      { titulo: "Soporte Microsoft - Explorador de archivos (general)", url: "https://support.microsoft.com/es-es/windows/explorador-de-archivos-de-windows", tipo: "externo" },
      { titulo: "Centro de aprendizaje - Windows (oficial)", url: "https://learn.microsoft.com/es-es/windows/", tipo: "externo" }
    ],
    videos: [
      { titulo: "Playlist: Explorador de Windows - Curso básico", url: "/videos/playlist-explorador-basico.m3u8", duracion: "varios" }
    ],
    imagenes: [
      { titulo: "Esquema general", url: "/images/teoria/explorador-windows-interfaz.png" }
    ]
  },
  secciones: [
    {
      id: 1,
      titulo: "Interfaz del Explorador de Windows",
      contenido: `
        <h3>🗂️ Interfaz del Explorador de Windows</h3>
        <div class="explorador-interfaz">
          <h4>🔍 Elementos principales</h4>
          <ul>
            <li><strong>Barra de direcciones:</strong> Muestra la ruta actual y permite navegar entre carpetas.</li>
            <li><strong>Panel de navegación:</strong> Acceso rápido a ubicaciones frecuentes y unidades.</li>
            <li><strong>Área de archivos:</strong> Visualización de carpetas y archivos contenidos en la ubicación seleccionada.</li>
            <li><strong>Barra de herramientas:</strong> Acciones rápidas como copiar, pegar, eliminar, crear nueva carpeta, etc.</li>
            <li><strong>Panel de detalles:</strong> Información adicional sobre el elemento seleccionado.</li>
          </ul>
          <h4>🎨 Personalización de la vista</h4>
          <ul>
            <li><strong>Vistas:</strong> Iconos grandes, detalles, lista, mosaicos, etc.</li>
            <li><strong>Ordenar y agrupar:</strong> Por nombre, fecha, tipo, tamaño.</li>
            <li><strong>Panel de vista previa:</strong> Permite ver el contenido de archivos seleccionados sin abrirlos.</li>
          </ul>
        </div>
      `,
      multimedia: [
        { tipo: "imagen", descripcion: "Interfaz general del Explorador con etiquetas", url: "/images/teoria/explorador-windows-interfaz.png" },
        { tipo: "video", descripcion: "Recorrido por la interfaz del Explorador", url: "/videos/intro-explorador-windows.mp4", duracion: "03:20" }
      ],
      actividades: [
        { tipo: "exploracion", pregunta: "Identifica cada elemento de la interfaz en tu Explorador", ayuda: "Abre el Explorador y señala barra de direcciones, panel de navegación, área de archivos, barra de herramientas y panel de detalles." },
        { tipo: "practica", pregunta: "Cambia la vista entre iconos grandes, detalles y lista", ayuda: "Usa la pestaña 'Vista' o el botón de vista" },
        { tipo: "observacion", pregunta: "Activa el panel de vista previa y observa su comportamiento", ayuda: "Selecciona diferentes tipos de archivo para comparar" }
      ],
      recursos: {
        documentos: [ { titulo: "Manual visual del Explorador", url: "/docs/manual-visual-explorador.pdf", tipo: "pdf" } ],
        enlaces: [ { titulo: "Soporte Microsoft - Explorador de archivos", url: "https://support.microsoft.com/es-es/windows/explorador-de-archivos-de-windows", tipo: "externo" } ],
        videos: [ { titulo: "Introducción a la interfaz del Explorador", url: "/videos/intro-explorador-windows.mp4", duracion: "03:20" } ],
        imagenes: [ { titulo: "Esquema de la interfaz", url: "/images/teoria/explorador-windows-interfaz.png" } ]
      }
    },
    {
      id: 2,
      titulo: "Vistas y Organización",
      contenido: `
        <h3>👁️ Vistas y Organización de Contenido</h3>
        <div class="vistas-organizacion">
          <h4>Tipos de Vista</h4>
          <p>El Explorador de Windows ofrece varias formas de ver tus archivos y carpetas:</p>
          <ul>
            <li><strong>Iconos grandes:</strong> Muestra los archivos y carpetas como iconos grandes, ideal para ver imágenes.</li>
            <li><strong>Detalles:</strong> Muestra una lista con detalles como fecha de modificación, tipo y tamaño.</li>
            <li><strong>Lista:</strong> Similar a detalles, pero con menos información y más compacta.</li>
            <li><strong>Mosaicos:</strong> Muestra los archivos y carpetas con información adicional en forma de mosaico.</li>
          </ul>

          <h4>Cambiar Vista</h4>
          <p>Para cambiar la vista, puedes:</p>
          <ul>
            <li>Usar los botones de vista en la barra de herramientas.</li>
            <li>Ir al menú "Vista" y seleccionar el tipo de vista deseada.</li>
          </ul>

          <h4>Ordenación y Agrupación</h4>
          <p>Organiza tus archivos y carpetas por:</p>
          <ul>
            <li><strong>Nombre:</strong> Ordena alfabéticamente.</li>
            <li><strong>Fecha:</strong> Ordena por fecha de modificación.</li>
            <li><strong>Tipo:</strong> Agrupa por tipo de archivo.</li>
            <li><strong>Tamaño:</strong> Ordena por tamaño de archivo.</li>
          </ul>

          <h4>Filtros</h4>
          <p>Utiliza filtros para mostrar solo los archivos que cumplen con ciertos criterios, como tipo de archivo o fecha de modificación.</p>
        </div>
      `,
      multimedia: [
        { tipo: "imagen", descripcion: "Comparativa de vistas", url: "/images/teoria/vistas-explorador-windows.jpg" },
        { tipo: "infografia", descripcion: "Organización de archivos (infografía)", url: "/images/teoria/organizacion-archivos.png" },
        { tipo: "video", descripcion: "Demostración de vistas y organización", url: "/videos/vistas-organizacion-explorador.mp4", duracion: "05:10" }
      ],
      actividades: [
        { tipo: "practica", pregunta: "Prueba cada tipo de vista en una carpeta con fotos, documentos y videos", ayuda: "Usa Ver → [tipo de vista] y observa diferencias" },
        { tipo: "organizacion", pregunta: "Organiza una carpeta usando ordenación por fecha y agrupación por tipo", ayuda: "Ver → Ordenar por → Fecha, luego Ver → Agrupar por → Tipo" }
      ],
      recursos: {
        documentos: [ { titulo: "Guía de Vistas y Organización", url: "/docs/guia-vistas-organizacion-explorador.pdf", tipo: "pdf" } ],
        enlaces: [ { titulo: "Soporte Microsoft - Organización de Archivos", url: "https://support.microsoft.com/es-es/office/organizar-archivos-carpetas", tipo: "externo" } ],
        videos: [ { titulo: "Maestría en Vistas del Explorador", url: "/videos/maestria-vistas-explorador.mp4", duracion: "11:45" } ],
        imagenes: [ { titulo: "Comparativa de vistas", url: "/images/teoria/vistas-explorador-windows.jpg" }, { titulo: "Infografía de organización", url: "/images/teoria/organizacion-archivos.png" } ]
      }
    },
    {
      id: 3,
      titulo: "Archivos, Carpetas y Unidades",
      contenido: `
        <h3>📁 Gestión de Archivos, Carpetas y Unidades</h3>
        <div class="archivos-carpetas-unidades">
          <h4>Estructura de Carpetas</h4>
          <p>La organización de tus archivos en carpetas es crucial. Considera una estructura jerárquica:</p>
          <ul>
            <li><strong>Proyecto2025:</strong>
              <ul>
                <li><strong>Documentos:</strong> Contratos, informes, etc.</li>
                <li><strong>Imágenes:</strong> Fotos, gráficos, etc.</li>
                <li><strong>Recursos:</strong> Material de referencia, enlaces, etc.</li>
              </ul>
            </li>
          </ul>

          <h4>Unidades</h4>
          <p>Las unidades son los lugares donde se almacenan tus archivos. Pueden ser:</p>
          <ul>
            <li><strong>Unidades locales:</strong> Disco duro interno.</li>
            <li><strong>Unidades extraíbles:</strong> USB, discos duros externos.</li>
            <li><strong>Unidades de red:</strong> Acceso a archivos en red local o en la nube.</li>
          </ul>

          <h4>Atajos</h4>
          <p>Los atajos son enlaces a archivos o carpetas. Facilitan el acceso rápido.</p>
        </div>
      `,
      multimedia: [
        { tipo: "imagen", descripcion: "Estructura de carpetas ejemplo", url: "/images/teoria/archivos-carpetas-unidades.jpg" },
        { tipo: "infografia", descripcion: "Tipos de archivos y extensiones", url: "/images/teoria/tipos-archivos-extensiones.png" },
        { tipo: "video", descripcion: "Gestión de archivos y carpetas", url: "/videos/gestion-archivos-carpetas.mp4", duracion: "07:40" }
      ],
      actividades: [
        { tipo: "exploracion", pregunta: "Explora 'Este equipo' e identifica unidades y propiedades", ayuda: "Clic derecho en unidad → Propiedades" },
        { tipo: "organizacion", pregunta: "Crea una estructura de carpetas para un proyecto", ayuda: "Ej.: Proyecto2025/Documentos, Proyecto2025/Imágenes" }
      ],
      recursos: {
        documentos: [ { titulo: "Guía de Archivos y Unidades", url: "/docs/guia-archivos-carpetas-unidades.pdf", tipo: "pdf" } ],
        enlaces: [ { titulo: "Soporte Microsoft - Tipos de archivo", url: "https://support.microsoft.com/es-es/windows/tipos-de-archivo-en-windows", tipo: "externo" } ],
        videos: [ { titulo: "Maestría en Gestión de Archivos", url: "/videos/maestria-archivos-carpetas.mp4", duracion: "13:30" } ],
        imagenes: [ { titulo: "Estructura de carpetas", url: "/images/teoria/archivos-carpetas-unidades.jpg" }, { titulo: "Infografía tipos de archivos", url: "/images/teoria/tipos-archivos-extensiones.png" } ]
      }
    },
    {
      id: 4,
      titulo: "Operaciones con Archivos y Carpetas",
      contenido: `
        <h3>Operaciones Básicas con Archivos y Carpetas</h3>
        <div class="operaciones-archivos">
          <h4>📋 Selección de Elementos</h4>
          <div class="seleccion-elementos">
            <h5>🖱️ Selección Individual:</h5>
            <ul>
              <li><strong>Clic simple:</strong> Seleccionar un archivo o carpeta</li>
              <li><strong>Cambiar selección:</strong> Clic en otro elemento</li>
              <li><strong>Deseleccionar:</strong> Clic en espacio vacío</li>
            </ul>

            <h5>📚 Selección Múltiple:</h5>
            <ul>
              <li><strong>Ctrl + clic:</strong> Seleccionar elementos individuales no consecutivos</li>
              <li><strong>Shift + clic:</strong> Seleccionar rango entre dos elementos</li>
              <li><strong>Ctrl + A:</strong> Seleccionar todos los elementos</li>
              <li><strong>Arrastrar rectángulo:</strong> Seleccionar elementos en un área</li>
            </ul>

            <h5>🎯 Selección Avanzada:</h5>
            <ul>
              <li><strong>Ctrl + clic en seleccionado:</strong> Deseleccionar elemento individual</li>
              <li><strong>Shift + flechas:</strong> Extender selección con teclado</li>
              <li><strong>Seleccionar por tipo:</strong> Clic derecho → Seleccionar → Por tipo</li>
            </ul>
          </div>

          <h4>📄 Copiar Archivos y Carpetas</h4>
          <div class="copiar-archivos">
            <h5>📋 Métodos de Copia:</h5>
            <h6>Método 1: Atajos de Teclado</h6>
            <ol>
              <li>Seleccionar archivo(s) o carpeta(s)</li>
              <li><strong>Ctrl + C:</strong> Copiar</li>
              <li>Navegar a destino</li>
              <li><strong>Ctrl + V:</strong> Pegar</li>
            </ol>

            <h6>Método 2: Cinta de Opciones</h6>
            <ol>
              <li>Seleccionar elementos</li>
              <li>Pestaña "Inicio" → Botón "Copiar"</li>
              <li>Ir a ubicación destino</li>
              <li>Botón "Pegar"</li>
            </ol>

            <h6>Método 3: Arrastrar y Soltar</h6>
            <ol>
              <li>Seleccionar archivo(s) o carpeta(s)</li>
              <li>Arrastrar a la ubicación deseada</li>
              <li>Soltar el botón del mouse</li>
            </ol>
          </div>

          <h4>✏️ Renombrar Archivos y Carpetas</h4>
          <div class="renombrar-archivos">
            <h5>🖱️ Métodos de Renombrado:</h5>
            <h6>Método 1: Clic derecho</h6>
            <ol>
              <li>Clic derecho sobre el archivo o carpeta</li>
              <li>Seleccionar "Cambiar nombre"</li>
              <li>Escribir el nuevo nombre</li>
              <li>Presionar Enter</li>
            </ol>
            <h6>Método 2: Tecla F2</h6>
            <ol>
              <li>Seleccionar el archivo o carpeta</li>
              <li>Presionar F2</li>
              <li>Escribir el nuevo nombre</li>
              <li>Presionar Enter</li>
            </ol>
          </div>

          <h4>🗑️ Eliminar Archivos y Carpetas</h4>
          <div class="eliminar-archivos">
            <h5>🛠️ Métodos de Eliminación:</h5>
            <h6>Método 1: Supr o Del</h6>
            <ol>
              <li>Seleccionar archivo(s) o carpeta(s)</li>
              <li>Presionar Supr o Del en el teclado</li>
              <li>Confirmar eliminación si es necesario</li>
            </ol>

            <h6>Método 2: Clic derecho → Eliminar</h6>
            <ol>
              <li>Clic derecho sobre el elemento</li>
              <li>Seleccionar "Eliminar"</li>
              <li>Confirmar para mover a la Papelera</li>
            </ol>

            <h6>Método 3: Shift + Supr (Eliminar permanente)</h6>
            <ol>
              <li>Seleccionar elemento(s)</li>
              <li>Presionar Shift + Supr para eliminar sin pasar por Papelera</li>
            </ol>
          </div>
        </div>
      `,
      multimedia: [
        { tipo: "imagen", descripcion: "Selección y métodos de copia", url: "/images/teoria/seleccion-copiar.png" },
        { tipo: "imagen", descripcion: "Renombrar y eliminar", url: "/images/teoria/renombrar-eliminar.png" },
        { tipo: "video", descripcion: "Operaciones básicas: copiar, mover, renombrar, eliminar", url: "/videos/operaciones-archivos-carpetas.mp4", duracion: "08:45" }
      ],
      actividades: [
        { tipo: "exploracion", pregunta: "Explora 'Este equipo' e identifica todas las unidades disponibles y su información", ayuda: "Clic derecho en cada unidad → Propiedades para ver detalles" },
        { tipo: "organizacion", pregunta: "Crea una estructura de carpetas organizada para un proyecto personal", ayuda: "Ejemplo: Proyecto2024/Documentos, Proyecto2024/Imágenes, Proyecto2024/Recursos" },
        { tipo: "practica", pregunta: "Realiza operaciones: copiar varios archivos a otra carpeta, renombrar uno y eliminar otro", ayuda: "Aplica Ctrl+C / Ctrl+V, F2 y Supr" }
      ],
      recursos: {
        documentos: [ { titulo: "Guía de Operaciones con Archivos y Carpetas", url: "/docs/guia-operaciones-archivos-carpetas.pdf", tipo: "pdf" } ],
        enlaces: [ { titulo: "Soporte Microsoft - Operaciones de archivos", url: "https://support.microsoft.com/es-es/windows/administrar-archivos-en-windows", tipo: "externo" } ],
        videos: [ { titulo: "Maestría en Operaciones con Archivos", url: "/videos/maestria-operaciones-archivos.mp4", duracion: "09:20" } ],
        imagenes: [ { titulo: "Selección y copia", url: "/images/teoria/seleccion-copiar.png" }, { titulo: "Renombrar y eliminar", url: "/images/teoria/renombrar-eliminar.png" } ]
      }
    }
  ]
};
