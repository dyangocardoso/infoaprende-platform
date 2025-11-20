/**
 * Tema 2: Tipos y clasificación
 * Curso: Introducción a las Redes Informáticas
 */

const tema02 = {
  id: '2',
  titulo: "Tipos y clasificación",
  tematica: "Estructura y alcance de las redes informáticas.",
  duracion: "20-25 minutos",
  objetivos: [
    "Diferenciar los tipos de redes según su alcance",
    "Reconocer las características de LAN, MAN y WAN",
    "Comprender la importancia de la estructura de red"
  ],
  secciones: [
    {
      id: 1,
      titulo: "Redes LAN, MAN y WAN",
      contenido: `
        <h3>Clasificación por alcance</h3>
        <ul>
          <li><strong>LAN (Local Area Network):</strong> Red de área local, abarca espacios reducidos como oficinas o escuelas.</li>
          <li><strong>MAN (Metropolitan Area Network):</strong> Red de área metropolitana, conecta varias LAN en una ciudad.</li>
          <li><strong>WAN (Wide Area Network):</strong> Red de área amplia, cubre grandes distancias geográficas.</li>
        </ul>
      `,
      multimedia: {
        imagen: "/images/redes/alcance-redes.png"
      },
      actividades: [
        {
          tipo: "comparacion",
          pregunta: "Compara las diferencias clave entre LAN, MAN y WAN en cuanto a alcance y uso.",
          ayuda: "Piensa en ejemplos cotidianos para cada tipo."
        }
      ]
    },
    {
      id: 2,
      titulo: "Estructura de las redes",
      contenido: `
        <h3>Componentes y organización</h3>
        <ul>
          <li>Dispositivos de red: routers, switches, hubs</li>
          <li>Medios de transmisión: cables, fibra óptica, inalámbrico</li>
          <li>Topologías: estrella, bus, anillo, malla</li>
        </ul>
      `,
      multimedia: {
        imagen: "/images/redes/topologias.png",
        video: "/videos/redes/topologias-explicacion.mp4"
      },
      actividades: [
        {
          tipo: "investigacion",
          pregunta: "Investiga qué topología de red es más común en tu escuela o casa y justifica por qué.",
          ayuda: "Observa cómo están conectados los dispositivos y consulta fuentes confiables."
        }
      ]
    }
  ],
  recursos: {
    documentos: [
      {
        titulo: "Manual de tipos de redes",
        url: "/docs/redes-tipos.pdf",
        tipo: "pdf"
      }
    ],
    enlaces: [
      {
        titulo: "Tipos de redes - Concepto.de",
        url: "https://concepto.de/tipos-de-redes/",
        tipo: "externo"
      }
    ],
    videos: [
      {
        titulo: "Diferencias entre LAN, MAN y WAN",
        url: "/videos/redes/lan-man-wan.mp4",
        duracion: "5:30"
      }
    ]
  },
  evaluacion: {
    tipo: "cuestionario",
    preguntas: [
      {
        pregunta: "¿Cuál es la principal diferencia entre una red LAN y una WAN?",
        tipo: "opcion_multiple",
        opciones: [
          "El tamaño y el alcance geográfico",
          "El tipo de dispositivos conectados",
          "La velocidad de transmisión",
          "El tipo de cable utilizado"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Qué topología de red conecta todos los dispositivos a un nodo central?",
        tipo: "opcion_multiple",
        opciones: [
          "Estrella",
          "Bus",
          "Anillo",
          "Malla"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Cuál de los siguientes es un medio de transmisión inalámbrico?",
        tipo: "opcion_multiple",
        opciones: [
          "Fibra óptica",
          "Cable coaxial",
          "Wi-Fi",
          "Par trenzado"
        ],
        respuestaCorrecta: 2
      }
    ]
  }
};

export default tema02;
