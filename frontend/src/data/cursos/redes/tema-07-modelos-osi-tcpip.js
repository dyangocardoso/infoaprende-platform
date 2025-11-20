/**
 * Tema 7: Modelos OSI y TCP/IP
 * Curso: Introducción a las Redes Informáticas
 */

const tema07 = {
  id: '7',
  titulo: "Modelos OSI y TCP/IP",
  tematica: "Capas y comparación entre modelos de red.",
  duracion: "20-25 minutos",
  objetivos: [
    "Describir las capas del modelo OSI",
    "Comparar los modelos OSI y TCP/IP",
    "Relacionar capas con funciones de red"
  ],
  secciones: [
    {
      id: 1,
      titulo: "Modelo OSI",
      contenido: `
        <h3>Capas del modelo OSI</h3>
        <ul>
          <li>Capa física</li>
          <li>Capa de enlace de datos</li>
          <li>Capa de red</li>
          <li>Capa de transporte</li>
          <li>Capa de sesión</li>
          <li>Capa de presentación</li>
          <li>Capa de aplicación</li>
        </ul>
      `,
      multimedia: {
        imagen: "/images/redes/modelo-osi.png"
      },
      actividades: [
        {
          tipo: "investigacion",
          pregunta: "Investiga para qué sirve la capa de transporte en el modelo OSI.",
          ayuda: "Consulta ejemplos de protocolos asociados a esta capa."
        }
      ]
    },
    {
      id: 2,
      titulo: "Modelo TCP/IP y comparación",
      contenido: `
        <h3>Capas del modelo TCP/IP</h3>
        <ul>
          <li>Capa de acceso a red</li>
          <li>Capa de internet</li>
          <li>Capa de transporte</li>
          <li>Capa de aplicación</li>
        </ul>
        <h4>Comparación:</h4>
        <ul>
          <li>OSI: 7 capas, TCP/IP: 4 capas</li>
          <li>Ambos modelos explican el funcionamiento de las redes</li>
        </ul>
      `,
      multimedia: {
        imagen: "/images/redes/modelo-tcpip.png",
        video: "/videos/redes/modelos-comparacion.mp4"
      },
      actividades: [
        {
          tipo: "comparacion",
          pregunta: "Compara la cantidad de capas y la función principal de cada modelo.",
          ayuda: "Haz una tabla o esquema visual."
        }
      ]
    }
  ],
  recursos: {
    documentos: [
      {
        titulo: "Guía de modelos de red",
        url: "/docs/redes-modelos.pdf",
        tipo: "pdf"
      }
    ],
    enlaces: [
      {
        titulo: "Modelo OSI - Wikipedia",
        url: "https://es.wikipedia.org/wiki/Modelo_OSI",
        tipo: "externo"
      }
    ],
    videos: [
      {
        titulo: "Modelos OSI y TCP/IP explicados",
        url: "/videos/redes/modelos-explicados.mp4",
        duracion: "9:00"
      }
    ]
  },
  evaluacion: {
    tipo: "cuestionario",
    preguntas: [
      {
        pregunta: "¿Cuántas capas tiene el modelo OSI?",
        tipo: "opcion_multiple",
        opciones: [
          "7",
          "4",
          "5",
          "3"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Cuál es la función principal de la capa de transporte?",
        tipo: "opcion_multiple",
        opciones: [
          "Garantizar la entrega correcta de los datos",
          "Asignar direcciones IP",
          "Codificar la información",
          "Establecer la conexión física"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Qué modelo utiliza menos capas para describir el funcionamiento de la red?",
        tipo: "opcion_multiple",
        opciones: [
          "TCP/IP",
          "OSI",
          "Ambos tienen igual número",
          "Ninguno"
        ],
        respuestaCorrecta: 0
      }
    ]
  }
};

export default tema07;
