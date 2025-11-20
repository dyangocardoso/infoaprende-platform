/**
 * Tema 7: Memoria y almacenamiento
 * Curso: Introducción a la Informática
 */

export const tema07 = {
  id: '7',
  titulo: "Memoria y almacenamiento",
  tematica: "Tipos y tecnologías",
  duracion: "40-45 minutos",
  objetivos: [
    "Comprender la jerarquía de memoria en los sistemas informáticos",
    "Distinguir entre diferentes tipos de almacenamiento y sus aplicaciones",
    "Conocer las tecnologías modernas de almacenamiento y sus características",
    "Comparar velocidades, capacidades y costos de diferentes medios"
  ],
  secciones: [
    {
      id: 1,
      titulo: "Jerarquía de Memoria",
      contenido: `
        <h3>🏗️ La Pirámide de la Memoria</h3>
        
        <div class="jerarquia-memoria">
          <h4>📊 ¿Qué es la Jerarquía de Memoria?</h4>
          <p>La <strong>jerarquía de memoria</strong> es la organización de diferentes tipos de memoria en niveles, desde la más rápida y cara hasta la más lenta y económica.</p>

          <h4>⚡ Principios Fundamentales</h4>
          <ul>
            <li><strong>Velocidad vs Capacidad:</strong> Memoria más rápida = menor capacidad</li>
            <li><strong>Costo vs Capacidad:</strong> Memoria más cara = menor capacidad</li>
            <li><strong>Localidad temporal:</strong> Datos usados recientemente se volverán a usar</li>
            <li><strong>Localidad espacial:</strong> Datos cercanos tienden a usarse juntos</li>
          </ul>

          <h4>🏰 Niveles de la Jerarquía</h4>
          
          <div class="niveles-jerarquia">
            <h5>🥇 Nivel 1: Registros del CPU</h5>
            <ul>
              <li><strong>Ubicación:</strong> Dentro del procesador</li>
              <li><strong>Capacidad:</strong> 32-128 registros × 32/64 bits</li>
              <li><strong>Velocidad:</strong> 1 ciclo de reloj (0.2-0.5 ns)</li>
              <li><strong>Costo:</strong> Muy alto por bit</li>
              <li><strong>Uso:</strong> Operaciones inmediatas del CPU</li>
            </ul>

            <h5>🥈 Nivel 2: Memoria Caché</h5>
            <ul>
              <li><strong>L1 Cache:</strong> 32-64 KB, ~1 ns</li>
              <li><strong>L2 Cache:</strong> 256 KB-1 MB, ~3-5 ns</li>
              <li><strong>L3 Cache:</strong> 8-32 MB, ~12-15 ns</li>
              <li><strong>Función:</strong> Almacena datos frecuentemente accedidos</li>
            </ul>

            <h5>🥉 Nivel 3: Memoria Principal (RAM)</h5>
            <ul>
              <li><strong>Capacidad:</strong> 4-128 GB típicamente</li>
              <li><strong>Velocidad:</strong> 50-100 ns</li>
              <li><strong>Tecnología:</strong> DDR4/DDR5 SDRAM</li>
              <li><strong>Uso:</strong> Programas y datos en ejecución</li>
            </ul>

            <h5>4️⃣ Nivel 4: Almacenamiento Secundario</h5>
            <ul>
              <li><strong>SSD:</strong> 128 GB-8 TB, ~0.1 ms</li>
              <li><strong>HDD:</strong> 500 GB-20 TB, ~5-10 ms</li>
              <li><strong>Función:</strong> Almacenamiento permanente</li>
            </ul>

            <h5>5️⃣ Nivel 5: Almacenamiento Terciario</h5>
            <ul>
              <li><strong>Óptico:</strong> CD, DVD, Blu-ray</li>
              <li><strong>Cinta magnética:</strong> Backups empresariales</li>
              <li><strong>Nube:</strong> Almacenamiento remoto</li>
              <li><strong>Archivo:</strong> Datos de acceso poco frecuente</li>
            </ul>
          </div>

          <h4>📈 Comparación de Rendimiento</h4>
          <div class="tabla-rendimiento">
            <table>
              <tr>
                <th>Nivel</th>
                <th>Tipo</th>
                <th>Capacidad</th>
                <th>Latencia</th>
                <th>Ancho de Banda</th>
                <th>Costo/GB</th>
              </tr>
              <tr>
                <td>L1</td>
                <td>Cache</td>
                <td>64 KB</td>
                <td>0.5 ns</td>
                <td>1000+ GB/s</td>
                <td>$$$$$</td>
              </tr>
              <tr>
                <td>L2</td>
                <td>Cache</td>
                <td>512 KB</td>
                <td>3 ns</td>
                <td>500 GB/s</td>
                <td>$$$$</td>
              </tr>
              <tr>
                <td>L3</td>
                <td>Cache</td>
                <td>16 MB</td>
                <td>12 ns</td>
                <td>200 GB/s</td>
                <td>$$$</td>
              </tr>
              <tr>
                <td>RAM</td>
                <td>DRAM</td>
                <td>16 GB</td>
                <td>60 ns</td>
                <td>50 GB/s</td>
                <td>$$</td>
              </tr>
              <tr>
                <td>SSD</td>
                <td>NAND</td>
                <td>1 TB</td>
                <td>0.1 ms</td>
                <td>3 GB/s</td>
                <td>$</td>
              </tr>
              <tr>
                <td>HDD</td>
                <td>Magnético</td>
                <td>4 TB</td>
                <td>8 ms</td>
                <td>200 MB/s</td>
                <td>$</td>
              </tr>
            </table>
          </div>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/jerarquia-memoria.jpg",
        infografia: "/images/teoria/piramide-memoria.png"
      },
      actividades: [
        {
          tipo: "analisis",
          pregunta: "Explica por qué es necesaria una jerarquía de memoria en lugar de usar solo el tipo más rápido",
          ayuda: "Piensa en la relación entre velocidad, capacidad y costo"
        }
      ]
    },
    {
      id: 2,
      titulo: "Memoria Principal (RAM)",
      contenido: `
        <h3>💾 El Espacio de Trabajo del Sistema</h3>
        
        <div class="memoria-principal">
          <h4>🎯 Función de la Memoria Principal</h4>
          <p>La <strong>memoria principal</strong> o RAM es donde el sistema operativo y las aplicaciones cargan sus programas y datos para que el CPU pueda acceder a ellos rápidamente.</p>

          <h4>🔧 Tipos de Tecnología DRAM</h4>
          
          <div class="tipos-dram">
            <h5>📊 SDRAM (Synchronous DRAM)</h5>
            <ul>
              <li><strong>Características:</strong> Sincronizada con reloj del sistema</li>
              <li><strong>Velocidad:</strong> 66-133 MHz</li>
              <li><strong>Época:</strong> 1990s-2000s</li>
              <li><strong>Uso:</strong> Sistemas legacy</li>
            </ul>

            <h5>⚡ DDR SDRAM (Double Data Rate)</h5>
            <ul>
              <li><strong>Innovación:</strong> Transfiere datos en ambos flancos del reloj</li>
              <li><strong>Velocidad efectiva:</strong> Doble de la frecuencia base</li>
              <li><strong>Evolución:</strong> DDR → DDR2 → DDR3 → DDR4 → DDR5</li>
            </ul>

            <h5>🚀 DDR4 (Actual)</h5>
            <ul>
              <li><strong>Frecuencias:</strong> 2133-3200+ MHz</li>
              <li><strong>Voltaje:</strong> 1.2V (menor consumo)</li>
              <li><strong>Capacidad máxima:</strong> 32 GB por módulo</li>
              <li><strong>Pines:</strong> 288 en DIMM</li>
            </ul>

            <h5>⚡ DDR5 (Nueva Generación)</h5>
            <ul>
              <li><strong>Frecuencias:</strong> 4800-6400+ MHz</li>
              <li><strong>Voltaje:</strong> 1.1V (aún menor consumo)</li>
              <li><strong>Capacidad máxima:</strong> 128 GB por módulo</li>
              <li><strong>Mejoras:</strong> Mayor ancho de banda, menor latencia</li>
            </ul>
          </div>

          <h4>🔄 Funcionamiento de la DRAM</h4>
          
          <div class="funcionamiento-dram">
            <h5>⚡ Estructura Básica</h5>
            <ul>
              <li><strong>Celda de memoria:</strong> 1 transistor + 1 capacitor</li>
              <li><strong>Matriz:</strong> Organizadas en filas y columnas</li>
              <li><strong>Banco:</strong> Múltiples matrices por chip</li>
              <li><strong>Módulo:</strong> Múltiples chips en PCB</li>
            </ul>

            <h5>🔧 Operaciones de Acceso</h5>
            <ul>
              <li><strong>RAS (Row Address Strobe):</strong> Selecciona fila</li>
              <li><strong>CAS (Column Address Strobe):</strong> Selecciona columna</li>
              <li><strong>Precharge:</strong> Prepara para siguiente acceso</li>
              <li><strong>Refresh:</strong> Mantiene datos en capacitores</li>
            </ul>
          </div>

          <h4>📊 Especificaciones de Rendimiento</h4>
          
          <div class="especificaciones-ram">
            <h5>⏱️ Latencia (Timings)</h5>
            <ul>
              <li><strong>CAS Latency (CL):</strong> Tiempo de respuesta (ciclos)</li>
              <li><strong>tRCD:</strong> RAS to CAS Delay</li>
              <li><strong>tRP:</strong> RAS Precharge Time</li>
              <li><strong>tRAS:</strong> Active to Precharge Delay</li>
              <li><strong>Formato:</strong> CL16-18-18-36 (DDR4-3200)</li>
            </ul>

            <h5>🌊 Ancho de Banda</h5>
            <ul>
              <li><strong>Fórmula:</strong> Frecuencia × Ancho de bus × Canales</li>
              <li><strong>DDR4-3200:</strong> 3200 MHz × 64 bits × 2 canales = 51.2 GB/s</li>
              <li><strong>Limitaciones:</strong> Latencia, controlador de memoria</li>
            </ul>
          </div>

          <h4>⚙️ Configuraciones de Memoria</h4>
          
          <div class="configuraciones-memoria">
            <h5>🔗 Multicanal</h5>
            <ul>
              <li><strong>Single Channel:</strong> Un módulo, 64-bit bus</li>
              <li><strong>Dual Channel:</strong> Dos módulos, 128-bit bus</li>
              <li><strong>Triple Channel:</strong> Tres módulos (algunos Intel)</li>
              <li><strong>Quad Channel:</strong> Cuatro módulos (HEDT/Server)</li>
            </ul>

            <h5>🛠️ Instalación Óptima</h5>
            <ul>
              <li><strong>Pares idénticos:</strong> Misma marca, modelo, especificaciones</li>
              <li><strong>Slots correctos:</strong> Colores coincidentes en placa base</li>
              <li><strong>XMP/DOCP:</strong> Perfiles de overclocking automático</li>
              <li><strong>Verificación:</strong> BIOS/UEFI para confirmar configuración</li>
            </ul>
          </div>

          <h4>🔍 Tecnologías Especiales</h4>
          
          <div class="tecnologias-especiales">
            <h5>🛡️ ECC (Error Correcting Code)</h5>
            <ul>
              <li><strong>Función:</strong> Detecta y corrige errores de bits</li>
              <li><strong>Uso:</strong> Servidores y workstations críticas</li>
              <li><strong>Costo:</strong> Mayor que memoria estándar</li>
              <li><strong>Rendimiento:</strong> Ligera penalización</li>
            </ul>

            <h5>📱 LPDDR (Low Power DDR)</h5>
            <ul>
              <li><strong>Diseño:</strong> Optimizada para dispositivos móviles</li>
              <li><strong>Consumo:</strong> Mucho menor que DDR estándar</li>
              <li><strong>Integración:</strong> Soldada directamente (no reemplazable)</li>
              <li><strong>Aplicaciones:</strong> Smartphones, tablets, ultrabooks</li>
            </ul>

            <h5>🚀 HBM (High Bandwidth Memory)</h5>
            <ul>
              <li><strong>Arquitectura:</strong> Apilamiento 3D de chips</li>
              <li><strong>Ancho de banda:</strong> Extremadamente alto</li>
              <li><strong>Uso:</strong> Tarjetas gráficas de gama alta</li>
              <li><strong>Ventaja:</strong> Menor espacio, mayor rendimiento</li>
            </ul>
          </div>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/tipos-ram.jpg",
        infografia: "/images/teoria/ddr-evolution.png"
      },
      actividades: [
        {
          tipo: "investigacion",
          pregunta: "Investiga las especificaciones de RAM de tu computadora usando CPU-Z o similar",
          ayuda: "Busca la frecuencia, timings, y configuración de canales"
        }
      ]
    },
    {
      id: 3,
      titulo: "Almacenamiento Magnético (HDD)",
      contenido: `
        <h3>💿 Discos Duros: La Tradición del Almacenamiento</h3>
        
        <div class="almacenamiento-magnetico">
          <h4>🔧 ¿Cómo Funcionan los Discos Duros?</h4>
          <p>Los <strong>discos duros</strong> (HDD - Hard Disk Drive) almacenan datos magnéticamente en platos giratorios, usando cabezales de lectura/escritura que se mueven sobre la superficie.</p>

          <h4>🏗️ Componentes Físicos</h4>
          
          <div class="componentes-hdd">
            <h5>💿 Platos (Platters)</h5>
            <ul>
              <li><strong>Material:</strong> Aluminio o vidrio con capa magnética</li>
              <li><strong>Cantidad:</strong> 1-5 platos por disco</li>
              <li><strong>Tamaño:</strong> 2.5", 3.5" (diámetro)</li>
              <li><strong>Velocidad:</strong> 5,400, 7,200, 10,000, 15,000 RPM</li>
            </ul>

            <h5>🎯 Cabezales de Lectura/Escritura</h5>
            <ul>
              <li><strong>Función:</strong> Leen y escriben datos magnéticamente</li>
              <li><strong>Cantidad:</strong> 2 cabezales por plato (arriba/abajo)</li>
              <li><strong>Flotación:</strong> Vuelan sobre superficie sin tocarla</li>
              <li><strong>Altura:</strong> ~3 nanómetros sobre el plato</li>
            </ul>

            <h5>🦾 Brazo Actuador</h5>
            <ul>
              <li><strong>Motor de bobina:</strong> Mueve cabezales radialmente</li>
              <li><strong>Precisión:</strong> Posicionamiento de nanómetros</li>
              <li><strong>Velocidad:</strong> Tiempo de búsqueda 5-15 ms</li>
            </ul>

            <h5>🔌 Controladora y PCB</h5>
            <ul>
              <li><strong>Procesador:</strong> Controla operaciones del disco</li>
              <li><strong>Caché:</strong> 8-256 MB de memoria temporal</li>
              <li><strong>Interfaz:</strong> SATA, SAS conexión externa</li>
            </ul>
          </div>

          <h4>📊 Organización de Datos</h4>
          
          <div class="organizacion-datos">
            <h5>🎯 Estructura Geométrica</h5>
            <ul>
              <li><strong>Pistas (Tracks):</strong> Círculos concéntricos en el plato</li>
              <li><strong>Sectores:</strong> División de pistas (512/4096 bytes)</li>
              <li><strong>Cilindros:</strong> Pistas alineadas en múltiples platos</li>
              <li><strong>Clusters:</strong> Grupo de sectores (unidad de asignación)</li>
            </ul>

            <h5>📍 Direccionamiento</h5>
            <ul>
              <li><strong>CHS:</strong> Cylinder-Head-Sector (método tradicional)</li>
              <li><strong>LBA:</strong> Logical Block Addressing (método moderno)</li>
              <li><strong>Traducción:</strong> Controladora convierte LBA a CHS</li>
            </ul>
          </div>

          <h4>⚡ Factores de Rendimiento</h4>
          
          <div class="rendimiento-hdd">
            <h5>🕐 Tiempo de Acceso</h5>
            <ul>
              <li><strong>Seek Time:</strong> Tiempo para mover cabezales (5-15 ms)</li>
              <li><strong>Rotational Latency:</strong> Espera a rotación (2-8 ms)</li>
              <li><strong>Transfer Time:</strong> Tiempo de transferencia actual</li>
              <li><strong>Total:</strong> Suma de todos los componentes</li>
            </ul>

            <h5>🌊 Velocidad de Transferencia</h5>
            <ul>
              <li><strong>Secuencial:</strong> 100-250 MB/s (datos continuos)</li>
              <li><strong>Aleatoria:</strong> 100-200 IOPS (Input/Output Operations)</li>
              <li><strong>Limitación:</strong> Velocidad mecánica de componentes</li>
            </ul>

            <h5>⚙️ Factores que Afectan Rendimiento</h5>
            <ul>
              <li><strong>RPM:</strong> Mayor rotación = menor latencia</li>
              <li><strong>Densidad:</strong> Más datos por pista = mayor throughput</li>
              <li><strong>Caché:</strong> Memoria para datos frecuentes</li>
              <li><strong>Fragmentación:</strong> Archivos dispersos reducen velocidad</li>
            </ul>
          </div>

          <h4>🔧 Interfaces de Conexión</h4>
          
          <div class="interfaces-hdd">
            <h5>📡 SATA (Serial ATA)</h5>
            <ul>
              <li><strong>SATA I:</strong> 1.5 Gbps (150 MB/s)</li>
              <li><strong>SATA II:</strong> 3.0 Gbps (300 MB/s)</li>
              <li><strong>SATA III:</strong> 6.0 Gbps (600 MB/s)</li>
              <li><strong>Ventajas:</strong> Cable delgado, hot-swap</li>
            </ul>

            <h5>🏢 SAS (Serial Attached SCSI)</h5>
            <ul>
              <li><strong>Velocidad:</strong> 3-12 Gbps</li>
              <li><strong>Uso:</strong> Servidores y sistemas empresariales</li>
              <li><strong>Características:</strong> Mayor confiabilidad, dual-port</li>
            </ul>

            <h5>🔌 Conectores de Alimentación</h5>
            <ul>
              <li><strong>SATA Power:</strong> 15 pines, 3.3V/5V/12V</li>
              <li><strong>Molex:</strong> 4 pines tradicional (adaptadores)</li>
            </ul>
          </div>

          <h4>📏 Factores de Forma</h4>
          
          <div class="factores-forma">
            <h5>🖥️ 3.5" (Escritorio)</h5>
            <ul>
              <li><strong>Dimensiones:</strong> 146 × 101.6 × 26.1 mm</li>
              <li><strong>Capacidad:</strong> 500 GB - 20 TB</li>
              <li><strong>Velocidad:</strong> 5,400-7,200 RPM típica</li>
              <li><strong>Uso:</strong> PCs de escritorio, servidores</li>
            </ul>

            <h5>💻 2.5" (Portátiles)</h5>
            <ul>
              <li><strong>Dimensiones:</strong> 100 × 69.85 × 7-15 mm</li>
              <li><strong>Capacidad:</strong> 250 GB - 5 TB</li>
              <li><strong>Velocidad:</strong> 5,400 RPM común</li>
              <li><strong>Ventaja:</strong> Menor consumo energético</li>
            </ul>
          </div>

          <h4>💡 Ventajas y Desventajas</h4>
          
          <div class="ventajas-desventajas-hdd">
            <h5>✅ Ventajas</h5>
            <ul>
              <li><strong>Costo:</strong> Muy económico por GB</li>
              <li><strong>Capacidad:</strong> Hasta 20 TB en consumo</li>
              <li><strong>Durabilidad:</strong> Datos recuperables tras fallos</li>
              <li><strong>Compatibilidad:</strong> Estándar universal</li>
            </ul>

            <h5>❌ Desventajas</h5>
            <ul>
              <li><strong>Velocidad:</strong> Mucho más lento que SSD</li>
              <li><strong>Ruido:</strong> Partes móviles generan sonido</li>
              <li><strong>Consumo:</strong> Mayor uso energético</li>
              <li><strong>Fragilidad:</strong> Sensible a golpes y vibraciones</li>
              <li><strong>Latencia:</strong> Tiempo de acceso aleatorio alto</li>
            </ul>
          </div>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/hdd-componentes.jpg",
        infografia: "/images/teoria/funcionamiento-hdd.png"
      },
      actividades: [
        {
          tipo: "analisis",
          pregunta: "Explica por qué los HDD son más lentos en acceso aleatorio que en secuencial",
          ayuda: "Considera el tiempo que toman los cabezales en moverse y el plato en girar"
        }
      ]
    },
    {
      id: 4,
      titulo: "Almacenamiento Sólido (SSD)",
      contenido: `
        <h3>⚡ SSDs: La Revolución del Almacenamiento</h3>
        
        <div class="almacenamiento-solido">
          <h4>🚀 ¿Qué son los SSDs?</h4>
          <p>Los <strong>SSDs</strong> (Solid State Drive) utilizan memoria flash NAND para almacenar datos sin partes móviles, ofreciendo velocidades significativamente superiores a los discos duros tradicionales.</p>

          <h4>🔬 Tecnología NAND Flash</h4>
          
          <div class="tecnologia-nand">
            <h5>⚛️ Fundamentos de la Memoria Flash</h5>
            <ul>
              <li><strong>Principio:</strong> Almacena carga eléctrica en puertas flotantes</li>
              <li><strong>No volátil:</strong> Retiene datos sin alimentación</li>
              <li><strong>Borrado:</strong> Por bloques (no individual)</li>
              <li><strong>Escritura:</strong> Por páginas dentro de bloques</li>
            </ul>

            <h5>🏗️ Tipos de Celdas NAND</h5>
            <ul>
              <li><strong>SLC (Single-Level Cell):</strong>
                <ul>
                  <li>1 bit por celda</li>
                  <li>Mayor velocidad y durabilidad</li>
                  <li>Más caro, menor densidad</li>
                  <li>100,000+ ciclos P/E</li>
                </ul>
              </li>
              <li><strong>MLC (Multi-Level Cell):</strong>
                <ul>
                  <li>2 bits por celda</li>
                  <li>Balance entre costo y rendimiento</li>
                  <li>10,000 ciclos P/E típicos</li>
                </ul>
              </li>
              <li><strong>TLC (Triple-Level Cell):</strong>
                <ul>
                  <li>3 bits por celda</li>
                  <li>Mayor densidad, menor costo</li>
                  <li>3,000-5,000 ciclos P/E</li>
                  <li>Más común en SSDs de consumo</li>
                </ul>
              </li>
              <li><strong>QLC (Quad-Level Cell):</strong>
                <ul>
                  <li>4 bits por celda</li>
                  <li>Máxima densidad, menor costo</li>
                  <li>1,000-3,000 ciclos P/E</li>
                  <li>Para almacenamiento masivo</li>
                </ul>
              </li>
            </ul>
          </div>

          <h4>🏗️ Arquitectura Interna</h4>
          
          <div class="arquitectura-ssd">
            <h5>🧠 Controlador SSD</h5>
            <ul>
              <li><strong>Procesador:</strong> ARM o similar para gestión</li>
              <li><strong>Firmware:</strong> Software interno de control</li>
              <li><strong>Funciones:</strong>
                <ul>
                  <li>Wear leveling (distribución de desgaste)</li>
                  <li>Garbage collection (limpieza de bloques)</li>
                  <li>Error correction (corrección de errores)</li>
                  <li>Bad block management (gestión de bloques defectuosos)</li>
                </ul>
              </li>
            </ul>

            <h5>💾 Memoria DRAM Cache</h5>
            <ul>
              <li><strong>Función:</strong> Acelera operaciones frecuentes</li>
              <li><strong>Tamaño:</strong> 1 GB por cada 1 TB de almacenamiento</li>
              <li><strong>Contenido:</strong> Tabla de mapeo, datos temporales</li>
              <li><strong>DRAM-less:</strong> Algunos SSDs economicos no incluyen</li>
            </ul>

            <h5>🔧 Over-Provisioning</h5>
            <ul>
              <li><strong>Definición:</strong> Espacio reservado no accesible al usuario</li>
              <li><strong>Porcentaje:</strong> 7-28% del espacio total</li>
              <li><strong>Funciones:</strong>
                <ul>
                  <li>Reemplazo de bloques defectuosos</li>
                  <li>Mejora garbage collection</li>
                  <li>Mantiene rendimiento consistente</li>
                </ul>
              </li>
            </ul>
          </div>

          <h4>🔌 Interfaces y Conectores</h4>
          
          <div class="interfaces-ssd">
            <h5>📡 SATA SSDs</h5>
            <ul>
              <li><strong>Interfaz:</strong> SATA III (6 Gbps)</li>
              <li><strong>Velocidad máxima:</strong> ~550 MB/s</li>
              <li><strong>Factor de forma:</strong> 2.5" principalmente</li>
              <li><strong>Ventaja:</strong> Compatible con sistemas antiguos</li>
              <li><strong>Limitación:</strong> Bottleneck del protocolo SATA</li>
            </ul>

            <h5>🚀 NVMe SSDs</h5>
            <ul>
              <li><strong>Protocolo:</strong> NVMe (Non-Volatile Memory Express)</li>
              <li><strong>Interfaz:</strong> PCIe (Peripheral Component Interconnect Express)</li>
              <li><strong>Conexión:</strong> Directa al CPU a través de PCIe lanes</li>
              <li><strong>Velocidades:</strong>
                <ul>
                  <li>PCIe 3.0 x4: hasta 3,500 MB/s</li>
                  <li>PCIe 4.0 x4: hasta 7,000 MB/s</li>
                  <li>PCIe 5.0 x4: hasta 14,000 MB/s</li>
                </ul>
              </li>
            </ul>

            <h5>📌 Factor de Forma M.2</h5>
            <ul>
              <li><strong>Tamaños comunes:</strong>
                <ul>
                  <li>M.2 2242: 22mm × 42mm</li>
                  <li>M.2 2260: 22mm × 60mm</li>
                  <li>M.2 2280: 22mm × 80mm (más común)</li>
                  <li>M.2 22110: 22mm × 110mm</li>
                </ul>
              </li>
              <li><strong>Keys (muescas):</strong>
                <ul>
                  <li>B key: SATA y PCIe x2</li>
                  <li>M key: PCIe x4</li>
                  <li>B+M key: Compatible con ambos</li>
                </ul>
              </li>
            </ul>
          </div>

          <h4>📊 Rendimiento y Especificaciones</h4>
          
          <div class="rendimiento-ssd">
            <h5>⚡ Velocidades de Transferencia</h5>
            <ul>
              <li><strong>Lectura secuencial:</strong> 500-7,000+ MB/s</li>
              <li><strong>Escritura secuencial:</strong> 400-6,500+ MB/s</li>
              <li><strong>Lectura aleatoria:</strong> 50,000-750,000 IOPS</li>
              <li><strong>Escritura aleatoria:</strong> 30,000-700,000 IOPS</li>
            </ul>

            <h5>⏱️ Latencia</h5>
            <ul>
              <li><strong>Acceso:</strong> 0.1-0.2 ms (vs 5-15 ms HDD)</li>
              <li><strong>Ventaja:</strong> 50-100x más rápido que HDD</li>
              <li><strong>Consistencia:</strong> Rendimiento predecible</li>
            </ul>

            <h5>🔋 Eficiencia Energética</h5>
            <ul>
              <li><strong>Consumo activo:</strong> 2-7W (vs 6-10W HDD)</li>
              <li><strong>Reposo:</strong> 0.5-2W</li>
              <li><strong>Beneficio:</strong> Mayor duración de batería en portátiles</li>
            </ul>
          </div>

          <h4>📈 Durabilidad y Longevidad</h4>
          
          <div class="durabilidad-ssd">
            <h5>🔄 Ciclos de Programa/Borrado (P/E)</h5>
            <ul>
              <li><strong>SLC:</strong> 100,000+ ciclos</li>
              <li><strong>MLC:</strong> 10,000 ciclos</li>
              <li><strong>TLC:</strong> 3,000-5,000 ciclos</li>
              <li><strong>QLC:</strong> 1,000-3,000 ciclos</li>
            </ul>

            <h5>📊 Métricas de Endurance</h5>
            <ul>
              <li><strong>TBW (Total Bytes Written):</strong> TB totales escribibles</li>
              <li><strong>DWPD (Drive Writes Per Day):</strong> Escrituras completas diarias</li>
              <li><strong>MTBF (Mean Time Between Failures):</strong> Tiempo medio entre fallos</li>
              <li><strong>Warranty:</strong> Típicamente 3-5 años o TBW límite</li>
            </ul>

            <h5>🛠️ Tecnologías de Optimización</h5>
            <ul>
              <li><strong>Wear Leveling:</strong> Distribuye escrituras uniformemente</li>
              <li><strong>Write Amplification:</strong> Minimiza escrituras adicionales</li>
              <li><strong>TRIM Command:</strong> Informa bloques libres al OS</li>
              <li><strong>Static/Dynamic Wear Leveling:</strong> Niveles de optimización</li>
            </ul>
          </div>

          <h4>💰 Comparación SSD vs HDD</h4>
          
          <div class="comparacion-ssd-hdd">
            <table>
              <tr>
                <th>Característica</th>
                <th>SSD</th>
                <th>HDD</th>
              </tr>
              <tr>
                <td>Velocidad secuencial</td>
                <td>500-7,000 MB/s</td>
                <td>100-250 MB/s</td>
              </tr>
              <tr>
                <td>Acceso aleatorio</td>
                <td>0.1-0.2 ms</td>
                <td>5-15 ms</td>
              </tr>
              <tr>
                <td>Costo por GB</td>
                <td>$0.10-0.30</td>
                <td>$0.02-0.05</td>
              </tr>
              <tr>
                <td>Capacidad máxima</td>
                <td>8-100 TB</td>
                <td>20 TB</td>
              </tr>
              <tr>
                <td>Durabilidad física</td>
                <td>Sin partes móviles</td>
                <td>Sensible a golpes</td>
              </tr>
              <tr>
                <td>Ruido</td>
                <td>Silencioso</td>
                <td>Audible</td>
              </tr>
              <tr>
                <td>Consumo energético</td>
                <td>2-7W</td>
                <td>6-10W</td>
              </tr>
            </table>
          </div>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/ssd-tecnologia.jpg",
        infografia: "/images/teoria/ssd-vs-hdd.png"
      },
      actividades: [
        {
          tipo: "comparacion",
          pregunta: "Investiga los SSDs disponibles en tu país y compara especificaciones de 3 modelos diferentes",
          ayuda: "Fíjate en velocidad de lectura/escritura, capacidad, interfaz y precio"
        }
      ]
    },
    {
      id: 5,
      titulo: "Almacenamiento Óptico y Portátil",
      contenido: `
        <h3>💿 Medios Ópticos y Almacenamiento Portátil</h3>
        
        <div class="almacenamiento-optico">
          <h4>💿 Tecnología Óptica</h4>
          <p>El <strong>almacenamiento óptico</strong> utiliza láser para leer y escribir datos en discos reflectantes, siendo una tecnología madura para distribución de contenido y archivo.</p>

          <h4>📀 Evolución de Medios Ópticos</h4>
          
          <div class="evolucion-opticos">
            <h5>💿 CD (Compact Disc)</h5>
            <ul>
              <li><strong>Capacidad:</strong> 650-700 MB</li>
              <li><strong>Diámetro:</strong> 120 mm</li>
              <li><strong>Láser:</strong> 780 nm (infrarrojo)</li>
              <li><strong>Tipos:</strong>
                <ul>
                  <li>CD-ROM: Solo lectura</li>
                  <li>CD-R: Grabable una vez</li>
                  <li>CD-RW: Regrabable</li>
                </ul>
              </li>
              <li><strong>Uso típico:</strong> Audio, software, datos básicos</li>
            </ul>

            <h5>📀 DVD (Digital Versatile Disc)</h5>
            <ul>
              <li><strong>Capacidad:</strong>
                <ul>
                  <li>DVD-5 (single layer): 4.7 GB</li>
                  <li>DVD-9 (dual layer): 8.5 GB</li>
                  <li>DVD-10 (double sided): 9.4 GB</li>
                  <li>DVD-18 (dual layer, double sided): 17 GB</li>
                </ul>
              </li>
              <li><strong>Láser:</strong> 650 nm (rojo)</li>
              <li><strong>Tipos:</strong> DVD-ROM, DVD±R, DVD±RW, DVD-RAM</li>
              <li><strong>Uso:</strong> Películas, software, backup de datos</li>
            </ul>

            <h5>💙 Blu-ray Disc</h5>
            <ul>
              <li><strong>Capacidad:</strong>
                <ul>
                  <li>BD-25: 25 GB (single layer)</li>
                  <li>BD-50: 50 GB (dual layer)</li>
                  <li>BD-100: 100 GB (triple/quad layer)</li>
                  <li>BD-128: 128 GB (BDXL)</li>
                </ul>
              </li>
              <li><strong>Láser:</strong> 405 nm (azul-violeta)</li>
              <li><strong>Tipos:</strong> BD-ROM, BD-R, BD-RE</li>
              <li><strong>Uso:</strong> Películas HD/4K, backup empresarial</li>
            </ul>
          </div>

          <h4>🔧 Principio de Funcionamiento</h4>
          
          <div class="funcionamiento-optico">
            <h5>📖 Lectura de Datos</h5>
            <ul>
              <li><strong>Láser:</strong> Emite haz de luz coherente</li>
              <li><strong>Superficie:</strong> Pits (hoyos) y lands (superficies planas)</li>
              <li><strong>Reflexión:</strong> Diferente intensidad según superficie</li>
              <li><strong>Fotodetector:</strong> Convierte luz en señales digitales</li>
              <li><strong>Espiral:</strong> Datos organizados en espiral continua</li>
            </ul>

            <h5>✍️ Escritura de Datos</h5>
            <ul>
              <li><strong>Capa orgánica:</strong> Material fotosensible</li>
              <li><strong>Láser de escritura:</strong> Mayor potencia que lectura</li>
              <li><strong>Cambio químico:</strong> Altera reflectividad del material</li>
              <li><strong>Permanente:</strong> CD-R/DVD-R no reversible</li>
              <li><strong>Reversible:</strong> CD-RW/DVD-RW puede borrarse</li>
            </ul>
          </div>

          <h4>🔌 Almacenamiento Portátil USB</h4>
          
          <div class="almacenamiento-usb">
            <h5>🔗 Memorias USB Flash</h5>
            <ul>
              <li><strong>Tecnología:</strong> NAND Flash (similar a SSD)</li>
              <li><strong>Capacidades:</strong> 4 GB - 2 TB</li>
              <li><strong>Velocidades:</strong>
                <ul>
                  <li>USB 2.0: hasta 480 Mbps (60 MB/s)</li>
                  <li>USB 3.0: hasta 5 Gbps (625 MB/s)</li>
                  <li>USB 3.1: hasta 10 Gbps (1.25 GB/s)</li>
                  <li>USB 3.2: hasta 20 Gbps (2.5 GB/s)</li>
                  <li>USB4: hasta 40 Gbps (5 GB/s)</li>
                </ul>
              </li>
              <li><strong>Ventajas:</strong>
                <ul>
                  <li>Plug and play</li>
                  <li>Universalmente compatible</li>
                  <li>Pequeño y liviano</li>
                  <li>No requiere alimentación externa</li>
                </ul>
              </li>
            </ul>

            <h5>💾 Discos Duros Externos</h5>
            <ul>
              <li><strong>Tipos:</strong>
                <ul>
                  <li>HDD 2.5": Portátiles, sin alimentación externa</li>
                  <li>HDD 3.5": Escritorio, requiere alimentación</li>
                  <li>SSD externos: Más rápidos y resistentes</li>
                </ul>
              </li>
              <li><strong>Capacidades:</strong> 500 GB - 20 TB</li>
              <li><strong>Interfaces:</strong> USB 3.0/3.1, USB-C, Thunderbolt</li>
              <li><strong>Uso:</strong> Backup, expansión de almacenamiento</li>
            </ul>
          </div>

          <h4>📱 Tarjetas de Memoria</h4>
          
          <div class="tarjetas-memoria">
            <h5>🔖 Secure Digital (SD)</h5>
            <ul>
              <li><strong>Tamaños:</strong>
                <ul>
                  <li>SD: 32×24×2.1 mm</li>
                  <li>miniSD: 21.5×20×1.4 mm</li>
                  <li>microSD: 15×11×1 mm</li>
                </ul>
              </li>
              <li><strong>Capacidades:</strong>
                <ul>
                  <li>SD: hasta 2 GB</li>
                  <li>SDHC: 4-32 GB</li>
                  <li>SDXC: 64 GB-2 TB</li>
                  <li>SDUC: 2-128 TB</li>
                </ul>
              </li>
              <li><strong>Clases de velocidad:</strong>
                <ul>
                  <li>Class 2/4/6/10: Velocidad mínima sostenida</li>
                  <li>UHS-I/II/III: Ultra High Speed</li>
                  <li>V30/V60/V90: Video Speed Class</li>
                </ul>
              </li>
            </ul>

            <h5>📸 CompactFlash (CF) y otros</h5>
            <ul>
              <li><strong>CompactFlash:</strong> Cámaras profesionales</li>
              <li><strong>CFexpress:</strong> Sucesor de CF, más rápido</li>
              <li><strong>XQD:</strong> Cámaras de alta gama</li>
              <li><strong>Memory Stick:</strong> Productos Sony</li>
            </ul>
          </div>

          <h4>☁️ Almacenamiento en la Nube</h4>
          
          <div class="almacenamiento-nube">
            <h5>🌐 Concepto y Funcionamiento</h5>
            <ul>
              <li><strong>Definición:</strong> Almacenamiento remoto accesible por internet</li>
              <li><strong>Infraestructura:</strong> Centros de datos distribuidos</li>
              <li><strong>Escalabilidad:</strong> Capacidad prácticamente ilimitada</li>
              <li><strong>Redundancia:</strong> Múltiples copias para seguridad</li>
            </ul>

            <h5>📊 Principales Servicios</h5>
            <ul>
              <li><strong>Google Drive:</strong> 15 GB gratis, integración Google</li>
              <li><strong>Microsoft OneDrive:</strong> 5 GB gratis, integración Office</li>
              <li><strong>Dropbox:</strong> 2 GB gratis, sincronización eficiente</li>
              <li><strong>iCloud:</strong> 5 GB gratis, ecosistema Apple</li>
              <li><strong>Amazon S3:</strong> Pago por uso, servicios empresariales</li>
            </ul>

            <h5>✅ Ventajas</h5>
            <ul>
              <li><strong>Accesibilidad:</strong> Desde cualquier dispositivo</li>
              <li><strong>Sincronización:</strong> Automática entre dispositivos</li>
              <li><strong>Backup automático:</strong> Protección contra pérdidas</li>
              <li><strong>Colaboración:</strong> Compartir archivos fácilmente</li>
              <li><strong>Escalabilidad:</strong> Ajustar capacidad según necesidad</li>
            </ul>

            <h5>⚠️ Consideraciones</h5>
            <ul>
              <li><strong>Dependencia internet:</strong> Requiere conexión</li>
              <li><strong>Privacidad:</strong> Datos en servidores externos</li>
              <li><strong>Costos recurrentes:</strong> Suscripciones mensuales/anuales</li>
              <li><strong>Velocidad:</strong> Limitada por ancho de banda</li>
              <li><strong>Control:</strong> Menor control directo sobre datos</li>
            </ul>
          </div>

          <h4>📊 Comparación de Tecnologías</h4>
          
          <div class="comparacion-tecnologias">
            <table>
              <tr>
                <th>Tecnología</th>
                <th>Capacidad</th>
                <th>Velocidad</th>
                <th>Portabilidad</th>
                <th>Durabilidad</th>
                <th>Costo/GB</th>
              </tr>
              <tr>
                <td>CD/DVD</td>
                <td>0.7-8.5 GB</td>
                <td>Baja</td>
                <td>Alta</td>
                <td>Media</td>
                <td>Muy bajo</td>
              </tr>
              <tr>
                <td>Blu-ray</td>
                <td>25-128 GB</td>
                <td>Media</td>
                <td>Alta</td>
                <td>Media</td>
                <td>Bajo</td>
              </tr>
              <tr>
                <td>USB Flash</td>
                <td>4 GB-2 TB</td>
                <td>Media-Alta</td>
                <td>Muy alta</td>
                <td>Alta</td>
                <td>Medio</td>
              </tr>
              <tr>
                <td>HDD Externo</td>
                <td>500 GB-20 TB</td>
                <td>Media</td>
                <td>Media</td>
                <td>Media</td>
                <td>Bajo</td>
              </tr>
              <tr>
                <td>SSD Externo</td>
                <td>120 GB-8 TB</td>
                <td>Alta</td>
                <td>Alta</td>
                <td>Muy alta</td>
                <td>Alto</td>
              </tr>
              <tr>
                <td>Tarjetas SD</td>
                <td>4-512 GB</td>
                <td>Media-Alta</td>
                <td>Muy alta</td>
                <td>Alta</td>
                <td>Medio-Alto</td>
              </tr>
              <tr>
                <td>Nube</td>
                <td>Ilimitada</td>
                <td>Variable</td>
                <td>Muy alta</td>
                <td>Muy alta</td>
                <td>Variable</td>
              </tr>
            </table>
          </div>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/medios-almacenamiento.jpg",
        infografia: "/images/teoria/evolucion-opticos.png"
      },
      actividades: [
        {
          tipo: "practica",
          pregunta: "Identifica qué tipos de almacenamiento tienes disponibles en tu hogar y calcula su capacidad total",
          ayuda: "Incluye discos internos, externos, USBs, tarjetas SD y cuentas de nube"
        }
      ]
    }
  ],
  recursos: {
    documentos: [
      {
        titulo: "Guía de Jerarquía de Memoria",
        url: "/docs/jerarquia-memoria.pdf",
        tipo: "pdf"
      },
      {
        titulo: "Especificaciones Técnicas de Almacenamiento",
        url: "/docs/especificaciones-almacenamiento.pdf",
        tipo: "pdf"
      },
      {
        titulo: "Comparativa de Tecnologías de Almacenamiento",
        url: "/docs/comparativa-almacenamiento.pdf",
        tipo: "pdf"
      }
    ],
    enlaces: [
      {
        titulo: "Storage Networking Industry Association",
        url: "https://www.snia.org/",
        tipo: "externo"
      },
      {
        titulo: "JEDEC Solid State Technology Association",
        url: "https://www.jedec.org/",
        tipo: "externo"
      },
      {
        titulo: "NVM Express Specification",
        url: "https://nvmexpress.org/",
        tipo: "externo"
      }
    ],
    videos: [
      {
        titulo: "Jerarquía de Memoria Explicada",
        url: "/videos/jerarquia-memoria.mp4",
        duracion: "14:20"
      },
      {
        titulo: "SSD vs HDD: Comparación Detallada",
        url: "/videos/ssd-vs-hdd.mp4",
        duracion: "18:30"
      },
      {
        titulo: "Tecnologías de Almacenamiento del Futuro",
        url: "/videos/futuro-almacenamiento.mp4",
        duracion: "12:45"
      }
    ]
  },
  evaluacion: {
    tipo: "cuestionario",
    preguntas: [
      {
        pregunta: "¿Cuál es el principio fundamental de la jerarquía de memoria?",
        tipo: "opcion_multiple",
        opciones: [
          "Toda la memoria debe ser del mismo tipo",
          "Memoria más rápida es más cara y tiene menor capacidad",
          "Solo se necesita un tipo de memoria",
          "La memoria más lenta siempre es mejor"
        ],
        respuesta_correcta: 1,
        explicacion: "La jerarquía existe porque memoria más rápida cuesta más y por tanto se usa en menor cantidad, creando niveles desde registros hasta almacenamiento masivo."
      },
      {
        pregunta: "¿Cuál es la principal diferencia entre DDR4 y DDR5?",
        tipo: "opcion_multiple",
        opciones: [
          "DDR5 usa menos voltaje y tiene mayor frecuencia",
          "DDR4 es más rápida que DDR5",
          "No hay diferencias significativas",
          "DDR5 solo funciona en servidores"
        ],
        respuesta_correcta: 0,
        explicacion: "DDR5 opera a 1.1V (vs 1.2V de DDR4) y alcanza frecuencias de 4800-6400+ MHz, ofreciendo mayor eficiencia energética y rendimiento."
      },
      {
        pregunta: "¿Por qué los SSDs son más rápidos que los HDDs?",
        tipo: "opcion_multiple",
        opciones: [
          "Usan más electricidad",
          "No tienen partes móviles y usan memoria flash",
          "Son más grandes",
          "Tienen más capacidad"
        ],
        respuesta_correcta: 1,
        explicacion: "Los SSDs usan memoria flash NAND sin partes móviles, eliminando el tiempo de búsqueda y latencia rotacional de los discos duros."
      },
      {
        pregunta: "¿Qué significa 'Over-Provisioning' en un SSD?",
        tipo: "opcion_multiple",
        opciones: [
          "Espacio extra para el usuario",
          "Memoria caché adicional",
          "Espacio reservado para gestión interna y reemplazo de bloques defectuosos",
          "Velocidad adicional"
        ],
        respuesta_correcta: 2,
        explicacion: "Over-provisioning es espacio no accesible al usuario que el SSD reserva para wear leveling, garbage collection y reemplazo de bloques defectuosos."
      },
      {
        pregunta: "Ordena los siguientes medios de almacenamiento de menor a mayor capacidad típica: USB Flash, Blu-ray, DVD, CD",
        tipo: "completar",
        respuesta_correcta: "CD (700 MB), DVD (4.7-8.5 GB), Blu-ray (25-50 GB), USB Flash (4 GB-2 TB)",
        explicacion: "Esta es la evolución típica de capacidades, aunque los rangos pueden solaparse según el modelo específico."
      }
    ]
  }
};

export default tema07;
