// Evaluación Tema 2 - Tipos de amenazas
export default {
  titulo: "Evaluación: Tipos de amenazas",
  descripcion: "Comprueba conocimientos sobre amenazas internas, APTs y agentes de amenaza",
  duracion: 20,
  preguntas: [
    {
      id: 1,
      pregunta: "¿Qué es una APT (Amenaza Persistente Avanzada)?",
      opciones: ["Ataque casual y no dirigido","Ataque dirigido, sostenido y sofisticado","Ataque de denegación de servicio","Un antivirus"],
      respuestaCorrecta: 1,
      explicacion: "Una APT es un ataque dirigido y persistente, frecuentemente con recursos avanzados." 
    },
    {
      id: 2,
      pregunta: "¿Cuál de estos es un indicador de amenaza interna?",
      opciones: ["Actualizaciones programadas","Accesos fuera de horario","Respaldo automático","Monitorización activa"],
      respuestaCorrecta: 1,
      explicacion: "Accesos fuera de horario pueden indicar actividad interna maliciosa o compromiso de credenciales." 
    },
    {
      id: 3,
      pregunta: "¿Qué motivación es típica de grupos estatales?",
      opciones: ["Espionaje estratégico","Ganancia por microtransacciones","Vandalismo sin objetivo","Marketing"],
      respuestaCorrecta: 0,
      explicacion: "Los estados buscan espionaje y ventajas estratégicas más que ganancias económicas inmediatas." 
    },
    {
      id: 4,
      pregunta: "¿Qué técnica suele usar una APT en la fase inicial?",
      opciones: ["Phishing dirigido (spear phishing)","Instalar antivirus","Restaurar backups","Actualizar firmware"],
      respuestaCorrecta: 0,
      explicacion: "El spear phishing es una táctica común para el acceso inicial en campañas APT." 
    },
    {
      id: 5,
      pregunta: "¿Cuál de las siguientes es una amenaza interna por negligencia?",
      opciones: ["Empleado que borra backups por accidente","Ataque DDoS desde el exterior","Exploit 0-day","Ransomware externo"],
      respuestaCorrecta: 0,
      explicacion: "La negligencia interna puede incluir borrado accidental de datos o configuraciones inseguras." 
    },
    {
      id: 6,
      pregunta: "¿Qué ayuda a detectar APTs y movimientos laterales en una red?",
      opciones: ["EDR y detección de anomalías","Solo antivirus tradicional","Solo backups offline","No monitorizar"],
      respuestaCorrecta: 0,
      explicacion: "EDR y sistemas de detección de anomalías ayudan a identificar movimientos laterales y actividad persistente." 
    }
  ]
};
