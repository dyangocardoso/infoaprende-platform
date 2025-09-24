/**
 * Tema 2: Creación de objetos 3D
 * Curso: Diseñador Gráfico Paint 3D
 * Versión corregida - Compatible con sistema modular
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
      id: 1,
      titulo: 'Dominando las formas primitivas',
      contenido: `
        <h3>🔷 Formas básicas como bloques de construcción</h3>
        <p>Las formas primitivas son los bloques de construcción fundamentales del modelado 3D. Dominar su uso y combinación es esencial para crear objetos complejos.</p>

        <h4>Formas básicas y sus aplicaciones:</h4>
        
        <h5>Cubo/Caja:</h5>
        <ul>
          <li><strong>Aplicaciones:</strong> Edificios, muebles, estructuras arquitectónicas</li>
          <li><strong>Ventajas:</strong> Fácil de modificar, ideal para construcciones geométricas</li>
          <li><strong>Técnicas:</strong> Escalado no uniforme para crear rectángulos, uso como base estructural</li>
          <li><strong>Consejos:</strong> Perfecto para comenzar proyectos complejos</li>
        </ul>

        <h5>Esfera:</h5>
        <ul>
          <li><strong>Aplicaciones:</strong> Cabezas, pelotas, planetas, elementos orgánicos</li>
          <li><strong>Ventajas:</strong> Superficie suave, ideal para formas naturales</li>
          <li><strong>Técnicas:</strong> Escalado para crear elipsoides, cortes para hemisferios</li>
          <li><strong>Consejos:</strong> Base excelente para caracteres y formas orgánicas</li>
        </ul>

        <h5>Cilindro:</h5>
        <ul>
          <li><strong>Aplicaciones:</strong> Columnas, tubos, troncos, ruedas</li>
          <li><strong>Ventajas:</strong> Versatilidad para elementos circulares y alargados</li>
          <li><strong>Técnicas:</strong> Escalado en altura para torres, en ancho para discos</li>
          <li><strong>Consejos:</strong> Fundamental para arquitectura y vehículos</li>
        </ul>

        <h4>Técnicas de combinación:</h4>
        <p>La verdadera potencia del modelado surge al combinar múltiples formas:</p>
        
        <ul>
          <li><strong>Jerarquía:</strong> Elementos principales y secundarios</li>
          <li><strong>Proporción:</strong> Relaciones armoniosas entre tamaños</li>
          <li><strong>Equilibrio:</strong> Distribución visual del peso</li>
          <li><strong>Ritmo:</strong> Repetición y variación de elementos</li>
        </ul>

        <div class="tip-importante">
          <h4>💡 Flujo de trabajo recomendado</h4>
          <ol>
            <li>Planificar la estructura principal</li>
            <li>Crear elementos base más grandes</li>
            <li>Añadir elementos secundarios</li>
            <li>Refinar detalles y proporciones</li>
            <li>Realizar ajustes finales de posición</li>
          </ol>
        </div>
      `,
      actividades: [
        {
          tipo: "practica",
          instruccion: "Crea una silla simple usando solo cubos escalados de diferentes tamaños",
          tiempo: "15 minutos"
        }
      ]
    },
    {
      id: 2,
      titulo: 'Extrusión y modelado avanzado',
      contenido: `
        <h3>📐 Técnicas de extrusión y modelado</h3>
        <p>La extrusión es una técnica fundamental para crear profundidad desde formas 2D, permitiendo convertir dibujos planos en objetos tridimensionales.</p>

        <h4>¿Qué es la extrusión?</h4>
        <ul>
          <li>Proceso de dar volumen a formas planas</li>
          <li>Conversión de dibujos 2D en objetos 3D</li>
          <li>Técnica esencial para modelado arquitectónico</li>
          <li>Base para crear formas complejas personalizadas</li>
        </ul>

        <h4>Tipos de extrusión en Paint 3D:</h4>
        <ul>
          <li><strong>Extrusión directa:</strong> Proyección perpendicular al plano</li>
          <li><strong>Extrusión con bisel:</strong> Bordes suavizados y redondeados</li>
          <li><strong>Extrusión variable:</strong> Cambio de tamaño durante la proyección</li>
          <li><strong>Extrusión múltiple:</strong> Varias operaciones en el mismo objeto</li>
        </ul>

        <h4>Modelado orgánico vs geométrico:</h4>
        
        <h5>Modelado geométrico:</h5>
        <ul>
          <li><strong>Características:</strong> Líneas rectas, ángulos definidos, simetría</li>
          <li><strong>Aplicaciones:</strong> Arquitectura, máquinas, muebles, vehículos</li>
          <li><strong>Ventajas:</strong> Precisión, facilidad de modificación, aspecto profesional</li>
        </ul>

        <h5>Modelado orgánico:</h5>
        <ul>
          <li><strong>Características:</strong> Curvas suaves, formas naturales, asimetría</li>
          <li><strong>Aplicaciones:</strong> Caracteres, plantas, animales, paisajes</li>
          <li><strong>Ventajas:</strong> Naturalidad, expresividad, movimiento visual</li>
        </ul>
      `,
      actividades: [
        {
          tipo: "proyecto",
          instruccion: "Crea tu inicial en 3D usando extrusión, experimenta con diferentes niveles de profundidad",
          tiempo: "20 minutos"
        }
      ]
    },
    {
      id: 3,
      titulo: 'Proyectos prácticos de modelado',
      contenido: `
        <h3>🏗️ Aplicando técnicas en proyectos reales</h3>
        <p>Los proyectos prácticos nos permiten integrar todas las técnicas aprendidas en creaciones completas y funcionales.</p>

        <h4>Proyecto: Vehículo simple</h4>
        <p>Crear un vehículo nos permite practicar múltiples técnicas de modelado:</p>

        <h5>Construcción paso a paso:</h5>
        <ol>
          <li><strong>Carrocería principal:</strong> Cubo base escalado para formar el cuerpo</li>
          <li><strong>Cabina del conductor:</strong> Cubo más pequeño en la parte superior</li>
          <li><strong>Ruedas:</strong> Cilindros posicionados en las cuatro esquinas</li>
          <li><strong>Detalles:</strong> Ventanas, parachoques, faros con formas pequeñas</li>
        </ol>

        <h4>Proyecto: Edificio modular</h4>
        <p>Un edificio permite explorar arquitectura y técnicas de construcción modular:</p>

        <h5>Elementos estructurales:</h5>
        <ul>
          <li><strong>Base y cimentación:</strong> Plataforma más ancha que el edificio</li>
          <li><strong>Estructura principal:</strong> Muros usando cubos escalados</li>
          <li><strong>Sistema de ventanas:</strong> Patrón repetitivo para coherencia</li>
          <li><strong>Elementos de techo:</strong> Estructura de cubierta y detalles</li>
        </ul>

        <h4>Proyecto: Personaje básico</h4>
        <p>Crear un personaje simple combina técnicas orgánicas y geométricas:</p>

        <ul>
          <li><strong>Estilo cartoon:</strong> Mayor simplicidad y expresividad</li>
          <li><strong>Proporciones exageradas:</strong> Para mayor carácter</li>
          <li><strong>Formas básicas:</strong> Esferas para cabezas, cilindros para extremidades</li>
          <li><strong>Detalles distintivos:</strong> Accesorios que refuercen la personalidad</li>
        </ul>

        <div class="consejo-experto">
          <h4>🎯 Consejos para proyectos exitosos</h4>
          <ul>
            <li>Comenzar con formas muy simples</li>
            <li>Trabajar de lo general a lo específico</li>
            <li>Mantener consistencia en el estilo</li>
            <li>Probar diferentes ángulos de visualización</li>
            <li>Guardar versiones incrementales del progreso</li>
          </ul>
        </div>
      `,
      actividades: [
        {
          tipo: "proyecto",
          instruccion: "Elige uno de los tres proyectos mencionados y créalo paso a paso, documentando tu proceso",
          tiempo: "45 minutos"
        }
      ]
    }
  ],
  actividades: [
    {
      id: "actividad-1",
      titulo: "Análisis y recreación de objetos",
      descripcion: "Desarrolla habilidades de observación y descomposición de formas complejas",
      objetivos: [
        "Desarrollar habilidades de análisis visual",
        "Comprender la descomposición en formas básicas",
        "Practicar técnicas de modelado sistemático"
      ],
      instrucciones: [
        "Elige 3 objetos cotidianos de diferentes categorías",
        "Analiza cada objeto identificando las formas primitivas que lo componen",
        "Crea una tabla con: objeto, formas identificadas, proporciones",
        "Recrea cada objeto en Paint 3D usando solo las formas identificadas",
        "Compara tus modelos con los objetos reales",
        "Documenta tu proceso con capturas de pantalla"
      ],
      duracion: "30 minutos",
      dificultad: "Intermedio"
    },
    {
      id: "actividad-2",
      titulo: "Proyecto colaborativo: Ciudad miniatura",
      descripcion: "Crea múltiples edificios que formarán parte de una ciudad modular",
      objetivos: [
        "Aplicar técnicas de modelado modular",
        "Desarrollar coherencia visual en conjunto",
        "Practicar escalas y proporciones arquitectónicas"
      ],
      instrucciones: [
        "Elige un tipo específico de edificio (residencial, comercial, industrial)",
        "Diseña un edificio de 3-5 pisos usando técnicas modulares",
        "Incorpora al menos 5 tipos de formas primitivas diferentes",
        "Añade detalles arquitectónicos característicos",
        "Crea variaciones del mismo edificio (al menos 3 versiones)",
        "Desarrolla un sistema de colores coherente",
        "Crea múltiples vistas: aérea, street view, y perspectivas dramáticas"
      ],
      duracion: "90-120 minutos",
      dificultad: "Avanzado"
    }
  ],
  recursos: [
    {
      tipo: "guia",
      titulo: "Proporciones y escalas en modelado 3D",
      descripcion: "Guía para mantener proporciones realistas en tus modelos",
      url: "#"
    },
    {
      tipo: "tutorial",
      titulo: "Atajos de teclado para modelado eficiente",
      descripcion: "Comandos rápidos para acelerar tu flujo de trabajo",
      url: "#"
    },
    {
      tipo: "video",
      titulo: "Masterclass: De concepto a modelo 3D",
      descripcion: "Proceso completo de modelado desde idea inicial hasta resultado final",
      duracion: "25 min",
      url: "#"
    }
  ],
  evaluacion: {
    tipo: "proyecto",
    titulo: "Evaluación: Proyecto de modelado completo",
    descripcion: "Crea un objeto complejo que demuestre dominio de técnicas de modelado 3D",
    criterios: [
      {
        aspecto: "Uso de formas primitivas",
        descripcion: "Empleo efectivo y creativo de al menos 4 tipos de formas básicas",
        puntos: 25
      },
      {
        aspecto: "Técnicas de combinación",
        descripcion: "Integración armoniosa de múltiples elementos",
        puntos: 25
      },
      {
        aspecto: "Proporciones y escala",
        descripcion: "Mantenimiento de proporciones realistas y coherentes",
        puntos: 25
      },
      {
        aspecto: "Creatividad y originalidad",
        descripcion: "Desarrollo de soluciones innovadoras y estéticamente atractivas",
        puntos: 25
      }
    ],
    instrucciones: [
      "Elige un tema que te interese (vehículo futurista, edificio fantástico, criatura imaginaria)",
      "Planifica tu modelo identificando las formas primitivas necesarias",
      "Construye el modelo aplicando técnicas de este tema",
      "Refina proporciones y detalles para mayor realismo",
      "Presenta el modelo desde múltiples ángulos",
      "Incluye una breve explicación de tu proceso creativo"
    ],
    tiempoLimite: "90 minutos",
    puntuacionMaxima: 100,
    entregables: [
      "Archivo del proyecto Paint 3D",
      "Al menos 5 capturas desde diferentes ángulos",
      "Documento explicando el proceso de modelado",
      "Boceto inicial del concepto"
    ]
  },
  glosario: [
    {
      termino: "Primitiva 3D",
      definicion: "Forma geométrica básica que sirve como bloque de construcción para objetos más complejos"
    },
    {
      termino: "Extrusión",
      definicion: "Técnica para crear objetos 3D proyectando una forma 2D a lo largo de un eje"
    },
    {
      termino: "Escalado no uniforme",
      definicion: "Cambio de tamaño de un objeto en diferentes proporciones para cada eje (X, Y, Z)"
    },
    {
      termino: "Modelado modular",
      definicion: "Enfoque de construcción usando elementos repetibles que pueden combinarse de diferentes maneras"
    },
    {
      termino: "Biselado",
      definicion: "Técnica para suavizar bordes duros creando superficies inclinadas en las aristas"
    },
    {
      termino: "Topología",
      definicion: "Estructura de conexión de los elementos geométricos que forman un objeto 3D"
    },
    {
      termino: "Pivot point",
      definicion: "Punto de referencia alrededor del cual ocurren las rotaciones y escalados de un objeto"
    },
    {
      termino: "Geometría procedimental",
      definicion: "Método de creación automática de geometría usando algoritmos y parámetros"
    }
  ]
};

export default tema02CreacionObjetos3D;
