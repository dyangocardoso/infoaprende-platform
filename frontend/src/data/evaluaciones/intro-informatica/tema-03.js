// Evaluación Tema 3 - Introducción a la Informática
export default {
  titulo: "Evaluación: Unidades de medida y almacenamiento",
  descripcion: "Evalúa tu conocimiento sobre las unidades digitales y conversiones",
  duracion: 15,
  preguntas: [
    {
      id: 1,
      pregunta: "¿Qué es un bit?",
      opciones: [
        "8 bytes",
        "La unidad mínima de información (0 o 1)",
        "1024 bytes",
        "Un programa pequeño"
      ],
      respuestaCorrecta: 1,
      explicacion: "Un bit (binary digit) es la unidad mínima de información y puede tener valor 0 o 1."
    },
    {
      id: 2,
      pregunta: "¿Cuántos bits forman un byte?",
      opciones: [
        "4 bits",
        "16 bits",
        "8 bits",
        "32 bits"
      ],
      respuestaCorrecta: 2,
      explicacion: "Un byte está formado por 8 bits y puede representar 256 valores diferentes (2^8)."
    },
    {
      id: 3,
      pregunta: "¿Cuántos bytes hay en 1 KB (kilobyte)?",
      opciones: [
        "1,000 bytes",
        "1,024 bytes",
        "100 bytes",
        "10,000 bytes"
      ],
      respuestaCorrecta: 1,
      explicacion: "1 KB = 1,024 bytes. En informática se usan potencias de 2, no de 10."
    },
    {
      id: 4,
      pregunta: "¿Cuál es el orden correcto de unidades de menor a mayor?",
      opciones: [
        "Bit, Byte, MB, KB, GB",
        "Byte, Bit, KB, MB, GB",
        "Bit, Byte, KB, MB, GB",
        "KB, Bit, Byte, MB, GB"
      ],
      respuestaCorrecta: 2,
      explicacion: "El orden correcto es: bit, byte, KB (kilobyte), MB (megabyte), GB (gigabyte), TB (terabyte)."
    },
    {
      id: 5,
      pregunta: "¿Aproximadamente cuánto espacio ocupa una canción MP3 de 3 minutos?",
      opciones: [
        "3-4 MB",
        "300-400 KB",
        "30-40 GB",
        "3-4 bytes"
      ],
      respuestaCorrecta: 0,
      explicacion: "Una canción MP3 de 3 minutos típicamente ocupa entre 3-4 MB, dependiendo de la calidad de compresión."
    }
  ]
};
