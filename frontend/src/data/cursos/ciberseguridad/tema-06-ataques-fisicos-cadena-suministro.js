export default {
  titulo: 'Ataques físicos y de cadena de suministro',
  tematica: 'Cable USB malicioso, dispositivos comprometidos, skimming, manipulación de hardware y riesgos en la cadena de suministro',
  duracion: '30 minutos',
  objetivos: [
    'Reconocer riesgos físicos relacionados con dispositivos y hardware',
    'Comprender amenazas en la cadena de suministro y cómo afectan a la seguridad',
    'Identificar controles y buenas prácticas para mitigar riesgos físicos y de proveedores'
  ],
  secciones: [
    {
      id: 1,
      titulo: 'Dispositivos y cables maliciosos',
      contenido: `
        <h3>🔌 Dispositivos y cables maliciosos</h3>
        <p>Dispositivos aparentemente inocuos (cables, cargadores, pendrives) pueden incorporar componentes que actúan como teclados, interfaces de red o almacenan malware.</p>

        <h4>Ejemplos</h4>
        <ul>
          <li>BadUSB: firmware malicioso en controladores USB que ejecuta acciones al conectarse</li>
          <li>Cargadores o cables con funcionalidades ocultas</li>
        </ul>

        <h4>Indicadores y riesgos</h4>
        <ul>
          <li>Dispositivos encontrados en zonas comunes</li>
          <li>Comportamientos inusuales tras conectar un dispositivo (nuevas unidades, ventanas emergentes)</li>
        </ul>
      `,
      multimedia: { imagen: '/images/teoria/badusb.png' },
      actividades: [
        {
          tipo: 'reflexion',
          descripcion: 'Describe un escenario en el que un cable comprometido podría causar una brecha en una oficina. ¿Qué controles habrías aplicado para evitarlo?'
        }
      ]
    },
    {
      id: 2,
      titulo: 'Clonación, skimming y manipulación de hardware',
      contenido: `
        <h3>💳 Skimming y clonación</h3>
        <p>El <strong>skimming</strong> roba datos de tarjetas en cajeros o terminales mediante dispositivos de lectura ocultos. La clonación replica información para fraude.</p>

        <h4>Vectores físicos</h4>
        <ul>
          <li>Terminales de pago manipuladas</li>
          <li>Dispositivos de lectura instalados en cajeros o puntos de venta</li>
          <li>Robo físico de hardware para análisis y clonación</li>
        </ul>

        <h4>Prevención</h4>
        <ul>
          <li>Inspecciones físicas periódicas de terminales</li>
          <li>Uso de dispositivos con protección anti-manipulación</li>
          <li>Monitorización de transacciones y alertas por patrones inusuales</li>
        </ul>
      `,
      multimedia: { imagen: '/images/teoria/skimming.png' },
      actividades: [
        {
          tipo: 'investigacion',
          descripcion: 'Busca un caso de skimming reportado en medios y resume las medidas que se implementaron para mitigar el riesgo.'
        }
      ]
    },
    {
      id: 3,
      titulo: 'Riesgos en la cadena de suministro de software y hardware',
      contenido: `
        <h3>🏭 Cadena de suministro</h3>
        <p>La cadena de suministro incluye proveedores de hardware, software y servicios. Una vulnerabilidad o compromiso en un proveedor puede afectar a todos sus clientes.</p>

        <h4>Ejemplos de incidentes</h4>
        <ul>
          <li>Compromisos de repositorios de código</li>
          <li>Componentes o librerías con puertas traseras</li>
          <li>Actualizaciones firmadas comprometidas</li>
        </ul>

        <h4>Mitigación</h4>
        <ul>
          <li>Evaluación y clasificación de proveedores según riesgo</li>
          <li>Políticas de seguridad para proveedores y cláusulas contractuales</li>
          <li>Verificación de integridad (firmas, hashes) y procesos de revisión</li>
        </ul>
      `,
      multimedia: { imagen: '/images/teoria/supply-chain.png' },
      actividades: [
        {
          tipo: 'analisis',
          descripcion: 'Identifica tres proveedores críticos en tu organización (o un escenario hipotético) y propone controles básicos para reducir riesgo de la cadena de suministro.'
        }
      ]
    },
    {
      id: 4,
      titulo: 'Controles físicos y gestión de inventario',
      contenido: `
        <h3>📦 Controles físicos y gestión</h3>
        <p>Controles como inventarios, sellos de seguridad y procedimientos de recepción ayudan a detectar manipulaciones y reducir riesgos físicos.</p>

        <h4>Buenas prácticas</h4>
        <ul>
          <li>Mantener inventarios actualizados y reconciliar entradas</li>
          <li>Inspección y pruebas de integridad de dispositivos recibidos</li>
          <li>Segregación de entornos de prueba y producción</li>
        </ul>
      `,
      multimedia: { imagen: '/images/teoria/inventario-seguridad.png' },
      actividades: [
        {
          tipo: 'practica',
          descripcion: 'Diseña un procedimiento breve para recepción y verificación de equipos en una pequeña organización.'
        }
      ]
    },
    {
      id: 5,
      titulo: 'Respuesta a incidentes y consideraciones legales',
      contenido: `
        <h3>🚨 Respuesta y cumplimiento</h3>
        <p>Ante un incidente relacionado con la cadena de suministro o un dispositivo manipulado es clave actuar rápido, preservar evidencias y cumplir notificaciones legales cuando sea necesario.</p>

        <h4>Paso a paso recomendado</h4>
        <ol>
          <li>Aislar sistemas afectados</li>
          <li>Preservar y documentar evidencia física y digital</li>
          <li>Notificar a proveedores y autoridades si aplica</li>
          <li>Revisar contratos y sanciones potenciales</li>
        </ol>
      `,
      multimedia: { imagen: '/images/teoria/respuesta-supply-chain.png' },
      actividades: [
        {
          tipo: 'investigacion',
          descripcion: 'Describe en 5 líneas los pasos legales y técnicos que seguirías tras detectar un dispositivo manipulado en la oficina.'
        }
      ]
    }
  ],
  recursos: {
    documentos: [
      { titulo: 'Guía de seguridad en la cadena de suministro', url: '/docs/guia-supply-chain.pdf', tipo: 'pdf' },
      { titulo: 'Procedimiento de recepción de equipos', url: '/docs/procedimiento-recepcion.pdf', tipo: 'pdf' }
    ],
    enlaces: [
      { titulo: 'NCSC - Supply Chain Security', url: 'https://www.ncsc.gov.uk/collection/supply-chain-security', tipo: 'externo' },
      { titulo: 'OWASP - Software Supply Chain', url: 'https://owasp.org/www-project-software-supply-chain/', tipo: 'externo' }
    ],
    videos: [
      { titulo: 'Riesgos físicos y supply chain', url: '/videos/supply-chain.mp4', duracion: '12:00' }
    ]
  },
  evaluacion: {
    tipo: 'cuestionario',
    preguntas: [
      {
        pregunta: '¿Qué es BadUSB?',
        tipo: 'opcion_multiple',
        opciones: ['Un antivirus para USB','Firmware malicioso en controladores USB','Un tipo de cable seguro'],
        respuestaCorrecta: 1
      },
      {
        pregunta: '¿Cuál es una medida para mitigar riesgos de la cadena de suministro?',
        tipo: 'opcion_multiple',
        opciones: ['No verificar componentes', 'Evaluación y clasificación de proveedores', 'Usar cualquier proveedor sin contrato'],
        respuestaCorrecta: 1
      },
      {
        pregunta: '¿Qué acción inicial es recomendable al detectar un dispositivo manipulado?',
        tipo: 'opcion_multiple',
        opciones: ['Conectar y probar el dispositivo', 'Aislar y documentar la evidencia', 'Desechar sin documentar'],
        respuestaCorrecta: 1
      }
    ]
  }
};
