// PowerPoint - Tema 5: Texto
// InfoAprende - Estructura modular de contenido educativo

export default {
  id: 5,
  titulo: "Texto",
  duracion: "25-30 minutos",
  objetivos: [
    "Dominar las herramientas de formato de texto en PowerPoint",
    "Aplicar estilos y efectos visuales al texto",
    "Organizar información con listas y viñetas",
    "Utilizar cuadros de texto para diseños flexibles",
    "Implementar buenas prácticas de tipografía en presentaciones"
  ],
  secciones: [
    {
      id: 1,
      titulo: "Formato Básico de Texto",
      contenido: `
        <h3>✏️ Herramientas de Formato de Texto</h3>
        <p>PowerPoint ofrece herramientas completas para dar formato al texto y crear presentaciones visualmente atractivas y profesionales.</p>
        
        <h4>Opciones de formato básico:</h4>
        <ul>
          <li><strong>Fuente:</strong> Tipo, tamaño y estilo de letra</li>
          <li><strong>Color:</strong> Color del texto y resaltado</li>
          <li><strong>Estilo:</strong> Negrita, cursiva, subrayado</li>
          <li><strong>Efectos:</strong> Tachado, superíndice, subíndice</li>
          <li><strong>Espaciado:</strong> Entre caracteres y líneas</li>
        </ul>

        <div class="acceso-formato">
          <h4>🎛️ Acceder a Herramientas de Formato</h4>
          <p>Puedes formatear texto de varias maneras:</p>
          <ul>
            <li><strong>Cinta de opciones:</strong> Pestaña Inicio > grupo Fuente</li>
            <li><strong>Panel de formato:</strong> Clic derecho > Formato de texto</li>
            <li><strong>Mini barra de herramientas:</strong> Aparece al seleccionar texto</li>
            <li><strong>Atajos de teclado:</strong> Ctrl+B (negrita), Ctrl+I (cursiva), etc.</li>
          </ul>
        </div>

        <h4>📏 Tamaños de Fuente Recomendados</h4>
        <ul>
          <li><strong>Títulos principales:</strong> 44-48 puntos</li>
          <li><strong>Subtítulos:</strong> 36-40 puntos</li>
          <li><strong>Texto del cuerpo:</strong> 24-32 puntos</li>
          <li><strong>Notas y pie de página:</strong> 18-20 puntos (mínimo)</li>
        </ul>

        <div class="tip-legibilidad">
          <h4>👁️ Consejos de Legibilidad</h4>
          <ul>
            <li>Usa fuentes sans-serif para presentaciones (Arial, Calibri, Tahoma)</li>
            <li>Contrasta colores: texto oscuro en fondo claro o viceversa</li>
            <li>Evita más de 2-3 fuentes diferentes en la misma presentación</li>
            <li>Mantén consistencia en el formato a lo largo de la presentación</li>
          </ul>
        </div>
      `,
      actividades: [
        {
          tipo: "practica",
          pregunta: "Formatea un párrafo aplicando diferentes tamaños de fuente, colores y estilos (negrita, cursiva)",
          ayuda: "Experimenta con la mini barra de herramientas que aparece al seleccionar texto"
        }
      ]
    },
    {
      id: 2,
      titulo: "Listas y Viñetas",
      contenido: `
        <h3>📋 Crear y Formatear Listas</h3>
        <p>Las listas son fundamentales para organizar información de manera clara y facilitar la comprensión del contenido.</p>
        
        <h4>Tipos de listas:</h4>
        <ul>
          <li><strong>Listas con viñetas:</strong> Para elementos sin orden específico</li>
          <li><strong>Listas numeradas:</strong> Para pasos, procedimientos o jerarquías</li>
          <li><strong>Listas multinivel:</strong> Para organizar información compleja</li>
        </ul>

        <div class="crear-listas">
          <h4>➕ Crear Listas</h4>
          <p>Métodos para crear listas:</p>
          <ol>
            <li><strong>Automático:</strong> Escribe "1." o "*" y presiona Espacio</li>
            <li><strong>Botones:</strong> Inicio > Viñetas o Numeración</li>
            <li><strong>Durante escritura:</strong> PowerPoint detecta patrones de lista</li>
          </ol>
        </div>

        <h4>🎨 Personalizar Viñetas</h4>
        <p>Para cambiar el estilo de viñetas:</p>
        <ol>
          <li>Selecciona la lista</li>
          <li>Haz clic en la flecha junto al botón <strong>Viñetas</strong></li>
          <li>Elige un estilo predefinido o selecciona <strong>Viñetas y numeración</strong></li>
          <li>Personaliza símbolo, color, tamaño</li>
        </ol>

        <div class="listas-multinivel">
          <h4>📊 Listas Multinivel</h4>
          <p>Para crear jerarquías de información:</p>
          <ul>
            <li><strong>Aumentar sangría:</strong> Tab o botón "Aumentar nivel de lista"</li>
            <li><strong>Disminuir sangría:</strong> Shift+Tab o botón "Disminuir nivel de lista"</li>
            <li><strong>Cambiar entre niveles:</strong> Usar los botones de sangría</li>
          </ul>
          
          <p>Ejemplo de estructura multinivel:</p>
          <div class="ejemplo-multinivel">
            <p>1. Tema principal</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;a. Subtema</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i. Detalle específico</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;b. Otro subtema</p>
            <p>2. Segundo tema principal</p>
          </div>
        </div>

        <div class="buenas-practicas-listas">
          <h4>✅ Buenas Prácticas para Listas</h4>
          <ul>
            <li>Mantén elementos paralelos en estructura gramatical</li>
            <li>Usa listas numeradas para secuencias o prioridades</li>
            <li>Limita a 5-7 elementos por lista para mejor retención</li>
            <li>Usa sangría consistente en listas multinivel</li>
            <li>Evita listas demasiado largas en una sola diapositiva</li>
          </ul>
        </div>
      `,
      actividades: [
        {
          tipo: "practica",
          pregunta: "Crea una lista multinivel de 3 niveles sobre los pasos para preparar una presentación",
          ayuda: "Usa Tab para aumentar nivel y Shift+Tab para disminuir nivel de sangría"
        }
      ]
    },
    {
      id: 3,
      titulo: "Cuadros de Texto",
      contenido: `
        <h3>📦 Trabajar con Cuadros de Texto</h3>
        <p>Los cuadros de texto ofrecen flexibilidad total para posicionar texto en cualquier lugar de la diapositiva, más allá de los marcadores de posición predefinidos.</p>
        
        <h4>Insertar cuadros de texto:</h4>
        <ol>
          <li>Ve a la pestaña <strong>Insertar</strong></li>
          <li>En el grupo <strong>Texto</strong>, haz clic en <strong>Cuadro de texto</strong></li>
          <li>Haz clic donde quieras insertar el cuadro</li>
          <li>Escribe el texto deseado</li>
        </ol>

        <div class="tipos-cuadros">
          <h4>📝 Tipos de Cuadros de Texto</h4>
          <ul>
            <li><strong>Cuadro simple:</strong> Un clic para insertar en posición específica</li>
            <li><strong>Cuadro con tamaño:</strong> Arrastra para definir tamaño exacto</li>
            <li><strong>Cuadro ajustable:</strong> Se expande automáticamente con el contenido</li>
          </ul>
        </div>

        <h4>🔧 Manipular Cuadros de Texto</h4>
        <p>Operaciones comunes con cuadros de texto:</p>
        <ul>
          <li><strong>Mover:</strong> Selecciona el borde y arrastra</li>
          <li><strong>Redimensionar:</strong> Arrastra los controladores de tamaño</li>
          <li><strong>Rotar:</strong> Usa el controlador de rotación circular</li>
          <li><strong>Copiar:</strong> Ctrl+C y Ctrl+V para duplicar</li>
          <li><strong>Eliminar:</strong> Selecciona el borde y presiona Suprimir</li>
        </ul>

        <div class="formato-cuadros">
          <h4>🎨 Formato de Cuadros de Texto</h4>
          <p>Personaliza la apariencia del cuadro:</p>
          <ul>
            <li><strong>Relleno:</strong> Color de fondo del cuadro</li>
            <li><strong>Contorno:</strong> Borde del cuadro (color, grosor, estilo)</li>
            <li><strong>Efectos:</strong> Sombras, reflejos, iluminado</li>
            <li><strong>Transparencia:</strong> Nivel de opacidad</li>
          </ul>
          
          <p>Acceso al formato:</p>
          <ol>
            <li>Selecciona el cuadro de texto</li>
            <li>Clic derecho > <strong>Formato de forma</strong></li>
            <li>O usa la pestaña <strong>Formato de forma</strong> que aparece</li>
          </ol>
        </div>

        <h4>📐 Alineación y Distribución</h4>
        <p>Para organizar múltiples cuadros de texto:</p>
        <ul>
          <li><strong>Alinear:</strong> Selecciona varios cuadros > Formato > Alinear</li>
          <li><strong>Distribuir:</strong> Espaciado uniforme entre cuadros</li>
          <li><strong>Agrupar:</strong> Combinar cuadros para mover juntos</li>
        </ul>

        <div class="usos-cuadros">
          <h4>🎯 Usos Estratégicos de Cuadros de Texto</h4>
          <ul>
            <li><strong>Citas destacadas:</strong> Frases importantes con formato especial</li>
            <li><strong>Etiquetas:</strong> Identificar elementos en imágenes o diagramas</li>
            <li><strong>Notas marginales:</strong> Información complementaria</li>
            <li><strong>Títulos creativos:</strong> Encabezados con posición personalizada</li>
            <li><strong>Callouts:</strong> Globos explicativos</li>
          </ul>
        </div>
      `,
      actividades: [
        {
          tipo: "practica",
          pregunta: "Crea tres cuadros de texto con diferentes formatos: uno con fondo de color, otro con borde decorativo y uno con efecto de sombra",
          ayuda: "Usa clic derecho > Formato de forma para acceder a todas las opciones de personalización"
        }
      ]
    },
    {
      id: 4,
      titulo: "Efectos de Texto",
      contenido: `
        <h3>✨ Aplicar Efectos Visuales al Texto</h3>
        <p>Los efectos de texto pueden hacer que tus presentaciones sean más impactantes y profesionales, pero deben usarse con moderación para mantener la legibilidad.</p>
        
        <h4>Tipos de efectos disponibles:</h4>
        <ul>
          <li><strong>WordArt:</strong> Texto decorativo con estilos predefinidos</li>
          <li><strong>Efectos de texto:</strong> Sombras, reflejos, iluminado, bordes</li>
          <li><strong>Transformaciones:</strong> Deformaciones y formas especiales</li>
          <li><strong>Rellenos especiales:</strong> Degradados, texturas, imágenes</li>
        </ul>

        <div class="aplicar-wordart">
          <h4>🎨 Crear WordArt</h4>
          <p>Para insertar texto decorativo:</p>
          <ol>
            <li>Ve a <strong>Insertar</strong> > <strong>Texto</strong> > <strong>WordArt</strong></li>
            <li>Selecciona un estilo de la galería</li>
            <li>Escribe el texto en el cuadro que aparece</li>
            <li>Personaliza usando las herramientas de formato</li>
          </ol>
        </div>

        <h4>🔮 Efectos de Texto Avanzados</h4>
        <p>Para aplicar efectos a texto existente:</p>
        <ol>
          <li>Selecciona el texto</li>
          <li>Ve a <strong>Inicio</strong> > <strong>Efectos de texto</strong> (ícono "A" con efectos)</li>
          <li>Elige el efecto deseado o selecciona <strong>Más efectos</strong></li>
        </ol>

        <div class="tipos-efectos">
          <h4>📋 Catálogo de Efectos</h4>
          
          <h5>🌟 Sombras</h5>
          <ul>
            <li><strong>Exterior:</strong> Sombra proyectada hacia afuera</li>
            <li><strong>Interior:</strong> Sombra dentro del texto</li>
            <li><strong>Perspectiva:</strong> Sombra con efecto 3D</li>
          </ul>

          <h5>🪞 Reflejos</h5>
          <ul>
            <li><strong>Variaciones de proximidad:</strong> Muy cerca, cerca, medio, lejos</li>
            <li><strong>Transparencia variable:</strong> De opaco a transparente</li>
          </ul>

          <h5>💡 Iluminado</h5>
          <ul>
            <li><strong>Variaciones de color:</strong> Diferentes tonos de resplandor</li>
            <li><strong>Tamaños:</strong> Pequeño, mediano, grande</li>
          </ul>

          <h5>🎭 Transformaciones</h5>
          <ul>
            <li><strong>Seguir trayecto:</strong> Arco, círculo, onda</li>
            <li><strong>Deformar:</strong> Inflado, perspectiva, cascada</li>
          </ul>
        </div>

        <h4>🎛️ Personalización Avanzada</h4>
        <p>Para control total sobre los efectos:</p>
        <ol>
          <li>Selecciona el texto con efectos</li>
          <li>Clic derecho > <strong>Formato de efectos de texto</strong></li>
          <li>Ajusta parámetros específicos como:</li>
          <ul>
            <li>Color y transparencia</li>
            <li>Tamaño y difuminado</li>
            <li>Ángulo y distancia</li>
            <li>Intensidad y brillo</li>
          </ul>
        </ol>

        <div class="buenas-practicas-efectos">
          <h4>⚠️ Buenas Prácticas con Efectos</h4>
          <ul>
            <li><strong>Moderación:</strong> Menos es más, evita sobrecargar</li>
            <li><strong>Consistencia:</strong> Usa efectos similares en toda la presentación</li>
            <li><strong>Legibilidad:</strong> Asegúrate de que el texto siga siendo legible</li>
            <li><strong>Contexto:</strong> Los efectos deben apoyar el mensaje, no distraer</li>
            <li><strong>Audiencia:</strong> Considera la formalidad del contexto</li>
          </ul>
        </div>

        <div class="cuando-usar-efectos">
          <h4>🎯 Cuándo Usar Efectos de Texto</h4>
          <ul>
            <li><strong>Títulos principales:</strong> Para dar impacto visual</li>
            <li><strong>Palabras clave:</strong> Para resaltar conceptos importantes</li>
            <li><strong>Branding:</strong> Para mantener identidad visual corporativa</li>
            <li><strong>Presentaciones creativas:</strong> En contextos informales o artísticos</li>
          </ul>
        </div>
      `,
      actividades: [
        {
          tipo: "creativo",
          pregunta: "Crea un título impactante usando WordArt y aplica al menos tres efectos diferentes (sombra, reflejo, iluminado) manteniendo la legibilidad",
          ayuda: "Experimenta con diferentes combinaciones pero asegúrate de que el texto sea fácil de leer"
        }
      ]
    }
  ],
  recursos: [
    {
      tipo: "guia",
      titulo: "Guía de Tipografía para Presentaciones",
      descripcion: "Principios de selección y uso de fuentes en presentaciones profesionales"
    },
    {
      tipo: "plantilla",
      titulo: "Plantillas de Formato de Texto",
      descripcion: "Ejemplos de formatos efectivos para diferentes tipos de contenido"
    },
    {
      tipo: "checklist",
      titulo: "Lista de Verificación de Legibilidad",
      descripcion: "Puntos clave para asegurar que el texto sea legible y efectivo"
    },
    {
      tipo: "tutorial",
      titulo: "Efectos de Texto Profesionales",
      descripcion: "Tutorial para crear efectos de texto impactantes sin sacrificar legibilidad"
    }
  ],
  evaluacion: {
    preguntas: [
      {
        tipo: "multiple",
        pregunta: "¿Cuál es el tamaño mínimo recomendado para texto del cuerpo en presentaciones?",
        opciones: [
          "18 puntos",
          "24 puntos",
          "32 puntos",
          "36 puntos"
        ],
        respuestaCorrecta: 1,
        explicacion: "El texto del cuerpo debe ser de al menos 24 puntos para asegurar legibilidad desde la distancia en presentaciones."
      },
      {
        tipo: "multiple",
        pregunta: "¿Qué tecla permite aumentar el nivel de sangría en una lista?",
        opciones: [
          "Enter",
          "Tab",
          "Shift",
          "Ctrl"
        ],
        respuestaCorrecta: 1,
        explicacion: "La tecla Tab aumenta el nivel de sangría, mientras que Shift+Tab lo disminuye."
      },
      {
        tipo: "verdadero-falso",
        pregunta: "Los cuadros de texto solo pueden contener texto sin formato.",
        respuestaCorrecta: false,
        explicacion: "Los cuadros de texto pueden contener texto con formato completo, efectos visuales y estilos personalizados."
      },
      {
        tipo: "multiple",
        pregunta: "¿Cuál es la mejor práctica al usar efectos de texto?",
        opciones: [
          "Usar tantos efectos como sea posible",
          "Aplicar efectos diferentes en cada diapositiva",
          "Usar efectos con moderación manteniendo legibilidad",
          "Solo usar efectos en texto pequeño"
        ],
        respuestaCorrecta: 2,
        explicacion: "Los efectos deben usarse con moderación y siempre manteniendo la legibilidad como prioridad."
      },
      {
        tipo: "completar",
        pregunta: "Para crear texto decorativo con estilos predefinidos se utiliza la función _______.",
        respuestaCorrecta: "WordArt",
        explicacion: "WordArt permite crear texto decorativo con estilos predefinidos y efectos visuales especiales."
      }
    ],
    puntuacionTotal: 100,
    puntuacionAprobacion: 70
  }
};
