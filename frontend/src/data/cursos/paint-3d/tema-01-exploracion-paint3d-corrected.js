/**
 * Tema 1: Exploración de Paint 3D
 * Curso: Diseñador Gráfico Paint 3D
 */

const tema01ExploracionPaint3D = {
  id: '1',
  titulo: "Exploración de Paint 3D",
  tematica: "Entorno, herramientas y funcionalidades", 
  duracion: "50-70 minutos",
  objetivos: [
    "Familiarizarse con la interfaz moderna de Paint 3D",
    "Dominar la navegación en el espacio tridimensional", 
    "Identificar y utilizar las herramientas principales",
    "Configurar vistas y perspectivas para el trabajo 3D",
    "Comprender los conceptos básicos del diseño tridimensional",
    "Realizar las primeras creaciones 3D simples"
  ],
  secciones: [
    {
      id: 1,
      titulo: "Introducción a Paint 3D",
      contenido: `
        <h3>🎨 Descubriendo Paint 3D</h3>
        <p>Paint 3D representa una evolución revolucionaria del tradicional Paint de Windows, llevando la creatividad digital a una nueva dimensión. Esta herramienta intuitiva permite a usuarios de todos los niveles crear, manipular y animar objetos tridimensionales sin necesidad de conocimientos técnicos avanzados.</p>
        
        <h4>Características principales:</h4>
        <ul>
          <li><strong>Diseño 3D intuitivo:</strong> Crear objetos tridimensionales sin conocimientos técnicos</li>
          <li><strong>Integración con realidad mixta:</strong> Compatible con Windows Mixed Reality</li>
          <li><strong>Comunidad creativa:</strong> Acceso a Remix 3D para compartir y descargar modelos</li>
          <li><strong>Exportación versátil:</strong> Formatos 2D y 3D para diferentes usos</li>
          <li><strong>Animación básica:</strong> Herramientas para dar vida a las creaciones</li>
        </ul>

        <h4>Diferencias con Paint tradicional:</h4>
        <ul>
          <li>Espacio de trabajo tridimensional</li>
          <li>Herramientas de modelado y extrusión</li>
          <li>Efectos de iluminación y materiales</li>
          <li>Capacidad de rotación y perspectiva</li>
          <li>Integración con servicios en la nube</li>
        </ul>
      `,
      actividades: [
        {
          tipo: "exploracion",
          instruccion: "Abre Paint 3D y explora la pantalla de inicio. ¿Qué opciones de plantillas encuentras?",
          tiempo: "5 minutos"
        }
      ]
    },
    {
      id: 2,
      titulo: "Interfaz y área de trabajo",
      contenido: `
        <h3>🖥️ Navegando la interfaz de Paint 3D</h3>
        <p>La interfaz de Paint 3D está diseñada para ser intuitiva y accesible, organizando las herramientas de manera lógica para el flujo de trabajo 3D.</p>
        
        <h4>Componentes principales:</h4>
        <ul>
          <li><strong>Barra de herramientas superior:</strong> Acceso rápido a funciones principales</li>
          <li><strong>Panel de herramientas lateral:</strong> Herramientas organizadas por categorías</li>
          <li><strong>Lienzo 3D central:</strong> Área de trabajo tridimensional</li>
          <li><strong>Controles de vista:</strong> Navegación y perspectiva del espacio 3D</li>
          <li><strong>Panel de propiedades:</strong> Configuración de objetos seleccionados</li>
        </ul>

        <h4>Categorías de herramientas:</h4>
        <ul>
          <li><strong>Pinceles:</strong> Herramientas de dibujo 2D tradicionales</li>
          <li><strong>Formas 2D:</strong> Figuras geométricas planas</li>
          <li><strong>Formas 3D:</strong> Objetos tridimensionales básicos</li>
          <li><strong>Pegatinas:</strong> Imágenes y texturas aplicables</li>
          <li><strong>Texto:</strong> Herramientas de tipografía 2D y 3D</li>
          <li><strong>Efectos:</strong> Filtros y modificadores visuales</li>
        </ul>
      `,
      actividades: [
        {
          tipo: "practica",
          instruccion: "Identifica cada sección de la interfaz y haz clic en cada categoría de herramientas para ver sus opciones",
          tiempo: "10 minutos"
        }
      ]
    },
    {
      id: 3,
      titulo: "Navegación en el espacio 3D",
      contenido: `
        <h3>🧭 Dominando el espacio tridimensional</h3>
        <p>Navegar en el espacio 3D es fundamental para trabajar efectivamente con Paint 3D. Los controles son intuitivos y permiten explorar tus creaciones desde cualquier ángulo.</p>
        
        <h4>Controles de navegación:</h4>
        <ul>
          <li><strong>Rotación:</strong> Clic y arrastrar para rotar la vista</li>
          <li><strong>Zoom:</strong> Rueda del ratón o gestos de pellizco</li>
          <li><strong>Panorámica:</strong> Clic derecho y arrastrar para mover la vista</li>
          <li><strong>Vista orbital:</strong> Girar alrededor de un punto central</li>
          <li><strong>Vistas predefinidas:</strong> Frente, lateral, superior, perspectiva</li>
        </ul>

        <h4>Vistas especiales:</h4>
        <ul>
          <li><strong>Vista de cámara:</strong> Perspectiva realista del espacio</li>
          <li><strong>Vista ortogonal:</strong> Sin distorsión de perspectiva</li>
          <li><strong>Vista de rayos X:</strong> Ver a través de objetos</li>
          <li><strong>Vista de malla:</strong> Estructura wireframe de objetos</li>
        </ul>

        <div class="tip-importante">
          <h4>💡 Consejo importante</h4>
          <p>Acostúmbrate a rotar frecuentemente tu vista para trabajar cómodamente desde diferentes ángulos. Esto es especialmente útil al modelar detalles específicos.</p>
        </div>
      `,
      actividades: [
        {
          tipo: "practica",
          instruccion: "Practica todos los controles de navegación con un objeto 3D básico (cubo o esfera)",
          tiempo: "15 minutos"
        }
      ]
    },
    {
      id: 4,
      titulo: "Herramientas básicas 3D",
      contenido: `
        <h3>🛠️ Herramientas fundamentales para crear en 3D</h3>
        <p>Paint 3D ofrece un conjunto de herramientas diseñadas específicamente para la creación tridimensional, desde formas básicas hasta herramientas de modificación avanzadas.</p>
        
        <h4>Formas 3D básicas:</h4>
        <ul>
          <li><strong>Cubo:</strong> Forma base para arquitectura y objetos regulares</li>
          <li><strong>Esfera:</strong> Ideal para objetos orgánicos y redondos</li>
          <li><strong>Cilindro:</strong> Perfecto para columnas, tuberías y formas circulares</li>
          <li><strong>Cono:</strong> Útil para techos, montañas y formas puntiagudas</li>
          <li><strong>Cápsula:</strong> Combinación de cilindro y esferas en los extremos</li>
        </ul>

        <h4>Herramientas de modificación:</h4>
        <ul>
          <li><strong>Seleccionar:</strong> Elegir y mover objetos en el espacio</li>
          <li><strong>Escalar:</strong> Cambiar el tamaño de objetos uniformemente</li>
          <li><strong>Rotar:</strong> Girar objetos en cualquier eje</li>
          <li><strong>Duplicar:</strong> Crear copias de objetos existentes</li>
          <li><strong>Eliminar:</strong> Borrar objetos seleccionados</li>
        </ul>

        <h4>Herramientas avanzadas:</h4>
        <ul>
          <li><strong>Doodle 3D:</strong> Convertir dibujos 2D en objetos 3D</li>
          <li><strong>Formas suaves:</strong> Objetos orgánicos modelables</li>
          <li><strong>Herramientas de corte:</strong> Dividir y recortar objetos</li>
          <li><strong>Herramientas de unión:</strong> Combinar múltiples objetos</li>
        </ul>
      `,
      actividades: [
        {
          tipo: "proyecto",
          instruccion: "Crea una casa simple usando solo formas 3D básicas (cubos para paredes, triángulo para techo, cilindro para chimenea)",
          tiempo: "20 minutos"
        }
      ]
    }
  ],
  actividades: [
    {
      id: "actividad-1",
      titulo: "Exploración guiada de la interfaz",
      descripcion: "Familiarízate con todos los elementos de la interfaz de Paint 3D",
      instrucciones: [
        "Abre Paint 3D desde el menú de inicio",
        "Explora cada sección de herramientas haciendo clic en sus íconos",
        "Practica los controles de navegación 3D",
        "Crea un objeto simple usando formas 3D básicas",
        "Guarda tu primer proyecto"
      ],
      duracion: "20 minutos",
      dificultad: "Básico"
    },
    {
      id: "actividad-2", 
      titulo: "Primera creación 3D",
      descripcion: "Construye tu primer objeto 3D combinando formas básicas",
      instrucciones: [
        "Crea un muñeco de nieve usando 3 esferas de diferentes tamaños",
        "Añade detalles usando formas pequeñas (cilindros para brazos, conos para nariz)",
        "Practica mover, escalar y rotar cada elemento",
        "Experimenta con diferentes vistas para ver tu creación",
        "Toma una captura desde el mejor ángulo"
      ],
      duracion: "30 minutos",
      dificultad: "Intermedio"
    }
  ],
  recursos: {
    documentos: [
      {
        tipo: "tutorial",
        titulo: "Primeros pasos en 3D",
        descripcion: "Guía paso a paso para crear tu primer proyecto",
        url: "#"
      }
    ],
    enlaces: [],
    videos: [
      {
        titulo: "Tour completo de Paint 3D",
        descripcion: "Video oficial de Microsoft mostrando las características principales",
        url: "#",
        duracion: "10 min"
      }
    ]
  },
  evaluacion: {
    tipo: "practica",
    titulo: "Evaluación: Dominio de herramientas básicas",
    descripcion: "Demuestra tu comprensión de la interfaz y herramientas de Paint 3D",
    criterios: [
      {
        aspecto: "Navegación en interfaz",
        descripcion: "Capacidad para navegar eficientemente por las herramientas",
        puntos: 25
      },
      {
        aspecto: "Controles 3D",
        descripcion: "Dominio de rotación, zoom y panorámica en el espacio 3D",
        puntos: 25
      },
      {
        aspecto: "Uso de formas básicas",
        descripcion: "Crear y modificar objetos usando formas 3D básicas",
        puntos: 25
      },
      {
        aspecto: "Organización del trabajo",
        descripcion: "Capacidad para organizar y gestionar elementos en el proyecto",
        puntos: 25
      }
    ]
  },
  glosario: [
    {
      termino: "Paint 3D",
      definicion: "Aplicación de Microsoft para crear y editar contenido tridimensional de forma intuitiva"
    },
    {
      termino: "Espacio 3D",
      definicion: "Entorno virtual tridimensional donde se pueden crear y manipular objetos con volumen"
    },
    {
      termino: "Navegación orbital",
      definicion: "Técnica de movimiento de cámara que gira alrededor de un punto central fijo"
    },
    {
      termino: "Formas 3D básicas",
      definicion: "Objetos geométricos fundamentales como cubos, esferas y cilindros"
    },
    {
      termino: "Vista ortogonal",
      definicion: "Perspectiva sin distorsión donde las líneas paralelas permanecen paralelas"
    }
  ]
};

export default tema01ExploracionPaint3D;
