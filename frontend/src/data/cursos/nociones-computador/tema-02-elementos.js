/**
 * Tema 2: Elementos que componen al computador
 * Curso: Nociones generales del computador
 */

export default {
  id: '2',
  titulo: "Elementos que componen al computador",
  duracion: "25-30 minutos",
  objetivos: [
    "Identificar los componentes principales del computador",
    "Comprender la función de cada elemento",
    "Distinguir entre hardware básico",
    "Conocer las conexiones entre componentes"
  ],
  secciones: [
    {
      id: 1,
      titulo: "El Monitor",
      contenido: `
        <h3>🖥️ Monitor: La Ventana Visual</h3>
        <p>El monitor es el dispositivo de salida principal que nos permite ver la información del computador.</p>
        
        <h4>Tipos de Monitores:</h4>
        <ul>
          <li><strong>LCD:</strong> Pantalla de cristal líquido</li>
          <li><strong>LED:</strong> Diodos emisores de luz</li>
          <li><strong>OLED:</strong> Diodos orgánicos (alta calidad)</li>
          <li><strong>Curvo:</strong> Pantalla curvada para inmersión</li>
        </ul>

        <div class="componentes-monitor">
          <h4>🔧 Partes del Monitor:</h4>
          <ul>
            <li><strong>Pantalla:</strong> Superficie donde se muestra la información</li>
            <li><strong>Marco:</strong> Borde que rodea la pantalla</li>
            <li><strong>Base:</strong> Soporte que mantiene el monitor estable</li>
            <li><strong>Botones de control:</strong> Para ajustar brillo, contraste, etc.</li>
            <li><strong>Puertos:</strong> Conexiones para cables (HDMI, VGA, USB-C)</li>
          </ul>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/componentes-monitor.jpg",
        infografia: "/images/teoria/tipos-monitores.png"
      },
      actividades: [
        {
          tipo: "identificacion",
          descripcion: "Observa tu monitor e identifica cada parte mencionada",
          elementos: ["Pantalla", "Botones", "Base", "Cables"]
        }
      ]
    },
    {
      id: 2,
      titulo: "La CPU (Unidad Central)",
      contenido: `
        <h3>🏛️ CPU: El Cerebro del Computador</h3>
        <p>La CPU (Central Processing Unit) o "torre" es donde se procesan todas las operaciones del computador.</p>
        
        <div class="componentes-cpu">
          <h4>🔧 Elementos Internos Principales:</h4>
          <ul>
            <li><strong>Procesador:</strong> Chip que ejecuta las instrucciones</li>
            <li><strong>Memoria RAM:</strong> Almacenamiento temporal de datos activos</li>
            <li><strong>Disco Duro:</strong> Almacenamiento permanente de información</li>
            <li><strong>Tarjeta Madre:</strong> Conecta todos los componentes</li>
            <li><strong>Fuente de Poder:</strong> Suministra energía eléctrica</li>
          </ul>
        </div>

        <div class="puertos-externos">
          <h4>🔌 Puertos Externos Comunes:</h4>
          <ul>
            <li><strong>USB:</strong> Para conectar dispositivos (ratón, teclado, memoria)</li>
            <li><strong>Audio:</strong> Para bocinas y micrófono (verde y rosa)</li>
            <li><strong>Video:</strong> Para conectar el monitor (HDMI, VGA)</li>
            <li><strong>Red:</strong> Para internet por cable (Ethernet)</li>
            <li><strong>Alimentación:</strong> Cable de corriente eléctrica</li>
          </ul>
        </div>

        <div class="analogia-ciudad">
          <h4>🏙️ Analogía: La CPU como una Ciudad</h4>
          <p>Imagina la CPU como una ciudad moderna:</p>
          <ul>
            <li><strong>Procesador = Alcaldía:</strong> Toma todas las decisiones importantes</li>
            <li><strong>RAM = Oficinas:</strong> Espacios de trabajo temporal</li>
            <li><strong>Disco Duro = Biblioteca:</strong> Almacén permanente de información</li>
            <li><strong>Tarjeta Madre = Calles:</strong> Conecta todos los lugares</li>
          </ul>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/cpu-interna.jpg",
        video: "/videos/componentes-cpu.mp4"
      },
      actividades: [
        {
          tipo: "investigacion",
          pregunta: "¿Qué tipo de procesador tiene tu computador?",
          ayuda: "Puedes verificarlo en 'Este equipo' → 'Propiedades' → 'Procesador'"
        }
      ]
    },
    {
      id: 3,
      titulo: "Las Bocinas",
      contenido: `
        <h3>🔊 Bocinas: El Sistema de Audio</h3>
        <p>Las bocinas convierten las señales digitales en sonido audible para el usuario.</p>
        
        <h4>Tipos de Sistemas de Audio:</h4>
        <ul>
          <li><strong>Estéreo (2.0):</strong> Dos bocinas básicas</li>
          <li><strong>2.1:</strong> Dos bocinas + un subwoofer para graves</li>
          <li><strong>5.1:</strong> Sistema envolvente (cinco bocinas + subwoofer)</li>
          <li><strong>Integradas:</strong> Bocinas built-in en monitor o laptop</li>
        </ul>

        <div class="configuracion-audio">
          <h4>🔧 Configuración y Conexión:</h4>
          <ol>
            <li><strong>Conexión física:</strong> Cable verde al puerto de audio</li>
            <li><strong>Encendido:</strong> Verificar que tengan alimentación</li>
            <li><strong>Volumen hardware:</strong> Ajustar perilla física</li>
            <li><strong>Configuración Windows:</strong> Ajustar volumen del sistema</li>
            <li><strong>Prueba de sonido:</strong> Reproducir archivo de audio</li>
          </ol>
        </div>
      `,
      actividades: [
        {
          tipo: "practica",
          descripcion: "Configura y prueba el audio de tu computador",
          pasos: [
            "Verifica la conexión de las bocinas",
            "Ajusta el volumen físico",
            "Reproduce un sonido de prueba"
          ]
        }
      ]
    },
    {
      id: 4,
      titulo: "El Ratón (Mouse)",
      contenido: `
        <h3>🖱️ Ratón: Dispositivo de Navegación</h3>
        <p>El ratón es el principal dispositivo de entrada para navegar e interactuar con la interfaz gráfica.</p>
        
        <div class="tipos-raton">
          <h4>🔧 Tipos de Ratón:</h4>
          <ul>
            <li><strong>Óptico:</strong> Usa luz LED para detectar movimiento</li>
            <li><strong>Láser:</strong> Mayor precisión con tecnología láser</li>
            <li><strong>Inalámbrico:</strong> Conexión por Bluetooth o receptor USB</li>
            <li><strong>Gaming:</strong> Alta precisión y botones adicionales</li>
          </ul>
        </div>

        <div class="partes-raton">
          <h4>🔧 Partes del Ratón:</h4>
          <ul>
            <li><strong>Botón izquierdo:</strong> Seleccionar y hacer clic</li>
            <li><strong>Botón derecho:</strong> Menú contextual</li>
            <li><strong>Rueda central:</strong> Desplazamiento (scroll)</li>
            <li><strong>Sensor óptico:</strong> Detecta el movimiento</li>
            <li><strong>Cable USB:</strong> Conexión al computador</li>
          </ul>
        </div>

        <div class="funciones-basicas">
          <h4>🎯 Funciones Básicas:</h4>
          <ul>
            <li><strong>Clic simple:</strong> Seleccionar elementos</li>
            <li><strong>Doble clic:</strong> Abrir programas o archivos</li>
            <li><strong>Clic derecho:</strong> Mostrar opciones adicionales</li>
            <li><strong>Arrastrar:</strong> Mover elementos en pantalla</li>
            <li><strong>Scroll:</strong> Desplazarse por documentos</li>
          </ul>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/partes-raton.jpg"
      },
      actividades: [
        {
          tipo: "practica",
          descripcion: "Practica los diferentes tipos de clic",
          elementos: [
            "Clic simple en iconos",
            "Doble clic para abrir carpetas",
            "Clic derecho para ver menús",
            "Usar la rueda para desplazarse"
          ]
        }
      ]
    },
    {
      id: 5,
      titulo: "El Teclado",
      contenido: `
        <h3>⌨️ Teclado: Dispositivo de Entrada de Texto</h3>
        <p>El teclado permite introducir texto, números y comandos al computador.</p>
        
        <div class="zonas-teclado">
          <h4>🗺️ Zonas del Teclado:</h4>
          <ul>
            <li><strong>Alfanumérica:</strong> Letras, números y símbolos principales</li>
            <li><strong>Función:</strong> Teclas F1-F12 para funciones especiales</li>
            <li><strong>Numérica:</strong> Números y operaciones matemáticas (lateral)</li>
            <li><strong>Navegación:</strong> Flechas, Inicio, Fin, RePág, AvPág</li>
            <li><strong>Modificadoras:</strong> Shift, Ctrl, Alt, Windows</li>
          </ul>
        </div>

        <div class="teclas-especiales">
          <h4>🔑 Teclas Especiales Importantes:</h4>
          <ul>
            <li><strong>Enter:</strong> Confirmar acciones o nueva línea</li>
            <li><strong>Espacio:</strong> Separar palabras</li>
            <li><strong>Backspace:</strong> Borrar hacia atrás</li>
            <li><strong>Delete:</strong> Borrar hacia adelante</li>
            <li><strong>Tab:</strong> Mover cursor por campos</li>
            <li><strong>Shift:</strong> Mayúsculas y símbolos superiores</li>
            <li><strong>Ctrl:</strong> Combinaciones de comandos</li>
          </ul>
        </div>

        <div class="combinaciones-utiles">
          <h4>⚡ Combinaciones Útiles:</h4>
          <ul>
            <li><strong>Ctrl + C:</strong> Copiar</li>
            <li><strong>Ctrl + V:</strong> Pegar</li>
            <li><strong>Ctrl + X:</strong> Cortar</li>
            <li><strong>Ctrl + Z:</strong> Deshacer</li>
            <li><strong>Alt + Tab:</strong> Cambiar entre ventanas</li>
            <li><strong>Windows + L:</strong> Bloquear pantalla</li>
          </ul>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/zonas-teclado.png",
        infografia: "/images/teoria/atajos-teclado.png"
      },
      actividades: [
        {
          tipo: "practica",
          descripcion: "Familiarízate con las zonas del teclado",
          elementos: [
            "Identifica la zona alfanumérica",
            "Localiza las teclas de función",
            "Practica combinaciones básicas"
          ]
        },
        {
          tipo: "reflexion",
          pregunta: "¿Qué ventajas tiene usar atajos de teclado en lugar de solo el ratón?",
          ayuda: "Piensa en términos de velocidad y eficiencia"
        }
      ]
    }
  ],
  recursos: {
    documentos: [
      {
        titulo: "Guía de Componentes del PC",
        url: "/docs/componentes-pc.pdf",
        tipo: "pdf"
      },
      {
        titulo: "Manual de Atajos de Teclado",
        url: "/docs/atajos-teclado.pdf",
        tipo: "pdf"
      }
    ],
    enlaces: [
      {
        titulo: "Anatomía de un Computador - Explicación Interactiva",
        url: "https://example.com/anatomia-pc",
        tipo: "externo"
      }
    ],
    videos: [
      {
        titulo: "Componentes del Computador Explicados",
        url: "/videos/componentes-explicacion.mp4",
        duracion: "8:30"
      }
    ]
  },
  evaluacion: {
    tipo: "cuestionario",
    preguntas: [
      {
        pregunta: "¿Cuál es la función principal del monitor?",
        tipo: "opcion_multiple",
        opciones: [
          "Procesar información",
          "Mostrar información visual",
          "Almacenar datos",
          "Conectar dispositivos"
        ],
        respuestaCorrecta: 1
      },
      {
        pregunta: "¿Qué puerto se usa típicamente para conectar bocinas?",
        tipo: "opcion_multiple",
        opciones: [
          "Puerto azul",
          "Puerto verde", 
          "Puerto rojo",
          "Puerto negro"
        ],
        respuestaCorrecta: 1
      },
      {
        pregunta: "¿Para qué sirve la rueda del ratón?",
        tipo: "opcion_multiple",
        opciones: [
          "Cambiar la velocidad",
          "Hacer clic derecho",
          "Desplazarse por documentos",
          "Conectar inalámbricamente"
        ],
        respuestaCorrecta: 2
      }
    ]
  }
};
