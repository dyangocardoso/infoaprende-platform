// Evaluación Tema 5 - Criptografía y contraseñas
export default {
  titulo: "Evaluación: Contraseñas y hashing",
  descripcion: "Evalúa conceptos de hashing, salting y buenas prácticas de contraseñas",
  duracion: 25,
  preguntas: [
    {
      id: 1,
      pregunta: "¿Qué es 'sal' (salt) en el contexto de hashing de contraseñas?",
      opciones: ["Un valor aleatorio añadido para hacer únicos los hashes","Una contraseña maestra","Una técnica de cifrado simétrico","Una función de compresión"],
      respuestaCorrecta: 0,
      explicacion: "El salt es un valor aleatorio que evita que contraseñas iguales produzcan el mismo hash." 
    },
    {
      id: 2,
      pregunta: "¿Qué función es adecuada para almacenar contraseñas de forma segura?",
      opciones: ["SHA-1 sin sal","bcrypt o Argon2","MD5 sin sal","Base64"],
      respuestaCorrecta: 1,
      explicacion: "Funciones como bcrypt o Argon2 están diseñadas para ser lentas y resistentes a ataques de fuerza bruta." 
    },
    {
      id: 3,
      pregunta: "¿Qué reduce más efectivamente el riesgo de contraseñas reutilizadas?",
      opciones: ["Forzar cambios semanales","Usar gestores y MFA","Exigir símbolos especiales","Reducir longitud"],
      respuestaCorrecta: 1,
      explicacion: "Gestores de contraseñas y MFA reducen la probabilidad de compromiso por reutilización." 
    },
    {
      id: 4,
      pregunta: "¿Qué es 'key stretching' y por qué es útil para contraseñas?",
      opciones: ["Acelerar el hashing","Hacer el hashing deliberadamente lento para dificultar ataques de fuerza bruta","Reducir la longitud de la contraseña","Cifrar la contraseña con una clave pública"],
      respuestaCorrecta: 1,
      explicacion: "Key stretching (p. ej. PBKDF2, bcrypt) incrementa el coste computacional para los atacantes, dificultando ataques masivos." 
    },
    {
      id: 5,
      pregunta: "¿Cuál de estas opciones describe mejor una buena contraseña?",
      opciones: ["Una palabra común con un número añadido","Una passphrase larga y única almacenada en un gestor","La misma contraseña en varios servicios","Una contraseña muy corta fácil de recordar"],
      respuestaCorrecta: 1,
      explicacion: "Una passphrase larga y única es más resistente a ataques y, usada con un gestor, mejora la seguridad del usuario." 
    }
  ]
};
