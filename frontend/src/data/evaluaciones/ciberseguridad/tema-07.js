// Evaluación Tema 7 - Gestión de riesgos y vulnerabilidades
export default {
  titulo: "Evaluación: Gestión de riesgos",
  descripcion: "Evalúa conceptos de NIST RMF, priorización y métricas",
  duracion: 25,
  preguntas: [
    {
      id: 1,
      pregunta: "¿Qué representa MTTR en gestión de vulnerabilidades?",
      opciones: ["Mean Time To Remediate","Maximum Time To Respond","Minimum Time To Recover","Mean Time To Repair"],
      respuestaCorrecta: 0,
      explicacion: "MTTR se refiere al tiempo medio para remediar (patch) o mitigar una vulnerabilidad." 
    },
    {
      id: 2,
      pregunta: "¿Qué herramienta es típica para escaneo de vulnerabilidades?",
      opciones: ["Nessus","Photoshop","Excel","Postman"],
      respuestaCorrecta: 0,
      explicacion: "Nessus es una herramienta común para escanear vulnerabilidades en sistemas." 
    },
    {
      id: 3,
      pregunta: "¿Qué métrica ayuda a justificar inversión en seguridad?",
      opciones: ["Tiempo promedio de parcheo (MTTR)","Número de emojis usados","Tamaño del logo","Número de impresoras"],
      respuestaCorrecta: 0,
      explicacion: "MTTR y similar son métricas útiles para decisiones de inversión." 
    },
    {
      id: 4,
      pregunta: "¿Qué práctica es recomendable antes de desplegar parches críticos?",
      opciones: ["Probar en staging","Aplicar directamente en producción sin pruebas","Nunca parchear","Eliminar backups"],
      respuestaCorrecta: 0,
      explicacion: "Probar en entornos de staging reduce riesgos operativos antes de producción." 
    }
  ]
};
