// Evaluación Tema 6 - Ataques físicos y cadena de suministro
export default {
  titulo: "Evaluación: Riesgos físicos y supply chain",
  descripcion: "Revisa conceptos sobre dispositivos maliciosos, skimming y riesgos de proveedores",
  duracion: 20,
  preguntas: [
    {
      id: 1,
      pregunta: "¿Qué es BadUSB?",
      opciones: ["Un software antivirus","Firmware malicioso en controladores USB","Una técnica de cifrado","Un dispositivo legítimo"],
      respuestaCorrecta: 1,
      explicacion: "BadUSB modifica firmware de controladores USB para ejecutar acciones maliciosas al conectarse." 
    },
    {
      id: 2,
      pregunta: "¿Qué medida ayuda a mitigar skimming en puntos de pago?",
      opciones: ["No inspeccionar terminales","Inspección física y protección anti-manipulación","Compartir tarjetas entre usuarios","Usar terminales sin protección"],
      respuestaCorrecta: 1,
      explicacion: "Inspecciones y dispositivos con protección reducen el riesgo de skimming." 
    },
    {
      id: 3,
      pregunta: "¿Qué práctica ayuda a detectar manipulación física de hardware?",
      opciones: ["Inventario y sellos de seguridad","Ignorar entradas","Permitir manipulación sin registro","Eliminar registros"],
      respuestaCorrecta: 0,
      explicacion: "Inventarios y sellos ayudan a detectar manipulaciones en recepción de equipos." 
    },
    {
      id: 4,
      pregunta: "¿Qué acción inicial es recomendable al encontrar un dispositivo manipulado?",
      opciones: ["Conectarlo para ver su contenido","Aislar y documentar la evidencia","Desechar sin documentar","Entregar a cualquier persona"],
      respuestaCorrecta: 1,
      explicacion: "Aislar y documentar evidencia permite análisis forense y notificación a proveedores." 
    }
  ]
};
