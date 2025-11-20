/**
 * Tema 4: Escenarios y composición
 * Curso: Diseñador Gráfico Paint 3D
 * Versión corregida - Compatible con sistema modular
 */

const tema04EscenariosComposicion = {
  id: '4',
  titulo: "Escenarios y composición",
  tematica: "Construcción de escenas narrativas",
  duracion: "50-65 minutos",
  objetivos: [
    "Dominar los principios de composición en 3D",
    "Crear escenarios equilibrados y atractivos",
    "Gestionar la profundidad y las capas visuales",
    "Desarrollar narrativas visuales efectivas"
  ],
  introduccion: {
    titulo: "Introducción a la Composición 3D",
    contenido: `
      <h3>🎬 El arte de componer escenas en 3D</h3>
      <p>La composición en espacios tridimensionales va más allá de organizar elementos en una superficie plana. En Paint 3D, trabajas con profundidad real, donde cada objeto tiene volumen y ocupa un espacio específico en la escena.</p>

      <p>Un escenario 3D efectivo debe guiar la mirada del espectador, contar una historia visual y crear una experiencia inmersiva. Los principios tradicionales de composición se adaptan y expanden para incluir conceptos como jerarquía espacial, flujo tridimensional y narrativa ambiental.</p>

      <p>La construcción de escenarios requiere planificación estratégica: desde la conceptualización inicial hasta los detalles finales, cada decisión afecta cómo el espectador experimentará tu creación.</p>

      <h4>Diferencias clave con la composición 2D:</h4>
      <ul>
        <li>Gestión de múltiples planos de profundidad</li>
        <li>Consideración de la perspectiva cambiante</li>
        <li>Uso del espacio negativo tridimensional</li>
        <li>Interacción entre elementos en diferentes capas</li>
      </ul>
    `,
    actividades: [
      {
        tipo: "observacion",
        instruccion: "Observa una escena cotidiana (tu habitación, un parque) e identifica los elementos en primer plano, plano medio y fondo",
        tiempo: "5 minutos"
      }
    ]
  },
  secciones: [
    {
      id: 1,
      titulo: "Principios de Composición 3D",
      contenido: `
        <h3>📐 Reglas fundamentales adaptadas al 3D</h3>
        
        <h4>Regla de los Tercios Tridimensional:</h4>
        <p>La clásica regla de los tercios se expande en 3D para incluir la profundidad:</p>
        <ul>
          <li><strong>Plano frontal, medio y posterior:</strong> Distribución de elementos en capas</li>
          <li><strong>Intersecciones de interés:</strong> Puntos clave en los tres planos</li>
          <li><strong>Distribución equilibrada:</strong> Elementos importantes en diferentes niveles</li>
        </ul>

        <h4>Jerarquía Visual Espacial:</h4>
        <p>En 3D, la jerarquía se establece mediante:</p>
        <ul>
          <li><strong>Tamaño relativo:</strong> Objetos más grandes dominan visualmente</li>
          <li><strong>Posición en profundidad:</strong> Elementos frontales tienen prioridad</li>
          <li><strong>Iluminación focal:</strong> Luces direccionales crean jerarquía</li>
          <li><strong>Color y contraste:</strong> Colores cálidos avanzan, fríos retroceden</li>
        </ul>

        <h4>Flujo Visual Tridimensional:</h4>
        <p>El movimiento visual en 3D puede ser:</p>
        <ul>
          <li><strong>Lineal:</strong> Siguiendo rutas claramente definidas</li>
          <li><strong>Circular:</strong> Creando recorridos cerrados</li>
          <li><strong>Espiral:</strong> Combinando movimiento circular con profundidad</li>
          <li><strong>Radial:</strong> Desde un punto central hacia el exterior</li>
        </ul>

        <h4>Equilibrio y Peso Visual:</h4>
        <ul>
          <li><strong>Equilibrio simétrico:</strong> Distribución uniforme</li>
          <li><strong>Equilibrio asimétrico:</strong> Compensación visual</li>
          <li><strong>Equilibrio dinámico:</strong> Tensión controlada</li>
        </ul>

        <div class="principio-clave">
          <h4>⚖️ Factores que afectan el peso visual</h4>
          <ul>
            <li>Volumen físico del objeto</li>
            <li>Densidad visual (detalle/textura)</li>
            <li>Intensidad cromática</li>
            <li>Posición en el espacio</li>
            <li>Iluminación recibida</li>
          </ul>
        </div>
      `,
      actividades: [
        {
          tipo: "analisis",
          instruccion: "Crea una escena simple con 3 objetos aplicando la regla de los tercios en profundidad",
          tiempo: "15 minutos"
        }
      ]
    },
    {
      id: 2,
      titulo: "Construcción por capas",
      contenido: `
        <h3>🏗️ Metodología de construcción sistemática</h3>
        
        <h4>Planificación por fases:</h4>
        <p>La construcción eficiente de escenarios complejos requiere un enfoque sistemático:</p>
        
        <h5>Fase 1: Estructura base (15-20% del tiempo)</h5>
        <ul>
          <li>Definir límites y escala del escenario</li>
          <li>Establecer elementos arquitectónicos principales</li>
          <li>Crear referencias de suelo y horizonte</li>
          <li>Definir puntos de vista principales</li>
        </ul>

        <h5>Fase 2: Elementos principales (40-50% del tiempo)</h5>
        <ul>
          <li>Posicionar objetos de mayor importancia narrativa</li>
          <li>Establecer la jerarquía visual</li>
          <li>Configurar iluminación básica</li>
          <li>Definir las rutas de lectura visual</li>
        </ul>

        <h5>Fase 3: Elementos secundarios (20-25% del tiempo)</h5>
        <ul>
          <li>Añadir objetos de apoyo y contexto</li>
          <li>Completar la narrativa visual</li>
          <li>Equilibrar la composición</li>
          <li>Añadir elementos de transición</li>
        </ul>

        <h5>Fase 4: Detalles y refinamiento (10-15% del tiempo)</h5>
        <ul>
          <li>Añadir detalles específicos</li>
          <li>Ajustar iluminación final</li>
          <li>Revisar la composición desde múltiples ángulos</li>
          <li>Pulir elementos problemáticos</li>
        </ul>

        <h4>Gestión de la profundidad:</h4>
        
        <h5>Organización espacial:</h5>
        <ul>
          <li><strong>Primer plano:</strong> Elementos de máximo impacto</li>
          <li><strong>Plano medio:</strong> Desarrollo narrativo principal</li>
          <li><strong>Fondo:</strong> Contexto y ambientación</li>
        </ul>

        <h5>Transiciones entre zonas:</h5>
        <ul>
          <li>Elementos puente que conectan planos</li>
          <li>Gradaciones suaves de escala y detalle</li>
          <li>Continuidad visual mediante color y textura</li>
        </ul>

        <div class="metodologia">
          <h4>🎯 Metodología probada</h4>
          <ol>
            <li>Boceto conceptual inicial</li>
            <li>Definición de escala y límites</li>
            <li>Construcción de estructura base</li>
            <li>Posicionamiento de elementos principales</li>
            <li>Adición de elementos secundarios</li>
            <li>Refinamiento y detalles finales</li>
          </ol>
        </div>
      `,
      actividades: [
        {
          tipo: "proyecto",
          instruccion: "Construye un parque simple siguiendo la metodología por fases, dedicando el tiempo sugerido a cada fase",
          tiempo: "25 minutos"
        }
      ]
    },
    {
      id: 3,
      titulo: "Narrativa visual y storytelling",
      contenido: `
        <h3>📚 Contando historias a través del espacio</h3>
        
        <h4>Elementos narrativos espaciales:</h4>
        
        <h5>Punto focal narrativo:</h5>
        <ul>
          <li><strong>Elemento principal:</strong> El objeto o área que cuenta la historia central</li>
          <li><strong>Contexto de apoyo:</strong> Elementos que enriquecen la narrativa</li>
          <li><strong>Detalles significativos:</strong> Objetos que añaden información específica</li>
        </ul>

        <h5>Flujo narrativo:</h5>
        <ul>
          <li><strong>Introducción visual:</strong> Primeros elementos que ve el espectador</li>
          <li><strong>Desarrollo:</strong> Secuencia de elementos que desarrollan la historia</li>
          <li><strong>Clímax visual:</strong> Momento de mayor impacto en la escena</li>
          <li><strong>Resolución:</strong> Elementos que concluyen la narrativa</li>
        </ul>

        <h4>Técnicas de storytelling 3D:</h4>
        
        <h5>Uso del espacio negativo:</h5>
        <ul>
          <li>Espacios vacíos que dirigen la atención</li>
          <li>Pausas visuales que permiten procesamiento</li>
          <li>Áreas de descanso entre elementos complejos</li>
        </ul>

        <h5>Simbolismo espacial:</h5>
        <ul>
          <li><strong>Altura:</strong> Poder, aspiración, importancia</li>
          <li><strong>Profundidad:</strong> Misterio, complejidad, exploración</li>
          <li><strong>Centralidad:</strong> Importancia, estabilidad, enfoque</li>
          <li><strong>Marginalidad:</strong> Secundario, soporte, contexto</li>
        </ul>

        <h4>Coherencia narrativa:</h4>
        <ul>
          <li><strong>Estilo visual consistente:</strong> Mantener uniformidad estética</li>
          <li><strong>Lógica espacial:</strong> Relaciones creíbles entre elementos</li>
          <li><strong>Temporalidad:</strong> Elementos que sugieren momento específico</li>
          <li><strong>Atmósfera:</strong> Mood que refuerza la narrativa</li>
        </ul>

        <div class="ejemplo-narrativo">
          <h4>📖 Ejemplo: "El laboratorio del inventor"</h4>
          <ul>
            <li><strong>Punto focal:</strong> Mesa de trabajo con invento en progreso</li>
            <li><strong>Contexto:</strong> Estanterías con herramientas y materiales</li>
            <li><strong>Detalles:</strong> Papeles dispersos, taza de café, reloj</li>
            <li><strong>Narrativa:</strong> Científico trabajando tarde en proyecto importante</li>
          </ul>
        </div>
      `,
      actividades: [
        {
          tipo: "creativo",
          instruccion: "Diseña una escena que cuente la historia de 'una tarde en el jardín secreto'",
          tiempo: "20 minutos"
        }
      ]
    }
  ],
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
      dificultad: "Avanzado"
    }
  ],
  recursos: {
    documentos: [
      {
        tipo: "teoria",
        titulo: "Principios de Composición Visual",
        descripcion: "Fundamentos teóricos de la composición aplicados al 3D",
        url: "#"
      },
      {
        tipo: "ejemplos",
        titulo: "Galería de Escenarios Exemplares",
        descripcion: "Colección de escenarios bien compuestos para inspiración",
        url: "#"
      },
      {
        tipo: "plantillas",
        titulo: "Plantillas de Composición",
        descripcion: "Esquemas base para diferentes tipos de escenarios",
        url: "#"
      }
    ],
    enlaces: [],
    videos: []
  },
  evaluacion: {
    tipo: "cuestionario",
    titulo: "Quiz: Composición y escenarios en Paint 3D",
    descripcion: "Responde las siguientes preguntas sobre los principios de composición y construcción de escenarios en Paint 3D.",
    preguntas: [
      {
        pregunta: "¿Qué principio ayuda a distribuir elementos en diferentes planos de profundidad?",
        opciones: [
          "Regla de los tercios tridimensional",
          "Jerarquía visual",
          "Flujo visual",
          "Equilibrio simétrico"
        ],
        respuesta: 0
      },
      {
        pregunta: "¿Cuál es el propósito de la narrativa visual en una escena 3D?",
        opciones: [
          "Organizar los colores",
          "Contar una historia mediante elementos visuales",
          "Ajustar la iluminación",
          "Crear equilibrio simétrico"
        ],
        respuesta: 1
      },
      {
        pregunta: "¿Qué factor NO afecta el peso visual de un objeto en 3D?",
        opciones: [
          "Volumen físico",
          "Color y contraste",
          "Posición relativa",
          "Idioma del software"
        ],
        respuesta: 3
      },
      {
        pregunta: "¿Para qué sirve la construcción por capas en escenarios 3D?",
        opciones: [
          "Organizar elementos de forma jerárquica",
          "Eliminar objetos duplicados",
          "Cambiar el fondo de la escena",
          "Ajustar el brillo"
        ],
        respuesta: 0
      },
      {
        pregunta: "¿Qué elemento concentra la máxima atención visual en una composición?",
        opciones: [
          "Punto focal",
          "Plano medio",
          "Espacio negativo",
          "Narrativa visual"
        ],
        respuesta: 0
      }
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
      definicion: "Recorrido que sigue la mirada del espectador a través de la escena"
    },
    {
      termino: "Peso Visual",
      definicion: "Percepción de importancia o prominencia de un elemento en la composición"
    },
    {
      termino: "Punto Focal",
      definicion: "Elemento principal que atrae y mantiene la atención del espectador"
    },
    {
      termino: "Espacio Negativo",
      definicion: "Áreas vacías o menos densas que ayudan a organizar la composición"
    },
    {
      termino: "Narrativa Visual",
      definicion: "Capacidad de una imagen o escena para contar una historia"
    },
    {
      termino: "Profundidad de Campo",
      definicion: "Rango de distancias en una escena que aparecen nítidas al espectador"
    }
  ]
};

export default tema04EscenariosComposicion;
