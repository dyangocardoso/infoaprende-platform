/**
 * Tema 5: Software - Clasificación, distribución y licencias
 * Curso: Introducción a la Informática
 */

export const tema05 = {
  id: '5',
  titulo: "Software",
  tematica: "Clasificación, distribución y licencias",
  duracion: "30-35 minutos",
  objetivos: [
    "Definir qué es el software y comprender sus componentes",
    "Clasificar software según su función y propósito",
    "Entender los diferentes métodos de distribución",
    "Conocer los tipos de licencias y sus implicaciones"
  ],
  secciones: [
    {
      id: 1,
      titulo: "¿Qué es el Software?",
      contenido: `
        <h3>💾 Definición y Naturaleza del Software</h3>
        
        <div class="definicion-software">
          <h4>📋 Definición</h4>
          <p>El <strong>software</strong> es el conjunto de programas, instrucciones, datos y documentación que controla el funcionamiento del hardware y permite al usuario realizar tareas específicas.</p>

          <h5>Características del Software:</h5>
          <ul>
            <li><strong>Intangible:</strong> No se puede tocar físicamente</li>
            <li><strong>Lógico:</strong> Conjunto de instrucciones y algoritmos</li>
            <li><strong>Modificable:</strong> Se puede actualizar y cambiar</li>
            <li><strong>No se desgasta:</strong> No tiene desgaste físico</li>
            <li><strong>Replicable:</strong> Se puede copiar sin pérdida de calidad</li>
          </ul>

          <h4>🔄 Software vs Hardware</h4>
          <div class="comparacion-sw-hw">
            <h5>Software:</h5>
            <ul>
              <li>Intangible, programas e instrucciones</li>
              <li>Se puede copiar y modificar</li>
              <li>Fácil de actualizar</li>
              <li>Controlado por licencias</li>
              <li>No se degrada físicamente</li>
            </ul>

            <h5>Hardware:</h5>
            <ul>
              <li>Tangible, componentes físicos</li>
              <li>Único, no se puede copiar</li>
              <li>Difícil de modificar</li>
              <li>Se posee físicamente</li>
              <li>Se desgasta con el tiempo</li>
            </ul>
          </div>

          <h4>🧩 Componentes del Software</h4>
          <div class="componentes-software">
            <h5>Código Fuente:</h5>
            <ul>
              <li><strong>Definición:</strong> Instrucciones escritas en lenguaje de programación</li>
              <li><strong>Legible:</strong> Para humanos, antes de compilar</li>
              <li><strong>Editable:</strong> Se puede modificar con editores de texto</li>
            </ul>

            <h5>Código Objeto/Ejecutable:</h5>
            <ul>
              <li><strong>Definición:</strong> Código fuente convertido a lenguaje máquina</li>
              <li><strong>Ejecutable:</strong> El computador puede ejecutarlo directamente</li>
              <li><strong>Binario:</strong> Unos y ceros que entiende el procesador</li>
            </ul>

            <h5>Documentación:</h5>
            <ul>
              <li><strong>Manuales de usuario:</strong> Cómo usar el software</li>
              <li><strong>Documentación técnica:</strong> Cómo funciona internamente</li>
              <li><strong>Ayuda en línea:</strong> Asistencia integrada</li>
            </ul>

            <h5>Datos de Configuración:</h5>
            <ul>
              <li><strong>Archivos de configuración:</strong> Parámetros y preferencias</li>
              <li><strong>Bases de datos:</strong> Información estructurada</li>
              <li><strong>Recursos:</strong> Imágenes, sonidos, plantillas</li>
            </ul>
          </div>

          <h4>🌟 Importancia del Software</h4>
          <ul>
            <li><strong>Funcionalidad:</strong> Hace útil al hardware</li>
            <li><strong>Productividad:</strong> Automatiza tareas complejas</li>
            <li><strong>Comunicación:</strong> Facilita intercambio de información</li>
            <li><strong>Entretenimiento:</strong> Juegos, multimedia, redes sociales</li>
            <li><strong>Innovación:</strong> Posibilita nuevas formas de trabajo y creatividad</li>
          </ul>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/software-definicion.jpg",
        infografia: "/images/teoria/componentes-software.png"
      }
    },
    {
      id: 2,
      titulo: "Software de Sistema",
      contenido: `
        <h3>⚙️ El Software que Controla el Hardware</h3>
        
        <div class="software-sistema">
          <h4>🎯 Definición</h4>
          <p>El <strong>software de sistema</strong> es el conjunto de programas que gestionan los recursos del hardware y proporcionan una plataforma para que funcione otro software.</p>

          <h4>🖥️ Sistema Operativo (SO)</h4>
          <div class="sistema-operativo">
            <h5>Función Principal:</h5>
            <p>Interfaz entre el usuario/aplicaciones y el hardware, gestiona recursos y proporciona servicios básicos.</p>

            <h6>Funciones del Sistema Operativo:</h6>
            <ul>
              <li><strong>Gestión de procesos:</strong> Ejecutar y controlar programas</li>
              <li><strong>Gestión de memoria:</strong> Asignar y liberar memoria RAM</li>
              <li><strong>Gestión de archivos:</strong> Organizar datos en discos</li>
              <li><strong>Gestión de dispositivos:</strong> Controlar hardware (impresoras, USB, etc.)</li>
              <li><strong>Interfaz de usuario:</strong> GUI (gráfica) o CLI (línea de comandos)</li>
              <li><strong>Seguridad:</strong> Control de acceso y permisos</li>
            </ul>

            <h6>Sistemas Operativos Populares:</h6>
            <div class="so-populares">
              <h7>Para PC:</h7>
              <ul>
                <li><strong>Windows:</strong> Microsoft, más usado en PC</li>
                <li><strong>macOS:</strong> Apple, solo en computadoras Mac</li>
                <li><strong>Linux:</strong> Open source, múltiples distribuciones</li>
                <li><strong>Chrome OS:</strong> Google, basado en web</li>
              </ul>

              <h7>Para Móviles:</h7>
              <ul>
                <li><strong>Android:</strong> Google, más usado globalmente</li>
                <li><strong>iOS:</strong> Apple, solo en iPhone/iPad</li>
                <li><strong>HarmonyOS:</strong> Huawei</li>
              </ul>

              <h7>Para Servidores:</h7>
              <ul>
                <li><strong>Linux:</strong> Ubuntu Server, CentOS, Red Hat</li>
                <li><strong>Windows Server:</strong> Microsoft</li>
                <li><strong>Unix:</strong> AIX, Solaris</li>
              </ul>
            </div>
          </div>

          <h4>🔌 Controladores (Drivers)</h4>
          <div class="controladores">
            <h5>Función:</h5>
            <p>Software especializado que permite al sistema operativo comunicarse con hardware específico.</p>

            <h6>Tipos de Controladores:</h6>
            <ul>
              <li><strong>Gráficos:</strong> Para tarjetas de video</li>
              <li><strong>Audio:</strong> Para tarjetas de sonido</li>
              <li><strong>Red:</strong> Para adaptadores de red</li>
              <li><strong>Impresoras:</strong> Para diferentes modelos de impresoras</li>
              <li><strong>USB:</strong> Para dispositivos USB</li>
              <li><strong>Bluetooth:</strong> Para conectividad inalámbrica</li>
            </ul>

            <h6>Importancia:</h6>
            <ul>
              <li>Sin drivers, el hardware no funciona</li>
              <li>Drivers actualizados mejoran rendimiento</li>
              <li>Drivers incorrectos causan problemas</li>
              <li>Cada dispositivo necesita su driver específico</li>
            </ul>
          </div>

          <h4>🛠️ Software de Utilidades</h4>
          <div class="utilidades">
            <h5>Propósito:</h5>
            <p>Programas que realizan tareas de mantenimiento, optimización y gestión del sistema.</p>

            <h6>Tipos de Utilidades:</h6>
            <ul>
              <li><strong>Antivirus:</strong> Protección contra malware</li>
              <li><strong>Firewall:</strong> Protección de red</li>
              <li><strong>Desfragmentadores:</strong> Optimización de disco</li>
              <li><strong>Compresores:</strong> WinRAR, 7-Zip</li>
              <li><strong>Limpiadores:</strong> CCleaner, eliminan archivos temporales</li>
              <li><strong>Backup:</strong> Copias de seguridad automáticas</li>
              <li><strong>Monitores de sistema:</strong> Temperatura, rendimiento</li>
            </ul>
          </div>

          <h4>💻 Firmware</h4>
          <div class="firmware">
            <h5>Definición:</h5>
            <p>Software de bajo nivel almacenado en memoria no volátil (ROM, flash) que controla directamente el hardware.</p>

            <h6>Características:</h6>
            <ul>
              <li><strong>Permanente:</strong> No se borra al apagar</li>
              <li><strong>Básico:</strong> Funciones fundamentales del hardware</li>
              <li><strong>Específico:</strong> Diseñado para hardware particular</li>
              <li><strong>Difícil de modificar:</strong> Requiere procesos especiales</li>
            </ul>

            <h6>Ejemplos:</h6>
            <ul>
              <li><strong>BIOS/UEFI:</strong> Firmware de la motherboard</li>
              <li><strong>Firmware de router:</strong> Control de dispositivos de red</li>
              <li><strong>Firmware de impresora:</strong> Control de funciones de impresión</li>
              <li><strong>Firmware de smartphone:</strong> Control de hardware móvil</li>
            </ul>
          </div>

          <h4>🔧 Herramientas de Desarrollo</h4>
          <div class="herramientas-desarrollo">
            <h5>Compiladores e Intérpretes:</h5>
            <ul>
              <li><strong>Compiladores:</strong> Convierten código fuente a ejecutable</li>
              <li><strong>Intérpretes:</strong> Ejecutan código línea por línea</li>
              <li><strong>Ejemplos:</strong> GCC, Visual Studio, Java JVM</li>
            </ul>

            <h5>Entornos de Desarrollo (IDE):</h5>
            <ul>
              <li><strong>Visual Studio:</strong> Microsoft, .NET, C++</li>
              <li><strong>Eclipse:</strong> Java, multiplataforma</li>
              <li><strong>Xcode:</strong> Apple, iOS/macOS</li>
              <li><strong>Android Studio:</strong> Google, aplicaciones Android</li>
            </ul>
          </div>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/software-sistema.jpg",
        infografia: "/images/teoria/sistema-operativo.png"
      },
      actividades: [
        {
          tipo: "investigacion",
          pregunta: "Identifica el sistema operativo y versión de tu computadora y teléfono",
          ayuda: "En Windows: Configuración > Sistema > Acerca de. En Android: Configuración > Acerca del teléfono"
        }
      ]
    },
    {
      id: 3,
      titulo: "Software de Aplicación",
      contenido: `
        <h3>📱 Software para el Usuario Final</h3>
        
        <div class="software-aplicacion">
          <h4>🎯 Definición</h4>
          <p>El <strong>software de aplicación</strong> son programas diseñados para que los usuarios realicen tareas específicas, trabajo productivo o entretenimiento.</p>

          <h4>📄 Software de Oficina (Ofimática)</h4>
          <div class="software-oficina">
            <h5>Suites de Oficina Populares:</h5>
            
            <h6>Microsoft Office:</h6>
            <ul>
              <li><strong>Word:</strong> Procesador de textos</li>
              <li><strong>Excel:</strong> Hojas de cálculo</li>
              <li><strong>PowerPoint:</strong> Presentaciones</li>
              <li><strong>Outlook:</strong> Correo electrónico y calendario</li>
              <li><strong>Access:</strong> Base de datos</li>
              <li><strong>Publisher:</strong> Diseño de publicaciones</li>
            </ul>

            <h6>Google Workspace:</h6>
            <ul>
              <li><strong>Google Docs:</strong> Documentos en línea</li>
              <li><strong>Google Sheets:</strong> Hojas de cálculo</li>
              <li><strong>Google Slides:</strong> Presentaciones</li>
              <li><strong>Gmail:</strong> Correo electrónico</li>
              <li><strong>Google Drive:</strong> Almacenamiento en la nube</li>
            </ul>

            <h6>Alternativas Libres:</h6>
            <ul>
              <li><strong>LibreOffice:</strong> Suite completa gratuita</li>
              <li><strong>Apache OpenOffice:</strong> Alternativa open source</li>
              <li><strong>WPS Office:</strong> Compatible con Microsoft Office</li>
            </ul>
          </div>

          <h4>🎨 Software Multimedia</h4>
          <div class="software-multimedia">
            <h5>Edición de Imágenes:</h5>
            <ul>
              <li><strong>Adobe Photoshop:</strong> Edición profesional de fotos</li>
              <li><strong>GIMP:</strong> Alternativa gratuita a Photoshop</li>
              <li><strong>Canva:</strong> Diseño gráfico simplificado</li>
              <li><strong>Paint.NET:</strong> Editor básico para Windows</li>
            </ul>

            <h5>Edición de Video:</h5>
            <ul>
              <li><strong>Adobe Premiere Pro:</strong> Edición profesional</li>
              <li><strong>Final Cut Pro:</strong> Editor de Apple</li>
              <li><strong>DaVinci Resolve:</strong> Profesional y gratuito</li>
              <li><strong>iMovie:</strong> Editor básico de Apple</li>
              <li><strong>OpenShot:</strong> Editor gratuito multiplataforma</li>
            </ul>

            <h5>Reproducción Multimedia:</h5>
            <ul>
              <li><strong>VLC Media Player:</strong> Reproduce casi cualquier formato</li>
              <li><strong>Windows Media Player:</strong> Reproductor de Windows</li>
              <li><strong>iTunes:</strong> Reproductor de Apple</li>
              <li><strong>Spotify:</strong> Streaming de música</li>
              <li><strong>Netflix:</strong> Streaming de video</li>
            </ul>
          </div>

          <h4>🌐 Navegadores Web</h4>
          <div class="navegadores">
            <h5>Navegadores Populares:</h5>
            <ul>
              <li><strong>Google Chrome:</strong> Más usado mundialmente</li>
              <li><strong>Mozilla Firefox:</strong> Open source, enfoque en privacidad</li>
              <li><strong>Microsoft Edge:</strong> Reemplazo de Internet Explorer</li>
              <li><strong>Safari:</strong> Navegador de Apple</li>
              <li><strong>Opera:</strong> Con VPN integrada</li>
            </ul>

            <h5>Características Importantes:</h5>
            <ul>
              <li><strong>Velocidad:</strong> Carga rápida de páginas</li>
              <li><strong>Seguridad:</strong> Protección contra malware</li>
              <li><strong>Privacidad:</strong> Control de tracking</li>
              <li><strong>Extensiones:</strong> Funcionalidades adicionales</li>
              <li><strong>Sincronización:</strong> Entre dispositivos</li>
            </ul>
          </div>

          <h4>🎮 Software de Entretenimiento</h4>
          <div class="entretenimiento">
            <h5>Videojuegos:</h5>
            <ul>
              <li><strong>Steam:</strong> Plataforma de distribución de juegos</li>
              <li><strong>Epic Games Store:</strong> Tienda de juegos</li>
              <li><strong>Minecraft:</strong> Juego de construcción</li>
              <li><strong>Fortnite:</strong> Battle royale</li>
              <li><strong>Among Us:</strong> Juego social</li>
            </ul>

            <h5>Redes Sociales:</h5>
            <ul>
              <li><strong>Facebook:</strong> Red social principal</li>
              <li><strong>Instagram:</strong> Fotos y videos</li>
              <li><strong>Twitter/X:</strong> Microblogging</li>
              <li><strong>TikTok:</strong> Videos cortos</li>
              <li><strong>Discord:</strong> Comunicación para gamers</li>
            </ul>
          </div>

          <h4>💼 Software Especializado</h4>
          <div class="software-especializado">
            <h5>Diseño y Arquitectura:</h5>
            <ul>
              <li><strong>AutoCAD:</strong> Diseño asistido por computadora</li>
              <li><strong>SketchUp:</strong> Modelado 3D</li>
              <li><strong>Blender:</strong> Animación 3D gratuita</li>
              <li><strong>Revit:</strong> Diseño arquitectónico BIM</li>
            </ul>

            <h5>Contabilidad y Finanzas:</h5>
            <ul>
              <li><strong>QuickBooks:</strong> Contabilidad para pequeñas empresas</li>
              <li><strong>SAP:</strong> Sistema empresarial integral</li>
              <li><strong>Sage:</strong> Software contable</li>
              <li><strong>Mint:</strong> Finanzas personales</li>
            </ul>

            <h5>Educación:</h5>
            <ul>
              <li><strong>Moodle:</strong> Plataforma de aprendizaje</li>
              <li><strong>Khan Academy:</strong> Educación gratuita</li>
              <li><strong>Duolingo:</strong> Aprendizaje de idiomas</li>
              <li><strong>GeoGebra:</strong> Matemáticas interactivas</li>
            </ul>
          </div>

          <h4>📱 Aplicaciones Móviles</h4>
          <div class="apps-moviles">
            <h5>Categorías Principales:</h5>
            <ul>
              <li><strong>Comunicación:</strong> WhatsApp, Telegram, Zoom</li>
              <li><strong>Productividad:</strong> Microsoft Office, Google Workspace</li>
              <li><strong>Entretenimiento:</strong> YouTube, Netflix, Spotify</li>
              <li><strong>Fotografía:</strong> Instagram, VSCO, Snapseed</li>
              <li><strong>Navegación:</strong> Google Maps, Waze</li>
              <li><strong>Compras:</strong> Amazon, eBay, Mercado Libre</li>
              <li><strong>Bancarias:</strong> Apps de bancos para transacciones</li>
              <li><strong>Salud:</strong> MyFitnessPal, Nike Training</li>
            </ul>

            <h5>Diferencias con Software de PC:</h5>
            <ul>
              <li><strong>Interfaz táctil:</strong> Diseñadas para touch</li>
              <li><strong>Tamaño de pantalla:</strong> Optimizadas para móviles</li>
              <li><strong>Recursos limitados:</strong> Menor memoria y procesamiento</li>
              <li><strong>Conectividad:</strong> Uso frecuente de internet móvil</li>
              <li><strong>Notificaciones:</strong> Alerts y push notifications</li>
            </ul>
          </div>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/software-aplicacion.jpg",
        infografia: "/images/teoria/categorias-software.png"
      },
      actividades: [
        {
          tipo: "inventario",
          pregunta: "Haz una lista del software de aplicación que usas diariamente en tu computadora y teléfono",
          ayuda: "Revisa tu escritorio, barra de tareas y aplicaciones móviles instaladas"
        }
      ]
    },
    {
      id: 4,
      titulo: "Software de Programación",
      contenido: `
        <h3>💻 Herramientas para Crear Software</h3>
        
        <div class="software-programacion">
          <h4>🎯 Definición</h4>
          <p>El <strong>software de programación</strong> son herramientas que los desarrolladores usan para crear, editar, probar y mantener otros programas de software.</p>

          <h4>📝 Editores de Código</h4>
          <div class="editores-codigo">
            <h5>Editores de Texto Básicos:</h5>
            <ul>
              <li><strong>Notepad:</strong> Editor básico de Windows</li>
              <li><strong>TextEdit:</strong> Editor básico de macOS</li>
              <li><strong>Nano/Vim:</strong> Editores de línea de comandos</li>
            </ul>

            <h5>Editores de Código Avanzados:</h5>
            <ul>
              <li><strong>Visual Studio Code:</strong> Microsoft, gratuito, muy popular</li>
              <li><strong>Sublime Text:</strong> Rápido, muchas extensiones</li>
              <li><strong>Atom:</strong> GitHub, open source (discontinuado)</li>
              <li><strong>Notepad++:</strong> Windows, soporte múltiples lenguajes</li>
            </ul>

            <h6>Características de Editores Avanzados:</h6>
            <ul>
              <li><strong>Resaltado de sintaxis:</strong> Colores para diferentes elementos</li>
              <li><strong>Autocompletado:</strong> Sugerencias de código</li>
              <li><strong>Depurador integrado:</strong> Encontrar errores</li>
              <li><strong>Control de versiones:</strong> Integración con Git</li>
              <li><strong>Extensiones:</strong> Funcionalidades adicionales</li>
            </ul>
          </div>

          <h4>🏭 Entornos de Desarrollo Integrado (IDE)</h4>
          <div class="ides">
            <h5>IDEs Populares:</h5>
            
            <h6>Para Múltiples Lenguajes:</h6>
            <ul>
              <li><strong>Visual Studio:</strong> Microsoft, .NET, C++, Python</li>
              <li><strong>IntelliJ IDEA:</strong> JetBrains, principalmente Java</li>
              <li><strong>Eclipse:</strong> Java, PHP, C++</li>
            </ul>

            <h6>Especializados:</h6>
            <ul>
              <li><strong>Android Studio:</strong> Google, aplicaciones Android</li>
              <li><strong>Xcode:</strong> Apple, iOS/macOS</li>
              <li><strong>PyCharm:</strong> JetBrains, Python</li>
              <li><strong>WebStorm:</strong> JetBrains, desarrollo web</li>
              <li><strong>Code::Blocks:</strong> C/C++</li>
            </ul>

            <h5>Ventajas de los IDEs:</h5>
            <ul>
              <li><strong>Todo en uno:</strong> Editor, compilador, depurador</li>
              <li><strong>Gestión de proyectos:</strong> Organización de archivos</li>
              <li><strong>Autocompletado inteligente:</strong> Conoce la sintaxis del lenguaje</li>
              <li><strong>Refactoring:</strong> Reestructuración de código</li>
              <li><strong>Integración:</strong> Bases de datos, servidores, etc.</li>
            </ul>
          </div>

          <h4>🔧 Compiladores e Intérpretes</h4>
          <div class="compiladores-interpretes">
            <h5>Compiladores:</h5>
            <p>Convierten todo el código fuente a código máquina antes de ejecutar.</p>
            <ul>
              <li><strong>GCC:</strong> GNU Compiler Collection (C, C++)</li>
              <li><strong>Clang:</strong> Compilador de LLVM</li>
              <li><strong>Visual C++:</strong> Compilador de Microsoft</li>
              <li><strong>javac:</strong> Compilador de Java</li>
            </ul>

            <h5>Intérpretes:</h5>
            <p>Ejecutan el código línea por línea sin compilación previa.</p>
            <ul>
              <li><strong>Python:</strong> Intérprete de Python</li>
              <li><strong>Node.js:</strong> JavaScript en servidor</li>
              <li><strong>Ruby:</strong> Intérprete de Ruby</li>
              <li><strong>PHP:</strong> Para desarrollo web</li>
            </ul>

            <h5>Ventajas y Desventajas:</h5>
            <div class="comp-vs-int">
              <h6>Compiladores:</h6>
              <ul>
                <li>✅ Ejecución más rápida</li>
                <li>✅ Detecta errores antes de ejecutar</li>
                <li>❌ Proceso de compilación lento</li>
                <li>❌ Código específico para cada plataforma</li>
              </ul>

              <h6>Intérpretes:</h6>
              <ul>
                <li>✅ Desarrollo más rápido</li>
                <li>✅ Multiplataforma sin recompilar</li>
                <li>❌ Ejecución más lenta</li>
                <li>❌ Errores aparecen en tiempo de ejecución</li>
              </ul>
            </div>
          </div>

          <h4>🔍 Herramientas de Depuración</h4>
          <div class="herramientas-debug">
            <h5>Depuradores (Debuggers):</h5>
            <ul>
              <li><strong>GDB:</strong> GNU Debugger para C/C++</li>
              <li><strong>Visual Studio Debugger:</strong> Integrado en VS</li>
              <li><strong>Chrome DevTools:</strong> Para desarrollo web</li>
              <li><strong>Xdebug:</strong> Para PHP</li>
            </ul>

            <h5>Funciones de Depuración:</h5>
            <ul>
              <li><strong>Breakpoints:</strong> Pausar ejecución en líneas específicas</li>
              <li><strong>Step over/into:</strong> Ejecutar paso a paso</li>
              <li><strong>Watch variables:</strong> Monitorear valores de variables</li>
              <li><strong>Call stack:</strong> Ver secuencia de llamadas a funciones</li>
            </ul>
          </div>

          <h4>📊 Control de Versiones</h4>
          <div class="control-versiones">
            <h5>Sistemas de Control de Versiones:</h5>
            <ul>
              <li><strong>Git:</strong> Sistema distribuido más popular</li>
              <li><strong>GitHub:</strong> Plataforma web para Git</li>
              <li><strong>GitLab:</strong> Alternativa a GitHub</li>
              <li><strong>Subversion (SVN):</strong> Sistema centralizado</li>
              <li><strong>Mercurial:</strong> Sistema distribuido</li>
            </ul>

            <h5>Funciones Principales:</h5>
            <ul>
              <li><strong>Historial:</strong> Registro de todos los cambios</li>
              <li><strong>Ramas (branches):</strong> Desarrollo paralelo</li>
              <li><strong>Fusión (merge):</strong> Combinar cambios</li>
              <li><strong>Colaboración:</strong> Múltiples desarrolladores</li>
              <li><strong>Backup:</strong> Respaldo automático del código</li>
            </ul>
          </div>

          <h4>🧪 Herramientas de Pruebas</h4>
          <div class="herramientas-testing">
            <h5>Tipos de Testing:</h5>
            <ul>
              <li><strong>Unit Testing:</strong> Pruebas de componentes individuales</li>
              <li><strong>Integration Testing:</strong> Pruebas de integración</li>
              <li><strong>End-to-End Testing:</strong> Pruebas de flujo completo</li>
              <li><strong>Performance Testing:</strong> Pruebas de rendimiento</li>
            </ul>

            <h5>Frameworks de Testing:</h5>
            <ul>
              <li><strong>Jest:</strong> JavaScript testing framework</li>
              <li><strong>JUnit:</strong> Para Java</li>
              <li><strong>pytest:</strong> Para Python</li>
              <li><strong>Selenium:</strong> Automatización de navegadores</li>
            </ul>
          </div>

          <h4>📦 Gestión de Dependencias</h4>
          <div class="gestores-paquetes">
            <h5>Package Managers:</h5>
            <ul>
              <li><strong>npm:</strong> Node Package Manager (JavaScript)</li>
              <li><strong>pip:</strong> Python Package Installer</li>
              <li><strong>Maven:</strong> Para proyectos Java</li>
              <li><strong>NuGet:</strong> Para .NET</li>
              <li><strong>Composer:</strong> Para PHP</li>
            </ul>

            <h5>Funciones:</h5>
            <ul>
              <li><strong>Instalación:</strong> Descargar e instalar librerías</li>
              <li><strong>Dependencias:</strong> Gestionar librerías requeridas</li>
              <li><strong>Versiones:</strong> Control de versiones de paquetes</li>
              <li><strong>Actualizaciones:</strong> Mantener librerías actualizadas</li>
            </ul>
          </div>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/software-programacion.jpg",
        infografia: "/images/teoria/herramientas-desarrollo.png",
        video: "/videos/ide-vs-editor.mp4"
      },
      actividades: [
        {
          tipo: "exploracion",
          pregunta: "Instala Visual Studio Code y explora sus características básicas",
          ayuda: "Descarga desde code.visualstudio.com y prueba crear un archivo de texto con resaltado de sintaxis"
        }
      ]
    },
    {
      id: 5,
      titulo: "Licencias de Software",
      contenido: `
        <h3>📜 Derechos y Obligaciones del Software</h3>
        
        <div class="licencias-software">
          <h4>🎯 ¿Qué es una Licencia de Software?</h4>
          <p>Una <strong>licencia de software</strong> es un acuerdo legal que especifica los derechos y obligaciones del usuario respecto al uso, distribución y modificación del software.</p>

          <h5>Importancia de las Licencias:</h5>
          <ul>
            <li><strong>Protección legal:</strong> Define qué está permitido hacer</li>
            <li><strong>Derechos de autor:</strong> Protege la propiedad intelectual</li>
            <li><strong>Responsabilidades:</strong> Establece límites de responsabilidad</li>
            <li><strong>Comercialización:</strong> Define modelos de negocio</li>
          </ul>

          <h4>💰 Software Propietario</h4>
          <div class="software-propietario">
            <h5>Características:</h5>
            <ul>
              <li><strong>Código cerrado:</strong> Código fuente no disponible</li>
              <li><strong>Licencia restrictiva:</strong> Uso limitado por términos</li>
              <li><strong>Propiedad exclusiva:</strong> Pertenece al desarrollador</li>
              <li><strong>Soporte comercial:</strong> Soporte técnico incluido</li>
            </ul>

            <h5>Tipos de Licencias Propietarias:</h5>
            
            <h6>Licencia Comercial:</h6>
            <ul>
              <li><strong>Pago requerido:</strong> Se debe comprar el software</li>
              <li><strong>Uso limitado:</strong> Número específico de instalaciones</li>
              <li><strong>Ejemplos:</strong> Microsoft Office, Adobe Photoshop, AutoCAD</li>
            </ul>

            <h6>Licencia de Volumen:</h6>
            <ul>
              <li><strong>Para empresas:</strong> Múltiples instalaciones</li>
              <li><strong>Descuentos:</strong> Precio reducido por cantidad</li>
              <li><strong>Gestión centralizada:</strong> Administración simplificada</li>
            </ul>

            <h6>Licencia OEM:</h6>
            <ul>
              <li><strong>Con hardware:</strong> Viene preinstalado</li>
              <li><strong>Vinculado al equipo:</strong> No transferible</li>
              <li><strong>Ejemplo:</strong> Windows preinstalado en PC</li>
            </ul>

            <h5>Ventajas del Software Propietario:</h5>
            <ul>
              <li>✅ Soporte técnico profesional</li>
              <li>✅ Garantías y responsabilidades claras</li>
              <li>✅ Documentación completa</li>
              <li>✅ Interfaces pulidas y user-friendly</li>
              <li>✅ Compatibilidad garantizada</li>
            </ul>

            <h5>Desventajas:</h5>
            <ul>
              <li>❌ Costo elevado</li>
              <li>❌ Dependencia del proveedor</li>
              <li>❌ No se puede modificar</li>
              <li>❌ Licencias complejas</li>
              <li>❌ Obsolescencia forzada</li>
            </ul>
          </div>

          <h4>🆓 Software Libre</h4>
          <div class="software-libre">
            <h5>Definición:</h5>
            <p>Software que respeta las <strong>cuatro libertades fundamentales</strong> definidas por la Free Software Foundation.</p>

            <h6>Las Cuatro Libertades:</h6>
            <ol>
              <li><strong>Libertad 0:</strong> Usar el programa para cualquier propósito</li>
              <li><strong>Libertad 1:</strong> Estudiar cómo funciona el programa y adaptarlo</li>
              <li><strong>Libertad 2:</strong> Redistribuir copias para ayudar a otros</li>
              <li><strong>Libertad 3:</strong> Mejorar el programa y publicar las mejoras</li>
            </ol>

            <h5>Licencias de Software Libre:</h5>
            
            <h6>GPL (General Public License):</h6>
            <ul>
              <li><strong>Copyleft fuerte:</strong> Las modificaciones deben ser GPL</li>
              <li><strong>Código fuente obligatorio:</strong> Debe estar disponible</li>
              <li><strong>Ejemplo:</strong> Linux, GIMP</li>
            </ul>

            <h6>LGPL (Lesser GPL):</h6>
            <ul>
              <li><strong>Copyleft débil:</strong> Permite enlace con software propietario</li>
              <li><strong>Para librerías:</strong> Diseñada para bibliotecas</li>
              <li><strong>Ejemplo:</strong> FFmpeg, GTK</li>
            </ul>

            <h6>Apache License:</h6>
            <ul>
              <li><strong>Permisiva:</strong> Permite uso comercial</li>
              <li><strong>Protección de patentes:</strong> Incluye cláusulas de patentes</li>
              <li><strong>Ejemplo:</strong> Apache HTTP Server</li>
            </ul>

            <h6>MIT License:</h6>
            <ul>
              <li><strong>Muy permisiva:</strong> Mínimas restricciones</li>
              <li><strong>Simple:</strong> Licencia corta y clara</li>
              <li><strong>Ejemplo:</strong> jQuery, Node.js</li>
            </ul>

            <h5>Ventajas del Software Libre:</h5>
            <ul>
              <li>✅ Gratuito (generalmente)</li>
              <li>✅ Código fuente disponible</li>
              <li>✅ Modificable y personalizable</li>
              <li>✅ Comunidad activa</li>
              <li>✅ Transparencia y seguridad</li>
              <li>✅ No hay vendor lock-in</li>
            </ul>

            <h5>Desventajas:</h5>
            <ul>
              <li>❌ Soporte puede ser limitado</li>
              <li>❌ Curva de aprendizaje</li>
              <li>❌ Interfaz menos pulida</li>
              <li>❌ Compatibilidad variable</li>
              <li>❌ Responsabilidad del usuario</li>
            </ul>
          </div>

          <h4>🌐 Modelos de Distribución</h4>
          <div class="modelos-distribucion">
            <h5>Freeware:</h5>
            <ul>
              <li><strong>Definición:</strong> Software gratuito pero con código cerrado</li>
              <li><strong>Uso:</strong> Libre para uso personal</li>
              <li><strong>Limitaciones:</strong> No se puede modificar o vender</li>
              <li><strong>Ejemplos:</strong> Skype, Google Chrome, Adobe Reader</li>
            </ul>

            <h5>Shareware:</h5>
            <ul>
              <li><strong>Definición:</strong> Software de prueba por tiempo limitado</li>
              <li><strong>Modelo:</strong> "Prueba antes de comprar"</li>
              <li><strong>Limitaciones:</strong> Tiempo o funcionalidades limitadas</li>
              <li><strong>Ejemplos:</strong> WinRAR, muchos juegos indie</li>
            </ul>

            <h5>Freemium:</h5>
            <ul>
              <li><strong>Definición:</strong> Versión básica gratuita, premium de pago</li>
              <li><strong>Modelo:</strong> Monetización por características avanzadas</li>
              <li><strong>Estrategia:</strong> Atraer usuarios con versión gratuita</li>
              <li><strong>Ejemplos:</strong> Spotify, Dropbox, Zoom</li>
            </ul>

            <h5>Software como Servicio (SaaS):</h5>
            <ul>
              <li><strong>Definición:</strong> Software accedido vía internet</li>
              <li><strong>Modelo:</strong> Suscripción mensual/anual</li>
              <li><strong>Ventajas:</strong> Siempre actualizado, acceso desde cualquier lugar</li>
              <li><strong>Ejemplos:</strong> Office 365, Google Workspace, Salesforce</li>
            </ul>

            <h5>Open Source Comercial:</h5>
            <ul>
              <li><strong>Definición:</strong> Software libre con soporte comercial</li>
              <li><strong>Modelo:</strong> Código abierto + servicios de pago</li>
              <li><strong>Dual licensing:</strong> Licencia libre y comercial</li>
              <li><strong>Ejemplos:</strong> Red Hat Enterprise Linux, MySQL</li>
            </ul>
          </div>

          <h4>⚖️ Consideraciones Legales</h4>
          <div class="consideraciones-legales">
            <h5>Violación de Licencias:</h5>
            <ul>
              <li><strong>Piratería:</strong> Uso no autorizado de software propietario</li>
              <li><strong>Consecuencias:</strong> Multas, demandas legales</li>
              <li><strong>Auditorías:</strong> Revisiones de cumplimiento</li>
            </ul>

            <h5>Cumplimiento en Empresas:</h5>
            <ul>
              <li><strong>Asset management:</strong> Inventario de software</li>
              <li><strong>License tracking:</strong> Seguimiento de licencias</li>
              <li><strong>Employee training:</strong> Capacitación sobre uso legal</li>
              <li><strong>Legal review:</strong> Revisión de términos de licencia</li>
            </ul>

            <h5>Mejores Prácticas:</h5>
            <ul>
              <li>📋 Leer siempre los términos de licencia</li>
              <li>📊 Mantener registro de software instalado</li>
              <li>🔄 Renovar licencias a tiempo</li>
              <li>👥 Capacitar al personal sobre uso legal</li>
              <li>⚖️ Consultar legal en casos complejos</li>
            </ul>
          </div>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/licencias-software.jpg",
        infografia: "/images/teoria/tipos-licencias.png",
        documento: "/docs/guia-licencias.pdf"
      },
      actividades: [
        {
          tipo: "investigacion",
          pregunta: "Revisa las licencias de 3 programas que uses frecuentemente y clasifícalos por tipo",
          ayuda: "Busca en Ayuda > Acerca de o en los archivos de instalación del software"
        }
      ]
    }
  ],
  recursos: {
    documentos: [
      {
        titulo: "Guía Completa de Software",
        url: "/docs/guia-software.pdf",
        tipo: "pdf"
      },
      {
        titulo: "Licencias de Software Explicadas",
        url: "/docs/licencias-explicadas.pdf",
        tipo: "pdf"
      }
    ],
    enlaces: [
      {
        titulo: "Free Software Foundation",
        url: "https://www.fsf.org/",
        tipo: "externo"
      },
      {
        titulo: "Open Source Initiative",
        url: "https://opensource.org/",
        tipo: "externo"
      },
      {
        titulo: "Creative Commons",
        url: "https://creativecommons.org/",
        tipo: "externo"
      }
    ],
    videos: [
      {
        titulo: "Tipos de Software Explicados",
        url: "/videos/tipos-software.mp4",
        duracion: "18:20"
      },
      {
        titulo: "Software Libre vs Propietario",
        url: "/videos/libre-vs-propietario.mp4",
        duracion: "12:45"
      }
    ]
  },
  evaluacion: {
    tipo: "cuestionario",
    preguntas: [
      {
        pregunta: "¿Cuál es la principal función del software de sistema?",
        tipo: "opcion_multiple",
        opciones: [
          "Entretener al usuario",
          "Gestionar los recursos del hardware y proporcionar una plataforma",
          "Editar documentos",
          "Navegar en internet"
        ],
        respuestaCorrecta: 1
      },
      {
        pregunta: "¿Qué tipo de software es Microsoft Word?",
        tipo: "opcion_multiple",
        opciones: [
          "Software de sistema",
          "Software de programación",
          "Software de aplicación",
          "Firmware"
        ],
        respuestaCorrecta: 2
      },
      {
        pregunta: "¿Cuáles son las cuatro libertades del software libre?",
        tipo: "opcion_multiple",
        opciones: [
          "Usar, copiar, vender, modificar",
          "Usar, estudiar, redistribuir, mejorar",
          "Instalar, ejecutar, copiar, borrar",
          "Comprar, usar, vender, actualizar"
        ],
        respuestaCorrecta: 1
      },
      {
        pregunta: "¿Qué significa 'freeware'?",
        tipo: "opcion_multiple",
        opciones: [
          "Software libre con código abierto",
          "Software gratuito pero con código cerrado",
          "Software que se puede vender libremente",
          "Software sin licencia"
        ],
        respuestaCorrecta: 1
      },
      {
        pregunta: "¿Qué es un IDE en programación?",
        tipo: "opcion_multiple",
        opciones: [
          "Un tipo de licencia",
          "Un lenguaje de programación",
          "Un entorno de desarrollo integrado",
          "Un tipo de compilador"
        ],
        respuestaCorrecta: 2
      }
    ]
  }
};

export default tema05;
