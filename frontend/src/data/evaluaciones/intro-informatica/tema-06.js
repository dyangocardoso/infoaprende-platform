// Evaluación Tema 6 - Introducción a la Informática
export default {
  titulo: "Evaluación: Placa base y dispositivos de procesamiento",
  descripcion: "Evalúa tu conocimiento sobre la arquitectura del computador",
  duracion: 20,
  preguntas: [
    {
      id: 1,
      pregunta: "¿Cuál es la función principal de la placa base?",
      opciones: [
        "Procesar datos",
        "Almacenar información",
        "Conectar todos los componentes del computador",
        "Mostrar imágenes"
      ],
      respuestaCorrecta: 2,
      explicacion: "La placa base (motherboard) es el circuito principal que conecta todos los componentes del computador."
    },
    {
      id: 2,
      pregunta: "¿Qué unidad del CPU realiza operaciones aritméticas y lógicas?",
      opciones: [
        "Unidad de Control",
        "ALU (Arithmetic Logic Unit)",
        "Registros",
        "Caché"
      ],
      respuestaCorrecta: 1,
      explicacion: "La ALU (Unidad Aritmético-Lógica) realiza todas las operaciones aritméticas y lógicas del procesador."
    },
    {
      id: 3,
      pregunta: "¿Qué característica define a la memoria RAM?",
      opciones: [
        "Es permanente",
        "Es volátil",
        "Es muy lenta",
        "No se puede cambiar"
      ],
      respuestaCorrecta: 1,
      explicacion: "La memoria RAM es volátil, lo que significa que pierde su contenido cuando se corta la energía."
    },
    {
      id: 4,
      pregunta: "¿Qué componente coordina la comunicación entre los demás componentes?",
      opciones: [
        "La RAM",
        "El disco duro",
        "El chipset",
        "El monitor"
      ],
      respuestaCorrecta: 2,
      explicacion: "El chipset coordina la comunicación entre el CPU, la memoria y otros componentes del sistema."
    },
    {
      id: 5,
      pregunta: "En la arquitectura de von Neumann, ¿qué comparten datos e instrucciones?",
      opciones: [
        "El CPU",
        "El mismo espacio de memoria y bus",
        "El disco duro",
        "La pantalla"
      ],
      respuestaCorrecta: 1,
      explicacion: "En la arquitectura de von Neumann, datos e instrucciones comparten el mismo espacio de memoria y bus de datos."
    }
  ]
};
