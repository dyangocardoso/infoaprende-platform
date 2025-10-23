export default {
  titulo: 'Ataques criptográficos y de contraseñas',
  tematica: 'Fuerza bruta, diccionarios, rainbow tables, hashing, salting, key stretching y buenas prácticas de gestión de contraseñas',
  duracion: '30-40 minutos',
  objetivos: [
    'Comprender los principales ataques a contraseñas y cómo funcionan (fuerza bruta, diccionarios, rainbow tables)',
    'Conocer los fundamentos de hashing, salting y técnicas de fortalecimiento (bcrypt, PBKDF2, Argon2)',
    'Aplicar buenas prácticas de gestión de contraseñas y mitigaciones (políticas, MFA, gestores de contraseñas)'
  ],
  secciones: [
    {
      id: 1,
      titulo: 'Introducción: por qué las contraseñas siguen siendo un objetivo',
      contenido: `
        <h3>🔑 Importancia de proteger contraseñas</h3>
        <p>Las contraseñas son la forma más común de autenticación. Su debilidad facilita el acceso no autorizado, robo de identidad y escalada de privilegios.</p>

        <h4>Factores que aumentan el riesgo</h4>
        <ul>
          <li>Contraseñas reutilizadas en varios servicios</li>
          <li>Contraseñas débiles (fáciles de adivinar)</li>
          <li>Almacenamiento inseguro (texto plano o hashes sin sal)</li>
        </ul>

        <h4>Objetivo del tema</h4>
        <p>Entender ataques comunes y medidas técnicas y organizativas para reducir el riesgo asociado a contraseñas.</p>
      `,
      multimedia: { imagen: '/images/teoria/contraseñas-riesgo.png' },
      actividades: [
        {
          tipo: 'reflexion',
          descripcion: 'Piensa en tres servicios que uses con la misma contraseña. ¿Qué riesgos conlleva y qué medida adoptarías primero para mitigarlo?'
        }
      ]
    },
    {
      id: 2,
      titulo: 'Ataques a contraseñas: fuerza bruta y diccionarios',
      contenido: `
        <h3>💥 Fuerza bruta y ataques por diccionario</h3>
        <p>Los ataques por <strong>fuerza bruta</strong> prueban combinaciones hasta encontrar la correcta. Los ataques por <strong>diccionario</strong> usan listas de contraseñas comunes o filtradas para acelerar el proceso.</p>

        <h4>Velocidad y factores</h4>
        <ul>
          <li>El tiempo necesario depende de la longitud y complejidad de la contraseña</li>
          <li>El hashing rápido (p. ej. MD5, SHA1 sin sal) favorece ataques masivos</li>
          <li>Disponibilidad de listas de contraseñas filtradas acelera ataques dirigidos</li>
        </ul>

        <h4>Mitigaciones</h4>
        <ul>
          <li>Políticas de bloqueo tras varios intentos fallidos</li>
          <li>Requerir contraseñas largas y complejas (o mejor: passphrases)</li>
          <li>Usar hashing lento y salado en el almacenamiento</li>
        </ul>
      `,
      multimedia: { imagen: '/images/teoria/fuerza-bruta.png' },
      actividades: [
        {
          tipo: 'analisis',
          descripcion: 'Calcula la entropía aproximada de la contraseña "Password123" y sugiere una alternativa más segura (passphrase).' 
        }
      ]
    },
    {
      id: 3,
      titulo: 'Rainbow tables, salting y hashing seguro',
      contenido: `
        <h3>🧮 Rainbow tables y la importancia del sal</h3>
        <p>Las <strong>rainbow tables</strong> son tablas precomputadas que relacionan hashes con contraseñas; permiten invertir hashes rápidos si no se usa sal.</p>

        <h4>Hashing vs cifrado</h4>
        <p>El hashing es unidireccional: transforma datos en un valor fijo. No debe utilizarse sin sal ni con funciones criptográficas rápidas para contraseñas.</p>

        <h4>Sal (salt)</h4>
        <ul>
          <li>Es un valor aleatorio único por contraseña que se concatena antes de hashear</li>
          <li>Evita que dos contraseñas iguales produzcan el mismo hash</li>
          <li>Hace ineficiente el uso de rainbow tables</li>
        </ul>

        <h4>Key stretching y funciones adecuadas</h4>
        <p>Usar funciones deliberadamente lentas y con coste (bcrypt, PBKDF2, Argon2) dificulta ataques de fuerza bruta masivos.</p>
      `,
      multimedia: { imagen: '/images/teoria/sal-hashing.png' },
      actividades: [
        {
          tipo: 'practica',
          descripcion: 'Investiga la diferencia entre SHA-256 y bcrypt para almacenamiento de contraseñas y resume en 4-5 líneas por qué bcrypt es preferible.'
        }
      ]
    },
    {
      id: 4,
      titulo: 'Gestión de contraseñas y autenticación multifactor (MFA)',
      contenido: `
        <h3>🔐 Gestión segura de contraseñas y MFA</h3>
        <p>Además de almacenamiento seguro, la gestión de contraseñas incluye políticas, uso de gestores y mecanismos adicionales de autenticación.</p>

        <h4>Buenas prácticas</h4>
        <ul>
          <li>Usar gestores de contraseñas para generar y almacenar contraseñas únicas</li>
          <li>Evitar requisitos arbitrarios (cambios periódicos obligatorios sin motivo) que generan malas prácticas</li>
          <li>Implementar MFA (SMS no ideal; apps autenticadoras o claves FIDO2 preferibles)</li>
        </ul>

        <h4>Políticas y UX</h4>
        <p>Las políticas deben equilibrar seguridad y usabilidad: permitir passphrases largas y aceptar gestores facilita seguridad real.</p>
      `,
      multimedia: { imagen: '/images/teoria/gestores-mfa.png' },
      actividades: [
        {
          tipo: 'practica',
          descripcion: 'Configura (o guía teóricamente) un gestor de contraseñas y MFA para una cuenta de correo. Describe pasos y comprobaciones de seguridad.'
        }
      ]
    },
    {
      id: 5,
      titulo: 'Criptografía aplicada: consideraciones en sistemas y recuperación',
      contenido: `
        <h3>🔁 Consideraciones operativas</h3>
        <p>La criptografía en sistemas debe contemplar rotación de claves, almacenamiento seguro de secretos y procedimientos de recuperación sin comprometer seguridad.</p>

        <h4>Recuperación de cuentas</h4>
        <ul>
          <li>Evitar procedimientos que divulguen contraseñas (p. ej. envío por email)</li>
          <li>Usar mecanismos de verificación fuerte y registro de autenticadores</li>
        </ul>

        <h4>Recomendaciones prácticas</h4>
        <ul>
          <li>Auditar almacenamiento de secrets y limitar accesos</li>
          <li>Registrar accesos y cambios relevantes</li>
          <li>Formar usuarios en uso de gestores y cifrado de backups</li>
        </ul>
      `,
      multimedia: { imagen: '/images/teoria/rotacion-claves.png' },
      actividades: [
        {
          tipo: 'investigacion',
          descripcion: 'Elabora una breve guía (máx. 1 página) para recuperar una cuenta corporativa sin comprometer la seguridad.'
        }
      ]
    }
  ],
  recursos: {
    documentos: [
      { titulo: 'NIST Digital Identity Guidelines (resumen español)', url: '/docs/nist-digital-identity.pdf', tipo: 'pdf' },
      { titulo: 'Guía de buenas prácticas para contraseñas', url: '/docs/guia-contrasenas.pdf', tipo: 'pdf' }
    ],
    enlaces: [
      { titulo: 'OWASP - Password Storage Cheat Sheet', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html', tipo: 'externo' },
      { titulo: 'Argon2 (documentación)', url: 'https://www.argon2.org', tipo: 'externo' }
    ],
    videos: [
      { titulo: 'Contraseñas seguras y gestores', url: '/videos/contraseñas-gestores.mp4', duracion: '10:00' }
    ]
  },
  evaluacion: {
    tipo: 'cuestionario',
    preguntas: [
      {
        pregunta: '¿Por qué el sal (salt) es importante al almacenar hashes de contraseñas?',
        tipo: 'opcion_multiple',
        opciones: ['Reduce la entropía de la contraseña', 'Evita uso eficiente de rainbow tables y hace únicos los hashes', 'Hace que las contraseñas sean más cortas'],
        respuestaCorrecta: 1
      },
      {
        pregunta: '¿Cuál de las siguientes funciones es más adecuada para almacenar contraseñas de forma segura?',
        tipo: 'opcion_multiple',
        opciones: ['SHA-1 sin sal', 'bcrypt o Argon2', 'MD5 sin sal'],
        respuestaCorrecta: 1
      },
      {
        pregunta: '¿Qué medida reduce más efectivamente el riesgo asociado a contraseñas reutilizadas?',
        tipo: 'opcion_multiple',
        opciones: ['Forzar cambios de contraseña cada semana', 'Usar gestores de contraseñas y MFA', 'Solicitar contraseñas complejas que contengan símbolos'],
        respuestaCorrecta: 1
      }
    ]
  }
};
