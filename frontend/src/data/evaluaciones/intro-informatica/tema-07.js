// Evaluación Tema 7 - Introducción a la Informática
export default {
  titulo: "Evaluación: Memoria y almacenamiento",
  descripcion: "Evalúa tu comprensión sobre tipos de memoria y tecnologías de almacenamiento",
  duracion: 20,
  preguntas: [
    {
      id: 1,
      pregunta: "¿Cómo se organiza la jerarquía de memoria?",
      opciones: [
        "Más cerca del CPU = más lenta y barata",
        "Más cerca del CPU = más rápida pero más cara",
        "No hay jerarquía",
        "Todas las memorias son iguales"
      ],
      respuestaCorrecta: 1,
      explicacion: "En la jerarquía de memoria: más cerca del CPU = más rápida pero más cara y con menor capacidad."
    },
    {
      id: 2,
      pregunta: "¿Cuál es la principal ventaja de los SSD sobre los HDD?",
      opciones: [
        "Son más baratos",
        "Tienen mayor capacidad",
        "Son más rápidos y silenciosos",
        "Duran menos tiempo"
      ],
      respuestaCorrecta: 2,
      explicacion: "Los SSD son más rápidos, silenciosos y resistentes que los HDD porque no tienen partes móviles."
    },
    {
      id: 3,
      pregunta: "¿Qué tecnología utilizan los discos duros (HDD) para almacenar datos?",
      opciones: [
        "Luz láser",
        "Magnetismo",
        "Electricidad estática",
        "Ondas de radio"
      ],
      respuestaCorrecta: 1,
      explicacion: "Los HDD utilizan magnetismo para almacenar datos en platos magnéticos giratorios."
    },
    {
      id: 4,
      pregunta: "¿Cuál es la capacidad típica de un DVD?",
      opciones: [
        "700 MB",
        "4.7 GB",
        "25 GB",
        "128 GB"
      ],
      respuestaCorrecta: 1,
      explicacion: "Un DVD estándar tiene una capacidad de 4.7 GB (hasta 8.5 GB en doble capa)."
    },
    {
      id: 5,
      pregunta: "¿Qué tipo de acceso caracteriza a la memoria RAM?",
      opciones: [
        "Acceso secuencial",
        "Acceso aleatorio",
        "Acceso por bloques",
        "Acceso magnético"
      ],
      respuestaCorrecta: 1,
      explicacion: "La RAM tiene acceso aleatorio, permitiendo llegar a cualquier posición de memoria en el mismo tiempo."
    }
  ]
};
