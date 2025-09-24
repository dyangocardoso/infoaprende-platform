/**
 * Tema 4: Hardware - Clasificación por función
 * Curso: Introducción a la Informática
 */

export const tema04 = {
  id: '4',
  titulo: "Hardware",
  tematica: "Clasificación por función: entrada, salida, procesamiento, almacenamiento, mixtos",
  duracion: "35-40 minutos",
  objetivos: [
    "Identificar y clasificar los componentes físicos del computador",
    "Comprender la función específica de cada tipo de dispositivo",
    "Distinguir entre dispositivos de entrada, salida, procesamiento y almacenamiento",
    "Entender cómo interactúan todos los componentes del sistema"
  ],
  secciones: [
    {
      id: 1,
      titulo: "¿Qué es el Hardware?",
      contenido: `
        <h3>🔧 Definición y Características del Hardware</h3>
        
        <div class="definicion-hardware">
          <h4>📱 Definición</h4>
          <p>El <strong>hardware</strong> se refiere a todos los componentes físicos y tangibles de un sistema computacional. Son las partes que puedes tocar y ver del computador.</p>

          <h5>Características del Hardware:</h5>
          <ul>
            <li><strong>Físico:</strong> Componentes materiales y tangibles</li>
            <li><strong>Permanente:</strong> No se puede modificar con facilidad</li>
            <li><strong>Costoso de cambiar:</strong> Requiere inversión para actualizar</li>
            <li><strong>Duradero:</strong> Vida útil de varios años</li>
            <li><strong>Base del sistema:</strong> Sin hardware no hay computación</li>
          </ul>

          <h4>🔄 Hardware vs Software</h4>
          <div class="comparacion-hw-sw">
            <h5>Hardware:</h5>
            <ul>
              <li>Componentes físicos</li>
              <li>Se puede tocar</li>
              <li>Costoso de reemplazar</li>
              <li>Soporta al software</li>
              <li>Ejemplo: CPU, RAM, disco duro</li>
            </ul>

            <h5>Software:</h5>
            <ul>
              <li>Programas e instrucciones</li>
              <li>Intangible</li>
              <li>Fácil de actualizar</li>
              <li>Controla al hardware</li>
              <li>Ejemplo: Windows, Word, Chrome</li>
            </ul>
          </div>

          <h4>🏗️ Importancia del Hardware</h4>
          <ul>
            <li><strong>Base fundamental:</strong> Sin hardware no existe la computación</li>
            <li><strong>Determina capacidades:</strong> Límites de velocidad y rendimiento</li>
            <li><strong>Influye en experiencia:</strong> Hardware mejor = mejor experiencia</li>
            <li><strong>Costo significativo:</strong> Inversión importante en sistemas</li>
            <li><strong>Evolución constante:</strong> Mejoras continuas en tecnología</li>
          </ul>

          <h4>🌍 Hardware en Diferentes Dispositivos</h4>
          <div class="hardware-dispositivos">
            <h5>Computadora de Escritorio:</h5>
            <ul>
              <li>CPU, motherboard, RAM, disco duro</li>
              <li>Monitor, teclado, ratón, altavoces</li>
              <li>Tarjeta gráfica, fuente de poder</li>
            </ul>

            <h5>Laptop/Portátil:</h5>
            <ul>
              <li>Todos los componentes integrados</li>
              <li>Pantalla, teclado y trackpad incorporados</li>
              <li>Batería para portabilidad</li>
            </ul>

            <h5>Smartphone:</h5>
            <ul>
              <li>Procesador móvil (SoC)</li>
              <li>Pantalla táctil, cámaras</li>
              <li>Sensores, batería, altavoces</li>
            </ul>

            <h5>Tablet:</h5>
            <ul>
              <li>Similar al smartphone pero más grande</li>
              <li>Enfoque en pantalla táctil</li>
              <li>Menos puertos físicos</li>
            </ul>
          </div>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/hardware-definicion.jpg",
        infografia: "/images/teoria/hardware-vs-software.png"
      }
    },
    {
      id: 2,
      titulo: "Dispositivos de Entrada",
      contenido: `
        <h3>⌨️ Capturando Información del Usuario</h3>
        
        <div class="dispositivos-entrada">
          <h4>🎯 Definición</h4>
          <p>Los <strong>dispositivos de entrada</strong> permiten al usuario introducir datos, comandos e instrucciones al computador. Convierten la información del mundo real en señales digitales.</p>

          <h4>🖱️ Dispositivos de Entrada Principales</h4>
          
          <div class="teclado">
            <h5>⌨️ Teclado</h5>
            <ul>
              <li><strong>Función:</strong> Introducir texto, números y comandos</li>
              <li><strong>Tipos:</strong> Mecánico, de membrana, virtual</li>
              <li><strong>Distribuciones:</strong> QWERTY, DVORAK, AZERTY</li>
              <li><strong>Conexión:</strong> USB, Bluetooth, PS/2 (antiguo)</li>
              <li><strong>Características especiales:</strong> Teclas de función, teclado numérico, teclas multimedia</li>
            </ul>
          </div>

          <div class="raton">
            <h5>🖱️ Ratón (Mouse)</h5>
            <ul>
              <li><strong>Función:</strong> Controlar el cursor y seleccionar elementos</li>
              <li><strong>Tipos:</strong> Óptico, láser, trackball</li>
              <li><strong>Botones:</strong> Izquierdo, derecho, rueda de scroll</li>
              <li><strong>Conexión:</strong> USB, Bluetooth, inalámbrico</li>
              <li><strong>Precisión:</strong> Medida en DPI (puntos por pulgada)</li>
            </ul>
          </div>

          <h4>📱 Dispositivos Táctiles</h4>
          <div class="tactiles">
            <h5>👆 Pantalla Táctil</h5>
            <ul>
              <li><strong>Función:</strong> Entrada directa tocando la pantalla</li>
              <li><strong>Tecnologías:</strong> Resistiva, capacitiva, infrarroja</li>
              <li><strong>Gestos:</strong> Tap, swipe, pinch, rotate</li>
              <li><strong>Ventajas:</strong> Intuitivo, compacto, versátil</li>
              <li><strong>Dispositivos:</strong> Smartphones, tablets, cajeros automáticos</li>
            </ul>

            <h5>🖲️ Trackpad/Touchpad</h5>
            <ul>
              <li><strong>Función:</strong> Control de cursor en laptops</li>
              <li><strong>Gestos:</strong> Clic, scroll, zoom, navegación</li>
              <li><strong>Tecnología:</strong> Superficie capacitiva</li>
              <li><strong>Ventajas:</strong> Integrado, no requiere espacio adicional</li>
            </ul>
          </div>

          <h4>🎤 Dispositivos de Audio y Video</h4>
          <div class="audio-video">
            <h5>🎤 Micrófono</h5>
            <ul>
              <li><strong>Función:</strong> Capturar audio y convertirlo en señal digital</li>
              <li><strong>Tipos:</strong> Dinámico, condensador, USB</li>
              <li><strong>Aplicaciones:</strong> Grabación, videoconferencias, comandos de voz</li>
              <li><strong>Características:</strong> Direccionalidad, respuesta en frecuencia</li>
            </ul>

            <h5>📷 Cámara Web</h5>
            <ul>
              <li><strong>Función:</strong> Capturar video e imágenes</li>
              <li><strong>Resoluciones:</strong> VGA, HD (720p), Full HD (1080p), 4K</li>
              <li><strong>Aplicaciones:</strong> Videoconferencias, streaming, reconocimiento facial</li>
              <li><strong>Características:</strong> Autofocus, corrección de luz, micrófono integrado</li>
            </ul>
          </div>

          <h4>🎮 Dispositivos Especializados</h4>
          <div class="especializados">
            <h5>🎮 Joystick/Gamepad</h5>
            <ul>
              <li><strong>Función:</strong> Control para videojuegos</li>
              <li><strong>Elementos:</strong> Palancas analógicas, botones, D-pad</li>
              <li><strong>Características:</strong> Vibración, gatillos analógicos</li>
              <li><strong>Conexión:</strong> USB, Bluetooth, inalámbrico</li>
            </ul>

            <h5>📱 Lector de Códigos</h5>
            <ul>
              <li><strong>Función:</strong> Leer códigos de barras y QR</li>
              <li><strong>Tipos:</strong> Láser, CCD, cámara</li>
              <li><strong>Aplicaciones:</strong> Retail, inventarios, pagos móviles</li>
            </ul>

            <h5>👆 Lector Biométrico</h5>
            <ul>
              <li><strong>Función:</strong> Identificación por características físicas</li>
              <li><strong>Tipos:</strong> Huella dactilar, iris, facial</li>
              <li><strong>Aplicaciones:</strong> Seguridad, acceso, autenticación</li>
            </ul>
          </div>

          <h4>💡 Características Importantes</h4>
          <div class="caracteristicas-entrada">
            <h5>Velocidad de Respuesta:</h5>
            <ul>
              <li><strong>Latencia:</strong> Tiempo entre acción y respuesta</li>
              <li><strong>Velocidad de polling:</strong> Frecuencia de lectura</li>
              <li><strong>Importante en:</strong> Gaming, aplicaciones profesionales</li>
            </ul>

            <h5>Precisión:</h5>
            <ul>
              <li><strong>Resolución:</strong> Nivel de detalle capturado</li>
              <li><strong>Exactitud:</strong> Fidelidad de la entrada</li>
              <li><strong>Crítico en:</strong> Diseño gráfico, CAD, medicina</li>
            </ul>

            <h5>Ergonomía:</h5>
            <ul>
              <li><strong>Comodidad:</strong> Uso prolongado sin fatiga</li>
              <li><strong>Diseño:</strong> Adaptado a la anatomía humana</li>
              <li><strong>Prevención:</strong> Lesiones por movimientos repetitivos</li>
            </ul>
          </div>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/dispositivos-entrada.jpg",
        infografia: "/images/teoria/tipos-entrada.png"
      },
      actividades: [
        {
          tipo: "identificacion",
          pregunta: "Identifica todos los dispositivos de entrada que estás usando ahora mismo",
          ayuda: "Mira a tu alrededor: computadora, teléfono, tablet, etc."
        }
      ]
    },
    {
      id: 3,
      titulo: "Dispositivos de Salida",
      contenido: `
        <h3>🖥️ Presentando Información al Usuario</h3>
        
        <div class="dispositivos-salida">
          <h4>🎯 Definición</h4>
          <p>Los <strong>dispositivos de salida</strong> presentan la información procesada por el computador de forma comprensible para el usuario. Convierten las señales digitales en información perceptible.</p>

          <h4>🖥️ Dispositivos de Salida Visual</h4>
          
          <div class="monitor">
            <h5>🖥️ Monitor/Pantalla</h5>
            <ul>
              <li><strong>Función:</strong> Mostrar información visual (texto, imágenes, video)</li>
              <li><strong>Tecnologías:</strong> LCD, LED, OLED, QLED</li>
              <li><strong>Resoluciones:</strong> HD (720p), Full HD (1080p), 4K, 8K</li>
              <li><strong>Tamaños:</strong> 15" a 85" (medida diagonal)</li>
              <li><strong>Características:</strong> Tasa de refresco, tiempo de respuesta, precisión de color</li>
            </ul>

            <h6>Tipos de Monitor:</h6>
            <ul>
              <li><strong>TN (Twisted Nematic):</strong> Rápido, barato, ángulos de visión limitados</li>
              <li><strong>IPS (In-Plane Switching):</strong> Mejores colores, buenos ángulos de visión</li>
              <li><strong>VA (Vertical Alignment):</strong> Buen contraste, término medio</li>
              <li><strong>OLED:</strong> Contraste perfecto, colores vibrantes, más caro</li>
            </ul>
          </div>

          <div class="proyector">
            <h5>📽️ Proyector</h5>
            <ul>
              <li><strong>Función:</strong> Proyectar imagen en superficie grande</li>
              <li><strong>Tecnologías:</strong> LCD, DLP, láser</li>
              <li><strong>Medidas:</strong> Lúmenes (brillo), resolución</li>
              <li><strong>Aplicaciones:</strong> Presentaciones, cine en casa, educación</li>
            </ul>
          </div>

          <h4>🖨️ Dispositivos de Salida Física</h4>
          
          <div class="impresora">
            <h5>🖨️ Impresora</h5>
            <ul>
              <li><strong>Función:</strong> Crear copias físicas en papel</li>
              <li><strong>Tipos:</strong> Inyección de tinta, láser, matricial</li>
              <li><strong>Características:</strong> Velocidad (ppm), calidad (dpi), color/monocromático</li>
            </ul>

            <h6>Tipos de Impresora:</h6>
            <ul>
              <li><strong>Inyección de tinta:</strong> Versátil, buena para fotos, económica</li>
              <li><strong>Láser:</strong> Rápida, eficiente para texto, mayor costo inicial</li>
              <li><strong>Térmica:</strong> Recibos, etiquetas, sin tinta</li>
              <li><strong>3D:</strong> Objetos tridimensionales, plástico/resina</li>
            </ul>
          </div>

          <div class="plotter">
            <h5>📐 Plotter</h5>
            <ul>
              <li><strong>Función:</strong> Impresión de gran formato</li>
              <li><strong>Aplicaciones:</strong> Planos arquitectónicos, mapas, banners</li>
              <li><strong>Tamaños:</strong> A1, A0, formatos personalizados</li>
            </ul>
          </div>

          <h4>🔊 Dispositivos de Salida de Audio</h4>
          
          <div class="altavoces">
            <h5>🔊 Altavoces/Bocinas</h5>
            <ul>
              <li><strong>Función:</strong> Reproducir sonido y música</li>
              <li><strong>Tipos:</strong> Estéreo (2.0), subwoofer (2.1), surround (5.1, 7.1)</li>
              <li><strong>Características:</strong> Potencia (watts), respuesta en frecuencia</li>
              <li><strong>Conexión:</strong> Analógica (3.5mm), digital (USB, Bluetooth)</li>
            </ul>

            <h6>Configuraciones de Audio:</h6>
            <ul>
              <li><strong>2.0:</strong> Dos altavoces (izquierdo y derecho)</li>
              <li><strong>2.1:</strong> Dos altavoces + subwoofer para graves</li>
              <li><strong>5.1:</strong> Sistema surround con 5 altavoces + subwoofer</li>
              <li><strong>7.1:</strong> Sistema surround avanzado</li>
            </ul>
          </div>

          <div class="audifonos">
            <h5>🎧 Audífonos/Auriculares</h5>
            <ul>
              <li><strong>Función:</strong> Audio personal y privado</li>
              <li><strong>Tipos:</strong> Over-ear, on-ear, in-ear</li>
              <li><strong>Características:</strong> Cancelación de ruido, inalámbricos</li>
              <li><strong>Aplicaciones:</strong> Música, gaming, trabajo remoto</li>
            </ul>
          </div>

          <h4>🌟 Dispositivos de Salida Especializados</h4>
          
          <div class="especializados-salida">
            <h5>💡 Dispositivos de Retroalimentación</h5>
            <ul>
              <li><strong>LED de estado:</strong> Indicadores luminosos</li>
              <li><strong>Vibración:</strong> Retroalimentación táctil (joysticks, teléfonos)</li>
              <li><strong>Buzzer:</strong> Señales sonoras simples</li>
            </ul>

            <h5>🎭 Realidad Virtual/Aumentada</h5>
            <ul>
              <li><strong>Cascos VR:</strong> Pantallas inmersivas</li>
              <li><strong>Hologramas:</strong> Proyección tridimensional</li>
              <li><strong>Pantallas AR:</strong> Superposición de información</li>
            </ul>

            <h5>⚕️ Dispositivos Médicos</h5>
            <ul>
              <li><strong>Monitores médicos:</strong> Visualización de diagnósticos</li>
              <li><strong>Impresoras médicas:</strong> Imágenes radiológicas</li>
              <li><strong>Dispositivos de asistencia:</strong> Para personas con discapacidades</li>
            </ul>
          </div>

          <h4>📊 Características de Calidad</h4>
          <div class="calidad-salida">
            <h5>Para Video:</h5>
            <ul>
              <li><strong>Resolución:</strong> Cantidad de píxeles</li>
              <li><strong>Tasa de refresco:</strong> 60Hz, 120Hz, 144Hz</li>
              <li><strong>Precisión de color:</strong> Gamut de colores</li>
              <li><strong>Tiempo de respuesta:</strong> Importante para gaming</li>
            </ul>

            <h5>Para Audio:</h5>
            <ul>
              <li><strong>Frecuencia:</strong> Rango audible (20Hz - 20kHz)</li>
              <li><strong>Distorsión:</strong> THD (Total Harmonic Distortion)</li>
              <li><strong>Potencia:</strong> RMS watts</li>
              <li><strong>Impedancia:</strong> Compatibilidad con amplificadores</li>
            </ul>

            <h5>Para Impresión:</h5>
            <ul>
              <li><strong>Resolución:</strong> DPI (dots per inch)</li>
              <li><strong>Velocidad:</strong> PPM (páginas por minuto)</li>
              <li><strong>Precisión de color:</strong> Número de colores</li>
              <li><strong>Durabilidad:</strong> Resistencia al agua/luz</li>
            </ul>
          </div>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/dispositivos-salida.jpg",
        infografia: "/images/teoria/tipos-salida.png"
      },
      actividades: [
        {
          tipo: "investigacion",
          pregunta: "Compara las especificaciones de tu monitor con otro dispositivo (TV, tablet, teléfono)",
          ayuda: "Busca resolución, tamaño de pantalla y tecnología utilizada"
        }
      ]
    },
    {
      id: 4,
      titulo: "Dispositivos de Procesamiento",
      contenido: `
        <h3>🧠 El Cerebro del Computador</h3>
        
        <div class="dispositivos-procesamiento">
          <h4>🎯 Definición</h4>
          <p>Los <strong>dispositivos de procesamiento</strong> son los componentes que ejecutan las instrucciones y realizan los cálculos. Son el "cerebro" del sistema computacional.</p>

          <h4>💻 Unidad Central de Procesamiento (CPU)</h4>
          
          <div class="cpu-detalle">
            <h5>🧠 CPU - Central Processing Unit</h5>
            <p>La CPU es el componente principal que ejecuta las instrucciones de los programas.</p>

            <h6>Componentes de la CPU:</h6>
            <ul>
              <li><strong>Unidad de Control (CU):</strong> Coordina y controla operaciones</li>
              <li><strong>Unidad Aritmético-Lógica (ALU):</strong> Realiza cálculos matemáticos y lógicos</li>
              <li><strong>Registros:</strong> Memoria muy rápida dentro del procesador</li>
              <li><strong>Cache:</strong> Memoria intermedia para acceso rápido</li>
            </ul>

            <h6>Características de la CPU:</h6>
            <ul>
              <li><strong>Frecuencia:</strong> GHz (Gigahertz) - velocidad de reloj</li>
              <li><strong>Núcleos:</strong> Número de unidades de procesamiento</li>
              <li><strong>Hilos:</strong> Procesos simultáneos por núcleo</li>
              <li><strong>Arquitectura:</strong> x86, x64, ARM</li>
              <li><strong>Cache:</strong> L1, L2, L3 (niveles de memoria cache)</li>
            </ul>

            <h6>Fabricantes Principales:</h6>
            <ul>
              <li><strong>Intel:</strong> Core i3, i5, i7, i9; Xeon (servidores)</li>
              <li><strong>AMD:</strong> Ryzen 3, 5, 7, 9; EPYC (servidores)</li>
              <li><strong>ARM:</strong> Procesadores móviles, Apple M1/M2</li>
              <li><strong>Qualcomm:</strong> Snapdragon (smartphones)</li>
            </ul>
          </div>

          <div class="gpu-detalle">
            <h5>🎮 GPU - Graphics Processing Unit</h5>
            <p>La GPU se especializa en procesamiento paralelo, especialmente para gráficos y cálculos matemáticos complejos.</p>

            <h6>Funciones de la GPU:</h6>
            <ul>
              <li><strong>Renderizado:</strong> Crear imágenes 2D y 3D</li>
              <li><strong>Aceleración:</strong> Video, efectos visuales</li>
              <li><strong>Cómputo paralelo:</strong> Machine learning, criptomonedas</li>
              <li><strong>Codificación:</strong> Streaming de video</li>
            </ul>

            <h6>Tipos de GPU:</h6>
            <ul>
              <li><strong>Integrada:</strong> Incluida en CPU, menor rendimiento</li>
              <li><strong>Dedicada:</strong> Tarjeta separada, alto rendimiento</li>
              <li><strong>Externa:</strong> Conectada por Thunderbolt</li>
            </ul>

            <h6>Fabricantes Principales:</h6>
            <ul>
              <li><strong>NVIDIA:</strong> GeForce (gaming), RTX (ray tracing), Quadro (profesional)</li>
              <li><strong>AMD:</strong> Radeon RX (gaming), Radeon Pro (profesional)</li>
              <li><strong>Intel:</strong> Intel Arc (nueva línea)</li>
            </ul>
          </div>

          <h4>🧮 Procesadores Especializados</h4>
          
          <div class="procesadores-especializados">
            <h5>🤖 TPU - Tensor Processing Unit</h5>
            <ul>
              <li><strong>Función:</strong> Aceleración de inteligencia artificial</li>
              <li><strong>Aplicaciones:</strong> Machine learning, redes neuronales</li>
              <li><strong>Ventajas:</strong> Muy eficiente para operaciones específicas de IA</li>
              <li><strong>Desarrollador:</strong> Google (para sus servicios de IA)</li>
            </ul>

            <h5>🔢 DSP - Digital Signal Processor</h5>
            <ul>
              <li><strong>Función:</strong> Procesamiento de señales digitales</li>
              <li><strong>Aplicaciones:</strong> Audio, video, telecomunicaciones</li>
              <li><strong>Características:</strong> Optimizado para operaciones matemáticas repetitivas</li>
            </ul>

            <h5>🎵 APU - Accelerated Processing Unit</h5>
            <ul>
              <li><strong>Función:</strong> Combina CPU y GPU en un chip</li>
              <li><strong>Ventajas:</strong> Menor costo, menor consumo</li>
              <li><strong>Aplicaciones:</strong> Computadoras básicas, consolas de juegos</li>
              <li><strong>Ejemplo:</strong> AMD Ryzen con gráficos Vega integrados</li>
            </ul>
          </div>

          <h4>⚡ Rendimiento y Medición</h4>
          
          <div class="rendimiento-cpu">
            <h5>📊 Métricas de Rendimiento:</h5>
            <ul>
              <li><strong>Clock Speed:</strong> GHz - ciclos por segundo</li>
              <li><strong>IPC:</strong> Instructions Per Clock - eficiencia</li>
              <li><strong>Benchmarks:</strong> Pruebas estandarizadas</li>
              <li><strong>TDP:</strong> Thermal Design Power - consumo energético</li>
            </ul>

            <h5>🏃 Factores que Afectan el Rendimiento:</h5>
            <ul>
              <li><strong>Arquitectura:</strong> Diseño del procesador</li>
              <li><strong>Proceso de fabricación:</strong> 7nm, 5nm, 3nm</li>
              <li><strong>Memoria RAM:</strong> Velocidad y cantidad</li>
              <li><strong>Refrigeración:</strong> Previene throttling térmico</li>
              <li><strong>Software:</strong> Optimización para múltiples núcleos</li>
            </ul>
          </div>

          <h4>🔧 Tecnologías Modernas</h4>
          
          <div class="tecnologias-modernas">
            <h5>🚀 Mejoras Recientes:</h5>
            <ul>
              <li><strong>Hyperthreading:</strong> Más hilos que núcleos físicos</li>
              <li><strong>Turbo Boost:</strong> Aumento automático de frecuencia</li>
              <li><strong>Overclocking:</strong> Aumento manual de velocidad</li>
              <li><strong>AI Acceleration:</strong> Instrucciones especiales para IA</li>
            </ul>

            <h5>🌡️ Gestión Térmica:</h5>
            <ul>
              <li><strong>Thermal Throttling:</strong> Reducción automática de velocidad</li>
              <li><strong>Refrigeración:</strong> Aire, líquida, cambio de fase</li>
              <li><strong>Pasta térmica:</strong> Conducción de calor</li>
              <li><strong>Sensores:</strong> Monitoreo constante de temperatura</li>
            </ul>
          </div>

          <h4>📱 Procesadores Móviles</h4>
          
          <div class="procesadores-moviles">
            <h5>📱 SoC - System on Chip</h5>
            <p>En dispositivos móviles, múltiples componentes se integran en un solo chip:</p>
            <ul>
              <li><strong>CPU:</strong> Núcleos de alto y bajo rendimiento</li>
              <li><strong>GPU:</strong> Gráficos integrados</li>
              <li><strong>Módem:</strong> Conectividad 4G/5G</li>
              <li><strong>WiFi/Bluetooth:</strong> Conectividad inalámbrica</li>
              <li><strong>ISP:</strong> Image Signal Processor para cámaras</li>
              <li><strong>DSP:</strong> Procesamiento de audio</li>
            </ul>

            <h5>🔋 Eficiencia Energética:</h5>
            <ul>
              <li><strong>Arquitectura big.LITTLE:</strong> Núcleos eficientes y potentes</li>
              <li><strong>Gestión dinámica:</strong> Ajuste automático de frecuencia</li>
              <li><strong>Procesos avanzados:</strong> 5nm, 4nm para menor consumo</li>
            </ul>
          </div>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/dispositivos-procesamiento.jpg",
        infografia: "/images/teoria/cpu-gpu-comparacion.png",
        video: "/videos/funcionamiento-cpu.mp4"
      },
      actividades: [
        {
          tipo: "identificacion",
          pregunta: "Averigua las especificaciones del procesador de tu computadora o teléfono",
          ayuda: "En Windows: Panel de Control > Sistema. En Android: Configuración > Acerca del teléfono"
        }
      ]
    },
    {
      id: 5,
      titulo: "Dispositivos de Almacenamiento",
      contenido: `
        <h3>💾 Guardando Información de Forma Permanente</h3>
        
        <div class="dispositivos-almacenamiento">
          <h4>🎯 Definición</h4>
          <p>Los <strong>dispositivos de almacenamiento</strong> guardan datos e información de forma permanente, incluso cuando el computador está apagado. Se dividen en almacenamiento primario y secundario.</p>

          <h4>🧠 Almacenamiento Primario (Memoria Principal)</h4>
          
          <div class="memoria-ram">
            <h5>⚡ RAM - Random Access Memory</h5>
            <p>Memoria temporal que almacena datos e instrucciones que la CPU necesita acceder rápidamente.</p>

            <h6>Características de la RAM:</h6>
            <ul>
              <li><strong>Volátil:</strong> Se borra al apagar el computador</li>
              <li><strong>Rápida:</strong> Acceso en nanosegundos</li>
              <li><strong>Aleatoria:</strong> Acceso directo a cualquier ubicación</li>
              <li><strong>Costosa:</strong> Más cara que almacenamiento secundario</li>
            </ul>

            <h6>Tipos de RAM:</h6>
            <ul>
              <li><strong>DDR4:</strong> Estándar actual, velocidades 2133-3200 MHz</li>
              <li><strong>DDR5:</strong> Nueva generación, velocidades 4800-6400 MHz</li>
              <li><strong>GDDR:</strong> Para tarjetas gráficas, muy rápida</li>
              <li><strong>LPDDR:</strong> Low Power, para dispositivos móviles</li>
            </ul>

            <h6>Capacidades Típicas:</h6>
            <ul>
              <li><strong>Smartphone:</strong> 4-12 GB</li>
              <li><strong>Laptop básica:</strong> 8-16 GB</li>
              <li><strong>PC Gaming:</strong> 16-32 GB</li>
              <li><strong>Workstation:</strong> 32-128 GB</li>
            </ul>
          </div>

          <div class="memoria-cache">
            <h5>🚀 Memoria Cache</h5>
            <ul>
              <li><strong>Función:</strong> Memoria ultra rápida dentro del procesador</li>
              <li><strong>Niveles:</strong> L1 (más rápida), L2, L3 (más grande)</li>
              <li><strong>Tamaño:</strong> KB a MB</li>
              <li><strong>Impacto:</strong> Mejora significativa en rendimiento</li>
            </ul>
          </div>

          <h4>💽 Almacenamiento Secundario (Permanente)</h4>
          
          <div class="disco-duro">
            <h5>💿 HDD - Hard Disk Drive</h5>
            <p>Almacenamiento magnético con discos giratorios y cabezales de lectura/escritura.</p>

            <h6>Características del HDD:</h6>
            <ul>
              <li><strong>Capacidad:</strong> 500 GB - 20 TB</li>
              <li><strong>Velocidad:</strong> 5,400 - 15,000 RPM</li>
              <li><strong>Interfaz:</strong> SATA III (6 Gb/s)</li>
              <li><strong>Ventajas:</strong> Bajo costo por GB, alta capacidad</li>
              <li><strong>Desventajas:</strong> Lento, frágil, ruido</li>
            </ul>

            <h6>Componentes del HDD:</h6>
            <ul>
              <li><strong>Platos:</strong> Discos magnéticos que almacenan datos</li>
              <li><strong>Cabezales:</strong> Leen y escriben datos magnéticamente</li>
              <li><strong>Motor:</strong> Hace girar los platos</li>
              <li><strong>Actuador:</strong> Mueve los cabezales</li>
            </ul>
          </div>

          <div class="ssd">
            <h5>⚡ SSD - Solid State Drive</h5>
            <p>Almacenamiento basado en memoria flash, sin partes móviles.</p>

            <h6>Características del SSD:</h6>
            <ul>
              <li><strong>Capacidad:</strong> 120 GB - 8 TB</li>
              <li><strong>Velocidad:</strong> 500-7,000 MB/s</li>
              <li><strong>Interfaces:</strong> SATA, NVMe, M.2</li>
              <li><strong>Ventajas:</strong> Muy rápido, silencioso, resistente</li>
              <li><strong>Desventajas:</strong> Más caro por GB</li>
            </ul>

            <h6>Tipos de SSD:</h6>
            <ul>
              <li><strong>SATA SSD:</strong> Interfaz SATA, compatible con HDD</li>
              <li><strong>NVMe SSD:</strong> Interfaz PCIe, ultra rápido</li>
              <li><strong>M.2:</strong> Factor de forma compacto</li>
              <li><strong>eMMC:</strong> Integrado, usado en dispositivos baratos</li>
            </ul>
          </div>

          <h4>💾 Almacenamiento Óptico</h4>
          
          <div class="almacenamiento-optico">
            <h5>💿 CD/DVD/Blu-ray</h5>
            <ul>
              <li><strong>CD:</strong> 700 MB, música, archivos básicos</li>
              <li><strong>DVD:</strong> 4.7 GB (capa simple), 8.5 GB (doble capa)</li>
              <li><strong>Blu-ray:</strong> 25 GB (capa simple), 50 GB (doble capa)</li>
              <li><strong>Tecnología:</strong> Láser para leer/escribir datos</li>
              <li><strong>Ventajas:</strong> Duradero, económico para distribución</li>
              <li><strong>Desventajas:</strong> Lento, capacidad limitada</li>
            </ul>
          </div>

          <h4>🔌 Almacenamiento Portátil</h4>
          
          <div class="almacenamiento-portatil">
            <h5>📱 Memoria USB</h5>
            <ul>
              <li><strong>Capacidad:</strong> 8 GB - 1 TB</li>
              <li><strong>Estándares:</strong> USB 2.0, 3.0, 3.1, 3.2</li>
              <li><strong>Velocidades:</strong> 5 MB/s (USB 2.0) - 400 MB/s (USB 3.2)</li>
              <li><strong>Ventajas:</strong> Portátil, compatible, económico</li>
            </ul>

            <h5>📇 Tarjetas de Memoria</h5>
            <ul>
              <li><strong>SD Card:</strong> 2 GB - 1 TB, cámaras, tablets</li>
              <li><strong>MicroSD:</strong> Versión miniaturizada para smartphones</li>
              <li><strong>CompactFlash:</strong> Cámaras profesionales</li>
              <li><strong>Clases de velocidad:</strong> Class 4, 6, 10, UHS-I, UHS-II</li>
            </ul>
          </div>

          <h4>☁️ Almacenamiento en Red</h4>
          
          <div class="almacenamiento-red">
            <h5>🌐 Almacenamiento en la Nube</h5>
            <ul>
              <li><strong>Servidores remotos:</strong> Datos almacenados en centros de datos</li>
              <li><strong>Acceso por internet:</strong> Disponible desde cualquier lugar</li>
              <li><strong>Servicios populares:</strong> Google Drive, iCloud, OneDrive, Dropbox</li>
              <li><strong>Ventajas:</strong> Backup automático, sincronización, colaboración</li>
              <li><strong>Desventajas:</strong> Requiere internet, costos recurrentes</li>
            </ul>

            <h5>🏠 NAS - Network Attached Storage</h5>
            <ul>
              <li><strong>Función:</strong> Servidor de archivos doméstico/empresarial</li>
              <li><strong>Ventajas:</strong> Control total, no depende de internet</li>
              <li><strong>Capacidades:</strong> 2-100+ TB en configuraciones RAID</li>
              <li><strong>Funciones:</strong> Backup, streaming de media, servidor web</li>
            </ul>
          </div>

          <h4>📊 Comparación de Tecnologías</h4>
          
          <div class="tabla-comparacion">
            <table>
              <tr>
                <th>Tipo</th>
                <th>Velocidad</th>
                <th>Capacidad</th>
                <th>Durabilidad</th>
                <th>Costo/GB</th>
              </tr>
              <tr>
                <td>RAM DDR4</td>
                <td>Ultra Alta</td>
                <td>Baja</td>
                <td>Alta</td>
                <td>Muy Alto</td>
              </tr>
              <tr>
                <td>NVMe SSD</td>
                <td>Muy Alta</td>
                <td>Media</td>
                <td>Alta</td>
                <td>Alto</td>
              </tr>
              <tr>
                <td>SATA SSD</td>
                <td>Alta</td>
                <td>Media</td>
                <td>Alta</td>
                <td>Medio</td>
              </tr>
              <tr>
                <td>HDD</td>
                <td>Media</td>
                <td>Muy Alta</td>
                <td>Media</td>
                <td>Bajo</td>
              </tr>
              <tr>
                <td>USB 3.0</td>
                <td>Media</td>
                <td>Media</td>
                <td>Media</td>
                <td>Medio</td>
              </tr>
              <tr>
                <td>DVD</td>
                <td>Baja</td>
                <td>Muy Baja</td>
                <td>Alta</td>
                <td>Muy Bajo</td>
              </tr>
            </table>
          </div>

          <h4>🔧 Configuraciones Recomendadas</h4>
          
          <div class="configuraciones">
            <h5>👤 Usuario Básico:</h5>
            <ul>
              <li><strong>RAM:</strong> 8 GB DDR4</li>
              <li><strong>Almacenamiento:</strong> SSD 256 GB + HDD 1 TB</li>
              <li><strong>Uso:</strong> Documentos, navegación, multimedia básico</li>
            </ul>

            <h5>🎮 Gamer:</h5>
            <ul>
              <li><strong>RAM:</strong> 16-32 GB DDR4/DDR5</li>
              <li><strong>Almacenamiento:</strong> NVMe SSD 1 TB + HDD 2 TB</li>
              <li><strong>Uso:</strong> Juegos modernos, streaming</li>
            </ul>

            <h5>💼 Profesional:</h5>
            <ul>
              <li><strong>RAM:</strong> 32-64 GB DDR4/DDR5</li>
              <li><strong>Almacenamiento:</strong> NVMe SSD 2 TB + HDD 4 TB</li>
              <li><strong>Uso:</strong> Edición de video, CAD, programación</li>
            </ul>
          </div>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/dispositivos-almacenamiento.jpg",
        infografia: "/images/teoria/jerarquia-memoria.png",
        video: "/videos/ssd-vs-hdd.mp4"
      },
      actividades: [
        {
          tipo: "calculo",
          pregunta: "¿Cuántos archivos de video de 2 GB cada uno puedes almacenar en un SSD de 512 GB?",
          ayuda: "Divide la capacidad total entre el tamaño de cada archivo, considera que el sistema operativo también usa espacio"
        }
      ]
    },
    {
      id: 6,
      titulo: "Dispositivos Mixtos",
      contenido: `
        <h3>🔄 Dispositivos de Entrada y Salida Combinados</h3>
        
        <div class="dispositivos-mixtos">
          <h4>🎯 Definición</h4>
          <p>Los <strong>dispositivos mixtos</strong> pueden funcionar tanto como dispositivos de entrada como de salida. Permiten comunicación bidireccional con el computador.</p>

          <h4>📱 Pantallas Táctiles</h4>
          
          <div class="pantallas-tactiles">
            <h5>👆 Touchscreen</h5>
            <p>Combina la función de mostrar información (salida) con la capacidad de recibir toques (entrada).</p>

            <h6>Tecnologías de Pantalla Táctil:</h6>
            <ul>
              <li><strong>Resistiva:</strong> Dos capas que se tocan al presionar</li>
              <li><strong>Capacitiva:</strong> Detecta cambios en campo eléctrico</li>
              <li><strong>Infrarroja:</strong> Matriz de sensores IR</li>
              <li><strong>Ultrasónica:</strong> Ondas sonoras para detección</li>
            </ul>

            <h6>Tipos de Gestos:</h6>
            <ul>
              <li><strong>Tap:</strong> Toque simple</li>
              <li><strong>Double-tap:</strong> Doble toque</li>
              <li><strong>Swipe:</strong> Deslizar el dedo</li>
              <li><strong>Pinch:</strong> Pellizcar (zoom)</li>
              <li><strong>Rotate:</strong> Rotar con dos dedos</li>
              <li><strong>Long press:</strong> Mantener presionado</li>
            </ul>

            <h6>Aplicaciones:</h6>
            <ul>
              <li><strong>Smartphones y tablets:</strong> Interfaz principal</li>
              <li><strong>Cajeros automáticos:</strong> Transacciones bancarias</li>
              <li><strong>Quioscos informativos:</strong> Información pública</li>
              <li><strong>Sistemas POS:</strong> Punto de venta en tiendas</li>
              <li><strong>Automóviles:</strong> Sistemas de infotainment</li>
            </ul>
          </div>

          <h4>🌐 Dispositivos de Red</h4>
          
          <div class="dispositivos-red">
            <h5>📡 Tarjeta de Red / Adaptador WiFi</h5>
            <ul>
              <li><strong>Función:</strong> Enviar y recibir datos por red</li>
              <li><strong>Tipos:</strong> Ethernet (cable), WiFi (inalámbrico)</li>
              <li><strong>Entrada:</strong> Recibe datos de la red</li>
              <li><strong>Salida:</strong> Envía datos a la red</li>
              <li><strong>Protocolos:</strong> TCP/IP, HTTP, FTP</li>
            </ul>

            <h5>📶 Módem</h5>
            <ul>
              <li><strong>Función:</strong> Modular/demodular señales digitales</li>
              <li><strong>Tipos:</strong> DSL, cable, 4G/5G, satelital</li>
              <li><strong>Bidireccional:</strong> Upload y download de datos</li>
              <li><strong>Aplicación:</strong> Conexión a internet</li>
            </ul>

            <h5>🔄 Router</h5>
            <ul>
              <li><strong>Función:</strong> Dirigir tráfico de red</li>
              <li><strong>Características:</strong> Multiple puertos, WiFi, firewall</li>
              <li><strong>Entrada:</strong> Paquetes de datos</li>
              <li><strong>Salida:</strong> Enrutamiento a destino correcto</li>
            </ul>
          </div>

          <h4>💾 Dispositivos de Almacenamiento Inteligente</h4>
          
          <div class="almacenamiento-inteligente">
            <h5>💿 Unidades de CD/DVD/Blu-ray</h5>
            <ul>
              <li><strong>Lectura:</strong> Dispositivo de entrada (lee discos)</li>
              <li><strong>Escritura:</strong> Dispositivo de salida (graba discos)</li>
              <li><strong>Tipos:</strong> Solo lectura, grabadora, regrabadora</li>
              <li><strong>Aplicaciones:</strong> Software, películas, música, backup</li>
            </ul>

            <h5>🔌 Discos Duros Externos</h5>
            <ul>
              <li><strong>Función dual:</strong> Leer archivos existentes, escribir nuevos</li>
              <li><strong>Conectividad:</strong> USB, Thunderbolt, eSATA</li>
              <li><strong>Portabilidad:</strong> Fácil transporte de datos</li>
              <li><strong>Uso:</strong> Backup, transferencia, almacenamiento adicional</li>
            </ul>
          </div>

          <h4>🎧 Dispositivos de Audio Bidireccionales</h4>
          
          <div class="audio-bidireccional">
            <h5>🎤 Auriculares con Micrófono</h5>
            <ul>
              <li><strong>Salida:</strong> Reproducen audio (música, llamadas)</li>
              <li><strong>Entrada:</strong> Capturan voz del usuario</li>
              <li><strong>Tipos:</strong> Gaming, profesionales, comunicaciones</li>
              <li><strong>Características:</strong> Cancelación de ruido, inalámbricos</li>
            </ul>

            <h5>📞 Dispositivos de Comunicación</h5>
            <ul>
              <li><strong>Teléfonos VoIP:</strong> Voz sobre IP</li>
              <li><strong>Sistemas de conferencia:</strong> Audio bidireccional</li>
              <li><strong>Intercom:</strong> Comunicación interna</li>
              <li><strong>Walkie-talkies digitales:</strong> Comunicación de corto alcance</li>
            </ul>
          </div>

          <h4>🤖 Dispositivos Inteligentes</h4>
          
          <div class="dispositivos-inteligentes">
            <h5>🏠 Dispositivos IoT (Internet of Things)</h5>
            <ul>
              <li><strong>Termostatos inteligentes:</strong> Leen temperatura, controlan calefacción</li>
              <li><strong>Cerraduras inteligentes:</strong> Reconocen usuarios, controlan acceso</li>
              <li><strong>Cámaras de seguridad:</strong> Capturan video, envían alertas</li>
              <li><strong>Sensores:</strong> Detectan movimiento, luz, humedad</li>
            </ul>

            <h5>🚗 Sistemas Automotrices</h5>
            <ul>
              <li><strong>GPS:</strong> Recibe señales satelitales, muestra mapas</li>
              <li><strong>Sistema de infotainment:</strong> Control táctil, reproduce multimedia</li>
              <li><strong>Sensores de estacionamiento:</strong> Detectan obstáculos, emiten alertas</li>
            </ul>
          </div>

          <h4>⚕️ Dispositivos Médicos</h4>
          
          <div class="dispositivos-medicos">
            <h5>🏥 Equipos de Diagnóstico</h5>
            <ul>
              <li><strong>Monitores de signos vitales:</strong> Leen sensores, muestran datos</li>
              <li><strong>Ultrasonido:</strong> Emite ondas, captura ecos, genera imágenes</li>
              <li><strong>Electrocardiógrafos:</strong> Detectan impulsos, muestran ritmo</li>
              <li><strong>Glucómetros:</strong> Analizan muestra, muestran resultados</li>
            </ul>
          </div>

          <h4>🕹️ Dispositivos de Entretenimiento</h4>
          
          <div class="entretenimiento">
            <h5>🎮 Controladores de Juegos Avanzados</h5>
            <ul>
              <li><strong>Entrada:</strong> Botones, joysticks, sensores de movimiento</li>
              <li><strong>Salida:</strong> Vibración, luces LED, audio</li>
              <li><strong>Tecnologías:</strong> Giroscopio, acelerómetro, retroalimentación háptica</li>
              <li><strong>Ejemplos:</strong> PlayStation DualSense, Xbox Controller, Nintendo Joy-Con</li>
            </ul>

            <h5>🥽 Realidad Virtual</h5>
            <ul>
              <li><strong>Entrada:</strong> Sensores de movimiento, controladores</li>
              <li><strong>Salida:</strong> Pantallas estereoscópicas, audio 3D</li>
              <li><strong>Rastreo:</strong> Posición de cabeza y manos</li>
              <li><strong>Aplicaciones:</strong> Gaming, entrenamiento, terapia</li>
            </ul>
          </div>

          <h4>📊 Ventajas de Dispositivos Mixtos</h4>
          
          <div class="ventajas-mixtos">
            <h5>✅ Beneficios:</h5>
            <ul>
              <li><strong>Espacio:</strong> Un dispositivo, múltiples funciones</li>
              <li><strong>Costo:</strong> Más económico que dispositivos separados</li>
              <li><strong>Integración:</strong> Mejor comunicación entre funciones</li>
              <li><strong>Simplicidad:</strong> Menos cables y conexiones</li>
              <li><strong>Portabilidad:</strong> Fácil de transportar</li>
            </ul>

            <h5>⚠️ Consideraciones:</h5>
            <ul>
              <li><strong>Complejidad:</strong> Más componentes pueden fallar</li>
              <li><strong>Especialización:</strong> Pueden no ser óptimos para una función</li>
              <li><strong>Reparación:</strong> Más difícil de reparar o reemplazar</li>
              <li><strong>Obsolescencia:</strong> Toda la unidad se vuelve obsoleta</li>
            </ul>
          </div>

          <h4>🔮 Tendencias Futuras</h4>
          
          <div class="tendencias-futuras">
            <h5>🚀 Innovaciones Emergentes:</h5>
            <ul>
              <li><strong>Interfaces cerebro-computadora:</strong> Control mental directo</li>
              <li><strong>Hologramas interactivos:</strong> Manipulación de imágenes 3D</li>
              <li><strong>Superficies inteligentes:</strong> Cualquier superficie como interfaz</li>
              <li><strong>Computación ubicua:</strong> Dispositivos integrados en el entorno</li>
              <li><strong>Retroalimentación háptica avanzada:</strong> Sensaciones táctiles realistas</li>
            </ul>
          </div>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/dispositivos-mixtos.jpg",
        infografia: "/images/teoria/pantallas-tactiles.png",
        video: "/videos/dispositivos-bidireccionales.mp4"
      },
      actividades: [
        {
          tipo: "reflexion",
          pregunta: "¿Qué dispositivos mixtos usas diariamente? ¿Cómo funcionan como entrada y salida?",
          ayuda: "Piensa en tu teléfono, tablet, smartwatch, o sistemas en tu auto"
        }
      ]
    }
  ],
  recursos: {
    documentos: [
      {
        titulo: "Guía Completa de Hardware",
        url: "/docs/hardware-completo.pdf",
        tipo: "pdf"
      },
      {
        titulo: "Clasificación de Dispositivos",
        url: "/docs/clasificacion-dispositivos.pdf",
        tipo: "pdf"
      }
    ],
    enlaces: [
      {
        titulo: "Computer Hardware - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Computer_hardware",
        tipo: "externo"
      },
      {
        titulo: "How Computer Hardware Works",
        url: "https://www.howstuffworks.com/computer.htm",
        tipo: "externo"
      }
    ],
    videos: [
      {
        titulo: "Hardware del Computador Explicado",
        url: "/videos/hardware-explicado.mp4",
        duracion: "15:45"
      }
    ]
  },
  evaluacion: {
    tipo: "cuestionario",
    preguntas: [
      {
        pregunta: "¿Cuál de estos es un dispositivo de entrada?",
        tipo: "opcion_multiple",
        opciones: [
          "Monitor",
          "Altavoces",
          "Teclado",
          "Impresora"
        ],
        respuestaCorrecta: 2
      },
      {
        pregunta: "¿Qué componente es considerado el 'cerebro' del computador?",
        tipo: "opcion_multiple",
        opciones: [
          "RAM",
          "CPU",
          "Disco duro",
          "Motherboard"
        ],
        respuestaCorrecta: 1
      },
      {
        pregunta: "¿Cuál es la principal diferencia entre RAM y disco duro?",
        tipo: "opcion_multiple",
        opciones: [
          "La RAM es más cara",
          "El disco duro es más rápido",
          "La RAM es volátil, el disco duro es permanente",
          "No hay diferencia"
        ],
        respuestaCorrecta: 2
      },
      {
        pregunta: "¿Qué dispositivo es considerado 'mixto'?",
        tipo: "opcion_multiple",
        opciones: [
          "Ratón",
          "Monitor",
          "Pantalla táctil",
          "CPU"
        ],
        respuestaCorrecta: 2
      },
      {
        pregunta: "¿Cuál es la función principal de una GPU?",
        tipo: "opcion_multiple",
        opciones: [
          "Almacenar datos",
          "Procesar gráficos y cálculos paralelos",
          "Conectarse a internet",
          "Controlar dispositivos de entrada"
        ],
        respuestaCorrecta: 1
      }
    ]
  }
};

export default tema04;
