/**
 * Tema 5: Exposición creativa
 * Curso: Diseñador Gráfico Paint 3D
 * Versión corregida - Compatible con sistema modular
 */

const tema05ExposicionCreativa = {
  id: '5',
  titulo: "Exposición creativa",
  tematica: "Presentación y portfolio digital",
  duracion: "40-55 minutos",
  objetivos: [
    "Dominar técnicas de presentación profesional",
    "Crear portfolios digitales impactantes",
    "Configurar renderizado y exportación optimizada",
    "Desarrollar identidad visual coherente en proyectos"
  ],
  introduccion: {
    titulo: "La importancia de la presentación",
    contenido: `
      <h3>🎨 El arte de mostrar tu trabajo</h3>
      <p>Una creación excepcional puede perder impacto si no se presenta adecuadamente. La exposición creativa va más allá de simplemente mostrar el resultado final; implica crear una experiencia visual que comunique efectivamente tu proceso, habilidades y visión artística.</p>

      <p>En el mundo digital actual, tu portfolio es tu carta de presentación profesional. Aprender a presentar tus creaciones 3D de manera convincente no solo mejora la percepción de tu trabajo, sino que también te ayuda a desarrollar una mirada crítica sobre tus propias creaciones.</p>

      <p>Este tema te enseñará a transformar tus proyectos de Paint 3D en presentaciones profesionales que destaquen en cualquier contexto, desde redes sociales hasta portafolios académicos o profesionales.</p>

      <h4>Elementos de una presentación exitosa:</h4>
      <ul>
        <li>Composición visual atractiva y profesional</li>
        <li>Narrativa clara del proceso creativo</li>
        <li>Calidad técnica en renderizado y exportación</li>
        <li>Coherencia en el estilo de presentación</li>
      </ul>
    `,
    actividades: [
      {
        tipo: "reflexion",
        instruccion: "Revisa tus proyectos anteriores y evalúa qué aspectos mejorarían con una mejor presentación",
        tiempo: "5 minutos"
      }
    ]
  },
  secciones: [
    {
      id: 1,
      titulo: "Técnicas de renderizado profesional",
      contenido: `
        <h3>📸 Capturando la esencia de tu trabajo</h3>
        
        <h4>Configuración de cámara óptima:</h4>
        
        <h5>Ángulos estratégicos:</h5>
        <ul>
          <li><strong>Vista frontal:</strong> Muestra la forma principal del objeto</li>
          <li><strong>Vista de tres cuartos:</strong> Revela volumen y profundidad</li>
          <li><strong>Vista cenital:</strong> Ideal para objetos planos o patrones</li>
          <li><strong>Perspectiva dramática:</strong> Añade impacto visual</li>
          <li><strong>Vista de detalle:</strong> Resalta texturas y acabados</li>
        </ul>

        <h5>Composición de la toma:</h5>
        <ul>
          <li><strong>Regla de los tercios:</strong> Posiciona elementos clave en puntos de interés</li>
          <li><strong>Espacio negativo:</strong> Permite que el objeto respire</li>
          <li><strong>Enmarcado:</strong> Usa elementos del entorno para enmarcar</li>
          <li><strong>Escala de referencia:</strong> Incluye elementos que den sentido del tamaño</li>
        </ul>

        <h4>Iluminación de estudio:</h4>
        
        <h5>Setup de iluminación profesional:</h5>
        <ul>
          <li><strong>Luz principal (Key Light):</strong> Define forma y volumen (45° desde arriba)</li>
          <li><strong>Luz de relleno (Fill Light):</strong> Suaviza sombras duras (opuesta a principal)</li>
          <li><strong>Contraluz (Rim Light):</strong> Separa objeto del fondo, crea profundidad</li>
          <li><strong>Luz de fondo:</strong> Ilumina suavemente el ambiente</li>
        </ul>

        <h5>Configuración de materiales para renderizado:</h5>
        <ul>
          <li><strong>Reflectividad ajustada:</strong> Evita reflejos excesivos</li>
          <li><strong>Rugosidad optimizada:</strong> Balancea realismo y claridad</li>
          <li><strong>Transparencias controladas:</strong> Mantiene legibilidad</li>
          <li><strong>Emisión estratégica:</strong> Destaca elementos importantes</li>
        </ul>

        <h4>Fondos y ambientación:</h4>
        <ul>
          <li><strong>Fondo neutro:</strong> No compite con el objeto principal</li>
          <li><strong>Fondo degradado:</strong> Añade profundidad sin distracción</li>
          <li><strong>Fondo ambiental:</strong> Proporciona contexto específico</li>
          <li><strong>Fondo temático:</strong> Refuerza la narrativa del objeto</li>
        </ul>

        <div class="setup-profesional">
          <h4>⚡ Setup rápido para resultados profesionales</h4>
          <ol>
            <li>Posiciona el objeto en el centro del lienzo</li>
            <li>Configura luz principal a 45° arriba-derecha</li>
            <li>Añade luz de relleno suave desde la izquierda</li>
            <li>Coloca contraluz detrás del objeto</li>
            <li>Ajusta la cámara a vista de tres cuartos</li>
            <li>Captura múltiples ángulos</li>
          </ol>
        </div>
      `,
      actividades: [
        {
          tipo: "practica",
          instruccion: "Configura un setup de iluminación profesional para uno de tus objetos anteriores y captura 5 ángulos diferentes",
          tiempo: "15 minutos"
        }
      ]
    },
    {
      id: 2,
      titulo: "Composición de portfolios",
      contenido: `
        <h3>📂 Organizando tu trabajo de manera impactante</h3>
        
        <h4>Estructura narrativa del portfolio:</h4>
        
        <h5>Organización por historia:</h5>
        <ul>
          <li><strong>Introducción:</strong> Obra que represente tu estilo</li>
          <li><strong>Desarrollo:</strong> Variedad de técnicas y estilos</li>
          <li><strong>Evolución:</strong> Progresión de habilidades visible</li>
          <li><strong>Especialización:</strong> Fortalezas específicas destacadas</li>
          <li><strong>Innovación:</strong> Proyectos únicos o experimentales</li>
        </ul>

        <h5>Criterios de selección:</h5>
        <ul>
          <li><strong>Calidad sobre cantidad:</strong> 8-12 piezas excepcionales</li>
          <li><strong>Diversidad técnica:</strong> Muestra rango de habilidades</li>
          <li><strong>Coherencia visual:</strong> Estilo de presentación uniforme</li>
          <li><strong>Relevancia del público:</strong> Adaptado a la audiencia objetivo</li>
        </ul>

        <h4>Presentación de proceso creativo:</h4>
        
        <h5>Documentación del desarrollo:</h5>
        <ul>
          <li><strong>Concepto inicial:</strong> Bocetos o ideas originales</li>
          <li><strong>Iteraciones:</strong> Versiones intermedias del proyecto</li>
          <li><strong>Resolución de problemas:</strong> Desafíos superados</li>
          <li><strong>Resultado final:</strong> Múltiples vistas del producto terminado</li>
        </ul>

        <h5>Narrativa visual:</h5>
        <ul>
          <li><strong>Before & After:</strong> Muestra la transformación</li>
          <li><strong>Step by step:</strong> Proceso paso a paso</li>
          <li><strong>Detalles técnicos:</strong> Técnicas específicas utilizadas</li>
          <li><strong>Reflexión:</strong> Aprendizajes y insights obtenidos</li>
        </ul>

        <h4>Formatos de presentación:</h4>
        
        <h5>Portfolio digital:</h5>
        <ul>
          <li><strong>Sitio web personal:</strong> Control total sobre presentación</li>
          <li><strong>Plataformas especializadas:</strong> Behance, ArtStation, Dribbble</li>
          <li><strong>Redes sociales:</strong> Instagram, Twitter para alcance amplio</li>
          <li><strong>PDF interactivo:</strong> Para envío directo a clientes</li>
        </ul>

        <h5>Elementos de apoyo:</h5>
        <ul>
          <li><strong>Descripciones técnicas:</strong> Herramientas y técnicas utilizadas</li>
          <li><strong>Contexto del proyecto:</strong> Objetivos y restricciones</li>
          <li><strong>Duración del proyecto:</strong> Tiempo invertido</li>
          <li><strong>Inspiraciones:</strong> Referencias que influenciaron el trabajo</li>
        </ul>

        <div class="checklist-portfolio">
          <h4>✅ Checklist para portfolio efectivo</h4>
          <ul>
            <li>Cada proyecto tiene al menos 3 vistas diferentes</li>
            <li>Calidad de imagen consistente (mínimo 1920x1080)</li>
            <li>Descripción clara y concisa de cada proyecto</li>
            <li>Información de contacto visible</li>
            <li>Navegación intuitiva y rápida</li>
            <li>Responsive design para dispositivos móviles</li>
          </ul>
        </div>
      `,
      actividades: [
        {
          tipo: "organizacion",
          instruccion: "Organiza tus proyectos del curso en una estructura de portfolio, seleccionando las mejores piezas",
          tiempo: "20 minutos"
        }
      ]
    },
    {
      id: 3,
      titulo: "Exportación y formatos optimizados",
      contenido: `
        <h3>💾 Preparando tu trabajo para diferentes usos</h3>
        
        <h4>Formatos de exportación según uso:</h4>
        
        <h5>Para presentación digital:</h5>
        <ul>
          <li><strong>PNG:</strong> Calidad máxima, fondos transparentes</li>
          <li><strong>JPEG:</strong> Tamaño optimizado, colores ricos</li>
          <li><strong>WebP:</strong> Balance ideal calidad-tamaño para web</li>
          <li><strong>TIFF:</strong> Calidad profesional para impresión</li>
        </ul>

        <h5>Para modelos 3D:</h5>
        <ul>
          <li><strong>3MF:</strong> Formato nativo de Paint 3D, editable</li>
          <li><strong>OBJ:</strong> Compatible con la mayoría de software 3D</li>
          <li><strong>STL:</strong> Ideal para impresión 3D</li>
          <li><strong>FBX:</strong> Para animación y software profesional</li>
        </ul>

        <h4>Resoluciones recomendadas:</h4>
        
        <h5>Redes sociales:</h5>
        <ul>
          <li><strong>Instagram post:</strong> 1080x1080px (cuadrado)</li>
          <li><strong>Instagram story:</strong> 1080x1920px (vertical)</li>
          <li><strong>Facebook:</strong> 1200x630px (horizontal)</li>
          <li><strong>Twitter:</strong> 1024x512px (horizontal)</li>
        </ul>

        <h5>Portfolio profesional:</h5>
        <ul>
          <li><strong>Vista principal:</strong> 1920x1080px o superior</li>
          <li><strong>Thumbnails:</strong> 400x400px</li>
          <li><strong>Proceso steps:</strong> 800x600px</li>
          <li><strong>Detalles:</strong> 1200x800px</li>
        </ul>

        <h4>Optimización para web:</h4>
        <ul>
          <li><strong>Compresión inteligente:</strong> Reduce tamaño sin perder calidad visible</li>
          <li><strong>Carga progresiva:</strong> Permite visualización rápida</li>
          <li><strong>Formatos modernos:</strong> WebP y AVIF para mejor compresión</li>
          <li><strong>Múltiples resoluciones:</strong> Versiones para diferentes dispositivos</li>
        </ul>

        <h4>Preparación para impresión:</h4>
        <ul>
          <li><strong>Resolución:</strong> Mínimo 300 DPI para calidad profesional</li>
          <li><strong>Perfil de color:</strong> CMYK para impresión, RGB para digital</li>
          <li><strong>Márgenes:</strong> Área de seguridad en bordes</li>
          <li><strong>Sangrado:</strong> Extensión más allá de límites de corte</li>
        </ul>

        <div class="workflow-exportacion">
          <h4>🔄 Workflow de exportación eficiente</h4>
          <ol>
            <li>Captura en máxima resolución disponible</li>
            <li>Edita básicamente en editor externo si necesario</li>
            <li>Genera versión master de alta calidad</li>
            <li>Deriva versiones específicas para cada uso</li>
            <li>Organiza archivos con nomenclatura clara</li>
            <li>Mantén backup de archivos originales</li>
          </ol>
        </div>
      `,
      actividades: [
        {
          tipo: "tecnico",
          instruccion: "Exporta uno de tus proyectos en 4 formatos diferentes y compara resultados",
          tiempo: "10 minutos"
        }
      ]
    }
  ],
  actividades: [
    {
      id: "actividad-1",
      titulo: "Sesión de fotos profesional",
      descripcion: "Crea una presentación completa de uno de tus mejores proyectos",
      objetivos: [
        "Aplicar técnicas de renderizado profesional",
        "Documentar proceso creativo efectivamente",
        "Generar material para portfolio"
      ],
      instrucciones: [
        "Selecciona tu mejor proyecto del curso",
        "Configura iluminación profesional",
        "Captura al menos 8 ángulos diferentes",
        "Incluye tomas de proceso si es posible",
        "Genera versiones optimizadas para diferentes usos",
        "Crea una presentación de 1 página del proyecto"
      ],
      duracion: "30 minutos",
      dificultad: "Intermedio"
    },
    {
      id: "actividad-2",
      titulo: "Mini-portfolio del curso",
      descripcion: "Compila todos tus proyectos en un portfolio cohesivo",
      objetivos: [
        "Demostrar progresión de habilidades",
        "Crear identidad visual personal",
        "Preparar material para compartir"
      ],
      instrucciones: [
        "Revisa todos los proyectos realizados en el curso",
        "Selecciona los 5 mejores trabajos",
        "Re-renderiza con técnicas aprendidas",
        "Crea una narrativa visual coherente",
        "Diseña layout de presentación unificado",
        "Incluye reflexión sobre tu progreso"
      ],
      duracion: "45 minutos",
      dificultad: "Avanzado"
    }
  ],
  recursos: [
    {
      tipo: "template",
      titulo: "Plantillas de Portfolio",
      descripcion: "Layouts prediseñados para diferentes tipos de presentación",
      url: "#"
    },
    {
      tipo: "guia",
      titulo: "Guía de Optimización de Imágenes",
      descripcion: "Técnicas para balance perfecto entre calidad y tamaño",
      url: "#"
    },
    {
      tipo: "ejemplos",
      titulo: "Galería de Portfolios Excepcionales",
      descripcion: "Inspiración de presentaciones profesionales exitosas",
      url: "#"
    },
    {
      tipo: "herramientas",
      titulo: "Herramientas Complementarias",
      descripcion: "Software recomendado para edición y optimización",
      url: "#"
    }
  ],
  evaluacion: {
    tipo: "portfolio",
    titulo: "Evaluación: Portfolio profesional completo",
    descripcion: "Presenta tu mejor trabajo del curso en formato de portfolio profesional",
    criterios: [
      {
        aspecto: "Calidad de Renderizado",
        descripcion: "Excelencia técnica en la captura y presentación",
        puntos: 30
      },
      {
        aspecto: "Organización y Coherencia",
        descripcion: "Estructura lógica y identidad visual consistente",
        puntos: 25
      },
      {
        aspecto: "Documentación de Proceso",
        descripcion: "Claridad en la explicación del proceso creativo",
        puntos: 25
      },
      {
        aspecto: "Presentación Profesional",
        descripcion: "Nivel profesional en diseño y acabado",
        puntos: 20
      }
    ],
    instrucciones: [
      "Crea un portfolio con tus 5 mejores proyectos del curso",
      "Incluye al menos 3 vistas por proyecto",
      "Documenta el proceso de al menos 2 proyectos",
      "Mantén coherencia visual en toda la presentación",
      "Optimiza para visualización digital",
      "Incluye una introducción personal y reflexión final"
    ],
    tiempoLimite: "90 minutos",
    puntuacionMaxima: 100,
    entregables: [
      "Portfolio digital (PDF o sitio web)",
      "Archivos de alta resolución de proyectos seleccionados",
      "Documento de reflexión sobre aprendizajes (500 palabras)"
    ]
  },
  glosario: [
    {
      termino: "Renderizado",
      definicion: "Proceso de generar una imagen final a partir de un modelo 3D"
    },
    {
      termino: "Portfolio",
      definicion: "Colección organizada de trabajos que demuestra habilidades y progreso"
    },
    {
      termino: "Setup de iluminación",
      definicion: "Configuración específica de luces para lograr un efecto visual deseado"
    },
    {
      termino: "Resolución",
      definicion: "Cantidad de píxeles en una imagen, determinando su calidad y tamaño"
    },
    {
      termino: "Compresión",
      definicion: "Reducción del tamaño de archivo manteniendo calidad visual aceptable"
    },
    {
      termino: "DPI",
      definicion: "Dots Per Inch - medida de resolución para impresión"
    },
    {
      termino: "Narrativa visual",
      definicion: "Capacidad de contar una historia a través de elementos visuales"
    },
    {
      termino: "Coherencia visual",
      definicion: "Consistencia en el estilo y presentación a lo largo de un conjunto de trabajos"
    }
  ]
};

export default tema05ExposicionCreativa;
