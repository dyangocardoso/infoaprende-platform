/**
 * Tema 2: Creación de objetos 3D
 * Curso: Diseñador Gráfico Paint 3D
 */

const tema02CreacionObjetos3D = {
  id: '2',
  titulo: "Creación de objetos 3D",
  tematica: "Modelado básico tridimensional",
  duracion: "60-80 minutos",
  objetivos: [
    "Dominar las técnicas de modelado básico en Paint 3D",
    "Crear objetos complejos combinando formas primitivas",
    "Utilizar herramientas de extrusión y modificación",
    "Aplicar transformaciones precisas en objetos 3D",
    "Desarrollar habilidades de diseño tridimensional",
    "Crear modelos funcionales y estéticamente atractivos"
  ],
  introduccion: {
    titulo: 'Introducción al modelado 3D',
    contenido: `
      <h3>🎯 Fundamentos del Modelado 3D</h3>
      <p>El modelado 3D es el arte de crear objetos tridimensionales digitales que pueden representar desde elementos cotidianos hasta creaciones fantásticas. En Paint 3D, este proceso se vuelve accesible gracias a herramientas intuitivas que permiten a usuarios de cualquier nivel crear modelos complejos.</p>

      <p>En este tema profundizaremos en las técnicas fundamentales del modelado 3D, aprendiendo a combinar formas básicas para crear objetos sofisticados. Exploraremos cómo las transformaciones, la extrusión y la manipulación de geometría nos permiten dar vida a nuestras ideas.</p>

      <p>El dominio de estas técnicas es esencial para cualquier proyecto 3D, desde la creación de objetos decorativos hasta el desarrollo de prototipos funcionales. Paint 3D nos ofrece las herramientas necesarias para comenzar este emocionante viaje hacia la creación tridimensional.</p>
    `,
    actividades: [
      {
        tipo: "reflexion",
        instruccion: "Observa 3 objetos cotidianos y descompónlos mentalmente en formas básicas (cubos, esferas, cilindros)",
        tiempo: "5 minutos"
      }
    ]
  },
  secciones: [
      {
        id: 'formas-primitivas',
        titulo: 'Dominando las formas primitivas',
        contenido: [
          {
            subtitulo: 'Formas básicas y sus aplicaciones',
            texto: `
              Las formas primitivas son los bloques de construcción fundamentales del modelado 3D:

              **Cubo/Caja:**
              - **Aplicaciones**: Edificios, muebles, estructuras arquitectónicas
              - **Ventajas**: Fácil de modificar, ideal para construcciones geométricas
              - **Técnicas**: Escalado no uniforme para crear rectángulos, uso como base estructural
              - **Consejos**: Perfecto para comenzar proyectos complejos

              **Esfera:**
              - **Aplicaciones**: Cabezas, pelotas, planetas, elementos orgánicos
              - **Ventajas**: Superficie suave, ideal para formas naturales
              - **Técnicas**: Escalado para crear elipsoides, cortes para hemisferios
              - **Consejos**: Base excelente para caracteres y formas orgánicas

              **Cilindro:**
              - **Aplicaciones**: Columnas, tubos, troncos, ruedas
              - **Ventajas**: Versatilidad para elementos circulares y alargados
              - **Técnicas**: Escalado en altura para torres, en ancho para discos
              - **Consejos**: Fundamental para arquitectura y vehículos

              **Cono:**
              - **Aplicaciones**: Techos, sombreros, árboles, proyectiles
              - **Ventajas**: Forma natural para elementos puntiagudos
              - **Técnicas**: Escalado de la base para diferentes proporciones
              - **Consejos**: Excelente para crear jerarquía visual

              **Pirámide:**
              - **Aplicaciones**: Techos angulares, montañas, estructuras geométricas
              - **Ventajas**: Líneas limpias y definidas
              - **Técnicas**: Rotación para diferentes orientaciones
              - **Consejos**: Ideal para arquitectura moderna y elementos decorativos
            `,
            ejemplo: {
              titulo: 'Análisis de formas en objetos cotidianos',
              descripcion: 'Identifica qué formas primitivas componen objetos de tu entorno.',
              pasos: [
                'Observa una silla y identifica sus componentes básicos',
                'Descompón mentalmente el objeto en formas primitivas',
                'Crea la silla en Paint 3D usando solo formas básicas',
                'Compara tu modelo con el objeto real',
                'Ajusta proporciones y posiciones para mayor realismo'
              ]
            }
          },
          {
            subtitulo: 'Técnicas de combinación',
            texto: `
              La verdadera potencia del modelado surge al combinar múltiples formas:

              **Principios de composición:**
              - **Jerarquía**: Elementos principales y secundarios
              - **Proporción**: Relaciones armoniosas entre tamaños
              - **Equilibrio**: Distribución visual del peso
              - **Ritmo**: Repetición y variación de elementos

              **Métodos de unión:**
              - **Superposición**: Formas que se intersectan naturalmente
              - **Conexión**: Elementos que se tocan en puntos específicos
              - **Anidación**: Formas menores dentro de mayores
              - **Agrupación**: Múltiples elementos formando un conjunto

              **Técnicas avanzadas:**
              - **Sustracción visual**: Usar formas para "recortar" otras
              - **Adición progresiva**: Construir complejidad gradualmente
              - **Simetría**: Uso de reflejos y patrones
              - **Asimetría controlada**: Equilibrio dinámico sin simetría

              **Flujo de trabajo recomendado:**
              1. Planificar la estructura principal
              2. Crear elementos base más grandes
              3. Añadir elementos secundarios
              4. Refinar detalles y proporciones
              5. Realizar ajustes finales de posición
            `,
            imagen: '/images/paint3d/combinacion-formas.png'
          },
          {
            subtitulo: 'Modificación de primitivas',
            texto: `
              Transformar formas básicas para crear variaciones únicas:

              **Escalado direccional:**
              - **Eje X**: Modificar ancho/amplitud
              - **Eje Y**: Cambiar altura/elevación
              - **Eje Z**: Alterar profundidad/grosor
              - **Proporcional**: Mantener relaciones originales

              **Técnicas de deformación:**
              - **Estiramiento**: Elongar en una dirección específica
              - **Compresión**: Reducir dimensiones manteniendo volumen
              - **Aplastamiento**: Reducir altura preservando área base
              - **Extensión**: Alargar preservando sección transversal

              **Rotación creativa:**
              - **45°**: Ángulos dinámicos y interesantes
              - **90°**: Cambios de orientación fundamentales
              - **Ángulos personalizados**: Efectos únicos y naturales
              - **Rotación múltiple**: Combinación de ejes para efectos complejos

              **Posicionamiento estratégico:**
              - **Alineación**: Uso de referencias visuales
              - **Distribución**: Espaciado uniforme o intencional
              - **Profundidad**: Capas visuales para mayor interés
              - **Altura**: Variación vertical para dinamismo
            `
          }
        ]
      },
      {
        id: 'extrusion-modelado',
        titulo: 'Extrusión y modelado avanzado',
        contenido: [
          {
            subtitulo: 'Conceptos de extrusión',
            texto: `
              La extrusión es una técnica fundamental para crear profundidad desde formas 2D:

              **¿Qué es la extrusión?**
              - Proceso de dar volumen a formas planas
              - Conversión de dibujos 2D en objetos 3D
              - Técnica esencial para modelado arquitectónico
              - Base para crear formas complejas personalizadas

              **Tipos de extrusión en Paint 3D:**
              - **Extrusión directa**: Proyección perpendicular al plano
              - **Extrusión con bisel**: Bordes suavizados y redondeados
              - **Extrusión variable**: Cambio de tamaño durante la proyección
              - **Extrusión múltiple**: Varias operaciones en el mismo objeto

              **Flujo de trabajo para extrusión:**
              1. **Crear forma base 2D**: Dibujar el perfil deseado
              2. **Seleccionar herramienta de extrusión**: Activar modo 3D
              3. **Ajustar profundidad**: Definir la extensión del volumen
              4. **Configurar bisel**: Suavizar bordes si es necesario
              5. **Refinar detalles**: Ajustar proporciones y posición

              **Aplicaciones prácticas:**
              - **Letras 3D**: Extrusión de texto para carteles
              - **Logos**: Dar volumen a diseños corporativos
              - **Arquitectura**: Crear edificios desde planos
              - **Decoración**: Elementos ornamentales personalizados
            `,
            ejemplo: {
              titulo: 'Creación de letra 3D personalizada',
              descripcion: 'Usa extrusión para convertir texto 2D en letras tridimensionales.',
              pasos: [
                'Crea un texto 2D con una letra grande (ej: tu inicial)',
                'Selecciona la herramienta de efectos 3D',
                'Aplica extrusión al texto seleccionado',
                'Ajusta la profundidad para lograr el efecto deseado',
                'Experimenta con diferentes niveles de bisel',
                'Añade color y materiales para mayor impacto visual'
              ]
            }
          },
          {
            subtitulo: 'Modelado orgánico vs geométrico',
            texto: `
              Diferentes enfoques para crear distintos tipos de objetos:

              **Modelado geométrico:**
              - **Características**: Líneas rectas, ángulos definidos, simetría
              - **Herramientas principales**: Formas primitivas, transformaciones precisas
              - **Aplicaciones**: Arquitectura, máquinas, muebles, vehículos
              - **Ventajas**: Precisión, facilidad de modificación, aspecto profesional

              **Técnicas geométricas:**
              - Uso de snap/ajuste para alineación perfecta
              - Medidas exactas y proporciones matemáticas
              - Repetición de módulos y patrones
              - Simetría bilateral y radial

              **Modelado orgánico:**
              - **Características**: Curvas suaves, formas naturales, asimetría
              - **Herramientas principales**: Pinceles 3D, formas suavizadas
              - **Aplicaciones**: Caracteres, plantas, animales, paisajes
              - **Ventajas**: Naturalidad, expresividad, movimiento visual

              **Técnicas orgánicas:**
              - Uso de pinceles 3D para formas fluidas
              - Deformación gradual de primitivas
              - Combinación asimétrica de elementos
              - Texturas y superficies irregulares

              **Enfoque híbrido:**
              - Combinación de ambas técnicas según necesidades
              - Base geométrica con detalles orgánicos
              - Estructura orgánica con elementos geométricos
              - Transición suave entre diferentes estilos
            `,
            imagen: '/images/paint3d/modelado-tipos.png'
          },
          {
            subtitulo: 'Herramientas de modificación',
            texto: `
              Paint 3D ofrece diversas herramientas para refinar y perfeccionar modelos:

              **Herramientas de transformación:**
              - **Mover**: Cambio de posición en espacio 3D
              - **Rotar**: Giros en ejes X, Y, Z
              - **Escalar**: Cambio de tamaño proporcional o direccional
              - **Inclinar**: Deformación angular controlada

              **Herramientas de edición:**
              - **Duplicar**: Creación de copias idénticas
              - **Reflejar**: Creación de imágenes espejo
              - **Agrupar**: Combinación de múltiples objetos
              - **Separar**: División de objetos complejos

              **Modificadores avanzados:**
              - **Suavizado**: Reducción de ángulos duros
              - **Biselado**: Creación de bordes chamflanados
              - **Subdivisión**: Incremento de resolución geométrica
              - **Simplificación**: Reducción de complejidad

              **Técnicas de refinamiento:**
              - **Iteración progresiva**: Mejoras graduales del modelo
              - **Revisión desde múltiples ángulos**: Verificación de proporciones
              - **Comparación con referencias**: Uso de imágenes de referencia
              - **Prueba de escalabilidad**: Verificación en diferentes tamaños
            `
          }
        ]
      },
      {
        id: 'proyectos-practicos',
        titulo: 'Proyectos prácticos de modelado',
        contenido: [
          {
            subtitulo: 'Proyecto: Vehículo simple',
            texto: `
              Crear un vehículo nos permite practicar múltiples técnicas de modelado:

              **Planificación del proyecto:**
              - **Tipo de vehículo**: Automóvil simple estilo cartoon
              - **Componentes principales**: Carrocería, ruedas, ventanas, detalles
              - **Formas base**: Cubos escalados, cilindros, esferas
              - **Tiempo estimado**: 45-60 minutos

              **Construcción paso a paso:**

              **1. Carrocería principal:**
              - Crear cubo base y escalarlo para formar el cuerpo
              - Ajustar proporciones (más ancho que alto)
              - Redondear esquinas si se desea aspecto más suave

              **2. Cabina del conductor:**
              - Añadir cubo más pequeño en la parte superior
              - Posicionar hacia atrás para crear capó
              - Escalar verticalmente para ventanas

              **3. Ruedas:**
              - Crear cilindros para las ruedas principales
              - Posicionar en las cuatro esquinas
              - Escalar para proporciones realistas
              - Añadir cilindros más pequeños para llantas

              **4. Detalles adicionales:**
              - Ventanas con cubos transparentes o planos
              - Parachoques con cilindros alargados
              - Faros con esferas pequeñas
              - Elementos decorativos según creatividad

              **Consejos de construcción:**
              - Trabajar en vista lateral para mejor proporción
              - Usar simetría para ruedas y elementos pareados
              - Mantener estilo consistente (realista o cartoon)
              - Guardar versiones incrementales del progreso
            `,
            imagen: '/images/paint3d/proyecto-vehiculo.png'
          },
          {
            subtitulo: 'Proyecto: Edificio modular',
            texto: `
              Un edificio permite explorar arquitectura y técnicas de construcción modular:

              **Concepto de diseño modular:**
              - **Módulos base**: Elementos repetibles (pisos, ventanas, columnas)
              - **Variaciones**: Ligeras modificaciones para evitar monotonía
              - **Ensamblaje**: Combinación sistemática de módulos
              - **Escalabilidad**: Facilidad para crecer o reducir

              **Elementos estructurales:**

              **Base y cimentación:**
              - Plataforma base más ancha que el edificio
              - Altura suficiente para dar sensación de solidez
              - Puede incluir escalones o rampas de acceso

              **Estructura principal:**
              - Muros principales usando cubos escalados
              - Distribución de espacios interiores (opcional)
              - Consideración de proporciones arquitectónicas

              **Sistema de ventanas:**
              - Patrón repetitivo para coherencia visual
              - Variaciones en tamaño según función de la habitación
              - Marcos y detalles para mayor realismo

              **Elementos de techo:**
              - Estructura de cubierta (plana, inclinada, compleja)
              - Elementos técnicos (chimeneas, antenas, conductos)
              - Detalles decorativos según estilo arquitectónico

              **Detalles finales:**
              - Entrada principal con énfasis visual
              - Elementos de paisajismo básico
              - Accesorios urbanos (farolas, señales, etc.)
            `
          },
          {
            subtitulo: 'Proyecto: Personaje básico',
            texto: `
              Crear un personaje simple combina técnicas orgánicas y geométricas:

              **Enfoque de diseño:**
              - **Estilo**: Cartoon/caricatura para mayor simplicidad
              - **Proporciones**: Exageradas para mayor expresividad
              - **Personalidad**: Definir carácter antes de modelar
              - **Poses**: Comenzar con pose neutra y simétrica

              **Construcción anatómica:**

              **Cabeza y rostro:**
              - Esfera base escalada según proporciones deseadas
              - Elementos faciales con formas pequeñas (ojos, nariz, boca)
              - Expresión básica definida por posición de elementos
              - Cabello usando formas orgánicas o geométricas según estilo

              **Torso y extremidades:**
              - Cilindros y cubos redondeados para cuerpo principal
              - Brazos y piernas con proporciones cartoon
              - Articulaciones sugeridas con cambios de forma
              - Manos y pies simplificados pero reconocibles

              **Vestimenta y accesorios:**
              - Ropa básica usando formas geométricas adaptadas
              - Colores distintivos para personalidad
              - Accesorios característicos (sombrero, gafas, etc.)
              - Detalles que refuercen el carácter del personaje

              **Consejos para personajes:**
              - Comenzar con formas muy simples
              - Exagerar características distintivas
              - Mantener consistencia en el estilo
              - Probar diferentes ángulos de visualización
            `,
            ejemplo: {
              titulo: 'Robot amigable',
              descripcion: 'Crea un personaje robot usando principalmente formas geométricas.',
              pasos: [
                'Diseña la cabeza con un cubo redondeado',
                'Añade ojos con cilindros o esferas pequeñas',
                'Crea el cuerpo con un cilindro o cubo principal',
                'Agrega brazos y piernas articulados',
                'Incluye detalles técnicos (antenas, luces, botones)',
                'Aplica colores metálicos y tecnológicos',
                'Añade una expresión amigable'
              ]
            }
          }
        ]
      }
    ],
    actividades: [
      {
        id: 'actividad-1',
        titulo: 'Análisis y recreación de objetos',
        descripcion: 'Desarrolla habilidades de observación y descomposición de formas complejas.',
        instrucciones: [
          'Elige 3 objetos cotidianos de diferentes categorías (mueble, vehículo, utensilio)',
          'Analiza cada objeto identificando las formas primitivas que lo componen',
          'Crea una tabla con: objeto, formas identificadas, proporciones aproximadas',
          'Recrea cada objeto en Paint 3D usando solo las formas identificadas',
          'Compara tus modelos con los objetos reales',
          'Anota las diferencias y posibles mejoras',
          'Documenta tu proceso con capturas de pantalla'
        ],
        objetivos: [
          'Desarrollar habilidades de análisis visual',
          'Comprender la descomposición en formas básicas',
          'Practicar la traducción de realidad a modelo 3D'
        ]
      },
      {
        id: 'actividad-2',
        titulo: 'Taller de extrusión creativa',
        descripcion: 'Explora las posibilidades de la extrusión para crear formas únicas.',
        instrucciones: [
          'Diseña 5 formas 2D diferentes: una letra, un símbolo, una silueta, un logo simple, y una forma abstracta',
          'Aplica extrusión a cada forma con diferentes configuraciones',
          'Experimenta con distintos niveles de profundidad y bisel',
          'Combina algunas formas extruidas para crear objetos complejos',
          'Crea una composición artística con todas las formas',
          'Aplica colores y materiales complementarios',
          'Exporta la composición desde múltiples ángulos'
        ],
        tiempo_estimado: '40-50 minutos',
        nivel: 'intermedio'
      },
      {
        id: 'actividad-3',
        titulo: 'Desafío de modelado: Set de cocina',
        descripcion: 'Crea un conjunto de utensilios de cocina aplicando diferentes técnicas.',
        instrucciones: [
          'Planifica un set de 6 utensilios de cocina diferentes',
          'Cada utensilio debe usar una técnica de modelado distinta',
          'Incluye al menos: un objeto con extrusión, uno orgánico, uno geométrico',
          'Mantén proporciones realistas entre todos los objetos',
          'Agrupa los objetos en una escena coherente',
          'Aplica una paleta de colores unificada',
          'Documenta el proceso de creación de cada utensilio'
        ],
        evaluacion: {
          criterios: [
            'Variedad en las técnicas de modelado utilizadas',
            'Realismo en las proporciones y formas',
            'Coherencia visual del conjunto',
            'Calidad técnica de cada modelo individual'
          ]
        }
      },
      {
        id: 'actividad-4',
        titulo: 'Proyecto final: Ciudad en miniatura',
        descripcion: 'Combina todas las técnicas aprendidas en un proyecto ambicioso.',
        instrucciones: [
          'Diseña una ciudad pequeña con al menos 8 edificios diferentes',
          'Incluye diferentes tipos de estructuras: residencial, comercial, público',
          'Añade elementos urbanos: calles, parques, vehículos, mobiliario urbano',
          'Utiliza técnicas modulares para eficiencia en la construcción',
          'Crea al menos 3 tipos de vehículos diferentes',
          'Incluye elementos naturales: árboles, jardines, paisajismo',
          'Desarrolla un sistema de colores coherente para toda la ciudad',
          'Crea múltiples vistas: aérea, street view, y perspectivas dramáticas'
        ],
        tiempo_estimado: '90-120 minutos',
        nivel: 'avanzado'
      }
    ],
    recursos: [
      {
        tipo: 'guia',
        titulo: 'Proporciones y escalas en modelado 3D',
        descripcion: 'Guía para mantener proporciones realistas en tus modelos',
        contenido: `
          **Proporciones humanas básicas:**
          - Cabeza = 1 unidad
          - Cuerpo total = 7-8 cabezas
          - Torso = 3 cabezas
          - Piernas = 4 cabezas
          
          **Proporciones de vehículos:**
          - Automóvil: largo = 2.5 x ancho
          - Ruedas = 1/3 de la altura total
          - Ventanas = 1/3 de la altura total
          
          **Arquitectura básica:**
          - Puerta estándar = 2m de altura
          - Ventana = 1.2m de altura
          - Piso residencial = 2.7m de altura
          - Piso comercial = 3-4m de altura
          
          **Consejos de escala:**
          - Usar objetos de referencia conocidos
          - Mantener consistencia en todo el proyecto
          - Verificar desde múltiples ángulos
          - Comparar con fotografías reales
        `
      },
      {
        tipo: 'referencia',
        titulo: 'Biblioteca de formas y objetos',
        descripcion: 'Catálogo de objetos comunes y sus descomposiciones',
        contenido: `
          **Muebles básicos:**
          - Mesa = plano + 4 cilindros (patas)
          - Silla = cubo (asiento) + cubo (respaldo) + 4 cilindros
          - Estantería = cubos apilados y conectados
          
          **Vehículos simples:**
          - Auto = 2 cubos + 4 cilindros (ruedas)
          - Camión = 3 cubos + 6 cilindros
          - Bicicleta = 2 cilindros + tubos conectores
          
          **Arquitectura:**
          - Casa = cubo + prisma triangular (techo)
          - Torre = cilindro + cono
          - Puente = cubos largos + cilindros (pilares)
          
          **Elementos naturales:**
          - Árbol = cilindro + esfera deformada
          - Montaña = cono truncado o pirámide
          - Nube = múltiples esferas conectadas
        `
      },
      {
        tipo: 'plantilla',
        titulo: 'Plantillas de proyectos de modelado',
        descripcion: 'Proyectos base con estructura inicial',
        enlace: '/recursos/paint3d/plantillas-modelado.zip'
      }
    ],
    evaluacion: {
      tipo: 'proyecto',
      descripcion: 'Evaluación basada en proyectos prácticos de modelado 3D',
      criterios: [
        {
          aspecto: 'Técnica de modelado',
          descripcion: 'Demuestra dominio de diferentes técnicas de creación de objetos 3D',
          peso: 30
        },
        {
          aspecto: 'Uso de formas primitivas',
          descripcion: 'Utiliza eficientemente las formas básicas para crear objetos complejos',
          peso: 25
        },
        {
          aspecto: 'Proporciones y realismo',
          descripcion: 'Mantiene proporciones apropiadas y coherencia visual',
          peso: 25
        },
        {
          aspecto: 'Creatividad y originalidad',
          descripcion: 'Demuestra pensamiento creativo y soluciones originales',
          peso: 20
        }
      ],
      actividades_evaluables: [
        'actividad-2',
        'actividad-3',
        'actividad-4'
      ],
      proyecto_final: {
        titulo: 'Diorama temático 3D',
        descripcion: 'Crea un diorama completo que cuente una historia visual usando objetos modelados',
        instrucciones: [
          'Elige un tema específico (espacio, submarino, selva, ciudad futurista, etc.)',
          'Crea al menos 12 objetos diferentes relacionados con el tema',
          'Utiliza mínimo 4 técnicas de modelado diferentes',
          'Incluye elementos en primer plano, medio y fondo',
          'Desarrolla una narrativa visual clara',
          'Aplica una paleta de colores temática coherente',
          'Crea múltiples puntos de vista del diorama',
          'Documenta el proceso creativo y las técnicas utilizadas'
        ],
        tiempo_limite: '120 minutos',
        criterios_evaluacion: [
          'Complejidad y variedad de los objetos creados',
          'Dominio técnico de las herramientas de modelado',
          'Coherencia narrativa y temática',
          'Calidad de la composición y presentación final'
        ]
      }
    },
    glosario: [
      {
        termino: 'Modelado poligonal',
        definicion: 'Técnica de creación de objetos 3D usando polígonos como unidades básicas de superficie.'
      },
      {
        termino: 'Primitiva',
        definicion: 'Forma geométrica básica (cubo, esfera, cilindro) utilizada como punto de partida para modelado.'
      },
      {
        termino: 'Extrusión',
        definicion: 'Proceso de crear volumen 3D proyectando una forma 2D a lo largo de un eje.'
      },
      {
        termino: 'Bisel',
        definicion: 'Técnica para suavizar bordes duros cortando las esquinas en ángulo.'
      },
      {
        termino: 'Transformación',
        definicion: 'Operación que modifica la posición, rotación, escala o forma de un objeto 3D.'
      },
      {
        termino: 'Topología',
        definicion: 'Estructura de conexión de los elementos geométricos que forman un objeto 3D.'
      },
      {
        termino: 'Pivot point',
        definicion: 'Punto de referencia alrededor del cual ocurren las rotaciones y escalados de un objeto.'
      },
      {
        termino: 'Instanciación',
        definicion: 'Creación de múltiples copias de un objeto que mantienen conexión con el original.'
      },
      {
        termino: 'Geometría procedimental',
        definicion: 'Método de creación automática de geometría usando algoritmos y parámetros.'
      },
      {
        termino: 'Subdivisión',
        definicion: 'Técnica para aumentar la resolución geométrica dividiendo polígonos en elementos más pequeños.'
      }
    ]
};

export default tema02CreacionObjetos3D;
