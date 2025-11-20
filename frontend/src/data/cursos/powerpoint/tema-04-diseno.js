// PowerPoint - Tema 4: Diseño
// InfoAprende - Estructura modular de contenido educativo

export default {
  id: 4,
  titulo: "Diseño",
  duracion: "25-30 minutos",
  objetivos: [
    "Comprender los principios básicos del diseño de presentaciones",
    "Aplicar temas y diseños predeterminados",
    "Personalizar el diseño de diapositivas",
    "Usar patrones de diapositiva para mantener consistencia",
    "Crear diseños personalizados y atractivos"
  ],
  secciones: [
    {
      id: 1,
      titulo: "Principios de Diseño",
      contenido: `
        <h3>🎨 Principios Fundamentales del Diseño</h3>
        <p>El diseño efectivo de presentaciones se basa en principios que mejoran la comunicación visual y mantienen la atención de la audiencia.</p>
        
        <h4>Principios clave:</h4>
        <ul>
          <li><strong>Simplicidad:</strong> Menos es más - evita sobrecargar las diapositivas</li>
          <li><strong>Contraste:</strong> Usa colores y tamaños que resalten información importante</li>
          <li><strong>Consistencia:</strong> Mantén un estilo uniforme en toda la presentación</li>
          <li><strong>Jerarquía:</strong> Organiza la información por orden de importancia</li>
          <li><strong>Alineación:</strong> Organiza elementos de forma ordenada</li>
          <li><strong>Proximidad:</strong> Agrupa elementos relacionados</li>
        </ul>

        <div class="tip-diseno">
          <h4>💡 Regla 6x6</h4>
          <p>No más de 6 líneas de texto con 6 palabras por línea en cada diapositiva.</p>
        </div>

        <div class="buenas-practicas">
          <h4>✅ Buenas Prácticas de Diseño</h4>
          <ul>
            <li>Usa fuentes grandes y legibles (mínimo 24pt)</li>
            <li>Contrasta texto oscuro sobre fondo claro o viceversa</li>
            <li>Limita la paleta de colores (3-4 colores máximo)</li>
            <li>Incluye espacios en blanco para descansar la vista</li>
            <li>Usa imágenes de alta calidad</li>
          </ul>
        </div>
      `,
      actividades: [
        {
          tipo: "analisis",
          pregunta: "Observa una presentación existente y identifica qué principios de diseño aplica bien y cuáles podría mejorar",
          ayuda: "Evalúa simplicidad, contraste, consistencia, jerarquía, alineación y proximidad"
        }
      ]
    },
    {
      id: 2,
      titulo: "Temas y Diseños Predeterminados",
      contenido: `
        <h3>🎭 Aplicar Temas de PowerPoint</h3>
        <p>PowerPoint ofrece temas prediseñados que proporcionan una apariencia profesional y consistente a tus presentaciones.</p>
        
        <h4>Cómo aplicar un tema:</h4>
        <ol>
          <li>Ve a la pestaña <strong>Diseño</strong></li>
          <li>En el grupo <strong>Temas</strong>, examina las opciones disponibles</li>
          <li>Haz clic en el tema que desees aplicar</li>
          <li>El tema se aplicará a toda la presentación</li>
        </ol>

        <div class="componentes-tema">
          <h4>📋 Componentes de un Tema</h4>
          <ul>
            <li><strong>Colores del tema:</strong> Paleta predefinida de colores</li>
            <li><strong>Fuentes del tema:</strong> Combinación de fuentes para títulos y texto</li>
            <li><strong>Efectos del tema:</strong> Efectos visuales para formas y objetos</li>
            <li><strong>Fondos del tema:</strong> Diseños de fondo coordinados</li>
          </ul>
        </div>

        <h4>🔧 Personalizar Elementos del Tema</h4>
        <p>Puedes modificar componentes individuales del tema:</p>
        <ul>
          <li><strong>Colores:</strong> Diseño > Colores > Personalizar colores</li>
          <li><strong>Fuentes:</strong> Diseño > Fuentes > Personalizar fuentes</li>
          <li><strong>Efectos:</strong> Diseño > Efectos > Seleccionar efecto</li>
        </ul>

        <div class="variantes-tema">
          <h4>🎨 Variantes de Tema</h4>
          <p>Cada tema incluye variantes de color que puedes aplicar:</p>
          <ol>
            <li>Selecciona un tema base</li>
            <li>En <strong>Variantes</strong>, elige una combinación de colores</li>
            <li>La variante se aplicará manteniendo el diseño base</li>
          </ol>
        </div>
      `,
      actividades: [
        {
          tipo: "practica",
          pregunta: "Aplica tres temas diferentes a una presentación y compara cómo cambia la apariencia",
          ayuda: "Observa cómo cambian colores, fuentes y efectos con cada tema"
        }
      ]
    },
    {
      id: 3,
      titulo: "Patrón de Diapositivas",
      contenido: `
        <h3>🏗️ Vista Patrón de Diapositivas</h3>
        <p>El patrón de diapositivas controla el diseño, formato y elementos comunes que aparecen en todas las diapositivas de la presentación.</p>
        
        <h4>Acceder al Patrón de Diapositivas:</h4>
        <ol>
          <li>Ve a la pestaña <strong>Vista</strong></li>
          <li>Haz clic en <strong>Patrón de diapositivas</strong></li>
          <li>Se abrirá la vista de edición del patrón</li>
        </ol>

        <div class="elementos-patron">
          <h4>📐 Elementos del Patrón</h4>
          <ul>
            <li><strong>Patrón principal:</strong> Controla el diseño general</li>
            <li><strong>Diseños de diapositiva:</strong> Patrones para tipos específicos</li>
            <li><strong>Marcadores de posición:</strong> Áreas predefinidas para contenido</li>
            <li><strong>Elementos del fondo:</strong> Logos, formas, imágenes constantes</li>
          </ul>
        </div>

        <h4>✏️ Personalizar el Patrón</h4>
        <p>En la vista patrón puedes:</p>
        <ul>
          <li>Modificar fuentes y colores predeterminados</li>
          <li>Agregar logos o elementos de marca</li>
          <li>Personalizar marcadores de posición</li>
          <li>Crear nuevos diseños de diapositiva</li>
          <li>Configurar pie de página automático</li>
        </ul>

        <div class="insertar-elementos">
          <h4>🎯 Insertar Elementos Comunes</h4>
          <p>Para agregar elementos que aparezcan en todas las diapositivas:</p>
          <ol>
            <li>En vista patrón, selecciona el patrón principal</li>
            <li>Inserta el elemento (logo, texto, forma)</li>
            <li>Posiciónalo donde desees que aparezca</li>
            <li>Cierra la vista patrón (Cerrar vista Patrón)</li>
          </ol>
        </div>

        <div class="tip-patron">
          <h4>💡 Consejo Profesional</h4>
          <p>Usa el patrón para establecer elementos de marca corporativa que deben aparecer consistentemente en toda la presentación.</p>
        </div>
      `,
      actividades: [
        {
          tipo: "practica",
          pregunta: "Accede al patrón de diapositivas y agrega un logo en la esquina inferior derecha que aparezca en todas las diapositivas",
          ayuda: "Ve a Vista > Patrón de diapositivas, inserta una imagen y posiciónala"
        }
      ]
    },
    {
      id: 4,
      titulo: "Diseños de Diapositiva",
      contenido: `
        <h3>📋 Tipos de Diseños</h3>
        <p>PowerPoint ofrece múltiples diseños predefinidos para diferentes tipos de contenido y propósitos de comunicación.</p>
        
        <h4>Diseños Comunes:</h4>
        <ul>
          <li><strong>Diapositiva de título:</strong> Para portadas y secciones principales</li>
          <li><strong>Título y contenido:</strong> Para contenido general con título</li>
          <li><strong>Encabezado de sección:</strong> Para dividir presentaciones en secciones</li>
          <li><strong>Dos contenidos:</strong> Para comparaciones lado a lado</li>
          <li><strong>Comparación:</strong> Para contrastar dos elementos</li>
          <li><strong>Solo título:</strong> Para diapositivas con título únicamente</li>
          <li><strong>En blanco:</strong> Para diseños completamente personalizados</li>
          <li><strong>Contenido con título:</strong> Para listas, texto e imágenes</li>
        </ul>

        <div class="aplicar-disenos">
          <h4>🔄 Cambiar Diseño de Diapositiva</h4>
          <p>Para aplicar un diseño diferente:</p>
          <ol>
            <li>Selecciona la diapositiva que deseas modificar</li>
            <li>Ve a la pestaña <strong>Inicio</strong></li>
            <li>En el grupo <strong>Diapositivas</strong>, haz clic en <strong>Diseño</strong></li>
            <li>Selecciona el diseño deseado de la galería</li>
          </ol>
        </div>

        <h4>🎨 Personalizar Diseños</h4>
        <p>Puedes modificar los diseños existentes:</p>
        <ul>
          <li>Cambiar el tamaño de marcadores de posición</li>
          <li>Mover elementos a diferentes posiciones</li>
          <li>Eliminar marcadores no necesarios</li>
          <li>Agregar nuevos elementos decorativos</li>
        </ul>

        <div class="marcadores-posicion">
          <h4>📍 Marcadores de Posición</h4>
          <p>Los marcadores facilitan la organización del contenido:</p>
          <ul>
            <li><strong>Título:</strong> Para encabezados principales</li>
            <li><strong>Subtítulo:</strong> Para información secundaria</li>
            <li><strong>Contenido:</strong> Para texto, listas, tablas</li>
            <li><strong>Imagen:</strong> Para fotografías e ilustraciones</li>
            <li><strong>Gráfico:</strong> Para datos y estadísticas</li>
          </ul>
        </div>

        <div class="estrategia-disenos">
          <h4>🎯 Estrategia de Uso</h4>
          <p>Selecciona diseños según el propósito de cada diapositiva:</p>
          <ul>
            <li><strong>Introducción:</strong> Diapositiva de título</li>
            <li><strong>Agenda:</strong> Título y contenido con lista</li>
            <li><strong>Comparaciones:</strong> Dos contenidos o comparación</li>
            <li><strong>Datos:</strong> Título y contenido con gráfico</li>
            <li><strong>Conclusiones:</strong> Encabezado de sección</li>
          </ul>
        </div>
      `,
      actividades: [
        {
          tipo: "practica",
          pregunta: "Crea una presentación de 5 diapositivas usando diferentes diseños: título, contenido, dos contenidos, comparación y en blanco",
          ayuda: "Usa cada diseño para un propósito específico y observa cómo cambia la estructura"
        }
      ]
    }
  ],
  recursos: [
    {
      tipo: "guia",
      titulo: "Principios de Diseño Visual",
      descripcion: "Guía completa sobre principios de diseño aplicados a presentaciones"
    },
    {
      tipo: "plantilla",
      titulo: "Plantillas de Diseño Profesional",
      descripcion: "Colección de plantillas prediseñadas para diferentes sectores"
    },
    {
      tipo: "tutorial",
      titulo: "Crear Patrones Personalizados",
      descripcion: "Tutorial paso a paso para crear y personalizar patrones de diapositiva"
    },
    {
      tipo: "checklist",
      titulo: "Lista de Verificación de Diseño",
      descripcion: "Checklist para evaluar la calidad del diseño de presentaciones"
    }
  ],
  evaluacion: {
    preguntas: [
      {
        tipo: "multiple",
        pregunta: "¿Cuál es la regla 6x6 en diseño de presentaciones?",
        opciones: [
          "Máximo 6 diapositivas con 6 minutos de duración",
          "No más de 6 líneas de texto con 6 palabras por línea",
          "6 colores diferentes con 6 fuentes máximo",
          "6 elementos visuales en 6 posiciones fijas"
        ],
        respuestaCorrecta: 1,
        explicacion: "La regla 6x6 establece un máximo de 6 líneas de texto con 6 palabras por línea para mantener las diapositivas simples y legibles."
      },
      {
        tipo: "multiple",
        pregunta: "¿Para qué se utiliza principalmente el patrón de diapositivas?",
        opciones: [
          "Para cambiar solo el color de fondo",
          "Para controlar elementos comunes en toda la presentación",
          "Para insertar animaciones automáticas",
          "Para cambiar el tamaño de las diapositivas"
        ],
        respuestaCorrecta: 1,
        explicacion: "El patrón de diapositivas controla elementos comunes como logos, fuentes predeterminadas y diseño general que aparecen en toda la presentación."
      },
      {
        tipo: "verdadero-falso",
        pregunta: "Un tema de PowerPoint incluye solo colores predefinidos.",
        respuestaCorrecta: false,
        explicacion: "Un tema incluye colores, fuentes, efectos y fondos coordinados para dar una apariencia consistente a la presentación."
      },
      {
        tipo: "multiple",
        pregunta: "¿Cuál es el diseño más apropiado para comparar dos productos?",
        opciones: [
          "Diapositiva de título",
          "Solo título",
          "Dos contenidos o Comparación",
          "En blanco"
        ],
        respuestaCorrecta: 2,
        explicacion: "Los diseños 'Dos contenidos' o 'Comparación' están específicamente diseñados para mostrar información paralela y hacer comparaciones efectivas."
      },
      {
        tipo: "completar",
        pregunta: "Los _______ de posición son áreas predefinidas en los diseños donde se puede insertar contenido específico.",
        respuestaCorrecta: "marcadores",
        explicacion: "Los marcadores de posición son elementos del diseño que definen dónde colocar títulos, texto, imágenes y otros contenidos."
      }
    ],
    puntuacionTotal: 100,
    puntuacionAprobacion: 70
  }
};
