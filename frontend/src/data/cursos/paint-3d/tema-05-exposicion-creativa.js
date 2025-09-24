// Tema 5: Exposición creativa - Paint 3D
// Socialización y presentación del trabajo

const tema05ExposicionCreativa = {
  id: 5,
  titulo: "Exposición creativa",
  descripcion: "Aprende a exportar y compartir tus creaciones 3D para presentarlas a otros.",
  objetivos: [
    "Dominar las opciones de exportación de Paint 3D",
    "Crear presentaciones efectivas de trabajos 3D",
    "Desarrollar habilidades de comunicación visual",
    "Establecer presencia en comunidades creativas"
  ],
  duracionEstimada: "40-55 minutos",
  
  contenido: {
    introduccion: {
      titulo: "Introducción a la Exposición Digital",
      contenido: `
Crear arte digital es solo la mitad del proceso creativo. La otra mitad igualmente importante 
es saber presentar, compartir y comunicar tu trabajo a otros. En el mundo digital actual, 
tus creaciones 3D pueden alcanzar audiencias globales y conectar con comunidades de artistas 
y entusiastas del diseño.

Paint 3D ofrece múltiples opciones para exportar y compartir tu trabajo, desde formatos 
simples para redes sociales hasta archivos técnicos para impresión 3D. Cada formato tiene 
sus propias ventajas y está diseñado para diferentes propósitos y audiencias.

La exposición efectiva va más allá de simplemente subir archivos a internet. Requiere 
entender a tu audiencia, seleccionar los formatos apropiados, crear presentaciones atractivas 
y desarrollar una narrativa que conecte con los espectadores.
      `,
      objetivosEspecificos: [
        "Comprender los diferentes formatos de exportación",
        "Identificar las mejores prácticas de presentación",
        "Reconocer las características de diferentes plataformas",
        "Desarrollar estrategias de comunicación visual"
      ]
    },

    secciones: [
      {
        id: "formatos-exportacion",
        titulo: "Formatos de Exportación y Sus Usos",
        contenido: `
### Formatos de Imagen 2D

**PNG (Portable Network Graphics):**
- **Ventajas:** transparencia, sin pérdida de calidad
- **Usos ideales:** logos, gráficos con transparencia, impresión
- **Configuraciones recomendadas:** resolución mínima 1920x1080 para web

**JPEG (Joint Photographic Experts Group):**
- **Ventajas:** archivos compactos, amplia compatibilidad
- **Usos ideales:** fotografías, redes sociales, galerías web
- **Configuraciones recomendadas:** calidad 85-95% para balance óptimo

**SVG (Scalable Vector Graphics):**
- **Ventajas:** escalabilidad infinita, archivos pequeños
- **Usos ideales:** logos, iconos, gráficos vectoriales
- **Limitaciones:** no ideal para escenas complejas con muchos detalles

### Formatos de Video y Animación

**MP4 (MPEG-4):**
- **Ventajas:** compresión eficiente, reproducción universal
- **Usos ideales:** demos, tutoriales, presentaciones dinámicas
- **Configuraciones recomendadas:** 1080p, 30fps para web

**GIF (Graphics Interchange Format):**
- **Ventajas:** animaciones simples, autorepetición
- **Usos ideales:** demostraciones cortas, redes sociales
- **Limitaciones:** paleta de colores limitada, archivos grandes

### Formatos 3D Especializados

**3MF (3D Manufacturing Format):**
- **Ventajas:** formato nativo de Paint 3D, preserva toda la información
- **Usos ideales:** colaboración, backup completo, edición futura

**OBJ (Wavefront OBJ):**
- **Ventajas:** compatibilidad universal, formato abierto
- **Usos ideales:** intercambio entre software, impresión 3D

**STL (STereoLithography):**
- **Ventajas:** estándar de impresión 3D
- **Usos ideales:** prototipado físico, manufactura
        `,
        ejemplos: [
          {
            titulo: "Kit de Exportación Completo",
            descripcion: "Crear un set completo de archivos para diferentes propósitos",
            pasos: [
              "Exportar PNG alta resolución para impresión",
              "Crear JPEG optimizado para redes sociales",
              "Generar GIF animado mostrando rotación 360°",
              "Guardar 3MF como archivo maestro",
              "Exportar OBJ para compatibilidad universal"
            ]
          }
        ]
      },

      {
        id: "presentaciones-efectivas",
        titulo: "Creación de Presentaciones Efectivas",
        contenido: `
### Principios de Presentación Visual

**Selección de Vistas:**
La presentación efectiva de un objeto 3D requiere mostrar múltiples perspectivas:

**Vista Principal (Hero Shot):**
- Ángulo que mejor representa el objeto
- Iluminación óptima para resaltar características
- Composición atractiva que invite a seguir viendo

**Vista de Detalle:**
- Acercamientos que muestran texturas y acabados
- Énfasis en elementos técnicos o artísticos únicos
- Revelación de aspectos no visibles en la vista principal

**Vista de Contexto:**
- Muestra el objeto en su entorno de uso
- Proporciona escala y referencia
- Demuestra funcionalidad o propósito

**Vista de Proceso:**
- Muestra etapas de construcción
- Revela técnicas y métodos utilizados
- Crea conexión con el proceso creativo

### Configuración de Escenas para Presentación

**Iluminación de Estudio:**
- **Setup de 3 puntos:** luz principal, relleno y contraluz
- **Luz principal:** define forma y volumen (45° desde arriba)
- **Luz de relleno:** suaviza sombras duras (opuesta a principal)
- **Contraluz:** separa objeto del fondo, crea profundidad

**Fondos y Ambientación:**
- **Fondo neutro:** no compite con el objeto principal
- **Fondo degradado:** añade profundidad sin distracción
- **Fondo ambiental:** proporciona contexto específico
- **Fondo temático:** refuerza la narrativa del objeto

### Composición de Portfolios

**Estructura Narrativa:**
1. **Apertura:** presenta el concepto general
2. **Desarrollo:** muestra proceso y variaciones
3. **Clímax:** presenta la versión final destacada
4. **Cierre:** resume logros y aprendizajes

**Consistencia Visual:**
- Mantener esquema de colores coherente
- Usar tipografías complementarias limitadas
- Aplicar espaciado y márgenes uniformes
- Preservar estilo de iluminación similar
        `,
        ejemplos: [
          {
            titulo: "Portfolio de Objeto Único",
            descripcion: "Crear presentación completa de un proyecto personal",
            pasos: [
              "Configurar escena de estudio con iluminación de 3 puntos",
              "Capturar hero shot desde el mejor ángulo",
              "Tomar 4-6 vistas adicionales mostrando detalles",
              "Crear secuencia de proceso constructivo",
              "Diseñar layout de portfolio con texto descriptivo"
            ]
          }
        ]
      },

      {
        id: "plataformas-compartir",
        titulo: "Plataformas de Compartición y Comunidades",
        contenido: `
### Redes Sociales Generalistas

**Instagram:**
- **Formato ideal:** imágenes cuadradas 1080x1080px
- **Características:** hashtags estratégicos, stories para proceso
- **Audiencia:** público general, artistas emergentes
- **Estrategia:** posts consistentes, engagement con comunidad

**Twitter/X:**
- **Formato ideal:** imágenes 16:9, GIFs cortos
- **Características:** viral potential, conversaciones técnicas
- **Audiencia:** desarrolladores, artistas tech-savvy
- **Estrategia:** hilos explicativos, participación en tendencias

**TikTok:**
- **Formato ideal:** videos verticales 9:16
- **Características:** contenido dinámico, tendencias rápidas
- **Audiencia:** jóvenes creadores, educación informal
- **Estrategia:** timelapses de proceso, tutorials breves

### Plataformas Especializadas en 3D

**Sketchfab:**
- **Características:** visualización 3D interactiva en web
- **Ventajas:** modelos explorables, integración AR/VR
- **Audiencia:** profesionales 3D, educadores, museos
- **Formatos:** OBJ, FBX, GLTF con texturas

**ArtStation:**
- **Características:** portfolio profesional, proyectos detallados
- **Ventajas:** exposición a estudios, feedback técnico
- **Audiencia:** profesionales gaming/film, reclutadores
- **Formatos:** galerías de imágenes alta resolución

**Thingiverse:**
- **Características:** modelos para impresión 3D
- **Ventajas:** comunidad de makers, descarga gratuita
- **Audiencia:** impresores 3D, DIY enthusiasts
- **Formatos:** STL, OBJ con instrucciones

### Comunidades y Foros

**Reddit:**
- Subreddits especializados: r/3Dprinting, r/blender, r/design
- Feedback constructivo y críticas técnicas
- Sharing de recursos y tutoriales

**Discord:**
- Servidores de comunidades específicas
- Feedback en tiempo real
- Colaboraciones y proyectos grupales

**DeviantArt:**
- Comunidad artística tradicional
- Galerías organizadas por categorías
- Sistema de favoritos y comentarios detallados
        `,
        ejemplos: [
          {
            titulo: "Estrategia Multi-Plataforma",
            descripcion: "Desarrollar plan de publicación coordinado",
            pasos: [
              "Crear versiones optimizadas para cada plataforma",
              "Adaptar descripción y hashtags específicos",
              "Programar publicaciones en horarios óptimos",
              "Preparar contenido adicional (stories, hilos)",
              "Monitorear engagement y ajustar estrategia"
            ]
          }
        ]
      },

      {
        id: "comunicacion-visual",
        titulo: "Comunicación y Storytelling Visual",
        contenido: `
### Narrativa del Proceso Creativo

**Documentación del Proceso:**
El público no solo quiere ver el resultado final, sino entender el viaje creativo:

**Before/After Comparisons:**
- Muestra evolución desde concepto inicial
- Resalta decisiones de diseño importantes
- Demuestra crecimiento y aprendizaje

**Time-lapse Creation:**
- Condensa proceso largo en video atractivo
- Revela técnicas y métodos específicos
- Crea conexión emocional con el esfuerzo

**Design Decision Explanations:**
- Explica por qué tomaste ciertas decisiones
- Comparte desafíos encontrados y soluciones
- Proporciona valor educativo a otros creadores

### Desarrollo de Voz Artística

**Identidad Visual Consistente:**
- Desarrollar estilo reconocible a través de proyectos
- Mantener coherencia en paletas de colores
- Aplicar enfoques compositivos característicos

**Temas y Mensajes Recurrentes:**
- Identificar qué te apasiona representar
- Desarrollar series de trabajos relacionados
- Crear narrativas que evolucionen con el tiempo

**Engagement con la Audiencia:**
- Responder comentarios y preguntas técnicas
- Incorporar feedback constructivo en futuros proyectos
- Colaborar con otros creadores de la comunidad

### Presentaciones Profesionales

**Pitches y Propuestas:**
- Estructura clara: problema → solución → resultado
- Visuales que apoyen cada punto del argumento
- Presupuestos de tiempo y recursos realistas

**Documentación Técnica:**
- Especificaciones precisas para implementación
- Diagramas de flujo y procesos
- Archivos organizados y etiquetados claramente

**Presentaciones Educativas:**
- Objetivos de aprendizaje claramente definidos
- Progresión lógica de conceptos simples a complejos
- Ejercicios prácticos para reforzar conceptos
        `,
        ejemplos: [
          {
            titulo: "Serie Documental Personal",
            descripcion: "Crear una serie que documente tu evolución como artista 3D",
            pasos: [
              "Planificar 5 proyectos progresivamente más complejos",
              "Documentar cada proyecto con fotos de proceso",
              "Crear video-resumen de cada proyecto",
              "Escribir reflexiones sobre aprendizajes",
              "Compilar en presentación que muestre crecimiento"
            ]
          }
        ]
      }
    ]
  },

  actividades: [
    {
      id: "actividad-1",
      titulo: "Laboratorio de Formatos",
      descripcion: "Experimenta con todos los formatos de exportación disponibles",
      objetivos: [
        "Familiarizarse con opciones de exportación",
        "Comparar calidad y tamaños de archivo",
        "Identificar usos óptimos para cada formato"
      ],
      instrucciones: [
        "Elige un proyecto 3D completado previamente",
        "Exporta en PNG, JPEG, 3MF, OBJ y STL",
        "Anota tamaños de archivo y tiempos de exportación",
        "Compara calidad visual en cada formato",
        "Documenta ventajas y limitaciones observadas",
        "Crea tabla comparativa de resultados"
      ],
      duracion: "25 minutos",
      dificultad: "Básico"
    },
    {
      id: "actividad-2",
      titulo: "Sesión de Fotos de Estudio",
      descripcion: "Crea un set completo de imágenes profesionales de un objeto 3D",
      objetivos: [
        "Aplicar principios de fotografía de producto",
        "Dominar iluminación de estudio en 3D",
        "Desarrollar ojo para ángulos efectivos"
      ],
      instrucciones: [
        "Configura escena de estudio con fondo neutro",
        "Implementa iluminación de 3 puntos",
        "Captura hero shot principal",
        "Toma 6 vistas adicionales desde ángulos diferentes",
        "Crea 2 vistas de detalle extremo",
        "Organiza imágenes en presentación tipo catálogo"
      ],
      duracion: "40 minutos",
      dificultad: "Intermedio"
    },
    {
      id: "actividad-3",
      titulo: "Proyecto: Campaña de Lanzamiento",
      descripcion: "Desarrolla una campaña completa para 'lanzar' uno de tus proyectos",
      objetivos: [
        "Integrar todas las habilidades de presentación",
        "Desarrollar estrategia de comunicación coherente",
        "Crear contenido para múltiples plataformas"
      ],
      instrucciones: [
        "Selecciona tu mejor proyecto 3D",
        "Escribe brief describiendo concepto y objetivos",
        "Crea contenido optimizado para 3 plataformas diferentes",
        "Desarrolla timeline de publicación de 1 semana",
        "Incluye contenido de proceso y behind-the-scenes",
        "Diseña materials de apoyo (descripción, hashtags, etc.)",
        "Presenta estrategia completa como pitch profesional"
      ],
      duracion: "90 minutos",
      dificultad: "Avanzado"
    }
  ],

  recursos: [
    {
      tipo: "guia",
      titulo: "Guía Completa de Formatos de Exportación",
      descripcion: "Manual técnico con especificaciones y recomendaciones",
      url: "#",
      duracion: "15 min"
    },
    {
      tipo: "plantillas",
      titulo: "Templates de Presentación Profesional",
      descripcion: "Plantillas para portfolios y presentaciones",
      url: "#",
      formatos: "PowerPoint, Keynote, PDF"
    },
    {
      tipo: "herramientas",
      titulo: "Kit de Recursos para Redes Sociales",
      descripcion: "Dimensiones, hashtags y mejores prácticas por plataforma",
      url: "#",
      actualizacion: "Mensual"
    },
    {
      tipo: "comunidad",
      titulo: "Directorio de Comunidades 3D",
      descripcion: "Lista curada de las mejores comunidades para artistas 3D",
      url: "#",
      plataformas: "15+"
    },
    {
      tipo: "tutorial",
      titulo: "Masterclass: Fotografía de Producto 3D",
      descripcion: "Técnicas avanzadas de iluminación y composición",
      url: "#",
      duracion: "35 min"
    }
  ],

  evaluacion: {
    tipo: "portfolio",
    titulo: "Evaluación: Portfolio de Exposición Personal",
    descripcion: "Crea un portfolio completo que demuestre todas las habilidades de presentación",
    criterios: [
      {
        aspecto: "Calidad Técnica de Exportación",
        descripcion: "Uso apropiado de formatos y optimización",
        puntos: 20
      },
      {
        aspecto: "Presentación Visual",
        descripcion: "Efectividad de iluminación, ángulos y composición",
        puntos: 30
      },
      {
        aspecto: "Narrativa y Comunicación",
        descripcion: "Claridad en storytelling y descripción de procesos",
        puntos: 25
      },
      {
        aspecto: "Adaptación Multi-Plataforma",
        descripcion: "Optimización específica para diferentes medios",
        puntos: 25
      }
    ],
    instrucciones: [
      "Selecciona 3 de tus mejores proyectos Paint 3D",
      "Crea presentación completa para cada proyecto incluyendo:",
      "- Hero shot y múltiples vistas",
      "- Documentación de proceso creativo",
      "- Exportación en 3 formatos diferentes",
      "- Adaptación para 2 plataformas específicas",
      "Desarrolla narrativa personal que conecte los proyectos",
      "Incluye reflexión sobre tu evolución como artista 3D",
      "Presenta portfolio en formato profesional con índice y navegación clara"
    ],
    tiempoLimite: "120 minutos",
    puntuacionMaxima: 100,
    entregables: [
      "Portfolio digital (PDF interactivo o sitio web)",
      "Archivos originales de exportación en múltiples formatos",
      "Documento de estrategia para redes sociales",
      "Video o presentación oral de 5 minutos"
    ]
  },

  glosario: [
    {
      termino: "Hero Shot",
      definicion: "Imagen principal que mejor representa un proyecto, optimizada para crear impacto inmediato"
    },
    {
      termino: "Formato 3MF",
      definicion: "Formato nativo de Paint 3D que preserva toda la información del proyecto"
    },
    {
      termino: "Iluminación de 3 Puntos",
      definicion: "Setup clásico usando luz principal, relleno y contraluz para fotografía de producto"
    },
    {
      termino: "Engagement",
      definicion: "Nivel de interacción y participación de la audiencia con el contenido publicado"
    },
    {
      termino: "Portfolio",
      definicion: "Colección curada de trabajos que demuestra habilidades y evolución artística"
    },
    {
      termino: "Multi-Plataforma",
      definicion: "Estrategia de adaptación de contenido para múltiples redes sociales o medios"
    },
    {
      termino: "Storytelling Visual",
      definicion: "Arte de contar historias principalmente a través de elementos visuales"
    },
    {
      termino: "Time-lapse",
      definicion: "Técnica que condensa un proceso largo en un video acelerado corto"
    },
    {
      termino: "Pitch",
      definicion: "Presentación concisa que propone una idea o proyecto de manera persuasiva"
    },
    {
      termino: "Brief",
      definicion: "Documento que resume objetivos, requisitos y contexto de un proyecto creativo"
    },
    {
      termino: "Viral Potential",
      definicion: "Capacidad de contenido para ser compartido masivamente en redes sociales"
    },
    {
      termino: "Behind-the-Scenes",
      definicion: "Contenido que muestra el proceso oculto de creación de un proyecto"
    }
  ],

  navegacion: {
    anterior: {
      id: 4,
      titulo: "Escenarios y composición"
    },
    siguiente: null // Es el último tema
  }
};

export default tema05ExposicionCreativa;
