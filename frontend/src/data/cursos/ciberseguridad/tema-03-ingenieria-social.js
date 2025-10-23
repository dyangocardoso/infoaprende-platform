export default {
  titulo: 'Ataques de ingeniería social',
  tematica: 'Phishing, vishing, smishing, spear phishing, whaling. Cebo USB, ataque de agujero de agua, ingeniería social física.',
  duracion: '25-35 minutos',
  objetivos: [
    'Reconocer técnicas de ingeniería social y sus variantes (phishing, vishing, smishing, spear phishing, whaling)',
    'Identificar vectores físicos como cebo USB y ataques de agujero de agua',
    'Aprender señales de alerta y medidas prácticas para mitigación y respuesta'
  ],
  secciones: [
    {
      id: 1,
      titulo: 'Phishing y variantes (email, voz, SMS y dirigidos)',
      contenido: `
        <h3>🎣 Phishing: engaños digitales para robar información</h3>
        <p>El <strong>phishing</strong> son ataques que usan comunicaciones (generalmente correo electrónico) para engañar a la víctima y conseguir credenciales, datos sensibles o que ejecute acciones inseguras.</p>

        <h4>Variantes comunes</h4>
        <ul>
          <li><strong>Phishing (correo):</strong> Mensajes masivos que fingen ser entidades legítimas.</li>
          <li><strong>Spear phishing:</strong> Correos dirigidos a una persona o grupo concreto, con información personalizada.</li>
          <li><strong>Whaling:</strong> Spear phishing dirigido a altos directivos o objetivos de alto valor.</li>
          <li><strong>Vishing:</strong> Phishing por voz (llamadas telefónicas fraudulentas).</li>
          <li><strong>Smishing:</strong> Phishing por SMS o mensajes instantáneos.</li>
        </ul>

        <h4>Señales de alerta</h4>
        <ul>
          <li>Enlaces con dominios sospechosos o acortados</li>
          <li>Solicitudes urgentes de información o acciones inusuales</li>
          <li>Errores de ortografía, remitentes desconocidos o direcciones que no coinciden con la organización</li>
        </ul>

        <h4>Buenas prácticas</h4>
        <ul>
          <li>No abrir enlaces ni descargar adjuntos de remitentes desconocidos</li>
          <li>Comprobar la URL pasando el ratón por encima del enlace (o editar manualmente la dirección en el navegador)</li>
          <li>Verificar llamadas o mensajes mediante canales oficiales antes de facilitar información</li>
        </ul>
      `,
      multimedia: {
        imagen: '/images/teoria/phishing-tipos.png',
        video: '/videos/phishing-ejemplos.mp4'
      },
      actividades: [
        {
          tipo: 'analisis',
          descripcion: 'Analiza un correo sospechoso (proporcionado por el instructor o un ejemplo). Identifica al menos 5 elementos que indiquen que es fraudulento.'
        }
      ]
    },
    {
      id: 2,
      titulo: 'Técnicas de ingeniería social y manipulación',
      contenido: `
        <h3>🧠 Técnicas de manipulación</h3>
        <p>La ingeniería social explota factores humanos: confianza, urgencia, autoridad o curiosidad. Los atacantes combinan técnicas psicológicas con información técnica para conseguir sus objetivos.</p>

        <h4>Tácticas habituales</h4>
        <ul>
          <li><strong>Pretexting:</strong> Inventar una historia o rol para ganarse la confianza.</li>
          <li><strong>Baiting:</strong> Ofrecer algo atractivo (descarga, acceso) que es en realidad malicioso.</li>
          <li><strong>Quid pro quo:</strong> Ofrecer algo a cambio de información o acceso.</li>
          <li><strong>Explotación de confianza:</strong> Uso de información pública para personalizar ataques.</li>
        </ul>

        <h4>Ejemplo práctico</h4>
        <p>Un atacante llama fingiendo ser soporte técnico y pide al empleado ejecutar comandos o desactivar un antivirus. Este escenario combina vishing y pretexting.</p>
      `,
      multimedia: {
        imagen: '/images/teoria/ingenieria-social.png'
      },
      actividades: [
        {
          tipo: 'roleplay',
          descripcion: 'En parejas, simula una llamada de soporte (un alumno como atacante, otro como empleado). Detecta las señales de manipulación y propone respuestas seguras.'
        }
      ]
    },
    {
      id: 3,
      titulo: 'Vectores físicos: cebo USB y ataque de agujero de agua',
      contenido: `
        <h3>🔌 Vectores físicos</h3>
        <p>Los vectores físicos mezclan lo físico y lo digital. Dos ejemplos relevantes son el <strong>cebo USB</strong> y el <strong>ataque de agujero de agua</strong>.</p>

        <h4>Cebo USB</h4>
        <p>Dispositivos USB con malware dejados en zonas comunes para que alguien los conecte por curiosidad. Al conectarse, el equipo puede infectarse o exponer credenciales.</p>

        <h4>Ataque de agujero de agua (watering hole)</h4>
        <p>El atacante compromete un sitio web frecuentado por la víctima objetivo para distribuir malware cuando la víctima visita la página.</p>

        <h4>Prevención física</h4>
        <ul>
          <li>No conectar dispositivos USB desconocidos</li>
          <li>Políticas de bloqueo de puertos USB y uso de dispositivos administrados</li>
          <li>Monitoreo de tráfico saliente y EDR para detectar comportamientos anómalos</li>
        </ul>
      `,
      multimedia: {
        imagen: '/images/teoria/cebo-usb-watering-hole.png'
      },
      actividades: [
        {
          tipo: 'practica',
          descripcion: 'Diseña una política breve (máx. 1 página) para el manejo seguro de dispositivos extraíbles en una organización pequeña.'
        }
      ]
    },
    {
      id: 4,
      titulo: 'Defensa, concienciación y respuesta a incidentes',
      contenido: `
        <h3>🛡️ Defensa y respuesta</h3>
        <p>Mitigar ingeniería social requiere tanto controles técnicos como medidas organizativas: formación, procesos y herramientas.</p>

        <h4>Controles y medidas</h4>
        <ul>
          <li>Formación periódica y simulacros de phishing</li>
          <li>Procedimientos claros para verificación de identidad en llamadas y solicitudes</li>
          <li>Política de mínimo privilegio y separación de funciones</li>
          <li>Implementación de MFA (autenticación multifactor)</li>
        </ul>

        <h4>Respuesta rápida</h4>
        <p>En caso de incidente: aislar sistemas comprometidos, cambiar credenciales afectadas, analizar logs y notificar al equipo de seguridad o proveedor.</p>
      `,
      multimedia: {
        imagen: '/images/teoria/concienciacion-seguridad.png'
      },
      actividades: [
        {
          tipo: 'investigacion',
          descripcion: 'Revisa un informe de campaña de phishing real (noticia o blog) y resume en 5 líneas cómo se llevó a cabo y qué medidas podrían haber mitigado el impacto.'
        }
      ]
    }
  ],
  recursos: {
    documentos: [
      { titulo: 'Guía práctica de prevención de phishing', url: '/docs/guia-phishing.pdf', tipo: 'pdf' },
      { titulo: 'Política modelo para uso de dispositivos USB', url: '/docs/politica-usb.pdf', tipo: 'pdf' }
    ],
    enlaces: [
      { titulo: 'OWASP - Phishing', url: 'https://owasp.org/www-community/attacks/Phishing', tipo: 'externo' },
      { titulo: 'INCIBE - Concienciación', url: 'https://www.incibe.es/protege-tu-empresa', tipo: 'externo' }
    ],
    videos: [
      { titulo: 'Ingeniería social: ejemplos y mitigación', url: '/videos/ingenieria-social.mp4', duracion: '12:00' }
    ]
  },
  evaluacion: {
    tipo: 'cuestionario',
    preguntas: [
      {
        pregunta: '¿Qué es spear phishing?',
        tipo: 'opcion_multiple',
        opciones: ['Phishing masivo sin personalización', 'Ataque dirigido y personalizado', 'Phishing por SMS'],
        respuestaCorrecta: 1
      },
      {
        pregunta: '¿Cuál es una buena medida para prevenir cebo USB?',
        tipo: 'opcion_multiple',
        opciones: ['Conectar cualquier USB para analizarlo', 'Política de bloqueo de puertos y dispositivos gestionados', 'Compartir USB entre equipos sin control'],
        respuestaCorrecta: 1
      },
      {
        pregunta: '¿Qué técnica implica fingir ser una figura de autoridad para obtener información?',
        tipo: 'opcion_multiple',
        opciones: ['Baiting', 'Pretexting', 'Watering hole'],
        respuestaCorrecta: 1
      }
    ]
  }
};
