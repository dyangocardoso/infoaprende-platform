// PowerPoint - Tema 7: Animaciones y transiciones
// InfoAprende - Estructura modular de contenido educativo

export default {
  id: 7,
  titulo: "Animaciones y transiciones",
  duracion: "30-35 minutos",
  objetivos: [
    "Aplicar transiciones efectivas entre diapositivas",
    "Crear animaciones para objetos y texto",
    "Configurar timing y secuencias de animación",
    "Usar efectos de animación para mejorar la presentación",
    "Implementar buenas prácticas en el uso de animaciones"
  ],
  secciones: [
    {
      id: 1,
      titulo: "Transiciones entre Diapositivas",
      contenido: `
        <h3>🎬 Transiciones de Diapositiva</h3>
        <p>Las transiciones controlan cómo cambia la presentación de una diapositiva a la siguiente, creando una experiencia fluida y profesional.</p>
        
        <h4>Aplicar transiciones:</h4>
        <ol>
          <li>Selecciona la diapositiva en el panel de miniaturas</li>
          <li>Ve a la pestaña <strong>Transiciones</strong></li>
          <li>Elige una transición de la galería</li>
          <li>La transición se aplicará al entrar a esa diapositiva</li>
        </ol>

        <div class="tipos-transiciones">
          <h4>📚 Categorías de Transiciones</h4>
          
          <h5>🌟 Sutiles:</h5>
          <ul>
            <li><strong>Desvanecer:</strong> Aparición gradual</li>
            <li><strong>Cortar:</strong> Cambio instantáneo</li>
            <li><strong>Empujar:</strong> Una diapositiva empuja a la otra</li>
            <li><strong>Limpiar:</strong> Revelado direccional</li>
            <li><strong>Dividir:</strong> División desde el centro</li>
          </ul>

          <h5>🎭 Llamativas:</h5>
          <ul>
            <li><strong>Forma:</strong> Revelado en formas geométricas</li>
            <li><strong>Desenfocar:</strong> Efecto de desenfoque</li>
            <li><strong>Vórtice:</strong> Efecto de rotación espiral</li>
            <li><strong>Cambiar:</strong> Transición con movimiento</li>
            <li><strong>Galería:</strong> Efecto 3D tipo galería</li>
          </ul>

          <h5>🌈 Contenido dinámico:</h5>
          <ul>
            <li><strong>Panorámica:</strong> Movimiento de cámara</li>
            <li><strong>Ferris wheel:</strong> Rotación tipo noria</li>
            <li><strong>Transportador:</strong> Movimiento de cinta</li>
            <li><strong>Rotar:</strong> Rotación completa</li>
            <li><strong>Órbita:</strong> Movimiento orbital</li>
          </ul>
        </div>

        <h4>⚙️ Opciones de Transición</h4>
        <p>Personaliza cada transición con opciones específicas:</p>
        
        <h5>🎛️ Opciones de efecto:</h5>
        <ul>
          <li><strong>Dirección:</strong> Desde dónde viene la transición</li>
          <li><strong>Variante:</strong> Diferentes estilos del mismo efecto</li>
          <li><strong>Color:</strong> Para transiciones que lo admiten</li>
        </ul>

        <h5>⏱️ Duración:</h5>
        <ul>
          <li><strong>Rápida:</strong> 0.5-1 segundo</li>
          <li><strong>Media:</strong> 1-2 segundos</li>
          <li><strong>Lenta:</strong> 2-3 segundos</li>
          <li><strong>Personalizada:</strong> Tiempo exacto en segundos</li>
        </ul>

        <h5>🔊 Sonido:</h5>
        <ul>
          <li><strong>Sin sonido:</strong> Transición silenciosa (recomendado)</li>
          <li><strong>Sonidos predeterminados:</strong> Efectos incorporados</li>
          <li><strong>Archivo de audio:</strong> Sonido personalizado</li>
        </ul>

        <div class="avance-diapositivas">
          <h4>⏭️ Avance de Diapositiva</h4>
          <p>Controla cuándo ocurre la transición:</p>
          
          <h5>🖱️ Al hacer clic con el mouse:</h5>
          <ul>
            <li>Avance manual (control total del presentador)</li>
            <li>Ideal para presentaciones interactivas</li>
            <li>Permite adaptarse al ritmo de la audiencia</li>
          </ul>

          <h5>⏰ Después de tiempo específico:</h5>
          <ul>
            <li>Avance automático tras X segundos</li>
            <li>Útil para presentaciones autoejecutables</li>
            <li>Combina con clic para flexibilidad</li>
          </ul>
        </div>

        <div class="aplicar-todas">
          <h4>🔄 Aplicar a Todas las Diapositivas</h4>
          <p>Para mantener consistencia:</p>
          <ol>
            <li>Configura la transición deseada en una diapositiva</li>
            <li>Haz clic en <strong>Aplicar a todo</strong></li>
            <li>Todas las diapositivas usarán la misma transición</li>
          </ol>
        </div>

        <div class="preview-transiciones">
          <h4>👁️ Vista Previa de Transiciones</h4>
          <ul>
            <li><strong>Botón Vista previa:</strong> En la cinta de Transiciones</li>
            <li><strong>Automática:</strong> Al seleccionar una transición</li>
            <li><strong>Durante presentación:</strong> Efectos en tiempo real</li>
          </ul>
        </div>
      `,
      actividades: [
        {
          tipo: "practica",
          pregunta: "Aplica diferentes transiciones a 5 diapositivas: una sutil para la introducción, una llamativa para un tema importante, y configura duraciones apropiadas",
          ayuda: "Experimenta con transiciones de diferentes categorías y ajusta la duración según el contenido de cada diapositiva"
        }
      ]
    },
    {
      id: 2,
      titulo: "Animaciones de Objetos",
      contenido: `
        <h3>✨ Animar Objetos y Texto</h3>
        <p>Las animaciones de objetos permiten controlar cómo y cuándo aparecen, se mueven o desaparecen los elementos dentro de una diapositiva.</p>
        
        <h4>Aplicar animaciones:</h4>
        <ol>
          <li>Selecciona el objeto a animar (texto, imagen, forma)</li>
          <li>Ve a la pestaña <strong>Animaciones</strong></li>
          <li>Elige una animación de la galería</li>
          <li>El objeto mostrará un número indicando el orden</li>
        </ol>

        <div class="tipos-animaciones">
          <h4>🎭 Tipos de Animaciones</h4>
          
          <h5>📥 Entrada:</h5>
          <p>Cómo aparecen los objetos en pantalla:</p>
          <ul>
            <li><strong>Aparecer:</strong> Aparición instantánea</li>
            <li><strong>Desvanecer:</strong> Aparición gradual</li>
            <li><strong>Volar desde:</strong> Entrada desde una dirección</li>
            <li><strong>Flotar hacia arriba:</strong> Movimiento suave ascendente</li>
            <li><strong>Zoom:</strong> Crecimiento desde un punto</li>
            <li><strong>Dividir:</strong> Aparición desde el centro</li>
            <li><strong>Girar:</strong> Entrada con rotación</li>
            <li><strong>Rebotar:</strong> Entrada con efecto elástico</li>
          </ul>

          <h5>🎨 Énfasis:</h5>
          <p>Destacan objetos ya visibles:</p>
          <ul>
            <li><strong>Pulso:</strong> Crecimiento y reducción rápidos</li>
            <li><strong>Cambio de color:</strong> Modificación temporal del color</li>
            <li><strong>Girar:</strong> Rotación sobre su eje</li>
            <li><strong>Crecer/reducir:</strong> Cambio de tamaño temporal</li>
            <li><strong>Transparencia:</strong> Cambio de opacidad</li>
            <li><strong>Agitar:</strong> Movimiento vibratorio</li>
            <li><strong>Ondear:</strong> Efecto de onda</li>
          </ul>

          <h5>📤 Salida:</h5>
          <p>Cómo desaparecen los objetos:</p>
          <ul>
            <li><strong>Desaparecer:</strong> Desaparición instantánea</li>
            <li><strong>Desvanecer:</strong> Desaparición gradual</li>
            <li><strong>Volar hacia:</strong> Salida hacia una dirección</li>
            <li><strong>Hundir:</strong> Movimiento descendente</li>
            <li><strong>Zoom:</strong> Reducción hasta desaparecer</li>
            <li><strong>Dividir:</strong> División hacia los extremos</li>
          </ul>

          <h5>🛤️ Trayectorias de movimiento:</h5>
          <p>Movimientos personalizados por rutas específicas:</p>
          <ul>
            <li><strong>Líneas:</strong> Recta, arco, vuelta, lazo</li>
            <li><strong>Formas:</strong> Círculo, diamante, corazón, estrella</li>
            <li><strong>Personalizada:</strong> Dibujar ruta propia</li>
          </ul>
        </div>

        <h4>🎬 Opciones de Animación</h4>
        
        <h5>⚙️ Opciones de efecto:</h5>
        <p>Personaliza cada animación:</p>
        <ul>
          <li><strong>Dirección:</strong> Desde/hacia dónde ocurre el efecto</li>
          <li><strong>Cantidad:</strong> Intensidad del efecto</li>
          <li><strong>Configuración específica:</strong> Opciones únicas del efecto</li>
        </ul>

        <h5>⏱️ Inicio de la animación:</h5>
        <ul>
          <li><strong>Al hacer clic:</strong> Control manual del presentador</li>
          <li><strong>Con anterior:</strong> Simultáneo con la animación anterior</li>
          <li><strong>Después de anterior:</strong> Tras completarse la anterior</li>
        </ul>

        <h5>🕐 Duración y retraso:</h5>
        <ul>
          <li><strong>Duración:</strong> Tiempo que toma la animación</li>
          <li><strong>Retraso:</strong> Pausa antes de comenzar</li>
          <li><strong>Repetir:</strong> Número de repeticiones</li>
          <li><strong>Rebobinar:</strong> Volver al estado inicial al terminar</li>
        </ul>

        <div class="animar-texto">
          <h4>📝 Animaciones de Texto Especiales</h4>
          
          <h5>📋 Niveles de texto:</h5>
          <ul>
            <li><strong>Todo a la vez:</strong> Párrafo completo</li>
            <li><strong>Por párrafo:</strong> Párrafo por párrafo</li>
            <li><strong>Por palabra:</strong> Palabra por palabra</li>
            <li><strong>Por letra:</strong> Letra por letra</li>
          </ul>

          <h5>📊 Listas animadas:</h5>
          <ul>
            <li><strong>Por nivel:</strong> Primer nivel, segundo nivel, etc.</li>
            <li><strong>Todo junto:</strong> Toda la lista simultáneamente</li>
            <li><strong>Según jerarquía:</strong> Respetando niveles de sangría</li>
          </ul>
        </div>

        <div class="copiar-animaciones">
          <h4>📋 Copiar Animaciones</h4>
          <p>Para aplicar la misma animación a múltiples objetos:</p>
          <ol>
            <li>Selecciona el objeto con la animación deseada</li>
            <li>Haz clic en <strong>Copiar animación</strong> (pincel)</li>
            <li>Haz clic en los objetos destino</li>
            <li>Se aplicará la misma animación con configuración</li>
          </ol>
        </div>
      `,
      actividades: [
        {
          tipo: "secuencial",
          pregunta: "Crea una secuencia de animaciones: un título que entre volando desde la izquierda, una imagen que aparezca con zoom después del título, y una lista que aparezca elemento por elemento",
          ayuda: "Usa diferentes tipos de inicio: 'Al hacer clic' para el título, 'Después de anterior' para los demás elementos"
        }
      ]
    },
    {
      id: 3,
      titulo: "Panel de Animación y Timing",
      contenido: `
        <h3>🎛️ Panel de Animación</h3>
        <p>El panel de animación es la herramienta central para gestionar, ordenar y sincronizar todas las animaciones de una diapositiva.</p>
        
        <h4>Abrir el panel de animación:</h4>
        <ul>
          <li><strong>Animaciones</strong> > <strong>Panel de animación</strong></li>
          <li>Aparece un panel lateral con todas las animaciones</li>
          <li>Muestra orden, timing y configuración</li>
        </ul>

        <div class="elementos-panel">
          <h4>📋 Elementos del Panel</h4>
          
          <h5>🔢 Números de orden:</h5>
          <ul>
            <li>Indican la secuencia de reproducción</li>
            <li>Se pueden reordenar arrastrando</li>
            <li>Números iguales = reproducción simultánea</li>
          </ul>

          <h5>📊 Barras de tiempo:</h5>
          <ul>
            <li><strong>Verde:</strong> Animaciones de entrada</li>
            <li><strong>Amarillo:</strong> Animaciones de énfasis</li>
            <li><strong>Rojo:</strong> Animaciones de salida</li>
            <li><strong>Azul:</strong> Trayectorias de movimiento</li>
          </ul>

          <h5>🕐 Línea de tiempo:</h5>
          <ul>
            <li>Muestra duración de cada animación</li>
            <li>Indica solapamientos temporales</li>
            <li>Permite ajustar timing visualmente</li>
          </ul>
        </div>

        <h4>🔧 Gestión de Animaciones</h4>
        
        <h5>📝 Editar animaciones:</h5>
        <ul>
          <li><strong>Clic simple:</strong> Seleccionar animación</li>
          <li><strong>Doble clic:</strong> Abrir opciones de efecto</li>
          <li><strong>Clic derecho:</strong> Menú contextual completo</li>
          <li><strong>Flecha desplegable:</strong> Opciones rápidas</li>
        </ul>

        <h5>🔄 Reordenar:</h5>
        <ul>
          <li><strong>Arrastrar:</strong> Cambiar posición en la lista</li>
          <li><strong>Flechas de reordenación:</strong> Mover arriba/abajo</li>
          <li><strong>Timing:</strong> Modificar inicio relativo</li>
        </ul>

        <h5>🗑️ Eliminar animaciones:</h5>
        <ul>
          <li><strong>Seleccionar y Suprimir:</strong> Eliminar animación específica</li>
          <li><strong>Clic derecho > Quitar:</strong> Eliminar con confirmación</li>
        </ul>

        <div class="timing-avanzado">
          <h4>⏱️ Control de Timing Avanzado</h4>
          
          <h5>🚀 Tipos de inicio:</h5>
          <ul>
            <li><strong>🖱️ Al hacer clic:</strong> Control manual total</li>
            <li><strong>⚡ Con anterior:</strong> Inicio simultáneo</li>
            <li><strong>⏰ Después de anterior:</strong> Inicio secuencial</li>
          </ul>

          <h5>⏳ Configuración temporal:</h5>
          <ul>
            <li><strong>Duración:</strong> 0.5-5 segundos típicamente</li>
            <li><strong>Retraso:</strong> Pausa antes del inicio</li>
            <li><strong>Repetir:</strong> Hasta que termine diapositiva</li>
            <li><strong>Rebobinar:</strong> Volver al estado original</li>
          </ul>

          <h5>🎵 Sincronización musical:</h5>
          <ul>
            <li>Alinear animaciones con audio de fondo</li>
            <li>Usar marcadores temporales</li>
            <li>Coordinar con narración</li>
          </ul>
        </div>

        <h4>👁️ Vista Previa y Pruebas</h4>
        
        <h5>▶️ Reproducir animaciones:</h5>
        <ul>
          <li><strong>Vista previa:</strong> Botón en panel de animación</li>
          <li><strong>Reproducir desde:</strong> Animación específica</li>
          <li><strong>Reproducir hasta:</strong> Punto específico</li>
        </ul>

        <h5>🔍 Depuración:</h5>
        <ul>
          <li><strong>Paso a paso:</strong> Avanzar animación por animación</li>
          <li><strong>Identificar problemas:</strong> Timing incorrecto, solapamientos</li>
          <li><strong>Ajustar sobre la marcha:</strong> Modificaciones en tiempo real</li>
        </ul>

        <div class="triggers-avanzados">
          <h4>🎯 Desencadenadores (Triggers)</h4>
          <p>Para control interactivo avanzado:</p>
          
          <h5>🖱️ Configurar trigger:</h5>
          <ol>
            <li>Selecciona la animación en el panel</li>
            <li>Animaciones > <strong>Desencadenador</strong></li>
            <li>Selecciona el objeto que activará la animación</li>
            <li>Al hacer clic en ese objeto, se ejecuta la animación</li>
          </ol>

          <h5>🎮 Usos de triggers:</h5>
          <ul>
            <li><strong>Navegación interactiva:</strong> Botones personalizados</li>
            <li><strong>Revelado selectivo:</strong> Mostrar información específica</li>
            <li><strong>Juegos educativos:</strong> Interacciones dinámicas</li>
            <li><strong>Presentaciones no lineales:</strong> Múltiples rutas</li>
          </ul>
        </div>

        <div class="optimizacion-rendimiento">
          <h4>⚡ Optimización del Rendimiento</h4>
          <ul>
            <li><strong>Limitar animaciones:</strong> No más de 3-5 por diapositiva</li>
            <li><strong>Duración apropiada:</strong> 0.5-2 segundos generalmente</li>
            <li><strong>Evitar solapamientos:</strong> Complejos de seguir</li>
            <li><strong>Probar en hardware objetivo:</strong> Verificar fluidez</li>
            <li><strong>Alternativas estáticas:</strong> Para equipos lentos</li>
          </ul>
        </div>
      `,
      actividades: [
        {
          tipo: "proyecto",
          pregunta: "Usando el panel de animación, crea una secuencia compleja: 3 objetos que aparezcan simultáneamente, seguidos de 2 objetos con retraso de 1 segundo cada uno, y configura un trigger para revelar información adicional",
          ayuda: "Usa 'Con anterior' para simultaneidad, ajusta retrasos en las propiedades, y configura el trigger desde el menú Desencadenador"
        }
      ]
    },
    {
      id: 4,
      titulo: "Buenas Prácticas y Efectos Especiales",
      contenido: `
        <h3>🎯 Buenas Prácticas en Animaciones</h3>
        <p>El uso efectivo de animaciones requiere moderación, propósito claro y consideración de la audiencia para mejorar la comunicación sin distraer del mensaje.</p>
        
        <div class="principios-animacion">
          <h4>📏 Principios Fundamentales</h4>
          
          <h5>🎯 Propósito claro:</h5>
          <ul>
            <li><strong>Dirigir atención:</strong> Destacar información importante</li>
            <li><strong>Secuenciar información:</strong> Revelar contenido progresivamente</li>
            <li><strong>Crear continuidad:</strong> Conectar ideas relacionadas</li>
            <li><strong>Mantener interés:</strong> Evitar monotonía sin exagerar</li>
          </ul>

          <h5>⚖️ Moderación:</h5>
          <ul>
            <li><strong>Menos es más:</strong> 3-5 animaciones por diapositiva máximo</li>
            <li><strong>Consistencia:</strong> Usar estilos similares en toda la presentación</li>
            <li><strong>Velocidad apropiada:</strong> Ni muy lento ni muy rápido</li>
            <li><strong>No sobrecargar:</strong> Evitar efectos que distraigan del contenido</li>
          </ul>
        </div>

        <h4>🎭 Efectos por Contexto</h4>
        
        <h5>💼 Presentaciones corporativas:</h5>
        <ul>
          <li><strong>Efectos sutiles:</strong> Desvanecer, aparecer, empujar</li>
          <li><strong>Transiciones profesionales:</strong> Dividir, limpiar, cortar</li>
          <li><strong>Timing conservador:</strong> 1-2 segundos por animación</li>
          <li><strong>Colores corporativos:</strong> En efectos que admitan color</li>
        </ul>

        <h5>🎓 Presentaciones educativas:</h5>
        <ul>
          <li><strong>Revelado progresivo:</strong> Lista elemento por elemento</li>
          <li><strong>Enfasis temporal:</strong> Destacar conceptos clave</li>
          <li><strong>Trayectorias explicativas:</strong> Mostrar procesos</li>
          <li><strong>Interactividad:</strong> Triggers para exploración</li>
        </ul>

        <h5>🎨 Presentaciones creativas:</h5>
        <ul>
          <li><strong>Efectos llamativos:</strong> Zoom, rotar, rebotar</li>
          <li><strong>Trayectorias complejas:</strong> Movimientos personalizados</li>
          <li><strong>Combinaciones:</strong> Múltiples efectos coordinados</li>
          <li><strong>Experimentación:</strong> Efectos únicos y memorables</li>
        </ul>

        <div class="errores-comunes">
          <h4>❌ Errores Comunes a Evitar</h4>
          
          <h5>🎪 Sobreanimación:</h5>
          <ul>
            <li>Usar demasiados efectos diferentes</li>
            <li>Animaciones muy largas o complejas</li>
            <li>Efectos que no aportan valor</li>
            <li>Inconsistencia entre diapositivas</li>
          </ul>

          <h5>⏱️ Timing inadecuado:</h5>
          <ul>
            <li>Animaciones muy lentas (aburren)</li>
            <li>Animaciones muy rápidas (confunden)</li>
            <li>Solapamientos confusos</li>
            <li>Retrasos innecesarios</li>
          </ul>

          <h5>🎯 Falta de propósito:</h5>
          <ul>
            <li>Animar por animar</li>
            <li>Efectos que distraen del mensaje</li>
            <li>No considerar a la audiencia</li>
            <li>Ignorar el contexto de la presentación</li>
          </ul>
        </div>

        <h4>🌟 Efectos Especiales Avanzados</h4>
        
        <h5>🎨 Morfología (Morph):</h5>
        <ul>
          <li><strong>Transformaciones fluidas:</strong> Entre formas similares</li>
          <li><strong>Movimientos inteligentes:</strong> PowerPoint calcula la transición</li>
          <li><strong>Duplicar diapositiva:</strong> Modificar objetos en la segunda</li>
          <li><strong>Aplicar transición Morphing:</strong> Efecto automático</li>
        </ul>

        <h5>🔄 Zoom de diapositiva:</h5>
        <ul>
          <li><strong>Navegación visual:</strong> Entre secciones de presentación</li>
          <li><strong>Insertar zoom:</strong> Insertar > Zoom > Zoom de diapositiva</li>
          <li><strong>Miniaturas interactivas:</strong> Clic para navegar</li>
          <li><strong>Retorno automático:</strong> Vuelve a la diapositiva de zoom</li>
        </ul>

        <h5>📱 Compatibilidad con dispositivos:</h5>
        <ul>
          <li><strong>Móviles y tablets:</strong> Efectos que funcionen en pantallas táctiles</li>
          <li><strong>Conexiones lentas:</strong> Animaciones ligeras para presentaciones online</li>
          <li><strong>Hardware limitado:</strong> Alternativas para equipos antiguos</li>
        </ul>

        <div class="animaciones-accesibles">
          <h4>♿ Animaciones Accesibles</h4>
          
          <h5>👁️ Consideraciones visuales:</h5>
          <ul>
            <li><strong>Fotosensibilidad:</strong> Evitar parpadeos rápidos</li>
            <li><strong>Contraste suficiente:</strong> Durante y después de animaciones</li>
            <li><strong>Velocidad controlada:</strong> Permitir seguimiento visual</li>
          </ul>

          <h5>🎧 Apoyo auditivo:</h5>
          <ul>
            <li><strong>Descripciones narradas:</strong> Para animaciones complejas</li>
            <li><strong>Señales sonoras:</strong> Para cambios importantes</li>
            <li><strong>Transcripciones:</strong> De contenido animado</li>
          </ul>

          <h5>⚙️ Configuraciones de usuario:</h5>
          <ul>
            <li><strong>Opción sin animaciones:</strong> Versión estática alternativa</li>
            <li><strong>Control de velocidad:</strong> Ajustes de timing</li>
            <li><strong>Pausas manuales:</strong> Permitir tiempo de procesamiento</li>
          </ul>
        </div>

        <div class="testing-animaciones">
          <h4>🧪 Pruebas y Ajustes</h4>
          
          <h5>🎯 Lista de verificación:</h5>
          <ul>
            <li><strong>¿Mejora la comprensión?</strong> Valor agregado real</li>
            <li><strong>¿Es apropiada para la audiencia?</strong> Contexto y expectativas</li>
            <li><strong>¿Funciona en el hardware objetivo?</strong> Rendimiento adecuado</li>
            <li><strong>¿Es consistente?</strong> Estilo unificado</li>
            <li><strong>¿Tiempo apropiado?</strong> Duración y secuencia</li>
          </ul>

          <h5>👥 Pruebas con usuarios:</h5>
          <ul>
            <li><strong>Feedback de audiencia:</strong> Comprensión y engagement</li>
            <li><strong>Observación de reacciones:</strong> Confusión o distracción</li>
            <li><strong>Ajustes iterativos:</strong> Refinamiento basado en respuestas</li>
          </ul>
        </div>

        <div class="consejos-profesionales">
          <h4>💎 Consejos de Expertos</h4>
          <ul>
            <li><strong>Planifica antes de animar:</strong> Storyboard de la secuencia</li>
            <li><strong>Mantén backup sin animaciones:</strong> Para problemas técnicos</li>
            <li><strong>Practica el timing:</strong> Ensaya con las animaciones</li>
            <li><strong>Considera el venue:</strong> Iluminación y espacio afectan percepción</li>
            <li><strong>Menos efectos, mejor ejecución:</strong> Calidad sobre cantidad</li>
            <li><strong>Termina limpio:</strong> Estado final claro y organizado</li>
          </ul>
        </div>
      `,
      actividades: [
        {
          tipo: "evaluacion",
          pregunta: "Diseña una presentación de 3 diapositivas aplicando buenas prácticas: una corporativa con animaciones sutiles, una educativa con revelado progresivo, y una creativa con efectos llamativos pero justificados",
          ayuda: "Considera el propósito de cada animación, mantén consistencia en cada estilo, y asegúrate de que mejoren la comprensión del mensaje"
        }
      ]
    }
  ],
  recursos: [
    {
      tipo: "galeria",
      titulo: "Biblioteca de Efectos",
      descripcion: "Colección de animaciones y transiciones organizadas por contexto de uso"
    },
    {
      tipo: "plantilla",
      titulo: "Plantillas con Animaciones",
      descripcion: "Presentaciones ejemplo con animaciones profesionales implementadas"
    },
    {
      tipo: "guia",
      titulo: "Guía de Timing y Ritmo",
      descripcion: "Principios para crear secuencias de animación efectivas"
    },
    {
      tipo: "checklist",
      titulo: "Lista de Verificación de Animaciones",
      descripcion: "Puntos clave para evaluar la efectividad de animaciones"
    }
  ],
  evaluacion: {
    preguntas: [
      {
        tipo: "multiple",
        pregunta: "¿Cuál es la mejor práctica para la duración de animaciones en presentaciones corporativas?",
        opciones: [
          "0.25-0.5 segundos para rapidez",
          "1-2 segundos para profesionalismo",
          "3-4 segundos para impacto",
          "5+ segundos para dramatismo"
        ],
        respuestaCorrecta: 1,
        explicacion: "En contextos corporativos, las animaciones de 1-2 segundos proporcionan profesionalismo sin ser demasiado lentas o rápidas."
      },
      {
        tipo: "multiple",
        pregunta: "¿Qué tipo de inicio de animación permite que dos efectos ocurran al mismo tiempo?",
        opciones: [
          "Al hacer clic",
          "Con anterior",
          "Después de anterior",
          "Automático"
        ],
        respuestaCorrecta: 1,
        explicacion: "'Con anterior' hace que la animación inicie al mismo tiempo que la animación anterior, creando efectos simultáneos."
      },
      {
        tipo: "verdadero-falso",
        pregunta: "Los triggers permiten que las animaciones se activen al hacer clic en objetos específicos.",
        respuestaCorrecta: true,
        explicacion: "Los desencadenadores (triggers) permiten configurar animaciones que se activan al hacer clic en objetos específicos, creando interactividad."
      },
      {
        tipo: "multiple",
        pregunta: "¿Cuál es el número máximo recomendado de animaciones por diapositiva?",
        opciones: [
          "2-3 animaciones",
          "3-5 animaciones",
          "5-7 animaciones",
          "Sin límite si son útiles"
        ],
        respuestaCorrecta: 1,
        explicacion: "Se recomienda un máximo de 3-5 animaciones por diapositiva para mantener claridad y evitar distracciones."
      },
      {
        tipo: "completar",
        pregunta: "La transición _______ permite transformaciones fluidas entre objetos similares en diapositivas consecutivas.",
        respuestaCorrecta: "Morphing",
        explicacion: "La transición Morphing (Transformación) crea transiciones fluidas entre objetos similares calculando automáticamente la transformación."
      }
    ],
    puntuacionTotal: 100,
    puntuacionAprobacion: 70
  }
};
