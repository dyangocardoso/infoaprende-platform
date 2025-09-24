/**
 * Tema 1: Primeros pasos en PowerPoint
 * Curso: Diseñador de Presentaciones PowerPoint
 */

export default {
  id: '1',
  titulo: "Primeros pasos",
  tematica: "Inicio y guardado de presentaciones",
  duracion: "20-25 minutos",
  objetivos: [
    "Comprender qué es Microsoft PowerPoint y sus usos principales",
    "Conocer la evolución de las herramientas de presentación",
    "Familiarizarse con la interfaz básica de PowerPoint",
    "Dominar operaciones básicas: crear, abrir, guardar y gestionar presentaciones",
    "Entender conceptos fundamentales de diapositivas y presentaciones"
  ],
  secciones: [
    {
      id: 1,
      titulo: "¿Qué es Microsoft PowerPoint?",
      contenido: `
        <h3>🎯 Introducción a PowerPoint</h3>
        
        <div class="definicion-powerpoint">
          <h4>📊 ¿Qué es Microsoft PowerPoint?</h4>
          <p><strong>Microsoft PowerPoint</strong> es una aplicación de software especializada en la creación, edición y presentación de diapositivas multimedia. Es una herramienta fundamental para comunicar ideas de manera visual y estructurada.</p>
          
          <div class="caracteristicas-principales">
            <h5>🌟 Características Principales</h5>
            <ul>
              <li><strong>Presentaciones por diapositivas:</strong> Organización secuencial de contenido</li>
              <li><strong>Multimedia integrada:</strong> Texto, imágenes, audio, video y animaciones</li>
              <li><strong>Plantillas profesionales:</strong> Diseños prediseñados para diferentes propósitos</li>
              <li><strong>Herramientas de diseño:</strong> Elementos gráficos, formas, gráficos y tablas</li>
              <li><strong>Transiciones y animaciones:</strong> Efectos dinámicos para captar atención</li>
              <li><strong>Colaboración:</strong> Trabajo en equipo y comentarios en tiempo real</li>
            </ul>
          </div>
        </div>

        <div class="usos-powerpoint">
          <h4>🎯 Usos Principales de PowerPoint</h4>
          
          <div class="contextos-uso">
            <div class="uso-categoria">
              <h5>🎓 Educativo</h5>
              <ul>
                <li>Presentaciones de clase y conferencias magistrales</li>
                <li>Exposiciones de estudiantes y proyectos académicos</li>
                <li>Material didáctico interactivo y visual</li>
                <li>Defensa de tesis y trabajos de investigación</li>
              </ul>
            </div>

            <div class="uso-categoria">
              <h5>💼 Empresarial</h5>
              <ul>
                <li>Presentaciones de ventas y propuestas comerciales</li>
                <li>Informes ejecutivos y reportes de gestión</li>
                <li>Capacitaciones corporativas y entrenamientos</li>
                <li>Presentación de resultados y análisis de datos</li>
              </ul>
            </div>

            <div class="uso-categoria">
              <h5>🎨 Creativo</h5>
              <ul>
                <li>Portfolios digitales y galerías de arte</li>
                <li>Presentaciones de proyectos creativos</li>
                <li>Infografías y contenido para redes sociales</li>
                <li>Presentaciones artísticas y culturales</li>
              </ul>
            </div>

            <div class="uso-categoria">
              <h5>👥 Personal</h5>
              <ul>
                <li>Álbumes de fotos familiares y eventos especiales</li>
                <li>Presentaciones para bodas y celebraciones</li>
                <li>CV interactivos y presentaciones personales</li>
                <li>Documentación de viajes y experiencias</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="ventajas-powerpoint">
          <h4>✅ Ventajas de usar PowerPoint</h4>
          
          <div class="beneficios-grid">
            <div class="beneficio">
              <h5>🎨 Comunicación Visual Efectiva</h5>
              <p>Transforma ideas complejas en contenido visual fácil de entender y recordar</p>
            </div>

            <div class="beneficio">
              <h5>⚡ Facilidad de Uso</h5>
              <p>Interfaz intuitiva que permite crear presentaciones profesionales sin conocimientos técnicos avanzados</p>
            </div>

            <div class="beneficio">
              <h5>🔄 Flexibilidad Total</h5>
              <p>Adaptable a cualquier audiencia, tema o estilo de presentación</p>
            </div>

            <div class="beneficio">
              <h5>🌐 Compatibilidad Universal</h5>
              <p>Estándar reconocido mundialmente, compatible con múltiples plataformas y dispositivos</p>
            </div>

            <div class="beneficio">
              <h5>👥 Impacto en Audiencia</h5>
              <p>Mantiene la atención del público y facilita la retención de información clave</p>
            </div>
          </div>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/powerpoint-introduccion.jpg",
        video: "/videos/teoria/que-es-powerpoint.mp4",
        infografia: "/images/teoria/usos-powerpoint.png"
      },
      actividades: [
        {
          tipo: "reflexion",
          pregunta: "¿Has usado PowerPoint antes? ¿Para qué tipo de presentaciones lo has utilizado?",
          ayuda: "Piensa en exposiciones escolares, presentaciones de trabajo, álbumes familiares, etc."
        },
        {
          tipo: "investigacion",
          pregunta: "Busca en internet 3 ejemplos de presentaciones PowerPoint exitosas. ¿Qué las hace efectivas?",
          ayuda: "Observa el diseño, uso de imágenes, cantidad de texto, estructura, etc."
        }
      ]
    },
    {
      id: 2,
      titulo: "Historia y Evolución de las Presentaciones",
      contenido: `
        <h3>📈 La Revolución de las Presentaciones Digitales</h3>
        
        <div class="historia-presentaciones">
          <h4>🕰️ Línea de Tiempo: De las Transparencias al Digital</h4>
          
          <div class="timeline-presentaciones">
            <div class="periodo-historico">
              <h5>📜 Era Pre-Digital (Antes de 1980)</h5>
              <ul>
                <li><strong>Transparencias:</strong> Láminas plásticas proyectadas con retroproyector</li>
                <li><strong>Diapositivas 35mm:</strong> Fotografías proyectadas en carrusel</li>
                <li><strong>Rotafolios:</strong> Presentaciones manuales con papel y marcadores</li>
                <li><strong>Pizarras:</strong> Escritura en tiempo real para explicaciones</li>
                <li><strong>Limitaciones:</strong> Difícil edición, transportación complicada, calidad variable</li>
              </ul>
            </div>

            <div class="periodo-historico">
              <h5>💻 Nacimiento Digital (1980-1990)</h5>
              <ul>
                <li><strong>1984 - Forethought:</strong> Primera empresa en desarrollar software de presentación</li>
                <li><strong>1987 - Microsoft adquiere PowerPoint:</strong> Integración al ecosistema Office</li>
                <li><strong>PowerPoint 1.0:</strong> Solo texto en blanco y negro para Macintosh</li>
                <li><strong>Innovación:</strong> Posibilidad de editar y reutilizar fácilmente</li>
                <li><strong>Impacto:</strong> Democratización de las presentaciones profesionales</li>
              </ul>
            </div>

            <div class="periodo-historico">
              <h5>🎨 Era del Color y Multimedia (1990-2000)</h5>
              <ul>
                <li><strong>PowerPoint 2.0-3.0:</strong> Incorporación de color y gráficos básicos</li>
                <li><strong>PowerPoint 4.0:</strong> Transiciones entre diapositivas</li>
                <li><strong>PowerPoint 95-97:</strong> Animaciones, sonido, y video</li>
                <li><strong>Plantillas profesionales:</strong> Diseños predefinidos para diferentes industrias</li>
                <li><strong>Revolución:</strong> De texto plano a experiencias multimedia</li>
              </ul>
            </div>

            <div class="periodo-historico">
              <h5>🌐 Era de Internet y Colaboración (2000-2010)</h5>
              <ul>
                <li><strong>PowerPoint 2000-2003:</strong> Integración web y publicación online</li>
                <li><strong>PowerPoint 2007:</strong> Nueva interfaz Ribbon, mejores gráficos</li>
                <li><strong>Formatos modernos:</strong> Introducción del formato .pptx</li>
                <li><strong>Colaboración básica:</strong> Comentarios y revisiones</li>
              </ul>
            </div>

            <div class="periodo-historico">
              <h5>☁️ Era Moderna y en la Nube (2010-Presente)</h5>
              <ul>
                <li><strong>PowerPoint Online:</strong> Edición desde cualquier navegador</li>
                <li><strong>Aplicaciones móviles:</strong> PowerPoint para iOS y Android</li>
                <li><strong>OneDrive integración:</strong> Sincronización automática en la nube</li>
                <li><strong>Colaboración tiempo real:</strong> Edición simultánea de múltiples usuarios</li>
                <li><strong>IA integrada:</strong> Sugerencias de diseño automático (Designer)</li>
                <li><strong>Presentaciones interactivas:</strong> Q&A en vivo, encuestas, reacciones</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="competencia-alternativas">
          <h4>🏆 PowerPoint vs Alternativas Modernas</h4>
          
          <div class="comparacion-herramientas">
            <div class="herramienta-comparacion">
              <h5>🎯 Google Slides</h5>
              <ul>
                <li><strong>Ventajas:</strong> Gratuito, colaboración excelente, acceso universal</li>
                <li><strong>Desventajas:</strong> Menos funciones avanzadas, dependiente de internet</li>
              </ul>
            </div>

            <div class="herramienta-comparacion">
              <h5>🎨 Prezi</h5>
              <ul>
                <li><strong>Ventajas:</strong> Presentaciones no-lineales, efectos zoom dinámico</li>
                <li><strong>Desventajas:</strong> Curva de aprendizaje, puede marear audiencia</li>
              </ul>
            </div>

            <div class="herramienta-comparacion">
              <h5>📱 Canva</h5>
              <ul>
                <li><strong>Ventajas:</strong> Diseños muy atractivos, fácil de usar</li>
                <li><strong>Desventajas:</strong> Limitado para presentaciones complejas</li>
              </ul>
            </div>

            <div class="herramienta-comparacion">
              <h5>💼 PowerPoint (Fortalezas actuales)</h5>
              <ul>
                <li><strong>Madurez:</strong> 35+ años de desarrollo y refinamiento</li>
                <li><strong>Ecosistema:</strong> Integración perfecta con Office</li>
                <li><strong>Funcionalidad:</strong> Balance perfecto entre facilidad y poder</li>
                <li><strong>Profesionalidad:</strong> Estándar en entornos corporativos y académicos</li>
                <li><strong>Integración:</strong> Perfecta sincronización con ecosistema Microsoft</li>
                <li><strong>Profesionalidad:</strong> Estándar en entornos corporativos y académicos</li>
                <li><strong>Funcionalidad:</strong> Balance óptimo entre facilidad y potencia</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="tendencias-futuro">
          <h4>🚀 Tendencias y Futuro de las Presentaciones</h4>
          
          <div class="tendencias-emergentes">
            <div class="tendencia">
              <h5>🤖 Inteligencia Artificial</h5>
              <ul>
                <li>Generación automática de contenido y diseños</li>
                <li>Transcripción y traducción en tiempo real</li>
                <li>Análisis de engagement de audiencia</li>
                <li>Optimización automática de elementos visuales</li>
              </ul>
            </div>

            <div class="tendencia">
              <h5>🥽 Realidad Virtual y Aumentada</h5>
              <ul>
                <li>Presentaciones inmersivas en espacios 3D</li>
                <li>Interacción directa con elementos virtuales</li>
                <li>Audiencias remotas en espacios compartidos</li>
                <li>Visualización de datos en tres dimensiones</li>
              </ul>
            </div>

            <div class="tendencia">
              <h5>📱 Adaptabilidad Multi-dispositivo</h5>
              <ul>
                <li>Experiencias optimizadas para cada pantalla</li>
                <li>Sincronización automática entre dispositivos</li>
                <li>Control remoto avanzado desde smartphones</li>
                <li>Presentaciones interactivas en tiempo real</li>
              </ul>
            </div>
          </div>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/historia-presentaciones.jpg",
        video: "/videos/teoria/evolucion-powerpoint.mp4",
        infografia: "/images/teoria/timeline-presentaciones.png"
      },
      actividades: [
        {
          tipo: "investigacion",
          pregunta: "Investiga sobre una presentación histórica famosa (ej: Steve Jobs presentando iPhone). ¿Qué técnicas usó para ser efectiva?",
          ayuda: "Busca en YouTube presentaciones icónicas y analiza estructura, storytelling, uso de tecnología"
        },
        {
          tipo: "comparacion",
          pregunta: "Compara PowerPoint con una alternativa moderna (Google Slides, Prezi, Canva). ¿Cuáles son las principales diferencias?",
          ayuda: "Prueba crear una presentación simple en ambas herramientas y anota las diferencias"
        }
      ]
    },
    {
      id: 3,
      titulo: "Interfaz y Familiarización",
      contenido: `
        <h3>🖥️ Navegando la Interfaz de PowerPoint</h3>
        
        <div class="anatomia-interfaz">
          <h4>🧭 Anatomía de la Interfaz de PowerPoint</h4>
          
          <div class="componentes-interfaz">
            <div class="componente-ui">
              <h5>📊 Barra de Título</h5>
              <ul>
                <li><strong>Ubicación:</strong> Parte superior de la ventana</li>
                <li><strong>Función:</strong> Muestra el nombre del archivo y controles de ventana</li>
                <li><strong>Controles:</strong> Minimizar, maximizar, cerrar</li>
                <li><strong>Información:</strong> Estado del archivo (guardado, modificado)</li>
              </ul>
            </div>

            <div class="componente-ui">
              <h5>🎛️ Cinta de Opciones (Ribbon)</h5>
              <ul>
                <li><strong>Inicio:</strong> Formato básico, fuentes, párrafo, dibujo</li>
                <li><strong>Insertar:</strong> Diapositivas, imágenes, formas, gráficos, multimedia</li>
                <li><strong>Diseño:</strong> Temas, variantes, tamaño de diapositiva</li>
                <li><strong>Transiciones:</strong> Efectos entre diapositivas</li>
                <li><strong>Animaciones:</strong> Efectos de entrada, énfasis y salida</li>
                <li><strong>Presentación con diapositivas:</strong> Configuración de presentación</li>
                <li><strong>Revisar:</strong> Ortografía, comentarios, comparación</li>
                <li><strong>Vista:</strong> Modos de visualización y herramientas</li>
              </ul>
            </div>

            <div class="componente-ui">
              <h5>📑 Panel de Diapositivas</h5>
              <ul>
                <li><strong>Ubicación:</strong> Lateral izquierdo</li>
                <li><strong>Función:</strong> Navegación y organización de diapositivas</li>
                <li><strong>Características:</strong> Vista en miniatura, reordenamiento</li>
                <li><strong>Acciones:</strong> Seleccionar, duplicar, eliminar diapositivas</li>
              </ul>
            </div>

            <div class="componente-ui">
              <h5>🎨 Área de Trabajo</h5>
              <ul>
                <li><strong>Ubicación:</strong> Centro de la pantalla</li>
                <li><strong>Función:</strong> Edición principal de la diapositiva activa</li>
                <li><strong>Elementos:</strong> Texto, imágenes, formas, objetos</li>
                <li><strong>Herramientas:</strong> Zoom, reglas, guías de alineación</li>
              </ul>
            </div>

            <div class="componente-ui">
              <h5>📝 Panel de Notas</h5>
              <ul>
                <li><strong>Ubicación:</strong> Parte inferior</li>
                <li><strong>Función:</strong> Agregar notas del presentador</li>
                <li><strong>Utilidad:</strong> Recordatorios, datos adicionales, guión</li>
                <li><strong>Vista del presentador:</strong> Notas + próxima diapositiva + timer</li>
              </ul>
            </div>
          </div>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/interfaz-powerpoint.jpg",
        video: "/videos/teoria/navegacion-powerpoint.mp4",
        infografia: "/images/teoria/anatomia-powerpoint.png"
      },
      actividades: [
        {
          tipo: "exploracion",
          pregunta: "Abre PowerPoint y explora cada pestaña de la cinta. ¿Qué funciones encuentras más interesantes?",
          ayuda: "Haz clic en cada pestaña y observa las herramientas disponibles sin necesidad de usarlas"
        },
        {
          tipo: "practica",
          pregunta: "Cambia entre las diferentes vistas (Normal, Esquema, Clasificador). ¿Cuándo usarías cada una?",
          ayuda: "Usa los botones en la barra de estado o el menú Vista para cambiar entre vistas"
        }
      ]
    },
    {
      id: 4,
      titulo: "Crear, Abrir y Guardar Presentaciones",
      contenido: `
        <h3>📁 Gestión Básica de Archivos en PowerPoint</h3>
        
        <div class="crear-presentacion">
          <h4>✨ Crear Nueva Presentación</h4>
          
          <div class="metodos-creacion">
            <div class="metodo">
              <h5>🆕 Presentación en Blanco</h5>
              <ol>
                <li>Abrir PowerPoint</li>
                <li>Seleccionar "Presentación en blanco"</li>
                <li>Comenzar con una diapositiva de título limpia</li>
                <li><strong>Cuándo usar:</strong> Control total del diseño desde cero</li>
              </ol>
            </div>

            <div class="metodo">
              <h5>🎨 Desde Plantilla</h5>
              <ol>
                <li>PowerPoint > Nuevo > Buscar plantillas</li>
                <li>Explorar categorías: Negocios, Educación, Diseño</li>
                <li>Previsualizar plantilla antes de seleccionar</li>
                <li>Hacer clic en "Crear" para iniciar con plantilla</li>
                <li><strong>Ventaja:</strong> Diseño profesional predefinido</li>
              </ol>
            </div>

            <div class="metodo">
              <h5>🔍 Desde Búsqueda Online</h5>
              <ul>
                <li>Buscar por palabras clave (ej: "educación", "ventas")</li>
                <li>Filtrar por categoría, color, estilo</li>
                <li>Plantillas gratuitas vs premium (Office 365)</li>
                <li>Actualizaciones automáticas con nuevos diseños</li>
              </ul>
            </div>

            <div class="metodo">
              <h5>📋 Desde Presentación Existente</h5>
              <ul>
                <li>Archivo > Nuevo > "Desde presentación existente"</li>
                <li>Mantiene formato y estructura base</li>
                <li>Útil para series de presentaciones similares</li>
                <li>Editar contenido manteniendo diseño consistente</li>
              </ul>
            </div>
          </div>

          <div class="consejos-creacion">
            <h5>💡 Consejos para Elegir Punto de Partida</h5>
            <ul>
              <li><strong>Presentación en blanco:</strong> Si tienes diseño específico en mente</li>
              <li><strong>Plantilla corporativa:</strong> Para contextos de negocio</li>
              <li><strong>Plantilla educativa:</strong> Para clases y tutoriales</li>
              <li><strong>Plantilla creativa:</strong> Para portfolios y presentaciones artísticas</li>
              <li><strong>Plantilla minimalista:</strong> Para contenido técnico o científico</li>
            </ul>
          </div>
        </div>

        <div class="abrir-presentacion">
          <h4>📂 Abrir Presentaciones Existentes</h4>
          
          <div class="formas-abrir">
            <div class="forma-abrir">
              <h5>💻 Desde el Menú Archivo</h5>
              <ol>
                <li>PowerPoint > Archivo > Abrir</li>
                <li>Navegar a la ubicación del archivo</li>
                <li>Seleccionar archivo .pptx, .ppt, etc.</li>
                <li>Hacer clic en "Abrir"</li>
              </ol>
            </div>

            <div class="forma-abrir">
              <h5>📁 Desde el Explorador de Windows</h5>
              <ul>
                <li>Doble clic en archivo .pptx, .ppt, .potx</li>
                <li>Clic derecho > "Abrir con PowerPoint"</li>
                <li>Arrastrar archivo a icono de PowerPoint</li>
              </ul>
            </div>

            <div class="forma-abrir">
              <h5>☁️ Desde la Nube</h5>
              <ul>
                <li><strong>OneDrive:</strong> Sincronización automática</li>
                <li><strong>SharePoint:</strong> Colaboración empresarial</li>
                <li><strong>Teams:</strong> Archivos compartidos de equipo</li>
                <li><strong>Ventaja:</strong> Acceso desde cualquier dispositivo</li>
              </ul>
            </div>
          </div>

          <div class="formatos-compatibles">
            <h5>📄 Formatos de Archivo Compatibles</h5>
            <ul>
              <li><strong>.pptx:</strong> Formato moderno de PowerPoint (recomendado)</li>
              <li><strong>.ppt:</strong> Formato clásico de PowerPoint (versiones antiguas)</li>
              <li><strong>.potx:</strong> Plantillas de PowerPoint modernas</li>
              <li><strong>.pot:</strong> Plantillas de PowerPoint clásicas</li>
              <li><strong>.ppsx:</strong> Presentaciones de solo lectura</li>
              <li><strong>.pdf:</strong> Importación limitada (solo imagen)</li>
              <li><strong>.odp:</strong> OpenDocument (OpenOffice/LibreOffice)</li>
            </ul>
          </div>
        </div>

        <div class="guardar-presentacion">
          <h4>💾 Guardar Presentaciones</h4>
          
          <div class="tipos-guardado">
            <div class="tipo-guardado">
              <h5>💾 Guardar Básico</h5>
              <ul>
                <li><strong>Ctrl + S:</strong> Atajo rápido</li>
                <li><strong>Archivo > Guardar:</strong> Menú tradicional</li>
                <li><strong>Guardado automático:</strong> Cada 10 minutos (configurable)</li>
                <li><strong>Indicador visual:</strong> Asterisco (*) cuando hay cambios</li>
              </ul>
            </div>

            <div class="tipo-guardado">
              <h5>📁 Guardar Como</h5>
              <ul>
                <li><strong>F12:</strong> Atajo directo</li>
                <li><strong>Cambiar nombre:</strong> Crear nueva versión</li>
                <li><strong>Cambiar ubicación:</strong> Mover a otra carpeta</li>
                <li><strong>Cambiar formato:</strong> .pptx, .pdf, .jpg, etc.</li>
              </ul>
            </div>

            <div class="tipo-guardado">
              <h5>☁️ Guardar en la Nube</h5>
              <ul>
                <li><strong>OneDrive automático:</strong> Sincronización continua</li>
                <li><strong>Acceso múltiple:</strong> Desde cualquier dispositivo</li>
                <li><strong>Historial de versiones:</strong> Recuperar cambios anteriores</li>
                <li><strong>Colaboración:</strong> Compartir con otros usuarios</li>
              </ul>
            </div>
          </div>

          <div class="mejores-practicas">
            <h5>🏆 Mejores Prácticas de Guardado</h5>
            <ul>
              <li><strong>Convención de nombres:</strong> "Fecha_Proyecto_Version" (ej: 2024-03-15_Ventas_v2.pptx)</li>
              <li><strong>Carpetas organizadas:</strong> Por proyecto, fecha o cliente</li>
              <li><strong>Copias de seguridad:</strong> Local + nube para seguridad</li>
              <li><strong>Versionado:</strong> Mantener versiones importantes</li>
              <li><strong>Configurar autoguardado:</strong> Activar en Archivo > Opciones > Guardar</li>
            </ul>
          </div>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/gestion-archivos-powerpoint.jpg",
        video: "/videos/teoria/crear-guardar-presentaciones.mp4"
      },
      actividades: [
        {
          tipo: "practica",
          pregunta: "Crea una nueva presentación desde 3 formas diferentes: en blanco, plantilla, y desde presentación existente",
          ayuda: "Explora las opciones de Nuevo en PowerPoint y prueba cada método"
        },
        {
          tipo: "organizacion",
          pregunta: "Establece una convención de nombres para tus presentaciones y crea una estructura de carpetas organizadas",
          ayuda: "Piensa en cómo organizarías presentaciones por materia, proyecto o fecha"
        },
        {
          tipo: "configuracion",
          pregunta: "Configura el auto-guardado y explora las propiedades de archivo de una presentación",
          ayuda: "Ve a Archivo > Opciones > Guardar para auto-guardado, y Archivo > Información para propiedades"
        }
      ]
    }
  ],
  recursos: {
    documentos: [
      {
        titulo: "Guía Completa de Interfaz PowerPoint",
        tipo: "PDF",
        url: "/recursos/powerpoint/guia-interfaz-powerpoint.pdf"
      },
      {
        titulo: "Manual de Gestión de Archivos",
        tipo: "PDF",
        url: "/recursos/powerpoint/gestion-archivos-powerpoint.pdf"
      },
      {
        titulo: "Plantillas Educativas Básicas",
        tipo: "ZIP",
        url: "/recursos/powerpoint/plantillas-educativas.zip"
      }
    ],
    videos: [
      {
        titulo: "Primeros Pasos en PowerPoint - Guía Completa",
        duracion: "20 min",
        url: "/videos/powerpoint-primeros-pasos.mp4"
      },
      {
        titulo: "Navegación de Interfaz PowerPoint",
        duracion: "12 min",
        url: "/videos/navegacion-powerpoint.mp4"
      },
      {
        titulo: "Crear y Gestionar Presentaciones",
        duracion: "15 min",
        url: "/videos/gestion-presentaciones.mp4"
      }
    ],
    enlaces: [
      {
        titulo: "Plantillas Oficiales de Microsoft",
        url: "https://templates.office.com/es-es/presentations"
      },
      {
        titulo: "Guía de Atajos de Teclado PowerPoint",
        url: "https://support.microsoft.com/es-es/office/usar-métodos-abreviados-de-teclado-para-crear-presentaciones-de-powerpoint"
      },
      {
        titulo: "Centro de Ayuda de PowerPoint",
        url: "https://support.microsoft.com/es-es/powerpoint"
      }
    ]
  },
  evaluacion: {
    tipo: "cuestionario",
    preguntas: [
      {
        pregunta: "¿Cuál es la principal ventaja de PowerPoint sobre las presentaciones tradicionales con transparencias?",
        tipo: "opcion_multiple",
        opciones: [
          "Es más barato",
          "Permite editar y reutilizar fácilmente",
          "Solo funciona en computadoras",
          "No necesita electricidad"
        ],
        respuestaCorrecta: 1
      },
      {
        pregunta: "¿Qué elemento de la interfaz permite navegar entre diapositivas?",
        tipo: "opcion_multiple",
        opciones: [
          "Cinta de opciones",
          "Panel de notas",
          "Panel de diapositivas",
          "Barra de título"
        ],
        respuestaCorrecta: 2
      },
      {
        pregunta: "¿Cuál es el formato de archivo recomendado para PowerPoint moderno?",
        tipo: "opcion_multiple",
        opciones: [
          ".ppt",
          ".pptx",
          ".pdf",
          ".docx"
        ],
        respuestaCorrecta: 1
      }
    ]
  }
};
