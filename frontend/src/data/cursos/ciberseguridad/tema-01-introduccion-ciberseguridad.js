export const tema01 = {
  id: '1',
  titulo: 'Introducción a la ciberseguridad',
  tematica: 'Concepto general, activos digitales y físicos, importancia de la seguridad',
  duracion: '20-30 minutos',
  objetivos: [
    'Definir ciberseguridad y sus objetivos básicos (confidencialidad, integridad, disponibilidad)',
    'Identificar activos digitales y físicos críticos en una organización',
    'Comprender el impacto de incidentes de seguridad y razones para proteger activos'
  ],
  secciones: [
    {
      id: 1,
      titulo: '¿Qué es la ciberseguridad? (Conceptos y objetivos)',
      contenido: `
        <h3>🔒 ¿Qué es la Ciberseguridad?</h3>
        <p>La <strong>ciberseguridad</strong> es el conjunto de prácticas, procesos y tecnologías destinadas a proteger sistemas, redes, dispositivos y datos frente a accesos no autorizados, ataques y daños.</p>

        <h4>Objetivos principales (CIA)</h4>
        <ul>
          <li><strong>Confidencialidad:</strong> Garantizar que la información solo sea accesible por quienes deben acceder a ella.</li>
          <li><strong>Integridad:</strong> Asegurar que la información no sea alterada de forma no autorizada.</li>
          <li><strong>Disponibilidad:</strong> Mantener los sistemas y la información accesibles cuando se necesiten.</li>
        </ul>

        <h4>Alcance</h4>
        <p>Incluye controles técnicos (firewalls, antivirus), procesos (gestión de incidentes) y medidas organizativas (políticas, formación).</p>

        <h4>Terminología clave</h4>
        <ul>
          <li><strong>Vulnerabilidad:</strong> Debilidad que puede ser explotada por una amenaza.</li>
          <li><strong>Amenaza:</strong> Actor o evento que puede causar daño (humanos, naturales, técnicos).</li>
          <li><strong>Riesgo:</strong> Probabilidad de que una amenaza explote una vulnerabilidad con un impacto asociado.</li>
        </ul>
      `,
      multimedia: {
        imagen: '/images/teoria/ciberseguridad-cia.png',
        video: '/videos/introduccion-ciberseguridad.mp4'
      },
      actividades: [
        {
          tipo: 'reflexion',
          pregunta: 'Piensa en tres ejemplos de información confidencial en una escuela o empresa local. ¿Cómo se protegerían?',
          ayuda: 'Considera contraseñas, control de acceso físico y cifrado.'
        }
      ]
    },
    {
      id: 2,
      titulo: 'Activos digitales y físicos',
      contenido: `
        <h3>💾 Activos: Digitales y Físicos</h3>
        <p>Los activos son todo aquello que tiene valor para la organización o persona. En ciberseguridad se clasifican comúnmente como <strong>activos digitales</strong> y <strong>activos físicos</strong>.</p>

        <h4>Activos digitales</h4>
        <ul>
          <li>Datos (bases de datos, documentos, credenciales)</li>
          <li>Sistemas y aplicaciones (servidores, ERP, CRM)</li>
          <li>Servidores en la nube y servicios online</li>
        </ul>

        <h4>Activos físicos</h4>
        <ul>
          <li>Equipos (ordenadores, routers, switches)</li>
          <li>Medios de almacenamiento (discos, backups, USB)</li>
          <li>Instalaciones (centros de datos, oficinas)</li>
        </ul>

        <h4>Valoración de activos</h4>
        <p>Determinar la criticidad de cada activo (confidencialidad, integridad, disponibilidad) ayuda a priorizar medidas de protección.</p>
      `,
      multimedia: {
        imagen: '/images/teoria/activos-digitales-fisicos.png'
      },
      actividades: [
        {
          tipo: 'identificacion',
          pregunta: 'Lista 5 activos digitales y 3 activos físicos que consideres críticos en tu entorno laboral o educativo.'
        }
      ]
    },
    {
      id: 3,
      titulo: 'Importancia de la seguridad: impactos y ejemplos',
      contenido: `
        <h3>⚠️ ¿Por qué es importante la ciberseguridad?</h3>
        <p>Los incidentes de seguridad pueden causar impactos económicos, operativos y reputacionales. Protegiendo activos se reducen pérdidas y se asegura la continuidad del negocio.</p>

        <h4>Tipos de impacto</h4>
        <ul>
          <li><strong>Financiero:</strong> Pérdidas por fraude o interrupción de servicios.</li>
          <li><strong>Operativo:</strong> Interrupción de procesos críticos.</li>
          <li><strong>Reputacional:</strong> Pérdida de confianza de clientes o usuarios.</li>
          <li><strong>Legal/Regulatorio:</strong> Multas por incumplimiento de protección de datos.</li>
        </ul>

        <h4>Ejemplos reales</h4>
        <ol>
          <li>Ransomware que cifra servidores y exige rescate.</li>
          <li>Filtración de datos personales por mala configuración de servicios en la nube.</li>
          <li>Acceso no autorizado a sistemas por contraseñas débiles.</li>
        </ol>

        <h4>Buenas prácticas básicas</h4>
        <ul>
          <li>Usar contraseñas robustas y gestión de contraseñas</li>
          <li>Mantener sistemas y software actualizados</li>
          <li>Realizar copias de seguridad periódicas y verificar su recuperación</li>
          <li>Formación y concienciación del personal</li>
        </ul>
      `,
      multimedia: {
        imagen: '/images/teoria/impactos-ciberseguridad.png'
      },
      actividades: [
        {
          tipo: 'practica',
          descripcion: 'Revisa la configuración de privacidad de una cuenta online y anota tres ajustes que mejorarías.'
        }
      ]
    }
  ],
  recursos: {
    documentos: [
      { titulo: 'Guía básica de ciberseguridad para usuarios', url: '/docs/guia-ciberseguridad-basica.pdf', tipo: 'pdf' }
    ],
    enlaces: [
      { titulo: 'INCIBE - Guías y recursos', url: 'https://www.incibe.es', tipo: 'externo' },
      { titulo: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/', tipo: 'externo' }
    ],
    videos: [
      { titulo: 'Introducción a la Ciberseguridad', url: '/videos/intro-ciberseguridad.mp4', duracion: '08:00' }
    ]
  },
  evaluacion: {
    tipo: 'cuestionario',
    preguntas: [
      {
        pregunta: '¿Qué representa la “C” en el acrónimo CIA de seguridad de la información?',
        tipo: 'opcion_multiple',
        opciones: ['Confidencialidad', 'Control de acceso', 'Cifrado'],
        respuestaCorrecta: 0
      },
      {
        pregunta: '¿Cuál es un activo digital?',
        tipo: 'opcion_multiple',
        opciones: ['Router físico', 'Base de datos', 'Edificio de oficinas'],
        respuestaCorrecta: 1
      },
      {
        pregunta: 'Selecciona una buena práctica básica de seguridad',
        tipo: 'opcion_multiple',
        opciones: ['Usar contraseñas simples para memorizar', 'Realizar copias de seguridad periódicas', 'Compartir credenciales por email'],
        respuestaCorrecta: 1
      }
    ]
  }
};

export default tema01;
