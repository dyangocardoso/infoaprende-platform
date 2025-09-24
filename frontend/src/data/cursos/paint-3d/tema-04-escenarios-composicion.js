// Tema 4: Escenarios y composición - Paint 3D
// Construcción de escenas narrativas

const tema04EscenariosComposicion = {
  id: 4,
  titulo: "Escenarios y composición",
  descripcion: "Combina múltiples elementos para crear escenas completas y narrativas visuales en 3D.",
  objetivos: [
    "Dominar los principios de composición en 3D",
    "Crear escenarios equilibrados y atractivos",
    "Gestionar la profundidad y las capas visuales",
    "Desarrollar narrativas visuales efectivas"
  ],
  duracionEstimada: "50-65 minutos",
  
  contenido: {
    introduccion: {
      titulo: "Introducción a la Composición 3D",
      contenido: `
La composición en espacios tridimensionales va más allá de organizar elementos en una superficie plana. 
En Paint 3D, trabajas con profundidad real, donde cada objeto tiene volumen y ocupa un espacio específico 
en la escena. Esta dimensión adicional ofrece posibilidades creativas únicas pero también presenta 
nuevos desafíos compositivos.

Un escenario 3D efectivo debe guiar la mirada del espectador, contar una historia visual y crear 
una experiencia inmersiva. Los principios tradicionales de composición se adaptan y expanden para 
incluir conceptos como jerarquía espacial, flujo tridimensional y narrativa ambiental.

La construcción de escenarios requiere planificación estratégica: desde la conceptualización inicial 
hasta los detalles finales, cada decisión afecta cómo el espectador experimentará tu creación.
      `,
      objetivosEspecificos: [
        "Entender la composición tridimensional versus bidimensional",
        "Identificar elementos que crean profundidad visual",
        "Reconocer patrones de lectura visual en 3D",
        "Planificar escenarios antes de la construcción"
      ]
    },

    secciones: [
      {
        id: "principios-composicion-3d",
        titulo: "Principios de Composición 3D",
        contenido: `
### Reglas Fundamentales Adaptadas al 3D

**Regla de los Tercios Tridimensional:**
La clásica regla de los tercios se expande en 3D para incluir la profundidad:
- Plano frontal, medio y posterior
- Intersecciones de interés en los tres planos
- Distribución equilibrada de elementos importantes

**Jerarquía Visual Espacial:**
En 3D, la jerarquía se establece mediante:
- **Tamaño relativo:** objetos más grandes dominan visualmente
- **Posición en profundidad:** elementos frontales tienen prioridad
- **Iluminación focal:** luces direccionales crean jerarquía
- **Color y contraste:** colores cálidos avanzan, fríos retroceden

**Flujo Visual Tridimensional:**
El movimiento visual en 3D puede ser:
- **Lineal:** siguiendo rutas claramente definidas
- **Circular:** creando recorridos cerrados
- **Espiral:** combinando movimiento circular con profundidad
- **Radial:** desde un punto central hacia el exterior

### Equilibrio y Peso Visual

**Distribución de Masas:**
- Equilibrio simétrico: distribución uniforme
- Equilibrio asimétrico: compensación visual
- Equilibrio dinámico: tensión controlada

**Factores que Afectan el Peso Visual:**
- Volumen físico del objeto
- Densidad visual (detalle/textura)
- Intensidad cromática
- Posición relativa en el espacio
        `,
        ejemplos: [
          {
            titulo: "Plaza Urbana Equilibrada",
            descripcion: "Crear una plaza que demuestre equilibrio y flujo visual",
            pasos: [
              "Diseñar layout básico siguiendo regla de tercios",
              "Posicionar fuente central como punto focal",
              "Distribuir edificios manteniendo equilibrio",
              "Crear caminos que guíen la mirada",
              "Añadir elementos secundarios balanceados"
            ]
          }
        ]
      },

      {
        id: "construccion-escenarios",
        titulo: "Construcción de Escenarios Complejos",
        contenido: `
### Metodología de Construcción por Capas

**Fase 1: Estructura Base**
- Definir límites y dimensiones del escenario
- Establecer el terreno o superficie base
- Crear elementos arquitectónicos principales
- Definir el sistema de coordenadas espaciales

**Fase 2: Elementos Principales**
- Posicionar objetos de mayor importancia
- Establecer jerarquías visuales principales
- Configurar el esquema de iluminación base
- Crear las rutas de movimiento visual

**Fase 3: Elementos Secundarios**
- Añadir objetos de apoyo y decoración
- Incluir elementos que enriquezcan la narrativa
- Ajustar el equilibrio compositivo
- Refinar las transiciones entre áreas

**Fase 4: Detalles y Acabados**
- Incorporar elementos de ambientación
- Añadir texturas y efectos finales
- Configurar la iluminación definitiva
- Realizar ajustes compositivos finales

### Gestión del Espacio Tridimensional

**Zonificación Espacial:**
- **Primer plano:** elementos de máximo impacto
- **Plano medio:** desarrollo narrativo principal
- **Fondo:** contexto y ambientación

**Transiciones entre Zonas:**
- Elementos puente que conectan planos
- Gradaciones suaves de escala y detalle
- Continuidad visual mediante color y textura

**Control de la Profundidad:**
- Uso de superposición para crear capas
- Perspectiva atmosférica mediante color
- Variación de contraste según distancia
        `,
        ejemplos: [
          {
            titulo: "Bosque Encantado por Capas",
            descripcion: "Construir un bosque mágico aplicando metodología por capas",
            pasos: [
              "Fase 1: Crear terreno ondulado base",
              "Fase 2: Posicionar árboles principales grandes",
              "Fase 3: Añadir árboles medianos y arbustos",
              "Fase 4: Incluir flores, setas y elementos mágicos",
              "Configurar iluminación filtrada entre hojas"
            ]
          }
        ]
      },

      {
        id: "ambientacion-narrativa",
        titulo: "Ambientación y Narrativa Visual",
        contenido: `
### Elementos de Ambientación

**Atmosfera y Mood:**
La ambientación establece el tono emocional de tu escenario:

**Ambientación Temporal:**
- **Amanecer:** colores cálidos, sombras largas, sensación esperanzadora
- **Mediodía:** iluminación intensa, colores saturados, energía alta
- **Atardecer:** tonos dorados/naranjas, ambiente romántico/nostálgico
- **Noche:** azules profundos, iluminación artificial, misterio

**Ambientación Climática:**
- **Soleado:** colores brillantes, sombras definidas, optimismo
- **Nublado:** luz difusa, colores apagados, tranquilidad
- **Lluvioso:** reflejos, tonos fríos, melancolía
- **Nevado:** blancos y azules, pureza, quietud

### Construcción de Narrativas Visuales

**Elementos Narrativos:**
- **Personajes implícitos:** objetos que sugieren presencia humana
- **Acción sugerida:** elementos que implican movimiento o actividad
- **Tiempo narrativo:** indicadores de past o presente
- **Conflicto visual:** tensiones compositivas que crean interés

**Técnicas de Storytelling Visual:**
1. **Secuencia implícita:** objetos que sugieren antes/después
2. **Simbolismo espacial:** uso de metáforas visuales
3. **Contraste temático:** yuxtaposición de elementos opuestos
4. **Progresión visual:** evolución gradual a través del espacio

### Creación de Atmósferas Específicas

**Escenarios Urbanos:**
- Densidad edilicia controlada
- Sistemas de circulación lógicos
- Variedad de escalas arquitectónicas
- Integración de espacios verdes

**Escenarios Naturales:**
- Respeto por formas orgánicas
- Sistemas de crecimiento natural
- Integración agua/tierra/vegetación
- Ciclos de vida vegetal

**Escenarios Fantásticos:**
- Lógica interna consistente
- Elementos imposibles creíbles
- Escalas exageradas pero armónicas
- Física alternativa coherente
        `,
        ejemplos: [
          {
            titulo: "Aldea Medieval Narrativa",
            descripcion: "Crear una aldea que cuente la historia de sus habitantes",
            pasos: [
              "Diseñar layout siguiendo patrones históricos",
              "Crear edificios con funciones específicas claramente identificables",
              "Añadir elementos que sugieran actividades cotidianas",
              "Incluir detalles que indiquen el paso del tiempo",
              "Configurar iluminación que sugiera momento del día específico"
            ]
          }
        ]
      },

      {
        id: "gestion-complejidad",
        titulo: "Gestión de la Complejidad Visual",
        contenido: `
### Organización de Elementos Múltiples

Cuando trabajas con escenarios complejos que incluyen múltiples objetos, 
es fundamental mantener la claridad visual y evitar el caos compositivo.

**Principio de Agrupación:**
- **Agrupación por proximidad:** elementos relacionados juntos
- **Agrupación por similitud:** objetos similares forman conjuntos
- **Agrupación por función:** elementos que cumplen roles similares

**Jerarquía de Información:**
1. **Nivel primario:** 1-3 elementos principales
2. **Nivel secundario:** 5-7 elementos de apoyo
3. **Nivel terciario:** detalles y texturas de fondo

### Control de la Atención Visual

**Técnicas de Focalización:**
- **Contraste selectivo:** hacer destacar elementos importantes
- **Iluminación dirigida:** usar luz para guiar la mirada
- **Escala relativa:** variar tamaños para crear jerarquía
- **Aislamiento espacial:** dar respiro visual a elementos clave

**Evitar la Sobrecarga Visual:**
- Espacios de descanso visual
- Limitación de paleta cromática
- Consistencia estilística
- Eliminación de elementos redundantes

### Optimización del Rendimiento

**Gestión de Recursos:**
- **LOD (Level of Detail):** más detalle cerca, menos lejos
- **Occlusion Culling:** ocultar objetos no visibles
- **Simplificación progresiva:** reducir complejidad en segundo plano

**Técnicas de Eficiencia:**
- Reutilización de objetos base con variaciones
- Uso estratégico de instancias
- Optimización de texturas según distancia
- Agrupación de objetos relacionados
        `,
        ejemplos: [
          {
            titulo: "Ciudad Futurista Organizada",
            descripcion: "Diseñar una metrópolis compleja manteniendo claridad visual",
            pasos: [
              "Establecer grid de planificación urbana",
              "Crear 3 tipos básicos de edificios",
              "Generar variaciones mediante escalas y colores",
              "Organizar por distritos temáticos",
              "Implementar sistema de iluminación jerárquico",
              "Añadir elementos de circulación y conexión"
            ]
          }
        ]
      }
    ]
  },

  actividades: [
    {
      id: "actividad-1",
      titulo: "Análisis Compositivo 3D",
      descripcion: "Estudia escenarios exitosos para identificar principios de composición",
      objetivos: [
        "Desarrollar ojo crítico para la composición",
        "Identificar patrones efectivos",
        "Aplicar análisis teórico a casos prácticos"
      ],
      instrucciones: [
        "Observa 5 escenarios 3D exitosos (juegos, películas, arte)",
        "Identifica el punto focal principal en cada uno",
        "Analiza cómo se distribuye el peso visual",
        "Documenta las rutas de lectura visual",
        "Recrea uno de los esquemas compositivos en Paint 3D"
      ],
      duracion: "30 minutos",
      dificultad: "Intermedio"
    },
    {
      id: "actividad-2",
      titulo: "Construcción por Capas",
      descripcion: "Practica la metodología de construcción sistemática",
      objetivos: [
        "Dominar el proceso de construcción por fases",
        "Mantener control sobre escenarios complejos",
        "Desarrollar disciplina constructiva"
      ],
      instrucciones: [
        "Elige un tema: parque, mercado, o estación",
        "Fase 1: Crea la estructura base (15 min)",
        "Fase 2: Añade elementos principales (15 min)",
        "Fase 3: Incorpora elementos secundarios (15 min)",
        "Fase 4: Finaliza con detalles (15 min)",
        "Documenta cada fase con capturas"
      ],
      duracion: "60 minutos",
      dificultad: "Intermedio"
    },
    {
      id: "actividad-3",
      titulo: "Proyecto: Escenario Narrativo",
      descripcion: "Crea un escenario completo que cuente una historia específica",
      objetivos: [
        "Integrar composición con narrativa",
        "Aplicar todos los principios aprendidos",
        "Desarrollar visión artística personal"
      ],
      instrucciones: [
        "Elige una historia simple (ej: 'El último día de clases')",
        "Planifica la narrativa visual en papel",
        "Define mood y ambientación apropiados",
        "Construye el escenario aplicando metodología por capas",
        "Incluye al menos 3 elementos que apoyen la narrativa",
        "Configura iluminación que refuerce el mood",
        "Presenta tu escenario desde 3 ángulos diferentes"
      ],
      duracion: "90 minutos",
      dificultad: "Avanzado"
    }
  ],

  recursos: [
    {
      tipo: "guia",
      titulo: "Principios de Composición para Espacios 3D",
      descripcion: "Guía teórica completa con ejemplos visuales",
      url: "#",
      duracion: "20 min"
    },
    {
      tipo: "plantillas",
      titulo: "Layouts de Escenarios Base",
      descripcion: "Plantillas compositivas para diferentes tipos de escenarios",
      url: "#",
      cantidad: "12 plantillas"
    },
    {
      tipo: "inspiracion",
      titulo: "Galería de Escenarios Destacados",
      descripcion: "Colección curada de escenarios ejemplares",
      url: "#",
      ejemplos: "30+"
    },
    {
      tipo: "herramientas",
      titulo: "Grids y Guías de Composición",
      descripcion: "Herramientas auxiliares para planificación compositiva",
      url: "#",
      formatos: "PNG, SVG"
    },
    {
      tipo: "video",
      titulo: "Masterclass: Narrativa Visual en 3D",
      descripcion: "Seminario avanzado sobre storytelling espacial",
      url: "#",
      duracion: "45 min"
    }
  ],

  evaluacion: {
    tipo: "proyecto",
    titulo: "Evaluación: Diorama Temático Completo",
    descripcion: "Crea un diorama completo que demuestre dominio compositivo y narrativo",
    criterios: [
      {
        aspecto: "Composición y Equilibrio",
        descripcion: "Aplicación efectiva de principios compositivos",
        puntos: 30
      },
      {
        aspecto: "Construcción por Capas",
        descripcion: "Organización sistemática y jerárquica de elementos",
        puntos: 25
      },
      {
        aspecto: "Narrativa Visual",
        descripcion: "Claridad y efectividad del storytelling visual",
        puntos: 25
      },
      {
        aspecto: "Gestión de Complejidad",
        descripcion: "Control efectivo de múltiples elementos sin caos visual",
        puntos: 20
      }
    ],
    instrucciones: [
      "Elige un tema específico (ej: 'Laboratorio de inventor loco', 'Jardín secreto', 'Estación espacial')",
      "Planifica la composición siguiendo principios teóricos",
      "Construye el escenario aplicando metodología por capas",
      "Incluye una narrativa visual clara y coherente",
      "Gestiona al menos 15 elementos diferentes manteniendo claridad",
      "Configura iluminación que apoye mood y narrativa",
      "Presenta el resultado desde múltiples perspectivas"
    ],
    tiempoLimite: "120 minutos",
    puntuacionMaxima: 100,
    entregables: [
      "Archivo del proyecto Paint 3D",
      "3 capturas desde ángulos diferentes",
      "Documento explicando la narrativa visual",
      "Sketch inicial de planificación compositiva"
    ]
  },

  glosario: [
    {
      termino: "Composición 3D",
      definicion: "Organización efectiva de elementos en un espacio tridimensional"
    },
    {
      termino: "Jerarquía Visual",
      definicion: "Sistema de organización que prioriza elementos según su importancia"
    },
    {
      termino: "Flujo Visual",
      definicion: "Recorrido que sigue la mirada del espectador al observar la escena"
    },
    {
      termino: "Peso Visual",
      definicion: "Capacidad de un elemento para atraer y retener la atención"
    },
    {
      termino: "Zonificación Espacial",
      definicion: "División del espacio en áreas con funciones compositivas específicas"
    },
    {
      termino: "Narrativa Visual",
      definicion: "Capacidad de contar una historia mediante elementos visuales únicamente"
    },
    {
      termino: "Mood",
      definicion: "Atmósfera emocional que transmite un escenario o composición"
    },
    {
      termino: "LOD (Level of Detail)",
      definicion: "Técnica de optimización que varía el detalle según la distancia al observador"
    },
    {
      termino: "Punto Focal",
      definicion: "Elemento o área que concentra la máxima atención visual"
    },
    {
      termino: "Equilibrio Compositivo",
      definicion: "Distribución armónica del peso visual para crear estabilidad"
    },
    {
      termino: "Ambientación",
      definicion: "Conjunto de elementos que crean el contexto y atmósfera de un escenario"
    },
    {
      termino: "Diorama",
      definicion: "Representación tridimensional de una escena en un espacio contenido"
    }
  ],

  navegacion: {
    anterior: {
      id: 3,
      titulo: "Pintura y decoración"
    },
    siguiente: {
      id: 5,
      titulo: "Exposición creativa"
    }
  }
};

export default tema04EscenariosComposicion;
