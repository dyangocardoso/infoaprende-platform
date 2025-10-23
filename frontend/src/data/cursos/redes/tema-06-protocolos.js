/**
 * Tema 6: Protocolos
 * Curso: Introducción a las Redes Informáticas
 */

const tema06 = {
  id: '6',
  titulo: "Protocolos",
  tematica: "Principales protocolos: TCP/IP, HTTP, FTP, DNS, DHCP.",
  duracion: "20-25 minutos",
  objetivos: [
    "Comprender qué es un protocolo de red",
    "Identificar los protocolos más utilizados",
    "Relacionar protocolos con sus funciones específicas"
  ],
  secciones: [
    {
      id: 1,
      titulo: "¿Qué es un protocolo de red?",
      contenido: `
        <h3>Definición de protocolo</h3>
        <p>Un protocolo es un conjunto de reglas que permiten la comunicación entre dispositivos en una red.</p>
      `,
      multimedia: {
        imagen: "/images/redes/protocolo-definicion.png"
      },
      actividades: [
        {
          tipo: "investigacion",
          pregunta: "Investiga por qué los protocolos son esenciales para el funcionamiento de internet.",
          ayuda: "Piensa en la interoperabilidad entre diferentes dispositivos y sistemas."
        }
      ]
    },
    {
      id: 2,
      titulo: "Protocolos más importantes",
      contenido: `
        <h3>Protocolos clave</h3>
        <ul>
          <li><strong>TCP/IP:</strong> Base de internet y redes modernas</li>
          <li><strong>HTTP:</strong> Transferencia de páginas web</li>
          <li><strong>FTP:</strong> Transferencia de archivos</li>
          <li><strong>DNS:</strong> Traducción de nombres de dominio</li>
          <li><strong>DHCP:</strong> Asignación automática de direcciones IP</li>
        </ul>
      `,
      multimedia: {
        imagen: "/images/redes/protocolos-clave.png",
        video: "/videos/redes/protocolos-explicacion.mp4"
      },
      actividades: [
        {
          tipo: "comparacion",
          pregunta: "Compara las funciones de HTTP y FTP en la red.",
          ayuda: "Analiza qué tipo de información transmite cada uno."
        }
      ]
    }
  ],
  recursos: {
    documentos: [
      {
        titulo: "Manual de protocolos de red",
        url: "/docs/redes-protocolos.pdf",
        tipo: "pdf"
      }
    ],
    enlaces: [
      {
        titulo: "Protocolos de red - Wikipedia",
        url: "https://es.wikipedia.org/wiki/Protocolo_de_red",
        tipo: "externo"
      }
    ],
    videos: [
      {
        titulo: "Protocolos de red explicados",
        url: "/videos/redes/protocolos-explicados.mp4",
        duracion: "8:00"
      }
    ]
  },
  evaluacion: {
    tipo: "cuestionario",
    preguntas: [
      {
        pregunta: "¿Cuál es la función principal del protocolo TCP/IP?",
        tipo: "opcion_multiple",
        opciones: [
          "Permitir la comunicación y transmisión de datos en internet",
          "Transferir archivos entre computadoras",
          "Asignar direcciones IP automáticamente",
          "Traducir nombres de dominio"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Qué protocolo se utiliza para transferir páginas web?",
        tipo: "opcion_multiple",
        opciones: [
          "HTTP",
          "FTP",
          "DNS",
          "DHCP"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Cuál es la función del protocolo DNS?",
        tipo: "opcion_multiple",
        opciones: [
          "Traducir nombres de dominio a direcciones IP",
          "Asignar direcciones IP automáticamente",
          "Transferir archivos",
          "Establecer reglas de comunicación"
        ],
        respuestaCorrecta: 0
      }
    ]
  }
};

export default tema06;
