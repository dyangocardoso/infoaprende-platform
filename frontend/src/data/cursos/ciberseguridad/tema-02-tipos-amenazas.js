export const tema02 = {
  id: '2',
  titulo: 'Tipos de amenazas',
  tematica: 'Amenazas internas, APT (amenazas persistentes avanzadas), agentes de amenaza',
  duracion: '25-30 minutos',
  objetivos: [
    'Distinguir entre amenazas internas y externas',
    'Comprender qué son las amenazas persistentes avanzadas (APT)',
    'Identificar agentes de amenaza comunes y sus motivaciones'
  ],
  secciones: [
    {
      id: 1,
      titulo: 'Amenazas internas: riesgo desde dentro',
      contenido: `
        <h3>🏠 Amenazas internas</h3>
        <p>Las <strong>amenazas internas</strong> se originan dentro de la organización: empleados, contratistas o personas con acceso legítimo que, por malicia o error, causan daño.</p>

        <h4>Tipos de amenazas internas</h4>
        <ul>
          <li><strong>Maliciosas:</strong> Empleados que filtran información o sabotean sistemas.</li>
          <li><strong>Negligencia:</strong> Errores humanos, configuración errónea o uso indebido de privilegios.</li>
          <li><strong>Compromiso de credenciales:</strong> Acceso legítimo utilizado por atacantes tras obtener credenciales internas.</li>
        </ul>

        <h4>Indicadores de amenazas internas</h4>
        <ul>
          <li>Accesos fuera de horario</li>
          <li>Transferencias grandes de datos</li>
          <li>Uso inusual de cuentas con privilegios</li>
        </ul>

        <h4>Controles y mitigación</h4>
        <ul>
          <li>Principio de mínimo privilegio</li>
          <li>Registro y monitorización de auditoría</li>
          <li>Políticas claras y formación</li>
        </ul>
      `,
      multimedia: {
        imagen: '/images/teoria/amenazas-internas.png'
      },
      actividades: [
        {
          tipo: 'reflexion',
          pregunta: '¿Qué medidas implementarías para minimizar el riesgo de una amenaza interna en una pequeña oficina?',
          ayuda: 'Piensa en gestión de accesos, formación y backups.'
        }
      ]
    },
    {
      id: 2,
      titulo: 'APT: Amenazas persistentes avanzadas',
      contenido: `
        <h3>🎯 APT (Amenazas Persistentes Avanzadas)</h3>
        <p>Una <strong>APT</strong> es un ataque dirigido, sostenido y sofisticado, generalmente patrocinado por actores con recursos (grupos organizados o estados-nación) que buscan acceso prolongado y exfiltración de información valiosa.</p>

        <h4>Características de las APTs</h4>
        <ul>
          <li>Objetivo específico y de alto valor</li>
          <li>Uso de tácticas complejas (phishing dirigido, explotación 0-day)</li>
          <li>Movimiento lateral y persistencia dentro de la red</li>
          <li>Recolección y exfiltración silenciosa de datos</li>
        </ul>

        <h4>Ciclo típico de una APT</h4>
        <ol>
          <li>Reconocimiento y selección de objetivos</li>
          <li>Acceso inicial (phishing, vulnerabilidad)</li>
          <li>Escalada de privilegios</li>
          <li>Movimiento lateral</li>
          <li>Exfiltración y ocultamiento</li>
        </ol>

        <h4>Defensa frente a APTs</h4>
        <ul>
          <li>Segmentación de red</li>
          <li>Detección de anomalías y EDR</li>
          <li>Gestión de parches y reducción de superficie de ataque</li>
        </ul>
      `,
      multimedia: {
        imagen: '/images/teoria/apt-diagrama.png'
      },
      actividades: [
        {
          tipo: 'investigacion',
          pregunta: 'Busca un caso real de APT reportado (p.ej., operación atlantis, grupo APT28). Resume el objetivo y el vector de acceso en 3-4 líneas.',
          ayuda: 'Revisa informes de empresas de ciberseguridad o fuentes oficiales.'
        }
      ]
    },
    {
      id: 3,
      titulo: 'Agentes de amenaza: quién ataca y por qué',
      contenido: `
        <h3>🧩 Agentes de amenaza</h3>
        <p>Los agentes de amenaza son actores que tienen la capacidad y motivación para atacar. Comprender sus motivaciones ayuda a priorizar defensas.</p>

        <h4>Tipos de agentes</h4>
        <ul>
          <li><strong>Delincuentes cibernéticos:</strong> Motivación económica (fraude, ransomware).</li>
          <li><strong>Hacktivistas:</strong> Motivaciones ideológicas y reputacionales.</li>
          <li><strong>Estados-nación:</strong> Espionaje, sabotaje y ventajas estratégicas.</li>
          <li><strong>Insiders:</strong> Empleados descontentos o negligentes.</li>
        </ul>

        <h4>Motivaciones comunes</h4>
        <ul>
          <li>Ganancia económica</li>
          <li>Acceso a información sensible</li>
          <li>Desestabilización o reputación</li>
          <li>Espionaje estratégico</li>
        </ul>

        <h4>Ejemplo práctico: perfilando al atacante</h4>
        <p>Crear perfiles de amenaza (threat modeling) ayuda a entender qué activos son objetivos y qué vectores son probables.</p>
      `,
      multimedia: {
        imagen: '/images/teoria/agentes-amenaza.png'
      },
      actividades: [
        {
          tipo: 'identificacion',
          pregunta: 'Elabora una lista de posibles agentes de amenaza para una organización educativa y explica brevemente su motivación.'
        }
      ]
    }
  ],
  recursos: {
    documentos: [
      { titulo: 'Tipos de Amenazas - Resumen', url: '/docs/tipos-amenazas-ciberseguridad.pdf', tipo: 'pdf' }
    ],
    enlaces: [
      { titulo: 'ENISA - Threat Landscape', url: 'https://www.enisa.europa.eu', tipo: 'externo' }
    ],
    videos: [
      { titulo: 'Tipos de Amenazas en Ciberseguridad', url: '/videos/tipos-amenazas.mp4', duracion: '10:00' }
    ]
  },
  evaluacion: {
    tipo: 'cuestionario',
    preguntas: [
      {
        pregunta: '¿Cuál de las siguientes es típicamente una amenaza interna?',
        tipo: 'opcion_multiple',
        opciones: ['Un empleado con acceso legítimo que filtra datos', 'Un exploit 0-day publicado en Internet', 'Un ataque DDoS desde una botnet'],
        respuestaCorrecta: 0
      },
      {
        pregunta: '¿Qué caracteriza a una APT?',
        tipo: 'opcion_multiple',
        opciones: ['Ataques de baja sofisticación', 'Ataques dirigidos, persistentes y sofisticados', 'Ataques solo de denegación de servicio'],
        respuestaCorrecta: 1
      },
      {
        pregunta: '¿Cuál es una motivación común de los grupos estatales?',
        tipo: 'opcion_multiple',
        opciones: ['Ganancia económica inmediata', 'Espionaje y ventaja estratégica', 'Romper reglas internas de la empresa'],
        respuestaCorrecta: 1
      }
    ]
  }
};

export default tema02;
