/**
 * Tema 3: Unidades de medida y almacenamiento
 * Curso: Introducción a la Informática
 */

export const tema03 = {
  id: '3',
  titulo: "Unidades de medida y almacenamiento",
  tematica: "Conversión y aplicación práctica",
  duracion: "25-30 minutos",
  objetivos: [
    "Entender el sistema binario y el concepto de bit",
    "Comprender las unidades de medida digital y sus múltiplos",
    "Realizar conversiones entre diferentes unidades",
    "Aplicar el conocimiento en situaciones prácticas del almacenamiento"
  ],
  secciones: [
    {
      id: 1,
      titulo: "El Sistema Binario y el Bit",
      contenido: `
        <h3>🔢 Fundamentos del Sistema Digital</h3>
        
        <div class="sistema-binario">
          <h4>💡 ¿Por qué Sistema Binario?</h4>
          <p>Las computadoras usan el <strong>sistema binario</strong> porque solo entienden dos estados: encendido (1) y apagado (0). Esto corresponde a la presencia o ausencia de corriente eléctrica.</p>

          <h5>Comparación de Sistemas Numéricos:</h5>
          <div class="tabla-sistemas">
            <table>
              <tr>
                <th>Sistema</th>
                <th>Base</th>
                <th>Dígitos</th>
                <th>Ejemplo</th>
              </tr>
              <tr>
                <td>Decimal</td>
                <td>10</td>
                <td>0,1,2,3,4,5,6,7,8,9</td>
                <td>1234</td>
              </tr>
              <tr>
                <td>Binario</td>
                <td>2</td>
                <td>0,1</td>
                <td>10011010010</td>
              </tr>
              <tr>
                <td>Hexadecimal</td>
                <td>16</td>
                <td>0-9,A-F</td>
                <td>4D2</td>
              </tr>
            </table>
          </div>

          <h4>🔌 El Bit: Unidad Básica</h4>
          <p>Un <strong>bit</strong> (binary digit) es la unidad mínima de información en computación. Puede almacenar un solo valor: 0 o 1.</p>

          <h5>Representación Física del Bit:</h5>
          <ul>
            <li><strong>Circuitos eléctricos:</strong> Voltaje alto (1) o bajo (0)</li>
            <li><strong>Discos magnéticos:</strong> Orientación magnética norte o sur</li>
            <li><strong>Discos ópticos:</strong> Superficie reflectante o no reflectante</li>
            <li><strong>Memoria flash:</strong> Carga eléctrica almacenada o no</li>
          </ul>

          <h4>📊 Ejemplos de Números Binarios</h4>
          <div class="ejemplos-binarios">
            <ul>
              <li><strong>0</strong> en decimal = <strong>0</strong> en binario</li>
              <li><strong>1</strong> en decimal = <strong>1</strong> en binario</li>
              <li><strong>2</strong> en decimal = <strong>10</strong> en binario</li>
              <li><strong>3</strong> en decimal = <strong>11</strong> en binario</li>
              <li><strong>4</strong> en decimal = <strong>100</strong> en binario</li>
              <li><strong>5</strong> en decimal = <strong>101</strong> en binario</li>
              <li><strong>8</strong> en decimal = <strong>1000</strong> en binario</li>
              <li><strong>255</strong> en decimal = <strong>11111111</strong> en binario</li>
            </ul>
          </div>

          <h4>🎯 ¿Por qué es Importante?</h4>
          <ul>
            <li><strong>Base de todo:</strong> Toda la información digital se basa en bits</li>
            <li><strong>Velocidad:</strong> Operaciones simples permiten procesamiento rápido</li>
            <li><strong>Confiabilidad:</strong> Solo dos estados reducen errores</li>
            <li><strong>Eficiencia:</strong> Circuitos simples consumen menos energía</li>
          </ul>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/sistema-binario.jpg",
        infografia: "/images/teoria/bit-representacion.png"
      },
      actividades: [
        {
          tipo: "conversion",
          pregunta: "Convierte el número decimal 10 a binario",
          ayuda: "Divide entre 2 sucesivamente y lee los residuos de abajo hacia arriba"
        }
      ]
    },
    {
      id: 2,
      titulo: "El Byte: 8 Bits Juntos",
      contenido: `
        <h3>📦 La Unidad Práctica de Información</h3>
        
        <div class="concepto-byte">
          <h4>🔗 Definición de Byte</h4>
          <p>Un <strong>byte</strong> es un grupo de <strong>8 bits</strong> que funciona como una unidad básica de almacenamiento. Es la cantidad mínima de memoria que puede direccionar una computadora típica.</p>

          <h5>¿Por qué 8 bits?</h5>
          <ul>
            <li><strong>Capacidad:</strong> 8 bits pueden representar 2^8 = 256 valores diferentes (0-255)</li>
            <li><strong>Caracteres:</strong> Suficiente para el alfabeto, números y símbolos</li>
            <li><strong>Estándar:</strong> Adoptado universalmente desde los años 1960</li>
            <li><strong>Eficiencia:</strong> Múltiplo de 2, ideal para computadoras</li>
          </ul>

          <h4>📝 Representación de Caracteres</h4>
          <p>Cada carácter que escribes se almacena usando uno o más bytes:</p>

          <div class="tabla-ascii">
            <h5>Ejemplos en Código ASCII (1 byte por carácter):</h5>
            <table>
              <tr>
                <th>Carácter</th>
                <th>Decimal</th>
                <th>Binario (8 bits)</th>
              </tr>
              <tr>
                <td>A</td>
                <td>65</td>
                <td>01000001</td>
              </tr>
              <tr>
                <td>a</td>
                <td>97</td>
                <td>01100001</td>
              </tr>
              <tr>
                <td>0</td>
                <td>48</td>
                <td>00110000</td>
              </tr>
              <tr>
                <td>espacio</td>
                <td>32</td>
                <td>00100000</td>
              </tr>
            </table>
          </div>

          <h4>🌍 Codificaciones Modernas</h4>
          <ul>
            <li><strong>ASCII:</strong> 1 byte, 128 caracteres básicos (inglés)</li>
            <li><strong>Extended ASCII:</strong> 1 byte, 256 caracteres</li>
            <li><strong>UTF-8:</strong> 1-4 bytes, todos los idiomas del mundo</li>
            <li><strong>UTF-16:</strong> 2-4 bytes, usado en Windows</li>
          </ul>

          <h4>💭 Ejemplo Práctico: Almacenar "HOLA"</h4>
          <div class="ejemplo-hola">
            <p>La palabra "HOLA" necesita 4 bytes (32 bits):</p>
            <ul>
              <li><strong>H:</strong> 01001000</li>
              <li><strong>O:</strong> 01001111</li>
              <li><strong>L:</strong> 01001100</li>
              <li><strong>A:</strong> 01000001</li>
            </ul>
            <p><strong>Total:</strong> 01001000 01001111 01001100 01000001</p>
          </div>

          <h4>🔍 Capacidades del Byte</h4>
          <ul>
            <li><strong>Valores posibles:</strong> 256 combinaciones diferentes (0-255)</li>
            <li><strong>Colores:</strong> Cada componente RGB usa 1 byte (256 tonos)</li>
            <li><strong>Sonido:</strong> Cada muestra de audio puede usar 1-4 bytes</li>
            <li><strong>Números:</strong> Enteros de -128 a +127 (con signo)</li>
          </ul>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/byte-explicacion.jpg",
        infografia: "/images/teoria/ascii-table.png"
      },
      actividades: [
        {
          tipo: "practica",
          pregunta: "¿Cuántos bytes necesitas para almacenar tu nombre completo?",
          ayuda: "Cuenta cada letra, número, espacio y símbolo como 1 byte"
        }
      ]
    },
    {
      id: 3,
      titulo: "Múltiplos del Byte: KB, MB, GB, TB",
      contenido: `
        <h3>📏 Escalando las Unidades de Medida</h3>
        
        <div class="multiplos-byte">
          <h4>📊 Sistema de Múltiplos</h4>
          <p>Como los bytes individuales son muy pequeños para medir archivos y almacenamiento moderno, usamos múltiplos más grandes:</p>

          <div class="tabla-multiplos">
            <table>
              <tr>
                <th>Unidad</th>
                <th>Símbolo</th>
                <th>Equivalencia en Bytes</th>
                <th>Equivalencia Decimal</th>
              </tr>
              <tr>
                <td>Byte</td>
                <td>B</td>
                <td>1 byte</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Kilobyte</td>
                <td>KB</td>
                <td>1,024 bytes</td>
                <td>2^10</td>
              </tr>
              <tr>
                <td>Megabyte</td>
                <td>MB</td>
                <td>1,024 KB</td>
                <td>2^20 = 1,048,576</td>
              </tr>
              <tr>
                <td>Gigabyte</td>
                <td>GB</td>
                <td>1,024 MB</td>
                <td>2^30 = 1,073,741,824</td>
              </tr>
              <tr>
                <td>Terabyte</td>
                <td>TB</td>
                <td>1,024 GB</td>
                <td>2^40 = 1,099,511,627,776</td>
              </tr>
              <tr>
                <td>Petabyte</td>
                <td>PB</td>
                <td>1,024 TB</td>
                <td>2^50</td>
              </tr>
            </table>
          </div>

          <h4>🤔 ¿Por qué 1024 y no 1000?</h4>
          <p>Las computadoras usan potencias de 2 (sistema binario):</p>
          <ul>
            <li><strong>2^10 = 1,024</strong> (no 1,000)</li>
            <li><strong>Sistema binario:</strong> Más eficiente para hardware</li>
            <li><strong>Estándar IEC:</strong> Define KiB, MiB, GiB para potencias de 2</li>
            <li><strong>Práctica común:</strong> Muchos usan KB, MB, GB indistintamente</li>
          </ul>

          <h4>📐 Fórmulas de Conversión</h4>
          <div class="formulas-conversion">
            <h5>Para convertir a una unidad menor (multiplicar):</h5>
            <ul>
              <li>1 KB = 1,024 bytes</li>
              <li>1 MB = 1,024 KB = 1,048,576 bytes</li>
              <li>1 GB = 1,024 MB = 1,073,741,824 bytes</li>
            </ul>

            <h5>Para convertir a una unidad mayor (dividir):</h5>
            <ul>
              <li>1 byte = 1/1,024 KB ≈ 0.00098 KB</li>
              <li>1 KB = 1/1,024 MB ≈ 0.00098 MB</li>
              <li>1 MB = 1/1,024 GB ≈ 0.00098 GB</li>
            </ul>
          </div>

          <h4>🎯 Ejemplos Prácticos de Conversión</h4>
          <div class="ejemplos-conversion">
            <h5>Ejemplo 1: 2.5 GB a MB</h5>
            <p>2.5 GB × 1,024 MB/GB = 2,560 MB</p>

            <h5>Ejemplo 2: 512 MB a GB</h5>
            <p>512 MB ÷ 1,024 MB/GB = 0.5 GB</p>

            <h5>Ejemplo 3: 1,500,000 bytes a MB</h5>
            <p>1,500,000 bytes ÷ 1,024 ÷ 1,024 ≈ 1.43 MB</p>
          </div>

          <h4>🏃‍♂️ Método Rápido de Estimación</h4>
          <p>Para cálculos rápidos, puedes usar 1,000 en lugar de 1,024:</p>
          <ul>
            <li><strong>Ventaja:</strong> Cálculos mentales más fáciles</li>
            <li><strong>Error:</strong> Aproximadamente 2.4% de diferencia</li>
            <li><strong>Uso:</strong> Estimaciones generales, no cálculos precisos</li>
          </ul>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/multiplos-byte.jpg",
        infografia: "/images/teoria/conversion-unidades.png"
      },
      actividades: [
        {
          tipo: "calculo",
          pregunta: "Convierte 3.2 GB a MB (usa la conversión exacta)",
          ayuda: "Multiplica 3.2 por 1,024 para obtener el resultado en MB"
        }
      ]
    },
    {
      id: 4,
      titulo: "Aplicaciones Prácticas: Tipos de Archivos",
      contenido: `
        <h3>📁 Tamaños Reales de Archivos y Contenido</h3>
        
        <div class="tipos-archivos">
          <h4>📝 Archivos de Texto</h4>
          <div class="categoria-texto">
            <h5>Texto Simple:</h5>
            <ul>
              <li><strong>Documento .txt básico:</strong> 1-10 KB</li>
              <li><strong>Página de libro (2,000 palabras):</strong> ~10-15 KB</li>
              <li><strong>Novela completa (80,000 palabras):</strong> ~400-500 KB</li>
            </ul>

            <h5>Documentos Formateados:</h5>
            <ul>
              <li><strong>Documento Word simple:</strong> 20-100 KB</li>
              <li><strong>Documento Word con imágenes:</strong> 1-10 MB</li>
              <li><strong>Presentación PowerPoint:</strong> 2-20 MB</li>
              <li><strong>Archivo PDF básico:</strong> 100 KB - 2 MB</li>
            </ul>
          </div>

          <h4>🖼️ Archivos de Imagen</h4>
          <div class="categoria-imagen">
            <h5>Imágenes Digitales:</h5>
            <ul>
              <li><strong>Icono pequeño (16x16 px):</strong> 1-5 KB</li>
              <li><strong>Foto de perfil (200x200 px):</strong> 20-100 KB</li>
              <li><strong>Foto de cámara digital (3000x2000 px):</strong> 2-8 MB</li>
              <li><strong>Imagen profesional RAW:</strong> 20-50 MB</li>
            </ul>

            <h5>Factores que Afectan el Tamaño:</h5>
            <ul>
              <li><strong>Resolución:</strong> Más píxeles = mayor tamaño</li>
              <li><strong>Profundidad de color:</strong> Más colores = mayor tamaño</li>
              <li><strong>Compresión:</strong> JPEG (comprimido) vs PNG (sin pérdida)</li>
              <li><strong>Formato:</strong> RAW > TIFF > PNG > JPEG</li>
            </ul>
          </div>

          <h4>🎵 Archivos de Audio</h4>
          <div class="categoria-audio">
            <h5>Música Digital:</h5>
            <ul>
              <li><strong>Canción MP3 (128 kbps, 3 min):</strong> ~3 MB</li>
              <li><strong>Canción MP3 (320 kbps, 3 min):</strong> ~7 MB</li>
              <li><strong>Canción sin compresión (WAV, 3 min):</strong> ~30 MB</li>
              <li><strong>Audiolibro (1 hora, comprimido):</strong> ~25-50 MB</li>
            </ul>

            <h5>Calidad vs Tamaño:</h5>
            <ul>
              <li><strong>Baja calidad (96 kbps):</strong> Menor tamaño, calidad básica</li>
              <li><strong>Calidad estándar (128-192 kbps):</strong> Balance tamaño/calidad</li>
              <li><strong>Alta calidad (320 kbps):</strong> Mayor tamaño, excelente calidad</li>
              <li><strong>Sin compresión:</strong> Máximo tamaño, calidad perfecta</li>
            </ul>
          </div>

          <h4>🎬 Archivos de Video</h4>
          <div class="categoria-video">
            <h5>Videos Digitales:</h5>
            <ul>
              <li><strong>Video de teléfono (480p, 1 min):</strong> 10-30 MB</li>
              <li><strong>Video HD (720p, 1 min):</strong> 50-100 MB</li>
              <li><strong>Video Full HD (1080p, 1 min):</strong> 100-200 MB</li>
              <li><strong>Video 4K (2160p, 1 min):</strong> 300-800 MB</li>
              <li><strong>Película completa (1080p, 2 horas):</strong> 4-8 GB</li>
            </ul>

            <h5>Factores de Tamaño en Video:</h5>
            <ul>
              <li><strong>Resolución:</strong> 480p < 720p < 1080p < 4K < 8K</li>
              <li><strong>Duración:</strong> Proporcional al tiempo</li>
              <li><strong>Tasa de bits:</strong> Calidad de compresión</li>
              <li><strong>Códec:</strong> H.264, H.265, VP9 (diferentes eficiencias)</li>
              <li><strong>Frames por segundo:</strong> 24fps < 30fps < 60fps</li>
            </ul>
          </div>

          <h4>💾 Software y Aplicaciones</h4>
          <div class="categoria-software">
            <h5>Programas y Juegos:</h5>
            <ul>
              <li><strong>Aplicación móvil simple:</strong> 5-50 MB</li>
              <li><strong>Aplicación de productividad:</strong> 100-500 MB</li>
              <li><strong>Juego móvil:</strong> 100 MB - 2 GB</li>
              <li><strong>Juego de PC moderno:</strong> 20-100 GB</li>
              <li><strong>Sistema operativo:</strong> 4-20 GB</li>
            </ul>

            <h5>Actualizaciones:</h5>
            <ul>
              <li><strong>Actualización de app:</strong> 10-100 MB</li>
              <li><strong>Actualización de SO:</strong> 500 MB - 4 GB</li>
              <li><strong>Actualización de juego:</strong> 100 MB - 10 GB</li>
            </ul>
          </div>

          <h4>🧮 Calculando Necesidades de Almacenamiento</h4>
          <div class="calculo-necesidades">
            <h5>Ejemplo: Biblioteca Digital Personal</h5>
            <ul>
              <li><strong>1,000 fotos familiares:</strong> 1,000 × 3 MB = 3 GB</li>
              <li><strong>200 canciones MP3:</strong> 200 × 4 MB = 800 MB</li>
              <li><strong>50 videos cortos:</strong> 50 × 100 MB = 5 GB</li>
              <li><strong>100 documentos:</strong> 100 × 1 MB = 100 MB</li>
              <li><strong>Total estimado:</strong> ~9 GB</li>
            </ul>

            <h5>Recomendaciones de Almacenamiento:</h5>
            <ul>
              <li><strong>Usuario básico:</strong> 250-500 GB</li>
              <li><strong>Usuario multimedia:</strong> 1-2 TB</li>
              <li><strong>Creador de contenido:</strong> 2-8 TB</li>
              <li><strong>Gamer:</strong> 1-4 TB</li>
            </ul>
          </div>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/tipos-archivos.jpg",
        infografia: "/images/teoria/tamaños-archivos.png"
      },
      actividades: [
        {
          tipo: "calculo",
          pregunta: "Si tienes un disco de 1 TB, ¿cuántas fotos de 5 MB cada una puedes almacenar?",
          ayuda: "Convierte 1 TB a MB, luego divide entre 5 MB por foto"
        }
      ]
    },
    {
      id: 5,
      titulo: "Dispositivos de Almacenamiento Modernos",
      contenido: `
        <h3>💽 Tecnologías de Almacenamiento Actual</h3>
        
        <div class="dispositivos-almacenamiento">
          <h4>🖥️ Almacenamiento Interno</h4>
          
          <div class="disco-duro">
            <h5>💿 Disco Duro Mecánico (HDD)</h5>
            <ul>
              <li><strong>Capacidades típicas:</strong> 500 GB - 20 TB</li>
              <li><strong>Velocidad:</strong> 5,400 - 15,000 RPM</li>
              <li><strong>Ventajas:</strong> Precio bajo por GB, alta capacidad</li>
              <li><strong>Desventajas:</strong> Lento, frágil, consume más energía</li>
              <li><strong>Uso ideal:</strong> Almacenamiento masivo, archivos</li>
            </ul>
          </div>

          <div class="ssd">
            <h5>⚡ Disco de Estado Sólido (SSD)</h5>
            <ul>
              <li><strong>Capacidades típicas:</strong> 120 GB - 8 TB</li>
              <li><strong>Velocidad:</strong> 10-100x más rápido que HDD</li>
              <li><strong>Ventajas:</strong> Muy rápido, silencioso, resistente</li>
              <li><strong>Desventajas:</strong> Más caro por GB</li>
              <li><strong>Uso ideal:</strong> Sistema operativo, programas</li>
            </ul>
          </div>

          <div class="nvme">
            <h5>🚀 NVMe SSD</h5>
            <ul>
              <li><strong>Capacidades típicas:</strong> 250 GB - 4 TB</li>
              <li><strong>Velocidad:</strong> Hasta 7,000 MB/s</li>
              <li><strong>Ventajas:</strong> Velocidad extrema, formato compacto</li>
              <li><strong>Desventajas:</strong> Precio premium</li>
              <li><strong>Uso ideal:</strong> Gaming, edición de video profesional</li>
            </ul>
          </div>

          <h4>📱 Almacenamiento Portátil</h4>
          
          <div class="usb">
            <h5>🔌 Memorias USB (Pen Drive)</h5>
            <ul>
              <li><strong>Capacidades típicas:</strong> 8 GB - 1 TB</li>
              <li><strong>Velocidades:</strong> USB 2.0, 3.0, 3.1, 3.2</li>
              <li><strong>Ventajas:</strong> Pequeño, barato, compatible universalmente</li>
              <li><strong>Desventajas:</strong> Fácil de perder, velocidad limitada</li>
              <li><strong>Uso ideal:</strong> Transferencia de archivos, instalación de SO</li>
            </ul>
          </div>

          <div class="tarjetas">
            <h5>📇 Tarjetas de Memoria</h5>
            <ul>
              <li><strong>SD Card:</strong> 4 GB - 1 TB (cámaras, tablets)</li>
              <li><strong>MicroSD:</strong> 2 GB - 1 TB (teléfonos, drones)</li>
              <li><strong>CompactFlash:</strong> 1 GB - 512 GB (cámaras profesionales)</li>
              <li><strong>Clases de velocidad:</strong> Class 4, 6, 10, UHS-I, UHS-II</li>
            </ul>
          </div>

          <div class="externos">
            <h5>💼 Discos Duros Externos</h5>
            <ul>
              <li><strong>Portátiles (2.5"):</strong> 500 GB - 8 TB</li>
              <li><strong>Escritorio (3.5"):</strong> 1 TB - 20 TB</li>
              <li><strong>Conexiones:</strong> USB 3.0/3.1, USB-C, Thunderbolt</li>
              <li><strong>Uso ideal:</strong> Backup, almacenamiento adicional</li>
            </ul>
          </div>

          <h4>☁️ Almacenamiento en la Nube</h4>
          <div class="nube">
            <h5>Servicios Populares:</h5>
            <ul>
              <li><strong>Google Drive:</strong> 15 GB gratis, hasta 30 TB pagando</li>
              <li><strong>iCloud:</strong> 5 GB gratis, hasta 12 TB pagando</li>
              <li><strong>OneDrive:</strong> 5 GB gratis, hasta 6 TB pagando</li>
              <li><strong>Dropbox:</strong> 2 GB gratis, hasta ilimitado pagando</li>
            </ul>

            <h5>Ventajas de la Nube:</h5>
            <ul>
              <li><strong>Acceso universal:</strong> Desde cualquier dispositivo</li>
              <li><strong>Sincronización:</strong> Archivos actualizados automáticamente</li>
              <li><strong>Backup automático:</strong> Protección contra pérdida</li>
              <li><strong>Colaboración:</strong> Compartir archivos fácilmente</li>
            </ul>

            <h5>Consideraciones:</h5>
            <ul>
              <li><strong>Conexión a internet:</strong> Necesaria para acceso</li>
              <li><strong>Costos recurrentes:</strong> Suscripción mensual/anual</li>
              <li><strong>Privacidad:</strong> Archivos almacenados en servidores externos</li>
              <li><strong>Velocidad:</strong> Limitada por velocidad de internet</li>
            </ul>
          </div>

          <h4>📊 Comparación de Velocidades</h4>
          <div class="tabla-velocidades">
            <table>
              <tr>
                <th>Dispositivo</th>
                <th>Lectura</th>
                <th>Escritura</th>
                <th>Latencia</th>
              </tr>
              <tr>
                <td>HDD 7200 RPM</td>
                <td>150 MB/s</td>
                <td>120 MB/s</td>
                <td>10-20 ms</td>
              </tr>
              <tr>
                <td>SSD SATA</td>
                <td>550 MB/s</td>
                <td>520 MB/s</td>
                <td>0.1 ms</td>
              </tr>
              <tr>
                <td>NVMe SSD</td>
                <td>3,500 MB/s</td>
                <td>3,000 MB/s</td>
                <td>0.01 ms</td>
              </tr>
              <tr>
                <td>USB 3.0</td>
                <td>120 MB/s</td>
                <td>100 MB/s</td>
                <td>variable</td>
              </tr>
            </table>
          </div>

          <h4>💡 Recomendaciones de Uso</h4>
          <div class="recomendaciones">
            <h5>Para Usuario Básico:</h5>
            <ul>
              <li><strong>PC:</strong> SSD 256 GB + HDD 1 TB</li>
              <li><strong>Portátil:</strong> 16-32 GB memoria USB + nube</li>
              <li><strong>Backup:</strong> Disco externo 1 TB</li>
            </ul>

            <h5>Para Creador de Contenido:</h5>
            <ul>
              <li><strong>Principal:</strong> NVMe SSD 1 TB</li>
              <li><strong>Archivo:</strong> HDD 4-8 TB</li>
              <li><strong>Trabajo:</strong> SSD externo 2 TB</li>
              <li><strong>Backup:</strong> Nube + disco externo</li>
            </ul>
          </div>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/dispositivos-almacenamiento.jpg",
        infografia: "/images/teoria/comparacion-velocidades.png"
      },
      actividades: [
        {
          tipo: "investigacion",
          pregunta: "Investiga las especificaciones de almacenamiento de tu computadora o teléfono",
          ayuda: "Busca en configuraciones del sistema la capacidad total y espacio disponible"
        }
      ]
    }
  ],
  recursos: {
    documentos: [
      {
        titulo: "Guía de Conversión de Unidades",
        url: "/docs/conversion-unidades.pdf",
        tipo: "pdf"
      },
      {
        titulo: "Comparativa de Tecnologías de Almacenamiento",
        url: "/docs/tecnologias-almacenamiento.pdf",
        tipo: "pdf"
      }
    ],
    enlaces: [
      {
        titulo: "Calculadora de Conversión de Bytes",
        url: "https://www.rapidtables.com/convert/computer/byte-converter.html",
        tipo: "externo"
      },
      {
        titulo: "Comparador de Dispositivos de Almacenamiento",
        url: "https://en.wikipedia.org/wiki/Computer_data_storage",
        tipo: "externo"
      }
    ],
    videos: [
      {
        titulo: "Unidades de Medida en Informática Explicadas",
        url: "/videos/unidades-medida.mp4",
        duracion: "12:30"
      }
    ]
  },
  evaluacion: {
    tipo: "cuestionario",
    preguntas: [
      {
        pregunta: "¿Cuántos bits hay en un byte?",
        tipo: "opcion_multiple",
        opciones: [
          "4 bits",
          "8 bits",
          "16 bits",
          "32 bits"
        ],
        respuestaCorrecta: 1
      },
      {
        pregunta: "¿Cuántos bytes hay exactamente en 1 KB?",
        tipo: "opcion_multiple",
        opciones: [
          "1,000 bytes",
          "1,024 bytes",
          "1,048 bytes",
          "1,200 bytes"
        ],
        respuestaCorrecta: 1
      },
      {
        pregunta: "Si tienes 2.5 GB de espacio, ¿cuántos MB son?",
        tipo: "opcion_multiple",
        opciones: [
          "2,500 MB",
          "2,560 MB",
          "2,048 MB",
          "3,000 MB"
        ],
        respuestaCorrecta: 1
      },
      {
        pregunta: "¿Qué tipo de archivo típicamente ocupa MÁS espacio?",
        tipo: "opcion_multiple",
        opciones: [
          "Un documento de Word de 10 páginas",
          "Una foto de cámara digital",
          "Un video de 1 minuto en HD",
          "100 canciones en MP3"
        ],
        respuestaCorrecta: 2
      },
      {
        pregunta: "¿Cuál es la principal ventaja de un SSD sobre un HDD?",
        tipo: "opcion_multiple",
        opciones: [
          "Menor costo",
          "Mayor capacidad",
          "Mayor velocidad",
          "Mejor compatibilidad"
        ],
        respuestaCorrecta: 2
      }
    ]
  }
};

export default tema03;
