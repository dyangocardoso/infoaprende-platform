export default {
  titulo: 'Principios éticos en ciberseguridad',
  tematica: 'Confidencialidad, privacidad, cumplimiento legal, divulgación responsable y dilemas éticos',
  duracion: '25-30 minutos',
  objetivos: [
    'Comprender los principios éticos aplicables a la práctica de la ciberseguridad',
    'Conocer obligaciones legales y de privacidad relevantes para profesionales y organizaciones',
    'Aprender buenas prácticas para divulgación responsable y toma de decisiones éticas'
  ],
  secciones: [
    {
      id: 1,
      titulo: 'Ética profesional y responsabilidad',
      contenido: `
        <h3>🧭 Ética profesional en seguridad</h3>
        <p>Los profesionales de seguridad manejan información sensible y deben actuar con responsabilidad, integridad y transparencia. La ética guía decisiones cuando la ley no es suficiente o es ambigua.</p>

        <h4>Principios clave</h4>
        <ul>
          <li>Actuar en beneficio de usuarios y clientes</li>
          <li>Evitar daño innecesario</li>
          <li>Mantener confidencialidad y proteger la privacidad</li>
        </ul>
      `,
      multimedia: { imagen: '/images/teoria/etica-profesional.png' },
      actividades: [
        {
          tipo: 'reflexion',
          descripcion: 'Describe en 5 líneas un dilema ético que podría enfrentar un profesional de seguridad y cómo lo resolverías.'
        }
      ]
    },
    {
      id: 2,
      titulo: 'Privacidad y protección de datos',
      contenido: `
        <h3>🔒 Privacidad y cumplimiento</h3>
        <p>La protección de datos personales es un requisito legal y ético. Conocer normativas locales y buenas prácticas ayuda a diseñar soluciones respetuosas con la privacidad.</p>

        <h4>Principios de protección de datos</h4>
        <ul>
          <li>Minimización de datos</li>
          <li>Limitación de propósito</li>
          <li>Transparencia y responsabilidad</li>
        </ul>

        <h4>Ejemplos de normativas</h4>
        <ul>
          <li>GDPR (Unión Europea)</li>
          <li>Regulaciones locales de protección de datos</li>
        </ul>
      `,
      multimedia: { imagen: '/images/teoria/privacidad.png' },
      actividades: [
        {
          tipo: 'analisis',
          descripcion: 'Revisa una política de privacidad de un servicio y señala 3 mejoras para proteger mejor a los usuarios.'
        }
      ]
    },
    {
      id: 3,
      titulo: 'Divulgación responsable de vulnerabilidades',
      contenido: `
        <h3>📝 Divulgación responsable</h3>
        <p>La divulgación responsable busca equilibrar la seguridad pública y la notificación a afectados: informar primero al proveedor y dar tiempo para parchear antes de publicar detalles.</p>

        <h4>Prácticas recomendadas</h4>
        <ul>
          <li>Contactar al proveedor con evidencia y pasos para reproducir</li>
          <li>Establecer plazos razonables para la corrección antes de publicar</li>
          <li>Coordinar con CSIRTs o autoridades si aplica</li>
        </ul>
      `,
      multimedia: { imagen: '/images/teoria/divulgacion-responsable.png' },
      actividades: [
        {
          tipo: 'practica',
          descripcion: 'Escribe un borrador de notificación responsable para un proveedor describiendo una vulnerabilidad y pasos para reproducirla.'
        }
      ]
    },
    {
      id: 4,
      titulo: 'Dilemas y toma de decisiones éticas',
      contenido: `
        <h3>⚖️ Dilemas éticos</h3>
        <p>Algunos escenarios no tienen soluciones claras: equilibrio entre seguridad y privacidad, decisiones de divulgación o uso de técnicas intrusivas en pruebas.</p>

        <h4>Marco para la decisión</h4>
        <ul>
          <li>Identificar las partes afectadas</li>
          <li>Evaluar beneficios y daños</li>
          <li>Buscar transparencia y registrar decisiones</li>
        </ul>
      `,
      multimedia: { imagen: '/images/teoria/dilemas-eticos.png' },
            actividades: [
              {
                tipo: 'roleplay',
                descripcion: 'Interpreta el rol de auditor y cliente en un escenario y discute las decisiones éticas y sus justificaciones.'
              }
            ]
          }
        ],
  recursos: {
    documentos: [
      { titulo: 'Guía de divulgación responsable', url: '/docs/divulgacion-responsable.pdf', tipo: 'pdf' },
      { titulo: 'Código de conducta profesional en seguridad', url: '/docs/codigo-conducta.pdf', tipo: 'pdf' }
    ],
    enlaces: [
      { titulo: 'ENISA - Ética y ciberseguridad', url: 'https://www.enisa.europa.eu', tipo: 'externo' },
      { titulo: 'OWASP - Recursos de ética y responsabilidad', url: 'https://owasp.org', tipo: 'externo' }
    ],
    videos: [
      { titulo: 'Ética en la ciberseguridad', url: '/videos/etica-ciberseguridad.mp4', duracion: '10:00' }
    ]
  },
  evaluacion: {
    tipo: 'cuestionario',
    preguntas: [
      {
        pregunta: '¿Qué principio ayuda a minimizar la recolección de datos personales?',
        tipo: 'opcion_multiple',
        opciones: ['Minimización','Compartición','Exposición'],
        respuestaCorrecta: 0
      },
      {
        pregunta: '¿Cuál es una práctica recomendada en divulgación responsable?',
        tipo: 'opcion_multiple',
        opciones: ['Publicar inmediatamente sin notificar','Contactar al proveedor y ofrecer evidencia','Ignorar la vulnerabilidad'],
        respuestaCorrecta: 1
      },
      {
        pregunta: '¿Qué debe priorizar un profesional ético de seguridad?',
        tipo: 'opcion_multiple',
        opciones: ['Beneficio personal','Protección de usuarios y evitar daño','Ocultar información al cliente'],
        respuestaCorrecta: 1
      }
    ]
  }
};