// Evaluación Tema 6 - Introducción al Sistema Operativo Windows
export default {
  titulo: "Evaluación: Papelera de reciclaje",
  preguntas: [
    {
      id: 1,
      pregunta: "¿Qué es la Papelera de Reciclaje?",
      opciones: [
        "Un programa antivirus",
        "Un área temporal donde se almacenan archivos eliminados",
        "Una aplicación de limpieza",
        "Un navegador web"
      ],
      respuestaCorrecta: 1,
      explicacion: "La Papelera es un área temporal que almacena archivos eliminados antes del borrado definitivo."
    },
    {
      id: 2,
      pregunta: "¿Cómo se restaura un archivo desde la Papelera?",
      opciones: [
        "No se puede restaurar",
        "Clic derecho en el archivo → Restaurar",
        "Solo copiando manualmente",
        "Reiniciando el sistema"
      ],
      respuestaCorrecta: 1,
      explicacion: "Se restaura haciendo clic derecho en el archivo dentro de la Papelera y seleccionando 'Restaurar'."
    },
    {
      id: 3,
      pregunta: "¿Qué sucede cuando se vacía la Papelera?",
      opciones: [
        "Los archivos se mueven a otra carpeta",
        "Los archivos se eliminan permanentemente",
        "Los archivos se comprimen",
        "Nada, es solo visual"
      ],
      respuestaCorrecta: 1,
      explicacion: "Al vaciar la Papelera, los archivos se eliminan permanentemente y no se pueden recuperar fácilmente."
    },
    {
      id: 4,
      pregunta: "¿Dónde se puede configurar el tamaño máximo de la Papelera?",
      opciones: [
        "No se puede configurar",
        "Clic derecho en la Papelera → Propiedades",
        "Solo desde el Panel de Control",
        "Solo reiniciando Windows"
      ],
      respuestaCorrecta: 1,
      explicacion: "En las Propiedades de la Papelera se puede configurar el tamaño máximo y otras opciones."
    },
    {
      id: 5,
      pregunta: "¿Cuándo NO van los archivos a la Papelera?",
      opciones: [
        "Siempre van a la Papelera",
        "Al usar Shift + Supr o eliminar desde unidades externas",
        "Solo los domingos",
        "Cuando el archivo es muy pequeño"
      ],
      respuestaCorrecta: 1,
      explicacion: "Los archivos se eliminan permanentemente al usar Shift + Supr o al eliminar desde unidades USB/externas."
    }
  ]
};
