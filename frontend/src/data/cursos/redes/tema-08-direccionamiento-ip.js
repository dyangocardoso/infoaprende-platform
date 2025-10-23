/**
 * Tema 8: Direccionamiento IP
 * Curso: Introducción a las Redes Informáticas
 */

const tema08 = {
  id: '8',
  titulo: "Direccionamiento IP",
  tematica: "Tipos y máscaras de direcciones IP.",
  duracion: "20-25 minutos",
  objetivos: [
    "Comprender qué es una dirección IP",
    "Diferenciar tipos de direcciones IP",
    "Entender el uso de máscaras de subred"
  ],
  secciones: [
    {
      id: 1,
      titulo: "¿Qué es una dirección IP?",
      contenido: `
        <h3>Definición y tipos</h3>
        <ul>
          <li>Identificador único para cada dispositivo en una red</li>
          <li>Tipos: IPv4 e IPv6</li>
        </ul>
      `,
      multimedia: {
        imagen: "/images/redes/direccion-ip.png"
      },
      actividades: [
        {
          tipo: "investigacion",
          pregunta: "Investiga la diferencia entre una dirección IPv4 y una IPv6.",
          ayuda: "Compara la longitud y el formato de cada una."
        }
      ]
    },
    {
      id: 2,
      titulo: "Máscaras de subred",
      contenido: `
        <h3>¿Para qué sirve una máscara de subred?</h3>
        <ul>
          <li>Define el rango de direcciones IP en una red</li>
          <li>Permite dividir redes grandes en subredes más pequeñas</li>
        </ul>
      `,
      multimedia: {
        imagen: "/images/redes/mascara-subred.png",
        video: "/videos/redes/mascara-subred-explicacion.mp4"
      },
      actividades: [
        {
          tipo: "practica",
          pregunta: "Realiza un ejemplo de segmentación de una red usando una máscara de subred.",
          ayuda: "Elige una red IPv4 y muestra cómo se divide en subredes."
        }
      ]
    }
  ],
  recursos: {
    documentos: [
      {
        titulo: "Manual de direccionamiento IP",
        url: "/docs/redes-direccionamiento.pdf",
        tipo: "pdf"
      }
    ],
    enlaces: [
      {
        titulo: "Dirección IP - Wikipedia",
        url: "https://es.wikipedia.org/wiki/Direcci%C3%B3n_IP",
        tipo: "externo"
      }
    ],
    videos: [
      {
        titulo: "Direcciones IP y subredes explicadas",
        url: "/videos/redes/direccionamiento-explicado.mp4",
        duracion: "7:30"
      }
    ]
  },
  evaluacion: {
    tipo: "cuestionario",
    preguntas: [
      {
        pregunta: "¿Cuál es la función principal de una dirección IP?",
        tipo: "opcion_multiple",
        opciones: [
          "Identificar de forma única a cada dispositivo en una red",
          "Aumentar la velocidad de la red",
          "Proteger la red contra ataques",
          "Asignar nombres a los dispositivos"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Qué diferencia principal existe entre IPv4 e IPv6?",
        tipo: "opcion_multiple",
        opciones: [
          "La longitud y el formato de la dirección",
          "El tipo de cable utilizado",
          "La velocidad de transmisión",
          "El uso de máscaras de subred"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Para qué sirve una máscara de subred?",
        tipo: "opcion_multiple",
        opciones: [
          "Dividir una red en subredes más pequeñas",
          "Aumentar la seguridad de la red",
          "Asignar direcciones IP automáticamente",
          "Traducir nombres de dominio"
        ],
        respuestaCorrecta: 0
      }
    ]
  }
};

export default tema08;
