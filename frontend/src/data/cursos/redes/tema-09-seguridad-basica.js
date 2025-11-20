/**
 * Tema 9: Seguridad básica
 * Curso: Introducción a las Redes Informáticas
 */

const tema09 = {
  id: '9',
  titulo: "Seguridad básica",
  tematica: "Amenazas y buenas prácticas en redes informáticas.",
  duracion: "20-25 minutos",
  objetivos: [
    "Identificar amenazas comunes en redes",
    "Aplicar buenas prácticas de seguridad",
    "Comprender la importancia de la protección de datos"
  ],
  secciones: [
    {
      id: 1,
      titulo: "Principales amenazas",
      contenido: `
        <h3>Tipos de amenazas</h3>
        <ul>
          <li>Malware</li>
          <li>Phishing</li>
          <li>Acceso no autorizado</li>
          <li>Intercepción de datos</li>
        </ul>
      `,
      multimedia: {
        imagen: "/images/redes/amenazas-seguridad.png"
      },
      actividades: [
        {
          tipo: "investigacion",
          pregunta: "Investiga un caso real de ataque de phishing y explica cómo se pudo haber evitado.",
          ayuda: "Busca noticias recientes o ejemplos en sitios de ciberseguridad."
        }
      ]
    },
    {
      id: 2,
      titulo: "Buenas prácticas de seguridad",
      contenido: `
        <h3>Recomendaciones básicas</h3>
        <ul>
          <li>Usar contraseñas seguras</li>
          <li>Actualizar software y sistemas</li>
          <li>Configurar firewalls</li>
          <li>No compartir información sensible</li>
        </ul>
      `,
      multimedia: {
        imagen: "/images/redes/buenas-practicas.png",
        video: "/videos/redes/seguridad-practicas.mp4"
      },
      actividades: [
        {
          tipo: "practica",
          pregunta: "Crea una lista de verificación de seguridad para tu red doméstica.",
          ayuda: "Incluye contraseñas, actualizaciones y configuración de firewall."
        }
      ]
    }
  ],
  recursos: {
    documentos: [
      {
        titulo: "Guía de seguridad en redes",
        url: "/docs/redes-seguridad.pdf",
        tipo: "pdf"
      }
    ],
    enlaces: [
      {
        titulo: "Seguridad de redes - Wikipedia",
        url: "https://es.wikipedia.org/wiki/Seguridad_de_redes",
        tipo: "externo"
      }
    ],
    videos: [
      {
        titulo: "Amenazas y buenas prácticas en redes",
        url: "/videos/redes/seguridad-buenas-practicas.mp4",
        duracion: "6:40"
      }
    ]
  },
  evaluacion: {
    tipo: "cuestionario",
    preguntas: [
      {
        pregunta: "¿Qué es el malware?",
        tipo: "opcion_multiple",
        opciones: [
          "Software malicioso que daña o accede sin permiso a sistemas",
          "Un tipo de firewall",
          "Un protocolo de red",
          "Un método de cifrado"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Cuál es una buena práctica de seguridad en redes?",
        tipo: "opcion_multiple",
        opciones: [
          "Usar contraseñas seguras",
          "Compartir información sensible",
          "Desactivar el firewall",
          "No actualizar el software"
        ],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Qué es el phishing?",
        tipo: "opcion_multiple",
        opciones: [
          "Un intento de engañar para obtener información confidencial",
          "Un tipo de malware",
          "Un dispositivo de red",
          "Un estándar de cableado"
        ],
        respuestaCorrecta: 0
      }
    ]
  }
};

export default tema09;
