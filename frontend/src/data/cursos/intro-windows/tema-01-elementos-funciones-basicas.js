/**
 * Tema 1: Elementos y funciones básicas
 * Curso: Introducción al Sistema Operativo Windows
 */

export default {
  id: '1',
  titulo: "Elementos y funciones básicas",
  tematica: "Ratón, teclado, ventanas, escritorio, barra de tareas y menú Inicio",
  duracion: "25-30 minutos",
  objetivos: [
    "Dominar el uso correcto del ratón y sus diferentes tipos de clic",
    "Conocer las teclas principales del teclado y atajos básicos",
    "Gestionar ventanas: maximizar, minimizar, cerrar y organizar",
    "Navegar eficientemente por el escritorio y sus elementos",
    "Utilizar la barra de tareas como centro de control",
    "Acceder y navegar por el menú Inicio de Windows"
  ],
  secciones: [
    {
      id: 1,
      titulo: "Uso del Ratón en Windows",
      contenido: `
        <h3>🖱️ Dominio del Ratón</h3>
        <div class="uso-raton">
          <h4>🎯 Posición Correcta</h4>
          <p>El ratón debe manejarse con la mano relajada, apoyando la muñeca en la superficie y usando principalmente los dedos para los movimientos.</p>
          <h4>🔄 Tipos de Clic</h4>
          <div class="tipos-clic">
            <h5>🖱️ Clic Izquierdo (Simple)</h5>
            <ul>
              <li><strong>Función:</strong> Seleccionar elementos</li>
              <li><strong>Uso común:</strong> Abrir menús, seleccionar archivos</li>
              <li><strong>Técnica:</strong> Presión rápida y suave</li>
            </ul>
            <h5>🖱️ Doble Clic</h5>
            <ul>
              <li><strong>Función:</strong> Abrir programas y archivos</li>
              <li><strong>Uso común:</strong> Ejecutar aplicaciones, abrir documentos</li>
              <li><strong>Técnica:</strong> Dos clics rápidos en el mismo punto</li>
            </ul>
            <h5>🖱️ Clic Derecho</h5>
            <ul>
              <li><strong>Función:</strong> Mostrar menú contextual</li>
              <li><strong>Uso común:</strong> Opciones avanzadas, propiedades</li>
              <li><strong>Técnica:</strong> Clic con el botón derecho</li>
              <li><strong>Consejo:</strong> Funciona en casi cualquier elemento</li>
            </ul>
            <h5>🖱️ Arrastrar y Soltar</h5>
            <ul>
              <li><strong>Función:</strong> Mover elementos</li>
              <li><strong>Uso común:</strong> Organizar archivos, mover ventanas</li>
              <li><strong>Técnica:</strong> Mantener presionado y mover</li>
              <li><strong>Consejo:</strong> Soltar sobre el destino deseado</li>
            </ul>
          </div>
          <h4>🎡 Rueda del Ratón</h4>
          <ul>
            <li><strong>Desplazamiento vertical:</strong> Mover hacia arriba/abajo en páginas</li>
            <li><strong>Zoom:</strong> Ctrl + rueda para acercar/alejar</li>
            <li><strong>Clic en rueda:</strong> Abrir enlaces en nueva pestaña (navegadores)</li>
          </ul>
          <h4>💡 Consejos para Principiantes</h4>
          <div class="consejos-raton">
            <ul>
              <li>Si tienes dificultades con el doble clic, practica en el escritorio</li>
              <li>Ajusta la velocidad del ratón en Configuración > Dispositivos</li>
              <li>Para zurdos: invertir botones en configuración</li>
              <li>Mantén el ratón limpio para mejor precisión</li>
            </ul>
          </div>
        </div>
      `,
      multimedia: [
        {
          tipo: "imagen",
          descripcion: "Uso correcto del ratón en Windows",
          url: "/images/teoria/uso-raton-windows.jpg"
        },
        {
          tipo: "infografia",
          descripcion: "Tipos de clic y funciones",
          url: "/images/teoria/tipos-clic-raton.png"
        },
        {
          tipo: "video",
          descripcion: "Demostración práctica de los tipos de clic",
          url: "/videos/maestria-raton-teclado.mp4"
        }
      ],
      actividades: [
        {
          tipo: "practica",
          pregunta: "Practica los 4 tipos de clic en diferentes elementos del escritorio",
          ayuda: "Prueba: clic simple en archivo, doble clic para abrir, clic derecho para menú, arrastrar a otra ubicación"
        },
        {
          tipo: "observacion",
          pregunta: "Observa cómo cambia el cursor al pasar sobre diferentes elementos",
          ayuda: "Pon el cursor sobre iconos, bordes de ventana y enlaces para ver los cambios"
        },
        {
          tipo: "exploracion",
          pregunta: "Explora la configuración del ratón en Windows",
          ayuda: "Ve a Configuración > Dispositivos > Ratón y prueba cambiar la velocidad o invertir botones"
        }
      ],
      recursos: {
        documentos: [
          {
            titulo: "Guía de uso del ratón en Windows",
            url: "/docs/guia-uso-raton.pdf",
            tipo: "pdf"
          }
        ],
        enlaces: [
          {
            titulo: "Soporte Microsoft - Ratón y punteros",
            url: "https://support.microsoft.com/es-es/windows/raton-y-punteros",
            tipo: "externo"
          }
        ],
        videos: [
          {
            titulo: "Maestría del Ratón y Teclado en Windows",
            url: "/videos/maestria-raton-teclado.mp4",
            duracion: "12:30"
          }
        ],
        imagenes: [
          {
            titulo: "Tipos de clic en el ratón",
            url: "/images/teoria/tipos-clic-raton.png"
          }
        ]
      }
    },
    {
      id: 2,
      titulo: "Teclado: Teclas Principales y Atajos",
      contenido: `
        <h3>⌨️ Dominando el Teclado</h3>
        <div class="teclado-windows">
          <h4>🗝️ Teclas Especiales de Windows</h4>
          <h5>🪟 Tecla Windows</h5>
          <ul>
            <li><strong>Función principal:</strong> Abre el menú Inicio</li>
            <li><strong>Combinaciones importantes:</strong>
              <ul>
                <li><strong>Windows + E:</strong> Abrir Explorador de archivos</li>
                <li><strong>Windows + D:</strong> Mostrar escritorio</li>
                <li><strong>Windows + L:</strong> Bloquear sesión</li>
                <li><strong>Windows + I:</strong> Abrir Configuración</li>
                <li><strong>Windows + X:</strong> Menú avanzado de sistema</li>
              </ul>
            </li>
          </ul>
          <h5>⌨️ Atajos Básicos Universales</h5>
          <div class="atajos-basicos">
            <h6>📋 Edición:</h6>
            <ul>
              <li><strong>Ctrl + C:</strong> Copiar</li>
              <li><strong>Ctrl + V:</strong> Pegar</li>
              <li><strong>Ctrl + X:</strong> Cortar</li>
              <li><strong>Ctrl + Z:</strong> Deshacer</li>
              <li><strong>Ctrl + Y:</strong> Rehacer</li>
            </ul>
            <h6>📁 Archivos:</h6>
            <ul>
              <li><strong>Ctrl + A:</strong> Seleccionar todo</li>
              <li><strong>Ctrl + S:</strong> Guardar</li>
              <li><strong>Ctrl + F:</strong> Buscar</li>
              <li><strong>F2:</strong> Renombrar archivo seleccionado</li>
              <li><strong>Delete:</strong> Enviar a papelera</li>
            </ul>
            <h6>🪟 Ventanas:</h6>
            <ul>
              <li><strong>Alt + Tab:</strong> Cambiar entre ventanas abiertas</li>
              <li><strong>Alt + F4:</strong> Cerrar ventana actual</li>
              <li><strong>Windows + ↑:</strong> Maximizar ventana</li>
              <li><strong>Windows + ↓:</strong> Minimizar ventana</li>
              <li><strong>Windows + ←/→:</strong> Ventana a la mitad izquierda/derecha</li>
            </ul>
          </div>
          <h4>🖥️ Teclado en Pantalla</h4>
          <div class="teclado-pantalla">
            <h5>¿Qué es?</h5>
            <p>El teclado en pantalla es una herramienta de accesibilidad que permite escribir usando el ratón o dispositivos táctiles.</p>
            <h5>🔓 Activar Teclado en Pantalla:</h5>
            <ol>
              <li><strong>Método 1:</strong> Configuración → Accesibilidad → Teclado → Teclado en pantalla</li>
              <li><strong>Método 2:</strong> Buscar "Teclado en pantalla" en el menú Inicio</li>
              <li><strong>Método 3:</strong> Ejecutar (Windows + R) → "osk" → Enter</li>
            </ol>
            <h5>🎯 Cuándo Usarlo:</h5>
            <ul>
              <li>Teclado físico dañado o no disponible</li>
              <li>Dispositivos táctiles sin teclado</li>
              <li>Seguridad adicional para contraseñas importantes</li>
              <li>Accesibilidad para personas con discapacidades motoras</li>
            </ul>
          </div>
          <h4>💪 Mejores Prácticas</h4>
          <ul>
            <li><strong>Postura:</strong> Mantén las muñecas rectas y relajadas</li>
            <li><strong>Velocidad:</strong> Comienza despacio, la velocidad viene con la práctica</li>
            <li><strong>Atajos:</strong> Aprende gradualmente, no todos a la vez</li>
            <li><strong>Memoria muscular:</strong> Usa los atajos constantemente para automatizarlos</li>
          </ul>
        </div>
      `,
      multimedia: [
        {
          tipo: "imagen",
          descripcion: "Teclado físico de Windows y teclas principales",
          url: "/images/teoria/teclado-windows.jpg"
        },
        {
          tipo: "infografia",
          descripcion: "Infografía de atajos básicos de teclado",
          url: "/images/teoria/atajos-teclado-basicos.png"
        },
        {
          tipo: "video",
          descripcion: "Tutorial de uso del teclado en pantalla y atajos",
          url: "/videos/teclado-en-pantalla-tutorial.mp4"
        }
      ],
      actividades: [
        {
          tipo: "memorizacion",
          pregunta: "Memoriza 5 atajos básicos: Ctrl+C, Ctrl+V, Windows+E, Alt+Tab, Windows+D",
          ayuda: "Úsalos repetidamente durante 10 minutos hasta que se vuelvan automáticos"
        },
        {
          tipo: "practica",
          pregunta: "Activa el teclado en pantalla y escribe tu nombre completo",
          ayuda: "Busca 'teclado en pantalla' en el menú Inicio y úsalo solo con el ratón"
        },
        {
          tipo: "exploracion",
          pregunta: "Explora la configuración de accesibilidad del teclado en Windows",
          ayuda: "Ve a Configuración → Accesibilidad → Teclado y prueba las opciones disponibles"
        }
      ],
      recursos: {
        documentos: [
          {
            titulo: "Manual de Atajos de Teclado para Windows",
            url: "/docs/atajos-teclado-windows.pdf",
            tipo: "pdf"
          }
        ],
        enlaces: [
          {
            titulo: "Soporte Microsoft - Atajos de Teclado Windows",
            url: "https://support.microsoft.com/es-es/windows/atajos-de-teclado-de-windows",
            tipo: "externo"
          },
          {
            titulo: "Accesibilidad en Windows",
            url: "https://support.microsoft.com/es-es/windows/accesibilidad-windows",
            tipo: "externo"
          }
        ],
        videos: [
          {
            titulo: "Tutorial de Teclado en Pantalla y Atajos",
            url: "/videos/teclado-en-pantalla-tutorial.mp4",
            duracion: "7:40"
          }
        ],
        imagenes: [
          {
            titulo: "Infografía de atajos de teclado",
            url: "/images/teoria/atajos-teclado-basicos.png"
          }
        ]
      }
    },
    {
      id: 3,
      titulo: "Gestión de Ventanas",
      contenido: `
        <h3>🪟 Dominando las Ventanas de Windows</h3>
        <div class="gestion-ventanas">
          <h4>🏗️ Anatomía de una Ventana</h4>
          <div class="partes-ventana">
            <h5>📋 Barra de Título</h5>
            <ul>
              <li><strong>Contenido:</strong> Nombre del programa y documento actual</li>
              <li><strong>Función:</strong> Arrastrar para mover ventana</li>
              <li><strong>Doble clic:</strong> Maximizar/restaurar ventana</li>
            </ul>
            <h5>🎛️ Botones de Control</h5>
            <ul>
              <li><strong>➖ Minimizar:</strong> Oculta ventana en barra de tareas</li>
              <li><strong>🔲 Maximizar/Restaurar:</strong> Pantalla completa o tamaño normal</li>
              <li><strong>❌ Cerrar:</strong> Cierra el programa</li>
            </ul>
            <h5>📏 Bordes de Ventana</h5>
            <ul>
              <li><strong>Función:</strong> Redimensionar ventana</li>
              <li><strong>Cursor:</strong> Cambia a flechas de redimensión</li>
              <li><strong>Esquinas:</strong> Redimensionar diagonal</li>
            </ul>
          </div>
          <h4>⚙️ Operaciones Básicas</h4>
          <div class="operaciones-ventana">
            <h5>📏 Redimensionar</h5>
            <ul>
              <li><strong>Método 1:</strong> Arrastrar bordes o esquinas</li>
              <li><strong>Método 2:</strong> Alt + Espacio → Tamaño → flechas del teclado</li>
              <li><strong>Consejo:</strong> Las esquinas permiten redimensionar en dos direcciones</li>
            </ul>
            <h5>🚚 Mover</h5>
            <ul>
              <li><strong>Método 1:</strong> Arrastrar barra de título</li>
              <li><strong>Método 2:</strong> Alt + Espacio → Mover → flechas del teclado</li>
              <li><strong>Ventana maximizada:</strong> Arrastrar hacia abajo para restaurar y mover</li>
            </ul>
            <h5>🎯 Organizar Múltiples Ventanas</h5>
            <ul>
              <li><strong>Aero Snap:</strong> Arrastrar a bordes para auto-organizar</li>
              <li><strong>Cascada:</strong> Clic derecho en barra de tareas → "Ventanas en cascada"</li>
              <li><strong>Lado a lado:</strong> "Mostrar ventanas en paralelo"</li>
              <li><strong>Minimizar todas:</strong> Windows + M</li>
            </ul>
          </div>
          <h4>🎨 Aero Snap: Organización Automática</h4>
          <div class="aero-snap">
            <p>Windows incluye una función llamada <strong>Aero Snap</strong> que organiza automáticamente las ventanas cuando las arrastras a ciertos lugares de la pantalla.</p>
            <h5>📍 Zonas de Snap:</h5>
            <ul>
              <li><strong>Borde superior:</strong> Maximizar ventana</li>
              <li><strong>Borde izquierdo:</strong> Ventana ocupa mitad izquierda</li>
              <li><strong>Borde derecho:</strong> Ventana ocupa mitad derecha</li>
              <li><strong>Esquinas:</strong> Ventana ocupa un cuarto de pantalla</li>
            </ul>
            <h5>⌨️ Atajos de Snap:</h5>
            <ul>
              <li><strong>Windows + ↑:</strong> Maximizar</li>
              <li><strong>Windows + ↓:</strong> Minimizar/restaurar</li>
              <li><strong>Windows + ←:</strong> Mitad izquierda</li>
              <li><strong>Windows + →:</strong> Mitad derecha</li>
            </ul>
          </div>
          <h4>🔄 Cambio entre Ventanas</h4>
          <div class="cambio-ventanas">
            <h5>⌨️ Con Teclado:</h5>
            <ul>
              <li><strong>Alt + Tab:</strong> Vista rápida con iconos</li>
              <li><strong>Windows + Tab:</strong> Vista de tareas con miniaturas</li>
              <li><strong>Alt + Esc:</strong> Cambio directo sin vista previa</li>
            </ul>
            <h5>🖱️ Con Ratón:</h5>
            <ul>
              <li><strong>Barra de tareas:</strong> Clic en programa deseado</li>
              <li><strong>Iconos de ventana:</strong> Pasar ratón sobre icono para vista previa</li>
              <li><strong>Alt + clic:</strong> En barra de tareas para cerrar</li>
            </ul>
          </div>
          <h4>💡 Consejos Avanzados</h4>
          <ul>
            <li><strong>Sacudir ventana:</strong> Agarrar barra de título y sacudir para minimizar todas las demás</li>
            <li><strong>Ventana siempre visible:</strong> Algunas apps tienen opción "Always on top"</li>
            <li><strong>Múltiples monitores:</strong> Windows + Shift + ← o → para mover entre pantallas</li>
            <li><strong>Escritorios virtuales:</strong> Windows + Tab → "Nuevo escritorio"</li>
          </ul>
        </div>
      `,
      multimedia: [
        {
          tipo: "imagen",
          descripcion: "Gestión de ventanas en Windows",
          url: "/images/teoria/gestion-ventanas.jpg"
        },
        {
          tipo: "infografia",
          descripcion: "Guía visual de Aero Snap y organización de ventanas",
          url: "/images/teoria/aero-snap-guide.png"
        },
        {
          tipo: "video",
          descripcion: "Video de organización y gestión de ventanas en Windows",
          url: "/videos/organizacion-ventanas-windows.mp4"
        }
      ],
      actividades: [
        {
          tipo: "practica",
          pregunta: "Abre 3 programas diferentes y organízalos usando Aero Snap",
          ayuda: "Intenta: una ventana maximizada, dos ventanas lado a lado, y practica el cambio con Alt+Tab"
        },
        {
          tipo: "exploracion",
          pregunta: "Experimenta con todas las formas de redimensionar y mover ventanas",
          ayuda: "Prueba arrastrar bordes, esquinas, barra de título, y usar atajos de teclado"
        },
        {
          tipo: "memorizacion",
          pregunta: "Memoriza los atajos de teclado para organizar ventanas (Windows + flechas, Alt + Tab)",
          ayuda: "Haz una lista y repítelos varias veces hasta recordarlos sin mirar"
        }
      ],
      recursos: {
        documentos: [
          {
            titulo: "Guía de organización de ventanas en Windows",
            url: "/docs/guia-organizacion-ventanas.pdf",
            tipo: "pdf"
          }
        ],
        enlaces: [
          {
            titulo: "Soporte Microsoft - Organizar ventanas",
            url: "https://support.microsoft.com/es-es/windows/organizar-ventanas-en-windows",
            tipo: "externo"
          }
        ],
        videos: [
          {
            titulo: "Organización Avanzada de Ventanas",
            url: "/videos/organizacion-ventanas-avanzada.mp4",
            duracion: "8:45"
          }
        ],
        imagenes: [
          {
            titulo: "Guía visual de Aero Snap",
            url: "/images/teoria/aero-snap-guide.png"
          }
        ]
      }
    },
    {
      id: 4,
      titulo: "Escritorio: Espacio de Trabajo Principal",
      contenido: `
        <h3>🖥️ El Escritorio de Windows</h3>
        <div class="escritorio-windows">
          <h4>🧩 Elementos del Escritorio</h4>
          <div class="elementos-escritorio">
            <h5>🎨 Fondo de Pantalla</h5>
            <ul>
              <li><strong>Función:</strong> Imagen decorativa de fondo</li>
              <li><strong>Personalización:</strong> Clic derecho → Personalizar</li>
              <li><strong>Tipos:</strong> Imagen, color sólido, presentación</li>
            </ul>
            <h5>📁 Iconos del Escritorio</h5>
            <ul>
              <li><strong>Este equipo:</strong> Acceso a discos y archivos del sistema</li>
              <li><strong>Papelera de reciclaje:</strong> Archivos eliminados temporalmente</li>
              <li><strong>Accesos directos:</strong> Enlaces rápidos a programas</li>
              <li><strong>Archivos y carpetas:</strong> Contenido guardado directamente</li>
            </ul>
            <h5>📊 Barra de Tareas</h5>
            <ul>
              <li><strong>Ubicación:</strong> Generalmente en la parte inferior</li>
              <li><strong>Función:</strong> Centro de control de aplicaciones</li>
              <li><strong>Componentes:</strong> Menú Inicio, programas anclados, notificaciones</li>
            </ul>
          </div>
          <h4>🎯 Acciones Básicas en el Escritorio</h4>
          <div class="acciones-escritorio">
            <h5>🖱️ Clic Simple</h5>
            <ul>
              <li><strong>En espacio vacío:</strong> Deseleccionar elementos</li>
              <li><strong>En icono:</strong> Seleccionar elemento</li>
              <li><strong>En archivo:</strong> Resaltar para próxima acción</li>
            </ul>
            <h5>🖱️ Doble Clic</h5>
            <ul>
              <li><strong>En programa:</strong> Ejecutar aplicación</li>
              <li><strong>En archivo:</strong> Abrir con programa predeterminado</li>
              <li><strong>En carpeta:</strong> Abrir explorador de archivos</li>
            </ul>
            <h5>🖱️ Clic Derecho</h5>
            <ul>
              <li><strong>En espacio vacío:</strong> Menú de personalización</li>
              <li><strong>En archivo:</strong> Opciones de archivo (copiar, eliminar, propiedades)</li>
              <li><strong>En programa:</strong> Opciones específicas del programa</li>
            </ul>
            <h5>🖱️ Arrastrar y Soltar</h5>
            <ul>
              <li><strong>Organizar iconos:</strong> Mover elementos por el escritorio</li>
              <li><strong>Copiar archivos:</strong> Desde otras ubicaciones</li>
              <li><strong>Crear accesos directos:</strong> Arrastrando con botón derecho</li>
            </ul>
          </div>
          <h4>🎨 Personalización del Escritorio</h4>
          <div class="personalizacion-escritorio">
            <h5>🖼️ Cambiar Fondo de Pantalla</h5>
            <ol>
              <li>Clic derecho en espacio vacío del escritorio</li>
              <li>Seleccionar "Personalizar"</li>
              <li>Elegir "Fondo"</li>
              <li>Seleccionar imagen, color sólido o presentación</li>
              <li>Configurar ajuste de imagen (rellenar, ajustar, etc.)</li>
            </ol>
            <h5>🎭 Temas</h5>
            <ul>
              <li><strong>Acceso:</strong> Personalización → Temas</li>
              <li><strong>Componentes:</strong> Fondo, colores, sonidos, cursor</li>
              <li><strong>Predefinidos:</strong> Windows incluye varios temas</li>
              <li><strong>Personalizado:</strong> Crear tema propio</li>
            </ul>
            <h5>🔧 Iconos del Escritorio</h5>
            <ol>
              <li>Personalización → Temas → Configuración de iconos del escritorio</li>
              <li>Activar/desactivar iconos del sistema</li>
              <li>Cambiar iconos predeterminados</li>
              <li>Restaurar iconos originales</li>
            </ol>
          </div>
          <h4>🔗 Creación de Accesos Directos</h4>
          <div class="accesos-directos">
            <h5>📝 Métodos de Creación:</h5>
            <h6>Método 1: Clic Derecho</h6>
            <ol>
              <li>Clic derecho en espacio vacío</li>
              <li>Nuevo → Acceso directo</li>
              <li>Buscar ubicación del programa</li>
              <li>Asignar nombre al acceso directo</li>
            </ol>
            <h6>Método 2: Desde Menú Inicio</h6>
            <ol>
              <li>Abrir menú Inicio</li>
              <li>Encontrar programa deseado</li>
              <li>Clic derecho → "Más" → "Abrir ubicación de archivo"</li>
              <li>Arrastrar al escritorio</li>
            </ol>
            <h6>Método 3: Desde Explorador</h6>
            <ol>
              <li>Navegar hasta archivo .exe del programa</li>
              <li>Clic derecho en archivo</li>
              <li>"Enviar a" → "Escritorio (crear acceso directo)"</li>
            </ol>
            <h5>✏️ Personalizar Accesos Directos:</h5>
            <ul>
              <li><strong>Cambiar icono:</strong> Propiedades → Cambiar icono</li>
              <li><strong>Renombrar:</strong> F2 o clic derecho → Cambiar nombre</li>
              <li><strong>Eliminar:</strong> Suprimir (solo elimina acceso directo, no programa)</li>
            </ul>
          </div>
          <h4>🧹 Organización del Escritorio</h4>
          <div class="organizacion-escritorio">
            <h5>📐 Organización Automática:</h5>
            <ul>
              <li><strong>Auto organizar:</strong> Clic derecho → Ver → Organizar iconos automáticamente</li>
              <li><strong>Alinear a cuadrícula:</strong> Mantiene iconos alineados</li>
              <li><strong>Ordenar por:</strong> Nombre, tamaño, fecha, tipo</li>
            </ul>
            <h5>🗂️ Buenas Prácticas:</h5>
            <ul>
              <li>Mantener solo accesos directos esenciales</li>
              <li>Usar carpetas para agrupar elementos relacionados</li>
              <li>Nombres descriptivos y cortos</li>
              <li>Limpiar regularmente elementos no utilizados</li>
            </ul>
          </div>
          <h4>💡 Consejos Avanzados</h4>
          <ul>
            <li><strong>Mostrar escritorio:</strong> Windows + D para ocultar todas las ventanas</li>
            <li><strong>Peek del escritorio:</strong> Hover en esquina inferior derecha</li>
            <li><strong>Gadgets y widgets:</strong> Información útil en el escritorio (Windows 10/11)</li>
            <li><strong>Múltiples escritorios:</strong> Windows + Tab para crear escritorios virtuales</li>
          </ul>
        </div>
      `,
      multimedia: [
        {
          tipo: "imagen",
          url: "/images/teoria/escritorio-windows.jpg",
          descripcion: "Vista general del escritorio de Windows"
        },
        {
          tipo: "infografia",
          url: "/images/teoria/elementos-escritorio.png",
          descripcion: "Infografía de los elementos del escritorio"
        },
        {
          tipo: "video",
          url: "/videos/personalizacion-escritorio-completa.mp4",
          descripcion: "Video tutorial de personalización del escritorio"
        }
      ],
      actividades: [
        {
          tipo: "personalizacion",
          pregunta: "Personaliza tu escritorio: cambia el fondo, crea 3 accesos directos útiles",
          ayuda: "Clic derecho → Personalizar para fondo, y crea accesos directos a programas que uses frecuentemente"
        },
        {
          tipo: "organizacion",
          pregunta: "Organiza todos los iconos del escritorio de forma lógica",
          ayuda: "Agrupa por categorías: trabajo, entretenimiento, herramientas del sistema"
        },
        {
          tipo: "exploracion",
          pregunta: "Explora los widgets y gadgets disponibles en tu versión de Windows",
          ayuda: "Busca en la barra de tareas o menú Inicio la opción de widgets/gadgets y prueba añadir uno al escritorio"
        }
      ]
    },
    {
      id: 5,
      titulo: "Barra de Tareas: Centro de Control",
      contenido: `
        <h3>📊 La Barra de Tareas: Tu Centro de Control</h3>
        <div class="barra-tareas">
          <h4>🧩 Componentes de la Barra de Tareas</h4>
          <div class="componentes-barra">
            <h5>🪟 Botón de Inicio</h5>
            <ul>
              <li><strong>Ubicación:</strong> Extremo izquierdo de la barra</li>
              <li><strong>Función:</strong> Acceso al menú principal de Windows</li>
              <li><strong>Clic:</strong> Abre/cierra menú Inicio</li>
              <li><strong>Clic derecho:</strong> Menú de herramientas avanzadas</li>
            </ul>
            <h5>🔍 Cuadro de Búsqueda</h5>
            <ul>
              <li><strong>Función:</strong> Buscar programas, archivos y configuraciones</li>
              <li><strong>Activación:</strong> Clic en cuadro o tecla Windows</li>
              <li><strong>Búsqueda web:</strong> Integración con navegador predeterminado</li>
              <li><strong>Personalización:</strong> Ocultar, mostrar icono o barra completa</li>
            </ul>
            <h5>📌 Programas Anclados</h5>
            <ul>
              <li><strong>Función:</strong> Acceso rápido a aplicaciones favoritas</li>
              <li><strong>Anclar:</strong> Clic derecho en programa → "Anclar a la barra de tareas"</li>
              <li><strong>Desanclar:</strong> Clic derecho en icono anclado → "Desanclar"</li>
              <li><strong>Reorganizar:</strong> Arrastrar iconos para cambiar orden</li>
            </ul>
            <h5>📱 Programas Abiertos</h5>
            <ul>
              <li><strong>Visualización:</strong> Iconos con indicador de ventana activa</li>
              <li><strong>Agrupación:</strong> Múltiples ventanas del mismo programa se agrupan</li>
              <li><strong>Vista previa:</strong> Hover sobre icono para ver miniaturas</li>
              <li><strong>Cambio rápido:</strong> Clic para alternar entre ventanas</li>
            </ul>
            <h5>🔔 Área de Notificaciones</h5>
            <ul>
              <li><strong>Iconos del sistema:</strong> Volumen, red, batería, fecha/hora</li>
              <li><strong>Notificaciones:</strong> Alertas de aplicaciones y sistema</li>
              <li><strong>Iconos ocultos:</strong> Flecha para mostrar iconos adicionales</li>
              <li><strong>Centro de actividades:</strong> Panel de notificaciones (Windows 10/11)</li>
            </ul>
          </div>
          <h4>⚙️ Funciones Principales</h4>
          <div class="funciones-barra">
            <h5>🚀 Acceso Rápido a Programas</h5>
            <ul>
              <li><strong>Clic simple:</strong> Abrir programa o cambiar a ventana activa</li>
              <li><strong>Clic derecho:</strong> Lista de tareas recientes o menú contextual</li>
              <li><strong>Shift + clic:</strong> Abrir nueva instancia del programa</li>
              <li><strong>Ctrl + Shift + clic:</strong> Ejecutar como administrador</li>
            </ul>
            <h5>🎯 Control de Aplicaciones</h5>
            <ul>
              <li><strong>Minimizar:</strong> Clic en aplicación activa para ocultarla</li>
              <li><strong>Restaurar:</strong> Clic en aplicación minimizada para mostrarla</li>
              <li><strong>Cerrar:</strong> Clic derecho → "Cerrar ventana" o X en vista previa</li>
              <li><strong>Cambio entre ventanas:</strong> Clic en diferentes iconos</li>
            </ul>
            <h5>🔄 Navegación Eficiente</h5>
            <ul>
              <li><strong>Windows + número:</strong> Activar programa en posición específica</li>
              <li><strong>Alt + Tab:</strong> Vista rápida de ventanas abiertas</li>
              <li><strong>Windows + T:</strong> Navegar por elementos de barra de tareas</li>
              <li><strong>Windows + B:</strong> Enfocar área de notificaciones</li>
            </ul>
          </div>
          <h4>🎨 Personalización de la Barra de Tareas</h4>
          <div class="personalizacion-barra">
            <h5>⚙️ Acceso a Configuración</h5>
            <ol>
              <li>Clic derecho en espacio vacío de la barra de tareas</li>
              <li>Seleccionar "Configuración de la barra de tareas"</li>
              <li>O: Configuración de Windows → Personalización → Barra de tareas</li>
            </ol>
            <h5>📍 Posición y Comportamiento</h5>
            <ul>
              <li><strong>Posición en pantalla:</strong> Inferior, superior, izquierda, derecha</li>
              <li><strong>Ocultar automáticamente:</strong> Más espacio en pantalla</li>
              <li><strong>Bloquear barra:</strong> Evitar cambios accidentales</li>
              <li><strong>Usar botones pequeños:</strong> Más espacio para programas</li>
            </ul>
            <h5>👁️ Elementos Visibles</h5>
            <ul>
              <li><strong>Cuadro de búsqueda:</strong> Ocultar, icono o barra completa</li>
              <li><strong>Vista de tareas:</strong> Acceso a escritorios virtuales</li>
              <li><strong>Widgets:</strong> Panel de noticias y clima (Windows 11)</li>
              <li><strong>Contactos:</strong> Acceso rápido a personas (Windows 10)</li>
            </ul>
            <h5>🔔 Configuración de Notificaciones</h5>
            <ul>
              <li><strong>Iconos de esquina:</strong> Seleccionar cuáles mostrar siempre</li>
              <li><strong>Iconos ocultos:</strong> Gestionar aplicaciones en segundo plano</li>
              <li><strong>Notificaciones:</strong> Activar/desactivar por aplicación</li>
              <li><strong>Modo no molestar:</strong> Silenciar temporalmente</li>
            </ul>
          </div>
          <h4>🎮 Funciones Avanzadas</h4>
          <div class="funciones-avanzadas-barra">
            <h5>📊 Barras de Herramientas</h5>
            <ul>
              <li><strong>Activar:</strong> Clic derecho → Barras de herramientas</li>
              <li><strong>Enlaces:</strong> Acceso rápido a sitios web</li>
              <li><strong>Dirección:</strong> Barra de direcciones como en navegadores</li>
              <li><strong>Escritorio:</strong> Acceso a elementos del escritorio</li>
            </ul>
            <h5>🖥️ Múltiples Monitores</h5>
            <ul>
              <li><strong>Mostrar en todas las pantallas:</strong> Barra de tareas en cada monitor</li>
              <li><strong>Botones en donde están las ventanas:</strong> Organización inteligente</li>
              <li><strong>Combinar botones:</strong> Configuración por monitor</li>
            </ul>
            <h5>🎯 Listas de Salto</h5>
            <ul>
              <li><strong>Acceso:</strong> Clic derecho en programa anclado</li>
              <li><strong>Función:</strong> Tareas frecuentes y archivos recientes</li>
              <li><strong>Anclar elementos:</strong> Chincheta para fijar tareas</li>
            </ul>
          </div>
          <h4>💡 Consejos de Productividad</h4>
          <ul>
            <li><strong>Organización por uso:</strong> Programas más usados en posiciones 1-5</li>
            <li><strong>Atajos numéricos:</strong> Windows + 1, 2, 3... para acceso instantáneo</li>
            <li><strong>Agrupación inteligente:</strong> Permitir agrupación para ahorrar espacio</li>
            <li><strong>Vista previa útil:</strong> Usar hover para ver contenido de ventanas</li>
            <li><strong>Personalización mínima:</strong> Solo mostrar elementos que realmente uses</li>
          </ul>
        </div>
      `,
      multimedia: [
        {
          tipo: "imagen",
          descripcion: "Barra de tareas de Windows y sus componentes",
          url: "/images/teoria/barra-tareas-windows.jpg"
        },
        {
          tipo: "infografia",
          descripcion: "Infografía de los componentes de la barra de tareas",
          url: "/images/teoria/componentes-barra-tareas.png"
        },
        {
          tipo: "video",
          descripcion: "Video de personalización y uso de la barra de tareas",
          url: "/videos/personalizacion-barra-tareas.mp4"
        }
      ],
      actividades: [
        {
          tipo: "configuracion",
          pregunta: "Personaliza tu barra de tareas: ancla 5 programas útiles y configura notificaciones",
          ayuda: "Clic derecho en programas que uses frecuentemente → Anclar a barra de tareas"
        },
        {
          tipo: "memorizacion",
          pregunta: "Practica atajos de barra de tareas: Windows + números del 1 al 5",
          ayuda: "Memoriza qué programa corresponde a cada número según tu configuración"
        },
        {
          tipo: "exploracion",
          pregunta: "Explora las opciones avanzadas de la barra de tareas (barras de herramientas, widgets, posición)",
          ayuda: "Haz clic derecho en la barra de tareas y prueba las diferentes opciones de configuración"
        }
      ],
      recursos: {
        documentos: [
          {
            titulo: "Personalización de Escritorio y Barra de Tareas",
            url: "/docs/personalizacion-windows.pdf",
            tipo: "pdf"
          }
        ],
        enlaces: [
          {
            titulo: "Soporte Microsoft - Barra de tareas",
            url: "https://support.microsoft.com/es-es/windows/barra-de-tareas-windows",
            tipo: "externo"
          }
        ],
        videos: [
          {
            titulo: "Personalización Completa del Escritorio",
            url: "/videos/personalizacion-escritorio-completa.mp4",
            duracion: "15:20"
          },
          {
            titulo: "Personalización y uso de la barra de tareas",
            url: "/videos/personalizacion-barra-tareas.mp4",
            duracion: "10:00"
          }
        ],
        imagenes: [
          {
            titulo: "Componentes de la barra de tareas",
            url: "/images/teoria/componentes-barra-tareas.png"
          }
        ]
      }
    },
    {
      id: 6,
      titulo: "Menú Inicio: Portal de Windows",
      contenido: `
        <h3>🚀 El Menú Inicio: Portal de Windows</h3>
        <div class="menu-inicio">
          <h4>🏗️ Estructura del Menú Inicio</h4>
          <div class="estructura-menu">
            <h5>👤 Perfil de Usuario</h5>
            <ul>
              <li><strong>Ubicación:</strong> Parte superior izquierda</li>
              <li><strong>Funciones:</strong> Cambiar cuenta, configuración de cuenta, cerrar sesión</li>
              <li><strong>Clic:</strong> Opciones de gestión de usuario</li>
              <li><strong>Imagen:</strong> Avatar personalizable del usuario</li>
            </ul>
            <h5>📱 Lista de Aplicaciones</h5>
            <ul>
              <li><strong>Ubicación:</strong> Columna izquierda principal</li>
              <li><strong>Organización:</strong> Alfabética con separadores A-Z</li>
              <li><strong>Expansión:</strong> Carpetas expandibles para suites de programas</li>
              <li><strong>Acceso rápido:</strong> "Más usadas" y "Agregadas recientemente"</li>
            </ul>
            <h5>🎯 Mosaicos (Tiles)</h5>
            <ul>
              <li><strong>Ubicación:</strong> Panel derecho del menú</li>
              <li><strong>Función:</strong> Acceso rápido visual a aplicaciones</li>
              <li><strong>Tamaños:</strong> Pequeño, mediano, ancho, grande</li>
              <li><strong>Live Tiles:</strong> Información dinámica en tiempo real</li>
            </ul>
            <h5>⚙️ Botones de Sistema</h5>
            <ul>
              <li><strong>Configuración:</strong> Acceso a ajustes de Windows</li>
              <li><strong>Energía:</strong> Apagar, reiniciar, suspender</li>
              <li><strong>Explorador de archivos:</strong> Acceso directo al explorador</li>
              <li><strong>Usuario:</strong> Opciones de cuenta y sesión</li>
            </ul>
          </div>
          <h4>🔍 Sistema de Búsqueda Integrado</h4>
          <div class="busqueda-menu">
            <h5>🎯 Tipos de Búsqueda</h5>
            <ul>
              <li><strong>Aplicaciones:</strong> Programas instalados en el sistema</li>
              <li><strong>Documentos:</strong> Archivos en ubicaciones indexadas</li>
              <li><strong>Configuraciones:</strong> Ajustes y opciones del sistema</li>
              <li><strong>Web:</strong> Búsquedas en internet con navegador predeterminado</li>
            </ul>
            <h5>⚡ Búsqueda Instantánea</h5>
            <ol>
              <li>Abrir menú Inicio (tecla Windows)</li>
              <li>Comenzar a escribir inmediatamente</li>
              <li>Windows muestra resultados al instante</li>
              <li>Usar flechas para navegar entre resultados</li>
              <li>Enter para ejecutar selección</li>
            </ol>
            <h5>🎛️ Filtros de Búsqueda</h5>
            <ul>
              <li><strong>Aplicaciones:</strong> Solo programas instalados</li>
              <li><strong>Documentos:</strong> Archivos y carpetas</li>
              <li><strong>Correo electrónico:</strong> Mensajes (si está configurado)</li>
              <li><strong>Web:</strong> Resultados de internet</li>
              <li><strong>Más:</strong> Configuraciones, contactos, música</li>
            </ul>
            <h5>🔧 Configuración de Búsqueda</h5>
            <ul>
              <li><strong>Privacidad:</strong> Configuración → Privacidad → Búsqueda</li>
              <li><strong>Historial:</strong> Activar/desactivar historial de búsqueda</li>
              <li><strong>SafeSearch:</strong> Filtros de contenido para búsquedas web</li>
              <li><strong>Ubicaciones indexadas:</strong> Carpetas incluidas en búsqueda</li>
            </ul>
          </div>
          <h4>🎨 Personalización del Menú Inicio</h4>
          <div class="personalizacion-menu">
            <h5>📌 Gestión de Mosaicos</h5>
            <h6>Anclar/Desanclar Aplicaciones:</h6>
            <ol>
              <li>Buscar aplicación en lista</li>
              <li>Clic derecho en aplicación</li>
              <li>Seleccionar "Anclar al inicio" o "Desanclar del inicio"</li>
            </ol>
            <h6>Redimensionar Mosaicos:</h6>
            <ol>
              <li>Clic derecho en mosaico existente</li>
              <li>Seleccionar "Cambiar tamaño"</li>
              <li>Elegir: Pequeño, Mediano, Ancho, Grande</li>
            </ol>
            <h6>Crear Grupos de Mosaicos:</h6>
            <ol>
              <li>Arrastrar mosaico a espacio vacío</li>
              <li>Arrastrar mosaicos relacionados cerca</li>
              <li>Clic en espacio arriba del grupo</li>
              <li>Escribir nombre para el grupo</li>
            </ol>
            <h5>🎭 Configuración Visual</h5>
            <ul>
              <li><strong>Modo oscuro/claro:</strong> Configuración → Personalización → Colores</li>
              <li><strong>Color de acento:</strong> Personalizar colores del sistema</li>
              <li><strong>Transparencia:</strong> Efectos visuales del menú</li>
              <li><strong>Animaciones:</strong> Activar/desactivar transiciones</li>
            </ul>
            <h5>⚙️ Opciones de Comportamiento</h5>
            <ul>
              <li><strong>Mostrar aplicaciones más usadas:</strong> Lista dinámica de programas frecuentes</li>
              <li><strong>Mostrar aplicaciones agregadas recientemente:</strong> Nuevas instalaciones</li>
              <li><strong>Usar pantalla completa:</strong> Menú Inicio tipo tablet</li>
              <li><strong>Mostrar sugerencias:</strong> Recomendaciones de Microsoft Store</li>
            </ul>
          </div>
          <h4>🚀 Navegación Eficiente</h4>
          <div class="navegacion-eficiente">
            <h5>⌨️ Atajos de Teclado</h5>
            <ul>
              <li><strong>Windows:</strong> Abrir/cerrar menú Inicio</li>
              <li><strong>Windows + X:</strong> Menú de herramientas avanzadas</li>
              <li><strong>Windows + I:</strong> Configuración directa</li>
              <li><strong>Windows + L:</strong> Bloquear sesión</li>
              <li><strong>Windows + R:</strong> Ejecutar comando</li>
            </ul>
            <h5>🎯 Navegación Rápida</h5>
            <ul>
              <li><strong>Teclas de letra:</strong> Saltar a sección alfabética en lista de apps</li>
              <li><strong>Flechas del teclado:</strong> Navegar entre mosaicos</li>
              <li><strong>Tab:</strong> Cambiar entre secciones del menú</li>
              <li><strong>Escape:</strong> Cerrar menú y volver al escritorio</li>
            </ul>
            <h5>🖱️ Técnicas con Ratón</h5>
            <ul>
              <li><strong>Clic fuera del menú:</strong> Cerrar automáticamente</li>
              <li><strong>Rueda del ratón:</strong> Desplazarse por lista de aplicaciones</li>
              <li><strong>Arrastrar mosaicos:</strong> Reorganizar y agrupar</li>
              <li><strong>Clic derecho:</strong> Opciones contextuales</li>
            </ul>
          </div>
          <h4>🔌 Integración con Sistema</h4>
          <div class="integracion-sistema">
            <h5>📊 Live Tiles Útiles</h5>
            <ul>
              <li><strong>Tiempo:</strong> Pronóstico del clima en tiempo real</li>
              <li><strong>Calendario:</strong> Próximos eventos y citas</li>
              <li><strong>Noticias:</strong> Titulares actualizados</li>
              <li><strong>Correo:</strong> Nuevos mensajes sin abrir aplicación</li>
              <li><strong>Fotos:</strong> Presentación automática de imágenes</li>
            </ul>
            <h5>🔗 Accesos Directos Útiles</h5>
            <ul>
              <li><strong>Panel de control:</strong> Buscar "panel de control"</li>
              <li><strong>Administrador de tareas:</strong> Ctrl + Shift + Esc</li>
              <li><strong>Configuración de red:</strong> Windows + X → Conexiones de red</li>
              <li><strong>Administración de discos:</strong> Windows + X → Administración de discos</li>
            </ul>
            <h5>💼 Productividad</h5>
            <ul>
              <li><strong>Grupos temáticos:</strong> Trabajo, Entretenimiento, Herramientas</li>
              <li><strong>Mosaicos de tamaño apropiado:</strong> Programas importantes más grandes</li>
              <li><strong>Eliminar elementos no utilizados:</strong> Mantener menú limpio</li>
              <li><strong>Backup de configuración:</strong> Cuenta Microsoft sincroniza configuraciones</li>
            </ul>
          </div>
          <h4>💡 Consejos Avanzados</h4>
          <ul>
            <li><strong>Menú Inicio completo:</strong> Windows + X para herramientas administrativas</li>
            <li><strong>Búsqueda por comandos:</strong> "cmd", "msconfig", "regedit" para herramientas del sistema</li>
            <li><strong>Calculadora rápida:</strong> Escribir operación matemática directamente</li>
            <li><strong>Conversiones:</strong> "100 USD a EUR", "5 km a millas" en búsqueda</li>
            <li><strong>Resetear configuración:</strong> PowerShell como admin → Get-AppXPackage -AllUsers | Foreach {Add-AppxPackage -DisableDevelopmentMode -Register "$($_.InstallLocation)\\AppXManifest.xml"}</li>
          </ul>
        </div>
      `,
      multimedia: [
        {
          tipo: "imagen",
          descripcion: "Vista general del menú Inicio de Windows",
          url: "/images/teoria/menu-inicio-windows.jpg"
        },
        {
          tipo: "infografia",
          descripcion: "Infografía de personalización del menú Inicio",
          url: "/images/teoria/personalizacion-menu-inicio.png"
        },
        {
          tipo: "video",
          descripcion: "Video de navegación avanzada por el menú Inicio",
          url: "/videos/navegacion-menu-inicio-avanzada.mp4"
        }
      ],
      actividades: [
        {
          tipo: "personalizacion",
          pregunta: "Organiza tu menú Inicio: crea 3 grupos temáticos de aplicaciones",
          ayuda: "Arrastra aplicaciones para crear grupos como 'Trabajo', 'Entretenimiento', 'Herramientas'"
        },
        {
          tipo: "practica",
          pregunta: "Usa la búsqueda del menú para encontrar 5 configuraciones diferentes del sistema",
          ayuda: "Prueba buscar: 'configuración de pantalla', 'programas', 'volumen', 'red', 'actualización'"
        },
        {
          tipo: "exploracion",
          pregunta: "Personaliza el menú Inicio cambiando el tamaño y posición de al menos 2 mosaicos",
          ayuda: "Haz clic derecho en un mosaico, selecciona 'Cambiar tamaño' y arrástralo a una nueva posición"
        }
      ],
      recursos: {
        documentos: [
          {
            titulo: "Guía Completa del Menú Inicio de Windows",
            url: "/docs/guia-menu-inicio-windows.pdf",
            tipo: "pdf"
          }
        ],
        enlaces: [
          {
            titulo: "Soporte Microsoft - Menú Inicio",
            url: "https://support.microsoft.com/es-es/windows/menú-inicio-windows",
            tipo: "externo"
          },
          {
            titulo: "Personalización del Menú Inicio",
            url: "https://support.microsoft.com/es-es/windows/personalizar-menu-inicio",
            tipo: "externo"
          }
        ],
        videos: [
          {
            titulo: "Navegación avanzada por el menú Inicio",
            url: "/videos/navegacion-menu-inicio-avanzada.mp4",
            duracion: "8:30"
          }
        ],
        imagenes: [
          {
            titulo: "Vista general del menú Inicio",
            url: "/images/teoria/menu-inicio-windows.jpg"
          },
          {
            titulo: "Infografía de personalización",
            url: "/images/teoria/personalizacion-menu-inicio.png"
          }
        ]
      }
    }
  ],
  recursos: {
    documentos: [
      {
        titulo: "Guía Completa de Elementos Básicos de Windows",
        url: "/docs/elementos-basicos-windows.pdf",
        tipo: "pdf"
      },
      {
        titulo: "Manual de Atajos de Teclado para Windows",
        url: "/docs/atajos-teclado-windows.pdf",
        tipo: "pdf"
      },
      {
        titulo: "Personalización de Escritorio y Barra de Tareas",
        url: "/docs/personalizacion-windows.pdf",
        tipo: "pdf"
      }
    ],
    enlaces: [
      {
        titulo: "Soporte Microsoft - Atajos de Teclado Windows",
        url: "https://support.microsoft.com/es-es/windows/atajos-de-teclado-de-windows",
        tipo: "externo"
      },
      {
        titulo: "Personalización de Windows - Guía Oficial",
        url: "https://support.microsoft.com/es-es/windows/personalizar-windows",
        tipo: "externo"
      },
      {
        titulo: "Accesibilidad en Windows",
        url: "https://support.microsoft.com/es-es/windows/accesibilidad-windows",
        tipo: "externo"
      }
    ],
    videos: [
      {
        titulo: "Maestría del Ratón y Teclado en Windows",
        url: "/videos/maestria-raton-teclado.mp4",
        duracion: "12:30"
      },
      {
        titulo: "Organización Avanzada de Ventanas",
        url: "/videos/organizacion-ventanas-avanzada.mp4",
        duracion: "8:45"
      },
      {
        titulo: "Personalización Completa del Escritorio",
        url: "/videos/personalizacion-escritorio-completa.mp4",
        duracion: "15:20"
      }
    ]
  },
  evaluacion: {
    tipo: "cuestionario",
    preguntas: [
      {
        pregunta: "¿Cuál es la diferencia entre clic simple y doble clic?",
        tipo: "opcion_multiple",
        opciones: [
          "No hay diferencia, ambos hacen lo mismo",
          "Clic simple selecciona, doble clic abre/ejecuta",
          "Clic simple abre, doble clic selecciona",
          "Solo se usa doble clic en Windows"
        ],
        respuestaCorrecta: 1
      },
      {
        pregunta: "¿Qué atajo de teclado abre el Explorador de archivos?",
        tipo: "opcion_multiple",
        opciones: [
          "Windows + F",
          "Ctrl + E",
          "Windows + E",
          "Alt + E"
        ],
        respuestaCorrecta: 2
      },
      {
        pregunta: "¿Para qué sirve el Teclado en Pantalla?",
        tipo: "opcion_multiple",
        opciones: [
          "Decorar el escritorio",
          "Permitir escritura sin teclado físico",
          "Acelerar el sistema",
          "Bloquear el sistema"
        ],
        respuestaCorrecta: 1
      },
      {
        pregunta: "¿Qué función cumple Aero Snap en Windows?",
        tipo: "opcion_multiple",
        opciones: [
          "Tomar capturas de pantalla",
          "Organizar ventanas automáticamente al arrastrarlas",
          "Cerrar todas las ventanas",
          "Cambiar el tema visual"
        ],
        respuestaCorrecta: 1
      },
      {
        pregunta: "¿Cómo se crea un acceso directo en el escritorio?",
        tipo: "opcion_multiple",
        opciones: [
          "Solo copiando el archivo del programa",
          "Clic derecho → Nuevo → Acceso directo",
          "Arrastrando desde la papelera",
          "No se pueden crear accesos directos"
        ],
        respuestaCorrecta: 1
      }
    ]
  }
};
