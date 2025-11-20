/**
 * Tema 1: Interfaz y herramientas
 * Curso: Diseñador Gráfico Paint
 */

export default {
  id: '1',
  titulo: "Interfaz y herramientas",
  tematica: "Entorno y cuadro de herramientas",
  duracion: "45-60 minutos",
  objetivos: [
    "Identificar todos los elementos de la interfaz de Paint",
    "Dominar el uso del cuadro de herramientas",
    "Configurar el área de trabajo según necesidades",
    "Utilizar eficientemente la paleta de colores",
    "Navegar por la barra de menús y opciones",
    "Personalizar el entorno de trabajo"
  ],
  introduccion: {
    titulo: 'Primeros pasos con Paint',
    contenido: `
      <h3>🎨 Bienvenido al mundo del diseño digital</h3>
      <p>Paint es la herramienta de dibujo y edición básica que viene integrada en Windows, perfecta para dar tus primeros pasos en el diseño gráfico digital. Aunque es simple en apariencia, Paint ofrece todas las herramientas fundamentales necesarias para crear gráficos básicos, editar imágenes y desarrollar tus habilidades creativas.</p>

      <p>En este tema aprenderás a navegar por la interfaz de Paint, conocerás todas las herramientas disponibles y cómo configurar tu espacio de trabajo para ser más productivo. El dominio de la interfaz es fundamental para trabajar de manera eficiente y aprovechar al máximo las capacidades del programa.</p>

      <p>Al finalizar este tema, te sentirás cómodo navegando por Paint y podrás concentrarte en desarrollar tu creatividad sin preocuparte por encontrar las herramientas que necesitas.</p>
    `,
    actividades: [
      {
        tipo: "exploracion",
        instruccion: "Abre Paint y explora libremente la interfaz durante 3 minutos, haciendo clic en diferentes herramientas para familiarizarte",
        tiempo: "3 minutos"
      }
    ]
  },
  secciones: [
    {
      id: 1,
      titulo: "Introducción a Paint",
      contenido: `
        <h3>🎨 Descubriendo Paint</h3>
        
        <div class="introduccion-paint">
          <h4>¿Qué es Paint?</h4>
          <p>Paint es la <strong>herramienta de dibujo y edición básica</strong> que viene integrada en Windows. Aunque es simple, es perfecta para crear gráficos básicos, editar capturas de pantalla, hacer dibujos creativos y aprender los fundamentos del diseño digital.</p>

          <h5>✨ Características principales:</h5>
          <ul>
            <li><strong>Fácil de usar:</strong> Interfaz intuitiva para principiantes</li>
            <li><strong>Gratuito:</strong> Incluido en todas las versiones de Windows</li>
            <li><strong>Versátil:</strong> Dibujo, edición y diseño básico</li>
            <li><strong>Rápido:</strong> Se abre instantáneamente</li>
            <li><strong>Formatos compatibles:</strong> PNG, JPEG, BMP, GIF</li>
          </ul>

          <h4>🚀 Iniciar Paint</h4>
          <div class="iniciar-paint">
            <h5>📋 Métodos para abrir Paint:</h5>
            <ol>
              <li><strong>Menú Inicio:</strong> Buscar "Paint" en el menú Inicio</li>
              <li><strong>Ejecutar:</strong> Windows + R → escribir "mspaint" → Enter</li>
              <li><strong>Búsqueda rápida:</strong> Windows + S → escribir "Paint"</li>
              <li><strong>Desde archivo:</strong> Clic derecho en imagen → "Editar con Paint"</li>
            </ol>

            <h5>🔧 Primera configuración:</h5>
            <ul>
              <li>Paint se abre con un lienzo en blanco predeterminado</li>
              <li>Tamaño inicial: generalmente 800x600 píxeles</li>
              <li>Color de fondo: blanco por defecto</li>
              <li>Herramienta activa: lápiz por defecto</li>
            </ul>
          </div>

          <h4>🎯 ¿Para qué usar Paint?</h4>
          <div class="usos-paint">
            <h5>🖼️ Edición básica de imágenes:</h5>
            <ul>
              <li>Recortar capturas de pantalla</li>
              <li>Agregar texto a imágenes</li>
              <li>Cambiar tamaño de imágenes</li>
              <li>Añadir flechas o resaltados</li>
            </ul>

            <h5>🎨 Creación artística:</h5>
            <ul>
              <li>Dibujos libres y bocetos</li>
              <li>Pixel art simple</li>
              <li>Diagramas básicos</li>
              <li>Ilustraciones simples</li>
            </ul>

            <h5>📚 Educación y aprendizaje:</h5>
            <ul>
              <li>Enseñar conceptos básicos de diseño</li>
              <li>Introducir a niños al arte digital</li>
              <li>Crear material educativo simple</li>
              <li>Practicar coordinación ojo-mano</li>
            </ul>
          </div>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/paint-introduccion.jpg",
        infografia: "/images/teoria/que-es-paint.png",
        video: "/videos/iniciando-paint.mp4"
      },
      actividades: [
        {
          tipo: "exploracion",
          pregunta: "Abre Paint usando tres métodos diferentes",
          ayuda: "Prueba: menú Inicio, Windows+R con 'mspaint', y búsqueda con Windows+S"
        },
        {
          tipo: "observacion",
          pregunta: "Observa la interfaz inicial y describe qué elementos ves",
          ayuda: "Nota el lienzo blanco, las herramientas, los colores y la barra de menús"
        }
      ]
    },
    {
      id: 2,
      titulo: "La Interfaz de Paint",
      contenido: `
        <h3>🖥️ Conociendo la Interfaz</h3>
        
        <div class="interfaz-paint">
          <h4>🏗️ Elementos Principales de la Interfaz</h4>
          
          <div class="elementos-interfaz">
            <h5>📜 Barra de Título</h5>
            <ul>
              <li><strong>Nombre del archivo:</strong> Muestra el nombre del archivo actual</li>
              <li><strong>Indicador de cambios:</strong> Asterisco (*) si hay cambios sin guardar</li>
              <li><strong>Controles de ventana:</strong> Minimizar, maximizar, cerrar</li>
            </ul>

            <h5>📋 Cinta de Opciones (Ribbon)</h5>
            <p>Paint utiliza la moderna interfaz de cinta, organizada en pestañas temáticas:</p>
            
            <h6>🏠 Pestaña Inicio:</h6>
            <ul>
              <li><strong>Portapapeles:</strong> Pegar, cortar, copiar</li>
              <li><strong>Imagen:</strong> Seleccionar, recortar, cambiar tamaño</li>
              <li><strong>Herramientas:</strong> Lápiz, pincel, spray, texto, borrador</li>
              <li><strong>Formas:</strong> Línea, curva, rectángulo, círculo, polígono</li>
              <li><strong>Colores:</strong> Paleta de colores y selector personalizado</li>
            </ul>

            <h6>📁 Pestaña Ver:</h6>
            <ul>
              <li><strong>Zoom:</strong> Acercar, alejar, 100%</li>
              <li><strong>Mostrar u ocultar:</strong> Reglas, líneas de cuadrícula</li>
              <li><strong>Pantalla completa:</strong> Ocultar interfaz para mejor visualización</li>
            </ul>

            <h5>🎨 Área de Trabajo (Lienzo)</h5>
            <ul>
              <li><strong>Superficie de dibujo:</strong> Donde creas tu obra</li>
              <li><strong>Área visible:</strong> Delimitada por líneas grises</li>
              <li><strong>Fondo personalizable:</strong> Blanco por defecto, modificable</li>
              <li><strong>Redimensionable:</strong> Arrastrando las esquinas</li>
            </ul>

            <h5>📊 Barra de Estado</h5>
            <ul>
              <li><strong>Coordenadas del cursor:</strong> Posición exacta en píxeles</li>
              <li><strong>Dimensiones del lienzo:</strong> Ancho x Alto en píxeles</li>
              <li><strong>Nivel de zoom:</strong> Porcentaje de ampliación actual</li>
            </ul>
          </div>

          <h4>🔄 Navegación por la Interfaz</h4>
          <div class="navegacion-interfaz">
            <h5>⌨️ Atajos de teclado útiles:</h5>
            <ul>
              <li><strong>Ctrl + N:</strong> Nuevo archivo</li>
              <li><strong>Ctrl + O:</strong> Abrir archivo</li>
              <li><strong>Ctrl + S:</strong> Guardar</li>
              <li><strong>Ctrl + Z:</strong> Deshacer</li>
              <li><strong>Ctrl + Y:</strong> Rehacer</li>
              <li><strong>Ctrl + A:</strong> Seleccionar todo</li>
              <li><strong>Ctrl + +:</strong> Acercar zoom</li>
              <li><strong>Ctrl + -:</strong> Alejar zoom</li>
              <li><strong>F11:</strong> Pantalla completa</li>
            </ul>

            <h5>🖱️ Interacción con ratón:</h5>
            <ul>
              <li><strong>Clic izquierdo:</strong> Dibujar con color primario</li>
              <li><strong>Clic derecho:</strong> Dibujar con color secundario</li>
              <li><strong>Rueda del ratón:</strong> Zoom in/out (con Ctrl)</li>
              <li><strong>Arrastrar:</strong> Dibujar líneas continuas</li>
            </ul>
          </div>

          <h4>⚙️ Personalización del Espacio de Trabajo</h4>
          <div class="personalizacion-workspace">
            <h5>📏 Configurar tamaño del lienzo:</h5>
            <ol>
              <li>Ir a pestaña "Inicio"</li>
              <li>Hacer clic en "Cambiar tamaño"</li>
              <li>Elegir entre píxeles o porcentaje</li>
              <li>Introducir nuevas dimensiones</li>
              <li>Mantener relación de aspecto si es necesario</li>
            </ol>

            <h5>🎨 Cambiar color de fondo:</h5>
            <ol>
              <li>Seleccionar herramienta "Relleno de color"</li>
              <li>Elegir color deseado en la paleta</li>
              <li>Hacer clic en área vacía del lienzo</li>
              <li>O usar menú Archivo → Propiedades</li>
            </ol>

            <h5>📐 Mostrar herramientas de precisión:</h5>
            <ul>
              <li><strong>Reglas:</strong> Pestaña Ver → Reglas (para medidas precisas)</li>
              <li><strong>Cuadrícula:</strong> Pestaña Ver → Líneas de cuadrícula (para alineación)</li>
              <li><strong>Zoom personalizado:</strong> Introducir porcentaje específico</li>
            </ul>
          </div>

          <h4>💡 Consejos para la Interfaz</h4>
          <ul>
            <li><strong>Mantén la interfaz limpia:</strong> Oculta herramientas que no uses frecuentemente</li>
            <li><strong>Usa pantalla completa:</strong> F11 para maximizar área de trabajo</li>
            <li><strong>Personaliza atajos:</strong> Aprende los atajos más importantes para tu flujo de trabajo</li>
            <li><strong>Aprovecha el zoom:</strong> Acerca para detalles, aleja para vista general</li>
            <li><strong>Guarda frecuentemente:</strong> Ctrl + S para no perder trabajo</li>
          </ul>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/interfaz-paint-completa.jpg",
        infografia: "/images/teoria/elementos-interfaz-paint.png",
        video: "/videos/navegando-interfaz-paint.mp4"
      },
      actividades: [
        {
          tipo: "exploracion",
          pregunta: "Identifica cada elemento de la interfaz y su función",
          ayuda: "Pasa el cursor sobre cada botón y lee las descripciones emergentes"
        },
        {
          tipo: "configuracion",
          pregunta: "Cambia el tamaño del lienzo a 1200x800 píxeles",
          ayuda: "Inicio → Cambiar tamaño → introducir nuevas dimensiones"
        }
      ]
    },
    {
      id: 3,
      titulo: "Cuadro de Herramientas",
      contenido: `
        <h3>🧰 Dominando las Herramientas</h3>
        
        <div class="cuadro-herramientas">
          <h4>🎯 Herramientas de Selección</h4>
          
          <div class="herramientas-seleccion">
            <h5>📌 Seleccionar</h5>
            <ul>
              <li><strong>Función:</strong> Seleccionar áreas rectangulares para mover o copiar</li>
              <li><strong>Uso:</strong> Arrastrar para crear rectángulo de selección</li>
              <li><strong>Opciones:</strong> Selección transparente o con fondo</li>
              <li><strong>Consejos:</strong> Mantén Shift para selección cuadrada</li>
            </ul>

            <h5>✂️ Selección de forma libre</h5>
            <ul>
              <li><strong>Función:</strong> Seleccionar áreas irregulares</li>
              <li><strong>Uso:</strong> Dibujar contorno de selección</li>
              <li><strong>Aplicación:</strong> Ideal para objetos con formas complejas</li>
              <li><strong>Finalizar:</strong> Unir punto final con inicial</li>
            </ul>
          </div>

          <h4>✏️ Herramientas de Dibujo</h4>
          <div class="herramientas-dibujo">
            <h5>🖊️ Lápiz</h5>
            <ul>
              <li><strong>Función:</strong> Dibujo de líneas finas y precisas</li>
              <li><strong>Grosor:</strong> 1 píxel fijo</li>
              <li><strong>Uso ideal:</strong> Detalles, contornos, pixel art</li>
              <li><strong>Técnica:</strong> Movimientos cortos para mayor control</li>
            </ul>

            <h5>🖌️ Pincel</h5>
            <ul>
              <li><strong>Función:</strong> Dibujo de trazos más gruesos y suaves</li>
              <li><strong>Grosores disponibles:</strong> Varios tamaños predefinidos</li>
              <li><strong>Formas:</strong> Redondo, cuadrado, diagonal</li>
              <li><strong>Uso ideal:</strong> Rellenos, sombreados, arte expresivo</li>
            </ul>

            <h5>💨 Spray/Aerógrafo</h5>
            <ul>
              <li><strong>Función:</strong> Crea efecto de aerosol o spray</li>
              <li><strong>Patrón:</strong> Puntos dispersos en área circular</li>
              <li><strong>Densidad:</strong> Varía según velocidad de movimiento</li>
              <li><strong>Uso ideal:</strong> Texturas, efectos atmosféricos, difuminados</li>
            </ul>

            <h5>🌈 Relleno de color</h5>
            <ul>
              <li><strong>Función:</strong> Rellena áreas cerradas con color</li>
              <li><strong>Funcionamiento:</strong> Detecta bordes y rellena área contenida</li>
              <li><strong>Requisito:</strong> Área debe estar completamente cerrada</li>
              <li><strong>Uso ideal:</strong> Colorear formas, cambiar fondos</li>
            </ul>

            <h5>💧 Gotero</h5>
            <ul>
              <li><strong>Función:</strong> Captura color de cualquier punto de la imagen</li>
              <li><strong>Resultado:</strong> Establece color capturado como primario</li>
              <li><strong>Uso ideal:</strong> Igualar colores existentes</li>
              <li><strong>Precisión:</strong> Captura color exacto del píxel</li>
            </ul>
          </div>

          <h4>🔤 Herramientas de Texto</h4>
          <div class="herramientas-texto">
            <h5>📝 Texto</h5>
            <ul>
              <li><strong>Función:</strong> Insertar texto editable en la imagen</li>
              <li><strong>Uso:</strong> Clic para posicionar, escribir texto</li>
              <li><strong>Opciones:</strong> Fuente, tamaño, estilo (negrita, cursiva)</li>
              <li><strong>Colores:</strong> Texto y fondo opcionales</li>
              <li><strong>Finalizar:</strong> Clic fuera del cuadro de texto</li>
            </ul>

            <h6>🎨 Personalización de texto:</h6>
            <ol>
              <li>Seleccionar herramienta Texto</li>
              <li>Hacer clic donde insertar texto</li>
              <li>Aparece cuadro de herramientas de texto</li>
              <li>Elegir fuente, tamaño y estilo</li>
              <li>Escribir texto deseado</li>
              <li>Clic fuera para confirmar</li>
            </ol>
          </div>

          <h4>🧽 Herramientas de Edición</h4>
          <div class="herramientas-edicion">
            <h5>🧹 Borrador</h5>
            <ul>
              <li><strong>Función:</strong> Eliminar partes de la imagen</li>
              <li><strong>Tamaños:</strong> 4 tamaños diferentes disponibles</li>
              <li><strong>Color:</strong> Borra al color de fondo secundario</li>
              <li><strong>Uso ideal:</strong> Correcciones, eliminación de elementos</li>
            </ul>

            <h5>🔍 Lupa</h5>
            <ul>
              <li><strong>Función:</strong> Ampliar vista para trabajo detallado</li>
              <li><strong>Niveles:</strong> 1x, 2x, 6x, 8x</li>
              <li><strong>Uso:</strong> Clic para ampliar área específica</li>
              <li><strong>Navegación:</strong> Arrastrar en vista ampliada</li>
            </ul>
          </div>

          <h4>📐 Herramientas de Formas</h4>
          <div class="herramientas-formas">
            <h5>📏 Línea</h5>
            <ul>
              <li><strong>Función:</strong> Dibujar líneas rectas</li>
              <li><strong>Grosores:</strong> 5 grosores predefinidos</li>
              <li><strong>Técnica:</strong> Mantener Shift para líneas perfectamente horizontales/verticales</li>
            </ul>

            <h5>🌙 Curva</h5>
            <ul>
              <li><strong>Función:</strong> Crear líneas curvas</li>
              <li><strong>Proceso:</strong> Dibujar línea recta, luego curvar con clics</li>
              <li><strong>Puntos:</strong> Hasta 2 puntos de curvatura</li>
            </ul>

            <h5>▭ Rectángulo</h5>
            <ul>
              <li><strong>Función:</strong> Crear rectángulos y cuadrados</li>
              <li><strong>Opciones:</strong> Solo contorno, relleno, o ambos</li>
              <li><strong>Técnica:</strong> Shift para cuadrados perfectos</li>
            </ul>

            <h5>⭕ Círculo/Elipse</h5>
            <ul>
              <li><strong>Función:</strong> Crear círculos y elipses</li>
              <li><strong>Opciones:</strong> Contorno, relleno, o combinado</li>
              <li><strong>Técnica:</strong> Shift para círculos perfectos</li>
            </ul>

            <h5>🔺 Polígono</h5>
            <ul>
              <li><strong>Función:</strong> Crear formas de múltiples lados</li>
              <li><strong>Uso:</strong> Clic para cada vértice</li>
              <li><strong>Finalizar:</strong> Doble clic o conectar con primer punto</li>
            </ul>
          </div>

          <h4>🎨 Configuración de Herramientas</h4>
          <div class="configuracion-herramientas">
            <h5>🎚️ Opciones de grosor:</h5>
            <ul>
              <li>Cada herramienta tiene opciones de grosor específicas</li>
              <li>Aparecen automáticamente al seleccionar la herramienta</li>
              <li>Desde 1 píxel hasta trazos muy gruesos</li>
            </ul>

            <h5>🎭 Opciones de formas:</h5>
            <ul>
              <li><strong>Solo contorno:</strong> Línea externa únicamente</li>
              <li><strong>Solo relleno:</strong> Forma sólida sin borde</li>
              <li><strong>Contorno y relleno:</strong> Combinación de ambos</li>
            </ul>

            <h5>💡 Consejos de uso:</h5>
            <ul>
              <li><strong>Practica con cada herramienta:</strong> Cada una tiene su técnica óptima</li>
              <li><strong>Combina herramientas:</strong> Usa múltiples herramientas en un proyecto</li>
              <li><strong>Experimenta con grosores:</strong> Diferentes efectos según el grosor</li>
              <li><strong>Usa atajos:</strong> Muchas herramientas tienen atajos de teclado</li>
            </ul>
          </div>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/herramientas-paint.jpg",
        infografia: "/images/teoria/cuadro-herramientas-completo.png",
        video: "/videos/usando-herramientas-paint.mp4"
      },
      actividades: [
        {
          tipo: "practica",
          pregunta: "Prueba cada herramienta de dibujo en un lienzo nuevo",
          ayuda: "Dedica 2-3 minutos a experimentar con cada herramienta para entender su comportamiento"
        },
        {
          tipo: "creacion",
          pregunta: "Dibuja una casa simple usando solo herramientas de formas",
          ayuda: "Usa rectángulos para paredes, triángulo para techo, círculo para sol"
        }
      ]
    },
    {
      id: 4,
      titulo: "Paleta de Colores",
      contenido: `
        <h3>🌈 Maestría en Colores</h3>
        
        <div class="paleta-colores">
          <h4>🎨 Entendiendo la Paleta de Colores</h4>
          
          <div class="entendiendo-paleta">
            <h5>📍 Ubicación y Estructura</h5>
            <ul>
              <li><strong>Ubicación:</strong> Lado derecho de la pestaña Inicio</li>
              <li><strong>Colores básicos:</strong> 20 colores predefinidos más comunes</li>
              <li><strong>Color primario:</strong> Cuadro grande superior izquierdo</li>
              <li><strong>Color secundario:</strong> Cuadro pequeño inferior derecho</li>
              <li><strong>Botón "Editar colores":</strong> Acceso a colores personalizados</li>
            </ul>

            <h5>🎯 Colores Primario y Secundario</h5>
            <ul>
              <li><strong>Color primario (clic izquierdo):</strong>
                <ul>
                  <li>Color principal para dibujo</li>
                  <li>Se usa con clic izquierdo del ratón</li>
                  <li>Color de primer plano en herramientas</li>
                </ul>
              </li>
              <li><strong>Color secundario (clic derecho):</strong>
                <ul>
                  <li>Color de fondo o alternativo</li>
                  <li>Se usa con clic derecho del ratón</li>
                  <li>Color al que "borra" el borrador</li>
                </ul>
              </li>
            </ul>
          </div>

          <h4>🎨 Selección de Colores</h4>
          <div class="seleccion-colores">
            <h5>🖱️ Métodos de selección:</h5>
            
            <h6>Método 1: Clic directo en paleta</h6>
            <ol>
              <li><strong>Clic izquierdo:</strong> Establece color primario</li>
              <li><strong>Clic derecho:</strong> Establece color secundario</li>
              <li>El color seleccionado se muestra en los indicadores</li>
            </ol>

            <h6>Método 2: Herramienta Gotero</h6>
            <ol>
              <li>Seleccionar herramienta Gotero</li>
              <li>Hacer clic en cualquier color de la imagen</li>
              <li>El color se captura como primario automáticamente</li>
              <li>Clic derecho captura como secundario</li>
            </ol>

            <h6>Método 3: Editor de colores personalizado</h6>
            <ol>
              <li>Hacer clic en "Editar colores"</li>
              <li>Se abre ventana de selección avanzada</li>
              <li>Elegir color en rueda o introducir valores RGB</li>
              <li>Guardar en paleta personalizada si se desea</li>
            </ol>
          </div>

          <h4>🛠️ Editor de Colores Avanzado</h4>
          <div class="editor-colores-avanzado">
            <h5>🎡 Rueda de Color</h5>
            <ul>
              <li><strong>Selección de matiz:</strong> Clic en rueda exterior</li>
              <li><strong>Saturación y brillo:</strong> Clic en cuadro interior</li>
              <li><strong>Vista previa:</strong> Comparación color actual vs nuevo</li>
            </ul>

            <h5>📊 Valores RGB</h5>
            <ul>
              <li><strong>R (Rojo):</strong> Valores 0-255</li>
              <li><strong>G (Verde):</strong> Valores 0-255</li>
              <li><strong>B (Azul):</strong> Valores 0-255</li>
              <li><strong>Introducir valores:</strong> Para colores exactos</li>
            </ul>

            <h5>🏪 Colores Personalizados</h5>
            <ul>
              <li><strong>Guardar colores:</strong> Para uso frecuente</li>
              <li><strong>16 espacios disponibles:</strong> Para paleta personal</li>
              <li><strong>Persistencia:</strong> Se mantienen entre sesiones</li>
            </ul>

            <h6>📋 Crear paleta personalizada:</h6>
            <ol>
              <li>Hacer clic en "Editar colores"</li>
              <li>Seleccionar color deseado</li>
              <li>Hacer clic en casilla vacía de "Colores personalizados"</li>
              <li>Hacer clic en "Agregar a colores personalizados"</li>
              <li>Repetir para otros colores</li>
              <li>Hacer clic en "Aceptar"</li>
            </ol>
          </div>

          <h4>🎨 Teoría del Color para Paint</h4>
          <div class="teoria-color">
            <h5>🌈 Colores Básicos y Combinaciones</h5>
            <ul>
              <li><strong>Colores primarios:</strong> Rojo, azul, amarillo</li>
              <li><strong>Colores secundarios:</strong> Verde, naranja, violeta</li>
              <li><strong>Colores neutros:</strong> Negro, blanco, grises</li>
              <li><strong>Colores cálidos:</strong> Rojos, naranjas, amarillos</li>
              <li><strong>Colores fríos:</strong> Azules, verdes, violetas</li>
            </ul>

            <h5>🎯 Combinaciones Efectivas</h5>
            <ul>
              <li><strong>Monocromáticas:</strong> Diferentes tonos del mismo color</li>
              <li><strong>Complementarias:</strong> Colores opuestos (rojo-verde, azul-naranja)</li>
              <li><strong>Análogas:</strong> Colores adyacentes en rueda de color</li>
              <li><strong>Triádicas:</strong> Tres colores equidistantes</li>
            </ul>

            <h5>💡 Consejos para Principiantes</h5>
            <ul>
              <li><strong>Empieza simple:</strong> Usa pocos colores al principio</li>
              <li><strong>Contraste:</strong> Colores claros sobre oscuros y viceversa</li>
              <li><strong>Coherencia:</strong> Mantén paleta consistente en proyecto</li>
              <li><strong>Experimenta:</strong> Prueba combinaciones nuevas</li>
            </ul>
          </div>

          <h4>🔧 Técnicas Avanzadas con Colores</h4>
          <div class="tecnicas-avanzadas-color">
            <h5>🎭 Degradados Manuales</h5>
            <p>Paint no tiene herramienta de degradado automático, pero puedes crearlos manualmente:</p>
            <ol>
              <li>Seleccionar color inicial</li>
              <li>Dibujar primera banda de color</li>
              <li>Seleccionar color intermedio</li>
              <li>Dibujar banda adyacente</li>
              <li>Repetir hasta color final</li>
              <li>Usar pincel para difuminar transiciones</li>
            </ol>

            <h5>🌫️ Efectos de Transparencia</h5>
            <ul>
              <li><strong>Selección transparente:</strong> En herramientas de selección</li>
              <li><strong>Fondo transparente:</strong> Útil para recortes</li>
              <li><strong>Superposición:</strong> Copiar elementos sobre otros</li>
            </ul>

            <h5>🎨 Mezcla de Colores</h5>
            <ul>
              <li><strong>Spray para mezclar:</strong> Crea transiciones suaves</li>
              <li><strong>Pincel superpuesto:</strong> Efectos de transparencia</li>
              <li><strong>Punteado:</strong> Técnica de mezcla óptica</li>
            </ul>
          </div>

          <h4>📚 Proyectos Prácticos con Color</h4>
          <div class="proyectos-color">
            <h5>🌅 Proyecto 1: Paisaje Simple</h5>
            <ul>
              <li>Cielo: Azul claro a azul oscuro</li>
              <li>Sol: Amarillo brillante</li>
              <li>Montañas: Grises y marrones</li>
              <li>Pasto: Verdes variados</li>
            </ul>

            <h5>🏠 Proyecto 2: Casa Colorida</h5>
            <ul>
              <li>Paredes: Color principal fuerte</li>
              <li>Techo: Color complementario</li>
              <li>Detalles: Colores de acento</li>
              <li>Fondo: Colores neutros</li>
            </ul>

            <h5>🌸 Proyecto 3: Flor Abstracta</h5>
            <ul>
              <li>Centro: Color cálido intenso</li>
              <li>Pétalos: Degradado de color</li>
              <li>Hojas: Verdes variados</li>
              <li>Fondo: Color contrastante suave</li>
            </ul>
          </div>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/paleta-colores-paint.jpg",
        infografia: "/images/teoria/teoria-color-basica.png",
        video: "/videos/trabajando-colores-paint.mp4"
      },
      actividades: [
        {
          tipo: "experimentacion",
          pregunta: "Crea tu propia paleta de 8 colores personalizados",
          ayuda: "Usa el editor de colores para crear colores únicos y guárdalos en espacios personalizados"
        },
        {
          tipo: "proyecto",
          pregunta: "Dibuja una puesta de sol usando solo 5 colores",
          ayuda: "Usa amarillos, naranjas y rojos para el sol, azules para el cielo"
        }
      ]
    }
  ],
  recursos: {
    documentos: [
      {
        titulo: "Guía Completa de Paint",
        url: "/docs/guia-completa-paint.pdf",
        tipo: "pdf"
      },
      {
        titulo: "Atajos de Teclado Paint",
        url: "/docs/atajos-paint.pdf", 
        tipo: "pdf"
      },
      {
        titulo: "Teoría del Color para Principiantes",
        url: "/docs/teoria-color-principiantes.pdf",
        tipo: "pdf"
      }
    ],
    enlaces: [
      {
        titulo: "Paint - Soporte Oficial Microsoft",
        url: "https://support.microsoft.com/es-es/windows/paint",
        tipo: "externo"
      },
      {
        titulo: "Galería de Arte Digital",
        url: "https://gallery.paint.net",
        tipo: "externo"
      },
      {
        titulo: "Fundamentos del Diseño Gráfico",
        url: "https://design.tutsplus.com/categories/theory",
        tipo: "externo"
      }
    ],
    videos: [
      {
        titulo: "Introducción Completa a Paint",
        url: "/videos/introduccion-paint-completa.mp4",
        duracion: "15:30"
      },
      {
        titulo: "Dominando las Herramientas",
        url: "/videos/herramientas-paint-detalle.mp4",
        duracion: "12:45"
      },
      {
        titulo: "Trabajando con Colores",
        url: "/videos/colores-paint-avanzado.mp4",
        duracion: "10:20"
      }
    ]
  },
  evaluacion: {
    tipo: "cuestionario",
    preguntas: [
      {
        pregunta: "¿Cuál es la diferencia entre color primario y secundario en Paint?",
        tipo: "opcion_multiple",
        opciones: [
          "No hay diferencia, son lo mismo",
          "Primario se usa con clic izquierdo, secundario con clic derecho",
          "Primario es más brillante que secundario",
          "Solo se puede usar primario para dibujar"
        ],
        respuestaCorrecta: 1
      },
      {
        pregunta: "¿Qué herramienta permite capturar un color existente de la imagen?",
        tipo: "opcion_multiple", 
        opciones: [
          "Pincel",
          "Lápiz",
          "Gotero",
          "Relleno"
        ],
        respuestaCorrecta: 2
      },
      {
        pregunta: "¿Para qué sirve la herramienta de relleno de color?",
        tipo: "opcion_multiple",
        opciones: [
          "Para dibujar líneas gruesas",
          "Para rellenar áreas cerradas con color",
          "Para borrar partes de la imagen",
          "Para crear texto"
        ],
        respuestaCorrecta: 1
      },
      {
        pregunta: "¿Cómo se accede al editor de colores personalizado?",
        tipo: "opcion_multiple",
        opciones: [
          "Clic derecho en cualquier color",
          "Menú Archivo → Colores",
          "Hacer clic en 'Editar colores'",
          "No se puede personalizar colores"
        ],
        respuestaCorrecta: 2
      },
      {
        pregunta: "¿Qué atajo de teclado abre un archivo nuevo en Paint?",
        tipo: "opcion_multiple",
        opciones: [
          "Ctrl + N",
          "Ctrl + A",
          "Ctrl + O", 
          "F1"
        ],
        respuestaCorrecta: 0
      }
    ],
    puntuacionMaxima: 100,
    tiempoEstimado: "10 minutos"
  },
  glosario: [
    {
      termino: "Lienzo",
      definicion: "Área de trabajo en blanco donde se crea la imagen o dibujo."
    },
    {
      termino: "Cinta de opciones",
      definicion: "Interfaz moderna de Paint organizada en pestañas con herramientas agrupadas temáticamente."
    },
    {
      termino: "Color primario",
      definicion: "Color principal que se aplica con el clic izquierdo del ratón."
    },
    {
      termino: "Color secundario", 
      definicion: "Color alternativo que se aplica con el clic derecho del ratón."
    },
    {
      termino: "Gotero",
      definicion: "Herramienta que captura el color de cualquier píxel de la imagen."
    },
    {
      termino: "Relleno",
      definicion: "Herramienta que llena áreas cerradas con el color seleccionado."
    },
    {
      termino: "RGB",
      definicion: "Sistema de colores basado en Rojo, Verde y Azul con valores de 0 a 255."
    },
    {
      termino: "Píxel",
      definicion: "Unidad mínima de una imagen digital, punto individual de color."
    }
  ]
};
