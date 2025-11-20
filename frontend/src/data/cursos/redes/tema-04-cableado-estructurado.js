/**
 * Tema 4: Cableado estructurado
 * Curso: Introducción a las Redes Informáticas
 */

const tema04 = {
  id: '4',
  titulo: "Cableado estructurado",
  tematica: "Estándares y conectores en redes de datos.",
  duracion: "20-25 minutos",
  objetivos: [
    "Comprender qué es el cableado estructurado",
    "Identificar los principales estándares y conectores",
    "Reconocer la importancia de una instalación adecuada"
  ],
  secciones: [
    {
      id: 1,
      titulo: "¿Qué es el cableado estructurado?",
      contenido: `
        <h3>Definición y propósito</h3>
        <p>El cableado estructurado es un sistema organizado de cables y conectores que permite la transmisión eficiente de datos.</p>
      `,
      multimedia: {
        imagen: "/images/redes/cableado-estructurado.png"
      },
      actividades: [
        {
          tipo: "investigacion",
          pregunta: "Investiga por qué es importante un buen diseño de cableado estructurado en una empresa.",
          ayuda: "Piensa en la facilidad de mantenimiento y la escalabilidad."
        }
      ]
    },
    {
      id: 2,
      titulo: "Estándares y conectores",
      contenido: `
        <h3>Principales estándares</h3>
        <ul>
          <li><strong>Cat 5e, Cat 6, Cat 6a:</strong> Tipos de cables de par trenzado</li>
          <li><strong>RJ45:</strong> Conector más común en redes Ethernet</li>
          <li><strong>Normas TIA/EIA:</strong> Establecen especificaciones para instalaciones</li>
        </ul>
      `,
      multimedia: {
        imagen: "/images/redes/conectores-rj45.png",
        video: "/videos/redes/cableado-estandares.mp4"
      },
      actividades: [
        {
          tipo: "practica",
          pregunta: "Realiza un esquema de una red sencilla indicando los tipos de cables y conectores utilizados.",
          ayuda: "Incluye Cat 6 y conectores RJ45 en tu dibujo."
        }
      ]
    }
  ],
  recursos: {
    documentos: [
      {
        titulo: "Manual de cableado estructurado",
        url: "/docs/redes-cableado.pdf",
        tipo: "pdf"
      }
    ],
    enlaces: [
      {
        titulo: "Cableado estructurado - Wikipedia",
        url: "https://es.wikipedia.org/wiki/Cableado_estructurado",
        tipo: "externo"
      }
    ],
    videos: [
      {
        titulo: "Cómo hacer un cable de red RJ45",
        url: "/videos/redes/cableado-rj45.mp4",
        duracion: "4:20"
      }
    ]
  },
  evaluacion: {
    tipo: "cuestionario",
    preguntas: [
      {
        pregunta: "¿Cuál es la función principal del cableado estructurado?",
        tipo: "opcion_multiple",
        opciones: [
          "Organizar y facilitar la transmisión de datos",
          "Aumentar la velocidad de internet",
          "Reducir el costo de la red",
          "Evitar el uso de conectores RJ45"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Qué norma regula la instalación de cableado estructurado?",
        tipo: "opcion_multiple",
        opciones: [
          "TIA/EIA",
          "IEEE 802.11",
          "ISO 9001",
          "USB 3.0"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Cuál es el conector más común en redes Ethernet?",
        tipo: "opcion_multiple",
        opciones: [
          "RJ45",
          "USB",
          "HDMI",
          "VGA"
        ],
        respuestaCorrecta: 0
      }
    ]
  }
};

export default tema04;
