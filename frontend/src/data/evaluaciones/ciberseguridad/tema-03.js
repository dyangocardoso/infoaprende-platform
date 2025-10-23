// Evaluación Tema 3 - Ingeniería social
export default {
  titulo: "Evaluación: Ingeniería social",
  descripcion: "Evalúa reconocimiento de phishing, vishing, cebo USB y tácticas de manipulación",
  duracion: 20,
  preguntas: [
    {
      id: 1,
      pregunta: "¿Qué es smishing?",
      opciones: ["Phishing por SMS","Phishing por voz","Phishing por redes sociales","Phishing por email"],
      respuestaCorrecta: 0,
      explicacion: "Smishing es phishing realizado a través de mensajes SMS o mensajería móvil." 
    },
    {
      id: 2,
      pregunta: "¿Cuál es una señal típica de spear phishing?",
      opciones: ["Mensaje genérico sin detalles","Uso de información personal que aparenta legitimar el mensaje","Solicitar información al azar","Errores de envío"],
      respuestaCorrecta: 1,
      explicacion: "El spear phishing suele incluir información personalizada para aumentar la probabilidad de éxito." 
    },
    {
      id: 3,
      pregunta: "¿Qué medida ayuda a mitigar el riesgo de cebo USB?",
      opciones: ["Conectar cualquier USB para analizarlo","Política de bloqueo de puertos","Compartir USB entre usuarios","No documentar dispositivos"],
      respuestaCorrecta: 1,
      explicacion: "Políticas que bloquean puertos y gestionan dispositivos reducen el riesgo de cebo USB." 
    },
    {
      id: 4,
      pregunta: "¿Qué es vishing?",
      opciones: ["Phishing por email","Phishing por voz (llamadas)","Phishing por SMS","Phishing por redes sociales"],
      respuestaCorrecta: 1,
      explicacion: "Vishing es el uso de llamadas telefónicas fraudulentas para engañar a la víctima." 
    },
    {
      id: 5,
      pregunta: "¿Qué táctica describe 'pretexting'?",
      opciones: ["Dejar un USB en el suelo","Inventar una identidad o rol para ganarse la confianza","Enviar malware por email","Interrumpir un servicio"],
      respuestaCorrecta: 1,
      explicacion: "Pretexting consiste en crear un pretexto o identidad falsa para obtener información." 
    }
  ]
};
