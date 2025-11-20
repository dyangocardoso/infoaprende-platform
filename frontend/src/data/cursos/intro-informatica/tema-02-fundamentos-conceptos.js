/**
 * Tema 2: Fundamentos y conceptos de la informática
 * Curso: Introducción a la Informática
 */

export const tema02 = {
  id: '2',
  titulo: "Fundamentos y conceptos",
  tematica: "Informática, sistemas, computación, datos e información",
  duracion: "30-35 minutos",
  objetivos: [
    "Definir qué es la informática como ciencia",
    "Comprender los conceptos fundamentales de datos e información",
    "Entender los componentes de un sistema de información",
    "Conocer el ciclo básico de procesamiento de información"
  ],
  secciones: [
    {
      id: 1,
      titulo: "¿Qué es la Informática?",
      contenido: `
        <h3>💻 Definición y Alcance de la Informática</h3>
        
        <div class="definicion-informatica">
          <h4>📚 Definición</h4>
          <p>La <strong>Informática</strong> es la ciencia que estudia el tratamiento automático de la información mediante el uso de computadoras y sistemas digitales.</p>
          
          <h5>Etimología:</h5>
          <ul>
            <li><strong>"Information"</strong> (información) + <strong>"Automatique"</strong> (automática)</li>
            <li>Término francés acuñado en 1962 por Philippe Dreyfus</li>
            <li>En inglés: <strong>Computer Science</strong> (Ciencia de la Computación)</li>
            <li>En español: <strong>Informática</strong> o <strong>Computación</strong></li>
          </ul>

          <h4>🎯 Objetivos de la Informática</h4>
          <ul>
            <li><strong>Automatizar:</strong> Procesos de tratamiento de información</li>
            <li><strong>Optimizar:</strong> Recursos y tiempo en el procesamiento</li>
            <li><strong>Sistematizar:</strong> Métodos de resolución de problemas</li>
            <li><strong>Innovar:</strong> Soluciones tecnológicas eficientes</li>
          </ul>

          <h4>🔬 Características de la Informática</h4>
          <ul>
            <li><strong>Interdisciplinaria:</strong> Combina matemáticas, ingeniería, lógica</li>
            <li><strong>Práctica:</strong> Aplicación directa en problemas reales</li>
            <li><strong>Evolutiva:</strong> Cambio constante y mejora continua</li>
            <li><strong>Universal:</strong> Aplicable en todas las áreas del conocimiento</li>
          </ul>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/definicion-informatica.jpg",
        infografia: "/images/teoria/objetivos-informatica.png"
      }
    },
    {
      id: 2,
      titulo: "Áreas de la Informática",
      contenido: `
        <h3>🌐 Ramas y Especialidades</h3>
        
        <div class="areas-informatica">
          <h4>💾 Informática Teórica</h4>
          <ul>
            <li><strong>Algoritmos:</strong> Diseño y análisis de algoritmos eficientes</li>
            <li><strong>Complejidad computacional:</strong> Estudio de recursos necesarios</li>
            <li><strong>Teoría de la computación:</strong> Límites y capacidades de cómputo</li>
            <li><strong>Criptografía:</strong> Seguridad y protección de información</li>
          </ul>

          <h4>🔧 Informática Aplicada</h4>
          <ul>
            <li><strong>Ingeniería de software:</strong> Desarrollo de aplicaciones</li>
            <li><strong>Bases de datos:</strong> Almacenamiento y gestión de información</li>
            <li><strong>Redes de computadoras:</strong> Comunicación entre sistemas</li>
            <li><strong>Sistemas operativos:</strong> Gestión de recursos de hardware</li>
          </ul>

          <h4>🤖 Áreas Emergentes</h4>
          <ul>
            <li><strong>Inteligencia Artificial:</strong> Sistemas que simulan inteligencia humana</li>
            <li><strong>Machine Learning:</strong> Aprendizaje automático de máquinas</li>
            <li><strong>Big Data:</strong> Análisis de grandes volúmenes de datos</li>
            <li><strong>Ciberseguridad:</strong> Protección de sistemas digitales</li>
            <li><strong>Internet of Things (IoT):</strong> Dispositivos conectados</li>
          </ul>

          <h4>👨‍💼 Informática en Negocios</h4>
          <ul>
            <li><strong>Sistemas de información gerencial:</strong> Apoyo a toma de decisiones</li>
            <li><strong>E-commerce:</strong> Comercio electrónico</li>
            <li><strong>ERP:</strong> Planificación de recursos empresariales</li>
            <li><strong>Business Intelligence:</strong> Inteligencia de negocios</li>
          </ul>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/areas-informatica.jpg",
        infografia: "/images/teoria/especializaciones.png"
      },
      actividades: [
        {
          tipo: "reflexion",
          pregunta: "¿En qué áreas de tu vida cotidiana identificas aplicaciones de la informática?",
          ayuda: "Piensa en tu teléfono, redes sociales, compras online, etc."
        }
      ]
    },
    {
      id: 3,
      titulo: "Datos vs Información",
      contenido: `
        <h3>📊 Diferenciando Conceptos Fundamentales</h3>
        
        <div class="datos-vs-informacion">
          <h4>📁 ¿Qué son los Datos?</h4>
          <p>Los <strong>datos</strong> son elementos individuales, hechos o cifras en bruto, sin procesar, que por sí solos no tienen significado específico.</p>
          
          <h5>Características de los Datos:</h5>
          <ul>
            <li><strong>Elementos brutos:</strong> No han sido procesados o interpretados</li>
            <li><strong>Sin contexto:</strong> Carecen de significado por sí solos</li>
            <li><strong>Variados tipos:</strong> Números, texto, imágenes, sonidos</li>
            <li><strong>Materia prima:</strong> Base para generar información</li>
          </ul>

          <h5>Ejemplos de Datos:</h5>
          <ul>
            <li>El número <strong>25</strong></li>
            <li>La palabra <strong>"Juan"</strong></li>
            <li>La fecha <strong>15/03/2024</strong></li>
            <li>El valor <strong>$500</strong></li>
          </ul>

          <h4>💡 ¿Qué es la Información?</h4>
          <p>La <strong>información</strong> son datos que han sido procesados, organizados y presentados de manera que tienen significado y utilidad para quien los recibe.</p>
          
          <h5>Características de la Información:</h5>
          <ul>
            <li><strong>Datos procesados:</strong> Resultado del tratamiento de datos</li>
            <li><strong>Con contexto:</strong> Tienen significado y propósito</li>
            <li><strong>Útil:</strong> Sirve para tomar decisiones</li>
            <li><strong>Comunicable:</strong> Se puede transmitir y entender</li>
          </ul>

          <h5>Ejemplos de Información:</h5>
          <ul>
            <li><strong>"Juan tiene 25 años"</strong> (edad de una persona)</li>
            <li><strong>"La venta del 15/03/2024 fue de $500"</strong> (registro comercial)</li>
            <li><strong>"La temperatura es 25°C"</strong> (estado del clima)</li>
            <li><strong>"Juan gastó $500 el 15/03/2024"</strong> (transacción financiera)</li>
          </ul>

          <h4>🔄 Proceso de Transformación</h4>
          <div class="proceso-transformacion">
            <h5>Datos → Procesamiento → Información</h5>
            <ol>
              <li><strong>Recolección:</strong> Obtener datos del entorno</li>
              <li><strong>Clasificación:</strong> Organizar datos por categorías</li>
              <li><strong>Procesamiento:</strong> Aplicar operaciones y cálculos</li>
              <li><strong>Análisis:</strong> Interpretar resultados</li>
              <li><strong>Presentación:</strong> Mostrar información útil</li>
            </ol>
          </div>

          <h4>🎯 Ejemplo Práctico: Sistema de Notas</h4>
          <div class="ejemplo-notas">
            <h5>Datos:</h5>
            <ul>
              <li>85, 90, 78, 92, 88 (calificaciones individuales)</li>
              <li>Ana, Carlos, Luis, María, Pedro (nombres)</li>
              <li>Matemáticas (materia)</li>
            </ul>

            <h5>Procesamiento:</h5>
            <ul>
              <li>Calcular promedio: (85+90+78+92+88) ÷ 5 = 86.6</li>
              <li>Identificar máxima y mínima calificación</li>
              <li>Determinar estudiantes aprobados/reprobados</li>
            </ul>

            <h5>Información:</h5>
            <ul>
              <li><strong>"El promedio de la clase de Matemáticas es 86.6"</strong></li>
              <li><strong>"María obtuvo la calificación más alta (92)"</strong></li>
              <li><strong>"Luis necesita apoyo adicional (78)"</strong></li>
              <li><strong>"4 de 5 estudiantes aprobaron el examen"</strong></li>
            </ul>
          </div>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/datos-vs-informacion.jpg",
        infografia: "/images/teoria/proceso-transformacion.png"
      },
      actividades: [
        {
          tipo: "practica",
          pregunta: "Convierte estos datos en información útil: 'Pedro', '8:30', 'oficina', 'lunes'",
          ayuda: "Crea una oración que dé contexto y significado a todos los datos"
        }
      ]
    },
    {
      id: 4,
      titulo: "Sistemas de Información",
      contenido: `
        <h3>🏗️ Componentes y Estructura</h3>
        
        <div class="sistemas-informacion">
          <h4>🎯 Definición</h4>
          <p>Un <strong>Sistema de Información</strong> es un conjunto de elementos interrelacionados que recogen, procesan, almacenan y distribuyen información para apoyar la toma de decisiones y el control en una organización.</p>

          <h4>🧩 Componentes de un Sistema de Información</h4>
          
          <div class="componente-hardware">
            <h5>💻 Hardware</h5>
            <ul>
              <li><strong>Equipos físicos:</strong> Computadoras, servidores, dispositivos móviles</li>
              <li><strong>Dispositivos de entrada:</strong> Teclado, ratón, micrófono, cámaras</li>
              <li><strong>Dispositivos de salida:</strong> Monitor, impresora, altavoces</li>
              <li><strong>Almacenamiento:</strong> Discos duros, SSD, memorias USB</li>
              <li><strong>Redes:</strong> Cables, routers, switches, antenas</li>
            </ul>
          </div>

          <div class="componente-software">
            <h5>⚙️ Software</h5>
            <ul>
              <li><strong>Sistema operativo:</strong> Windows, macOS, Linux, Android</li>
              <li><strong>Aplicaciones:</strong> Programas específicos para tareas</li>
              <li><strong>Bases de datos:</strong> Sistemas de gestión de datos</li>
              <li><strong>Software de red:</strong> Protocolos de comunicación</li>
              <li><strong>Seguridad:</strong> Antivirus, firewalls, cifrado</li>
            </ul>
          </div>

          <div class="componente-datos">
            <h5>📊 Datos</h5>
            <ul>
              <li><strong>Datos maestros:</strong> Información base (clientes, productos)</li>
              <li><strong>Datos transaccionales:</strong> Registros de operaciones</li>
              <li><strong>Datos históricos:</strong> Información del pasado para análisis</li>
              <li><strong>Metadatos:</strong> Datos sobre datos (estructura, origen)</li>
            </ul>
          </div>

          <div class="componente-personas">
            <h5>👥 Personas</h5>
            <ul>
              <li><strong>Usuarios finales:</strong> Quienes usan el sistema diariamente</li>
              <li><strong>Administradores:</strong> Gestión y mantenimiento del sistema</li>
              <li><strong>Desarrolladores:</strong> Creación y modificación de software</li>
              <li><strong>Gerentes:</strong> Toma de decisiones basada en información</li>
            </ul>
          </div>

          <div class="componente-procedimientos">
            <h5>📋 Procedimientos</h5>
            <ul>
              <li><strong>Políticas:</strong> Reglas de uso y acceso</li>
              <li><strong>Manuales:</strong> Instrucciones de operación</li>
              <li><strong>Estándares:</strong> Normas de calidad y seguridad</li>
              <li><strong>Protocolos:</strong> Secuencias de acciones definidas</li>
            </ul>
          </div>

          <h4>🔄 Ciclo de Procesamiento</h4>
          <div class="ciclo-procesamiento">
            <ol>
              <li><strong>ENTRADA (Input):</strong>
                <ul>
                  <li>Captura de datos del entorno</li>
                  <li>Validación y verificación</li>
                  <li>Codificación en formato digital</li>
                </ul>
              </li>
              <li><strong>PROCESAMIENTO:</strong>
                <ul>
                  <li>Clasificación y organización</li>
                  <li>Cálculos y transformaciones</li>
                  <li>Aplicación de reglas de negocio</li>
                </ul>
              </li>
              <li><strong>SALIDA (Output):</strong>
                <ul>
                  <li>Generación de reportes</li>
                  <li>Visualización en pantalla</li>
                  <li>Transmisión a otros sistemas</li>
                </ul>
              </li>
              <li><strong>RETROALIMENTACIÓN:</strong>
                <ul>
                  <li>Evaluación de resultados</li>
                  <li>Ajustes y mejoras</li>
                  <li>Control de calidad</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/sistemas-informacion.jpg",
        infografia: "/images/teoria/componentes-sistema.png",
        video: "/videos/ciclo-procesamiento.mp4"
      },
      actividades: [
        {
          tipo: "identificacion",
          pregunta: "Identifica los 5 componentes de un sistema de información en tu escuela",
          ayuda: "Piensa en las computadoras, programas, personas, datos y procedimientos que usan"
        }
      ]
    },
    {
      id: 5,
      titulo: "Computación y Algoritmos",
      contenido: `
        <h3>🧠 Fundamentos del Pensamiento Computacional</h3>
        
        <div class="computacion-algoritmos">
          <h4>⚡ ¿Qué es la Computación?</h4>
          <p>La <strong>computación</strong> es el proceso de usar computadoras y sistemas digitales para resolver problemas mediante el procesamiento automático de información.</p>

          <h5>Principios de la Computación:</h5>
          <ul>
            <li><strong>Automatización:</strong> Ejecución de tareas sin intervención humana</li>
            <li><strong>Precisión:</strong> Resultados exactos y consistentes</li>
            <li><strong>Velocidad:</strong> Procesamiento rápido de grandes cantidades de datos</li>
            <li><strong>Repetibilidad:</strong> Capacidad de repetir procesos idénticos</li>
          </ul>

          <h4>🔍 Algoritmos: El Corazón de la Computación</h4>
          <p>Un <strong>algoritmo</strong> es una secuencia finita de instrucciones bien definidas que resuelve un problema o realiza una tarea específica.</p>

          <h5>Características de un Algoritmo:</h5>
          <ul>
            <li><strong>Finito:</strong> Debe terminar en un número limitado de pasos</li>
            <li><strong>Definido:</strong> Cada paso debe estar claramente especificado</li>
            <li><strong>Entrada:</strong> Puede recibir cero o más datos de entrada</li>
            <li><strong>Salida:</strong> Produce uno o más resultados</li>
            <li><strong>Efectivo:</strong> Cada operación debe ser básica y realizable</li>
          </ul>

          <h4>📝 Ejemplo de Algoritmo: Preparar Café</h4>
          <div class="algoritmo-cafe">
            <ol>
              <li>Verificar que hay agua en el recipiente</li>
              <li>Añadir agua si es necesario</li>
              <li>Colocar filtro en la cafetera</li>
              <li>Medir y agregar café molido al filtro</li>
              <li>Encender la cafetera</li>
              <li>Esperar a que termine el proceso</li>
              <li>Servir el café en una taza</li>
              <li>Apagar la cafetera</li>
            </ol>
          </div>

          <h4>💻 Algoritmos en Informática</h4>
          
          <h5>Algoritmos de Búsqueda:</h5>
          <ul>
            <li><strong>Búsqueda lineal:</strong> Revisar elementos uno por uno</li>
            <li><strong>Búsqueda binaria:</strong> Dividir y conquistar en listas ordenadas</li>
          </ul>

          <h5>Algoritmos de Ordenamiento:</h5>
          <ul>
            <li><strong>Burbuja:</strong> Comparar elementos adyacentes</li>
            <li><strong>Inserción:</strong> Insertar elementos en posición correcta</li>
            <li><strong>Selección:</strong> Seleccionar el menor y colocarlo al inicio</li>
          </ul>

          <h5>Algoritmos de la Vida Diaria:</h5>
          <ul>
            <li><strong>Google Search:</strong> Encuentra páginas web relevantes</li>
            <li><strong>GPS:</strong> Calcula la ruta más rápida</li>
            <li><strong>Recomendaciones:</strong> Sugiere contenido personalizado</li>
            <li><strong>Compresión:</strong> Reduce el tamaño de archivos</li>
          </ul>

          <h4>🎯 Pensamiento Computacional</h4>
          <p>Es un proceso de resolución de problemas que incluye:</p>
          <ul>
            <li><strong>Descomposición:</strong> Dividir problemas complejos en partes simples</li>
            <li><strong>Reconocimiento de patrones:</strong> Identificar similitudes y regularidades</li>
            <li><strong>Abstracción:</strong> Enfocarse en aspectos importantes, ignorar detalles</li>
            <li><strong>Algoritmos:</strong> Crear pasos para resolver el problema</li>
          </ul>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/algoritmos-computacion.jpg",
        infografia: "/images/teoria/pensamiento-computacional.png",
        video: "/videos/algoritmos-ejemplos.mp4"
      },
      actividades: [
        {
          tipo: "practica",
          pregunta: "Crea un algoritmo para encontrar el número más grande en una lista de 5 números",
          ayuda: "Piensa paso a paso: comparar, recordar el mayor, continuar hasta el final"
        }
      ]
    },
    {
      id: 6,
      titulo: "Tratamiento Automático de la Información",
      contenido: `
        <h3>⚙️ Automatización en el Procesamiento</h3>
        
        <div class="tratamiento-automatico">
          <h4>🔄 ¿Qué es el Tratamiento Automático?</h4>
          <p>Es el procesamiento de información realizado por máquinas sin intervención humana directa, siguiendo instrucciones predefinidas (programas).</p>

          <h5>Ventajas del Tratamiento Automático:</h5>
          <ul>
            <li><strong>Velocidad:</strong> Procesamiento miles de veces más rápido que humanos</li>
            <li><strong>Precisión:</strong> Elimina errores humanos en cálculos repetitivos</li>
            <li><strong>Consistencia:</strong> Resultados idénticos en condiciones iguales</li>
            <li><strong>Disponibilidad:</strong> Funcionamiento 24/7 sin descanso</li>
            <li><strong>Escalabilidad:</strong> Manejo de grandes volúmenes de datos</li>
          </ul>

          <h4>📊 Tipos de Tratamiento</h4>
          
          <div class="tipos-tratamiento">
            <h5>🔢 Procesamiento de Datos Numéricos</h5>
            <ul>
              <li><strong>Cálculos matemáticos:</strong> Operaciones aritméticas complejas</li>
              <li><strong>Análisis estadístico:</strong> Promedios, tendencias, correlaciones</li>
              <li><strong>Simulaciones:</strong> Modelos matemáticos predictivos</li>
              <li><strong>Contabilidad:</strong> Balances, facturas, reportes financieros</li>
            </ul>

            <h5>📝 Procesamiento de Texto</h5>
            <ul>
              <li><strong>Edición de documentos:</strong> Formato, corrección, traducción</li>
              <li><strong>Búsqueda de información:</strong> Indexación y recuperación</li>
              <li><strong>Generación automática:</strong> Reportes, cartas, documentos</li>
              <li><strong>Análisis de sentimientos:</strong> Interpretación de texto</li>
            </ul>

            <h5>🖼️ Procesamiento Multimedia</h5>
            <ul>
              <li><strong>Imágenes:</strong> Filtros, reconocimiento, compresión</li>
              <li><strong>Audio:</strong> Edición, síntesis, reconocimiento de voz</li>
              <li><strong>Video:</strong> Edición, streaming, análisis de contenido</li>
              <li><strong>Gráficos:</strong> Renderizado 3D, animaciones</li>
            </ul>
          </div>

          <h4>🏭 Automatización en la Industria</h4>
          
          <h5>Manufactura:</h5>
          <ul>
            <li><strong>Robots industriales:</strong> Ensamblaje automatizado</li>
            <li><strong>Control de calidad:</strong> Inspección automática</li>
            <li><strong>Inventarios:</strong> Gestión automática de stock</li>
            <li><strong>Producción:</strong> Optimización de líneas de producción</li>
          </ul>

          <h5>Servicios:</h5>
          <ul>
            <li><strong>Banca:</strong> Procesamiento de transacciones, cajeros automáticos</li>
            <li><strong>Retail:</strong> Códigos de barras, sistemas POS</li>
            <li><strong>Transporte:</strong> Sistemas de reservas, control de tráfico</li>
            <li><strong>Salud:</strong> Análisis de laboratorio, diagnóstico asistido</li>
          </ul>

          <h4>🔮 Tecnologías Emergentes</h4>
          
          <h5>Inteligencia Artificial:</h5>
          <ul>
            <li><strong>Machine Learning:</strong> Sistemas que aprenden de datos</li>
            <li><strong>Procesamiento de lenguaje natural:</strong> Comprensión de texto humano</li>
            <li><strong>Visión por computadora:</strong> Interpretación de imágenes</li>
            <li><strong>Sistemas expertos:</strong> Toma de decisiones automatizada</li>
          </ul>

          <h5>Internet de las Cosas (IoT):</h5>
          <ul>
            <li><strong>Sensores inteligentes:</strong> Recolección automática de datos</li>
            <li><strong>Hogares inteligentes:</strong> Automatización doméstica</li>
            <li><strong>Ciudades inteligentes:</strong> Gestión urbana automatizada</li>
            <li><strong>Industria 4.0:</strong> Fábricas completamente automatizadas</li>
          </ul>

          <h4>⚖️ Consideraciones Éticas</h4>
          <ul>
            <li><strong>Privacidad:</strong> Protección de datos personales</li>
            <li><strong>Empleo:</strong> Impacto en trabajos tradicionales</li>
            <li><strong>Sesgo algorítmico:</strong> Decisiones justas e imparciales</li>
            <li><strong>Transparencia:</strong> Comprensión de decisiones automáticas</li>
            <li><strong>Control humano:</strong> Supervisión de sistemas críticos</li>
          </ul>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/tratamiento-automatico.jpg",
        infografia: "/images/teoria/automatizacion-industria.png",
        video: "/videos/ia-automatizacion.mp4"
      },
      actividades: [
        {
          tipo: "investigacion",
          pregunta: "Investiga y describe 3 ejemplos de tratamiento automático que uses en tu vida diaria",
          ayuda: "Piensa en apps de tu teléfono, servicios online, electrodomésticos inteligentes"
        }
      ]
    }
  ],
  recursos: {
    documentos: [
      {
        titulo: "Fundamentos de la Informática",
        url: "/docs/fundamentos-informatica.pdf",
        tipo: "pdf"
      },
      {
        titulo: "Sistemas de Información Empresariales",
        url: "/docs/sistemas-informacion.pdf",
        tipo: "pdf"
      }
    ],
    enlaces: [
      {
        titulo: "Association for Computing Machinery (ACM)",
        url: "https://www.acm.org/",
        tipo: "externo"
      },
      {
        titulo: "IEEE Computer Society",
        url: "https://www.computer.org/",
        tipo: "externo"
      }
    ],
    videos: [
      {
        titulo: "¿Qué es la Informática? - Conceptos básicos",
        url: "/videos/que-es-informatica.mp4",
        duracion: "8:15"
      }
    ]
  },
  evaluacion: {
    tipo: "cuestionario",
    preguntas: [
      {
        pregunta: "¿Cuál es la principal diferencia entre datos e información?",
        tipo: "opcion_multiple",
        opciones: [
          "Los datos son digitales, la información es análoga",
          "Los datos son hechos brutos, la información son datos procesados con significado",
          "Los datos son textos, la información son números",
          "No hay diferencia, son sinónimos"
        ],
        respuestaCorrecta: 1
      },
      {
        pregunta: "¿Cuáles son los 5 componentes de un sistema de información?",
        tipo: "opcion_multiple",
        opciones: [
          "Hardware, Software, Internet, Datos, Personas",
          "Entrada, Proceso, Salida, Control, Retroalimentación",
          "Hardware, Software, Datos, Personas, Procedimientos",
          "CPU, Memoria, Disco, Monitor, Teclado"
        ],
        respuestaCorrecta: 2
      },
      {
        pregunta: "¿Qué característica NO es propia de un algoritmo?",
        tipo: "opcion_multiple",
        opciones: [
          "Finito",
          "Definido",
          "Infinito",
          "Efectivo"
        ],
        respuestaCorrecta: 2
      },
      {
        pregunta: "El tratamiento automático de la información permite:",
        tipo: "opcion_multiple",
        opciones: [
          "Solo realizar cálculos matemáticos",
          "Procesar información sin intervención humana directa",
          "Únicamente almacenar datos",
          "Solo funcionar durante el día"
        ],
        respuestaCorrecta: 1
      },
      {
        pregunta: "¿Cuál es el primer paso en el ciclo de procesamiento de información?",
        tipo: "opcion_multiple",
        opciones: [
          "Procesamiento",
          "Salida",
          "Entrada",
          "Retroalimentación"
        ],
        respuestaCorrecta: 2
      }
    ]
  }
};

export default tema02;
