// PowerPoint - Tema 6: Imágenes y formas
// InfoAprende - Estructura modular de contenido educativo

export default {
  id: 6,
  titulo: "Imágenes y formas",
  duracion: "30-35 minutos",
  objetivos: [
    "Insertar y manipular imágenes en presentaciones",
    "Aplicar efectos y estilos a las imágenes",
    "Crear y personalizar formas geométricas",
    "Combinar formas para crear diseños complejos",
    "Organizar y alinear objetos visuales efectivamente"
  ],
  secciones: [
    {
      id: 1,
      titulo: "Insertar y Manipular Imágenes",
      contenido: `
        <h3>🖼️ Trabajar con Imágenes en PowerPoint</h3>
        <p>Las imágenes son elementos fundamentales para crear presentaciones visuales impactantes y facilitar la comprensión del contenido.</p>
        
        <h4>Métodos para insertar imágenes:</h4>
        <ul>
          <li><strong>Desde archivo:</strong> Insertar > Imágenes > Este dispositivo</li>
          <li><strong>Imágenes en línea:</strong> Insertar > Imágenes > Imágenes en línea</li>
          <li><strong>Captura de pantalla:</strong> Insertar > Imágenes > Captura de pantalla</li>
          <li><strong>Arrastrar y soltar:</strong> Desde el explorador de archivos</li>
          <li><strong>Copiar y pegar:</strong> Desde otras aplicaciones</li>
        </ul>

        <div class="tipos-imagenes">
          <h4>📋 Tipos de Archivos de Imagen Compatibles</h4>
          <ul>
            <li><strong>JPG/JPEG:</strong> Ideal para fotografías (tamaño pequeño)</li>
            <li><strong>PNG:</strong> Mejor para gráficos con transparencia</li>
            <li><strong>GIF:</strong> Para imágenes animadas simples</li>
            <li><strong>BMP:</strong> Alta calidad pero archivos grandes</li>
            <li><strong>SVG:</strong> Gráficos vectoriales escalables</li>
          </ul>
        </div>

        <h4>🔧 Operaciones Básicas con Imágenes</h4>
        
        <h5>📏 Redimensionar imágenes:</h5>
        <ul>
          <li><strong>Proporcional:</strong> Arrastra desde las esquinas manteniendo Shift</li>
          <li><strong>Libre:</strong> Arrastra desde los lados (puede deformar)</li>
          <li><strong>Tamaño exacto:</strong> Formato > Tamaño > introducir medidas</li>
        </ul>

        <h5>📍 Posicionar imágenes:</h5>
        <ul>
          <li><strong>Arrastrar:</strong> Selecciona y mueve a la posición deseada</li>
          <li><strong>Teclas de flecha:</strong> Movimiento pixel por pixel</li>
          <li><strong>Alineación:</strong> Formato > Alinear > opciones de alineación</li>
        </ul>

        <h5>🔄 Rotar imágenes:</h5>
        <ul>
          <li><strong>Controlador de rotación:</strong> Círculo verde en la parte superior</li>
          <li><strong>Rotación predefinida:</strong> Formato > Rotar > opciones</li>
          <li><strong>Voltear:</strong> Horizontal o verticalmente</li>
        </ul>

        <div class="recortar-imagenes">
          <h4>✂️ Recortar Imágenes</h4>
          <p>Para mostrar solo una parte específica de la imagen:</p>
          <ol>
            <li>Selecciona la imagen</li>
            <li>Ve a <strong>Formato de imagen</strong> > <strong>Recortar</strong></li>
            <li>Arrastra los controladores negros para definir el área</li>
            <li>Haz clic fuera de la imagen para aplicar el recorte</li>
          </ol>
          
          <p>Opciones avanzadas de recorte:</p>
          <ul>
            <li><strong>Recortar a forma:</strong> Adaptar a formas geométricas</li>
            <li><strong>Relación de aspecto:</strong> Mantener proporciones específicas</li>
            <li><strong>Ajustar y rellenar:</strong> Optimizar para el espacio disponible</li>
          </ul>
        </div>

        <div class="optimizar-imagenes">
          <h4>⚡ Optimizar Imágenes</h4>
          <p>Para reducir el tamaño del archivo de presentación:</p>
          <ol>
            <li>Selecciona una imagen</li>
            <li>Ve a <strong>Formato de imagen</strong> > <strong>Comprimir imágenes</strong></li>
            <li>Configura las opciones de compresión</li>
            <li>Selecciona la resolución apropiada para el uso</li>
          </ol>
          
          <ul>
            <li><strong>Correo electrónico:</strong> 96 ppi (menor calidad, menor tamaño)</li>
            <li><strong>Web:</strong> 150 ppi (calidad media)</li>
            <li><strong>Impresión:</strong> 220 ppi (alta calidad)</li>
            <li><strong>Sin cambios:</strong> Resolución original</li>
          </ul>
        </div>
      `,
      actividades: [
        {
          tipo: "practica",
          pregunta: "Inserta una imagen, redimensiónala manteniendo proporciones, recórtala para mostrar solo la parte central y optimízala para web",
          ayuda: "Usa Shift mientras arrastras las esquinas para mantener proporciones, y accede a las herramientas desde la pestaña Formato de imagen"
        }
      ]
    },
    {
      id: 2,
      titulo: "Efectos y Estilos de Imagen",
      contenido: `
        <h3>🎨 Aplicar Efectos Visuales a Imágenes</h3>
        <p>PowerPoint ofrece múltiples herramientas para mejorar la apariencia de las imágenes y hacer que se integren perfectamente con el diseño de la presentación.</p>
        
        <h4>Estilos de imagen predefinidos:</h4>
        <p>Accede a través de <strong>Formato de imagen</strong> > <strong>Estilos de imagen</strong>:</p>
        <ul>
          <li><strong>Marco simple:</strong> Bordes básicos en diferentes colores</li>
          <li><strong>Marco suave:</strong> Bordes con esquinas redondeadas</li>
          <li><strong>Marco metálico:</strong> Efectos 3D y metálicos</li>
          <li><strong>Marco con sombra:</strong> Proyección de sombra para profundidad</li>
          <li><strong>Marco con reflejo:</strong> Efecto espejo en la parte inferior</li>
        </ul>

        <div class="efectos-imagen">
          <h4>✨ Efectos Individuales</h4>
          
          <h5>🌫️ Sombras</h5>
          <ul>
            <li><strong>Exterior:</strong> Sombra proyectada hacia afuera</li>
            <li><strong>Interior:</strong> Sombra dentro de la imagen</li>
            <li><strong>Perspectiva:</strong> Sombra con efecto 3D</li>
          </ul>

          <h5>🪞 Reflejos</h5>
          <ul>
            <li><strong>Variaciones de proximidad:</strong> Muy cerca, cerca, medio, lejos</li>
            <li><strong>Transparencia variable:</strong> Control de opacidad del reflejo</li>
          </ul>

          <h5>💫 Iluminado</h5>
          <ul>
            <li><strong>Colores de acento:</strong> Resplandor en colores del tema</li>
            <li><strong>Colores personalizados:</strong> Resplandor en cualquier color</li>
            <li><strong>Variaciones de tamaño:</strong> Pequeño, mediano, grande</li>
          </ul>

          <h5>📐 Bordes suaves</h5>
          <ul>
            <li><strong>Desvanecimiento gradual:</strong> Bordes que se difuminan</li>
            <li><strong>Control de intensidad:</strong> Desde sutil hasta pronunciado</li>
          </ul>

          <h5>🔲 Bisel</h5>
          <ul>
            <li><strong>Efectos 3D:</strong> Apariencia de relieve</li>
            <li><strong>Diferentes ángulos:</strong> Superior, inferior, circular</li>
          </ul>

          <h5>🎭 Rotación 3D</h5>
          <ul>
            <li><strong>Rotaciones predefinidas:</strong> Perspectivas comunes</li>
            <li><strong>Rotación personalizada:</strong> Control total de ángulos</li>
          </ul>
        </div>

        <h4>🎛️ Ajustes de Imagen</h4>
        <p>Modifica la apariencia básica de la imagen:</p>
        
        <h5>🔧 Correcciones:</h5>
        <ul>
          <li><strong>Brillo:</strong> Hacer la imagen más clara u oscura</li>
          <li><strong>Contraste:</strong> Diferencia entre luces y sombras</li>
          <li><strong>Nitidez:</strong> Definición de bordes y detalles</li>
        </ul>

        <h5>🌈 Color:</h5>
        <ul>
          <li><strong>Saturación:</strong> Intensidad de los colores</li>
          <li><strong>Tono:</strong> Temperatura de color (cálido/frío)</li>
          <li><strong>Recolorear:</strong> Aplicar filtros de color</li>
          <li><strong>Escala de grises:</strong> Convertir a blanco y negro</li>
        </ul>

        <h5>🎨 Efectos artísticos:</h5>
        <ul>
          <li><strong>Desenfoque:</strong> Efecto borroso</li>
          <li><strong>Pinceladas:</strong> Apariencia de pintura</li>
          <li><strong>Boceto:</strong> Efecto de dibujo a lápiz</li>
          <li><strong>Película:</strong> Efectos de vintage</li>
        </ul>

        <div class="personalizar-efectos">
          <h4>⚙️ Personalización Avanzada</h4>
          <p>Para control preciso sobre los efectos:</p>
          <ol>
            <li>Selecciona la imagen</li>
            <li>Clic derecho > <strong>Formato de imagen</strong></li>
            <li>Usa el panel lateral para ajustar parámetros específicos</li>
            <li>Combina múltiples efectos para resultados únicos</li>
          </ol>
        </div>

        <div class="transparencia-imagenes">
          <h4>👻 Trabajar con Transparencia</h4>
          <p>Para crear efectos de superposición:</p>
          <ul>
            <li><strong>Transparencia general:</strong> Formato > Transparencia</li>
            <li><strong>Color transparente:</strong> Remover color específico</li>
            <li><strong>Fondos transparentes:</strong> Usar imágenes PNG</li>
          </ul>
        </div>
      `,
      actividades: [
        {
          tipo: "creativo",
          pregunta: "Toma una imagen y aplica al menos tres efectos diferentes: sombra, reflejo e iluminado. Experimenta con los ajustes de color y brillo",
          ayuda: "Usa el panel Formato de imagen para combinar efectos y ajustar sus parámetros individualmente"
        }
      ]
    },
    {
      id: 3,
      titulo: "Formas Geométricas",
      contenido: `
        <h3>📐 Crear y Personalizar Formas</h3>
        <p>Las formas geométricas son elementos versátiles para crear diagramas, destacar información y mejorar el diseño visual de las presentaciones.</p>
        
        <h4>Insertar formas:</h4>
        <ol>
          <li>Ve a <strong>Insertar</strong> > <strong>Formas</strong></li>
          <li>Selecciona la forma deseada de la galería</li>
          <li>Haz clic y arrastra en la diapositiva para dibujar</li>
          <li>Suelta para completar la forma</li>
        </ol>

        <div class="categorias-formas">
          <h4>📚 Categorías de Formas</h4>
          
          <h5>🔲 Formas básicas:</h5>
          <ul>
            <li>Rectángulo, círculo, triángulo</li>
            <li>Paralelogramo, trapecio, diamante</li>
            <li>Pentágono, hexágono, octágono</li>
          </ul>

          <h5>➡️ Flechas de bloque:</h5>
          <ul>
            <li>Flecha derecha, izquierda, arriba, abajo</li>
            <li>Flechas curvadas y dobladas</li>
            <li>Flechas de proceso y cinta</li>
          </ul>

          <h5>🎛️ Símbolos de ecuación:</h5>
          <ul>
            <li>Más, menos, multiplicación, división</li>
            <li>Igual, no igual, mayor que, menor que</li>
          </ul>

          <h5>📊 Diagramas de flujo:</h5>
          <ul>
            <li>Proceso, decisión, documento</li>
            <li>Datos, conector, terminal</li>
            <li>Subproceso, proceso predefinido</li>
          </ul>

          <h5>🌟 Formas de estrella y cintas:</h5>
          <ul>
            <li>Estrellas de 4 a 32 puntas</li>
            <li>Cintas horizontales y verticales</li>
            <li>Explosiones y llamadas</li>
          </ul>

          <h5>💬 Llamadas:</h5>
          <ul>
            <li>Globos de texto rectangulares y ovalados</li>
            <li>Globos con líneas de conexión</li>
            <li>Llamadas de nube</li>
          </ul>
        </div>

        <h4>🔧 Manipular Formas</h4>
        
        <h5>📏 Redimensionar:</h5>
        <ul>
          <li><strong>Proporcional:</strong> Shift + arrastrar esquinas</li>
          <li><strong>Desde el centro:</strong> Ctrl + arrastrar</li>
          <li><strong>Tamaño exacto:</strong> Panel Formato > Tamaño</li>
        </ul>

        <h5>🔄 Rotar y voltear:</h5>
        <ul>
          <li><strong>Rotación libre:</strong> Controlador circular verde</li>
          <li><strong>Rotación exacta:</strong> Formato > Rotar > Más opciones de rotación</li>
          <li><strong>Voltear:</strong> Horizontal o verticalmente</li>
        </ul>

        <h5>🎨 Formato de formas:</h5>
        <ul>
          <li><strong>Relleno:</strong> Color sólido, degradado, textura, imagen</li>
          <li><strong>Contorno:</strong> Color, grosor, estilo de línea</li>
          <li><strong>Efectos:</strong> Sombra, reflejo, iluminado, bisel, rotación 3D</li>
        </ul>

        <div class="puntos-control">
          <h4>🎯 Puntos de Control Amarillos</h4>
          <p>Muchas formas tienen puntos de control especiales (amarillos) que permiten:</p>
          <ul>
            <li><strong>Ajustar proporciones:</strong> Modificar partes específicas de la forma</li>
            <li><strong>Cambiar curvatura:</strong> En formas redondeadas</li>
            <li><strong>Modificar ángulos:</strong> En flechas y llamadas</li>
            <li><strong>Personalizar diseño:</strong> Adaptar la forma al contenido</li>
          </ul>
          
          <p>Simplemente arrastra estos puntos para personalizar la forma.</p>
        </div>

        <div class="texto-en-formas">
          <h4>📝 Agregar Texto a Formas</h4>
          <p>Las formas pueden contener texto directamente:</p>
          <ol>
            <li>Haz clic derecho en la forma</li>
            <li>Selecciona <strong>Modificar texto</strong> o simplemente haz doble clic</li>
            <li>Escribe el texto deseado</li>
            <li>Formatea el texto usando las herramientas de fuente</li>
          </ol>
          
          <p>El texto se ajusta automáticamente dentro de la forma y se mueve con ella.</p>
        </div>
      `,
      actividades: [
        {
          tipo: "practica",
          pregunta: "Crea un diagrama simple usando al menos 4 formas diferentes: un rectángulo con texto, una flecha, un círculo y una forma de llamada",
          ayuda: "Usa Insertar > Formas, agrega texto haciendo doble clic en las formas, y conecta elementos con flechas"
        }
      ]
    },
    {
      id: 4,
      titulo: "Organización y Alineación",
      contenido: `
        <h3>📐 Organizar Objetos Visuales</h3>
        <p>La organización precisa de imágenes y formas es crucial para crear presentaciones profesionales y visualmente atractivas.</p>
        
        <h4>Herramientas de alineación:</h4>
        <p>Accede a través de <strong>Formato</strong> > <strong>Alinear</strong> (con objetos seleccionados):</p>
        
        <h5>🎯 Alineación básica:</h5>
        <ul>
          <li><strong>Alinear a la izquierda:</strong> Bordes izquierdos en línea</li>
          <li><strong>Centrar:</strong> Centros horizontales alineados</li>
          <li><strong>Alinear a la derecha:</strong> Bordes derechos en línea</li>
          <li><strong>Alinear arriba:</strong> Bordes superiores en línea</li>
          <li><strong>Alinear al medio:</strong> Centros verticales alineados</li>
          <li><strong>Alinear abajo:</strong> Bordes inferiores en línea</li>
        </ul>

        <h5>📏 Distribución:</h5>
        <ul>
          <li><strong>Distribuir horizontalmente:</strong> Espaciado uniforme horizontal</li>
          <li><strong>Distribuir verticalmente:</strong> Espaciado uniforme vertical</li>
        </ul>

        <div class="referencia-alineacion">
          <h4>🎚️ Referencia de Alineación</h4>
          <p>Configura respecto a qué alinear los objetos:</p>
          <ul>
            <li><strong>Alinear objetos seleccionados:</strong> Entre sí (predeterminado)</li>
            <li><strong>Alinear a la diapositiva:</strong> Respecto a los bordes de la diapositiva</li>
            <li><strong>Alinear al margen:</strong> Respecto a los márgenes de impresión</li>
          </ul>
        </div>

        <h4>📚 Orden y Capas</h4>
        <p>Controla qué objetos aparecen delante o detrás de otros:</p>
        
        <h5>🔝 Traer al frente:</h5>
        <ul>
          <li><strong>Traer al frente:</strong> Coloca el objeto en la capa superior</li>
          <li><strong>Traer adelante:</strong> Mueve una capa hacia adelante</li>
        </ul>

        <h5>🔽 Enviar atrás:</h5>
        <ul>
          <li><strong>Enviar atrás:</strong> Coloca el objeto en la capa inferior</li>
          <li><strong>Enviar hacia atrás:</strong> Mueve una capa hacia atrás</li>
        </ul>

        <div class="agrupacion">
          <h4>🤝 Agrupar Objetos</h4>
          <p>Combina múltiples objetos para manipularlos como uno solo:</p>
          
          <h5>➕ Crear grupo:</h5>
          <ol>
            <li>Selecciona múltiples objetos (Ctrl + clic)</li>
            <li>Clic derecho > <strong>Agrupar</strong> > <strong>Agrupar</strong></li>
            <li>O usa Formato > <strong>Agrupar</strong> > <strong>Agrupar</strong></li>
          </ol>

          <h5>➖ Desagrupar:</h5>
          <ol>
            <li>Selecciona el grupo</li>
            <li>Clic derecho > <strong>Agrupar</strong> > <strong>Desagrupar</strong></li>
            <li>Los objetos vuelven a ser independientes</li>
          </ol>

          <h5>🔄 Reagrupar:</h5>
          <p>Restaura agrupaciones previas fácilmente con la opción <strong>Reagrupar</strong>.</p>
        </div>

        <h4>🧲 Guías y Cuadrícula</h4>
        <p>Herramientas visuales para alineación precisa:</p>
        
        <h5>📋 Activar guías:</h5>
        <ol>
          <li>Ve a <strong>Vista</strong> > marcar <strong>Guías</strong></li>
          <li>Aparecen líneas de guía en el centro de la diapositiva</li>
          <li>Arrastra desde las reglas para crear guías personalizadas</li>
        </ol>

        <h5>⚏ Activar cuadrícula:</h5>
        <ol>
          <li>Ve a <strong>Vista</strong> > marcar <strong>Líneas de cuadrícula</strong></li>
          <li>Aparece una cuadrícula de puntos para alineación</li>
          <li>Los objetos se "ajustan" automáticamente a la cuadrícula</li>
        </ol>

        <h5>🧲 Ajustar a objetos:</h5>
        <p>En <strong>Vista</strong> > <strong>Ajustar</strong>:</p>
        <ul>
          <li><strong>Ajustar a la cuadrícula:</strong> Objetos se alinean a puntos de cuadrícula</li>
          <li><strong>Ajustar a los objetos:</strong> Objetos se alinean entre sí automáticamente</li>
        </ul>

        <div class="seleccion-multiple">
          <h4>🎯 Técnicas de Selección Múltiple</h4>
          
          <h5>🖱️ Métodos de selección:</h5>
          <ul>
            <li><strong>Ctrl + clic:</strong> Seleccionar objetos individuales</li>
            <li><strong>Arrastrar área:</strong> Dibujar rectángulo de selección</li>
            <li><strong>Ctrl + A:</strong> Seleccionar todos los objetos</li>
            <li><strong>Panel de selección:</strong> Inicio > Seleccionar > Panel de selección</li>
          </ul>

          <h5>👁️ Panel de selección:</h5>
          <p>Permite:</p>
          <ul>
            <li>Ver lista de todos los objetos</li>
            <li>Seleccionar objetos por nombre</li>
            <li>Mostrar/ocultar objetos individuales</li>
            <li>Cambiar orden de capas</li>
            <li>Renombrar objetos para mejor organización</li>
          </ul>
        </div>

        <div class="consejos-organizacion">
          <h4>💡 Consejos de Organización</h4>
          <ul>
            <li><strong>Planifica primero:</strong> Bosqueja el diseño antes de crear</li>
            <li><strong>Usa guías:</strong> Para alineaciones consistentes</li>
            <li><strong>Agrupa elementos relacionados:</strong> Facilita futuras ediciones</li>
            <li><strong>Nombra objetos:</strong> En el panel de selección para mejor organización</li>
            <li><strong>Mantén consistencia:</strong> Espaciados y alineaciones uniformes</li>
            <li><strong>Prueba diferentes ordenamientos:</strong> Experimenta con capas</li>
          </ul>
        </div>
      `,
      actividades: [
        {
          tipo: "proyecto",
          pregunta: "Crea un diagrama organizacional con 6 formas: 3 en nivel superior alineadas horizontalmente, y 3 en nivel inferior. Usa guías para alineación perfecta y agrupa cada nivel por separado",
          ayuda: "Activa Vista > Guías, usa las herramientas de alineación y distribución, y agrupa objetos relacionados"
        }
      ]
    }
  ],
  recursos: [
    {
      tipo: "galeria",
      titulo: "Galería de Imágenes Libres",
      descripcion: "Colección de imágenes sin derechos de autor para usar en presentaciones"
    },
    {
      tipo: "plantilla",
      titulo: "Plantillas de Diagramas",
      descripcion: "Diagramas prediseñados con formas para diferentes tipos de presentaciones"
    },
    {
      tipo: "tutorial",
      titulo: "Optimización de Imágenes",
      descripcion: "Guía para optimizar imágenes sin perder calidad visual"
    },
    {
      tipo: "guia",
      titulo: "Principios de Diseño Visual",
      descripcion: "Fundamentos de composición y organización visual en presentaciones"
    }
  ],
  evaluacion: {
    preguntas: [
      {
        tipo: "multiple",
        pregunta: "¿Cuál es la mejor práctica para redimensionar una imagen manteniendo sus proporciones?",
        opciones: [
          "Arrastrar desde cualquier lado",
          "Arrastrar desde las esquinas manteniendo Shift",
          "Usar solo las herramientas de tamaño exacto",
          "Arrastrar desde el centro"
        ],
        respuestaCorrecta: 1,
        explicacion: "Arrastrar desde las esquinas mientras se mantiene presionada la tecla Shift preserva las proporciones originales de la imagen."
      },
      {
        tipo: "multiple",
        pregunta: "¿Para qué sirven los puntos de control amarillos en las formas?",
        opciones: [
          "Para cambiar el color de la forma",
          "Para rotar la forma",
          "Para personalizar partes específicas de la forma",
          "Para duplicar la forma"
        ],
        respuestaCorrecta: 2,
        explicacion: "Los puntos de control amarillos permiten modificar características específicas de la forma como curvatura, ángulos o proporciones."
      },
      {
        tipo: "verdadero-falso",
        pregunta: "Las formas pueden contener texto directamente sin necesidad de cuadros de texto adicionales.",
        respuestaCorrecta: true,
        explicacion: "Las formas en PowerPoint pueden contener texto directamente. Solo hay que hacer doble clic en la forma o usar 'Modificar texto'."
      },
      {
        tipo: "multiple",
        pregunta: "¿Qué función permite mover un objeto una capa hacia adelante sin llevarlo completamente al frente?",
        opciones: [
          "Traer al frente",
          "Traer adelante",
          "Enviar atrás",
          "Enviar hacia atrás"
        ],
        respuestaCorrecta: 1,
        explicacion: "'Traer adelante' mueve el objeto una sola capa hacia el frente, mientras que 'Traer al frente' lo coloca en la capa superior."
      },
      {
        tipo: "completar",
        pregunta: "Para seleccionar múltiples objetos individualmente se debe mantener presionada la tecla _______ mientras se hace clic en cada objeto.",
        respuestaCorrecta: "Ctrl",
        explicacion: "La tecla Ctrl permite seleccionar múltiples objetos individuales haciendo clic en cada uno mientras se mantiene presionada."
      }
    ],
    puntuacionTotal: 100,
    puntuacionAprobacion: 70
  }
};
