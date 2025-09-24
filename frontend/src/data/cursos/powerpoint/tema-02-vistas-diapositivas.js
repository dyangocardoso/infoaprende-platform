/**
 * Tema 2: Vistas y diapositivas
 * Curso: Diseñador de Presentaciones PowerPoint
 */

export default {
  id: '2',
  titulo: "Vistas y diapositivas",
  tematica: "Estructuración y navegación de contenido",
  duracion: "22-28 minutos",
  objetivos: [
    "Dominar las diferentes vistas de trabajo en PowerPoint",
    "Gestionar diapositivas de manera eficiente (crear, duplicar, eliminar, reordenar)",
    "Aplicar diseños predefinidos y personalizarlos",
    "Optimizar la navegación y organización de presentaciones",
    "Usar herramientas de vista para diferentes propósitos"
  ],
  secciones: [
    {
      id: 1,
      titulo: "Vistas de Trabajo en PowerPoint",
      contenido: `
        <h3>👁️ Dominando las Vistas de PowerPoint</h3>
        
        <div class="vistas-principales">
          <h4>🎯 Vistas Principales y sus Usos</h4>
          
          <div class="vista-normal">
            <h5>📝 Vista Normal</h5>
            <ul>
              <li><strong>Uso principal:</strong> Edición cotidiana de contenido</li>
              <li><strong>Componentes:</strong> Panel diapositivas + Área de trabajo + Panel notas</li>
              <li><strong>Ventajas:</strong> Control total sobre diseño y contenido</li>
              <li><strong>Acceso:</strong> Vista > Normal o Ctrl+1</li>
              <li><strong>Ideal para:</strong> Crear y editar diapositivas individuales</li>
            </ul>
          </div>

          <div class="vista-esquema">
            <h5>📋 Vista Esquema</h5>
            <ul>
              <li><strong>Enfoque:</strong> Estructura textual de la presentación</li>
              <li><strong>Función:</strong> Edición rápida de títulos y textos</li>
              <li><strong>Ventajas:</strong> Vista general del flujo narrativo</li>
              <li><strong>Limitaciones:</strong> No muestra elementos gráficos</li>
              <li><strong>Ideal para:</strong> Planificación y revisión de contenido</li>
            </ul>
          </div>

          <div class="vista-clasificador">
            <h5>🗂️ Vista Clasificador de Diapositivas</h5>
            <ul>
              <li><strong>Función:</strong> Visión general de todas las diapositivas</li>
              <li><strong>Visualización:</strong> Miniaturas de todas las diapositivas</li>
              <li><strong>Operaciones:</strong> Reordenar, copiar, eliminar en lote</li>
              <li><strong>Acceso:</strong> Vista > Clasificador o Ctrl+2</li>
              <li><strong>Ideal para:</strong> Organización y reestructuración</li>
            </ul>
          </div>

          <div class="vista-pagina-notas">
            <h5>📄 Vista Página de Notas</h5>
            <ul>
              <li><strong>Contenido:</strong> Diapositiva + espacio para notas extensas</li>
              <li><strong>Función:</strong> Preparar material del presentador</li>
              <li><strong>Impresión:</strong> Formato ideal para notas impresas</li>
              <li><strong>Ideal para:</strong> Preparación de guiones y recordatorios</li>
            </ul>
          </div>

          <div class="vista-lectura">
            <h5>📖 Vista de Lectura</h5>
            <ul>
              <li><strong>Propósito:</strong> Revisión sin pantalla completa</li>
              <li><strong>Navegación:</strong> Botones de anterior/siguiente</li>
              <li><strong>Características:</strong> Mantiene acceso a otras aplicaciones</li>
              <li><strong>Ideal para:</strong> Revisión rápida y correcciones</li>
            </ul>
          </div>

          <div class="vista-presentacion">
            <h5>🎤 Vista Presentación</h5>
            <ul>
              <li><strong>Función:</strong> Modo de presentación en vivo</li>
              <li><strong>Pantalla completa:</strong> Oculta interfaz de PowerPoint</li>
              <li><strong>Controles:</strong> F5 desde inicio, Shift+F5 desde actual</li>
              <li><strong>Herramientas:</strong> Puntero láser, lápiz, resaltador</li>
              <li><strong>Ideal para:</strong> Presentación final ante audiencia</li>
            </ul>
          </div>
        </div>

        <div class="consejos-vistas">
          <h4>💡 Consejos para Usar Cada Vista</h4>
          
          <div class="workflow-vistas">
            <h5>🔄 Flujo de Trabajo Recomendado</h5>
            <ol>
              <li><strong>Planificación:</strong> Vista Esquema para estructura</li>
              <li><strong>Creación:</strong> Vista Normal para diseño detallado</li>
              <li><strong>Organización:</strong> Vista Clasificador para orden final</li>
              <li><strong>Preparación:</strong> Vista Página de Notas para guión</li>
              <li><strong>Revisión:</strong> Vista Lectura para verificación</li>
              <li><strong>Presentación:</strong> Vista Presentación para audiencia</li>
            </ol>
          </div>

          <div class="atajos-vistas">
            <h5>⚡ Atajos de Teclado para Vistas</h5>
            <ul>
              <li><strong>Vista Normal:</strong> Alt + W + L</li>
              <li><strong>Vista Esquema:</strong> Alt + W + O</li>
              <li><strong>Vista Clasificador:</strong> Alt + W + I</li>
              <li><strong>Página de Notas:</strong> Alt + W + P</li>
              <li><strong>Vista Lectura:</strong> Alt + W + D</li>
              <li><strong>Presentación:</strong> F5 (desde inicio) / Shift + F5 (desde actual)</li>
            </ul>
          </div>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/vistas-powerpoint.jpg",
        video: "/videos/teoria/navegar-vistas.mp4",
        infografia: "/images/teoria/guia-vistas.png"
      },
      actividades: [
        {
          tipo: "exploracion",
          pregunta: "Abre una presentación y cambia entre todas las vistas. ¿Qué información es más visible en cada una?",
          ayuda: "Usa los botones de vista en la barra de estado o el menú Vista"
        },
        {
          tipo: "practica",
          pregunta: "Crea una presentación de 5 diapositivas y organízala usando Vista Clasificador",
          ayuda: "Arrastra las diapositivas para cambiar el orden y observa cómo cambia la narrativa"
        }
      ]
    },
    {
      id: 2,
      titulo: "Gestión de Diapositivas",
      contenido: `
        <h3>🎬 Administración Eficiente de Diapositivas</h3>
        
        <div class="operaciones-basicas">
          <h4>➕ Agregar Nuevas Diapositivas</h4>
          
          <div class="metodos-agregar">
            <h5>🎯 Métodos de Inserción</h5>
            <ul>
              <li><strong>Inicio > Nueva diapositiva:</strong> Método principal</li>
              <li><strong>Ctrl + M:</strong> Atajo rápido más usado</li>
              <li><strong>Clic derecho en panel:</strong> Menú contextual</li>
              <li><strong>Desde otra presentación:</strong> Reutilizar diapositivas</li>
            </ul>
          </div>

          <div class="tipos-diapositiva">
            <h5>📋 Tipos de Diseño de Diapositiva</h5>
            <ul>
              <li><strong>Título:</strong> Para portadas y secciones principales</li>
              <li><strong>Título y contenido:</strong> Diseño más común, versátil</li>
              <li><strong>Encabezado de sección:</strong> Para dividir temáticas</li>
              <li><strong>Dos contenidos:</strong> Comparaciones y contenido dual</li>
              <li><strong>Comparación:</strong> Análisis lado a lado</li>
              <li><strong>Solo contenido:</strong> Máximo espacio para contenido</li>
              <li><strong>En blanco:</strong> Libertad total de diseño</li>
            </ul>
          </div>
        </div>

        <div class="operaciones-avanzadas">
          <h4>🔄 Operaciones Avanzadas</h4>
          
          <div class="duplicar-copiar">
            <h5>📋 Duplicar y Copiar Diapositivas</h5>
            
            <div class="duplicar-interna">
              <h6>🔁 Duplicar (dentro de la misma presentación)</h6>
              <ul>
                <li><strong>Método 1:</strong> Clic derecho > Duplicar diapositiva</li>
                <li><strong>Método 2:</strong> Ctrl + D con diapositiva seleccionada</li>
                <li><strong>Método 3:</strong> Ctrl + C, luego Ctrl + V</li>
                <li><strong>Ventaja:</strong> Mantiene formato y animaciones</li>
              </ul>
            </div>

            <div class="copiar-externa">
              <h6>📤 Copiar (entre presentaciones)</h6>
              <ul>
                <li><strong>Abrir ambas presentaciones</strong></li>
                <li><strong>Seleccionar diapositiva(s) origen</strong></li>
                <li><strong>Ctrl + C para copiar</strong></li>
                <li><strong>Cambiar a presentación destino</strong></li>
                <li><strong>Ctrl + V para pegar</strong></li>
                <li><strong>Opciones de pegado:</strong> Mantener formato o usar tema destino</li>
              </ul>
            </div>
          </div>

          <div class="eliminar-reorganizar">
            <h5>🗑️ Eliminar y Reorganizar</h5>
            
            <div class="eliminar-diapositivas">
              <h6>❌ Eliminar Diapositivas</h6>
              <ul>
                <li><strong>Seleccionar:</strong> Clic en diapositiva(s) en panel</li>
                <li><strong>Eliminar:</strong> Tecla Delete o clic derecho > Eliminar</li>
                <li><strong>Múltiples:</strong> Ctrl + clic para selección múltiple</li>
                <li><strong>Rango:</strong> Shift + clic para rango continuo</li>
                <li><strong>Recuperar:</strong> Ctrl + Z para deshacer</li>
              </ul>
            </div>

            <div class="reorganizar-orden">
              <h6>🔄 Reorganizar Orden</h6>
              <ul>
                <li><strong>Arrastrar y soltar:</strong> En vista Clasificador o panel</li>
                <li><strong>Cortar y pegar:</strong> Ctrl + X, navegar, Ctrl + V</li>
                <li><strong>Vista Esquema:</strong> Mover títulos completos</li>
                <li><strong>Atajo Vista Normal:</strong> Ctrl + Shift + ↑/↓</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="organizacion-avanzada">
          <h4>🗂️ Organización Avanzada</h4>
          
          <div class="secciones-diapositivas">
            <h5>📑 Secciones de Diapositivas</h5>
            <ul>
              <li><strong>Crear sección:</strong> Inicio > Sección > Agregar sección</li>
              <li><strong>Nombrar secciones:</strong> Títulos descriptivos</li>
              <li><strong>Colapsar/expandir:</strong> Organización visual</li>
              <li><strong>Mover secciones:</strong> Reorganizar bloques completos</li>
              <li><strong>Ventaja:</strong> Gestionar presentaciones largas</li>
            </ul>
          </div>

          <div class="herramientas-organizacion">
            <h5>🛠️ Herramientas de Organización</h5>
            <ul>
              <li><strong>Zoom de clasificador:</strong> Ajustar vista según necesidad</li>
              <li><strong>Filtros:</strong> Mostrar solo ciertos tipos de diapositiva</li>
              <li><strong>Buscar y reemplazar:</strong> Cambios masivos de texto</li>
              <li><strong>Comentarios:</strong> Notas de revisión y colaboración</li>
            </ul>
          </div>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/gestion-diapositivas.jpg",
        video: "/videos/teoria/operaciones-diapositivas.mp4"
      },
      actividades: [
        {
          tipo: "practica",
          pregunta: "Crea una presentación con 8 diapositivas usando diferentes diseños, luego reorganízalas lógicamente",
          ayuda: "Usa vista Clasificador para ver todas las diapositivas y arrastrar para reordenar"
        },
        {
          tipo: "organizacion",
          pregunta: "Organiza las diapositivas en 3 secciones temáticas usando la función de secciones",
          ayuda: "Ve a Inicio > Sección > Agregar sección y nombra cada sección descriptivamente"
        }
      ]
    },
    {
      id: 3,
      titulo: "Diseños Predefinidos y Marcadores de Posición",
      contenido: `
        <h3>🎨 Aprovechando los Diseños Predefinidos</h3>
        
        <div class="diseños-disponibles">
          <h4>📐 Tipos de Diseños y sus Usos</h4>
          
          <div class="diseños-principales">
            <div class="diseño-tipo">
              <h5>🏆 Título</h5>
              <ul>
                <li><strong>Componentes:</strong> Título principal + subtítulo</li>
                <li><strong>Uso ideal:</strong> Portada, inicio de secciones</li>
                <li><strong>Tipografía:</strong> Tamaños grandes, jerárquicos</li>
                <li><strong>Personalización:</strong> Fácil cambio de fuentes y colores</li>
              </ul>
            </div>

            <div class="diseño-tipo">
              <h5>📄 Título y Contenido</h5>
              <ul>
                <li><strong>Estructura:</strong> Título + área de contenido</li>
                <li><strong>Versatilidad:</strong> Acepta texto, imágenes, gráficos</li>
                <li><strong>Uso común:</strong> 80% de las diapositivas típicas</li>
                <li><strong>Flexibilidad:</strong> Fácil adaptación a diferentes tipos de contenido</li>
              </ul>
            </div>

            <div class="diseño-tipo">
              <h5>🔄 Dos Contenidos</h5>
              <ul>
                <li><strong>División:</strong> Título + dos áreas de contenido</li>
                <li><strong>Aplicaciones:</strong> Comparaciones, antes/después</li>
                <li><strong>Balance:</strong> Distribución equitativa del espacio</li>
                <li><strong>Variaciones:</strong> Vertical u horizontal</li>
              </ul>
            </div>

            <div class="diseño-tipo">
              <h5>⚖️ Comparación</h5>
              <ul>
                <li><strong>Elementos:</strong> Dos títulos + dos contenidos</li>
                <li><strong>Propósito:</strong> Análisis comparativo</li>
                <li><strong>Simetría:</strong> Estructura espejo perfecta</li>
                <li><strong>Casos uso:</strong> Pros/contras, opciones A/B</li>
              </ul>
            </div>

            <div class="diseño-tipo">
              <h5>📱 Solo Contenido</h5>
              <ul>
                <li><strong>Espacio:</strong> Máxima área para contenido</li>
                <li><strong>Sin título:</strong> Para cuando el contenido se explica solo</li>
                <li><strong>Flexibilidad:</strong> Cualquier tipo de objeto</li>
                <li><strong>Uso:</strong> Imágenes grandes, diagramas complejos</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="marcadores-posicion">
          <h4>🎯 Marcadores de Posición</h4>
          
          <div class="funcionamiento-marcadores">
            <h5>⚙️ ¿Qué son y Cómo Funcionan?</h5>
            <p>Los <strong>marcadores de posición</strong> son áreas predefinidas en las diapositivas que están diseñadas para contener tipos específicos de contenido.</p>
            
            <div class="tipos-marcadores">
              <h6>📋 Tipos de Marcadores</h6>
              <ul>
                <li><strong>Texto:</strong> Para títulos, subtítulos, listas</li>
                <li><strong>Contenido:</strong> Acepta texto, imágenes, tablas, gráficos</li>
                <li><strong>Imagen:</strong> Específicamente para fotografías</li>
                <li><strong>Multimedia:</strong> Videos y audio</li>
                <li><strong>Gráfico:</strong> Para gráficos de datos</li>
                <li><strong>Tabla:</strong> Para datos tabulares</li>
                <li><strong>SmartArt:</strong> Para diagramas organizacionales</li>
              </ul>
            </div>
          </div>

          <div class="trabajar-marcadores">
            <h5>🔧 Trabajar con Marcadores de Posición</h5>
            
            <div class="operaciones-marcadores">
              <h6>✏️ Operaciones Básicas</h6>
              <ul>
                <li><strong>Activar:</strong> Clic dentro del marcador</li>
                <li><strong>Redimensionar:</strong> Arrastrar controladores en bordes</li>
                <li><strong>Mover:</strong> Arrastrar desde el borde del marcador</li>
                <li><strong>Eliminar:</strong> Seleccionar marco y presionar Delete</li>
                <li><strong>Duplicar:</strong> Ctrl + D con marcador seleccionado</li>
              </ul>
            </div>

            <div class="personalizar-marcadores">
              <h6>🎨 Personalización</h6>
              <ul>
                <li><strong>Formato de fondo:</strong> Color, imagen, transparencia</li>
                <li><strong>Bordes:</strong> Grosor, color, estilo</li>
                <li><strong>Efectos:</strong> Sombras, bisel, resplandor</li>
                <li><strong>Posición exacta:</strong> Coordenadas numéricas</li>
              </ul>
            </div>
          </div>

          <div class="mejores-practicas">
            <h5>🏆 Mejores Prácticas con Marcadores</h5>
            <ul>
              <li><strong>Respeto al diseño:</strong> Usar marcadores según su propósito</li>
              <li><strong>Consistencia:</strong> Mantener posiciones similares entre diapositivas</li>
              <li><strong>No sobrecargar:</strong> Un marcador, una idea principal</li>
              <li><strong>Alineación:</strong> Usar guías para precisión</li>
              <li><strong>Jerarquía visual:</strong> Tamaños que reflejen importancia</li>
            </ul>
          </div>
        </div>

        <div class="aplicar-diseños">
          <h4>🎪 Aplicar y Cambiar Diseños</h4>
          
          <div class="proceso-aplicacion">
            <h5>🔄 Cambiar Diseño de Diapositiva Existente</h5>
            <ol>
              <li><strong>Seleccionar diapositiva:</strong> En panel o área de trabajo</li>
              <li><strong>Inicio > Diseño:</strong> Abrir galería de diseños</li>
              <li><strong>Elegir nuevo diseño:</strong> Clic en opción deseada</li>
              <li><strong>Ajustar contenido:</strong> Redistribuir según nuevos marcadores</li>
            </ol>
          </div>

          <div class="consideraciones-cambio">
            <h5>⚠️ Consideraciones al Cambiar Diseños</h5>
            <ul>
              <li><strong>Contenido existente:</strong> Puede necesitar reorganización</li>
              <li><strong>Formato personalizado:</strong> Se puede perder</li>
              <li><strong>Elementos fuera de marcadores:</strong> Permanecen inalterados</li>
              <li><strong>Animaciones:</strong> Se mantienen pero pueden necesitar ajuste</li>
            </ul>
          </div>

          <div class="eficiencia-diseños">
            <h5>⚡ Estrategias para Eficiencia</h5>
            <ul>
              <li><strong>Planificar primero:</strong> Elegir diseños antes de contenido</li>
              <li><strong>Lotes de trabajo:</strong> Aplicar same diseño a múltiples diapositivas</li>
              <li><strong>Usar atajos:</strong> Ctrl+M para nueva con same diseño</li>
              <li><strong>Duplicar base:</strong> Crear template y duplicar</li>
            </ul>
          </div>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/disenos-powerpoint.jpg",
        video: "/videos/teoria/marcadores-posicion.mp4"
      },
      actividades: [
        {
          tipo: "practica",
          pregunta: "Crea diapositivas con cada uno de los 5 diseños principales y experimenta con sus marcadores",
          ayuda: "Prueba agregar diferentes tipos de contenido a cada marcador"
        },
        {
          tipo: "experimentacion",
          pregunta: "Toma una diapositiva y cambia su diseño 3 veces. ¿Cómo se comporta el contenido?",
          ayuda: "Observa cómo se redistribuye el contenido y qué ajustes necesitas hacer"
        }
      ]
    }
  ],
  recursos: {
    documentos: [
      {
        titulo: "Guía de Vistas y Navegación PowerPoint",
        tipo: "PDF",
        url: "/recursos/powerpoint/vistas-navegacion.pdf"
      },
      {
        titulo: "Manual de Diseños Predefinidos",
        tipo: "PDF",
        url: "/recursos/powerpoint/disenos-predefinidos.pdf"
      },
      {
        titulo: "Plantillas de Organización",
        tipo: "ZIP",
        url: "/recursos/powerpoint/plantillas-organizacion.zip"
      }
    ],
    videos: [
      {
        titulo: "Dominar las Vistas de PowerPoint",
        duracion: "15 min",
        url: "/videos/vistas-powerpoint-completo.mp4"
      },
      {
        titulo: "Gestión Eficiente de Diapositivas",
        duracion: "18 min",
        url: "/videos/gestion-diapositivas.mp4"
      },
      {
        titulo: "Organización Avanzada de Presentaciones",
        duracion: "12 min",
        url: "/videos/organizacion-avanzada.mp4"
      }
    ],
    enlaces: [
      {
        titulo: "Diseños de Diapositiva - Guía Oficial",
        url: "https://support.microsoft.com/es-es/office/aplicar-un-diseño-de-diapositiva"
      },
      {
        titulo: "Atajos de Teclado PowerPoint",
        url: "https://support.microsoft.com/es-es/office/usar-métodos-abreviados-de-teclado-para-crear-presentaciones-de-powerpoint"
      },
      {
        titulo: "Mejores Prácticas de Organización",
        url: "https://support.microsoft.com/es-es/office/organizar-las-diapositivas-en-secciones"
      }
    ]
  },
  evaluacion: {
    tipo: "cuestionario",
    preguntas: [
      {
        pregunta: "¿Cuál es la vista más adecuada para reorganizar el orden de las diapositivas?",
        tipo: "opcion_multiple",
        opciones: [
          "Vista Normal",
          "Vista Esquema", 
          "Vista Clasificador",
          "Vista de Lectura"
        ],
        respuestaCorrecta: 2
      },
      {
        pregunta: "¿Cuál es el atajo de teclado para agregar una nueva diapositiva?",
        tipo: "opcion_multiple",
        opciones: [
          "Ctrl + N",
          "Ctrl + M",
          "Ctrl + D",
          "Ctrl + A"
        ],
        respuestaCorrecta: 1
      },
      {
        pregunta: "¿Qué tipo de diseño es ideal para hacer comparaciones?",
        tipo: "opcion_multiple",
        opciones: [
          "Título y contenido",
          "Solo contenido",
          "Dos contenidos",
          "Título"
        ],
        respuestaCorrecta: 2
      }
    ]
  }
};
