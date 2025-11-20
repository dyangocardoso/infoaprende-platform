/**
 * Tema 2: Técnicas básicas de dibujo y edición
 * Curso: Diseñador Gráfico Paint
 * Versión corregida - Compatible con sistema modular
 */

const tema02TecnicasBasicas = {
  id: '2',
  titulo: 'Técnicas básicas de dibujo y edición',
  tematica: 'Técnicas fundamentales y flujo de trabajo',
  duracion: '60-75 minutos',
  objetivos: [
    'Dominar las técnicas básicas de dibujo digital en Paint',
    'Aprender a usar las herramientas de selección y edición eficientemente',
    'Aplicar efectos y transformaciones para mejorar las creaciones',
    'Trabajar con colores, rellenos y gradientes',
    'Optimizar el flujo de trabajo y desarrollar buenas prácticas'
  ],
  introduccion: {
    titulo: 'Fundamentos del dibujo digital',
    contenido: `
      <h3>🎨 Desarrollando habilidades prácticas</h3>
      <p>Una vez que conocemos la interfaz y las herramientas de Paint, es momento de aprender las técnicas básicas que nos permitirán crear y editar imágenes de manera efectiva y profesional.</p>

      <p>Este tema se enfoca en desarrollar habilidades prácticas fundamentales para cualquier trabajo de diseño gráfico, desde el dibujo libre hasta la edición precisa de imágenes existentes. Aprenderás técnicas que son la base para proyectos más complejos.</p>

      <p>Las técnicas que dominaremos incluyen control del pincel, uso efectivo de selecciones, aplicación de colores y efectos, y el desarrollo de un flujo de trabajo eficiente que mejorará significativamente la calidad de tus creaciones.</p>
    `,
    actividades: [
      {
        tipo: "experimentacion",
        instruccion: "Abre Paint y experimenta con diferentes herramientas durante 5 minutos para familiarizarte",
        tiempo: "5 minutos"
      }
    ]
  },
  secciones: [
    {
      id: 1,
      titulo: 'Técnicas de dibujo libre',
      contenido: `
        <h3>✏️ Dominando el arte del trazo</h3>
        
        <h4>Control del pincel</h4>
        <p>El control del pincel es fundamental para crear trazos precisos y expresivos:</p>

        <h5>Presión y velocidad:</h5>
        <ul>
          <li><strong>Movimientos lentos:</strong> Para trazos más precisos y controlados</li>
          <li><strong>Movimientos rápidos:</strong> Para trazos más fluidos y dinámicos</li>
          <li><strong>Variación de presión:</strong> Para diferentes grosores y efectos</li>
        </ul>

        <h5>Dirección del trazo:</h5>
        <ul>
          <li><strong>Trazos horizontales:</strong> De izquierda a derecha para mayor comodidad</li>
          <li><strong>Trazos verticales:</strong> De arriba hacia abajo</li>
          <li><strong>Curvas:</strong> Movimientos suaves y continuos</li>
        </ul>

        <h4>Técnicas básicas de trazo:</h4>
        <ul>
          <li><strong>Líneas rectas:</strong> Mantener presionada la tecla Shift</li>
          <li><strong>Líneas paralelas:</strong> Usar guías visuales imaginarias</li>
          <li><strong>Círculos y óvalos:</strong> Movimientos circulares controlados</li>
          <li><strong>Formas geométricas:</strong> Combinar líneas rectas y curvas</li>
        </ul>

        <h4>Técnicas de sombreado</h4>
        <p>El sombreado da volumen y profundidad a nuestros dibujos:</p>

        <h5>Tipos de sombreado:</h5>
        <ul>
          <li><strong>Gradiente:</strong> Transición suave entre tonos claros y oscuros</li>
          <li><strong>Puntillismo:</strong> Puntos para crear texturas y efectos</li>
          <li><strong>Líneas cruzadas:</strong> Entrecruzar líneas para crear sombras</li>
          <li><strong>Difuminado:</strong> Usar aerógrafo para transiciones suaves</li>
        </ul>

        <h5>Aplicación del sombreado:</h5>
        <ol>
          <li>Identifica la fuente de luz en tu dibujo</li>
          <li>Determina las áreas que recibirán luz directa</li>
          <li>Identifica las áreas de sombra</li>
          <li>Aplica tonos gradualmente de claro a oscuro</li>
          <li>Refina con detalles finos y transiciones</li>
        </ol>

        <h4>Creación de texturas</h4>
        <p>Las texturas agregan realismo y interés visual a nuestras creaciones:</p>

        <h5>Texturas básicas:</h5>
        <ul>
          <li><strong>Madera:</strong> Líneas verticales con variaciones irregulares</li>
          <li><strong>Piedra:</strong> Puntos irregulares y manchas orgánicas</li>
          <li><strong>Metal:</strong> Reflejos lineales y brillos direccionales</li>
          <li><strong>Tela:</strong> Tramas cruzadas suaves y regulares</li>
        </ul>

        <div class="consejo-practico">
          <h4>💡 Consejos para texturas efectivas</h4>
          <ul>
            <li>Usa diferentes formas de pincel para variar efectos</li>
            <li>Combina colores similares para mayor realismo</li>
            <li>Aplica texturas en capas para mayor profundidad</li>
            <li>Estudia referencias reales para inspiración</li>
          </ul>
        </div>
      `,
      actividades: [
        {
          tipo: "practica",
          instruccion: "Crea un ejercicio de control del pincel: dibuja líneas rectas, círculos y formas básicas",
          tiempo: "15 minutos"
        }
      ]
    },
    {
      id: 2,
      titulo: 'Herramientas de selección y edición',
      contenido: `
        <h3>🎯 Precisión en la edición</h3>
        
        <h4>Tipos de selección</h4>
        <p>Las herramientas de selección nos permiten trabajar con áreas específicas de manera precisa:</p>

        <h5>Selección rectangular:</h5>
        <ul>
          <li><strong>Uso ideal:</strong> Formas geométricas regulares y recortes limpios</li>
          <li><strong>Técnica:</strong> Arrastrar desde una esquina hasta la opuesta</li>
          <li><strong>Proporciones:</strong> Mantener Shift presionado para cuadrados perfectos</li>
          <li><strong>Aplicaciones:</strong> Recortar imágenes, seleccionar bloques de contenido</li>
        </ul>

        <h5>Selección libre:</h5>
        <ul>
          <li><strong>Uso ideal:</strong> Formas irregulares y contornos complejos</li>
          <li><strong>Técnica:</strong> Dibujar el contorno de la forma deseada</li>
          <li><strong>Precisión:</strong> Requiere movimientos lentos y controlados</li>
          <li><strong>Aplicaciones:</strong> Recortar objetos, aislar elementos específicos</li>
        </ul>

        <h5>Selección por color:</h5>
        <ul>
          <li><strong>Uso ideal:</strong> Áreas del mismo color o fondos uniformes</li>
          <li><strong>Tolerancia:</strong> Ajustar según la variación de color deseada</li>
          <li><strong>Ventajas:</strong> Selección rápida de áreas extensas</li>
          <li><strong>Limitaciones:</strong> Puede incluir áreas no deseadas</li>
        </ul>

        <h4>Operaciones con selecciones</h4>
        <p>Una vez hecha la selección, podemos realizar múltiples operaciones:</p>

        <h5>Operaciones básicas:</h5>
        <ul>
          <li><strong>Copiar (Ctrl+C):</strong> Duplica la selección en el portapapeles</li>
          <li><strong>Cortar (Ctrl+X):</strong> Mueve la selección al portapapeles</li>
          <li><strong>Pegar (Ctrl+V):</strong> Inserta el contenido del portapapeles</li>
          <li><strong>Eliminar (Delete):</strong> Borra el contenido seleccionado</li>
        </ul>

        <h5>Transformaciones avanzadas:</h5>
        <ul>
          <li><strong>Mover:</strong> Arrastrar la selección a nueva posición</li>
          <li><strong>Redimensionar:</strong> Cambiar tamaño manteniendo proporciones</li>
          <li><strong>Rotar:</strong> Girar la selección en diferentes ángulos</li>
          <li><strong>Voltear:</strong> Reflejar horizontal o verticalmente</li>
        </ul>

        <h4>Edición no destructiva</h4>
        <p>Técnicas para preservar la calidad e integridad de la imagen original:</p>

        <h5>Buenas prácticas:</h5>
        <ul>
          <li><strong>Copias de seguridad:</strong> Siempre guardar una copia del original</li>
          <li><strong>Trabajo por capas:</strong> Separar elementos cuando sea posible</li>
          <li><strong>Uso de Deshacer:</strong> Experimentar sin miedo usando Ctrl+Z</li>
          <li><strong>Guardado progresivo:</strong> Salvar versiones intermedias del trabajo</li>
        </ul>

        <h5>Flujo de trabajo recomendado:</h5>
        <ol>
          <li>Abrir imagen original y revisar contenido</li>
          <li>Guardar como nuevo archivo para preservar original</li>
          <li>Realizar pruebas en pequeñas áreas primero</li>
          <li>Aplicar cambios gradualmente, paso a paso</li>
          <li>Guardar versiones intermedias regularmente</li>
          <li>Documentar cambios importantes realizados</li>
        </ol>
      `,
      actividades: [
        {
          tipo: "practica",
          instruccion: "Practica diferentes tipos de selección en una imagen simple. Experimenta con copiar, pegar y mover elementos",
          tiempo: "20 minutos"
        }
      ]
    },
    {
      id: 3,
      titulo: 'Trabajo con color y relleno',
      contenido: `
        <h3>🌈 Dominando el color</h3>
        
        <h4>Teoría del color aplicada</h4>
        <p>Conceptos esenciales para usar el color de manera efectiva y profesional:</p>

        <h5>Círculo cromático:</h5>
        <ul>
          <li><strong>Colores primarios:</strong> Rojo, azul, amarillo (base de todos los colores)</li>
          <li><strong>Colores secundarios:</strong> Naranja, verde, violeta (mezcla de primarios)</li>
          <li><strong>Colores terciarios:</strong> Mezcla de primarios y secundarios</li>
          <li><strong>Colores complementarios:</strong> Opuestos en el círculo (máximo contraste)</li>
        </ul>

        <h5>Armonías de color:</h5>
        <ul>
          <li><strong>Monocromática:</strong> Variaciones de un solo color (elegante y sutil)</li>
          <li><strong>Análoga:</strong> Colores adyacentes en el círculo (armonioso)</li>
          <li><strong>Complementaria:</strong> Colores opuestos (vibrante y contrastante)</li>
          <li><strong>Triádica:</strong> Tres colores equidistantes (dinámico y balanceado)</li>
        </ul>

        <h5>Propiedades del color:</h5>
        <ul>
          <li><strong>Matiz:</strong> El color en sí mismo (rojo, azul, verde, etc.)</li>
          <li><strong>Saturación:</strong> Intensidad o pureza del color</li>
          <li><strong>Brillo:</strong> Cantidad de luz en el color (claridad u oscuridad)</li>
        </ul>

        <h4>Técnicas de relleno</h4>
        <p>Diferentes métodos para aplicar color a áreas específicas:</p>

        <h5>Relleno con bote de pintura:</h5>
        <ul>
          <li><strong>Uso ideal:</strong> Áreas cerradas y uniformes</li>
          <li><strong>Técnica:</strong> Clic en el área a rellenar</li>
          <li><strong>Tolerancia:</strong> Ajustar según variación de color existente</li>
          <li><strong>Prerequisito:</strong> Verificar que el área esté completamente cerrada</li>
        </ul>

        <h5>Relleno gradual:</h5>
        <ul>
          <li><strong>Herramienta:</strong> Aerógrafo con diferentes opacidades</li>
          <li><strong>Técnica:</strong> Aplicar múltiples capas ligeras</li>
          <li><strong>Efecto:</strong> Transiciones suaves y naturales</li>
          <li><strong>Aplicación:</strong> Sombreados, cielos, efectos atmosféricos</li>
        </ul>

        <h5>Relleno con patrones:</h5>
        <ul>
          <li><strong>Texturas:</strong> Usar patrones predefinidos del sistema</li>
          <li><strong>Personalización:</strong> Crear patrones propios</li>
          <li><strong>Combinación:</strong> Mezclar con otras técnicas de relleno</li>
          <li><strong>Aplicación:</strong> Fondos decorativos, texturas especiales</li>
        </ul>

        <h4>Mezcla de colores</h4>
        <p>Técnicas para crear transiciones y efectos cromáticos avanzados:</p>

        <h5>Mezcla manual:</h5>
        <ul>
          <li><strong>Técnica húmeda:</strong> Aplicar colores adyacentes mientras están "frescos"</li>
          <li><strong>Pincel suave:</strong> Usar opacidad reducida para transiciones</li>
          <li><strong>Movimientos:</strong> Circulares y suaves para mezcla natural</li>
        </ul>

        <h5>Gradientes:</h5>
        <ul>
          <li><strong>Lineales:</strong> De claro a oscuro en línea recta</li>
          <li><strong>Radiales:</strong> Desde un punto central hacia afuera</li>
          <li><strong>Entre colores:</strong> Transición entre tonos diferentes</li>
        </ul>

        <h5>Efectos especiales:</h5>
        <ul>
          <li><strong>Reflejos:</strong> Usar colores claros y amarillos</li>
          <li><strong>Sombras:</strong> Aplicar tonos oscuros del color base</li>
          <li><strong>Luces:</strong> Blancos y amarillos para brillos</li>
          <li><strong>Profundidad:</strong> Variar saturación según distancia</li>
        </ul>
      `,
      actividades: [
        {
          tipo: "practica",
          instruccion: "Crea un ejercicio de relleno: dibuja formas básicas y prueba diferentes técnicas de relleno y color",
          tiempo: "25 minutos"
        }
      ]
    },
    {
      id: 4,
      titulo: 'Efectos y transformaciones',
      contenido: `
        <h3>✨ Efectos que transforman</h3>
        
        <h4>Efectos básicos de imagen</h4>
        <p>Paint ofrece varios efectos que pueden mejorar significativamente nuestras creaciones:</p>

        <h5>Efectos de color:</h5>
        <ul>
          <li><strong>Invertir colores:</strong> Crea efectos negativos dramáticos</li>
          <li><strong>Escala de grises:</strong> Convierte a blanco y negro para enfocar en formas</li>
          <li><strong>Sepia:</strong> Da un tono vintage amarillento nostálgico</li>
          <li><strong>Ajuste de brillo:</strong> Clarear u oscurecer la imagen</li>
        </ul>

        <h5>Efectos de textura:</h5>
        <ul>
          <li><strong>Difuminado:</strong> Suaviza bordes duros y crea atmósfera</li>
          <li><strong>Enfoque:</strong> Aumenta la nitidez y definición</li>
          <li><strong>Ruido:</strong> Agrega textura granulada para efectos especiales</li>
          <li><strong>Distorsión:</strong> Efectos de ondas y deformación (si disponible)</li>
        </ul>

        <h5>Cuándo usar cada efecto:</h5>
        <ul>
          <li><strong>Invertir:</strong> Para crear contrastes dramáticos o efectos artísticos</li>
          <li><strong>Escala de grises:</strong> Para enfocar en composición y formas</li>
          <li><strong>Sepia:</strong> Para efectos nostálgicos y vintage</li>
          <li><strong>Difuminado:</strong> Para crear atmósfera y suavizar elementos</li>
        </ul>

        <h4>Transformaciones geométricas</h4>
        <p>Cambiar la forma, tamaño y orientación de nuestros elementos:</p>

        <h5>Redimensionamiento:</h5>
        <ul>
          <li><strong>Proporcional:</strong> Mantener Shift para preservar proporciones</li>
          <li><strong>Libre:</strong> Estirar para efectos específicos o correcciones</li>
          <li><strong>Reducción:</strong> Para crear elementos de fondo o secundarios</li>
          <li><strong>Ampliación:</strong> Para destacar elementos principales</li>
        </ul>

        <h5>Rotación:</h5>
        <ul>
          <li><strong>90°, 180°, 270°:</strong> Para cambios de orientación precisos</li>
          <li><strong>Rotación libre:</strong> Para efectos dinámicos y composiciones</li>
          <li><strong>Rotación múltiple:</strong> Combinar con duplicación para patrones</li>
        </ul>

        <h5>Volteo:</h5>
        <ul>
          <li><strong>Horizontal:</strong> Para crear simetrías y reflejos</li>
          <li><strong>Vertical:</strong> Para efectos de reflejo en agua</li>
          <li><strong>Combinado:</strong> Volteo horizontal y vertical para efectos complejos</li>
        </ul>

        <h4>Combinación de efectos</h4>
        <p>Crear efectos más sofisticados combinando múltiples técnicas:</p>

        <h5>Secuencia recomendada:</h5>
        <ol>
          <li><strong>Transformaciones geométricas:</strong> Aplicar primero (tamaño, rotación)</li>
          <li><strong>Ajustes de color:</strong> Modificar colores y contraste</li>
          <li><strong>Efectos de imagen:</strong> Aplicar filtros y efectos especiales</li>
          <li><strong>Refinamiento:</strong> Detalles finales con herramientas de dibujo</li>
        </ol>

        <h5>Ejemplos de combinaciones efectivas:</h5>
        <ul>
          <li><strong>Rotación + difuminado:</strong> Crear sensación de movimiento</li>
          <li><strong>Escala de grises + sepia:</strong> Efecto vintage profesional</li>
          <li><strong>Múltiples copias + transparencia:</strong> Efectos de profundidad</li>
          <li><strong>Volteo + gradientes:</strong> Reflexos realistas en superficies</li>
        </ul>

        <div class="tip-avanzado">
          <h4>🎯 Consejos para efectos profesionales</h4>
          <ul>
            <li>Aplicar efectos gradualmente y evaluar el resultado</li>
            <li>Mantener consistencia visual en toda la composición</li>
            <li>Usar efectos para reforzar el mensaje o tema</li>
            <li>No sobrecargar con demasiados efectos simultáneos</li>
          </ul>
        </div>
      `,
      actividades: [
        {
          tipo: "proyecto",
          instruccion: "Crea un diseño que combine al menos 3 efectos diferentes. Experimenta con transformaciones y efectos de color",
          tiempo: "30 minutos"
        }
      ]
    }
  ],
  actividades: [
    {
      id: "actividad-1",
      titulo: "Ejercicio de control del pincel",
      descripcion: "Desarrolla habilidades básicas de dibujo para mejorar precisión y control",
      objetivos: [
        "Desarrollar control motor fino con el ratón",
        "Familiarizarse con las herramientas básicas de dibujo",
        "Mejorar la precisión en el trazo"
      ],
      instrucciones: [
        "Crear un nuevo documento de 800x600 píxeles",
        "Practicar líneas rectas usando la tecla Shift en diferentes direcciones",
        "Dibujar círculos perfectos de diferentes tamaños sin herramientas",
        "Crear un patrón de líneas paralelas con espaciado uniforme",
        "Experimentar con diferentes grosores de pincel (1, 3, 5, 8 píxeles)",
        "Guardar la práctica como 'ejercicio-pincel.png'"
      ],
      duracion: "20 minutos",
      dificultad: "Principiante"
    },
    {
      id: "actividad-2",
      titulo: "Creación de objeto 3D simple",
      descripcion: "Aplica técnicas de sombreado para crear la ilusión de volumen y profundidad",
      objetivos: [
        "Comprender principios de luz y sombra",
        "Aplicar técnicas de sombreado básico",
        "Crear ilusión de tridimensionalidad"
      ],
      instrucciones: [
        "Dibujar un cubo básico usando líneas rectas y ángulos precisos",
        "Identificar la fuente de luz (esquina superior izquierda)",
        "Aplicar sombras en las caras que no reciben luz directa",
        "Usar diferentes tonos de gris para crear gradación",
        "Agregar reflejos en las aristas que reciben más luz",
        "Experimentar con diferentes posiciones de fuente de luz"
      ],
      recursos_necesarios: [
        "Paleta de grises",
        "Herramienta aerógrafo para transiciones",
        "Conocimiento básico de geometría"
      ],
      duracion: "30 minutos",
      dificultad: "Intermedio"
    },
    {
      id: "actividad-3",
      titulo: "Edición de imagen existente",
      descripcion: "Aplica técnicas de selección y edición para modificar creativamente una imagen",
      objetivos: [
        "Dominar herramientas de selección",
        "Aplicar efectos apropiadamente",
        "Desarrollar creatividad en edición"
      ],
      instrucciones: [
        "Abrir una imagen simple (fotografía o dibujo existente)",
        "Usar la herramienta de selección rectangular para aislar elementos específicos",
        "Copiar elementos y pegarlos en nuevas posiciones para crear composición",
        "Aplicar diferentes efectos a cada elemento seleccionado",
        "Cambiar colores usando el bote de pintura en áreas apropiadas",
        "Guardar la imagen editada con un nombre descriptivo nuevo"
      ],
      criterios_evaluacion: [
        "Uso correcto y preciso de herramientas de selección",
        "Aplicación apropiada y estética de efectos",
        "Calidad técnica del resultado final",
        "Creatividad y originalidad en las modificaciones"
      ],
      duracion: "40 minutos",
      dificultad: "Intermedio"
    },
    {
      id: "actividad-4",
      titulo: "Proyecto: Paisaje simple",
      descripcion: "Combina todas las técnicas aprendidas para crear un paisaje básico completo",
      objetivos: [
        "Integrar múltiples técnicas aprendidas",
        "Desarrollar composición visual",
        "Crear obra coherente y atractiva"
      ],
      instrucciones: [
        "Planificar el paisaje (cielo, montañas, árboles, elementos arquitectónicos)",
        "Comenzar con formas básicas para cada elemento principal",
        "Aplicar gradientes para el cielo (de azul claro a azul oscuro)",
        "Usar técnicas de textura para montañas y vegetación",
        "Agregar detalles progresivamente con diferentes pinceles",
        "Aplicar efectos para mejorar la atmósfera general",
        "Guardar el proyecto final como 'mi-paisaje.png'"
      ],
      tiempo_estimado: "60 minutos",
      nivel_dificultad: "Avanzado"
    }
  ],
  recursos: {
    documentos: [
      {
        titulo: "Guía de combinaciones de colores",
        descripcion: "Tabla completa de armonías cromáticas y paletas recomendadas",
        url: "/docs/paint/guia-combinaciones-colores.md"
      },
      {
        titulo: "Atajos de teclado esenciales",
        descripcion: "Combinaciones de teclas para trabajar más eficientemente en Paint",
        url: "/docs/paint/atajos-teclado-paint.md"
      },
      {
        titulo: "Plantillas de práctica (zip)",
        descripcion: "Plantillas y ejercicios estructurados para practicar técnicas",
        url: "/recursos/paint/plantillas-practica.zip"
      }
    ],
    enlaces: [
      {
        titulo: "Artículo: Combinaciones cromáticas básicas",
        url: "https://example.com/recursos/colores-paint",
        tipo: "externo"
      }
    ],
    videos: [
      {
        titulo: "Demostración de técnicas avanzadas",
        url: "/videos/paint/demostracion-tecnicas-avanzadas.mp4",
        duracion: "15:00"
      }
    ]
  },
  evaluacion: {
    tipo: "proyecto",
    titulo: "Evaluación: Collage digital creativo",
    descripcion: "Crea un collage que demuestre dominio de todas las técnicas básicas aprendidas",
    criterios: [
      {
        aspecto: "Control del pincel y trazo",
        descripcion: "Demuestra precisión y control en los trazos realizados",
        puntos: 25
      },
      {
        aspecto: "Uso de herramientas de selección",
        descripcion: "Aplica correctamente las diferentes herramientas de selección",
        puntos: 20
      },
      {
        aspecto: "Aplicación efectiva del color",
        descripcion: "Usa el color de manera armoniosa y profesional",
        puntos: 25
      },
      {
        aspecto: "Efectos y transformaciones",
        descripcion: "Integra efectos de manera apropiada y creativa",
        puntos: 20
      },
      {
        aspecto: "Creatividad y composición visual",
        descripcion: "Demuestra creatividad y buena composición visual",
        puntos: 10
      }
    ],
    instrucciones: [
      "Combinar al menos 3 técnicas diferentes aprendidas en el tema",
      "Incluir elementos dibujados completamente desde cero",
      "Editar al menos una imagen existente incorporándola al diseño",
      "Aplicar efectos y transformaciones de manera justificada",
      "Demostrar uso efectivo y armonioso del color",
      "El resultado debe ser visualmente atractivo y coherente"
    ],
    tiempoLimite: "90 minutos",
    puntuacionMaxima: 100,
    entregables: [
      "Archivo del collage final en formato PNG",
      "Documento explicando técnicas utilizadas",
      "Capturas del proceso de creación"
    ]
  },
  glosario: [
    {
      termino: "Aerógrafo",
      definicion: "Herramienta que aplica color de forma difusa y suave, ideal para crear efectos de gradiente y transiciones naturales."
    },
    {
      termino: "Anti-aliasing",
      definicion: "Técnica que suaviza los bordes dentados en líneas y curvas para crear una apariencia más fluida y profesional."
    },
    {
      termino: "Bote de pintura",
      definicion: "Herramienta de relleno que aplica color a áreas cerradas de manera uniforme y rápida."
    },
    {
      termino: "Difuminado",
      definicion: "Efecto que suaviza los bordes y transiciones, creando una apariencia menos definida y más atmosférica."
    },
    {
      termino: "Gotero",
      definicion: "Herramienta que permite seleccionar un color específico de cualquier punto de la imagen para reutilizarlo."
    },
    {
      termino: "Gradiente",
      definicion: "Transición suave entre dos o más colores, utilizada para crear efectos de profundidad y volumen."
    },
    {
      termino: "Opacidad",
      definicion: "Nivel de transparencia de una capa o elemento, donde 100% es completamente opaco y 0% es transparente."
    },
    {
      termino: "Píxel",
      definicion: "Unidad básica de una imagen digital, el punto más pequeño que puede ser controlado independientemente."
    },
    {
      termino: "Resolución",
      definicion: "Cantidad de píxeles por unidad de medida, que determina la calidad y nitidez de la imagen final."
    },
    {
      termino: "Saturación",
      definicion: "Intensidad o pureza de un color, desde colores vivos y puros hasta tonos grisáceos y apagados."
    },
    {
      termino: "Selección",
      definicion: "Área delimitada de la imagen que puede ser editada independientemente del resto del contenido."
    },
    {
      termino: "Textura",
      definicion: "Calidad visual que simula la superficie de materiales como madera, metal, tela o piedra."
    },
    {
      termino: "Tolerancia",
      definicion: "Parámetro que determina qué tan similares deben ser los colores para ser afectados por una herramienta específica."
    },
    {
      termino: "Transformación",
      definicion: "Operación que modifica la geometría de un elemento (rotación, escala, volteo, distorsión, etc.)."
    },
    {
      termino: "Zoom",
      definicion: "Función que permite acercar o alejar la vista de la imagen para trabajar con mayor o menor precisión."
    }
  ]
};

export default tema02TecnicasBasicas;
