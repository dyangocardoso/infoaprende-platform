/**
 * Tema 3: Topologías
 * Curso: Introducción a las Redes Informáticas
 */

const tema03 = {
  id: '3',
  titulo: "Topologías",
  tematica: "Tipos, ventajas y desventajas de las topologías de red.",
  duracion: "20-25 minutos",
  objetivos: [
    "Identificar las principales topologías de red",
    "Analizar ventajas y desventajas de cada topología",
    "Relacionar la topología con el rendimiento de la red"
  ],
  secciones: [
    {
      id: 1,
      titulo: "Principales topologías",
      contenido: `
        <h3>Tipos de topologías</h3>
        <ul>
          <li><strong>Estrella:</strong> Todos los dispositivos conectados a un nodo central.</li>
          <li><strong>Bus:</strong> Un solo cable principal conecta todos los dispositivos.</li>
          <li><strong>Anillo:</strong> Cada dispositivo conectado al siguiente formando un círculo.</li>
          <li><strong>Malla:</strong> Todos los dispositivos interconectados entre sí.</li>
        </ul>
      `,
      multimedia: {
        imagen: "/images/redes/topologias-principales.png"
      },
      actividades: [
        {
          tipo: "investigacion",
          pregunta: "Investiga qué topología es más utilizada en redes domésticas y por qué.",
          ayuda: "Observa la disposición de los dispositivos en tu casa o consulta fuentes confiables."
        }
      ]
    },
    {
      id: 2,
      titulo: "Ventajas y desventajas",
      contenido: `
        <h3>Análisis comparativo</h3>
        <ul>
          <li><strong>Estrella:</strong> Fácil de administrar, pero depende del nodo central.</li>
          <li><strong>Bus:</strong> Económica, pero difícil de diagnosticar fallos.</li>
          <li><strong>Anillo:</strong> Transmisión ordenada, pero falla si se rompe el anillo.</li>
          <li><strong>Malla:</strong> Alta redundancia, pero costosa y compleja.</li>
        </ul>
      `,
      multimedia: {
        imagen: "/images/redes/topologias-ventajas-desventajas.png",
        video: "/videos/redes/topologias-ventajas.mp4"
      },
      actividades: [
        {
          tipo: "comparacion",
          pregunta: "Compara las ventajas y desventajas de la topología estrella y la topología malla.",
          ayuda: "Piensa en la facilidad de administración y el costo."
        }
      ]
    }
  ],
  recursos: {
    documentos: [
      {
        titulo: "Guía de topologías de red",
        url: "/docs/redes-topologias.pdf",
        tipo: "pdf"
      }
    ],
    enlaces: [
      {
        titulo: "Topologías de red - Wikipedia",
        url: "https://es.wikipedia.org/wiki/Topolog%C3%ADa_de_red",
        tipo: "externo"
      }
    ],
    videos: [
      {
        titulo: "Explicación visual de topologías",
        url: "/videos/redes/topologias-visual.mp4",
        duracion: "6:00"
      }
    ]
  },
  evaluacion: {
    tipo: "cuestionario",
    preguntas: [
      {
        pregunta: "¿Cuál es la principal ventaja de la topología estrella?",
        tipo: "opcion_multiple",
        opciones: [
          "Fácil administración",
          "Bajo costo",
          "Alta redundancia",
          "No depende de un nodo central"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Qué ocurre si se rompe el cable principal en una topología bus?",
        tipo: "opcion_multiple",
        opciones: [
          "Toda la red deja de funcionar",
          "Solo falla un dispositivo",
          "No afecta a la red",
          "Aumenta la velocidad"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Cuál es la principal desventaja de la topología malla?",
        tipo: "opcion_multiple",
        opciones: [
          "Costo elevado",
          "Difícil de expandir",
          "Baja redundancia",
          "Depende de un nodo central"
        ],
        respuestaCorrecta: 0
      }
    ]
  }
};

export default tema03;
