/**
 * Tema 1: Fundamentos y ventajas
 * Curso: Introducción a las Redes Informáticas
 */

const tema01 = {
  id: '1',
  titulo: "Fundamentos y ventajas",
  tematica: "Conceptos y beneficios. Tipos y clasificación de redes según estructura y funcionalidad.",
  duracion: "20-25 minutos",
  objetivos: [
    "Comprender qué es una red informática y sus ventajas",
    "Identificar los principales tipos de redes",
    "Clasificar redes según su estructura y funcionalidad"
  ],
  secciones: [
    {
      id: 1,
      titulo: "¿Qué es una red informática?",
      contenido: `
        <h3>Definición de red informática</h3>
        <p>Una red informática es un conjunto de dispositivos interconectados que comparten información y recursos.</p>
        <ul>
          <li>Permite compartir archivos, impresoras y acceso a internet.</li>
          <li>Facilita la comunicación entre usuarios y sistemas.</li>
        </ul>
      `,
      multimedia: {
        imagen: "/images/redes/esquema-red-basica.jpg",
        video: "https://www.youtube.com/embed/abc123"
      }
    },
    {
      id: 2,
      titulo: "Ventajas de las redes",
      contenido: `
        <h3>Beneficios principales</h3>
        <ul>
          <li>Compartición de recursos</li>
          <li>Comunicación eficiente</li>
          <li>Centralización de datos</li>
          <li>Escalabilidad y flexibilidad</li>
        </ul>
      `
    },
    {
      id: 3,
      titulo: "Tipos y clasificación de redes",
      contenido: `
        <h3>Clasificación según estructura y funcionalidad</h3>
        <ul>
          <li><strong>Por tamaño:</strong> LAN, MAN, WAN</li>
          <li><strong>Por funcionalidad:</strong> Cliente-servidor, punto a punto</li>
        </ul>
      `
    }
  ],
  recursos: {
    documentos: [
      {
        titulo: "Guía de redes básicas",
        url: "/docs/redes-fundamentos.pdf",
        tipo: "pdf"
      }
    ],
    enlaces: [
      {
        titulo: "Redes informáticas - Wikipedia",
        url: "https://es.wikipedia.org/wiki/Red_inform%C3%A1tica",
        tipo: "externo"
      }
    ]
  },
  actividades: [
    {
      id: 1,
      titulo: "Foro de discusión",
      descripcion: "Participa en el foro discutiendo las ventajas de las redes informáticas.",
      tipo: "foro"
    },
    {
      id: 2,
      titulo: "Cuestionario de repaso",
      descripcion: "Completa el cuestionario para evaluar tus conocimientos sobre los fundamentos de las redes.",
      tipo: "cuestionario",
      preguntas: [
        {
          pregunta: "¿Cuál es una ventaja de las redes informáticas?",
          opciones: [
            "a) Aumento de costos",
            "b) Compartición de recursos",
            "c) Complejidad en la gestión",
            "d) Ninguna de las anteriores"
          ],
          respuestaCorrecta: "b"
        }
      ]
    }
  ],
  evaluacion: {
    tipo: "cuestionario",
    preguntas: [
      {
        pregunta: "¿Qué es una red informática?",
        opciones: [
          "a) Un conjunto de dispositivos desconectados",
          "b) Un conjunto de dispositivos interconectados",
          "c) Un tipo de software",
          "d) Ninguna de las anteriores"
        ],
        respuestaCorrecta: "b"
      },
      {
        pregunta: "¿Cuál de las siguientes es una ventaja de las redes?",
        opciones: [
          "a) Dificultad en la comunicación",
          "b) Centralización de datos",
          "c) Aumento de redundancia",
          "d) Todas las anteriores"
        ],
        respuestaCorrecta: "b"
      }
    ]
  }
};

export default tema01;
