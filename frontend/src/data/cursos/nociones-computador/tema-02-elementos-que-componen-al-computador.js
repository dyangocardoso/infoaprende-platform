/**
 * Tema 2: Elementos que componen al computador
 * Migrado desde sistema monolítico
 */

export default {
  "id": "2",
  "titulo": "Elementos que componen al computador",
  "duracion": "20-25 minutos",
  "objetivos": [
    "Identificar monitor, CPU, bocinas, ratón y teclado",
    "Comprender la función de cada componente",
    "Aprender las conexiones básicas",
    "Conocer el cuidado de cada elemento"
  ],
  "secciones": [
    {
      id: 1,
      titulo: "El Monitor",
      contenido: `
        <h3>🖥️ Monitor - Ventana al Mundo Digital</h3>
        <img
              src="/images/teoria/monitor.png"
              srcset="/images/teoria/monitor.png 400w"
            sizes="(max-width:400px) 100vw, 400px"
            alt="Monitor"
            loading="lazy"
            style="width:100%;max-width:200px;height:auto;display:block;margin:0 auto;"
          />
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
        <img
              src="/images/teoria/cpu.png"
              srcset="/images/teoria/cpu.png 200w"
            sizes="(max-width:200px) 100vw, 200px"
            alt="CPU"
            loading="lazy"
            style="width:100%;max-width:200px;height:auto;display:block;margin:0 auto;"
          />
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
         <img
              src="/images/teoria/bocinas.jpg"
              srcset="/images/teoria/bocinas.jpg 400w"
            sizes="(max-width:400px) 100vw, 400px"
            alt="Bocinas"
            loading="lazy"
            style="width:100%;max-width:200px;height:auto;display:block;margin:0 auto;"
          />
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
        <img
              src="/images/teoria/mouse.png"
              srcset="/images/teoria/mouse.png 200w"
            sizes="(max-width:200px) 100vw, 200px"
            alt="Ratón"
            loading="lazy"
            style="width:100%;max-width:200px;height:auto;display:block;margin:0 auto;"
          />
        <div class="componente-detalle">
          <h4>¿Qué es?</h4>
          <p>El <strong>ratón</strong> o <strong>mouse</strong> es un dispositivo de entrada que permite controlar el cursor en la pantalla y realizar selecciones.</p>
          
          <h4>Partes del Ratón:</h4>

          <style>
            /* Alinear imagen a la derecha del contenido en la sección "Partes del Ratón" */
            .partes-raton.media { display: flex; gap: 1rem; align-items: flex-start; flex-wrap: wrap; }
            .partes-raton .media__content { flex: 1 1 300px; }
            /* fuerza ancho fijo hasta 500px pero permite responsividad */
            .partes-raton .media__img { flex: 0 0 500px; max-width: 500px; }
            .partes-raton .media__img img { width: 100%; height: auto; display: block; }
            @media (max-width: 600px) {
              .partes-raton.media { flex-direction: column; align-items: center; text-align: center; }
              .partes-raton .media__img { order: 2; max-width: 100%; flex: 0 0 auto; }
              .partes-raton .media__content { order: 1; width: 100%; }
            }
          </style>

          <div class="partes-raton media">
            <div class="media__content">
              <ul>
                <li><strong>Botón izquierdo:</strong> Para seleccionar y hacer clic</li>
                <li><strong>Botón derecho:</strong> Para menús contextuales</li>
                <li><strong>Rueda central:</strong> Para desplazarse (scroll)</li>
                <li><strong>Botón central:</strong> Para cambiar el DPI (sensibilidad del cursor).</li>
                <li><strong>Botones laterales:</strong> Para navegación (adelante/atrás) o comandos en juegos.</li>
                <li><strong>Sensor óptico:</strong> Detecta el movimiento</li>
                <li><strong>Cable o receptor:</strong> Para conexión con la CPU</li>
              </ul>
            </div>
            <div class="media__img">
              <img
                src="/images/teoria/partes_del_mouse.png"
                srcset="/images/teoria/partes_del_mouse.png 500w"
                sizes="(max-width:600px) 100vw, 500px"
                alt="Partes del Ratón"
                loading="lazy"
                style="width:100%;max-width:500px;display:block;margin:0 auto;height:auto;"
              />
            </div>
          </div>

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
        <img
              src="/images/teoria/teclado.jpg"
              srcset="/images/teoria/teclado.jpg 400w"
            sizes="(max-width:400px) 100vw, 400px"
            alt="Teclado"
            loading="lazy"
            style="width:100%;max-width:300px;height:auto;display:block;margin:0 auto;"
          />
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
        </div>
      `
    }
  ],
  recursos: {
    documentos: [
      { titulo: 'Manual de componentes básicos', url: '/recursos/nociones-computador/componentes-manual.pdf' }
    ],
    enlaces: [
      { titulo: 'Partes de un computador', url: 'https://www.example.com/partes-computador' },
      { titulo: 'Conexiones básicas (USB, HDMI, audio)', url: 'https://es.wikihow.com/Conectar-perif%C3%A9ricos' }
    ],
    videos: [
      { titulo: 'Conoce las partes del computador', url: 'https://www.youtube.com/watch?v=Y3g7Xz2yXkM' }
    ]
  }
};
