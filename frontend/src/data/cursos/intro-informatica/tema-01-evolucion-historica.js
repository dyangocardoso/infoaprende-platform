/**
 * Tema 1: Evolución histórica de la informática
 * Curso: Introducción a la Informática
 */

export const tema01 = {
  id: '1',
  titulo: "Evolución histórica",
  tematica: "Hitos de la era digital",
  duracion: "25-30 minutos",
  objetivos: [
    "Conocer los principales hitos en la evolución de la tecnología informática",
    "Identificar los pioneros que marcaron el desarrollo de la computación moderna",
    "Comprender la evolución desde dispositivos mecánicos hasta la era digital",
    "Valorar el impacto histórico de cada innovación tecnológica"
  ],
  secciones: [
    {
      id: 1,
      titulo: "Los Primeros Dispositivos de Cálculo",
      contenido: `
        <h3>🧮 Orígenes del Cálculo Automático</h3>
        
        <div class="historia-antigua">
          <h4>El Ábaco (3000 a.C.)</h4>
          <p>El <strong>ábaco</strong> fue uno de los primeros dispositivos de cálculo conocidos, utilizado en Mesopotamia, China y otras civilizaciones antiguas.</p>
          <img
            src="/images/teoria/historia-abaco.jpg"
            srcset="/images/teoria/historia-abaco.jpg 400w, /images/teoria/historia-abaco.jpg 800w, /images/teoria/historia-abaco.jpg 1600w"
            sizes="(max-width:500px) 100vw, 500px"
            alt="Ábaco"
            loading="lazy"
            style="width:100%;max-width:500px;height:auto;display:block;margin:0 auto;"
          />
          <h5>Características:</h5>
          <ul>
            <li><strong>Función:</strong> Realizar operaciones aritméticas básicas</li>
            <li><strong>Ventaja:</strong> Cálculos más rápidos que con los dedos</li>
            <li><strong>Uso:</strong> Comercio, contabilidad y astronomía</li>
            <li><strong>Durabilidad:</strong> Siguió usándose por milenios</li>
          </ul>

          <h4>Otros Dispositivos Antiguos</h4>
          <ul>
            <li><strong>Antikythera (100 a.C.):</strong> Calculadora astronómica griega</li>
            <li><strong>Huesos de Napier (1617):</strong> Barras para multiplicación</li>
            <li><strong>Regla de cálculo (1622):</strong> Dispositivo de cálculo logarítmico</li>
          </ul>
        </div>
      `,
      multimedia: {
        infografia: "/images/teoria/dispositivos-antiguos.jpg",
        infografia_srcset: "/images/teoria/dispositivos-antiguos.jpg 400w, /images/teoria/dispositivos-antiguos.jpg 800w, /images/teoria/dispositivos-antiguos.jpg 1600w",
        infografia_sizes: "(max-width:500px) 100vw, 500px",
        infografia_style: "max-width:600px;width:100%;height:auto;display:block;margin:0 auto;"
      }
    },
    {
      id: 2,
      titulo: "Las Máquinas Mecánicas (Siglo XVII)",
      contenido: `
        <h3>⚙️ La Era de las Máquinas Calculadoras</h3>
        
        <div class="maquinas-mecanicas">
          <h4>🎯 La Pascalina (1642) - Blaise Pascal</h4>
          <p>Blaise Pascal, matemático francés, creó la primera máquina calculadora mecánica exitosa.</p>
          
          <h5>Innovaciones de la Pascalina:</h5>
          <ul>
            <li><strong>Automatización:</strong> Primera suma automática con acarreo</li>
            <li><strong>Ruedas dentadas:</strong> Sistema de engranajes precisos</li>
            <li><strong>Propósito:</strong> Ayudar en los cálculos contables de su padre</li>
            <li><strong>Limitación:</strong> Solo suma y resta</li>
          </ul>
          <img
            src="/images/teoria/pascalina.jpg"
            srcset="/images/teoria/pascalina.jpg 400w"
            sizes="(max-width:400px) 100vw, 400px"
            alt="Pascalina"
            loading="lazy"
            style="width:100%;max-width:400px;height:auto;display:block;margin:0 auto;"
          />
          <h4>🔧 La Máquina de Leibniz (1673)</h4>
          <p>Gottfried Wilhelm Leibniz mejoró el diseño de Pascal creando la primera calculadora capaz de multiplicar y dividir.</p>
          <h5>Avances de Leibniz:</h5>
          <ul>
            <li><strong>Cilindro escalonado:</strong> Permitía multiplicación directa</li>
            <li><strong>Cuatro operaciones:</strong> Suma, resta, multiplicación y división</li>
            <li><strong>Sistema binario:</strong> Leibniz también desarrolló el sistema binario</li>
            <li><strong>Influencia:</strong> Base para futuras calculadoras mecánicas</li>
          </ul>
        
          <img
            src="/images/teoria/maquina_leibniz.jpg"
            srcset="/images/teoria/maquina_leibniz.jpg 400w, /images/teoria/maquina_leibniz.jpg 800w, /images/teoria/maquina_leibniz.jpg 1600w"
            sizes="(max-width:500px) 100vw, 500px"
            alt="Máquina de Leibniz"
            loading="lazy"
            style="width:100%;max-width:500px;height:auto;display:block;margin:0 auto;"
          />
          <h4>🎥 Demostración de Máquinas Mecánicas</h4>
          <!-- Reproductor de vídeo responsivo: ancho 100% hasta 1280px, mantiene aspecto 16:9 -->
          <video
            controls
            preload="metadata"
            playsinline
            style="width:100%;max-width:1280px;aspect-ratio:16/9;height:auto;object-fit:cover;display:block;margin:1rem auto;"
          >
            <source src="/videos/maquinas-mecanicas.webm" type="video/webm">
            <source src="/videos/maquinas-mecanicas.mp4" type="video/mp4">
            Tu navegador no soporta la etiqueta <code>video</code>.
          </video>
        </div>
      `,
      /** multimedia: {
        video: "/videos/maquinas-mecanicas.mp4"
      },*/
      actividades: [
        {
          tipo: "comparacion",
          pregunta: "Compara las limitaciones y ventajas de la Pascalina vs la máquina de Leibniz",
          ayuda: "Piensa en qué operaciones podía hacer cada una"
        }
      ]
    },
    {
      id: 3,
      titulo: "Charles Babbage y la Máquina Analítica",
      contenido: `
        <h3>🏗️ El Padre de la Computación Moderna</h3>
        
        <div class="babbage-biografia">
          <h4>👨‍🔬 Charles Babbage (1791-1871)</h4>
          <p>Matemático, inventor y ingeniero mecánico inglés, conocido como el "padre de la computadora".</p>
          <img
            src="/images/teoria/charles_babbage.jfif"
            srcset="/images/teoria/charles_babbage.jfif 200w"
            sizes="(max-width:200px) 100vw, 200px"
            alt="Charles Babbage"
            loading="lazy"
            style="width:100%;max-width:200px;height:auto;display:block;margin:0 auto;"
          />
          <h5>Sus Invenciones:</h5>
          
          <h4>🔄 La Máquina Diferencial (1822)</h4>
          <ul>
            <li><strong>Propósito:</strong> Calcular tablas matemáticas automáticamente</li>
            <li><strong>Problema resuelto:</strong> Errores humanos en cálculos complejos</li>
            <li><strong>Limitación:</strong> Solo un tipo de cálculo por diseño</li>
          </ul>
          <img
            src="/images/teoria/maquina-diferencial.jpg"
            srcset="/images/teoria/maquina-diferencial.jpg 400w"
            sizes="(max-width:400px) 100vw, 400px"
            alt="Máquina de Diferencial"
            loading="lazy"
            style="width:100%;max-width:400px;height:auto;display:block;margin:0 auto;"
          />
          <h4>🎛️ La Máquina Analítica (1837)</h4>
          <p>El diseño más revolucionario de Babbage, que contenía los elementos básicos de una computadora moderna:</p>
          
          <ul>
            <li><strong>"Mill" (Molino):</strong> Unidad de procesamiento (equivalente a CPU)</li>
            <li><strong>"Store" (Almacén):</strong> Memoria para datos y resultados</li>
            <li><strong>Tarjetas perforadas:</strong> Sistema de entrada de datos e instrucciones</li>
            <li><strong>Programabilidad:</strong> Podía realizar diferentes tipos de cálculos</li>
            <li><strong>Bucles y condicionales:</strong> Capacidad de tomar decisiones</li>
          </ul>
          <img
            src="/images/teoria/maquina-analitica.jpg"
            srcset="/images/teoria/maquina-analitica.jpg 400w"
            sizes="(max-width:400px) 100vw, 400px"
            alt="Máquina de Diferencial"
            loading="lazy"
            style="width:100%;max-width:400px;height:auto;display:block;margin:0 auto;"
          />
          <div class="impacto-historico">
            <h4>🌟 Importancia Histórica:</h4>
            <ul>
              <li>Primera máquina diseñada para ser programable</li>
              <li>Conceptos que se usan en computadoras actuales</li>
              <li>Visión adelantada a su época (100 años antes de la tecnología necesaria)</li>
              <li>Nunca se completó por limitaciones tecnológicas del siglo XIX</li>
            </ul>
          </div>
        </div>
      `,
      /**multimedia: {
        imagen: "/images/teoria/maquina-analitica.jpg",
        infografia: "/images/teoria/babbage-timeline.png"
      }*/
    },
    {
      id: 4,
      titulo: "Ada Lovelace: La Primera Programadora",
      contenido: `
        <h3>👩‍💻 Ada Lovelace (1815-1852)</h3>
        
        <div class="ada-lovelace">
          <h4>🎭 Biografía</h4>
          <p>Augusta Ada King, Condesa de Lovelace, fue una matemática y escritora inglesa, considerada la primera programadora de la historia.</p>
          <img
            src="/images/teoria/ada_lovelace.jpg"
            srcset="/images/teoria/ada_lovelace.jpg 200w"
            sizes="(max-width:200px) 100vw, 200px"
            alt="Ada Lovelace"
            loading="lazy"
            style="width:100%;max-width:200px;height:auto;display:block;margin:0 auto;"
          />
          <h5>Datos importantes:</h5>
          <ul>
            <li><strong>Padre:</strong> Lord Byron (poeta famoso)</li>
            <li><strong>Educación:</strong> Matemáticas y ciencias (inusual para mujeres de su época)</li>
            <li><strong>Colaboración:</strong> Trabajó con Charles Babbage</li>
            <li><strong>Visión:</strong> Entendió el potencial de las máquinas más allá del cálculo</li>
          </ul>

          <h4>💡 Sus Contribuciones</h4>
          
          <h5>Notas sobre la Máquina Analítica (1843):</h5>
          <ul>
            <li><strong>Traducción ampliada:</strong> Tradujo y expandió un artículo sobre la Máquina Analítica</li>
            <li><strong>Algoritmo de Bernoulli:</strong> Escribió el primer algoritmo diseñado para ser procesado por una máquina</li>
            <li><strong>Visión futurista:</strong> Predijo que las máquinas podrían crear música y arte</li>
            <li><strong>Concepto de programación:</strong> Entendió la diferencia entre datos e instrucciones</li>
          </ul>

          <div class="legado-ada">
            <h4>🏆 Legado de Ada Lovelace</h4>
            <ul>
              <li><strong>Lenguaje Ada:</strong> Lenguaje de programación nombrado en su honor</li>
              <li><strong>Día de Ada Lovelace:</strong> Celebración anual de mujeres en STEM</li>
              <li><strong>Premio Lovelace:</strong> Reconocimiento a contribuciones en computación</li>
              <li><strong>Inspiración:</strong> Modelo para futuras generaciones de programadoras</li>
            </ul>
          </div>
        </div>
      `,
      /**multimedia: {
        imagen: "/images/teoria/ada-lovelace.jpg",
        documento: "/docs/notas-ada-lovelace.pdf"
      },*/
      actividades: [
        {
          tipo: "reflexion",
          pregunta: "¿Por qué es importante reconocer a Ada Lovelace como la primera programadora?",
          ayuda: "Considera el contexto histórico y social de su época"
        }
      ]
    },
    {
      id: 5,
      titulo: "La Era Electromecánica",
      contenido: `
        <h3>⚡ Transición hacia la Electricidad</h3>
        
        <div class="era-electromecanica">
          <h4>🗳️ Herman Hollerith y el Censo de 1890</h4>
          <p>Herman Hollerith revolucionó el procesamiento de datos con sus máquinas tabuladoras eléctricas.</p>
          
          <h5>Innovaciones de Hollerith:</h5>
          <ul>
            <li><strong>Tarjetas perforadas:</strong> Codificación de datos en tarjetas</li>
            <li><strong>Lectores eléctricos:</strong> Detección automática de perforaciones</li>
            <li><strong>Tabulación rápida:</strong> Censo completado en 2.5 años (vs 8 años anteriores)</li>
            <li><strong>Empresa TMC:</strong> Fundó la empresa que se convertiría en IBM</li>
          </ul>

          <h4>🏢 Máquinas de Oficina (1900-1940)</h4>
          <ul>
            <li><strong>Burroughs Corporation:</strong> Máquinas sumadoras</li>
            <li><strong>Comptometer:</strong> Calculadoras de teclado</li>
            <li><strong>Monroe Calculator:</strong> Calculadoras de escritorio</li>
            <li><strong>IBM:</strong> Máquinas de tarjetas perforadas</li>
          </ul>

          <h4>🔬 Avances Científicos</h4>
          <ul>
            <li><strong>Válvulas de vacío:</strong> Permitieron la amplificación de señales</li>
            <li><strong>Circuitos eléctricos:</strong> Reemplazaron mecanismos mecánicos</li>
            <li><strong>Automatización:</strong> Menor intervención humana en cálculos</li>
            <li><strong>Velocidad:</strong> Procesamiento más rápido que sistemas mecánicos</li>
          </ul>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/hollerith-maquina.jpg",
        video: "/videos/era-electromecanica.mp4"
      }
    },
    {
      id: 6,
      titulo: "Los Pioneros de la Computación Moderna",
      contenido: `
        <h3>🧠 Los Genios que Cambiaron el Mundo</h3>
        
        <div class="pioneros-computacion">
          <h4>🔓 Alan Turing (1912-1954)</h4>
          <p>Matemático y criptógrafo británico, considerado el padre de la ciencia de la computación teórica.</p>
          
          <h5>Contribuciones de Turing:</h5>
          <ul>
            <li><strong>Máquina de Turing:</strong> Modelo teórico de computación universal</li>
            <li><strong>Enigma:</strong> Descifró códigos alemanes en la Segunda Guerra Mundial</li>
            <li><strong>Test de Turing:</strong> Prueba de inteligencia artificial</li>
            <li><strong>Computación automática:</strong> Bases teóricas de la programación</li>
          </ul>

          <h4>🏗️ John von Neumann (1903-1957)</h4>
          <p>Matemático húngaro-estadounidense que definió la arquitectura básica de las computadoras modernas.</p>
          
          <h5>Arquitectura von Neumann:</h5>
          <ul>
            <li><strong>Programa almacenado:</strong> Instrucciones y datos en la misma memoria</li>
            <li><strong>CPU:</strong> Unidad central de procesamiento</li>
            <li><strong>Memoria:</strong> Almacenamiento de datos e instrucciones</li>
            <li><strong>Entrada/Salida:</strong> Dispositivos para comunicación externa</li>
            <li><strong>Bus de datos:</strong> Canales de comunicación entre componentes</li>
          </ul>

          <h4>⚡ Otros Pioneros Importantes</h4>
          <ul>
            <li><strong>Claude Shannon:</strong> Teoría de la información y álgebra booleana</li>
            <li><strong>Norbert Wiener:</strong> Cibernética y retroalimentación</li>
            <li><strong>Howard Aiken:</strong> Harvard Mark I</li>
            <li><strong>Konrad Zuse:</strong> Z3, primera computadora programable</li>
          </ul>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/turing-von-neumann.jpg",
        infografia: "/images/teoria/arquitectura-von-neumann.png"
      },
      actividades: [
        {
          tipo: "investigacion",
          pregunta: "Investiga cómo se aplica la arquitectura von Neumann en las computadoras actuales",
          ayuda: "Busca ejemplos de CPU, memoria y dispositivos de E/S en tu computador"
        }
      ]
    },
    {
      id: 7,
      titulo: "Las Primeras Computadoras (1940-1950)",
      contenido: `
        <h3>🖥️ Los Gigantes Electrónicos</h3>
        
        <div class="primeras-computadoras">
          <h4>⚡ ENIAC (1946)</h4>
          <p>Electronic Numerical Integrator and Computer - La primera computadora electrónica de propósito general.</p>
          
          <h5>Características del ENIAC:</h5>
          <ul>
            <li><strong>Tamaño:</strong> 30 toneladas, 167 m² de superficie</li>
            <li><strong>Válvulas:</strong> 17,468 válvulas de vacío</li>
            <li><strong>Velocidad:</strong> 5,000 sumas por segundo</li>
            <li><strong>Programación:</strong> Conexión manual de cables</li>
            <li><strong>Propósito original:</strong> Cálculos balísticos militares</li>
            <li><strong>Consumo:</strong> 150 kW de energía</li>
          </ul>

          <h4>🏢 UNIVAC I (1951)</h4>
          <p>UNIVersal Automatic Computer I - Primera computadora comercial producida en Estados Unidos.</p>
          
          <h5>Innovaciones del UNIVAC I:</h5>
          <ul>
            <li><strong>Comercial:</strong> Primera computadora vendida comercialmente</li>
            <li><strong>Memoria:</strong> 1,000 palabras de memoria principal</li>
            <li><strong>Cintas magnéticas:</strong> Almacenamiento externo</li>
            <li><strong>Fama:</strong> Predijo correctamente las elecciones presidenciales de 1952</li>
            <li><strong>Clientes:</strong> Gobierno, universidades y grandes empresas</li>
          </ul>

          <h4>🔵 IBM 701 (1952)</h4>
          <p>Primera computadora científica de IBM, conocida como "Defense Calculator".</p>
          
          <h5>Características del IBM 701:</h5>
          <ul>
            <li><strong>Mercado objetivo:</strong> Aplicaciones científicas y de ingeniería</li>
            <li><strong>Memoria:</strong> 2,048 palabras de 36 bits</li>
            <li><strong>Velocidad:</strong> 16,000 sumas por segundo</li>
            <li><strong>Programación:</strong> Lenguaje ensamblador primitivo</li>
            <li><strong>Producción:</strong> 19 unidades vendidas</li>
          </ul>

          <div class="impacto-primera-generacion">
            <h4>🌟 Impacto de la Primera Generación</h4>
            <ul>
              <li><strong>Demostración:</strong> Probaron que las computadoras eran viables</li>
              <li><strong>Aplicaciones:</strong> Científicas, militares y comerciales</li>
              <li><strong>Programación:</strong> Desarrollo de primeros lenguajes</li>
              <li><strong>Industria:</strong> Nacimiento de la industria informática</li>
              <li><strong>Investigación:</strong> Impulso a la investigación en computación</li>
            </ul>
          </div>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/eniac-univac.jpg",
        video: "/videos/primeras-computadoras.mp4"
      }
    },
    {
      id: 8,
      titulo: "La Revolución del Microprocesador",
      contenido: `
        <h3>🔬 El Chip que Cambió el Mundo</h3>
        
        <div class="revolucion-microprocesador">
          <h4>💎 Intel 4004 (1971)</h4>
          <p>El primer microprocesador comercial del mundo, desarrollado por Intel.</p>
          
          <h5>Características del Intel 4004:</h5>
          <ul>
            <li><strong>Tamaño:</strong> 4 bits de procesamiento</li>
            <li><strong>Transistores:</strong> 2,300 transistores</li>
            <li><strong>Velocidad:</strong> 740 kHz de frecuencia</li>
            <li><strong>Tecnología:</strong> 10 micrones de proceso</li>
            <li><strong>Propósito original:</strong> Calculadoras de la empresa Busicom</li>
            <li><strong>Revolución:</strong> CPU completa en un solo chip</li>
          </ul>

          <h4>📈 Evolución de los Microprocesadores</h4>
          
          <h5>Intel 8008 (1972):</h5>
          <ul>
            <li>8 bits, 3,500 transistores</li>
            <li>Primera CPU de 8 bits</li>
            <li>Bases para computadoras personales</li>
          </ul>

          <h5>Intel 8080 (1974):</h5>
          <ul>
            <li>8 bits, 6,000 transistores</li>
            <li>Más potente y versátil</li>
            <li>Usado en el Altair 8800</li>
          </ul>

          <h5>Intel 8086 (1978):</h5>
          <ul>
            <li>16 bits, 29,000 transistores</li>
            <li>Arquitectura x86</li>
            <li>Base de las PCs modernas</li>
          </ul>

          <h4>🖥️ Nacimiento de las Computadoras Personales</h4>
          <ul>
            <li><strong>Altair 8800 (1975):</strong> Primera PC comercial</li>
            <li><strong>Apple II (1977):</strong> Primera PC exitosa comercialmente</li>
            <li><strong>IBM PC (1981):</strong> Estándar de la industria</li>
            <li><strong>Commodore 64 (1982):</strong> PC más vendida de la historia</li>
          </ul>

          <div class="impacto-microprocesador">
            <h4>🌍 Impacto del Microprocesador</h4>
            <ul>
              <li><strong>Democratización:</strong> Computadoras accesibles para individuos</li>
              <li><strong>Miniaturización:</strong> Sistemas más pequeños y eficientes</li>
              <li><strong>Costo:</strong> Reducción dramática de precios</li>
              <li><strong>Industria:</strong> Nacimiento de Silicon Valley</li>
              <li><strong>Software:</strong> Desarrollo de sistemas operativos personales</li>
              <li><strong>Sociedad:</strong> Inicio de la era de la información</li>
            </ul>
          </div>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/intel-4004.jpg",
        infografia: "/images/teoria/evolucion-procesadores.png",
        video: "/videos/microprocesador-revolucion.mp4"
      },
      actividades: [
        {
          tipo: "comparacion",
          pregunta: "Compara el Intel 4004 de 1971 con un procesador actual en tu smartphone",
          ayuda: "Considera transistores, velocidad, tamaño y capacidades"
        }
      ]
    }
  ],
  recursos: {
    documentos: [
      {
        titulo: "Historia Completa de la Computación",
        url: "/docs/historia-computacion.pdf",
        tipo: "pdf"
      },
      {
        titulo: "Biografías de Pioneros",
        url: "/docs/pioneros-computacion.pdf",
        tipo: "pdf"
      }
    ],
    enlaces: [
      {
        titulo: "Computer History Museum",
        url: "https://computerhistory.org/",
        tipo: "externo"
      },
      {
        titulo: "Timeline de la Computación - IEEE",
        url: "https://ethw.org/Category:Computing",
        tipo: "externo"
      }
    ],
    videos: [
      {
        titulo: "La Historia de la Computación en 10 minutos",
        url: "/videos/historia-computacion-completa.mp4",
        duracion: "10:00"
      }
    ]
  },
  evaluacion: {
    tipo: "cuestionario",
    preguntas: [
      {
        pregunta: "¿Quién es considerada la primera programadora de la historia?",
        tipo: "opcion_multiple",
        opciones: [
          "Ada Lovelace",
          "Grace Hopper",
          "Hedy Lamarr",
          "Katherine Johnson"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Qué máquina diseñada por Charles Babbage contenía elementos básicos de una computadora moderna?",
        tipo: "opcion_multiple",
        opciones: [
          "La Máquina Diferencial",
          "La Máquina Analítica",
          "La Pascalina",
          "El ENIAC"
        ],
        respuestaCorrecta: 1
      },
      {
        pregunta: "¿Cuál fue el primer microprocesador comercial del mundo?",
        tipo: "opcion_multiple",
        opciones: [
          "Intel 8008",
          "Intel 8080",
          "Intel 4004",
          "Intel 8086"
        ],
        respuestaCorrecta: 2
      },
      {
        pregunta: "¿Qué arquitectura definió John von Neumann que se usa en computadoras modernas?",
        tipo: "opcion_multiple",
        opciones: [
          "Programa almacenado",
          "Procesamiento paralelo",
          "Memoria virtual",
          "Multiprocesamiento"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Cuál era la principal limitación del ENIAC en comparación con computadoras modernas?",
        tipo: "opcion_multiple",
        opciones: [
          "No podía hacer cálculos",
          "La programación requería reconectar cables físicamente",
          "No tenía memoria",
          "Solo podía sumar números"
        ],
        respuestaCorrecta: 1
      }
    ]
  }
};

export default tema01;
