// Evaluación Tema 1 - Introducción a la ciberseguridad
export default {
  titulo: "Evaluación: Introducción a la ciberseguridad",
  descripcion: "Comprueba conocimientos básicos: CIA, activos e impactos de seguridad",
  duracion: 15,
  preguntas: [
    {
      id: 1,
      pregunta: "¿Qué significa la 'I' en el acrónimo CIA de seguridad de la información?",
      opciones: ["Confidencialidad","Integridad","Identificación","Interoperabilidad"],
      respuestaCorrecta: 1,
      explicacion: "La 'I' representa Integridad: asegurar que la información no sea alterada de forma no autorizada."
    },
    {
      id: 2,
      pregunta: "¿Cuál es un ejemplo de activo digital?",
      opciones: ["Un servidor en la nube","Una cerradura física","Una mesa de oficina","Un protocolo de transporte"],
      respuestaCorrecta: 0,
      explicacion: "Un servidor en la nube es un activo digital que contiene servicios y datos."
    },
    {
      id: 3,
      pregunta: "¿Cuál es un impacto reputacional típico tras un incidente de seguridad?",
      opciones: ["Aumento de ventas","Pérdida de confianza de usuarios","Mejora de disponibilidad","Reducción de la latencia"],
      respuestaCorrecta: 1,
      explicacion: "La pérdida de confianza de clientes o usuarios es un impacto reputacional común."
    },
    {
      id: 4,
      pregunta: "Una buena práctica básica para reducir riesgo es:",
      opciones: ["Usar contraseñas robustas","Dejar puertos abiertos","Compartir credenciales","No aplicar parches"],
      respuestaCorrecta: 0,
      explicacion: "Usar contraseñas robustas y gestores reduce el riesgo de accesos no autorizados."
    },
    {
      id: 5,
      pregunta: "¿Qué representa la 'C' en el acrónimo CIA de seguridad de la información?",
      opciones: ["Confidencialidad","Control de acceso","Cifrado"],
      respuestaCorrecta: 0,
      explicacion: "La 'C' representa Confidencialidad: garantizar que solo quienes deben acceder a la información puedan hacerlo."
    }
  ]
};
