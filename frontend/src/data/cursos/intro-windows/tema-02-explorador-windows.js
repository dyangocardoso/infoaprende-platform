/**
 * Tema 2: Explorador de Windows
 * Curso: Introducción al Sistema Operativo Windows
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
  secciones: [
    {
      id: 1,
      titulo: "Interfaz del Explorador de Windows",
      contenido: `
        <h3>🗂️ Conociendo el Explorador de Windows</h3>
        
        <div class="interfaz-explorador">
          <h4>🚀 ¿Qué es el Explorador de Windows?</h4>
          <p>El <strong>Explorador de Windows</strong> es la herramienta principal para navegar, organizar y gestionar todos los archivos y carpetas de tu computadora. Es como el "administrador de archivos" de Windows.</p>

          <h4>🔓 Formas de Abrir el Explorador</h4>
          <div class="abrir-explorador">
            <h5>⌨️ Con Teclado:</h5>
            <ul>
              <li><strong>Windows + E:</strong> Método más rápido</li>
              <li><strong>Ctrl + Windows + E:</strong> Abre en nueva ventana</li>
            </ul>

            <h5>🖱️ Con Ratón:</h5>
            <ul>
              <li><strong>Icono en barra de tareas:</strong> Carpeta amarilla</li>
              <li><strong>Menú Inicio:</strong> Buscar "Explorador de archivos"</li>
              <li><strong>Escritorio:</strong> Doble clic en "Este equipo"</li>
              <li><strong>Cualquier carpeta:</strong> Doble clic para abrir</li>
            </ul>
          </div>

          <h4>🧩 Componentes Principales</h4>
          <div class="componentes-explorador">
            <h5>🎀 Cinta de Opciones (Ribbon)</h5>
            <ul>
              <li><strong>Archivo:</strong> Abrir nueva ventana, opciones, ayuda</li>
              <li><strong>Inicio:</strong> Operaciones básicas (copiar, pegar, eliminar)</li>
              <li><strong>Compartir:</strong> Enviar, comprimir, imprimir</li>
              <li><strong>Ver:</strong> Cambiar vista, ordenar, agrupar</li>
              <li><strong>Pestañas contextuales:</strong> Aparecen según tipo de archivo</li>
            </ul>

            <h5>🧭 Panel de Navegación</h5>
            <ul>
              <li><strong>Acceso rápido:</strong> Carpetas frecuentemente usadas</li>
              <li><strong>Este equipo:</strong> Discos duros y dispositivos</li>
              <li><strong>Red:</strong> Computadoras y recursos compartidos</li>
              <li><strong>OneDrive:</strong> Almacenamiento en la nube (si está configurado)</li>
              <li><strong>Bibliotecas:</strong> Colecciones organizadas de carpetas</li>
            </ul>

            <h5>📍 Barra de Direcciones</h5>
            <ul>
              <li><strong>Ruta actual:</strong> Muestra ubicación actual</li>
              <li><strong>Navegación por clicks:</strong> Clic en cualquier nivel</li>
              <li><strong>Escritura directa:</strong> Clic para escribir ruta manualmente</li>
              <li><strong>Autocompletado:</strong> Sugerencias mientras escribes</li>
            </ul>

            <h5>🔍 Cuadro de Búsqueda</h5>
            <ul>
              <li><strong>Búsqueda en carpeta actual:</strong> Y subcarpetas</li>
              <li><strong>Filtros automáticos:</strong> Por tipo de archivo</li>
              <li><strong>Búsqueda avanzada:</strong> Por fecha, tamaño, autor</li>
              <li><strong>Sugerencias:</strong> Historial de búsquedas recientes</li>
            </ul>

            <h5>📋 Área Principal de Contenido</h5>
            <ul>
              <li><strong>Vista de archivos:</strong> Iconos, lista, detalles</li>
              <li><strong>Información contextual:</strong> Tamaño, fecha, tipo</li>
              <li><strong>Selección múltiple:</strong> Ctrl + clic, Shift + clic</li>
              <li><strong>Vista previa:</strong> Panel opcional para archivos</li>
            </ul>

            <h5>📊 Barra de Estado</h5>
            <ul>
              <li><strong>Elementos totales:</strong> Número de archivos y carpetas</li>
              <li><strong>Elementos seleccionados:</strong> Cantidad y tamaño</li>
              <li><strong>Información contextual:</strong> Detalles específicos</li>
              <li><strong>Espacio disponible:</strong> En la unidad actual</li>
            </ul>
          </div>

          <h4>🎨 Personalización de la Interfaz</h4>
          <div class="personalizacion-interfaz">
            <h5>👁️ Mostrar/Ocultar Elementos:</h5>
            <ul>
              <li><strong>Cinta de opciones:</strong> Ctrl + F1 para alternar</li>
              <li><strong>Panel de navegación:</strong> Ver → Panel de navegación</li>
              <li><strong>Panel de vista previa:</strong> Ver → Panel de vista previa</li>
              <li><strong>Panel de detalles:</strong> Ver → Panel de detalles</li>
            </ul>

            <h5>⚙️ Opciones de Carpeta:</h5>
            <ol>
              <li>Ver → Opciones → Cambiar opciones de carpeta y búsqueda</li>
              <li><strong>General:</strong> Comportamiento de ventanas</li>
              <li><strong>Ver:</strong> Mostrar archivos ocultos, extensiones</li>
              <li><strong>Búsqueda:</strong> Configuración de indexación</li>
            </ol>
          </div>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/interfaz-explorador-windows.jpg",
        infografia: "/images/teoria/componentes-explorador.png"
      },
      actividades: [
        {
          tipo: "exploracion",
          pregunta: "Abre el Explorador con Windows+E y identifica cada componente de la interfaz",
          ayuda: "Localiza: cinta de opciones, panel de navegación, barra de direcciones, cuadro de búsqueda"
        }
      ]
    },
    {
      id: 2,
      titulo: "Vistas y Organización",
      contenido: `
        <h3>👁️ Vistas y Organización de Contenido</h3>
        
        <div class="vistas-organizacion">
          <h4>🖼️ Tipos de Vista</h4>
          <div class="tipos-vista">
            <h5>📱 Iconos Extra Grandes</h5>
            <ul>
              <li><strong>Mejor para:</strong> Fotos, videos, identificación visual rápida</li>
              <li><strong>Información visible:</strong> Miniaturas de contenido</li>
              <li><strong>Tamaño:</strong> 256x256 píxeles</li>
              <li><strong>Uso recomendado:</strong> Carpetas multimedia</li>
            </ul>

            <h5>🖼️ Iconos Grandes</h5>
            <ul>
              <li><strong>Mejor para:</strong> Navegación general, documentos con vista previa</li>
              <li><strong>Información visible:</strong> Iconos representativos y miniaturas</li>
              <li><strong>Tamaño:</strong> 96x96 píxeles</li>
              <li><strong>Uso recomendado:</strong> Carpeta de Documentos</li>
            </ul>

            <h5>📋 Iconos Medianos</h5>
            <ul>
              <li><strong>Mejor para:</strong> Balance entre vista visual e información</li>
              <li><strong>Información visible:</strong> Iconos y nombres completos</li>
              <li><strong>Tamaño:</strong> 48x48 píxeles</li>
              <li><strong>Uso recomendado:</strong> Uso general</li>
            </ul>

            <h5>📃 Lista</h5>
            <ul>
              <li><strong>Mejor para:</strong> Muchos archivos, navegación rápida</li>
              <li><strong>Información visible:</strong> Iconos pequeños y nombres</li>
              <li><strong>Organización:</strong> Columnas verticales</li>
              <li><strong>Uso recomendado:</strong> Carpetas con muchos archivos</li>
            </ul>

            <h5>📊 Detalles</h5>
            <ul>
              <li><strong>Mejor para:</strong> Información completa de archivos</li>
              <li><strong>Información visible:</strong> Nombre, fecha, tipo, tamaño</li>
              <li><strong>Ordenación:</strong> Por cualquier columna</li>
              <li><strong>Uso recomendado:</strong> Gestión avanzada de archivos</li>
            </ul>

            <h5>🏷️ Mosaicos</h5>
            <ul>
              <li><strong>Mejor para:</strong> Información moderada con iconos grandes</li>
              <li><strong>Información visible:</strong> Nombre, tipo, tamaño</li>
              <li><strong>Estilo:</strong> Híbrido entre iconos y detalles</li>
              <li><strong>Uso recomendado:</strong> Documentos de trabajo</li>
            </ul>

            <h5>📑 Contenido</h5>
            <ul>
              <li><strong>Mejor para:</strong> Documentos de texto, búsqueda por contenido</li>
              <li><strong>Información visible:</strong> Fragmentos del contenido del archivo</li>
              <li><strong>Funcionalidad:</strong> Vista previa de texto</li>
              <li><strong>Uso recomendado:</strong> Carpetas de documentos de oficina</li>
            </ul>
          </div>

          <h4>🔄 Cambiar Vista</h4>
          <div class="cambiar-vista">
            <h5>⚙️ Métodos para Cambiar Vista:</h5>
            <ul>
              <li><strong>Cinta de opciones:</strong> Pestaña "Ver" → Seleccionar vista</li>
              <li><strong>Botón de vista:</strong> Esquina superior derecha</li>
              <li><strong>Clic derecho:</strong> En espacio vacío → Ver</li>
              <li><strong>Atajo de teclado:</strong> Ctrl + 1-8 para diferentes vistas</li>
            </ul>

            <h5>🎛️ Deslizador de Vista:</h5>
            <p>En la esquina inferior derecha hay un deslizador que permite ajustar gradualmente el tamaño de los iconos entre las diferentes vistas.</p>
          </div>

          <h4>📑 Ordenación de Archivos</h4>
          <div class="ordenacion-archivos">
            <h5>🔤 Criterios de Ordenación:</h5>
            <ul>
              <li><strong>Nombre:</strong> Alfabético (A-Z o Z-A)</li>
              <li><strong>Fecha de modificación:</strong> Más reciente o más antiguo primero</li>
              <li><strong>Tipo:</strong> Agrupación por extensión de archivo</li>
              <li><strong>Tamaño:</strong> De mayor a menor o viceversa</li>
              <li><strong>Fecha de creación:</strong> Cuándo se creó originalmente</li>
              <li><strong>Autor:</strong> Creador del documento (para archivos de Office)</li>
            </ul>

            <h5>🎯 Formas de Ordenar:</h5>
            <ul>
              <li><strong>Cinta de opciones:</strong> Ver → Ordenar por</li>
              <li><strong>Clic derecho:</strong> En espacio vacío → Ordenar por</li>
              <li><strong>Encabezados de columna:</strong> En vista Detalles, clic en encabezado</li>
              <li><strong>Orden ascendente/descendente:</strong> Segundo clic invierte orden</li>
            </ul>
          </div>

          <h4>📂 Agrupación de Elementos</h4>
          <div class="agrupacion-elementos">
            <h5>🎯 Ventajas de Agrupar:</h5>
            <ul>
              <li><strong>Organización visual:</strong> Separación clara por categorías</li>
              <li><strong>Navegación más rápida:</strong> Encontrar archivos por tipo</li>
              <li><strong>Información resumen:</strong> Cantidad de elementos por grupo</li>
              <li><strong>Operaciones en grupo:</strong> Seleccionar categorías completas</li>
            </ul>

            <h5>📋 Opciones de Agrupación:</h5>
            <ul>
              <li><strong>Por tipo:</strong> Documentos, imágenes, videos, etc.</li>
              <li><strong>Por fecha:</strong> Hoy, ayer, semana pasada, mes pasado</li>
              <li><strong>Por tamaño:</strong> Vacío, pequeño, mediano, grande, gigantesco</li>
              <li><strong>Por nombre:</strong> Por letra inicial (A-H, I-P, Q-Z)</li>
              <li><strong>Personalizada:</strong> Rangos definidos por el usuario</li>
            </ul>

            <h5>⚙️ Activar Agrupación:</h5>
            <ol>
              <li>Ver → Agrupar por → Seleccionar criterio</li>
              <li>O clic derecho → Agrupar por</li>
              <li>Para desactivar: Agrupar por → (Ninguno)</li>
            </ol>
          </div>

          <h4>🔍 Filtrado de Contenido</h4>
          <div class="filtrado-contenido">
            <h5>🎛️ Filtros Disponibles:</h5>
            <ul>
              <li><strong>Tipo de archivo:</strong> Solo documentos, solo imágenes, etc.</li>
              <li><strong>Fecha de modificación:</strong> Rangos de fechas específicos</li>
              <li><strong>Tamaño:</strong> Archivos dentro de rangos de tamaño</li>
              <li><strong>Autor:</strong> Archivos creados por persona específica</li>
              <li><strong>Etiquetas:</strong> Metadatos asignados a archivos</li>
            </ul>

            <h5>⚙️ Aplicar Filtros:</h5>
            <ol>
              <li>Vista → Detalles (para ver encabezados de columna)</li>
              <li>Clic en flecha pequeña en encabezado de columna</li>
              <li>Seleccionar/deseleccionar elementos del filtro</li>
              <li>Aplicar o Cancelar según necesidad</li>
            </ol>
          </div>

          <h4>💡 Consejos de Organización</h4>
          <ul>
            <li><strong>Vista por defecto:</strong> Configurar vista preferida para cada tipo de carpeta</li>
            <li><strong>Combinación de técnicas:</strong> Ordenar + agrupar para máxima eficiencia</li>
            <li><strong>Vistas específicas:</strong> Fotos (iconos grandes), documentos (detalles), música (contenido)</li>
            <li><strong>Filtros temporales:</strong> Usar para encontrar archivos específicos, luego quitar</li>
            <li><strong>Consistencia:</strong> Mantener criterios similares en carpetas relacionadas</li>
          </ul>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/vistas-explorador-windows.jpg",
        infografia: "/images/teoria/organizacion-archivos.png",
        video: "/videos/vistas-organizacion-explorador.mp4"
      },
      actividades: [
        {
          tipo: "practica",
          pregunta: "Prueba cada tipo de vista en una carpeta con diferentes archivos (fotos, documentos, videos)",
          ayuda: "Usa Ver → [tipo de vista] y observa cómo cambia la información mostrada"
        },
        {
          tipo: "organizacion",
          pregunta: "Organiza una carpeta usando ordenación por fecha y agrupación por tipo",
          ayuda: "Ver → Ordenar por → Fecha modificación, luego Ver → Agrupar por → Tipo"
        }
      ]
    },
    {
      id: 3,
      titulo: "Archivos, Carpetas y Unidades",
      contenido: `
        <h3>📁 Gestión de Archivos, Carpetas y Unidades</h3>
        
        <div class="archivos-carpetas-unidades">
          <h4>📄 Entendiendo los Archivos</h4>
          <div class="archivos">
            <h5>🎯 ¿Qué es un Archivo?</h5>
            <p>Un <strong>archivo</strong> es una unidad de información almacenada en el computador que puede contener texto, imágenes, audio, video, programas o cualquier tipo de datos.</p>

            <h5>🏷️ Componentes de un Archivo:</h5>
            <ul>
              <li><strong>Nombre:</strong> Identifica el archivo (máximo 255 caracteres)</li>
              <li><strong>Extensión:</strong> Indica el tipo de archivo (.txt, .jpg, .mp4, .pdf)</li>
              <li><strong>Contenido:</strong> Los datos reales almacenados</li>
              <li><strong>Metadatos:</strong> Información sobre el archivo (tamaño, fecha, autor)</li>
            </ul>

            <h5>📋 Tipos Comunes de Archivo:</h5>
            <div class="tipos-archivo">
              <h6>📝 Documentos:</h6>
              <ul>
                <li><strong>.txt:</strong> Texto plano sin formato</li>
                <li><strong>.docx:</strong> Documento de Microsoft Word</li>
                <li><strong>.pdf:</strong> Documento portable de Adobe</li>
                <li><strong>.xlsx:</strong> Hoja de cálculo de Excel</li>
                <li><strong>.pptx:</strong> Presentación de PowerPoint</li>
              </ul>

              <h6>🖼️ Imágenes:</h6>
              <ul>
                <li><strong>.jpg/.jpeg:</strong> Imagen con compresión</li>
                <li><strong>.png:</strong> Imagen con transparencia</li>
                <li><strong>.gif:</strong> Imagen animada</li>
                <li><strong>.bmp:</strong> Imagen sin compresión</li>
                <li><strong>.svg:</strong> Imagen vectorial</li>
              </ul>

              <h6>🎵 Audio:</h6>
              <ul>
                <li><strong>.mp3:</strong> Audio comprimido estándar</li>
                <li><strong>.wav:</strong> Audio sin compresión</li>
                <li><strong>.m4a:</strong> Audio de iTunes/Apple</li>
                <li><strong>.flac:</strong> Audio sin pérdida</li>
              </ul>

              <h6>🎬 Video:</h6>
              <ul>
                <li><strong>.mp4:</strong> Video estándar universal</li>
                <li><strong>.avi:</strong> Video contenedor clásico</li>
                <li><strong>.mkv:</strong> Video de alta calidad</li>
                <li><strong>.mov:</strong> Video de QuickTime/Apple</li>
              </ul>

              <h6>💻 Programas:</h6>
              <ul>
                <li><strong>.exe:</strong> Programa ejecutable de Windows</li>
                <li><strong>.msi:</strong> Instalador de Windows</li>
                <li><strong>.zip/.rar:</strong> Archivos comprimidos</li>
                <li><strong>.dll:</strong> Biblioteca de Windows</li>
              </ul>
            </div>

            <h5>🔍 Propiedades de Archivos:</h5>
            <ul>
              <li><strong>Tamaño:</strong> Espacio que ocupa en disco</li>
              <li><strong>Fecha de creación:</strong> Cuándo se creó originalmente</li>
              <li><strong>Fecha de modificación:</strong> Última vez que se cambió</li>
              <li><strong>Fecha de acceso:</strong> Última vez que se abrió</li>
              <li><strong>Atributos:</strong> Solo lectura, oculto, sistema</li>
              <li><strong>Ubicación:</strong> Ruta completa en el sistema</li>
            </ul>
          </div>

          <h4>📂 Organizando con Carpetas</h4>
          <div class="carpetas">
            <h5>🎯 ¿Qué es una Carpeta?</h5>
            <p>Una <strong>carpeta</strong> (o directorio) es un contenedor que organiza archivos y otras carpetas, creando una estructura jerárquica de almacenamiento.</p>

            <h5>🏗️ Estructura de Carpetas:</h5>
            <ul>
              <li><strong>Carpeta raíz:</strong> Nivel superior de una unidad (C:\\, D:\\)</li>
              <li><strong>Subcarpetas:</strong> Carpetas dentro de otras carpetas</li>
              <li><strong>Ruta:</strong> Dirección completa de una carpeta</li>
              <li><strong>Nivel de anidación:</strong> Profundidad de la estructura</li>
            </ul>

            <h5>📁 Carpetas del Sistema de Windows:</h5>
            <ul>
              <li><strong>Escritorio:</strong> C:\\Users\\[Usuario]\\Desktop</li>
              <li><strong>Documentos:</strong> C:\\Users\\[Usuario]\\Documents</li>
              <li><strong>Descargas:</strong> C:\\Users\\[Usuario]\\Downloads</li>
              <li><strong>Imágenes:</strong> C:\\Users\\[Usuario]\\Pictures</li>
              <li><strong>Música:</strong> C:\\Users\\[Usuario]\\Music</li>
              <li><strong>Videos:</strong> C:\\Users\\[Usuario]\\Videos</li>
            </ul>

            <h5>➕ Crear Carpetas:</h5>
            <div class="crear-carpetas">
              <h6>Método 1: Clic Derecho</h6>
              <ol>
                <li>Clic derecho en espacio vacío</li>
                <li>Nuevo → Carpeta</li>
                <li>Escribir nombre descriptivo</li>
                <li>Presionar Enter</li>
              </ol>

              <h6>Método 2: Cinta de Opciones</h6>
              <ol>
                <li>Pestaña "Inicio"</li>
                <li>Botón "Nueva carpeta"</li>
                <li>Asignar nombre</li>
                <li>Confirmar con Enter</li>
              </ol>

              <h6>Método 3: Atajo de Teclado</h6>
              <ol>
                <li>Ctrl + Shift + N</li>
                <li>Escribir nombre</li>
                <li>Enter para confirmar</li>
              </ol>
            </div>

            <h5>💡 Buenas Prácticas para Nombrar:</h5>
            <ul>
              <li><strong>Nombres descriptivos:</strong> "Fotos_Vacaciones_2024" mejor que "Fotos1"</li>
              <li><strong>Evitar caracteres especiales:</strong> No usar / \\ : * ? " < > |</li>
              <li><strong>Fechas al principio:</strong> "2024-03-15_Reunión" para ordenación cronológica</li>
              <li><strong>Consistencia:</strong> Mismo formato para elementos similares</li>
              <li><strong>Longitud moderada:</strong> Entre 5-50 caracteres</li>
            </ul>
          </div>

          <h4>💾 Unidades de Almacenamiento</h4>
          <div class="unidades">
            <h5>🖥️ Tipos de Unidades:</h5>
            <div class="tipos-unidades">
              <h6>🔧 Unidades Locales:</h6>
              <ul>
                <li><strong>Disco Duro (HDD):</strong> Almacenamiento mecánico tradicional</li>
                <li><strong>Unidad de Estado Sólido (SSD):</strong> Almacenamiento rápido sin partes móviles</li>
                <li><strong>Unidad Óptica:</strong> CD, DVD, Blu-ray</li>
                <li><strong>Unidad de Recuperación:</strong> Partición especial de Windows</li>
              </ul>

              <h6>🔌 Unidades Externas:</h6>
              <ul>
                <li><strong>USB Flash Drive:</strong> Memoria portátil pequeña</li>
                <li><strong>Disco Duro Externo:</strong> Almacenamiento portátil de gran capacidad</li>
                <li><strong>Tarjetas SD:</strong> Almacenamiento para cámaras y móviles</li>
                <li><strong>Unidades de Red:</strong> Almacenamiento compartido</li>
              </ul>

              <h6>☁️ Unidades en la Nube:</h6>
              <ul>
                <li><strong>OneDrive:</strong> Servicio de Microsoft integrado</li>
                <li><strong>Google Drive:</strong> Almacenamiento de Google</li>
                <li><strong>Dropbox:</strong> Servicio de sincronización</li>
                <li><strong>iCloud:</strong> Servicio de Apple</li>
              </ul>
            </div>

            <h5>📊 Información de Unidades:</h5>
            <ul>
              <li><strong>Letra de unidad:</strong> Identificador (C:, D:, E:, etc.)</li>
              <li><strong>Etiqueta:</strong> Nombre personalizable</li>
              <li><strong>Capacidad total:</strong> Espacio máximo disponible</li>
              <li><strong>Espacio usado:</strong> Cuánto está ocupado</li>
              <li><strong>Espacio libre:</strong> Cuánto queda disponible</li>
              <li><strong>Sistema de archivos:</strong> NTFS, FAT32, exFAT</li>
            </ul>

            <h5>🔍 Acceder a Información de Unidades:</h5>
            <ol>
              <li>Abrir "Este equipo" en el Explorador</li>
              <li>Clic derecho en unidad deseada</li>
              <li>Seleccionar "Propiedades"</li>
              <li>Ver información detallada y gráfico de uso</li>
            </ol>
          </div>

          <h4>🗂️ Estructura Jerárquica del Sistema</h4>
          <div class="estructura-jerarquica">
            <h5>🌳 Organización en Árbol:</h5>
            <p>Windows organiza el almacenamiento en una estructura de árbol invertido:</p>
            <ul>
              <li><strong>Raíz:</strong> Este equipo (nivel superior)</li>
              <li><strong>Unidades:</strong> C:, D:, E: (primer nivel)</li>
              <li><strong>Carpetas principales:</strong> Windows, Program Files, Users</li>
              <li><strong>Subcarpetas:</strong> Niveles más profundos de organización</li>
              <li><strong>Archivos:</strong> Elementos finales en la estructura</li>
            </ul>

            <h5>🎯 Navegación Eficiente:</h5>
            <ul>
              <li><strong>Breadcrumbs:</strong> Usar barra de direcciones para saltar niveles</li>
              <li><strong>Botón Atrás/Adelante:</strong> Navegar historial</li>
              <li><strong>Botón Arriba:</strong> Subir un nivel en la jerarquía</li>
              <li><strong>Panel de navegación:</strong> Vista de árbol para acceso directo</li>
            </ul>

            <h5>🔗 Rutas y Direcciones:</h5>
            <ul>
              <li><strong>Ruta absoluta:</strong> C:\\Users\\Juan\\Documents\\Trabajo\\Proyecto.docx</li>
              <li><strong>Ruta relativa:</strong> ..\\Imágenes\\Logo.png (relativa a ubicación actual)</li>
              <li><strong>Ruta UNC:</strong> \\\\Servidor\\Carpeta (para recursos de red)</li>
              <li><strong>Variables de entorno:</strong> %USERPROFILE%\\Desktop</li>
            </ul>
          </div>

          <h4>⚡ Atajos y Accesos Rápidos</h4>
          <ul>
            <li><strong>Windows + E:</strong> Abrir explorador</li>
            <li><strong>Alt + D:</strong> Enfocar barra de direcciones</li>
            <li><strong>Ctrl + L:</strong> Enfocar barra de direcciones</li>
            <li><strong>F11:</strong> Pantalla completa</li>
            <li><strong>Alt + ↑:</strong> Subir un nivel</li>
            <li><strong>Alt + ←/→:</strong> Atrás/Adelante en historial</li>
            <li><strong>F5:</strong> Actualizar vista</li>
            <li><strong>Ctrl + N:</strong> Nueva ventana del explorador</li>
          </ul>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/archivos-carpetas-unidades.jpg",
        infografia: "/images/teoria/tipos-archivos-extensiones.png",
        video: "/videos/gestion-archivos-carpetas.mp4"
      },
      actividades: [
        {
          tipo: "exploracion",
          pregunta: "Explora 'Este equipo' e identifica todas las unidades disponibles y su información",
          ayuda: "Clic derecho en cada unidad → Propiedades para ver detalles"
        },
        {
          tipo: "organizacion",
          pregunta: "Crea una estructura de carpetas organizada para un proyecto personal",
          ayuda: "Ejemplo: Proyecto2024/Documentos, Proyecto2024/Imágenes, Proyecto2024/Recursos"
        }
      ]
    },
    {
      id: 4,
      titulo: "Operaciones con Archivos y Carpetas",
      contenido: `
        <h3>⚙️ Operaciones Básicas con Archivos y Carpetas</h3>
        
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

            <h6>Método 3: Clic Derecho</h6>
            <ol>
              <li>Clic derecho en elementos seleccionados</li>
              <li>Seleccionar "Copiar"</li>
              <li>Clic derecho en destino</li>
              <li>Seleccionar "Pegar"</li>
            </ol>

            <h6>Método 4: Arrastrar con Ctrl</h6>
            <ol>
              <li>Mantener presionado Ctrl</li>
              <li>Arrastrar elementos al destino</li>
              <li>Soltar (aparece símbolo + indicando copia)</li>
            </ol>

            <h5>💡 Consejos para Copiar:</h5>
            <ul>
              <li><strong>Vista previa:</strong> El cursor cambia para mostrar la operación</li>
              <li><strong>Entre unidades:</strong> Por defecto se copia automáticamente</li>
              <li><strong>Misma unidad:</strong> Por defecto se mueve, usar Ctrl para copiar</li>
              <li><strong>Progreso:</strong> Windows muestra barra de progreso para archivos grandes</li>
            </ul>
          </div>

          <h4>🚚 Mover Archivos y Carpetas</h4>
          <div class="mover-archivos">
            <h5>✂️ Métodos de Movimiento:</h5>
            
            <h6>Método 1: Cortar y Pegar</h6>
            <ol>
              <li>Seleccionar elementos</li>
              <li><strong>Ctrl + X:</strong> Cortar</li>
              <li>Navegar a destino</li>
              <li><strong>Ctrl + V:</strong> Pegar</li>
            </ol>

            <h6>Método 2: Arrastrar y Soltar</h6>
            <ol>
              <li>Arrastrar elementos al destino</li>
              <li>Soltar (en misma unidad = mover por defecto)</li>
            </ol>

            <h6>Método 3: Arrastrar con Shift</h6>
            <ol>
              <li>Mantener Shift presionado</li>
              <li>Arrastrar elementos</li>
              <li>Soltar (fuerza movimiento entre unidades)</li>
            </ol>

            <h5>⚠️ Consideraciones Importantes:</h5>
            <ul>
              <li><strong>Diferencia entre copiar y mover:</strong> Mover elimina del origen</li>
              <li><strong>Archivos abiertos:</strong> No se pueden mover si están en uso</li>
              <li><strong>Permisos:</strong> Verificar permisos de escritura en destino</li>
              <li><strong>Deshacer:</strong> Ctrl + Z para revertir operación</li>
            </ul>
          </div>

          <h4>✏️ Renombrar Archivos y Carpetas</h4>
          <div class="renombrar-archivos">
            <h5>📝 Métodos de Renombrado:</h5>
            
            <h6>Método 1: Tecla F2</h6>
            <ol>
              <li>Seleccionar archivo o carpeta</li>
              <li>Presionar <strong>F2</strong></li>
              <li>Escribir nuevo nombre</li>
              <li>Presionar Enter para confirmar</li>
            </ol>

            <h6>Método 2: Clic Derecho</h6>
            <ol>
              <li>Clic derecho en elemento</li>
              <li>Seleccionar "Cambiar nombre"</li>
              <li>Editar nombre</li>
              <li>Enter para confirmar</li>
            </ol>

            <h6>Método 3: Doble Clic Lento</h6>
            <ol>
              <li>Clic para seleccionar</li>
              <li>Esperar 1 segundo</li>
              <li>Clic nuevamente en el nombre</li>
              <li>Editar y confirmar</li>
            </ol>

            <h6>Método 4: Cinta de Opciones</h6>
            <ol>
              <li>Seleccionar elemento</li>
              <li>Inicio → Cambiar nombre</li>
              <li>Editar texto</li>
              <li>Enter para confirmar</li>
            </ol>

            <h5>📋 Reglas para Nombres de Archivo:</h5>
            <ul>
              <li><strong>Caracteres prohibidos:</strong> / \\ : * ? " < > |</li>
              <li><strong>Nombres reservados:</strong> CON, PRN, AUX, NUL, COM1-9, LPT1-9</li>
              <li><strong>Longitud máxima:</strong> 255 caracteres</li>
              <li><strong>Extensiones:</strong> Mejor mantener extensión original</li>
              <li><strong>Sensibilidad:</strong> Windows no distingue mayúsculas/minúsculas</li>
            </ul>

            <h5>💡 Mejores Prácticas:</h5>
            <ul>
              <li><strong>Nombres descriptivos:</strong> "Informe_Ventas_Marzo_2024.xlsx"</li>
              <li><strong>Fechas consistentes:</strong> YYYY-MM-DD para ordenación</li>
              <li><strong>Versiones:</strong> "_v1", "_v2", "_final" para control de versiones</li>
              <li><strong>Sin espacios:</strong> Usar guiones o guiones bajos</li>
            </ul>
          </div>

          <h4>🗑️ Eliminar Archivos y Carpetas</h4>
          <div class="eliminar-archivos">
            <h5>🗂️ Métodos de Eliminación:</h5>
            
            <h6>Eliminación Normal (a Papelera):</h6>
            <ul>
              <li><strong>Tecla Delete:</strong> Envía a papelera de reciclaje</li>
              <li><strong>Clic derecho → Eliminar:</strong> Mismo efecto</li>
              <li><strong>Arrastrar a papelera:</strong> Desde escritorio</li>
              <li><strong>Inicio → Eliminar:</strong> Desde cinta de opciones</li>
            </ul>

            <h6>Eliminación Permanente:</h6>
            <ul>
              <li><strong>Shift + Delete:</strong> Elimina permanentemente</li>
              <li><strong>Archivos muy grandes:</strong> Windows puede preguntar</li>
              <li><strong>Unidades externas:</strong> Algunos se eliminan permanentemente</li>
            </ul>

            <h5>⚠️ Advertencias de Seguridad:</h5>
            <ul>
              <li><strong>Confirmación:</strong> Windows siempre pregunta antes de eliminar</li>
              <li><strong>Múltiples archivos:</strong> Confirmar que son los correctos</li>
              <li><strong>Carpetas:</strong> Se elimina todo el contenido recursivamente</li>
              <li><strong>Recuperación:</strong> Archivos en papelera son recuperables</li>
            </ul>

            <h5>🔄 Restaurar desde Papelera:</h5>
            <ol>
              <li>Abrir Papelera de reciclaje</li>
              <li>Localizar archivo eliminado</li>
              <li>Clic derecho → "Restaurar"</li>
              <li>Archivo vuelve a ubicación original</li>
            </ol>
          </div>

          <h4>🔍 Búsqueda Avanzada</h4>
          <div class="busqueda-avanzada">
            <h5>🎯 Tipos de Búsqueda:</h5>
            
            <h6>Búsqueda Básica:</h6>
            <ol>
              <li>Usar cuadro de búsqueda en explorador</li>
              <li>Escribir nombre completo o parcial</li>
              <li>Windows busca en carpeta actual y subcarpetas</li>
            </ol>

            <h6>Búsqueda por Comodines:</h6>
            <ul>
              <li><strong>*.txt:</strong> Todos los archivos de texto</li>
              <li><strong>foto*:</strong> Archivos que empiecen con "foto"</li>
              <li><strong>*2024*:</strong> Archivos que contengan "2024"</li>
            </ul>

            <h6>Filtros de Búsqueda:</h6>
            <ul>
              <li><strong>tipo:imagen:</strong> Solo archivos de imagen</li>
              <li><strong>fecha:esta semana:</strong> Archivos de la semana</li>
              <li><strong>tamaño:grande:</strong> Archivos grandes</li>
              <li><strong>autor:juan:</strong> Archivos creados por Juan</li>
            </ul>

            <h5>🔧 Búsqueda desde Menú Inicio:</h5>
            <ul>
              <li><strong>Alcance global:</strong> Busca en todo el sistema</li>
              <li><strong>Integración web:</strong> Resultados de internet</li>
              <li><strong>Configuraciones:</strong> Encuentra ajustes del sistema</li>
              <li><strong>Aplicaciones:</strong> Programas instalados</li>
            </ul>

            <h5>💡 Consejos de Búsqueda:</h5>
            <ul>
              <li><strong>Palabras clave específicas:</strong> Usar términos únicos</li>
              <li><strong>Filtros combinados:</strong> Usar múltiples criterios</li>
              <li><strong>Guardar búsquedas:</strong> Para consultas frecuentes</li>
              <li><strong>Indexación:</strong> Verificar que ubicaciones estén indexadas</li>
            </ul>
          </div>

          <h4>⚡ Atajos de Productividad</h4>
          <ul>
            <li><strong>Ctrl + C/X/V:</strong> Copiar/Cortar/Pegar</li>
            <li><strong>Ctrl + Z:</strong> Deshacer última operación</li>
            <li><strong>Ctrl + A:</strong> Seleccionar todo</li>
            <li><strong>F2:</strong> Renombrar elemento seleccionado</li>
            <li><strong>Delete:</strong> Enviar a papelera</li>
            <li><strong>Shift + Delete:</strong> Eliminar permanentemente</li>
            <li><strong>Alt + Enter:</strong> Propiedades del elemento</li>
            <li><strong>Ctrl + Shift + N:</strong> Nueva carpeta</li>
          </ul>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/operaciones-archivos-carpetas.jpg",
        infografia: "/images/teoria/atajos-explorador-windows.png",
        video: "/videos/operaciones-basicas-archivos.mp4"
      },
      actividades: [
        {
          tipo: "practica",
          pregunta: "Practica todas las operaciones: copia 3 archivos, mueve 2 carpetas, renombra 1 elemento",
          ayuda: "Usa diferentes métodos para cada operación: atajos de teclado, clic derecho, arrastrar"
        },
        {
          tipo: "busqueda",
          pregunta: "Encuentra todos los archivos .jpg en tu carpeta de Imágenes usando búsqueda avanzada",
          ayuda: "En el cuadro de búsqueda escribe: *.jpg o tipo:imagen"
        }
      ]
    }
  ],
  recursos: {
    documentos: [
      {
        titulo: "Guía Completa del Explorador de Windows",
        url: "/docs/explorador-windows-completo.pdf",
        tipo: "pdf"
      },
      {
        titulo: "Manual de Operaciones con Archivos",
        url: "/docs/operaciones-archivos-manual.pdf",
        tipo: "pdf"
      },
      {
        titulo: "Tipos de Archivo y Extensiones",
        url: "/docs/tipos-archivo-extensiones.pdf",
        tipo: "pdf"
      }
    ],
    enlaces: [
      {
        titulo: "Soporte Microsoft - Explorador de Archivos",
        url: "https://support.microsoft.com/es-es/windows/explorador-de-archivos-de-windows",
        tipo: "externo"
      },
      {
        titulo: "Organización de Archivos - Mejores Prácticas",
        url: "https://support.microsoft.com/es-es/office/organizar-archivos-carpetas",
        tipo: "externo"
      },
      {
        titulo: "Búsqueda Avanzada en Windows",
        url: "https://support.microsoft.com/es-es/windows/buscar-windows",
        tipo: "externo"
      }
    ],
    videos: [
      {
        titulo: "Maestría del Explorador de Windows",
        url: "/videos/maestria-explorador-windows.mp4",
        duracion: "22:15"
      },
      {
        titulo: "Organización Avanzada de Archivos",
        url: "/videos/organizacion-archivos-avanzada.mp4",
        duracion: "18:30"
      },
      {
        titulo: "Búsqueda y Filtrado Eficiente",
        url: "/videos/busqueda-filtrado-eficiente.mp4",
        duracion: "14:45"
      }
    ]
  },
  evaluacion: {
    tipo: "cuestionario",
    preguntas: [
      {
        pregunta: "¿Qué atajo de teclado abre el Explorador de Windows?",
        tipo: "opcion_multiple",
        opciones: [
          "Windows + F",
          "Windows + E",
          "Ctrl + E",
          "Alt + E"
        ],
        respuestaCorrecta: 1
      },
      {
        pregunta: "¿Cuál es la diferencia entre copiar (Ctrl+C) y cortar (Ctrl+X)?",
        tipo: "opcion_multiple",
        opciones: [
          "No hay diferencia, ambos hacen lo mismo",
          "Copiar mantiene el original, cortar lo elimina del origen",
          "Cortar mantiene el original, copiar lo elimina",
          "Solo se puede usar uno de los dos"
        ],
        respuestaCorrecta: 1
      },
      {
        pregunta: "¿Qué vista del Explorador es mejor para ver información detallada de archivos?",
        tipo: "opcion_multiple",
        opciones: [
          "Iconos grandes",
          "Lista",
          "Detalles",
          "Mosaicos"
        ],
        respuestaCorrecta: 2
      },
      {
        pregunta: "¿Cómo se puede renombrar un archivo rápidamente?",
        tipo: "opcion_multiple",
        opciones: [
          "Solo con clic derecho → Cambiar nombre",
          "Seleccionar archivo y presionar F2",
          "Doble clic en el archivo",
          "No se puede renombrar archivos en Windows"
        ],
        respuestaCorrecta: 1
      },
      {
        pregunta: "¿Qué sucede cuando arrastras un archivo entre diferentes unidades (C: a D:)?",
        tipo: "opcion_multiple",
        opciones: [
          "Se mueve automáticamente",
          "Se copia automáticamente",
          "No se puede hacer",
          "Siempre se elimina"
        ],
        respuestaCorrecta: 1
      }
    ]
  }
};
