// Tema 3: Pintura y decoración - Paint 3D
// Personalización visual con efectos

const tema03PinturaDecoracion = {
  id: 3,
  titulo: "Pintura y decoración",
  descripcion: "Decora tus objetos 3D con colores, texturas y efectos para crear diseños visualmente atractivos.",
  objetivos: [
    "Dominar las herramientas de pintura en 3D",
    "Aplicar texturas y patrones creativamente",
    "Utilizar efectos de iluminación para realzar diseños",
    "Crear decoraciones personalizadas y únicas"
  ],
  duracionEstimada: "45-60 minutos",
  
  contenido: {
    introduccion: {
      titulo: "Introducción a la Pintura y Decoración 3D",
      contenido: `
Paint 3D revoluciona la forma de decorar objetos tridimensionales al permitir pintar directamente 
sobre las superficies 3D. A diferencia de las herramientas tradicionales de dibujo 2D, Paint 3D 
te permite aplicar colores, texturas y efectos que se adaptan a la forma y profundidad de tus objetos.

La decoración en 3D requiere entender cómo la luz, la perspectiva y la geometría afectan la 
apariencia visual de los elementos. En este tema aprenderás a usar estas características a tu favor 
para crear diseños impactantes.
      `,
      objetivosEspecificos: [
        "Comprender las diferencias entre pintura 2D y 3D",
        "Identificar las herramientas de decoración disponibles",
        "Reconocer cómo la iluminación afecta la apariencia",
        "Planificar esquemas de color efectivos"
      ]
    },

    secciones: [
      {
        id: "herramientas-pintura",
        titulo: "Herramientas de Pintura 3D",
        contenido: `
### Paleta de Pinceles Especializados

Paint 3D ofrece diversos pinceles diseñados específicamente para trabajar en superficies tridimensionales:

**Pincel Marcador:**
- Ideal para líneas precisas y detalles finos
- Se adapta automáticamente a la curvatura del objeto
- Perfecto para contornos y elementos lineales

**Pincel Aerógrafo:**
- Crea efectos de degradado suave
- Útil para sombras y transiciones de color
- Permite efectos de difuminado natural

**Pincel Acuarela:**
- Simula la textura de pintura tradicional
- Crea efectos orgánicos y naturales
- Ideal para fondos y texturas base

**Pincel Petróleo:**
- Produce trazos gruesos y texturizados
- Perfecto para efectos dramáticos
- Simula pinceladas tradicionales al óleo
        `,
        ejemplos: [
          {
            titulo: "Decorando una Esfera",
            descripcion: "Usar diferentes pinceles para crear un planeta decorativo",
            pasos: [
              "Crear una esfera básica",
              "Aplicar color base con pincel acuarela",
              "Añadir continentes con pincel marcador",
              "Crear efectos de atmósfera con aerógrafo"
            ]
          }
        ]
      },

      {
        id: "texturas-patrones",
        titulo: "Aplicación de Texturas y Patrones",
        contenido: `
### Biblioteca de Texturas

Paint 3D incluye una amplia biblioteca de texturas predefinidas que puedes aplicar directamente 
a tus objetos 3D:

**Texturas Naturales:**
- Madera: diferentes tipos de vetas y tonos
- Piedra: desde mármol pulido hasta roca rugosa
- Metal: acabados brillantes, oxidados o desgastados
- Tela: desde seda suave hasta lona rugosa

**Texturas Sintéticas:**
- Plástico: diferentes grados de brillo y color
- Vidrio: transparencias y reflejos
- Cerámicas: acabados mate y brillante
- Papel: diferentes texturas y patrones

### Personalización de Texturas

Además de las texturas predefinidas, puedes crear patrones personalizados:

**Método de Repetición:**
1. Crea un patrón base pequeño
2. Configura la repetición automática
3. Ajusta la escala según el objeto
4. Aplica variaciones de color y brillo

**Combinación de Texturas:**
- Superponer múltiples texturas
- Usar transparencias para efectos complejos
- Combinar texturas naturales con sintéticas
        `,
        ejemplos: [
          {
            titulo: "Casa con Texturas Realistas",
            descripcion: "Aplicar múltiples texturas para crear una casa detallada",
            pasos: [
              "Construir estructura básica de casa",
              "Aplicar textura de ladrillo a las paredes",
              "Usar textura de tejas para el techo",
              "Añadir textura de madera a puertas y ventanas",
              "Aplicar textura de césped al suelo"
            ]
          }
        ]
      },

      {
        id: "efectos-iluminacion",
        titulo: "Efectos de Iluminación y Sombras",
        contenido: `
### Sistema de Iluminación 3D

La iluminación es fundamental para crear profundidad y realismo en tus diseños 3D:

**Tipos de Iluminación:**

**Luz Ambiental:**
- Iluminación general y uniforme
- Crea la base lumínica de la escena
- Evita sombras demasiado duras

**Luz Direccional:**
- Simula luz solar o focos
- Crea sombras definidas
- Añade drama y contraste

**Luz Puntual:**
- Fuente de luz específica y localizada
- Ideal para destacar objetos particulares
- Crea efectos de foco teatral

### Configuración de Efectos

**Intensidad de Luz:**
- Controla la potencia de cada fuente
- Afecta la visibilidad de colores y texturas
- Permite crear ambientes día/noche

**Color de Luz:**
- Luz cálida: tonos amarillos/naranjas
- Luz fría: tonos azules/violetas
- Luz neutra: blanco puro

**Posicionamiento:**
- Altura: afecta la longitud de sombras
- Ángulo: determina la dirección de sombras
- Distancia: influye en la intensidad
        `,
        ejemplos: [
          {
            titulo: "Escena Nocturna Urbana",
            descripcion: "Crear una escena nocturna con múltiples fuentes de luz",
            pasos: [
              "Crear edificios básicos",
              "Configurar luz ambiental tenue (azul oscuro)",
              "Añadir luces puntuales para farolas",
              "Crear efectos de ventanas iluminadas",
              "Ajustar sombras para realismo nocturno"
            ]
          }
        ]
      },

      {
        id: "decoraciones-personalizadas",
        titulo: "Creación de Decoraciones Personalizadas",
        contenido: `
### Diseño de Elementos Decorativos

Crear decoraciones únicas requiere combinar creatividad con técnica:

**Elementos Geométricos:**
- Patrones repetitivos simples
- Formas abstractas y modernas
- Combinaciones de líneas y curvas

**Elementos Orgánicos:**
- Inspirados en la naturaleza
- Formas fluidas e irregulares
- Texturas que imitan elementos naturales

**Elementos Temáticos:**
- Relacionados con épocas históricas
- Estilos culturales específicos
- Motivos simbólicos o representativos

### Técnicas de Aplicación

**Layering (Capas):**
1. Aplicar color base
2. Añadir patrón principal
3. Incluir detalles secundarios
4. Finalizar con acentos y brillos

**Masking (Enmascaramiento):**
- Crear áreas protegidas durante la pintura
- Permite patrones precisos y limpios
- Útil para diseños complejos

**Blending (Mezclado):**
- Combinar colores suavemente
- Crear transiciones naturales
- Efectos de degradado personalizados
        `,
        ejemplos: [
          {
            titulo: "Jarrón Decorativo Oriental",
            descripcion: "Crear un jarrón con motivos orientales tradicionales",
            pasos: [
              "Modelar forma básica de jarrón",
              "Aplicar color base dorado",
              "Dibujar dragones con pincel marcador",
              "Añadir detalles con colores contrastantes",
              "Aplicar efectos de brillo metálico"
            ]
          }
        ]
      }
    ]
  },

  actividades: [
    {
      id: "actividad-1",
      titulo: "Taller de Pinceles Creativos",
      descripcion: "Experimenta con todos los pinceles disponibles para crear efectos únicos",
      objetivos: [
        "Familiarizarse con cada tipo de pincel",
        "Descubrir efectos y técnicas personales",
        "Crear una biblioteca de trazos de referencia"
      ],
      instrucciones: [
        "Crea cinco esferas idénticas",
        "Usa un pincel diferente en cada esfera",
        "Experimenta con presión y velocidad",
        "Documenta los efectos que más te gusten",
        "Combina pinceles en un diseño final"
      ],
      duracion: "20 minutos",
      dificultad: "Básico"
    },
    {
      id: "actividad-2",
      titulo: "Galería de Texturas",
      descripcion: "Crea una colección de cubos con diferentes texturas aplicadas",
      objetivos: [
        "Explorar la biblioteca completa de texturas",
        "Entender cómo las texturas afectan la percepción",
        "Practicar la aplicación precisa de materiales"
      ],
      instrucciones: [
        "Crear una matriz de 4x4 cubos",
        "Aplicar una textura diferente a cada cubo",
        "Experimentar con escalas de textura",
        "Observar cómo la luz afecta cada material",
        "Tomar capturas desde diferentes ángulos"
      ],
      duracion: "25 minutos",
      dificultad: "Intermedio"
    },
    {
      id: "actividad-3",
      titulo: "Proyecto: Habitación Temática",
      descripcion: "Diseña y decora una habitación completa con un tema específico",
      objetivos: [
        "Integrar múltiples técnicas de decoración",
        "Desarrollar coherencia visual temática",
        "Aplicar principios de diseño interior"
      ],
      instrucciones: [
        "Elige un tema (ej: futurista, vintage, natural)",
        "Modela muebles básicos de una habitación",
        "Aplica texturas coherentes con el tema",
        "Configura iluminación apropiada",
        "Añade elementos decorativos personalizados",
        "Crea una presentación de 360° de la habitación"
      ],
      duracion: "45 minutos",
      dificultad: "Avanzado"
    }
  ],

  recursos: [
    {
      tipo: "tutorial",
      titulo: "Guía Completa de Pinceles Paint 3D",
      descripcion: "Tutorial detallado sobre cada herramienta de pintura",
      url: "#",
      duracion: "15 min"
    },
    {
      tipo: "biblioteca",
      titulo: "Colección de Texturas Adicionales",
      descripcion: "Recursos externos para expandir tu biblioteca",
      url: "#",
      tamaño: "250 MB"
    },
    {
      tipo: "galeria",
      titulo: "Galería de Inspiración: Decoración 3D",
      descripcion: "Ejemplos creados por la comunidad",
      url: "#",
      ejemplos: "50+"
    },
    {
      tipo: "plantilla",
      titulo: "Plantillas de Patrones Decorativos",
      descripcion: "Patrones base para personalizar",
      url: "#",
      formatos: "PNG, SVG"
    }
  ],

  evaluacion: {
    tipo: "practica",
    titulo: "Evaluación: Objeto Decorativo Personal",
    descripcion: "Crea un objeto decorativo que represente tu estilo personal",
    criterios: [
      {
        aspecto: "Uso de Pinceles",
        descripcion: "Empleo efectivo de al menos 3 tipos de pinceles",
        puntos: 25
      },
      {
        aspecto: "Aplicación de Texturas",
        descripcion: "Uso apropiado y creativo de texturas",
        puntos: 25
      },
      {
        aspecto: "Efectos de Iluminación",
        descripcion: "Configuración adecuada de luces y sombras",
        puntos: 25
      },
      {
        aspecto: "Creatividad y Coherencia",
        descripcion: "Originalidad y consistencia en el diseño",
        puntos: 25
      }
    ],
    instrucciones: [
      "Elige un objeto personal significativo (ej: instrumento musical, objeto deportivo)",
      "Modela la forma básica del objeto",
      "Aplica decoraciones que reflejen tu personalidad",
      "Usa al menos 3 técnicas diferentes aprendidas",
      "Configura iluminación que realce tu diseño",
      "Presenta tu trabajo con una vista 360°"
    ],
    tiempoLimite: "60 minutos",
    puntuacionMaxima: 100
  },

  glosario: [
    {
      termino: "Textura",
      definicion: "Patrón visual que simula la superficie física de un material real"
    },
    {
      termino: "Luz Ambiental",
      definicion: "Iluminación general que proporciona la base lumínica de toda la escena"
    },
    {
      termino: "Luz Direccional",
      definicion: "Fuente de luz que emite rayos paralelos desde una dirección específica"
    },
    {
      termino: "Luz Puntual",
      definicion: "Fuente de luz que emite desde un punto específico en todas las direcciones"
    },
    {
      termino: "Pincel Marcador",
      definicion: "Herramienta de pintura que crea líneas precisas y uniformes"
    },
    {
      termino: "Pincel Aerógrafo",
      definicion: "Herramienta que simula el efecto de spray, creando bordes suaves"
    },
    {
      termino: "Layering",
      definicion: "Técnica de aplicar múltiples capas de decoración para crear profundidad"
    },
    {
      termino: "Blending",
      definicion: "Técnica de mezclar colores suavemente para crear transiciones naturales"
    },
    {
      termino: "Intensidad de Luz",
      definicion: "Medida de la potencia o brillo de una fuente de iluminación"
    },
    {
      termino: "Patrón Repetitivo",
      definicion: "Diseño que se repite de forma regular para cubrir una superficie"
    }
  ],

  navegacion: {
    anterior: {
      id: 2,
      titulo: "Creación de objetos 3D"
    },
    siguiente: {
      id: 4,
      titulo: "Escenarios y composición"
    }
  }
};

export default tema03PinturaDecoracion;
