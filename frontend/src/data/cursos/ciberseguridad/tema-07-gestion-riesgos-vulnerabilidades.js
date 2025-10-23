export default {
  titulo: 'Gestión de riesgos y vulnerabilidades',
  tematica: 'Marco NIST RMF, identificación y valoración de riesgos, gestión de parches, análisis de vulnerabilidades, pruebas (pentesting) y métricas de seguridad',
  duracion: '40-50 minutos',
  objetivos: [
    'Comprender el ciclo de gestión de riesgos y el marco NIST RMF',
    'Aprender a identificar, priorizar y mitigar vulnerabilidades en sistemas',
    'Conocer buenas prácticas de gestión de parches, pruebas y métricas de seguridad'
  ],
  secciones: [
    {
      id: 1,
      titulo: 'Marco NIST RMF y ciclo de gestión de riesgos',
      contenido: `
        <h3>📋 Marco NIST RMF y fundamentos</h3>
        <p>El <strong>NIST Risk Management Framework (RMF)</strong> proporciona un proceso estructurado para gestionar riesgos de seguridad en sistemas: categorización, selección de controles, implementación, evaluación, autorización y monitoreo continuo.</p>

        <h4>Fases básicas</h4>
        <ol>
          <li>Categorización de los sistemas y activos</li>
          <li>Selección e implementación de controles de seguridad</li>
          <li>Evaluación de la efectividad de los controles</li>
          <li>Autorización para operar</li>
          <li>Monitoreo continuo y respuesta</li>
        </ol>

        <h4>Aplicación práctica</h4>
        <p>Asignar criticidad a activos y definir controles proporcionales al riesgo facilita priorizar esfuerzos y justificar inversiones en seguridad.</p>
      `,
      multimedia: { imagen: '/images/teoria/nist-rmf.png' },
      actividades: [
        {
          tipo: 'analisis',
          descripcion: 'Selecciona un activo (p.ej., servidor de correo) y realiza una categorización simple: confidencialidad, integridad y disponibilidad. Propón controles básicos.'
        }
      ]
    },
    {
      id: 2,
      titulo: 'Identificación y valoración de riesgos',
      contenido: `
        <h3>🔍 Identificar y valorar riesgos</h3>
        <p>La identificación de riesgos incluye amenazas, vulnerabilidades y el impacto potencial. La valoración combina probabilidad y consecuencia para priorizar acciones.</p>

        <h4>Métodos de valoración</h4>
        <ul>
          <li>Cuantitativa: estimaciones monetarias del impacto</li>
          <li>Cualitativa: niveles (alto/medio/bajo) según la criticidad</li>
          <li>Heatmaps y matrices de riesgo para visualización</li>
        </ul>

        <h4>Salida práctica</h4>
        <p>Un registro de riesgos (risk register) con responsables, plazos y mitigaciones es esencial para seguimiento.</p>
      `,
      multimedia: { imagen: '/images/teoria/valoracion-riesgos.png' },
      actividades: [
        {
          tipo: 'practica',
          descripcion: 'Crea una entrada ficticia para un risco: descripción, probabilidad, impacto, dueño y mitigación propuesta.'
        }
      ]
    },
    {
      id: 3,
      titulo: 'Gestión de vulnerabilidades y ciclo de parches',
      contenido: `
        <h3>🛠️ Gestión de vulnerabilidades y parches</h3>
        <p>La gestión de vulnerabilidades es un proceso continuo: escanear, priorizar, parchear y verificar. Un programa eficaz requiere inventario, clasificación y ventanas de despliegue controladas.</p>

        <h4>Priorizar parches</h4>
        <ul>
          <li>CVSS y puntuaciones de severidad</li>
          <li>Exposición del activo y compensaciones operativas</li>
          <li>Disponibilidad de exploit público y contexto del negocio</li>
        </ul>

        <h4>Buenas prácticas</h4>
        <ul>
          <li>Mantener inventario de activos y dependencias</li>
          <li>Clasificar parches por criticidad y aplicar en pruebas antes de producción</li>
          <li>Automatizar despliegues donde sea seguro hacerlo</li>
        </ul>
      `,
      multimedia: { imagen: '/images/teoria/patch-management.png' },
      actividades: [
        {
          tipo: 'investigacion',
          descripcion: 'Consulta una base de datos de vulnerabilidades (p.ej., NVD) y describe brevemente una vulnerabilidad reciente, su CVE y recomendaciones de mitigación.'
        }
      ]
    },
    {
      id: 4,
      titulo: 'Análisis de vulnerabilidades y pruebas (scans y pentesting)',
      contenido: `
        <h3>🧪 Scans automatizados y pentesting</h3>
        <p>Las herramientas de escaneo detectan vulnerabilidades conocidas; el pentesting (pruebas de penetración) simula ataques controlados para descubrir fallos lógicos o de configuración.</p>

        <h4>Tipos de pruebas</h4>
        <ul>
          <li>Escaneo de vulnerabilidades (Nessus, OpenVAS)</li>
          <li>Pruebas manuales y explotación dirigida (pentest)</li>
          <li>Red teaming para ejercicios integrales</li>
        </ul>

        <h4>Resultados y reporte</h4>
        <p>Un buen informe debe incluir evidencia, impacto, pasos para reproducir y recomendaciones concretas de mitigación.</p>
      `,
      multimedia: { imagen: '/images/teoria/pentesting.png' },
      actividades: [
        {
          tipo: 'analisis',
          descripcion: 'Revisa un reporte de escaneo (ejemplo) y clasifica las 3 vulnerabilidades más críticas indicando qué acciones tomarías primero.'
        }
      ]
    },
    {
      id: 5,
      titulo: 'Integración de la gestión de riesgos en el ciclo de vida del software (SDLC)',
      contenido: `
        <h3>🔁 Seguridad en el SDLC</h3>
        <p>Integrar controles y pruebas en fases tempranas del desarrollo reduce riesgos y costes: análisis de dependencias, revisión de código, y pruebas de seguridad continuas.</p>

        <h4>Prácticas recomendadas</h4>
        <ul>
          <li>Análisis estático y dinámico de código (SAST, DAST)</li>
          <li>Gestión segura de dependencias y firmas de artefactos</li>
          <li>Integración de CI/CD con controles de seguridad automatizados</li>
        </ul>
      `,
      multimedia: { imagen: '/images/teoria/sdlc-seguridad.png' },
      actividades: [
        {
          tipo: 'practica',
          descripcion: 'Propón tres controles de seguridad que integrarías en una pipeline CI/CD para una aplicación web.'
        }
      ]
    },
    {
      id: 6,
      titulo: 'Métricas, reporting y mejora continua',
      contenido: `
        <h3>📈 Métricas y reporting</h3>
        <p>Medir permite evaluar efectividad: tiempo medio para parchear (MTTR), número de vulnerabilidades críticas, porcentaje de activos con EDR, etc.</p>

        <h4>Métricas útiles</h4>
        <ul>
          <li>Tiempo promedio de parcheo (mean time to remediate)</li>
          <li>Porcentaje de cobertura de escaneo</li>
          <li>Incidentes por categoría y tendencia temporal</li>
        </ul>

        <h4>Mejora continua</h4>
        <p>Revisar métricas y lecciones aprendidas tras incidentes permite ajustar controles y priorizar inversiones.</p>
      `,
      multimedia: { imagen: '/images/teoria/metricas-seguridad.png' },
      actividades: [
        {
          tipo: 'analisis',
          descripcion: 'Define dos métricas que usarías para justificar un presupuesto de seguridad y explica por qué son relevantes.'
        }
      ]
    }
  ],
  recursos: {
    documentos: [
      { titulo: 'NIST RMF - Guía resumida', url: '/docs/nist-rmf-resumen.pdf', tipo: 'pdf' },
      { titulo: 'Guía de gestión de vulnerabilidades', url: '/docs/gestion-vulnerabilidades.pdf', tipo: 'pdf' }
    ],
    enlaces: [
      { titulo: 'NVD - National Vulnerability Database', url: 'https://nvd.nist.gov', tipo: 'externo' },
      { titulo: 'MITRE - CVE', url: 'https://cve.mitre.org', tipo: 'externo' }
    ],
    videos: [
      { titulo: 'Gestión de vulnerabilidades: proceso completo', url: '/videos/gestion-vulnerabilidades.mp4', duracion: '14:00' }
    ]
  },
  evaluacion: {
    tipo: 'cuestionario',
    preguntas: [
      {
        pregunta: '¿Qué fase NO forma parte típica del NIST RMF?',
        tipo: 'opcion_multiple',
        opciones: ['Categorización','Implementación de controles','Desconexión permanente'],
        respuestaCorrecta: 2
      },
      {
        pregunta: '¿Qué métrica es útil para medir la rapidez de respuesta a vulnerabilidades?',
        tipo: 'opcion_multiple',
        opciones: ['MTTR (time to remediate)','Número de usuarios','Tamaño del equipo de desarrollo'],
        respuestaCorrecta: 0
      },
      {
        pregunta: '¿Cuál es una buena práctica al desplegar parches en producción?',
        tipo: 'opcion_multiple',
        opciones: ['Aplicar sin pruebas previas','Probar en entornos de staging antes de producción','Nunca parchear'],
        respuestaCorrecta: 1
      }
    ]
  }
};
