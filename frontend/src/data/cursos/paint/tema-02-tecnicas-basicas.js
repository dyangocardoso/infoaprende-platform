export default {
  id: 'tema-02-tecnicas-basicas',
  titulo: 'Técnicas básicas de dibujo y edición',
  descripcion: 'Aprende las técnicas fundamentales para crear y editar imágenes en Paint de forma efectiva.',
  objetivos: [
    'Dominar las técnicas básicas de dibujo digital',
    'Aprender a usar las herramientas de selección y edición',
    'Aplicar efectos y transformaciones básicas',
    'Trabajar con capas y transparencias',
    'Optimizar el flujo de trabajo en Paint'
  ],
  contenido: {
    introduccion: {
      titulo: 'Introducción a las Técnicas Básicas',
      texto: `
        Una vez que conocemos la interfaz y las herramientas de Paint, es momento de aprender las técnicas básicas que nos permitirán crear y editar imágenes de manera efectiva. 

        Este tema se enfoca en desarrollar habilidades prácticas que son fundamentales para cualquier trabajo de diseño gráfico, desde el dibujo libre hasta la edición precisa de imágenes existentes.

        Las técnicas que aprenderemos son la base para proyectos más complejos y nos ayudarán a trabajar de manera más eficiente y profesional.
      `,
      imagen: '/images/paint/tecnicas-basicas-intro.png'
    },
    secciones: [
      {
        id: 'dibujo-libre',
        titulo: 'Técnicas de dibujo libre',
        contenido: [
          {
            subtitulo: 'Control del pincel',
            texto: `
              El control del pincel es fundamental para crear trazos precisos y expresivos:

              **Presión y velocidad:**
              - Movimientos lentos para trazos más precisos
              - Movimientos rápidos para trazos más fluidos
              - Variar la presión para diferentes grosores

              **Dirección del trazo:**
              - Trazos horizontales: de izquierda a derecha
              - Trazos verticales: de arriba hacia abajo
              - Curvas: movimientos suaves y continuos

              **Técnicas básicas:**
              - Líneas rectas: usar la tecla Shift
              - Líneas paralelas: guías visuales
              - Círculos y óvalos: movimientos circulares controlados
            `,
            ejemplo: {
              titulo: 'Ejercicio de control del pincel',
              descripcion: 'Practica diferentes tipos de trazos para mejorar tu control.',
              pasos: [
                'Selecciona el pincel con grosor medio',
                'Dibuja líneas rectas horizontales y verticales',
                'Practica círculos de diferentes tamaños',
                'Crea trazos curvos suaves',
                'Experimenta con diferentes velocidades'
              ]
            }
          },
          {
            subtitulo: 'Técnicas de sombreado',
            texto: `
              El sombreado da volumen y profundidad a nuestros dibujos:

              **Tipos de sombreado:**
              - **Gradiente**: transición suave entre tonos
              - **Puntillismo**: puntos para crear texturas
              - **Líneas cruzadas**: líneas entrecruzadas para sombras
              - **Difuminado**: usando la herramienta difuminar

              **Aplicación del sombreado:**
              1. Identifica la fuente de luz
              2. Determina las áreas de sombra
              3. Aplica tonos gradualmente
              4. Refina con detalles finos
            `,
            imagen: '/images/paint/tecnicas-sombreado.png'
          },
          {
            subtitulo: 'Creación de texturas',
            texto: `
              Las texturas agregan realismo y interés visual:

              **Texturas básicas:**
              - **Madera**: líneas verticales con variaciones
              - **Piedra**: puntos irregulares y manchas
              - **Metal**: reflejos lineales y brillos
              - **Tela**: tramas cruzadas suaves

              **Herramientas para texturas:**
              - Pincel con diferentes formas
              - Aerógrafo para efectos suaves
              - Herramienta de textura (si disponible)
              - Combinación de colores similares
            `
          }
        ]
      },
      {
        id: 'seleccion-edicion',
        titulo: 'Herramientas de selección y edición',
        contenido: [
          {
            subtitulo: 'Tipos de selección',
            texto: `
              Las herramientas de selección nos permiten trabajar con áreas específicas:

              **Selección rectangular:**
              - Para formas geométricas regulares
              - Ideal para recortar imágenes
              - Mantener proporción con Shift

              **Selección libre:**
              - Para formas irregulares
              - Mayor precisión en contornos
              - Requiere más cuidado y práctica

              **Selección por color:**
              - Selecciona áreas del mismo color
              - Útil para fondos uniformes
              - Ajustar tolerancia según necesidad
            `,
            ejemplo: {
              titulo: 'Práctica de selecciones',
              descripcion: 'Experimenta con diferentes tipos de selección.',
              pasos: [
                'Abre una imagen con diferentes elementos',
                'Usa selección rectangular para elementos geométricos',
                'Prueba selección libre para contornos irregulares',
                'Experimenta con selección por color en fondos',
                'Combina diferentes tipos de selección'
              ]
            }
          },
          {
            subtitulo: 'Operaciones con selecciones',
            texto: `
              Una vez hecha la selección, podemos realizar múltiples operaciones:

              **Operaciones básicas:**
              - **Copiar (Ctrl+C)**: duplica la selección
              - **Cortar (Ctrl+X)**: mueve la selección
              - **Pegar (Ctrl+V)**: inserta el contenido copiado
              - **Eliminar (Delete)**: borra el contenido seleccionado

              **Transformaciones:**
              - **Mover**: arrastra la selección a nueva posición
              - **Redimensionar**: cambia el tamaño manteniendo proporción
              - **Rotar**: gira la selección (si la función está disponible)
              - **Voltear**: horizontal o verticalmente
            `
          },
          {
            subtitulo: 'Edición no destructiva',
            texto: `
              Técnicas para preservar la imagen original:

              **Buenas prácticas:**
              - Siempre guardar una copia de seguridad
              - Trabajar en capas separadas cuando sea posible
              - Usar "Deshacer" frecuentemente para experimentar
              - Guardar versiones progresivas del trabajo

              **Flujo de trabajo recomendado:**
              1. Abrir imagen original
              2. Guardar como nuevo archivo
              3. Realizar pruebas en pequeñas áreas
              4. Aplicar cambios gradualmente
              5. Guardar versiones intermedias
            `
          }
        ]
      },
      {
        id: 'color-relleno',
        titulo: 'Trabajo con color y relleno',
        contenido: [
          {
            subtitulo: 'Teoría del color aplicada',
            texto: `
              Conceptos esenciales para usar el color efectivamente:

              **Círculo cromático:**
              - **Colores primarios**: rojo, azul, amarillo
              - **Colores secundarios**: naranja, verde, violeta
              - **Colores complementarios**: opuestos en el círculo

              **Armonías de color:**
              - **Monocromática**: variaciones de un solo color
              - **Análoga**: colores adyacentes en el círculo
              - **Complementaria**: colores opuestos
              - **Triádica**: tres colores equidistantes

              **Propiedades del color:**
              - **Matiz**: el color en sí mismo
              - **Saturación**: intensidad del color
              - **Brillo**: claridad u oscuridad del color
            `,
            imagen: '/images/paint/circulo-cromatico.png'
          },
          {
            subtitulo: 'Técnicas de relleno',
            texto: `
              Diferentes métodos para aplicar color a áreas:

              **Relleno con bote de pintura:**
              - Para áreas cerradas y uniformes
              - Ajustar tolerancia según necesidad
              - Verificar que el área esté completamente cerrada

              **Relleno gradual:**
              - Crear transiciones suaves de color
              - Usar aerógrafo con diferentes opacidades
              - Aplicar múltiples capas ligeras

              **Relleno con patrones:**
              - Usar texturas predefinidas
              - Crear patrones personalizados
              - Combinar con otras técnicas de relleno
            `,
            ejemplo: {
              titulo: 'Ejercicio de relleno',
              descripcion: 'Practica diferentes técnicas de relleno en formas básicas.',
              pasos: [
                'Dibuja varias formas cerradas (círculos, cuadrados, etc.)',
                'Usa el bote de pintura para relleno uniforme',
                'Prueba el aerógrafo para rellenos graduales',
                'Experimenta con diferentes colores y opacidades',
                'Combina técnicas para efectos más complejos'
              ]
            }
          },
          {
            subtitulo: 'Mezcla de colores',
            texto: `
              Técnicas para crear transiciones y efectos cromáticos:

              **Mezcla manual:**
              - Aplicar colores adyacentes mientras están húmedos
              - Usar pincel con opacidad reducida
              - Movimientos suaves y circulares

              **Gradientes:**
              - De claro a oscuro
              - Entre diferentes colores
              - Radiales y lineales

              **Efectos especiales:**
              - Reflejos con colores claros
              - Sombras con colores oscuros
              - Luces con amarillos y blancos
            `
          }
        ]
      },
      {
        id: 'efectos-transformaciones',
        titulo: 'Efectos y transformaciones',
        contenido: [
          {
            subtitulo: 'Efectos básicos',
            texto: `
              Paint ofrece varios efectos que pueden mejorar nuestras creaciones:

              **Efectos de imagen:**
              - **Invertir colores**: crea efectos negativos
              - **Escala de grises**: convierte a blanco y negro
              - **Sepia**: da un tono vintage amarillento

              **Efectos de dibujo:**
              - **Difuminado**: suaviza bordes duros
              - **Enfoque**: aumenta la nitidez
              - **Ruido**: agrega textura granulada

              **Cuándo usar cada efecto:**
              - Invertir: para crear contrastes dramáticos
              - Escala de grises: para enfocar en formas y composición
              - Sepia: para efectos nostálgicos
              - Difuminado: para crear atmósfera
            `,
            imagen: '/images/paint/efectos-basicos.png'
          },
          {
            subtitulo: 'Transformaciones geométricas',
            texto: `
              Cambiar la forma y orientación de nuestros elementos:

              **Redimensionamiento:**
              - Mantener proporciones con Shift
              - Estirar para efectos específicos
              - Reducir para crear elementos de fondo

              **Rotación:**
              - 90°, 180°, 270° para orientación
              - Rotación libre para efectos dinámicos
              - Combinar con duplicación para patrones

              **Volteo:**
              - Horizontal: para crear simetrías
              - Vertical: para reflejos
              - Combinar ambos para efectos complejos
            `,
            ejemplo: {
              titulo: 'Creación de un patrón simétrico',
              descripcion: 'Usa transformaciones para crear un diseño simétrico.',
              pasos: [
                'Dibuja un elemento decorativo simple',
                'Cópialo y pégalo múltiples veces',
                'Aplica diferentes rotaciones a cada copia',
                'Usa volteo horizontal y vertical',
                'Organiza los elementos en un patrón simétrico'
              ]
            }
          },
          {
            subtitulo: 'Combinación de efectos',
            texto: `
              Crear efectos más complejos combinando técnicas:

              **Secuencia recomendada:**
              1. Aplicar transformaciones geométricas primero
              2. Ajustar colores y contraste
              3. Aplicar efectos de imagen
              4. Refinar con herramientas de dibujo

              **Ejemplos de combinaciones:**
              - Rotación + difuminado = movimiento
              - Escala de grises + sepia = vintage
              - Múltiples copias + transparencia = profundidad
              - Volteo + gradientes = reflexos realistas
            `
          }
        ]
      }
    ],
    actividades: [
      {
        id: 'actividad-1',
        titulo: 'Ejercicio de control del pincel',
        descripcion: 'Practica las técnicas básicas de dibujo para mejorar tu control.',
        instrucciones: [
          'Crea un nuevo documento de 800x600 píxeles',
          'Practica líneas rectas usando la tecla Shift',
          'Dibuja círculos perfectos de diferentes tamaños',
          'Crea un patrón de líneas paralelas',
          'Experimenta con diferentes grosores de pincel',
          'Guarda tu práctica como "ejercicio-pincel.png"'
        ],
        objetivos: [
          'Desarrollar control motor fino',
          'Familiarizarse con las herramientas básicas',
          'Mejorar la precisión en el trazo'
        ]
      },
      {
        id: 'actividad-2',
        titulo: 'Creación de un objeto 3D simple',
        descripcion: 'Aplica técnicas de sombreado para crear la ilusión de volumen.',
        instrucciones: [
          'Dibuja un cubo básico usando líneas rectas',
          'Identifica la fuente de luz (esquina superior izquierda)',
          'Aplica sombras en las caras que no reciben luz directa',
          'Usa diferentes tonos de gris para crear profundidad',
          'Agrega reflejos en las aristas que reciben más luz',
          'Experimenta con diferentes posiciones de luz'
        ],
        recursos: [
          'Usar la paleta de grises',
          'Emplear la herramienta aerógrafo para transiciones',
          'Aplicar el principio de luz y sombra'
        ]
      },
      {
        id: 'actividad-3',
        titulo: 'Edición de imagen existente',
        descripcion: 'Aplica técnicas de selección y edición para modificar una imagen.',
        instrucciones: [
          'Abre una imagen simple (puede ser una foto o dibujo)',
          'Usa la herramienta de selección rectangular para aislar elementos',
          'Copia elementos y pégalos en nuevas posiciones',
          'Aplica diferentes efectos a cada elemento seleccionado',
          'Cambia colores usando el bote de pintura',
          'Guarda la imagen editada con un nuevo nombre'
        ],
        evaluacion: {
          criterios: [
            'Uso correcto de herramientas de selección',
            'Aplicación apropiada de efectos',
            'Calidad del resultado final',
            'Creatividad en las modificaciones'
          ]
        }
      },
      {
        id: 'actividad-4',
        titulo: 'Proyecto: Paisaje simple',
        descripcion: 'Combina todas las técnicas aprendidas para crear un paisaje básico.',
        instrucciones: [
          'Planifica tu paisaje (cielo, montañas, árboles, etc.)',
          'Comienza con formas básicas para cada elemento',
          'Aplica gradientes para el cielo',
          'Usa técnicas de textura para montañas y árboles',
          'Agrega detalles con diferentes pinceles',
          'Aplica efectos para mejorar la atmósfera',
          'Guarda el proyecto final como "mi-paisaje.png"'
        ],
        tiempo_estimado: '45-60 minutos',
        nivel: 'intermedio'
      }
    ],
    recursos: [
      {
        tipo: 'referencia',
        titulo: 'Guía de combinaciones de colores',
        descripcion: 'Tabla de armonías cromáticas básicas',
        contenido: `
          **Combinaciones básicas:**
          - Rojo + Verde = Contraste complementario
          - Azul + Naranja = Contraste vibrante
          - Amarillo + Violeta = Contraste cálido-frío
          
          **Paletas recomendadas:**
          - Naturaleza: verdes, marrones, azules
          - Atardecer: naranjas, rojos, amarillos
          - Invierno: azules, grises, blancos
          - Primavera: verdes claros, rosas, amarillos suaves
        `
      },
      {
        tipo: 'tutorial',
        titulo: 'Atajos de teclado esenciales',
        descripcion: 'Combinaciones de teclas para trabajar más eficientemente',
        contenido: `
          **Herramientas:**
          - B = Pincel
          - E = Borrador
          - S = Seleccionar
          - F = Relleno
          - I = Gotero (selector de color)
          
          **Edición:**
          - Ctrl + C = Copiar
          - Ctrl + V = Pegar
          - Ctrl + X = Cortar
          - Ctrl + Z = Deshacer
          - Ctrl + Y = Rehacer
          - Delete = Eliminar selección
          
          **Navegación:**
          - Ctrl + + = Acercar zoom
          - Ctrl + - = Alejar zoom
          - Ctrl + 0 = Zoom 100%
        `
      },
      {
        tipo: 'plantilla',
        titulo: 'Ejercicios de práctica',
        descripcion: 'Plantillas descargables para practicar',
        enlace: '/recursos/paint/plantillas-practica.zip'
      }
    ],
    evaluacion: {
      tipo: 'practica',
      descripcion: 'Evaluación práctica de las técnicas básicas aprendidas',
      criterios: [
        {
          aspecto: 'Control del pincel',
          descripcion: 'Demuestra precisión y control en los trazos',
          peso: 25
        },
        {
          aspecto: 'Uso de herramientas de selección',
          descripcion: 'Aplica correctamente las diferentes herramientas de selección',
          peso: 20
        },
        {
          aspecto: 'Aplicación de color',
          descripcion: 'Usa el color de manera efectiva y armoniosa',
          peso: 25
        },
        {
          aspecto: 'Efectos y transformaciones',
          descripcion: 'Integra efectos de manera apropiada y creativa',
          peso: 20
        },
        {
          aspecto: 'Creatividad y composición',
          descripcion: 'Demuestra creatividad y buena composición visual',
          peso: 10
        }
      ],
      actividades_evaluables: [
        'actividad-2',
        'actividad-3',
        'actividad-4'
      ],
      proyecto_final: {
        titulo: 'Collage digital',
        descripcion: 'Crea un collage combinando elementos dibujados y editados',
        instrucciones: [
          'Combina al menos 3 técnicas diferentes aprendidas',
          'Incluye elementos dibujados desde cero',
          'Edita al menos una imagen existente',
          'Aplica efectos y transformaciones',
          'Demuestra uso efectivo del color',
          'El resultado debe ser visualmente atractivo y coherente'
        ],
        tiempo_limite: '90 minutos',
        criterios_evaluacion: [
          'Demostración de técnicas aprendidas',
          'Calidad técnica del resultado',
          'Creatividad y originalidad',
          'Composición visual efectiva'
        ]
      }
    },
    glosario: [
      {
        termino: 'Aerógrafo',
        definicion: 'Herramienta que aplica color de forma difusa, creando efectos suaves y gradientes naturales.'
      },
      {
        termino: 'Anti-aliasing',
        definicion: 'Técnica que suaviza los bordes dentados en líneas y curvas para crear una apariencia más fluida.'
      },
      {
        termino: 'Bote de pintura',
        definicion: 'Herramienta de relleno que aplica color a áreas cerradas de manera uniforme.'
      },
      {
        termino: 'Difuminado',
        definicion: 'Efecto que suaviza los bordes y transiciones, creando una apariencia menos definida.'
      },
      {
        termino: 'Gotero',
        definicion: 'Herramienta que permite seleccionar un color específico de cualquier punto de la imagen.'
      },
      {
        termino: 'Gradiente',
        definicion: 'Transición suave entre dos o más colores, creando efectos de profundidad y volumen.'
      },
      {
        termino: 'Opacidad',
        definicion: 'Nivel de transparencia de una capa o elemento, donde 100% es completamente opaco y 0% es transparente.'
      },
      {
        termino: 'Píxel',
        definicion: 'Unidad básica de una imagen digital, el punto más pequeño que puede ser controlado independientemente.'
      },
      {
        termino: 'Resolución',
        definicion: 'Cantidad de píxeles por unidad de medida, determina la calidad y nitidez de la imagen.'
      },
      {
        termino: 'Saturación',
        definicion: 'Intensidad o pureza de un color, desde colores vivos y puros hasta tonos grisáceos.'
      },
      {
        termino: 'Selección',
        definicion: 'Área delimitada de la imagen que puede ser editada independientemente del resto.'
      },
      {
        termino: 'Textura',
        definicion: 'Calidad visual que simula la superficie de materiales como madera, metal o tela.'
      },
      {
        termino: 'Tolerancia',
        definicion: 'Parámetro que determina qué tan similares deben ser los colores para ser afectados por una herramienta.'
      },
      {
        termino: 'Transformación',
        definicion: 'Operación que modifica la geometría de un elemento (rotación, escala, volteo, etc.).'
      },
      {
        termino: 'Zoom',
        definicion: 'Función que permite acercar o alejar la vista de la imagen para trabajar con mayor precisión.'
      }
    ]
  }
};
