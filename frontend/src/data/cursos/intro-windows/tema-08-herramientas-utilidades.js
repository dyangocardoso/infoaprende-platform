/**
 * Tema 8: Herramientas y utilidades
 * Curso: Introducción al Sistema Operativo Windows
 */

export default {
  id: '8',
  titulo: "Herramientas y utilidades",
  tematica: "Windows Defender, compresión de archivos e instalación/desinstalación de programas",
  duracion: "35-40 minutos",
  objetivos: [
    "Configurar y utilizar Windows Defender para proteger el sistema",
    "Realizar análisis de seguridad y gestionar el firewall integrado",
    "Comprimir y descomprimir archivos usando herramientas nativas",
    "Instalar programas y aplicaciones de manera segura",
    "Desinstalar software correctamente para liberar espacio",
    "Navegar por el Panel de Control y la aplicación Configuración"
  ],

  secciones: [
    {
      id: 1,
      titulo: "Windows Defender: Protección de Seguridad",
      contenido: `
        <h3>🛡️ Windows Defender y Seguridad del Sistema</h3>
        
        <div class="windows-defender">
          <h4>🔒 ¿Qué es Windows Defender?</h4>
          <p>Windows Defender es el <strong>antivirus integrado gratuito</strong> de Windows que proporciona protección en tiempo real contra malware, virus, ransomware y otras amenazas. Viene preinstalado en Windows 10 y 11, ofreciendo una primera línea de defensa efectiva para tu sistema.</p>

          <h5>🎯 Características principales:</h5>
          <ul>
            <li><strong>Protección en tiempo real:</strong> Escaneo automático de archivos y programas</li>
            <li><strong>Análisis programados:</strong> Revisión automática del sistema</li>
            <li><strong>Firewall integrado:</strong> Control de tráfico de red</li>
            <li><strong>Protección contra ransomware:</strong> Defensa contra secuestro de archivos</li>
            <li><strong>SmartScreen:</strong> Filtro de descargas peligrosas</li>
            <li><strong>Control parental:</strong> Opciones de seguridad familiar</li>
          </ul>

          <h4>🔍 Realizar un Análisis de Seguridad</h4>
          <div class="analisis-seguridad">
            <h5>📋 Pasos para análisis completo:</h5>
            <ol>
              <li><strong>Abrir Configuración:</strong> Windows + I</li>
              <li><strong>Navegar:</strong> Actualización y seguridad → Seguridad de Windows</li>
              <li><strong>Seleccionar:</strong> "Protección contra virus y amenazas"</li>
              <li><strong>Opciones de análisis:</strong> Hacer clic en "Opciones de análisis"</li>
              <li><strong>Elegir tipo:</strong>
                <ul>
                  <li><strong>Análisis rápido:</strong> 5-10 minutos, archivos más comunes</li>
                  <li><strong>Análisis completo:</strong> 30-60 minutos, todo el sistema</li>
                  <li><strong>Análisis personalizado:</strong> Carpetas específicas</li>
                </ul>
              </li>
              <li><strong>Ejecutar:</strong> Hacer clic en "Examinar ahora"</li>
              <li><strong>Revisar resultados:</strong> Seguir recomendaciones</li>
            </ol>

            <h5>🕐 Programar análisis automáticos:</h5>
            <ol>
              <li>Buscar "Programador de tareas" en el menú Inicio</li>
              <li>Navegar: Biblioteca → Microsoft → Windows → Windows Defender</li>
              <li>Clic derecho en "Windows Defender Scheduled Scan"</li>
              <li>Seleccionar "Propiedades" → Pestaña "Desencadenadores"</li>
              <li>Configurar frecuencia y horario deseado</li>
            </ol>
          </div>

          <h4>🔥 Firewall de Windows</h4>
          <div class="firewall-windows">
            <h5>🛡️ ¿Qué hace el Firewall?</h5>
            <p>El Firewall controla el <strong>tráfico de red entrante y saliente</strong>, bloqueando conexiones no autorizadas y protegiendo contra ataques de red.</p>

            <h5>⚙️ Configurar Firewall:</h5>
            <ol>
              <li><strong>Acceso:</strong> Buscar "Firewall de Windows Defender" en menú Inicio</li>
              <li><strong>Estado:</strong> Verificar que esté "Activado"</li>
              <li><strong>Configuración avanzada:</strong> "Configuración avanzada" para reglas específicas</li>
              <li><strong>Permitir aplicaciones:</strong> "Permitir una aplicación a través del firewall"</li>
              <li><strong>Notificaciones:</strong> Configurar alertas de bloqueo</li>
            </ol>

            <h5>⚠️ Señales de problemas de seguridad:</h5>
            <ul>
              <li>Sistema más lento de lo normal</li>
              <li>Ventanas emergentes inesperadas</li>
              <li>Cambios en página de inicio del navegador</li>
              <li>Programas que se ejecutan solos</li>
              <li>Archivos eliminados o modificados sin autorización</li>
            </ul>
          </div>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/windows-defender.jpg",
        infografia: "/images/teoria/configuracion-seguridad-windows.png",
        video: "/videos/windows-defender-configuracion.mp4"
      },
      actividades: [
        {
          tipo: "configuracion",
          pregunta: "Configura Windows Defender y realiza un análisis rápido del sistema",
          ayuda: "Ve a Configuración → Actualización y seguridad → Seguridad de Windows"
        },
        {
          tipo: "verificacion",
          pregunta: "Verifica que el Firewall esté activo y configurado correctamente",
          ayuda: "Busca 'Firewall de Windows Defender' en el menú Inicio"
        }
      ]
    },
    {
      id: 2,
      titulo: "Compresión de Archivos",
      contenido: `
        <h3>📦 Compresión de Archivos en Windows</h3>
        
        <div class="compresion-archivos">
          <h4>💡 ¿Qué es la compresión de archivos?</h4>
          <p>La compresión de archivos es el proceso de <strong>reducir el tamaño</strong> de uno o varios archivos creando un archivo comprimido (ZIP). Es útil para ahorrar espacio, enviar archivos por email más rápido o crear copias de seguridad manejables.</p>

          <h5>✨ Ventajas de comprimir:</h5>
          <ul>
            <li><strong>Ahorro de espacio:</strong> Reduce significativamente el tamaño</li>
            <li><strong>Transferencia rápida:</strong> Envíos por email más eficientes</li>
            <li><strong>Organización:</strong> Múltiples archivos en uno solo</li>
            <li><strong>Backup eficiente:</strong> Copias de seguridad más pequeñas</li>
            <li><strong>Protección:</strong> Posibilidad de agregar contraseña</li>
          </ul>

          <h4>📋 Crear un Archivo ZIP</h4>
          <div class="crear-zip">
            <h5>🔧 Método 1: Clic derecho (Más fácil)</h5>
            <ol>
              <li><strong>Seleccionar archivos:</strong> Ctrl + clic para múltiples archivos</li>
              <li><strong>Clic derecho:</strong> Sobre la selección</li>
              <li><strong>Enviar a:</strong> Seleccionar "Carpeta comprimida (en zip)"</li>
              <li><strong>Nombrar:</strong> Escribir nombre para el archivo ZIP</li>
              <li><strong>Confirmar:</strong> Presionar Enter</li>
            </ol>

            <h5>🔧 Método 2: Desde Explorador</h5>
            <ol>
              <li>Abrir Explorador de archivos (Windows + E)</li>
              <li>Navegar a la carpeta con archivos</li>
              <li>Seleccionar archivos deseados</li>
              <li>Cinta de opciones → Pestaña "Compartir"</li>
              <li>Hacer clic en "Zip" (icono de carpeta comprimida)</li>
            </ol>

            <h5>📁 Comprimir carpetas completas:</h5>
            <ol>
              <li>Clic derecho en la carpeta</li>
              <li>"Enviar a" → "Carpeta comprimida (en zip)"</li>
              <li>Se creará ZIP con nombre de la carpeta</li>
              <li>El ZIP contendrá toda la estructura de carpetas</li>
            </ol>
          </div>

          <h4>📤 Extraer Archivos Comprimidos</h4>
          <div class="extraer-archivos">
            <h5>🔓 Método 1: Extraer todo</h5>
            <ol>
              <li><strong>Clic derecho</strong> en archivo ZIP</li>
              <li><strong>Seleccionar:</strong> "Extraer todo..."</li>
              <li><strong>Elegir ubicación:</strong> Carpeta de destino</li>
              <li><strong>Opciones:</strong> Marcar "Mostrar archivos extraídos al completarse"</li>
              <li><strong>Extraer:</strong> Hacer clic en "Extraer"</li>
            </ol>

            <h5>🔓 Método 2: Arrastrar desde ZIP</h5>
            <ol>
              <li><strong>Doble clic</strong> en archivo ZIP para abrirlo</li>
              <li><strong>Ver contenido:</strong> Archivos dentro del ZIP</li>
              <li><strong>Seleccionar archivos</strong> específicos si es necesario</li>
              <li><strong>Arrastrar</strong> a carpeta de destino</li>
            </ol>

            <h5>🔓 Método 3: Desde Explorador</h5>
            <ol>
              <li>Seleccionar archivo ZIP</li>
              <li>Pestaña "Herramientas de carpetas comprimidas"</li>
              <li>Hacer clic en "Extraer todo"</li>
              <li>Seguir asistente de extracción</li>
            </ol>
          </div>

          <h4>🎯 Tipos de Archivos Comprimidos</h4>
          <div class="tipos-compresion">
            <h5>📋 Formatos comunes:</h5>
            <ul>
              <li><strong>.ZIP:</strong> Más común, soporte nativo en Windows</li>
              <li><strong>.RAR:</strong> Mejor compresión, necesita software adicional (WinRAR)</li>
              <li><strong>.7Z:</strong> Excelente compresión, software 7-Zip gratuito</li>
              <li><strong>.TAR/.TAR.GZ:</strong> Común en sistemas Linux/Mac</li>
            </ul>

            <h5>💼 Cuándo usar cada tipo:</h5>
            <ul>
              <li><strong>ZIP:</strong> Intercambio general, compatible universalmente</li>
              <li><strong>RAR:</strong> Archivos grandes, máxima compresión</li>
              <li><strong>7Z:</strong> Backup personal, archivos muy grandes</li>
            </ul>
          </div>

          <h4>💡 Consejos Prácticos</h4>
          <ul>
            <li><strong>Nombres descriptivos:</strong> "fotos-vacaciones-2024.zip"</li>
            <li><strong>Verificar contenido:</strong> Abrir ZIP antes de enviarlo</li>
            <li><strong>Tamaño de email:</strong> Muchos servicios limitan a 25MB</li>
            <li><strong>Contraseñas:</strong> Usar software como 7-Zip para protección</li>
            <li><strong>No comprimir ya comprimidos:</strong> Videos, música, PDFs no se comprimen mucho</li>
          </ul>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/compresion-archivos.jpg",
        infografia: "/images/teoria/tipos-archivos-comprimidos.png",
        video: "/videos/compresion-descompresion-archivos.mp4"
      },
      actividades: [
        {
          tipo: "practica",
          pregunta: "Crea una carpeta con 5 documentos de texto y comprímela en un archivo ZIP",
          ayuda: "Crea documentos simples, selecciona todos, clic derecho → Enviar a → Carpeta comprimida"
        },
        {
          tipo: "exploracion",
          pregunta: "Descarga un archivo ZIP de internet y extrae su contenido",
          ayuda: "Busca archivos ZIP de muestra en sitios como archive.org o filesamples.com"
        }
      ]
    },
    {
      id: 3,
      titulo: "Instalación de Programas",
      contenido: `
        <h3>⬇️ Instalación Segura de Programas</h3>
        
        <div class="instalacion-programas">
          <h4>🛡️ Métodos de Instalación Seguros</h4>
          
          <div class="metodos-instalacion">
            <h5>🏪 Microsoft Store (Más Seguro)</h5>
            <p>La <strong>Microsoft Store</strong> es la forma más segura de instalar aplicaciones, ya que todas están verificadas y sandboxed.</p>
            
            <h6>📋 Pasos para instalar desde Store:</h6>
            <ol>
              <li><strong>Abrir Microsoft Store:</strong> Buscar en menú Inicio o Windows + S</li>
              <li><strong>Buscar aplicación:</strong> Usar barra de búsqueda superior</li>
              <li><strong>Revisar aplicación:</strong> Leer descripción, capturas, reseñas</li>
              <li><strong>Verificar editor:</strong> Comprobar que sea desarrollador legítimo</li>
              <li><strong>Instalar:</strong> Hacer clic en "Instalar" o "Obtener"</li>
              <li><strong>Esperar descarga:</strong> La instalación es automática</li>
              <li><strong>Acceder:</strong> La app aparece en menú Inicio</li>
            </ol>

            <h6>✅ Ventajas de Microsoft Store:</h6>
            <ul>
              <li>Aplicaciones verificadas por Microsoft</li>
              <li>Actualizaciones automáticas</li>
              <li>Instalación y desinstalación limpia</li>
              <li>No malware ni virus</li>
              <li>Funciona en modo sandbox (mayor seguridad)</li>
            </ul>
          </div>

          <h5>🌐 Instalación desde Sitios Web</h5>
          <div class="instalacion-web">
            <h6>⚠️ Precauciones importantes:</h6>
            <ul>
              <li><strong>Sitios oficiales únicamente:</strong> Descargar solo desde el sitio web del desarrollador</li>
              <li><strong>HTTPS obligatorio:</strong> Verificar que la URL comience con "https://"</li>
              <li><strong>Certificados digitales:</strong> Comprobar firma digital del archivo</li>
              <li><strong>Antivirus activo:</strong> Mantener Windows Defender activado</li>
            </ul>

            <h6>📋 Proceso de instalación segura:</h6>
            <ol>
              <li><strong>Descargar instalador:</strong> Desde sitio web oficial</li>
              <li><strong>Ubicar archivo:</strong> Generalmente en carpeta "Descargas"</li>
              <li><strong>Verificar archivo:</strong> Nombre correcto, tamaño razonable</li>
              <li><strong>Clic derecho → Propiedades:</strong> Verificar firma digital</li>
              <li><strong>Doble clic:</strong> Ejecutar instalador</li>
              <li><strong>Control de Usuario (UAC):</strong> Hacer clic en "Sí" si aparece</li>
              <li><strong>Seguir asistente:</strong> Leer cada pantalla cuidadosamente</li>
              <li><strong>Personalizar instalación:</strong> Desmarcar software adicional no deseado</li>
              <li><strong>Elegir ubicación:</strong> Generalmente dejar ubicación predeterminada</li>
              <li><strong>Finalizar:</strong> Completar instalación</li>
            </ol>

            <h6>🔍 Qué verificar durante instalación:</h6>
            <ul>
              <li><strong>Software adicional:</strong> Desmarcar barras de herramientas, antivirus "gratuitos"</li>
              <li><strong>Cambios de navegador:</strong> No permitir cambios de página de inicio</li>
              <li><strong>Ubicación:</strong> Instalar en carpeta apropiada (Archivos de programa)</li>
              <li><strong>Accesos directos:</strong> Solo crear los necesarios</li>
            </ul>
          </div>

          <h4>🔧 Archivos de Instalación Comunes</h4>
          <div class="tipos-instaladores">
            <h5>📁 Tipos de archivos instaladores:</h5>
            <ul>
              <li><strong>.EXE:</strong> Ejecutable de Windows, más común</li>
              <li><strong>.MSI:</strong> Instalador Windows, más control administrativo</li>
              <li><strong>.ZIP:</strong> Programa portable, no requiere instalación</li>
              <li><strong>.APPX/.MSIX:</strong> Paquetes modernos de Windows</li>
            </ul>

            <h5>🎯 Instalaciones especiales:</h5>
            <ul>
              <li><strong>Programas portables:</strong> Se ejecutan desde cualquier ubicación sin instalación</li>
              <li><strong>Microsoft Store apps:</strong> Instalación automática y segura</li>
              <li><strong>Paquetes .NET:</strong> Requieren framework .NET instalado</li>
              <li><strong>Drivers:</strong> Software para hardware específico</li>
            </ul>
          </div>

          <h4>⚠️ Señales de Instaladores Peligrosos</h4>
          <div class="instaladores-peligrosos">
            <h5>🚨 Evitar si ves:</h5>
            <ul>
              <li>Promesas de "optimización milagrosa" del sistema</li>
              <li>Instaladores que vienen en emails no solicitados</li>
              <li>Software "crackeado" o "pirateado"</li>
              <li>Sitios web con muchos anuncios y pop-ups</li>
              <li>Instaladores que requieren desactivar antivirus</li>
              <li>Archivos con doble extensión (.jpg.exe, .pdf.exe)</li>
            </ul>

            <h5>🛡️ Mejores prácticas:</h5>
            <ul>
              <li>Crear punto de restauración antes de instalar software importante</li>
              <li>Leer reseñas y comentarios de otros usuarios</li>
              <li>Verificar que el software sea actualizado regularmente</li>
              <li>Preferir software de código abierto cuando sea posible</li>
              <li>Mantener lista de software instalado para auditorías regulares</li>
            </ul>
          </div>

          <h4>🔄 Actualización de Programas</h4>
          <div class="actualizacion-programas">
            <h5>📈 ¿Por qué actualizar?</h5>
            <ul>
              <li><strong>Seguridad:</strong> Corrección de vulnerabilidades</li>
              <li><strong>Funcionalidad:</strong> Nuevas características</li>
              <li><strong>Compatibilidad:</strong> Soporte para nuevos formatos</li>
              <li><strong>Rendimiento:</strong> Optimizaciones y corrección de errores</li>
            </ul>

            <h5>⚙️ Métodos de actualización:</h5>
            <ul>
              <li><strong>Automática:</strong> El programa se actualiza solo</li>
              <li><strong>Notificaciones:</strong> El programa avisa cuando hay actualizaciones</li>
              <li><strong>Manual:</strong> Verificar en menú "Ayuda" → "Buscar actualizaciones"</li>
              <li><strong>Descarga nueva versión:</strong> Desde sitio web oficial</li>
            </ul>
          </div>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/instalacion-programas-windows.jpg",
        infografia: "/images/teoria/metodos-instalacion-seguros.png",
        video: "/videos/instalacion-segura-software.mp4"
      },
      actividades: [
        {
          tipo: "practica",
          pregunta: "Instala una aplicación gratuita desde Microsoft Store",
          ayuda: "Busca aplicaciones útiles como 'Windows Calculator', 'Paint 3D' o 'Microsoft To Do'"
        },
        {
          tipo: "exploracion",
          pregunta: "Descarga e instala un programa desde su sitio web oficial (ej: VLC, Firefox)",
          ayuda: "Ve al sitio oficial, lee cuidadosamente cada paso del instalador"
        }
      ]
    },
    {
      id: 4,
      titulo: "Desinstalación de Programas",
      contenido: `
        <h3>🗑️ Desinstalación Correcta de Programas</h3>
        
        <div class="desinstalacion-programas">
          <h4>❓ ¿Por qué desinstalar programas?</h4>
          <p>Desinstalar programas que ya no usas es <strong>fundamental</strong> para mantener tu sistema optimizado y seguro.</p>

          <h5>✨ Beneficios de desinstalar software no utilizado:</h5>
          <ul>
            <li><strong>Liberar espacio:</strong> Más almacenamiento disponible</li>
            <li><strong>Mejorar rendimiento:</strong> Menos programas en segundo plano</li>
            <li><strong>Reducir vulnerabilidades:</strong> Menos software = menos riesgo de seguridad</li>
            <li><strong>Sistema más limpio:</strong> Menos elementos en menú Inicio</li>
            <li><strong>Actualizaciones más rápidas:</strong> Menos programas que actualizar</li>
          </ul>

          <h4>⚙️ Método 1: Configuración de Windows (Recomendado)</h4>
          <div class="desinstalar-configuracion">
            <h5>📋 Pasos detallados:</h5>
            <ol>
              <li><strong>Abrir Configuración:</strong> Windows + I o menú Inicio → Configuración</li>
              <li><strong>Navegar:</strong> Hacer clic en "Aplicaciones"</li>
              <li><strong>Buscar programa:</strong> Usar cuadro de búsqueda o desplazarse por lista</li>
              <li><strong>Filtrar si necesario:</strong> Por tamaño, fecha de instalación, etc.</li>
              <li><strong>Seleccionar programa:</strong> Hacer clic en el programa a desinstalar</li>
              <li><strong>Desinstalar:</strong> Hacer clic en "Desinstalar"</li>
              <li><strong>Confirmar:</strong> Hacer clic en "Desinstalar" nuevamente</li>
              <li><strong>Seguir asistente:</strong> Completar proceso de desinstalación</li>
            </ol>

            <h5>🔍 Información útil en la lista:</h5>
            <ul>
              <li><strong>Tamaño:</strong> Cuánto espacio ocupa el programa</li>
              <li><strong>Fecha de instalación:</strong> Cuándo se instaló</li>
              <li><strong>Versión:</strong> Número de versión del software</li>
              <li><strong>Opciones avanzadas:</strong> Algunos programas tienen configuraciones adicionales</li>
            </ul>
          </div>

          <h4>🔧 Método 2: Panel de Control (Clásico)</h4>
          <div class="desinstalar-panel-control">
            <h5>📋 Proceso tradicional:</h5>
            <ol>
              <li><strong>Abrir Panel de Control:</strong> Buscar "Panel de Control" en menú Inicio</li>
              <li><strong>Navegar:</strong> "Programas" → "Desinstalar un programa"</li>
              <li><strong>Lista de programas:</strong> Ver todos los programas instalados</li>
              <li><strong>Seleccionar programa:</strong> Hacer clic en el que deseas eliminar</li>
              <li><strong>Desinstalar:</strong> Hacer clic en "Desinstalar" en la barra superior</li>
              <li><strong>Confirmar acción:</strong> Seguir instrucciones del desinstalador</li>
            </ol>

            <h5>📊 Información adicional en Panel de Control:</h5>
            <ul>
              <li><strong>Publicador:</strong> Empresa que creó el software</li>
              <li><strong>Tamaño:</strong> Espacio ocupado en disco</li>
              <li><strong>Versión:</strong> Número de versión instalada</li>
              <li><strong>Fecha de instalación:</strong> Cuándo se instaló</li>
              <li><strong>Usado frecuentemente:</strong> Indicador de uso regular (Windows 10)</li>
            </ul>
          </div>

          <h4>📱 Método 3: Aplicaciones de Microsoft Store</h4>
          <div class="desinstalar-store">
            <h5>⚡ Desinstalación rápida:</h5>
            <ol>
              <li><strong>Método A - Desde menú Inicio:</strong>
                <ul>
                  <li>Clic derecho en aplicación en menú Inicio</li>
                  <li>Seleccionar "Desinstalar"</li>
                  <li>Confirmar acción</li>
                </ul>
              </li>
              <li><strong>Método B - Desde Configuración:</strong>
                <ul>
                  <li>Configuración → Aplicaciones</li>
                  <li>Buscar aplicación de Store</li>
                  <li>Clic en aplicación → "Desinstalar"</li>
                </ul>
              </li>
            </ol>

            <h5>✨ Ventajas de apps de Store:</h5>
            <ul>
              <li>Desinstalación completamente limpia</li>
              <li>No dejan archivos residuales</li>
              <li>Proceso instantáneo</li>
              <li>No requieren desinstalador especial</li>
            </ul>
          </div>

          <h4>🧹 Limpieza Después de Desinstalar</h4>
          <div class="limpieza-post-desinstalacion">
            <h5>📁 Archivos residuales comunes:</h5>
            <ul>
              <li><strong>Carpeta del programa:</strong> C:\\Program Files\\ o C:\\Program Files (x86)\\</li>
              <li><strong>Datos de usuario:</strong> C:\\Users\\[usuario]\\AppData\\</li>
              <li><strong>Archivos temporales:</strong> C:\\Windows\\Temp\\</li>
              <li><strong>Entradas de registro:</strong> Pueden quedar en el registro de Windows</li>
            </ul>

            <h5>🔧 Herramientas de limpieza:</h5>
            <ol>
              <li><strong>Liberador de espacio en disco:</strong>
                <ul>
                  <li>Buscar "Liberador de espacio" en menú Inicio</li>
                  <li>Seleccionar disco C:</li>
                  <li>Marcar "Archivos temporales", "Papelera", etc.</li>
                  <li>Hacer clic en "Eliminar archivos"</li>
                </ul>
              </li>
              <li><strong>Limpieza manual:</strong>
                <ul>
                  <li>Revisar carpeta Program Files para carpetas vacías</li>
                  <li>Verificar escritorio para accesos directos huérfanos</li>
                  <li>Limpiar menú Inicio de enlaces rotos</li>
                </ul>
              </li>
            </ol>
          </div>

          <h4>⚠️ Programas que NO debes desinstalar</h4>
          <div class="programas-no-desinstalar">
            <h5>🚫 Software crítico del sistema:</h5>
            <ul>
              <li><strong>Microsoft Visual C++ Redistributables:</strong> Necesarios para muchos programas</li>
              <li><strong>.NET Framework:</strong> Requerido por aplicaciones .NET</li>
              <li><strong>Drivers de hardware:</strong> Controladores de tarjeta gráfica, audio, etc.</li>
              <li><strong>Windows Update components:</strong> Componentes del sistema</li>
              <li><strong>Microsoft Edge WebView2:</strong> Usado por muchas aplicaciones modernas</li>
            </ul>

            <h5>⚠️ Señales de que un programa es importante:</h5>
            <ul>
              <li>Publicador: Microsoft Corporation</li>
              <li>Instalado junto con Windows</li>
              <li>Tamaño muy pequeño (menos de 10 MB)</li>
              <li>Nombre técnico con números de versión complejos</li>
              <li>Sin fecha de instalación (instalado con el sistema)</li>
            </ul>
          </div>

          <h4>📈 Mantenimiento Regular</h4>
          <div class="mantenimiento-regular">
            <h5>🗓️ Rutina recomendada:</h5>
            <ul>
              <li><strong>Mensualmente:</strong> Revisar programas instalados</li>
              <li><strong>Identificar no utilizados:</strong> Software que no has usado en 3+ meses</li>
              <li><strong>Investigar desconocidos:</strong> Programas que no recuerdas instalar</li>
              <li><strong>Desinstalar obsoletos:</strong> Versiones antiguas de software actualizado</li>
              <li><strong>Limpiar residuos:</strong> Usar liberador de espacio en disco</li>
            </ul>

            <h5>💡 Consejos para mantener sistema limpio:</h5>
            <ul>
              <li>Ser selectivo al instalar software nuevo</li>
              <li>Leer siempre qué se va a instalar</li>
              <li>Preferir versiones portables cuando sea posible</li>
              <li>Mantener lista de software esencial</li>
              <li>Crear punto de restauración antes de cambios importantes</li>
            </ul>
          </div>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/desinstalacion-programas.jpg",
        infografia: "/images/teoria/metodos-desinstalacion.png",
        video: "/videos/desinstalacion-limpia-programas.mp4"
      },
      actividades: [
        {
          tipo: "auditoria",
          pregunta: "Revisa la lista de programas instalados e identifica 3 que no hayas usado recientemente",
          ayuda: "Ve a Configuración → Aplicaciones y ordena por fecha de instalación o tamaño"
        },
        {
          tipo: "practica",
          pregunta: "Desinstala un programa de prueba y ejecuta el liberador de espacio en disco",
          ayuda: "Instala una app gratuita de Store primero, luego desinstálala y limpia archivos temporales"
        }
      ]
    },
    {
      id: 5,
      titulo: "Panel de Control y Configuración",
      contenido: `
        <h3>⚙️ Panel de Control vs Configuración Moderna</h3>
        
        <div class="panel-configuracion">
          <h4>🔄 Dos Sistemas de Configuración</h4>
          <p>Windows tiene <strong>dos interfaces principales</strong> para configurar el sistema: el Panel de Control (clásico desde Windows 95) y la aplicación Configuración (moderna desde Windows 10).</p>

          <h5>📊 Comparación rápida:</h5>
          <table class="comparacion-sistemas">
            <tr>
              <th>Aspecto</th>
              <th>Panel de Control</th>
              <th>Configuración</th>
            </tr>
            <tr>
              <td><strong>Interfaz</strong></td>
              <td>Clásica, ventanas tradicionales</td>
              <td>Moderna, optimizada para táctil</td>
            </tr>
            <tr>
              <td><strong>Funciones</strong></td>
              <td>Configuraciones avanzadas y heredadas</td>
              <td>Configuraciones más comunes y nuevas</td>
            </tr>
            <tr>
              <td><strong>Acceso</strong></td>
              <td>Búsqueda: "Panel de Control"</td>
              <td>Windows + I o icono de engranaje</td>
            </tr>
            <tr>
              <td><strong>Organización</strong></td>
              <td>Por categorías tradicionales</td>
              <td>Por funcionalidad moderna</td>
            </tr>
          </table>

          <h4>🏛️ Panel de Control (Clásico)</h4>
          <div class="panel-control-clasico">
            <h5>🚪 Acceso al Panel de Control:</h5>
            <ul>
              <li><strong>Método 1:</strong> Buscar "Panel de Control" en menú Inicio</li>
              <li><strong>Método 2:</strong> Windows + R → escribir "control" → Enter</li>
              <li><strong>Método 3:</strong> Windows + X → "Ejecutar" → "control"</li>
              <li><strong>Método 4:</strong> Desde Configuración → "Panel de control" (enlaces específicos)</li>
            </ul>

            <h5>📋 Categorías principales del Panel de Control:</h5>
            <div class="categorias-panel">
              <h6>🛡️ Sistema y seguridad:</h6>
              <ul>
                <li><strong>Sistema:</strong> Información del equipo, configuración avanzada</li>
                <li><strong>Windows Update:</strong> Actualizaciones del sistema</li>
                <li><strong>Firewall de Windows:</strong> Configuración de firewall</li>
                <li><strong>Herramientas administrativas:</strong> Administrador de tareas, servicios</li>
                <li><strong>BitLocker:</strong> Cifrado de unidades</li>
              </ul>

              <h6>💻 Programas:</h6>
              <ul>
                <li><strong>Desinstalar programa:</strong> Gestión de software instalado</li>
                <li><strong>Características de Windows:</strong> Activar/desactivar funciones</li>
                <li><strong>Programas predeterminados:</strong> Asociaciones de archivos</li>
              </ul>

              <h6>👤 Cuentas de usuario:</h6>
              <ul>
                <li><strong>Administrar cuentas:</strong> Crear, modificar, eliminar usuarios</li>
                <li><strong>Control parental:</strong> Restricciones y supervisión</li>
                <li><strong>Administrador de credenciales:</strong> Contraseñas guardadas</li>
              </ul>

              <h6>🎨 Apariencia y personalización:</h6>
              <ul>
                <li><strong>Personalización:</strong> Temas, fondo de pantalla, sonidos</li>
                <li><strong>Pantalla:</strong> Resolución, escalado, múltiples monitores</li>
                <li><strong>Opciones del explorador:</strong> Configuración de archivos y carpetas</li>
              </ul>

              <h6>🔧 Hardware y sonido:</h6>
              <ul>
                <li><strong>Dispositivos e impresoras:</strong> Gestión de hardware</li>
                <li><strong>Sonido:</strong> Configuración de audio</li>
                <li><strong>Opciones de energía:</strong> Planes de energía y suspensión</li>
                <li><strong>Administrador de dispositivos:</strong> Drivers y hardware</li>
              </ul>

              <h6>🌐 Red e Internet:</h6>
              <ul>
                <li><strong>Centro de redes:</strong> Configuración de conexiones</li>
                <li><strong>Opciones de Internet:</strong> Configuración del navegador</li>
                <li><strong>Grupo Hogar:</strong> Compartir archivos en red local</li>
              </ul>

              <h6>🕐 Reloj e idioma:</h6>
              <ul>
                <li><strong>Fecha y hora:</strong> Configuración de tiempo</li>
                <li><strong>Región:</strong> Formato de números, moneda, fecha</li>
                <li><strong>Idioma:</strong> Paquetes de idioma e teclados</li>
              </ul>
            </div>
          </div>

          <h4>⚙️ Configuración Moderna (Windows 10/11)</h4>
          <div class="configuracion-moderna">
            <h5>🚪 Acceso a Configuración:</h5>
            <ul>
              <li><strong>Método 1:</strong> Windows + I (más rápido)</li>
              <li><strong>Método 2:</strong> Hacer clic en icono de engranaje en menú Inicio</li>
              <li><strong>Método 3:</strong> Centro de actividades → "Todas las configuraciones"</li>
              <li><strong>Método 4:</strong> Buscar "Configuración" en menú Inicio</li>
            </ul>

            <h5>🎯 Categorías de Configuración:</h5>
            <div class="categorias-configuracion">
              <h6>💻 Sistema:</h6>
              <ul>
                <li><strong>Pantalla:</strong> Brillo, escalado, resolución, múltiples monitores</li>
                <li><strong>Sonido:</strong> Volumen, dispositivos de audio, configuración espacial</li>
                <li><strong>Notificaciones:</strong> Configurar alertas de aplicaciones</li>
                <li><strong>Energía y suspensión:</strong> Tiempos de suspensión y hibernación</li>
                <li><strong>Almacenamiento:</strong> Uso de disco, liberador de espacio</li>
                <li><strong>Tableta:</strong> Modo tableta (Windows 10)</li>
                <li><strong>Multitarea:</strong> Ventanas múltiples, escritorios virtuales</li>
              </ul>

              <h6>📱 Dispositivos:</h6>
              <ul>
                <li><strong>Bluetooth:</strong> Emparejar y gestionar dispositivos</li>
                <li><strong>Impresoras:</strong> Agregar y configurar impresoras</li>
                <li><strong>Mouse:</strong> Velocidad, botones, rueda</li>
                <li><strong>Lápiz y Windows Ink:</strong> Configuración de lápiz digital</li>
                <li><strong>Reproducción automática:</strong> Comportamiento con USB/CD</li>
              </ul>

              <h6>📞 Teléfono:</h6>
              <ul>
                <li><strong>Vincular teléfono:</strong> Sincronización con Android/iPhone</li>
                <li><strong>Llamadas:</strong> Recibir llamadas en PC</li>
                <li><strong>Mensajes:</strong> SMS desde PC</li>
              </ul>

              <h6>🌐 Red e Internet:</h6>
              <ul>
                <li><strong>Wi-Fi:</strong> Conexiones inalámbricas, propiedades de red</li>
                <li><strong>Ethernet:</strong> Conexiones por cable</li>
                <li><strong>VPN:</strong> Redes privadas virtuales</li>
                <li><strong>Zona con cobertura inalámbrica móvil:</strong> Compartir internet</li>
                <li><strong>Proxy:</strong> Configuración de servidores proxy</li>
              </ul>

              <h6>🎨 Personalización:</h6>
              <ul>
                <li><strong>Fondo:</strong> Fondo de pantalla, color sólido, presentación</li>
                <li><strong>Colores:</strong> Modo oscuro/claro, colores de acento</li>
                <li><strong>Pantalla de bloqueo:</strong> Imagen y configuración de bloqueo</li>
                <li><strong>Temas:</strong> Paquetes de personalización completos</li>
                <li><strong>Menú Inicio:</strong> Configuración de mosaicos y comportamiento</li>
                <li><strong>Barra de tareas:</strong> Posición, iconos, comportamiento</li>
              </ul>

              <h6>📱 Aplicaciones:</h6>
              <ul>
                <li><strong>Aplicaciones y características:</strong> Gestión de software instalado</li>
                <li><strong>Aplicaciones predeterminadas:</strong> Asociaciones de archivos</li>
                <li><strong>Aplicaciones de inicio:</strong> Programas que inician con Windows</li>
                <li><strong>Reproducción de vídeo:</strong> Configuración de codecs</li>
              </ul>

              <h6>👤 Cuentas:</h6>
              <ul>
                <li><strong>Tu información:</strong> Datos de cuenta Microsoft</li>
                <li><strong>Opciones de inicio de sesión:</strong> PIN, contraseña, Windows Hello</li>
                <li><strong>Configuración de trabajo:</strong> Cuentas empresariales</li>
                <li><strong>Familia:</strong> Control parental y cuentas familiares</li>
                <li><strong>Sincronizar:</strong> Configuraciones entre dispositivos</li>
              </ul>

              <h6>🕐 Hora e idioma:</h6>
              <ul>
                <li><strong>Fecha y hora:</strong> Zona horaria, formato</li>
                <li><strong>Idioma:</strong> Paquetes de idioma instalados</li>
                <li><strong>Voz:</strong> Síntesis de voz y reconocimiento</li>
                <li><strong>Región:</strong> Formato regional y configuración</li>
              </ul>

              <h6>🎮 Juegos:</h6>
              <ul>
                <li><strong>Xbox Game Bar:</strong> Grabación y capturas de pantalla</li>
                <li><strong>Capturas:</strong> Configuración de grabación de juegos</li>
                <li><strong>Modo juego:</strong> Optimización para gaming</li>
              </ul>

              <h6>♿ Accesibilidad:</h6>
              <ul>
                <li><strong>Narrador:</strong> Lector de pantalla</li>
                <li><strong>Lupa:</strong> Amplificación de pantalla</li>
                <li><strong>Contraste alto:</strong> Temas de alto contraste</li>
                <li><strong>Teclado:</strong> Teclado en pantalla, teclas especiales</li>
                <li><strong>Mouse:</strong> Configuración para accesibilidad</li>
              </ul>

              <h6>🔄 Actualización y seguridad:</h6>
              <ul>
                <li><strong>Windows Update:</strong> Actualizaciones del sistema</li>
                <li><strong>Seguridad de Windows:</strong> Windows Defender, firewall</li>
                <li><strong>Copia de seguridad:</strong> Historial de archivos</li>
                <li><strong>Recuperación:</strong> Restauración y restablecimiento</li>
                <li><strong>Activación:</strong> Estado de licencia de Windows</li>
                <li><strong>Para desarrolladores:</strong> Modo de desarrollador</li>
              </ul>
            </div>
          </div>

          <h4>🎯 Cuándo Usar Cada Interface</h4>
          <div class="cuando-usar-interface">
            <h5>✅ Usar Configuración moderna para:</h5>
            <ul>
              <li>Configuraciones diarias y comunes</li>
              <li>Personalización visual del sistema</li>
              <li>Gestión de aplicaciones modernas</li>
              <li>Configuración de dispositivos Bluetooth</li>
              <li>Administración de cuentas Microsoft</li>
              <li>Configuración de privacidad</li>
            </ul>

            <h5>✅ Usar Panel de Control para:</h5>
            <ul>
              <li>Configuraciones avanzadas del sistema</li>
              <li>Gestión de usuarios locales</li>
              <li>Configuración de red avanzada</li>
              <li>Administración de servicios del sistema</li>
              <li>Configuración de hardware específico</li>
              <li>Características de Windows tradicionales</li>
            </ul>
          </div>

          <h4>🔍 Navegación Eficiente</h4>
          <div class="navegacion-eficiente">
            <h5>⚡ Búsqueda rápida de configuraciones:</h5>
            <ul>
              <li><strong>Desde menú Inicio:</strong> Escribir nombre de configuración directamente</li>
              <li><strong>En Configuración:</strong> Usar cuadro de búsqueda superior</li>
              <li><strong>Panel de Control:</strong> Cambiar vista a "Iconos pequeños" para ver todo</li>
              <li><strong>Comandos rápidos:</strong> Windows + R para ejecutar comandos específicos</li>
            </ul>

            <h5>🎯 Comandos útiles para ejecutar (Windows + R):</h5>
            <ul>
              <li><strong>ms-settings:</strong> Abrir Configuración</li>
              <li><strong>ms-settings:display:</strong> Configuración de pantalla</li>
              <li><strong>ms-settings:network:</strong> Configuración de red</li>
              <li><strong>appwiz.cpl:</strong> Programas y características</li>
              <li><strong>desk.cpl:</strong> Configuración de pantalla clásica</li>
              <li><strong>mmsys.cpl:</strong> Configuración de sonido</li>
              <li><strong>ncpa.cpl:</strong> Conexiones de red</li>
              <li><strong>sysdm.cpl:</strong> Propiedades del sistema</li>
            </ul>
          </div>

          <h4>💡 Consejos de Productividad</h4>
          <ul>
            <li><strong>Favoritos:</strong> Anclar configuraciones frecuentes al menú Inicio</li>
            <li><strong>Búsqueda específica:</strong> "Configuración de [tema]" en búsqueda</li>
            <li><strong>Atajos de teclado:</strong> Memorizar Windows + I para configuración rápida</li>
            <li><strong>Enlaces directos:</strong> Crear accesos directos a configuraciones específicas</li>
            <li><strong>Documentar cambios:</strong> Anotar configuraciones importantes modificadas</li>
          </ul>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/panel-control-configuracion.jpg",
        infografia: "/images/teoria/navegacion-configuraciones-windows.png",
        video: "/videos/panel-control-vs-configuracion.mp4"
      },
      actividades: [
        {
          tipo: "exploracion",
          pregunta: "Explora ambas interfaces: encuentra la misma configuración en Panel de Control y Configuración",
          ayuda: "Prueba buscar configuración de sonido, red, o programas en ambos lugares"
        },
        {
          tipo: "practica",
          pregunta: "Usa comandos rápidos: ejecuta 3 configuraciones diferentes con Windows + R",
          ayuda: "Prueba: ms-settings:display, appwiz.cpl, y ncpa.cpl"
        }
      ]
    }
  ],

  recursos: {
    documentos: [
      {
        titulo: "Guía Completa de Windows Defender",
        url: "/docs/windows-defender-guia-completa.pdf",
        tipo: "pdf"
      },
      {
        titulo: "Manual de Compresión de Archivos",
        url: "/docs/compresion-archivos-manual.pdf",
        tipo: "pdf"
      },
      {
        titulo: "Instalación Segura de Software",
        url: "/docs/instalacion-segura-software.pdf",
        tipo: "pdf"
      }
    ],
    enlaces: [
      {
        titulo: "Microsoft Store - Sitio Oficial",
        url: "https://www.microsoft.com/store",
        tipo: "externo"
      },
      {
        titulo: "Seguridad de Windows - Soporte Microsoft",
        url: "https://support.microsoft.com/es-es/windows/seguridad-windows",
        tipo: "externo"
      },
      {
        titulo: "Guía de Configuración de Windows",
        url: "https://support.microsoft.com/es-es/windows/configuracion-windows",
        tipo: "externo"
      }
    ],
    videos: [
      {
        titulo: "Configuración Completa de Windows Defender",
        url: "/videos/windows-defender-configuracion-completa.mp4",
        duracion: "18:30"
      },
      {
        titulo: "Gestión de Archivos Comprimidos",
        url: "/videos/gestion-archivos-comprimidos.mp4",
        duracion: "12:15"
      },
      {
        titulo: "Instalación y Desinstalación Segura",
        url: "/videos/instalacion-desinstalacion-segura.mp4",
        duracion: "22:45"
      }
    ]
  },
  evaluacion: {
    tipo: "cuestionario",
    preguntas: [
      {
        pregunta: "¿Cuál es la diferencia principal entre Panel de Control y Configuración?",
        tipo: "opcion_multiple",
        opciones: [
          "No hay diferencia, son lo mismo",
          "Panel de Control es más moderno que Configuración",
          "Configuración es moderna y Panel de Control es clásico",
          "Solo se puede usar uno a la vez"
        ],
        respuestaCorrecta: 2
      },
      {
        pregunta: "¿Qué método es más seguro para instalar aplicaciones?",
        tipo: "opcion_multiple",
        opciones: [
          "Descargar de cualquier sitio web",
          "Microsoft Store",
          "Sitios de torrents",
          "No importa la fuente"
        ],
        respuestaCorrecta: 1
      },
      {
        pregunta: "¿Para qué se usa principalmente la compresión de archivos?",
        tipo: "opcion_multiple",
        opciones: [
          "Para eliminar archivos permanentemente",
          "Para reducir el tamaño y facilitar el intercambio",
          "Para cambiar el formato de los archivos",
          "Para proteger archivos contra virus"
        ],
        respuestaCorrecta: 1
      },
      {
        pregunta: "¿Qué es Windows Defender?",
        tipo: "opcion_multiple",
        opciones: [
          "Un programa de edición de fotos",
          "El antivirus integrado de Windows",
          "Un navegador web",
          "Una herramienta de compresión"
        ],
        respuestaCorrecta: 1
      },
      {
        pregunta: "¿Por qué es importante desinstalar programas que no usas?",
        tipo: "opcion_multiple",
        opciones: [
          "Para hacer que la computadora sea más colorida",
          "No es importante, se pueden dejar instalados",
          "Para liberar espacio y mejorar el rendimiento",
          "Solo por estética"
        ],
        respuestaCorrecta: 2
      }
    ],
    puntuacionMaxima: 100,
    tiempoEstimado: "15 minutos"
  },
  glosario: [
    {
      termino: "Windows Defender",
      definicion: "Antivirus integrado gratuito de Windows que proporciona protección en tiempo real contra malware y amenazas."
    },
    {
      termino: "Firewall",
      definicion: "Sistema de seguridad que controla el tráfico de red entrante y saliente para proteger contra accesos no autorizados."
    },
    {
      termino: "Compresión",
      definicion: "Proceso de reducir el tamaño de archivos o carpetas creando un archivo comprimido (como ZIP)."
    },
    {
      termino: "Microsoft Store",
      definicion: "Tienda oficial de aplicaciones de Microsoft donde se pueden descargar apps verificadas y seguras."
    },
    {
      termino: "Panel de Control",
      definicion: "Interface clásica de Windows para acceder a configuraciones avanzadas y herramientas administrativas del sistema."
    },
    {
      termino: "Configuración",
      definicion: "Interface moderna de Windows 10/11 para gestionar ajustes del sistema de manera intuitiva y táctil."
    },
    {
      termino: "Malware",
      definicion: "Software malicioso diseñado para dañar, interrumpir o ganar acceso no autorizado a sistemas informáticos."
    },
    {
      termino: "ZIP",
      definicion: "Formato de archivo comprimido que permite reducir el tamaño de archivos y agrupar múltiples archivos en uno solo."
    }
  ]
};
