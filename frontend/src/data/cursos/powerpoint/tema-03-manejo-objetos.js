/**
 * Tema 3: Manejo de objetos
 * Curso: Diseñador de Presentaciones PowerPoint
 */

export default {
  id: '3',
  titulo: "Manejo de objetos",
  tematica: "Interacción visual con elementos de diseño",
  duracion: "25-30 minutos",
  objetivos: [
    "Insertar y manipular cuadros de texto efectivamente",
    "Trabajar con formas geométricas y líneas",
    "Agrupar y desagrupar objetos para organización",
    "Alinear y distribuir elementos con precisión",
    "Aplicar formato y estilos a objetos"
  ],
  secciones: [
    {
      id: 1,
      titulo: "Cuadros de Texto",
      contenido: `
        <h3>📝 Dominando los Cuadros de Texto</h3>
        
        <div class="insertar-texto">
          <h4>✨ Insertar Cuadros de Texto</h4>
          
          <div class="metodos-insercion">
            <h5>🎯 Métodos de Inserción</h5>
            <ul>
              <li><strong>Insertar > Cuadro de texto:</strong> Método directo desde la cinta</li>
              <li><strong>Hacer clic y escribir:</strong> En diapositivas con marcadores de posición</li>
              <li><strong>Dibujar cuadro:</strong> Crear dimensiones personalizadas</li>
              <li><strong>Atajo rápido:</strong> Alt + N + X para acceso directo</li>
            </ul>
          </div>

          <div class="tipos-cuadros">
            <h5>📦 Tipos de Cuadros de Texto</h5>
            <ul>
              <li><strong>Título:</strong> Para encabezados principales</li>
              <li><strong>Subtítulo:</strong> Para información secundaria</li>
              <li><strong>Contenido:</strong> Para texto del cuerpo</li>
              <li><strong>Libre:</strong> Para anotaciones y elementos adicionales</li>
            </ul>
          </div>
        </div>

        <div class="formato-cuadros">
          <h4>🎨 Formato de Cuadros de Texto</h4>
          
          <div class="propiedades-texto">
            <h5>✏️ Propiedades de Texto</h5>
            <ul>
              <li><strong>Fuente:</strong> Tipo, tamaño, color y estilo</li>
              <li><strong>Alineación:</strong> Izquierda, centro, derecha, justificado</li>
              <li><strong>Espaciado:</strong> Entre líneas y párrafos</li>
              <li><strong>Efectos:</strong> Sombra, reflejo, resplandor</li>
            </ul>
          </div>

          <div class="propiedades-contenedor">
            <h5>📦 Propiedades del Contenedor</h5>
            <ul>
              <li><strong>Relleno:</strong> Color sólido, degradado, imagen</li>
              <li><strong>Contorno:</strong> Grosor, color, estilo de línea</li>
              <li><strong>Efectos:</strong> Sombra, bisel, reflejo 3D</li>
              <li><strong>Márgenes:</strong> Espacio interno del texto</li>
            </ul>
          </div>
        </div>

        <div class="manipulacion-texto">
          <h4>🔧 Manipulación y Posicionamiento</h4>
          
          <div class="posicionamiento">
            <h5>📍 Posicionamiento Preciso</h5>
            <ul>
              <li><strong>Arrastrar:</strong> Movimiento libre con ratón</li>
              <li><strong>Flechas de teclado:</strong> Movimiento pixel a pixel</li>
              <li><strong>Ctrl + flechas:</strong> Movimiento en incrementos mayores</li>
              <li><strong>Panel Formato:</strong> Posicionamiento numérico exacto</li>
            </ul>
          </div>

          <div class="redimensionamiento">
            <h5>📏 Redimensionamiento</h5>
            <ul>
              <li><strong>Controladores de esquina:</strong> Mantiene proporciones</li>
              <li><strong>Controladores laterales:</strong> Ajuste individual de ancho/alto</li>
              <li><strong>Autoajuste:</strong> Adapta tamaño al contenido</li>
              <li><strong>Tamaño fijo:</strong> Dimensiones constantes</li>
            </ul>
          </div>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/cuadros-texto-powerpoint.jpg",
        video: "/videos/teoria/insertar-texto.mp4"
      },
      actividades: [
        {
          tipo: "practica",
          pregunta: "Crea diferentes tipos de cuadros de texto en una diapositiva y experimenta con sus formatos",
          ayuda: "Prueba diferentes fuentes, colores, fondos y efectos"
        },
        {
          tipo: "precision",
          pregunta: "Posiciona tres cuadros de texto usando coordenadas exactas en el panel de formato",
          ayuda: "Clic derecho en el cuadro > Formato de forma > Tamaño y propiedades"
        }
      ]
    },
    {
      id: 2,
      titulo: "Formas y Líneas",
      contenido: `
        <h3>🔷 Trabajando con Formas y Líneas</h3>
        
        <div class="tipos-formas">
          <h4>🎯 Tipos de Formas Disponibles</h4>
          
          <div class="categorias-formas">
            <div class="categoria">
              <h5>⭕ Formas Básicas</h5>
              <ul>
                <li><strong>Círculo y óvalo:</strong> Para elementos decorativos</li>
                <li><strong>Rectángulo y cuadrado:</strong> Para marcos y contenedores</li>
                <li><strong>Triángulo:</strong> Para flechas y símbolos direccionales</li>
                <li><strong>Hexágono y octágono:</strong> Para diagramas especializados</li>
              </ul>
            </div>

            <div class="categoria">
              <h5>➡️ Flechas y Conectores</h5>
              <ul>
                <li><strong>Flechas simples:</strong> Direccionamiento básico</li>
                <li><strong>Flechas curvas:</strong> Para flujos complejos</li>
                <li><strong>Conectores:</strong> Unión automática de objetos</li>
                <li><strong>Llamadas:</strong> Para anotaciones y explicaciones</li>
              </ul>
            </div>

            <div class="categoria">
              <h5>⭐ Formas Especiales</h5>
              <ul>
                <li><strong>Estrellas y explosiones:</strong> Para énfasis y decoración</li>
                <li><strong>Cintas y banners:</strong> Para títulos destacados</li>
                <li><strong>Ecuaciones:</strong> Para contenido matemático</li>
                <li><strong>Diagramas de flujo:</strong> Para procesos y workflows</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="insertar-formas">
          <h4>✨ Insertar y Personalizar Formas</h4>
          
          <div class="proceso-insercion">
            <h5>🎯 Proceso de Inserción</h5>
            <ol>
              <li><strong>Insertar > Formas:</strong> Acceder a la galería</li>
              <li><strong>Seleccionar forma:</strong> Clic en la forma deseada</li>
              <li><strong>Dibujar en diapositiva:</strong> Clic y arrastrar</li>
              <li><strong>Ajustar propiedades:</strong> Color, contorno, efectos</li>
            </ol>
          </div>

          <div class="controles-precision">
            <h5>⚙️ Controles de Precisión</h5>
            <ul>
              <li><strong>Shift + arrastrar:</strong> Mantiene proporciones</li>
              <li><strong>Ctrl + arrastrar:</strong> Dibuja desde el centro</li>
              <li><strong>Alt + arrastrar:</strong> Ignora guías de alineación</li>
              <li><strong>Puntos amarillos:</strong> Ajuste de características específicas</li>
            </ul>
          </div>
        </div>

        <div class="formato-formas">
          <h4>🎨 Formato Avanzado de Formas</h4>
          
          <div class="opciones-relleno">
            <h5>🎯 Opciones de Relleno</h5>
            <ul>
              <li><strong>Color sólido:</strong> Relleno uniforme</li>
              <li><strong>Degradado:</strong> Transición entre colores</li>
              <li><strong>Imagen o textura:</strong> Relleno con patrón</li>
              <li><strong>Sin relleno:</strong> Forma transparente</li>
            </ul>
          </div>

          <div class="opciones-contorno">
            <h5>✏️ Opciones de Contorno</h5>
            <ul>
              <li><strong>Color:</strong> Tono del borde</li>
              <li><strong>Grosor:</strong> Ancho de la línea</li>
              <li><strong>Estilo:</strong> Sólido, punteado, discontinuo</li>
              <li><strong>Extremos:</strong> Puntas de flecha, círculos</li>
            </ul>
          </div>

          <div class="efectos-3d">
            <h5>🌟 Efectos Tridimensionales</h5>
            <ul>
              <li><strong>Biselado:</strong> Efecto de profundidad en bordes</li>
              <li><strong>Rotación 3D:</strong> Perspectiva tridimensional</li>
              <li><strong>Iluminación:</strong> Efectos de luz direccional</li>
              <li><strong>Material:</strong> Texturas como metal, plástico, mate</li>
            </ul>
          </div>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/formas-powerpoint.jpg",
        video: "/videos/teoria/trabajar-formas.mp4"
      },
      actividades: [
        {
          tipo: "creativo",
          pregunta: "Crea un diagrama de flujo simple usando diferentes formas y conectores",
          ayuda: "Usa formas de diagrama de flujo y conectores para mostrar un proceso"
        },
        {
          tipo: "artistico",
          pregunta: "Diseña un logo simple usando solo formas geométricas básicas",
          ayuda: "Combina círculos, rectángulos y triángulos con diferentes colores y efectos"
        }
      ]
    },
    {
      id: 3,
      titulo: "Agrupar y Organizar Objetos",
      contenido: `
        <h3>🗂️ Organización Avanzada de Objetos</h3>
        
        <div class="agrupacion-objetos">
          <h4>🔗 Agrupar y Desagrupar Objetos</h4>
          
          <div class="concepto-agrupacion">
            <h5>💡 ¿Qué es Agrupar?</h5>
            <p>Agrupar objetos permite tratarlos como una sola unidad, facilitando su movimiento, redimensionamiento y aplicación de formato de manera conjunta.</p>
            
            <h6>✅ Ventajas de Agrupar:</h6>
            <ul>
              <li><strong>Movimiento conjunto:</strong> Todos los objetos se mueven como uno</li>
              <li><strong>Formato unificado:</strong> Aplicar cambios a todo el grupo</li>
              <li><strong>Protección:</strong> Evita modificaciones accidentales</li>
              <li><strong>Organización:</strong> Mantiene relaciones espaciales</li>
            </ul>
          </div>

          <div class="como-agrupar">
            <h5>🎯 Cómo Agrupar Objetos</h5>
            <ol>
              <li><strong>Seleccionar múltiples objetos:</strong> Ctrl + clic en cada objeto</li>
              <li><strong>O usar selección de área:</strong> Arrastrar para crear rectángulo de selección</li>
              <li><strong>Clic derecho > Agrupar:</strong> O usar Ctrl + G</li>
              <li><strong>Verificar agrupación:</strong> Controladores de grupo aparecen</li>
            </ol>
          </div>

          <div class="trabajar-grupos">
            <h5>⚙️ Trabajar con Grupos</h5>
            <ul>
              <li><strong>Editar grupo:</strong> Doble clic para entrar en modo edición</li>
              <li><strong>Salir de edición:</strong> Clic fuera del grupo o Esc</li>
              <li><strong>Desagrupar:</strong> Clic derecho > Desagrupar o Ctrl + Shift + G</li>
              <li><strong>Reagrupar:</strong> Volver a agrupar objetos previamente agrupados</li>
            </ul>
          </div>
        </div>

        <div class="alineacion-objetos">
          <h4>📐 Alineación Precisa de Objetos</h4>
          
          <div class="herramientas-alineacion">
            <h5>🎯 Herramientas de Alineación</h5>
            <ul>
              <li><strong>Formato > Alinear:</strong> Acceso desde la cinta</li>
              <li><strong>Panel de alineación:</strong> Vista detallada de opciones</li>
              <li><strong>Guías inteligentes:</strong> Alineación automática visual</li>
              <li><strong>Cuadrícula:</strong> Referencias precisas de posicionamiento</li>
            </ul>
          </div>

          <div class="tipos-alineacion">
            <h5>📍 Tipos de Alineación</h5>
            
            <div class="alineacion-horizontal">
              <h6>↔️ Alineación Horizontal:</h6>
              <ul>
                <li><strong>Alinear a la izquierda:</strong> Bordes izquierdos en línea</li>
                <li><strong>Centrar horizontalmente:</strong> Centros en línea vertical</li>
                <li><strong>Alinear a la derecha:</strong> Bordes derechos en línea</li>
              </ul>
            </div>

            <div class="alineacion-vertical">
              <h6>↕️ Alineación Vertical:</h6>
              <ul>
                <li><strong>Alinear arriba:</strong> Bordes superiores en línea</li>
                <li><strong>Centrar verticalmente:</strong> Centros en línea horizontal</li>
                <li><strong>Alinear abajo:</strong> Bordes inferiores en línea</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="distribucion-objetos">
          <h4>📊 Distribución Uniforme</h4>
          
          <div class="concepto-distribucion">
            <h5>📏 ¿Qué es Distribuir?</h5>
            <p>Distribuir objetos crea espacios iguales entre elementos seleccionados, logrando una disposición visualmente equilibrada y profesional.</p>
          </div>

          <div class="opciones-distribucion">
            <h5>⚖️ Opciones de Distribución</h5>
            <ul>
              <li><strong>Distribuir horizontalmente:</strong> Espacios iguales de izquierda a derecha</li>
              <li><strong>Distribuir verticalmente:</strong> Espacios iguales de arriba a abajo</li>
              <li><strong>Centros vs bordes:</strong> Basado en centros o extremos de objetos</li>
              <li><strong>Respecto a diapositiva:</strong> Distribución en todo el espacio</li>
            </ul>
          </div>
        </div>

        <div class="orden-capas">
          <h4>🔄 Orden de Capas (Z-Index)</h4>
          
          <div class="control-capas">
            <h5>🏗️ Controlar Superposición</h5>
            <ul>
              <li><strong>Traer al frente:</strong> Objeto arriba de todos</li>
              <li><strong>Enviar al fondo:</strong> Objeto debajo de todos</li>
              <li><strong>Traer adelante:</strong> Una capa hacia arriba</li>
              <li><strong>Enviar atrás:</strong> Una capa hacia abajo</li>
            </ul>
          </div>

          <div class="panel-seleccion">
            <h5>📋 Panel de Selección</h5>
            <ul>
              <li><strong>Ver todos los objetos:</strong> Lista completa de elementos</li>
              <li><strong>Reordenar capas:</strong> Arrastrar en la lista</li>
              <li><strong>Ocultar objetos:</strong> Icono de ojo para visibilidad</li>
              <li><strong>Bloquear objetos:</strong> Icono de candado para protección</li>
            </ul>
          </div>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/organizacion-objetos.jpg",
        video: "/videos/teoria/agrupar-alinear.mp4"
      },
      actividades: [
        {
          tipo: "organizacion",
          pregunta: "Crea un diseño con 8 objetos diferentes, agrúpalos en 3 grupos lógicos y alínealos perfectamente",
          ayuda: "Usa selección múltiple, agrupación y herramientas de alineación"
        },
        {
          tipo: "precision",
          pregunta: "Usa el panel de selección para organizar 5 objetos en capas específicas",
          ayuda: "Inicio > Seleccionar > Panel de selección para controlar orden y visibilidad"
        }
      ]
    }
  ],
  recursos: {
    documentos: [
      {
        titulo: "Guía de Objetos en PowerPoint",
        tipo: "PDF",
        url: "/recursos/powerpoint/objetos-powerpoint.pdf"
      },
      {
        titulo: "Manual de Formas y Alineación",
        tipo: "PDF",
        url: "/recursos/powerpoint/formas-alineacion.pdf"
      },
      {
        titulo: "Plantillas de Diagramas",
        tipo: "ZIP",
        url: "/recursos/powerpoint/plantillas-diagramas.zip"
      }
    ],
    videos: [
      {
        titulo: "Dominar Objetos en PowerPoint",
        duracion: "22 min",
        url: "/videos/objetos-powerpoint-completo.mp4"
      },
      {
        titulo: "Técnicas de Alineación Avanzada",
        duracion: "15 min",
        url: "/videos/alineacion-avanzada.mp4"
      },
      {
        titulo: "Crear Diagramas Profesionales",
        duracion: "18 min",
        url: "/videos/diagramas-profesionales.mp4"
      }
    ],
    enlaces: [
      {
        titulo: "Formas en PowerPoint - Guía Oficial",
        url: "https://support.microsoft.com/es-es/office/insertar-formas"
      },
      {
        titulo: "Alineación y Distribución de Objetos",
        url: "https://support.microsoft.com/es-es/office/alinear-objetos"
      },
      {
        titulo: "Agrupar y Desagrupar Objetos",
        url: "https://support.microsoft.com/es-es/office/agrupar-objetos"
      }
    ]
  },
  evaluacion: {
    tipo: "cuestionario", 
    preguntas: [
      {
        pregunta: "¿Cuál es el atajo de teclado para agrupar objetos seleccionados?",
        tipo: "opcion_multiple",
        opciones: [
          "Ctrl + A",
          "Ctrl + G", 
          "Ctrl + D",
          "Ctrl + H"
        ],
        respuestaCorrecta: 1
      },
      {
        pregunta: "¿Qué función tienen los puntos amarillos en las formas?",
        tipo: "opcion_multiple",
        opciones: [
          "Cambiar el color",
          "Eliminar la forma",
          "Ajustar características específicas",
          "Duplicar la forma"
        ],
        respuestaCorrecta: 2
      },
      {
        pregunta: "¿Para qué sirve la función 'Distribuir objetos'?",
        tipo: "opcion_multiple",
        opciones: [
          "Cambiar el orden de las capas",
          "Crear espacios iguales entre objetos", 
          "Agrupar objetos automáticamente",
          "Cambiar el tamaño de los objetos"
        ],
        respuestaCorrecta: 1
      }
    ]
  }
};
