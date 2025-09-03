import React, { createContext, useContext } from 'react';

const ContenidoContext = createContext();

export const useContenido = () => {
  const context = useContext(ContenidoContext);
  if (!context) {
    throw new Error('useContenido debe ser usado dentro de ContenidoProvider');
  }
  return context;
};

export const ContenidoProvider = ({ children }) => {
  // Base de datos de contenido teórico estructurado
  const contenidoDatabase = {
    'nociones-computador': {
      '1': {
        titulo: "Algoritmos y uso básico",
        duracion: "15-20 minutos",
        objetivos: [
          "Comprender qué es un algoritmo",
          "Aprender la secuencia correcta de encendido",
          "Dominar el procedimiento de apagado seguro",
          "Aplicar algoritmos básicos en el uso del computador"
        ],
        secciones: [
          {
            id: 1,
            titulo: "¿Qué es un Algoritmo?",
            contenido: `
              <h3>🧠 Concepto de Algoritmo</h3>
              <p>Un <strong>algoritmo</strong> es una secuencia ordenada de pasos para resolver un problema o realizar una tarea.</p>
              
              <h4>Características de un algoritmo:</h4>
              <ul>
                <li><strong>Finito:</strong> Tiene un inicio y un final</li>
                <li><strong>Preciso:</strong> Cada paso está claramente definido</li>
                <li><strong>Ordenado:</strong> Los pasos siguen una secuencia lógica</li>
                <li><strong>Efectivo:</strong> Lleva a la solución del problema</li>
              </ul>

              <div class="ejemplo-cotidiano">
                <h4>💡 Ejemplo Cotidiano</h4>
                <p><strong>Algoritmo para hacer un sándwich:</strong></p>
                <ol>
                  <li>Tomar dos rebanadas de pan</li>
                  <li>Aplicar mantequilla en una rebanada</li>
                  <li>Colocar jamón y queso</li>
                  <li>Cerrar con la otra rebanada</li>
                  <li>Cortar por la mitad</li>
                </ol>
              </div>
            `,
            actividades: [
              {
                tipo: "reflexion",
                pregunta: "Escribe el algoritmo que sigues para llegar a la escuela",
                ayuda: "Piensa en cada paso desde que sales de casa"
              }
            ]
          },
          {
            id: 2,
            titulo: "Algoritmo de Encendido",
            contenido: `
              <h3>🔌 Encender el Computador Correctamente</h3>
              
              <div class="algoritmo-encendido">
                <h4>📋 Pasos para Encender:</h4>
                <ol>
                  <li><strong>Verificar conexiones:</strong>
                    <ul>
                      <li>Cable de alimentación conectado</li>
                      <li>Monitor enchufado y conectado</li>
                      <li>Teclado y ratón conectados</li>
                    </ul>
                  </li>
                  <li><strong>Encender periféricos:</strong>
                    <ul>
                      <li>Presionar botón del monitor</li>
                      <li>Activar altavoces (si son externos)</li>
                    </ul>
                  </li>
                  <li><strong>Encender la CPU:</strong>
                    <ul>
                      <li>Localizar botón de encendido (Power)</li>
                      <li>Presionar una sola vez</li>
                      <li>Esperar sin tocar nada</li>
                    </ul>
                  </li>
                  <li><strong>Esperar el arranque:</strong>
                    <ul>
                      <li>Ver luces de actividad</li>
                      <li>Escuchar ventiladores funcionando</li>
                      <li>Aguardar pantalla de carga</li>
                    </ul>
                  </li>
                </ol>
              </div>

              <div class="advertencias">
                <h4>⚠️ Qué NO hacer:</h4>
                <ul>
                  <li>No presionar el botón múltiples veces</li>
                  <li>No desconectar cables durante el encendido</li>
                  <li>No mover el computador mientras arranca</li>
                  <li>No usar durante tormentas eléctricas</li>
                </ul>
              </div>
            `
          },
          {
            id: 3,
            titulo: "Algoritmo de Apagado",
            contenido: `
              <h3>🔄 Apagar el Computador Correctamente</h3>
              
              <div class="algoritmo-apagado">
                <h4>📋 Pasos para Apagar:</h4>
                <ol>
                  <li><strong>Guardar trabajo:</strong>
                    <ul>
                      <li>Guardar todos los documentos abiertos</li>
                      <li>Cerrar programas importantes</li>
                    </ul>
                  </li>
                  <li><strong>Usar menú de Windows:</strong>
                    <ul>
                      <li>Clic en botón "Inicio"</li>
                      <li>Seleccionar "Apagar"</li>
                      <li>Elegir "Apagar" del menú</li>
                    </ul>
                  </li>
                  <li><strong>Esperar apagado completo:</strong>
                    <ul>
                      <li>No tocar nada durante el proceso</li>
                      <li>Esperar que luces se apaguen</li>
                      <li>Ventiladores dejan de funcionar</li>
                    </ul>
                  </li>
                  <li><strong>Apagar periféricos:</strong>
                    <ul>
                      <li>Apagar monitor</li>
                      <li>Apagar altavoces externos</li>
                    </ul>
                  </li>
                </ol>
              </div>

              <div class="metodos-apagado">
                <h4>🎛️ Diferentes Métodos:</h4>
                <ul>
                  <li><strong>Apagar:</strong> Cierra todo completamente</li>
                  <li><strong>Reiniciar:</strong> Apaga y enciende automáticamente</li>
                  <li><strong>Suspender:</strong> Ahorra energía, arranque rápido</li>
                  <li><strong>Hibernar:</strong> Guarda sesión, apagado completo</li>
                </ul>
              </div>
            `
          }
        ]
      },
      '2': {
        titulo: "Elementos que componen al computador",
        duracion: "20-25 minutos",
        objetivos: [
          "Identificar monitor, CPU, bocinas, ratón y teclado",
          "Comprender la función de cada componente",
          "Aprender las conexiones básicas",
          "Conocer el cuidado de cada elemento"
        ],
        secciones: [
          {
            id: 1,
            titulo: "El Monitor",
            contenido: `
              <h3>🖥️ Monitor - Ventana al Mundo Digital</h3>
              
              <div class="componente-detalle">
                <h4>¿Qué es?</h4>
                <p>El <strong>monitor</strong> es la pantalla donde se muestra toda la información visual del computador.</p>
                
                <h4>Función Principal:</h4>
                <ul>
                  <li>Mostrar imágenes, texto y videos</li>
                  <li>Presentar la interfaz del sistema operativo</li>
                  <li>Permitir la interacción visual con programas</li>
                </ul>

                <h4>Controles Básicos:</h4>
                <ul>
                  <li><strong>Botón de encendido:</strong> Enciende/apaga la pantalla</li>
                  <li><strong>Brillo:</strong> Ajusta la intensidad de luz</li>
                  <li><strong>Contraste:</strong> Mejora la definición de colores</li>
                  <li><strong>Menú:</strong> Accede a configuraciones avanzadas</li>
                </ul>

                <h4>Cuidados:</h4>
                <ul>
                  <li>Limpiar con paño suave y seco</li>
                  <li>No presionar la pantalla</li>
                  <li>Mantener distancia adecuada (50-70 cm)</li>
                  <li>Ajustar altura a nivel de los ojos</li>
                </ul>
              </div>
            `
          },
          {
            id: 2,
            titulo: "La CPU (Unidad Central)",
            contenido: `
              <h3>🏗️ CPU - El Cerebro del Computador</h3>
              
              <div class="componente-detalle">
                <h4>¿Qué es?</h4>
                <p>La <strong>CPU</strong> (Unidad Central de Procesamiento) es la "torre" o caja que contiene todos los componentes principales del computador.</p>
                
                <h4>Componentes Internos:</h4>
                <ul>
                  <li><strong>Procesador:</strong> Realiza todos los cálculos</li>
                  <li><strong>Memoria RAM:</strong> Almacena datos temporalmente</li>
                  <li><strong>Disco Duro:</strong> Guarda archivos permanentemente</li>
                  <li><strong>Fuente de poder:</strong> Suministra electricidad</li>
                </ul>

                <h4>Puertos de Conexión:</h4>
                <ul>
                  <li><strong>USB:</strong> Para ratón, teclado, memorias</li>
                  <li><strong>Audio:</strong> Para altavoces y micrófono</li>
                  <li><strong>Video:</strong> Para conectar el monitor</li>
                  <li><strong>Red:</strong> Para cable de internet</li>
                </ul>

                <h4>Indicadores Luminosos:</h4>
                <ul>
                  <li><strong>Luz de encendido:</strong> Verde/azul cuando está encendido</li>
                  <li><strong>Luz de actividad:</strong> Parpadea al trabajar</li>
                </ul>
              </div>
            `
          },
          {
            id: 3,
            titulo: "Las Bocinas",
            contenido: `
              <h3>🔊 Bocinas - El Sonido del Sistema</h3>
              
              <div class="componente-detalle">
                <h4>¿Qué son?</h4>
                <p>Las <strong>bocinas</strong> o altavoces reproducen todos los sonidos del computador: música, videos, notificaciones y efectos.</p>
                
                <h4>Tipos de Bocinas:</h4>
                <ul>
                  <li><strong>Integradas:</strong> Incluidas en laptops y monitores</li>
                  <li><strong>Externas:</strong> Separadas, mejor calidad de sonido</li>
                  <li><strong>USB:</strong> Se conectan por puerto USB</li>
                  <li><strong>Bluetooth:</strong> Inalámbricas</li>
                </ul>

                <h4>Conexión y Configuración:</h4>
                <ol>
                  <li>Conectar al puerto de audio (verde) de la CPU</li>
                  <li>Encender las bocinas (si tienen botón)</li>
                  <li>Ajustar volumen desde Windows</li>
                  <li>Probar con un sonido del sistema</li>
                </ol>

                <h4>Controles Básicos:</h4>
                <ul>
                  <li><strong>Volumen:</strong> Sube o baja el sonido</li>
                  <li><strong>Graves/Agudos:</strong> Ajusta calidad del audio</li>
                  <li><strong>Mute:</strong> Silencia completamente</li>
                </ul>
              </div>
            `
          },
          {
            id: 4,
            titulo: "El Ratón (Mouse)",
            contenido: `
              <h3>🖱️ El Ratón - Dispositivo de Navegación</h3>
              
              <div class="componente-detalle">
                <h4>¿Qué es?</h4>
                <p>El <strong>ratón</strong> o <strong>mouse</strong> es un dispositivo de entrada que permite controlar el cursor en la pantalla y realizar selecciones.</p>
                
                <h4>Partes del Ratón:</h4>
                <ul>
                  <li><strong>Botón izquierdo:</strong> Para seleccionar y hacer clic</li>
                  <li><strong>Botón derecho:</strong> Para menús contextuales</li>
                  <li><strong>Rueda central:</strong> Para desplazarse (scroll)</li>
                  <li><strong>Sensor óptico:</strong> Detecta el movimiento</li>
                  <li><strong>Cable o receptor:</strong> Para conexión con la CPU</li>
                </ul>

                <h4>Tipos de Ratones:</h4>
                <ul>
                  <li><strong>Con cable:</strong> Conexión directa por USB</li>
                  <li><strong>Inalámbrico:</strong> Conexión por Bluetooth o receptor</li>
                  <li><strong>Óptico:</strong> Usa luz LED para detectar movimiento</li>
                  <li><strong>Láser:</strong> Mayor precisión con tecnología láser</li>
                </ul>

                <h4>Funciones Básicas:</h4>
                <ul>
                  <li><strong>Mover cursor:</strong> Navegar por la pantalla</li>
                  <li><strong>Clic izquierdo:</strong> Seleccionar elementos</li>
                  <li><strong>Clic derecho:</strong> Mostrar opciones</li>
                  <li><strong>Doble clic:</strong> Abrir archivos y programas</li>
                  <li><strong>Arrastrar:</strong> Mover objetos en pantalla</li>
                </ul>

                <h4>Cuidados del Ratón:</h4>
                <ul>
                  <li>Limpiar sensor con paño seco</li>
                  <li>Usar sobre superficie adecuada (mousepad)</li>
                  <li>Evitar caídas y golpes</li>
                  <li>Cambiar baterías cuando sea necesario</li>
                </ul>
              </div>
            `
          },
          {
            id: 5,
            titulo: "El Teclado",
            contenido: `
              <h3>⌨️ El Teclado - Dispositivo de Entrada de Texto</h3>
              
              <div class="componente-detalle">
                <h4>¿Qué es?</h4>
                <p>El <strong>teclado</strong> es el dispositivo principal para escribir texto, números y comandos en el computador.</p>
                
                <h4>Partes del Teclado:</h4>
                <ul>
                  <li><strong>Teclas alfabéticas:</strong> Letras de la A a la Z</li>
                  <li><strong>Teclas numéricas:</strong> Números del 0 al 9</li>
                  <li><strong>Teclas de función:</strong> F1, F2, F3... F12</li>
                  <li><strong>Teclas especiales:</strong> Espacio, Enter, Shift, Ctrl, Alt</li>
                  <li><strong>Teclado numérico:</strong> Números y operaciones (lado derecho)</li>
                  <li><strong>Teclas de dirección:</strong> Flechas para navegación</li>
                </ul>

                <h4>Teclas Importantes:</h4>
                <ul>
                  <li><strong>Enter:</strong> Confirmar acciones o saltar línea</li>
                  <li><strong>Espacio:</strong> Insertar espacios entre palabras</li>
                  <li><strong>Backspace:</strong> Borrar hacia atrás</li>
                  <li><strong>Delete:</strong> Borrar hacia adelante</li>
                  <li><strong>Shift:</strong> Escribir mayúsculas y símbolos</li>
                  <li><strong>Caps Lock:</strong> Activar/desactivar mayúsculas</li>
                  <li><strong>Tab:</strong> Mover entre campos o indentar</li>
                </ul>

                <h4>Tipos de Teclado:</h4>
                <ul>
                  <li><strong>Con cable:</strong> Conexión USB directa</li>
                  <li><strong>Inalámbrico:</strong> Bluetooth o receptor USB</li>
                  <li><strong>Mecánico:</strong> Teclas individuales, más duradero</li>
                  <li><strong>Membrana:</strong> Superficie continua, más silencioso</li>
                </ul>

                <h4>Postura Correcta:</h4>
                <ul>
                  <li><strong>Muñecas rectas:</strong> Sin doblar hacia arriba</li>
                  <li><strong>Dedos curvados:</strong> Como tocando piano</li>
                  <li><strong>Brazos relajados:</strong> Codos a los lados</li>
                  <li><strong>Altura adecuada:</strong> Antebrazos paralelos al suelo</li>
                </ul>

                <h4>Cuidados del Teclado:</h4>
                <ul>
                  <li>Mantener limpio y libre de polvo</li>
                  <li>Evitar derramar líquidos</li>
                  <li>Usar con manos limpias</li>
                  <li>Limpiar con aire comprimido entre teclas</li>
                </ul>
              </div>
            `
          }
        ]
      },
      '3': {
        titulo: "Manejo del ratón",
        duracion: "15-20 minutos", 
        objetivos: [
          "Adoptar postura correcta para usar el ratón",
          "Dominar el movimiento preciso del cursor",
          "Aprender los diferentes tipos de clics",
          "Desarrollar coordinación mano-cursor"
        ],
        secciones: [
          {
            id: 1,
            titulo: "Uso Correcto del Ratón",
            contenido: `
              <h3>🖱️ Postura y Técnica Correcta</h3>
              
              <div class="postura-correcta">
                <h4>🪑 Posición del Cuerpo:</h4>
                <ul>
                  <li><strong>Espalda recta:</strong> Apoyada en el respaldo</li>
                  <li><strong>Pies en el suelo:</strong> Planos y estables</li>
                  <li><strong>Brazos relajados:</strong> Pegados al cuerpo</li>
                  <li><strong>Muñecas rectas:</strong> Sin doblar hacia arriba o abajo</li>
                </ul>

                <h4>✋ Agarre del Ratón:</h4>
                <ul>
                  <li><strong>Palma de la mano:</strong> Descansa sobre el ratón</li>
                  <li><strong>Dedos relajados:</strong> Índice y medio sobre los botones</li>
                  <li><strong>Pulgar:</strong> En el lado izquierdo del ratón</li>
                  <li><strong>Sin tensión:</strong> Agarre suave y natural</li>
                </ul>

                <h4>📏 Configuración del Espacio:</h4>
                <ul>
                  <li><strong>Superficie adecuada:</strong> Usar mousepad o superficie lisa</li>
                  <li><strong>Espacio suficiente:</strong> Para mover libremente</li>
                  <li><strong>Altura correcta:</strong> Codo a 90 grados</li>
                  <li><strong>Iluminación:</strong> Evitar reflejos en la pantalla</li>
                </ul>
              </div>

              <div class="errores-comunes">
                <h4>❌ Errores Comunes a Evitar:</h4>
                <ul>
                  <li>Agarrar el ratón muy fuerte</li>
                  <li>Doblar la muñeca excesivamente</li>
                  <li>Usar solo las puntas de los dedos</li>
                  <li>Mover todo el brazo en lugar de la muñeca</li>
                </ul>
              </div>
            `
          },
          {
            id: 2,
            titulo: "Movimiento del Cursor",
            contenido: `
              <h3>🎯 Control Preciso del Cursor</h3>
              
              <div class="movimiento-cursor">
                <h4>🏃 Tipos de Movimiento:</h4>
                <ul>
                  <li><strong>Movimientos amplios:</strong> Con toda la muñeca para distancias largas</li>
                  <li><strong>Movimientos finos:</strong> Solo con dedos para precisión</li>
                  <li><strong>Movimientos rápidos:</strong> Para cambiar de área rápidamente</li>
                  <li><strong>Movimientos lentos:</strong> Para trabajo de precisión</li>
                </ul>

                <h4>🎮 Ejercicios de Coordinación:</h4>
                <ol>
                  <li><strong>Movimiento libre:</strong>
                    <ul>
                      <li>Mover el cursor por toda la pantalla</li>
                      <li>Hacer círculos grandes y pequeños</li>
                      <li>Dibujar líneas rectas</li>
                    </ul>
                  </li>
                  <li><strong>Seguir objetos:</strong>
                    <ul>
                      <li>Seguir los bordes de ventanas</li>
                      <li>Seguir texto mientras lees</li>
                      <li>Seguir iconos en la pantalla</li>
                    </ul>
                  </li>
                  <li><strong>Apuntar con precisión:</strong>
                    <ul>
                      <li>Hacer clic en botones pequeños</li>
                      <li>Apuntar a esquinas de ventanas</li>
                      <li>Seleccionar texto específico</li>
                    </ul>
                  </li>
                </ol>

                <h4>⚙️ Configuración de Velocidad:</h4>
                <ul>
                  <li><strong>Velocidad lenta:</strong> Mayor precisión, menos velocidad</li>
                  <li><strong>Velocidad rápida:</strong> Movimientos más amplios</li>
                  <li><strong>Aceleración:</strong> Se adapta a la velocidad de movimiento</li>
                  <li><strong>Personalización:</strong> Ajustar en Configuración de Windows</li>
                </ul>
              </div>

              <div class="tipos-clic">
                <h4>🖱️ Tipos de Clic:</h4>
                <ul>
                  <li><strong>Clic simple:</strong> Seleccionar elementos</li>
                  <li><strong>Doble clic:</strong> Abrir programas y archivos</li>
                  <li><strong>Clic derecho:</strong> Mostrar menú contextual</li>
                  <li><strong>Arrastrar:</strong> Mover objetos manteniendo presionado</li>
                  <li><strong>Rueda:</strong> Desplazarse hacia arriba y abajo</li>
                </ul>
              </div>
            `
          }
        ]
      }
    },
    'intro-windows': {
      '1': {
        titulo: "Dispositivos Básicos del Computador",
        duracion: "20-25 minutos",
        objetivos: [
          "Identificar los dispositivos básicos de entrada y salida",
          "Comprender la función de cada dispositivo en el sistema",
          "Reconocer la importancia de los periféricos en Windows",
          "Aprender sobre la conectividad y compatibilidad de dispositivos"
        ],
        secciones: [
          {
            id: 1,
            titulo: "Dispositivos de Entrada",
            contenido: `
              <h3>⌨️ Dispositivos de Entrada</h3>
              <p>Los <strong>dispositivos de entrada</strong> permiten al usuario enviar información al computador.</p>
              
              <h4>Principales dispositivos:</h4>
              <div class="dispositivos-grid">
                <div class="dispositivo">
                  <h5>⌨️ Teclado</h5>
                  <ul>
                    <li>Dispositivo principal para escribir texto</li>
                    <li>Incluye teclas especiales (Ctrl, Alt, Windows)</li>
                    <li>Tipos: mecánico, de membrana, virtual</li>
                  </ul>
                </div>
                <div class="dispositivo">
                  <h5>🖱️ Mouse</h5>
                  <ul>
                    <li>Controla el cursor en pantalla</li>
                    <li>Botones: izquierdo, derecho, rueda</li>
                    <li>Tipos: óptico, láser, inalámbrico</li>
                  </ul>
                </div>
                <div class="dispositivo">
                  <h5>📱 Pantalla Táctil</h5>
                  <ul>
                    <li>Permite tocar directamente la pantalla</li>
                    <li>Común en tablets y laptops modernas</li>
                    <li>Gestos: tocar, deslizar, pellizcar</li>
                  </ul>
                </div>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/dispositivos-entrada.jpg",
              video: "/videos/teoria/como-usar-mouse-teclado.mp4"
            },
            actividades: [
              {
                tipo: "practica",
                pregunta: "Identifica todos los dispositivos de entrada en tu computador",
                ayuda: "Busca: teclado, mouse, micrófono, cámara web"
              }
            ]
          },
          {
            id: 2,
            titulo: "Dispositivos de Salida",
            contenido: `
              <h3>🖥️ Dispositivos de Salida</h3>
              <p>Los <strong>dispositivos de salida</strong> muestran información del computador al usuario.</p>
              
              <h4>Principales dispositivos:</h4>
              <div class="dispositivos-grid">
                <div class="dispositivo">
                  <h5>🖥️ Monitor</h5>
                  <ul>
                    <li>Muestra la interfaz visual de Windows</li>
                    <li>Tipos: LCD, LED, OLED</li>
                    <li>Resoluciones: HD, Full HD, 4K</li>
                  </ul>
                </div>
                <div class="dispositivo">
                  <h5>🔊 Altavoces</h5>
                  <ul>
                    <li>Reproducen sonidos del sistema</li>
                    <li>Integrados o externos</li>
                    <li>Control de volumen desde Windows</li>
                  </ul>
                </div>
                <div class="dispositivo">
                  <h5>🖨️ Impresora</h5>
                  <ul>
                    <li>Convierte documentos digitales a papel</li>
                    <li>Tipos: inyección, láser</li>
                    <li>Funciones: imprimir, escanear, copiar</li>
                  </ul>
                </div>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/dispositivos-salida.jpg",
              video: "/videos/teoria/configurar-monitor-audio.mp4"
            },
            actividades: [
              {
                tipo: "identificacion",
                pregunta: "¿Qué dispositivos de salida tienes conectados a tu PC?",
                ayuda: "Revisa: monitor, altavoces, auriculares, impresora"
              }
            ]
          },
          {
            id: 3,
            titulo: "Conexión y Configuración",
            contenido: `
              <h3>🔌 Conectando Dispositivos en Windows</h3>
              <p>Windows reconoce automáticamente la mayoría de dispositivos cuando se conectan.</p>
              
              <h4>Tipos de conexiones:</h4>
              <div class="conexiones-grid">
                <div class="conexion">
                  <h5>🔌 USB</h5>
                  <p>Universal Serial Bus - Conexión más común</p>
                  <ul>
                    <li>USB-A: Puerto rectangular tradicional</li>
                    <li>USB-C: Puerto ovalado moderno</li>
                    <li>Plug and Play: conectar y usar</li>
                  </ul>
                </div>
                <div class="conexion">
                  <h5>📶 Bluetooth</h5>
                  <p>Conexión inalámbrica de corto alcance</p>
                  <ul>
                    <li>Mouse y teclados inalámbricos</li>
                    <li>Auriculares y altavoces</li>
                    <li>Emparejamiento necesario</li>
                  </ul>
                </div>
                <div class="conexion">
                  <h5>🌐 Wi-Fi</h5>
                  <p>Conexión inalámbrica a internet</p>
                  <ul>
                    <li>Red doméstica o pública</li>
                    <li>Contraseña requerida</li>
                    <li>Configuración automática</li>
                  </ul>
                </div>
              </div>
              
              <h4>📋 Pasos para conectar dispositivos:</h4>
              <ol>
                <li><strong>Conectar físicamente</strong> (USB) o activar (Bluetooth)</li>
                <li><strong>Windows detecta</strong> automáticamente el dispositivo</li>
                <li><strong>Instala drivers</strong> si es necesario</li>
                <li><strong>Notificación</strong> confirma que está listo</li>
                <li><strong>Configurar</strong> según necesidades</li>
              </ol>
            `,
            multimedia: {
              imagen: "/images/teoria/conexiones-dispositivos.jpg",
              video: "/videos/teoria/conectar-dispositivos-windows.mp4"
            },
            actividades: [
              {
                tipo: "practica",
                pregunta: "Conecta y desconecta un dispositivo USB observando las notificaciones",
                ayuda: "Usa una memoria USB o mouse USB para practicar"
              }
            ]
          },
          {
            id: 4,
            titulo: "Administrador de Dispositivos",
            contenido: `
              <h3>⚙️ Administrador de Dispositivos en Windows</h3>
              <p>Herramienta para ver y gestionar todos los dispositivos conectados.</p>
              
              <h4>🚀 Cómo acceder:</h4>
              <ol>
                <li>Clic derecho en "Este equipo"</li>
                <li>Seleccionar "Propiedades"</li>
                <li>Clic en "Administrador de dispositivos"</li>
              </ol>
              
              <h4>📱 Qué puedes hacer:</h4>
              <div class="funciones-admin">
                <div class="funcion">
                  <h5>👀 Ver dispositivos</h5>
                  <p>Lista organizada por categorías</p>
                </div>
                <div class="funcion">
                  <h5>🔄 Actualizar drivers</h5>
                  <p>Mejorar compatibilidad y rendimiento</p>
                </div>
                <div class="funcion">
                  <h5>❌ Desactivar dispositivos</h5>
                  <p>Temporalmente sin desconectar</p>
                </div>
                <div class="funcion">
                  <h5>🔧 Resolver problemas</h5>
                  <p>Diagnosticar dispositivos con errores</p>
                </div>
              </div>
              
              <h4>⚠️ Símbolos importantes:</h4>
              <ul>
                <li><strong>▲ Amarillo:</strong> Advertencia o problema</li>
                <li><strong>❌ Rojo:</strong> Error grave</li>
                <li><strong>↓ Gris:</strong> Dispositivo desactivado</li>
                <li><strong>✅ Sin símbolo:</strong> Funcionando correctamente</li>
              </ul>
            `,
            multimedia: {
              imagen: "/images/teoria/administrador-dispositivos.jpg",
              video: "/videos/teoria/usar-administrador-dispositivos.mp4"
            },
            actividades: [
              {
                tipo: "exploracion",
                pregunta: "Abre el Administrador de dispositivos y explora las categorías",
                ayuda: "Busca: Audio, Teclados, Mouse, Monitores"
              }
            ]
          }
        ],
        recursos: {
          documentos: [
            {
              titulo: "Guía de Dispositivos para Windows",
              tipo: "PDF",
              url: "/recursos/intro-windows/dispositivos-basicos.pdf"
            },
            {
              titulo: "Manual de Conexiones USB y Bluetooth",
              tipo: "PDF",
              url: "/recursos/intro-windows/conexiones-dispositivos.pdf"
            }
          ],
          videos: [
            {
              titulo: "Conectar Dispositivos en Windows",
              duracion: "8 min",
              url: "/videos/conectar-dispositivos-windows.mp4"
            }
          ],
          enlaces: [
            {
              titulo: "Soporte Microsoft - Dispositivos",
              url: "https://support.microsoft.com/es-es/windows/dispositivos"
            }
          ]
        },
        evaluacion: {
          preRequisitos: ["Conocimientos básicos de computación"],
          criterios: [
            "Identificar dispositivos de entrada y salida",
            "Explicar cómo conectar dispositivos en Windows",
            "Usar el Administrador de dispositivos",
            "Resolver problemas básicos de conectividad"
          ],
          tiempoEstimado: "20 minutos"
        }
      },
      '2': {
        titulo: "Uso Básico de Windows",
        duracion: "25-30 minutos",
        objetivos: [
          "Familiarizarse con la interfaz de Windows",
          "Aprender a usar el menú Inicio y la barra de tareas",
          "Dominar las operaciones básicas con ventanas",
          "Conocer los gestos y métodos de navegación esenciales"
        ],
        secciones: [
          {
            id: 1,
            titulo: "El Escritorio de Windows",
            contenido: `
              <h3>🖥️ Conociendo el Escritorio</h3>
              <p>El <strong>escritorio</strong> es la pantalla principal que ves al iniciar Windows. Es tu espacio de trabajo principal.</p>
              
              <h4>Elementos del escritorio:</h4>
              <div class="elementos-escritorio">
                <div class="elemento">
                  <h5>🖼️ Fondo de Pantalla</h5>
                  <ul>
                    <li>Imagen decorativa de fondo</li>
                    <li>Se puede personalizar</li>
                    <li>No afecta el funcionamiento</li>
                  </ul>
                </div>
                <div class="elemento">
                  <h5>📁 Iconos del Escritorio</h5>
                  <ul>
                    <li><strong>Este equipo:</strong> Acceso a discos y carpetas</li>
                    <li><strong>Papelera:</strong> Archivos eliminados</li>
                    <li><strong>Accesos directos:</strong> Links a programas</li>
                  </ul>
                </div>
                <div class="elemento">
                  <h5>📊 Barra de Tareas</h5>
                  <ul>
                    <li>Ubicada en la parte inferior</li>
                    <li>Contiene el botón Inicio</li>
                    <li>Muestra programas abiertos</li>
                    <li>Área de notificaciones a la derecha</li>
                  </ul>
                </div>
              </div>

              <h4>🎯 Acciones básicas en el escritorio:</h4>
              <div class="acciones-basicas">
                <div class="accion">
                  <h5>🖱️ Clic simple</h5>
                  <p>Selecciona un elemento</p>
                </div>
                <div class="accion">
                  <h5>🖱️ Doble clic</h5>
                  <p>Abre programas o carpetas</p>
                </div>
                <div class="accion">
                  <h5>🖱️ Clic derecho</h5>
                  <p>Muestra menú contextual</p>
                </div>
                <div class="accion">
                  <h5>🖱️ Arrastrar</h5>
                  <p>Mueve elementos</p>
                </div>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/escritorio-windows.jpg",
              video: "/videos/teoria/navegar-escritorio.mp4"
            },
            actividades: [
              {
                tipo: "exploracion",
                pregunta: "Identifica todos los elementos de tu escritorio actual",
                ayuda: "Busca: fondo, iconos, barra de tareas, área de notificaciones"
              }
            ]
          },
          {
            id: 2,
            titulo: "El Menú Inicio",
            contenido: `
              <h3>🚀 Navegando el Menú Inicio</h3>
              <p>El <strong>menú Inicio</strong> es el centro de control principal de Windows.</p>
              
              <h4>📍 Cómo acceder:</h4>
              <ul>
                <li>Clic en el botón <strong>Inicio</strong> (esquina inferior izquierda)</li>
                <li>Presionar la tecla <strong>Windows</strong> en el teclado</li>
                <li>Combinación <strong>Ctrl + Esc</strong></li>
              </ul>

              <h4>🗂️ Secciones del Menú Inicio:</h4>
              <div class="secciones-inicio">
                <div class="seccion">
                  <h5>📋 Lista de Aplicaciones</h5>
                  <ul>
                    <li>Programas instalados alfabéticamente</li>
                    <li>Carpetas organizadas por categoría</li>
                    <li>Aplicaciones recientes al inicio</li>
                  </ul>
                </div>
                <div class="seccion">
                  <h5>📌 Aplicaciones Ancladas</h5>
                  <ul>
                    <li>Accesos rápidos personalizados</li>
                    <li>Se pueden agregar o quitar</li>
                    <li>Mosaicos vivos (Windows 10/11)</li>
                  </ul>
                </div>
                <div class="seccion">
                  <h5>⚙️ Opciones de Sistema</h5>
                  <ul>
                    <li><strong>Configuración:</strong> Ajustes del sistema</li>
                    <li><strong>Energía:</strong> Apagar, reiniciar, suspender</li>
                    <li><strong>Usuario:</strong> Cambiar cuenta, cerrar sesión</li>
                  </ul>
                </div>
              </div>

              <h4>🔍 Búsqueda en el Menú Inicio:</h4>
              <div class="busqueda-tips">
                <h5>💡 Consejos de búsqueda:</h5>
                <ul>
                  <li>Escribe directamente después de abrir el menú</li>
                  <li>Busca aplicaciones, archivos, configuraciones</li>
                  <li>Usa palabras clave simples</li>
                  <li>Presiona <strong>Enter</strong> para abrir el primer resultado</li>
                </ul>
              </div>

              <div class="ejemplos-busqueda">
                <h5>📝 Ejemplos útiles:</h5>
                <ul>
                  <li><strong>"calc"</strong> → Calculadora</li>
                  <li><strong>"note"</strong> → Bloc de notas</li>
                  <li><strong>"config"</strong> → Configuración</li>
                  <li><strong>"panel"</strong> → Panel de control</li>
                </ul>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/menu-inicio.jpg",
              video: "/videos/teoria/usar-menu-inicio.mp4"
            },
            actividades: [
              {
                tipo: "practica",
                pregunta: "Busca y abre la Calculadora usando el menú Inicio",
                ayuda: "Presiona Windows, escribe 'calc' y presiona Enter"
              },
              {
                tipo: "personalizacion",
                pregunta: "Ancla una aplicación al menú Inicio",
                ayuda: "Clic derecho en una app → 'Anclar al inicio'"
              }
            ]
          },
          {
            id: 3,
            titulo: "Trabajando con Ventanas",
            contenido: `
              <h3>🪟 Gestión de Ventanas</h3>
              <p>Las <strong>ventanas</strong> son contenedores donde se ejecutan los programas en Windows.</p>
              
              <h4>🔧 Partes de una ventana:</h4>
              <div class="partes-ventana">
                <div class="parte">
                  <h5>📋 Barra de Título</h5>
                  <p>Muestra el nombre del programa y documento actual</p>
                </div>
                <div class="parte">
                  <h5>🎛️ Controles de Ventana</h5>
                  <ul>
                    <li><strong>─ Minimizar:</strong> Oculta la ventana</li>
                    <li><strong>▢ Maximizar:</strong> Ocupa toda la pantalla</li>
                    <li><strong>✕ Cerrar:</strong> Cierra el programa</li>
                  </ul>
                </div>
                <div class="parte">
                  <h5>📏 Bordes</h5>
                  <p>Permiten redimensionar la ventana arrastrando</p>
                </div>
              </div>

              <h4>⚡ Operaciones básicas:</h4>
              <div class="operaciones-ventana">
                <div class="operacion">
                  <h5>📱 Mover ventana</h5>
                  <p>Arrastra desde la barra de título</p>
                </div>
                <div class="operacion">
                  <h5>📏 Redimensionar</h5>
                  <p>Arrastra desde los bordes o esquinas</p>
                </div>
                <div class="operacion">
                  <h5>⬆️ Maximizar rápido</h5>
                  <p>Doble clic en la barra de título</p>
                </div>
                <div class="operacion">
                  <h5>🔄 Cambiar entre ventanas</h5>
                  <p>Alt + Tab para alternar</p>
                </div>
              </div>

              <h4>🎯 Aero Snap (Windows 7+):</h4>
              <div class="aero-snap">
                <p>Organiza ventanas automáticamente:</p>
                <ul>
                  <li><strong>⬅️ Windows + ←:</strong> Ventana a la mitad izquierda</li>
                  <li><strong>➡️ Windows + →:</strong> Ventana a la mitad derecha</li>
                  <li><strong>⬆️ Windows + ↑:</strong> Maximizar ventana</li>
                  <li><strong>⬇️ Windows + ↓:</strong> Minimizar/restaurar ventana</li>
                </ul>
              </div>

              <h4>🔀 Múltiples ventanas:</h4>
              <div class="multiples-ventanas">
                <h5>✨ Consejos para organizarse:</h5>
                <ul>
                  <li>No abras demasiadas ventanas a la vez</li>
                  <li>Usa Aero Snap para comparar documentos</li>
                  <li>Minimiza ventanas que no uses actualmente</li>
                  <li>Cierra programas que ya no necesites</li>
                </ul>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/gestion-ventanas.jpg",
              video: "/videos/teoria/trabajar-con-ventanas.mp4"
            },
            actividades: [
              {
                tipo: "practica",
                pregunta: "Abre dos programas y practica organizarlos lado a lado",
                ayuda: "Usa Windows + ← en uno y Windows + → en el otro"
              },
              {
                tipo: "exploracion",
                pregunta: "Practica minimizar, maximizar y restaurar ventanas",
                ayuda: "Usa los botones de control y atajos de teclado"
              }
            ]
          },
          {
            id: 4,
            titulo: "Navegación y Gestos Básicos",
            contenido: `
              <h3>🧭 Navegación Eficiente en Windows</h3>
              <p>Domina los métodos de navegación para usar Windows como un experto.</p>
              
              <h4>⌨️ Atajos de Teclado Esenciales:</h4>
              <div class="atajos-grid">
                <div class="grupo-atajos">
                  <h5>🚀 Sistema Básico</h5>
                  <ul>
                    <li><strong>Windows:</strong> Abrir menú Inicio</li>
                    <li><strong>Alt + Tab:</strong> Cambiar entre programas</li>
                    <li><strong>Alt + F4:</strong> Cerrar programa actual</li>
                    <li><strong>Windows + L:</strong> Bloquear computador</li>
                  </ul>
                </div>
                <div class="grupo-atajos">
                  <h5>📁 Explorador de Archivos</h5>
                  <ul>
                    <li><strong>Windows + E:</strong> Abrir explorador</li>
                    <li><strong>Ctrl + N:</strong> Nueva ventana</li>
                    <li><strong>Alt + ↑:</strong> Carpeta superior</li>
                    <li><strong>F2:</strong> Renombrar archivo</li>
                  </ul>
                </div>
                <div class="grupo-atajos">
                  <h5>🪟 Ventanas</h5>
                  <ul>
                    <li><strong>Windows + ↑:</strong> Maximizar</li>
                    <li><strong>Windows + ↓:</strong> Minimizar</li>
                    <li><strong>Windows + ←/→:</strong> Dividir pantalla</li>
                    <li><strong>Windows + M:</strong> Minimizar todas</li>
                  </ul>
                </div>
              </div>

              <h4>👆 Gestos Táctiles (Pantallas Táctiles):</h4>
              <div class="gestos-tactiles">
                <div class="gesto">
                  <h5>👆 Tocar</h5>
                  <p>Equivale a clic izquierdo del mouse</p>
                </div>
                <div class="gesto">
                  <h5>👆👆 Tocar y mantener</h5>
                  <p>Equivale a clic derecho del mouse</p>
                </div>
                <div class="gesto">
                  <h5>👆➡️ Deslizar</h5>
                  <p>Scroll o navegación en listas</p>
                </div>
                <div class="gesto">
                  <h5>👆👆 Pellizcar</h5>
                  <p>Zoom in/out en contenido</p>
                </div>
              </div>

              <h4>🖱️ Técnicas Avanzadas con Mouse:</h4>
              <div class="tecnicas-mouse">
                <h5>🎯 Clics especiales:</h5>
                <ul>
                  <li><strong>Clic + Arrastrar:</strong> Seleccionar múltiples elementos</li>
                  <li><strong>Ctrl + Clic:</strong> Selección múltiple individual</li>
                  <li><strong>Shift + Clic:</strong> Seleccionar rango</li>
                  <li><strong>Rueda del mouse:</strong> Scroll rápido</li>
                </ul>
                
                <h5>⚡ Trucos de productividad:</h5>
                <ul>
                  <li>Hover (pasar por encima) para vista previa</li>
                  <li>Doble clic en bordes para auto-ajustar columnas</li>
                  <li>Clic en la rueda para scroll automático</li>
                  <li>Botones laterales (si los tiene) para navegación</li>
                </ul>
              </div>

              <h4>🎮 Atajos para Principiantes:</h4>
              <div class="atajos-principiantes">
                <p>🌟 <strong>Empieza con estos 5 atajos fundamentales:</strong></p>
                <ol>
                  <li><strong>Windows</strong> - Tu llave maestra</li>
                  <li><strong>Alt + Tab</strong> - Cambiar entre programas</li>
                  <li><strong>Windows + E</strong> - Abrir explorador de archivos</li>
                  <li><strong>Ctrl + C / Ctrl + V</strong> - Copiar y pegar</li>
                  <li><strong>Alt + F4</strong> - Cerrar lo que estés usando</li>
                </ol>
              </div>

              <div class="consejos-navegacion">
                <h4>💡 Consejos de Navegación:</h4>
                <ul>
                  <li>Practica los atajos poco a poco, no todos a la vez</li>
                  <li>Usa el mouse cuando aprendas, teclado cuando domines</li>
                  <li>La barra de tareas es tu mejor amiga para cambiar de programa</li>
                  <li>No tengas miedo de explorar, Windows es resistente</li>
                </ul>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/navegacion-windows.jpg",
              video: "/videos/teoria/atajos-esenciales.mp4",
              infografia: "/images/teoria/atajos-teclado.png"
            },
            actividades: [
              {
                tipo: "memorizar",
                pregunta: "Practica estos 3 atajos: Windows, Alt+Tab, Windows+E",
                ayuda: "Úsalos varias veces hasta que se vuelvan automáticos"
              },
              {
                tipo: "reto",
                pregunta: "Abre una aplicación usando solo el teclado",
                ayuda: "Windows → escribe nombre → Enter"
              }
            ]
          }
        ],
        recursos: {
          documentos: [
            {
              titulo: "Guía de Atajos de Windows",
              tipo: "PDF",
              url: "/recursos/intro-windows/atajos-windows.pdf"
            },
            {
              titulo: "Manual de Navegación Básica",
              tipo: "PDF",
              url: "/recursos/intro-windows/navegacion-basica.pdf"
            }
          ],
          videos: [
            {
              titulo: "Domina Windows en 15 minutos",
              duracion: "15 min",
              url: "/videos/dominar-windows-basico.mp4"
            },
            {
              titulo: "Atajos de Teclado Esenciales",
              duracion: "10 min",
              url: "/videos/atajos-esenciales.mp4"
            }
          ],
          enlaces: [
            {
              titulo: "Lista Completa de Atajos de Windows",
              url: "https://support.microsoft.com/es-es/windows/métodos-abreviados-de-teclado-de-windows"
            },
            {
              titulo: "Guía de Gestos Táctiles",
              url: "https://support.microsoft.com/es-es/windows/gestos-táctiles-para-windows"
            }
          ]
        },
        evaluacion: {
          preRequisitos: ["Tema 1: Dispositivos Básicos"],
          criterios: [
            "Identificar elementos del escritorio de Windows",
            "Navegar eficientemente con el menú Inicio",
            "Gestionar ventanas (mover, redimensionar, organizar)",
            "Usar atajos básicos de teclado",
            "Aplicar técnicas de navegación básicas"
          ],
          tiempoEstimado: "25 minutos"
        }
      },
      '3': {
        titulo: "Configuración Básica de Windows",
        duracion: "30-35 minutos",
        objetivos: [
          "Personalizar la apariencia de Windows",
          "Configurar opciones básicas de sistema",
          "Gestionar la configuración de usuario",
          "Aplicar configuraciones de seguridad y privacidad básicas"
        ],
        secciones: [
          {
            id: 1,
            titulo: "Personalización Visual",
            contenido: `
              <h3>🎨 Personalizando Windows</h3>
              <p>Haz que Windows se vea y se sienta como tú quieres.</p>
              
              <h4>🖼️ Cambiar fondo de pantalla:</h4>
              <div class="pasos-configuracion">
                <ol>
                  <li>Clic derecho en el escritorio</li>
                  <li>Seleccionar <strong>"Personalizar"</strong></li>
                  <li>Elegir <strong>"Fondo"</strong></li>
                  <li>Seleccionar imagen o color sólido</li>
                  <li>Ajustar posición si es necesario</li>
                </ol>
              </div>

              <h4>🌈 Opciones de fondo:</h4>
              <div class="opciones-fondo">
                <div class="opcion">
                  <h5>📷 Imagen</h5>
                  <ul>
                    <li>Fotos personales</li>
                    <li>Imágenes predeterminadas</li>
                    <li>Descargas de internet</li>
                  </ul>
                </div>
                <div class="opcion">
                  <h5>🎨 Color sólido</h5>
                  <ul>
                    <li>Colores predefinidos</li>
                    <li>Colores personalizados</li>
                    <li>Menos distracción</li>
                  </ul>
                </div>
                <div class="opcion">
                  <h5>🔄 Presentación</h5>
                  <ul>
                    <li>Cambia automáticamente</li>
                    <li>Múltiples imágenes</li>
                    <li>Intervalo configurable</li>
                  </ul>
                </div>
              </div>

              <h4>🎪 Temas de Windows:</h4>
              <div class="temas-windows">
                <p>Los <strong>temas</strong> cambian múltiples elementos de una vez:</p>
                <ul>
                  <li><strong>Fondo de pantalla</strong></li>
                  <li><strong>Colores de acento</strong></li>
                  <li><strong>Sonidos del sistema</strong></li>
                  <li><strong>Cursor del mouse</strong></li>
                </ul>
                
                <h5>🌟 Temas populares:</h5>
                <div class="temas-grid">
                  <div class="tema-item">
                    <h6>🌙 Modo Oscuro</h6>
                    <p>Reduce fatiga visual</p>
                  </div>
                  <div class="tema-item">
                    <h6>☀️ Modo Claro</h6>
                    <p>Mayor claridad diurna</p>
                  </div>
                  <div class="tema-item">
                    <h6>🌈 Colores de Acento</h6>
                    <p>Personaliza barras y botones</p>
                  </div>
                </div>
              </div>

              <h4>🔧 Personalización de la barra de tareas:</h4>
              <div class="config-barra-tareas">
                <p>Clic derecho en la barra de tareas → <strong>"Configuración de la barra de tareas"</strong></p>
                <ul>
                  <li><strong>Posición:</strong> Inferior, superior, laterales</li>
                  <li><strong>Tamaño:</strong> Pequeña, mediana, grande</li>
                  <li><strong>Ocultar automáticamente:</strong> Más espacio en pantalla</li>
                  <li><strong>Iconos del área de notificación:</strong> Mostrar/ocultar</li>
                </ul>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/personalizacion-windows.jpg",
              video: "/videos/teoria/personalizar-escritorio.mp4"
            },
            actividades: [
              {
                tipo: "personalizacion",
                pregunta: "Cambia el fondo de pantalla por una imagen personal",
                ayuda: "Clic derecho en escritorio → Personalizar → Fondo"
              },
              {
                tipo: "exploracion",
                pregunta: "Prueba cambiar entre modo claro y oscuro",
                ayuda: "Configuración → Personalización → Colores"
              }
            ]
          },
          {
            id: 2,
            titulo: "Configuración de Sistema",
            contenido: `
              <h3>⚙️ Configuraciones Esenciales del Sistema</h3>
              <p>Ajusta Windows para que funcione mejor según tus necesidades.</p>
              
              <h4>🔍 Accediendo a Configuración:</h4>
              <div class="acceso-configuracion">
                <div class="metodo">
                  <h5>⌨️ Atajo rápido</h5>
                  <p><strong>Windows + I</strong></p>
                </div>
                <div class="metodo">
                  <h5>🖱️ Menú Inicio</h5>
                  <p>Botón Inicio → ⚙️ Configuración</p>
                </div>
                <div class="metodo">
                  <h5>🔍 Búsqueda</h5>
                  <p>Windows → escribir "configuración"</p>
                </div>
              </div>

              <h4>📊 Categorías principales:</h4>
              <div class="categorias-config">
                <div class="categoria">
                  <h5>🖥️ Sistema</h5>
                  <ul>
                    <li><strong>Pantalla:</strong> Resolución, brillo, escalado</li>
                    <li><strong>Sonido:</strong> Volumen, dispositivos de audio</li>
                    <li><strong>Notificaciones:</strong> Qué mostrar y cuándo</li>
                    <li><strong>Energía:</strong> Ahorro de batería, suspensión</li>
                  </ul>
                </div>
                <div class="categoria">
                  <h5>🌐 Red e Internet</h5>
                  <ul>
                    <li><strong>Wi-Fi:</strong> Conectar y gestionar redes</li>
                    <li><strong>Ethernet:</strong> Conexiones por cable</li>
                    <li><strong>Datos:</strong> Uso de internet</li>
                    <li><strong>Zona con cobertura:</strong> Compartir internet</li>
                  </ul>
                </div>
                <div class="categoria">
                  <h5>🎮 Dispositivos</h5>
                  <ul>
                    <li><strong>Bluetooth:</strong> Emparejar dispositivos</li>
                    <li><strong>Impresoras:</strong> Agregar y configurar</li>
                    <li><strong>Mouse:</strong> Velocidad y botones</li>
                    <li><strong>Teclado:</strong> Idioma y distribución</li>
                  </ul>
                </div>
              </div>

              <h4>🔧 Configuraciones importantes:</h4>
              <div class="config-importantes">
                <div class="config-item">
                  <h5>🖥️ Resolución de pantalla</h5>
                  <p><strong>Ruta:</strong> Sistema → Pantalla → Resolución</p>
                  <ul>
                    <li>Usa la resolución recomendada</li>
                    <li>Ajusta escalado si el texto es muy pequeño</li>
                    <li>Configura múltiples monitores si los tienes</li>
                  </ul>
                </div>
                
                <div class="config-item">
                  <h5>🔊 Audio del sistema</h5>
                  <p><strong>Ruta:</strong> Sistema → Sonido</p>
                  <ul>
                    <li>Selecciona dispositivo de salida correcto</li>
                    <li>Ajusta volumen principal</li>
                    <li>Configura micrófono si usas videollamadas</li>
                  </ul>
                </div>
                
                <div class="config-item">
                  <h5>🔋 Administración de energía</h5>
                  <p><strong>Ruta:</strong> Sistema → Energía y suspensión</p>
                  <ul>
                    <li><strong>Apagar pantalla:</strong> 10-15 minutos</li>
                    <li><strong>Suspender PC:</strong> 30 minutos</li>
                    <li><strong>Modo de energía:</strong> Equilibrado</li>
                  </ul>
                </div>
              </div>

              <h4>📱 Configuración de notificaciones:</h4>
              <div class="config-notificaciones">
                <p><strong>Ruta:</strong> Sistema → Notificaciones y acciones</p>
                <div class="notif-opciones">
                  <h5>🔔 Controla qué notificaciones recibes:</h5>
                  <ul>
                    <li>Desactiva apps que no necesitas</li>
                    <li>Configura horario de silencio</li>
                    <li>Personaliza sonidos de notificación</li>
                    <li>Elige dónde aparecen (pantalla de bloqueo, centro de actividades)</li>
                  </ul>
                </div>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/configuracion-sistema.jpg",
              video: "/videos/teoria/configurar-windows-basico.mp4"
            },
            actividades: [
              {
                tipo: "configuracion",
                pregunta: "Ajusta la resolución de pantalla a la recomendada",
                ayuda: "Windows + I → Sistema → Pantalla → Resolución"
              },
              {
                tipo: "personalizacion",
                pregunta: "Configura las notificaciones para no molestar en horario nocturno",
                ayuda: "Sistema → Notificaciones → Asistente de concentración"
              }
            ]
          },
          {
            id: 3,
            titulo: "Configuración de Usuario",
            contenido: `
              <h3>👤 Gestión de Cuentas de Usuario</h3>
              <p>Configura tu perfil y gestiona múltiples usuarios en el mismo PC.</p>
              
              <h4>🏠 Cuenta local vs Cuenta Microsoft:</h4>
              <div class="tipos-cuenta">
                <div class="tipo-cuenta">
                  <h5>🏠 Cuenta Local</h5>
                  <div class="ventajas-desventajas">
                    <h6>✅ Ventajas:</h6>
                    <ul>
                      <li>No requiere internet</li>
                      <li>Más privacidad</li>
                      <li>Control total local</li>
                    </ul>
                    <h6>❌ Desventajas:</h6>
                    <ul>
                      <li>Sin sincronización</li>
                      <li>Sin OneDrive automático</li>
                      <li>Sin Microsoft Store completa</li>
                    </ul>
                  </div>
                </div>
                <div class="tipo-cuenta">
                  <h5>☁️ Cuenta Microsoft</h5>
                  <div class="ventajas-desventajas">
                    <h6>✅ Ventajas:</h6>
                    <ul>
                      <li>Sincronización entre dispositivos</li>
                      <li>OneDrive incluido</li>
                      <li>Microsoft Store completa</li>
                      <li>Office 365 integrado</li>
                    </ul>
                    <h6>❌ Desventajas:</h6>
                    <ul>
                      <li>Requiere internet</li>
                      <li>Más recopilación de datos</li>
                      <li>Dependencia de servicios Microsoft</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h4>👥 Gestión de múltiples usuarios:</h4>
              <div class="gestion-usuarios">
                <p><strong>Ruta:</strong> Configuración → Cuentas → Familia y otros usuarios</p>
                
                <h5>👨‍👩‍👧‍👦 Tipos de cuentas:</h5>
                <div class="tipos-usuario">
                  <div class="tipo-usuario">
                    <h6>👑 Administrador</h6>
                    <ul>
                      <li>Control total del sistema</li>
                      <li>Instalar/desinstalar programas</li>
                      <li>Cambiar configuraciones del sistema</li>
                      <li>Gestionar otros usuarios</li>
                    </ul>
                  </div>
                  <div class="tipo-usuario">
                    <h6>👤 Usuario estándar</h6>
                    <ul>
                      <li>Uso normal de aplicaciones</li>
                      <li>Cambios limitados al sistema</li>
                      <li>No puede instalar software</li>
                      <li>Perfil personal protegido</li>
                    </ul>
                  </div>
                  <div class="tipo-usuario">
                    <h6>👶 Cuenta familiar (niños)</h6>
                    <ul>
                      <li>Control parental automático</li>
                      <li>Límites de tiempo de pantalla</li>
                      <li>Filtros de contenido</li>
                      <li>Reportes de actividad</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h4>🔐 Cambiar información de usuario:</h4>
              <div class="cambiar-info-usuario">
                <p><strong>Ruta:</strong> Configuración → Cuentas → Tu información</p>
                
                <h5>📝 Qué puedes cambiar:</h5>
                <ul>
                  <li><strong>Foto de perfil:</strong> Imagen personal o avatar</li>
                  <li><strong>Nombre de usuario:</strong> Como apareces en el sistema</li>
                  <li><strong>Contraseña:</strong> Para seguridad de la cuenta</li>
                  <li><strong>PIN:</strong> Acceso rápido con números</li>
                  <li><strong>Windows Hello:</strong> Reconocimiento facial o huella</li>
                </ul>

                <div class="metodos-acceso">
                  <h5>🚪 Métodos de inicio de sesión:</h5>
                  <div class="metodos-grid">
                    <div class="metodo-acceso">
                      <h6>🔑 Contraseña tradicional</h6>
                      <p>Segura pero puede ser lenta de escribir</p>
                    </div>
                    <div class="metodo-acceso">
                      <h6>🔢 PIN</h6>
                      <p>Rápido, solo números, específico del dispositivo</p>
                    </div>
                    <div class="metodo-acceso">
                      <h6>👁️ Windows Hello</h6>
                      <p>Reconocimiento facial o huella dactilar</p>
                    </div>
                    <div class="metodo-acceso">
                      <h6>🔐 Clave de imagen</h6>
                      <p>Gestos sobre una imagen personal</p>
                    </div>
                  </div>
                </div>
              </div>

              <h4>🔄 Cambiar entre usuarios:</h4>
              <div class="cambio-usuarios">
                <h5>⚡ Métodos rápidos:</h5>
                <ul>
                  <li><strong>Windows + L:</strong> Bloquear y cambiar usuario</li>
                  <li><strong>Ctrl + Alt + Delete:</strong> Pantalla de seguridad → Cambiar usuario</li>
                  <li><strong>Menú Inicio:</strong> Clic en icono de usuario</li>
                  <li><strong>Alt + F4</strong> en escritorio → Cerrar sesión</li>
                </ul>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/configuracion-usuario.jpg",
              video: "/videos/teoria/gestionar-cuentas-usuario.mp4"
            },
            actividades: [
              {
                tipo: "configuracion",
                pregunta: "Cambia tu foto de perfil por una imagen personal",
                ayuda: "Configuración → Cuentas → Tu información → Crear tu imagen"
              },
              {
                tipo: "seguridad",
                pregunta: "Configura un PIN para acceso rápido",
                ayuda: "Configuración → Cuentas → Opciones de inicio de sesión → PIN"
              }
            ]
          },
          {
            id: 4,
            titulo: "Seguridad y Privacidad Básica",
            contenido: `
              <h3>🛡️ Protegiendo tu PC y Privacidad</h3>
              <p>Configuraciones esenciales para mantener tu información segura.</p>
              
              <h4>🔒 Windows Defender (Antivirus integrado):</h4>
              <div class="windows-defender">
                <p><strong>Ruta:</strong> Configuración → Actualización y seguridad → Seguridad de Windows</p>
                
                <h5>⚡ Características principales:</h5>
                <div class="defender-features">
                  <div class="feature">
                    <h6>🦠 Protección antivirus</h6>
                    <ul>
                      <li>Escaneo en tiempo real</li>
                      <li>Detección de malware</li>
                      <li>Actualizaciones automáticas</li>
                    </ul>
                  </div>
                  <div class="feature">
                    <h6>🔥 Firewall</h6>
                    <ul>
                      <li>Bloquea conexiones no deseadas</li>
                      <li>Protege red doméstica</li>
                      <li>Configuración automática</li>
                    </ul>
                  </div>
                  <div class="feature">
                    <h6>🌐 Protección web</h6>
                    <ul>
                      <li>Bloquea sitios maliciosos</li>
                      <li>Descarga segura</li>
                      <li>Protección de phishing</li>
                    </ul>
                  </div>
                </div>

                <div class="defender-acciones">
                  <h5>🎯 Acciones importantes:</h5>
                  <ul>
                    <li><strong>Examen rápido:</strong> Verificación rutinaria (5-10 min)</li>
                    <li><strong>Examen completo:</strong> Análisis profundo (30-60 min)</li>
                    <li><strong>Examen personalizado:</strong> Carpetas específicas</li>
                    <li><strong>Actualizaciones:</strong> Se hace automáticamente</li>
                  </ul>
                </div>
              </div>

              <h4>🔐 Configuración de privacidad:</h4>
              <div class="config-privacidad">
                <p><strong>Ruta:</strong> Configuración → Privacidad y seguridad</p>
                
                <h5>📊 Categorías de privacidad:</h5>
                <div class="categorias-privacidad">
                  <div class="categoria-privacidad">
                    <h6>📍 Ubicación</h6>
                    <ul>
                      <li>Activar/desactivar servicios de ubicación</li>
                      <li>Controlar qué apps pueden usar ubicación</li>
                      <li>Borrar historial de ubicaciones</li>
                    </ul>
                  </div>
                  <div class="categoria-privacidad">
                    <h6>📷 Cámara</h6>
                    <ul>
                      <li>Permitir acceso a aplicaciones</li>
                      <li>Lista de apps con permiso</li>
                      <li>Indicador cuando está en uso</li>
                    </ul>
                  </div>
                  <div class="categoria-privacidad">
                    <h6>🎤 Micrófono</h6>
                    <ul>
                      <li>Control de acceso por aplicación</li>
                      <li>Notificaciones de uso</li>
                      <li>Bloqueo total si es necesario</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h4>🔄 Windows Update (Actualizaciones):</h4>
              <div class="windows-update">
                <p><strong>Ruta:</strong> Configuración → Actualización y seguridad → Windows Update</p>
                
                <h5>🎯 Importancia de las actualizaciones:</h5>
                <ul>
                  <li><strong>Seguridad:</strong> Parches para vulnerabilidades</li>
                  <li><strong>Estabilidad:</strong> Corrección de errores</li>
                  <li><strong>Funciones:</strong> Nuevas características</li>
                  <li><strong>Compatibilidad:</strong> Soporte para nuevo hardware</li>
                </ul>

                <div class="tipos-actualizacion">
                  <h5>📦 Tipos de actualizaciones:</h5>
                  <div class="tipos-update">
                    <div class="tipo-update">
                      <h6>🚨 Críticas</h6>
                      <p>Seguridad urgente - Se instalan automáticamente</p>
                    </div>
                    <div class="tipo-update">
                      <h6>🔧 Importantes</h6>
                      <p>Mejoras y correcciones - Recomendadas</p>
                    </div>
                    <div class="tipo-update">
                      <h6>⭐ Opcionales</h6>
                      <p>Controladores y funciones - A elección</p>
                    </div>
                  </div>
                </div>

                <div class="control-updates">
                  <h5>⚙️ Configurar actualizaciones:</h5>
                  <ul>
                    <li><strong>Horario activo:</strong> Evita reinicios durante trabajo</li>
                    <li><strong>Pausar actualizaciones:</strong> Hasta 7 días (emergencias)</li>
                    <li><strong>Conexión de uso medido:</strong> Limita descargas en datos móviles</li>
                    <li><strong>Programar reinicio:</strong> Elige cuándo aplicar cambios</li>
                  </ul>
                </div>
              </div>

              <h4>🏠 Configuración de red:</h4>
              <div class="config-red">
                <h5>🌐 Perfiles de red:</h5>
                <div class="perfiles-red">
                  <div class="perfil-red">
                    <h6>🏠 Red privada</h6>
                    <ul>
                      <li>Casa o trabajo de confianza</li>
                      <li>Permite compartir archivos</li>
                      <li>Detectable por otros dispositivos</li>
                    </ul>
                  </div>
                  <div class="perfil-red">
                    <h6>🌍 Red pública</h6>
                    <ul>
                      <li>Cafeterías, aeropuertos, hoteles</li>
                      <li>Mayor seguridad</li>
                      <li>No permite descubrimiento</li>
                    </ul>
                  </div>
                </div>

                <h5>🔐 Consejos de seguridad en redes:</h5>
                <ul>
                  <li>Siempre usa "Red pública" en lugares desconocidos</li>
                  <li>Evita operaciones bancarias en Wi-Fi público</li>
                  <li>Desconéctate de redes cuando no las uses</li>
                  <li>Usa VPN si necesitas máxima seguridad</li>
                </ul>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/seguridad-windows.jpg",
              video: "/videos/teoria/configurar-seguridad-basica.mp4",
              infografia: "/images/teoria/privacidad-windows.png"
            },
            actividades: [
              {
                tipo: "seguridad",
                pregunta: "Ejecuta un examen rápido con Windows Defender",
                ayuda: "Configuración → Actualización y seguridad → Seguridad de Windows → Examen rápido"
              },
              {
                tipo: "privacidad",
                pregunta: "Revisa qué aplicaciones tienen acceso a tu cámara",
                ayuda: "Configuración → Privacidad → Cámara"
              },
              {
                tipo: "actualizacion",
                pregunta: "Verifica si hay actualizaciones pendientes",
                ayuda: "Configuración → Actualización y seguridad → Windows Update → Buscar actualizaciones"
              }
            ]
          }
        ],
        recursos: {
          documentos: [
            {
              titulo: "Guía de Configuración de Windows",
              tipo: "PDF",
              url: "/recursos/intro-windows/configuracion-completa.pdf"
            },
            {
              titulo: "Manual de Seguridad Básica",
              tipo: "PDF",
              url: "/recursos/intro-windows/seguridad-basica.pdf"
            },
            {
              titulo: "Personalización Avanzada",
              tipo: "PDF",
              url: "/recursos/intro-windows/personalizacion-avanzada.pdf"
            }
          ],
          videos: [
            {
              titulo: "Configurar Windows desde Cero",
              duracion: "20 min",
              url: "/videos/configurar-windows-completo.mp4"
            },
            {
              titulo: "Seguridad y Privacidad en Windows",
              duracion: "15 min",
              url: "/videos/seguridad-privacidad-windows.mp4"
            }
          ],
          enlaces: [
            {
              titulo: "Centro de Seguridad de Microsoft",
              url: "https://www.microsoft.com/security"
            },
            {
              titulo: "Guía de Privacidad de Windows",
              url: "https://privacy.microsoft.com/windows-10-microsoft-privacy-guide"
            },
            {
              titulo: "Soporte de Windows Update",
              url: "https://support.microsoft.com/windows/windows-update"
            }
          ]
        },
        evaluacion: {
          preRequisitos: ["Tema 1: Dispositivos Básicos", "Tema 2: Uso Básico"],
          criterios: [
            "Personalizar la apariencia de Windows (fondo, temas, barra de tareas)",
            "Configurar opciones básicas del sistema (pantalla, sonido, energía)",
            "Gestionar cuentas de usuario y métodos de acceso",
            "Aplicar configuraciones básicas de seguridad y privacidad",
            "Entender y gestionar actualizaciones de Windows"
          ],
          tiempoEstimado: "30 minutos"
        }
      },
      '4': {
        titulo: 'Administración de archivos',
        duracion: '60 minutos',
        objetivos: [
          'Dominar el uso del Explorador de archivos de Windows',
          'Realizar operaciones básicas con archivos y carpetas',
          'Organizar y estructurar información de manera eficiente',
          'Aplicar configuraciones de seguridad básica a archivos'
        ],
        secciones: [
          {
            id: 1,
            titulo: 'Explorador de archivos de Windows',
            contenido: `
              <div class="seccion-contenido">
                <h3>🗂️ Conociendo el Explorador de archivos</h3>
                
                <div class="info-box">
                  <h4>¿Qué es el Explorador de archivos?</h4>
                  <p>El Explorador de archivos es la herramienta principal de Windows para navegar, organizar y gestionar todos los archivos y carpetas de tu computadora. Es como un mapa que te permite encontrar y manejar toda tu información.</p>
                </div>

                <h4>📍 Cómo abrir el Explorador de archivos</h4>
                <ul class="lista-metodos">
                  <li><strong>Método 1:</strong> Hacer clic en el ícono de carpeta en la barra de tareas</li>
                  <li><strong>Método 2:</strong> Presionar las teclas <kbd>Windows + E</kbd></li>
                  <li><strong>Método 3:</strong> Desde el menú Inicio, buscar "Explorador de archivos"</li>
                  <li><strong>Método 4:</strong> Hacer clic derecho en el botón de Inicio y seleccionar "Explorador de archivos"</li>
                </ul>

                <h4>🎯 Partes principales del Explorador</h4>
                <div class="partes-explorador">
                  <div class="parte">
                    <h5>Panel de navegación (izquierda)</h5>
                    <p>Muestra accesos rápidos a ubicaciones importantes como:</p>
                    <ul>
                      <li><strong>Acceso rápido:</strong> Carpetas usadas frecuentemente</li>
                      <li><strong>Este equipo:</strong> Unidades de disco y dispositivos</li>
                      <li><strong>Red:</strong> Recursos compartidos en red</li>
                      <li><strong>Bibliotecas:</strong> Colecciones organizadas de archivos</li>
                    </ul>
                  </div>
                  
                  <div class="parte">
                    <h5>Área principal (centro)</h5>
                    <p>Muestra el contenido de la carpeta seleccionada con diferentes vistas:</p>
                    <ul>
                      <li><strong>Iconos extra grandes:</strong> Vista previa de imágenes</li>
                      <li><strong>Lista:</strong> Vista compacta con nombres</li>
                      <li><strong>Detalles:</strong> Información completa (tamaño, fecha, etc.)</li>
                      <li><strong>Mosaicos:</strong> Iconos medianos con información básica</li>
                    </ul>
                  </div>

                  <div class="parte">
                    <h5>Cinta de opciones (arriba)</h5>
                    <p>Contiene herramientas organizadas en pestañas:</p>
                    <ul>
                      <li><strong>Archivo:</strong> Operaciones generales</li>
                      <li><strong>Inicio:</strong> Operaciones básicas (copiar, pegar, eliminar)</li>
                      <li><strong>Compartir:</strong> Opciones para compartir archivos</li>
                      <li><strong>Ver:</strong> Cambiar la apariencia y vista</li>
                    </ul>
                  </div>
                </div>

                <div class="tip-box">
                  <h4>💡 Consejo práctico</h4>
                  <p>Puedes personalizar la barra de herramientas de acceso rápido agregando las funciones que más uses. Haz clic derecho en cualquier comando y selecciona "Agregar a la barra de herramientas de acceso rápido".</p>
                </div>
              </div>
            `,
            multimedia: {
              imagen: '/images/teoria/explorador-archivos-interfaz.png',
              video: '/videos/teoria/navegacion-explorador.mp4'
            },
            actividades: [
              'Abrir el Explorador de archivos usando tres métodos diferentes',
              'Explorar las diferentes secciones del panel de navegación',
              'Cambiar entre las diferentes vistas del área principal',
              'Personalizar la barra de herramientas de acceso rápido'
            ]
          },
          {
            id: 2,
            titulo: 'Operaciones básicas con archivos y carpetas',
            contenido: `
              <div class="seccion-contenido">
                <h3>⚡ Operaciones fundamentales</h3>
                
                <div class="operacion-grupo">
                  <h4>📂 Creación de carpetas</h4>
                  <div class="metodos">
                    <div class="metodo">
                      <h5>Método 1: Menú contextual</h5>
                      <ol>
                        <li>Haz clic derecho en un espacio vacío</li>
                        <li>Selecciona "Nuevo" → "Carpeta"</li>
                        <li>Escribe el nombre de la carpeta</li>
                        <li>Presiona Enter</li>
                      </ol>
                    </div>
                    
                    <div class="metodo">
                      <h5>Método 2: Cinta de opciones</h5>
                      <ol>
                        <li>Ve a la pestaña "Inicio"</li>
                        <li>Haz clic en "Nueva carpeta"</li>
                        <li>Escribe el nombre</li>
                        <li>Presiona Enter</li>
                      </ol>
                    </div>

                    <div class="metodo">
                      <h5>Método 3: Atajo de teclado</h5>
                      <ol>
                        <li>Presiona <kbd>Ctrl + Shift + N</kbd></li>
                        <li>Escribe el nombre de la carpeta</li>
                        <li>Presiona Enter</li>
                      </ol>
                    </div>
                  </div>
                </div>

                <div class="operacion-grupo">
                  <h4>📄 Operaciones de selección</h4>
                  <ul class="tecnicas-seleccion">
                    <li><strong>Selección simple:</strong> Clic en un archivo o carpeta</li>
                    <li><strong>Selección múltiple:</strong> Mantén <kbd>Ctrl</kbd> y haz clic en varios elementos</li>
                    <li><strong>Selección en rango:</strong> Clic en el primero, luego <kbd>Shift + clic</kbd> en el último</li>
                    <li><strong>Seleccionar todo:</strong> <kbd>Ctrl + A</kbd> para seleccionar todo el contenido</li>
                    <li><strong>Invertir selección:</strong> En el menú Edición → "Invertir selección"</li>
                  </ul>
                </div>

                <div class="operacion-grupo">
                  <h4>🔄 Copiar y mover archivos</h4>
                  
                  <div class="operacion-detalle">
                    <h5>Copiar archivos (crear duplicados)</h5>
                    <ul>
                      <li><strong>Método 1:</strong> <kbd>Ctrl + C</kbd> (copiar) → navegar → <kbd>Ctrl + V</kbd> (pegar)</li>
                      <li><strong>Método 2:</strong> Clic derecho → "Copiar" → navegar → clic derecho → "Pegar"</li>
                      <li><strong>Método 3:</strong> Arrastrar mientras mantienes <kbd>Ctrl</kbd> presionado</li>
                    </ul>
                  </div>

                  <div class="operacion-detalle">
                    <h5>Mover archivos (cambiar ubicación)</h5>
                    <ul>
                      <li><strong>Método 1:</strong> <kbd>Ctrl + X</kbd> (cortar) → navegar → <kbd>Ctrl + V</kbd> (pegar)</li>
                      <li><strong>Método 2:</strong> Clic derecho → "Cortar" → navegar → clic derecho → "Pegar"</li>
                      <li><strong>Método 3:</strong> Arrastrar directamente (dentro de la misma unidad)</li>
                      <li><strong>Método 4:</strong> Arrastrar mientras mantienes <kbd>Shift</kbd> (entre unidades)</li>
                    </ul>
                  </div>
                </div>

                <div class="operacion-grupo">
                  <h4>🗑️ Eliminar archivos y carpetas</h4>
                  <div class="tipos-eliminacion">
                    <div class="eliminacion-tipo">
                      <h5>Eliminación temporal (Papelera de reciclaje)</h5>
                      <ul>
                        <li>Seleccionar y presionar <kbd>Delete</kbd></li>
                        <li>Clic derecho → "Eliminar"</li>
                        <li>Arrastrar a la Papelera de reciclaje</li>
                      </ul>
                      <p class="nota">Los archivos se pueden recuperar desde la Papelera</p>
                    </div>

                    <div class="eliminacion-tipo">
                      <h5>Eliminación permanente</h5>
                      <ul>
                        <li>Seleccionar y presionar <kbd>Shift + Delete</kbd></li>
                        <li>Eliminar desde la Papelera de reciclaje</li>
                      </ul>
                      <p class="nota-advertencia">⚠️ Esta acción no se puede deshacer fácilmente</p>
                    </div>
                  </div>
                </div>

                <div class="operacion-grupo">
                  <h4>🏷️ Renombrar archivos y carpetas</h4>
                  <ul class="metodos-renombrar">
                    <li><strong>Método 1:</strong> Seleccionar y presionar <kbd>F2</kbd></li>
                    <li><strong>Método 2:</strong> Clic derecho → "Cambiar nombre"</li>
                    <li><strong>Método 3:</strong> Clic lento dos veces en el nombre</li>
                  </ul>
                  
                  <div class="consejos-nombres">
                    <h5>Consejos para nombres de archivos:</h5>
                    <ul>
                      <li>Usa nombres descriptivos y claros</li>
                      <li>Evita caracteres especiales: < > : " | ? * \\ /</li>
                      <li>Considera usar fechas en formato YYYY-MM-DD</li>
                      <li>Mantén una convención consistente</li>
                    </ul>
                  </div>
                </div>
              </div>
            `,
            multimedia: {
              imagen: '/images/teoria/operaciones-archivos.png',
              video: '/videos/teoria/operaciones-basicas.mp4'
            },
            actividades: [
              'Crear una estructura de carpetas para organizar documentos personales',
              'Practicar las diferentes formas de seleccionar múltiples archivos',
              'Copiar y mover archivos entre diferentes ubicaciones',
              'Renombrar archivos siguiendo una convención consistente'
            ]
          },
          {
            id: 3,
            titulo: 'Organización y estructura de archivos',
            contenido: `
              <div class="seccion-contenido">
                <h3>📚 Principios de organización eficiente</h3>
                
                <div class="principio-organizacion">
                  <h4>🎯 Estructura jerárquica recomendada</h4>
                  <div class="estructura-ejemplo">
                    <pre class="estructura-arbol">
📁 Documentos
├── 📁 Personal
│   ├── 📁 Finanzas
│   │   ├── 📁 2024
│   │   ├── 📁 2025
│   │   └── 📁 Impuestos
│   ├── 📁 Salud
│   │   ├── 📁 Análisis
│   │   ├── 📁 Recetas
│   │   └── 📁 Citas
│   └── 📁 Hogar
│       ├── 📁 Facturas
│       ├── 📁 Garantías
│       └── 📁 Manuales
├── 📁 Trabajo
│   ├── 📁 Proyectos
│   │   ├── 📁 Proyecto A
│   │   ├── 📁 Proyecto B
│   │   └── 📁 Archivo
│   ├── 📁 Reuniones
│   └── 📁 Reportes
└── 📁 Educación
    ├── 📁 Cursos actuales
    ├── 📁 Certificados
    └── 📁 Recursos
                    </pre>
                  </div>
                </div>

                <div class="sistema-carpetas">
                  <h4>📂 Sistemas de carpetas especiales de Windows</h4>
                  
                  <div class="carpeta-especial">
                    <h5>🏠 Carpetas del usuario</h5>
                    <ul>
                      <li><strong>Escritorio:</strong> Archivos visibles en el escritorio</li>
                      <li><strong>Documentos:</strong> Ubicación predeterminada para documentos</li>
                      <li><strong>Descargas:</strong> Archivos descargados de internet</li>
                      <li><strong>Imágenes:</strong> Fotos y gráficos</li>
                      <li><strong>Música:</strong> Archivos de audio</li>
                      <li><strong>Vídeos:</strong> Archivos de video</li>
                    </ul>
                  </div>

                  <div class="carpeta-especial">
                    <h5>📚 Bibliotecas de Windows</h5>
                    <p>Las bibliotecas agrupan contenido de múltiples ubicaciones:</p>
                    <ul>
                      <li><strong>Documentos:</strong> Incluye Mis documentos y Documentos públicos</li>
                      <li><strong>Imágenes:</strong> Combina Mis imágenes e Imágenes públicas</li>
                      <li><strong>Música:</strong> Agrupa colecciones de música</li>
                      <li><strong>Videos:</strong> Organiza archivos de video</li>
                    </ul>
                  </div>
                </div>

                <div class="busqueda-archivos">
                  <h4>🔍 Técnicas de búsqueda avanzada</h4>
                  
                  <div class="metodo-busqueda">
                    <h5>Búsqueda básica</h5>
                    <ul>
                      <li>Usar el cuadro de búsqueda en la esquina superior derecha</li>
                      <li>Escribir el nombre del archivo o parte de él</li>
                      <li>Los resultados aparecen automáticamente</li>
                    </ul>
                  </div>

                  <div class="metodo-busqueda">
                    <h5>Filtros de búsqueda</h5>
                    <ul>
                      <li><strong>Por tipo:</strong> "tipo:imagen", "tipo:documento", "tipo:música"</li>
                      <li><strong>Por fecha:</strong> "fechamodificación:hoy", "fechamodificación:estaasemana"</li>
                      <li><strong>Por tamaño:</strong> "tamaño:grande", "tamaño:>100MB"</li>
                      <li><strong>Por etiquetas:</strong> Usar etiquetas personalizadas</li>
                    </ul>
                  </div>

                  <div class="metodo-busqueda">
                    <h5>Búsqueda desde el menú Inicio</h5>
                    <ul>
                      <li>Presionar la tecla Windows</li>
                      <li>Escribir directamente el nombre del archivo</li>
                      <li>Windows buscará en todo el sistema</li>
                    </ul>
                  </div>
                </div>

                <div class="propiedades-archivos">
                  <h4>📋 Propiedades y metadatos</h4>
                  
                  <div class="acceso-propiedades">
                    <h5>Cómo acceder a las propiedades</h5>
                    <ul>
                      <li>Clic derecho en un archivo → "Propiedades"</li>
                      <li>Seleccionar archivo y presionar <kbd>Alt + Enter</kbd></li>
                      <li>Desde la pestaña "Ver" → "Panel de detalles"</li>
                    </ul>
                  </div>

                  <div class="tipos-propiedades">
                    <h5>Información disponible</h5>
                    <ul>
                      <li><strong>General:</strong> Nombre, tipo, ubicación, tamaño, fechas</li>
                      <li><strong>Seguridad:</strong> Permisos y acceso</li>
                      <li><strong>Detalles:</strong> Metadatos específicos del tipo de archivo</li>
                      <li><strong>Versiones anteriores:</strong> Copias de seguridad automáticas</li>
                    </ul>
                  </div>

                  <div class="uso-metadatos">
                    <h5>Usar metadatos para organización</h5>
                    <ul>
                      <li><strong>Etiquetas:</strong> Palabras clave personalizadas</li>
                      <li><strong>Calificaciones:</strong> Sistema de estrellas</li>
                      <li><strong>Comentarios:</strong> Notas descriptivas</li>
                      <li><strong>Categorías:</strong> Clasificación temática</li>
                    </ul>
                  </div>
                </div>

                <div class="consejos-organizacion">
                  <h4>💡 Mejores prácticas de organización</h4>
                  <div class="practica">
                    <h5>Regla del 7±2</h5>
                    <p>No tengas más de 5-9 elementos en una carpeta antes de crear subcarpetas</p>
                  </div>
                  
                  <div class="practica">
                    <h5>Convenciones de nomenclatura</h5>
                    <ul>
                      <li>Usa fechas en formato ISO (YYYY-MM-DD)</li>
                      <li>Incluye versiones (v1.0, v2.1)</li>
                      <li>Usa prefijos para ordenar: 01_, 02_, 03_</li>
                      <li>Mantén consistencia en todo el sistema</li>
                    </ul>
                  </div>

                  <div class="practica">
                    <h5>Limpieza regular</h5>
                    <ul>
                      <li>Revisa y limpia la carpeta Descargas semanalmente</li>
                      <li>Archiva documentos antiguos en carpetas por año</li>
                      <li>Elimina archivos duplicados periódicamente</li>
                      <li>Mantén el escritorio limpio y organizado</li>
                    </ul>
                  </div>
                </div>
              </div>
            `,
            multimedia: {
              imagen: '/images/teoria/organizacion-archivos.png',
              video: '/videos/teoria/organizacion-eficiente.mp4'
            },
            actividades: [
              'Crear una estructura de carpetas personal siguiendo las mejores prácticas',
              'Practicar técnicas de búsqueda avanzada con diferentes filtros',
              'Explorar y modificar propiedades y metadatos de archivos',
              'Organizar la carpeta Descargas usando las técnicas aprendidas'
            ]
          },
          {
            id: 4,
            titulo: 'Seguridad básica de archivos',
            contenido: `
              <div class="seccion-contenido">
                <h3>🔒 Protección y seguridad de archivos</h3>
                
                <div class="seguridad-grupo">
                  <h4>👤 Control de permisos básicos</h4>
                  
                  <div class="permisos-windows">
                    <h5>Tipos de permisos en Windows</h5>
                    <ul class="lista-permisos">
                      <li><strong>Control total:</strong> Todos los permisos, incluido cambiar permisos</li>
                      <li><strong>Modificar:</strong> Leer, escribir, ejecutar y eliminar</li>
                      <li><strong>Leer y ejecutar:</strong> Ver contenido y ejecutar archivos</li>
                      <li><strong>Mostrar el contenido de la carpeta:</strong> Ver archivos en carpetas</li>
                      <li><strong>Leer:</strong> Solo visualizar el contenido</li>
                      <li><strong>Escribir:</strong> Crear y modificar archivos</li>
                    </ul>
                  </div>

                  <div class="cambiar-permisos">
                    <h5>Cómo cambiar permisos</h5>
                    <ol>
                      <li>Clic derecho en el archivo o carpeta</li>
                      <li>Seleccionar "Propiedades"</li>
                      <li>Ir a la pestaña "Seguridad"</li>
                      <li>Hacer clic en "Editar" (requiere permisos de administrador)</li>
                      <li>Seleccionar usuario o grupo</li>
                      <li>Marcar o desmarcar permisos según necesidad</li>
                      <li>Hacer clic en "Aplicar" y "Aceptar"</li>
                    </ol>
                  </div>
                </div>

                <div class="seguridad-grupo">
                  <h4>🛡️ Protección con contraseñas</h4>
                  
                  <div class="metodos-proteccion">
                    <h5>Carpetas comprimidas con contraseña</h5>
                    <ol>
                      <li>Seleccionar archivos a proteger</li>
                      <li>Clic derecho → "Enviar a" → "Carpeta comprimida (en zip)"</li>
                      <li>Abrir el archivo ZIP creado</li>
                      <li>En el explorador ZIP: "Archivo" → "Agregar contraseña"</li>
                      <li>Introducir contraseña segura</li>
                      <li>Confirmar y guardar</li>
                    </ol>
                  </div>

                  <div class="metodos-proteccion">
                    <h5>BitLocker para unidades (Windows Pro)</h5>
                    <ul>
                      <li>Cifrado completo de unidades de disco</li>
                      <li>Protección automática de todos los archivos</li>
                      <li>Requiere contraseña o PIN para acceder</li>
                      <li>Disponible en versiones Professional de Windows</li>
                    </ul>
                  </div>

                  <div class="metodos-proteccion">
                    <h5>Herramientas de terceros</h5>
                    <ul>
                      <li><strong>7-Zip:</strong> Compresión gratuita con cifrado AES-256</li>
                      <li><strong>AxCrypt:</strong> Cifrado individual de archivos</li>
                      <li><strong>VeraCrypt:</strong> Crear contenedores cifrados</li>
                      <li><strong>WinRAR:</strong> Compresión comercial con protección</li>
                    </ul>
                  </div>
                </div>

                <div class="seguridad-grupo">
                  <h4>💾 Copias de seguridad</h4>
                  
                  <div class="estrategia-backup">
                    <h5>Regla 3-2-1 de copias de seguridad</h5>
                    <ul>
                      <li><strong>3 copias:</strong> Original + 2 copias de seguridad</li>
                      <li><strong>2 medios diferentes:</strong> Disco duro + nube/USB</li>
                      <li><strong>1 fuera del sitio:</strong> Nube o ubicación física diferente</li>
                    </ul>
                  </div>

                  <div class="herramientas-backup">
                    <h5>Herramientas de Windows</h5>
                    <ul>
                      <li><strong>Historial de archivos:</strong> 
                        <ul>
                          <li>Panel de control → Sistema y seguridad → Historial de archivos</li>
                          <li>Conectar unidad externa</li>
                          <li>Activar y configurar frecuencia</li>
                        </ul>
                      </li>
                      <li><strong>Copia de seguridad y restauración:</strong>
                        <ul>
                          <li>Panel de control → Sistema y seguridad</li>
                          <li>Crear imagen del sistema completo</li>
                          <li>Programar copias automáticas</li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div class="servicios-nube">
                    <h5>Servicios en la nube populares</h5>
                    <ul>
                      <li><strong>OneDrive:</strong> Integrado con Windows, 5GB gratuitos</li>
                      <li><strong>Google Drive:</strong> 15GB gratuitos, sincronización automática</li>
                      <li><strong>Dropbox:</strong> 2GB gratuitos, excelente sincronización</li>
                      <li><strong>iCloud:</strong> 5GB gratuitos, ideal para usuarios Apple</li>
                    </ul>
                  </div>
                </div>

                <div class="seguridad-grupo">
                  <h4>🦠 Protección contra malware</h4>
                  
                  <div class="practicas-seguras">
                    <h5>Hábitos seguros con archivos</h5>
                    <ul>
                      <li><strong>No abrir archivos sospechosos:</strong> Especialmente ejecutables (.exe, .bat, .com)</li>
                      <li><strong>Verificar remitentes:</strong> Confirmar origen de archivos adjuntos</li>
                      <li><strong>Usar antivirus actualizado:</strong> Windows Defender o terceros</li>
                      <li><strong>Mantener Windows actualizado:</strong> Instalar parches de seguridad</li>
                      <li><strong>Cuidado con descargas:</strong> Solo de sitios confiables</li>
                    </ul>
                  </div>

                  <div class="escaneo-seguridad">
                    <h5>Windows Defender</h5>
                    <ul>
                      <li>Protección en tiempo real activada por defecto</li>
                      <li>Escaneos programados automáticos</li>
                      <li>Análisis rápido vs. completo</li>
                      <li>Cuarentena automática de amenazas</li>
                    </ul>
                  </div>
                </div>

                <div class="seguridad-grupo">
                  <h4>🗂️ Recuperación de archivos</h4>
                  
                  <div class="recuperacion-metodos">
                    <h5>Papelera de reciclaje</h5>
                    <ul>
                      <li>Doble clic en el icono del escritorio</li>
                      <li>Seleccionar archivos a recuperar</li>
                      <li>Clic derecho → "Restaurar"</li>
                      <li>O arrastrar a la ubicación deseada</li>
                    </ul>
                  </div>

                  <div class="recuperacion-metodos">
                    <h5>Versiones anteriores (Shadow Copies)</h5>
                    <ol>
                      <li>Clic derecho en archivo o carpeta</li>
                      <li>Seleccionar "Propiedades"</li>
                      <li>Ir a pestaña "Versiones anteriores"</li>
                      <li>Seleccionar versión deseada</li>
                      <li>Hacer clic en "Restaurar" o "Abrir"</li>
                    </ol>
                  </div>

                  <div class="recuperacion-metodos">
                    <h5>Herramientas de recuperación profesionales</h5>
                    <ul>
                      <li><strong>Recuva:</strong> Gratuita, fácil de usar</li>
                      <li><strong>PhotoRec:</strong> Especializada en imágenes</li>
                      <li><strong>TestDisk:</strong> Recuperación de particiones</li>
                      <li><strong>Disk Drill:</strong> Versión gratuita limitada</li>
                    </ul>
                  </div>
                </div>

                <div class="alertas-seguridad">
                  <h4>⚠️ Señales de alerta de seguridad</h4>
                  <ul class="lista-alertas">
                    <li>Archivos que aparecen y desaparecen misteriosamente</li>
                    <li>Cambios inesperados en nombres de archivos</li>
                    <li>Archivos con extensiones dobles (.txt.exe)</li>
                    <li>Rendimiento lento del sistema al acceder archivos</li>
                    <li>Mensajes de error al abrir archivos conocidos</li>
                    <li>Archivos con tamaños inusuales (muy grandes o pequeños)</li>
                  </ul>
                </div>
              </div>
            `,
            multimedia: {
              imagen: '/images/teoria/seguridad-archivos.png',
              video: '/videos/teoria/proteccion-datos.mp4'
            },
            actividades: [
              'Configurar permisos básicos en una carpeta personal',
              'Crear un archivo comprimido protegido con contraseña',
              'Configurar el Historial de archivos de Windows',
              'Practicar la recuperación de archivos desde la Papelera'
            ]
          }
        ],
        recursos: {
          documentos: [
            {
              titulo: 'Guía de referencia rápida del Explorador de archivos',
              tipo: 'PDF',
              url: '/recursos/intro-windows/guia-explorador-archivos.pdf'
            },
            {
              titulo: 'Plantilla de estructura de carpetas recomendada',
              tipo: 'PDF',
              url: '/recursos/intro-windows/plantilla-organizacion.pdf'
            },
            {
              titulo: 'Lista de atajos de teclado para gestión de archivos',
              tipo: 'PDF',
              url: '/recursos/intro-windows/atajos-archivos.pdf'
            },
            {
              titulo: 'Checklist de seguridad para archivos personales',
              tipo: 'PDF',
              url: '/recursos/intro-windows/checklist-seguridad.pdf'
            }
          ],
          videos: [
            {
              titulo: 'Masterclass: Organización eficiente de archivos',
              duracion: '25 min',
              url: '/videos/masterclass-organizacion-archivos.mp4'
            },
            {
              titulo: 'Técnicas avanzadas de búsqueda en Windows',
              duracion: '12 min',
              url: '/videos/busqueda-avanzada-windows.mp4'
            },
            {
              titulo: 'Configuración de copias de seguridad automáticas',
              duracion: '18 min',
              url: '/videos/backup-automatico-windows.mp4'
            }
          ],
          enlaces: [
            {
              titulo: 'Documentación oficial de Microsoft sobre gestión de archivos',
              url: 'https://support.microsoft.com/es-es/windows/buscar-archivos-en-windows-fe9ac6c5-2457-9c95-e08c-87b1e6639a42'
            },
            {
              titulo: 'Mejores prácticas de organización digital',
              url: 'https://support.microsoft.com/es-es/office/organizar-archivos-y-carpetas-de-manera-eficaz'
            },
            {
              titulo: 'Guías de seguridad informática básica',
              url: 'https://www.microsoft.com/es-es/security/tips'
            }
          ]
        },
        evaluacion: {
          preRequisitos: ['Tema 1: Dispositivos Básicos', 'Tema 2: Uso Básico', 'Tema 3: Configuración Básica'],
          criterios: [
            'Navegar eficientemente por el sistema de archivos usando el Explorador',
            'Realizar operaciones básicas: crear, copiar, mover, eliminar y renombrar archivos',
            'Implementar una organización lógica y eficiente de archivos y carpetas',
            'Aplicar técnicas de búsqueda avanzada para localizar información',
            'Configurar y usar propiedades y metadatos para mejorar la organización',
            'Aplicar medidas básicas de seguridad: permisos, copias de seguridad, protección'
          ],
          tiempoEstimado: '60 minutos'
        }
      }
    },
    'paint': {
      '1': {
        titulo: "Introducción a Paint",
        duracion: "18-22 minutos",
        objetivos: [
          "Comprender qué es Paint y su propósito",
          "Conocer la historia y evolución de Paint",
          "Familiarizarse con la interfaz y herramientas básicas",
          "Aprender conceptos fundamentales de diseño gráfico digital"
        ],
        secciones: [
          {
            id: 1,
            titulo: "¿Qué es Paint?",
            contenido: `
              <h3>🎨 Definición de Paint</h3>
              <p><strong>Microsoft Paint</strong> es un programa de dibujo y edición de imágenes básico incluido gratuitamente en todas las versiones de Windows desde 1985.</p>
              
              <h4>Características principales:</h4>
              <ul>
                <li><strong>Simplicidad:</strong> Interfaz fácil e intuitiva para principiantes</li>
                <li><strong>Accesibilidad:</strong> Viene preinstalado en Windows</li>
                <li><strong>Ligereza:</strong> Consume pocos recursos del sistema</li>
                <li><strong>Versatilidad básica:</strong> Permite crear y editar imágenes simples</li>
                <li><strong>Formatos múltiples:</strong> Guarda en PNG, JPEG, BMP, GIF</li>
              </ul>

              <div class="usos-paint">
                <h4>🎯 ¿Para qué se usa Paint?</h4>
                <div class="usos-grid">
                  <div class="uso-item">
                    <h5>📝 Dibujo básico</h5>
                    <p>Crear ilustraciones simples, diagramas, esquemas</p>
                  </div>
                  <div class="uso-item">
                    <h5>✂️ Edición simple</h5>
                    <p>Recortar, redimensionar, rotar imágenes</p>
                  </div>
                  <div class="uso-item">
                    <h5>📐 Anotaciones</h5>
                    <p>Añadir texto, flechas, formas a capturas</p>
                  </div>
                  <div class="uso-item">
                    <h5>🖍️ Arte digital básico</h5>
                    <p>Primeros pasos en diseño gráfico digital</p>
                  </div>
                </div>
              </div>

              <div class="ventajas-paint">
                <h4>✅ Ventajas de Paint</h4>
                <ul>
                  <li><strong>Gratuito:</strong> Incluido en Windows sin costo adicional</li>
                  <li><strong>Fácil de aprender:</strong> Perfecto para principiantes</li>
                  <li><strong>Rápido:</strong> Se abre y funciona instantáneamente</li>
                  <li><strong>Universal:</strong> Todos los usuarios Windows lo tienen</li>
                  <li><strong>Básico pero efectivo:</strong> Ideal para tareas simples</li>
                </ul>

                <h4>❌ Limitaciones de Paint</h4>
                <ul>
                  <li>No maneja capas (layers)</li>
                  <li>Herramientas limitadas comparado con software profesional</li>
                  <li>No soporta efectos avanzados</li>
                  <li>Calidad limitada para trabajo profesional</li>
                  <li>No tiene función deshacer ilimitado</li>
                </ul>
              </div>

              <div class="comparacion-editores">
                <h4>🔍 Paint vs Otros Editores</h4>
                <table>
                  <tr>
                    <th>Característica</th>
                    <th>Paint</th>
                    <th>Photoshop</th>
                    <th>GIMP</th>
                  </tr>
                  <tr>
                    <td><strong>Facilidad de uso</strong></td>
                    <td>⭐⭐⭐⭐⭐</td>
                    <td>⭐⭐</td>
                    <td>⭐⭐⭐</td>
                  </tr>
                  <tr>
                    <td><strong>Funcionalidades</strong></td>
                    <td>⭐⭐</td>
                    <td>⭐⭐⭐⭐⭐</td>
                    <td>⭐⭐⭐⭐</td>
                  </tr>
                  <tr>
                    <td><strong>Precio</strong></td>
                    <td>Gratis</td>
                    <td>$20/mes</td>
                    <td>Gratis</td>
                  </tr>
                  <tr>
                    <td><strong>Velocidad</strong></td>
                    <td>⭐⭐⭐⭐⭐</td>
                    <td>⭐⭐⭐</td>
                    <td>⭐⭐⭐</td>
                  </tr>
                </table>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/paint-interfaz.jpg",
              video: "/videos/teoria/introduccion-paint.mp4",
              infografia: "/images/teoria/paint-vs-otros.png"
            },
            actividades: [
              {
                tipo: "reflexion",
                pregunta: "¿Has usado Paint antes? ¿Para qué tipo de tareas lo has utilizado?",
                ayuda: "Piensa en capturas de pantalla, dibujos simples, ediciones básicas, etc."
              }
            ]
          },
          {
            id: 2,
            titulo: "Historia y Evolución de Paint",
            contenido: `
              <h3>📜 La Historia de Microsoft Paint</h3>
              
              <div class="timeline-paint">
                <div class="timeline-item">
                  <h4>1985 - Paint 1.0</h4>
                  <div class="paint-version">
                    <ul>
                      <li>Incluido con <strong>Windows 1.0</strong></li>
                      <li>Herramientas muy básicas: pincel, línea, rectángulo</li>
                      <li>Solo colores en <strong>blanco y negro</strong></li>
                      <li>Formato de archivo .MSP (Microsoft Paint)</li>
                    </ul>
                    <p class="dato-historico">📖 <strong>Dato:</strong> Originalmente se llamaba "Paintbrush"</p>
                  </div>
                </div>
                
                <div class="timeline-item">
                  <h4>1990 - Paint 2.0 (Windows 3.0)</h4>
                  <div class="paint-version">
                    <ul>
                      <li>Introducción del <strong>color</strong> (16 colores)</li>
                      <li>Herramienta de <strong>relleno</strong> (bote de pintura)</li>
                      <li>Soporte para archivos <strong>.BMP</strong></li>
                      <li>Herramienta de selección mejorada</li>
                    </ul>
                    <p class="mejora">🎨 <strong>Revolución:</strong> El color cambió completamente las posibilidades</p>
                  </div>
                </div>
                
                <div class="timeline-item">
                  <h4>1995 - Paint (Windows 95)</h4>
                  <div class="paint-version">
                    <ul>
                      <li><strong>256 colores</strong> disponibles</li>
                      <li>Herramienta de <strong>texto</strong> mejorada</li>
                      <li>Función <strong>Deshacer</strong> (limitada)</li>
                      <li>Interfaz renovada con barra de herramientas</li>
                    </ul>
                    <p class="popularidad">📈 <strong>Auge:</strong> Se volvió muy popular entre usuarios domésticos</p>
                  </div>
                </div>
                
                <div class="timeline-item">
                  <h4>2001 - Paint (Windows XP)</h4>
                  <div class="paint-version">
                    <ul>
                      <li>Soporte para <strong>JPEG y GIF</strong></li>
                      <li>Paleta de colores expandida</li>
                      <li>Herramientas de <strong>zoom</strong> mejoradas</li>
                      <li>Mejor calidad de imagen</li>
                    </ul>
                    <p class="formato">💾 <strong>Avance:</strong> Compatibilidad con formatos web estándar</p>
                  </div>
                </div>
                
                <div class="timeline-item">
                  <h4>2009 - Paint (Windows 7)</h4>
                  <div class="paint-version">
                    <ul>
                      <li>Interfaz completamente <strong>rediseñada</strong></li>
                      <li>Cinta de opciones (Ribbon) estilo Office</li>
                      <li>Nuevas herramientas de <strong>pincel</strong></li>
                      <li>Mejor integración con el sistema</li>
                    </ul>
                    <p class="modernizacion">🆕 <strong>Modernización:</strong> Interfaz más intuitiva y moderna</p>
                  </div>
                </div>
                
                <div class="timeline-item">
                  <h4>2017 - Paint (Windows 10)</h4>
                  <div class="paint-version">
                    <ul>
                      <li>Marcado como <strong>"característica en desuso"</strong></li>
                      <li>Microsoft anuncia su eventual eliminación</li>
                      <li>Comunidad protesta masivamente</li>
                      <li>Microsoft <strong>revierte la decisión</strong></li>
                    </ul>
                    <p class="salvacion">❤️ <strong>Salvado:</strong> Los usuarios lograron que Microsoft lo mantuviera</p>
                  </div>
                </div>
                
                <div class="timeline-item">
                  <h4>2021 - Paint (Windows 11)</h4>
                  <div class="paint-version">
                    <ul>
                      <li><strong>Rediseño completo</strong> para Windows 11</li>
                      <li>Interfaz moderna con esquinas redondeadas</li>
                      <li>Mejor rendimiento</li>
                      <li>Nuevos pinceles y herramientas</li>
                      <li>Modo oscuro</li>
                    </ul>
                    <p class="actual">🌟 <strong>Renacimiento:</strong> Paint vuelve renovado y mejorado</p>
                  </div>
                </div>
              </div>

              <div class="curiosidades-paint">
                <h4>🤓 Curiosidades sobre Paint</h4>
                <div class="curiosidad-grid">
                  <div class="curiosidad-item">
                    <h5>🎭 Arte en Paint</h5>
                    <p>Muchos artistas han creado obras maestras increíbles usando solo Paint, demostrando que la herramienta no limita la creatividad.</p>
                  </div>
                  <div class="curiosidad-item">
                    <h5>🌍 Universalmente conocido</h5>
                    <p>Paint es probablemente el programa de dibujo más usado en el mundo, presente en más de 1 mil millones de computadores.</p>
                  </div>
                  <div class="curiosidad-item">
                    <h5>📚 Herramienta educativa</h5>
                    <p>Millones de niños han aprendido conceptos básicos de arte digital usando Paint en escuelas de todo el mundo.</p>
                  </div>
                  <div class="curiosidad-item">
                    <h5>💪 Resistente al tiempo</h5>
                    <p>Después de 39 años, Paint sigue siendo relevante y útil, sobreviviendo a muchos programas más complejos.</p>
                  </div>
                </div>
              </div>

              <div class="impacto-cultural">
                <h4>🌟 Impacto Cultural de Paint</h4>
                <ul>
                  <li><strong>Democratización del arte digital:</strong> Acercó el diseño gráfico a millones de personas</li>
                  <li><strong>Herramienta educativa:</strong> Primera experiencia de arte digital para generaciones</li>
                  <li><strong>Creatividad sin barreras:</strong> Permitió expresión artística sin costos adicionales</li>
                  <li><strong>Cultura de memes:</strong> Muchos memes icónicos fueron creados en Paint</li>
                  <li><strong>Nostalgia tecnológica:</strong> Representa la simplicidad de la era PC temprana</li>
                </ul>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/historia-paint.jpg",
              video: "/videos/teoria/evolucion-paint.mp4",
              infografia: "/images/teoria/timeline-paint.png"
            },
            actividades: [
              {
                tipo: "investigacion",
                pregunta: "Busca en internet ejemplos de arte increíble hecho en Paint. ¿Te sorprende lo que se puede lograr?",
                ayuda: "Busca 'amazing MS Paint art' o 'incredible Paint masterpieces'"
              },
              {
                tipo: "comparacion",
                pregunta: "Compara las versiones de Paint que has usado. ¿Cuál prefieres y por qué?",
                ayuda: "Piensa en la facilidad de uso, herramientas disponibles, diseño de interfaz"
              }
            ]
          },
          {
            id: 3,
            titulo: "Interfaz y Herramientas Básicas",
            contenido: `
              <h3>🔧 Conociendo la Interfaz de Paint</h3>

              <div class="areas-interfaz">
                <h4>📍 Áreas Principales de la Interfaz</h4>
                
                <div class="area-interfaz">
                  <h5>1. 📋 Barra de Título</h5>
                  <ul>
                    <li>Muestra el nombre del archivo actual</li>
                    <li>Controles de ventana (minimizar, maximizar, cerrar)</li>
                    <li>Indica si hay cambios sin guardar (*)</li>
                  </ul>
                </div>

                <div class="area-interfaz">
                  <h5>2. 🎀 Cinta de Opciones (Ribbon)</h5>
                  <div class="pestanas-ribbon">
                    <div class="pestana">
                      <h6>📁 Pestaña Archivo</h6>
                      <ul>
                        <li>Nuevo, Abrir, Guardar, Guardar como</li>
                        <li>Imprimir</li>
                        <li>Propiedades de imagen</li>
                        <li>Configuración de página</li>
                      </ul>
                    </div>
                    <div class="pestana">
                      <h6>🏠 Pestaña Inicio</h6>
                      <ul>
                        <li><strong>Herramientas:</strong> Lápiz, pincel, relleno, texto, borrador</li>
                        <li><strong>Formas:</strong> Línea, rectángulo, círculo, polígono</li>
                        <li><strong>Colores:</strong> Paleta de colores, color 1 y 2</li>
                        <li><strong>Imagen:</strong> Seleccionar, recortar, redimensionar, rotar</li>
                      </ul>
                    </div>
                    <div class="pestana">
                      <h6>👁️ Pestaña Ver</h6>
                      <ul>
                        <li>Zoom (acercar/alejar)</li>
                        <li>Mostrar/ocultar reglas</li>
                        <li>Mostrar/ocultar líneas de cuadrícula</li>
                        <li>Pantalla completa</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="area-interfaz">
                  <h5>3. 🎨 Lienzo de Trabajo</h5>
                  <ul>
                    <li>Área blanca donde se crea y edita la imagen</li>
                    <li>Tamaño personalizable</li>
                    <li>Muestra cuadrícula opcional para precisión</li>
                    <li>Barras de desplazamiento para imágenes grandes</li>
                  </ul>
                </div>

                <div class="area-interfaz">
                  <h5>4. 📊 Barra de Estado</h5>
                  <ul>
                    <li>Coordenadas del cursor (píxeles)</li>
                    <li>Dimensiones de la imagen</li>
                    <li>Control de zoom</li>
                    <li>Información adicional de la herramienta actual</li>
                  </ul>
                </div>
              </div>

              <div class="herramientas-principales">
                <h4>🛠️ Herramientas Principales</h4>
                
                <div class="categoria-herramientas">
                  <h5>✏️ Herramientas de Dibujo</h5>
                  <div class="herramienta">
                    <h6>📝 Lápiz</h6>
                    <p><strong>Función:</strong> Dibujo libre de líneas finas y precisas</p>
                    <p><strong>Uso típico:</strong> Bocetos, detalles, líneas finas</p>
                    <p><strong>Consejo:</strong> Ideal para trabajo detallado y precisión</p>
                  </div>
                  
                  <div class="herramienta">
                    <h6>🖌️ Pincel</h6>
                    <p><strong>Función:</strong> Dibujo libre con trazos más gruesos y suaves</p>
                    <p><strong>Tamaños:</strong> Fino, mediano, grueso, muy grueso</p>
                    <p><strong>Uso típico:</strong> Pintura artística, rellenos, efectos</p>
                  </div>

                  <div class="herramienta">
                    <h6>🌊 Aerógrafo</h6>
                    <p><strong>Función:</strong> Efecto de spray suave y difuminado</p>
                    <p><strong>Uso típico:</strong> Sombras, degradados, efectos atmosféricos</p>
                    <p><strong>Consejo:</strong> Mantén presionado para mayor intensidad</p>
                  </div>
                </div>

                <div class="categoria-herramientas">
                  <h5>🔧 Herramientas de Edición</h5>
                  <div class="herramienta">
                    <h6>🎯 Seleccionar</h6>
                    <p><strong>Tipos:</strong> Rectangular, forma libre, transparente</p>
                    <p><strong>Función:</strong> Selecciona áreas para copiar, mover, eliminar</p>
                    <p><strong>Atajos:</strong> Ctrl+A (todo), Ctrl+C (copiar), Ctrl+V (pegar)</p>
                  </div>
                  
                  <div class="herramienta">
                    <h6>🪣 Relleno</h6>
                    <p><strong>Función:</strong> Rellena áreas cerradas con color</p>
                    <p><strong>Consejo:</strong> Asegúrate de que el área esté completamente cerrada</p>
                    <p><strong>Uso típico:</strong> Colorear dibujos, cambiar fondos</p>
                  </div>

                  <div class="herramienta">
                    <h6>🔍 Lupa/Zoom</h6>
                    <p><strong>Función:</strong> Acerca o aleja la vista del lienzo</p>
                    <p><strong>Niveles:</strong> 100%, 200%, 400%, 800%</p>
                    <p><strong>Atajo:</strong> Ctrl + rueda del mouse</p>
                  </div>
                </div>

                <div class="categoria-herramientas">
                  <h5>📐 Herramientas de Formas</h5>
                  <div class="formas-grid">
                    <div class="forma-item">
                      <h6>📏 Línea</h6>
                      <p>Líneas rectas de diferentes grosores</p>
                    </div>
                    <div class="forma-item">
                      <h6>⬜ Rectángulo</h6>
                      <p>Rectángulos y cuadrados</p>
                    </div>
                    <div class="forma-item">
                      <h6>⭕ Círculo/Elipse</h6>
                      <p>Círculos perfectos y elipses</p>
                    </div>
                    <div class="forma-item">
                      <h6>🔺 Polígono</h6>
                      <p>Formas geométricas personalizadas</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="colores-paint">
                <h4>🎨 Sistema de Colores</h4>
                <div class="color-system">
                  <h5>🎯 Color Primario y Secundario</h5>
                  <ul>
                    <li><strong>Color 1 (Primario):</strong> Clic izquierdo, contorno de formas</li>
                    <li><strong>Color 2 (Secundario):</strong> Clic derecho, relleno de formas</li>
                    <li><strong>Intercambiar:</strong> Hacer clic en el ícono de intercambio</li>
                  </ul>

                  <h5>🌈 Paleta de Colores</h5>
                  <ul>
                    <li><strong>Colores básicos:</strong> 20 colores predefinidos</li>
                    <li><strong>Editar colores:</strong> Crear colores personalizados</li>
                    <li><strong>Selector de color:</strong> Tomar color de la imagen</li>
                  </ul>
                </div>
              </div>

              <div class="consejos-interfaz">
                <h4>💡 Consejos para la Interfaz</h4>
                <div class="consejo-grid">
                  <div class="consejo-item">
                    <h5>⌨️ Atajos de Teclado</h5>
                    <ul>
                      <li><strong>Ctrl+N:</strong> Nuevo</li>
                      <li><strong>Ctrl+O:</strong> Abrir</li>
                      <li><strong>Ctrl+S:</strong> Guardar</li>
                      <li><strong>Ctrl+Z:</strong> Deshacer</li>
                      <li><strong>Ctrl+Y:</strong> Rehacer</li>
                    </ul>
                  </div>
                  <div class="consejo-item">
                    <h5>🎯 Precisión</h5>
                    <ul>
                      <li>Usar cuadrícula para alineación</li>
                      <li>Mantener Shift para líneas rectas</li>
                      <li>Zoom para detalles precisos</li>
                      <li>Usar reglas para mediciones</li>
                    </ul>
                  </div>
                </div>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/interfaz-paint.jpg",
              video: "/videos/teoria/herramientas-paint.mp4",
              infografia: "/images/teoria/guia-herramientas-paint.png"
            },
            actividades: [
              {
                tipo: "practica",
                pregunta: "Abre Paint y familiarízate con cada herramienta. Prueba dibujar algo simple con cada una",
                ayuda: "Experimenta con diferentes tamaños de pincel, colores y formas básicas"
              },
              {
                tipo: "exploracion",
                pregunta: "Descubre qué pasa cuando mantienes presionada la tecla Shift mientras dibujas líneas o formas",
                ayuda: "Prueba con líneas, rectángulos y círculos manteniendo Shift presionado"
              }
            ]
          },
          {
            id: 4,
            titulo: "Conceptos de Diseño Gráfico Digital",
            contenido: `
              <h3>🎨 Fundamentos del Diseño Gráfico Digital</h3>

              <div class="conceptos-basicos">
                <h4>📐 Conceptos Básicos de Imagen Digital</h4>
                
                <div class="concepto-digital">
                  <h5>🔳 Píxeles</h5>
                  <p><strong>Definición:</strong> Los píxeles son los puntos individuales de color que forman una imagen digital.</p>
                  <ul>
                    <li><strong>Pixel =</strong> Picture Element (Elemento de Imagen)</li>
                    <li>Cada píxel tiene una <strong>posición exacta</strong> y un <strong>color específico</strong></li>
                    <li>Más píxeles = Mayor detalle y calidad</li>
                    <li>En Paint puedes ver píxeles individuales con zoom alto</li>
                  </ul>
                  <p class="analogia">💡 <strong>Analogía:</strong> Como los mosaicos antiguos, donde cada tesela es un píxel</p>
                </div>

                <div class="concepto-digital">
                  <h5>📏 Resolución</h5>
                  <p><strong>Definición:</strong> El número total de píxeles en una imagen (ancho × alto).</p>
                  <div class="resolucion-ejemplos">
                    <ul>
                      <li><strong>Baja resolución:</strong> 320×240 píxeles (imagen pequeña/pixelada)</li>
                      <li><strong>Resolución media:</strong> 1024×768 píxeles (calidad estándar)</li>
                      <li><strong>Alta resolución:</strong> 1920×1080 píxeles (Full HD)</li>
                      <li><strong>Ultra alta:</strong> 4K (3840×2160 píxeles)</li>
                    </ul>
                  </div>
                  <p class="importante">⚠️ <strong>Importante:</strong> Mayor resolución = archivos más grandes</p>
                </div>

                <div class="concepto-digital">
                  <h5>🎨 Profundidad de Color</h5>
                  <p><strong>Definición:</strong> La cantidad de colores diferentes que puede mostrar cada píxel.</p>
                  <ul>
                    <li><strong>1 bit:</strong> 2 colores (blanco y negro)</li>
                    <li><strong>8 bits:</strong> 256 colores (GIF clásico)</li>
                    <li><strong>24 bits:</strong> 16.7 millones de colores (color verdadero)</li>
                    <li><strong>32 bits:</strong> 24 bits + transparencia (RGBA)</li>
                  </ul>
                </div>
              </div>

              <div class="formatos-archivo">
                <h4>💾 Formatos de Archivo en Paint</h4>
                
                <div class="formato">
                  <h5>🖼️ PNG (Portable Network Graphics)</h5>
                  <div class="formato-info">
                    <p><strong>Características:</strong></p>
                    <ul>
                      <li>Soporta <strong>transparencia</strong></li>
                      <li>Compresión <strong>sin pérdida</strong></li>
                      <li>Ideal para <strong>gráficos con texto</strong></li>
                      <li>Tamaño de archivo mediano</li>
                    </ul>
                    <p><strong>Mejor para:</strong> Logos, iconos, imágenes con transparencia</p>
                  </div>
                </div>

                <div class="formato">
                  <h5>📸 JPEG (Joint Photographic Experts Group)</h5>
                  <div class="formato-info">
                    <p><strong>Características:</strong></p>
                    <ul>
                      <li>Compresión <strong>con pérdida</strong> (menor calidad, menor tamaño)</li>
                      <li>Ideal para <strong>fotografías</strong></li>
                      <li>No soporta transparencia</li>
                      <li>Archivos muy pequeños</li>
                    </ul>
                    <p><strong>Mejor para:</strong> Fotos, imágenes con muchos colores</p>
                  </div>
                </div>

                <div class="formato">
                  <h5>🎞️ GIF (Graphics Interchange Format)</h5>
                  <div class="formato-info">
                    <p><strong>Características:</strong></p>
                    <ul>
                      <li>Máximo <strong>256 colores</strong></li>
                      <li>Soporta <strong>animación</strong></li>
                      <li>Transparencia básica</li>
                      <li>Archivos pequeños</li>
                    </ul>
                    <p><strong>Mejor para:</strong> Animaciones simples, imágenes con pocos colores</p>
                  </div>
                </div>

                <div class="formato">
                  <h5>🖥️ BMP (Bitmap)</h5>
                  <div class="formato-info">
                    <p><strong>Características:</strong></p>
                    <ul>
                      <li><strong>Sin compresión</strong> (máxima calidad)</li>
                      <li>Archivos muy grandes</li>
                      <li>Formato nativo de Windows</li>
                      <li>Compatible con todas las versiones de Paint</li>
                    </ul>
                    <p><strong>Mejor para:</strong> Trabajo interno, máxima calidad</p>
                  </div>
                </div>
              </div>

              <div class="principios-diseno">
                <h4>🎯 Principios Básicos de Diseño</h4>
                
                <div class="principio">
                  <h5>⚖️ Balance y Equilibrio</h5>
                  <ul>
                    <li><strong>Simétrico:</strong> Elementos iguales a ambos lados</li>
                    <li><strong>Asimétrico:</strong> Equilibrio visual sin simetría exacta</li>
                    <li><strong>En Paint:</strong> Distribución de formas y colores</li>
                  </ul>
                </div>

                <div class="principio">
                  <h5>🎨 Contraste</h5>
                  <ul>
                    <li><strong>De color:</strong> Colores opuestos (rojo vs verde)</li>
                    <li><strong>De valor:</strong> Claro vs oscuro</li>
                    <li><strong>De tamaño:</strong> Grande vs pequeño</li>
                    <li><strong>Propósito:</strong> Destacar elementos importantes</li>
                  </ul>
                </div>

                <div class="principio">
                  <h5>🔄 Repetición</h5>
                  <ul>
                    <li>Usar elementos similares consistentemente</li>
                    <li>Crear <strong>unidad visual</strong></li>
                    <li>En Paint: Repetir formas, colores, patrones</li>
                  </ul>
                </div>

                <div class="principio">
                  <h5>📍 Alineación</h5>
                  <ul>
                    <li>Organizar elementos de manera ordenada</li>
                    <li>Usar <strong>cuadrícula</strong> para precisión</li>
                    <li>Crear sensación de orden y profesionalismo</li>
                  </ul>
                </div>

                <div class="principio">
                  <h5>👁️ Jerarquía Visual</h5>
                  <ul>
                    <li><strong>Qué ver primero:</strong> Elemento más importante</li>
                    <li><strong>Cómo guiar la vista:</strong> Del elemento principal a secundarios</li>
                    <li><strong>Herramientas:</strong> Tamaño, color, posición, contraste</li>
                  </ul>
                </div>
              </div>

              <div class="teoria-color">
                <h4>🌈 Teoría Básica del Color</h4>
                
                <div class="circulo-cromatico">
                  <h5>🎨 Círculo Cromático</h5>
                  <div class="colores-primarios">
                    <h6>Colores Primarios</h6>
                    <ul>
                      <li><strong>🔴 Rojo:</strong> Energía, pasión, atención</li>
                      <li><strong>🔵 Azul:</strong> Calma, confianza, profesionalismo</li>
                      <li><strong>🟡 Amarillo:</strong> Alegría, optimismo, creatividad</li>
                    </ul>
                  </div>
                  
                  <div class="colores-secundarios">
                    <h6>Colores Secundarios</h6>
                    <ul>
                      <li><strong>🟠 Naranja:</strong> Rojo + Amarillo = Entusiasmo</li>
                      <li><strong>🟢 Verde:</strong> Azul + Amarillo = Naturaleza, crecimiento</li>
                      <li><strong>🟣 Morado:</strong> Rojo + Azul = Creatividad, misterio</li>
                    </ul>
                  </div>
                </div>

                <div class="combinaciones-color">
                  <h5>🎯 Combinaciones Efectivas</h5>
                  <ul>
                    <li><strong>Complementarios:</strong> Colores opuestos (Rojo-Verde, Azul-Naranja)</li>
                    <li><strong>Análogos:</strong> Colores adyacentes (Azul-Verde-Amarillo)</li>
                    <li><strong>Monocromático:</strong> Diferentes tonos del mismo color</li>
                    <li><strong>Triádico:</strong> Tres colores equidistantes en el círculo</li>
                  </ul>
                </div>
              </div>

              <div class="consejos-principiantes">
                <h4>💡 Consejos para Principiantes</h4>
                <div class="consejo-diseno">
                  <h5>🚀 Empezar Simple</h5>
                  <ul>
                    <li>Usar <strong>pocos colores</strong> (2-3 máximo al inicio)</li>
                    <li>Practicar con <strong>formas básicas</strong></li>
                    <li>Enfocarse en <strong>una habilidad</strong> a la vez</li>
                  </ul>
                </div>

                <div class="consejo-diseno">
                  <h5>👀 Observar y Copiar</h5>
                  <ul>
                    <li>Estudiar diseños que te gusten</li>
                    <li>Intentar <strong>recrear</strong> elementos simples</li>
                    <li>Entender <strong>por qué</strong> funcionan</li>
                  </ul>
                </div>

                <div class="consejo-diseno">
                  <h5>🔄 Practicar Regularmente</h5>
                  <ul>
                    <li>Dedicar <strong>15-30 minutos diarios</strong></li>
                    <li>Experimentar con <strong>diferentes herramientas</strong></li>
                    <li>No temer a los <strong>errores</strong></li>
                  </ul>
                </div>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/diseno-grafico-digital.jpg",
              video: "/videos/teoria/conceptos-diseno-paint.mp4",
              infografia: "/images/teoria/principios-diseno.png"
            },
            actividades: [
              {
                tipo: "experimento",
                pregunta: "Crea una imagen simple usando solo colores primarios. Luego otra usando solo colores complementarios",
                ayuda: "Observa cómo diferentes combinaciones de colores afectan la sensación de tu diseño"
              },
              {
                tipo: "analisis",
                pregunta: "Busca un logo famoso y analiza qué principios de diseño utiliza (balance, contraste, etc.)",
                ayuda: "Piensa en logos como McDonald's, Nike, Apple, etc."
              }
            ]
          }
        ],
        recursos: {
          documentos: [
            {
              titulo: "Guía Completa de Paint",
              tipo: "PDF",
              url: "/recursos/paint/guia-completa-paint.pdf"
            },
            {
              titulo: "Fundamentos de Diseño Gráfico",
              tipo: "PDF",
              url: "/recursos/paint/fundamentos-diseno.pdf"
            },
            {
              titulo: "Teoría del Color para Principiantes",
              tipo: "PDF",
              url: "/recursos/paint/teoria-color.pdf"
            }
          ],
          videos: [
            {
              titulo: "Tutorial Básico de Paint",
              duracion: "12 min",
              url: "/videos/tutorial-basico-paint.mp4"
            },
            {
              titulo: "Arte Increíble en MS Paint",
              duracion: "8 min",
              url: "/videos/arte-increible-paint.mp4"
            }
          ],
          enlaces: [
            {
              titulo: "Galería de Arte en Paint",
              url: "https://www.reddit.com/r/mspaint"
            },
            {
              titulo: "Tutoriales Avanzados de Paint",
              url: "https://support.microsoft.com/paint"
            },
            {
              titulo: "Historia Completa de Paint",
              url: "https://en.wikipedia.org/wiki/Microsoft_Paint"
            }
          ]
        },
        evaluacion: {
          preRequisitos: ["Conocimientos básicos de Windows"],
          criterios: [
            "Explicar qué es Paint y sus usos principales",
            "Conocer la evolución histórica de Paint",
            "Identificar y usar las herramientas básicas",
            "Aplicar conceptos básicos de diseño gráfico",
            "Entender formatos de archivo y cuándo usarlos"
          ],
          tiempoEstimado: "22 minutos"
        }
      },
      '2': {
        titulo: "Formas y Figuras Geométricas",
        duracion: "20-25 minutos",
        objetivos: [
          "Dominar las herramientas de formas geométricas en Paint",
          "Aprender técnicas de creación y manipulación de formas",
          "Entender principios de composición visual con formas",
          "Crear diseños estructurados usando geometría básica"
        ],
        secciones: [
          {
            id: 1,
            titulo: "Herramientas de Formas Básicas",
            contenido: `
              <div class="seccion-contenido">
                <h3>📐 Herramientas de Formas en Paint</h3>
                
                <div class="info-box">
                  <h4>¿Por qué usar formas geométricas?</h4>
                  <p>Las formas geométricas son los elementos fundamentales del diseño. Proporcionan estructura, orden y profesionalismo a nuestras creaciones, además de ser más rápidas y precisas que dibujar a mano alzada.</p>
                </div>

                <h4>🔧 Herramientas Principales de Formas</h4>
                
                <div class="herramienta-forma">
                  <h5>📏 Línea</h5>
                  <div class="detalle-herramienta">
                    <p><strong>Función:</strong> Crear líneas rectas de cualquier longitud y orientación</p>
                    <ul>
                      <li><strong>Tipos disponibles:</strong>
                        <ul>
                          <li>Línea simple (1 píxel)</li>
                          <li>Línea gruesa (3 píxeles)</li>
                          <li>Línea muy gruesa (5 píxeles)</li>
                        </ul>
                      </li>
                      <li><strong>Técnicas especiales:</strong>
                        <ul>
                          <li><kbd>Shift</kbd> + arrastrar = líneas perfectamente horizontales/verticales</li>
                          <li>Mantener <kbd>Shift</kbd> = líneas en ángulos de 45°</li>
                        </ul>
                      </li>
                      <li><strong>Usos típicos:</strong> Marcos, divisores, diagramas, flechas básicas</li>
                    </ul>
                  </div>
                </div>

                <div class="herramienta-forma">
                  <h5>⬜ Rectángulo y Cuadrado</h5>
                  <div class="detalle-herramienta">
                    <p><strong>Función:</strong> Crear formas rectangulares y cuadradas</p>
                    <ul>
                      <li><strong>Opciones de estilo:</strong>
                        <ul>
                          <li><strong>Solo contorno:</strong> Rectángulo vacío con borde</li>
                          <li><strong>Relleno con contorno:</strong> Color interior + borde</li>
                          <li><strong>Solo relleno:</strong> Rectángulo sólido sin borde</li>
                        </ul>
                      </li>
                      <li><strong>Técnicas especiales:</strong>
                        <ul>
                          <li><kbd>Shift</kbd> + arrastrar = cuadrados perfectos</li>
                          <li>Arrastrar desde cualquier esquina</li>
                        </ul>
                      </li>
                      <li><strong>Usos típicos:</strong> Marcos, botones, cajas de texto, fondos</li>
                    </ul>
                  </div>
                </div>

                <div class="herramienta-forma">
                  <h5>⭕ Círculo y Elipse</h5>
                  <div class="detalle-herramienta">
                    <p><strong>Función:</strong> Crear formas circulares y elípticas</p>
                    <ul>
                      <li><strong>Opciones de estilo:</strong>
                        <ul>
                          <li><strong>Solo contorno:</strong> Círculo vacío con borde</li>
                          <li><strong>Relleno con contorno:</strong> Color interior + borde</li>
                          <li><strong>Solo relleno:</strong> Círculo sólido sin borde</li>
                        </ul>
                      </li>
                      <li><strong>Técnicas especiales:</strong>
                        <ul>
                          <li><kbd>Shift</kbd> + arrastrar = círculos perfectos</li>
                          <li>Arrastrar desde el centro hacia afuera</li>
                        </ul>
                      </li>
                      <li><strong>Usos típicos:</strong> Logos, decoraciones, elementos orgánicos, iconos</li>
                    </ul>
                  </div>
                </div>

                <div class="herramienta-forma">
                  <h5>🔺 Polígono</h5>
                  <div class="detalle-herramienta">
                    <p><strong>Función:</strong> Crear formas geométricas de múltiples lados</p>
                    <ul>
                      <li><strong>Cómo usar:</strong>
                        <ol>
                          <li>Seleccionar herramienta polígono</li>
                          <li>Hacer clic para crear cada vértice</li>
                          <li>Doble clic o conectar con el primer punto para cerrar</li>
                        </ol>
                      </li>
                      <li><strong>Formas comunes:</strong>
                        <ul>
                          <li>Triángulos (3 lados)</li>
                          <li>Pentágonos (5 lados)</li>
                          <li>Hexágonos (6 lados)</li>
                          <li>Estrellas y formas irregulares</li>
                        </ul>
                      </li>
                      <li><strong>Usos típicos:</strong> Flechas personalizadas, logos, elementos decorativos</li>
                    </ul>
                  </div>
                </div>

                <div class="herramienta-forma">
                  <h5>〰️ Curva</h5>
                  <div class="detalle-herramienta">
                    <p><strong>Función:</strong> Crear líneas curvas suaves y naturales</p>
                    <ul>
                      <li><strong>Proceso de creación:</strong>
                        <ol>
                          <li>Dibujar una línea recta base</li>
                          <li>Hacer clic y arrastrar para crear la primera curva</li>
                          <li>Hacer clic y arrastrar para crear la segunda curva (opcional)</li>
                        </ol>
                      </li>
                      <li><strong>Tipos de curvas:</strong>
                        <ul>
                          <li>Curva simple (una sola curvatura)</li>
                          <li>Curva en S (dos curvaturas opuestas)</li>
                        </ul>
                      </li>
                      <li><strong>Usos típicos:</strong> Elementos orgánicos, decoraciones, flujos, ondas</li>
                    </ul>
                  </div>
                </div>

                <div class="consejos-formas">
                  <h4>💡 Consejos para Usar Formas Eficientemente</h4>
                  <div class="consejo-grid">
                    <div class="consejo-item">
                      <h5>🎯 Precisión</h5>
                      <ul>
                        <li>Usar zoom para detalles precisos</li>
                        <li>Activar cuadrícula para alineación</li>
                        <li>Mantener Shift para formas perfectas</li>
                      </ul>
                    </div>
                    
                    <div class="consejo-item">
                      <h5>🎨 Estilo Consistente</h5>
                      <ul>
                        <li>Usar el mismo grosor de línea</li>
                        <li>Mantener colores coherentes</li>
                        <li>Decidir: ¿con borde o sin borde?</li>
                      </ul>
                    </div>

                    <div class="consejo-item">
                      <h5>⚡ Eficiencia</h5>
                      <ul>
                        <li>Planificar antes de dibujar</li>
                        <li>Usar formas simples primero</li>
                        <li>Combinar formas para crear complejas</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            `,
            multimedia: {
              imagen: '/images/teoria/herramientas-formas-paint.png',
              video: '/videos/teoria/formas-basicas-paint.mp4'
            },
            actividades: [
              'Experimentar con cada herramienta de forma básica',
              'Crear formas perfectas usando la tecla Shift',
              'Probar diferentes estilos: contorno, relleno, y combinados',
              'Crear un polígono personalizado de al menos 5 lados'
            ]
          },
          {
            id: 2,
            titulo: "Técnicas de Relleno y Contorno",
            contenido: `
              <div class="seccion-contenido">
                <h3>🎨 Dominando Rellenos y Contornos</h3>
                
                <div class="sistema-colores">
                  <h4>🌈 Sistema de Colores en Formas</h4>
                  
                  <div class="color-explicacion">
                    <h5>Color 1 vs Color 2</h5>
                    <ul>
                      <li><strong>Color 1 (Primario):</strong> 
                        <ul>
                          <li>Se aplica con <strong>clic izquierdo</strong></li>
                          <li>Define el <strong>contorno</strong> de las formas</li>
                          <li>Color del pincel y herramientas de dibujo</li>
                        </ul>
                      </li>
                      <li><strong>Color 2 (Secundario):</strong>
                        <ul>
                          <li>Se aplica con <strong>clic derecho</strong></li>
                          <li>Define el <strong>relleno</strong> de las formas</li>
                          <li>Color de fondo en algunas operaciones</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="opciones-relleno">
                  <h4>🖌️ Opciones de Relleno y Contorno</h4>
                  
                  <div class="opcion-estilo">
                    <h5>1️⃣ Solo Contorno</h5>
                    <div class="estilo-detalle">
                      <p><strong>Apariencia:</strong> Forma vacía con solo el borde visible</p>
                      <ul>
                        <li><strong>Cuándo usar:</strong> Marcos, cajas de texto, elementos minimalistas</li>
                        <li><strong>Ventajas:</strong> No tapa el fondo, aspecto limpio</li>
                        <li><strong>Consejos:</strong> Ideal para superposiciones sin ocultar contenido</li>
                      </ul>
                      <div class="ejemplo-visual">
                        <p>📄 <strong>Ejemplo:</strong> Marco para foto, borde de botón, caja de comentario</p>
                      </div>
                    </div>
                  </div>

                  <div class="opcion-estilo">
                    <h5>2️⃣ Solo Relleno</h5>
                    <div class="estilo-detalle">
                      <p><strong>Apariencia:</strong> Forma sólida sin borde visible</p>
                      <ul>
                        <li><strong>Cuándo usar:</strong> Elementos sólidos, fondos, formas decorativas</li>
                        <li><strong>Ventajas:</strong> Aspecto moderno y limpio</li>
                        <li><strong>Consejos:</strong> Perfecto para diseños minimalistas</li>
                      </ul>
                      <div class="ejemplo-visual">
                        <p>🔴 <strong>Ejemplo:</strong> Botones sólidos, elementos de fondo, iconos simples</p>
                      </div>
                    </div>
                  </div>

                  <div class="opcion-estilo">
                    <h5>3️⃣ Relleno con Contorno</h5>
                    <div class="estilo-detalle">
                      <p><strong>Apariencia:</strong> Forma sólida con borde definido</p>
                      <ul>
                        <li><strong>Cuándo usar:</strong> Elementos que necesitan destacar, botones importantes</li>
                        <li><strong>Ventajas:</strong> Máxima visibilidad y definición</li>
                        <li><strong>Consejos:</strong> Cuidado con el grosor del borde</li>
                      </ul>
                      <div class="ejemplo-visual">
                        <p>🟦 <strong>Ejemplo:</strong> Botones principales, elementos destacados, logos</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="herramienta-relleno">
                  <h4>🪣 Herramienta de Relleno (Bote de Pintura)</h4>
                  
                  <div class="como-funciona">
                    <h5>⚙️ Cómo Funciona</h5>
                    <ol>
                      <li>Seleccionar el color deseado</li>
                      <li>Hacer clic en la herramienta de relleno (bote de pintura)</li>
                      <li>Hacer clic dentro del área que quieres rellenar</li>
                      <li>El color se extiende hasta encontrar un borde</li>
                    </ol>
                  </div>

                  <div class="requisitos-relleno">
                    <h5>⚠️ Requisitos Importantes</h5>
                    <ul>
                      <li><strong>Área cerrada:</strong> La forma debe estar completamente cerrada</li>
                      <li><strong>Sin huecos:</strong> Cualquier abertura causará "derrame" de color</li>
                      <li><strong>Contraste:</strong> El borde debe ser de color diferente al relleno</li>
                    </ul>
                  </div>

                  <div class="problemas-comunes">
                    <h5>🔧 Solución de Problemas Comunes</h5>
                    <div class="problema">
                      <h6>El color se extiende por toda la pantalla</h6>
                      <p><strong>Causa:</strong> La forma no está cerrada completamente</p>
                      <p><strong>Solución:</strong> Deshacer (Ctrl+Z) y cerrar todos los huecos con el lápiz</p>
                    </div>
                    
                    <div class="problema">
                      <h6>El relleno no funciona</h6>
                      <p><strong>Causa:</strong> El color del relleno es igual al del área</p>
                      <p><strong>Solución:</strong> Cambiar a un color diferente</p>
                    </div>

                    <div class="problema">
                      <h6>Relleno con bordes irregulares</h6>
                      <p><strong>Causa:</strong> Zoom muy bajo o líneas muy finas</p>
                      <p><strong>Solución:</strong> Aumentar zoom y revisar los bordes</p>
                    </div>
                  </div>
                </div>

                <div class="tecnicas-avanzadas">
                  <h4>🚀 Técnicas Avanzadas de Relleno</h4>
                  
                  <div class="tecnica">
                    <h5>🎨 Relleno Selectivo</h5>
                    <ul>
                      <li>Rellenar solo parte de una forma grande</li>
                      <li>Crear áreas de diferentes colores dentro de una forma</li>
                      <li>Usar líneas internas para dividir espacios</li>
                    </ul>
                  </div>

                  <div class="tecnica">
                    <h5>🔄 Relleno por Capas</h5>
                    <ul>
                      <li>Rellenar con un color base</li>
                      <li>Agregar detalles encima</li>
                      <li>Crear efectos de profundidad</li>
                    </ul>
                  </div>

                  <div class="tecnica">
                    <h5>🌈 Combinación de Colores</h5>
                    <ul>
                      <li>Usar colores análogos para armonía</li>
                      <li>Usar colores complementarios para contraste</li>
                      <li>Crear patrones con repetición de colores</li>
                    </ul>
                  </div>
                </div>

                <div class="paleta-colores">
                  <h4>🎨 Trabajando con la Paleta de Colores</h4>
                  
                  <div class="colores-basicos">
                    <h5>Colores Básicos Disponibles</h5>
                    <p>Paint incluye 20 colores predefinidos que cubren el espectro básico:</p>
                    <ul>
                      <li><strong>Colores neutros:</strong> Negro, blanco, grises</li>
                      <li><strong>Colores primarios:</strong> Rojo, azul, amarillo</li>
                      <li><strong>Colores secundarios:</strong> Verde, naranja, morado</li>
                      <li><strong>Colores adicionales:</strong> Rosa, marrón, cian, etc.</li>
                    </ul>
                  </div>

                  <div class="editar-colores">
                    <h5>🛠️ Crear Colores Personalizados</h5>
                    <ol>
                      <li>Hacer clic en "Editar colores"</li>
                      <li>Usar la rueda de colores para seleccionar tono</li>
                      <li>Ajustar saturación y brillo</li>
                      <li>O introducir valores RGB específicos</li>
                      <li>Agregar a colores personalizados</li>
                    </ol>
                  </div>
                </div>
              </div>
            `,
            multimedia: {
              imagen: '/images/teoria/relleno-contorno-paint.png',
              video: '/videos/teoria/tecnicas-relleno.mp4'
            },
            actividades: [
              'Crear formas con los tres estilos diferentes (contorno, relleno, combinado)',
              'Practicar el relleno con bote de pintura en formas cerradas',
              'Experimentar con diferentes combinaciones de colores',
              'Solucionar un "problema de derrame" cerrando una forma abierta'
            ]
          },
          {
            id: 3,
            titulo: "Composición y Diseño con Formas",
            contenido: `
              <div class="seccion-contenido">
                <h3>🏗️ Principios de Composición Visual</h3>
                
                <div class="principios-composicion">
                  <h4>⚖️ Balance y Equilibrio</h4>
                  
                  <div class="tipo-balance">
                    <h5>1️⃣ Balance Simétrico</h5>
                    <div class="balance-detalle">
                      <p><strong>Definición:</strong> Elementos iguales distribuidos uniformemente a ambos lados</p>
                      <ul>
                        <li><strong>Características:</strong>
                          <ul>
                            <li>Estabilidad visual</li>
                            <li>Sensación de orden y tranquilidad</li>
                            <li>Formalidad y seriedad</li>
                          </ul>
                        </li>
                        <li><strong>Cómo aplicarlo en Paint:</strong>
                          <ul>
                            <li>Crear formas idénticas en lados opuestos</li>
                            <li>Usar la cuadrícula para precisión</li>
                            <li>Copiar y pegar elementos para simetría perfecta</li>
                          </ul>
                        </li>
                        <li><strong>Ejemplos prácticos:</strong> Logos corporativos, documentos formales, elementos decorativos clásicos</li>
                      </ul>
                    </div>
                  </div>

                  <div class="tipo-balance">
                    <h5>2️⃣ Balance Asimétrico</h5>
                    <div class="balance-detalle">
                      <p><strong>Definición:</strong> Equilibrio visual usando elementos diferentes pero balanceados</p>
                      <ul>
                        <li><strong>Características:</strong>
                          <ul>
                            <li>Dinamismo y movimiento</li>
                            <li>Más interesante visualmente</li>
                            <li>Modernidad y creatividad</li>
                          </ul>
                        </li>
                        <li><strong>Técnicas en Paint:</strong>
                          <ul>
                            <li>Balancear forma grande con varias pequeñas</li>
                            <li>Usar colores intensos vs. suaves</li>
                            <li>Combinar formas simples con complejas</li>
                          </ul>
                        </li>
                        <li><strong>Ejemplos prácticos:</strong> Diseños modernos, arte abstracto, composiciones dinámicas</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="principios-composicion">
                  <h4>🎯 Jerarquía Visual</h4>
                  
                  <div class="jerarquia-elementos">
                    <h5>📍 Establecer Puntos Focales</h5>
                    <ul>
                      <li><strong>Elemento principal:</strong>
                        <ul>
                          <li>Forma más grande o de color más intenso</li>
                          <li>Ubicación central o estratégica</li>
                          <li>Contraste máximo con el fondo</li>
                        </ul>
                      </li>
                      <li><strong>Elementos secundarios:</strong>
                        <ul>
                          <li>Apoyan al elemento principal</li>
                          <li>Tamaño mediano, colores moderados</li>
                          <li>Guían la vista hacia el punto focal</li>
                        </ul>
                      </li>
                      <li><strong>Elementos de apoyo:</strong>
                        <ul>
                          <li>Detalles y decoraciones</li>
                          <li>Tamaño pequeño, colores sutiles</li>
                          <li>Completan la composición sin distraer</li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div class="herramientas-jerarquia">
                    <h5>🛠️ Herramientas para Crear Jerarquía</h5>
                    <div class="herramienta-j">
                      <h6>📏 Tamaño</h6>
                      <p>Elementos más grandes atraen más atención</p>
                      <ul>
                        <li>Forma principal: la más grande</li>
                        <li>Formas secundarias: tamaño medio</li>
                        <li>Detalles: formas pequeñas</li>
                      </ul>
                    </div>

                    <div class="herramienta-j">
                      <h6>🎨 Color</h6>
                      <p>Colores vibrantes destacan sobre colores apagados</p>
                      <ul>
                        <li>Principal: color más intenso o contrastante</li>
                        <li>Secundario: colores moderados</li>
                        <li>Fondo: colores neutros o suaves</li>
                      </ul>
                    </div>

                    <div class="herramienta-j">
                      <h6>📍 Posición</h6>
                      <p>Ubicación estratégica en la composición</p>
                      <ul>
                        <li>Centro: máxima atención</li>
                        <li>Regla de tercios: posiciones de interés</li>
                        <li>Esquinas: elementos secundarios</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="patrones-diseno">
                  <h4>🔄 Patrones y Repetición</h4>
                  
                  <div class="tipos-patrones">
                    <h5>🔁 Repetición Simple</h5>
                    <ul>
                      <li>Repetir la misma forma en diferentes posiciones</li>
                      <li>Mantener tamaño y color consistentes</li>
                      <li>Crear ritmo visual y unidad</li>
                      <li><strong>Ejemplo:</strong> Fila de círculos como decoración</li>
                    </ul>
                  </div>

                  <div class="tipos-patrones">
                    <h5>📐 Repetición con Variación</h5>
                    <ul>
                      <li>Cambiar un aspecto mientras se mantienen otros</li>
                      <li>Variar tamaño, color o rotación</li>
                      <li>Crear interés sin perder unidad</li>
                      <li><strong>Ejemplo:</strong> Círculos del mismo color pero diferentes tamaños</li>
                    </ul>
                  </div>

                  <div class="tipos-patrones">
                    <h5>🌀 Progresión</h5>
                    <ul>
                      <li>Cambio gradual en alguna propiedad</li>
                      <li>Tamaño creciente/decreciente</li>
                      <li>Transición de color</li>
                      <li><strong>Ejemplo:</strong> Círculos que van de pequeño a grande</li>
                    </ul>
                  </div>
                </div>

                <div class="reglas-composicion">
                  <h4>📏 Reglas de Composición Clásicas</h4>
                  
                  <div class="regla">
                    <h5>1️⃣ Regla de los Tercios</h5>
                    <ul>
                      <li>Dividir el lienzo en 9 partes iguales (3x3)</li>
                      <li>Colocar elementos importantes en las intersecciones</li>
                      <li>Crear composiciones más dinámicas que centradas</li>
                      <li><strong>En Paint:</strong> Usar guías visuales imaginarias</li>
                    </ul>
                  </div>

                  <div class="regla">
                    <h5>2️⃣ Números Impares</h5>
                    <ul>
                      <li>Grupos de 3, 5, 7 elementos son más atractivos</li>
                      <li>Números pares pueden sentirse estáticos</li>
                      <li>El ojo humano prefiere la asimetría sutil</li>
                      <li><strong>Aplicación:</strong> Crear grupos de formas en números impares</li>
                    </ul>
                  </div>

                  <div class="regla">
                    <h5>3️⃣ Espacio Negativo</h5>
                    <ul>
                      <li>El espacio vacío es tan importante como las formas</li>
                      <li>Permite "respirar" al diseño</li>
                      <li>Mejora la legibilidad y claridad</li>
                      <li><strong>Consejo:</strong> No llenar todo el espacio disponible</li>
                    </ul>
                  </div>
                </div>

                <div class="proyectos-practica">
                  <h4>🎨 Proyectos de Práctica</h4>
                  
                  <div class="proyecto">
                    <h5>🏠 Proyecto 1: Casa Simple</h5>
                    <ul>
                      <li><strong>Objetivo:</strong> Combinar formas básicas</li>
                      <li><strong>Formas necesarias:</strong> Rectángulos (paredes), triángulo (techo), círculo (sol), líneas (detalles)</li>
                      <li><strong>Conceptos aplicados:</strong> Jerarquía (casa principal, sol secundario), balance</li>
                    </ul>
                  </div>

                  <div class="proyecto">
                    <h5>🎭 Proyecto 2: Patrón Decorativo</h5>
                    <ul>
                      <li><strong>Objetivo:</strong> Crear patrones con repetición</li>
                      <li><strong>Formas sugeridas:</strong> Círculos, triángulos, líneas</li>
                      <li><strong>Conceptos aplicados:</strong> Repetición, progresión, ritmo visual</li>
                    </ul>
                  </div>

                  <div class="proyecto">
                    <h5>🎯 Proyecto 3: Logo Simple</h5>
                    <ul>
                      <li><strong>Objetivo:</strong> Diseño equilibrado y memorable</li>
                      <li><strong>Restricciones:</strong> Máximo 3 formas, 2 colores</li>
                      <li><strong>Conceptos aplicados:</strong> Simplicidad, balance, jerarquía</li>
                    </ul>
                  </div>
                </div>

                <div class="consejos-composicion">
                  <h4>💡 Consejos Avanzados</h4>
                  
                  <div class="consejo-avanzado">
                    <h5>🔍 Evaluar tu Composición</h5>
                    <ul>
                      <li><strong>Prueba del entrecerrar:</strong> Entrecierra los ojos para ver el balance general</li>
                      <li><strong>Regla del alejamiento:</strong> Aleja la vista para evaluar la composición total</li>
                      <li><strong>Pregunta clave:</strong> ¿Qué es lo primero que ves?</li>
                    </ul>
                  </div>

                  <div class="consejo-avanzado">
                    <h5>🎨 Experimentación Controlada</h5>
                    <ul>
                      <li>Cambiar un elemento a la vez</li>
                      <li>Comparar versiones antes/después</li>
                      <li>No tener miedo de empezar de nuevo</li>
                    </ul>
                  </div>

                  <div class="consejo-avanzado">
                    <h5>📚 Aprender de Referencias</h5>
                    <ul>
                      <li>Estudiar logos y diseños exitosos</li>
                      <li>Analizar por qué funcionan</li>
                      <li>Adaptar principios, no copiar exactamente</li>
                    </ul>
                  </div>
                </div>
              </div>
            `,
            multimedia: {
              imagen: '/images/teoria/composicion-formas.png',
              video: '/videos/teoria/principios-composicion.mp4'
            },
            actividades: [
              'Crear una composición simétrica usando solo rectángulos y círculos',
              'Diseñar una composición asimétrica pero balanceada',
              'Crear un patrón decorativo usando repetición con variación',
              'Aplicar la regla de los tercios en un diseño simple'
            ]
          },
          {
            id: 4,
            titulo: "Proyectos Prácticos con Formas",
            contenido: `
              <div class="seccion-contenido">
                <h3>🚀 Proyectos Guiados Paso a Paso</h3>
                
                <div class="intro-proyectos">
                  <h4>🎯 Objetivo de los Proyectos</h4>
                  <p>Estos proyectos te permitirán aplicar todo lo aprendido sobre formas en Paint, desde herramientas básicas hasta principios de composición avanzados. Cada proyecto está diseñado para enseñar habilidades específicas mientras creas algo útil y atractivo.</p>
                </div>

                <div class="proyecto-completo">
                  <h4>🏠 Proyecto 1: Casa Geométrica Completa</h4>
                  
                  <div class="proyecto-info">
                    <h5>📋 Información del Proyecto</h5>
                    <ul>
                      <li><strong>Duración estimada:</strong> 15-20 minutos</li>
                      <li><strong>Dificultad:</strong> Principiante</li>
                      <li><strong>Herramientas principales:</strong> Rectángulo, triángulo, círculo, línea</li>
                      <li><strong>Conceptos aplicados:</strong> Composición, jerarquía, balance</li>
                    </ul>
                  </div>

                  <div class="pasos-proyecto">
                    <h5>👣 Pasos Detallados</h5>
                    
                    <div class="paso">
                      <h6>Paso 1: Preparación del Lienzo</h6>
                      <ol>
                        <li>Abrir Paint y crear un lienzo nuevo</li>
                        <li>Configurar tamaño: 800x600 píxeles (recomendado)</li>
                        <li>Activar la cuadrícula para mayor precisión</li>
                        <li>Seleccionar zoom 100% para trabajar cómodamente</li>
                      </ol>
                    </div>

                    <div class="paso">
                      <h6>Paso 2: Estructura Principal (Paredes)</h6>
                      <ol>
                        <li>Seleccionar herramienta Rectángulo</li>
                        <li>Elegir estilo "Solo contorno" inicialmente</li>
                        <li>Dibujar rectángulo principal (base de la casa) en el centro-inferior</li>
                        <li>Dibujar rectángulo más pequeño (segunda planta) encima</li>
                        <li>Asegurar alineación central usando la cuadrícula</li>
                      </ol>
                    </div>

                    <div class="paso">
                      <h6>Paso 3: Techo Triangular</h6>
                      <ol>
                        <li>Seleccionar herramienta Polígono</li>
                        <li>Crear triángulo sobre la estructura principal</li>
                        <li>Hacer que el triángulo sea ligeramente más ancho que la base</li>
                        <li>Centrar perfectamente sobre las paredes</li>
                      </ol>
                    </div>

                    <div class="paso">
                      <h6>Paso 4: Elementos Arquitectónicos</h6>
                      <ol>
                        <li><strong>Puerta:</strong> Rectángulo vertical en el centro de la planta baja</li>
                        <li><strong>Ventanas:</strong> Rectángulos pequeños simétricos a cada lado</li>
                        <li><strong>Ventana superior:</strong> Rectángulo en la segunda planta</li>
                        <li>Mantener proporciones realistas</li>
                      </ol>
                    </div>

                    <div class="paso">
                      <h6>Paso 5: Detalles y Decoración</h6>
                      <ol>
                        <li><strong>Chimenea:</strong> Rectángulo pequeño en el techo</li>
                        <li><strong>Camino:</strong> Rectángulos consecutivos desde la puerta</li>
                        <li><strong>Marcos de ventana:</strong> Líneas internas en las ventanas</li>
                        <li><strong>Manilla de puerta:</strong> Círculo pequeño</li>
                      </ol>
                    </div>

                    <div class="paso">
                      <h6>Paso 6: Entorno</h6>
                      <ol>
                        <li><strong>Sol:</strong> Círculo en la esquina superior</li>
                        <li><strong>Rayos:</strong> Líneas radiando desde el sol</li>
                        <li><strong>Nubes:</strong> Círculos superpuestos</li>
                        <li><strong>Césped:</strong> Línea de base verde</li>
                      </ol>
                    </div>

                    <div class="paso">
                      <h6>Paso 7: Color y Acabado</h6>
                      <ol>
                        <li>Cambiar a estilos con relleno</li>
                        <li><strong>Casa:</strong> Colores cálidos (beige, marrón)</li>
                        <li><strong>Techo:</strong> Color contrastante (rojo, azul)</li>
                        <li><strong>Entorno:</strong> Colores naturales (azul cielo, verde césped)</li>
                        <li>Usar herramienta de relleno para áreas grandes</li>
                      </ol>
                    </div>
                  </div>

                  <div class="consejos-proyecto">
                    <h5>💡 Consejos Específicos</h5>
                    <ul>
                      <li><strong>Proporciones:</strong> La puerta debe ser más alta que ancha</li>
                      <li><strong>Simetría:</strong> Usar Ctrl+C y Ctrl+V para elementos idénticos</li>
                      <li><strong>Colores:</strong> No más de 4-5 colores principales</li>
                      <li><strong>Detalles:</strong> Menos es más - no sobrecargar</li>
                    </ul>
                  </div>
                </div>

                <div class="proyecto-completo">
                  <h4>🎨 Proyecto 2: Patrón Geométrico Decorativo</h4>
                  
                  <div class="proyecto-info">
                    <h5>📋 Información del Proyecto</h5>
                    <ul>
                      <li><strong>Duración estimada:</strong> 20-25 minutos</li>
                      <li><strong>Dificultad:</strong> Intermedio</li>
                      <li><strong>Herramientas principales:</strong> Círculo, rectángulo, selección</li>
                      <li><strong>Conceptos aplicados:</strong> Repetición, ritmo, simetría</li>
                    </ul>
                  </div>

                  <div class="pasos-proyecto">
                    <h5>👣 Pasos Detallados</h5>
                    
                    <div class="paso">
                      <h6>Paso 1: Planificación del Patrón</h6>
                      <ol>
                        <li>Crear lienzo cuadrado 600x600 píxeles</li>
                        <li>Activar cuadrícula para precisión</li>
                        <li>Planificar unidad básica del patrón (elemento que se repite)</li>
                        <li>Decidir esquema de colores (máximo 3 colores)</li>
                      </ol>
                    </div>

                    <div class="paso">
                      <h6>Paso 2: Crear Unidad Básica</h6>
                      <ol>
                        <li>En una esquina, crear la forma principal (círculo grande)</li>
                        <li>Agregar forma secundaria (rectángulo pequeño)</li>
                        <li>Añadir elemento decorativo (círculo pequeño)</li>
                        <li>Mantener composición equilibrada en espacio pequeño</li>
                      </ol>
                    </div>

                    <div class="paso">
                      <h6>Paso 3: Primera Repetición Horizontal</h6>
                      <ol>
                        <li>Seleccionar toda la unidad básica</li>
                        <li>Copiar (Ctrl+C) y pegar (Ctrl+V)</li>
                        <li>Posicionar exactamente al lado de la original</li>
                        <li>Repetir hasta completar fila horizontal</li>
                      </ol>
                    </div>

                    <div class="paso">
                      <h6>Paso 4: Repetición Vertical</h6>
                      <ol>
                        <li>Seleccionar toda la fila horizontal</li>
                        <li>Copiar y pegar</li>
                        <li>Posicionar debajo de la fila original</li>
                        <li>Repetir hasta llenar el lienzo</li>
                      </ol>
                    </div>

                    <div class="paso">
                      <h6>Paso 5: Variaciones y Ajustes</h6>
                      <ol>
                        <li><strong>Variación de color:</strong> Cambiar colores en filas alternas</li>
                        <li><strong>Variación de tamaño:</strong> Hacer algunos elementos más grandes/pequeños</li>
                        <li><strong>Rotación:</strong> Rotar algunas unidades 90° o 180°</li>
                        <li>Mantener coherencia general</li>
                      </ol>
                    </div>
                  </div>
                </div>

                <div class="proyecto-completo">
                  <h4>🎯 Proyecto 3: Logo Personal Simple</h4>
                  
                  <div class="proyecto-info">
                    <h5>📋 Información del Proyecto</h5>
                    <ul>
                      <li><strong>Duración estimada:</strong> 30-40 minutos</li>
                      <li><strong>Dificultad:</strong> Intermedio-Avanzado</li>
                      <li><strong>Herramientas principales:</strong> Todas las formas, texto</li>
                      <li><strong>Conceptos aplicados:</strong> Simplicidad, memorabilidad, escalabilidad</li>
                    </ul>
                  </div>

                  <div class="pasos-proyecto">
                    <h5>👣 Pasos Detallados</h5>
                    
                    <div class="paso">
                      <h6>Paso 1: Concepto y Brainstorming</h6>
                      <ol>
                        <li>Definir qué representa el logo (iniciales, hobby, profesión)</li>
                        <li>Listar 3-5 palabras clave que describan la personalidad</li>
                        <li>Elegir máximo 2 colores principales</li>
                        <li>Decidir entre estilo moderno, clásico, divertido, etc.</li>
                      </ol>
                    </div>

                    <div class="paso">
                      <h6>Paso 2: Boceto Digital</h6>
                      <ol>
                        <li>Crear lienzo cuadrado 400x400 píxeles</li>
                        <li>Probar diferentes combinaciones de formas básicas</li>
                        <li>Experimentar con disposiciones: horizontal, vertical, circular</li>
                        <li>Mantener simplicidad - máximo 3 elementos principales</li>
                      </ol>
                    </div>

                    <div class="paso">
                      <h6>Paso 3: Construcción del Símbolo</h6>
                      <ol>
                        <li>Crear forma principal que represente el concepto</li>
                        <li>Agregar elementos de apoyo si es necesario</li>
                        <li>Asegurar que funcione en tamaño pequeño</li>
                        <li>Verificar que sea único y reconocible</li>
                      </ol>
                    </div>

                    <div class="paso">
                      <h6>Paso 4: Integración de Texto (opcional)</h6>
                      <ol>
                        <li>Si incluye iniciales o nombre, usar herramienta de texto</li>
                        <li>Elegir tipografía simple y legible</li>
                        <li>Balancear símbolo y texto</li>
                        <li>Considerar versión solo símbolo</li>
                      </ol>
                    </div>

                    <div class="paso">
                      <h6>Paso 5: Refinamiento Final</h6>
                      <ol>
                        <li>Ajustar proporciones finales</li>
                        <li>Verificar legibilidad en diferentes tamaños</li>
                        <li>Asegurar cohesión de colores</li>
                        <li>Crear versiones en blanco y negro</li>
                      </ol>
                    </div>
                  </div>

                  <div class="criterios-logo">
                    <h5>✅ Criterios de un Buen Logo</h5>
                    <ul>
                      <li><strong>Simple:</strong> Fácil de entender de un vistazo</li>
                      <li><strong>Memorable:</strong> Se queda en la memoria</li>
                      <li><strong>Escalable:</strong> Funciona grande y pequeño</li>
                      <li><strong>Apropiado:</strong> Refleja la personalidad deseada</li>
                      <li><strong>Atemporal:</strong> No depende de modas pasajeras</li>
                    </ul>
                  </div>
                </div>

                <div class="ejercicios-adicionales">
                  <h4>🏃‍♂️ Ejercicios de Práctica Rápida</h4>
                  
                  <div class="ejercicio-rapido">
                    <h5>⚡ Ejercicio 1: Interpretación Geométrica (5 min)</h5>
                    <p>Recrear objetos cotidianos usando solo formas básicas:</p>
                    <ul>
                      <li>🚗 Auto: Rectángulos + círculos</li>
                      <li>🌳 Árbol: Rectángulo + círculo</li>
                      <li>👤 Persona: Círculo + rectángulos</li>
                      <li>🏢 Edificio: Solo rectángulos</li>
                    </ul>
                  </div>

                  <div class="ejercicio-rapido">
                    <h5>⚡ Ejercicio 2: Composición Express (10 min)</h5>
                    <p>Crear composiciones siguiendo restricciones específicas:</p>
                    <ul>
                      <li><strong>Solo círculos:</strong> Crear interés solo con tamaño y posición</li>
                      <li><strong>Solo 2 colores:</strong> Máximo contraste posible</li>
                      <li><strong>Solo líneas:</strong> Crear formas complejas con líneas simples</li>
                      <li><strong>Patrón en 3x3:</strong> Llenar grilla de 9 espacios</li>
                    </ul>
                  </div>

                  <div class="ejercicio-rapido">
                    <h5>⚡ Ejercicio 3: Transformación Progresiva (15 min)</h5>
                    <p>Crear secuencia de transformación de una forma a otra:</p>
                    <ol>
                      <li>Empezar con círculo simple</li>
                      <li>En 5 pasos, transformar gradualmente a cuadrado</li>
                      <li>Cada paso debe ser visualmente lógico</li>
                      <li>Crear sensación de movimento o animación</li>
                    </ol>
                  </div>
                </div>

                <div class="evaluacion-proyectos">
                  <h4>📊 Evaluación y Mejora</h4>
                  
                  <div class="criterios-evaluacion">
                    <h5>✓ Lista de Verificación</h5>
                    <ul>
                      <li>□ ¿Las formas están bien alineadas?</li>
                      <li>□ ¿Los colores son armoniosos?</li>
                      <li>□ ¿Hay un punto focal claro?</li>
                      <li>□ ¿La composición está balanceada?</li>
                      <li>□ ¿Se entiende el mensaje o concepto?</li>
                      <li>□ ¿Funciona en diferentes tamaños?</li>
                    </ul>
                  </div>

                  <div class="preguntas-reflexion">
                    <h5>🤔 Preguntas de Reflexión</h5>
                    <ul>
                      <li>¿Qué aprendiste sobre el uso de formas básicas?</li>
                      <li>¿Cuál fue el mayor desafío en la composición?</li>
                      <li>¿Cómo podrías mejorar el diseño?</li>
                      <li>¿Qué principio de diseño fue más útil?</li>
                    </ul>
                  </div>
                </div>
              </div>
            `,
            multimedia: {
              imagen: '/images/teoria/proyectos-formas-paint.png',
              video: '/videos/teoria/proyectos-paso-paso.mp4'
            },
            actividades: [
              'Completar el proyecto de la casa geométrica siguiendo todos los pasos',
              'Crear un patrón decorativo original usando al menos 3 formas diferentes',
              'Diseñar un logo personal simple aplicando principios de composición',
              'Realizar al menos 2 ejercicios de práctica rápida'
            ]
          }
        ],
        recursos: {
          documentos: [
            {
              titulo: "Guía de Formas Geométricas en Paint",
              tipo: "PDF",
              url: "/recursos/paint/guia-formas-paint.pdf"
            },
            {
              titulo: "Plantillas de Ejercicios de Composición",
              tipo: "ZIP",
              url: "/recursos/paint/plantillas-composicion.zip"
            },
            {
              titulo: "Principios de Diseño Visual - Referencia Rápida",
              tipo: "PDF",
              url: "/recursos/paint/principios-diseno-referencia.pdf"
            },
            {
              titulo: "Galería de Proyectos de Ejemplo",
              tipo: "PDF",
              url: "/recursos/paint/galeria-proyectos-formas.pdf"
            }
          ],
          videos: [
            {
              titulo: "Masterclass: Composición con Formas Básicas",
              duracion: "18 min",
              url: "/videos/masterclass-composicion-formas.mp4"
            },
            {
              titulo: "Técnicas Avanzadas de Relleno",
              duracion: "12 min",
              url: "/videos/tecnicas-relleno-avanzadas.mp4"
            },
            {
              titulo: "Creación de Patrones Geométricos",
              duracion: "15 min",
              url: "/videos/patrones-geometricos-paint.mp4"
            }
          ],
          enlaces: [
            {
              titulo: "Teoría del Color para Principiantes",
              url: "https://color.adobe.com/explore"
            },
            {
              titulo: "Inspiración: Diseños Geométricos",
              url: "https://www.pinterest.com/search/pins/?q=geometric%20design"
            },
            {
              titulo: "Principios de Composición Visual",
              url: "https://www.canva.com/learn/visual-composition/"
            }
          ]
        },
        evaluacion: {
          preRequisitos: ["Tema 1: Introducción a Paint"],
          criterios: [
            "Dominar el uso de todas las herramientas de formas básicas",
            "Aplicar técnicas de relleno y contorno efectivamente",
            "Crear composiciones equilibradas usando principios de diseño",
            "Usar patrones y repetición para crear diseños coherentes",
            "Completar proyectos prácticos con calidad profesional básica",
            "Evaluar y mejorar sus propios diseños usando criterios de diseño"
          ],
          tiempoEstimado: "25 minutos"
        }
      },
      '3': {
        titulo: "Texto y Herramientas de Selección",
        duracion: "18-22 minutos",
        objetivos: [
          "Dominar las herramientas de texto en Paint",
          "Aprender técnicas de selección y recorte",
          "Integrar texto y gráficos efectivamente",
          "Crear documentos visuales profesionales"
        ],
        secciones: [
          {
            id: 1,
            titulo: "Herramientas de Texto",
            contenido: `
              <div class="seccion-contenido">
                <h3>📝 Trabajando con Texto en Paint</h3>
                
                <div class="herramienta-texto">
                  <h4>🔤 Herramienta de Texto Básica</h4>
                  <div class="texto-basico">
                    <h5>Activación y Uso</h5>
                    <ul>
                      <li>Seleccionar herramienta "A" en la barra lateral</li>
                      <li>Hacer clic donde quieres colocar el texto</li>
                      <li>Aparece cuadro de texto editable</li>
                      <li>Escribir el contenido deseado</li>
                      <li>Hacer clic fuera para finalizar</li>
                    </ul>

                    <h5>⚙️ Propiedades del Texto</h5>
                    <ul>
                      <li><strong>Fuente:</strong> Arial, Times New Roman, Comic Sans, etc.</li>
                      <li><strong>Tamaño:</strong> Rango de 8pt a 72pt</li>
                      <li><strong>Estilo:</strong> Normal, Negrita, Cursiva, Subrayado</li>
                      <li><strong>Color:</strong> Usa color primario seleccionado</li>
                      <li><strong>Fondo:</strong> Transparente u opaco</li>
                    </ul>

                    <h5>💡 Consejos para Texto Efectivo</h5>
                    <ul>
                      <li><strong>Legibilidad:</strong> Alto contraste con el fondo</li>
                      <li><strong>Simplicidad:</strong> Máximo 2 fuentes por diseño</li>
                      <li><strong>Jerarquía:</strong> Tamaños diferentes para importancia</li>
                      <li><strong>Espaciado:</strong> Dejar respiro alrededor del texto</li>
                    </ul>
                  </div>

                  <div class="texto-decorativo">
                    <h4>🎨 Técnicas Decorativas</h4>
                    <ul>
                      <li><strong>Contorno:</strong> Texto con borde usando colores contrastantes</li>
                      <li><strong>Sombra:</strong> Duplicar texto y desplazar ligeramente</li>
                      <li><strong>Relleno:</strong> Texto sólido sobre fondo transparente</li>
                      <li><strong>Integración:</strong> Combinar con formas geométricas</li>
                    </ul>
                  </div>
                </div>
              </div>
            `,
            multimedia: {
              imagen: '/images/teoria/texto-paint.png',
              video: '/videos/teoria/texto-basico.mp4'
            },
            actividades: [
              'Crear textos con diferentes fuentes y tamaños',
              'Experimentar con texto transparente y opaco',
              'Aplicar estilos: negrita, cursiva, subrayado'
            ]
          },
          {
            id: 2,
            titulo: "Herramientas de Selección",
            contenido: `
              <div class="seccion-contenido">
                <h3>✂️ Selección y Recorte</h3>
                
                <div class="tipos-seleccion">
                  <h4>🔲 Selección Rectangular</h4>
                  <ul>
                    <li><strong>Uso:</strong> Seleccionar áreas rectangulares</li>
                    <li><strong>Técnica:</strong> Arrastrar esquina a esquina</li>
                    <li><strong>Aplicación:</strong> Recortar, mover elementos</li>
                  </ul>

                  <h4>⭕ Selección Libre</h4>
                  <ul>
                    <li><strong>Uso:</strong> Formas irregulares</li>
                    <li><strong>Técnica:</strong> Dibujar contorno manual</li>
                    <li><strong>Aplicación:</strong> Recortes precisos</li>
                  </ul>
                </div>

                <div class="operaciones">
                  <h4>🔄 Operaciones con Selecciones</h4>
                  <ul>
                    <li><strong>Mover:</strong> Arrastrar dentro de selección</li>
                    <li><strong>Copiar:</strong> Ctrl+C para duplicar</li>
                    <li><strong>Cortar:</strong> Ctrl+X para mover</li>
                    <li><strong>Pegar:</strong> Ctrl+V para colocar</li>
                    <li><strong>Redimensionar:</strong> Arrastrar esquinas</li>
                  </ul>

                  <h4>🌈 Opciones de Fondo</h4>
                  <ul>
                    <li><strong>Transparente:</strong> Solo contenido, sin fondo</li>
                    <li><strong>Opaco:</strong> Incluye color de fondo</li>
                    <li><strong>Uso práctico:</strong> Esencial para superposiciones</li>
                  </ul>
                </div>
              </div>
            `,
            multimedia: {
              imagen: '/images/teoria/seleccion-paint.png',
              video: '/videos/teoria/seleccion-tecnicas.mp4'
            },
            actividades: [
              'Practicar selección rectangular y libre',
              'Mover y redimensionar elementos',
              'Usar fondos transparentes y opacos'
            ]
          },
          {
            id: 3,
            titulo: "Integración Texto-Gráficos",
            contenido: `
              <div class="seccion-contenido">
                <h3>🖼️ Combinando Elementos</h3>
                
                <div class="principios">
                  <h4>⚖️ Principios de Integración</h4>
                  <ul>
                    <li><strong>Jerarquía:</strong> Título > Subtítulo > Cuerpo</li>
                    <li><strong>Proximidad:</strong> Agrupar elementos relacionados</li>
                    <li><strong>Contraste:</strong> Destacar lo importante</li>
                    <li><strong>Repetición:</strong> Mantener consistencia</li>
                  </ul>
                </div>

                <div class="layouts">
                  <h4>📐 Diseños Comunes</h4>
                  
                  <h5>🎫 Póster/Cartel</h5>
                  <ul>
                    <li>Título prominente arriba</li>
                    <li>Imagen central dominante</li>
                    <li>Info secundaria abajo</li>
                  </ul>

                  <h5>🏷️ Etiqueta</h5>
                  <ul>
                    <li>Texto breve y directo</li>
                    <li>Forma de fondo definida</li>
                    <li>Alto contraste</li>
                  </ul>
                </div>

                <div class="flujo">
                  <h4>🔄 Flujo de Trabajo</h4>
                  <ol>
                    <li><strong>Planear:</strong> Boceto mental</li>
                    <li><strong>Estructura:</strong> Formas de fondo</li>
                    <li><strong>Texto:</strong> Títulos y contenido</li>
                    <li><strong>Detalles:</strong> Elementos decorativos</li>
                    <li><strong>Refinar:</strong> Ajustar colores/espacios</li>
                  </ol>
                </div>
              </div>
            `,
            multimedia: {
              imagen: '/images/teoria/integracion-paint.png',
              video: '/videos/teoria/diseno-integrado.mp4'
            },
            actividades: [
              'Crear cartel con texto e imagen',
              'Diseñar etiqueta con formas y texto',
              'Aplicar principios de jerarquía'
            ]
          },
          {
            id: 4,
            titulo: "Proyecto Final",
            contenido: `
              <div class="seccion-contenido">
                <h3>🎯 Proyecto Integrador</h3>
                
                <div class="especificaciones">
                  <h4>📋 Especificaciones</h4>
                  <ul>
                    <li><strong>Objetivo:</strong> Póster informativo</li>
                    <li><strong>Tamaño:</strong> 600x800 píxeles</li>
                    <li><strong>Elementos:</strong> Título, imagen, texto</li>
                    <li><strong>Límites:</strong> 4 colores, 2 fuentes</li>
                  </ul>
                </div>

                <div class="pasos">
                  <h4>👣 Pasos del Proyecto</h4>
                  <ol>
                    <li><strong>Concepto:</strong> Elegir tema</li>
                    <li><strong>Layout:</strong> Estructura con formas</li>
                    <li><strong>Contenido:</strong> Agregar textos</li>
                    <li><strong>Visual:</strong> Integrar gráficos</li>
                    <li><strong>Pulir:</strong> Ajustar detalles</li>
                  </ol>
                </div>

                <div class="evaluacion">
                  <h4>✅ Criterios</h4>
                  <ul>
                    <li>□ Legibilidad del texto</li>
                    <li>□ Jerarquía visual clara</li>
                    <li>□ Uso efectivo del color</li>
                    <li>□ Composición equilibrada</li>
                    <li>□ Integración armoniosa</li>
                  </ul>
                </div>
              </div>
            `,
            multimedia: {
              imagen: '/images/teoria/proyecto-final.png',
              video: '/videos/teoria/proyecto-completo.mp4'
            },
            actividades: [
              'Completar proyecto final',
              'Aplicar todos los conceptos',
              'Crear documento visual profesional'
            ]
          }
        ],
        recursos: {
          documentos: [
            {
              titulo: "Guía de Tipografía Básica",
              tipo: "PDF",
              url: "/recursos/paint/tipografia-basica.pdf"
            },
            {
              titulo: "Plantillas de Proyectos",
              tipo: "ZIP",
              url: "/recursos/paint/plantillas.zip"
            }
          ],
          videos: [
            {
              titulo: "Masterclass: Texto y Diseño",
              duracion: "15 min",
              url: "/videos/texto-diseno.mp4"
            }
          ],
          enlaces: [
            {
              titulo: "Google Fonts",
              url: "https://fonts.google.com/"
            }
          ]
        },
        evaluacion: {
          preRequisitos: ["Tema 1: Introducción a Paint", "Tema 2: Formas y Figuras Geométricas"],
          criterios: [
            "Usar herramientas de texto efectivamente",
            "Aplicar técnicas de selección y recorte",
            "Integrar texto y gráficos armoniosamente",
            "Crear documentos con jerarquía clara",
            "Completar proyecto final con calidad profesional"
          ],
          tiempoEstimado: "22 minutos"
        }
      }
    },
    'paint-3d': {
      '1': {
        titulo: "Introducción a Paint 3D",
        duracion: "20-25 minutos",
        objetivos: [
          "Comprender qué es Paint 3D y sus capacidades únicas",
          "Conocer la evolución del diseño 2D al 3D",
          "Familiarizarse con la interfaz y herramientas 3D",
          "Entender conceptos básicos de modelado tridimensional"
        ],
        secciones: [
          {
            id: 1,
            titulo: "¿Qué es Paint 3D?",
            contenido: `
              <h3>🎯 Definición de Paint 3D</h3>
              <p><strong>Microsoft Paint 3D</strong> es la evolución moderna de Paint que permite crear y editar tanto objetos 2D tradicionales como modelos tridimensionales de manera intuitiva.</p>
              
              <h4>Características revolucionarias:</h4>
              <ul>
                <li><strong>Diseño 3D accesible:</strong> Modelado 3D simplificado para todos</li>
                <li><strong>Realidad mixta:</strong> Integración con Windows Mixed Reality</li>
                <li><strong>Herramientas 2D mejoradas:</strong> Todo lo de Paint clásico + más</li>
                <li><strong>Biblioteca de objetos:</strong> Modelos 3D prediseñados</li>
                <li><strong>Texturas y materiales:</strong> Superficies realistas</li>
                <li><strong>Comunidad integrada:</strong> Compartir creaciones fácilmente</li>
              </ul>

              <div class="diferencias-paint-classic">
                <h4>🔄 Paint 3D vs Paint Clásico</h4>
                <table class="comparacion-paint">
                  <tr>
                    <th>Aspecto</th>
                    <th>Paint Clásico</th>
                    <th>Paint 3D</th>
                  </tr>
                  <tr>
                    <td><strong>Dimensiones</strong></td>
                    <td>Solo 2D (plano)</td>
                    <td>2D + 3D (volumen)</td>
                  </tr>
                  <tr>
                    <td><strong>Objetos</strong></td>
                    <td>Formas básicas planas</td>
                    <td>Modelos 3D + formas 2D</td>
                  </tr>
                  <tr>
                    <td><strong>Texturas</strong></td>
                    <td>Colores sólidos</td>
                    <td>Materiales realistas</td>
                  </tr>
                  <tr>
                    <td><strong>Perspectiva</strong></td>
                    <td>Vista única</td>
                    <td>Rotación 360°</td>
                  </tr>
                  <tr>
                    <td><strong>Complejidad</strong></td>
                    <td>Muy simple</td>
                    <td>Moderada</td>
                  </tr>
                  <tr>
                    <td><strong>Resultados</strong></td>
                    <td>Imágenes planas</td>
                    <td>Modelos interactivos</td>
                  </tr>
                </table>
              </div>

              <div class="usos-paint3d">
                <h4>🎨 Usos Principales de Paint 3D</h4>
                <div class="usos-grid">
                  <div class="uso-3d">
                    <h5>🏗️ Modelado 3D Básico</h5>
                    <ul>
                      <li>Crear objetos tridimensionales simples</li>
                      <li>Prototipos y conceptos visuales</li>
                      <li>Decoraciones y elementos gráficos</li>
                    </ul>
                  </div>
                  
                  <div class="uso-3d">
                    <h5>🎓 Educación</h5>
                    <ul>
                      <li>Enseñar conceptos de geometría</li>
                      <li>Visualizar ideas científicas</li>
                      <li>Proyectos escolares creativos</li>
                    </ul>
                  </div>
                  
                  <div class="uso-3d">
                    <h5>🎮 Gaming y VR</h5>
                    <ul>
                      <li>Crear assets simples para juegos</li>
                      <li>Objetos para realidad virtual</li>
                      <li>Elementos para Minecraft</li>
                    </ul>
                  </div>
                  
                  <div class="uso-3d">
                    <h5>🖼️ Arte Digital</h5>
                    <ul>
                      <li>Escenas tridimensionales artísticas</li>
                      <li>Dioramas digitales</li>
                      <li>Composiciones mixtas 2D/3D</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="ventajas-paint3d">
                <h4>✅ Ventajas de Paint 3D</h4>
                <div class="ventajas-grid">
                  <div class="ventaja">
                    <h5>🚀 Accesibilidad</h5>
                    <p>Primer contacto ideal con el modelado 3D sin complejidad técnica</p>
                  </div>
                  <div class="ventaja">
                    <h5>💰 Gratuito</h5>
                    <p>Incluido en Windows 10/11, sin costos adicionales</p>
                  </div>
                  <div class="ventaja">
                    <h5>🔗 Integración</h5>
                    <p>Funciona perfectamente con el ecosistema Microsoft</p>
                  </div>
                  <div class="ventaja">
                    <h5>👥 Comunidad</h5>
                    <p>Remix y compartir creaciones con otros usuarios</p>
                  </div>
                </div>

                <h4>❌ Limitaciones de Paint 3D</h4>
                <ul>
                  <li>No es software profesional de modelado 3D</li>
                  <li>Limitado para animaciones complejas</li>
                  <li>Capacidades de renderizado básicas</li>
                  <li>No suitable para impresión 3D profesional</li>
                  <li>Biblioteca de objetos limitada comparada con software especializado</li>
                </ul>
              </div>

              <div class="cuando-usar-paint3d">
                <h4>🎯 ¿Cuándo Usar Paint 3D?</h4>
                <div class="escenarios">
                  <div class="escenario-si">
                    <h5>✅ Perfecto para:</h5>
                    <ul>
                      <li>Aprender conceptos básicos de 3D</li>
                      <li>Proyectos educativos y escolares</li>
                      <li>Prototipos rápidos de ideas</li>
                      <li>Arte digital experimental</li>
                      <li>Elementos gráficos para presentaciones</li>
                    </ul>
                  </div>
                  
                  <div class="escenario-no">
                    <h5>❌ No recomendado para:</h5>
                    <ul>
                      <li>Modelado 3D profesional</li>
                      <li>Animaciones complejas</li>
                      <li>Arquitectura o ingeniería</li>
                      <li>Producción de videojuegos AAA</li>
                      <li>Impresión 3D de precisión</li>
                    </ul>
                  </div>
                </div>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/paint3d-interfaz.jpg",
              video: "/videos/teoria/introduccion-paint3d.mp4",
              infografia: "/images/teoria/paint3d-vs-paint.png"
            },
            actividades: [
              {
                tipo: "reflexion",
                pregunta: "¿Qué diferencia crees que hay entre crear un dibujo en 2D versus un modelo en 3D?",
                ayuda: "Piensa en cómo cambia la forma de visualizar y manipular objetos"
              }
            ]
          },
          {
            id: 2,
            titulo: "Evolución del Diseño 2D al 3D",
            contenido: `
              <h3>📈 La Revolución del Diseño Tridimensional</h3>
              
              <div class="historia-diseno-3d">
                <h4>🕰️ Historia del Diseño 3D en Computadores</h4>
                
                <div class="timeline-3d">
                  <div class="timeline-item">
                    <h5>1960s - Primeros Experimentos</h5>
                    <ul>
                      <li>Ivan Sutherland crea <strong>Sketchpad</strong></li>
                      <li>Primeros gráficos 3D en computadores</li>
                      <li>Solo para universidades e investigación</li>
                    </ul>
                  </div>
                  
                  <div class="timeline-item">
                    <h5>1970s-1980s - Cine y CAD</h5>
                    <ul>
                      <li>Películas como <strong>Tron</strong> (1982)</li>
                      <li>Software CAD para ingeniería</li>
                      <li>Estaciones de trabajo especializadas</li>
                    </ul>
                  </div>
                  
                  <div class="timeline-item">
                    <h5>1990s - Democratización</h5>
                    <ul>
                      <li><strong>3D Studio</strong> y otros software accesibles</li>
                      <li>PCs con capacidades 3D</li>
                      <li>Videojuegos 3D masivos (Doom, Quake)</li>
                    </ul>
                  </div>
                  
                  <div class="timeline-item">
                    <h5>2000s - Mainstream</h5>
                    <ul>
                      <li>Películas completamente 3D (Toy Story)</li>
                      <li>Software 3D gratuito (Blender)</li>
                      <li>GPUs especializadas en 3D</li>
                    </ul>
                  </div>
                  
                  <div class="timeline-item">
                    <h5>2017 - Paint 3D</h5>
                    <ul>
                      <li>Microsoft lanza Paint 3D</li>
                      <li>3D accesible para usuarios comunes</li>
                      <li>Integración con realidad mixta</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="conceptos-fundamentales">
                <h4>🧩 Conceptos Fundamentales del 3D</h4>
                
                <div class="concepto-3d">
                  <h5>📐 Dimensiones</h5>
                  <div class="dimensiones-explicacion">
                    <div class="dimension">
                      <h6>1️⃣ Línea (1D)</h6>
                      <p>Solo longitud - Una línea recta</p>
                    </div>
                    <div class="dimension">
                      <h6>2️⃣ Plano (2D)</h6>
                      <p>Ancho + Alto - Como una hoja de papel</p>
                    </div>
                    <div class="dimension">
                      <h6>3️⃣ Volumen (3D)</h6>
                      <p>Ancho + Alto + Profundidad - Objetos reales</p>
                    </div>
                  </div>
                </div>

                <div class="concepto-3d">
                  <h5>🗂️ Ejes de Coordenadas</h5>
                  <ul>
                    <li><strong>Eje X:</strong> Izquierda ↔ Derecha (Ancho)</li>
                    <li><strong>Eje Y:</strong> Arriba ↔ Abajo (Alto)</li>
                    <li><strong>Eje Z:</strong> Adelante ↔ Atrás (Profundidad)</li>
                  </ul>
                  <p class="analogia">💡 <strong>Analogía:</strong> Como las coordenadas en una habitación: lado a lado, arriba-abajo, adelante-atrás</p>
                </div>

                <div class="concepto-3d">
                  <h5>👁️ Perspectiva y Punto de Vista</h5>
                  <ul>
                    <li><strong>Cámara virtual:</strong> Desde donde "vemos" el objeto</li>
                    <li><strong>Rotación:</strong> Girar alrededor del objeto</li>
                    <li><strong>Zoom:</strong> Acercarse o alejarse</li>
                    <li><strong>Órbita:</strong> Movimiento circular alrededor</li>
                  </ul>
                </div>
              </div>

              <div class="ventajas-diseno-3d">
                <h4>🚀 Ventajas del Diseño 3D</h4>
                
                <div class="ventaja-3d">
                  <h5>🔍 Visualización Completa</h5>
                  <p>Puedes ver un objeto desde todos los ángulos, como en la realidad</p>
                  <ul>
                    <li>No hay "sorpresas" ocultas</li>
                    <li>Mejor comprensión del diseño</li>
                    <li>Detección temprana de problemas</li>
                  </ul>
                </div>

                <div class="ventaja-3d">
                  <h5>🎯 Realismo</h5>
                  <p>Los objetos 3D se parecen más a como los vemos en la vida real</p>
                  <ul>
                    <li>Sombras naturales</li>
                    <li>Iluminación realista</li>
                    <li>Texturas y materiales</li>
                  </ul>
                </div>

                <div class="ventaja-3d">
                  <h5>🔄 Reutilización</h5>
                  <p>Un modelo 3D puede usarse en múltiples contextos</p>
                  <ul>
                    <li>Diferentes ángulos de vista</li>
                    <li>Animaciones</li>
                    <li>Realidad virtual/aumentada</li>
                    <li>Impresión 3D</li>
                  </ul>
                </div>

                <div class="ventaja-3d">
                  <h5>🎮 Interactividad</h5>
                  <p>Los usuarios pueden manipular e interactuar con los objetos</p>
                  <ul>
                    <li>Rotar y examinar</li>
                    <li>Hacer zoom a detalles</li>
                    <li>Experiencias inmersivas</li>
                  </ul>
                </div>
              </div>

              <div class="desafios-3d">
                <h4>⚠️ Desafíos del Diseño 3D</h4>
                
                <div class="desafio">
                  <h5>🧠 Complejidad Mental</h5>
                  <p>Pensar en 3D requiere habilidades espaciales más desarrolladas</p>
                  <ul>
                    <li>Visualización mental</li>
                    <li>Comprensión de perspectiva</li>
                    <li>Coordinación de múltiples vistas</li>
                  </ul>
                </div>

                <div class="desafio">
                  <h5>⚙️ Complejidad Técnica</h5>
                  <p>Más herramientas y conceptos que aprender</p>
                  <ul>
                    <li>Múltiples ejes de movimiento</li>
                    <li>Cámaras y iluminación</li>
                    <li>Materiales y texturas</li>
                  </ul>
                </div>

                <div class="desafio">
                  <h5>💻 Requisitos de Hardware</h5>
                  <p>El 3D demanda más recursos del computador</p>
                  <ul>
                    <li>Mayor procesamiento</li>
                    <li>Más memoria RAM</li>
                    <li>Tarjeta gráfica dedicada (ideal)</li>
                  </ul>
                </div>
              </div>

              <div class="paint3d-solucion">
                <h4>🎯 Cómo Paint 3D Soluciona estos Desafíos</h4>
                
                <div class="solucion-paint3d">
                  <h5>🎨 Interfaz Simplificada</h5>
                  <ul>
                    <li>Herramientas intuitivas y familiares</li>
                    <li>Transición gradual del 2D al 3D</li>
                    <li>Biblioteca de objetos prediseñados</li>
                  </ul>
                </div>

                <div class="solucion-paint3d">
                  <h5>🚀 Rendimiento Optimizado</h5>
                  <ul>
                    <li>Funciona en hardware modesto</li>
                    <li>Renderizado eficiente</li>
                    <li>No requiere tarjeta gráfica profesional</li>
                  </ul>
                </div>

                <div class="solucion-paint3d">
                  <h5>📚 Aprendizaje Progresivo</h5>
                  <ul>
                    <li>Comenzar con objetos básicos</li>
                    <li>Tutoriales integrados</li>
                    <li>Ejemplos y plantillas</li>
                  </ul>
                </div>
              </div>

              <div class="aplicaciones-modernas">
                <h4>🌟 Aplicaciones Modernas del 3D</h4>
                <div class="aplicaciones-grid">
                  <div class="aplicacion">
                    <h5>🏗️ Arquitectura</h5>
                    <p>Visualización de edificios antes de construir</p>
                  </div>
                  <div class="aplicacion">
                    <h5>🚗 Diseño Industrial</h5>
                    <p>Prototipos de productos y vehículos</p>
                  </div>
                  <div class="aplicacion">
                    <h5>🎬 Entretenimiento</h5>
                    <p>Películas, videojuegos, efectos especiales</p>
                  </div>
                  <div class="aplicacion">
                    <h5>🏥 Medicina</h5>
                    <p>Visualización de órganos y planificación quirúrgica</p>
                  </div>
                  <div class="aplicacion">
                    <h5>🎓 Educación</h5>
                    <p>Modelos interactivos para enseñanza</p>
                  </div>
                  <div class="aplicacion">
                    <h5>🔧 Manufactura</h5>
                    <p>Impresión 3D y prototipado rápido</p>
                  </div>
                </div>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/evolucion-2d-3d.jpg",
              video: "/videos/teoria/historia-diseno-3d.mp4",
              infografia: "/images/teoria/conceptos-3d.png"
            },
            actividades: [
              {
                tipo: "observacion",
                pregunta: "Observa objetos cotidianos a tu alrededor. ¿Cómo describirías su forma en términos de 3D (ancho, alto, profundidad)?",
                ayuda: "Mira una taza, libro, teléfono, etc. y piensa en sus dimensiones"
              },
              {
                tipo: "investigacion",
                pregunta: "Busca ejemplos de cómo se usa el diseño 3D en tu área de interés (medicina, arquitectura, videojuegos, etc.)",
                ayuda: "Explora aplicaciones específicas que te resulten interesantes"
              }
            ]
          },
          {
            id: 3,
            titulo: "Interfaz y Herramientas 3D",
            contenido: `
              <h3>🔧 Explorando la Interfaz de Paint 3D</h3>

              <div class="interfaz-paint3d">
                <h4>🖥️ Elementos de la Interfaz</h4>
                
                <div class="area-interfaz-3d">
                  <h5>🎨 Lienzo 3D</h5>
                  <ul>
                    <li><strong>Espacio de trabajo:</strong> Área donde se crean y manipulan objetos</li>
                    <li><strong>Navegación 3D:</strong> Rotar, hacer zoom, desplazar vista</li>
                    <li><strong>Plano de base:</strong> Superficie de referencia (suelo virtual)</li>
                    <li><strong>Ejes de referencia:</strong> Líneas que muestran orientación X, Y, Z</li>
                  </ul>
                </div>

                <div class="area-interfaz-3d">
                  <h5>🧭 Controles de Cámara</h5>
                  <div class="controles-camara">
                    <div class="control">
                      <h6>🔄 Órbita</h6>
                      <p>Girar alrededor del objeto</p>
                      <p><strong>Acción:</strong> Clic + arrastrar en área vacía</p>
                    </div>
                    <div class="control">
                      <h6>🔍 Zoom</h6>
                      <p>Acercar o alejar la vista</p>
                      <p><strong>Acción:</strong> Rueda del mouse o gesto de pellizco</p>
                    </div>
                    <div class="control">
                      <h6>↔️ Desplazamiento</h6>
                      <p>Mover la vista sin rotar</p>
                      <p><strong>Acción:</strong> Ctrl + arrastrar o botón central del mouse</p>
                    </div>
                  </div>
                </div>

                <div class="area-interfaz-3d">
                  <h5>📋 Menú Principal</h5>
                  <div class="menu-tabs">
                    <div class="tab-menu">
                      <h6>🎨 Pinceles</h6>
                      <ul>
                        <li>Herramientas de dibujo 2D tradicionales</li>
                        <li>Pincel, marcador, óleo, acuarela</li>
                        <li>Dibujo directo sobre objetos 3D</li>
                      </ul>
                    </div>
                    <div class="tab-menu">
                      <h6>📐 Formas 2D</h6>
                      <ul>
                        <li>Círculos, rectángulos, triángulos</li>
                        <li>Líneas y curvas</li>
                        <li>Se pueden convertir a 3D</li>
                      </ul>
                    </div>
                    <div class="tab-menu">
                      <h6>🧊 Objetos 3D</h6>
                      <ul>
                        <li>Formas básicas: cubo, esfera, cilindro</li>
                        <li>Modelos prediseñados</li>
                        <li>Biblioteca de objetos descargables</li>
                      </ul>
                    </div>
                    <div class="tab-menu">
                      <h6>✂️ Adhesivos</h6>
                      <ul>
                        <li>Texturas e imágenes prediseñadas</li>
                        <li>Aplicar sobre superficies 3D</li>
                        <li>Personalización con imágenes propias</li>
                      </ul>
                    </div>
                    <div class="tab-menu">
                      <h6>📝 Texto</h6>
                      <ul>
                        <li>Texto 2D plano</li>
                        <li>Texto 3D extruido</li>
                        <li>Fuentes y estilos personalizables</li>
                      </ul>
                    </div>
                    <div class="tab-menu">
                      <h6>🎭 Efectos</h6>
                      <ul>
                        <li>Iluminación y ambiente</li>
                        <li>Filtros de imagen</li>
                        <li>Efectos especiales</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="herramientas-3d-detalle">
                <h4>🛠️ Herramientas 3D Principales</h4>
                
                <div class="categoria-3d">
                  <h5>🧊 Objetos 3D Básicos</h5>
                  
                  <div class="objeto-3d">
                    <h6>📦 Cubo</h6>
                    <ul>
                      <li><strong>Uso:</strong> Edificios, cajas, elementos arquitectónicos</li>
                      <li><strong>Modificaciones:</strong> Cambiar dimensiones independientes</li>
                      <li><strong>Consejo:</strong> Base perfecta para muchos objetos complejos</li>
                    </ul>
                  </div>

                  <div class="objeto-3d">
                    <h6>⚪ Esfera</h6>
                    <ul>
                      <li><strong>Uso:</strong> Pelotas, planetas, elementos orgánicos</li>
                      <li><strong>Modificaciones:</strong> Radio, aplanamiento</li>
                      <li><strong>Consejo:</strong> Ideal para formas suaves y naturales</li>
                    </ul>
                  </div>

                  <div class="objeto-3d">
                    <h6>🥤 Cilindro</h6>
                    <ul>
                      <li><strong>Uso:</strong> Columnas, vasos, ruedas, tuberías</li>
                      <li><strong>Modificaciones:</strong> Altura, radio superior e inferior</li>
                      <li><strong>Variante:</strong> Cono (radio superior = 0)</li>
                    </ul>
                  </div>

                  <div class="objeto-3d">
                    <h6>🔺 Pirámide</h6>
                    <ul>
                      <li><strong>Uso:</strong> Techos, montañas, elementos decorativos</li>
                      <li><strong>Modificaciones:</strong> Base y altura</li>
                      <li><strong>Variantes:</strong> Triangular, cuadrada, hexagonal</li>
                    </ul>
                  </div>
                </div>

                <div class="categoria-3d">
                  <h5>🔧 Herramientas de Manipulación</h5>
                  
                  <div class="herramienta-3d">
                    <h6>↔️ Mover</h6>
                    <p><strong>Función:</strong> Cambiar posición del objeto en el espacio</p>
                    <ul>
                      <li>Flechas de colores para cada eje (X=rojo, Y=verde, Z=azul)</li>
                      <li>Arrastrar el objeto libremente</li>
                      <li>Posicionamiento preciso</li>
                    </ul>
                  </div>

                  <div class="herramienta-3d">
                    <h6>🔄 Rotar</h6>
                    <p><strong>Función:</strong> Cambiar orientación del objeto</p>
                    <ul>
                      <li>Anillos de colores para rotación en cada eje</li>
                      <li>Rotación libre en cualquier dirección</li>
                      <li>Ángulos específicos con teclas modificadoras</li>
                    </ul>
                  </div>

                  <div class="herramienta-3d">
                    <h6>📏 Escalar</h6>
                    <p><strong>Función:</strong> Cambiar tamaño del objeto</p>
                    <ul>
                      <li>Escalado uniforme (mantiene proporciones)</li>
                      <li>Escalado por eje individual</li>
                      <li>Esquinas para escalado proporcional</li>
                    </ul>
                  </div>

                  <div class="herramienta-3d">
                    <h6>🎨 Pintar</h6>
                    <p><strong>Función:</strong> Aplicar colores y texturas a superficies 3D</p>
                    <ul>
                      <li>Pintar directamente sobre el modelo</li>
                      <li>Diferentes pinceles y efectos</li>
                      <li>Texturas realistas</li>
                    </ul>
                  </div>
                </div>

                <div class="categoria-3d">
                  <h5>🎭 Materiales y Texturas</h5>
                  
                  <div class="material-tipo">
                    <h6>🎨 Colores Sólidos</h6>
                    <p>Colores planos sin textura, ideales para objetos simples</p>
                  </div>

                  <div class="material-tipo">
                    <h6>✨ Materiales Especiales</h6>
                    <ul>
                      <li><strong>Metal:</strong> Superficies reflectantes</li>
                      <li><strong>Madera:</strong> Texturas naturales</li>
                      <li><strong>Tela:</strong> Superficies suaves</li>
                      <li><strong>Vidrio:</strong> Transparencias</li>
                    </ul>
                  </div>

                  <div class="material-tipo">
                    <h6>🖼️ Texturas Personalizadas</h6>
                    <p>Usar imágenes propias como texturas</p>
                    <ul>
                      <li>Importar fotos</li>
                      <li>Patrones repetitivos</li>
                      <li>Mapeo automático en superficies</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="biblioteca-objetos">
                <h4>📚 Biblioteca de Objetos 3D</h4>
                
                <div class="categorias-biblioteca">
                  <h5>🏠 Categorías Disponibles</h5>
                  
                  <div class="categoria-objetos">
                    <h6>👥 Personas y Animales</h6>
                    <p>Modelos de personas, mascotas, animales salvajes</p>
                  </div>

                  <div class="categoria-objetos">
                    <h6>🏢 Edificios y Arquitectura</h6>
                    <p>Casas, edificios, monumentos, elementos arquitectónicos</p>
                  </div>

                  <div class="categoria-objetos">
                    <h6>🚗 Vehículos</h6>
                    <p>Autos, aviones, barcos, bicicletas</p>
                  </div>

                  <div class="categoria-objetos">
                    <h6>🌿 Naturaleza</h6>
                    <p>Árboles, flores, rocas, elementos naturales</p>
                  </div>

                  <div class="categoria-objetos">
                    <h6>🎮 Gaming</h6>
                    <p>Objetos especiales para Minecraft y otros juegos</p>
                  </div>
                </div>

                <div class="uso-biblioteca">
                  <h5>📥 Cómo Usar la Biblioteca</h5>
                  <ul>
                    <li><strong>Navegar:</strong> Explorar categorías y modelos</li>
                    <li><strong>Buscar:</strong> Encontrar objetos específicos</li>
                    <li><strong>Insertar:</strong> Añadir al proyecto con un clic</li>
                    <li><strong>Personalizar:</strong> Modificar colores, tamaños, posición</li>
                    <li><strong>Combinar:</strong> Crear escenas con múltiples objetos</li>
                  </ul>
                </div>
              </div>

              <div class="consejos-navegacion">
                <h4>💡 Consejos para Navegación 3D</h4>
                
                <div class="consejo-nav">
                  <h5>🎯 Para Principiantes</h5>
                  <ul>
                    <li><strong>Practica la navegación:</strong> Dedica tiempo a moverte por el espacio 3D</li>
                    <li><strong>Usa vistas predefinidas:</strong> Frontal, lateral, superior</li>
                    <li><strong>Centro de enfoque:</strong> Haz clic en objetos para centrar la vista</li>
                  </ul>
                </div>

                <div class="consejo-nav">
                  <h5>⚡ Atajos Útiles</h5>
                  <ul>
                    <li><strong>Ctrl + Z:</strong> Deshacer acción</li>
                    <li><strong>Ctrl + Rueda:</strong> Zoom rápido</li>
                    <li><strong>Shift + arrastrar:</strong> Movimiento constrained</li>
                    <li><strong>Alt + arrastrar:</strong> Duplicar objeto</li>
                  </ul>
                </div>

                <div class="consejo-nav">
                  <h5>🔧 Organización</h5>
                  <ul>
                    <li><strong>Agrupa objetos:</strong> Seleccionar múltiples elementos</li>
                    <li><strong>Nombra tus modelos:</strong> Para proyectos complejos</li>
                    <li><strong>Usa capas:</strong> Organizar elementos por importancia</li>
                  </ul>
                </div>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/interfaz-paint3d-completa.jpg",
              video: "/videos/teoria/herramientas-paint3d.mp4",
              infografia: "/images/teoria/guia-herramientas-3d.png"
            },
            actividades: [
              {
                tipo: "practica",
                pregunta: "Abre Paint 3D y experimenta navegando por el espacio 3D. Practica rotar, hacer zoom y desplazar la vista",
                ayuda: "Usa los controles de cámara para ver un objeto desde diferentes ángulos"
              },
              {
                tipo: "creacion",
                pregunta: "Crea una escena simple usando 3 objetos básicos diferentes (cubo, esfera, cilindro). Experimenta con posicionarlos y cambiarles el tamaño",
                ayuda: "Intenta crear algo reconocible como un muñeco de nieve o una torre"
              }
            ]
          },
          {
            id: 4,
            titulo: "Conceptos de Modelado Tridimensional",
            contenido: `
              <h3>🏗️ Fundamentos del Modelado 3D</h3>

              <div class="modelado-conceptos">
                <h4>🧩 Elementos Básicos de un Modelo 3D</h4>
                
                <div class="elemento-3d">
                  <h5>📍 Vértices (Vertices)</h5>
                  <p><strong>Definición:</strong> Puntos en el espacio 3D que definen las esquinas de un objeto.</p>
                  <ul>
                    <li>Cada vértice tiene coordenadas X, Y, Z</li>
                    <li>Son los "puntos de control" del modelo</li>
                    <li>En Paint 3D están ocultos pero son fundamentales</li>
                  </ul>
                  <p class="analogia">💡 <strong>Analogía:</strong> Como las esquinas de una caja real</p>
                </div>

                <div class="elemento-3d">
                  <h5>📏 Aristas (Edges)</h5>
                  <p><strong>Definición:</strong> Líneas que conectan dos vértices.</p>
                  <ul>
                    <li>Definen los "bordes" del objeto</li>
                    <li>Crean la estructura wireframe (alambre)</li>
                    <li>Son los límites entre caras</li>
                  </ul>
                </div>

                <div class="elemento-3d">
                  <h5>🎭 Caras/Polígonos (Faces)</h5>
                  <p><strong>Definición:</strong> Superficies planas formadas por 3 o más vértices.</p>
                  <ul>
                    <li>Definen las superficies visibles del objeto</li>
                    <li>Reciben color, textura e iluminación</li>
                    <li>Más caras = mayor detalle y suavidad</li>
                  </ul>
                </div>

                <div class="elemento-3d">
                  <h5>📦 Malla (Mesh)</h5>
                  <p><strong>Definición:</strong> Conjunto completo de vértices, aristas y caras que forman el objeto.</p>
                  <ul>
                    <li>Es la "estructura" completa del modelo 3D</li>
                    <li>Determina la forma final del objeto</li>
                    <li>Paint 3D maneja esto automáticamente</li>
                  </ul>
                </div>
              </div>

              <div class="tipos-modelado">
                <h4>🛠️ Métodos de Modelado 3D</h4>
                
                <div class="metodo-modelado">
                  <h5>📐 Modelado Geométrico/Paramétrico</h5>
                  <p><strong>Paint 3D usa este método</strong></p>
                  <ul>
                    <li>Basado en formas geométricas básicas</li>
                    <li>Parámetros modificables (tamaño, rotación)</li>
                    <li>Fácil de aprender y usar</li>
                    <li>Ideal para objetos artificiales y arquitectura</li>
                  </ul>
                  <p class="ventaja">✅ <strong>Ventaja:</strong> Muy intuitivo para principiantes</p>
                </div>

                <div class="metodo-modelado">
                  <h5>🏺 Modelado Poligonal</h5>
                  <p><strong>Software profesional como Blender</strong></p>
                  <ul>
                    <li>Manipulación directa de vértices y caras</li>
                    <li>Control total sobre la forma</li>
                    <li>Más complejo pero más flexible</li>
                    <li>Usado en videojuegos y películas</li>
                  </ul>
                </div>

                <div class="metodo-modelado">
                  <h5>🎨 Escultura Digital</h5>
                  <p><strong>Software como ZBrush</strong></p>
                  <ul>
                    <li>Como esculpir arcilla virtual</li>
                    <li>Ideal para formas orgánicas</li>
                    <li>Detalles muy finos</li>
                    <li>Usado para personajes y criaturas</li>
                  </ul>
                </div>

                <div class="metodo-modelado">
                  <h5>📏 Modelado CAD</h5>
                  <p><strong>Software como AutoCAD, SolidWorks</strong></p>
                  <ul>
                    <li>Precisión matemática extrema</li>
                    <li>Para ingeniería y manufactura</li>
                    <li>Medidas exactas</li>
                    <li>Simulaciones físicas</li>
                  </ul>
                </div>
              </div>

              <div class="conceptos-espacio-3d">
                <h4>🌌 Comprensión del Espacio 3D</h4>
                
                <div class="sistema-coordenadas">
                  <h5>📊 Sistema de Coordenadas</h5>
                  <div class="coord-explicacion">
                    <div class="eje">
                      <h6>🔴 Eje X (Horizontal)</h6>
                      <ul>
                        <li>Valores negativos: Izquierda</li>
                        <li>Valores positivos: Derecha</li>
                        <li>Centro: X = 0</li>
                      </ul>
                    </div>
                    <div class="eje">
                      <h6>🟢 Eje Y (Vertical)</h6>
                      <ul>
                        <li>Valores negativos: Abajo</li>
                        <li>Valores positivos: Arriba</li>
                        <li>Centro: Y = 0</li>
                      </ul>
                    </div>
                    <div class="eje">
                      <h6>🔵 Eje Z (Profundidad)</h6>
                      <ul>
                        <li>Valores negativos: Hacia atrás</li>
                        <li>Valores positivos: Hacia adelante</li>
                        <li>Centro: Z = 0</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="transformaciones-3d">
                  <h5>🔄 Transformaciones Básicas</h5>
                  
                  <div class="transformacion">
                    <h6>📍 Traslación (Mover)</h6>
                    <ul>
                      <li>Cambiar posición en X, Y, Z</li>
                      <li>No afecta tamaño ni orientación</li>
                      <li>En Paint 3D: flechas de colores</li>
                    </ul>
                  </div>

                  <div class="transformacion">
                    <h6>🔄 Rotación (Girar)</h6>
                    <ul>
                      <li>Girar alrededor de ejes X, Y, Z</li>
                      <li>Medido en grados (0° a 360°)</li>
                      <li>En Paint 3D: anillos de colores</li>
                    </ul>
                  </div>

                  <div class="transformacion">
                    <h6>📏 Escalado (Redimensionar)</h6>
                    <ul>
                      <li>Cambiar tamaño en X, Y, Z</li>
                      <li>Uniforme: mantiene proporciones</li>
                      <li>No uniforme: deforma el objeto</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="iluminacion-materiales">
                <h4>💡 Iluminación y Materiales</h4>
                
                <div class="concepto-iluminacion">
                  <h5>🔆 Conceptos de Iluminación</h5>
                  
                  <div class="tipo-luz">
                    <h6>☀️ Luz Ambiental</h6>
                    <p>Iluminación general que afecta toda la escena</p>
                    <ul>
                      <li>Sin dirección específica</li>
                      <li>Evita sombras muy duras</li>
                      <li>Simula luz del día nublado</li>
                    </ul>
                  </div>

                  <div class="tipo-luz">
                    <h6>🔦 Luz Direccional</h6>
                    <p>Luz que viene de una dirección específica</p>
                    <ul>
                      <li>Crea sombras definidas</li>
                      <li>Simula luz solar directa</li>
                      <li>Da volumen y realismo</li>
                    </ul>
                  </div>

                  <div class="tipo-luz">
                    <h6>💡 Luz Puntual</h6>
                    <p>Luz que emana desde un punto específico</p>
                    <ul>
                      <li>Como una bombilla</li>
                      <li>Se atenúa con la distancia</li>
                      <li>Crea iluminación dramática</li>
                    </ul>
                  </div>
                </div>

                <div class="propiedades-materiales">
                  <h5>🎨 Propiedades de Materiales</h5>
                  
                  <div class="propiedad-material">
                    <h6>🌈 Color Base (Albedo)</h6>
                    <p>El color fundamental del material bajo luz blanca</p>
                  </div>

                  <div class="propiedad-material">
                    <h6>✨ Reflectividad (Metallic)</h6>
                    <p>Qué tanto refleja la luz como un metal</p>
                    <ul>
                      <li>Alto: Metales (oro, plata)</li>
                      <li>Bajo: No metales (madera, plástico)</li>
                    </ul>
                  </div>

                  <div class="propiedad-material">
                    <h6>🪞 Rugosidad (Roughness)</h6>
                    <p>Qué tan lisa o rugosa es la superficie</p>
                    <ul>
                      <li>Lisa: Espejo, agua</li>
                      <li>Rugosa: Papel, tela</li>
                    </ul>
                  </div>

                  <div class="propiedad-material">
                    <h6>👻 Transparencia</h6>
                    <p>Qué tanto deja pasar la luz</p>
                    <ul>
                      <li>Opaco: Madera, metal</li>
                      <li>Transparente: Vidrio, agua</li>
                      <li>Translúcido: Papel, tela fina</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="composicion-escena">
                <h4>🎬 Composición de Escenas 3D</h4>
                
                <div class="principio-composicion">
                  <h5>📐 Regla de los Tercios en 3D</h5>
                  <p>Dividir el espacio visual en 9 secciones para colocar elementos importantes</p>
                  <ul>
                    <li>Aplica a cualquier vista de cámara</li>
                    <li>Crear puntos focales atractivos</li>
                    <li>Evitar centrar todo siempre</li>
                  </ul>
                </div>

                <div class="principio-composicion">
                  <h5>👁️ Jerarquía Visual 3D</h5>
                  <ul>
                    <li><strong>Primer plano:</strong> Objetos más cercanos y importantes</li>
                    <li><strong>Plano medio:</strong> Elementos de contexto</li>
                    <li><strong>Fondo:</strong> Ambiente y elementos de apoyo</li>
                  </ul>
                </div>

                <div class="principio-composicion">
                  <h5>🌈 Color y Profundidad</h5>
                  <ul>
                    <li><strong>Colores cálidos:</strong> Parecen más cercanos</li>
                    <li><strong>Colores fríos:</strong> Parecen más lejanos</li>
                    <li><strong>Contraste:</strong> Mayor contraste = más atención</li>
                    <li><strong>Saturación:</strong> Colores vivos destacan más</li>
                  </ul>
                </div>
              </div>

              <div class="workflow-paint3d">
                <h4>🔄 Flujo de Trabajo en Paint 3D</h4>
                
                <div class="paso-workflow">
                  <h5>1️⃣ Planificación</h5>
                  <ul>
                    <li>Definir qué quieres crear</li>
                    <li>Buscar referencias visuales</li>
                    <li>Identificar formas básicas necesarias</li>
                  </ul>
                </div>

                <div class="paso-workflow">
                  <h5>2️⃣ Construcción Base</h5>
                  <ul>
                    <li>Usar formas 3D básicas</li>
                    <li>Establecer proporciones generales</li>
                    <li>Posicionar elementos principales</li>
                  </ul>
                </div>

                <div class="paso-workflow">
                  <h5>3️⃣ Refinamiento</h5>
                  <ul>
                    <li>Ajustar tamaños y posiciones</li>
                    <li>Añadir detalles menores</li>
                    <li>Probar diferentes ángulos de vista</li>
                  </ul>
                </div>

                <div class="paso-workflow">
                  <h5>4️⃣ Texturizado</h5>
                  <ul>
                    <li>Aplicar colores base</li>
                    <li>Añadir texturas y materiales</li>
                    <li>Usar adhesivos para detalles</li>
                  </ul>
                </div>

                <div class="paso-workflow">
                  <h5>5️⃣ Finalización</h5>
                  <ul>
                    <li>Ajustar iluminación</li>
                    <li>Configurar la cámara final</li>
                    <li>Exportar o compartir</li>
                  </ul>
                </div>
              </div>

              <div class="consejos-modelado">
                <h4>💡 Consejos para Modelado Efectivo</h4>
                
                <div class="consejo-categoria">
                  <h5>🚀 Para Principiantes</h5>
                  <ul>
                    <li><strong>Empezar simple:</strong> Un objeto a la vez</li>
                    <li><strong>Usar referencias:</strong> Fotos del objeto real</li>
                    <li><strong>Practicar transformaciones:</strong> Mover, rotar, escalar</li>
                    <li><strong>Experimentar sin miedo:</strong> Ctrl+Z es tu amigo</li>
                  </ul>
                </div>

                <div class="consejo-categoria">
                  <h5>🎯 Técnicas Útiles</h5>
                  <ul>
                    <li><strong>Duplicar y modificar:</strong> Crear variaciones rápidas</li>
                    <li><strong>Agrupar objetos:</strong> Mover conjuntos como uno solo</li>
                    <li><strong>Usar la biblioteca:</strong> Combinar objetos prediseñados</li>
                    <li><strong>Cambiar puntos de vista:</strong> Ver desde todos los ángulos</li>
                  </ul>
                </div>

                <div class="consejo-categoria">
                  <h5>🎨 Estética y Diseño</h5>
                  <ul>
                    <li><strong>Mantener coherencia:</strong> Estilo visual unificado</li>
                    <li><strong>Equilibrar complejidad:</strong> No sobrecargar la escena</li>
                    <li><strong>Usar colores armoniosos:</strong> Paletas limitadas</li>
                    <li><strong>Crear focal points:</strong> Elementos que atraigan la atención</li>
                  </ul>
                </div>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/conceptos-modelado-3d.jpg",
              video: "/videos/teoria/fundamentos-modelado-3d.mp4",
              infografia: "/images/teoria/workflow-paint3d.png"
            },
            actividades: [
              {
                tipo: "analisis",
                pregunta: "Observa un objeto simple de tu casa (como una taza o un libro). ¿Qué formas 3D básicas podrías combinar para recrearlo en Paint 3D?",
                ayuda: "Descompón el objeto en cubos, cilindros, esferas, etc."
              },
              {
                tipo: "proyecto",
                pregunta: "Crea tu primer modelo 3D completo: una casa simple usando cubos para paredes, triángulos para el techo, y cilindros para chimeneas",
                ayuda: "Enfócate en las proporciones básicas antes que en los detalles"
              }
            ]
          }
        ],
        recursos: {
          documentos: [
            {
              titulo: "Guía Completa de Paint 3D",
              tipo: "PDF",
              url: "/recursos/paint-3d/guia-completa-paint3d.pdf"
            },
            {
              titulo: "Fundamentos de Modelado 3D",
              tipo: "PDF",
              url: "/recursos/paint-3d/fundamentos-modelado-3d.pdf"
            },
            {
              titulo: "Teoría de Color en 3D",
              tipo: "PDF",
              url: "/recursos/paint-3d/color-3d.pdf"
            },
            {
              titulo: "Composición de Escenas 3D",
              tipo: "PDF",
              url: "/recursos/paint-3d/composicion-escenas.pdf"
            }
          ],
          videos: [
            {
              titulo: "Tutorial Básico Paint 3D",
              duracion: "15 min",
              url: "/videos/tutorial-basico-paint3d.mp4"
            },
            {
              titulo: "Creando tu Primer Modelo 3D",
              duracion: "10 min",
              url: "/videos/primer-modelo-3d.mp4"
            },
            {
              titulo: "Materiales y Texturas en Paint 3D",
              duracion: "8 min",
              url: "/videos/materiales-paint3d.mp4"
            }
          ],
          enlaces: [
            {
              titulo: "Comunidad Paint 3D",
              url: "https://www.microsoft.com/en-us/p/paint-3d/"
            },
            {
              titulo: "Galería de Modelos 3D",
              url: "https://www.remix3d.com"
            },
            {
              titulo: "Tutoriales Oficiales Microsoft",
              url: "https://support.microsoft.com/paint-3d"
            },
            {
              titulo: "Fundamentos de Diseño 3D",
              url: "https://learn.microsoft.com/3d-design"
            }
          ]
        },
        evaluacion: {
          preRequisitos: ["Conocimientos básicos de Windows", "Familiaridad con Paint clásico"],
          criterios: [
            "Explicar qué es Paint 3D y sus diferencias con Paint clásico",
            "Entender la evolución del diseño 2D al 3D",
            "Navegar efectivamente en el espacio 3D",
            "Usar herramientas básicas de modelado",
            "Aplicar conceptos fundamentales de diseño tridimensional",
            "Crear modelos 3D simples combinando formas básicas"
          ],
          tiempoEstimado: "25 minutos"
        }
      },
      '2': {
        titulo: "Creación de Objetos 3D",
        duracion: "25-30 minutos",
        objetivos: [
          "Dominar las herramientas de creación de objetos 3D básicos",
          "Aprender técnicas de modificación y transformación de formas",
          "Entender cómo combinar formas para crear objetos complejos",
          "Desarrollar habilidades de modelado tridimensional progresivo"
        ],
        secciones: [
          {
            id: 1,
            titulo: "Formas 3D Básicas",
            contenido: `
              <div class="seccion-contenido">
                <h3>🧊 Biblioteca de Formas 3D Fundamentales</h3>
                
                <div class="formas-3d-basicas">
                  <h4>📦 Formas Geométricas Primitivas</h4>
                  
                  <div class="forma-3d">
                    <h5>🔲 Cubo</h5>
                    <div class="forma-detalle">
                      <p><strong>Características:</strong> 6 caras cuadradas iguales, 8 vértices, 12 aristas</p>
                      <ul>
                        <li><strong>Usos comunes:</strong> Edificios, cajas, muebles, dados</li>
                        <li><strong>Ventajas:</strong> Base perfecta para arquitectura y objetos artificiales</li>
                        <li><strong>Modificaciones típicas:</strong> Estirar para hacer rectángulos, biselar esquinas</li>
                        <li><strong>Consejos:</strong> Ideal para principiantes, fácil de manipular</li>
                      </ul>
                    </div>
                  </div>

                  <div class="forma-3d">
                    <h5>⚫ Esfera</h5>
                    <div class="forma-detalle">
                      <p><strong>Características:</strong> Superficie curva uniforme, todos los puntos equidistantes del centro</p>
                      <ul>
                        <li><strong>Usos comunes:</strong> Pelotas, planetas, cabezas, frutas</li>
                        <li><strong>Ventajas:</strong> Forma orgánica natural, suave desde cualquier ángulo</li>
                        <li><strong>Modificaciones típicas:</strong> Aplastar para elipses, cortar para hemisferios</li>
                        <li><strong>Consejos:</strong> Perfecta para formas orgánicas y redondeadas</li>
                      </ul>
                    </div>
                  </div>

                  <div class="forma-3d">
                    <h5>🔺 Pirámide</h5>
                    <div class="forma-detalle">
                      <p><strong>Características:</strong> Base poligonal con caras triangulares que convergen en un punto</p>
                      <ul>
                        <li><strong>Usos comunes:</strong> Techos, monumentos, montañas estilizadas</li>
                        <li><strong>Ventajas:</strong> Crea sensación de altura y estabilidad</li>
                        <li><strong>Modificaciones típicas:</strong> Cambiar base (triangular, cuadrada), ajustar altura</li>
                        <li><strong>Consejos:</strong> Excelente para elementos arquitectónicos</li>
                      </ul>
                    </div>
                  </div>

                  <div class="forma-3d">
                    <h5>🔴 Cilindro</h5>
                    <div class="forma-detalle">
                      <p><strong>Características:</strong> Dos bases circulares paralelas conectadas por superficie curva</p>
                      <ul>
                        <li><strong>Usos comunes:</strong> Columnas, latas, tubos, troncos de árboles</li>
                        <li><strong>Ventajas:</strong> Versátil para objetos alargados y estructurales</li>
                        <li><strong>Modificaciones típicas:</strong> Estirar altura, cambiar diámetro, inclinar</li>
                        <li><strong>Consejos:</strong> Base para muchos objetos cotidianos</li>
                      </ul>
                    </div>
                  </div>

                  <div class="forma-3d">
                    <h5>🔻 Cono</h5>
                    <div class="forma-detalle">
                      <p><strong>Características:</strong> Base circular que se estrecha hasta un punto</p>
                      <ul>
                        <li><strong>Usos comunes:</strong> Sombreros, conos de tráfico, volcanes, helados</li>
                        <li><strong>Ventajas:</strong> Crea direccionalidad y dinamismo</li>
                        <li><strong>Modificaciones típicas:</strong> Truncar la punta, cambiar base, inclinar</li>
                        <li><strong>Consejos:</strong> Perfecto para elementos puntiagudos y decorativos</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="acceso-formas">
                  <h4>🎯 Cómo Acceder a las Formas 3D</h4>
                  <ol>
                    <li>Abrir Paint 3D</li>
                    <li>Hacer clic en <strong>"Formas 3D"</strong> en la barra superior</li>
                    <li>Seleccionar la forma deseada del panel lateral</li>
                    <li>Hacer clic y arrastrar en el lienzo para crear</li>
                    <li>Usar los controles que aparecen para ajustar</li>
                  </ol>
                </div>

                <div class="consejos-formas-3d">
                  <h4>💡 Consejos para Trabajar con Formas 3D</h4>
                  <div class="consejo-grid">
                    <div class="consejo">
                      <h5>📏 Proporciones</h5>
                      <ul>
                        <li>Mantener proporciones realistas</li>
                        <li>Observar objetos reales como referencia</li>
                        <li>Usar las medidas relativas entre formas</li>
                      </ul>
                    </div>
                    
                    <div class="consejo">
                      <h5>🎨 Planificación</h5>
                      <ul>
                        <li>Pensar en el objeto final antes de empezar</li>
                        <li>Decidir qué formas básicas necesitas</li>
                        <li>Empezar con la forma principal más grande</li>
                      </ul>
                    </div>

                    <div class="consejo">
                      <h5>⚡ Eficiencia</h5>
                      <ul>
                        <li>Usar la forma más simple posible</li>
                        <li>Agregar detalles gradualmente</li>
                        <li>Duplicar formas similares en lugar de recrearlas</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            `,
            multimedia: {
              imagen: '/images/teoria/formas-3d-basicas.png',
              video: '/videos/teoria/creacion-formas-3d.mp4'
            },
            actividades: [
              'Crear cada una de las 5 formas básicas en Paint 3D',
              'Experimentar con diferentes tamaños de la misma forma',
              'Observar cómo cambia la perspectiva al rotar las formas',
              'Identificar qué forma básica usarías para objetos cotidianos'
            ]
          },
          {
            id: 2,
            titulo: "Herramientas de Transformación",
            contenido: `
              <div class="seccion-contenido">
                <h3>🔧 Manipulación y Transformación de Objetos 3D</h3>
                
                <div class="herramientas-transformacion">
                  <h4>📐 Herramientas de Transformación Fundamentales</h4>
                  
                  <div class="herramienta-transform">
                    <h5>↔️ Mover (Traslación)</h5>
                    <div class="herramienta-detalle">
                      <p><strong>Función:</strong> Cambiar la posición del objeto en el espacio 3D</p>
                      <ul>
                        <li><strong>Cómo usar:</strong>
                          <ul>
                            <li>Seleccionar objeto</li>
                            <li>Arrastrar desde el centro para mover libremente</li>
                            <li>Usar las flechas de eje para movimiento preciso</li>
                          </ul>
                        </li>
                        <li><strong>Controles de eje:</strong>
                          <ul>
                            <li><span style="color: red;">Flecha roja:</span> Movimiento en eje X (izquierda-derecha)</li>
                            <li><span style="color: green;">Flecha verde:</span> Movimiento en eje Y (arriba-abajo)</li>
                            <li><span style="color: blue;">Flecha azul:</span> Movimiento en eje Z (adelante-atrás)</li>
                          </ul>
                        </li>
                        <li><strong>Usos típicos:</strong> Posicionar objetos, crear composiciones, ajustar ubicaciones</li>
                      </ul>
                    </div>
                  </div>

                  <div class="herramienta-transform">
                    <h5>🔄 Rotar</h5>
                    <div class="herramienta-detalle">
                      <p><strong>Función:</strong> Cambiar la orientación del objeto alrededor de sus ejes</p>
                      <ul>
                        <li><strong>Cómo usar:</strong>
                          <ul>
                            <li>Seleccionar objeto</li>
                            <li>Usar los anillos de rotación que aparecen</li>
                            <li>Arrastrar el anillo del eje deseado</li>
                          </ul>
                        </li>
                        <li><strong>Anillos de rotación:</strong>
                          <ul>
                            <li><span style="color: red;">Anillo rojo:</span> Rotación en eje X (cabeceo)</li>
                            <li><span style="color: green;">Anillo verde:</span> Rotación en eje Y (guiñada)</li>
                            <li><span style="color: blue;">Anillo azul:</span> Rotación en eje Z (balanceo)</li>
                          </ul>
                        </li>
                        <li><strong>Usos típicos:</strong> Orientar objetos, crear ángulos interesantes, ajustar perspectivas</li>
                      </ul>
                    </div>
                  </div>

                  <div class="herramienta-transform">
                    <h5>📏 Escalar (Redimensionar)</h5>
                    <div class="herramienta-detalle">
                      <p><strong>Función:</strong> Cambiar el tamaño del objeto manteniendo o no las proporciones</p>
                      <ul>
                        <li><strong>Tipos de escalado:</strong>
                          <ul>
                            <li><strong>Uniforme:</strong> Mantiene proporciones, usa esquinas</li>
                            <li><strong>Por eje:</strong> Estira solo en una dirección</li>
                            <li><strong>Libre:</strong> Modifica ancho, alto y profundidad independientemente</li>
                          </ul>
                        </li>
                        <li><strong>Controles de escalado:</strong>
                          <ul>
                            <li><strong>Esquinas:</strong> Escalado proporcional</li>
                            <li><strong>Puntos medios:</strong> Escalado por eje individual</li>
                            <li><strong>Centro:</strong> Escalado desde el centro del objeto</li>
                          </ul>
                        </li>
                        <li><strong>Usos típicos:</strong> Ajustar tamaños, crear variaciones, corregir proporciones</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="tecnicas-transformacion">
                  <h4>🎯 Técnicas Avanzadas de Transformación</h4>
                  
                  <div class="tecnica">
                    <h5>🔗 Transformaciones Combinadas</h5>
                    <ul>
                      <li><strong>Secuencia recomendada:</strong> Escalar → Rotar → Mover</li>
                      <li><strong>Razón:</strong> Evita distorsiones y facilita el control</li>
                      <li><strong>Ejemplo práctico:</strong> Crear una rueda inclinada
                        <ol>
                          <li>Escalar cilindro para hacerlo más ancho que alto</li>
                          <li>Rotar 90° para que sea una rueda vertical</li>
                          <li>Mover a la posición final</li>
                        </ol>
                      </li>
                    </ul>
                  </div>

                  <div class="tecnica">
                    <h5>📍 Punto de Pivote</h5>
                    <ul>
                      <li><strong>Definición:</strong> Punto alrededor del cual ocurren rotaciones y escalados</li>
                      <li><strong>Por defecto:</strong> Centro del objeto</li>
                      <li><strong>Importancia:</strong> Afecta cómo se comportan las transformaciones</li>
                      <li><strong>Consejo:</strong> Visualiza mentalmente el punto de pivote antes de transformar</li>
                    </ul>
                  </div>

                  <div class="tecnica">
                    <h5>🎨 Transformaciones Creativas</h5>
                    <ul>
                      <li><strong>Escalado no uniforme:</strong> Crear formas orgánicas de geométricas</li>
                      <li><strong>Rotaciones múltiples:</strong> Combinar rotaciones en varios ejes</li>
                      <li><strong>Escalado extremo:</strong> Hacer objetos muy delgados o muy anchos</li>
                      <li><strong>Ejemplo:</strong> Convertir esfera en elipse escalando solo en un eje</li>
                    </ul>
                  </div>
                </div>

                <div class="errores-comunes">
                  <h4>⚠️ Errores Comunes y Soluciones</h4>
                  
                  <div class="error-solucion">
                    <h5>❌ Objeto se distorsiona al rotar</h5>
                    <p><strong>Causa:</strong> Escalado no uniforme antes de rotar</p>
                    <p><strong>Solución:</strong> Hacer escalado uniforme o rotar antes de escalar por ejes</p>
                  </div>

                  <div class="error-solucion">
                    <h5>❌ No puedo mover el objeto donde quiero</h5>
                    <p><strong>Causa:</strong> Confusión con los ejes 3D</p>
                    <p><strong>Solución:</strong> Rotar la vista para ver mejor, usar flechas de eje específicas</p>
                  </div>

                  <div class="error-solucion">
                    <h5>❌ El objeto desaparece al escalarlo</h5>
                    <p><strong>Causa:</strong> Escalado a tamaño cero o negativo</p>
                    <p><strong>Solución:</strong> Deshacer (Ctrl+Z) y escalar con más cuidado</p>
                  </div>
                </div>
              </div>
            `,
            multimedia: {
              imagen: '/images/teoria/transformaciones-3d.png',
              video: '/videos/teoria/herramientas-transformacion.mp4'
            },
            actividades: [
              'Practicar mover objetos usando las flechas de eje específicas',
              'Rotar un cubo en los tres ejes para entender cada tipo de rotación',
              'Crear formas nuevas escalando no uniformemente (ej: esfera → elipse)',
              'Combinar transformaciones: crear un objeto complejo transformando uno básico'
            ]
          },
          {
            id: 3,
            titulo: "Técnicas de Combinación",
            contenido: `
              <div class="seccion-contenido">
                <h3>🔗 Combinando Formas para Crear Objetos Complejos</h3>
                
                <div class="metodos-combinacion">
                  <h4>🎯 Estrategias de Combinación de Formas</h4>
                  
                  <div class="estrategia">
                    <h5>🧩 Combinación Aditiva</h5>
                    <div class="estrategia-detalle">
                      <p><strong>Concepto:</strong> Agregar formas para construir objetos más complejos</p>
                      <ul>
                        <li><strong>Método:</strong> Colocar formas una junto a otra o superpuestas</li>
                        <li><strong>Principio:</strong> Cada forma mantiene su integridad individual</li>
                        <li><strong>Ventajas:</strong>
                          <ul>
                            <li>Fácil de entender y aplicar</li>
                            <li>Reversible - puedes separar las formas</li>
                            <li>Ideal para principiantes</li>
                          </ul>
                        </li>
                        <li><strong>Ejemplos prácticos:</strong>
                          <ul>
                            <li><strong>Robot:</strong> Cubo (cuerpo) + esfera (cabeza) + cilindros (brazos/piernas)</li>
                            <li><strong>Casa:</strong> Cubo (base) + pirámide (techo) + cilindros (columnas)</li>
                            <li><strong>Coche:</strong> Cubos (carrocería) + cilindros (ruedas) + esferas (faros)</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="estrategia">
                    <h5>🎨 Combinación Integrativa</h5>
                    <div class="estrategia-detalle">
                      <p><strong>Concepto:</strong> Formas que se intersectan y comparten espacios</p>
                      <ul>
                        <li><strong>Método:</strong> Superponer formas para crear intersecciones interesantes</li>
                        <li><strong>Principio:</strong> Las formas se "funden" visualmente</li>
                        <li><strong>Ventajas:</strong>
                          <ul>
                            <li>Crea formas orgánicas y naturales</li>
                            <li>Elimina juntas artificiales entre formas</li>
                            <li>Resultados más profesionales</li>
                          </ul>
                        </li>
                        <li><strong>Ejemplos prácticos:</strong>
                          <ul>
                            <li><strong>Muñeco de nieve:</strong> Tres esferas superpuestas gradualmente</li>
                            <li><strong>Vaso:</strong> Cilindro con esfera en la base</li>
                            <li><strong>Lámpara:</strong> Cono intersectando con cilindro</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="flujo-construccion">
                  <h4>🏗️ Flujo de Trabajo para Construcción Compleja</h4>
                  
                  <div class="fase-construccion">
                    <h5>1️⃣ Fase de Planificación</h5>
                    <ul>
                      <li><strong>Análisis del objeto:</strong> ¿Qué formas básicas lo componen?</li>
                      <li><strong>Jerarquía:</strong> ¿Cuál es la forma principal y cuáles secundarias?</li>
                      <li><strong>Proporciones:</strong> ¿Cómo se relacionan los tamaños entre sí?</li>
                      <li><strong>Referencias:</strong> Buscar fotos reales del objeto</li>
                    </ul>
                  </div>

                  <div class="fase-construccion">
                    <h5>2️⃣ Fase de Construcción Base</h5>
                    <ul>
                      <li><strong>Forma principal:</strong> Crear la forma más grande/importante primero</li>
                      <li><strong>Posicionamiento:</strong> Colocarla en el centro del espacio de trabajo</li>
                      <li><strong>Proporciones iniciales:</strong> Establecer el tamaño de referencia</li>
                      <li><strong>Orientación:</strong> Definir la orientación final desde el inicio</li>
                    </ul>
                  </div>

                  <div class="fase-construccion">
                    <h5>3️⃣ Fase de Agregación</h5>
                    <ul>
                      <li><strong>Formas secundarias:</strong> Agregar de mayor a menor importancia</li>
                      <li><strong>Proporciones relativas:</strong> Mantener relaciones de tamaño realistas</li>
                      <li><strong>Conexiones:</strong> Asegurar que las uniones se vean naturales</li>
                      <li><strong>Simetría:</strong> Mantener balance visual cuando sea apropiado</li>
                    </ul>
                  </div>

                  <div class="fase-construccion">
                    <h5>4️⃣ Fase de Refinamiento</h5>
                    <ul>
                      <li><strong>Ajustes finos:</strong> Pequeñas correcciones de posición y tamaño</li>
                      <li><strong>Verificación:</strong> Ver desde múltiples ángulos</li>
                      <li><strong>Coherencia:</strong> Asegurar que todo encaje lógicamente</li>
                      <li><strong>Preparación:</strong> Listo para aplicar colores y texturas</li>
                    </ul>
                  </div>
                </div>

                <div class="proyectos-ejemplos">
                  <h4>🎯 Proyectos Ejemplo Paso a Paso</h4>
                  
                  <div class="proyecto-ejemplo">
                    <h5>🤖 Proyecto: Robot Simple</h5>
                    <div class="pasos-proyecto">
                      <ol>
                        <li><strong>Cuerpo:</strong> Cubo escalado verticalmente (2:3:1)</li>
                        <li><strong>Cabeza:</strong> Cubo más pequeño encima del cuerpo</li>
                        <li><strong>Brazos:</strong> Dos cilindros a los lados del cuerpo</li>
                        <li><strong>Piernas:</strong> Dos cilindros debajo del cuerpo</li>
                        <li><strong>Pies:</strong> Cubos pequeños al final de las piernas</li>
                        <li><strong>Ajustes:</strong> Verificar proporciones y simetría</li>
                      </ol>
                    </div>
                  </div>

                  <div class="proyecto-ejemplo">
                    <h5>🏠 Proyecto: Casa Básica</h5>
                    <div class="pasos-proyecto">
                      <ol>
                        <li><strong>Base:</strong> Cubo como estructura principal</li>
                        <li><strong>Techo:</strong> Pirámide sobre la base</li>
                        <li><strong>Chimenea:</strong> Cilindro pequeño en el techo</li>
                        <li><strong>Puerta:</strong> Cubo delgado en la pared frontal</li>
                        <li><strong>Ventanas:</strong> Cubos muy delgados como marcos</li>
                        <li><strong>Detalles:</strong> Pequeños elementos decorativos</li>
                      </ol>
                    </div>
                  </div>

                  <div class="proyecto-ejemplo">
                    <h5>🚗 Proyecto: Coche Simple</h5>
                    <div class="pasos-proyecto">
                      <ol>
                        <li><strong>Carrocería:</strong> Cubo escalado horizontalmente</li>
                        <li><strong>Capó/Techo:</strong> Cubo más bajo encima</li>
                        <li><strong>Ruedas:</strong> Cuatro cilindros en las esquinas</li>
                        <li><strong>Parabrisas:</strong> Cubo delgado inclinado</li>
                        <li><strong>Faros:</strong> Esferas pequeñas al frente</li>
                        <li><strong>Refinamiento:</strong> Ajustar para que parezca un coche</li>
                      </ol>
                    </div>
                  </div>
                </div>

                <div class="consejos-combinacion">
                  <h4>💡 Consejos para Combinaciones Exitosas</h4>
                  
                  <div class="categoria-consejo">
                    <h5>📐 Proporciones y Escala</h5>
                    <ul>
                      <li><strong>Regla de oro:</strong> Observa objetos reales para referencias</li>
                      <li><strong>Jerarquía de tamaños:</strong> Elemento principal > secundarios > detalles</li>
                      <li><strong>Coherencia:</strong> Mantén un sistema de medidas consistente</li>
                    </ul>
                  </div>

                  <div class="categoria-consejo">
                    <h5>🎨 Unidad Visual</h5>
                    <ul>
                      <li><strong>Estilo consistente:</strong> Todas las formas deben sentirse parte del mismo objeto</li>
                      <li><strong>Transiciones suaves:</strong> Evita cambios abruptos de tamaño</li>
                      <li><strong>Simetría intencional:</strong> Usa simetría cuando tenga sentido</li>
                    </ul>
                  </div>

                  <div class="categoria-consejo">
                    <h5>⚡ Eficiencia de Trabajo</h5>
                    <ul>
                      <li><strong>Duplicar vs crear:</strong> Copia formas similares en lugar de recrear</li>
                      <li><strong>Agrupación mental:</strong> Piensa en subsistemas (ej: ruedas de coche)</li>
                      <li><strong>Iteración:</strong> No esperes perfección en el primer intento</li>
                    </ul>
                  </div>
                </div>
              </div>
            `,
            multimedia: {
              imagen: '/images/teoria/combinacion-formas-3d.png',
              video: '/videos/teoria/tecnicas-combinacion.mp4'
            },
            actividades: [
              'Crear un robot simple usando 5-7 formas básicas diferentes',
              'Construir una casa combinando cubo (base) + pirámide (techo) + detalles',
              'Diseñar un vehículo simple usando principalmente cubos y cilindros',
              'Experimentar con intersecciones: superponer formas para efectos interesantes'
            ]
          },
          {
            id: 4,
            titulo: "Modelado Progresivo",
            contenido: `
              <div class="seccion-contenido">
                <h3>🚀 Desarrollo de Habilidades de Modelado Avanzado</h3>
                
                <div class="filosofia-progresiva">
                  <h4>🎯 Filosofía del Modelado Progresivo</h4>
                  
                  <div class="concepto-base">
                    <h5>📈 ¿Qué es el Modelado Progresivo?</h5>
                    <p>El modelado progresivo es una metodología que consiste en desarrollar modelos 3D a través de iteraciones sucesivas, donde cada paso agrega más detalle y complejidad al anterior.</p>
                    
                    <ul>
                      <li><strong>Principio fundamental:</strong> De simple a complejo</li>
                      <li><strong>Ventajas:</strong>
                        <ul>
                          <li>Reduce la sensación de abrumamiento</li>
                          <li>Permite correcciones tempranas</li>
                          <li>Facilita el aprendizaje gradual</li>
                          <li>Mejora la calidad final</li>
                        </ul>
                      </li>
                      <li><strong>Aplicación en Paint 3D:</strong> Perfecto para principiantes</li>
                    </ul>
                  </div>
                </div>

                <div class="niveles-progresion">
                  <h4>📊 Los 5 Niveles de Progresión</h4>
                  
                  <div class="nivel-progresion">
                    <h5>🥉 Nivel 1: Forma Base</h5>
                    <div class="nivel-detalle">
                      <p><strong>Objetivo:</strong> Establecer la silueta y proporciones generales</p>
                      <ul>
                        <li><strong>Actividades:</strong>
                          <ul>
                            <li>Seleccionar la forma primitiva más apropiada</li>
                            <li>Establecer tamaño y proporciones básicas</li>
                            <li>Posicionar en el espacio</li>
                          </ul>
                        </li>
                        <li><strong>Criterio de éxito:</strong> La forma se reconoce como el objeto deseado</li>
                        <li><strong>Ejemplo:</strong> Para modelar una persona → empezar con cilindro vertical</li>
                      </ul>
                    </div>
                  </div>

                  <div class="nivel-progresion">
                    <h5>🥈 Nivel 2: Estructura Principal</h5>
                    <div class="nivel-detalle">
                      <p><strong>Objetivo:</strong> Agregar las partes principales del objeto</p>
                      <ul>
                        <li><strong>Actividades:</strong>
                          <ul>
                            <li>Identificar 3-5 componentes principales</li>
                            <li>Agregar formas básicas para cada componente</li>
                            <li>Establecer relaciones de tamaño</li>
                          </ul>
                        </li>
                        <li><strong>Criterio de éxito:</strong> Se distinguen todas las partes principales</li>
                        <li><strong>Ejemplo:</strong> Persona → agregar esfera (cabeza), cilindros (brazos/piernas)</li>
                      </ul>
                    </div>
                  </div>

                  <div class="nivel-progresion">
                    <h5>🥇 Nivel 3: Detalles Secundarios</h5>
                    <div class="nivel-detalle">
                      <p><strong>Objetivo:</strong> Añadir elementos que enriquecen el objeto</p>
                      <ul>
                        <li><strong>Actividades:</strong>
                          <ul>
                            <li>Agregar detalles que mejoran el reconocimiento</li>
                            <li>Usar formas más pequeñas</li>
                            <li>Considerar funcionalidad del objeto</li>
                          </ul>
                        </li>
                        <li><strong>Criterio de éxito:</strong> El objeto es claramente identificable</li>
                        <li><strong>Ejemplo:</strong> Persona → agregar manos, pies, rasgos faciales básicos</li>
                      </ul>
                    </div>
                  </div>

                  <div class="nivel-progresion">
                    <h5>🏆 Nivel 4: Refinamiento</h5>
                    <div class="nivel-detalle">
                      <p><strong>Objetivo:</strong> Pulir proporciones y ajustar detalles</p>
                      <ul>
                        <li><strong>Actividades:</strong>
                          <ul>
                            <li>Ajustar proporciones finas</li>
                            <li>Mejorar conexiones entre partes</li>
                            <li>Verificar desde múltiples ángulos</li>
                          </ul>
                        </li>
                        <li><strong>Criterio de éxito:</strong> El objeto se ve proporcionado y creíble</li>
                        <li><strong>Ejemplo:</strong> Ajustar longitud de brazos, tamaño de cabeza, postura</li>
                      </ul>
                    </div>
                  </div>

                  <div class="nivel-progresion">
                    <h5>💎 Nivel 5: Personalización</h5>
                    <div class="nivel-detalle">
                      <p><strong>Objetivo:</strong> Hacer el objeto único y expresivo</p>
                      <ul>
                        <li><strong>Actividades:</strong>
                          <ul>
                            <li>Agregar características distintivas</li>
                            <li>Considerar personalidad o función específica</li>
                            <li>Preparar para colores y texturas</li>
                          </ul>
                        </li>
                        <li><strong>Criterio de éxito:</strong> El objeto tiene carácter propio</li>
                        <li><strong>Ejemplo:</strong> Darle pose específica, agregar accesorios, expresión facial</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="proyecto-progresivo">
                  <h4>🎮 Proyecto Progresivo: Personaje de Videojuego</h4>
                  
                  <div class="desarrollo-proyecto">
                    <h5>📋 Especificaciones del Proyecto</h5>
                    <ul>
                      <li><strong>Objetivo:</strong> Crear un personaje humanoide simple</li>
                      <li><strong>Tiempo estimado:</strong> 30-45 minutos</li>
                      <li><strong>Formas permitidas:</strong> Primitivas básicas únicamente</li>
                      <li><strong>Estilo:</strong> Caricaturesco, no realista</li>
                    </ul>
                  </div>

                  <div class="iteracion-proyecto">
                    <h5>🔄 Iteración 1: Silueta (5 min)</h5>
                    <ol>
                      <li>Crear cilindro para el cuerpo principal</li>
                      <li>Escalar a proporciones humanas (más alto que ancho)</li>
                      <li>Posicionar en el centro del espacio</li>
                      <li><strong>Verificación:</strong> ¿Se ve como un torso humano?</li>
                    </ol>
                  </div>

                  <div class="iteracion-proyecto">
                    <h5>🔄 Iteración 2: Estructura (10 min)</h5>
                    <ol>
                      <li>Agregar esfera para la cabeza (1/8 del cuerpo)</li>
                      <li>Dos cilindros para brazos (3/4 del largo del cuerpo)</li>
                      <li>Dos cilindros para piernas (igual al cuerpo)</li>
                      <li><strong>Verificación:</strong> ¿Las proporciones se ven humanas?</li>
                    </ol>
                  </div>

                  <div class="iteracion-proyecto">
                    <h5>🔄 Iteración 3: Detalles (10 min)</h5>
                    <ol>
                      <li>Esferas pequeñas para manos y pies</li>
                      <li>Cubo pequeño para nariz</li>
                      <li>Esferas diminutas para ojos</li>
                      <li><strong>Verificación:</strong> ¿Se reconoce como persona?</li>
                    </ol>
                  </div>

                  <div class="iteracion-proyecto">
                    <h5>🔄 Iteración 4: Refinamiento (10 min)</h5>
                    <ol>
                      <li>Ajustar proporciones finales</li>
                      <li>Mejorar posicionamiento de extremidades</li>
                      <li>Verificar simetría</li>
                      <li><strong>Verificación:</strong> ¿Se ve proporcionado?</li>
                    </ol>
                  </div>

                  <div class="iteracion-proyecto">
                    <h5>🔄 Iteración 5: Personalización (10 min)</h5>
                    <ol>
                      <li>Darle una pose característica</li>
                      <li>Agregar accesorios (sombrero, herramientas)</li>
                      <li>Ajustar expresión facial</li>
                      <li><strong>Verificación:</strong> ¿Tiene personalidad propia?</li>
                    </ol>
                  </div>
                </div>

                <div class="evaluacion-progreso">
                  <h4>📊 Evaluación de Progreso</h4>
                  
                  <div class="criterios-evaluacion">
                    <h5>✅ Lista de Verificación por Nivel</h5>
                    
                    <div class="nivel-criterios">
                      <h6>Nivel 1 - Forma Base:</h6>
                      <ul>
                        <li>□ ¿La forma primitiva elegida es apropiada?</li>
                        <li>□ ¿Las proporciones básicas son correctas?</li>
                        <li>□ ¿La orientación es la adecuada?</li>
                      </ul>
                    </div>

                    <div class="nivel-criterios">
                      <h6>Nivel 2 - Estructura:</h6>
                      <ul>
                        <li>□ ¿Se identifican todas las partes principales?</li>
                        <li>□ ¿Las relaciones de tamaño son realistas?</li>
                        <li>□ ¿Las conexiones entre partes son lógicas?</li>
                      </ul>
                    </div>

                    <div class="nivel-criterios">
                      <h6>Nivel 3 - Detalles:</h6>
                      <ul>
                        <li>□ ¿Los detalles mejoran el reconocimiento?</li>
                        <li>□ ¿Los tamaños de detalles son apropiados?</li>
                        <li>□ ¿Hay balance entre simplicidad y detalle?</li>
                      </ul>
                    </div>

                    <div class="nivel-criterios">
                      <h6>Nivel 4 - Refinamiento:</h6>
                      <ul>
                        <li>□ ¿Las proporciones se ven naturales?</li>
                        <li>□ ¿El objeto funciona desde múltiples ángulos?</li>
                        <li>□ ¿Las transiciones entre partes son suaves?</li>
                      </ul>
                    </div>

                    <div class="nivel-criterios">
                      <h6>Nivel 5 - Personalización:</h6>
                      <ul>
                        <li>□ ¿El objeto tiene carácter distintivo?</li>
                        <li>□ ¿La personalización es coherente?</li>
                        <li>□ ¿Está listo para el siguiente paso (colores)?</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="consejos-modelado-progresivo">
                  <h4>💡 Consejos para Modelado Progresivo Exitoso</h4>
                  
                  <div class="consejo-categoria">
                    <h5>🎯 Mentalidad</h5>
                    <ul>
                      <li><strong>Paciencia:</strong> Cada nivel tiene su tiempo necesario</li>
                      <li><strong>Iteración:</strong> Es normal volver a niveles anteriores</li>
                      <li><strong>Perfeccionismo:</strong> No busques perfección en niveles tempranos</li>
                    </ul>
                  </div>

                  <div class="consejo-categoria">
                    <h5>🔧 Técnica</h5>
                    <ul>
                      <li><strong>Referencias:</strong> Usa fotos reales en cada nivel</li>
                      <li><strong>Proporciones:</strong> Establece un sistema de medidas desde el nivel 1</li>
                      <li><strong>Simplicidad:</strong> Resiste la tentación de agregar detalles prematuros</li>
                    </ul>
                  </div>

                  <div class="consejo-categoria">
                    <h5>⚡ Flujo de Trabajo</h5>
                    <ul>
                      <li><strong>Guardar versiones:</strong> Guarda al completar cada nivel</li>
                      <li><strong>Vista múltiple:</strong> Verifica desde varios ángulos en cada nivel</li>
                      <li><strong>Descansos:</strong> Toma pausas entre niveles para perspectiva fresca</li>
                    </ul>
                  </div>
                </div>
              </div>
            `,
            multimedia: {
              imagen: '/images/teoria/modelado-progresivo.png',
              video: '/videos/teoria/proyecto-progresivo.mp4'
            },
            actividades: [
              'Completar el proyecto del personaje siguiendo los 5 niveles',
              'Crear un vehículo aplicando la metodología progresiva',
              'Modelar un animal usando iteraciones de complejidad creciente',
              'Documentar tu progreso: tomar "fotos" de cada nivel completado'
            ]
          }
        ],
        recursos: {
          documentos: [
            {
              titulo: "Guía de Formas 3D en Paint 3D",
              tipo: "PDF",
              url: "/recursos/paint-3d/formas-3d-guia.pdf"
            },
            {
              titulo: "Manual de Transformaciones 3D",
              tipo: "PDF",
              url: "/recursos/paint-3d/transformaciones-manual.pdf"
            },
            {
              titulo: "Proyectos de Práctica - Nivel Principiante",
              tipo: "ZIP",
              url: "/recursos/paint-3d/proyectos-principiante.zip"
            },
            {
              titulo: "Metodología de Modelado Progresivo",
              tipo: "PDF",
              url: "/recursos/paint-3d/modelado-progresivo.pdf"
            }
          ],
          videos: [
            {
              titulo: "Masterclass: Creación de Objetos 3D",
              duracion: "22 min",
              url: "/videos/masterclass-objetos-3d.mp4"
            },
            {
              titulo: "Transformaciones 3D Explicadas",
              duracion: "15 min",
              url: "/videos/transformaciones-3d-explicadas.mp4"
            },
            {
              titulo: "Proyecto Completo: Robot en Paint 3D",
              duracion: "18 min",
              url: "/videos/proyecto-robot-paint3d.mp4"
            }
          ],
          enlaces: [
            {
              titulo: "Galería de Modelos 3D Simples",
              url: "https://www.remix3d.com/discover?q=simple"
            },
            {
              titulo: "Fundamentos de Modelado 3D",
              url: "https://learn.microsoft.com/en-us/windows/mixed-reality/design/3d-modeling"
            },
            {
              titulo: "Comunidad Paint 3D",
              url: "https://techcommunity.microsoft.com/t5/paint-3d/bd-p/Paint3D"
            }
          ]
        },
        evaluacion: {
          preRequisitos: ["Tema 1: Introducción a Paint 3D"],
          criterios: [
            "Crear las 5 formas 3D básicas correctamente",
            "Aplicar transformaciones (mover, rotar, escalar) con precisión",
            "Combinar múltiples formas para crear objetos reconocibles",
            "Seguir metodología de modelado progresivo",
            "Crear modelos 3D complejos usando solo formas primitivas",
          ],
          tiempoEstimado: "30 minutos"
        }
      },
      '3': {
        titulo: "Pintura y Decoración 3D",
        duracion: "22-28 minutos",
        objetivos: [
          "Dominar las herramientas de pintura y decoración en 3D",
          "Aprender a aplicar colores, texturas y materiales realistas",
          "Entender los principios de iluminación y sombreado",
          "Crear objetos visualmente atractivos y profesionales"
        ],
        secciones: [
          {
            id: 1,
            titulo: "Herramientas de Pintura 3D",
            contenido: `
              <div class="seccion-contenido">
                <h3>🎨 Sistema de Pintura Tridimensional</h3>
                
                <div class="conceptos-pintura-3d">
                  <h4>🌟 Diferencias entre Pintura 2D y 3D</h4>
                  
                  <div class="comparacion-pintura">
                    <div class="pintura-2d">
                      <h5>🖼️ Pintura 2D Tradicional</h5>
                      <ul>
                        <li><strong>Superficie:</strong> Plana, una sola cara</li>
                        <li><strong>Perspectiva:</strong> Vista única</li>
                        <li><strong>Limitaciones:</strong> Solo x,y - ancho y alto</li>
                        <li><strong>Resultado:</strong> Imagen estática</li>
                      </ul>
                    </div>
                    
                    <div class="pintura-3d">
                      <h5>🧊 Pintura 3D</h5>
                      <ul>
                        <li><strong>Superficie:</strong> Volumétrica, todas las caras</li>
                        <li><strong>Perspectiva:</strong> 360° de visualización</li>
                        <li><strong>Dimensiones:</strong> x,y,z - incluye profundidad</li>
                        <li><strong>Resultado:</strong> Objeto interactivo</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="herramientas-pintura">
                  <h4>🖌️ Herramientas de Pintura en Paint 3D</h4>
                  
                  <div class="herramienta-pintura">
                    <h5>🖍️ Pincel Básico</h5>
                    <div class="herramienta-detalle">
                      <p><strong>Función:</strong> Aplicar color directamente sobre superficies 3D</p>
                      <ul>
                        <li><strong>Características:</strong>
                          <ul>
                            <li>Trazo suave y natural</li>
                            <li>Se adapta a la curvatura del objeto</li>
                            <li>Tamaño variable</li>
                            <li>Opacidad ajustable</li>
                          </ul>
                        </li>
                        <li><strong>Mejor para:</strong> Detalles finos, líneas, patrones</li>
                        <li><strong>Técnica:</strong> Movimientos cortos y controlados</li>
                        <li><strong>Consejo:</strong> Rotar el objeto para acceder a todas las superficies</li>
                      </ul>
                    </div>
                  </div>

                  <div class="herramienta-pintura">
                    <h5>🌊 Pincel de Calca</h5>
                    <div class="herramienta-detalle">
                      <p><strong>Función:</strong> Copiar colores y texturas de una parte del objeto a otra</p>
                      <ul>
                        <li><strong>Proceso:**
                          <ol>
                            <li>Mantener Alt + clic en el color/textura origen</li>
                            <li>Pintar en la zona destino</li>
                            <li>El color se "calca" automáticamente</li>
                          </ol>
                        </li>
                        <li><strong>Mejor para:</strong> Crear consistencia visual, extender patrones</li>
                        <li><strong>Ventaja:</strong> Mantiene automáticamente la iluminación del objeto</li>
                      </ul>
                    </div>
                  </div>

                  <div class="herramienta-pintura">
                    <h5>💧 Relleno 3D</h5>
                    <div class="herramienta-detalle">
                      <p><strong>Función:</strong> Llenar superficies completas con color o textura</p>
                      <ul>
                        <li><strong>Funcionamiento:</strong>
                          <ul>
                            <li>Clic en una superficie la llena completamente</li>
                            <li>Respeta los límites de la cara del objeto</li>
                            <li>Ideal para cambios rápidos de color base</li>
                          </ul>
                        </li>
                        <li><strong>Mejor para:</strong> Colores base, cambios globales</li>
                        <li><strong>Precaución:</strong> No funciona bien con texturas complejas</li>
                      </ul>
                    </div>
                  </div>

                  <div class="herramienta-pintura">
                    <h5>✨ Pincel de Efectos</h5>
                    <div class="herramienta-detalle">
                      <p><strong>Función:</strong> Aplicar efectos especiales como brillos, sombras, texturas</p>
                      <ul>
                        <li><strong>Efectos disponibles:</strong>
                          <ul>
                            <li><strong>Metálico:</strong> Superficie reflectante</li>
                            <li><strong>Mate:</strong> Sin reflejos, opaco</li>
                            <li><strong>Brillante:</strong> Superficie pulida</li>
                            <li><strong>Translúcido:</strong> Semi-transparente</li>
                          </ul>
                        </li>
                        <li><strong>Mejor para:</strong> Dar realismo y personalidad</li>
                        <li><strong>Técnica:</strong> Aplicar en capas para efectos graduales</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="paleta-colores-3d">
                  <h4>🎨 Sistema de Colores en 3D</h4>
                  
                  <div class="selector-color">
                    <h5>🌈 Selector de Color Avanzado</h5>
                    <ul>
                      <li><strong>Rueda de color:</strong> Selección intuitiva de tonos</li>
                      <li><strong>Saturación:</strong> Intensidad del color</li>
                      <li><strong>Brillo:</strong> Luminosidad del color</li>
                      <li><strong>RGB:</strong> Control numérico preciso</li>
                      <li><strong>Colores recientes:</strong> Acceso rápido a colores usados</li>
                    </ul>
                  </div>

                  <div class="teoria-color-3d">
                    <h5>📚 Consideraciones de Color en 3D</h5>
                    <ul>
                      <li><strong>Iluminación afecta percepción:</strong> El mismo color se ve diferente según la luz</li>
                      <li><strong>Superficies curvas:</strong> Los colores varían en intensidad según el ángulo</li>
                      <li><strong>Sombras automáticas:</strong> Paint 3D genera sombras que modifican colores</li>
                      <li><strong>Contraste:</strong> Mayor importancia en 3D para definir formas</li>
                    </ul>
                  </div>
                </div>

                <div class="tecnicas-aplicacion">
                  <h4>🎯 Técnicas de Aplicación de Color</h4>
                  
                  <div class="tecnica">
                    <h5>🏗️ Técnica de Capas Base</h5>
                    <ol>
                      <li><strong>Color base:</strong> Aplicar color principal con relleno</li>
                      <li><strong>Sombras:</strong> Agregar tonos más oscuros en zonas menos iluminadas</li>
                      <li><strong>Luces:</strong> Aplicar tonos más claros en zonas de mayor iluminación</li>
                      <li><strong>Detalles:</strong> Añadir elementos decorativos finales</li>
                    </ol>
                  </div>

                  <div class="tecnica">
                    <h5>🎨 Técnica de Degradados</h5>
                    <ul>
                      <li>Usar pinceles de opacidad variable</li>
                      <li>Aplicar colores gradualmente de claro a oscuro</li>
                      <li>Ideal para efectos de volumen y profundidad</li>
                      <li>Especialmente efectivo en esferas y cilindros</li>
                    </ul>
                  </div>

                  <div class="tecnica">
                    <h5>🖼️ Técnica de Patrones</h5>
                    <ul>
                      <li>Crear elementos repetitivos con el pincel</li>
                      <li>Usar el pincel de calca para replicar patrones</li>
                      <li>Mantener consistencia en tamaño y espaciado</li>
                      <li>Ideal para texturas como ladrillos, escamas, etc.</li>
                    </ul>
                  </div>
                </div>
              </div>
            `,
            multimedia: {
              imagen: '/images/teoria/pintura-3d-herramientas.png',
              video: '/videos/teoria/herramientas-pintura-3d.mp4'
            },
            actividades: [
              'Experimentar con cada herramienta de pintura en un cubo',
              'Crear degradados usando diferentes opacidades',
              'Aplicar la técnica de capas base en una esfera',
              'Practicar el pincel de calca para crear patrones repetitivos'
            ]
          },
          {
            id: 2,
            titulo: "Texturas y Materiales",
            contenido: `
              <div class="seccion-contenido">
                <h3>🧱 Aplicación de Texturas y Materiales Realistas</h3>
                
                <div class="conceptos-texturas">
                  <h4>🔍 ¿Qué son las Texturas en 3D?</h4>
                  
                  <div class="definicion-textura">
                    <p><strong>Textura:</strong> Información visual que se aplica a la superficie de un objeto 3D para simular materiales reales como madera, metal, tela, etc.</p>
                    
                    <ul>
                      <li><strong>Función principal:</strong> Dar realismo y credibilidad visual</li>
                      <li><strong>Componentes:</strong> Color, rugosidad, reflectividad, transparencia</li>
                      <li><strong>En Paint 3D:</strong> Bibliotecas predefinidas + personalización</li>
                    </ul>
                  </div>
                </div>

                <div class="biblioteca-texturas">
                  <h4>📚 Biblioteca de Texturas de Paint 3D</h4>
                  
                  <div class="categoria-texturas">
                    <h5>🏠 Materiales Arquitectónicos</h5>
                    <div class="material-grupo">
                      <ul>
                        <li><strong>Madera:</strong>
                          <ul>
                            <li>Roble, pino, caoba</li>
                            <li>Diferentes vetas y colores</li>
                            <li>Ideal para: muebles, pisos, estructuras</li>
                          </ul>
                        </li>
                        <li><strong>Piedra:</strong>
                          <ul>
                            <li>Mármol, granito, ladrillo</li>
                            <li>Texturas rugosas y lisas</li>
                            <li>Ideal para: paredes, monumentos, caminos</li>
                          </ul>
                        </li>
                        <li><strong>Metal:</strong>
                          <ul>
                            <li>Acero, bronce, aluminio</li>
                            <li>Acabados brillantes y opacos</li>
                            <li>Ideal para: maquinaria, decoraciones, estructuras</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="categoria-texturas">
                    <h5>🌿 Materiales Naturales</h5>
                    <div class="material-grupo">
                      <ul>
                        <li><strong>Césped y tierra:</strong> Para paisajes y jardines</li>
                        <li><strong>Agua:</strong> Efectos de transparencia y reflejos</li>
                        <li><strong>Cielo:</strong> Gradientes y nubes para fondos</li>
                        <li><strong>Rocas:</strong> Diferentes tipos de formaciones geológicas</li>
                      </ul>
                    </div>
                  </div>

                  <div class="categoria-texturas">
                    <h5>🎨 Materiales Sintéticos</h5>
                    <div class="material-grupo">
                      <ul>
                        <li><strong>Plásticos:</strong> Brillantes, mate, transparentes</li>
                        <li><strong>Telas:</strong> Algodón, seda, denim</li>
                        <li><strong>Cerámicas:</strong> Lisas, vidriadas, rugosas</li>
                        <li><strong>Vidrio:</strong> Transparente, esmerilado, coloreado</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="aplicacion-texturas">
                  <h4>🖌️ Métodos de Aplicación de Texturas</h4>
                  
                  <div class="metodo-aplicacion">
                    <h5>1️⃣ Aplicación Global</h5>
                    <div class="metodo-detalle">
                      <p><strong>Proceso:</strong> Aplicar la misma textura a todo el objeto</p>
                      <ul>
                        <li><strong>Pasos:**
                          <ol>
                            <li>Seleccionar objeto</li>
                            <li>Ir a panel de texturas</li>
                            <li>Hacer clic en la textura deseada</li>
                            <li>La textura se aplica automáticamente</li>
                          </ol>
                        </li>
                        <li><strong>Mejor para:</strong> Objetos de un solo material</li>
                        <li><strong>Ejemplos:</strong> Mesa de madera, pelota de fútbol, vaso de vidrio</li>
                      </ul>
                    </div>
                  </div>

                  <div class="metodo-aplicacion">
                    <h5>2️⃣ Aplicación Selectiva</h5>
                    <div class="metodo-detalle">
                      <p><strong>Proceso:</strong> Aplicar diferentes texturas a partes específicas</p>
                      <ul>
                        <li><strong>Técnica del pincel de textura:**
                          <ol>
                            <li>Seleccionar herramienta de pincel</li>
                            <li>Elegir textura en lugar de color</li>
                            <li>Pintar solo las áreas deseadas</li>
                            <li>Cambiar textura y repetir</li>
                          </ol>
                        </li>
                        <li><strong>Mejor para:</strong> Objetos compuestos de varios materiales</li>
                        <li><strong>Ejemplos:</strong> Casa (madera + ladrillo), robot (metal + plástico)</li>
                      </ul>
                    </div>
                  </div>

                  <div class="metodo-aplicacion">
                    <h5>3️⃣ Aplicación por Capas</h5>
                    <div class="metodo-detalle">
                      <p><strong>Proceso:</strong> Combinar múltiples texturas para efectos complejos</p>
                      <ul>
                        <li><strong>Técnica de superposición:**
                          <ul>
                            <li>Aplicar textura base (ej: metal)</li>
                            <li>Agregar detalles con pincel (ej: óxido)</li>
                            <li>Añadir efectos finales (ej: brillo)</li>
                          </ul>
                        </li>
                        <li><strong>Mejor para:</strong> Efectos de desgaste, envejecimiento, complejidad</li>
                        <li><strong>Ejemplos:</strong> Metal oxidado, madera vieja, ropa sucia</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="propiedades-materiales">
                  <h4>⚙️ Propiedades de Materiales</h4>
                  
                  <div class="propiedad">
                    <h5>💎 Reflectividad</h5>
                    <ul>
                      <li><strong>Metálico:</strong> Reflejos nítidos como espejos</li>
                      <li><strong>Brillante:</strong> Reflejos suaves, superficie pulida</li>
                      <li><strong>Mate:</strong> Sin reflejos, superficie opaca</li>
                      <li><strong>Aplicación:</strong> Metal = metálico, plástico = brillante, madera = mate</li>
                    </ul>
                  </div>

                  <div class="propiedad">
                    <h5>🌫️ Transparencia</h5>
                    <ul>
                      <li><strong>Transparente:</strong> Se ve completamente a través (vidrio)</li>
                      <li><strong>Translúcido:</strong> Pasa luz pero difusa (cristal esmerilado)</li>
                      <li><strong>Opaco:</strong> No pasa luz (madera, metal)</li>
                      <li><strong>Uso creativo:</strong> Efectos de fantasmas, agua, cristales</li>
                    </ul>
                  </div>

                  <div class="propiedad">
                    <h5>🔆 Emisividad</h5>
                    <ul>
                      <li><strong>Concepto:</strong> Materiales que emiten su propia luz</li>
                      <li><strong>Ejemplos:</strong> Neón, pantallas, fuego, luces LED</li>
                      <li><strong>Efecto:</strong> Ilumina objetos cercanos</li>
                      <li><strong>Uso artístico:</strong> Crear puntos focales, ambientes especiales</li>
                    </ul>
                  </div>
                </div>

                <div class="consejos-texturas">
                  <h4>💡 Consejos para Uso Efectivo de Texturas</h4>
                  
                  <div class="consejo-categoria">
                    <h5>🎯 Realismo</h5>
                    <ul>
                      <li><strong>Coherencia:</strong> Usar texturas que tengan sentido juntas</li>
                      <li><strong>Escala:</strong> Ajustar el tamaño de textura al objeto</li>
                      <li><strong>Observación:</strong> Estudiar materiales reales como referencia</li>
                      <li><strong>Sutileza:</strong> No todos los materiales necesitan ser extremos</li>
                    </ul>
                  </div>

                  <div class="consejo-categoria">
                    <h5>🎨 Estética</h5>
                    <ul>
                      <li><strong>Paleta limitada:</strong> No más de 3-4 tipos de material</li>
                      <li><strong>Contraste:</strong> Combinar materiales mate y brillante</li>
                      <li><strong>Jerarquía:</strong> Material más llamativo para elemento principal</li>
                      <li><strong>Ambiente:</strong> Las texturas deben apoyar el mood general</li>
                    </ul>
                  </div>

                  <div class="consejo-categoria">
                    <h5>⚡ Técnico</h5>
                    <ul>
                      <li><strong>Performance:</strong> Texturas complejas pueden ralentizar el programa</li>
                      <li><strong>Compatibilidad:</strong> Algunas texturas no se exportan bien</li>
                      <li><strong>Backup:</strong> Guardar versión sin texturas como respaldo</li>
                      <li><strong>Pruebas:</strong> Ver el objeto desde múltiples ángulos</li>
                    </ul>
                  </div>
                </div>
              </div>
            `,
            multimedia: {
              imagen: '/images/teoria/texturas-materiales-3d.png',
              video: '/videos/teoria/aplicacion-texturas.mp4'
            },
            actividades: [
              'Aplicar texturas diferentes a las caras de un cubo',
              'Crear un objeto usando aplicación selectiva de texturas',
              'Experimentar con materiales transparentes y emisivos',
              'Combinar texturas por capas para efectos de desgaste'
            ]
          },
          {
            id: 3,
            titulo: "Iluminación y Efectos",
            contenido: `
              <div class="seccion-contenido">
                <h3>💡 Iluminación y Efectos Visuales Avanzados</h3>
                
                <div class="conceptos-iluminacion">
                  <h4>🌟 Fundamentos de Iluminación 3D</h4>
                  
                  <div class="importancia-luz">
                    <h5>🎯 ¿Por qué es Importante la Iluminación?</h5>
                    <ul>
                      <li><strong>Define forma:</strong> Sin luz, no hay percepción de volumen</li>
                      <li><strong>Crea atmósfera:</strong> Cambia completamente el mood</li>
                      <li><strong>Guía atención:</strong> Dirige la vista hacia elementos importantes</li>
                      <li><strong>Aporta realismo:</strong> Simula condiciones de luz real</li>
                      <li><strong>Genera emoción:</strong> Luz cálida = acogedor, fría = tecnológico</li>
                    </ul>
                  </div>

                  <div class="tipos-iluminacion">
                    <h5>🔆 Tipos de Iluminación en Paint 3D</h5>
                    
                    <div class="tipo-luz">
                      <h6>☀️ Luz Ambiental</h6>
                      <ul>
                        <li><strong>Características:</strong> Iluminación general y difusa</li>
                        <li><strong>Función:</strong> Proporciona iluminación base uniforme</li>
                        <li><strong>Efecto:</strong> No genera sombras marcadas</li>
                        <li><strong>Uso:</strong> Evitar zonas completamente oscuras</li>
                        <li><strong>Control:</strong> Ajustable en configuración de escena</li>
                      </ul>
                    </div>

                    <div class="tipo-luz">
                      <h6>🔦 Luz Direccional</h6>
                      <ul>
                        <li><strong>Características:</strong> Proviene de una dirección específica</li>
                        <li><strong>Función:</strong> Simula luz solar o de foco</li>
                        <li><strong>Efecto:</strong> Crea sombras definidas y contraste</li>
                        <li><strong>Uso:</strong> Definir formas y crear dramatismo</li>
                        <li><strong>Control:</strong> Posición y intensidad ajustables</li>
                      </ul>
                    </div>

                    <div class="tipo-luz">
                      <h6>✨ Luz de Punto</h6>
                      <ul>
                        <li><strong>Características:</strong> Emana desde un punto específico</li>
                        <li><strong>Función:</strong> Simula bombillas, velas, LED</li>
                        <li><strong>Efecto:</strong> Iluminación que decrece con la distancia</li>
                        <li><strong>Uso:</strong> Efectos localizados, puntos de interés</li>
                        <li><strong>Control:</strong> Posición, color e intensidad</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="configuracion-luces">
                  <h4>⚙️ Configuración de Iluminación en Paint 3D</h4>
                  
                  <div class="acceso-iluminacion">
                    <h5>🎛️ Acceder a Controles de Luz</h5>
                    <ol>
                      <li>Ir al menú <strong>"Efectos"</strong></li>
                      <li>Seleccionar <strong>"Iluminación"</strong></li>
                      <li>Aparece panel de control de luces</li>
                      <li>Seleccionar tipo de luz a modificar</li>
                      <li>Ajustar parámetros según necesidad</li>
                    </ol>
                  </div>

                  <div class="parametros-luz">
                    <h5>🎨 Parámetros de Control</h5>
                    
                    <div class="parametro">
                      <h6>🔆 Intensidad</h6>
                      <ul>
                        <li><strong>Rango:</strong> 0% (apagada) a 100% (máxima)</li>
                        <li><strong>Efecto:</strong> Controla qué tan brillante es la luz</li>
                        <li><strong>Uso práctico:</strong> 70-80% para luz natural, 40-60% para ambiente</li>
                      </ul>
                    </div>

                    <div class="parametro">
                      <h6>🌈 Color</h6>
                      <ul>
                        <li><strong>Opciones:</strong> Cualquier color del espectro</li>
                        <li><strong>Efecto:</strong> Tinta toda la iluminación con ese color</li>
                        <li><strong>Temperaturas comunes:</strong>
                          <ul>
                            <li>Azul frío: Luz de día, tecnológico</li>
                            <li>Blanco neutro: Oficina, estudio</li>
                            <li>Amarillo cálido: Hogar, atardecer</li>
                            <li>Naranja: Fuego, amanecer</li>
                          </ul>
                        </li>
                      </ul>
                    </div>

                    <div class="parametro">
                      <h6>📍 Posición (solo luces direccional y de punto)</h6>
                      <ul>
                        <li><strong>Control:</strong> Arrastrar indicador visual en la escena</li>
                        <li><strong>Efecto:</strong> Cambia dirección y ángulo de sombras</li>
                        <li><strong>Técnica:</strong> Posiciones altas = más natural</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="esquemas-iluminacion">
                  <h4>🎭 Esquemas de Iluminación Profesionales</h4>
                  
                  <div class="esquema">
                    <h5>🌅 Iluminación Natural Día</h5>
                    <ul>
                      <li><strong>Configuración:</strong>
                        <ul>
                          <li>Luz direccional: Blanca, intensidad 80%, desde arriba</li>
                          <li>Luz ambiental: Azul claro, intensidad 30%</li>
                        </ul>
                      </li>
                      <li><strong>Efecto:</strong> Simula luz solar natural</li>
                      <li><strong>Mejor para:</strong> Objetos arquitectónicos, paisajes</li>
                    </ul>
                  </div>

                  <div class="esquema">
                    <h5>🌙 Iluminación Nocturna</h5>
                    <ul>
                      <li><strong>Configuración:</strong>
                        <ul>
                          <li>Luz direccional: Azul frío, intensidad 40%, lateral</li>
                          <li>Luz de punto: Amarilla cálida, intensidad 60%, localizada</li>
                          <li>Luz ambiental: Azul muy oscuro, intensidad 10%</li>
                        </ul>
                      </li>
                      <li><strong>Efecto:</strong> Ambiente nocturno con fuentes artificiales</li>
                      <li><strong>Mejor para:</strong> Escenas dramáticas, interiores acogedores</li>
                    </ul>
                  </div>

                  <div class="esquema">
                    <h5>🎪 Iluminación Dramática</h5>
                    <ul>
                      <li><strong>Configuración:</strong>
                        <ul>
                          <li>Luz direccional: Blanca intensa, 90%, muy lateral</li>
                          <li>Luz ambiental: Muy baja, 5%</li>
                          <li>Contraste máximo entre luz y sombra</li>
                        </ul>
                      </li>
                      <li><strong>Efecto:</strong> Alto contraste, muy teatral</li>
                      <li><strong>Mejor para:</strong> Presentaciones, arte conceptual</li>
                    </ul>
                  </div>

                  <div class="esquema">
                    <h5>🏢 Iluminación Estudio</h5>
                    <ul>
                      <li><strong>Configuración:</strong>
                        <ul>
                          <li>Múltiples luces de punto: Blancas, intensidad media</li>
                          <li>Luz ambiental: Blanca neutra, intensidad 50%</li>
                          <li>Distribución uniforme</li>
                        </ul>
                      </li>
                      <li><strong>Efecto:</strong> Iluminación pareja, sin sombras duras</li>
                      <li><strong>Mejor para:</strong> Presentaciones de productos, análisis</li>
                    </ul>
                  </div>
                </div>

                <div class="efectos-especiales">
                  <h4>✨ Efectos Especiales y Ambientales</h4>
                  
                  <div class="efecto">
                    <h5>🌈 Efectos de Color</h5>
                    <ul>
                      <li><strong>Saturación:</strong> Aumentar para look fantástico, reducir para realismo</li>
                      <li><strong>Contraste:</strong> Mayor contraste = más drama</li>
                      <li><strong>Temperatura de color:</strong> Cálido vs frío para diferentes moods</li>
                      <li><strong>Viñeteado:</strong> Oscurecer bordes para enfocar centro</li>
                    </ul>
                  </div>

                  <div class="efecto">
                    <h5>🌫️ Efectos Atmosféricos</h5>
                    <ul>
                      <li><strong>Niebla:</strong> Reducir contraste en objetos lejanos</li>
                      <li><strong>Resplandor:</strong> Aureolas alrededor de fuentes de luz</li>
                      <li><strong>Rayos de luz:</strong> Efectos volumétricos simples</li>
                      <li><strong>Partículas:</strong> Simular polvo, nieve, humo</li>
                    </ul>
                  </div>

                  <div class="efecto">
                    <h5>🎯 Efectos de Enfoque</h5>
                    <ul>
                      <li><strong>Profundidad de campo:</strong> Desenfocar fondo para destacar objeto</li>
                      <li><strong>Viñeteado:</strong> Oscurecer periféria para centrar atención</li>
                      <li><strong>Iluminación selectiva:</strong> Iluminar solo el objeto principal</li>
                    </ul>
                  </div>
                </div>

                <div class="workflow-iluminacion">
                  <h4>🔄 Flujo de Trabajo para Iluminación</h4>
                  
                  <div class="paso-workflow">
                    <h5>1️⃣ Análisis de Intención</h5>
                    <ul>
                      <li>¿Qué sensación quiero transmitir?</li>
                      <li>¿Qué hora del día represento?</li>
                      <li>¿Cuál es el objeto más importante?</li>
                    </ul>
                  </div>

                  <div class="paso-workflow">
                    <h5>2️⃣ Configuración Base</h5>
                    <ul>
                      <li>Establecer luz ambiental general</li>
                      <li>Configurar luz direccional principal</li>
                      <li>Verificar que se ven todas las formas</li>
                    </ul>
                  </div>

                  <div class="paso-workflow">
                    <h5>3️⃣ Refinamiento</h5>
                    <ul>
                      <li>Agregar luces de punto para detalles</li>
                      <li>Ajustar intensidades y colores</li>
                      <li>Crear jerarquía visual con iluminación</li>
                    </ul>
                  </div>

                  <div class="paso-workflow">
                    <h5>4️⃣ Efectos Finales</h5>
                    <ul>
                      <li>Aplicar efectos atmosféricos si corresponde</li>
                      <li>Ajustar contraste y saturación</li>
                      <li>Verificar desde múltiples ángulos</li>
                    </ul>
                  </div>
                </div>
              </div>
            `,
            multimedia: {
              imagen: '/images/teoria/iluminacion-efectos-3d.png',
              video: '/videos/teoria/configuracion-luces.mp4'
            },
            actividades: [
              'Experimentar con los 3 tipos de luces en un objeto simple',
              'Crear los 4 esquemas de iluminación propuestos',
              'Modificar el mood de una escena solo cambiando iluminación',
              'Combinar efectos especiales con iluminación personalizada'
            ]
          },
          {
            id: 4,
            titulo: "Proyecto Integrador",
            contenido: `
              <div class="seccion-contenido">
                <h3>🎯 Proyecto Final: Objeto Decorativo Completo</h3>
                
                <div class="especificaciones-proyecto">
                  <h4>📋 Especificaciones del Proyecto</h4>
                  
                  <div class="objetivo-proyecto">
                    <h5>🎯 Objetivo General</h5>
                    <p>Crear un objeto decorativo completo que demuestre dominio de todas las técnicas de pintura y decoración 3D aprendidas en el tema.</p>
                  </div>

                  <div class="requisitos-proyecto">
                    <h5>📝 Requisitos Obligatorios</h5>
                    <ul>
                      <li><strong>Forma base:</strong> Mínimo 3 formas 3D diferentes combinadas</li>
                      <li><strong>Pintura:</strong> Usar al menos 3 herramientas de pintura diferentes</li>
                      <li><strong>Texturas:</strong> Aplicar mínimo 2 tipos de materiales/texturas</li>
                      <li><strong>Iluminación:</strong> Configurar esquema de iluminación intencional</li>
                      <li><strong>Detalles:</strong> Incluir elementos decorativos pintados a mano</li>
                      <li><strong>Tiempo:</strong> 45-60 minutos de trabajo total</li>
                    </ul>
                  </div>

                  <div class="opciones-proyecto">
                    <h5>🎨 Opciones de Proyecto (Elegir 1)</h5>
                    
                    <div class="opcion-proyecto">
                      <h6>🏺 Opción A: Jarrón Decorativo</h6>
                      <ul>
                        <li><strong>Forma base:</strong> Cilindro + esfera (base) + cono (cuello)</li>
                        <li><strong>Texturas sugeridas:</strong> Cerámica base + detalles metálicos</li>
                        <li><strong>Decoración:</strong> Patrones pintados, relieves simulados</li>
                        <li><strong>Dificultad:</strong> Intermedia</li>
                      </ul>
                    </div>

                    <div class="opcion-proyecto">
                      <h6>🕯️ Opción B: Candelabro Artístico</h6>
                      <ul>
                        <li><strong>Forma base:</strong> Cubo (base) + cilindros (velas) + detalles</li>
                        <li><strong>Texturas sugeridas:</strong> Metal envejecido + cera</li>
                        <li><strong>Efectos especiales:</strong> Materiales emisivos para llamas</li>
                        <li><strong>Dificultad:</strong> Avanzada</li>
                      </ul>
                    </div>

                    <div class="opcion-proyecto">
                      <h6>🎭 Opción C: Máscara Decorativa</h6>
                      <ul>
                        <li><strong>Forma base:</strong> Esfera modificada + elementos añadidos</li>
                        <li><strong>Texturas sugeridas:</strong> Madera + detalles metálicos/plásticos</li>
                        <li><strong>Decoración:</strong> Patrones culturales, expresiones</li>
                        <li><strong>Dificultad:</strong> Intermedia-Avanzada</li>
                      </ul>
                    </div>

                    <div class="opcion-proyecto">
                      <h6>🏠 Opción D: Casa Miniatura Fantástica</h6>
                      <ul>
                        <li><strong>Forma base:</strong> Cubos (estructura) + pirámides (techos) + cilindros (torres)</li>
                        <li><strong>Texturas sugeridas:</strong> Piedra + madera + metal</li>
                        <li><strong>Detalles:</strong> Ventanas, puertas, decoraciones arquitectónicas</li>
                        <li><strong>Dificultad:</strong> Intermedia</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="fases-desarrollo">
                  <h4>🏗️ Fases de Desarrollo del Proyecto</h4>
                  
                  <div class="fase-proyecto">
                    <h5>⚡ Fase 1: Preparación (5 min)</h5>
                    <div class="actividades-fase">
                      <ul>
                        <li><strong>Selección:</strong> Elegir una de las 4 opciones de proyecto</li>
                        <li><strong>Referencias:</strong> Buscar 2-3 imágenes de referencia del objeto</li>
                        <li><strong>Paleta:</strong> Decidir colores principales (máximo 4 colores)</li>
                        <li><strong>Iluminación:</strong> Elegir esquema de iluminación inicial</li>
                      </ul>
                    </div>
                  </div>

                  <div class="fase-proyecto">
                    <h5>🏗️ Fase 2: Construcción Base (15 min)</h5>
                    <div class="actividades-fase">
                      <ul>
                        <li><strong>Formas básicas:</strong> Crear y posicionar formas primitivas</li>
                        <li><strong>Proporciones:</strong> Ajustar tamaños y relaciones</li>
                        <li><strong>Estructura:</strong> Verificar que la forma general es correcta</li>
                        <li><strong>Checkpoint:</strong> ¿Se reconoce el objeto sin decoración?</li>
                      </ul>
                    </div>
                  </div>

                  <div class="fase-proyecto">
                    <h5>🎨 Fase 3: Aplicación de Materiales (15 min)</h5>
                    <div class="actividades-fase">
                      <ul>
                        <li><strong>Texturas base:</strong> Aplicar materiales principales</li>
                        <li><strong>Áreas específicas:</strong> Usar aplicación selectiva para diferentes partes</li>
                        <li><strong>Propiedades:</strong> Ajustar reflectividad y transparencia según material</li>
                        <li><strong>Checkpoint:</strong> ¿Los materiales se ven convincentes?</li>
                      </ul>
                    </div>
                  </div>

                  <div class="fase-proyecto">
                    <h5>🖌️ Fase 4: Pintura y Detalles (15 min)</h5>
                    <div class="actividades-fase">
                      <ul>
                        <li><strong>Patrones:</strong> Agregar diseños decorativos con pincel</li>
                        <li><strong>Detalles:</strong> Añadir elementos que enriquezcan el objeto</li>
                        <li><strong>Refinamiento:</strong> Usar pincel de calca para consistencia</li>
                        <li><strong>Checkpoint:</strong> ¿Los detalles mejoran sin sobrecargar?</li>
                      </ul>
                    </div>
                  </div>

                  <div class="fase-proyecto">
                    <h5>💡 Fase 5: Iluminación Final (8 min)</h5>
                    <div class="actividades-fase">
                      <ul>
                        <li><strong>Configuración:</strong> Aplicar esquema de iluminación elegido</li>
                        <li><strong>Ajustes:</strong> Modificar intensidades y posiciones</li>
                        <li><strong>Efectos:</strong> Agregar efectos especiales si corresponde</li>
                        <li><strong>Checkpoint:</strong> ¿La iluminación apoya el concepto?</li>
                      </ul>
                    </div>
                  </div>

                  <div class="fase-proyecto">
                    <h5>✨ Fase 6: Revisión y Pulido (7 min)</h5>
                    <div class="actividades-fase">
                      <ul>
                        <li><strong>Vista múltiple:</strong> Verificar desde todos los ángulos</li>
                        <li><strong>Correcciones:</strong> Ajustar detalles que no funcionen</li>
                        <li><strong>Consistencia:</strong> Verificar unidad visual general</li>
                        <li><strong>Finalización:</strong> Preparar para presentación</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="evaluacion-proyecto">
                  <h4>📊 Criterios de Evaluación</h4>
                  
                  <div class="rubrica-evaluacion">
                    <h5>✅ Lista de Verificación Final</h5>
                    
                    <div class="categoria-evaluacion">
                      <h6>🏗️ Construcción (25%)</h6>
                      <ul>
                        <li>□ ¿Usa mínimo 3 formas 3D diferentes?</li>
                        <li>□ ¿Las proporciones son realistas?</li>
                        <li>□ ¿La estructura se ve sólida?</li>
                        <li>□ ¿Se reconoce claramente el objeto?</li>
                      </ul>
                    </div>

                    <div class="categoria-evaluacion">
                      <h6>🎨 Pintura y Textura (30%)</h6>
                      <ul>
                        <li>□ ¿Usa mínimo 3 herramientas de pintura?</li>
                        <li>□ ¿Aplica mínimo 2 tipos de materiales/texturas?</li>
                        <li>□ ¿Los materiales son apropiados para el objeto?</li>
                        <li>□ ¿La aplicación es limpia y consistente?</li>
                      </ul>
                    </div>

                    <div class="categoria-evaluacion">
                      <h6>💡 Iluminación (20%)</h6>
                      <ul>
                        <li>□ ¿Configura esquema de iluminación intencional?</li>
                        <li>□ ¿La iluminación define bien las formas?</li>
                        <li>□ ¿El mood es apropiado para el objeto?</li>
                        <li>□ ¿No hay zonas excesivamente oscuras o brillantes?</li>
                      </ul>
                    </div>

                    <div class="categoria-evaluacion">
                      <h6>✨ Creatividad y Acabado (25%)</h6>
                      <ul>
                        <li>□ ¿Incluye detalles decorativos originales?</li>
                        <li>□ ¿Demuestra creatividad en la interpretación?</li>
                        <li>□ ¿El acabado general se ve profesional?</li>
                        <li>□ ¿Funciona desde múltiples ángulos de vista?</li>
                      </ul>
                    </div>
                  </div>

                  <div class="niveles-logro">
                    <h5>🏆 Niveles de Logro</h5>
                    <ul>
                      <li><strong>🥇 Excelente (90-100%):</strong> Cumple todos los criterios con alta calidad</li>
                      <li><strong>🥈 Bueno (80-89%):</strong> Cumple la mayoría de criterios con calidad aceptable</li>
                      <li><strong>🥉 Satisfactorio (70-79%):</strong> Cumple criterios básicos</li>
                      <li><strong>📝 Necesita mejora (<70%):</strong> No cumple varios criterios importantes</li>
                    </ul>
                  </div>
                </div>

                <div class="consejos-proyecto">
                  <h4>💡 Consejos para el Éxito del Proyecto</h4>
                  
                  <div class="consejo-categoria">
                    <h5>⏱️ Gestión del Tiempo</h5>
                    <ul>
                      <li><strong>No perfectes temprano:</strong> Avanza a la siguiente fase aunque no esté perfecto</li>
                      <li><strong>Prioriza impact:</strong> Enfócate en elementos que más se noten</li>
                      <li><strong>Guarda frecuentemente:</strong> Evita perder trabajo por errores</li>
                      <li><strong>Buffer time:</strong> Deja 5 minutos extra para imprevistos</li>
                    </ul>
                  </div>

                  <div class="consejo-categoria">
                    <h5>🎨 Aspectos Artísticos</h5>
                    <ul>
                      <li><strong>Unidad visual:</strong> Todo debe sentirse parte del mismo objeto</li>
                      <li><strong>Menos es más:</strong> Mejor pocos detalles bien hechos que muchos mediocres</li>
                      <li><strong>Contraste:</strong> Usa materiales diferentes para crear interés</li>
                      <li><strong>Función sigue forma:</strong> Los detalles deben tener sentido</li>
                    </ul>
                  </div>

                  <div class="consejo-categoria">
                    <h5>🔧 Aspectos Técnicos</h5>
                    <ul>
                      <li><strong>Vista frecuente:</strong> Rota el objeto constantemente para verificar</li>
                      <li><strong>Zoom estratégico:</strong> Acerca para detalles, aleja para visión general</li>
                      <li><strong>Capas mentales:</strong> Trabaja de general a específico</li>
                      <li><strong>Backup plan:</strong> Ten una versión simple como respaldo</li>
                    </ul>
                  </div>
                </div>
              </div>
            `,
            multimedia: {
              imagen: '/images/teoria/proyecto-decorativo-3d.png',
              video: '/videos/teoria/proyecto-integrador-completo.mp4'
            },
            actividades: [
              'Completar uno de los 4 proyectos propuestos siguiendo todas las fases',
              'Documentar el proceso: tomar capturas de cada fase completada',
              'Autoevaluar usando la lista de verificación proporcionada',
              'Presentar el proyecto final explicando decisiones creativas tomadas'
            ]
          }
        ],
        recursos: {
          documentos: [
            {
              titulo: "Manual de Pintura 3D Avanzada",
              tipo: "PDF",
              url: "/recursos/paint-3d/pintura-3d-avanzada.pdf"
            },
            {
              titulo: "Guía de Texturas y Materiales",
              tipo: "PDF",
              url: "/recursos/paint-3d/texturas-materiales-guia.pdf"
            },
            {
              titulo: "Teoría de Iluminación 3D",
              tipo: "PDF",
              url: "/recursos/paint-3d/iluminacion-3d-teoria.pdf"
            },
            {
              titulo: "Plantillas de Proyectos Decorativos",
              tipo: "ZIP",
              url: "/recursos/paint-3d/plantillas-proyectos-decorativos.zip"
            }
          ],
          videos: [
            {
              titulo: "Masterclass: Pintura y Decoración 3D",
              duracion: "25 min",
              url: "/videos/masterclass-pintura-decoracion-3d.mp4"
            },
            {
              titulo: "Técnicas Avanzadas de Texturizado",
              duracion: "18 min",
              url: "/videos/tecnicas-texturizado-avanzadas.mp4"
            },
            {
              titulo: "Configuración Profesional de Luces",
              duracion: "16 min",
              url: "/videos/iluminacion-profesional-3d.mp4"
            },
            {
              titulo: "Proyecto Completo: Jarrón Decorativo",
              duracion: "30 min",
              url: "/videos/proyecto-jarron-completo.mp4"
            }
          ],
          enlaces: [
            {
              titulo: "Biblioteca de Texturas Gratuitas",
              url: "https://www.textures.com/category/3d-materials"
            },
            {
              titulo: "Teoría del Color en 3D",
              url: "https://www.adobe.com/creativecloud/design/discover/color-theory"
            },
            {
              titulo: "Inspiración: Objetos Decorativos 3D",
              url: "https://www.pinterest.com/search/pins/?q=3d%20decorative%20objects"
            },
            {
              titulo: "Comunidad de Artistas Paint 3D",
              url: "https://techcommunity.microsoft.com/t5/paint-3d/bd-p/Paint3D"
            }
          ]
        },
        evaluacion: {
          preRequisitos: ["Tema 1: Introducción a Paint 3D", "Tema 2: Creación de Objetos 3D"],
          criterios: [
            "Dominar todas las herramientas de pintura 3D disponibles",
            "Aplicar texturas y materiales de forma efectiva y realista",
            "Configurar esquemas de iluminación apropiados para diferentes objetivos",
            "Crear efectos visuales avanzados usando combinación de técnicas",
            "Completar proyecto integrador con calidad profesional",
          ],
          tiempoEstimado: "28 minutos"
        }
      },
      '4': {
        titulo: "Escenarios y Composición",
        duracion: "25-30 minutos",
        objetivos: [
          "Dominar técnicas de composición visual en 3D",
          "Crear escenas narrativas coherentes y atractivas",
          "Organizar objetos efectivamente en el espacio 3D",
          "Configurar fondos y ambientes convincentes"
        ],
        secciones: [
          {
            id: 1,
            titulo: "Fundamentos de Composición 3D",
            contenido: `
              <div class="seccion-contenido">
                <h3>🎭 Principios de Composición Visual</h3>
                
                <div class="composicion-conceptos">
                  <h4>🎯 ¿Qué es la Composición en 3D?</h4>
                  <p><strong>Composición:</strong> La organización intencional de elementos visuales en el espacio tridimensional para crear escenas coherentes, atractivas y narrativamente efectivas.</p>
                  
                  <div class="objetivos-composicion">
                    <h5>🎪 Objetivos de una Buena Composición</h5>
                    <ul>
                      <li><strong>Guiar la atención:</strong> Dirigir la vista hacia elementos importantes</li>
                      <li><strong>Crear equilibrio:</strong> Distribuir peso visual armoniosamente</li>
                      <li><strong>Generar interés:</strong> Mantener al espectador enganchado</li>
                      <li><strong>Contar historia:</strong> Transmitir narrativa sin palabras</li>
                      <li><strong>Provocar emoción:</strong> Generar respuesta emocional específica</li>
                    </ul>
                  </div>
                </div>

                <div class="reglas-composicion">
                  <h4>📐 Reglas Fundamentales de Composición</h4>
                  
                  <div class="regla-tercios">
                    <h5>⚡ Regla de los Tercios 3D</h5>
                    <ul>
                      <li><strong>Concepto:</strong> Dividir el espacio en 9 secciones (3x3)</li>
                      <li><strong>Puntos de interés:</strong> Colocar elementos importantes en intersecciones</li>
                      <li><strong>En 3D:</strong> Aplicar tanto horizontal como en profundidad</li>
                      <li><strong>Resultado:</strong> Composición más dinámica y natural</li>
                    </ul>
                  </div>

                  <div class="equilibrio-visual">
                    <h5>⚖️ Equilibrio Visual</h5>
                    <ul>
                      <li><strong>Simétrico:</strong> Elementos idénticos a ambos lados (formal, estable)</li>
                      <li><strong>Asimétrico:</strong> Diferentes elementos que se balancean (dinámico)</li>
                      <li><strong>Radial:</strong> Elementos organizados alrededor de un centro</li>
                      <li><strong>En 3D:</strong> Considerar peso visual en todas las dimensiones</li>
                    </ul>
                  </div>

                  <div class="jerarquia-visual">
                    <h5>🏆 Jerarquía Visual</h5>
                    <ul>
                      <li><strong>Elemento principal:</strong> Más grande, iluminado, centrado</li>
                      <li><strong>Elementos secundarios:</strong> Apoyan al principal sin competir</li>
                      <li><strong>Elementos de fondo:</strong> Contexto sin distraer</li>
                      <li><strong>Técnicas:</strong> Tamaño, color, contraste, posición, iluminación</li>
                    </ul>
                  </div>

                  <div class="lineas-guia">
                    <h5>➡️ Líneas Guía y Flujo Visual</h5>
                    <ul>
                      <li><strong>Líneas implícitas:</strong> Direcciones que crean los objetos</li>
                      <li><strong>Flujo en Z:</strong> Guiar la vista hacia la profundidad</li>
                      <li><strong>Patrones de lectura:</strong> Izquierda-derecha, arriba-abajo</li>
                      <li><strong>Puntos de escape:</strong> Evitar que la vista salga de la escena</li>
                    </ul>
                  </div>
                </div>

                <div class="tipos-encuadre">
                  <h4>📷 Tipos de Encuadre en 3D</h4>
                  
                  <div class="planos-composicion">
                    <h5>🎬 Planos de Composición</h5>
                    <ul>
                      <li><strong>Primer plano:</strong> Objeto principal ocupa mayor espacio</li>
                      <li><strong>Plano medio:</strong> Equilibrio entre objeto y entorno</li>
                      <li><strong>Plano general:</strong> Enfoque en el ambiente completo</li>
                      <li><strong>Plano detalle:</strong> Zoom en características específicas</li>
                    </ul>
                  </div>

                  <div class="angulos-vision">
                    <h5>👁️ Ángulos de Visión</h5>
                    <ul>
                      <li><strong>Vista frontal:</strong> Formal, directa, simétrica</li>
                      <li><strong>Vista 3/4:</strong> Dinámica, muestra volumen</li>
                      <li><strong>Vista aérea:</strong> Contexto espacial completo</li>
                      <li><strong>Vista baja:</strong> Dramatismo, monumentalidad</li>
                    </ul>
                  </div>
                </div>
              </div>
            `,
            multimedia: {
              imagen: '/images/teoria/composicion-3d-fundamentos.png',
              video: '/videos/teoria/principios-composicion-3d.mp4'
            },
            actividades: [
              'Aplicar regla de tercios en una escena simple',
              'Crear composiciones simétricas y asimétricas',
              'Experimentar con diferentes ángulos de visión',
              'Practicar jerarquía visual con iluminación'
            ]
          },
          {
            id: 2,
            titulo: "Organización de Objetos",
            contenido: `
              <div class="seccion-contenido">
                <h3>🏗️ Distribución Espacial Efectiva</h3>
                
                <div class="principios-organizacion">
                  <h4>📍 Principios de Organización Espacial</h4>
                  
                  <div class="proximidad-agrupacion">
                    <h5>🤝 Proximidad y Agrupación</h5>
                    <ul>
                      <li><strong>Ley de proximidad:</strong> Objetos cercanos se perciben como grupo</li>
                      <li><strong>Espaciado consistente:</strong> Distancias regulares crean orden</li>
                      <li><strong>Grupos funcionales:</strong> Agrupar por propósito o tema</li>
                      <li><strong>Separación clara:</strong> Espacios vacíos definen límites</li>
                    </ul>
                  </div>

                  <div class="escala-proporcion">
                    <h5>📏 Escala y Proporción</h5>
                    <ul>
                      <li><strong>Escala relativa:</strong> Tamaños coherentes entre objetos</li>
                      <li><strong>Proporción áurea:</strong> Relaciones 1:1.618 para armonía</li>
                      <li><strong>Escala humana:</strong> Referencia comprensible de tamaños</li>
                      <li><strong>Jerarquía de tamaños:</strong> Importante = grande</li>
                    </ul>
                  </div>

                  <div class="ritmo-repeticion">
                    <h5>🎵 Ritmo y Repetición</h5>
                    <ul>
                      <li><strong>Patrones regulares:</strong> Repetición uniforme crea calma</li>
                      <li><strong>Variaciones rítmicas:</strong> Cambios graduales generan interés</li>
                      <li><strong>Puntos de ruptura:</strong> Interrupciones estratégicas</li>
                      <li><strong>Progresiones:</strong> Secuencias de cambio gradual</li>
                    </ul>
                  </div>
                </div>

                <div class="tecnicas-organizacion">
                  <h4>🎯 Técnicas de Organización</h4>
                  
                  <div class="grillas-guias">
                    <h5>📐 Sistemas de Grillas</h5>
                    <ul>
                      <li><strong>Grilla regular:</strong> Posiciones uniformes y predecibles</li>
                      <li><strong>Grilla modular:</strong> Subdivisiones flexibles</li>
                      <li><strong>Grilla radial:</strong> Organización circular o espiral</li>
                      <li><strong>Grilla libre:</strong> Organización intuitiva pero equilibrada</li>
                    </ul>
                  </div>

                  <div class="caminos-circulacion">
                    <h5>🛤️ Caminos de Circulación</h5>
                    <ul>
                      <li><strong>Flujos principales:</strong> Rutas obvias de movimiento visual</li>
                      <li><strong>Circulación secundaria:</strong> Caminos de descubrimiento</li>
                      <li><strong>Puntos de pausa:</strong> Lugares de descanso visual</li>
                      <li><strong>Conexiones lógicas:</strong> Transiciones naturales</li>
                    </ul>
                  </div>

                  <div class="centros-interes">
                    <h5>⭐ Centros de Interés</h5>
                    <ul>
                      <li><strong>Foco principal:</strong> Un elemento dominante</li>
                      <li><strong>Focos secundarios:</strong> Apoyan sin competir</li>
                      <li><strong>Distribución equilibrada:</strong> Evitar competencia visual</li>
                      <li><strong>Transiciones suaves:</strong> Conexiones entre focos</li>
                    </ul>
                  </div>
                </div>

                <div class="estrategias-agrupacion">
                  <h4>🎪 Estrategias de Agrupación</h4>
                  
                  <div class="agrupacion-funcional">
                    <h5>⚙️ Agrupación Funcional</h5>
                    <ul>
                      <li><strong>Por uso:</strong> Objetos con propósito similar juntos</li>
                      <li><strong>Por proceso:</strong> Secuencia lógica de actividades</li>
                      <li><strong>Por frecuencia:</strong> Acceso según importancia</li>
                      <li><strong>Por compatibilidad:</strong> Elementos que funcionan bien juntos</li>
                    </ul>
                  </div>

                  <div class="agrupacion-visual">
                    <h5>👁️ Agrupación Visual</h5>
                    <ul>
                      <li><strong>Por color:</strong> Paletas cromáticas coherentes</li>
                      <li><strong>Por forma:</strong> Geometrías complementarias</li>
                      <li><strong>Por textura:</strong> Acabados similares</li>
                      <li><strong>Por estilo:</strong> Coherencia estética general</li>
                    </ul>
                  </div>

                  <div class="agrupacion-narrativa">
                    <h5>📖 Agrupación Narrativa</h5>
                    <ul>
                      <li><strong>Por escena:</strong> Elementos de una misma historia</li>
                      <li><strong>Por temporalidad:</strong> Secuencia cronológica</li>
                      <li><strong>Por personaje:</strong> Objetos relacionados con actores</li>
                      <li><strong>Por mood:</strong> Atmósfera emocional común</li>
                    </ul>
                  </div>
                </div>
              </div>
            `,
            multimedia: {
              imagen: '/images/teoria/organizacion-objetos-3d.png',
              video: '/videos/teoria/distribucion-espacial.mp4'
            },
            actividades: [
              'Crear agrupaciones usando proximidad y escala',
              'Organizar objetos en sistema de grilla',
              'Establecer centros de interés con jerarquía clara',
              'Diseñar caminos de circulación visual'
            ]
          },
          {
            id: 3,
            titulo: "Configuración de Fondos",
            contenido: `
              <div class="seccion-contenido">
                <h3>🌄 Ambientes y Contextos Visuales</h3>
                
                <div class="tipos-fondos">
                  <h4>🎨 Tipos de Fondos en Paint 3D</h4>
                  
                  <div class="fondos-solidos">
                    <h5>🎯 Fondos Sólidos</h5>
                    <ul>
                      <li><strong>Neutros:</strong> Grises, blancos - no compiten con objetos</li>
                      <li><strong>Complementarios:</strong> Colores que realzan el objeto principal</li>
                      <li><strong>Dramáticos:</strong> Negros, colores intensos para impacto</li>
                      <li><strong>Uso:</strong> Presentaciones, estudios de producto</li>
                    </ul>
                  </div>

                  <div class="fondos-degradados">
                    <h5>🌈 Fondos Degradados</h5>
                    <ul>
                      <li><strong>Radiales:</strong> Desde centro hacia bordes</li>
                      <li><strong>Lineales:</strong> Transición direccional</li>
                      <li><strong>Atmósfericos:</strong> Simulan condiciones naturales</li>
                      <li><strong>Ventaja:</strong> Añaden profundidad sin distraer</li>
                    </ul>
                  </div>

                  <div class="fondos-texturizados">
                    <h5>🧱 Fondos Texturizados</h5>
                    <ul>
                      <li><strong>Sutiles:</strong> Texturas suaves que añaden interés</li>
                      <li><strong>Contextuales:</strong> Relacionados con la escena</li>
                      <li><strong>Abstractos:</strong> Patrones no representativos</li>
                      <li><strong>Cuidado:</strong> No deben competir con objetos principales</li>
                    </ul>
                  </div>

                  <div class="fondos-ambientales">
                    <h5>🏞️ Fondos Ambientales</h5>
                    <ul>
                      <li><strong>Paisajes:</strong> Escenarios naturales completos</li>
                      <li><strong>Arquitectónicos:</strong> Espacios construidos</li>
                      <li><strong>Abstractos:</strong> Ambientes conceptuales</li>
                      <li><strong>Función:</strong> Contexto narrativo específico</li>
                    </ul>
                  </div>
                </div>

                <div class="tecnicas-configuracion">
                  <h4>⚙️ Técnicas de Configuración</h4>
                  
                  <div class="profundidad-campo">
                    <h5>🔍 Profundidad de Campo</h5>
                    <ul>
                      <li><strong>Foco selectivo:</strong> Objetos principales nítidos</li>
                      <li><strong>Desenfoque progresivo:</strong> Menos nitidez hacia atrás</li>
                      <li><strong>Separación visual:</strong> Distinguir planos claramente</li>
                      <li><strong>Herramientas:</strong> Efectos de desenfoque en Paint 3D</li>
                    </ul>
                  </div>

                  <div class="perspectiva-atmosferica">
                    <h5>🌫️ Perspectiva Atmosférica</h5>
                    <ul>
                      <li><strong>Contraste reducido:</strong> Menos contraste en distancia</li>
                      <li><strong>Colores fríos:</strong> Azules hacia el fondo</li>
                      <li><strong>Detalles simplificados:</strong> Menos definición lejos</li>
                      <li><strong>Efecto:</strong> Sensación natural de distancia</li>
                    </ul>
                  </div>

                  <div class="escalas-referencia">
                    <h5>📏 Escalas de Referencia</h5>
                    <ul>
                      <li><strong>Elementos conocidos:</strong> Objetos de tamaño familiar</li>
                      <li><strong>Progresión de tamaños:</strong> Grande a pequeño hacia fondo</li>
                      <li><strong>Superposcición:</strong> Objetos que se tapan parcialmente</li>
                      <li><strong>Líneas de fuga:</strong> Convergencia hacia puntos lejanos</li>
                    </ul>
                  </div>
                </div>

                <div class="ambientes-tematicos">
                  <h4>🎭 Ambientes Temáticos</h4>
                  
                  <div class="naturales">
                    <h5>🌿 Ambientes Naturales</h5>
                    <ul>
                      <li><strong>Paisajes:</strong> Montañas, bosques, océanos</li>
                      <li><strong>Cielos:</strong> Diferentes condiciones atmosféricas</li>
                      <li><strong>Elementos:</strong> Agua, rocas, vegetación básica</li>
                      <li><strong>Iluminación:</strong> Solar natural, dorada, azul</li>
                    </ul>
                  </div>

                  <div class="urbanos">
                    <h5>🏙️ Ambientes Urbanos</h5>
                    <ul>
                      <li><strong>Arquitecturas:</strong> Edificios, calles, plazas</li>
                      <li><strong>Elementos urbanos:</strong> Postes, señales, mobiliario</li>
                      <li><strong>Atmósfera:</strong> Luces artificiales, reflejos</li>
                      <li><strong>Mood:</strong> Moderno, vintage, futurista</li>
                    </ul>
                  </div>

                  <div class="fantasticos">
                    <h5>✨ Ambientes Fantásticos</h5>
                    <ul>
                      <li><strong>Espaciales:</strong> Estrellas, planetas, galaxias</li>
                      <li><strong>Mágicos:</strong> Colores irreales, efectos especiales</li>
                      <li><strong>Surrealistas:</strong> Combinaciones imposibles</li>
                      <li><strong>Libertad creativa:</strong> Sin restricciones realistas</li>
                    </ul>
                  </div>
                </div>
              </div>
            `,
            multimedia: {
              imagen: '/images/teoria/configuracion-fondos-3d.png',
              video: '/videos/teoria/ambientes-visuales.mp4'
            },
            actividades: [
              'Crear escena con fondo degradado efectivo',
              'Configurar profundidad de campo en composición',
              'Diseñar ambiente temático coherente',
              'Aplicar perspectiva atmosférica'
            ]
          },
          {
            id: 4,
            titulo: "Proyecto Final de Escena",
            contenido: `
              <div class="seccion-contenido">
                <h3>🎬 Creación de Escena Narrativa Completa</h3>
                
                <div class="especificaciones-proyecto">
                  <h4>📋 Proyecto Final: Escena Temática</h4>
                  
                  <div class="requisitos-basicos">
                    <h5>✅ Requisitos Obligatorios</h5>
                    <ul>
                      <li><strong>Objetos:</strong> Mínimo 5 objetos 3D organizados</li>
                      <li><strong>Composición:</strong> Aplicar reglas de composición</li>
                      <li><strong>Fondo:</strong> Ambiente contextual apropiado</li>
                      <li><strong>Narrativa:</strong> Historia clara y coherente</li>
                      <li><strong>Iluminación:</strong> Esquema que apoye la narrativa</li>
                    </ul>
                  </div>

                  <div class="opciones-tematicas">
                    <h5>🎨 Opciones Temáticas</h5>
                    
                    <div class="opcion-a">
                      <h6>🏠 A) Escena Doméstica</h6>
                      <ul>
                        <li><strong>Concepto:</strong> Momento cotidiano en el hogar</li>
                        <li><strong>Objetos sugeridos:</strong> Muebles, decoración, elementos personales</li>
                        <li><strong>Narrativa:</strong> Actividad diaria, comodidad, familiaridad</li>
                      </ul>
                    </div>

                    <div class="opcion-b">
                      <h6>🌟 B) Escena Fantástica</h6>
                      <ul>
                        <li><strong>Concepto:</strong> Mundo imaginario o mágico</li>
                        <li><strong>Objetos sugeridos:</strong> Elementos imposibles, formas orgánicas</li>
                        <li><strong>Narrativa:</strong> Aventura, misterio, exploración</li>
                      </ul>
                    </div>

                    <div class="opcion-c">
                      <h6>🎪 C) Escena de Exhibición</h6>
                      <ul>
                        <li><strong>Concepto:</strong> Presentación de productos o arte</li>
                        <li><strong>Objetos sugeridos:</strong> Pedestales, marcos, iluminación focal</li>
                        <li><strong>Narrativa:</strong> Elegancia, sofisticación, valor</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="proceso-desarrollo">
                  <h4>🏗️ Proceso de Desarrollo (45 min)</h4>
                  
                  <div class="fase-planificacion">
                    <h5>📝 Fase 1: Planificación (8 min)</h5>
                    <ul>
                      <li><strong>Concepto:</strong> Definir historia y mood</li>
                      <li><strong>Boceto mental:</strong> Visualizar composición general</li>
                      <li><strong>Lista de objetos:</strong> Elementos necesarios</li>
                      <li><strong>Paleta:</strong> Colores principales (3-4 máximo)</li>
                    </ul>
                  </div>

                  <div class="fase-construccion">
                    <h5>🏗️ Fase 2: Construcción Básica (12 min)</h5>
                    <ul>
                      <li><strong>Objetos principales:</strong> Crear elementos centrales</li>
                      <li><strong>Posicionamiento inicial:</strong> Distribución aproximada</li>
                      <li><strong>Escalas relativas:</strong> Proporciones correctas</li>
                      <li><strong>Fondo básico:</strong> Configuración inicial del ambiente</li>
                    </ul>
                  </div>

                  <div class="fase-composicion">
                    <h5>🎯 Fase 3: Refinamiento Compositivo (10 min)</h5>
                    <ul>
                      <li><strong>Regla de tercios:</strong> Reposicionar elementos clave</li>
                      <li><strong>Equilibrio visual:</strong> Balancear pesos visuales</li>
                      <li><strong>Jerarquía:</strong> Destacar elemento principal</li>
                      <li><strong>Flujo visual:</strong> Crear caminos de lectura</li>
                    </ul>
                  </div>

                  <div class="fase-ambientacion">
                    <h5>🌄 Fase 4: Ambientación (10 min)</h5>
                    <ul>
                      <li><strong>Fondo definitivo:</strong> Completar ambiente</li>
                      <li><strong>Profundidad:</strong> Configurar planos visuales</li>
                      <li><strong>Contextualización:</strong> Elementos que apoyen narrativa</li>
                      <li><strong>Coherencia visual:</strong> Unificar estilo general</li>
                    </ul>
                  </div>

                  <div class="fase-finalizacion">
                    <h5>✨ Fase 5: Finalización (5 min)</h5>
                    <ul>
                      <li><strong>Iluminación final:</strong> Ajustar luces para narrativa</li>
                      <li><strong>Detalles finales:</strong> Pequeños elementos que enriquezcan</li>
                      <li><strong>Revisión global:</strong> Vista desde múltiples ángulos</li>
                      <li><strong>Verificación narrativa:</strong> ¿Se entiende la historia?</li>
                    </ul>
                  </div>
                </div>

                <div class="criterios-evaluacion">
                  <h4>📊 Criterios de Evaluación</h4>
                  
                  <div class="composicion-eval">
                    <h5>🎨 Composición Visual (30%)</h5>
                    <ul>
                      <li>□ Aplica reglas compositivas efectivamente</li>
                      <li>□ Equilibrio visual apropiado</li>
                      <li>□ Jerarquía clara de elementos</li>
                      <li>□ Flujo visual guiado</li>
                    </ul>
                  </div>

                  <div class="narrativa-eval">
                    <h5>📖 Coherencia Narrativa (25%)</h5>
                    <ul>
                      <li>□ Historia clara y comprensible</li>
                      <li>□ Elementos apoyan la narrativa</li>
                      <li>□ Mood consistente</li>
                      <li>□ Contexto apropiado</li>
                    </ul>
                  </div>

                  <div class="tecnica-eval">
                    <h5>⚙️ Calidad Técnica (25%)</h5>
                    <ul>
                      <li>□ Objetos bien construidos</li>
                      <li>□ Escalas y proporciones correctas</li>
                      <li>□ Iluminación efectiva</li>
                      <li>□ Configuración de fondo apropiada</li>
                    </ul>
                  </div>

                  <div class="creatividad-eval">
                    <h5>✨ Creatividad y Originalidad (20%)</h5>
                    <ul>
                      <li>□ Interpretación original del tema</li>
                      <li>□ Elementos creativos únicos</li>
                      <li>□ Soluciones innovadoras</li>
                      <li>□ Impacto visual general</li>
                    </ul>
                  </div>
                </div>
              </div>
            `,
            multimedia: {
              imagen: '/images/teoria/proyecto-escena-completa.png',
              video: '/videos/teoria/escena-narrativa-proceso.mp4'
            },
            actividades: [
              'Desarrollar concepto narrativo detallado',
              'Crear escena completa siguiendo las 5 fases',
              'Aplicar todos los principios compositivos aprendidos',
              'Presentar proyecto explicando decisiones creativas'
            ]
          }
        ],
        recursos: {
          documentos: [
            {
              titulo: "Guía de Composición 3D Avanzada",
              tipo: "PDF",
              url: "/recursos/paint-3d/composicion-3d-guia.pdf"
            },
            {
              titulo: "Manual de Escenarios y Ambientes",
              tipo: "PDF",
              url: "/recursos/paint-3d/escenarios-ambientes.pdf"
            },
            {
              titulo: "Plantillas de Proyectos Narrativos",
              tipo: "ZIP",
              url: "/recursos/paint-3d/plantillas-narrativas.zip"
            }
          ],
          videos: [
            {
              titulo: "Masterclass: Composición y Narrativa Visual",
              duracion: "22 min",
              url: "/videos/composicion-narrativa-3d.mp4"
            },
            {
              titulo: "Técnicas de Organización Espacial",
              duracion: "15 min",
              url: "/videos/organizacion-espacial.mp4"
            },
            {
              titulo: "Configuración de Ambientes Efectivos",
              duracion: "18 min",
              url: "/videos/ambientes-efectivos.mp4"
            }
          ],
          enlaces: [
            {
              titulo: "Principios de Composición Visual",
              url: "https://www.adobe.com/creativecloud/design/discover/composition-techniques"
            },
            {
              titulo: "Teoría del Color en Ambientes 3D",
              url: "https://www.color-theory.com/3d-environments"
            },
            {
              titulo: "Galería de Inspiración: Escenas 3D",
              url: "https://www.artstation.com/search?q=3d%20scenes"
            }
          ]
        },
        evaluacion: {
          preRequisitos: ["Tema 1: Introducción a Paint 3D", "Tema 2: Creación de Objetos 3D", "Tema 3: Pintura y Decoración 3D"],
          criterios: [
            "Aplicar principios de composición visual efectivamente",
            "Organizar objetos en el espacio 3D de manera coherente",
            "Configurar fondos y ambientes apropiados para la narrativa",
            "Crear escenas que comuniquen historias claras",
            "Demostrar dominio técnico en construcción de escenarios",
          ],
          tiempoEstimado: "30 minutos"
        }
      },
      '5': {
        titulo: "Exposición Creativa",
        duracion: "30-35 minutos",
        objetivos: [
          "Dominar técnicas de presentación visual efectiva",
          "Crear portafolios digitales profesionales",
          "Configurar exposiciones virtuales atractivas",
          "Desarrollar narrativas visuales convincentes",
          "Aplicar principios de storytelling visual"
        ],
        secciones: [
          {
            id: 1,
            titulo: "Preparación de Trabajos",
            contenido: `
              <div class="seccion-contenido">
                <h3>🎯 Optimización para Presentación</h3>
                
                <div class="principios-preparacion">
                  <h4>📋 Principios de Preparación</h4>
                  
                  <div class="seleccion-obras">
                    <h5>🎨 Selección de Obras</h5>
                    <ul>
                      <li><strong>Criterio de calidad:</strong> Solo mejores trabajos del curso</li>
                      <li><strong>Diversidad técnica:</strong> Mostrar diferentes habilidades</li>
                      <li><strong>Progresión narrativa:</strong> Historia de aprendizaje</li>
                      <li><strong>Coherencia temática:</strong> Hilo conductor visual</li>
                      <li><strong>Cantidad óptima:</strong> 8-12 piezas para mantener atención</li>
                    </ul>
                  </div>

                  <div class="optimizacion-visual">
                    <h5>✨ Optimización Visual</h5>
                    <ul>
                      <li><strong>Capturas de pantalla:</strong> Máxima resolución disponible</li>
                      <li><strong>Ángulos múltiples:</strong> Vistas desde diferentes perspectivas</li>
                      <li><strong>Detalles destacados:</strong> Zoom en elementos técnicos</li>
                      <li><strong>Proceso visible:</strong> Capturas de fases de creación</li>
                      <li><strong>Contexto claro:</strong> Mostrar interfaz de Paint 3D</li>
                    </ul>
                  </div>

                  <div class="documentacion-proceso">
                    <h5>📝 Documentación del Proceso</h5>
                    <ul>
                      <li><strong>Concepto inicial:</strong> Idea original y bocetos mentales</li>
                      <li><strong>Decisiones técnicas:</strong> Por qué ciertas herramientas</li>
                      <li><strong>Desafíos enfrentados:</strong> Problemas y soluciones</li>
                      <li><strong>Aprendizajes clave:</strong> Habilidades desarrolladas</li>
                      <li><strong>Reflexión personal:</strong> Satisfacción y crecimiento</li>
                    </ul>
                  </div>
                </div>

                <div class="formatos-presentacion">
                  <h4>🖼️ Formatos de Presentación</h4>
                  
                  <div class="imagenes-estaticas">
                    <h5>📸 Imágenes Estáticas</h5>
                    <ul>
                      <li><strong>Vista principal:</strong> Ángulo que mejor muestra el trabajo</li>
                      <li><strong>Vista de proceso:</strong> Pantalla de Paint 3D en acción</li>
                      <li><strong>Detalles técnicos:</strong> Zoom en características especiales</li>
                      <li><strong>Comparaciones:</strong> Antes/después de mejoras</li>
                      <li><strong>Resolución:</strong> 1920x1080 mínimo para claridad</li>
                    </ul>
                  </div>

                  <div class="animaciones-basicas">
                    <h5>🎬 Animaciones Básicas</h5>
                    <ul>
                      <li><strong>Rotación 360°:</strong> Mostrar objeto desde todos los ángulos</li>
                      <li><strong>Zoom progresivo:</strong> General a detalle</li>
                      <li><strong>Comparación temporal:</strong> Evolución del trabajo</li>
                      <li><strong>Iluminación dinámica:</strong> Diferentes esquemas de luz</li>
                      <li><strong>Duración:</strong> 10-15 segundos máximo por animación</li>
                    </ul>
                  </div>

                  <div class="presentaciones-interactivas">
                    <h5>🖱️ Presentaciones Interactivas</h5>
                    <ul>
                      <li><strong>Navegación libre:</strong> Exploración por el espectador</li>
                      <li><strong>Puntos de interés:</strong> Hotspots con información</li>
                      <li><strong>Comparaciones activas:</strong> Toggles antes/después</li>
                      <li><strong>Control de iluminación:</strong> Cambios en tiempo real</li>
                      <li><strong>Anotaciones dinámicas:</strong> Explicaciones contextuales</li>
                    </ul>
                  </div>
                </div>

                <div class="tecnicas-captura">
                  <h4>📷 Técnicas de Captura Profesional</h4>
                  
                  <div class="configuracion-optima">
                    <h5>⚙️ Configuración Óptima</h5>
                    <ul>
                      <li><strong>Resolución máxima:</strong> Usar la mejor calidad disponible</li>
                      <li><strong>Iluminación uniforme:</strong> Evitar sombras duras</li>
                      <li><strong>Fondo neutro:</strong> No competir con el objeto</li>
                      <li><strong>Encuadre centrado:</strong> Objeto principal en foco</li>
                      <li><strong>Múltiples tomas:</strong> Diferentes opciones para elegir</li>
                    </ul>
                  </div>

                  <div class="composicion-captura">
                    <h5>🎯 Composición en Captura</h5>
                    <ul>
                      <li><strong>Regla de tercios:</strong> Posición estratégica del objeto</li>
                      <li><strong>Espacio negativo:</strong> Respiración visual alrededor</li>
                      <li><strong>Punto focal claro:</strong> Elemento más importante destacado</li>
                      <li><strong>Líneas guía:</strong> Dirigir atención efectivamente</li>
                      <li><strong>Equilibrio visual:</strong> Distribución armónica</li>
                    </ul>
                  </div>
                </div>
              </div>
            `,
            multimedia: {
              imagen: '/images/teoria/preparacion-trabajos-3d.png',
              video: '/videos/teoria/optimizacion-presentacion.mp4'
            },
            actividades: [
              'Seleccionar mejores 8-10 trabajos del curso',
              'Capturar imágenes desde múltiples ángulos',
              'Documentar proceso creativo de obra destacada',
              'Crear animación de rotación 360° de proyecto favorito'
            ]
          },
          {
            id: 2,
            titulo: "Creación de Portafolios",
            contenido: `
              <div class="seccion-contenido">
                <h3>📁 Portafolios Digitales Profesionales</h3>
                
                <div class="estructura-portafolio">
                  <h4>🏗️ Estructura del Portafolio</h4>
                  
                  <div class="elementos-esenciales">
                    <h5>📋 Elementos Esenciales</h5>
                    <ul>
                      <li><strong>Portada atractiva:</strong> Primera impresión impactante</li>
                      <li><strong>Presentación personal:</strong> Breve biografía y objetivos</li>
                      <li><strong>Índice de proyectos:</strong> Navegación clara y organizada</li>
                      <li><strong>Galería principal:</strong> Trabajos destacados con descripción</li>
                      <li><strong>Proceso creativo:</strong> Behind-the-scenes de creación</li>
                      <li><strong>Reflexiones:</strong> Aprendizajes y crecimiento personal</li>
                      <li><strong>Contacto:</strong> Información para comunicación</li>
                    </ul>
                  </div>

                  <div class="organizacion-contenido">
                    <h5>📂 Organización de Contenido</h5>
                    <ul>
                      <li><strong>Cronológica:</strong> Mostrar evolución temporal</li>
                      <li><strong>Temática:</strong> Agrupar por temas o técnicas</li>
                      <li><strong>Por complejidad:</strong> Simple a avanzado</li>
                      <li><strong>Destacados primero:</strong> Mejores trabajos al inicio</li>
                      <li><strong>Narrativa coherente:</strong> Historia visual conectada</li>
                    </ul>
                  </div>

                  <div class="jerarquia-visual">
                    <h5>🎯 Jerarquía Visual</h5>
                    <ul>
                      <li><strong>Pieza estelar:</strong> Trabajo más destacado prominent</li>
                      <li><strong>Proyectos principales:</strong> 3-4 trabajos importantes</li>
                      <li><strong>Trabajos complementarios:</strong> Muestran diversidad</li>
                      <li><strong>Experimentación:</strong> Procesos y pruebas</li>
                      <li><strong>Evolución:</strong> Primeros vs últimos trabajos</li>
                    </ul>
                  </div>
                </div>

                <div class="formatos-portafolio">
                  <h4>💻 Formatos de Portafolio</h4>
                  
                  <div class="digital-interactivo">
                    <h5>🌐 Digital Interactivo</h5>
                    <ul>
                      <li><strong>Plataformas:</strong> Behance, ArtStation, sitio web personal</li>
                      <li><strong>Navegación intuitiva:</strong> Fácil exploración</li>
                      <li><strong>Multimedia rica:</strong> Imágenes, videos, animaciones</li>
                      <li><strong>Responsive:</strong> Funciona en móviles y tablets</li>
                      <li><strong>SEO optimizado:</strong> Fácil de encontrar</li>
                    </ul>
                  </div>

                  <div class="presentacion-pdf">
                    <h5>📄 Presentación PDF</h5>
                    <ul>
                      <li><strong>Diseño profesional:</strong> Layout limpio y elegante</li>
                      <li><strong>Alta resolución:</strong> Imágenes nítidas</li>
                      <li><strong>Navegación clara:</strong> Índice y páginas numeradas</li>
                      <li><strong>Texto equilibrado:</strong> Descripciones concisas</li>
                      <li><strong>Marca personal:</strong> Estilo visual consistente</li>
                    </ul>
                  </div>

                  <div class="galeria-fisica">
                    <h5>🖼️ Galería Física (Impresión)</h5>
                    <ul>
                      <li><strong>Selección cuidadosa:</strong> Solo mejores trabajos</li>
                      <li><strong>Calidad de impresión:</strong> Papel profesional</li>
                      <li><strong>Presentación elegante:</strong> Marcos o montajes</li>
                      <li><strong>Iluminación apropiada:</strong> Destacar características</li>
                      <li><strong>Información adicional:</strong> Tarjetas descriptivas</li>
                    </ul>
                  </div>
                </div>

                <div class="elementos-storytelling">
                  <h4>📖 Elementos de Storytelling</h4>
                  
                  <div class="narrativa-personal">
                    <h5>👤 Narrativa Personal</h5>
                    <ul>
                      <li><strong>Motivación inicial:</strong> ¿Por qué empezaste?</li>
                      <li><strong>Desafíos superados:</strong> Obstáculos y soluciones</li>
                      <li><strong>Momentos de descubrimiento:</strong> Insights importantes</li>
                      <li><strong>Evolución de estilo:</strong> Cambios en enfoque</li>
                      <li><strong>Visión futura:</strong> Hacia dónde te diriges</li>
                    </ul>
                  </div>

                  <div class="contexto-proyectos">
                    <h5>🎨 Contexto de Proyectos</h5>
                    <ul>
                      <li><strong>Inspiración original:</strong> Qué motivó cada trabajo</li>
                      <li><strong>Proceso de desarrollo:</strong> Pasos y decisiones</li>
                      <li><strong>Técnicas empleadas:</strong> Herramientas y métodos</li>
                      <li><strong>Desafíos específicos:</strong> Problemas únicos resueltos</li>
                      <li><strong>Resultado vs expectativa:</strong> Reflexión final</li>
                    </ul>
                  </div>

                  <div class="conexiones-tematicas">
                    <h5>🔗 Conexiones Temáticas</h5>
                    <ul>
                      <li><strong>Hilo conductor:</strong> Tema que une todos los trabajos</li>
                      <li><strong>Evolución técnica:</strong> Progresión de habilidades</li>
                      <li><strong>Influencias externas:</strong> Referencias y inspiraciones</li>
                      <li><strong>Estilo personal:</strong> Características únicas</li>
                      <li><strong>Mensaje global:</strong> Qué comunica el conjunto</li>
                    </ul>
                  </div>
                </div>
              </div>
            `,
            multimedia: {
              imagen: '/images/teoria/creacion-portafolios-3d.png',
              video: '/videos/teoria/portafolio-digital-profesional.mp4'
            },
            actividades: [
              'Diseñar estructura de portafolio personal',
              'Crear presentación PDF con 8 mejores trabajos',
              'Escribir narrativa personal del proceso de aprendizaje',
              'Desarrollar tema visual coherente para todo el portafolio'
            ]
          },
          {
            id: 3,
            titulo: "Técnicas de Exposición",
            contenido: `
              <div class="seccion-contenido">
                <h3>🏛️ Estrategias de Exhibición Efectiva</h3>
                
                <div class="modalidades-exposicion">
                  <h4>🎭 Modalidades de Exposición</h4>
                  
                  <div class="virtual-online">
                    <h5>🌐 Exposición Virtual</h5>
                    <ul>
                      <li><strong>Galerías 3D virtuales:</strong> Espacios inmersivos navegables</li>
                      <li><strong>Recorridos guiados:</strong> Tours automáticos con narración</li>
                      <li><strong>Interactividad:</strong> Zoom, rotación, información contextual</li>
                      <li><strong>Accesibilidad global:</strong> Sin limitaciones geográficas</li>
                      <li><strong>Métricas detalladas:</strong> Análisis de engagement</li>
                    </ul>
                  </div>

                  <div class="hibrida-mixta">
                    <h5>🔄 Exposición Híbrida</h5>
                    <ul>
                      <li><strong>Componente físico:</strong> Impresiones y pantallas</li>
                      <li><strong>Componente digital:</strong> QR codes a contenido online</li>
                      <li><strong>Realidad aumentada:</strong> Contenido adicional via móvil</li>
                      <li><strong>Participación activa:</strong> Interacción física y digital</li>
                      <li><strong>Documentación completa:</strong> Registro multimedia</li>
                    </ul>
                  </div>

                  <div class="presentacion-directa">
                    <h5>🎤 Presentación Directa</h5>
                    <ul>
                      <li><strong>Storytelling en vivo:</strong> Narración personal</li>
                      <li><strong>Demostración práctica:</strong> Crear en tiempo real</li>
                      <li><strong>Interacción con audiencia:</strong> Preguntas y respuestas</li>
                      <li><strong>Material de apoyo:</strong> Slides y proyecciones</li>
                      <li><strong>Documentación del proceso:</strong> Making-of en vivo</li>
                    </ul>
                  </div>
                </div>

                <div class="diseno-experiencia">
                  <h4>🎨 Diseño de Experiencia</h4>
                  
                  <div class="flujo-narrativo">
                    <h5>📖 Flujo Narrativo</h5>
                    <ul>
                      <li><strong>Introducción impactante:</strong> Hook inicial fuerte</li>
                      <li><strong>Desarrollo progresivo:</strong> Construcción de interés</li>
                      <li><strong>Puntos culminantes:</strong> Momentos de máximo impacto</li>
                      <li><strong>Transiciones suaves:</strong> Conexiones naturales</li>
                      <li><strong>Cierre memorable:</strong> Conclusión que perdure</li>
                    </ul>
                  </div>

                  <div class="ritmo-atencion">
                    <h5>⏱️ Ritmo y Atención</h5>
                    <ul>
                      <li><strong>Variación de intensidad:</strong> Altos y bajos estratégicos</li>
                      <li><strong>Pausas efectivas:</strong> Momentos de reflexión</li>
                      <li><strong>Sorpresas controladas:</strong> Elementos inesperados</li>
                      <li><strong>Duración óptima:</strong> 15-20 minutos máximo</li>
                      <li><strong>Puntos de salida:</strong> Conclusiones intermedias</li>
                    </ul>
                  </div>

                  <div class="engagement-audiencia">
                    <h5>🤝 Engagement con Audiencia</h5>
                    <ul>
                      <li><strong>Preguntas retóricas:</strong> Invitar a reflexión</li>
                      <li><strong>Elementos participativos:</strong> Votaciones, opiniones</li>
                      <li><strong>Conexiones personales:</strong> Experiencias universales</li>
                      <li><strong>Invitación a explorar:</strong> Fomentar curiosidad</li>
                      <li><strong>Call-to-action claro:</strong> Próximos pasos</li>
                    </ul>
                  </div>
                </div>

                <div class="aspectos-tecnicos">
                  <h4>⚙️ Aspectos Técnicos</h4>
                  
                  <div class="calidad-visual">
                    <h5>🎯 Calidad Visual</h5>
                    <ul>
                      <li><strong>Resolución consistente:</strong> Estándares uniformes</li>
                      <li><strong>Compresión optimizada:</strong> Calidad vs velocidad</li>
                      <li><strong>Formatos compatibles:</strong> Accesibilidad universal</li>
                      <li><strong>Backup múltiples:</strong> Redundancia de archivos</li>
                      <li><strong>Testing previo:</strong> Verificación en diferentes dispositivos</li>
                    </ul>
                  </div>

                  <div class="navegacion-usabilidad">
                    <h5>🧭 Navegación y Usabilidad</h5>
                    <ul>
                      <li><strong>Interfaz intuitiva:</strong> Controles obvios</li>
                      <li><strong>Carga rápida:</strong> Optimización de rendimiento</li>
                      <li><strong>Accesibilidad:</strong> Compatible con screen readers</li>
                      <li><strong>Responsive design:</strong> Adaptable a diferentes pantallas</li>
                      <li><strong>Feedback inmediato:</strong> Respuesta a interacciones</li>
                    </ul>
                  </div>

                  <div class="metricas-seguimiento">
                    <h5>📊 Métricas y Seguimiento</h5>
                    <ul>
                      <li><strong>Analytics integrado:</strong> Monitoreo de visitas</li>
                      <li><strong>Heatmaps de interacción:</strong> Zonas de mayor interés</li>
                      <li><strong>Tiempo de permanencia:</strong> Engagement por sección</li>
                      <li><strong>Dispositivos de acceso:</strong> Optimización específica</li>
                      <li><strong>Feedback directo:</strong> Comentarios y valoraciones</li>
                    </ul>
                  </div>
                </div>
              </div>
            `,
            multimedia: {
              imagen: '/images/teoria/tecnicas-exposicion-3d.png',
              video: '/videos/teoria/exhibicion-efectiva.mp4'
            },
            actividades: [
              'Diseñar experiencia de exposición virtual',
              'Crear flujo narrativo de 15 minutos',
              'Configurar métricas de seguimiento',
              'Preparar presentación directa con storytelling'
            ]
          },
          {
            id: 4,
            titulo: "Presentación Final Integral",
            contenido: `
              <div class="seccion-contenido">
                <h3>🎯 Culminación del Curso Paint 3D</h3>
                
                <div class="proyecto-integrador">
                  <h4>🚀 Proyecto Integrador Final</h4>
                  
                  <div class="especificaciones-proyecto">
                    <h5>📋 Especificaciones Completas</h5>
                    <ul>
                      <li><strong>Portafolio digital:</strong> Mínimo 10 trabajos representativos</li>
                      <li><strong>Exposición virtual:</strong> Galería navegable de 15 minutos</li>
                      <li><strong>Presentación oral:</strong> Storytelling de 8-10 minutos</li>
                      <li><strong>Documentación process:</strong> Behind-the-scenes detallado</li>
                      <li><strong>Reflexión escrita:</strong> Análisis de aprendizaje (500 palabras)</li>
                    </ul>
                  </div>

                  <div class="cronograma-desarrollo">
                    <h5>📅 Cronograma de Desarrollo (3 semanas)</h5>
                    
                    <div class="semana-1">
                      <h6>🗓️ Semana 1: Curaduría y Preparación</h6>
                      <ul>
                        <li><strong>Días 1-2:</strong> Selección final de trabajos</li>
                        <li><strong>Días 3-4:</strong> Captura profesional de imágenes</li>
                        <li><strong>Días 5-7:</strong> Documentación de procesos creativos</li>
                      </ul>
                    </div>

                    <div class="semana-2">
                      <h6>📱 Semana 2: Desarrollo Digital</h6>
                      <ul>
                        <li><strong>Días 8-10:</strong> Diseño de portafolio digital</li>
                        <li><strong>Días 11-12:</strong> Configuración de exposición virtual</li>
                        <li><strong>Días 13-14:</strong> Testing y optimización técnica</li>
                      </ul>
                    </div>

                    <div class="semana-3">
                      <h6>🎤 Semana 3: Narrativa y Presentación</h6>
                      <ul>
                        <li><strong>Días 15-17:</strong> Desarrollo de storytelling</li>
                        <li><strong>Días 18-19:</strong> Ensayo de presentación oral</li>
                        <li><strong>Días 20-21:</strong> Refinamiento final y entrega</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="estructura-presentacion">
                  <h4>🎭 Estructura de Presentación Oral</h4>
                  
                  <div class="apertura-impactante">
                    <h5>🎪 Apertura Impactante (2 min)</h5>
                    <ul>
                      <li><strong>Hook visual:</strong> Trabajo más impactante como introducción</li>
                      <li><strong>Declaración personal:</strong> ¿Quién eres como creador?</li>
                      <li><strong>Visión del journey:</strong> Adelanto del recorrido</li>
                      <li><strong>Conexión emocional:</strong> Por qué esto importa</li>
                    </ul>
                  </div>

                  <div class="desarrollo-tematico">
                    <h5>📖 Desarrollo Temático (5-6 min)</h5>
                    <ul>
                      <li><strong>Evolución técnica:</strong> Progresión de habilidades</li>
                      <li><strong>Momentos de descubrimiento:</strong> Insights clave</li>
                      <li><strong>Desafíos superados:</strong> Problemas y soluciones</li>
                      <li><strong>Experimentación:</strong> Procesos de prueba y error</li>
                      <li><strong>Obras destacadas:</strong> 3-4 proyectos principales</li>
                    </ul>
                  </div>

                  <div class="cierre-memorable">
                    <h5>✨ Cierre Memorable (1-2 min)</h5>
                    <ul>
                      <li><strong>Reflexión personal:</strong> ¿Qué significó este viaje?</li>
                      <li><strong>Aprendizajes clave:</strong> Lecciones más importantes</li>
                      <li><strong>Visión futura:</strong> Próximos pasos creativos</li>
                      <li><strong>Invitación a explorar:</strong> Call-to-action para audiencia</li>
                    </ul>
                  </div>
                </div>

                <div class="criterios-evaluacion-final">
                  <h4>📊 Criterios de Evaluación Final</h4>
                  
                  <div class="portafolio-digital">
                    <h5>💻 Portafolio Digital (30%)</h5>
                    <ul>
                      <li>□ Selección cuidadosa de trabajos representativos</li>
                      <li>□ Calidad técnica en presentación visual</li>
                      <li>□ Navegación intuitiva y experiencia fluida</li>
                      <li>□ Coherencia visual y marca personal</li>
                      <li>□ Documentación completa de procesos</li>
                    </ul>
                  </div>

                  <div class="exposicion-virtual">
                    <h5>🌐 Exposición Virtual (25%)</h5>
                    <ul>
                      <li>□ Diseño de experiencia inmersiva</li>
                      <li>□ Flujo narrativo coherente y atractivo</li>
                      <li>□ Calidad técnica de implementación</li>
                      <li>□ Interactividad y engagement</li>
                      <li>□ Optimización para diferentes dispositivos</li>
                    </ul>
                  </div>

                  <div class="presentacion-oral">
                    <h5>🎤 Presentación Oral (25%)</h5>
                    <ul>
                      <li>□ Claridad y estructura del discurso</li>
                      <li>□ Storytelling personal convincente</li>
                      <li>□ Conexión emocional con audiencia</li>
                      <li>□ Manejo del tiempo y ritmo</li>
                      <li>□ Seguridad y presencia escénica</li>
                    </ul>
                  </div>

                  <div class="reflexion-aprendizaje">
                    <h5>📝 Reflexión y Aprendizaje (20%)</h5>
                    <ul>
                      <li>□ Análisis profundo del proceso de aprendizaje</li>
                      <li>□ Identificación clara de crecimiento personal</li>
                      <li>□ Conexión entre teoría y práctica</li>
                      <li>□ Visión articulada para desarrollo futuro</li>
                      <li>□ Capacidad de autocrítica constructiva</li>
                    </ul>
                  </div>
                </div>

                <div class="celebracion-logros">
                  <h4>🎉 Celebración de Logros</h4>
                  
                  <div class="reconocimientos">
                    <h5>🏆 Sistema de Reconocimientos</h5>
                    <ul>
                      <li><strong>Innovación técnica:</strong> Uso creativo de herramientas</li>
                      <li><strong>Narrativa visual:</strong> Storytelling más efectivo</li>
                      <li><strong>Evolución notable:</strong> Mayor progreso visible</li>
                      <li><strong>Presentación ejemplar:</strong> Comunicación más clara</li>
                      <li><strong>Inspiración comunitaria:</strong> Impacto en otros estudiantes</li>
                    </ul>
                  </div>

                  <div class="continuidad-aprendizaje">
                    <h5>🚀 Continuidad del Aprendizaje</h5>
                    <ul>
                      <li><strong>Recursos avanzados:</strong> Siguientes pasos sugeridos</li>
                      <li><strong>Comunidad de práctica:</strong> Conexión con otros creadores</li>
                      <li><strong>Proyectos futuros:</strong> Ideas para desarrollo continuo</li>
                      <li><strong>Mentorship:</strong> Oportunidades de acompañamiento</li>
                      <li><strong>Especialización:</strong> Áreas de profundización</li>
                    </ul>
                  </div>
                </div>
              </div>
            `,
            multimedia: {
              imagen: '/images/teoria/presentacion-final-integral.png',
              video: '/videos/teoria/proyecto-integrador-completo.mp4'
            },
            actividades: [
              'Desarrollar cronograma personal de 3 semanas',
              'Preparar estructura de presentación oral de 10 minutos',
              'Crear primera versión de portafolio digital',
              'Escribir reflexión inicial sobre el proceso de aprendizaje'
            ]
          }
        ],
        recursos: {
          documentos: [
            {
              titulo: "Guía Completa de Portafolios Creativos",
              tipo: "PDF",
              url: "/recursos/paint-3d/guia-portafolios-creativos.pdf"
            },
            {
              titulo: "Manual de Presentaciones Efectivas",
              tipo: "PDF",
              url: "/recursos/paint-3d/presentaciones-efectivas.pdf"
            },
            {
              titulo: "Plantillas de Exposición Virtual",
              tipo: "ZIP",
              url: "/recursos/paint-3d/plantillas-exposicion-virtual.zip"
            },
            {
              titulo: "Framework de Storytelling Visual",
              tipo: "PDF",
              url: "/recursos/paint-3d/framework-storytelling.pdf"
            }
          ],
          videos: [
            {
              titulo: "Masterclass: Curaduría de Portafolios Digitales",
              duracion: "28 min",
              url: "/videos/masterclass-portafolios-digitales.mp4"
            },
            {
              titulo: "Técnicas Avanzadas de Presentación",
              duracion: "22 min",
              url: "/videos/tecnicas-presentacion-avanzadas.mp4"
            },
            {
              titulo: "Creación de Exposiciones Virtuales Inmersivas",
              duracion: "25 min",
              url: "/videos/exposiciones-virtuales-inmersivas.mp4"
            },
            {
              titulo: "Storytelling Personal para Creativos",
              duracion: "20 min",
              url: "/videos/storytelling-personal-creativos.mp4"
            }
          ],
          enlaces: [
            {
              titulo: "Behance: Mejores Portafolios de Arte Digital",
              url: "https://www.behance.net/galleries/digital-art"
            },
            {
              titulo: "ArtStation: Inspiración de Presentaciones 3D",
              url: "https://www.artstation.com/artwork/3d"
            },
            {
              titulo: "Plataformas de Exposición Virtual",
              url: "https://artsteps.com"
            },
            {
              titulo: "Recursos de Storytelling Visual",
              url: "https://www.ted.com/topics/storytelling"
            }
          ],
          herramientas: [
            {
              titulo: "Canva Pro - Diseño de Portafolios",
              descripcion: "Plantillas profesionales para portafolios",
              url: "https://www.canva.com/portfolios"
            },
            {
              titulo: "ArtSteps - Galerías Virtuales",
              descripcion: "Creación de exposiciones virtuales inmersivas",
              url: "https://www.artsteps.com"
            },
            {
              titulo: "Adobe Portfolio",
              descripcion: "Portafolios creativos integrados con Creative Cloud",
              url: "https://portfolio.adobe.com"
            }
          ]
        },
        evaluacion: {
          preRequisitos: ["Todos los temas anteriores del curso Paint 3D"],
          tipoEvaluacion: "Proyecto Integrador Final",
          componentes: [
            {
              nombre: "Portafolio Digital",
              peso: "30%",
              descripcion: "Colección curada de trabajos con navegación profesional"
            },
            {
              nombre: "Exposición Virtual",
              peso: "25%",
              descripcion: "Experiencia inmersiva de 15 minutos"
            },
            {
              nombre: "Presentación Oral",
              peso: "25%",
              descripcion: "Storytelling personal de 8-10 minutos"
            },
            {
              nombre: "Reflexión Escrita",
              peso: "20%",
              descripcion: "Análisis de aprendizaje de 500 palabras"
            }
          ],
          criterios: [
            "Demostrar dominio técnico integral de Paint 3D",
            "Aplicar principios de curaduría y presentación profesional",
            "Comunicar efectivamente el proceso de aprendizaje",
            "Crear experiencias digitales inmersivas y atractivas",
            "Mostrar crecimiento personal y visión creativa futura",
            "Exhibir capacidad de reflexión crítica y autocrítica constructiva"
          ],
          tiempoEstimado: "35 minutos + 3 semanas desarrollo"
        }
      }
    },
    'word': {
      '1': {
        titulo: "Introducción a Microsoft Word",
        duracion: "20-25 minutos",
        objetivos: [
          "Comprender qué es Microsoft Word y su importancia",
          "Conocer la evolución de los procesadores de texto",
          "Familiarizarse con la interfaz básica de Word",
          "Entender conceptos fundamentales de procesamiento de textos"
        ],
        secciones: [
          {
            id: 1,
            titulo: "¿Qué es Microsoft Word?",
            contenido: `
              <h3>📝 Definición de Microsoft Word</h3>
              <p><strong>Microsoft Word</strong> es el procesador de textos más utilizado en el mundo, parte de la suite Microsoft Office, diseñado para crear, editar y dar formato a documentos de texto de manera profesional.</p>
              
              <h4>Características principales:</h4>
              <ul>
                <li><strong>Procesamiento de texto avanzado:</strong> Creación y edición de documentos complejos</li>
                <li><strong>Formato profesional:</strong> Herramientas completas de diseño y maquetación</li>
                <li><strong>Colaboración:</strong> Trabajo en equipo y revisión de documentos</li>
                <li><strong>Integración:</strong> Conexión con otras aplicaciones de Office</li>
                <li><strong>Plantillas:</strong> Modelos prediseñados para diferentes tipos de documentos</li>
                <li><strong>Multiplataforma:</strong> Disponible en Windows, Mac, web y móviles</li>
              </ul>

              <div class="usos-word">
                <h4>📋 ¿Para qué se usa Microsoft Word?</h4>
                <div class="usos-grid">
                  <div class="uso-item">
                    <h5>📄 Documentos académicos</h5>
                    <p>Ensayos, tesis, trabajos de investigación, reportes</p>
                  </div>
                  <div class="uso-item">
                    <h5>💼 Documentos empresariales</h5>
                    <p>Cartas, memos, informes, propuestas, contratos</p>
                  </div>
                  <div class="uso-item">
                    <h5>📝 Documentos personales</h5>
                    <p>Currículums, cartas personales, invitaciones</p>
                  </div>
                  <div class="uso-item">
                    <h5>📊 Documentos técnicos</h5>
                    <p>Manuales, guías, documentación, procedimientos</p>
                  </div>
                  <div class="uso-item">
                    <h5>📖 Publicaciones</h5>
                    <p>Libros, revistas, boletines, folletos</p>
                  </div>
                  <div class="uso-item">
                    <h5>🎨 Documentos creativos</h5>
                    <p>Flyers, pósters, tarjetas, etiquetas</p>
                  </div>
                </div>
              </div>

              <div class="ventajas-word">
                <h4>✅ Ventajas de Microsoft Word</h4>
                <div class="ventajas-grid">
                  <div class="ventaja">
                    <h5>🌍 Estándar Industrial</h5>
                    <p>El formato .docx es universalmente aceptado en empresas y instituciones educativas</p>
                  </div>
                  <div class="ventaja">
                    <h5>🛠️ Herramientas Completas</h5>
                    <p>Desde formateo básico hasta funciones avanzadas como tablas de contenido automáticas</p>
                  </div>
                  <div class="ventaja">
                    <h5>🔗 Integración Office</h5>
                    <p>Funciona perfectamente con Excel, PowerPoint, Outlook y otras aplicaciones</p>
                  </div>
                  <div class="ventaja">
                    <h5>☁️ Colaboración Cloud</h5>
                    <p>Edición simultánea y sincronización automática con OneDrive</p>
                  </div>
                  <div class="ventaja">
                    <h5>📱 Acceso Multiplataforma</h5>
                    <p>Disponible en computadores, tablets y teléfonos móviles</p>
                  </div>
                  <div class="ventaja">
                    <h5>🎯 Fácil de Aprender</h5>
                    <p>Interfaz intuitiva con ayuda y plantillas integradas</p>
                  </div>
                </div>

                <h4>❌ Limitaciones de Microsoft Word</h4>
                <ul>
                  <li><strong>Costo:</strong> Requiere licencia de Microsoft Office (aunque hay versiones gratuitas limitadas)</li>
                  <li><strong>Recursos:</strong> Consume más memoria y procesamiento que alternativas básicas</li>
                  <li><strong>Complejidad:</strong> Puede ser abrumador para usuarios principiantes</li>
                  <li><strong>Compatibilidad:</strong> Versiones muy antiguas pueden tener problemas de formato</li>
                  <li><strong>Dependencia:</strong> Requiere ecosistema Microsoft para máximo aprovechamiento</li>
                </ul>
              </div>

              <div class="comparacion-procesadores">
                <h4>🔍 Word vs Otros Procesadores de Texto</h4>
                <table class="comparacion-word">
                  <tr>
                    <th>Característica</th>
                    <th>Microsoft Word</th>
                    <th>Google Docs</th>
                    <th>LibreOffice Writer</th>
                    <th>Notepad++</th>
                  </tr>
                  <tr>
                    <td><strong>Funcionalidades</strong></td>
                    <td>⭐⭐⭐⭐⭐</td>
                    <td>⭐⭐⭐⭐</td>
                    <td>⭐⭐⭐⭐</td>
                    <td>⭐⭐</td>
                  </tr>
                  <tr>
                    <td><strong>Facilidad de uso</strong></td>
                    <td>⭐⭐⭐⭐</td>
                    <td>⭐⭐⭐⭐⭐</td>
                    <td>⭐⭐⭐</td>
                    <td>⭐⭐</td>
                  </tr>
                  <tr>
                    <td><strong>Colaboración</strong></td>
                    <td>⭐⭐⭐⭐</td>
                    <td>⭐⭐⭐⭐⭐</td>
                    <td>⭐⭐⭐</td>
                    <td>⭐</td>
                  </tr>
                  <tr>
                    <td><strong>Precio</strong></td>
                    <td>$6.99/mes</td>
                    <td>Gratis</td>
                    <td>Gratis</td>
                    <td>Gratis</td>
                  </tr>
                  <tr>
                    <td><strong>Compatibilidad</strong></td>
                    <td>⭐⭐⭐⭐⭐</td>
                    <td>⭐⭐⭐⭐</td>
                    <td>⭐⭐⭐⭐</td>
                    <td>⭐⭐</td>
                  </tr>
                  <tr>
                    <td><strong>Funciones avanzadas</strong></td>
                    <td>⭐⭐⭐⭐⭐</td>
                    <td>⭐⭐⭐</td>
                    <td>⭐⭐⭐⭐</td>
                    <td>⭐⭐</td>
                  </tr>
                </table>
              </div>

              <div class="importancia-word">
                <h4>🎯 Importancia de Aprender Word</h4>
                
                <div class="importancia-categoria">
                  <h5>🎓 En el Ámbito Académico</h5>
                  <ul>
                    <li>Requisito en la mayoría de instituciones educativas</li>
                    <li>Herramienta esencial para trabajos, tesis y ensayos</li>
                    <li>Funciones académicas específicas (citas, bibliografía, índices)</li>
                    <li>Preparación para el mundo profesional</li>
                  </ul>
                </div>

                <div class="importancia-categoria">
                  <h5>💼 En el Ámbito Laboral</h5>
                  <ul>
                    <li>Competencia básica requerida en la mayoría de empleos de oficina</li>
                    <li>Creación de documentos empresariales profesionales</li>
                    <li>Comunicación efectiva a través de documentos bien estructurados</li>
                    <li>Colaboración eficiente en equipos de trabajo</li>
                  </ul>
                </div>

                <div class="importancia-categoria">
                  <h5>👤 En el Ámbito Personal</h5>
                  <ul>
                    <li>Creación de documentos personales importantes</li>
                    <li>Organización de información personal y familiar</li>
                    <li>Desarrollo de habilidades de comunicación escrita</li>
                    <li>Herramienta para proyectos creativos y personales</li>
                  </ul>
                </div>
              </div>

              <div class="estadisticas-word">
                <h4>📊 Datos Interesantes sobre Microsoft Word</h4>
                <div class="datos-grid">
                  <div class="dato-item">
                    <h5>🌍 Usuarios Globales</h5>
                    <p>Más de <strong>1.2 mil millones</strong> de personas usan Microsoft Office</p>
                  </div>
                  <div class="dato-item">
                    <h5>📈 Participación de Mercado</h5>
                    <p><strong>87%</strong> de las empresas utilizan Microsoft Office</p>
                  </div>
                  <div class="dato-item">
                    <h5>📅 Historia</h5>
                    <p>Lanzado en <strong>1983</strong>, más de 40 años de evolución</p>
                  </div>
                  <div class="dato-item">
                    <h5>🔄 Actualizaciones</h5>
                    <p>Recibe actualizaciones <strong>mensuales</strong> con nuevas características</p>
                  </div>
                </div>
              </div>

              <div class="tipos-documentos">
                <h4>📋 Tipos de Documentos que Puedes Crear</h4>
                <div class="documentos-categorias">
                  <div class="categoria-doc">
                    <h5>📝 Documentos de Texto</h5>
                    <ul>
                      <li>Cartas formales e informales</li>
                      <li>Ensayos y artículos</li>
                      <li>Informes y reportes</li>
                      <li>Manuales y guías</li>
                    </ul>
                  </div>
                  
                  <div class="categoria-doc">
                    <h5>📊 Documentos con Datos</h5>
                    <ul>
                      <li>Tablas y listas</li>
                      <li>Formularios</li>
                      <li>Facturas y presupuestos</li>
                      <li>Inventarios</li>
                    </ul>
                  </div>
                  
                  <div class="categoria-doc">
                    <h5>🎨 Documentos de Diseño</h5>
                    <ul>
                      <li>Flyers y folletos</li>
                      <li>Invitaciones</li>
                      <li>Tarjetas de presentación</li>
                      <li>Pósters informativos</li>
                    </ul>
                  </div>
                  
                  <div class="categoria-doc">
                    <h5>📚 Documentos Académicos</h5>
                    <ul>
                      <li>Tesis y disertaciones</li>
                      <li>Trabajos de investigación</li>
                      <li>Bibliografías</li>
                      <li>Artículos científicos</li>
                    </ul>
                  </div>
                </div>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/word-interfaz.jpg",
              video: "/videos/teoria/introduccion-word.mp4",
              infografia: "/images/teoria/word-usos.png"
            },
            actividades: [
              {
                tipo: "reflexion",
                pregunta: "¿Has usado Microsoft Word antes? ¿Para qué tipo de documentos lo has utilizado?",
                ayuda: "Piensa en trabajos escolares, cartas, currículums, etc."
              },
              {
                tipo: "investigacion",
                pregunta: "Investiga qué versión de Microsoft Word está disponible en tu computador o institución educativa",
                ayuda: "Busca en el menú 'Archivo' > 'Cuenta' o 'Acerca de Word'"
              }
            ]
          },
          {
            id: 2,
            titulo: "Historia y Evolución de los Procesadores de Texto",
            contenido: `
              <h3>📜 La Revolución del Procesamiento de Textos</h3>
              
              <div class="era-pre-digital">
                <h4>✍️ Antes de los Computadores</h4>
                <p>Para entender la importancia de Word, debemos conocer cómo era crear documentos antes de los computadores:</p>
                
                <div class="metodos-antiguos">
                  <div class="metodo-antiguo">
                    <h5>📝 Escritura a Mano</h5>
                    <ul>
                      <li><strong>Ventajas:</strong> Portabilidad, no requiere energía</li>
                      <li><strong>Desventajas:</strong> Lento, errores difíciles de corregir, no se pueden hacer copias fácilmente</li>
                      <li><strong>Tiempo:</strong> Una página podía tomar 20-30 minutos</li>
                    </ul>
                  </div>
                  
                  <div class="metodo-antiguo">
                    <h5>⌨️ Máquinas de Escribir</h5>
                    <ul>
                      <li><strong>Ventajas:</strong> Texto limpio y uniforme, más rápido que escribir a mano</li>
                      <li><strong>Desventajas:</strong> Errores requerían reescribir toda la página, no se podía modificar formato</li>
                      <li><strong>Tiempo:</strong> Una página tomaba 10-15 minutos</li>
                    </ul>
                  </div>
                  
                  <div class="metodo-antiguo">
                    <h5>📠 Máquinas de Escribir Eléctricas</h5>
                    <ul>
                      <li><strong>Ventajas:</strong> Menor esfuerzo físico, algunas tenían corrección</li>
                      <li><strong>Desventajas:</strong> Aún limitadas para edición, costosas</li>
                      <li><strong>Tiempo:</strong> Una página tomaba 8-12 minutos</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="timeline-procesadores">
                <h4>🕰️ Historia de los Procesadores de Texto Digitales</h4>
                
                <div class="timeline-procesadores-text">
                  <div class="timeline-item-word">
                    <h5>1960s - Primeros Sistemas</h5>
                    <div class="decada-content">
                      <ul>
                        <li><strong>IBM MT/ST (1964):</strong> Magnetic Tape Selectric Typewriter</li>
                        <li>Permitía grabar texto en cinta magnética</li>
                        <li>Se podían hacer correcciones sin reescribir todo</li>
                        <li>Costaba $10,000 USD (equivalente a $90,000 hoy)</li>
                      </ul>
                      <p class="dato-historico">💡 <strong>Revolución:</strong> Primera vez que se podía "editar" texto digitalmente</p>
                    </div>
                  </div>
                  
                  <div class="timeline-item-word">
                    <h5>1970s - Era de los Minicomputadores</h5>
                    <div class="decada-content">
                      <ul>
                        <li><strong>Wang Word Processor (1976):</strong> Primer procesador de texto dedicado</li>
                        <li>Monitor separado para ver el texto</li>
                        <li>Funciones básicas: insertar, borrar, buscar/reemplazar</li>
                        <li>Usado principalmente en oficinas grandes</li>
                      </ul>
                      <p class="innovacion">🚀 <strong>Innovación:</strong> Primera vez que se podía ver el texto en pantalla mientras se editaba</p>
                    </div>
                  </div>
                  
                  <div class="timeline-item-word">
                    <h5>Early 1980s - Procesadores para PC</h5>
                    <div class="decada-content">
                      <ul>
                        <li><strong>WordStar (1979):</strong> Primer procesador popular para PC</li>
                        <li><strong>WordPerfect (1982):</strong> Dominó el mercado durante los 80s</li>
                        <li>Interfaces basadas en comandos de teclado</li>
                        <li>Pantallas de texto (sin gráficos)</li>
                      </ul>
                      <p class="democratizacion">📈 <strong>Democratización:</strong> Los procesadores llegaron a usuarios individuales</p>
                    </div>
                  </div>
                  
                  <div class="timeline-item-word">
                    <h5>1983 - Nace Microsoft Word</h5>
                    <div class="decada-content">
                      <ul>
                        <li><strong>Multi-Tool Word:</strong> Nombre original de Microsoft Word</li>
                        <li>Diseñado para computadores con mouse</li>
                        <li>Interfaz gráfica primitiva</li>
                        <li>Competía contra WordPerfect y WordStar</li>
                      </ul>
                      <p class="nacimiento">🎯 <strong>Visión:</strong> Microsoft quería hacer los procesadores más fáciles de usar</p>
                    </div>
                  </div>
                  
                  <div class="timeline-item-word">
                    <h5>1989 - Word para Windows</h5>
                    <div class="decada-content">
                      <ul>
                        <li>Primera versión verdaderamente gráfica</li>
                        <li>WYSIWYG (What You See Is What You Get)</li>
                        <li>Menús desplegables y barras de herramientas</li>
                        <li>Integración con otras aplicaciones Windows</li>
                      </ul>
                      <p class="revolucion">🎨 <strong>Revolución Visual:</strong> Por primera vez se veía en pantalla cómo quedaría impreso</p>
                    </div>
                  </div>
                  
                  <div class="timeline-item-word">
                    <h5>1990s - Dominio del Mercado</h5>
                    <div class="decada-content">
                      <ul>
                        <li><strong>Word 6.0 (1993):</strong> Unificación de versiones Mac y PC</li>
                        <li><strong>Word 95:</strong> Integración completa con Windows 95</li>
                        <li>Word desplaza a WordPerfect como líder</li>
                        <li>Introducción de plantillas y asistentes</li>
                      </ul>
                      <p class="dominio">👑 <strong>Liderazgo:</strong> Word se convierte en el estándar de facto</p>
                    </div>
                  </div>
                  
                  <div class="timeline-item-word">
                    <h5>2000s - Era de Internet</h5>
                    <div class="decada-content">
                      <ul>
                        <li><strong>Word 2000:</strong> Mejor integración web y colaboración</li>
                        <li><strong>Word XP (2002):</strong> Interfaz renovada con paneles de tareas</li>
                        <li><strong>Word 2003:</strong> Mejor soporte XML</li>
                        <li>Funciones de revisión y comentarios mejoradas</li>
                      </ul>
                      <p class="internet">🌐 <strong>Conectividad:</strong> Word se adapta a la era de internet</p>
                    </div>
                  </div>
                  
                  <div class="timeline-item-word">
                    <h5>2007 - Revolución Ribbon</h5>
                    <div class="decada-content">
                      <ul>
                        <li>Introducción de la <strong>Cinta de Opciones (Ribbon)</strong></li>
                        <li>Adiós a los menús tradicionales</li>
                        <li>Formato .docx (basado en XML)</li>
                        <li>Mejor organización de herramientas</li>
                      </ul>
                      <p class="ribbon">🎀 <strong>Cambio Radical:</strong> La interfaz más grande de la historia de Word</p>
                    </div>
                  </div>
                  
                  <div class="timeline-item-word">
                    <h5>2010s - Era de la Nube</h5>
                    <div class="decada-content">
                      <ul>
                        <li><strong>Word 2010:</strong> Integración con SharePoint</li>
                        <li><strong>Word 2013:</strong> Diseño plano y minimalista</li>
                        <li><strong>Word Online (2014):</strong> Versión web gratuita</li>
                        <li><strong>Word 2016:</strong> Colaboración en tiempo real</li>
                      </ul>
                      <p class="nube">☁️ <strong>Colaboración:</strong> Word abraza el trabajo en equipo online</p>
                    </div>
                  </div>
                  
                  <div class="timeline-item-word">
                    <h5>2019-2025 - Era Moderna</h5>
                    <div class="decada-content">
                      <ul>
                        <li><strong>Microsoft 365:</strong> Suscripción con actualizaciones continuas</li>
                        <li><strong>Inteligencia Artificial:</strong> Editor inteligente, Ideas de diseño</li>
                        <li><strong>Dictado por voz:</strong> Transcripción automática</li>
                        <li><strong>Colaboración avanzada:</strong> Co-autoría instantánea</li>
                        <li><strong>Accesibilidad:</strong> Mejor soporte para usuarios con discapacidades</li>
                      </ul>
                      <p class="ia">🤖 <strong>Inteligencia Artificial:</strong> Word se vuelve más inteligente</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="comparacion-epocas">
                <h4>🔄 Comparación: Antes vs Ahora</h4>
                <table class="comparacion-epocas-table">
                  <tr>
                    <th>Aspecto</th>
                    <th>Máquina de Escribir (1960)</th>
                    <th>WordPerfect (1985)</th>
                    <th>Word 2025</th>
                  </tr>
                  <tr>
                    <td><strong>Corrección de errores</strong></td>
                    <td>Reescribir toda la página</td>
                    <td>Borrar y reescribir</td>
                    <td>Corrección automática + sugerencias IA</td>
                  </tr>
                  <tr>
                    <td><strong>Formato</strong></td>
                    <td>Solo un tipo de letra</td>
                    <td>Fuentes básicas</td>
                    <td>Miles de fuentes + estilos automáticos</td>
                  </tr>
                  <tr>
                    <td><strong>Colaboración</strong></td>
                    <td>Imposible</td>
                    <td>Envío de diskettes</td>
                    <td>Edición simultánea en tiempo real</td>
                  </tr>
                  <tr>
                    <td><strong>Revisión</strong></td>
                    <td>Tinta roja a mano</td>
                    <td>Comentarios básicos</td>
                    <td>Control de cambios avanzado</td>
                  </tr>
                  <tr>
                    <td><strong>Distribución</strong></td>
                    <td>Copias físicas</td>
                    <td>Impresión o diskette</td>
                    <td>Email, nube, web, PDF</td>
                  </tr>
                  <tr>
                    <td><strong>Tiempo para 1 página</strong></td>
                    <td>15-30 minutos</td>
                    <td>5-10 minutos</td>
                    <td>2-5 minutos</td>
                  </tr>
                </table>
              </div>

              <div class="impacto-social">
                <h4>🌍 Impacto Social de los Procesadores de Texto</h4>
                
                <div class="impacto-categoria">
                  <h5>📚 En la Educación</h5>
                  <ul>
                    <li><strong>Democratización de la escritura:</strong> Estudiantes pueden crear documentos profesionales</li>
                    <li><strong>Facilita la revisión:</strong> Profesores pueden hacer comentarios digitales</li>
                    <li><strong>Reduce barreras:</strong> Estudiantes con dificultades de escritura pueden usar herramientas de asistencia</li>
                    <li><strong>Investigación mejorada:</strong> Citas automáticas y bibliografías</li>
                  </ul>
                </div>

                <div class="impacto-categoria">
                  <h5>💼 En el Trabajo</h5>
                  <ul>
                    <li><strong>Productividad aumentada:</strong> Documentos se crean más rápido</li>
                    <li><strong>Colaboración global:</strong> Equipos pueden trabajar juntos desde cualquier lugar</li>
                    <li><strong>Estándares profesionales:</strong> Todos los documentos pueden verse profesionales</li>
                    <li><strong>Menos papel:</strong> Reducción del uso de papel en oficinas</li>
                  </ul>
                </div>

                <div class="impacto-categoria">
                  <h5>🌐 En la Sociedad</h5>
                  <ul>
                    <li><strong>Comunicación mejorada:</strong> Cartas y documentos más claros</li>
                    <li><strong>Preservación digital:</strong> Documentos se conservan mejor</li>
                    <li><strong>Accesibilidad:</strong> Herramientas para personas con discapacidades</li>
                    <li><strong>Globalización:</strong> Documentos se pueden compartir instantáneamente</li>
                  </ul>
                </div>
              </div>

              <div class="curiosidades-historicas">
                <h4>🤓 Curiosidades Históricas</h4>
                <div class="curiosidades-grid">
                  <div class="curiosidad-item">
                    <h5>💰 El Primer "Bug"</h5>
                    <p>En 1983, Microsoft Word costaba $495 USD (equivalente a $1,400 hoy). Era más caro que muchos computadores completos.</p>
                  </div>
                  <div class="curiosidad-item">
                    <h5>🎮 Juegos Ocultos</h5>
                    <p>Word 97 tenía un juego de vuelo oculto llamado "Flight Simulator" que se activaba con comandos especiales.</p>
                  </div>
                  <div class="curiosidad-item">
                    <h5>📱 Antes de los Smartphones</h5>
                    <p>En los 80s, un procesador de texto portátil pesaba 10kg y costaba $3,000 USD.</p>
                  </div>
                  <div class="curiosidad-item">
                    <h5>🔤 Fuentes Famosas</h5>
                    <p>La fuente "Times New Roman" se hizo famosa gracias a Word, aunque fue creada en 1931 para el periódico Times.</p>
                  </div>
                </div>
              </div>

              <div class="futuro-procesadores">
                <h4>🔮 El Futuro de los Procesadores de Texto</h4>
                <div class="tendencias-futuro">
                  <div class="tendencia">
                    <h5>🤖 Inteligencia Artificial Avanzada</h5>
                    <ul>
                      <li>Escritura automática de borradores</li>
                      <li>Sugerencias de contenido inteligentes</li>
                      <li>Traducción automática en tiempo real</li>
                      <li>Corrección de estilo y tono</li>
                    </ul>
                  </div>
                  
                  <div class="tendencia">
                    <h5>🗣️ Interacción por Voz</h5>
                    <ul>
                      <li>Dictado más preciso y natural</li>
                      <li>Comandos de voz para formateo</li>
                      <li>Lectura automática de documentos</li>
                      <li>Conversación con el documento</li>
                    </ul>
                  </div>
                  
                  <div class="tendencia">
                    <h5>🥽 Realidad Virtual/Aumentada</h5>
                    <ul>
                      <li>Escritura en espacios virtuales 3D</li>
                      <li>Colaboración inmersiva</li>
                      <li>Visualización de datos en 3D</li>
                      <li>Interfaces gestuales</li>
                    </ul>
                  </div>
                  
                  <div class="tendencia">
                    <h5>🌐 Colaboración Avanzada</h5>
                    <ul>
                      <li>Traducción automática entre idiomas</li>
                      <li>Sincronización cerebro-computadora</li>
                      <li>Edición colaborativa con IA</li>
                      <li>Documentos que se adaptan al lector</li>
                    </ul>
                  </div>
                </div>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/historia-procesadores-texto.jpg",
              video: "/videos/teoria/evolucion-word.mp4",
              infografia: "/images/teoria/timeline-word.png"
            },
            actividades: [
              {
                tipo: "comparacion",
                pregunta: "Imagina que tienes que escribir un ensayo de 5 páginas. Compara cómo sería hacerlo en máquina de escribir vs Word actual",
                ayuda: "Piensa en tiempo, correcciones, formato, colaboración, etc."
              },
              {
                tipo: "investigacion",
                pregunta: "Pregunta a familiares mayores cómo era escribir documentos antes de los computadores. ¿Qué diferencias notas?",
                ayuda: "Pregunta sobre máquinas de escribir, papel carbón, corrección con líquido corrector, etc."
              }
            ]
          },
          {
            id: 3,
            titulo: "Interfaz y Herramientas Básicas de Word",
            contenido: `
              <h3>🖥️ Conociendo la Interfaz de Microsoft Word</h3>
              
              <div class="interfaz-moderna">
                <h4>🎯 Filosofía de Diseño de Word</h4>
                <p>Microsoft diseñó Word siguiendo el principio de <strong>"What You See Is What You Get" (WYSIWYG)</strong> - lo que ves en pantalla es exactamente lo que obtendrás al imprimir.</p>
                
                <div class="principios-diseno">
                  <div class="principio">
                    <h5>🎨 Intuitividad</h5>
                    <p>Las herramientas están organizadas de manera lógica y visual</p>
                  </div>
                  <div class="principio">
                    <h5>⚡ Eficiencia</h5>
                    <p>Las funciones más usadas están fácilmente accesibles</p>
                  </div>
                  <div class="principio">
                    <h5>🔧 Flexibilidad</h5>
                    <p>Se puede personalizar según las necesidades del usuario</p>
                  </div>
                  <div class="principio">
                    <h5>📱 Consistencia</h5>
                    <p>Similar a otras aplicaciones de Microsoft Office</p>
                  </div>
                </div>
              </div>

              <div class="areas-principales">
                <h4>📍 Áreas Principales de la Interfaz</h4>
                
                <div class="area-interfaz-word">
                  <h5>1. 📋 Barra de Título</h5>
                  <ul>
                    <li><strong>Nombre del documento:</strong> Muestra el título del archivo actual</li>
                    <li><strong>Indicador de cambios:</strong> Asterisco (*) indica cambios sin guardar</li>
                    <li><strong>Controles de ventana:</strong> Minimizar, maximizar, cerrar</li>
                    <li><strong>Búsqueda rápida:</strong> Campo "Dígame qué desea hacer"</li>
                  </ul>
                  <p class="tip">💡 <strong>Tip:</strong> Si ves un asterisco (*) junto al nombre, significa que hay cambios sin guardar</p>
                </div>

                <div class="area-interfaz-word">
                  <h5>2. 🎀 Cinta de Opciones (Ribbon)</h5>
                  <p>La innovación más importante de Word desde 2007. Organiza todas las herramientas en pestañas temáticas:</p>
                  
                  <div class="pestanas-ribbon">
                    <div class="pestana">
                      <h6>🏠 Inicio</h6>
                      <p>Herramientas básicas de formato</p>
                      <ul>
                        <li>Fuentes y tamaños</li>
                        <li>Negrita, cursiva, subrayado</li>
                        <li>Alineación de texto</li>
                        <li>Viñetas y numeración</li>
                      </ul>
                    </div>
                    
                    <div class="pestana">
                      <h6>📄 Insertar</h6>
                      <p>Elementos adicionales para el documento</p>
                      <ul>
                        <li>Tablas y gráficos</li>
                        <li>Imágenes y formas</li>
                        <li>Encabezados y pies de página</li>
                        <li>Hipervínculos y símbolos</li>
                      </ul>
                    </div>
                    
                    <div class="pestana">
                      <h6>🎨 Diseño</h6>
                      <p>Apariencia general del documento</p>
                      <ul>
                        <li>Temas y estilos</li>
                        <li>Márgenes y orientación</li>
                        <li>Columnas y saltos</li>
                        <li>Marca de agua</li>
                      </ul>
                    </div>
                    
                    <div class="pestana">
                      <h6>📐 Diseño de Página</h6>
                      <p>Configuración de la página</p>
                      <ul>
                        <li>Márgenes personalizados</li>
                        <li>Orientación (vertical/horizontal)</li>
                        <li>Tamaño de papel</li>
                        <li>Columnas múltiples</li>
                      </ul>
                    </div>
                    
                    <div class="pestana">
                      <h6>📚 Referencias</h6>
                      <p>Elementos académicos y profesionales</p>
                      <ul>
                        <li>Tabla de contenido</li>
                        <li>Citas y bibliografía</li>
                        <li>Notas al pie</li>
                        <li>Índices</li>
                      </ul>
                    </div>
                    
                    <div class="pestana">
                      <h6>✉️ Correspondencia</h6>
                      <p>Herramientas para cartas masivas</p>
                      <ul>
                        <li>Combinación de correspondencia</li>
                        <li>Etiquetas</li>
                        <li>Sobres</li>
                        <li>Campos personalizados</li>
                      </ul>
                    </div>
                    
                    <div class="pestana">
                      <h6>👁️ Revisar</h6>
                      <p>Colaboración y corrección</p>
                      <ul>
                        <li>Ortografía y gramática</li>
                        <li>Control de cambios</li>
                        <li>Comentarios</li>
                        <li>Comparar documentos</li>
                      </ul>
                    </div>
                    
                    <div class="pestana">
                      <h6>👁️ Vista</h6>
                      <p>Modos de visualización</p>
                      <ul>
                        <li>Diseño de impresión</li>
                        <li>Diseño web</li>
                        <li>Esquema</li>
                        <li>Panel de navegación</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="area-interfaz-word">
                  <h5>3. 📄 Área de Trabajo del Documento</h5>
                  <ul>
                    <li><strong>Lienzo principal:</strong> Donde escribes y editas el texto</li>
                    <li><strong>Reglas:</strong> Ayudan con márgenes y tabulaciones</li>
                    <li><strong>Cursor de texto:</strong> Línea parpadeante que indica dónde aparecerá el texto</li>
                    <li><strong>Márgenes visuales:</strong> Límites del área de texto</li>
                  </ul>
                </div>

                <div class="area-interfaz-word">
                  <h5>4. 📊 Barra de Estado</h5>
                  <p>Información útil en la parte inferior:</p>
                  <ul>
                    <li><strong>Número de páginas:</strong> "Página 1 de 3"</li>
                    <li><strong>Conteo de palabras:</strong> Total de palabras del documento</li>
                    <li><strong>Idioma:</strong> Idioma actual para corrección ortográfica</li>
                    <li><strong>Vista del documento:</strong> Botones para cambiar modo de vista</li>
                    <li><strong>Zoom:</strong> Control deslizante para acercar/alejar</li>
                  </ul>
                </div>
              </div>

              <div class="herramientas-esenciales">
                <h4>🛠️ Herramientas Esenciales para Principiantes</h4>
                
                <div class="categoria-herramientas">
                  <h5>✍️ Herramientas de Texto Básicas</h5>
                  
                  <div class="herramienta-detalle">
                    <h6>🔤 Formato de Fuente</h6>
                    <ul>
                      <li><strong>Tipo de fuente:</strong> Arial, Times New Roman, Calibri, etc.</li>
                      <li><strong>Tamaño:</strong> 8, 10, 12, 14, 16, 18, 24, etc. puntos</li>
                      <li><strong>Estilo:</strong> <strong>Negrita</strong>, <em>Cursiva</em>, <u>Subrayado</u></li>
                      <li><strong>Color:</strong> Paleta de colores para el texto</li>
                    </ul>
                    <p class="practica">🎯 <strong>Práctica:</strong> El tamaño estándar para documentos es 12 puntos</p>
                  </div>

                  <div class="herramienta-detalle">
                    <h6>📐 Alineación de Texto</h6>
                    <ul>
                      <li><strong>Izquierda:</strong> Texto alineado al margen izquierdo (más común)</li>
                      <li><strong>Centro:</strong> Texto centrado (para títulos)</li>
                      <li><strong>Derecha:</strong> Texto alineado al margen derecho (para fechas)</li>
                      <li><strong>Justificado:</strong> Texto alineado a ambos márgenes (para párrafos formales)</li>
                    </ul>
                  </div>

                  <div class="herramienta-detalle">
                    <h6>📝 Listas y Viñetas</h6>
                    <ul>
                      <li><strong>Viñetas:</strong> • Puntos para listas sin orden específico</li>
                      <li><strong>Numeración:</strong> 1. Para listas ordenadas o pasos</li>
                      <li><strong>Lista multinivel:</strong> Sublistas con diferentes niveles</li>
                      <li><strong>Viñetas personalizadas:</strong> Símbolos especiales o imágenes</li>
                    </ul>
                  </div>
                </div>

                <div class="categoria-herramientas">
                  <h5>📄 Herramientas de Párrafo</h5>
                  
                  <div class="herramienta-detalle">
                    <h6>📏 Espaciado</h6>
                    <ul>
                      <li><strong>Interlineado:</strong> Espacio entre líneas (simple, 1.5, doble)</li>
                      <li><strong>Espacio antes/después:</strong> Espacio entre párrafos</li>
                      <li><strong>Sangría:</strong> Margen adicional al inicio del párrafo</li>
                      <li><strong>Sangría francesa:</strong> Primera línea sin sangría, resto con sangría</li>
                    </ul>
                  </div>

                  <div class="herramienta-detalle">
                    <h6>🎨 Bordes y Sombreado</h6>
                    <ul>
                      <li><strong>Bordes:</strong> Líneas alrededor del texto o párrafo</li>
                      <li><strong>Sombreado:</strong> Color de fondo para destacar texto</li>
                      <li><strong>Estilos de línea:</strong> Continua, punteada, doble, etc.</li>
                      <li><strong>Grosor:</strong> Líneas finas o gruesas</li>
                    </ul>
                  </div>
                </div>

                <div class="categoria-herramientas">
                  <h5>📊 Herramientas de Inserción</h5>
                  
                  <div class="herramienta-detalle">
                    <h6>🖼️ Imágenes</h6>
                    <ul>
                      <li><strong>Desde archivo:</strong> Insertar imágenes guardadas en el computador</li>
                      <li><strong>Imágenes en línea:</strong> Buscar y insertar desde internet</li>
                      <li><strong>Capturas:</strong> Tomar screenshots directamente</li>
                      <li><strong>Formas:</strong> Rectángulos, círculos, flechas, etc.</li>
                    </ul>
                  </div>

                  <div class="herramienta-detalle">
                    <h6>📊 Tablas</h6>
                    <ul>
                      <li><strong>Insertar tabla:</strong> Crear filas y columnas</li>
                      <li><strong>Estilos de tabla:</strong> Formatos prediseñados</li>
                      <li><strong>Modificar estructura:</strong> Agregar/eliminar filas y columnas</li>
                      <li><strong>Combinar celdas:</strong> Unir celdas para títulos</li>
                    </ul>
                  </div>

                  <div class="herramienta-detalle">
                    <h6>🔗 Enlaces y Referencias</h6>
                    <ul>
                      <li><strong>Hipervínculos:</strong> Enlaces a páginas web o documentos</li>
                      <li><strong>Marcadores:</strong> Referencias internas del documento</li>
                      <li><strong>Referencias cruzadas:</strong> Enlaces a figuras, tablas, etc.</li>
                      <li><strong>Notas al pie:</strong> Aclaraciones en la parte inferior</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="navegacion-word">
                <h4>🧭 Navegación y Búsqueda</h4>
                
                <div class="metodo-navegacion">
                  <h5>🔍 Panel de Navegación</h5>
                  <p>Herramienta poderosa para moverse rápidamente por documentos largos:</p>
                  <ul>
                    <li><strong>Títulos:</strong> Navegar por encabezados y subtítulos</li>
                    <li><strong>Páginas:</strong> Vista miniatura de cada página</li>
                    <li><strong>Resultados:</strong> Mostrar resultados de búsqueda</li>
                  </ul>
                  <p class="acceso">📍 <strong>Acceso:</strong> Vista > Panel de navegación</p>
                </div>

                <div class="metodo-navegacion">
                  <h5>🔎 Buscar y Reemplazar</h5>
                  <ul>
                    <li><strong>Buscar (Ctrl+F):</strong> Encontrar texto específico</li>
                    <li><strong>Reemplazar (Ctrl+H):</strong> Cambiar texto automáticamente</li>
                    <li><strong>Buscar avanzado:</strong> Por formato, estilos, caracteres especiales</li>
                    <li><strong>Expresiones regulares:</strong> Búsquedas con patrones complejos</li>
                  </ul>
                </div>

                <div class="metodo-navegacion">
                  <h5>⌨️ Atajos de Teclado Esenciales</h5>
                  <div class="atajos-grid">
                    <div class="atajo-categoria">
                      <h6>📝 Edición Básica</h6>
                      <ul>
                        <li><strong>Ctrl+C:</strong> Copiar</li>
                        <li><strong>Ctrl+V:</strong> Pegar</li>
                        <li><strong>Ctrl+X:</strong> Cortar</li>
                        <li><strong>Ctrl+Z:</strong> Deshacer</li>
                        <li><strong>Ctrl+Y:</strong> Rehacer</li>
                      </ul>
                    </div>
                    
                    <div class="atajo-categoria">
                      <h6>🎨 Formato</h6>
                      <ul>
                        <li><strong>Ctrl+B:</strong> Negrita</li>
                        <li><strong>Ctrl+I:</strong> Cursiva</li>
                        <li><strong>Ctrl+U:</strong> Subrayado</li>
                        <li><strong>Ctrl+E:</strong> Centrar</li>
                        <li><strong>Ctrl+L:</strong> Alinear izquierda</li>
                      </ul>
                    </div>
                    
                    <div class="atajo-categoria">
                      <h6>📄 Documento</h6>
                      <ul>
                        <li><strong>Ctrl+N:</strong> Nuevo documento</li>
                        <li><strong>Ctrl+O:</strong> Abrir documento</li>
                        <li><strong>Ctrl+S:</strong> Guardar</li>
                        <li><strong>Ctrl+P:</strong> Imprimir</li>
                        <li><strong>F12:</strong> Guardar como</li>
                      </ul>
                    </div>
                    
                    <div class="atajo-categoria">
                      <h6>🧭 Navegación</h6>
                      <ul>
                        <li><strong>Ctrl+Inicio:</strong> Ir al principio</li>
                        <li><strong>Ctrl+Fin:</strong> Ir al final</li>
                        <li><strong>Ctrl+F:</strong> Buscar</li>
                        <li><strong>Ctrl+H:</strong> Reemplazar</li>
                        <li><strong>Ctrl+G:</strong> Ir a página</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="personalizacion">
                <h4>⚙️ Personalización de la Interfaz</h4>
                
                <div class="opcion-personalizacion">
                  <h5>🎨 Personalizar la Cinta</h5>
                  <ul>
                    <li><strong>Agregar comandos:</strong> Incluir herramientas favoritas</li>
                    <li><strong>Crear pestañas:</strong> Organizar herramientas por proyecto</li>
                    <li><strong>Reordenar elementos:</strong> Cambiar la disposición</li>
                    <li><strong>Ocultar pestañas:</strong> Simplificar la interfaz</li>
                  </ul>
                  <p class="acceso">📍 <strong>Acceso:</strong> Archivo > Opciones > Personalizar cinta</p>
                </div>

                <div class="opcion-personalizacion">
                  <h5>⚡ Barra de Herramientas de Acceso Rápido</h5>
                  <ul>
                    <li>Pequeña barra encima de la cinta</li>
                    <li>Comandos más usados siempre visibles</li>
                    <li>Se puede personalizar fácilmente</li>
                    <li>Accesible con Alt + número</li>
                  </ul>
                </div>

                <div class="opcion-personalizacion">
                  <h5>🌙 Temas de Interfaz</h5>
                  <ul>
                    <li><strong>Colorido:</strong> Colores completos de Office</li>
                    <li><strong>Gris oscuro:</strong> Más suave para los ojos</li>
                    <li><strong>Negro:</strong> Modo oscuro completo</li>
                    <li><strong>Blanco:</strong> Interfaz minimalista</li>
                  </ul>
                  <p class="acceso">📍 <strong>Acceso:</strong> Archivo > Opciones > General > Tema de Office</p>
                </div>
              </div>

              <div class="consejos-interfaz">
                <h4>💡 Consejos para Dominar la Interfaz</h4>
                
                <div class="consejo-categoria">
                  <h5>🚀 Para Principiantes</h5>
                  <ul>
                    <li><strong>Empezar gradual:</strong> Dominar primero Inicio e Insertar</li>
                    <li><strong>Usar tooltips:</strong> Pausar el mouse sobre botones para ver descripciones</li>
                    <li><strong>Practicar atajos:</strong> Comenzar con Ctrl+S, Ctrl+C, Ctrl+V</li>
                    <li><strong>Explorar con confianza:</strong> Word tiene un excelente "Deshacer"</li>
                  </ul>
                </div>

                <div class="consejo-categoria">
                  <h5>⚡ Para Mejorar Eficiencia</h5>
                  <ul>
                    <li><strong>Memorizar atajos:</strong> Los comandos frecuentes deben ser automáticos</li>
                    <li><strong>Personalizar la cinta:</strong> Tener las herramientas favoritas a mano</li>
                    <li><strong>Usar el panel de navegación:</strong> Especialmente en documentos largos</li>
                    <li><strong>Aprovechar "Dígame":</strong> Buscar comandos rápidamente</li>
                  </ul>
                </div>

                <div class="consejo-categoria">
                  <h5>🎯 Errores Comunes a Evitar</h5>
                  <ul>
                    <li><strong>No usar espacios múltiples:</strong> Usar tabulaciones o sangría</li>
                    <li><strong>No presionar Enter múltiples veces:</strong> Usar espaciado de párrafo</li>
                    <li><strong>No ignorar los estilos:</strong> Son fundamentales para documentos profesionales</li>
                    <li><strong>No trabajar sin guardar:</strong> Ctrl+S debe ser un hábito constante</li>
                  </ul>
                </div>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/interfaz-word-completa.jpg",
              video: "/videos/teoria/navegacion-word.mp4",
              infografia: "/images/teoria/atajos-word.png"
            },
            actividades: [
              {
                tipo: "exploracion",
                pregunta: "Abre Microsoft Word y explora cada pestaña de la cinta. ¿Qué herramientas encuentras en cada una?",
                ayuda: "Dedica tiempo a cada pestaña: Inicio, Insertar, Diseño, etc."
              },
              {
                tipo: "practica",
                pregunta: "Crea un documento simple y practica cambiar el formato del texto usando solo atajos de teclado",
                ayuda: "Intenta Ctrl+B, Ctrl+I, Ctrl+U, Ctrl+E, etc."
              }
            ]
          },
          {
            id: 4,
            titulo: "Conceptos Fundamentales de Procesamiento de Textos",
            contenido: `
              <h3>📚 Fundamentos del Procesamiento de Textos Digital</h3>
              
              <div class="concepto-procesamiento">
                <h4>🔤 ¿Qué es el Procesamiento de Textos?</h4>
                <p>El <strong>procesamiento de textos</strong> es el conjunto de técnicas y herramientas que permiten crear, editar, formatear y organizar documentos digitales de manera eficiente y profesional.</p>
                
                <div class="diferencias-fundamentales">
                  <h5>🔄 Diferencias con la Escritura Tradicional</h5>
                  <table class="comparacion-escritura">
                    <tr>
                      <th>Aspecto</th>
                      <th>Escritura Tradicional</th>
                      <th>Procesamiento Digital</th>
                    </tr>
                    <tr>
                      <td><strong>Corrección</strong></td>
                      <td>Borrar o reescribir</td>
                      <td>Edición no destructiva</td>
                    </tr>
                    <tr>
                      <td><strong>Organización</strong></td>
                      <td>Secuencial y lineal</td>
                      <td>Flexible y reorganizable</td>
                    </tr>
                    <tr>
                      <td><strong>Formato</strong></td>
                      <td>Limitado por herramientas físicas</td>
                      <td>Infinitas posibilidades</td>
                    </tr>
                    <tr>
                      <td><strong>Colaboración</strong></td>
                      <td>Difícil y lenta</td>
                      <td>Simultánea y en tiempo real</td>
                    </tr>
                    <tr>
                      <td><strong>Distribución</strong></td>
                      <td>Copias físicas</td>
                      <td>Distribución digital instantánea</td>
                    </tr>
                  </table>
                </div>
              </div>

              <div class="elementos-fundamentales">
                <h4>🧩 Elementos Fundamentales de un Documento</h4>
                
                <div class="elemento-doc">
                  <h5>📝 Texto</h5>
                  <p>El contenido escrito es la base de cualquier documento. En el procesamiento digital, el texto tiene múltiples capas:</p>
                  <ul>
                    <li><strong>Contenido:</strong> El mensaje que se quiere comunicar</li>
                    <li><strong>Estructura:</strong> Organización jerárquica (títulos, subtítulos, párrafos)</li>
                    <li><strong>Formato:</strong> Apariencia visual (fuente, tamaño, color)</li>
                    <li><strong>Estilo:</strong> Consistencia visual a través del documento</li>
                  </ul>
                </div>

                <div class="elemento-doc">
                  <h5>🎨 Formato</h5>
                  <p>El formato determina cómo se ve el texto y afecta directamente la legibilidad y profesionalismo:</p>
                  
                  <div class="tipos-formato">
                    <div class="formato-tipo">
                      <h6>📚 Formato de Carácter</h6>
                      <ul>
                        <li><strong>Fuente:</strong> Tipo de letra (Arial, Times, Calibri)</li>
                        <li><strong>Tamaño:</strong> Medido en puntos (pt)</li>
                        <li><strong>Estilo:</strong> Negrita, cursiva, subrayado</li>
                        <li><strong>Color:</strong> Del texto y del fondo</li>
                        <li><strong>Efectos:</strong> Tachado, superíndice, subíndice</li>
                      </ul>
                    </div>
                    
                    <div class="formato-tipo">
                      <h6>📄 Formato de Párrafo</h6>
                      <ul>
                        <li><strong>Alineación:</strong> Izquierda, centro, derecha, justificado</li>
                        <li><strong>Espaciado:</strong> Entre líneas y entre párrafos</li>
                        <li><strong>Sangría:</strong> Margen adicional al inicio</li>
                        <li><strong>Tabulaciones:</strong> Posiciones fijas para alinear texto</li>
                        <li><strong>Bordes y sombreado:</strong> Elementos decorativos</li>
                      </ul>
                    </div>
                    
                    <div class="formato-tipo">
                      <h6>📋 Formato de Página</h6>
                      <ul>
                        <li><strong>Márgenes:</strong> Espacios en blanco alrededor del texto</li>
                        <li><strong>Orientación:</strong> Vertical (retrato) u horizontal (paisaje)</li>
                        <li><strong>Tamaño:</strong> A4, Carta, Legal, etc.</li>
                        <li><strong>Columnas:</strong> División del texto en columnas</li>
                        <li><strong>Encabezados y pies:</strong> Información que se repite en cada página</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="elemento-doc">
                  <h5>🏗️ Estructura</h5>
                  <p>La estructura organiza el contenido de manera lógica y facilita la comprensión:</p>
                  
                  <div class="niveles-estructura">
                    <div class="nivel">
                      <h6>1️⃣ Nivel de Documento</h6>
                      <ul>
                        <li>Portada o título principal</li>
                        <li>Tabla de contenido</li>
                        <li>Cuerpo del documento</li>
                        <li>Referencias y anexos</li>
                      </ul>
                    </div>
                    
                    <div class="nivel">
                      <h6>2️⃣ Nivel de Sección</h6>
                      <ul>
                        <li>Capítulos o secciones principales</li>
                        <li>Subsecciones</li>
                        <li>Temas específicos</li>
                        <li>Conclusiones de sección</li>
                      </ul>
                    </div>
                    
                    <div class="nivel">
                      <h6>3️⃣ Nivel de Párrafo</h6>
                      <ul>
                        <li>Ideas principales</li>
                        <li>Ideas de apoyo</li>
                        <li>Ejemplos y evidencia</li>
                        <li>Transiciones entre ideas</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="conceptos-avanzados">
                <h4>🎯 Conceptos Avanzados del Procesamiento</h4>
                
                <div class="concepto-avanzado">
                  <h5>🎨 Estilos</h5>
                  <p>Los estilos son la <strong>herramienta más poderosa</strong> para mantener consistencia visual:</p>
                  
                  <div class="tipos-estilos">
                    <div class="tipo-estilo">
                      <h6>📝 Estilos de Párrafo</h6>
                      <ul>
                        <li>Definen formato completo del párrafo</li>
                        <li>Incluyen fuente, espaciado, alineación</li>
                        <li>Ejemplos: Título 1, Título 2, Normal, Cita</li>
                        <li>Facilitan cambios globales</li>
                      </ul>
                    </div>
                    
                    <div class="tipo-estilo">
                      <h6>🔤 Estilos de Carácter</h6>
                      <ul>
                        <li>Solo afectan formato de texto seleccionado</li>
                        <li>Ejemplos: Énfasis, Referencia, Código</li>
                        <li>Se combinan con estilos de párrafo</li>
                        <li>Útiles para destacar palabras específicas</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div class="ventajas-estilos">
                    <h6>✅ Ventajas de Usar Estilos</h6>
                    <ul>
                      <li><strong>Consistencia:</strong> Todo el documento tiene la misma apariencia</li>
                      <li><strong>Eficiencia:</strong> Cambios rápidos en todo el documento</li>
                      <li><strong>Automatización:</strong> Tablas de contenido automáticas</li>
                      <li><strong>Profesionalismo:</strong> Documentos con apariencia uniforme</li>
                      <li><strong>Navegación:</strong> Facilita moverse por el documento</li>
                    </ul>
                  </div>
                </div>

                <div class="concepto-avanzado">
                  <h5>📊 Plantillas</h5>
                  <p>Las plantillas son documentos prediseñados que sirven como punto de partida:</p>
                  
                  <div class="tipos-plantillas">
                    <div class="plantilla-tipo">
                      <h6>📄 Plantillas de Documento</h6>
                      <ul>
                        <li>Cartas formales</li>
                        <li>Currículums</li>
                        <li>Informes empresariales</li>
                        <li>Trabajos académicos</li>
                      </ul>
                    </div>
                    
                    <div class="plantilla-tipo">
                      <h6>🎨 Plantillas de Diseño</h6>
                      <ul>
                        <li>Folletos y flyers</li>
                        <li>Invitaciones</li>
                        <li>Tarjetas de presentación</li>
                        <li>Pósters</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div class="beneficios-plantillas">
                    <h6>🚀 Beneficios de las Plantillas</h6>
                    <ul>
                      <li><strong>Ahorro de tiempo:</strong> No empezar desde cero</li>
                      <li><strong>Diseño profesional:</strong> Creadas por diseñadores expertos</li>
                      <li><strong>Estándares:</strong> Siguen convenciones establecidas</li>
                      <li><strong>Inspiración:</strong> Ideas para propios diseños</li>
                    </ul>
                  </div>
                </div>

                <div class="concepto-avanzado">
                  <h5>🔗 Referencias y Automatización</h5>
                  <p>Word puede automatizar muchas tareas tediosas:</p>
                  
                  <div class="automatizaciones">
                    <div class="auto-tipo">
                      <h6>📚 Referencias Académicas</h6>
                      <ul>
                        <li><strong>Citas:</strong> APA, MLA, Chicago, etc.</li>
                        <li><strong>Bibliografía:</strong> Generación automática</li>
                        <li><strong>Notas al pie:</strong> Numeración automática</li>
                        <li><strong>Referencias cruzadas:</strong> Enlaces internos</li>
                      </ul>
                    </div>
                    
                    <div class="auto-tipo">
                      <h6>📋 Índices y Tablas</h6>
                      <ul>
                        <li><strong>Tabla de contenido:</strong> Basada en estilos de título</li>
                        <li><strong>Índice alfabético:</strong> Términos importantes</li>
                        <li><strong>Lista de figuras:</strong> Imágenes y gráficos</li>
                        <li><strong>Lista de tablas:</strong> Tablas del documento</li>
                      </ul>
                    </div>
                    
                    <div class="auto-tipo">
                      <h6>🔢 Numeración</h6>
                      <ul>
                        <li><strong>Páginas:</strong> Automática y personalizable</li>
                        <li><strong>Secciones:</strong> Numeración independiente</li>
                        <li><strong>Figuras y tablas:</strong> Numeración secuencial</li>
                        <li><strong>Títulos:</strong> Numeración jerárquica</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="principios-diseno">
                <h4>🎨 Principios de Diseño de Documentos</h4>
                
                <div class="principio-diseno">
                  <h5>👁️ Legibilidad</h5>
                  <p>El objetivo principal es que el documento sea fácil de leer:</p>
                  <ul>
                    <li><strong>Contraste:</strong> Texto oscuro sobre fondo claro</li>
                    <li><strong>Tamaño de fuente:</strong> Mínimo 11-12 puntos para texto normal</li>
                    <li><strong>Interlineado:</strong> Espacio suficiente entre líneas (1.15-1.5)</li>
                    <li><strong>Longitud de línea:</strong> 50-75 caracteres por línea</li>
                    <li><strong>Márgenes:</strong> Espacio en blanco para descanso visual</li>
                  </ul>
                </div>

                <div class="principio-diseno">
                  <h5>⚖️ Jerarquía Visual</h5>
                  <p>Guiar al lector a través del contenido:</p>
                  <ul>
                    <li><strong>Títulos grandes:</strong> Atraen la atención primero</li>
                    <li><strong>Subtítulos medianos:</strong> Organizan las secciones</li>
                    <li><strong>Texto normal:</strong> Contenido principal</li>
                    <li><strong>Elementos destacados:</strong> Citas, ejemplos, notas</li>
                  </ul>
                </div>

                <div class="principio-diseno">
                  <h5>🎯 Consistencia</h5>
                  <p>Mantener uniformidad en todo el documento:</p>
                  <ul>
                    <li><strong>Fuentes:</strong> Máximo 2-3 fuentes diferentes</li>
                    <li><strong>Colores:</strong> Paleta limitada y coherente</li>
                    <li><strong>Espaciado:</strong> Mismo patrón en todo el documento</li>
                    <li><strong>Alineación:</strong> Elementos alineados entre sí</li>
                  </ul>
                </div>

                <div class="principio-diseno">
                  <h5>⚡ Simplicidad</h5>
                  <p>Menos es más en el diseño de documentos:</p>
                  <ul>
                    <li><strong>Evitar sobrecarga:</strong> No usar todas las herramientas disponibles</li>
                    <li><strong>Espacios en blanco:</strong> Dan respiro al contenido</li>
                    <li><strong>Elementos necesarios:</strong> Solo incluir lo que añade valor</li>
                    <li><strong>Claridad sobre creatividad:</strong> La función es más importante que la forma</li>
                  </ul>
                </div>
              </div>

              <div class="tipos-documentos-profesionales">
                <h4>📋 Tipos de Documentos y Sus Características</h4>
                
                <div class="categoria-documento">
                  <h5>🎓 Documentos Académicos</h5>
                  <div class="doc-tipo">
                    <h6>📝 Ensayos</h6>
                    <ul>
                      <li>Estructura: Introducción, desarrollo, conclusión</li>
                      <li>Formato: Doble espacio, fuente serif (Times New Roman)</li>
                      <li>Estilo: Formal y objetivo</li>
                      <li>Referencias: Sistema de citas requerido</li>
                    </ul>
                  </div>
                  
                  <div class="doc-tipo">
                    <h6>📚 Tesis y Disertaciones</h6>
                    <ul>
                      <li>Estructura: Capítulos numerados, índices múltiples</li>
                      <li>Formato: Estrictas normas institucionales</li>
                      <li>Extensión: 50-300+ páginas</li>
                      <li>Elementos: Portada, resumen, bibliografía extensa</li>
                    </ul>
                  </div>
                </div>

                <div class="categoria-documento">
                  <h5>💼 Documentos Empresariales</h5>
                  <div class="doc-tipo">
                    <h6>📊 Informes</h6>
                    <ul>
                      <li>Estructura: Resumen ejecutivo, análisis, recomendaciones</li>
                      <li>Formato: Profesional, uso de gráficos y tablas</li>
                      <li>Estilo: Claro, conciso, orientado a acción</li>
                      <li>Audiencia: Directivos y tomadores de decisiones</li>
                    </ul>
                  </div>
                  
                  <div class="doc-tipo">
                    <h6>💌 Correspondencia</h6>
                    <ul>
                      <li>Estructura: Encabezado, saludo, cuerpo, despedida</li>
                      <li>Formato: Plantillas corporativas</li>
                      <li>Estilo: Formal pero personalizado</li>
                      <li>Elementos: Logo, datos de contacto</li>
                    </ul>
                  </div>
                </div>

                <div class="categoria-documento">
                  <h5>📖 Documentos Técnicos</h5>
                  <div class="doc-tipo">
                    <h6>📋 Manuales</h6>
                    <ul>
                      <li>Estructura: Índice detallado, pasos numerados</li>
                      <li>Formato: Fuentes sans-serif, uso intensivo de listas</li>
                      <li>Estilo: Instruccional y claro</li>
                      <li>Elementos: Imágenes, diagramas, tablas</li>
                    </ul>
                  </div>
                  
                  <div class="doc-tipo">
                    <h6>📋 Procedimientos</h6>
                    <ul>
                      <li>Estructura: Pasos secuenciales claros</li>
                      <li>Formato: Numeración, viñetas, highlighting</li>
                      <li>Estilo: Imperativo y directo</li>
                      <li>Enfoque: Acción y resultados</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="flujo-trabajo">
                <h4>🔄 Flujo de Trabajo Profesional</h4>
                
                <div class="fase-trabajo">
                  <h5>1️⃣ Planificación</h5>
                  <ul>
                    <li><strong>Definir propósito:</strong> ¿Qué se quiere lograr?</li>
                    <li><strong>Identificar audiencia:</strong> ¿Quién va a leer el documento?</li>
                    <li><strong>Determinar estructura:</strong> ¿Cómo organizar la información?</li>
                    <li><strong>Elegir plantilla:</strong> ¿Qué formato es más apropiado?</li>
                  </ul>
                </div>

                <div class="fase-trabajo">
                  <h5>2️⃣ Creación del Contenido</h5>
                  <ul>
                    <li><strong>Escribir primer borrador:</strong> Enfocarse en el contenido, no en el formato</li>
                    <li><strong>Organizar ideas:</strong> Usar títulos y subtítulos</li>
                    <li><strong>Incluir elementos:</strong> Tablas, imágenes, gráficos según necesidad</li>
                    <li><strong>Aplicar estilos básicos:</strong> Establecer jerarquía visual</li>
                  </ul>
                </div>

                <div class="fase-trabajo">
                  <h5>3️⃣ Formateo y Diseño</h5>
                  <ul>
                    <li><strong>Aplicar estilos:</strong> Usar estilos consistentes</li>
                    <li><strong>Ajustar espaciado:</strong> Mejorar legibilidad</li>
                    <li><strong>Insertar elementos automáticos:</strong> Tabla de contenido, numeración</li>
                    <li><strong>Revisar diseño:</strong> Verificar consistencia visual</li>
                  </ul>
                </div>

                <div class="fase-trabajo">
                  <h5>4️⃣ Revisión y Corrección</h5>
                  <ul>
                    <li><strong>Corrección ortográfica:</strong> Usar herramientas automáticas</li>
                    <li><strong>Revisión de contenido:</strong> Verificar lógica y coherencia</li>
                    <li><strong>Revisión de formato:</strong> Comprobar consistencia visual</li>
                    <li><strong>Prueba de impresión:</strong> Verificar cómo se ve impreso</li>
                  </ul>
                </div>

                <div class="fase-trabajo">
                  <h5>5️⃣ Finalización y Distribución</h5>
                  <ul>
                    <li><strong>Versión final:</strong> Guardar con nombre definitivo</li>
                    <li><strong>Formato de distribución:</strong> PDF para lectura, DOCX para edición</li>
                    <li><strong>Backup:</strong> Guardar copias de seguridad</li>
                    <li><strong>Compartir:</strong> Enviar por el método apropiado</li>
                  </ul>
                </div>
              </div>

              <div class="mejores-practicas">
                <h4>🏆 Mejores Prácticas del Procesamiento de Textos</h4>
                
                <div class="practica-categoria">
                  <h5>📝 Contenido</h5>
                  <ul>
                    <li><strong>Escribir para la audiencia:</strong> Adaptar lenguaje y nivel de detalle</li>
                    <li><strong>Una idea por párrafo:</strong> Facilita la comprensión</li>
                    <li><strong>Usar voz activa:</strong> Hace el texto más directo y claro</li>
                    <li><strong>Ser conciso:</strong> Eliminar palabras innecesarias</li>
                  </ul>
                </div>

                <div class="practica-categoria">
                  <h5>🎨 Formato</h5>
                  <ul>
                    <li><strong>Usar estilos siempre:</strong> Nunca formatear manualmente</li>
                    <li><strong>Mantener simplicidad:</strong> No sobrecargar con efectos</li>
                    <li><strong>Ser consistente:</strong> Mismos patrones en todo el documento</li>
                    <li><strong>Probar legibilidad:</strong> Verificar que sea fácil de leer</li>
                  </ul>
                </div>

                <div class="practica-categoria">
                  <h5>🔧 Técnicas</h5>
                  <ul>
                    <li><strong>Guardar frecuentemente:</strong> Ctrl+S debe ser automático</li>
                    <li><strong>Usar control de versiones:</strong> Nombrar archivos claramente</li>
                    <li><strong>Hacer respaldos:</strong> Copias en múltiples ubicaciones</li>
                    <li><strong>Documentar cambios:</strong> Usar comentarios para colaboración</li>
                  </ul>
                </div>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/conceptos-word.jpg",
              video: "/videos/teoria/fundamentos-word.mp4",
              infografia: "/images/teoria/flujo-trabajo-word.png"
            },
            actividades: [
              {
                tipo: "analisis",
                pregunta: "Analiza un documento que uses frecuentemente (trabajo escolar, carta, etc.). ¿Qué elementos de estructura y formato identificas?",
                ayuda: "Busca títulos, párrafos, listas, formato de fuente, espaciado, etc."
              },
              {
                tipo: "proyecto",
                pregunta: "Crea un documento simple aplicando los conceptos aprendidos: usa estilos, estructura jerárquica y principios de diseño",
                ayuda: "Puede ser una carta formal, un mini-informe o un documento académico corto"
              }
            ]
          }
        ],
        recursos: {
          documentos: [
            {
              titulo: "Guía Completa de Microsoft Word",
              tipo: "PDF",
              url: "/recursos/word/guia-completa-word.pdf"
            },
            {
              titulo: "Plantillas Profesionales",
              tipo: "ZIP",
              url: "/recursos/word/plantillas-word.zip"
            },
            {
              titulo: "Manual de Estilos Académicos",
              tipo: "PDF",
              url: "/recursos/word/estilos-academicos.pdf"
            },
            {
              titulo: "Atajos de Teclado Word",
              tipo: "PDF",
              url: "/recursos/word/atajos-word.pdf"
            }
          ],
          videos: [
            {
              titulo: "Tutorial Básico de Word",
              duracion: "20 min",
              url: "/videos/tutorial-basico-word.mp4"
            },
            {
              titulo: "Trabajando con Estilos",
              duracion: "15 min",
              url: "/videos/estilos-word.mp4"
            },
            {
              titulo: "Documentos Profesionales",
              duracion: "25 min",
              url: "/videos/documentos-profesionales.mp4"
            }
          ],
          enlaces: [
            {
              titulo: "Microsoft Word - Sitio Oficial",
              url: "https://www.microsoft.com/microsoft-365/word"
            },
            {
              titulo: "Plantillas Gratuitas de Microsoft",
              url: "https://templates.office.com"
            },
            {
              titulo: "Soporte Técnico de Word",
              url: "https://support.microsoft.com/word"
            },
            {
              titulo: "Comunidad de Usuarios Word",
              url: "https://techcommunity.microsoft.com/t5/word/ct-p/Word"
            }
          ]
        },
        evaluacion: {
          preRequisitos: ["Conocimientos básicos de computación", "Familiaridad con Windows"],
          criterios: [
            "Explicar qué es Microsoft Word y sus usos principales",
            "Conocer la evolución histórica de los procesadores de texto",
            "Navegar efectivamente por la interfaz de Word",
            "Entender y aplicar conceptos de formato y estructura",
            "Usar estilos para mantener consistencia",
            "Crear documentos siguiendo principios de diseño profesional"
          ],
          tiempoEstimado: "25 minutos"
        }
      }
    },
    'powerpoint': {
      '1': {
        titulo: "Primeros pasos",
        duracion: "20-25 minutos",
        objetivos: [
          "Comprender qué es Microsoft PowerPoint y sus usos principales",
          "Conocer la evolución de las herramientas de presentación",
          "Familiarizarse con la interfaz básica de PowerPoint",
          "Dominar operaciones básicas: crear, abrir, guardar y gestionar presentaciones",
          "Entender conceptos fundamentales de diapositivas y presentaciones"
        ],
        secciones: [
          {
            id: 1,
            titulo: "¿Qué es Microsoft PowerPoint?",
            contenido: `
              <div class="seccion-contenido">
                <h3>🎯 Introducción a PowerPoint</h3>
                
                <div class="definicion-powerpoint">
                  <h4>📊 ¿Qué es Microsoft PowerPoint?</h4>
                  <p><strong>Microsoft PowerPoint</strong> es una aplicación de software especializada en la creación, edición y presentación de diapositivas multimedia. Es una herramienta fundamental para comunicar ideas de manera visual y estructurada.</p>
                  
                  <div class="caracteristicas-principales">
                    <h5>🌟 Características Principales</h5>
                    <ul>
                      <li><strong>Presentaciones por diapositivas:</strong> Organización secuencial de contenido</li>
                      <li><strong>Multimedia integrada:</strong> Texto, imágenes, audio, video y animaciones</li>
                      <li><strong>Plantillas profesionales:</strong> Diseños prediseñados para diferentes propósitos</li>
                      <li><strong>Herramientas de diseño:</strong> Elementos gráficos, formas, gráficos y tablas</li>
                      <li><strong>Transiciones y animaciones:</strong> Efectos dinámicos para captar atención</li>
                      <li><strong>Colaboración:</strong> Trabajo en equipo y comentarios en tiempo real</li>
                    </ul>
                  </div>
                </div>

                <div class="usos-powerpoint">
                  <h4>🎯 Usos Principales de PowerPoint</h4>
                  
                  <div class="contextos-uso">
                    <div class="uso-categoria">
                      <h5>🎓 Educativo</h5>
                      <ul>
                        <li>Presentaciones de clase y conferencias magistrales</li>
                        <li>Exposiciones de estudiantes y proyectos académicos</li>
                        <li>Material didáctico interactivo y visual</li>
                        <li>Tutoriales y guías paso a paso</li>
                      </ul>
                    </div>

                    <div class="uso-categoria">
                      <h5>💼 Empresarial</h5>
                      <ul>
                        <li>Presentaciones a clientes y propuestas comerciales</li>
                        <li>Reportes ejecutivos y análisis de resultados</li>
                        <li>Capacitaciones internas y onboarding</li>
                        <li>Pitch de negocios y presentaciones de productos</li>
                      </ul>
                    </div>

                    <div class="uso-categoria">
                      <h5>🎨 Creativo</h5>
                      <ul>
                        <li>Portfolios digitales y showcases de trabajo</li>
                        <li>Storytelling visual y narrativas multimedia</li>
                        <li>Infografías y contenido para redes sociales</li>
                        <li>Presentaciones artísticas y culturales</li>
                      </ul>
                    </div>

                    <div class="uso-categoria">
                      <h5>👥 Personal</h5>
                      <ul>
                        <li>Álbumes de fotos familiares y eventos especiales</li>
                        <li>Presentaciones para bodas y celebraciones</li>
                        <li>CV interactivos y presentaciones personales</li>
                        <li>Documentación de viajes y experiencias</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="ventajas-powerpoint">
                  <h4>✅ Ventajas de usar PowerPoint</h4>
                  
                  <div class="beneficios-grid">
                    <div class="beneficio">
                      <h5>🎨 Comunicación Visual Efectiva</h5>
                      <p>Transforma ideas complejas en contenido visual fácil de entender y recordar</p>
                    </div>

                    <div class="beneficio">
                      <h5>⚡ Facilidad de Uso</h5>
                      <p>Interfaz intuitiva que permite crear presentaciones profesionales sin conocimientos técnicos avanzados</p>
                    </div>

                    <div class="beneficio">
                      <h5>🔧 Versatilidad</h5>
                      <p>Adapta el contenido para diferentes audiencias y contextos manteniendo la misma base</p>
                    </div>

                    <div class="beneficio">
                      <h5>📱 Compatibilidad Universal</h5>
                      <p>Se reproduce en múltiples dispositivos y plataformas, garantizando accesibilidad</p>
                    </div>

                    <div class="beneficio">
                      <h5>🎯 Estructura Organizada</h5>
                      <p>Fuerza a organizar y jerarquizar información de manera lógica y coherente</p>
                    </div>

                    <div class="beneficio">
                      <h5>👥 Impacto en Audiencia</h5>
                      <p>Mantiene la atención del público y facilita la retención de información clave</p>
                    </div>
                  </div>
                </div>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/powerpoint-introduccion.jpg",
              video: "/videos/teoria/que-es-powerpoint.mp4",
              infografia: "/images/teoria/usos-powerpoint.png"
            },
            actividades: [
              {
                tipo: "reflexion",
                pregunta: "¿Has usado PowerPoint antes? ¿Para qué tipo de presentaciones lo has utilizado?",
                ayuda: "Piensa en exposiciones escolares, presentaciones de trabajo, álbumes familiares, etc."
              },
              {
                tipo: "investigacion",
                pregunta: "Busca en internet 3 ejemplos de presentaciones PowerPoint exitosas. ¿Qué las hace efectivas?",
                ayuda: "Observa el diseño, uso de imágenes, cantidad de texto, estructura, etc."
              }
            ]
          },
          {
            id: 2,
            titulo: "Historia y Evolución de las Presentaciones",
            contenido: `
              <div class="seccion-contenido">
                <h3>📈 La Revolución de las Presentaciones Digitales</h3>
                
                <div class="historia-presentaciones">
                  <h4>🕰️ Línea de Tiempo: De las Transparencias al Digital</h4>
                  
                  <div class="timeline-presentaciones">
                    <div class="periodo-historico">
                      <h5>📜 Era Pre-Digital (Antes de 1980)</h5>
                      <ul>
                        <li><strong>Transparencias:</strong> Láminas plásticas proyectadas con retroproyector</li>
                        <li><strong>Diapositivas 35mm:</strong> Fotografías proyectadas en carrusel</li>
                        <li><strong>Rotafolios:</strong> Presentaciones manuales con papel y marcadores</li>
                        <li><strong>Pizarras:</strong> Escritura en tiempo real para explicaciones</li>
                        <li><strong>Limitaciones:</strong> Difícil edición, transportación complicada, calidad variable</li>
                      </ul>
                    </div>

                    <div class="periodo-historico">
                      <h5>💻 Nacimiento Digital (1980-1990)</h5>
                      <ul>
                        <li><strong>1984 - Forethought:</strong> Primera empresa en desarrollar software de presentación</li>
                        <li><strong>1987 - Microsoft adquiere PowerPoint:</strong> Integración al ecosistema Office</li>
                        <li><strong>PowerPoint 1.0:</strong> Solo texto en blanco y negro para Macintosh</li>
                        <li><strong>Innovación:</strong> Posibilidad de editar y reutilizar fácilmente</li>
                        <li><strong>Impacto:</strong> Democratización de las presentaciones profesionales</li>
                      </ul>
                    </div>

                    <div class="periodo-historico">
                      <h5>🎨 Era del Color y Multimedia (1990-2000)</h5>
                      <ul>
                        <li><strong>PowerPoint 2.0-3.0:</strong> Incorporación de color y gráficos básicos</li>
                        <li><strong>PowerPoint 4.0:</strong> Transiciones entre diapositivas</li>
                        <li><strong>PowerPoint 95-97:</strong> Animaciones, sonido, y video</li>
                        <li><strong>Plantillas profesionales:</strong> Diseños predefinidos para diferentes industrias</li>
                        <li><strong>Revolución:</strong> De texto plano a experiencias multimedia</li>
                      </ul>
                    </div>

                    <div class="periodo-historico">
                      <h5>🌐 Era de Internet y Colaboración (2000-2010)</h5>
                      <ul>
                        <li><strong>PowerPoint 2000-2003:</strong> Integración web y publicación online</li>
                        <li><strong>PowerPoint 2007:</strong> Nueva interfaz Ribbon, mejores gráficos</li>
                        <li><strong>Formatos modernos:</strong> Introducción del formato .pptx</li>
                        <li><strong>Colaboración:</strong> Comentarios y revisión colaborativa</li>
                        <li><strong>Accesibilidad:</strong> Mejores herramientas para personas con discapacidad</li>
                      </ul>
                    </div>

                    <div class="periodo-historico">
                      <h5>☁️ Era Cloud y Móvil (2010-Presente)</h5>
                      <ul>
                        <li><strong>PowerPoint Online:</strong> Edición desde cualquier navegador</li>
                        <li><strong>Aplicaciones móviles:</strong> PowerPoint para iOS y Android</li>
                        <li><strong>OneDrive integración:</strong> Sincronización automática en la nube</li>
                        <li><strong>Colaboración tiempo real:</strong> Edición simultánea de múltiples usuarios</li>
                        <li><strong>IA integrada:</strong> Sugerencias de diseño automático (Designer)</li>
                        <li><strong>Presentaciones interactivas:</strong> Q&A en vivo, encuestas, reacciones</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="competencia-alternativas">
                  <h4>🏆 PowerPoint vs Alternativas Modernas</h4>
                  
                  <div class="comparacion-herramientas">
                    <div class="herramienta-comparacion">
                      <h5>🎯 Google Slides</h5>
                      <ul>
                        <li><strong>Ventajas:</strong> Gratuito, colaboración excelente, acceso universal</li>
                        <li><strong>Desventajas:</strong> Menos funciones avanzadas, dependiente de internet</li>
                      </ul>
                    </div>

                    <div class="herramienta-comparacion">
                      <h5>🎨 Prezi</h5>
                      <ul>
                        <li><strong>Ventajas:</strong> Presentaciones no-lineales, efectos zoom dinámico</li>
                        <li><strong>Desventajas:</strong> Curva de aprendizaje, puede marear audiencia</li>
                      </ul>
                    </div>

                    <div class="herramienta-comparacion">
                      <h5>📱 Canva</h5>
                      <ul>
                        <li><strong>Ventajas:</strong> Diseños muy atractivos, fácil de usar</li>
                        <li><strong>Desventajas:</strong> Limitado para presentaciones complejas</li>
                      </ul>
                    </div>

                    <div class="herramienta-comparacion">
                      <h5>💼 PowerPoint (Fortalezas actuales)</h5>
                      <ul>
                        <li><strong>Madurez:</strong> 35+ años de desarrollo y refinamiento</li>
                        <li><strong>Integración:</strong> Perfecta sincronización con ecosistema Microsoft</li>
                        <li><strong>Profesionalidad:</strong> Estándar en entornos corporativos y académicos</li>
                        <li><strong>Funcionalidad:</strong> Balance óptimo entre facilidad y potencia</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="tendencias-futuro">
                  <h4>🚀 Tendencias y Futuro de las Presentaciones</h4>
                  
                  <div class="tendencias-emergentes">
                    <div class="tendencia">
                      <h5>🤖 Inteligencia Artificial</h5>
                      <ul>
                        <li>Generación automática de contenido y diseños</li>
                        <li>Transcripción y traducción en tiempo real</li>
                        <li>Análisis de engagement de audiencia</li>
                        <li>Sugerencias de mejora basadas en datos</li>
                      </ul>
                    </div>
                    
                    <div class="tendencia">
                      <h5>🥽 Realidad Virtual y Aumentada</h5>
                      <ul>
                        <li>Presentaciones inmersivas en entornos 3D</li>
                        <li>Objetos holográficos interactivos</li>
                        <li>Audiencias virtuales globales</li>
                        <li>Manipulación gestual de contenido</li>
                      </ul>
                    </div>

                    <div class="tendencia">
                      <h5>📊 Interactividad Avanzada</h5>
                      <ul>
                        <li>Encuestas y votaciones en tiempo real</li>
                        <li>Personalización automática según audiencia</li>
                        <li>Navegación no-lineal inteligente</li>
                        <li>Integración con IoT y dispositivos inteligentes</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/historia-presentaciones.jpg",
              video: "/videos/teoria/evolucion-powerpoint.mp4",
              infografia: "/images/teoria/timeline-presentaciones.png"
            },
            actividades: [
              {
                tipo: "investigacion",
                pregunta: "Investiga sobre una presentación histórica famosa (ej: Steve Jobs presentando iPhone). ¿Qué técnicas usó para ser efectiva?",
                ayuda: "Busca en YouTube presentaciones icónicas y analiza estructura, storytelling, uso de tecnología"
              },
              {
                tipo: "comparacion",
                pregunta: "Compara PowerPoint con una alternativa moderna (Google Slides, Prezi, Canva). ¿Cuáles son las principales diferencias?",
                ayuda: "Prueba crear una presentación simple en ambas herramientas y anota las diferencias"
              }
            ]
          },
          {
            id: 3,
            titulo: "Interfaz y Familiarización",
            contenido: `
              <div class="seccion-contenido">
                <h3>🖥️ Navegando la Interfaz de PowerPoint</h3>
                
                <div class="anatomia-interfaz">
                  <h4>🧭 Anatomía de la Interfaz de PowerPoint</h4>
                  
                  <div class="componentes-interfaz">
                    <div class="componente-ui">
                      <h5>📊 Barra de Título</h5>
                      <ul>
                        <li><strong>Ubicación:</strong> Parte superior de la ventana</li>
                        <li><strong>Función:</strong> Muestra el nombre del archivo y controles de ventana</li>
                        <li><strong>Elementos:</strong> Nombre de presentación, botones minimizar/maximizar/cerrar</li>
                        <li><strong>Tip:</strong> Hacer doble clic aquí maximiza/restaura la ventana</li>
                      </ul>
                    </div>

                    <div class="componente-ui">
                      <h5>🎛️ Cinta de Opciones (Ribbon)</h5>
                      <ul>
                        <li><strong>Pestañas principales:</strong> Archivo, Inicio, Insertar, Diseño, Transiciones, Animaciones, Presentación, Revisar, Vista</li>
                        <li><strong>Organización:</strong> Comandos agrupados por función en cada pestaña</li>
                        <li><strong>Personalización:</strong> Se puede minimizar o personalizar según preferencias</li>
                        <li><strong>Pestañas contextuales:</strong> Aparecen automáticamente al seleccionar objetos específicos</li>
                      </ul>
                    </div>

                    <div class="componente-ui">
                      <h5>🖼️ Área de Trabajo Principal</h5>
                      <ul>
                        <li><strong>Lienzo de diapositiva:</strong> Espacio central donde se edita el contenido</li>
                        <li><strong>Zoom:</strong> Controlable para ver detalles o vista general</li>
                        <li><strong>Reglas:</strong> Ayudan con alineación y medidas (activables en Vista)</li>
                        <li><strong>Líneas guía:</strong> Asisten en posicionamiento preciso de objetos</li>
                      </ul>
                    </div>

                    <div class="componente-ui">
                      <h5>🎞️ Panel de Diapositivas</h5>
                      <ul>
                        <li><strong>Ubicación:</strong> Lado izquierdo por defecto</li>
                        <li><strong>Función:</strong> Navegación rápida entre diapositivas</li>
                        <li><strong>Vistas:</strong> Miniaturas o vista de esquema (texto)</li>
                        <li><strong>Gestión:</strong> Arrastrar y soltar para reordenar diapositivas</li>
                      </ul>
                    </div>

                    <div class="componente-ui">
                      <h5>📝 Panel de Notas</h5>
                      <ul>
                        <li><strong>Ubicación:</strong> Parte inferior de la interfaz</li>
                        <li><strong>Propósito:</strong> Agregar notas del presentador privadas</li>
                        <li><strong>Visibilidad:</strong> Solo visible para el presentador, no para la audiencia</li>
                        <li><strong>Utilidad:</strong> Recordatorios, datos adicionales, transiciones</li>
                      </ul>
                    </div>

                    <div class="componente-ui">
                      <h5>⚡ Barra de Acceso Rápido</h5>
                      <ul>
                        <li><strong>Comandos frecuentes:</strong> Guardar, Deshacer, Rehacer por defecto</li>
                        <li><strong>Personalizable:</strong> Agregar comandos más utilizados</li>
                        <li><strong>Ubicación:</strong> Esquina superior izquierda</li>
                        <li><strong>Eficiencia:</strong> Acceso con un solo clic a funciones importantes</li>
                      </ul>
                    </div>

                    <div class="componente-ui">
                      <h5>📏 Barra de Estado</h5>
                      <ul>
                        <li><strong>Información:</strong> Número de diapositiva actual, total de diapositivas</li>
                        <li><strong>Idioma:</strong> Configuración de corrección ortográfica</li>
                        <li><strong>Zoom:</strong> Control deslizante para cambiar nivel de zoom</li>
                        <li><strong>Vistas:</strong> Botones rápidos para cambiar entre vistas</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="pestanas-principales">
                  <h4>📋 Pestañas Principales y sus Funciones</h4>
                  
                  <div class="pestana-detalle">
                    <h5>🏠 Pestaña INICIO</h5>
                    <ul>
                      <li><strong>Portapapeles:</strong> Cortar, Copiar, Pegar, Pegado especial</li>
                      <li><strong>Diapositivas:</strong> Nueva diapositiva, Diseño, Restablecer</li>
                      <li><strong>Fuente:</strong> Tipo, tamaño, color, formato de texto</li>
                      <li><strong>Párrafo:</strong> Alineación, viñetas, numeración, espaciado</li>
                      <li><strong>Dibujo:</strong> Formas, organizar objetos, estilos rápidos</li>
                      <li><strong>Edición:</strong> Buscar, Reemplazar, Seleccionar</li>
                    </ul>
                  </div>

                  <div class="pestana-detalle">
                    <h5>➕ Pestaña INSERTAR</h5>
                    <ul>
                      <li><strong>Diapositivas:</strong> Nueva diapositiva, reutilizar diapositivas</li>
                      <li><strong>Tablas:</strong> Insertar y formatear tablas</li>
                      <li><strong>Imágenes:</strong> Desde archivo, online, capturas de pantalla</li>
                      <li><strong>Ilustraciones:</strong> Formas, SmartArt, gráficos, iconos</li>
                      <li><strong>Complementos:</strong> Apps de Office Store</li>
                      <li><strong>Multimedia:</strong> Audio, video, grabación de pantalla</li>
                      <li><strong>Vínculos:</strong> Hipervínculos, acciones</li>
                      <li><strong>Texto:</strong> Cuadro de texto, WordArt, fecha y hora</li>
                    </ul>
                  </div>

                  <div class="pestana-detalle">
                    <h5>🎨 Pestaña DISEÑO</h5>
                    <ul>
                      <li><strong>Temas:</strong> Plantillas prediseñadas completas</li>
                      <li><strong>Variantes:</strong> Modificaciones de color de temas</li>
                      <li><strong>Personalizar:</strong> Tamaño de diapositiva, formato de fondo</li>
                      <li><strong>Ideas de diseño:</strong> Sugerencias automáticas de IA</li>
                    </ul>
                  </div>

                  <div class="pestana-detalle">
                    <h5>🔄 Pestaña TRANSICIONES</h5>
                    <ul>
                      <li><strong>Transiciones:</strong> Efectos entre diapositivas</li>
                      <li><strong>Opciones de efectos:</strong> Personalización de transiciones</li>
                      <li><strong>Duración:</strong> Velocidad de las transiciones</li>
                      <li><strong>Sonido:</strong> Efectos de audio en transiciones</li>
                      <li><strong>Avance:</strong> Manual o automático con tiempo</li>
                    </ul>
                  </div>

                  <div class="pestana-detalle">
                    <h5>✨ Pestaña ANIMACIONES</h5>
                    <ul>
                      <li><strong>Animaciones:</strong> Efectos para objetos individuales</li>
                      <li><strong>Opciones de efectos:</strong> Personalización de animaciones</li>
                      <li><strong>Intervalos:</strong> Inicio, duración, retraso</li>
                      <li><strong>Panel de animación:</strong> Vista detallada y orden</li>
                    </ul>
                  </div>

                  <div class="pestana-detalle">
                    <h5>▶️ Pestaña PRESENTACIÓN</h5>
                    <ul>
                      <li><strong>Iniciar presentación:</strong> Desde inicio, actual, personalizada</li>
                      <li><strong>Configuración:</strong> Configuración de presentación</li>
                      <li><strong>Monitores:</strong> Configuración de múltiples pantallas</li>
                      <li><strong>Ensayar intervalos:</strong> Practicar tiempos</li>
                    </ul>
                  </div>
                </div>

                <div class="vistas-powerpoint">
                  <h4>👁️ Vistas de Trabajo en PowerPoint</h4>
                  
                  <div class="vista-detalle">
                    <h5>🎯 Vista Normal</h5>
                    <ul>
                      <li><strong>Uso principal:</strong> Edición diaria de contenido</li>
                      <li><strong>Componentes:</strong> Panel diapositivas + Área trabajo + Panel notas</li>
                      <li><strong>Ideal para:</strong> Crear y editar diapositivas individuales</li>
                      <li><strong>Acceso:</strong> Vista > Normal o botón en barra de estado</li>
                    </ul>
                  </div>

                  <div class="vista-detalle">
                    <h5>📋 Vista Esquema</h5>
                    <ul>
                      <li><strong>Enfoque:</strong> Estructura y jerarquía del contenido de texto</li>
                      <li><strong>Ventajas:</strong> Edición rápida de títulos y textos</li>
                      <li><strong>Ideal para:</strong> Planificación inicial y revisión de estructura</li>
                      <li><strong>Limitaciones:</strong> No muestra objetos gráficos</li>
                    </ul>
                  </div>

                  <div class="vista-detalle">
                    <h5>🗂️ Vista Clasificador de Diapositivas</h5>
                    <ul>
                      <li><strong>Visualización:</strong> Todas las diapositivas como miniaturas</li>
                      <li><strong>Funciones:</strong> Reordenar, duplicar, eliminar diapositivas</li>
                      <li><strong>Ideal para:</strong> Organización general y flujo de presentación</li>
                      <li><strong>Transiciones:</strong> Vista previa de efectos entre diapositivas</li>
                    </ul>
                  </div>

                  <div class="vista-detalle">
                    <h5>📑 Vista Página de Notas</h5>
                    <ul>
                      <li><strong>Contenido:</strong> Diapositiva + área ampliada para notas</li>
                      <li><strong>Propósito:</strong> Preparación detallada de notas del presentador</li>
                      <li><strong>Impresión:</strong> Formato ideal para documentos de apoyo</li>
                      <li><strong>Útil para:</strong> Presentaciones largas y complejas</li>
                    </ul>
                  </div>

                  <div class="vista-detalle">
                    <h5>🎪 Vista Presentación</h5>
                    <ul>
                      <li><strong>Modo completo:</strong> Pantalla completa para audiencia</li>
                      <li><strong>Navegación:</strong> Clic, teclas de flecha, control remoto</li>
                      <li><strong>Herramientas:</strong> Puntero láser, anotaciones, zoom</li>
                      <li><strong>Vista del presentador:</strong> Notas + próxima diapositiva + timer</li>
                    </ul>
                  </div>
                </div>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/interfaz-powerpoint.jpg",
              video: "/videos/teoria/navegacion-powerpoint.mp4",
              infografia: "/images/teoria/anatomia-powerpoint.png"
            },
            actividades: [
              {
                tipo: "exploracion",
                pregunta: "Abre PowerPoint y explora cada pestaña de la cinta. ¿Qué funciones encuentras más interesantes?",
                ayuda: "Haz clic en cada pestaña y observa las herramientas disponibles sin necesidad de usarlas"
              },
              {
                tipo: "practica",
                pregunta: "Cambia entre las diferentes vistas (Normal, Esquema, Clasificador). ¿Cuándo usarías cada una?",
                ayuda: "Usa los botones en la barra de estado o el menú Vista para cambiar entre vistas"
              }
            ]
          },
          {
            id: 4,
            titulo: "Crear, Abrir y Guardar Presentaciones",
            contenido: `
              <div class="seccion-contenido">
                <h3>📁 Gestión Básica de Archivos en PowerPoint</h3>
                
                <div class="crear-presentacion">
                  <h4>✨ Crear Nueva Presentación</h4>
                  
                  <div class="metodos-creacion">
                    <div class="metodo">
                      <h5>🆕 Presentación en Blanco</h5>
                      <ol>
                        <li>Abrir PowerPoint</li>
                        <li>Seleccionar "Presentación en blanco"</li>
                        <li>Comenzar con una diapositiva de título limpia</li>
                        <li><strong>Cuándo usar:</strong> Control total del diseño desde cero</li>
                      </ol>
                    </div>

                    <div class="metodo">
                      <h5>🎨 Desde Plantilla</h5>
                      <ol>
                        <li>PowerPoint > Nuevo > Buscar plantillas</li>
                        <li>Explorar categorías: Negocios, Educación, Diseño</li>
                        <li>Previsualizar plantilla antes de seleccionar</li>
                        <li>Hacer clic en "Crear" para iniciar con plantilla</li>
                        <li><strong>Ventaja:</strong> Diseño profesional predefinido</li>
                      </ol>
                    </div>

                    <div class="metodo">
                      <h5>🔍 Desde Búsqueda Online</h5>
                      <ul>
                        <li>Buscar por palabras clave (ej: "educación", "ventas")</li>
                        <li>Filtrar por categoría, color, estilo</li>
                        <li>Plantillas gratuitas vs premium (Office 365)</li>
                        <li>Actualizaciones automáticas con nuevos diseños</li>
                      </ul>
                    </div>

                    <div class="metodo">
                      <h5>📋 Desde Presentación Existente</h5>
                      <ul>
                        <li>Archivo > Nuevo > "Desde presentación existente"</li>
                        <li>Mantiene formato y estructura base</li>
                        <li>Útil para series de presentaciones similares</li>
                        <li>Editar contenido manteniendo diseño consistente</li>
                      </ul>
                    </div>
                  </div>

                  <div class="consejos-creacion">
                    <h5>💡 Consejos para Elegir Punto de Partida</h5>
                    <ul>
                      <li><strong>Presentación en blanco:</strong> Si tienes diseño específico en mente</li>
                      <li><strong>Plantilla corporativa:</strong> Para contextos de negocio</li>
                      <li><strong>Plantilla educativa:</strong> Para clases y tutoriales</li>
                      <li><strong>Plantilla creativa:</strong> Para portfolios y presentaciones artísticas</li>
                      <li><strong>Plantilla minimalista:</strong> Para contenido técnico o científico</li>
                    </ul>
                  </div>
                </div>

                <div class="abrir-presentacion">
                  <h4>📂 Abrir Presentaciones Existentes</h4>
                  
                  <div class="formas-abrir">
                    <div class="forma-abrir">
                      <h5>💻 Desde el Menú Archivo</h5>
                      <ol>
                        <li>PowerPoint > Archivo > Abrir</li>
                        <li>Elegir ubicación: Este equipo, OneDrive, SharePoint</li>
                        <li>Navegar hasta el archivo deseado</li>
                        <li>Doble clic o Seleccionar + Abrir</li>
                      </ol>
                    </div>

                    <div class="forma-abrir">
                      <h5>🔄 Archivos Recientes</h5>
                      <ul>
                        <li>PowerPoint muestra últimas presentaciones abiertas</li>
                        <li>Acceso rápido desde pantalla inicio</li>
                        <li>Opción "Anclar" para mantener archivo siempre visible</li>
                        <li>Sincronización automática si archivo está en OneDrive</li>
                      </ul>
                    </div>

                    <div class="forma-abrir">
                      <h5>📁 Desde Explorador de Archivos</h5>
                      <ul>
                        <li>Navegar a la carpeta del archivo</li>
                        <li>Doble clic en archivo .pptx, .ppt, .potx</li>
                        <li>Clic derecho > "Abrir con PowerPoint"</li>
                        <li>Arrastrar archivo a icono de PowerPoint</li>
                      </ul>
                    </div>

                    <div class="forma-abrir">
                      <h5>☁️ Desde la Nube</h5>
                      <ul>
                        <li><strong>OneDrive:</strong> Sincronización automática</li>
                        <li><strong>SharePoint:</strong> Colaboración empresarial</li>
                        <li><strong>Teams:</strong> Archivos compartidos de equipo</li>
                        <li><strong>Ventaja:</strong> Acceso desde cualquier dispositivo</li>
                      </ul>
                    </div>
                  </div>

                  <div class="formatos-compatibles">
                    <h5>📄 Formatos de Archivo Compatibles</h5>
                    <ul>
                      <li><strong>.pptx:</strong> Formato moderno de PowerPoint (recomendado)</li>
                      <li><strong>.ppt:</strong> Formato clásico de PowerPoint (versiones antiguas)</li>
                      <li><strong>.potx:</strong> Plantillas de PowerPoint modernas</li>
                      <li><strong>.pot:</strong> Plantillas de PowerPoint clásicas</li>
                      <li><strong>.ppsx:</strong> Presentaciones de solo lectura</li>
                      <li><strong>.pdf:</strong> Importación limitada (solo imagen)</li>
                      <li><strong>.odp:</strong> OpenDocument (OpenOffice/LibreOffice)</li>
                    </ul>
                  </div>
                </div>

                <div class="guardar-presentacion">
                  <h4>💾 Guardar Presentaciones</h4>
                  
                  <div class="tipos-guardado">
                    <div class="tipo-guardado">
                      <h5>💾 Guardar (Ctrl+S)</h5>
                      <ul>
                        <li><strong>Primera vez:</strong> Abre cuadro "Guardar como"</li>
                        <li><strong>Guardados posteriores:</strong> Actualiza archivo existente</li>
                        <li><strong>Frecuencia recomendada:</strong> Cada 5-10 minutos</li>
                        <li><strong>Auto-guardado:</strong> Disponible con OneDrive/SharePoint</li>
                      </ul>
                    </div>

                    <div class="tipo-guardado">
                      <h5>📋 Guardar Como (F12)</h5>
                      <ul>
                        <li>Crear nuevo archivo manteniendo original</li>
                        <li>Cambiar nombre, ubicación o formato</li>
                        <li>Útil para versiones o copias de seguridad</li>
                        <li>Permite guardar en diferentes formatos</li>
                      </ul>
                    </div>

                    <div class="tipo-guardado">
                      <h5>📤 Exportar</h5>
                      <ul>
                        <li><strong>PDF:</strong> Para distribución sin edición</li>
                        <li><strong>Video:</strong> Presentación con tiempos y transiciones</li>
                        <li><strong>Imágenes:</strong> Cada diapositiva como imagen</li>
                        <li><strong>Paquete para CD:</strong> Incluye archivos vinculados</li>
                      </ul>
                    </div>
                  </div>

                  <div class="ubicaciones-guardado">
                    <h5>📍 Ubicaciones de Guardado</h5>
                    
                    <div class="ubicacion">
                      <h6>💻 Este Equipo</h6>
                      <ul>
                        <li><strong>Documentos:</strong> Ubicación por defecto</li>
                        <li><strong>Escritorio:</strong> Acceso rápido</li>
                        <li><strong>Carpetas personalizadas:</strong> Organización específica</li>
                        <li><strong>Consideración:</strong> Solo accesible desde este dispositivo</li>
                      </ul>
                    </div>

                    <div class="ubicacion">
                      <h6>☁️ OneDrive</h6>
                      <ul>
                        <li><strong>Sincronización:</strong> Automática entre dispositivos</li>
                        <li><strong>Colaboración:</strong> Compartir con otros usuarios</li>
                        <li><strong>Versiones:</strong> Historial de cambios automático</li>
                        <li><strong>Acceso:</strong> Desde cualquier lugar con internet</li>
                      </ul>
                    </div>

                    <div class="ubicacion">
                      <h6>🏢 SharePoint/Teams</h6>
                      <ul>
                        <li><strong>Uso:</strong> Colaboración empresarial o educativa</li>
                        <li><strong>Permisos:</strong> Control granular de acceso</li>
                        <li><strong>Workflows:</strong> Procesos de aprobación</li>
                        <li><strong>Integración:</strong> Con otros servicios Microsoft</li>
                      </ul>
                    </div>
                  </div>

                  <div class="buenas-practicas-guardado">
                    <h5>✅ Buenas Prácticas de Guardado</h5>
                    <ul>
                      <li><strong>Nombres descriptivos:</strong> "Presentacion_Ventas_Q3_2024" vs "Presentacion1"</li>
                      <li><strong>Convención de fechas:</strong> YYYY-MM-DD para orden cronológico</li>
                      <li><strong>Versiones:</strong> v1, v2, v3 o _final, _borrador</li>
                      <li><strong>Backup regular:</strong> Copias en múltiples ubicaciones</li>
                      <li><strong>Carpetas organizadas:</strong> Por proyecto, tema o fecha</li>
                      <li><strong>Archivos vinculados:</strong> Mantener imágenes/videos en misma carpeta</li>
                    </ul>
                  </div>
                </div>

                <div class="configuracion-archivo">
                  <h4>⚙️ Propiedades y Configuración de Archivo</h4>
                  
                  <div class="propiedades-basicas">
                    <h5>📊 Información del Archivo</h5>
                    <ul>
                      <li><strong>Acceso:</strong> Archivo > Información</li>
                      <li><strong>Propiedades:</strong> Título, Autor, Asunto, Palabras clave</li>
                      <li><strong>Estadísticas:</strong> Número de diapositivas, palabras, tiempo total</li>
                      <li><strong>Metadatos:</strong> Fechas de creación y modificación</li>
                    </ul>
                  </div>

                  <div class="configuracion-avanzada">
                    <h5>🔧 Opciones de Configuración</h5>
                    <ul>
                      <li><strong>Tamaño de diapositiva:</strong> Estándar (4:3) vs Panorámico (16:9)</li>
                      <li><strong>Orientación:</strong> Horizontal vs Vertical</li>
                      <li><strong>Configuración de idioma:</strong> Corrección ortográfica</li>
                      <li><strong>Configuración de guardado:</strong> Auto-recuperación</li>
                    </ul>
                  </div>
                </div>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/gestion-archivos-powerpoint.jpg",
              video: "/videos/teoria/crear-abrir-guardar.mp4",
              infografia: "/images/teoria/flujo-trabajo-archivos.png"
            },
            actividades: [
              {
                tipo: "practica",
                pregunta: "Crea una nueva presentación desde 3 formas diferentes: en blanco, plantilla, y desde presentación existente",
                ayuda: "Explora las opciones de Nuevo en PowerPoint y prueba cada método"
              },
              {
                tipo: "organizacion",
                pregunta: "Establece una convención de nombres para tus presentaciones y crea una estructura de carpetas organizadas",
                ayuda: "Piensa en cómo organizarías presentaciones por materia, proyecto o fecha"
              },
              {
                tipo: "configuracion",
                pregunta: "Configura el auto-guardado y explora las propiedades de archivo de una presentación",
                ayuda: "Ve a Archivo > Opciones > Guardar para auto-guardado, y Archivo > Información para propiedades"
              }
            ]
          }
        ],
        recursos: {
          documentos: [
            {
              titulo: "Guía Completa de Interfaz PowerPoint",
              tipo: "PDF",
              url: "/recursos/powerpoint/guia-interfaz-powerpoint.pdf"
            },
            {
              titulo: "Manual de Gestión de Archivos",
              tipo: "PDF",
              url: "/recursos/powerpoint/gestion-archivos-powerpoint.pdf"
            },
            {
              titulo: "Plantillas Educativas Básicas",
              tipo: "ZIP",
              url: "/recursos/powerpoint/plantillas-educativas.zip"
            }
          ],
          videos: [
            {
              titulo: "Primeros Pasos en PowerPoint - Guía Completa",
              duracion: "20 min",
              url: "/videos/powerpoint-primeros-pasos.mp4"
            },
            {
              titulo: "Navegación de Interfaz PowerPoint",
              duracion: "12 min",
              url: "/videos/navegacion-powerpoint.mp4"
            },
            {
              titulo: "Crear y Gestionar Presentaciones",
              duracion: "15 min",
              url: "/videos/gestion-presentaciones.mp4"
            }
          ],
          enlaces: [
            {
              titulo: "Plantillas Oficiales de Microsoft",
              url: "https://templates.office.com/es-es/presentations"
            },
            {
              titulo: "Guía de Atajos de Teclado PowerPoint",
              url: "https://support.microsoft.com/es-es/office/usar-métodos-abreviados-de-teclado-para-crear-presentaciones-de-powerpoint"
            },
            {
              titulo: "Centro de Ayuda de PowerPoint",
              url: "https://support.microsoft.com/es-es/powerpoint"
            }
          ]
        },
        evaluacion: {
          preRequisitos: ["Conocimientos básicos de computación", "Familiaridad con Windows"],
          criterios: [
            "Explicar qué es Microsoft PowerPoint y sus usos principales",
            "Conocer la evolución histórica de las herramientas de presentación",
            "Navegar efectivamente por la interfaz de PowerPoint",
            "Dominar operaciones básicas de gestión de archivos",
            "Identificar y usar las diferentes vistas de trabajo",
            "Configurar propiedades básicas de presentaciones"
          ],
          tiempoEstimado: "25 minutos"
        }
      },
      '2': {
        titulo: "Vistas y diapositivas",
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
              <div class="seccion-contenido">
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
                      <li><strong>Visualización:</strong> Miniaturas de todas las diapositivas</li>
                      <li><strong>Funciones:</strong> Reordenar, duplicar, eliminar diapositivas</li>
                      <li><strong>Transiciones:</strong> Vista previa de efectos</li>
                      <li><strong>Acceso:</strong> Vista > Clasificador o Ctrl+2</li>
                      <li><strong>Ideal para:</strong> Organización general y flujo</li>
                    </ul>
                  </div>

                  <div class="vista-lectura">
                    <h5>📖 Vista de Lectura</h5>
                    <ul>
                      <li><strong>Propósito:</strong> Revisión sin modo presentación completo</li>
                      <li><strong>Características:</strong> Pantalla casi completa con navegación</li>
                      <li><strong>Controles:</strong> Botones de navegación visibles</li>
                      <li><strong>Ideal para:</strong> Revisión personal y correcciones</li>
                    </ul>
                  </div>

                  <div class="vista-patron">
                    <h5>🎨 Vista Patrón de Diapositivas</h5>
                    <ul>
                      <li><strong>Función:</strong> Diseño base para toda la presentación</li>
                      <li><strong>Elementos:</strong> Logos, fondos, fuentes, posiciones</li>
                      <li><strong>Eficiencia:</strong> Cambios aplicados globalmente</li>
                      <li><strong>Acceso:</strong> Vista > Patrón de diapositivas</li>
                      <li><strong>Ideal para:</strong> Consistencia visual y branding</li>
                    </ul>
                  </div>
                </div>

                <div class="navegacion-vistas">
                  <h4>🔄 Navegación Eficiente entre Vistas</h4>
                  <ul>
                    <li><strong>Barra de estado:</strong> Iconos en esquina inferior derecha</li>
                    <li><strong>Atajos de teclado:</strong> Ctrl+1 (Normal), Ctrl+2 (Clasificador)</li>
                    <li><strong>Cinta Vista:</strong> Acceso completo a todas las opciones</li>
                    <li><strong>Clic derecho:</strong> Menú contextual con opciones de vista</li>
                  </ul>
                </div>

                <div class="consejos-vistas">
                  <h4>💡 Consejos de Uso Eficiente</h4>
                  <ul>
                    <li><strong>Planificación:</strong> Usar Vista Esquema para estructura inicial</li>
                    <li><strong>Creación:</strong> Vista Normal para desarrollo de contenido</li>
                    <li><strong>Organización:</strong> Vista Clasificador para flujo final</li>
                    <li><strong>Revisión:</strong> Vista Lectura para verificación sin distracciones</li>
                    <li><strong>Consistencia:</strong> Vista Patrón para elementos repetitivos</li>
                  </ul>
                </div>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/vistas-powerpoint.jpg",
              video: "/videos/teoria/navegacion-vistas.mp4"
            },
            actividades: [
              'Cambiar entre las 5 vistas principales usando atajos de teclado',
              'Identificar en qué vista es más eficiente realizar cada tarea específica',
              'Crear una diapositiva en Vista Normal y ver cómo se refleja en otras vistas'
            ]
          },
          {
            id: 2,
            titulo: "Gestión de Diapositivas",
            contenido: `
              <div class="seccion-contenido">
                <h3>📊 Operaciones con Diapositivas</h3>
                
                <div class="operaciones-basicas">
                  <h4>➕ Crear Nuevas Diapositivas</h4>
                  
                  <div class="metodos-creacion">
                    <h5>🆕 Métodos de Creación</h5>
                    <ul>
                      <li><strong>Nueva diapositiva:</strong> Inicio > Nueva diapositiva (Ctrl+M)</li>
                      <li><strong>Duplicar existente:</strong> Clic derecho > Duplicar diapositiva</li>
                      <li><strong>Copiar de otra presentación:</strong> Reutilizar diapositivas</li>
                      <li><strong>Desde diseño específico:</strong> Flecha junto a Nueva diapositiva</li>
                    </ul>
                  </div>

                  <div class="posicionamiento">
                    <h5>📍 Posicionamiento de Nuevas Diapositivas</h5>
                    <ul>
                      <li><strong>Después de actual:</strong> Comportamiento por defecto</li>
                      <li><strong>Posición específica:</strong> Seleccionar diapositiva + Nueva</li>
                      <li><strong>Al final:</strong> Ir a última diapositiva + Nueva</li>
                      <li><strong>Al inicio:</strong> Posición 1 + Insertar nueva</li>
                    </ul>
                  </div>
                </div>

                <div class="organizacion-diapositivas">
                  <h4>🔄 Reordenar y Organizar</h4>
                  
                  <div class="metodos-reordenamiento">
                    <h5>↕️ Técnicas de Reordenamiento</h5>
                    <ul>
                      <li><strong>Arrastrar y soltar:</strong> En Vista Clasificador o panel izquierdo</li>
                      <li><strong>Cortar y pegar:</strong> Ctrl+X, navegar, Ctrl+V</li>
                      <li><strong>Selección múltiple:</strong> Ctrl+clic para seleccionar varias</li>
                      <li><strong>Rango de selección:</strong> Shift+clic para rango continuo</li>
                    </ul>
                  </div>

                  <div class="organizacion-logica">
                    <h5>🎯 Organización Lógica</h5>
                    <ul>
                      <li><strong>Estructura narrativa:</strong> Introducción → Desarrollo → Conclusión</li>
                      <li><strong>Agrupación temática:</strong> Diapositivas relacionadas juntas</li>
                      <li><strong>Ritmo visual:</strong> Alternar contenido denso con visual</li>
                      <li><strong>Transiciones lógicas:</strong> Flujo natural entre ideas</li>
                    </ul>
                  </div>
                </div>

                <div class="duplicacion-eliminacion">
                  <h4>📋 Duplicar y Eliminar Diapositivas</h4>
                  
                  <div class="duplicacion">
                    <h5>📄 Técnicas de Duplicación</h5>
                    <ul>
                      <li><strong>Clic derecho:</strong> Duplicar diapositiva (más común)</li>
                      <li><strong>Copiar/Pegar:</strong> Ctrl+C, Ctrl+V en posición deseada</li>
                      <li><strong>Arrastrar con Ctrl:</strong> Mantener Ctrl mientras arrastras</li>
                      <li><strong>Ventaja:</strong> Mantiene formato y elementos</li>
                    </ul>
                  </div>

                  <div class="eliminacion">
                    <h5>🗑️ Eliminación Segura</h5>
                    <ul>
                      <li><strong>Tecla Delete:</strong> Seleccionar diapositiva + Delete</li>
                      <li><strong>Clic derecho:</strong> Eliminar diapositiva</li>
                      <li><strong>Múltiples:</strong> Seleccionar varias + Delete</li>
                      <li><strong>Recuperación:</strong> Ctrl+Z inmediatamente después</li>
                    </ul>
                  </div>

                  <div class="buenas-practicas">
                    <h5>✅ Buenas Prácticas</h5>
                    <ul>
                      <li><strong>Backup antes de eliminar:</strong> Guardar copia de seguridad</li>
                      <li><strong>Revisar referencias:</strong> Verificar vínculos internos</li>
                      <li><strong>Considerar ocultación:</strong> Ocultar en lugar de eliminar</li>
                      <li><strong>Documentar cambios:</strong> Usar comentarios para colaboración</li>
                    </ul>
                  </div>
                </div>

                <div class="navegacion-diapositivas">
                  <h4>🧭 Navegación Eficiente</h4>
                  
                  <div class="metodos-navegacion">
                    <h5>⚡ Métodos de Navegación</h5>
                    <ul>
                      <li><strong>Panel izquierdo:</strong> Clic en miniatura</li>
                      <li><strong>Teclas de flecha:</strong> Arriba/Abajo en panel</li>
                      <li><strong>Page Up/Down:</strong> Navegación rápida</li>
                      <li><strong>Ctrl+Inicio/Fin:</strong> Primera/Última diapositiva</li>
                      <li><strong>Ir a diapositiva:</strong> Ctrl+G para número específico</li>
                    </ul>
                  </div>

                  <div class="indicadores-visuales">
                    <h5>👁️ Indicadores Visuales</h5>
                    <ul>
                      <li><strong>Numeración:</strong> Número de diapositiva visible</li>
                      <li><strong>Resaltado:</strong> Diapositiva actual destacada</li>
                      <li><strong>Barra de estado:</strong> Posición actual de total</li>
                      <li><strong>Miniaturas:</strong> Vista previa del contenido</li>
                    </ul>
                  </div>
                </div>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/gestion-diapositivas.jpg",
              video: "/videos/teoria/operaciones-diapositivas.mp4"
            },
            actividades: [
              'Crear 5 diapositivas nuevas usando diferentes métodos',
              'Reordenar diapositivas usando arrastrar y soltar',
              'Duplicar una diapositiva y modificar el contenido',
              'Practicar navegación usando solo atajos de teclado'
            ]
          },
          {
            id: 3,
            titulo: "Diseños Predefinidos",
            contenido: `
              <div class="seccion-contenido">
                <h3>🎨 Trabajando con Diseños de Diapositiva</h3>
                
                <div class="tipos-disenos">
                  <h4>📐 Tipos de Diseños Predefinidos</h4>
                  
                  <div class="disenos-comunes">
                    <h5>🎯 Diseños Más Utilizados</h5>
                    
                    <div class="diseno-tipo">
                      <h6>📝 Título y Contenido</h6>
                      <ul>
                        <li><strong>Uso:</strong> 80% de las diapositivas</li>
                        <li><strong>Estructura:</strong> Título arriba + área de contenido</li>
                        <li><strong>Ideal para:</strong> Puntos principales, listas, información general</li>
                      </ul>
                    </div>

                    <div class="diseno-tipo">
                      <h6>🎪 Solo Título</h6>
                      <ul>
                        <li><strong>Uso:</strong> Diapositivas de sección</li>
                        <li><strong>Estructura:</strong> Solo título centrado</li>
                        <li><strong>Ideal para:</strong> Separadores, portadas de capítulos</li>
                      </ul>
                    </div>

                    <div class="diseno-tipo">
                      <h6>📊 Dos Contenidos</h6>
                      <ul>
                        <li><strong>Uso:</strong> Comparaciones y contrastes</li>
                        <li><strong>Estructura:</strong> Título + dos columnas</li>
                        <li><strong>Ideal para:</strong> Antes/después, pros/contras</li>
                      </ul>
                    </div>

                    <div class="diseno-tipo">
                      <h6>🖼️ Contenido con Título</h6>
                      <ul>
                        <li><strong>Uso:</strong> Imágenes principales</li>
                        <li><strong>Estructura:</strong> Área grande para imagen + título</li>
                        <li><strong>Ideal para:</strong> Fotos, gráficos, diagramas</li>
                      </ul>
                    </div>

                    <div class="diseno-tipo">
                      <h6>📄 En Blanco</h6>
                      <ul>
                        <li><strong>Uso:</strong> Diseño completamente personalizado</li>
                        <li><strong>Estructura:</strong> Sin elementos predefinidos</li>
                        <li><strong>Ideal para:</strong> Creatividad total, diseños únicos</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="aplicar-disenos">
                  <h4>🔧 Aplicar y Cambiar Diseños</h4>
                  
                  <div class="metodos-aplicacion">
                    <h5>⚡ Métodos de Aplicación</h5>
                    <ul>
                      <li><strong>Al crear:</strong> Flecha Nueva diapositiva > Elegir diseño</li>
                      <li><strong>Cambiar existente:</strong> Inicio > Diseño > Seleccionar nuevo</li>
                      <li><strong>Múltiples diapositivas:</strong> Seleccionar varias + Aplicar diseño</li>
                      <li><strong>Vista Clasificador:</strong> Clic derecho > Diseño</li>
                    </ul>
                  </div>

                  <div class="consideraciones">
                    <h5>⚠️ Consideraciones Importantes</h5>
                    <ul>
                      <li><strong>Contenido existente:</strong> Se reorganiza automáticamente</li>
                      <li><strong>Elementos personalizados:</strong> Pueden descolocarse</li>
                      <li><strong>Compatibilidad:</strong> No todos los diseños funcionan igual</li>
                      <li><strong>Reversión:</strong> Ctrl+Z para deshacer cambios</li>
                    </ul>
                  </div>
                </div>

                <div class="marcadores-posicion">
                  <h4>📍 Marcadores de Posición</h4>
                  
                  <div class="que-son">
                    <h5>🎯 ¿Qué son los Marcadores?</h5>
                    <p>Áreas predefinidas donde se puede insertar contenido específico (texto, imágenes, gráficos) con formato automático.</p>
                  </div>

                  <div class="tipos-marcadores">
                    <h5>📝 Tipos de Marcadores</h5>
                    <ul>
                      <li><strong>Texto:</strong> Para títulos, subtítulos, listas</li>
                      <li><strong>Contenido:</strong> Acepta cualquier tipo de elemento</li>
                      <li><strong>Imagen:</strong> Específico para fotos e ilustraciones</li>
                      <li><strong>Gráfico:</strong> Para tablas y elementos SmartArt</li>
                      <li><strong>Video:</strong> Para contenido multimedia</li>
                    </ul>
                  </div>

                  <div class="trabajar-marcadores">
                    <h5>🔧 Trabajar con Marcadores</h5>
                    <ul>
                      <li><strong>Activar:</strong> Clic dentro del marcador</li>
                      <li><strong>Redimensionar:</strong> Arrastrar bordes y esquinas</li>
                      <li><strong>Mover:</strong> Arrastrar desde el borde</li>
                      <li><strong>Eliminar:</strong> Seleccionar borde + Delete</li>
                      <li><strong>Formatear:</strong> Usar herramientas contextuales</li>
                    </ul>
                  </div>
                </div>

                <div class="personalizacion-disenos">
                  <h4>🎨 Personalización de Diseños</h4>
                  
                  <div class="modificaciones-basicas">
                    <h5>⚙️ Modificaciones Básicas</h5>
                    <ul>
                      <li><strong>Mover marcadores:</strong> Arrastrar a nueva posición</li>
                      <li><strong>Redimensionar:</strong> Ajustar tamaño según necesidad</li>
                      <li><strong>Duplicar elementos:</strong> Ctrl+D para copiar</li>
                      <li><strong>Agregar elementos:</strong> Insertar > Cuadro de texto</li>
                    </ul>
                  </div>

                  <div class="guardar-personalizacion">
                    <h5>💾 Guardar Personalizaciones</h5>
                    <ul>
                      <li><strong>Para presentación actual:</strong> Cambios se mantienen</li>
                      <li><strong>Para futuras presentaciones:</strong> Crear plantilla personalizada</li>
                      <li><strong>Patrón de diapositivas:</strong> Modificar diseño base</li>
                      <li><strong>Plantilla:</strong> Guardar como .potx</li>
                    </ul>
                  </div>
                </div>

                <div class="mejores-practicas">
                  <h4>✅ Mejores Prácticas con Diseños</h4>
                  
                  <div class="consistencia">
                    <h5>🎯 Consistencia Visual</h5>
                    <ul>
                      <li><strong>Diseño uniforme:</strong> Usar same diseño para contenido similar</li>
                      <li><strong>Jerarquía clara:</strong> Títulos, subtítulos, contenido</li>
                      <li><strong>Espaciado regular:</strong> Márgenes y separaciones uniformes</li>
                      <li><strong>Elementos repetitivos:</strong> Logos, números de página</li>
                    </ul>
                  </div>

                  <div class="eficiencia">
                    <h5>⚡ Eficiencia en el Trabajo</h5>
                    <ul>
                      <li><strong>Planificar primero:</strong> Elegir diseños antes de contenido</li>
                      <li><strong>Lotes de trabajo:</strong> Aplicar same diseño a múltiples diapositivas</li>
                      <li><strong>Usar atajos:</strong> Ctrl+M para nueva con same diseño</li>
                      <li><strong>Duplicar base:</strong> Crear template y duplicar</li>
                    </ul>
                  </div>
                </div>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/disenos-powerpoint.jpg",
              video: "/videos/teoria/marcadores-posicion.mp4"
            },
            actividades: [
              'Crear diapositivas con cada uno de los 5 diseños principales',
              'Modificar los marcadores de posición en una diapositiva',
              'Aplicar el mismo diseño a múltiples diapositivas a la vez',
              'Personalizar un diseño y guardarlo para uso futuro'
            ]
          },
          {
            id: 4,
            titulo: "Navegación y Organización Avanzada",
            contenido: `
              <div class="seccion-contenido">
                <h3>🧭 Técnicas Avanzadas de Organización</h3>
                
                <div class="secciones-presentacion">
                  <h4>📚 Organización en Secciones</h4>
                  
                  <div class="crear-secciones">
                    <h5>➕ Crear Secciones</h5>
                    <ul>
                      <li><strong>Método:</strong> Vista Clasificador > Clic derecho > Agregar sección</li>
                      <li><strong>Nombrar:</strong> Dar nombres descriptivos a cada sección</li>
                      <li><strong>Reorganizar:</strong> Arrastrar secciones completas</li>
                      <li><strong>Colapsar:</strong> Ocultar/mostrar contenido de secciones</li>
                    </ul>
                  </div>

                  <div class="beneficios-secciones">
                    <h5>✅ Beneficios de las Secciones</h5>
                    <ul>
                      <li><strong>Organización lógica:</strong> Agrupar contenido relacionado</li>
                      <li><strong>Navegación rápida:</strong> Saltar entre temas principales</li>
                      <li><strong>Colaboración:</strong> Asignar secciones a diferentes personas</li>
                      <li><strong>Presentación modular:</strong> Mostrar solo secciones relevantes</li>
                    </ul>
                  </div>
                </div>

                <div class="zoom-navegacion">
                  <h4>🔍 Herramientas de Zoom y Navegación</h4>
                  
                  <div class="controles-zoom">
                    <h5>📏 Controles de Zoom</h5>
                    <ul>
                      <li><strong>Deslizador:</strong> Barra de estado esquina inferior derecha</li>
                      <li><strong>Atajos:</strong> Ctrl + rueda ratón para zoom rápido</li>
                      <li><strong>Porcentajes fijos:</strong> 50%, 75%, 100%, 150%, 200%</li>
                      <li><strong>Ajustar a ventana:</strong> Vista completa de diapositiva</li>
                    </ul>
                  </div>

                  <div class="navegacion-teclado">
                    <h5>⌨️ Atajos de Navegación</h5>
                    <ul>
                      <li><strong>Ctrl+Inicio:</strong> Primera diapositiva</li>
                      <li><strong>Ctrl+Fin:</strong> Última diapositiva</li>
                      <li><strong>Page Up/Down:</strong> Diapositiva anterior/siguiente</li>
                      <li><strong>Ctrl+G:</strong> Ir a diapositiva específica</li>
                      <li><strong>F5:</strong> Iniciar presentación desde inicio</li>
                      <li><strong>Shift+F5:</strong> Iniciar desde diapositiva actual</li>
                    </ul>
                  </div>
                </div>

                <div class="busqueda-contenido">
                  <h4>🔍 Búsqueda y Localización</h4>
                  
                  <div class="buscar-reemplazar">
                    <h5>🔄 Buscar y Reemplazar</h5>
                    <ul>
                      <li><strong>Buscar:</strong> Ctrl+F para encontrar texto específico</li>
                      <li><strong>Reemplazar:</strong> Ctrl+H para cambios masivos</li>
                      <li><strong>Opciones:</strong> Coincidir mayúsculas, palabras completas</li>
                      <li><strong>Ámbito:</strong> Toda la presentación o diapositiva actual</li>
                    </ul>
                  </div>

                  <div class="navegacion-resultados">
                    <h5>📍 Navegación por Resultados</h5>
                    <ul>
                      <li><strong>Siguiente:</strong> F3 para continuar búsqueda</li>
                      <li><strong>Anterior:</strong> Shift+F3 para resultado previo</li>
                      <li><strong>Lista de resultados:</strong> Ver todas las coincidencias</li>
                      <li><strong>Ir a resultado:</strong> Doble clic para navegar</li>
                    </ul>
                  </div>
                </div>

                <div class="comentarios-revision">
                  <h4>💬 Comentarios y Revisión</h4>
                  
                  <div class="agregar-comentarios">
                    <h5>➕ Agregar Comentarios</h5>
                    <ul>
                      <li><strong>Método:</strong> Revisar > Nuevo comentario</li>
                      <li><strong>Posición:</strong> Comentarios vinculados a ubicación específica</li>
                      <li><strong>Colaboración:</strong> Diferentes autores con colores únicos</li>
                      <li><strong>Respuestas:</strong> Conversaciones en hilos</li>
                    </ul>
                  </div>

                  <div class="gestion-comentarios">
                    <h5>🔧 Gestión de Comentarios</h5>
                    <ul>
                      <li><strong>Mostrar/Ocultar:</strong> Panel de comentarios</li>
                      <li><strong>Resolver:</strong> Marcar comentarios como completados</li>
                      <li><strong>Eliminar:</strong> Comentarios individuales o todos</li>
                      <li><strong>Navegación:</strong> Anterior/Siguiente comentario</li>
                    </ul>
                  </div>
                </div>

                <div class="presentacion-personalizada">
                  <h4>🎯 Presentaciones Personalizadas</h4>
                  
                  <div class="crear-personalizada">
                    <h5>🛠️ Crear Presentación Personalizada</h5>
                    <ul>
                      <li><strong>Acceso:</strong> Presentación > Presentación personalizada</li>
                      <li><strong>Selección:</strong> Elegir diapositivas específicas</li>
                      <li><strong>Orden:</strong> Reorganizar secuencia para audiencia específica</li>
                      <li><strong>Multiple versiones:</strong> Diferentes públicos, diferentes contenidos</li>
                    </ul>
                  </div>

                  <div class="casos-uso">
                    <h5>🎭 Casos de Uso</h5>
                    <ul>
                      <li><strong>Audiencias diferentes:</strong> Técnico vs ejecutivo</li>
                      <li><strong>Tiempo limitado:</strong> Versión corta vs completa</li>
                      <li><strong>Contexto específico:</strong> Interno vs cliente</li>
                      <li><strong>Idiomas:</strong> Same contenido, different idioma</li>
                    </ul>
                  </div>
                </div>

                <div class="optimizacion-flujo">
                  <h4>⚡ Optimización del Flujo de Trabajo</h4>
                  
                  <div class="plantillas-trabajo">
                    <h5>📄 Plantillas de Trabajo</h5>
                    <ul>
                      <li><strong>Crear base:</strong> Diapositivas tipo para reutilizar</li>
                      <li><strong>Biblioteca personal:</strong> Colección de diseños frecuentes</li>
                      <li><strong>Elementos comunes:</strong> Logos, footers, headers</li>
                      <li><strong>Reutilizar diapositivas:</strong> Importar de otras presentaciones</li>
                    </ul>
                  </div>

                  <div class="atajos-productividad">
                    <h5>⚡ Atajos de Productividad</h5>
                    <ul>
                      <li><strong>Ctrl+M:</strong> Nueva diapositiva con mismo diseño</li>
                      <li><strong>Ctrl+D:</strong> Duplicar objeto seleccionado</li>
                      <li><strong>Ctrl+Shift+C/V:</strong> Copiar/pegar formato</li>
                      <li><strong>Alt+F10:</strong> Panel de selección para organizar objetos</li>
                    </ul>
                  </div>
                </div>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/organizacion-avanzada.jpg",
              video: "/videos/teoria/navegacion-eficiente.mp4"
            },
            actividades: [
              'Organizar una presentación de 10 diapositivas en 3 secciones lógicas',
              'Crear una presentación personalizada con solo 5 diapositivas clave',
              'Usar función buscar y reemplazar para cambiar un término en toda la presentación',
              'Agregar comentarios de revisión en diferentes diapositivas'
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
          preRequisitos: ["Tema 1: Primeros pasos"],
          criterios: [
            "Navegar eficientemente entre las diferentes vistas de PowerPoint",
            "Gestionar diapositivas: crear, duplicar, eliminar y reordenar",
            "Aplicar y personalizar diseños predefinidos apropiadamente",
            "Usar marcadores de posición de manera efectiva",
            "Organizar presentaciones usando secciones y herramientas avanzadas",
            "Optimizar el flujo de trabajo con atajos y herramientas de productividad"
          ],
          tiempoEstimado: "28 minutos"
        }
      },
      '3': {
        titulo: "Formato de texto y párrafos",
        duracion: "25-30 minutos",
        objetivos: [
          "Aplicar formato de fuente profesional (tipo, tamaño, color, estilos)",
          "Dominar la alineación y espaciado de párrafos",
          "Crear listas numeradas y con viñetas efectivas",
          "Usar herramientas de formato avanzado (copiar formato, estilos)",
          "Optimizar la legibilidad y jerarquía visual del texto"
        ],
        secciones: [
          {
            id: 1,
            titulo: "Formato de Fuente",
            contenido: `
              <div class="seccion-contenido">
                <h3>🔤 Dominando el Formato de Fuente</h3>
                
                <div class="tipos-fuente">
                  <h4>📝 Selección de Fuentes</h4>
                  
                  <div class="categorias-fuentes">
                    <h5>🎯 Categorías de Fuentes</h5>
                    
                    <div class="fuentes-sans-serif">
                      <h6>🔷 Sans Serif (Sin Serifas)</h6>
                      <ul>
                        <li><strong>Ejemplos:</strong> Arial, Calibri, Helvetica, Verdana</li>
                        <li><strong>Características:</strong> Limpias, modernas, legibles en pantalla</li>
                        <li><strong>Uso ideal:</strong> Presentaciones digitales, títulos, texto en pantalla</li>
                        <li><strong>Ventajas:</strong> Mayor legibilidad a distancia</li>
                      </ul>
                    </div>

                    <div class="fuentes-serif">
                      <h6>🔶 Serif (Con Serifas)</h6>
                      <ul>
                        <li><strong>Ejemplos:</strong> Times New Roman, Georgia, Book Antiqua</li>
                        <li><strong>Características:</strong> Elegantes, tradicionales, serias</li>
                        <li><strong>Uso ideal:</strong> Documentos impresos, contexto formal</li>
                        <li><strong>Consideración:</strong> Menos legibles en pantalla pequeña</li>
                      </ul>
                    </div>

                    <div class="fuentes-especiales">
                      <h6>✨ Fuentes Decorativas</h6>
                      <ul>
                        <li><strong>Ejemplos:</strong> Impact, Brush Script, Comic Sans</li>
                        <li><strong>Características:</strong> Llamativas, expresivas, temáticas</li>
                        <li><strong>Uso limitado:</strong> Títulos especiales, efectos</li>
                        <li><strong>Precaución:</strong> Usar con moderación</li>
                      </ul>
                    </div>
                  </div>

                  <div class="seleccion-fuente">
                    <h5>🎨 Criterios de Selección</h5>
                    <ul>
                      <li><strong>Audiencia:</strong> Profesional vs informal</li>
                      <li><strong>Medio:</strong> Pantalla vs impresión</li>
                      <li><strong>Distancia:</strong> Presentación vs lectura cercana</li>
                      <li><strong>Consistencia:</strong> Máximo 2-3 fuentes por presentación</li>
                      <li><strong>Legibilidad:</strong> Tamaño mínimo 24pt para presentaciones</li>
                    </ul>
                  </div>
                </div>

                <div class="tamano-fuente">
                  <h4>📏 Tamaños de Fuente Efectivos</h4>
                  
                  <div class="jerarquia-tamanos">
                    <h5>📊 Jerarquía de Tamaños</h5>
                    <ul>
                      <li><strong>Título principal:</strong> 36-44pt (máximo impacto)</li>
                      <li><strong>Subtítulos:</strong> 28-32pt (estructura clara)</li>
                      <li><strong>Texto principal:</strong> 24-28pt (legibilidad óptima)</li>
                      <li><strong>Texto secundario:</strong> 18-22pt (notas, referencias)</li>
                      <li><strong>Pie de página:</strong> 14-16pt (información complementaria)</li>
                    </ul>
                  </div>

                  <div class="factores-tamano">
                    <h5>🎯 Factores a Considerar</h5>
                    <ul>
                      <li><strong>Tamaño de audiencia:</strong> Mayor audiencia = mayor tamaño</li>
                      <li><strong>Distancia de proyección:</strong> Ajustar según sala</li>
                      <li><strong>Resolución de pantalla:</strong> Considerar calidad de proyector</li>
                      <li><strong>Contraste:</strong> Texto claro requiere menos tamaño</li>
                    </ul>
                  </div>
                </div>

                <div class="colores-texto">
                  <h4>🎨 Colores y Contraste</h4>
                  
                  <div class="teoria-color">
                    <h5>🌈 Teoría del Color en Texto</h5>
                    <ul>
                      <li><strong>Alto contraste:</strong> Negro sobre blanco, blanco sobre negro</li>
                      <li><strong>Colores complementarios:</strong> Azul/naranja, rojo/verde</li>
                      <li><strong>Evitar combinaciones:</strong> Rojo/verde (daltonismo), amarillo/blanco</li>
                      <li><strong>Consistencia:</strong> Same color para same tipo de información</li>
                    </ul>
                  </div>

                  <div class="aplicacion-color">
                    <h5>🎯 Aplicación Práctica</h5>
                    <ul>
                      <li><strong>Texto principal:</strong> Negro o azul oscuro sobre fondo claro</li>
                      <li><strong>Énfasis:</strong> Color corporativo o azul para destacar</li>
                      <li><strong>Advertencias:</strong> Rojo para información crítica</li>
                      <li><strong>Enlaces:</strong> Azul tradicional o color consistente</li>
                    </ul>
                  </div>
                </div>

                <div class="estilos-fuente">
                  <h4>🔧 Estilos de Fuente</h4>
                  
                  <div class="estilos-basicos">
                    <h5>⚡ Estilos Básicos</h5>
                    <ul>
                      <li><strong>Negrita (Bold):</strong> Ctrl+B - Énfasis y títulos</li>
                      <li><strong>Cursiva (Italic):</strong> Ctrl+I - Sutileza y citas</li>
                      <li><strong>Subrayado:</strong> Ctrl+U - Enlaces y destacados</li>
                      <li><strong>Tachado:</strong> Para correcciones o elementos eliminados</li>
                    </ul>
                  </div>

                  <div class="uso-efectivo">
                    <h5>✅ Uso Efectivo de Estilos</h5>
                    <ul>
                      <li><strong>Moderación:</strong> No combinar más de 2 estilos</li>
                      <li><strong>Consistencia:</strong> Same estilo para same propósito</li>
                      <li><strong>Jerarquía:</strong> Negrita para elementos importantes</li>
                      <li><strong>Legibilidad:</strong> Evitar cursiva en textos largos</li>
                    </ul>
                  </div>
                </div>

                <div class="herramientas-formato">
                  <h4>🛠️ Herramientas de Formato</h4>
                  
                  <div class="panel-fuente">
                    <h5>📋 Panel de Fuente</h5>
                    <ul>
                      <li><strong>Acceso:</strong> Inicio > Grupo Fuente o Ctrl+Shift+F</li>
                      <li><strong>Opciones avanzadas:</strong> Espaciado de caracteres</li>
                      <li><strong>Efectos:</strong> Sombra, reflejo, iluminado</li>
                      <li><strong>Vista previa:</strong> Ver cambios antes de aplicar</li>
                    </ul>
                  </div>

                  <div class="atajos-rapidos">
                    <h5>⚡ Atajos Rápidos</h5>
                    <ul>
                      <li><strong>Aumentar fuente:</strong> Ctrl+Shift+> (mayor que)</li>
                      <li><strong>Disminuir fuente:</strong> Ctrl+Shift+< (menor que)</li>
                      <li><strong>Limpiar formato:</strong> Ctrl+Espacio</li>
                      <li><strong>Copiar formato:</strong> Ctrl+Shift+C, Ctrl+Shift+V</li>
                    </ul>
                  </div>
                </div>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/formato-fuente.jpg",
              video: "/videos/teoria/estilos-fuente.mp4"
            },
            actividades: [
              'Crear una diapositiva con jerarquía de 4 niveles de texto diferentes',
              'Aplicar 3 fuentes diferentes y comparar legibilidad',
              'Experimentar con combinaciones de color texto/fondo',
              'Usar atajos de teclado para formato rápido'
            ]
          },
          {
            id: 2,
            titulo: "Alineación y Espaciado",
            contenido: `
              <div class="seccion-contenido">
                <h3>📐 Perfeccionando Alineación y Espaciado</h3>
                
                <div class="tipos-alineacion">
                  <h4>↔️ Tipos de Alineación</h4>
                  
                  <div class="alineacion-horizontal">
                    <h5>➡️ Alineación Horizontal</h5>
                    
                    <div class="izquierda">
                      <h6>⬅️ Alineación Izquierda</h6>
                      <ul>
                        <li><strong>Uso:</strong> Texto de lectura principal</li>
                        <li><strong>Ventajas:</strong> Natural, fácil de leer</li>
                        <li><strong>Ideal para:</strong> Párrafos largos, listas</li>
                        <li><strong>Atajo:</strong> Ctrl+L</li>
                      </ul>
                    </div>

                    <div class="centro">
                      <h6>⬌ Alineación Centro</h6>
                      <ul>
                        <li><strong>Uso:</strong> Títulos, textos cortos</li>
                        <li><strong>Ventajas:</strong> Equilibrio visual, elegancia</li>
                        <li><strong>Limitaciones:</strong> Difícil de leer en textos largos</li>
                        <li><strong>Atajo:</strong> Ctrl+E</li>
                      </ul>
                    </div>

                    <div class="derecha">
                      <h6>➡️ Alineación Derecha</h6>
                      <ul>
                        <li><strong>Uso:</strong> Fechas, firmas, elementos decorativos</li>
                        <li><strong>Efecto:</strong> Formal, diferente</li>
                        <li><strong>Cuidado:</strong> Menos familiar para lectura</li>
                        <li><strong>Atajo:</strong> Ctrl+R</li>
                      </ul>
                    </div>

                    <div class="justificado">
                      <h6>⬍⬌ Justificado</h6>
                      <ul>
                        <li><strong>Uso:</strong> Textos formales, documentos</li>
                        <li><strong>Efecto:</strong> Bordes uniformes</li>
                        <li><strong>Problema:</strong> Espacios irregulares en PowerPoint</li>
                        <li><strong>Atajo:</strong> Ctrl+J</li>
                      </ul>
                    </div>
                  </div>

                  <div class="alineacion-vertical">
                    <h5>↕️ Alineación Vertical</h5>
                    <ul>
                      <li><strong>Superior:</strong> Texto comienza arriba del cuadro</li>
                      <li><strong>Medio:</strong> Texto centrado verticalmente</li>
                      <li><strong>Inferior:</strong> Texto alineado al fondo</li>
                      <li><strong>Acceso:</strong> Clic derecho > Formato > Cuadro de texto</li>
                    </ul>
                  </div>
                </div>

                <div class="espaciado-parrafos">
                  <h4>📏 Espaciado de Párrafos</h4>
                  
                  <div class="interlineado">
                    <h5>📊 Interlineado</h5>
                    
                    <div class="opciones-interlineado">
                      <h6>⚙️ Opciones Principales</h6>
                      <ul>
                        <li><strong>Sencillo (1.0):</strong> Estándar, compacto</li>
                        <li><strong>1.5 líneas:</strong> Equilibrio lectura/espacio</li>
                        <li><strong>Doble (2.0):</strong> Máxima legibilidad</li>
                        <li><strong>Personalizado:</strong> Valores específicos (1.2, 1.3, etc.)</li>
                      </ul>
                    </div>

                    <div class="recomendaciones">
                      <h6>✅ Recomendaciones de Uso</h6>
                      <ul>
                        <li><strong>Títulos:</strong> Interlineado sencillo</li>
                        <li><strong>Texto principal:</strong> 1.2 a 1.5 para mejor legibilidad</li>
                        <li><strong>Listas:</strong> Sencillo con espaciado entre elementos</li>
                        <li><strong>Notas:</strong> Más compacto (0.9-1.0)</li>
                      </ul>
                    </div>
                  </div>

                  <div class="espaciado-antes-despues">
                    <h5>⬆️⬇️ Espaciado Antes y Después</h5>
                    <ul>
                      <li><strong>Antes del párrafo:</strong> Separación superior</li>
                      <li><strong>Después del párrafo:</strong> Separación inferior</li>
                      <li><strong>Unidades:</strong> Puntos (pt) - 12pt = una línea aprox.</li>
                      <li><strong>Uso eficiente:</strong> Evitar Enter múltiples</li>
                    </ul>
                  </div>
                </div>

                <div class="sangrias">
                  <h4">🔲 Sangrías y Tabulaciones</h4>
                  
                  <div class="tipos-sangria">
                    <h5>📝 Tipos de Sangría</h5>
                    
                    <div class="sangria-izquierda">
                      <h6>➡️ Sangría Izquierda</h6>
                      <ul>
                        <li><strong>Función:</strong> Mover todo el párrafo hacia la derecha</li>
                        <li><strong>Uso:</strong> Citas, niveles de jerarquía</li>
                        <li><strong>Control:</strong> Regla superior o cuadros de diálogo</li>
                      </ul>
                    </div>

                    <div class="sangria-primera-linea">
                      <h6>📄 Sangría Primera Línea</h6>
                      <ul>
                        <li><strong>Función:</strong> Solo primera línea hacia la derecha</li>
                        <li><strong>Uso:</strong> Párrafos tradicionales de libros</li>
                        <li><strong>Medida típica:</strong> 0.5 pulgadas (1.27 cm)</li>
                      </ul>
                    </div>

                    <div class="sangria-francesa">
                      <h6>🔄 Sangría Francesa</h6>
                      <ul>
                        <li><strong>Función:</strong> Primera línea normal, resto indentado</li>
                        <li><strong>Uso:</strong> Bibliografías, listas especiales</li>
                        <li><strong>Efecto:</strong> Primera línea sobresale</li>
                      </ul>
                    </div>
                  </div>

                  <div class="tabulaciones">
                    <h5>📐 Tabulaciones</h5>
                    <ul>
                      <li><strong>Izquierda:</strong> Texto alineado a la izquierda del tabulador</li>
                      <li><strong>Centro:</strong> Texto centrado en el tabulador</li>
                      <li><strong>Derecha:</strong> Texto alineado a la derecha</li>
                      <li><strong>Decimal:</strong> Números alineados por punto decimal</li>
                      <li><strong>Establecer:</strong> Clic en regla o Formato > Tabulaciones</li>
                    </ul>
                  </div>
                </div>

                <div class="herramientas-alineacion">
                  <h4>🛠️ Herramientas de Alineación</h4>
                  
                  <div class="acceso-rapido">
                    <h5">⚡ Acceso Rápido</h5>
                    <ul>
                      <li><strong>Cinta Inicio:</strong> Grupo Párrafo</li>
                      <li><strong>Atajos:</strong> Ctrl+L/E/R/J para alineaciones</li>
                      <li><strong>Regla:</strong> Mostrar/ocultar con Ctrl+R</li>
                      <li><strong>Cuadro diálogo:</strong> Inicio > Iniciador grupo Párrafo</li>
                    </ul>
                  </div>

                  <div class="panel-parrafo">
                    <h5>📋 Panel de Párrafo</h5>
                    <ul>
                      <li><strong>Acceso:</strong> Formato > Párrafo</li>
                      <li><strong>Opciones completas:</strong> Todas las configuraciones</li>
                      <li><strong>Vista previa:</strong> Ver cambios antes de aplicar</li>
                      <li><strong>Valores precisos:</strong> Medidas exactas</li>
                    </ul>
                  </div>
                </div>

                <div class="mejores-practicas">
                  <h4>✅ Mejores Prácticas</h4>
                  
                  <div class="legibilidad">
                    <h5>👁️ Optimización de Legibilidad</h5>
                    <ul>
                      <li><strong>Consistencia:</strong> Same espaciado para elementos similares</li>
                      <li><strong>Respiración:</strong> Suficiente espacio en blanco</li>
                      <li><strong>Jerarquía:</strong> Espaciado mayor para niveles superiores</li>
                      <li><strong>Equilibrio:</strong> Distribución armoniosa en la diapositiva</li>
                    </ul>
                  </div>

                  <div class="eficiencia">
                    <h5">⚡ Eficiencia en el Trabajo</h5>
                    <ul>
                      <li><strong>Estilos:</strong> Crear estilos para formatos repetitivos</li>
                      <li><strong>Copiar formato:</strong> Ctrl+Shift+C/V para aplicar rápido</li>
                      <li><strong>Plantillas:</strong> Guardar configuraciones estándar</li>
                      <li><strong>Atajos:</strong> Memorizar combinaciones frecuentes</li>
                    </ul>
                  </div>
                </div>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/alineacion-espaciado.jpg",
              video: "/videos/teoria/parrafos-avanzado.mp4"
            },
            actividades: [
              'Crear textos con las 4 alineaciones horizontales diferentes',
              'Ajustar interlineado para optimizar legibilidad',
              'Configurar sangrías para crear jerarquía visual',
              'Usar tabulaciones para alinear información en columnas'
            ]
          },
          {
            id: 3,
            titulo: "Listas y Viñetas",
            contenido: `
              <div class="seccion-contenido">
                <h3>📋 Creando Listas Efectivas</h3>
                
                <div class="tipos-listas">
                  <h4>🔢 Tipos de Listas</h4>
                  
                  <div class="listas-vinetas">
                    <h5>• Listas con Viñetas</h5>
                    
                    <div class="vinetas-basicas">
                      <h6>🎯 Viñetas Básicas</h6>
                      <ul>
                        <li><strong>Círculo sólido (•):</strong> Más común, universal</li>
                        <li><strong>Círculo vacío (○):</strong> Niveles secundarios</li>
                        <li><strong>Cuadrado (■):</strong> Formal, técnico</li>
                        <li><strong>Flecha (➤):</strong> Procesos, direccionalidad</li>
                        <li><strong>Diamante (♦):</strong> Elegante, especial</li>
                      </ul>
                    </div>

                    <div class="vinetas-personalizadas">
                      <h6">🎨 Viñetas Personalizadas</h6>
                      <ul>
                        <li><strong>Símbolos:</strong> ★, ✓, ➢, ▶, □</li>
                        <li><strong>Imágenes:</strong> Logos, iconos empresariales</li>
                        <li><strong>Colores:</strong> Coordinar con paleta corporativa</li>
                        <li><strong>Tamaños:</strong> Proporcional al texto</li>
                      </ul>
                    </div>

                    <div class="usos-vinetas">
                      <h6">✅ Cuándo Usar Viñetas</h6>
                      <ul>
                        <li><strong>Listas no ordenadas:</strong> Sin secuencia específica</li>
                        <li><strong>Características:</strong> Funciones, beneficios</li>
                        <li><strong>Puntos clave:</strong> Ideas principales</li>
                        <li><strong>Elementos paralelos:</strong> Misma importancia</li>
                      </ul>
                    </div>
                  </div>

                  <div class="listas-numeradas">
                    <h5>1. Listas Numeradas</h5>
                    
                    <div class="tipos-numeracion">
                      <h6">🔢 Tipos de Numeración</h6>
                      <ul>
                        <li><strong>Números arábigos (1, 2, 3):</strong> Estándar, secuencial</li>
                        <li><strong>Letras minúsculas (a, b, c):</strong> Subdivisiones</li>
                        <li><strong>Letras mayúsculas (A, B, C):</strong> Secciones principales</li>
                        <li><strong>Números romanos (I, II, III):</strong> Formal, clásico</li>
                        <li><strong>Romanos minúsculos (i, ii, iii):</strong> Subsecciones</li>
                      </ul>
                    </div>

                    <div class="usos-numeradas">
                      <h6">🎯 Cuándo Usar Numeración</h6>
                      <ul>
                        <li><strong>Procesos:</strong> Pasos secuenciales</li>
                        <li><strong>Procedimientos:</strong> Instrucciones ordenadas</li>
                        <li><strong>Prioridades:</strong> Importancia relativa</li>
                        <li><strong>Cronología:</strong> Eventos temporales</li>
                        <li><strong>Rankings:</strong> Clasificaciones</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="niveles-jerarquia">
                  <h4">📊 Niveles y Jerarquía</h4>
                  
                  <div class="crear-niveles">
                    <h5">📐 Crear Niveles Múltiples</h5>
                    <ul>
                      <li><strong>Aumentar nivel:</strong> Tab o Inicio > Aumentar nivel</li>
                      <li><strong>Disminuir nivel:</strong> Shift+Tab o Inicio > Disminuir nivel</li>
                      <li><strong>Máximo recomendado:</strong> 3-4 niveles para claridad</li>
                      <li><strong>Consistencia:</strong> Same estilo por nivel</li>
                    </ul>
                  </div>

                  <div class="jerarquia-visual">
                    <h5">👁️ Jerarquía Visual</h5>
                    
                    <div class="nivel-1">
                      <h6">1️⃣ Nivel 1 - Principal</h6>
                      <ul>
                        <li><strong>Viñeta:</strong> Grande, color primario</li>
                        <li><strong>Texto:</strong> Tamaño completo, negrita</li>
                        <li><strong>Uso:</strong> Ideas principales</li>
                      </ul>
                    </div>

                    <div class="nivel-2">
                      <h6">2️⃣ Nivel 2 - Secundario</h6>
                      <ul>
                        <li><strong>Viñeta:</strong> Diferente forma/color</li>
                        <li><strong>Texto:</strong> 90% del tamaño</li>
                        <li><strong>Uso:</strong> Detalles, subdivisiones</li>
                      </ul>
                    </div>

                    <div class="nivel-3">
                      <h6">3️⃣ Nivel 3 - Detalle</h6>
                      <ul>
                        <li><strong>Viñeta:</strong> Más simple, color atenuado</li>
                        <li><strong>Texto:</strong> 80% del tamaño</li>
                        <li><strong>Uso:</strong> Ejemplos, especificaciones</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="formato-listas">
                  <h4">🎨 Formato y Personalización</h4>
                  
                  <div class="personalizar-vinetas">
                    <h5">🔧 Personalizar Viñetas</h5>
                    <ul>
                      <li><strong>Acceso:</strong> Inicio > Flecha junto a Viñetas</li>
                      <li><strong>Biblioteca:</strong> Viñetas predefinidas</li>
                      <li><strong>Definir nueva:</strong> Símbolo o imagen personalizada</li>
                      <li><strong>Ajustar:</strong> Tamaño, color, posición</li>
                    </ul>
                  </div>

                  <div class="espaciado-listas">
                    <h5">📏 Espaciado en Listas</h5>
                    <ul>
                      <li><strong>Entre elementos:</strong> Espaciado después párrafo</li>
                      <li><strong>Viñeta a texto:</strong> Sangría de primera línea</li>
                      <li><strong>Márgenes:</strong> Sangría izquierda general</li>
                      <li><strong>Interlineado:</strong> Generalmente sencillo</li>
                    </ul>
                  </div>

                  <div class="numeracion-avanzada">
                    <h5">🔢 Numeración Avanzada</h5>
                    <ul>
                      <li><strong>Iniciar en:</strong> Comenzar desde número específico</li>
                      <li><strong>Formato:</strong> 1), (1), 1., a), etc.</li>
                      <li><strong>Reiniciar:</strong> Nueva secuencia en cada nivel</li>
                      <li><strong>Continuar:</strong> Secuencia a través de párrafos</li>
                    </ul>
                  </div>
                </div>

                <div class="conversion-listas">
                  <h4">🔄 Conversión y Manipulación</h4>
                  
                  <div class="convertir-tipos">
                    <h5">↔️ Convertir Tipos</h5>
                    <ul>
                      <li><strong>Viñetas a números:</strong> Seleccionar > Numeración</li>
                      <li><strong>Números a viñetas:</strong> Seleccionar > Viñetas</li>
                      <li><strong>A texto normal:</strong> Eliminar formato de lista</li>
                      <li><strong>Mantener estructura:</strong> Conservar niveles</li>
                    </ul>
                  </div>

                  <div class="manipular-elementos">
                    <h5">⚙️ Manipular Elementos</h5>
                    <ul>
                      <li><strong>Reordenar:</strong> Cortar/pegar elementos</li>
                      <li><strong>Dividir listas:</strong> Enter sin formato</li>
                      <li><strong>Unir listas:</strong> Eliminar separación</li>
                      <li><strong>Copiar formato:</strong> Aplicar estilo a nueva lista</li>
                    </ul>
                  </div>
                </div>

                <div class="mejores-practicas-listas">
                  <h4">✅ Mejores Prácticas</h4>
                  
                  <div class="contenido-efectivo">
                    <h5">📝 Contenido Efectivo</h5>
                    <ul>
                      <li><strong>Paralelismo:</strong> Estructura similar en cada elemento</li>
                      <li><strong>Brevedad:</strong> Puntos concisos, no párrafos</li>
                      <li><strong>Relevancia:</strong> Solo información necesaria</li>
                      <li><strong>Orden lógico:</strong> Secuencia que tenga sentido</li>
                    </ul>
                  </div>

                  <div class="diseno-visual">
                    <h5">👁️ Diseño Visual</h5>
                    <ul>
                      <li><strong>Límite de elementos:</strong> Máximo 7±2 por lista</li>
                      <li><strong>Espaciado uniforme:</strong> Distribución equilibrada</li>
                      <li><strong>Contraste:</strong> Viñetas visibles pero no dominantes</li>
                      <li><strong>Consistencia:</strong> Same formato en toda presentación</li>
                    </ul>
                  </div>

                  <div class="uso-estrategico">
                    <h5">🎯 Uso Estratégico</h5>
                    <ul>
                      <li><strong>Facilitar lectura:</strong> Dividir información densa</li>
                      <li><strong>Crear ritmo:</strong> Alternar con otros formatos</li>
                      <li><strong>Enfatizar puntos:</strong> Destacar ideas clave</li>
                      <li><strong>Organizar ideas:</strong> Estructura clara</li>
                    </ul>
                  </div>
                </div>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/listas-vinetas.jpg",
              video: "/videos/teoria/listas-efectivas.mp4"
            },
            actividades: [
              'Crear una lista con 3 niveles de jerarquía diferentes',
              'Personalizar viñetas con símbolos e imágenes',
              'Convertir una lista numerada en viñetas manteniendo estructura',
              'Diseñar una lista que demuestre paralelismo en el contenido'
            ]
          },
          {
            id: 4,
            titulo: "Herramientas de Formato Avanzado",
            contenido: `
              <div class="seccion-contenido">
                <h3">🔧 Herramientas Avanzadas de Formato</h3>
                
                <div class="copiar-formato">
                  <h4">📋 Copiar Formato (Format Painter)</h4>
                  
                  <div class="funcionamiento">
                    <h5">⚡ Cómo Funciona</h5>
                    <ul>
                      <li><strong>Seleccionar origen:</strong> Texto con formato deseado</li>
                      <li><strong>Activar herramienta:</strong> Inicio > Copiar formato (pincel)</li>
                      <li><strong>Aplicar:</strong> Seleccionar texto de destino</li>
                      <li><strong>Resultado:</strong> Formato copiado instantáneamente</li>
                    </ul>
                  </div>

                  <div class="tipos-copia">
                    <h5">🎯 Tipos de Copia</h5>
                    
                    <div class="copia-simple">
                      <h6">🖱️ Copia Simple</h6>
                      <ul>
                        <li><strong>Método:</strong> Un clic en Copiar formato</li>
                        <li><strong>Uso:</strong> Aplicar una vez y se desactiva</li>
                        <li><strong>Ideal para:</strong> Formato puntual</li>
                        <li><strong>Atajo:</strong> Ctrl+Shift+C (copiar), Ctrl+Shift+V (pegar)</li>
                      </ul>
                    </div>

                    <div class="copia-multiple">
                      <h6">🔄 Copia Múltiple</h6>
                      <ul>
                        <li><strong>Método:</strong> Doble clic en Copiar formato</li>
                        <li><strong>Uso:</strong> Aplicar múltiples veces</li>
                        <li><strong>Desactivar:</strong> Esc o clic en Copiar formato</li>
                        <li><strong>Ideal para:</strong> Formato repetitivo</li>
                      </ul>
                    </div>
                  </div>

                  <div class="que-se-copia">
                    <h5">📝 Qué se Copia</h5>
                    <ul>
                      <li><strong>Fuente:</strong> Tipo, tamaño, color, estilo</li>
                      <li><strong>Párrafo:</strong> Alineación, espaciado, sangrías</li>
                      <li><strong>Bordes:</strong> Líneas y efectos de borde</li>
                      <li><strong>Relleno:</strong> Color de fondo de texto</li>
                      <li><strong>No copia:</strong> Contenido del texto</li>
                    </ul>
                  </div>
                </div>

                <div class="estilos-rapidos">
                  <h4">🎨 Estilos Rápidos</h4>
                  
                  <div class="galeria-estilos">
                    <h5">🖼️ Galería de Estilos</h5>
                    <ul>
                      <li><strong>Ubicación:</strong> Inicio > Grupo Estilos</li>
                      <li><strong>Vista previa:</strong> Hover para ver efecto</li>
                      <li><strong>Aplicar:</strong> Clic para aplicar permanentemente</li>
                      <li><strong>Más opciones:</strong> Flecha para ver todos</li>
                    </ul>
                  </div>

                  <div class="tipos-estilos">
                    <h5">📋 Tipos de Estilos</h5>
                    
                    <div class="estilos-titulo">
                      <h6">🎯 Estilos de Título</h6>
                      <ul>
                        <li><strong>Título principal:</strong> Grande, llamativo</li>
                        <li><strong>Subtítulos:</strong> Jerarquía clara</li>
                        <li><strong>Encabezados:</strong> Sección y subsección</li>
                      </ul>
                    </div>

                    <div class="estilos-enfasis">
                      <h6">✨ Estilos de Énfasis</h6>
                      <ul>
                        <li><strong>Cita:</strong> Texto destacado, cursiva</li>
                        <li><strong>Énfasis sutil:</strong> Color diferente</li>
                        <li><strong>Énfasis intenso:</strong> Negrita, color fuerte</li>
                      </ul>
                    </div>
                  </div>

                  <div class="modificar-estilos">
                    <h5">⚙️ Modificar Estilos</h5>
                    <ul>
                      <li><strong>Clic derecho:</strong> En estilo > Modificar</li>
                      <li><strong>Ajustar formato:</strong> Fuente, párrafo, bordes</li>
                      <li><strong>Actualizar automáticamente:</strong> Cambios globales</li>
                      <li><strong>Crear nuevo:</strong> Estilo personalizado</li>
                    </ul>
                  </div>
                </div>

                <div class="buscar-reemplazar">
                  <h4">🔍 Buscar y Reemplazar Formato</h4>
                  
                  <div class="buscar-formato">
                    <h5">🔎 Buscar por Formato</h5>
                    <ul>
                      <li><strong>Acceso:</strong> Ctrl+H > Más opciones > Formato</li>
                      <li><strong>Criterios:</strong> Fuente, párrafo, idioma, estilo</li>
                      <li><strong>Combinaciones:</strong> Texto + formato específico</li>
                      <li><strong>Solo formato:</strong> Campos de texto vacíos</li>
                    </ul>
                  </div>

                  <div class="casos-uso">
                    <h5">🎯 Casos de Uso Prácticos</h5>
                    <ul>
                      <li><strong>Cambiar fuente:</strong> Arial por Calibri en toda presentación</li>
                      <li><strong>Unificar colores:</strong> Diferentes azules por color corporativo</li>
                      <li><strong>Actualizar estilos:</strong> Tamaños de título inconsistentes</li>
                      <li><strong>Corregir formato:</strong> Elementos mal formateados</li>
                    </ul>
                  </div>
                </div>

                <div class="limpiar-formato">
                  <h4">🧹 Limpiar Formato</h4>
                  
                  <div class="metodos-limpieza">
                    <h5">🔧 Métodos de Limpieza</h5>
                    <ul>
                      <li><strong>Borrar todo formato:</strong> Inicio > Borrar formato</li>
                      <li><strong>Atajo rápido:</strong> Ctrl+Espacio</li>
                      <li><strong>Solo caracteres:</strong> Mantener formato párrafo</li>
                      <li><strong>Pegar sin formato:</strong> Ctrl+Shift+V</li>
                    </ul>
                  </div>

                  <div class="que-se-limpia">
                    <h5">🗑️ Qué se Elimina</h5>
                    <ul>
                      <li><strong>Formato de fuente:</strong> Negrita, cursiva, color</li>
                      <li><strong>Tamaño:</strong> Vuelve al predeterminado</li>
                      <li><strong>Efectos:</strong> Subrayado, tachado, sombras</li>
                      <li><strong>Mantiene:</strong> Contenido del texto</li>
                    </ul>
                  </div>
                </div>

                <div class="inspector-formato">
                  <h4">🔍 Inspector de Formato</h4>
                  
                  <div class="activar-inspector">
                    <h5">🚀 Activar Inspector</h5>
                    <ul>
                      <li><strong>Atajo:</strong> Shift+F1</li>
                      <li><strong>Panel:</strong> Se abre a la derecha</li>
                      <li><strong>Función:</strong> Muestra formato actual detallado</li>
                      <li><strong>Tiempo real:</strong> Actualiza con selección</li>
                    </ul>
                  </div>

                  <div class="informacion-mostrada">
                    <h5">📊 Información Mostrada</h5>
                    <ul>
                      <li><strong>Formato de fuente:</strong> Nombre, tamaño, estilo, color</li>
                      <li><strong>Formato de párrafo:</strong> Alineación, espaciado, sangrías</li>
                      <li><strong>Formato de sección:</strong> Configuración de página</li>
                      <li><strong>Enlaces directos:</strong> Modificar formato rápidamente</li>
                    </ul>
                  </div>
                </div>

                <div class="atajos-avanzados">
                  <h4">⚡ Atajos Avanzados de Formato</h4>
                  
                  <div class="atajos-fuente">
                    <h5">🔤 Atajos de Fuente</h5>
                    <ul>
                      <li><strong>Ctrl+Shift+F:</strong> Cambiar fuente</li>
                      <li><strong>Ctrl+Shift+P:</strong> Cambiar tamaño</li>
                      <li><strong>Ctrl+]:</strong> Aumentar tamaño</li>
                      <li><strong>Ctrl+[:</strong> Disminuir tamaño</li>
                      <li><strong>Ctrl+=:</strong> Subíndice</li>
                      <li><strong>Ctrl+Shift+=:</strong> Superíndice</li>
                    </ul>
                  </div>

                  <div class="atajos-parrafo">
                    <h5">📐 Atajos de Párrafo</h5>
                    <ul>
                      <li><strong>Ctrl+1:</strong> Interlineado sencillo</li>
                      <li><strong>Ctrl+2:</strong> Interlineado doble</li>
                      <li><strong>Ctrl+5:</strong> Interlineado 1.5</li>
                      <li><strong>Ctrl+0:</strong> Espaciado antes párrafo</li>
                      <li><strong>Ctrl+M:</strong> Aumentar sangría</li>
                      <li><strong>Ctrl+Shift+M:</strong> Disminuir sangría</li>
                    </ul>
                  </div>
                </div>

                <div class="plantillas-formato">
                  <h4">📄 Plantillas y Temas</h4>
                  
                  <div class="crear-plantillas">
                    <h5">🛠️ Crear Plantillas de Formato</h5>
                    <ul>
                      <li><strong>Configurar base:</strong> Fuentes, colores, estilos</li>
                      <li><strong>Guardar como plantilla:</strong> Archivo > Guardar como > Plantilla</li>
                      <li><strong>Reutilizar:</strong> Nueva presentación desde plantilla</li>
                      <li><strong>Compartir:</strong> Distribuir plantillas al equipo</li>
                    </ul>
                  </div>

                  <div class="temas-corporativos">
                    <h5">🏢 Temas Corporativos</h5>
                    <ul>
                      <li><strong>Diseño > Temas:</strong> Galería de temas</li>
                      <li><strong>Personalizar:</strong> Colores, fuentes, efectos</li>
                      <li><strong>Guardar tema:</strong> Para uso futuro</li>
                      <li><strong>Consistencia:</strong> Marca corporativa unificada</li>
                    </ul>
                  </div>
                </div>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/herramientas-avanzadas.jpg",
              video: "/videos/teoria/formato-profesional.mp4"
            },
            actividades: [
              'Usar Copiar formato para unificar estilos en una presentación',
              'Crear y aplicar un estilo personalizado para títulos',
              'Utilizar Buscar y reemplazar para cambiar formato específico',
              'Configurar una plantilla con formato corporativo personalizado'
            ]
          }
        ],
        recursos: {
          documentos: [
            {
              titulo: "Guía Completa de Formato de Texto",
              tipo: "PDF",
              url: "/recursos/powerpoint/formato-texto-completo.pdf"
            },
            {
              titulo: "Manual de Tipografía para Presentaciones",
              tipo: "PDF",
              url: "/recursos/powerpoint/tipografia-presentaciones.pdf"
            },
            {
              titulo: "Plantillas de Formato Corporativo",
              tipo: "ZIP",
              url: "/recursos/powerpoint/plantillas-corporativas.zip"
            }
          ],
          videos: [
            {
              titulo: "Formato de Fuente Profesional",
              duracion: "20 min",
              url: "/videos/formato-fuente-profesional.mp4"
            },
            {
              titulo: "Listas y Viñetas Efectivas",
              duracion: "15 min",
              url: "/videos/listas-efectivas.mp4"
            },
            {
              titulo: "Herramientas Avanzadas de Formato",
              duracion: "18 min",
              url: "/videos/herramientas-avanzadas.mp4"
            }
          ],
          enlaces: [
            {
              titulo: "Formato de Texto - Guía Oficial Microsoft",
              url: "https://support.microsoft.com/es-es/office/cambiar-el-aspecto-del-texto"
            },
            {
              titulo: "Mejores Prácticas de Tipografía",
              url: "https://support.microsoft.com/es-es/office/mejorar-la-accesibilidad-con-el-comprobador-de-accesibilidad"
            },
            {
              titulo: "Estilos y Temas PowerPoint",
              url: "https://support.microsoft.com/es-es/office/aplicar-un-tema-para-añadir-color-y-estilo"
            }
          ]
        },
        evaluacion: {
          preRequisitos: ["Tema 1: Primeros pasos", "Tema 2: Vistas y diapositivas"],
          criterios: [
            "Aplicar formato de fuente apropiado y profesional",
            "Configurar alineación y espaciado para óptima legibilidad",
            "Crear listas con viñetas y numeración efectivas",
            "Usar herramientas avanzadas: copiar formato, estilos, buscar/reemplazar",
            "Mantener consistencia visual en toda la presentación",
            "Optimizar jerarquía de información mediante formato estratégico"
          ],
          tiempoEstimado: "30 minutos"
        }
      },
      '4': {
        titulo: "Insertar y gestionar imágenes",
        duracion: "28-35 minutos",
        objetivos: [
          "Insertar imágenes desde diferentes fuentes (archivo, online, captura)",
          "Redimensionar y recortar imágenes de manera profesional",
          "Aplicar estilos, efectos y ajustes de imagen",
          "Optimizar imágenes para presentaciones (resolución, compresión)",
          "Organizar y alinear imágenes efectivamente en diapositivas"
        ],
        secciones: [
          {
            id: 1,
            titulo: "Insertar Imágenes",
            contenido: `
              <div class="seccion-contenido">
                <h3>🖼️ Insertando Imágenes Profesionales</h3>
                
                <div class="fuentes-imagenes">
                  <h4>📁 Fuentes de Imágenes</h4>
                  
                  <div class="desde-archivo">
                    <h5>💾 Desde Archivo Local</h5>
                    <ul>
                      <li><strong>Método:</strong> Insertar > Imágenes > Este dispositivo</li>
                      <li><strong>Formatos compatibles:</strong> JPG, PNG, GIF, BMP, TIFF</li>
                      <li><strong>Atajo rápido:</strong> Arrastrar y soltar desde explorador</li>
                      <li><strong>Múltiples imágenes:</strong> Ctrl+clic para seleccionar varias</li>
                      <li><strong>Vista previa:</strong> Ver imagen antes de insertar</li>
                    </ul>
                  </div>

                  <div class="imagenes-online">
                    <h5>🌐 Imágenes Online</h5>
                    <ul>
                      <li><strong>Acceso:</strong> Insertar > Imágenes > Imágenes de archivo</li>
                      <li><strong>Bing Image Search:</strong> Búsqueda integrada</li>
                      <li><strong>Filtros útiles:</strong> Tamaño, tipo, color, licencia</li>
                      <li><strong>Derechos de uso:</strong> Creative Commons, uso comercial</li>
                      <li><strong>Calidad:</strong> Preferir imágenes de alta resolución</li>
                    </ul>
                  </div>

                  <div class="iconos-ilustraciones">
                    <h5">🎨 Iconos e Ilustraciones</h5>
                    <ul>
                      <li><strong>Biblioteca integrada:</strong> Insertar > Iconos</li>
                      <li><strong>Categorías:</strong> Negocios, tecnología, educación, etc.</li>
                      <li><strong>Formato vectorial:</strong> Escalable sin pérdida de calidad</li>
                      <li><strong>Personalización:</strong> Cambiar colores y estilos</li>
                      <li><strong>Consistencia:</strong> Mismo estilo para toda presentación</li>
                    </ul>
                  </div>

                  <div class="captura-pantalla">
                    <h5">📸 Captura de Pantalla</h5>
                    <ul>
                      <li><strong>Herramienta integrada:</strong> Insertar > Captura de pantalla</li>
                      <li><strong>Ventanas disponibles:</strong> Lista de aplicaciones abiertas</li>
                      <li><strong>Recorte de pantalla:</strong> Seleccionar área específica</li>
                      <li><strong>Automático:</strong> Se inserta directamente en diapositiva</li>
                      <li><strong>Ideal para:</strong> Tutoriales, demostraciones, ejemplos</li>
                    </ul>
                  </div>
                </div>

                <div class="consideraciones-insercion">
                  <h4">⚠️ Consideraciones al Insertar</h4>
                  
                  <div class="resolucion-calidad">
                    <h5">📊 Resolución y Calidad</h5>
                    <ul>
                      <li><strong>Resolución mínima:</strong> 1024x768 para proyección</li>
                      <li><strong>Resolución óptima:</strong> 1920x1080 (Full HD) o superior</li>
                      <li><strong>DPI recomendado:</strong> 150-300 DPI para impresión</li>
                      <li><strong>Tamaño de archivo:</strong> Equilibrar calidad y peso</li>
                    </ul>
                  </div>

                  <div class="formatos-recomendados">
                    <h5">📄 Formatos Recomendados</h5>
                    <ul>
                      <li><strong>JPEG:</strong> Fotografías, imágenes complejas</li>
                      <li><strong>PNG:</strong> Imágenes con transparencia, gráficos</li>
                      <li><strong>SVG:</strong> Iconos, logos vectoriales</li>
                      <li><strong>Evitar:</strong> BMP (muy pesado), GIF (baja calidad)</li>
                    </ul>
                  </div>

                  <div class="derechos-autor">
                    <h5">⚖️ Derechos de Autor</h5>
                    <ul>
                      <li><strong>Fuentes legales:</strong> Unsplash, Pexels, Pixabay</li>
                      <li><strong>Creative Commons:</strong> Verificar tipo de licencia</li>
                      <li><strong>Imágenes corporativas:</strong> Biblioteca interna empresa</li>
                      <li><strong>Stock photos:</strong> Shutterstock, Getty Images</li>
                      <li><strong>Atribución:</strong> Creditar cuando sea requerido</li>
                    </ul>
                  </div>
                </div>

                <div class="organizacion-imagenes">
                  <h4">🗂️ Organización de Imágenes</h4>
                  
                  <div class="estructura-archivos">
                    <h5">📁 Estructura de Archivos</h5>
                    <ul>
                      <li><strong>Carpeta dedicada:</strong> Folder "Imágenes" por presentación</li>
                      <li><strong>Nombres descriptivos:</strong> "logo-empresa.png", "grafico-ventas.jpg"</li>
                      <li><strong>Subcarpetas:</strong> Por tema o tipo de imagen</li>
                      <li><strong>Backup:</strong> Mantener originales en alta resolución</li>
                    </ul>
                  </div>

                  <div class="versionado">
                    <h5">🔄 Control de Versiones</h5>
                    <ul>
                      <li><strong>Originales:</strong> Mantener sin editar</li>
                      <li><strong>Editadas:</strong> Sufijo "_editada" o "_final"</li>
                      <li><strong>Tamaños:</strong> "_thumb", "_medium", "_large"</li>
                      <li><strong>Fechas:</strong> Incluir fecha en nombre si relevante</li>
                    </ul>
                  </div>
                </div>

                <div class="insercion-eficiente">
                  <h4">⚡ Técnicas de Inserción Eficiente</h4>
                  
                  <div class="metodos-rapidos">
                    <h5">🚀 Métodos Rápidos</h5>
                    <ul>
                      <li><strong>Arrastrar y soltar:</strong> Desde explorador de archivos</li>
                      <li><strong>Copiar y pegar:</strong> Desde navegador web o aplicaciones</li>
                      <li><strong>Doble clic:</strong> En marcador de posición de imagen</li>
                      <li><strong>Atajos:</strong> Alt+N+P+F para archivo local</li>
                    </ul>
                  </div>

                  <div class="insercion-multiple">
                    <h5">📚 Inserción Múltiple</h5>
                    <ul>
                      <li><strong>Selección múltiple:</strong> Ctrl+clic en explorador</li>
                      <li><strong>Álbum de fotos:</strong> Insertar > Álbum de fotos</li>
                      <li><strong>Distribución automática:</strong> PowerPoint organiza por diapositivas</li>
                      <li><strong>Configuración:</strong> Número de fotos por diapositiva</li>
                    </ul>
                  </div>
                </div>

                <div class="problemas-comunes">
                  <h4">🔧 Solución de Problemas Comunes</h4>
                  
                  <div class="imagen-no-aparece">
                    <h5">❌ Imagen No Aparece</h5>
                    <ul>
                      <li><strong>Verificar ruta:</strong> Archivo movido o eliminado</li>
                      <li><strong>Formato incompatible:</strong> Usar JPG o PNG</li>
                      <li><strong>Tamaño excesivo:</strong> Reducir resolución</li>
                      <li><strong>Corrupción:</strong> Probar abrir en otro programa</li>
                    </ul>
                  </div>

                  <div class="calidad-baja">
                    <h5">📉 Calidad Baja</h5>
                    <ul>
                      <li><strong>Resolución insuficiente:</strong> Buscar imagen de mayor calidad</li>
                      <li><strong>Compresión excesiva:</strong> Ajustar configuración PowerPoint</li>
                      <li><strong>Redimensionado incorrecto:</strong> Mantener proporciones</li>
                      <li><strong>Formato inadecuado:</strong> PNG para gráficos, JPG para fotos</li>
                    </ul>
                  </div>
                </div>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/insertar-imagenes.jpg",
              video: "/videos/teoria/fuentes-imagenes.mp4"
            },
            actividades: [
              'Insertar imágenes desde 3 fuentes diferentes (archivo, online, captura)',
              'Crear un álbum de fotos automático con 6 imágenes',
              'Insertar iconos vectoriales y personalizar sus colores',
              'Organizar una biblioteca de imágenes para un proyecto'
            ]
          },
          {
            id: 2,
            titulo: "Redimensionar y Recortar",
            contenido: `
              <div class="seccion-contenido">
                <h3">✂️ Redimensionado y Recorte Profesional</h3>
                
                <div class="redimensionado">
                  <h4">📏 Técnicas de Redimensionado</h4>
                  
                  <div class="mantener-proporciones">
                    <h5">🔒 Mantener Proporciones</h5>
                    <ul>
                      <li><strong>Método correcto:</strong> Arrastrar desde esquinas</li>
                      <li><strong>Con teclado:</strong> Mantener Shift mientras arrastra</li>
                      <li><strong>Evitar distorsión:</strong> Nunca arrastrar desde bordes laterales</li>
                      <li><strong>Verificación visual:</strong> La imagen debe verse natural</li>
                      <li><strong>Cuadro de diálogo:</strong> Formato > Tamaño para valores exactos</li>
                    </ul>
                  </div>

                  <div class="dimensiones-especificas">
                    <h5">📐 Dimensiones Específicas</h5>
                    <ul>
                      <li><strong>Acceso:</strong> Clic derecho > Formato de imagen > Tamaño</li>
                      <li><strong>Ancho y alto:</strong> Especificar en cm, pulgadas o píxeles</li>
                      <li><strong>Porcentaje de escala:</strong> Reducir/ampliar proporcionalmente</li>
                      <li><strong>Bloquear relación:</strong> Mantener checkbox activado</li>
                      <li><strong>Restablecer:</strong> Volver al tamaño original</li>
                    </ul>
                  </div>

                  <div class="redimensionado-lote">
                    <h5">📚 Redimensionado en Lote</h5>
                    <ul>
                      <li><strong>Selección múltiple:</strong> Ctrl+clic en varias imágenes</li>
                      <li><strong>Aplicar tamaño:</strong> Cambio afecta todas seleccionadas</li>
                      <li><strong>Consistencia:</strong> Mismo tamaño para imágenes similares</li>
                      <li><strong>Plantillas:</strong> Crear guidelines de tamaños estándar</li>
                    </ul>
                  </div>
                </div>

                <div class="herramientas-recorte">
                  <h4">✂️ Herramientas de Recorte</h4>
                  
                  <div class="recorte-basico">
                    <h5">🔲 Recorte Básico</h5>
                    <ul>
                      <li><strong>Activar:</strong> Seleccionar imagen > Formato > Recortar</li>
                      <li><strong>Ajustar:</strong> Arrastrar controladores negros</li>
                      <li><strong>Confirmar:</strong> Clic fuera de la imagen o Enter</li>
                      <li><strong>Cancelar:</strong> Esc antes de confirmar</li>
                      <li><strong>Preview:</strong> Área gris muestra lo que se eliminará</li>
                    </ul>
                  </div>

                  <div class="recorte-formas">
                    <h5">🔷 Recorte a Formas</h5>
                    <ul>
                      <li><strong>Acceso:</strong> Formato > Recortar > Recortar a forma</li>
                      <li><strong>Formas disponibles:</strong> Círculos, estrellas, flechas, etc.</li>
                      <li><strong>Efecto profesional:</strong> Imágenes con formas geométricas</li>
                      <li><strong>Ajuste posterior:</strong> Mover imagen dentro de forma</li>
                      <li><strong>Uso creativo:</strong> Avatars circulares, destacados especiales</li>
                    </ul>
                  </div>

                  <div class="recorte-aspecto">
                    <h5">📺 Recorte por Relación de Aspecto</h5>
                    <ul>
                      <li><strong>Proporciones estándar:</strong> 16:9, 4:3, 1:1 (cuadrado)</li>
                      <li><strong>Uso:</strong> Unificar proporciones de diferentes imágenes</li>
                      <li><strong>Pantalla completa:</strong> 16:9 para fondos de diapositiva</li>
                      <li><strong>Redes sociales:</strong> 1:1 para Instagram, 16:9 para YouTube</li>
                      <li><strong>Impresión:</strong> Proporciones específicas según papel</li>
                    </ul>
                  </div>

                  <div class="recorte-libre">
                    <h5">🎨 Recorte Libre</h5>
                    <ul>
                      <li><strong>Sin restricciones:</strong> Cualquier proporción deseada</li>
                      <li><strong>Enfoque creativo:</strong> Destacar elemento específico</li>
                      <li><strong>Composición:</strong> Regla de tercios, centrado</li>
                      <li><strong>Eliminación de elementos:</strong> Quitar distracciones</li>
                    </ul>
                  </div>
                </div>

                <div class="ajuste-posicion">
                  <h4">🎯 Ajuste y Posicionamiento</h4>
                  
                  <div class="mover-imagen-recortada">
                    <h5">↔️ Mover Imagen Dentro del Recorte</h5>
                    <ul>
                      <li><strong>Modo recorte activo:</strong> Imagen se puede mover</li>
                      <li><strong>Arrastrar:</strong> Reposicionar área visible</li>
                      <li><strong>Precisión:</strong> Usar teclas de flecha para movimientos finos</li>
                      <li><strong>Centrado:</strong> Asegurar elemento principal en centro</li>
                    </ul>
                  </div>

                  <div class="zoom-recorte">
                    <h5">🔍 Zoom en Recorte</h5>
                    <ul>
                      <li><strong>Ampliar área:</strong> Redimensionar manteniendo recorte</li>
                      <li><strong>Reducir área:</strong> Mostrar más contenido original</li>
                      <li><strong>Proporciones:</strong> Mantener Shift para conservar forma</li>
                      <li><strong>Calidad:</strong> No ampliar más allá de resolución original</li>
                    </ul>
                  </div>
                </div>

                <div class="mejores-practicas">
                  <h4">✅ Mejores Prácticas de Recorte</h4>
                  
                  <div class="composicion">
                    <h5">🎨 Principios de Composición</h5>
                    <ul>
                      <li><strong>Regla de tercios:</strong> Elementos importantes en intersecciones</li>
                      <li><strong>Espacio negativo:</strong> Dejar respiración alrededor del sujeto</li>
                      <li><strong>Líneas guía:</strong> Aprovechar líneas naturales de la imagen</li>
                      <li><strong>Punto focal:</strong> Centrar la atención en elemento principal</li>
                    </ul>
                  </div>

                  <div class="coherencia-visual">
                    <h5">👁️ Coherencia Visual</h5>
                    <ul>
                      <li><strong>Tamaños consistentes:</strong> Imágenes similares = tamaños similares</li>
                      <li><strong>Proporciones uniformes:</strong> Mismo ratio para series de imágenes</li>
                      <li><strong>Alineación:</strong> Usar guías para posicionamiento preciso</li>
                      <li><strong>Espaciado:</strong> Distancias iguales entre elementos</li>
                    </ul>
                  </div>

                  <div class="preservacion-calidad">
                    <h5">📊 Preservación de Calidad</h5>
                    <ul>
                      <li><strong>No ampliar excesivamente:</strong> Máximo 150% del tamaño original</li>
                      <li><strong>Recortes mínimos:</strong> Conservar máxima resolución posible</li>
                      <li><strong>Formato adecuado:</strong> PNG para gráficos, JPG para fotografías</li>
                      <li><strong>Backup:</strong> Guardar copia de imagen original</li>
                    </ul>
                  </div>
                </div>

                <div class="casos-uso-comunes">
                  <h4">🎯 Casos de Uso Comunes</h4>
                  
                  <div class="fotos-perfil">
                    <h5">👤 Fotos de Perfil</h5>
                    <ul>
                      <li><strong>Recorte cuadrado:</strong> 1:1 para avatars</li>
                      <li><strong>Centrar rostro:</strong> Cara en el centro del recorte</li>
                      <li><strong>Tamaño uniforme:</strong> Mismas dimensiones para todo el equipo</li>
                    </ul>
                  </div>

                  <div class="productos">
                    <h5">📦 Imágenes de Productos</h5>
                    <ul>
                      <li><strong>Fondo limpio:</strong> Eliminar elementos distractores</li>
                      <li><strong>Producto centrado:</strong> Enfoque principal</li>
                      <li><strong>Proporción consistente:</strong> Mismo ratio para catálogo</li>
                    </ul>
                  </div>

                  <div class="graficos-datos">
                    <h5">📊 Gráficos y Datos</h5>
                    <ul>
                      <li><strong>Eliminar bordes:</strong> Solo área útil del gráfico</li>
                      <li><strong>Mantener legibilidad:</strong> Conservar texto importante</li>
                      <li><strong>Proporciones adecuadas:</strong> Según tipo de gráfico</li>
                    </ul>
                  </div>
                </div>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/redimensionar-recortar.jpg",
              video: "/videos/teoria/tecnicas-recorte.mp4"
            },
            actividades: [
              'Redimensionar imágenes manteniendo proporciones correctas',
              'Recortar una imagen usando diferentes formas geométricas',
              'Aplicar recorte por relación de aspecto 16:9 para fondo',
              'Crear serie de fotos de perfil con tamaños y recortes uniformes'
            ]
          },
          {
            id: 3,
            titulo: "Estilos y Efectos de Imagen",
            contenido: `
              <div class="seccion-contenido">
                <h3">🎨 Estilos y Efectos Profesionales</h3>
                
                <div class="estilos-predefinidos">
                  <h4">🖼️ Estilos de Imagen Predefinidos</h4>
                  
                  <div class="galeria-estilos">
                    <h5">🎭 Galería de Estilos</h5>
                    <ul>
                      <li><strong>Acceso:</strong> Seleccionar imagen > Formato > Estilos de imagen</li>
                      <li><strong>Vista previa:</strong> Hover para ver efecto sin aplicar</li>
                      <li><strong>Aplicación:</strong> Clic para aplicar permanentemente</li>
                      <li><strong>Reversión:</strong> Aplicar estilo "Sin estilo" para quitar</li>
                      <li><strong>Combinación:</strong> Aplicar múltiples efectos</li>
                    </ul>
                  </div>

                  <div class="tipos-estilos">
                    <h5">🎨 Tipos de Estilos Comunes</h5>
                    
                    <div class="marcos-bordes">
                      <h6">🖼️ Marcos y Bordes</h6>
                      <ul>
                        <li><strong>Marco simple:</strong> Borde sólido de color</li>
                        <li><strong>Marco redondeado:</strong> Esquinas suavizadas</li>
                        <li><strong>Marco suave:</strong> Bordes difuminados</li>
                        <li><strong>Marco metálico:</strong> Apariencia 3D brillante</li>
                      </ul>
                    </div>

                    <div class="efectos-perspectiva">
                      <h6">📐 Efectos de Perspectiva</h6>
                      <ul>
                        <li><strong>Perspectiva diagonal:</strong> Imagen inclinada</li>
                        <li><strong>Reflexión:</strong> Efecto espejo inferior</li>
                        <li><strong>Rotación 3D:</strong> Imagen girada en espacio</li>
                        <li><strong>Curvatura:</strong> Imagen envolvente</li>
                      </ul>
                    </div>

                    <div class="sombras-resplandor">
                      <h6">💫 Sombras y Resplandor</h6>
                      <ul>
                        <li><strong>Sombra simple:</strong> Sombra hacia abajo/derecha</li>
                        <li><strong>Sombra perspectiva:</strong> Efecto profundidad</li>
                        <li><strong>Resplandor suave:</strong> Halo luminoso</li>
                        <li><strong>Resplandor exterior:</strong> Bordes iluminados</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="efectos-personalizados">
                  <h4">🔧 Efectos Personalizados</h4>
                  
                  <div class="configurar-sombra">
                    <h5">🌑 Configurar Sombra</h5>
                    <ul>
                      <li><strong>Acceso:</strong> Formato > Efectos de imagen > Sombra</li>
                      <li><strong>Dirección:</strong> Ángulo de proyección (0-360°)</li>
                      <li><strong>Distancia:</strong> Separación de la imagen</li>
                      <li><strong>Desenfoque:</strong> Suavidad del borde</li>
                      <li><strong>Color:</strong> Tono de la sombra</li>
                      <li><strong>Transparencia:</strong> Opacidad del efecto</li>
                    </ul>
                  </div>

                  <div class="configurar-resplandor">
                    <h5">✨ Configurar Resplandor</h5>
                    <ul>
                      <li><strong>Tamaño:</strong> Radio del efecto luminoso</li>
                      <li><strong>Color:</strong> Tono del resplandor</li>
                      <li><strong>Transparencia:</strong> Intensidad del efecto</li>
                      <li><strong>Variaciones:</strong> Resplandor interior vs exterior</li>
                    </ul>
                  </div>

                  <div class="bisel-relieve">
                    <h5">🔺 Bisel y Relieve</h5>
                    <ul>
                      <li><strong>Tipos de bisel:</strong> Suave, ángulo, convexo, cóncavo</li>
                      <li><strong>Profundidad:</strong> Intensidad del efecto 3D</li>
                      <li><strong>Dirección:</strong> Ángulo de iluminación</li>
                      <li><strong>Material:</strong> Metal, plástico, papel</li>
                      <li><strong>Iluminación:</strong> Tipo y intensidad de luz</li>
                    </ul>
                  </div>

                  <div class="reflexion">
                    <h5">🪞 Configurar Reflexión</h5>
                    <ul>
                      <li><strong>Variaciones:</strong> Completa, media, lejana</li>
                      <li><strong>Transparencia:</strong> Opacidad del reflejo</li>
                      <li><strong>Tamaño:</strong> Proporción del reflejo</li>
                      <li><strong>Desenfoque:</strong> Nitidez del reflejo</li>
                      <li><strong>Distancia:</strong> Separación de imagen original</li>
                    </ul>
                  </div>
                </div>

                <div class="ajustes-imagen">
                  <h4">⚙️ Ajustes de Imagen</h4>
                  
                  <div class="brillo-contraste">
                    <h5">🔆 Brillo y Contraste</h5>
                    <ul>
                      <li><strong>Brillo:</strong> -100% (negro) a +100% (blanco)</li>
                      <li><strong>Contraste:</strong> -100% (gris uniforme) a +100% (máximo contraste)</li>
                      <li><strong>Uso típico:</strong> Ajustar imágenes oscuras o lavadas</li>
                      <li><strong>Combinación:</strong> Aumentar ambos para mayor impacto</li>
                      <li><strong>Precaución:</strong> No sobreajustar para mantener naturalidad</li>
                    </ul>
                  </div>

                  <div class="saturacion-tono">
                    <h5">🌈 Saturación y Tono</h5>
                    <ul>
                      <li><strong>Saturación:</strong> Intensidad del color</li>
                      <li><strong>Tono:</strong> Matiz del color (rojizo, verdoso, etc.)</li>
                      <li><strong>Escala grises:</strong> Saturación -100% para blanco y negro</li>
                      <li><strong>Colores vivos:</strong> Aumentar saturación moderadamente</li>
                      <li><strong>Corrección:</strong> Ajustar tono para balance de blancos</li>
                    </ul>
                  </div>

                  <div class="ajustes-rapidos">
                    <h5">⚡ Ajustes Rápidos</h5>
                    <ul>
                      <li><strong>Acceso:</strong> Formato > Ajustar > Correcciones</li>
                      <li><strong>Presets:</strong> Combinaciones predefinidas</li>
                      <li><strong>Vista previa:</strong> Ver antes de aplicar</li>
                      <li><strong>Opciones disponibles:</strong></li>
                      <li>  • Brillo: +20%, +40%</li>
                      <li>  • Contraste: +20%, +40%</li>
                      <li>  • Combinaciones inteligentes</li>
                    </ul>
                  </div>
                </div>

                <div class="filtros-artisticos">
                  <h4">🎭 Filtros Artísticos</h4>
                  
                  <div class="filtros-color">
                    <h5">🎨 Filtros de Color</h5>
                    <ul>
                      <li><strong>Acceso:</strong> Formato > Ajustar > Color</li>
                      <li><strong>Saturación:</strong> Desde escala grises hasta super saturado</li>
                      <li><strong>Tono:</strong> Temperatura fría/cálida</li>
                      <li><strong>Recolorar:</strong> Cambiar paleta de colores completamente</li>
                    </ul>
                  </div>

                  <div class="efectos-especiales">
                    <h5">✨ Efectos Especiales</h5>
                    <ul>
                      <li><strong>Sepia:</strong> Tono vintage amarillo-marrón</li>
                      <li><strong>Monocromo:</strong> Un solo color dominante</li>
                      <li><strong>Lavado:</strong> Apariencia descolorida</li>
                      <li><strong>Duotono:</strong> Dos colores principales</li>
                    </ul>
                  </div>

                  <div class="transparencia">
                    <h5">👻 Transparencia</h5>
                    <ul>
                      <li><strong>Ajuste general:</strong> 0% (opaco) a 100% (invisible)</li>
                      <li><strong>Uso como fondo:</strong> 20-40% para fondos sutiles</li>
                      <li><strong>Superposición:</strong> Combinar múltiples imágenes</li>
                      <li><strong>Efecto marca de agua:</strong> 80-90% transparencia</li>
                    </ul>
                  </div>
                </div>

                <div class="combinacion-efectos">
                  <h4">🔗 Combinación de Efectos</h4>
                  
                  <div class="estrategias-combinacion">
                    <h5">🎯 Estrategias de Combinación</h5>
                    <ul>
                      <li><strong>Orden de aplicación:</strong> Ajustes básicos → Efectos → Estilos</li>
                      <li><strong>Moderación:</strong> Máximo 2-3 efectos por imagen</li>
                      <li><strong>Coherencia:</strong> Mismo tipo de efectos en serie</li>
                      <li><strong>Propósito:</strong> Cada efecto debe tener justificación</li>
                    </ul>
                  </div>

                  <div class="combinaciones-exitosas">
                    <h5">✅ Combinaciones Exitosas</h5>
                    <ul>
                      <li><strong>Corporativo:</strong> Sombra suave + Brillo +20%</li>
                      <li><strong>Moderno:</strong> Reflexión + Saturación alta</li>
                      <li><strong>Elegante:</strong> Marco redondeado + Resplandor suave</li>
                      <li><strong>Dinámico:</strong> Perspectiva + Sombra direccional</li>
                    </ul>
                  </div>
                </div>

                <div class="buenas-practicas">
                  <h4">✅ Buenas Prácticas</h4>
                  
                  <div class="uso-moderado">
                    <h5">⚖️ Uso Moderado</h5>
                    <ul>
                      <li><strong>Menos es más:</strong> Efectos sutiles son más profesionales</li>
                      <li><strong>Consistencia:</strong> Mismo estilo en toda la presentación</li>
                      <li><strong>Legibilidad:</strong> Efectos no deben obstaculizar comprensión</li>
                      <li><strong>Audiencia:</strong> Formal = efectos mínimos, Creativo = más libertad</li>
                    </ul>
                  </div>

                  <div class="rendimiento">
                    <h5">⚡ Consideraciones de Rendimiento</h5>
                    <ul>
                      <li><strong>Tamaño archivo:</strong> Efectos complejos aumentan peso</li>
                      <li><strong>Renderizado:</strong> Múltiples efectos ralentizan presentación</li>
                      <li><strong>Compatibilidad:</strong> Efectos avanzados pueden no verse en versiones antiguas</li>
                      <li><strong>Exportación:</strong> Verificar calidad en PDF/imagen</li>
                    </ul>
                  </div>
                </div>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/estilos-efectos.jpg",
              video: "/videos/teoria/efectos-profesionales.mp4"
            },
            actividades: [
              'Aplicar 5 estilos predefinidos diferentes a una imagen',
              'Crear sombra personalizada con configuración específica',
              'Combinar efectos de reflexión y transparencia',
              'Diseñar conjunto coherente de imágenes con mismo estilo'
            ]
          },
          {
            id: 4,
            titulo: "Optimización y Compresión",
            contenido: `
              <div class="seccion-contenido">
                <h3">⚡ Optimización Avanzada de Imágenes</h3>
                
                <div class="compresion-imagenes">
                  <h4">🗜️ Compresión de Imágenes</h4>
                  
                  <div class="herramienta-compresion">
                    <h5">🔧 Herramienta de Compresión PowerPoint</h5>
                    <ul>
                      <li><strong>Acceso:</strong> Archivo > Comprimir imágenes</li>
                      <li><strong>Opciones de calidad:</strong></li>
                      <li>  • Alta fidelidad: Máxima calidad (mínima compresión)</li>
                      <li>  • HD: 1920x1080 - Balance calidad/tamaño</li>
                      <li>  • Impresión: 220 DPI - Óptimo para impresión</li>
                      <li>  • Web: 150 DPI - Óptimo para pantalla</li>
                      <li>  • E-mail: 96 DPI - Mínimo tamaño archivo</li>
                    </ul>
                  </div>

                  <div class="configuracion-avanzada">
                    <h5">⚙️ Configuración Avanzada</h5>
                    <ul>
                      <li><strong>Aplicar a:</strong> Solo imagen seleccionada vs todas las imágenes</li>
                      <li><strong>Eliminar áreas recortadas:</strong> Reduce tamaño significativamente</li>
                      <li><strong>Configuración por defecto:</strong> Establecer calidad predeterminada</li>
                      <li><strong>Backup automático:</strong> PowerPoint guarda versión original</li>
                    </ul>
                  </div>

                  <div class="cuando-comprimir">
                    <h5">🎯 Cuándo Comprimir</h5>
                    <ul>
                      <li><strong>Archivo grande:</strong> >50MB necesita compresión</li>
                      <li><strong>Envío por email:</strong> Límites de tamaño adjunto</li>
                      <li><strong>Almacenamiento:</strong> Optimizar espacio en disco</li>
                      <li><strong>Velocidad:</strong> Presentaciones más ágiles</li>
                      <li><strong>Web/sharepoint:</strong> Carga más rápida</li>
                    </ul>
                  </div>
                </div>

                <div class="resolucion-optima">
                  <h4">📐 Resolución Óptima</h4>
                  
                  <div class="resolucion-por-uso">
                    <h5">🎯 Resolución por Tipo de Uso</h5>
                    
                    <div class="presentacion-pantalla">
                      <h6">💻 Presentación en Pantalla</h6>
                      <ul>
                        <li><strong>Resolución:</strong> 1920x1080 (Full HD)</li>
                        <li><strong>DPI:</strong> 96-150 DPI suficiente</li>
                        <li><strong>Formato:</strong> JPG para fotos, PNG para gráficos</li>
                        <li><strong>Tamaño máximo:</strong> 2-3MB por imagen</li>
                      </ul>
                    </div>

                    <div class="impresion">
                      <h6">🖨️ Impresión</h6>
                      <ul>
                        <li><strong>DPI mínimo:</strong> 300 DPI para calidad profesional</li>
                        <li><strong>DPI recomendado:</strong> 600 DPI para impresión high-end</li>
                        <li><strong>Formato:</strong> PNG o TIFF para máxima calidad</li>
                        <li><strong>Tamaño archivo:</strong> 10-20MB por imagen aceptable</li>
                      </ul>
                    </div>

                    <div class="web-compartir">
                      <h6">🌐 Web y Compartir</h6>
                      <ul>
                        <li><strong>Resolución:</strong> 1280x720 máximo</li>
                        <li><strong>DPI:</strong> 72-96 DPI</li>
                        <li><strong>Formato:</strong> JPG optimizado</li>
                        <li><strong>Tamaño:</strong> <500KB por imagen</li>
                      </ul>
                    </div>
                  </div>

                  <div class="calcular-resolucion">
                    <h5">🧮 Calcular Resolución Necesaria</h5>
                    <ul>
                      <li><strong>Fórmula:</strong> Tamaño impresión × DPI = Píxeles necesarios</li>
                      <li><strong>Ejemplo:</strong> Foto 10cm × 300 DPI = 1181 píxeles</li>
                      <li><strong>Regla práctica:</strong> Ampliar máximo 150% sin pérdida</li>
                      <li><strong>Verificar:</strong> Zoom 100% en PowerPoint para ver calidad real</li>
                    </ul>
                  </div>
                </div>

                <div class="formatos-archivo">
                  <h4">📄 Formatos de Archivo Óptimos</h4>
                  
                  <div class="comparacion-formatos">
                    <h5">📊 Comparación de Formatos</h5>
                    
                    <div class="jpeg">
                      <h6">📷 JPEG/JPG</h6>
                      <ul>
                        <li><strong>Mejor para:</strong> Fotografías, imágenes complejas</li>
                        <li><strong>Ventajas:</strong> Archivos pequeños, amplio soporte</li>
                        <li><strong>Desventajas:</strong> Compresión con pérdida</li>
                        <li><strong>Transparencia:</strong> No soporta</li>
                        <li><strong>Uso típico:</strong> 80% de las imágenes fotográficas</li>
                      </ul>
                    </div>

                    <div class="png">
                      <h6">🎨 PNG</h6>
                      <ul>
                        <li><strong>Mejor para:</strong> Gráficos, logos, imágenes con transparencia</li>
                        <li><strong>Ventajas:</strong> Sin pérdida, transparencia, calidad perfecta</li>
                        <li><strong>Desventajas:</strong> Archivos más grandes</li>
                        <li><strong>Variantes:</strong> PNG-8 (256 colores), PNG-24 (millones)</li>
                        <li><strong>Uso típico:</strong> Logos, iconos, gráficos con texto</li>
                      </ul>
                    </div>

                    <div class="svg">
                      <h6">📐 SVG</h6>
                      <ul>
                        <li><strong>Mejor para:</strong> Iconos, logos vectoriales</li>
                        <li><strong>Ventajas:</strong> Escalable infinitamente, archivos pequeños</li>
                        <li><strong>Limitaciones:</strong> No para fotografías</li>
                        <li><strong>Edición:</strong> Se puede modificar color y forma</li>
                        <li><strong>Compatibilidad:</strong> PowerPoint 2016+ </li>
                      </ul>
                    </div>

                    <div class="gif">
                      <h6">🎞️ GIF</h6>
                      <ul>
                        <li><strong>Mejor para:</strong> Animaciones simples</li>
                        <li><strong>Limitaciones:</strong> 256 colores máximo</li>
                        <li><strong>Uso:</strong> Muy limitado en presentaciones profesionales</li>
                        <li><strong>Alternativa:</strong> PNG para imágenes estáticas</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="optimizacion-rendimiento">
                  <h4">⚡ Optimización de Rendimiento</h4>
                  
                  <div class="estrategias-optimizacion">
                    <h5">🚀 Estrategias de Optimización</h5>
                    <ul>
                      <li><strong>Tamaño total:</strong> Mantener presentación <100MB</li>
                      <li><strong>Número de imágenes:</strong> Máximo 50 imágenes por presentación</li>
                      <li><strong>Resolución uniforme:</strong> Evitar mezclar resoluciones muy diferentes</li>
                      <li><strong>Compresión inteligente:</strong> Diferentes niveles según importancia</li>
                    </ul>
                  </div>

                  <div class="limpieza-archivos">
                    <h5">🧹 Limpieza de Archivos</h5>
                    <ul>
                      <li><strong>Eliminar imágenes ocultas:</strong> Archivo > Inspeccionar documento</li>
                      <li><strong>Quitar metadatos:</strong> Información personal y propiedades</li>
                      <li><strong>Comprimir medios:</strong> Archivo > Información > Comprimir multimedia</li>
                      <li><strong>Eliminar versiones:</strong> Descartar borradores anteriores</li>
                    </ul>
                  </div>
                </div>

                <div class="mejores-practicas">
                  <h4">✅ Mejores Prácticas de Optimización</h4>
                  
                  <div class="flujo-trabajo">
                    <h5">🔄 Flujo de Trabajo Recomendado</h5>
                    <ol>
                      <li><strong>Planificar:</strong> Definir uso final (pantalla/impresión)</li>
                      <li><strong>Seleccionar:</strong> Formato adecuado desde el inicio</li>
                      <li><strong>Insertar:</strong> En resolución apropiada</li>
                      <li><strong>Editar:</strong> Recortes y ajustes necesarios</li>
                      <li><strong>Comprimir:</strong> Al final del proceso</li>
                      <li><strong>Probar:</strong> Verificar calidad en diferentes dispositivos</li>
                    </ol>
                  </div>

                  <div class="tips-profesionales">
                    <h5">💡 Tips Profesionales</h5>
                    <ul>
                      <li><strong>Backup original:</strong> Siempre mantener copia sin comprimir</li>
                      <li><strong>Compresión por lotes:</strong> Seleccionar múltiples imágenes</li>
                      <li><strong>Probar diferentes niveles:</strong> Encontrar balance calidad/tamaño</li>
                      <li><strong>Verificar compatibilidad:</strong> Abrir en diferentes versiones PowerPoint</li>
                      <li><strong>Exportar separado:</strong> Versión web vs presentación</li>
                    </ul>
                  </div>

                  <div class="herramientas-externas">
                    <h5">🔧 Herramientas Externas</h5>
                    <ul>
                      <li><strong>TinyPNG:</strong> Compresión PNG sin pérdida visible</li>
                      <li><strong>JPEGmini:</strong> Compresión JPEG inteligente</li>
                      <li><strong>RIOT:</strong> Optimizador radical de imágenes</li>
                      <li><strong>Adobe Photoshop:</strong> "Guardar para web" con preview</li>
                      <li><strong>GIMP:</strong> Alternativa gratuita para optimización</li>
                    </ul>
                  </div>
                </div>

                <div class="solucion-problemas">
                  <h4">🔧 Solución de Problemas Comunes</h4>
                  
                  <div class="imagen-pixelada">
                    <h5">👾 Imagen Pixelada</h5>
                    <ul>
                      <li><strong>Causa:</strong> Resolución insuficiente o sobre-ampliación</li>
                      <li><strong>Solución:</strong> Buscar imagen de mayor resolución</li>
                      <li><strong>Alternativa:</strong> Reducir tamaño de visualización</li>
                      <li><strong>Prevención:</strong> Verificar resolución antes de insertar</li>
                    </ul>
                  </div>

                  <div class="archivo-pesado">
                    <h5">⚖️ Archivo Muy Pesado</h5>
                    <ul>
                      <li><strong>Diagnóstico:</strong> Identificar imágenes que más peso aportan</li>
                      <li><strong>Solución progresiva:</strong> Comprimir de mayor a menor peso</li>
                      <li><strong>Alternativa:</strong> Vincular imágenes en lugar de incrustar</li>
                    </ul>
                  </div>

                  <div class="carga-lenta">
                    <h5">🐌 Carga Lenta</h5>
                    <ul>
                      <li><strong>Reducir efectos:</strong> Eliminar efectos complejos innecesarios</li>
                      <li><strong>Optimizar transiciones:</strong> Entre diapositivas con muchas imágenes</li>
                      <li><strong>Dividir presentación:</strong> Crear secciones más pequeñas</li>
                    </ul>
                  </div>
                </div>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/optimizacion-imagenes.jpg",
              video: "/videos/teoria/compresion-avanzada.mp4"
            },
            actividades: [
              'Comprimir una presentación pesada usando diferentes niveles de calidad',
              'Comparar formatos JPG vs PNG para diferentes tipos de imágenes',
              'Optimizar una presentación para envío por email (<10MB)',
              'Crear versiones de una misma presentación para pantalla e impresión'
            ]
          }
        ],
        recursos: {
          documentos: [
            {
              titulo: "Guía Completa de Gestión de Imágenes",
              tipo: "PDF",
              url: "/recursos/powerpoint/gestion-imagenes-completa.pdf"
            },
            {
              titulo: "Manual de Optimización y Compresión",
              tipo: "PDF",
              url: "/recursos/powerpoint/optimizacion-imagenes.pdf"
            },
            {
              titulo: "Plantillas de Efectos Profesionales",
              tipo: "ZIP",
              url: "/recursos/powerpoint/efectos-profesionales.zip"
            }
          ],
          videos: [
            {
              titulo: "Inserción y Gestión de Imágenes",
              duracion: "22 min",
              url: "/videos/insercion-imagenes-completo.mp4"
            },
            {
              titulo: "Técnicas de Recorte y Redimensionado",
              duracion: "18 min",
              url: "/videos/recorte-profesional.mp4"
            },
            {
              titulo: "Efectos y Estilos Avanzados",
              duracion: "25 min",
              url: "/videos/efectos-avanzados.mp4"
            },
            {
              titulo: "Optimización para Rendimiento",
              duracion: "15 min",
              url: "/videos/optimizacion-rendimiento.mp4"
            }
          ],
          enlaces: [
            {
              titulo: "Insertar Imágenes - Guía Oficial Microsoft",
              url: "https://support.microsoft.com/es-es/office/insertar-imágenes"
            },
            {
              titulo: "Comprimir Imágenes en Office",
              url: "https://support.microsoft.com/es-es/office/reducir-el-tamaño-de-archivo-de-una-imagen"
            },
            {
              titulo: "Mejores Prácticas de Imágenes",
              url: "https://support.microsoft.com/es-es/office/optimizar-imágenes-para-la-web"
            }
          ]
        },
        evaluacion: {
          preRequisitos: ["Tema 1: Primeros pasos", "Tema 2: Vistas y diapositivas", "Tema 3: Formato de texto"],
          criterios: [
            "Insertar imágenes desde múltiples fuentes de manera eficiente",
            "Redimensionar y recortar imágenes manteniendo calidad profesional",
            "Aplicar estilos y efectos apropiados según contexto",
            "Optimizar imágenes para diferentes propósitos (pantalla, web, impresión)",
            "Gestionar archivos de imagen de manera organizada",
            "Resolver problemas comunes de calidad y rendimiento"
          ],
          tiempoEstimado: "35 minutos"
        }
      },
      '5': {
        titulo: "Gráficos y elementos visuales",
        duracion: "30-38 minutos",
        objetivos: [
          "Crear gráficos SmartArt para organizar información visualmente",
          "Insertar y personalizar gráficos de datos (columnas, barras, circular)",
          "Diseñar tablas profesionales con formato avanzado",
          "Usar formas y líneas para crear diagramas personalizados",
          "Combinar elementos visuales para presentaciones impactantes"
        ],
        secciones: [
          {
            id: 1,
            titulo: "SmartArt - Organización Visual",
            contenido: `
              <div class="seccion-contenido">
                <h3>🎨 SmartArt: Comunicación Visual Efectiva</h3>
                
                <div class="tipos-smartart">
                  <h4>📊 Categorías Principales</h4>
                  
                  <div class="categoria-lista">
                    <h5>📝 Lista</h5>
                    <ul>
                      <li><strong>Uso:</strong> Información no secuencial, puntos clave</li>
                      <li><strong>Ejemplos:</strong> Lista básica, lista con imágenes, lista vertical</li>
                      <li><strong>Ideal para:</strong> Características, beneficios, equipos</li>
                    </ul>
                  </div>

                  <div class="categoria-proceso">
                    <h5>⚡ Proceso</h5>
                    <ul>
                      <li><strong>Uso:</strong> Flujos secuenciales, pasos ordenados</li>
                      <li><strong>Ejemplos:</strong> Proceso básico, proceso circular, cronología</li>
                      <li><strong>Ideal para:</strong> Procedimientos, workflows, timelines</li>
                    </ul>
                  </div>

                  <div class="categoria-ciclo">
                    <h5>🔄 Ciclo</h5>
                    <ul>
                      <li><strong>Uso:</strong> Procesos continuos, sin inicio/fin definido</li>
                      <li><strong>Ejemplos:</strong> Ciclo básico, ciclo radial</li>
                      <li><strong>Ideal para:</strong> Mejora continua, ciclos naturales</li>
                    </ul>
                  </div>

                  <div class="categoria-jerarquia">
                    <h5>🏢 Jerarquía</h5>
                    <ul>
                      <li><strong>Uso:</strong> Estructuras organizacionales, clasificaciones</li>
                      <li><strong>Ejemplos:</strong> Organigrama, jerarquía horizontal</li>
                      <li><strong>Ideal para:</strong> Org charts, taxonomías, decisiones</li>
                    </ul>
                  </div>

                  <div class="categoria-relacion">
                    <h5>🔗 Relación</h5>
                    <ul>
                      <li><strong>Uso:</strong> Conexiones entre conceptos</li>
                      <li><strong>Ejemplos:</strong> Balance, objetivo radial, Venn</li>
                      <li><strong>Ideal para:</strong> Comparaciones, intersecciones</li>
                    </ul>
                  </div>

                  <div class="categoria-matriz">
                    <h5>⬜ Matriz</h5>
                    <ul>
                      <li><strong>Uso:</strong> Relaciones cuadráticas</li>
                      <li><strong>Ejemplos:</strong> Matriz básica, matriz de títulos</li>
                      <li><strong>Ideal para:</strong> Análisis FODA, comparaciones 2x2</li>
                    </ul>
                  </div>

                  <div class="categoria-piramide">
                    <h5>🔺 Pirámide</h5>
                    <ul>
                      <li><strong>Uso:</strong> Relaciones proporcionales, niveles</li>
                      <li><strong>Ejemplos:</strong> Pirámide básica, pirámide invertida</li>
                      <li><strong>Ideal para:</strong> Jerarquías de necesidades, prioridades</li>
                    </ul>
                  </div>
                </div>

                <div class="insertar-smartart">
                  <h4>➕ Insertar y Configurar SmartArt</h4>
                  <ul>
                    <li><strong>Insertar:</strong> Insertar > SmartArt > Elegir categoría</li>
                    <li><strong>Agregar elementos:</strong> Panel de texto o botón [+]</li>
                    <li><strong>Eliminar elementos:</strong> Seleccionar + Delete</li>
                    <li><strong>Reordenar:</strong> Arrastrar en panel de texto</li>
                    <li><strong>Cambiar tipo:</strong> Diseño > Más diseños</li>
                  </ul>
                </div>

                <div class="personalizar-smartart">
                  <h4">🎨 Personalización Avanzada</h4>
                  <ul>
                    <li><strong>Colores:</strong> Diseño > Cambiar colores (paletas temáticas)</li>
                    <li><strong>Estilos:</strong> Diseño > Estilos SmartArt (2D, 3D, efectos)</li>
                    <li><strong>Formato individual:</strong> Clic derecho > Formato de forma</li>
                    <li><strong>Fuentes:</strong> Inicio > Formato de fuente en elementos</li>
                    <li><strong>Tamaño total:</strong> Arrastrar controladores del conjunto</li>
                  </ul>
                </div>

                <div class="mejores-practicas-smartart">
                  <h4">✅ Mejores Prácticas</h4>
                  <ul>
                    <li><strong>Contenido conciso:</strong> Máximo 7±2 elementos</li>
                    <li><strong>Texto breve:</strong> 2-3 palabras por elemento</li>
                    <li><strong>Coherencia visual:</strong> Mismo estilo en presentación</li>
                    <li><strong>Propósito claro:</strong> Elegir tipo según mensaje</li>
                    <li><strong>Legibilidad:</strong> Contraste adecuado texto/fondo</li>
                  </ul>
                </div>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/smartart-tipos.jpg",
              video: "/videos/teoria/smartart-efectivo.mp4"
            },
            actividades: [
              'Crear organigrama de equipo usando SmartArt Jerarquía',
              'Diseñar proceso de 5 pasos con SmartArt Proceso',
              'Personalizar colores y estilos de SmartArt existente',
              'Convertir lista de texto en SmartArt visual'
            ]
          },
          {
            id: 2,
            titulo: "Gráficos de Datos",
            contenido: `
              <div class="seccion-contenido">
                <h3">📊 Gráficos de Datos Profesionales</h3>
                
                <div class="tipos-graficos">
                  <h4">📈 Tipos de Gráficos Principales</h4>
                  
                  <div class="grafico-columnas">
                    <h5">📊 Gráficos de Columnas</h5>
                    <ul>
                      <li><strong>Uso:</strong> Comparar valores entre categorías</li>
                      <li><strong>Variantes:</strong> Agrupadas, apiladas, 100% apiladas</li>
                      <li><strong>Ideal para:</strong> Ventas por región, resultados por período</li>
                      <li><strong>Límite:</strong> Máximo 12 categorías para legibilidad</li>
                    </ul>
                  </div>

                  <div class="grafico-barras">
                    <h5">📋 Gráficos de Barras</h5>
                    <ul>
                      <li><strong>Uso:</strong> Como columnas pero horizontal</li>
                      <li><strong>Ventaja:</strong> Mejor para etiquetas largas</li>
                      <li><strong>Ideal para:</strong> Rankings, comparaciones con nombres largos</li>
                    </ul>
                  </div>

                  <div class="grafico-lineas">
                    <h5">📈 Gráficos de Líneas</h5>
                    <ul>
                      <li><strong>Uso:</strong> Tendencias a lo largo del tiempo</li>
                      <li><strong>Variantes:</strong> Línea simple, múltiples líneas, con marcadores</li>
                      <li><strong>Ideal para:</strong> Evolución temporal, tendencias</li>
                    </ul>
                  </div>

                  <div class="grafico-circular">
                    <h5">🥧 Gráficos Circulares (Pie)</h5>
                    <ul>
                      <li><strong>Uso:</strong> Partes de un todo (100%)</li>
                      <li><strong>Límite:</strong> Máximo 7 segmentos</li>
                      <li><strong>Variante:</strong> Dona (anillo) para diseño moderno</li>
                      <li><strong>Ideal para:</strong> Market share, composición presupuesto</li>
                    </ul>
                  </div>

                  <div class="grafico-area">
                    <h5">🏔️ Gráficos de Área</h5>
                    <ul>
                      <li><strong>Uso:</strong> Volumen a lo largo del tiempo</li>
                      <li><strong>Variantes:</strong> Área simple, apilada</li>
                      <li><strong>Ideal para:</strong> Contribuciones acumulativas</li>
                    </ul>
                  </div>

                  <div class="grafico-dispersion">
                    <h5">⚫ Gráficos de Dispersión</h5>
                    <ul>
                      <li><strong>Uso:</strong> Relación entre dos variables</li>
                      <li><strong>Análisis:</strong> Correlaciones, patrones</li>
                      <li><strong>Ideal para:</strong> Análisis científico, correlaciones</li>
                    </ul>
                  </div>
                </div>

                <div class="insertar-grafico">
                  <h4">➕ Insertar Gráfico</h4>
                  <ul>
                    <li><strong>Método 1:</strong> Insertar > Gráfico > Seleccionar tipo</li>
                    <li><strong>Método 2:</strong> Doble clic en marcador de posición</li>
                    <li><strong>Excel automático:</strong> Se abre hoja datos integrada</li>
                    <li><strong>Datos ejemplo:</strong> Reemplazar con datos reales</li>
                    <li><strong>Cerrar Excel:</strong> Gráfico se actualiza automáticamente</li>
                  </ul>
                </div>

                <div class="editar-datos">
                  <h4">✏️ Editar Datos del Gráfico</h4>
                  <ul>
                    <li><strong>Reabrir datos:</strong> Clic derecho > Editar datos</li>
                    <li><strong>Agregar series:</strong> Nuevas columnas en Excel</li>
                    <li><strong>Cambiar rango:</strong> Seleccionar celdas en Excel</li>
                    <li><strong>Actualización:</strong> Automática al cerrar Excel</li>
                    <li><strong>Vincular Excel externo:</strong> Datos desde archivo existente</li>
                  </ul>
                </div>

                <div class="personalizar-grafico">
                  <h4">🎨 Personalización de Gráficos</h4>
                  
                  <div class="elementos-grafico">
                    <h5">🧩 Elementos del Gráfico</h5>
                    <ul>
                      <li><strong>Título:</strong> Clic en gráfico > [+] > Título del gráfico</li>
                      <li><strong>Leyenda:</strong> Posición (derecha, abajo, arriba)</li>
                      <li><strong>Etiquetas datos:</strong> Mostrar valores en barras/puntos</li>
                      <li><strong>Ejes:</strong> Títulos para X e Y</li>
                      <li><strong>Líneas cuadrícula:</strong> Horizontal/vertical</li>
                      <li><strong>Tabla datos:</strong> Mostrar datos debajo del gráfico</li>
                    </ul>
                  </div>

                  <div class="estilos-grafico">
                    <h5">🎨 Estilos y Colores</h5>
                    <ul>
                      <li><strong>Estilos rápidos:</strong> Diseño > Estilos de gráfico</li>
                      <li><strong>Cambiar colores:</strong> Diseño > Cambiar colores</li>
                      <li><strong>Formato individual:</strong> Clic derecho en elemento</li>
                      <li><strong>Coherencia:</strong> Usar colores corporativos</li>
                    </ul>
                  </div>
                </div>

                <div class="mejores-practicas-graficos">
                  <h4">✅ Mejores Prácticas</h4>
                  <ul>
                    <li><strong>Tipo apropiado:</strong> Elegir según tipo de datos</li>
                    <li><strong>Simplicidad:</strong> Evitar efectos 3D innecesarios</li>
                    <li><strong>Escalas:</strong> Comenzar en cero para barras/columnas</li>
                    <li><strong>Colores:</strong> Máximo 5-6 colores diferentes</li>
                    <li><strong>Legibilidad:</strong> Fuentes grandes, contraste alto</li>
                    <li><strong>Título descriptivo:</strong> Explicar qué muestra el gráfico</li>
                  </ul>
                </div>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/graficos-datos.jpg",
              video: "/videos/teoria/graficos-profesionales.mp4"
            },
            actividades: [
              'Crear gráfico de columnas con datos de ventas trimestrales',
              'Diseñar gráfico circular mostrando distribución presupuestaria',
              'Personalizar colores y estilos de gráfico existente',
              'Agregar elementos profesionales (título, leyenda, etiquetas)'
            ]
          },
          {
            id: 3,
            titulo: "Tablas Profesionales",
            contenido: `
              <div class="seccion-contenido">
                <h3">📋 Diseño de Tablas Efectivas</h3>
                
                <div class="insertar-tabla">
                  <h4">➕ Insertar Tablas</h4>
                  <ul>
                    <li><strong>Método rápido:</strong> Insertar > Tabla > Cuadrícula visual</li>
                    <li><strong>Insertar tabla:</strong> Especificar filas y columnas</li>
                    <li><strong>Dibujar tabla:</strong> Crear celdas irregulares</li>
                    <li><strong>Hoja Excel:</strong> Tabla con funcionalidades avanzadas</li>
                    <li><strong>Tabla rápida:</strong> Plantillas prediseñadas</li>
                  </ul>
                </div>

                <div class="estructura-tabla">
                  <h4">🏗️ Modificar Estructura</h4>
                  
                  <div class="agregar-elementos">
                    <h5">➕ Agregar Filas/Columnas</h5>
                    <ul>
                      <li><strong>Fila arriba:</strong> Clic derecho > Insertar > Filas arriba</li>
                      <li><strong>Fila abajo:</strong> Clic derecho > Insertar > Filas abajo</li>
                      <li><strong>Columna izquierda/derecha:</strong> Similar proceso</li>
                      <li><strong>Múltiples:</strong> Seleccionar varias + insertar</li>
                    </ul>
                  </div>

                  <div class="eliminar-elementos">
                    <h5">➖ Eliminar Filas/Columnas</h5>
                    <ul>
                      <li><strong>Seleccionar:</strong> Clic en borde de fila/columna</li>
                      <li><strong>Eliminar:</strong> Clic derecho > Eliminar</li>
                      <li><strong>Delete vs Eliminar:</strong> Delete borra contenido, Eliminar quita estructura</li>
                    </ul>
                  </div>

                  <div class="combinar-dividir">
                    <h5">🔗 Combinar y Dividir Celdas</h5>
                    <ul>
                      <li><strong>Combinar:</strong> Seleccionar celdas > Presentación > Combinar celdas</li>
                      <li><strong>Dividir:</strong> Seleccionar celda > Dividir celdas</li>
                      <li><strong>Uso típico:</strong> Encabezados que abarcan múltiples columnas</li>
                    </ul>
                  </div>
                </div>

                <div class="formato-tabla">
                  <h4">🎨 Formato y Diseño</h4>
                  
                  <div class="estilos-tabla">
                    <h5">🎭 Estilos de Tabla</h5>
                    <ul>
                      <li><strong>Estilos rápidos:</strong> Diseño > Estilos de tabla</li>
                      <li><strong>Opciones estilo:</strong> Fila encabezado, fila total, filas con bandas</li>
                      <li><strong>Colores personalizados:</strong> Crear variación propia</li>
                      <li><strong>Sin estilo:</strong> Tabla básica sin formato</li>
                    </ul>
                  </div>

                  <div class="formato-celdas">
                    <h5">🔲 Formato de Celdas</h5>
                    <ul>
                      <li><strong>Bordes:</strong> Estilo, grosor, color de líneas</li>
                      <li><strong>Relleno:</strong> Color de fondo de celdas</li>
                      <li><strong>Alineación:</strong> Horizontal y vertical del texto</li>
                      <li><strong>Márgenes:</strong> Espaciado interno de celdas</li>
                    </ul>
                  </div>

                  <div class="texto-tabla">
                    <h5">📝 Formato de Texto</h5>
                    <ul>
                      <li><strong>Encabezados:</strong> Negrita, color diferente</li>
                      <li><strong>Datos:</strong> Fuente legible, tamaño apropiado</li>
                      <li><strong>Números:</strong> Alineación derecha</li>
                      <li><strong>Texto:</strong> Alineación izquierda</li>
                    </ul>
                  </div>
                </div>

                <div class="tabla-efectiva">
                  <h4">✅ Diseño de Tabla Efectiva</h4>
                  
                  <div class="organizacion-contenido">
                    <h5">📊 Organización del Contenido</h5>
                    <ul>
                      <li><strong>Encabezados claros:</strong> Títulos descriptivos</li>
                      <li><strong>Orden lógico:</strong> Filas por importancia o alfabético</li>
                      <li><strong>Agrupación:</strong> Categorías relacionadas juntas</li>
                      <li><strong>Totales:</strong> Al final, claramente marcados</li>
                    </ul>
                  </div>

                  <div class="legibilidad">
                    <h5">👁️ Optimizar Legibilidad</h5>
                    <ul>
                      <li><strong>Filas alternadas:</strong> Bandas para facilitar lectura</li>
                      <li><strong>Espaciado:</strong> Suficiente espacio en celdas</li>
                      <li><strong>Contraste:</strong> Texto oscuro sobre fondo claro</li>
                      <li><strong>Tamaño apropiado:</strong> Visible desde audiencia</li>
                    </ul>
                  </div>

                  <div class="casos-uso">
                    <h5">🎯 Casos de Uso Comunes</h5>
                    <ul>
                      <li><strong>Comparaciones:</strong> Productos, servicios, opciones</li>
                      <li><strong>Datos financieros:</strong> Presupuestos, resultados</li>
                      <li><strong>Cronogramas:</strong> Proyectos, eventos</li>
                      <li><strong>Listas organizadas:</strong> Contactos, recursos</li>
                    </ul>
                  </div>
                </div>

                <div class="tabla-vs-alternativas">
                  <h4">🤔 Tabla vs Alternativas</h4>
                  <ul>
                    <li><strong>Usar tabla cuando:</strong> Datos estructurados, comparaciones precisas</li>
                    <li><strong>Usar gráfico cuando:</strong> Tendencias, proporciones visuales</li>
                    <li><strong>Usar SmartArt cuando:</strong> Relaciones, procesos</li>
                    <li><strong>Usar lista cuando:</strong> Información simple, sin comparación</li>
                  </ul>
                </div>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/tablas-profesionales.jpg",
              video: "/videos/teoria/diseño-tablas.mp4"
            },
            actividades: [
              'Crear tabla comparativa de productos con 5 características',
              'Diseñar cronograma de proyecto usando tabla',
              'Aplicar formato profesional con bandas y colores corporativos',
              'Combinar celdas para crear encabezados de sección'
            ]
          },
          {
            id: 4,
            titulo: "Formas y Diagramas",
            contenido: `
              <div class="seccion-contenido">
                <h3">🔶 Formas y Diagramas Personalizados</h3>
                
                <div class="tipos-formas">
                  <h4">🎨 Biblioteca de Formas</h4>
                  
                  <div class="formas-basicas">
                    <h5">🔷 Formas Básicas</h5>
                    <ul>
                      <li><strong>Geométricas:</strong> Círculo, cuadrado, triángulo, óvalo</li>
                      <li><strong>Líneas:</strong> Recta, curva, flecha, conector</li>
                      <li><strong>Rectángulos:</strong> Básico, redondeado, biselado</li>
                      <li><strong>Acceso:</strong> Insertar > Formas > Formas básicas</li>
                    </ul>
                  </div>

                  <div class="formas-flecha">
                    <h5">➡️ Flechas de Bloque</h5>
                    <ul>
                      <li><strong>Direccionales:</strong> Derecha, izquierda, arriba, abajo</li>
                      <li><strong>Especiales:</strong> Curvas, en U, circulares</li>
                      <li><strong>Uso:</strong> Flujos, direcciones, énfasis</li>
                    </ul>
                  </div>

                  <div class="formas-ecuacion">
                    <h5">💭 Formas de Ecuación</h5>
                    <ul>
                      <li><strong>Globos:</strong> Texto de diálogo, pensamientos</li>
                      <li><strong>Etiquetas:</strong> Notas, explicaciones</li>
                      <li><strong>Uso:</strong> Comentarios, anotaciones</li>
                    </ul>
                  </div>

                  <div class="diagramas-flujo">
                    <h5">📊 Diagramas de Flujo</h5>
                    <ul>
                      <li><strong>Proceso:</strong> Rectángulo para acciones</li>
                      <li><strong>Decisión:</strong> Rombo para decisiones</li>
                      <li><strong>Inicio/Fin:</strong> Óvalo para terminadores</li>
                      <li><strong>Documento:</strong> Formas específicas para outputs</li>
                    </ul>
                  </div>

                  <div class="cintas-estrellas">
                    <h5">⭐ Cintas y Estrellas</h5>
                    <ul>
                      <li><strong>Cintas:</strong> Títulos decorativos, awards</li>
                      <li><strong>Estrellas:</strong> Destacados, promociones</li>
                      <li><strong>Uso creativo:</strong> Elementos decorativos</li>
                    </ul>
                  </div>
                </div>

                <div class="insertar-formas">
                  <h4">➕ Insertar y Manipular Formas</h4>
                  <ul>
                    <li><strong>Insertar:</strong> Insertar > Formas > Seleccionar > Dibujar</li>
                    <li><strong>Proporciones:</strong> Mantener Shift para formas perfectas</li>
                    <li><strong>Desde centro:</strong> Ctrl+Shift mientras dibuja</li>
                    <li><strong>Redimensionar:</strong> Arrastrar controladores</li>
                    <li><strong>Rotar:</strong> Controlador de rotación superior</li>
                    <li><strong>Mover:</strong> Arrastrar forma completa</li>
                  </ul>
                </div>

                <div class="formato-formas">
                  <h4">🎨 Formato de Formas</h4>
                  
                  <div class="relleno-contorno">
                    <h5">🎯 Relleno y Contorno</h5>
                    <ul>
                      <li><strong>Relleno sólido:</strong> Color uniforme</li>
                      <li><strong>Gradiente:</strong> Transición de colores</li>
                      <li><strong>Imagen:</strong> Foto como relleno</li>
                      <li><strong>Textura:</strong> Patrones predefinidos</li>
                      <li><strong>Contorno:</strong> Color, grosor, estilo de línea</li>
                    </ul>
                  </div>

                  <div class="efectos-forma">
                    <h5">✨ Efectos de Forma</h5>
                    <ul>
                      <li><strong>Sombra:</strong> Profundidad y proyección</li>
                      <li><strong>Reflexión:</strong> Efecto espejo</li>
                      <li><strong>Resplandor:</strong> Halo luminoso</li>
                      <li><strong>Bisel:</strong> Efecto 3D en bordes</li>
                      <li><strong>Rotación 3D:</strong> Perspectiva tridimensional</li>
                    </ul>
                  </div>
                </div>

                <div class="texto-formas">
                  <h4">📝 Texto en Formas</h4>
                  <ul>
                    <li><strong>Agregar texto:</strong> Doble clic en forma</li>
                    <li><strong>Formato texto:</strong> Herramientas de fuente normales</li>
                    <li><strong>Alineación:</strong> Centrado, superior, inferior</li>
                    <li><strong>Márgenes:</strong> Espaciado interno del texto</li>
                    <li><strong>Ajuste automático:</strong> Redimensionar forma según texto</li>
                  </ul>
                </div>

                <div class="conectores-lineas">
                  <h4">🔗 Conectores y Líneas</h4>
                  
                  <div class="tipos-conectores">
                    <h5">↔️ Tipos de Conectores</h5>
                    <ul>
                      <li><strong>Recto:</strong> Línea directa entre formas</li>
                      <li><strong>Angular:</strong> Líneas con ángulos</li>
                      <li><strong>Curvo:</strong> Conexiones suaves</li>
                      <li><strong>Automático:</strong> Ajuste inteligente de ruta</li>
                    </ul>
                  </div>

                  <div class="puntos-conexion">
                    <h5">🎯 Puntos de Conexión</h5>
                    <ul>
                      <li><strong>Puntos automáticos:</strong> Aparecen al acercar conector</li>
                      <li><strong>Conexión fija:</strong> Línea se mantiene conectada</li>
                      <li><strong>Mover formas:</strong> Conectores se ajustan automáticamente</li>
                      <li><strong>Puntos personalizados:</strong> Crear nuevos puntos de conexión</li>
                    </ul>
                  </div>
                </div>

                <div class="organizar-formas">
                  <h4">📐 Organizar y Alinear</h4>
                  <ul>
                    <li><strong>Alinear:</strong> Seleccionar múltiples > Formato > Alinear</li>
                    <li><strong>Distribuir:</strong> Espaciado uniforme entre formas</li>
                    <li><strong>Orden:</strong> Traer al frente, enviar atrás</li>
                    <li><strong>Agrupar:</strong> Ctrl+G para manejar como unidad</li>
                    <li><strong>Guías:</strong> Activar para alineación precisa</li>
                  </ul>
                </div>

                <div class="diagramas-complejos">
                  <h4">🏗️ Crear Diagramas Complejos</h4>
                  
                  <div class="proceso-diseño">
                    <h5">🎯 Proceso de Diseño</h5>
                    <ol>
                      <li><strong>Planificar:</strong> Bosquejo en papel primero</li>
                      <li><strong>Formas básicas:</strong> Insertar elementos principales</li>
                      <li><strong>Conectores:</strong> Unir con líneas apropiadas</li>
                      <li><strong>Texto:</strong> Agregar etiquetas y descripciones</li>
                      <li><strong>Formato:</strong> Colores y estilos coherentes</li>
                      <li><strong>Refinamiento:</strong> Alineación y espaciado final</li>
                    </ol>
                  </div>

                  <div class="ejemplos-diagramas">
                    <h5">📋 Ejemplos Comunes</h5>
                    <ul>
                      <li><strong>Flowchart:</strong> Procesos de decisión</li>
                      <li><strong>Arquitectura:</strong> Sistemas y componentes</li>
                      <li><strong>Mapa mental:</strong> Ideas conectadas</li>
                      <li><strong>Timeline:</strong> Cronología de eventos</li>
                      <li><strong>Network diagram:</strong> Conexiones de red</li>
                    </ul>
                  </div>
                </div>

                <div class="mejores-practicas-formas">
                  <h4">✅ Mejores Prácticas</h4>
                  <ul>
                    <li><strong>Simplicidad:</strong> No sobrecargar con formas</li>
                    <li><strong>Consistencia:</strong> Mismo estilo y colores</li>
                    <li><strong>Legibilidad:</strong> Texto visible y claro</li>
                    <li><strong>Propósito:</strong> Cada forma debe tener función</li>
                    <li><strong>Espacio en blanco:</strong> Respiración visual adecuada</li>
                  </ul>
                </div>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/formas-diagramas.jpg",
              video: "/videos/teoria/diagramas-profesionales.mp4"
            },
            actividades: [
              'Crear diagrama de flujo de proceso empresarial',
              'Diseñar infografía usando formas geométricas',
              'Construir diagrama organizacional con formas y conectores',
              'Aplicar formato profesional coherente a conjunto de formas'
            ]
          }
        ],
        recursos: {
          documentos: [
            {
              titulo: "Guía Completa de Elementos Visuales",
              tipo: "PDF",
              url: "/recursos/powerpoint/elementos-visuales-completa.pdf"
            },
            {
              titulo: "Manual de SmartArt Efectivo",
              tipo: "PDF",
              url: "/recursos/powerpoint/smartart-profesional.pdf"
            },
            {
              titulo: "Plantillas de Gráficos y Diagramas",
              tipo: "ZIP",
              url: "/recursos/powerpoint/plantillas-graficos.zip"
            }
          ],
          videos: [
            {
              titulo: "SmartArt para Comunicación Visual",
              duracion: "20 min",
              url: "/videos/smartart-comunicacion.mp4"
            },
            {
              titulo: "Gráficos de Datos Profesionales",
              duracion: "25 min",
              url: "/videos/graficos-datos-pro.mp4"
            },
            {
              titulo: "Tablas y Diagramas Efectivos",
              duracion: "22 min",
              url: "/videos/tablas-diagramas.mp4"
            }
          ],
          enlaces: [
            {
              titulo: "SmartArt - Guía Oficial Microsoft",
              url: "https://support.microsoft.com/es-es/office/crear-un-gráfico-smartart"
            },
            {
              titulo: "Gráficos en PowerPoint",
              url: "https://support.microsoft.com/es-es/office/crear-un-gráfico-en-powerpoint"
            },
            {
              titulo: "Formas y Diagramas Avanzados",
              url: "https://support.microsoft.com/es-es/office/dibujar-o-eliminar-una-línea-o-conector"
            }
          ]
        },
        evaluacion: {
          preRequisitos: ["Tema 1: Primeros pasos", "Tema 2: Vistas y diapositivas", "Tema 3: Formato de texto", "Tema 4: Gestión de imágenes"],
          criterios: [
            "Crear SmartArt apropiado para diferentes tipos de información",
            "Diseñar gráficos de datos efectivos y profesionales",
            "Construir tablas bien estructuradas y legibles",
            "Usar formas y conectores para crear diagramas complejos",
            "Combinar elementos visuales de manera coherente",
            "Aplicar principios de diseño visual para máximo impacto"
          ],
          tiempoEstimado: "38 minutos"
        }
      },
      '6': {
        titulo: "Animaciones y transiciones",
        duracion: "25-32 minutos",
        objetivos: [
          "Aplicar transiciones efectivas entre diapositivas",
          "Crear animaciones de entrada, énfasis y salida para objetos",
          "Configurar timing y secuencias de animación profesionales",
          "Usar animaciones para mejorar la narrativa de la presentación",
          "Aplicar principios de moderación y profesionalismo en efectos"
        ],
        secciones: [
          {
            id: 1,
            titulo: "Transiciones de Diapositiva",
            contenido: `
              <div class="seccion-contenido">
                <h3>🔄 Transiciones Profesionales</h3>
                
                <div class="tipos-transiciones">
                  <h4>📋 Categorías de Transiciones</h4>
                  
                  <div class="sutiles">
                    <h5>✨ Sutiles (Profesionales)</h5>
                    <ul>
                      <li><strong>Corte:</strong> Cambio instantáneo, limpio</li>
                      <li><strong>Desvanecer:</strong> Transición suave</li>
                      <li><strong>Empujar:</strong> Nueva diapositiva empuja la anterior</li>
                      <li><strong>Limpiar:</strong> Barrido direccional</li>
                      <li><strong>Uso:</strong> Presentaciones formales, corporativas</li>
                    </ul>
                  </div>

                  <div class="emocionantes">
                    <h5>🎯 Emocionantes (Moderadas)</h5>
                    <ul>
                      <li><strong>Dividir:</strong> División desde centro</li>
                      <li><strong>Revelar:</strong> Descubrimiento gradual</li>
                      <li><strong>Forma:</strong> Transición geométrica</li>
                      <li><strong>Descubrir:</strong> Levantar como cortina</li>
                      <li><strong>Uso:</strong> Presentaciones creativas, educativas</li>
                    </ul>
                  </div>

                  <div class="contenido-dinamico">
                    <h5">🚀 Contenido Dinámico (Especiales)</h5>
                    <ul>
                      <li><strong>Transformar:</strong> Cambio fluido de elementos similares</li>
                      <li><strong>Zoom:</strong> Acercamiento/alejamiento</li>
                      <li><strong>Cambiar:</strong> Rotación 3D</li>
                      <li><strong>Uso limitado:</strong> Momentos específicos, efectos especiales</li>
                    </ul>
                  </div>
                </div>

                <div class="aplicar-transiciones">
                  <h4">⚙️ Aplicar Transiciones</h4>
                  <ul>
                    <li><strong>Seleccionar diapositiva:</strong> En panel izquierdo</li>
                    <li><strong>Elegir transición:</strong> Transiciones > Galería</li>
                    <li><strong>Vista previa:</strong> Automática al seleccionar</li>
                    <li><strong>Aplicar a todas:</strong> Botón "Aplicar a todo"</li>
                    <li><strong>Quitar transición:</strong> Seleccionar "Ninguna"</li>
                  </ul>
                </div>

                <div class="configuracion-transiciones">
                  <h4">🔧 Configuración Avanzada</h4>
                  
                  <div class="opciones-efectos">
                    <h5">⚡ Opciones de Efectos</h5>
                    <ul>
                      <li><strong>Dirección:</strong> Desde izquierda, derecha, arriba, abajo</li>
                      <li><strong>Duración:</strong> 0.5-3 segundos (recomendado: 1-1.5s)</li>
                      <li><strong>Sonido:</strong> Efectos sonoros (usar con moderación)</li>
                      <li><strong>Avance:</strong> Automático después de tiempo o clic manual</li>
                    </ul>
                  </div>

                  <div class="timing-transiciones">
                    <h5">⏱️ Timing de Transiciones</h5>
                    <ul>
                      <li><strong>Rápidas (0.5-0.75s):</strong> Presentaciones técnicas</li>
                      <li><strong>Moderadas (1-1.5s):</strong> Estándar profesional</li>
                      <li><strong>Lentas (2-3s):</strong> Presentaciones dramáticas</li>
                      <li><strong>Consistencia:</strong> Mismo timing en toda presentación</li>
                    </ul>
                  </div>
                </div>

                <div class="mejores-practicas-transiciones">
                  <h4">✅ Mejores Prácticas</h4>
                  <ul>
                    <li><strong>Moderación:</strong> Una transición por presentación</li>
                    <li><strong>Coherencia:</strong> Mismo efecto en todas las diapositivas</li>
                    <li><strong>Audiencia:</strong> Formal = sutiles, Creativo = emocionantes</li>
                    <li><strong>Duración apropiada:</strong> No más de 1.5 segundos</li>
                    <li><strong>Sin sonidos:</strong> Evitar efectos sonoros en contexto profesional</li>
                    <li><strong>Prueba previa:</strong> Verificar en equipo de presentación</li>
                  </ul>
                </div>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/transiciones-powerpoint.jpg",
              video: "/videos/teoria/transiciones-efectivas.mp4"
            },
            actividades: [
              'Aplicar transición profesional consistente a presentación completa',
              'Configurar timing apropiado para diferentes audiencias',
              'Comparar efectos sutiles vs emocionantes en contexto',
              'Crear secuencia de transiciones para sección especial'
            ]
          },
          {
            id: 2,
            titulo: "Animaciones de Objetos",
            contenido: `
              <div class="seccion-contenido">
                <h3">🎭 Animaciones de Objetos Efectivas</h3>
                
                <div class="tipos-animaciones">
                  <h4">📊 Tipos de Animaciones</h4>
                  
                  <div class="entrada">
                    <h5">⬇️ Animaciones de Entrada</h5>
                    <ul>
                      <li><strong>Aparecer:</strong> Instantáneo, sin efecto</li>
                      <li><strong>Desvanecer:</strong> Aparición gradual</li>
                      <li><strong>Volar desde:</strong> Entrada direccional</li>
                      <li><strong>Flotar hacia dentro:</strong> Movimiento suave</li>
                      <li><strong>Dividir:</strong> Desde línea central</li>
                      <li><strong>Uso:</strong> Revelar información progresivamente</li>
                    </ul>
                  </div>

                  <div class="enfasis">
                    <h5">⚡ Animaciones de Énfasis</h5>
                    <ul>
                      <li><strong>Pulso:</strong> Cambio temporal de tamaño</li>
                      <li><strong>Color de fuente:</strong> Cambio temporal de color</li>
                      <li><strong>Girar:</strong> Rotación breve</li>
                      <li><strong>Agitar:</strong> Movimiento para llamar atención</li>
                      <li><strong>Uso:</strong> Destacar puntos importantes</li>
                    </ul>
                  </div>

                  <div class="salida">
                    <h5">⬆️ Animaciones de Salida</h5>
                    <ul>
                      <li><strong>Desaparecer:</strong> Desvanecimiento gradual</li>
                      <li><strong>Volar hacia:</strong> Salida direccional</li>
                      <li><strong>Flotar hacia fuera:</strong> Salida suave</li>
                      <li><strong>Uso:</strong> Eliminar elementos ya explicados</li>
                    </ul>
                  </div>

                  <div class="trayectoria">
                    <h5">🛤️ Trayectorias de Movimiento</h5>
                    <ul>
                      <li><strong>Líneas:</strong> Recta, arco, bucle</li>
                      <li><strong>Formas:</strong> Círculo, corazón, estrella</li>
                      <li><strong>Personalizada:</strong> Dibujar trayectoria propia</li>
                      <li><strong>Uso:</strong> Movimientos específicos, creatividad</li>
                    </ul>
                  </div>
                </div>

                <div class="aplicar-animaciones">
                  <h4">⚙️ Aplicar Animaciones</h4>
                  <ul>
                    <li><strong>Seleccionar objeto:</strong> Texto, imagen, forma</li>
                    <li><strong>Animaciones > Galería:</strong> Elegir efecto</li>
                    <li><strong>Vista previa:</strong> Reproducir para ver efecto</li>
                    <li><strong>Más animaciones:</strong> Biblioteca completa</li>
                    <li><strong>Quitar animación:</strong> Seleccionar "Ninguna"</li>
                  </ul>
                </div>

                <div class="configuracion-animaciones">
                  <h4">🔧 Configuración de Animaciones</h4>
                  
                  <div class="opciones-efecto">
                    <h5">⚡ Opciones de Efecto</h5>
                    <ul>
                      <li><strong>Dirección:</strong> Desde dónde aparece/desaparece</li>
                      <li><strong>Duración:</strong> Velocidad del efecto (0.5-3s)</li>
                      <li><strong>Retraso:</strong> Pausa antes de iniciar</li>
                      <li><strong>Repetir:</strong> Número de repeticiones</li>
                    </ul>
                  </div>

                  <div class="inicio-animacion">
                    <h5">🚀 Inicio de Animación</h5>
                    <ul>
                      <li><strong>Al hacer clic:</strong> Control manual total</li>
                      <li><strong>Con anterior:</strong> Simultaneo con animación previa</li>
                      <li><strong>Después de anterior:</strong> Secuencial automático</li>
                      <li><strong>Retraso:</strong> Pausa adicional antes de iniciar</li>
                    </ul>
                  </div>
                </div>

                <div class="panel-animacion">
                  <h4">📋 Panel de Animación</h4>
                  <ul>
                    <li><strong>Abrir panel:</strong> Animaciones > Panel de animación</li>
                    <li><strong>Lista secuencial:</strong> Orden de todas las animaciones</li>
                    <li><strong>Reordenar:</strong> Arrastrar para cambiar secuencia</li>
                    <li><strong>Timing visual:</strong> Barras muestran duración</li>
                    <li><strong>Reproducir:</strong> Probar secuencia completa</li>
                    <li><strong>Configurar:</strong> Clic derecho para opciones</li>
                  </ul>
                </div>

                <div class="animaciones-texto">
                  <h4">📝 Animaciones de Texto</h4>
                  
                  <div class="niveles-texto">
                    <h5">📊 Niveles de Animación</h5>
                    <ul>
                      <li><strong>Como un objeto:</strong> Todo el texto junto</li>
                      <li><strong>Todo a la vez:</strong> Todos los párrafos simultáneos</li>
                      <li><strong>Por párrafo:</strong> Cada punto por separado</li>
                      <li><strong>Por palabra:</strong> Palabra individual (raro)</li>
                      <li><strong>Por letra:</strong> Carácter individual (efectos especiales)</li>
                    </ul>
                  </div>

                  <div class="uso-texto">
                    <h5">💡 Uso Efectivo en Texto</h5>
                    <ul>
                      <li><strong>Listas:</strong> Por párrafo para revelar puntos</li>
                      <li><strong>Títulos:</strong> Como objeto para impacto</li>
                      <li><strong>Destacados:</strong> Énfasis en palabras clave</li>
                      <li><strong>Progresión:</strong> Construir argumentos paso a paso</li>
                    </ul>
                  </div>
                </div>

                <div class="mejores-practicas-animaciones">
                  <h4">✅ Mejores Prácticas</h4>
                  <ul>
                    <li><strong>Propósito claro:</strong> Cada animación debe tener razón</li>
                    <li><strong>Menos es más:</strong> Máximo 3-4 animaciones por diapositiva</li>
                    <li><strong>Consistencia:</strong> Mismo tipo de efecto para elementos similares</li>
                    <li><strong>Timing apropiado:</strong> No muy rápido, no muy lento</li>
                    <li><strong>Secuencia lógica:</strong> Orden que apoye la narrativa</li>
                    <li><strong>Prueba previa:</strong> Verificar fluidez de presentación</li>
                  </ul>
                </div>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/animaciones-objetos.jpg",
              video: "/videos/teoria/animaciones-efectivas.mp4"
            },
            actividades: [
              'Animar lista de puntos apareciendo progresivamente',
              'Crear secuencia de entrada para elementos de infografía',
              'Configurar timing apropiado usando Panel de Animación',
              'Aplicar animaciones de énfasis para destacar información clave'
            ]
          },
          {
            id: 3,
            titulo: "Secuencias y Timing",
            contenido: `
              <div class="seccion-contenido">
                <h3">⏱️ Secuencias y Timing Profesional</h3>
                
                <div class="crear-secuencias">
                  <h4">🎬 Crear Secuencias Efectivas</h4>
                  
                  <div class="planificar-secuencia">
                    <h5">📋 Planificar la Secuencia</h5>
                    <ul>
                      <li><strong>Orden narrativo:</strong> Seguir lógica de presentación</li>
                      <li><strong>Jerarquía visual:</strong> Importante primero</li>
                      <li><strong>Flujo natural:</strong> De izquierda a derecha, arriba a abajo</li>
                      <li><strong>Agrupación:</strong> Elementos relacionados juntos</li>
                      <li><strong>Climax:</strong> Punto culminante con mayor impacto</li>
                    </ul>
                  </div>

                  <div class="tipos-secuencia">
                    <h5">🎯 Tipos de Secuencia</h5>
                    <ul>
                      <li><strong>Secuencial:</strong> Una tras otra (revelar pasos)</li>
                      <li><strong>Simultánea:</strong> Múltiples animaciones juntas</li>
                      <li><strong>Superpuesta:</strong> Inicio antes de que termine anterior</li>
                      <li><strong>Intercalada:</strong> Alternar entre diferentes elementos</li>
                    </ul>
                  </div>
                </div>

                <div class="configurar-timing">
                  <h4">⚙️ Configurar Timing Preciso</h4>
                  
                  <div class="duracion-animacion">
                    <h5">⏳ Duración de Animaciones</h5>
                    <ul>
                      <li><strong>Muy rápida (0.25-0.5s):</strong> Efectos sutiles</li>
                      <li><strong>Rápida (0.5-1s):</strong> Estándar profesional</li>
                      <li><strong>Media (1-2s):</strong> Elementos importantes</li>
                      <li><strong>Lenta (2-3s):</strong> Efectos dramáticos</li>
                      <li><strong>Muy lenta (+3s):</strong> Solo efectos especiales</li>
                    </ul>
                  </div>

                  <div class="retrasos-pausas">
                    <h5">⏸️ Retrasos y Pausas</h5>
                    <ul>
                      <li><strong>Sin retraso:</strong> Acción inmediata</li>
                      <li><strong>Retraso corto (0.25-0.5s):</strong> Separación sutil</li>
                      <li><strong>Retraso medio (0.5-1s):</strong> Pausa para procesamiento</li>
                      <li><strong>Retraso largo (1-2s):</strong> Énfasis, suspense</li>
                      <li><strong>Uso estratégico:</strong> Crear ritmo y respiración</li>
                    </ul>
                  </div>
                </div>

                <div class="panel-timing">
                  <h4">📊 Panel de Timing</h4>
                  <ul>
                    <li><strong>Vista cronológica:</strong> Línea de tiempo visual</li>
                    <li><strong>Barras de duración:</strong> Longitud = tiempo de animación</li>
                    <li><strong>Superposición:</strong> Barras que se solapan = simultáneo</li>
                    <li><strong>Espacios:</strong> Pausas entre animaciones</li>
                    <li><strong>Ajuste directo:</strong> Arrastrar bordes para cambiar timing</li>
                    <li><strong>Reproducir:</strong> Vista previa de secuencia completa</li>
                  </ul>
                </div>

                <div class="sincronizacion-avanzada">
                  <h4">🎵 Sincronización Avanzada</h4>
                  
                  <div class="coordinacion-elementos">
                    <h5">🤝 Coordinación de Elementos</h5>
                    <ul>
                      <li><strong>Entrada coordinada:</strong> Múltiples objetos aparecen juntos</li>
                      <li><strong>Movimiento sincronizado:</strong> Objetos se mueven en formación</li>
                      <li><strong>Transformación conjunta:</strong> Cambios simultáneos</li>
                      <li><strong>Salida coordinada:</strong> Elementos desaparecen juntos</li>
                    </ul>
                  </div>

                  <div class="efectos-cascada">
                    <h5">🌊 Efectos en Cascada</h5>
                    <ul>
                      <li><strong>Retraso uniforme:</strong> Misma pausa entre elementos</li>
                      <li><strong>Retraso progresivo:</strong> Pausas que se incrementan</li>
                      <li><strong>Retraso aleatorio:</strong> Variación para naturalidad</li>
                      <li><strong>Dirección cascada:</strong> Izquierda-derecha, arriba-abajo</li>
                    </ul>
                  </div>
                </div>

                <div class="narrativa-visual">
                  <h4">📖 Narrativa Visual</h4>
                  
                  <div class="storytelling-animacion">
                    <h5">🎭 Storytelling con Animación</h5>
                    <ul>
                      <li><strong>Introducción:</strong> Elementos aparecen gradualmente</li>
                      <li><strong>Desarrollo:</strong> Interacciones y transformaciones</li>
                      <li><strong>Climax:</strong> Animación más impactante</li>
                      <li><strong>Resolución:</strong> Elementos se asientan</li>
                      <li><strong>Conclusión:</strong> Enfoque en mensaje final</li>
                    </ul>
                  </div>

                  <div class="ritmo-presentacion">
                    <h5">🎼 Ritmo de Presentación</h5>
                    <ul>
                      <li><strong>Ritmo acelerado:</strong> Animaciones rápidas, menos pausas</li>
                      <li><strong>Ritmo moderado:</strong> Balance entre acción y pausa</li>
                      <li><strong>Ritmo pausado:</strong> Animaciones lentas, más tiempo procesamiento</li>
                      <li><strong>Variación:</strong> Cambiar ritmo según contenido</li>
                    </ul>
                  </div>
                </div>

                <div class="control-presentacion">
                  <h4">🎮 Control Durante Presentación</h4>
                  <ul>
                    <li><strong>Avance manual:</strong> Clic para cada animación</li>
                    <li><strong>Avance automático:</strong> Timing predefinido</li>
                    <li><strong>Combinado:</strong> Automático con opción manual</li>
                    <li><strong>Pause/Resume:</strong> Interrumpir animaciones en curso</li>
                    <li><strong>Saltar:</strong> Ir directo al estado final</li>
                  </ul>
                </div>

                <div class="mejores-practicas-timing">
                  <h4">✅ Mejores Prácticas de Timing</h4>
                  <ul>
                    <li><strong>Respeto al público:</strong> Tiempo suficiente para procesar</li>
                    <li><strong>Propósito del timing:</strong> Cada pausa debe tener razón</li>
                    <li><strong>Flexibilidad:</strong> Poder ajustar durante presentación</li>
                    <li><strong>Prueba con audiencia:</strong> Timing diferente en vivo</li>
                    <li><strong>Plan B:</strong> Preparar versión sin animaciones</li>
                  </ul>
                </div>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/secuencias-timing.jpg",
              video: "/videos/teoria/timing-profesional.mp4"
            },
            actividades: [
              'Crear secuencia narrativa con 5 elementos coordinados',
              'Configurar timing preciso usando retrasos estratégicos',
              'Diseñar efecto cascada para serie de elementos',
              'Sincronizar animaciones para crear storytelling visual'
            ]
          },
          {
            id: 4,
            titulo: "Moderación y Profesionalismo",
            contenido: `
              <div class="seccion-contenido">
                <h3">🎖️ Animaciones Profesionales</h3>
                
                <div class="principios-moderacion">
                  <h4">⚖️ Principios de Moderación</h4>
                  
                  <div class="menos-es-mas">
                    <h5">🎯 "Menos es Más"</h5>
                    <ul>
                      <li><strong>Regla 3-5-7:</strong> Máximo 3 tipos efectos, 5 animaciones por diapositiva, 7 diapositivas animadas por presentación</li>
                      <li><strong>Propósito claro:</strong> Cada animación debe servir a la comunicación</li>
                      <li><strong>Eliminar superfluo:</strong> Quitar efectos que no agregan valor</li>
                      <li><strong>Calidad sobre cantidad:</strong> Pocas animaciones bien ejecutadas</li>
                    </ul>
                  </div>

                  <div class="contexto-audiencia">
                    <h5">👥 Adaptar a Contexto y Audiencia</h5>
                    <ul>
                      <li><strong>Corporativo/Formal:</strong> Transiciones sutiles, animaciones mínimas</li>
                      <li><strong>Educativo:</strong> Animaciones funcionales que ayuden comprensión</li>
                      <li><strong>Creativo/Marketing:</strong> Mayor libertad, efectos más dinámicos</li>
                      <li><strong>Técnico/Científico:</strong> Animaciones que clarifiquen conceptos</li>
                    </ul>
                  </div>
                </div>

                <div class="cuando-usar">
                  <h4">🎯 Cuándo Usar Animaciones</h4>
                  
                  <div class="casos-apropiados">
                    <h5">✅ Casos Apropiados</h5>
                    <ul>
                      <li><strong>Revelar información progresivamente:</strong> Evitar sobrecarga cognitiva</li>
                      <li><strong>Mostrar relaciones:</strong> Conexiones entre elementos</li>
                      <li><strong>Explicar procesos:</strong> Pasos secuenciales</li>
                      <li><strong>Enfatizar puntos clave:</strong> Destacar información crítica</li>
                      <li><strong>Mantener atención:</strong> Dirigir foco de audiencia</li>
                      <li><strong>Crear transiciones lógicas:</strong> Conexión entre ideas</li>
                    </ul>
                  </div>

                  <div class="casos-evitar">
                    <h5">❌ Casos a Evitar</h5>
                    <ul>
                      <li><strong>Decoración pura:</strong> Animaciones sin propósito comunicativo</li>
                      <li><strong>Distracción:</strong> Efectos que alejen del mensaje</li>
                      <li><strong>Sobrecarga:</strong> Demasiadas animaciones simultáneas</li>
                      <li><strong>Inconsistencia:</strong> Diferentes estilos sin criterio</li>
                      <li><strong>Tiempo limitado:</strong> Cuando hay poco tiempo disponible</li>
                    </ul>
                  </div>
                </div>

                <div class="efectos-recomendados">
                  <h4">⭐ Efectos Recomendados por Contexto</h4>
                  
                  <div class="profesional-corporativo">
                    <h5">🏢 Profesional/Corporativo</h5>
                    <ul>
                      <li><strong>Transiciones:</strong> Corte, Desvanecer, Empujar</li>
                      <li><strong>Entrada:</strong> Aparecer, Desvanecer, Volar desde abajo</li>
                      <li><strong>Énfasis:</strong> Pulso suave, Color de fuente</li>
                      <li><strong>Timing:</strong> 0.5-1 segundo máximo</li>
                      <li><strong>Evitar:</strong> Efectos 3D, sonidos, animaciones complejas</li>
                    </ul>
                  </div>

                  <div class="educativo-formativo">
                    <h5">🎓 Educativo/Formativo</h5>
                    <ul>
                      <li><strong>Funcionales:</strong> Animaciones que ayuden comprensión</li>
                      <li><strong>Progresivas:</strong> Revelar información paso a paso</li>
                      <li><strong>Interactivas:</strong> Control manual del ritmo</li>
                      <li><strong>Consistentes:</strong> Mismo patrón para elementos similares</li>
                    </ul>
                  </div>

                  <div class="creativo-marketing">
                    <h5">🎨 Creativo/Marketing</h5>
                    <ul>
                      <li><strong>Mayor libertad:</strong> Efectos más dinámicos permitidos</li>
                      <li><strong>Impacto visual:</strong> Animaciones que generen emoción</li>
                      <li><strong>Marca coherente:</strong> Alineado con identidad visual</li>
                      <li><strong>Moderación aún importante:</strong> No sacrificar mensaje por efecto</li>
                    </ul>
                  </div>
                </div>

                <div class="pruebas-validacion">
                  <h4">🧪 Pruebas y Validación</h4>
                  
                  <div class="testing-tecnico">
                    <h5">⚙️ Testing Técnico</h5>
                    <ul>
                      <li><strong>Equipo de presentación:</strong> Probar en computador/proyector real</li>
                      <li><strong>Rendimiento:</strong> Verificar fluidez en hardware objetivo</li>
                      <li><strong>Compatibilidad:</strong> Versiones diferentes de PowerPoint</li>
                      <li><strong>Exportación:</strong> Cómo se ven en PDF o video</li>
                    </ul>
                  </div>

                  <div class="testing-audiencia">
                    <h5">👥 Testing con Audiencia</h5>
                    <ul>
                      <li><strong>Comprensión:</strong> ¿Ayudan o confunden las animaciones?</li>
                      <li><strong>Distracción:</strong> ¿Desvían atención del mensaje?</li>
                      <li><strong>Timing:</strong> ¿Es apropiado el ritmo para audiencia?</li>
                      <li><strong>Feedback:</strong> Solicitar opiniones específicas</li>
                    </ul>
                  </div>
                </div>

                <div class="alternativas-animacion">
                  <h4">🔄 Alternativas a Animaciones</h4>
                  <ul>
                    <li><strong>Múltiples diapositivas:</strong> En lugar de animaciones complejas</li>
                    <li><strong>Diseño estático efectivo:</strong> Layout que guíe la vista</li>
                    <li><strong>Colores estratégicos:</strong> Destacar sin movimiento</li>
                    <li><strong>Tipografía jerárquica:</strong> Enfatizar con formato texto</li>
                    <li><strong>Espacios en blanco:</strong> Dirigir atención visualmente</li>
                  </ul>
                </div>

                <div class="version-respaldo">
                  <h4">💾 Versión de Respaldo</h4>
                  <ul>
                    <li><strong>Sin animaciones:</strong> Para problemas técnicos</li>
                    <li><strong>Versión impresa:</strong> PDF sin efectos</li>
                    <li><strong>Modo presentador:</strong> Notas para guiar sin animaciones</li>
                    <li><strong>Plan B:</strong> Presentación funcional sin efectos</li>
                  </ul>
                </div>

                <div class="checklist-profesional">
                  <h4">✅ Checklist Profesional</h4>
                  <ul>
                    <li><strong>□ Propósito claro:</strong> Cada animación justificada</li>
                    <li><strong>□ Moderación:</strong> Menos de 5 animaciones por diapositiva</li>
                    <li><strong>□ Consistencia:</strong> Patrones coherentes</li>
                    <li><strong>□ Timing apropiado:</strong> Duración adecuada para contexto</li>
                    <li><strong>□ Prueba técnica:</strong> Funcionamiento en equipo real</li>
                    <li><strong>□ Feedback validado:</strong> Opinión de audiencia similar</li>
                    <li><strong>□ Respaldo preparado:</strong> Versión sin animaciones</li>
                  </ul>
                </div>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/animaciones-profesionales.jpg",
              video: "/videos/teoria/moderacion-efectos.mp4"
            },
            actividades: [
              'Evaluar presentación existente aplicando principios de moderación',
              'Crear versión profesional eliminando animaciones superfluas',
              'Adaptar nivel de animación según contexto específico',
              'Preparar checklist de validación para futuras presentaciones'
            ]
          }
        ],
        recursos: {
          documentos: [
            {
              titulo: "Guía de Animaciones Profesionales",
              tipo: "PDF",
              url: "/recursos/powerpoint/animaciones-profesionales.pdf"
            },
            {
              titulo: "Manual de Timing y Secuencias",
              tipo: "PDF",
              url: "/recursos/powerpoint/timing-secuencias.pdf"
            },
            {
              titulo: "Checklist de Moderación",
              tipo: "PDF",
              url: "/recursos/powerpoint/checklist-moderacion.pdf"
            }
          ],
          videos: [
            {
              titulo: "Transiciones Efectivas",
              duracion: "15 min",
              url: "/videos/transiciones-efectivas.mp4"
            },
            {
              titulo: "Animaciones que Comunican",
              duracion: "20 min",
              url: "/videos/animaciones-comunicacion.mp4"
            },
            {
              titulo: "Timing y Narrativa Visual",
              duracion: "18 min",
              url: "/videos/timing-narrativa.mp4"
            }
          ],
          enlaces: [
            {
              titulo: "Animaciones en PowerPoint - Guía Oficial",
              url: "https://support.microsoft.com/es-es/office/animar-texto-o-objetos"
            },
            {
              titulo: "Transiciones Profesionales",
              url: "https://support.microsoft.com/es-es/office/agregar-cambiar-o-quitar-transiciones-entre-diapositivas"
            },
            {
              titulo: "Mejores Prácticas de Animación",
              url: "https://support.microsoft.com/es-es/office/buenas-prácticas-para-usar-animaciones"
            }
          ]
        },
        evaluacion: {
          preRequisitos: ["Tema 1: Primeros pasos", "Tema 2: Vistas y diapositivas", "Tema 3: Formato de texto", "Tema 4: Gestión de imágenes", "Tema 5: Gráficos y elementos visuales"],
          criterios: [
            "Aplicar transiciones apropiadas según contexto profesional",
            "Crear animaciones que mejoren la comunicación sin distraer",
            "Configurar secuencias y timing efectivos",
            "Aplicar principios de moderación y profesionalismo",
            "Adaptar nivel de animación según audiencia y propósito",
            "Validar efectividad mediante pruebas y feedback"
          ],
          tiempoEstimado: "32 minutos"
        }
      },
      '7': {
        titulo: "Presentación y exportación",
        duracion: "28-35 minutos",
        objetivos: [
          "Dominar el modo presentación y herramientas del presentador",
          "Configurar presentaciones para diferentes audiencias y contextos",
          "Exportar a múltiples formatos (PDF, video, imágenes)",
          "Compartir y colaborar efectivamente en presentaciones",
          "Preparar y ejecutar presentaciones profesionales en vivo"
        ],
        secciones: [
          {
            id: 1,
            titulo: "Modo Presentación",
            contenido: `
              <div class="seccion-contenido">
                <h3>🎤 Dominio del Modo Presentación</h3>
                
                <div class="iniciar-presentacion">
                  <h4>🚀 Iniciar Presentación</h4>
                  
                  <div class="metodos-inicio">
                    <h5>⚡ Métodos de Inicio</h5>
                    <ul>
                      <li><strong>F5:</strong> Desde primera diapositiva</li>
                      <li><strong>Shift+F5:</strong> Desde diapositiva actual</li>
                      <li><strong>Presentación > Desde el inicio:</strong> Botón cinta</li>
                      <li><strong>Presentación > Desde diapositiva actual:</strong> Posición específica</li>
                      <li><strong>Doble clic:</strong> En icono presentación (barra estado)</li>
                    </ul>
                  </div>

                  <div class="modos-presentacion">
                    <h5">📺 Modos de Presentación</h5>
                    <ul>
                      <li><strong>Pantalla completa:</strong> Modo estándar, sin distracciones</li>
                      <li><strong>Ventana:</strong> Presentación en ventana redimensionable</li>
                      <li><strong>Vista explorar:</strong> Navegación con panel diapositivas</li>
                      <li><strong>Kiosco:</strong> Reproducción automática continua</li>
                    </ul>
                  </div>
                </div>

                <div class="navegacion-presentacion">
                  <h4">🧭 Navegación Durante Presentación</h4>
                  
                  <div class="controles-basicos">
                    <h5">⚡ Controles Básicos</h5>
                    <ul>
                      <li><strong>Avanzar:</strong> Clic, Espacio, Enter, →</li>
                      <li><strong>Retroceder:</strong> Backspace, ←, Page Up</li>
                      <li><strong>Ir a diapositiva:</strong> Número + Enter</li>
                      <li><strong>Primera/Última:</strong> Inicio/Fin</li>
                      <li><strong>Salir:</strong> Esc, Alt+F4</li>
                    </ul>
                  </div>

                  <div class="menu-contextual">
                    <h5">📋 Menú Contextual</h5>
                    <ul>
                      <li><strong>Clic derecho:</strong> Acceso a herramientas</li>
                      <li><strong>Ir a diapositiva:</strong> Lista navegable</li>
                      <li><strong>Pantalla en negro/blanco:</strong> B/W para pausas</li>
                      <li><strong>Configuraciones:</strong> Opciones de presentación</li>
                    </ul>
                  </div>

                  <div class="herramientas-laser">
                    <h5">🔴 Puntero Láser y Anotaciones</h5>
                    <ul>
                      <li><strong>Puntero láser:</strong> Ctrl + mantener clic izquierdo</li>
                      <li><strong>Lápiz:</strong> Dibujar sobre diapositivas</li>
                      <li><strong>Marcador:</strong> Resaltar texto/áreas</li>
                      <li><strong>Borrador:</strong> Eliminar anotaciones</li>
                      <li><strong>Guardar anotaciones:</strong> Al salir de presentación</li>
                    </ul>
                  </div>
                </div>

                <div class="vista-presentador">
                  <h4">👨‍🏫 Vista del Presentador</h4>
                  
                  <div class="activar-vista">
                    <h5">🔧 Activar Vista Presentador</h5>
                    <ul>
                      <li><strong>Configuración:</strong> Presentación > Usar vista del presentador</li>
                      <li><strong>Múltiples pantallas:</strong> Automático con proyector</li>
                      <li><strong>Una pantalla:</strong> Alt+F5 para simular</li>
                      <li><strong>Configurar pantallas:</strong> Windows + P</li>
                    </ul>
                  </div>

                  <div class="elementos-vista">
                    <h5">📊 Elementos de Vista Presentador</h5>
                    <ul>
                      <li><strong>Diapositiva actual:</strong> Lo que ve la audiencia</li>
                      <li><strong>Próxima diapositiva:</strong> Vista previa siguiente</li>
                      <li><strong>Notas del orador:</strong> Recordatorios personales</li>
                      <li><strong>Cronómetro:</strong> Tiempo transcurrido</li>
                      <li><strong>Controles navegación:</strong> Avanzar/retroceder</li>
                      <li><strong>Miniaturas:</strong> Vista general presentación</li>
                    </ul>
                  </div>

                  <div class="optimizar-vista">
                    <h5">⚙️ Optimizar Vista Presentador</h5>
                    <ul>
                      <li><strong>Tamaño fuente notas:</strong> Ajustar para legibilidad</li>
                      <li><strong>Posición elementos:</strong> Reorganizar layout</li>
                      <li><strong>Zoom diapositivas:</strong> Ampliar para detalle</li>
                      <li><strong>Práctica previa:</strong> Familiarizarse con interface</li>
                    </ul>
                  </div>
                </div>

                <div class="configuraciones-avanzadas">
                  <h4">⚙️ Configuraciones Avanzadas</h4>
                  
                  <div class="opciones-presentacion">
                    <h5">🎛️ Opciones de Presentación</h5>
                    <ul>
                      <li><strong>Avance diapositivas:</strong> Manual vs automático</li>
                      <li><strong>Mostrar controles:</strong> Barra navegación visible</li>
                      <li><strong>Repetir continuamente:</strong> Para kioscos</li>
                      <li><strong>Sin animaciones:</strong> Desactivar todos los efectos</li>
                      <li><strong>Modo ratón:</strong> Cursor visible o invisible</li>
                    </ul>
                  </div>

                  <div class="presentacion-personalizada">
                    <h5">🎯 Presentación Personalizada</h5>
                    <ul>
                      <li><strong>Crear versión:</strong> Presentación > Presentación personalizada</li>
                      <li><strong>Seleccionar diapositivas:</strong> Subconjunto específico</li>
                      <li><strong>Orden personalizado:</strong> Secuencia alternativa</li>
                      <li><strong>Múltiples versiones:</strong> Para diferentes audiencias</li>
                    </ul>
                  </div>
                </div>

                <div class="problemas-comunes">
                  <h4">🔧 Solución Problemas Comunes</h4>
                  
                  <div class="problemas-tecnicos">
                    <h5">⚠️ Problemas Técnicos</h5>
                    <ul>
                      <li><strong>Pantalla duplicada:</strong> Windows + P > Extender</li>
                      <li><strong>Resolución incorrecta:</strong> Ajustar configuración pantalla</li>
                      <li><strong>Vista presentador no aparece:</strong> Verificar configuración múltiples pantallas</li>
                      <li><strong>Animaciones lentas:</strong> Desactivar efectos temporalmente</li>
                    </ul>
                  </div>

                  <div class="plan-contingencia">
                    <h5">🛡️ Plan de Contingencia</h5>
                    <ul>
                      <li><strong>Copia respaldo:</strong> En USB y nube</li>
                      <li><strong>Versión PDF:</strong> Sin dependencias técnicas</li>
                      <li><strong>Impresos:</strong> Para distribución manual</li>
                      <li><strong>Presentación móvil:</strong> En smartphone como respaldo</li>
                    </ul>
                  </div>
                </div>

                <div class="mejores-practicas-presentacion">
                  <h4">✅ Mejores Prácticas de Presentación</h4>
                  <ul>
                    <li><strong>Prueba previa:</strong> Ensayar en equipo real</li>
                    <li><strong>Notas concisas:</strong> Palabras clave, no texto completo</li>
                    <li><strong>Control tiempo:</strong> Practicar con cronómetro</li>
                    <li><strong>Interacción audiencia:</strong> Pausas para preguntas</li>
                    <li><strong>Pantalla en negro:</strong> Para desviar atención</li>
                    <li><strong>Contacto visual:</strong> Mirar a audiencia, no pantalla</li>
                  </ul>
                </div>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/modo-presentacion.jpg",
              video: "/videos/teoria/presentar-profesional.mp4"
            },
            actividades: [
              'Configurar y probar Vista del Presentador con dos pantallas',
              'Crear presentación personalizada con subconjunto de diapositivas',
              'Practicar navegación usando solo atajos de teclado',
              'Ensayar presentación completa midiendo timing real'
            ]
          },
          {
            id: 2,
            titulo: "Exportación y Formatos",
            contenido: `
              <div class="seccion-contenido">
                <h3">💾 Exportación Profesional</h3>
                
                <div class="exportar-pdf">
                  <h4">📄 Exportar a PDF</h4>
                  
                  <div class="opciones-pdf">
                    <h5">⚙️ Opciones de PDF</h5>
                    <ul>
                      <li><strong>Archivo > Exportar > PDF:</strong> Método principal</li>
                      <li><strong>Calidad:</strong> Estándar vs Mínimo tamaño</li>
                      <li><strong>Incluir:</strong> Diapositivas visibles, ocultas, notas</li>
                      <li><strong>Rango:</strong> Todas, actual, rango específico</li>
                      <li><strong>Estructura:</strong> Diapositivas, documentos, notas</li>
                    </ul>
                  </div>

                  <div class="configuracion-pdf">
                    <h5">🔧 Configuración Avanzada PDF</h5>
                    <ul>
                      <li><strong>Optimizar para:</strong> Impresión vs web</li>
                      <li><strong>Marcadores:</strong> Navegación por títulos</li>
                      <li><strong>Propiedades documento:</strong> Metadatos, seguridad</li>
                      <li><strong>Cumplimiento estándares:</strong> PDF/A para archivo</li>
                    </ul>
                  </div>

                  <div class="tipos-pdf">
                    <h5">📋 Tipos de PDF</h5>
                    <ul>
                      <li><strong>Solo diapositivas:</strong> Para presentación digital</li>
                      <li><strong>Documentos:</strong> Múltiples diapositivas por página</li>
                      <li><strong>Notas:</strong> Diapositiva + notas del orador</li>
                      <li><strong>Esquema:</strong> Solo texto estructurado</li>
                    </ul>
                  </div>
                </div>

                <div class="exportar-video">
                  <h4">🎬 Exportar a Video</h4>
                  
                  <div class="configuracion-video">
                    <h5">📹 Configuración de Video</h5>
                    <ul>
                      <li><strong>Archivo > Exportar > Video:</strong> Acceso principal</li>
                      <li><strong>Calidad:</strong> Ultra HD (4K), Full HD, HD, Estándar</li>
                      <li><strong>Timing:</strong> Usar timings ensayados vs tiempo fijo</li>
                      <li><strong>Duración diapositiva:</strong> Segundos por diapositiva</li>
                      <li><strong>Formato:</strong> MP4 (recomendado para compatibilidad)</li>
                    </ul>
                  </div>

                  <div class="calidades-video">
                    <h5">📊 Calidades de Video</h5>
                    <ul>
                      <li><strong>Ultra HD (4K):</strong> 3840x2160, archivos grandes</li>
                      <li><strong>Full HD:</strong> 1920x1080, calidad profesional</li>
                      <li><strong>HD:</strong> 1280x720, balance tamaño/calidad</li>
                      <li><strong>Estándar:</strong> 640x480, archivos pequeños</li>
                    </ul>
                  </div>

                  <div class="usos-video">
                    <h5">🎯 Casos de Uso Video</h5>
                    <ul>
                      <li><strong>E-learning:</strong> Cursos online autónomos</li>
                      <li><strong>YouTube/Vimeo:</strong> Compartir en plataformas</li>
                      <li><strong>Kioscos:</strong> Reproducción automática</li>
                      <li><strong>Archivo:</strong> Preservar presentación con animaciones</li>
                    </ul>
                  </div>
                </div>

                <div class="exportar-imagenes">
                  <h4">🖼️ Exportar a Imágenes</h4>
                  
                  <div class="formatos-imagen">
                    <h5">📷 Formatos de Imagen</h5>
                    <ul>
                      <li><strong>PNG:</strong> Alta calidad, transparencia</li>
                      <li><strong>JPEG:</strong> Fotografías, archivos menores</li>
                      <li><strong>GIF:</strong> Compatible, limitado</li>
                      <li><strong>TIFF:</strong> Máxima calidad, archivos grandes</li>
                      <li><strong>SVG:</strong> Vectorial, escalable</li>
                    </ul>
                  </div>

                  <div class="configuracion-imagen">
                    <h5">⚙️ Configuración Imagen</h5>
                    <ul>
                      <li><strong>Archivo > Exportar > Cambiar tipo archivo:</strong> Método</li>
                      <li><strong>Resolución:</strong> Desde 96 DPI hasta máxima</li>
                      <li><strong>Rango:</strong> Diapositiva actual vs todas</li>
                      <li><strong>Tamaño:</strong> Personalizado en píxeles</li>
                    </ul>
                  </div>

                  <div class="usos-imagenes">
                    <h5">🎯 Casos de Uso Imágenes</h5>
                    <ul>
                      <li><strong>Web:</strong> Insertar en sitios web</li>
                      <li><strong>Redes sociales:</strong> Compartir diapositivas</li>
                      <li><strong>Documentos:</strong> Incluir en informes</li>
                      <li><strong>Impresión:</strong> Pósters, banners</li>
                    </ul>
                  </div>
                </div>

                <div class="otros-formatos">
                  <h4">📁 Otros Formatos</h4>
                  
                  <div class="powerpoint-formatos">
                    <h5">📊 Formatos PowerPoint</h5>
                    <ul>
                      <li><strong>PPTX:</strong> Formato estándar moderno</li>
                      <li><strong>PPT:</strong> Compatibilidad versiones antiguas</li>
                      <li><strong>POTX:</strong> Plantilla reutilizable</li>
                      <li><strong>PPSX:</strong> Presentación que abre automáticamente</li>
                      <li><strong>PPS:</strong> Versión antigua de PPSX</li>
                    </ul>
                  </div>

                  <div class="formatos-web">
                    <h5">🌐 Formatos Web</h5>
                    <ul>
                      <li><strong>HTML:</strong> Página web con navegación</li>
                      <li><strong>XML:</strong> Datos estructurados</li>
                      <li><strong>ODP:</strong> Open Document Presentation</li>
                    </ul>
                  </div>
                </div>

                <div class="optimizacion-exportacion">
                  <h4">⚡ Optimización de Exportación</h4>
                  
                  <div class="preparacion-exportacion">
                    <h5">🔧 Preparación para Exportar</h5>
                    <ul>
                      <li><strong>Comprimir imágenes:</strong> Reducir tamaño archivo</li>
                      <li><strong>Revisar enlaces:</strong> Verificar vínculos externos</li>
                      <li><strong>Probar animaciones:</strong> Cómo se ven en formato final</li>
                      <li><strong>Eliminar elementos ocultos:</strong> Limpiar archivo</li>
                    </ul>
                  </div>

                  <div class="control-calidad">
                    <h5">✅ Control de Calidad</h5>
                    <ul>
                      <li><strong>Vista previa:</strong> Verificar resultado antes de finalizar</li>
                      <li><strong>Probar en dispositivo objetivo:</strong> Móvil, tablet, etc.</li>
                      <li><strong>Verificar metadatos:</strong> Información documento</li>
                      <li><strong>Tamaño archivo:</strong> Apropiado para distribución</li>
                    </ul>
                  </div>
                </div>

                <div class="mejores-practicas-exportacion">
                  <h4">✅ Mejores Prácticas</h4>
                  <ul>
                    <li><strong>Múltiples formatos:</strong> Preparar varios según necesidad</li>
                    <li><strong>Nombrar archivos:</strong> Convención clara y fecha</li>
                    <li><strong>Versiones:</strong> Mantener original editable</li>
                    <li><strong>Backup:</strong> Copias en diferentes ubicaciones</li>
                    <li><strong>Documentar:</strong> Notas sobre configuración usada</li>
                  </ul>
                </div>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/exportacion-formatos.jpg",
              video: "/videos/teoria/exportar-profesional.mp4"
            },
            actividades: [
              'Exportar presentación a PDF con diferentes configuraciones',
              'Crear video de presentación en calidad Full HD',
              'Exportar diapositivas individuales como imágenes PNG',
              'Comparar tamaños y calidades de diferentes formatos'
            ]
          },
          {
            id: 3,
            titulo: "Compartir y Colaborar",
            contenido: `
              <div class="seccion-contenido">
                <h3">🤝 Colaboración y Distribución</h3>
                
                <div class="compartir-nube">
                  <h4">☁️ Compartir en la Nube</h4>
                  
                  <div class="onedrive-sharepoint">
                    <h5">📂 OneDrive y SharePoint</h5>
                    <ul>
                      <li><strong>Guardar en OneDrive:</strong> Archivo > Guardar como > OneDrive</li>
                      <li><strong>Compartir:</strong> Botón Compartir en cinta</li>
                      <li><strong>Permisos:</strong> Ver, comentar, editar</li>
                      <li><strong>Enlace seguro:</strong> Acceso controlado</li>
                      <li><strong>Caducidad:</strong> Enlaces con fecha límite</li>
                    </ul>
                  </div>

                  <div class="colaboracion-tiempo-real">
                    <h5">👥 Colaboración en Tiempo Real</h5>
                    <ul>
                      <li><strong>Edición simultánea:</strong> Múltiples usuarios</li>
                      <li><strong>Autoguardado:</strong> Cambios automáticos</li>
                      <li><strong>Indicadores presencia:</strong> Ver quién está editando</li>
                      <li><strong>Historial versiones:</strong> Recuperar cambios anteriores</li>
                      <li><strong>Chat integrado:</strong> Comunicación durante edición</li>
                    </ul>
                  </div>

                  <div class="otras-plataformas">
                    <h5">🌐 Otras Plataformas</h5>
                    <ul>
                      <li><strong>Google Drive:</strong> Compatibilidad con Google Slides</li>
                      <li><strong>Dropbox:</strong> Sincronización archivos</li>
                      <li><strong>Box:</strong> Colaboración empresarial</li>
                      <li><strong>Teams:</strong> Integración Microsoft Teams</li>
                    </ul>
                  </div>
                </div>

                <div class="comentarios-revision">
                  <h4">💬 Comentarios y Revisión</h4>
                  
                  <div class="sistema-comentarios">
                    <h5">📝 Sistema de Comentarios</h5>
                    <ul>
                      <li><strong>Agregar comentario:</strong> Revisar > Nuevo comentario</li>
                      <li><strong>Responder:</strong> Hilos de conversación</li>
                      <li><strong>Resolver:</strong> Marcar como completado</li>
                      <li><strong>Eliminar:</strong> Comentarios innecesarios</li>
                      <li><strong>Navegar:</strong> Comentario anterior/siguiente</li>
                    </ul>
                  </div>

                  <div class="flujo-revision">
                    <h5">🔄 Flujo de Revisión</h5>
                    <ul>
                      <li><strong>Envío inicial:</strong> Versión para revisión</li>
                      <li><strong>Período comentarios:</strong> Tiempo definido</li>
                      <li><strong>Incorporación cambios:</strong> Atender feedback</li>
                      <li><strong>Revisión final:</strong> Aprobación cambios</li>
                      <li><strong>Versión final:</strong> Documento aprobado</li>
                    </ul>
                  </div>

                  <div class="gestion-versiones">
                    <h5">📋 Gestión de Versiones</h5>
                    <ul>
                      <li><strong>Historial versiones:</strong> Archivo > Información > Historial</li>
                      <li><strong>Restaurar versión:</strong> Volver a estado anterior</li>
                      <li><strong>Comparar versiones:</strong> Ver diferencias</li>
                      <li><strong>Etiquetar versiones:</strong> Hitos importantes</li>
                    </ul>
                  </div>
                </div>

                <div class="control-acceso">
                  <h4">🔒 Control de Acceso</h4>
                  
                  <div class="niveles-permiso">
                    <h5">🎚️ Niveles de Permiso</h5>
                    <ul>
                      <li><strong>Solo lectura:</strong> Ver sin editar</li>
                      <li><strong>Comentar:</strong> Agregar comentarios únicamente</li>
                      <li><strong>Editar:</strong> Modificar contenido</li>
                      <li><strong>Propietario:</strong> Control total y permisos</li>
                    </ul>
                  </div>

                  <div class="seguridad-avanzada">
                    <h5">🛡️ Seguridad Avanzada</h5>
                    <ul>
                      <li><strong>Proteger con contraseña:</strong> Cifrado archivo</li>
                      <li><strong>Marcas de agua:</strong> Identificación documento</li>
                      <li><strong>Restricciones edición:</strong> Áreas protegidas</li>
                      <li><strong>Caducidad enlaces:</strong> Acceso temporal</li>
                      <li><strong>Auditoría:</strong> Registro de accesos</li>
                    </ul>
                  </div>
                </div>

                <div class="distribucion-masiva">
                  <h4">📢 Distribución Masiva</h4>
                  
                  <div class="metodos-distribucion">
                    <h5">📬 Métodos de Distribución</h5>
                    <ul>
                      <li><strong>Email directo:</strong> Adjuntar archivo</li>
                      <li><strong>Enlaces compartidos:</strong> URL de acceso</li>
                      <li><strong>Códigos QR:</strong> Acceso móvil rápido</li>
                      <li><strong>Plataformas LMS:</strong> Sistemas gestión aprendizaje</li>
                      <li><strong>Redes sociales:</strong> Compartir público</li>
                    </ul>
                  </div>

                  <div class="consideraciones-distribucion">
                    <h5">⚠️ Consideraciones</h5>
                    <ul>
                      <li><strong>Tamaño archivo:</strong> Límites de email</li>
                      <li><strong>Formato apropiado:</strong> Según dispositivo receptor</li>
                      <li><strong>Compatibilidad:</strong> Versiones PowerPoint</li>
                      <li><strong>Bandwidth:</strong> Velocidad descarga</li>
                    </ul>
                  </div>
                </div>

                <div class="presentaciones-remotas">
                  <h4">💻 Presentaciones Remotas</h4>
                  
                  <div class="plataformas-video">
                    <h5">📹 Plataformas de Video</h5>
                    <ul>
                      <li><strong>Microsoft Teams:</strong> Integración nativa</li>
                      <li><strong>Zoom:</strong> Compartir pantalla</li>
                      <li><strong>Google Meet:</strong> Presentar pestaña</li>
                      <li><strong>Webex:</strong> Herramientas presentación</li>
                    </ul>
                  </div>

                  <div class="optimizacion-remota">
                    <h5">⚡ Optimización Remota</h5>
                    <ul>
                      <li><strong>Resolución apropiada:</strong> Para streaming</li>
                      <li><strong>Fuentes grandes:</strong> Legibilidad remota</li>
                      <li><strong>Contraste alto:</strong> Compresión video</li>
                      <li><strong>Animaciones simples:</strong> Evitar lag</li>
                      <li><strong>Interactividad:</strong> Polls, Q&A</li>
                    </ul>
                  </div>
                </div>

                <div class="mejores-practicas-colaboracion">
                  <h4">✅ Mejores Prácticas Colaboración</h4>
                  <ul>
                    <li><strong>Comunicación clara:</strong> Instrucciones específicas</li>
                    <li><strong>Deadlines definidos:</strong> Tiempos de revisión</li>
                    <li><strong>Roles claros:</strong> Quién hace qué</li>
                    <li><strong>Versión consolidada:</strong> Una persona integra cambios</li>
                    <li><strong>Backup regular:</strong> Copias durante proceso</li>
                    <li><strong>Documentación:</strong> Registro de decisiones</li>
                  </ul>
                </div>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/compartir-colaborar.jpg",
              video: "/videos/teoria/colaboracion-efectiva.mp4"
            },
            actividades: [
              'Configurar presentación compartida con permisos diferenciados',
              'Crear flujo de revisión con comentarios y resolución',
              'Distribuir presentación en múltiples formatos',
              'Optimizar presentación para delivery remoto'
            ]
          },
          {
            id: 4,
            titulo: "Preparación para Presentación en Vivo",
            contenido: `
              <div class="seccion-contenido">
                <h3">🎤 Preparación Profesional</h3>
                
                <div class="planificacion-previa">
                  <h4">📋 Planificación Previa</h4>
                  
                  <div class="analisis-audiencia">
                    <h5">👥 Análisis de Audiencia</h5>
                    <ul>
                      <li><strong>Tamaño grupo:</strong> Íntimo vs masivo</li>
                      <li><strong>Nivel conocimiento:</strong> Expertos vs principiantes</li>
                      <li><strong>Expectativas:</strong> Qué buscan obtener</li>
                      <li><strong>Tiempo disponible:</strong> Duración real vs planeada</li>
                      <li><strong>Interactividad deseada:</strong> Q&A, polls, discusión</li>
                    </ul>
                  </div>

                  <div class="contexto-evento">
                    <h5">🏛️ Contexto del Evento</h5>
                    <ul>
                      <li><strong>Tipo evento:</strong> Conferencia, meeting, curso</li>
                      <li><strong>Hora del día:</strong> Energía de audiencia</li>
                      <li><strong>Posición agenda:</strong> Primera, última, después almuerzo</li>
                      <li><strong>Presentaciones previas:</strong> Evitar repetición contenido</li>
                    </ul>
                  </div>
                </div>

                <div class="reconnaissance-tecnico">
                  <h4">🔧 Reconnaissance Técnico</h4>
                  
                  <div class="equipamiento-sala">
                    <h5">📺 Equipamiento de Sala</h5>
                    <ul>
                      <li><strong>Proyector/Pantalla:</strong> Resolución, tamaño</li>
                      <li><strong>Conectores:</strong> HDMI, VGA, USB-C</li>
                      <li><strong>Audio:</strong> Micrófono, sistema sonido</li>
                      <li><strong>Iluminación:</strong> Control luces, ventanas</li>
                      <li><strong>Internet:</strong> Velocidad, estabilidad WiFi</li>
                    </ul>
                  </div>

                  <div class="prueba-tecnica">
                    <h5">🧪 Prueba Técnica</h5>
                    <ul>
                      <li><strong>Llegada temprana:</strong> 30-45 minutos antes</li>
                      <li><strong>Conectividad:</strong> Probar todos los cables</li>
                      <li><strong>Resolución:</strong> Ajustar display settings</li>
                      <li><strong>Audio/Video:</strong> Probar clips multimedia</li>
                      <li><strong>Animaciones:</strong> Verificar fluidez</li>
                      <li><strong>Plan B:</strong> Método alternativo funcionando</li>
                    </ul>
                  </div>
                </div>

                <div class="estructura-presentacion">
                  <h4">📖 Estructura de Presentación</h4>
                  
                  <div class="apertura-efectiva">
                    <h5">🚀 Apertura Efectiva</h5>
                    <ul>
                      <li><strong>Hook inicial:</strong> Captar atención inmediata</li>
                      <li><strong>Agenda clara:</strong> Qué cubrir, cuánto tiempo</li>
                      <li><strong>Expectativas:</strong> Qué lograrán al final</li>
                      <li><strong>Housekeeping:</strong> Reglas interacción, breaks</li>
                    </ul>
                  </div>

                  <div class="desarrollo-contenido">
                    <h5">📊 Desarrollo del Contenido</h5>
                    <ul>
                      <li><strong>Regla 10-20-30:</strong> 10 slides, 20 min, fuente 30pt</li>
                      <li><strong>Estructura clara:</strong> Introducción → Desarrollo → Conclusión</li>
                      <li><strong>Transiciones verbales:</strong> Conectar ideas</li>
                      <li><strong>Checkpoints:</strong> Verificar comprensión</li>
                    </ul>
                  </div>

                  <div class="cierre-poderoso">
                    <h5">🎯 Cierre Poderoso</h5>
                    <ul>
                      <li><strong>Resumen clave:</strong> 3 puntos principales</li>
                      <li><strong>Call to action:</strong> Qué hacer después</li>
                      <li><strong>Q&A:</strong> Tiempo para preguntas</li>
                      <li><strong>Contacto:</strong> Cómo continuar conversación</li>
                    </ul>
                  </div>
                </div>

                <div class="tecnicas-presentacion">
                  <h4">🎭 Técnicas de Presentación</h4>
                  
                  <div class="manejo-nervios">
                    <h5">😌 Manejo de Nervios</h5>
                    <ul>
                      <li><strong>Preparación exhaustiva:</strong> Conocer contenido profundamente</li>
                      <li><strong>Práctica repetida:</strong> Ensayar múltiples veces</li>
                      <li><strong>Ejercicios respiración:</strong> Relajación previa</li>
                      <li><strong>Visualización positiva:</strong> Imaginarse exitoso</li>
                      <li><strong>Arranque fuerte:</strong> Primeros 2 minutos clave</li>
                    </ul>
                  </div>

                  <div class="lenguaje-corporal">
                    <h5">🕺 Lenguaje Corporal</h5>
                    <ul>
                      <li><strong>Postura abierta:</strong> Confianza y accesibilidad</li>
                      <li><strong>Contacto visual:</strong> Conectar con toda audiencia</li>
                      <li><strong>Gestos naturales:</strong> Apoyar mensaje verbal</li>
                      <li><strong>Movimiento intencionado:</strong> No caminar sin propósito</li>
                      <li><strong>Expresión facial:</strong> Concordante con contenido</li>
                    </ul>
                  </div>

                  <div class="voz-diccion">
                    <h5">🎙️ Voz y Dicción</h5>
                    <ul>
                      <li><strong>Volumen apropiado:</strong> Alcanzar toda la sala</li>
                      <li><strong>Ritmo variado:</strong> Evitar monotonía</li>
                      <li><strong>Pausas estratégicas:</strong> Enfatizar puntos importantes</li>
                      <li><strong>Pronunciación clara:</strong> Especialmente términos técnicos</li>
                      <li><strong>Tonos de voz:</strong> Emociones apropiadas al contenido</li>
                    </ul>
                  </div>
                </div>

                <div class="manejo-audiencia">
                  <h4">👥 Manejo de Audiencia</h4>
                  
                  <div class="engagement-interaccion">
                    <h5">🤝 Engagement e Interacción</h5>
                    <ul>
                      <li><strong>Preguntas retóricas:</strong> Activar pensamiento</li>
                      <li><strong>Polls en vivo:</strong> Participación activa</li>
                      <li><strong>Ejemplos relevantes:</strong> Conectar con experiencia</li>
                      <li><strong>Historias personales:</strong> Humanizar contenido</li>
                      <li><strong>Breaks regulares:</strong> Mantener atención</li>
                    </ul>
                  </div>

                  <div class="manejo-preguntas">
                    <h5">❓ Manejo de Preguntas</h5>
                    <ul>
                      <li><strong>Escuchar completamente:</strong> No interrumpir</li>
                      <li><strong>Repetir pregunta:</strong> Que todos escuchen</li>
                      <li><strong>Reconocer valor:</strong> Agradecer la pregunta</li>
                      <li><strong>Respuesta clara:</strong> Directa y concisa</li>
                      <li><strong>No sé = no sé:</strong> Honestidad sobre límites</li>
                    </ul>
                  </div>

                  <div class="situaciones-dificiles">
                    <h5">⚠️ Situaciones Difíciles</h5>
                    <ul>
                      <li><strong>Interrupciones:</strong> Manejo respetuoso pero firme</li>
                      <li><strong>Preguntas hostiles:</strong> Mantener profesionalismo</li>
                      <li><strong>Fallas técnicas:</strong> Continuar sin apoyo visual</li>
                      <li><strong>Tiempo insuficiente:</strong> Priorizar contenido clave</li>
                      <li><strong>Audiencia desinteresada:</strong> Técnicas re-engagement</li>
                    </ul>
                  </div>
                </div>

                <div class="post-presentacion">
                  <h4">📝 Post-Presentación</h4>
                  
                  <div class="seguimiento">
                    <h5">🔄 Seguimiento</h5>
                    <ul>
                      <li><strong>Material compartido:</strong> Enviar presentación prometida</li>
                      <li><strong>Respuestas pendientes:</strong> Investigar preguntas sin respuesta</li>
                      <li><strong>Evaluación:</strong> Solicitar feedback de audiencia</li>
                      <li><strong>Conexiones:</strong> Seguir conversaciones iniciadas</li>
                    </ul>
                  </div>

                  <div class="autoevaluacion">
                    <h5">🎯 Autoevaluación</h5>
                    <ul>
                      <li><strong>Qué funcionó bien:</strong> Elementos a repetir</li>
                      <li><strong>Áreas de mejora:</strong> Aspectos a desarrollar</li>
                      <li><strong>Feedback recibido:</strong> Incorporar sugerencias</li>
                      <li><strong>Lecciones aprendidas:</strong> Para próximas presentaciones</li>
                    </ul>
                  </div>
                </div>

                <div class="checklist-presentacion">
                  <h4">✅ Checklist Pre-Presentación</h4>
                  <ul>
                    <li><strong>□ Contenido finalizado:</strong> Sin cambios de último momento</li>
                    <li><strong>□ Respaldos preparados:</strong> USB, nube, PDF</li>
                    <li><strong>□ Equipamiento probado:</strong> Conectores funcionando</li>
                    <li><strong>□ Timing ensayado:</strong> Duración real conocida</li>
                    <li><strong>□ Notas preparadas:</strong> Puntos clave accesibles</li>
                    <li><strong>□ Q&A anticipado:</strong> Preguntas probables preparadas</li>
                    <li><strong>□ Contactos listos:</strong> Para distribución posterior</li>
                  </ul>
                </div>
              </div>
            `,
            multimedia: {
              imagen: "/images/teoria/presentacion-vivo.jpg",
              video: "/videos/teoria/presentar-exitoso.mp4"
            },
            actividades: [
              'Crear checklist personalizado para tipo de presentación específica',
              'Ensayar presentación completa midiendo timing real',
              'Preparar respuestas para 10 preguntas probables',
              'Configurar respaldos técnicos y plan de contingencia'
            ]
          }
        ],
        recursos: {
          documentos: [
            {
              titulo: "Guía Completa de Presentación Profesional",
              tipo: "PDF",
              url: "/recursos/powerpoint/presentacion-profesional.pdf"
            },
            {
              titulo: "Manual de Exportación y Formatos",
              tipo: "PDF",
              url: "/recursos/powerpoint/exportacion-manual.pdf"
            },
            {
              titulo: "Checklist de Presentación en Vivo",
              tipo: "PDF",
              url: "/recursos/powerpoint/checklist-presentacion.pdf"
            }
          ],
          videos: [
            {
              titulo: "Maestría del Modo Presentación",
              duracion: "18 min",
              url: "/videos/modo-presentacion-maestria.mp4"
            },
            {
              titulo: "Exportación Profesional Completa",
              duracion: "20 min",
              url: "/videos/exportacion-profesional.mp4"
            },
            {
              titulo: "Técnicas de Presentación Exitosa",
              duracion: "25 min",
              url: "/videos/presentacion-exitosa.mp4"
            }
          ],
          enlaces: [
            {
              titulo: "Presentar en PowerPoint - Guía Oficial",
              url: "https://support.microsoft.com/es-es/office/iniciar-la-presentación-y-ver-las-notas-en-la-vista-del-presentador"
            },
            {
              titulo: "Compartir Presentaciones",
              url: "https://support.microsoft.com/es-es/office/compartir-la-presentación-de-powerpoint"
            },
            {
              titulo: "Mejores Prácticas de Presentación",
              url: "https://support.microsoft.com/es-es/office/sugerencias-para-crear-y-realizar-una-presentación-eficaz"
            }
          ]
        },
        evaluacion: {
          preRequisitos: ["Tema 1: Primeros pasos", "Tema 2: Vistas y diapositivas", "Tema 3: Formato de texto", "Tema 4: Gestión de imágenes", "Tema 5: Gráficos y elementos visuales", "Tema 6: Animaciones y transiciones"],
          criterios: [
            "Dominar modo presentación y herramientas del presentador",
            "Exportar a múltiples formatos según necesidades específicas",
            "Configurar colaboración efectiva y control de acceso",
            "Preparar presentaciones técnicamente para delivery exitoso",
            "Aplicar técnicas profesionales de presentación en vivo",
            "Ejecutar seguimiento post-presentación efectivo"
          ],
          tiempoEstimado: "35 minutos"
        }
      }
    }
  };

  // Funciones para obtener contenido específico
  const getContenidoLeccion = (cursoId, temaId) => {
    return contenidoDatabase[cursoId]?.[temaId] || null;
  };

  const getSecciones = (cursoId, temaId) => {
    const contenido = getContenidoLeccion(cursoId, temaId);
    return contenido?.secciones || [];
  };

  const getSeccion = (cursoId, temaId, seccionId) => {
    const secciones = getSecciones(cursoId, temaId);
    return secciones.find(seccion => seccion.id === parseInt(seccionId));
  };

  const getRecursos = (cursoId, temaId) => {
    const contenido = getContenidoLeccion(cursoId, temaId);
    return contenido?.recursos || {};
  };

  const value = {
    getContenidoLeccion,
    getSecciones,
    getSeccion,
    getRecursos
  };

  return (
    <ContenidoContext.Provider value={value}>
      {children}
    </ContenidoContext.Provider>
  );
};
