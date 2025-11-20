/**
 * Tema 6: Placa base y dispositivos de procesamiento
 * Curso: Introducción a la Informática
 */

export const tema06 = {
  id: '6',
  titulo: "Placa base y dispositivos de procesamiento",
  tematica: "Arquitectura y funciones",
  duracion: "35-40 minutos",
  objetivos: [
    "Conocer los componentes principales de la placa base (motherboard)",
    "Entender la arquitectura y funciones del procesador (CPU)",
    "Comprender los tipos y características de la memoria RAM",
    "Analizar la comunicación entre componentes del sistema"
  ],
  secciones: [
    {
      id: 1,
      titulo: "La Placa Base (Motherboard)",
      contenido: `
        <h3>🏗️ El Fundamento del Sistema</h3>
        
        <div class="placa-base">
          <h4>💡 ¿Qué es la Placa Base?</h4>
          <p>La <strong>placa base</strong> o <strong>motherboard</strong> es el circuito principal que conecta y permite la comunicación entre todos los componentes del computador.</p>

          <h4>🔗 Función Principal</h4>
          <ul>
            <li><strong>Soporte físico:</strong> Sostiene y conecta todos los componentes</li>
            <li><strong>Comunicación:</strong> Permite transferencia de datos entre elementos</li>
            <li><strong>Alimentación:</strong> Distribuye energía a los componentes</li>
            <li><strong>Control:</strong> Coordina el funcionamiento del sistema</li>
          </ul>

          <h4>🧩 Componentes Principales</h4>
          
          <div class="socket-cpu">
            <h5>🔌 Socket del CPU</h5>
            <ul>
              <li><strong>Definición:</strong> Conector donde se instala el procesador</li>
              <li><strong>Tipos:</strong> LGA, PGA, BGA (según fabricante)</li>
              <li><strong>Compatibilidad:</strong> Determina qué procesadores pueden usarse</li>
              <li><strong>Intel:</strong> LGA 1200, LGA 1700</li>
              <li><strong>AMD:</strong> AM4, AM5</li>
            </ul>
          </div>

          <div class="slots-memoria">
            <h5>📋 Slots de Memoria RAM</h5>
            <ul>
              <li><strong>DIMM:</strong> Dual In-line Memory Module (escritorio)</li>
              <li><strong>SO-DIMM:</strong> Small Outline DIMM (portátiles)</li>
              <li><strong>DDR4/DDR5:</strong> Tipos actuales de memoria</li>
              <li><strong>Dual Channel:</strong> Configuración para mayor rendimiento</li>
            </ul>
          </div>

          <div class="slots-expansion">
            <h5>🎯 Slots de Expansión</h5>
            <ul>
              <li><strong>PCIe x16:</strong> Para tarjetas gráficas</li>
              <li><strong>PCIe x1/x4/x8:</strong> Para tarjetas de red, sonido, etc.</li>
              <li><strong>M.2:</strong> Para almacenamiento SSD NVMe</li>
              <li><strong>SATA:</strong> Conectores para discos duros y SSD</li>
            </ul>
          </div>

          <h4>🔧 Conectores de Alimentación</h4>
          <ul>
            <li><strong>ATX 24-pin:</strong> Alimentación principal de la placa</li>
            <li><strong>CPU 4/8-pin:</strong> Alimentación específica del procesador</li>
            <li><strong>SATA Power:</strong> Para dispositivos de almacenamiento</li>
            <li><strong>Molex:</strong> Conectores auxiliares (ventiladores, etc.)</li>
          </ul>

          <h4>🌐 Conectores Externos (I/O Panel)</h4>
          <ul>
            <li><strong>USB:</strong> 2.0, 3.0, 3.1, USB-C</li>
            <li><strong>Audio:</strong> Entradas y salidas de sonido</li>
            <li><strong>Red:</strong> Ethernet RJ45</li>
            <li><strong>Video:</strong> HDMI, DisplayPort, VGA</li>
            <li><strong>PS/2:</strong> Para teclado y ratón (legacy)</li>
          </ul>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/placa-base-componentes.jpg",
        infografia: "/images/teoria/motherboard-layout.png"
      },
      actividades: [
        {
          tipo: "identificacion",
          pregunta: "Busca una imagen de placa base en internet e identifica al menos 5 componentes mencionados",
          ayuda: "Busca el socket del CPU, slots de RAM, conectores SATA y slots PCIe"
        }
      ]
    },
    {
      id: 2,
      titulo: "El Chipset: El Sistema Nervioso",
      contenido: `
        <h3>⚡ Control y Comunicación del Sistema</h3>
        
        <div class="chipset-sistema">
          <h4>🧠 ¿Qué es el Chipset?</h4>
          <p>El <strong>chipset</strong> es un conjunto de circuitos integrados que controlan la comunicación entre el CPU y los demás componentes del sistema.</p>

          <h4>🔄 Arquitectura Tradicional</h4>
          
          <div class="northbridge-southbridge">
            <h5>🔝 Northbridge (Puente Norte)</h5>
            <ul>
              <li><strong>Función:</strong> Comunicación de alta velocidad</li>
              <li><strong>Conecta:</strong> CPU, RAM, tarjeta gráfica</li>
              <li><strong>Características:</strong> Mayor velocidad, menor latencia</li>
              <li><strong>Evolución:</strong> Integrado en CPU modernos</li>
            </ul>

            <h5>🔽 Southbridge (Puente Sur)</h5>
            <ul>
              <li><strong>Función:</strong> Comunicación de baja velocidad</li>
              <li><strong>Conecta:</strong> USB, SATA, audio, red</li>
              <li><strong>Características:</strong> Mayor latencia, muchas conexiones</li>
              <li><strong>Actual:</strong> Platform Controller Hub (PCH)</li>
            </ul>
          </div>

          <h4>🚀 Arquitectura Moderna</h4>
          
          <div class="arquitectura-actual">
            <h5>🔗 Integración en CPU</h5>
            <ul>
              <li><strong>Controlador de memoria:</strong> Directamente en el CPU</li>
              <li><strong>PCIe integrado:</strong> Líneas directas desde procesador</li>
              <li><strong>Gráficos integrados:</strong> GPU en el mismo chip</li>
              <li><strong>Menor latencia:</strong> Comunicación más directa</li>
            </ul>

            <h5>🎛️ Platform Controller Hub (PCH)</h5>
            <ul>
              <li><strong>Reemplaza:</strong> Al southbridge tradicional</li>
              <li><strong>Gestiona:</strong> USB, SATA, Ethernet, audio</li>
              <li><strong>Conectividad:</strong> DMI (Direct Media Interface)</li>
              <li><strong>Funciones:</strong> I/O, almacenamiento, periféricos</li>
            </ul>
          </div>

          <h4>🛣️ Sistema de Buses</h4>
          
          <div class="sistemas-buses">
            <h5>📊 Bus de Datos</h5>
            <ul>
              <li><strong>Función:</strong> Transporta información entre componentes</li>
              <li><strong>Ancho:</strong> 32, 64, 128 bits</li>
              <li><strong>Bidireccional:</strong> Datos van y vienen</li>
            </ul>

            <h5>📍 Bus de Direcciones</h5>
            <ul>
              <li><strong>Función:</strong> Especifica ubicación en memoria</li>
              <li><strong>Unidireccional:</strong> Solo desde CPU</li>
              <li><strong>Capacidad:</strong> Determina máxima memoria direccionable</li>
            </ul>

            <h5>⚡ Bus de Control</h5>
            <ul>
              <li><strong>Función:</strong> Señales de sincronización</li>
              <li><strong>Incluye:</strong> Clock, read/write, interrupt</li>
              <li><strong>Coordina:</strong> Operaciones del sistema</li>
            </ul>
          </div>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/chipset-arquitectura.jpg",
        infografia: "/images/teoria/buses-sistema.png"
      },
      actividades: [
        {
          tipo: "investigacion",
          pregunta: "Investiga qué chipset tiene tu computadora y cuáles son sus características",
          ayuda: "Usa CPU-Z o revisa las especificaciones del fabricante de tu placa base"
        }
      ]
    },
    {
      id: 3,
      titulo: "El Procesador (CPU): El Cerebro del Sistema",
      contenido: `
        <h3>🧠 Arquitectura y Funcionamiento del CPU</h3>
        
        <div class="procesador-cpu">
          <h4>⚡ ¿Qué es el CPU?</h4>
          <p>El <strong>CPU</strong> (Central Processing Unit) es el componente que ejecuta las instrucciones de los programas, realizando cálulos y tomando decisiones lógicas.</p>

          <h4>🏗️ Arquitectura Interna</h4>
          
          <div class="componentes-cpu">
            <h5>🔧 Unidad de Control (Control Unit)</h5>
            <ul>
              <li><strong>Función:</strong> Dirige y coordina las operaciones</li>
              <li><strong>Decodifica:</strong> Instrucciones del programa</li>
              <li><strong>Controla:</strong> Flujo de datos entre componentes</li>
              <li><strong>Sincroniza:</strong> Operaciones con señal de reloj</li>
            </ul>

            <h5>🧮 Unidad Aritmético-Lógica (ALU)</h5>
            <ul>
              <li><strong>Operaciones aritméticas:</strong> Suma, resta, multiplicación, división</li>
              <li><strong>Operaciones lógicas:</strong> AND, OR, NOT, XOR</li>
              <li><strong>Comparaciones:</strong> Mayor, menor, igual</li>
              <li><strong>Desplazamientos:</strong> Rotaciones de bits</li>
            </ul>

            <h5>📁 Registros</h5>
            <ul>
              <li><strong>Memoria interna:</strong> Almacenamiento temporal muy rápido</li>
              <li><strong>Tipos:</strong> Generales, especiales, índice</li>
              <li><strong>Tamaño:</strong> 8, 16, 32, 64 bits</li>
              <li><strong>Velocidad:</strong> Acceso en un ciclo de reloj</li>
            </ul>
          </div>

          <h4>🔄 Ciclo de Instrucción</h4>
          
          <div class="ciclo-instruccion">
            <h5>📥 1. Fetch (Búsqueda)</h5>
            <ul>
              <li>CPU lee instrucción de memoria</li>
              <li>Program Counter indica la dirección</li>
              <li>Instrucción se carga en registro</li>
            </ul>

            <h5>🔍 2. Decode (Decodificación)</h5>
            <ul>
              <li>Unidad de control interpreta instrucción</li>
              <li>Identifica operación a realizar</li>
              <li>Determina operandos necesarios</li>
            </ul>

            <h5>⚡ 3. Execute (Ejecución)</h5>
            <ul>
              <li>ALU realiza la operación</li>
              <li>Registros almacenan resultados</li>
              <li>Actualiza flags de estado</li>
            </ul>

            <h5>💾 4. Store (Almacenamiento)</h5>
            <ul>
              <li>Resultado se guarda en memoria</li>
              <li>Actualiza Program Counter</li>
              <li>Prepara siguiente instrucción</li>
            </ul>
          </div>

          <h4>📊 Características del CPU</h4>
          
          <div class="caracteristicas-cpu">
            <h5>⏱️ Frecuencia de Reloj</h5>
            <ul>
              <li><strong>Definición:</strong> Velocidad de ejecución (Hz)</li>
              <li><strong>Medida:</strong> Gigahertz (GHz) - miles de millones de ciclos/segundo</li>
              <li><strong>Actual:</strong> 2.0 - 5.0 GHz típicamente</li>
              <li><strong>Importancia:</strong> Más GHz = más instrucciones por segundo</li>
            </ul>

            <h5>🌊 Núcleos (Cores)</h5>
            <ul>
              <li><strong>Multinúcleo:</strong> Varios procesadores en un chip</li>
              <li><strong>Paralelismo:</strong> Ejecuta múltiples tareas simultáneamente</li>
              <li><strong>Típicos:</strong> 2, 4, 6, 8, 16+ núcleos</li>
              <li><strong>Aplicaciones:</strong> Multitarea, juegos, renderizado</li>
            </ul>

            <h5>💾 Memoria Caché</h5>
            <ul>
              <li><strong>L1:</strong> 32-64 KB, más rápida, por núcleo</li>
              <li><strong>L2:</strong> 256 KB-1 MB, rápida, por núcleo</li>
              <li><strong>L3:</strong> 8-32 MB, compartida entre núcleos</li>
              <li><strong>Función:</strong> Almacena datos frecuentemente usados</li>
            </ul>

            <h5>🔧 Arquitectura</h5>
            <ul>
              <li><strong>x86:</strong> Intel/AMD computadoras de escritorio</li>
              <li><strong>x64 (x86-64):</strong> Extensión de 64 bits</li>
              <li><strong>ARM:</strong> Smartphones, tablets, eficiencia energética</li>
              <li><strong>RISC vs CISC:</strong> Filosofías de diseño diferentes</li>
            </ul>
          </div>

          <h4>🏭 Principales Fabricantes</h4>
          
          <div class="fabricantes">
            <h5>🔷 Intel</h5>
            <ul>
              <li><strong>Familias:</strong> Core i3, i5, i7, i9</li>
              <li><strong>Servidor:</strong> Xeon</li>
              <li><strong>Arquitecturas:</strong> x86, x64</li>
              <li><strong>Tecnologías:</strong> Turbo Boost, Hyper-Threading</li>
            </ul>

            <h5>🔴 AMD</h5>
            <ul>
              <li><strong>Familias:</strong> Ryzen 3, 5, 7, 9</li>
              <li><strong>Servidor:</strong> EPYC</li>
              <li><strong>Arquitecturas:</strong> Zen, Zen 2, Zen 3, Zen 4</li>
              <li><strong>Tecnologías:</strong> Precision Boost, SMT</li>
            </ul>

            <h5>📱 ARM</h5>
            <ul>
              <li><strong>Aplicación:</strong> Móviles, tablets, IoT</li>
              <li><strong>Características:</strong> Bajo consumo, eficiencia</li>
              <li><strong>Fabricantes:</strong> Apple (M1/M2), Qualcomm, Samsung</li>
              <li><strong>Tendencia:</strong> Expansión a laptops y servidores</li>
            </ul>
          </div>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/cpu-arquitectura.jpg",
        infografia: "/images/teoria/ciclo-instruccion.png"
      },
      actividades: [
        {
          tipo: "investigacion",
          pregunta: "Identifica las especificaciones de tu CPU: modelo, núcleos, frecuencia y caché",
          ayuda: "Usa el Administrador de tareas en Windows o aplicaciones como CPU-Z"
        }
      ]
    },
    {
      id: 4,
      titulo: "Memoria RAM: Almacenamiento Temporal",
      contenido: `
        <h3>💾 La Memoria de Trabajo del Sistema</h3>
        
        <div class="memoria-ram">
          <h4>⚡ ¿Qué es la Memoria RAM?</h4>
          <p>La <strong>RAM</strong> (Random Access Memory) es la memoria principal del sistema donde se almacenan temporalmente los programas en ejecución y los datos que el CPU necesita procesar.</p>

          <h4>🔑 Características Principales</h4>
          <ul>
            <li><strong>Volátil:</strong> Pierde datos al apagar el sistema</li>
            <li><strong>Acceso aleatorio:</strong> Cualquier posición es accesible directamente</li>
            <li><strong>Alta velocidad:</strong> Mucho más rápida que almacenamiento</li>
            <li><strong>Temporal:</strong> Solo mantiene datos durante ejecución</li>
          </ul>

          <h4>🔧 Tipos de Memoria RAM</h4>
          
          <div class="tipos-ram">
            <h5>📊 DDR SDRAM (Double Data Rate)</h5>
            <ul>
              <li><strong>DDR:</strong> 184 pines, hasta 400 MHz</li>
              <li><strong>DDR2:</strong> 240 pines, hasta 800 MHz</li>
              <li><strong>DDR3:</strong> 240 pines, hasta 1600 MHz</li>
              <li><strong>DDR4:</strong> 288 pines, hasta 3200+ MHz</li>
              <li><strong>DDR5:</strong> 288 pines, hasta 6400+ MHz</li>
            </ul>

            <h5>💻 Factores de Forma</h5>
            <ul>
              <li><strong>DIMM:</strong> Escritorio, 240/288 pines</li>
              <li><strong>SO-DIMM:</strong> Portátiles, más pequeño</li>
              <li><strong>Micro-DIMM:</strong> Dispositivos ultraportátiles</li>
              <li><strong>ECC:</strong> Con corrección de errores (servidores)</li>
            </ul>
          </div>

          <h4>📈 Especificaciones Técnicas</h4>
          
          <div class="especificaciones-ram">
            <h5>💾 Capacidad</h5>
            <ul>
              <li><strong>Módulos comunes:</strong> 4GB, 8GB, 16GB, 32GB</li>
              <li><strong>Configuraciones:</strong> Single, dual, quad channel</li>
              <li><strong>Máximo teórico:</strong> Depende del chipset y SO</li>
              <li><strong>Recomendado 2024:</strong> 16-32GB para uso general</li>
            </ul>

            <h5>⚡ Velocidad y Frecuencia</h5>
            <ul>
              <li><strong>Frecuencia base:</strong> 1600, 2400, 3200 MHz</li>
              <li><strong>Velocidad efectiva:</strong> Doble por DDR</li>
              <li><strong>Ancho de banda:</strong> GB/s de transferencia</li>
              <li><strong>Latencia:</strong> CL (CAS Latency) - menor es mejor</li>
            </ul>

            <h5>🕐 Timings</h5>
            <ul>
              <li><strong>CAS Latency (CL):</strong> Tiempo para acceder a dato</li>
              <li><strong>tRCD:</strong> RAS to CAS Delay</li>
              <li><strong>tRP:</strong> RAS Precharge Time</li>
              <li><strong>Formato:</strong> CL16-18-18-36 (ejemplo DDR4)</li>
            </ul>
          </div>

          <h4>🚀 Configuraciones de Memoria</h4>
          
          <div class="configuraciones">
            <h5>🔗 Single Channel</h5>
            <ul>
              <li><strong>Configuración:</strong> Un solo módulo o slot</li>
              <li><strong>Ancho de banda:</strong> Limitado a 64 bits</li>
              <li><strong>Uso:</strong> Sistemas básicos o económicos</li>
            </ul>

            <h5>⚡ Dual Channel</h5>
            <ul>
              <li><strong>Configuración:</strong> Dos módulos idénticos</li>
              <li><strong>Ancho de banda:</strong> Doble (128 bits)</li>
              <li><strong>Ubicación:</strong> Slots del mismo color</li>
              <li><strong>Beneficio:</strong> 20-30% mejor rendimiento</li>
            </ul>

            <h5>🏎️ Quad Channel</h5>
            <ul>
              <li><strong>Configuración:</strong> Cuatro módulos</li>
              <li><strong>Aplicación:</strong> Workstations y servidores</li>
              <li><strong>Ancho de banda:</strong> Cuádruple (256 bits)</li>
              <li><strong>Requisito:</strong> Chipset compatible</li>
            </ul>
          </div>

          <h4>⚙️ Funcionamiento de la RAM</h4>
          
          <div class="funcionamiento">
            <h5>📥 Proceso de Carga</h5>
            <ol>
              <li><strong>Programa se ejecuta:</strong> SO carga desde almacenamiento</li>
              <li><strong>Asignación:</strong> RAM reserva espacio necesario</li>
              <li><strong>Transferencia:</strong> Datos pasan de HDD/SSD a RAM</li>
              <li><strong>Acceso rápido:</strong> CPU lee/escribe desde RAM</li>
            </ol>

            <h5>🔄 Gestión de Memoria</h5>
            <ul>
              <li><strong>Virtual Memory:</strong> Usa almacenamiento como RAM adicional</li>
              <li><strong>Paging:</strong> División en páginas de memoria</li>
              <li><strong>Swap/Pagefile:</strong> Intercambio con almacenamiento</li>
              <li><strong>Garbage Collection:</strong> Liberación automática</li>
            </ul>
          </div>

          <h4>🛠️ Optimización y Problemas</h4>
          
          <div class="optimizacion">
            <h5>📊 Monitoreando RAM</h5>
            <ul>
              <li><strong>Administrador de tareas:</strong> Uso actual y disponible</li>
              <li><strong>Resource Monitor:</strong> Detalles por proceso</li>
              <li><strong>CMD:</strong> comando "wmic memorychip"</li>
              <li><strong>Software:</strong> CPU-Z, HWiNFO64</li>
            </ul>

            <h5>⚠️ Problemas Comunes</h5>
            <ul>
              <li><strong>Memoria insuficiente:</strong> Sistema lento, swap excesivo</li>
              <li><strong>Módulos defectuosos:</strong> Pantallas azules, errores</li>
              <li><strong>Incompatibilidad:</strong> Velocidades o timings diferentes</li>
              <li><strong>Sobrecalentamiento:</strong> Errores de estabilidad</li>
            </ul>
          </div>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/memoria-ram.jpg",
        infografia: "/images/teoria/tipos-ram.png"
      },
      actividades: [
        {
          tipo: "practica",
          pregunta: "Verifica cuánta RAM tiene tu sistema y cuánta está en uso actualmente",
          ayuda: "Abre el Administrador de tareas → Rendimiento → Memoria"
        }
      ]
    },
    {
      id: 5,
      titulo: "Arquitectura de von Neumann",
      contenido: `
        <h3>🏛️ El Modelo Fundamental de la Computación</h3>
        
        <div class="arquitectura-von-neumann">
          <h4>🧠 ¿Qué es la Arquitectura de von Neumann?</h4>
          <p>La <strong>arquitectura de von Neumann</strong> es el diseño fundamental que describe la estructura y funcionamiento de la mayoría de computadoras modernas, propuesta por John von Neumann en 1945.</p>

          <h4>🔧 Componentes Principales</h4>
          
          <div class="componentes-von-neumann">
            <h5>🧠 Unidad Central de Procesamiento (CPU)</h5>
            <ul>
              <li><strong>Unidad de Control:</strong> Dirige operaciones del sistema</li>
              <li><strong>Unidad Aritmético-Lógica:</strong> Realiza cálculos y operaciones</li>
              <li><strong>Registros:</strong> Almacenamiento temporal interno</li>
              <li><strong>Función:</strong> Ejecuta instrucciones del programa</li>
            </ul>

            <h5>💾 Memoria Principal</h5>
            <ul>
              <li><strong>Almacena:</strong> Programas e instrucciones</li>
              <li><strong>Contiene:</strong> Datos que procesa el CPU</li>
              <li><strong>Acceso:</strong> Lectura y escritura por direcciones</li>
              <li><strong>Característica:</strong> Programa almacenado (stored program)</li>
            </ul>

            <h5>📥 Dispositivos de Entrada</h5>
            <ul>
              <li><strong>Función:</strong> Capturan datos del exterior</li>
              <li><strong>Ejemplos:</strong> Teclado, ratón, micrófono</li>
              <li><strong>Proceso:</strong> Convierten datos a formato digital</li>
              <li><strong>Destino:</strong> Envían información a memoria</li>
            </ul>

            <h5>📤 Dispositivos de Salida</h5>
            <ul>
              <li><strong>Función:</strong> Presentan resultados al usuario</li>
              <li><strong>Ejemplos:</strong> Monitor, impresora, altavoces</li>
              <li><strong>Proceso:</strong> Convierten datos digitales a formato comprensible</li>
              <li><strong>Origen:</strong> Reciben información procesada</li>
            </ul>
          </div>

          <h4>🔄 Funcionamiento del Sistema</h4>
          
          <div class="funcionamiento-von-neumann">
            <h5>📊 Concepto del "Programa Almacenado"</h5>
            <ul>
              <li><strong>Innovación:</strong> Programas e instrucciones en misma memoria</li>
              <li><strong>Flexibilidad:</strong> Programas pueden modificarse fácilmente</li>
              <li><strong>Ventaja:</strong> No requiere reconfiguración física</li>
              <li><strong>Base:</strong> Computadoras de propósito general</li>
            </ul>

            <h5>🚌 Sistema de Buses</h5>
            <ul>
              <li><strong>Bus de Datos:</strong> Transporta información entre componentes</li>
              <li><strong>Bus de Direcciones:</strong> Especifica ubicaciones de memoria</li>
              <li><strong>Bus de Control:</strong> Señales de sincronización y control</li>
              <li><strong>Comunicación:</strong> Permite interacción entre elementos</li>
            </ul>
          </div>

          <h4>⚡ Ciclo de Ejecución</h4>
          
          <div class="ciclo-ejecucion">
            <h5>1️⃣ Fetch (Búsqueda)</h5>
            <ul>
              <li>CPU lee siguiente instrucción de memoria</li>
              <li>Program Counter indica dirección actual</li>
              <li>Instrucción se carga en registro interno</li>
            </ul>

            <h5>2️⃣ Decode (Decodificación)</h5>
            <ul>
              <li>Unidad de Control analiza instrucción</li>
              <li>Identifica operación a realizar</li>
              <li>Determina operandos necesarios</li>
            </ul>

            <h5>3️⃣ Execute (Ejecución)</h5>
            <ul>
              <li>ALU realiza operación especificada</li>
              <li>Puede involucrar acceso a memoria</li>
              <li>Resultado se almacena temporalmente</li>
            </ul>

            <h5>4️⃣ Store (Almacenamiento)</h5>
            <ul>
              <li>Resultado se guarda en memoria</li>
              <li>Program Counter se actualiza</li>
              <li>Ciclo se repite con siguiente instrucción</li>
            </ul>
          </div>

          <h4>🎯 Ventajas y Limitaciones</h4>
          
          <div class="ventajas-limitaciones">
            <h5>✅ Ventajas</h5>
            <ul>
              <li><strong>Simplicidad:</strong> Diseño elegante y comprensible</li>
              <li><strong>Flexibilidad:</strong> Programas modificables sin cambiar hardware</li>
              <li><strong>Generalidad:</strong> Puede ejecutar cualquier algoritmo</li>
              <li><strong>Estándar:</strong> Base de la mayoría de computadoras</li>
            </ul>

            <h5>⚠️ Limitaciones (Cuello de Botella de von Neumann)</h5>
            <ul>
              <li><strong>Secuencial:</strong> Una instrucción a la vez</li>
              <li><strong>Bus compartido:</strong> Datos e instrucciones compiten</li>
              <li><strong>Velocidad limitada:</strong> Por velocidad de memoria</li>
              <li><strong>Procesamiento:</strong> No aprovecha paralelismo natural</li>
            </ul>
          </div>

          <h4>🚀 Evoluciones Modernas</h4>
          
          <div class="evoluciones">
            <h5>📊 Arquitecturas Paralelas</h5>
            <ul>
              <li><strong>Múltiples núcleos:</strong> Varios procesadores en un chip</li>
              <li><strong>Pipelines:</strong> Ejecución solapada de instrucciones</li>
              <li><strong>Superescalar:</strong> Múltiples instrucciones simultáneas</li>
              <li><strong>SIMD:</strong> Una instrucción, múltiples datos</li>
            </ul>

            <h5>💾 Jerarquía de Memoria</h5>
            <ul>
              <li><strong>Caché:</strong> Memoria rápida cerca del CPU</li>
              <li><strong>Predicción:</strong> Anticipar instrucciones futuras</li>
              <li><strong>Prefetch:</strong> Cargar datos antes de necesitarlos</li>
              <li><strong>Out-of-order:</strong> Ejecución no secuencial optimizada</li>
            </ul>

            <h5>🔧 Arquitecturas Alternativas</h5>
            <ul>
              <li><strong>Harvard:</strong> Memoria separada para datos e instrucciones</li>
              <li><strong>RISC vs CISC:</strong> Diferentes filosofías de instrucciones</li>
              <li><strong>GPU:</strong> Procesamiento masivamente paralelo</li>
              <li><strong>Quantum:</strong> Computación cuántica experimental</li>
            </ul>
          </div>

          <h4>🌍 Impacto e Importancia</h4>
          <ul>
            <li><strong>Fundamento:</strong> Base de toda la computación moderna</li>
            <li><strong>Simplicidad:</strong> Permitió desarrollo masivo de software</li>
            <li><strong>Estandardización:</strong> Facilitó compatibilidad entre sistemas</li>
            <li><strong>Evolución:</strong> Guía para mejoras y optimizaciones</li>
          </ul>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/arquitectura-von-neumann.jpg",
        infografia: "/images/teoria/ciclo-von-neumann.png"
      },
      actividades: [
        {
          tipo: "analisis",
          pregunta: "Explica cómo los componentes de tu computadora siguen la arquitectura de von Neumann",
          ayuda: "Identifica CPU, RAM, dispositivos de entrada/salida y cómo se comunican"
        }
      ]
    }
  ],
  recursos: {
    documentos: [
      {
        titulo: "Guía de Componentes de la Placa Base",
        url: "/docs/guia-motherboard.pdf",
        tipo: "pdf"
      },
      {
        titulo: "Manual de Arquitectura del Procesador",
        url: "/docs/arquitectura-cpu.pdf",
        tipo: "pdf"
      },
      {
        titulo: "Especificaciones de Memoria RAM",
        url: "/docs/especificaciones-ram.pdf",
        tipo: "pdf"
      }
    ],
    enlaces: [
      {
        titulo: "Intel Architecture Developer Manual",
        url: "https://www.intel.com/content/www/us/en/developer/articles/technical/intel-sdm.html",
        tipo: "externo"
      },
      {
        titulo: "AMD Processor Architecture",
        url: "https://developer.amd.com/resources/developer-guides-manuals/",
        tipo: "externo"
      },
      {
        titulo: "JEDEC Memory Standards",
        url: "https://www.jedec.org/",
        tipo: "externo"
      }
    ],
    videos: [
      {
        titulo: "Arquitectura de von Neumann Explicada",
        url: "/videos/von-neumann-arquitectura.mp4",
        duracion: "12:30"
      },
      {
        titulo: "Funcionamiento del Procesador",
        url: "/videos/cpu-funcionamiento.mp4",
        duracion: "15:45"
      }
    ]
  },
  evaluacion: {
    tipo: "cuestionario",
    preguntas: [
      {
        pregunta: "¿Cuál es la función principal de la placa base en un computador?",
        tipo: "opcion_multiple",
        opciones: [
          "Procesar las instrucciones del programa",
          "Conectar y permitir comunicación entre todos los componentes",
          "Almacenar datos permanentemente",
          "Mostrar información al usuario"
        ],
        respuesta_correcta: 1,
        explicacion: "La placa base es el circuito principal que conecta y permite la comunicación entre todos los componentes del sistema."
      },
      {
        pregunta: "¿Qué componente del CPU se encarga de realizar las operaciones matemáticas?",
        tipo: "opcion_multiple",
        opciones: [
          "Unidad de Control",
          "Registros",
          "Unidad Aritmético-Lógica (ALU)",
          "Caché"
        ],
        respuesta_correcta: 2,
        explicacion: "La ALU (Arithmetic Logic Unit) es responsable de realizar todas las operaciones aritméticas y lógicas."
      },
      {
        pregunta: "¿Cuál es la principal característica de la memoria RAM?",
        tipo: "opcion_multiple",
        opciones: [
          "Es permanente y no se borra al apagar",
          "Es volátil y pierde datos sin energía",
          "Solo puede almacenar programas",
          "Es más lenta que el disco duro"
        ],
        respuesta_correcta: 1,
        explicacion: "La RAM es memoria volátil, lo que significa que pierde todos los datos cuando se corta la alimentación eléctrica."
      },
      {
        pregunta: "¿Qué innovación principal introdujo la arquitectura de von Neumann?",
        tipo: "opcion_multiple",
        opciones: [
          "Múltiples procesadores",
          "Programas almacenados en memoria",
          "Interfaces gráficas",
          "Redes de computadoras"
        ],
        respuesta_correcta: 1,
        explicacion: "El concepto de 'programa almacenado' permite que las instrucciones y datos se guarden en la misma memoria, haciendo las computadoras más flexibles."
      },
      {
        pregunta: "¿Cuáles son las cuatro etapas del ciclo de instrucción del CPU?",
        tipo: "completar",
        respuesta_correcta: "Fetch (Búsqueda), Decode (Decodificación), Execute (Ejecución), Store (Almacenamiento)",
        explicacion: "Estas cuatro etapas se repiten continuamente para ejecutar las instrucciones de un programa."
      }
    ]
  }
};

export default tema06;
