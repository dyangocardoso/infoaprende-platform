/**
 * Tema 5: Dispositivos de red
 * Curso: Introducción a las Redes Informáticas
 */

const tema05 = {
  id: '5',
  titulo: "Dispositivos de red",
  tematica: "Identificación y funciones de los dispositivos de red.",
  duracion: "20-25 minutos",
  objetivos: [
    "Reconocer los principales dispositivos de red",
    "Comprender la función de cada dispositivo",
    "Diferenciar entre dispositivos activos y pasivos"
  ],
  secciones: [
    {
      id: 1,
      titulo: "Principales dispositivos",
      contenido: `
        <h3>Dispositivos de red</h3>
        <ul>
          <li><strong>Router:</strong> Encaminador de paquetes entre redes</li>
          <li><strong>Switch:</strong> Conecta dispositivos dentro de una red local</li>
          <li><strong>Hub:</strong> Repite señales a todos los dispositivos conectados</li>
          <li><strong>Access Point:</strong> Permite conexiones inalámbricas</li>
        </ul>
      `,
      multimedia: {
        imagen: "/images/redes/dispositivos-principales.png"
      },
      actividades: [
        {
          tipo: "investigacion",
          pregunta: "Investiga qué dispositivo es esencial para conectar varias redes y por qué.",
          ayuda: "Piensa en la función del router en una red doméstica."
        }
      ]
    },
    {
      id: 2,
      titulo: "Funciones y clasificación",
      contenido: `
        <h3>Clasificación de dispositivos</h3>
        <ul>
          <li><strong>Activos:</strong> Procesan y dirigen el tráfico (router, switch)</li>
          <li><strong>Pasivos:</strong> Solo conectan o transmiten (cables, paneles de parcheo)</li>
        </ul>
      `,
      multimedia: {
        imagen: "/images/redes/dispositivos-clasificacion.png",
        video: "/videos/redes/dispositivos-clasificacion.mp4"
      },
      actividades: [
        {
          tipo: "comparacion",
          pregunta: "Compara las funciones de un switch y un hub en una red local.",
          ayuda: "Analiza cómo gestionan el tráfico de datos."
        }
      ]
    }
  ],
  recursos: {
    documentos: [
      {
        titulo: "Guía de dispositivos de red",
        url: "/docs/redes-dispositivos.pdf",
        tipo: "pdf"
      }
    ],
    enlaces: [
      {
        titulo: "Dispositivos de red - Concepto.de",
        url: "https://concepto.de/dispositivos-de-red/",
        tipo: "externo"
      }
    ],
    videos: [
      {
        titulo: "Dispositivos de red explicados",
        url: "/videos/redes/dispositivos-explicacion.mp4",
        duracion: "7:10"
      }
    ]
  },
  evaluacion: {
    tipo: "cuestionario",
    preguntas: [
      {
        pregunta: "¿Cuál es la función principal de un router?",
        tipo: "opcion_multiple",
        opciones: [
          "Encaminar paquetes entre redes",
          "Repetir señales a todos los dispositivos",
          "Conectar dispositivos inalámbricos",
          "Almacenar datos temporalmente"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Qué dispositivo solo transmite señales sin procesarlas?",
        tipo: "opcion_multiple",
        opciones: [
          "Hub",
          "Switch",
          "Router",
          "Access Point"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Cuál es la diferencia principal entre un switch y un hub?",
        tipo: "opcion_multiple",
        opciones: [
          "El switch dirige el tráfico de datos de forma inteligente, el hub no",
          "El hub es más rápido que el switch",
          "El switch solo funciona con redes inalámbricas",
          "No hay diferencia"
        ],
        respuestaCorrecta: 0
      }
    ]
  }
};

export default tema05;
