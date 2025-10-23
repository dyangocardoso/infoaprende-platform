/**
 * Tema 3: Pintura y decoración
 * Curso: Diseñador Gráfico Paint 3D
 * Versión corregida - Compatible con sistema modular
 */

const tema03PinturaDecoracion = {
  id: '3',
  titulo: "Pintura y decoración",
  tematica: "Personalización visual con efectos",
  duracion: "45-60 minutos",
  objetivos: [
    "Dominar las herramientas de pintura en 3D",
    "Aplicar texturas y patrones creativamente",
    "Utilizar efectos de iluminación para realzar diseños",
    "Crear decoraciones personalizadas y únicas"
  ],
  introduccion: {
    titulo: "Introducción a la Pintura y Decoración 3D",
    contenido: `
      <h3>🎨 El arte de decorar en 3D</h3>
      <p>Paint 3D revoluciona la forma de decorar objetos tridimensionales al permitir pintar directamente sobre las superficies 3D. A diferencia de las herramientas tradicionales de dibujo 2D, Paint 3D te permite aplicar colores, texturas y efectos que se adaptan a la forma y profundidad de tus objetos.</p>

      <p>La decoración en 3D requiere entender cómo la luz, la perspectiva y la geometría afectan la apariencia visual de los elementos. En este tema aprenderás a usar estas características a tu favor para crear diseños impactantes.</p>

      <h4>Diferencias clave entre pintura 2D y 3D:</h4>
      <ul>
        <li>La pintura se adapta a la curvatura y forma del objeto</li>
        <li>Los efectos de iluminación influyen en la apariencia final</li>
        <li>La perspectiva cambia la percepción del diseño</li>
        <li>Las texturas interactúan con la geometría del objeto</li>
      </ul>
    `,
    actividades: [
      {
        tipo: "experimentacion",
        instruccion: "Crea una esfera simple y experimenta pintando sobre ella desde diferentes ángulos",
        tiempo: "5 minutos"
      }
    ]
  },
  secciones: [
    {
      id: 1,
      titulo: "Herramientas de Pintura 3D",
      contenido: `
        <h3>🖌️ Paleta de pinceles especializados</h3>
        <p>Paint 3D ofrece diversos pinceles diseñados específicamente para trabajar en superficies tridimensionales:</p>

        <h4>Pinceles principales:</h4>
        
        <h5>Pincel Marcador:</h5>
        <ul>
          <li>Ideal para líneas precisas y detalles finos</li>
          <li>Se adapta automáticamente a la curvatura del objeto</li>
          <li>Perfecto para contornos y elementos lineales</li>
        </ul>

        <h5>Pincel Aerógrafo:</h5>
        <ul>
          <li>Crea efectos de degradado suave</li>
          <li>Útil para sombras y transiciones de color</li>
          <li>Permite efectos de difuminado natural</li>
        </ul>

        <h5>Pincel Acuarela:</h5>
        <ul>
          <li>Simula la textura de pintura tradicional</li>
          <li>Crea efectos orgánicos y naturales</li>
          <li>Ideal para fondos y texturas base</li>
        </ul>

        <h5>Pincel Óleo:</h5>
        <ul>
          <li>Proporciona trazos espesos y texturizados</li>
          <li>Perfecto para efectos pictóricos</li>
          <li>Ideal para estilos artísticos expresivos</li>
        </ul>

        <h4>Configuración de pinceles:</h4>
        <ul>
          <li><strong>Tamaño:</strong> Controla el grosor del trazo</li>
          <li><strong>Opacidad:</strong> Determina la transparencia del color</li>
          <li><strong>Flujo:</strong> Regula la cantidad de pintura aplicada</li>
          <li><strong>Presión:</strong> Varía la intensidad según el dispositivo</li>
        </ul>

        <div class="tip-tecnico">
          <h4>💡 Consejos para pintura 3D efectiva</h4>
          <ul>
            <li>Rotar el objeto para acceder a todas las superficies</li>
            <li>Usar pinceles pequeños para detalles precisos</li>
            <li>Aplicar capas graduales para mayor control</li>
            <li>Experimentar con diferentes niveles de opacidad</li>
          </ul>
        </div>
      `,
      actividades: [
        {
          tipo: "practica",
          instruccion: "Prueba cada tipo de pincel en un cubo simple, observando cómo se comporta cada uno",
          tiempo: "10 minutos"
        }
      ]
    },
    {
      id: 2,
      titulo: "Texturas y materiales",
      contenido: `
        <h3>🏺 Aplicando texturas y materiales</h3>
        <p>Las texturas dan vida y realismo a los objetos 3D, permitiendo simular diferentes tipos de materiales y superficies.</p>

        <h4>Tipos de texturas disponibles:</h4>
        
        <h5>Texturas básicas:</h5>
        <ul>
          <li><strong>Metal:</strong> Efectos brillantes y reflectantes</li>
          <li><strong>Madera:</strong> Vetas naturales y calidez</li>
          <li><strong>Piedra:</strong> Rugosidad y solidez</li>
          <li><strong>Tela:</strong> Suavidad y textura táctil</li>
          <li><strong>Cristal:</strong> Transparencia y reflejos</li>
        </ul>

        <h5>Texturas avanzadas:</h5>
        <ul>
          <li><strong>Mármol:</strong> Patrones naturales complejos</li>
          <li><strong>Cuero:</strong> Rugosidad característica</li>
          <li><strong>Césped:</strong> Texturas orgánicas verdes</li>
          <li><strong>Arena:</strong> Granulado fino</li>
          <li><strong>Agua:</strong> Efectos fluidos y reflejos</li>
        </ul>

        <h4>Propiedades de materiales:</h4>
        <ul>
          <li><strong>Reflectividad:</strong> Cantidad de luz reflejada</li>
          <li><strong>Rugosidad:</strong> Suavidad o aspereza de la superficie</li>
          <li><strong>Metalicidad:</strong> Características metálicas</li>
          <li><strong>Transparencia:</strong> Grado de opacidad</li>
          <li><strong>Emisión:</strong> Capacidad de emitir luz propia</li>
        </ul>

        <h4>Técnicas de aplicación:</h4>
        
        <h5>Mapeo UV:</h5>
        <p>Paint 3D maneja automáticamente el mapeo de texturas sobre las superficies 3D, adaptándose a la forma del objeto.</p>

        <h5>Combinación de texturas:</h5>
        <ul>
          <li>Superposición de múltiples texturas</li>
          <li>Mezcla de materiales diferentes</li>
          <li>Transiciones suaves entre texturas</li>
          <li>Uso de máscaras para aplicación selectiva</li>
        </ul>

        <div class="ejemplo-practico">
          <h4>🎯 Ejemplo: Texturizar un objeto arquitectónico</h4>
          <ol>
            <li>Crear estructura básica del edificio</li>
            <li>Aplicar textura de ladrillo a las paredes</li>
            <li>Usar textura de metal para marcos de ventanas</li>
            <li>Añadir textura de tejas al techo</li>
            <li>Aplicar cristal transparente a las ventanas</li>
          </ol>
        </div>
      `,
      actividades: [
        {
          tipo: "experimentacion",
          instruccion: "Aplica 5 texturas diferentes a un mismo objeto y observa cómo cambia su apariencia",
          tiempo: "15 minutos"
        }
      ]
    },
    {
      id: 3,
      titulo: "Efectos de iluminación y color",
      contenido: `
        <h3>💡 Dominando la luz y el color</h3>
        <p>La iluminación es fundamental para que los colores y texturas se vean correctamente en el espacio tridimensional.</p>

        <h4>Configuración de iluminación:</h4>
        
        <h5>Tipos de luces:</h5>
        <ul>
          <li><strong>Luz ambiental:</strong> Iluminación general uniforme</li>
          <li><strong>Luz direccional:</strong> Simula luz solar, crea sombras definidas</li>
          <li><strong>Luz puntual:</strong> Emite desde un punto específico</li>
          <li><strong>Luz de área:</strong> Iluminación suave desde una superficie</li>
        </ul>

        <h5>Propiedades de la luz:</h5>
        <ul>
          <li><strong>Intensidad:</strong> Fuerza de la iluminación</li>
          <li><strong>Color:</strong> Tono de la luz (cálida, fría, neutra)</li>
          <li><strong>Dirección:</strong> Ángulo desde el cual incide</li>
          <li><strong>Atenuación:</strong> Disminución con la distancia</li>
        </ul>

        <h4>Teoría del color en 3D:</h4>
        
        <h5>Temperatura de color:</h5>
        <ul>
          <li><strong>Colores cálidos:</strong> Rojos, naranjas, amarillos (avanzan visualmente)</li>
          <li><strong>Colores fríos:</strong> Azules, verdes, violetas (retroceden visualmente)</li>
          <li><strong>Colores neutros:</strong> Grises, blancos, negros (equilibran)</li>
        </ul>

        <h5>Armonías cromáticas:</h5>
        <ul>
          <li><strong>Monocromática:</strong> Variaciones de un solo color</li>
          <li><strong>Análoga:</strong> Colores adyacentes en el círculo cromático</li>
          <li><strong>Complementaria:</strong> Colores opuestos que se contrastan</li>
          <li><strong>Triádica:</strong> Tres colores equidistantes</li>
        </ul>

        <h4>Efectos especiales:</h4>
        <ul>
          <li><strong>Gradientes:</strong> Transiciones suaves de color</li>
          <li><strong>Patrones:</strong> Repetición de elementos decorativos</li>
          <li><strong>Brillos:</strong> Efectos de luz intensa localizada</li>
          <li><strong>Sombras:</strong> Proyección de oscuridad que da profundidad</li>
        </ul>

        <div class="consejo-artistico">
          <h4>🎨 Principios de composición cromática</h4>
          <ul>
            <li>Usar un color dominante (60% del esquema)</li>
            <li>Añadir un color secundario (30%)</li>
            <li>Incluir un color de acento (10%)</li>
            <li>Considerar el contraste para legibilidad</li>
            <li>Mantener coherencia en la temperatura</li>
          </ul>
        </div>
      `,
      actividades: [
        {
          tipo: "creativo",
          instruccion: "Crea tres versiones del mismo objeto con esquemas de color diferentes: cálido, frío y monocromático",
          tiempo: "20 minutos"
        }
      ]
    }
  ],
  actividades: [
    {
      id: "actividad-1",
      titulo: "Estudio de materiales",
      descripcion: "Explora las posibilidades de diferentes texturas y materiales",
      objetivos: [
        "Familiarizarse con la biblioteca de texturas",
        "Comprender cómo las texturas afectan la percepción",
        "Practicar la aplicación selectiva de materiales"
      ],
      instrucciones: [
        "Crea 5 cubos idénticos",
        "Aplica una textura diferente a cada uno (metal, madera, piedra, tela, cristal)",
        "Observa cómo cada material responde a la iluminación",
        "Experimenta con diferentes ángulos de luz",
        "Toma capturas comparativas de todos los materiales",
        "Anota tus observaciones sobre cada textura"
      ],
      duracion: "25 minutos",
      dificultad: "Básico"
    },
    {
      id: "actividad-2",
      titulo: "Proyecto temático: Habitación decorada",
      descripcion: "Crea una habitación completa aplicando principios de decoración",
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
  recursos: {
    documentos: [
      {
        tipo: "tutorial",
        titulo: "Guía Completa de Pinceles Paint 3D",
        descripcion: "Tutorial detallado sobre cada herramienta de pintura",
        url: "#",
        duracion: "15 min"
      },
      {
        tipo: "referencia",
        titulo: "Biblioteca de Texturas",
        descripcion: "Colección de texturas adicionales para proyectos",
        url: "#"
      },
      {
        tipo: "teoria",
        titulo: "Fundamentos de Teoría del Color",
        descripcion: "Conceptos esenciales sobre color y armonías cromáticas",
        url: "#"
      }
    ],
    enlaces: [],
    videos: []
  },
  evaluacion: {
    tipo: "proyecto",
    titulo: "Evaluación: Objeto personalizado completo",
    descripcion: "Decora un objeto 3D demostrando dominio de técnicas de pintura y decoración",
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
      "Usa al menos 3 texturas diferentes",
      "Configura iluminación que realce las características",
      "Presenta el objeto desde múltiples ángulos"
    ],
    tiempoLimite: "60 minutos",
    puntuacionMaxima: 100,
    entregables: [
      "Archivo del proyecto Paint 3D",
      "4 capturas desde ángulos diferentes",
      "Breve descripción del significado personal del objeto"
    ]
  },
  glosario: [
    {
      termino: "Textura",
      definicion: "Imagen que se aplica a la superficie de un objeto 3D para simular materiales reales"
    },
    {
      termino: "Mapeo UV",
      definicion: "Proceso de proyectar una imagen 2D sobre la superficie de un objeto 3D"
    },
    {
      termino: "Reflectividad",
      definicion: "Propiedad que determina cuánta luz refleja la superficie de un material"
    },
    {
      termino: "Opacidad",
      definicion: "Grado de transparencia u opacidad de un material o color"
    },
    {
      termino: "Temperatura de color",
      definicion: "Característica que define si un color es cálido (rojizo) o frío (azulado)"
    },
    {
      termino: "Armonía cromática",
      definicion: "Combinación de colores que resulta visualmente agradable y equilibrada"
    },
    {
      termino: "Gradiente",
      definicion: "Transición gradual entre dos o más colores"
    },
    {
      termino: "Emisión",
      definicion: "Capacidad de un material para emitir luz propia"
    }
  ]
};

export default tema03PinturaDecoracion;
