// Evaluación Tema 4 - Malware
export default {
  titulo: "Evaluación: Malware",
  descripcion: "Comprueba conocimientos sobre tipos de malware, vectores y mitigaciones",
  duracion: 25,
  preguntas: [
    {
      id: 1,
      pregunta: "¿Cuál es la diferencia principal entre un virus y un gusano?",
      opciones: ["El virus requiere interacción del usuario para propagarse","El gusano requiere interacción del usuario","No hay diferencia","Ambos son lo mismo"],
      respuestaCorrecta: 0,
      explicacion: "El virus suele requerir ejecución por el usuario; el gusano se propaga automáticamente a través de redes." 
    },
    {
      id: 2,
      pregunta: "¿Qué práctica ayuda a reducir el impacto del ransomware?",
      opciones: ["Desactivar backups","Mantener backups offline y probadas","Compartir credenciales por email","Ignorar actualizaciones"],
      respuestaCorrecta: 1,
      explicacion: "Copias de seguridad offline y verificadas permiten restauración sin pagar rescate." 
    },
    {
      id: 3,
      pregunta: "¿Qué es malware fileless?",
      opciones: ["Malware que solo vive en memoria","Malware en archivos multimedia","Malware que infecta impresoras","Malware visible en disco"],
      respuestaCorrecta: 0,
      explicacion: "Fileless malware opera en memoria y evita dejar artefactos en disco para evadir detección." 
    },
    {
      id: 4,
      pregunta: "¿Cuál es un vector común de infección por malware?",
      opciones: ["Phishing y adjuntos maliciosos","Copias de seguridad offline","Uso de gestores de contraseñas","Actualizaciones firmadas"],
      respuestaCorrecta: 0,
      explicacion: "El phishing con adjuntos o enlaces maliciosos es un vector común de infección." 
    },
    {
      id: 5,
      pregunta: "¿Qué herramienta ayuda a detectar comportamientos maliciosos en endpoints?",
      opciones: ["EDR","Editor de texto","Navegador web","Suite ofimática"],
      respuestaCorrecta: 0,
      explicacion: "EDR (Endpoint Detection and Response) ayuda a detectar comportamientos maliciosos en endpoints." 
    }
  ]
};
