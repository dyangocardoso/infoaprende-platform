/**
 * Tema 3: Escritorio de Windows
 * Curso: Introducción al Sistema Operativo Windows
 */

export default {
  id: '3',
  titulo: "Escritorio de Windows",
  tematica: "Partes, organización visual y personalización",
  duracion: "30-35 minutos",
  objetivos: [
    "Identificar y comprender todos los elementos del escritorio",
    "Personalizar el fondo de pantalla y temas visuales",
    "Organizar iconos y crear accesos directos eficientemente",
    "Configurar protector de pantalla y opciones de pantalla",
    "Optimizar el escritorio para mayor productividad",
    "Aplicar principios de organización visual"
  ],
  secciones: [
    {
      id: 1,
      titulo: "Elementos del Escritorio",
      contenido: `
        <h3>🖥️ Conociendo el Escritorio de Windows</h3>
        
        <div class="elementos-escritorio">
          <h4>🎯 ¿Qué es el Escritorio?</h4>
          <p>El <strong>escritorio</strong> es el espacio de trabajo principal de Windows, la primera interfaz que ves después de iniciar sesión y desde donde puedes acceder a todas las funciones del sistema.</p>

          <h4>🧩 Componentes Principales</h4>
          <div class="componentes-escritorio">
            <h5>🎨 Fondo de Pantalla (Wallpaper)</h5>
            <ul>
              <li><strong>Función:</strong> Imagen decorativa que cubre toda la pantalla</li>
              <li><strong>Tipos:</strong> Imagen estática, presentación, color sólido</li>
              <li><strong>Propósito:</strong> Personalización y mejora visual</li>
              <li><strong>Ubicación:</strong> Cubre toda el área visible de la pantalla</li>
            </ul>

            <h5>📁 Iconos del Escritorio</h5>
            <div class="iconos-escritorio">
              <h6>🖥️ Iconos del Sistema:</h6>
              <ul>
                <li><strong>Este equipo:</strong> Acceso a discos y archivos del sistema</li>
                <li><strong>Papelera de reciclaje:</strong> Archivos eliminados temporalmente</li>
                <li><strong>Panel de control:</strong> Configuraciones del sistema (opcional)</li>
                <li><strong>Red:</strong> Recursos de red compartidos (opcional)</li>
                <li><strong>Archivos del usuario:</strong> Carpeta personal del usuario (opcional)</li>
              </ul>

              <h6>🔗 Accesos Directos:</h6>
              <ul>
                <li><strong>Programas:</strong> Enlaces rápidos a aplicaciones</li>
                <li><strong>Archivos:</strong> Acceso directo a documentos específicos</li>
                <li><strong>Carpetas:</strong> Enlaces a ubicaciones frecuentes</li>
                <li><strong>Sitios web:</strong> Enlaces a páginas de internet</li>
              </ul>

              <h6>📄 Archivos y Carpetas Reales:</h6>
              <ul>
                <li><strong>Documentos:</strong> Archivos guardados directamente</li>
                <li><strong>Carpetas:</strong> Organización directa en escritorio</li>
                <li><strong>Descargas:</strong> Archivos descargados temporalmente</li>
              </ul>
            </div>

            <h5>📊 Barra de Tareas</h5>
            <ul>
              <li><strong>Ubicación predeterminada:</strong> Parte inferior de la pantalla</li>
              <li><strong>Componentes:</strong> Botón Inicio, programas anclados, área de notificaciones</li>
              <li><strong>Función:</strong> Centro de control para aplicaciones y sistema</li>
              <li><strong>Personalización:</strong> Posición, tamaño, elementos visibles</li>
            </ul>

            <h5>🖱️ Área de Trabajo</h5>
            <ul>
              <li><strong>Espacio disponible:</strong> Área entre iconos y barra de tareas</li>
              <li><strong>Interacciones:</strong> Clic derecho para menú contextual</li>
              <li><strong>Organización:</strong> Lugar para colocar archivos temporalmente</li>
              <li><strong>Funcionalidades:</strong> Selección múltiple con rectángulo de selección</li>
            </ul>
          </div>

          <h4>🎭 Funciones del Escritorio</h4>
          <div class="funciones-escritorio">
            <h5>🚀 Acceso Rápido</h5>
            <ul>
              <li><strong>Lanzamiento de programas:</strong> Doble clic en iconos</li>
              <li><strong>Apertura de archivos:</strong> Acceso directo a documentos</li>
              <li><strong>Navegación del sistema:</strong> Punto de partida para exploración</li>
            </ul>

            <h5>📋 Espacio de Trabajo Temporal</h5>
            <ul>
              <li><strong>Capturas de pantalla:</strong> Ubicación predeterminada</li>
              <li><strong>Archivos en proceso:</strong> Documentos en edición</li>
              <li><strong>Descargas recientes:</strong> Archivos recién obtenidos</li>
            </ul>

            <h5>🎨 Personalización y Expresión</h5>
            <ul>
              <li><strong>Identidad visual:</strong> Reflejar personalidad o marca</li>
              <li><strong>Organización personal:</strong> Flujo de trabajo optimizado</li>
              <li><strong>Ambiente de trabajo:</strong> Crear espacio agradable y funcional</li>
            </ul>
          </div>

          <h4>👁️ Estados Visuales del Escritorio</h4>
          <div class="estados-visuales">
            <h5>🏠 Escritorio Activo</h5>
            <ul>
              <li><strong>Visible:</strong> Cuando no hay ventanas maximizadas</li>
              <li><strong>Interactivo:</strong> Permite clics e interacciones</li>
              <li><strong>Funcional:</strong> Acceso a todos los elementos</li>
            </ul>

            <h5>🪟 Escritorio Oculto</h5>
            <ul>
              <li><strong>Cubierto:</strong> Por ventanas de aplicaciones</li>
              <li><strong>Accesible:</strong> Windows + D para mostrar</li>
              <li><strong>Vista rápida:</strong> Hover en esquina inferior derecha</li>
            </ul>

            <h5>🔒 Escritorio Bloqueado</h5>
            <ul>
              <li><strong>Pantalla de bloqueo:</strong> Seguridad cuando no está en uso</li>
              <li><strong>Información limitada:</strong> Solo hora, fecha, notificaciones</li>
              <li><strong>Acceso restringido:</strong> Requiere credenciales para desbloquear</li>
            </ul>
          </div>

          <h4>⚡ Interacciones Básicas</h4>
          <div class="interacciones-basicas">
            <h5>🖱️ Clic Simple</h5>
            <ul>
              <li><strong>En espacio vacío:</strong> Deseleccionar elementos, enfocar escritorio</li>
              <li><strong>En icono:</strong> Seleccionar elemento</li>
              <li><strong>Resultado:</strong> Preparar para próxima acción</li>
            </ul>

            <h5>🖱️ Doble Clic</h5>
            <ul>
              <li><strong>En programa:</strong> Ejecutar aplicación</li>
              <li><strong>En archivo:</strong> Abrir con programa predeterminado</li>
              <li><strong>En carpeta:</strong> Abrir en explorador de archivos</li>
            </ul>

            <h5>🖱️ Clic Derecho</h5>
            <ul>
              <li><strong>En espacio vacío:</strong> Menú de personalización y configuración</li>
              <li><strong>En icono:</strong> Menú contextual con opciones específicas</li>
              <li><strong>Opciones comunes:</strong> Abrir, eliminar, propiedades, crear acceso directo</li>
            </ul>

            <h5>🖱️ Arrastrar y Soltar</h5>
            <ul>
              <li><strong>Reorganizar iconos:</strong> Mover elementos por el escritorio</li>
              <li><strong>Desde otras ubicaciones:</strong> Copiar o mover archivos al escritorio</li>
              <li><strong>A aplicaciones:</strong> Abrir archivos con programas específicos</li>
            </ul>
          </div>

          <h4>🎯 Atajos Relacionados con el Escritorio</h4>
          <ul>
            <li><strong>Windows + D:</strong> Mostrar/ocultar escritorio</li>
            <li><strong>Windows + M:</strong> Minimizar todas las ventanas</li>
            <li><strong>Windows + Shift + M:</strong> Restaurar ventanas minimizadas</li>
            <li><strong>F5:</strong> Actualizar escritorio</li>
            <li><strong>Ctrl + A:</strong> Seleccionar todos los iconos</li>
            <li><strong>Delete:</strong> Eliminar iconos seleccionados</li>
            <li><strong>F2:</strong> Renombrar icono seleccionado</li>
            <li><strong>Alt + F4:</strong> Cerrar ventana activa y mostrar escritorio</li>
          </ul>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/elementos-escritorio-windows.jpg",
        infografia: "/images/teoria/componentes-escritorio.png"
      },
      actividades: [
        {
          tipo: "identificacion",
          pregunta: "Identifica todos los elementos visibles en tu escritorio actual",
          ayuda: "Lista: fondo de pantalla, iconos del sistema, accesos directos, barra de tareas, área de trabajo"
        }
      ]
    },
    {
      id: 2,
      titulo: "Personalización del Fondo de Pantalla",
      contenido: `
        <h3>🎨 Personalizando tu Fondo de Pantalla</h3>
        
        <div class="personalizacion-fondo">
          <h4>🖼️ ¿Por qué Personalizar el Fondo?</h4>
          <ul>
            <li><strong>Expresión personal:</strong> Reflejar gustos e intereses</li>
            <li><strong>Productividad:</strong> Imágenes que inspiren o motiven</li>
            <li><strong>Organización visual:</strong> Fondos que no distraigan del trabajo</li>
            <li><strong>Comodidad visual:</strong> Colores que no cansen la vista</li>
          </ul>

          <h4>🔧 Métodos para Cambiar el Fondo</h4>
          <div class="metodos-cambiar-fondo">
            <h5>🖱️ Método 1: Clic Derecho</h5>
            <ol>
              <li>Clic derecho en espacio vacío del escritorio</li>
              <li>Seleccionar <strong>"Personalizar"</strong></li>
              <li>En el panel izquierdo, elegir <strong>"Fondo"</strong></li>
              <li>Seleccionar imagen deseada</li>
              <li>Ajustar configuración y cerrar</li>
            </ol>

            <h5>⚙️ Método 2: Configuración de Windows</h5>
            <ol>
              <li>Presionar <kbd>Windows + I</kbd></li>
              <li>Ir a <strong>"Personalización"</strong></li>
              <li>Seleccionar <strong>"Fondo"</strong></li>
              <li>Configurar opciones deseadas</li>
            </ol>

            <h5>🖼️ Método 3: Desde Archivo de Imagen</h5>
            <ol>
              <li>Localizar imagen deseada en explorador</li>
              <li>Clic derecho en la imagen</li>
              <li>Seleccionar <strong>"Establecer como fondo de escritorio"</strong></li>
              <li>Se aplica inmediatamente</li>
            </ol>
          </div>

          <h4>🎭 Tipos de Fondo de Pantalla</h4>
          <div class="tipos-fondo">
            <h5>🖼️ Imagen</h5>
            <ul>
              <li><strong>Fuentes:</strong> Archivos propios, imágenes de Windows</li>
              <li><strong>Formatos soportados:</strong> JPG, PNG, BMP, GIF</li>
              <li><strong>Resolución:</strong> Mejor si coincide con resolución de pantalla</li>
              <li><strong>Ubicación:</strong> C:\\Windows\\Web\\Wallpaper\\ (imágenes de Windows)</li>
            </ul>

            <h5>🎨 Color Sólido</h5>
            <ul>
              <li><strong>Minimalista:</strong> Sin distracciones visuales</li>
              <li><strong>Rendimiento:</strong> Consume menos recursos</li>
              <li><strong>Personalización:</strong> Paleta completa de colores disponible</li>
              <li><strong>Profesional:</strong> Ideal para entornos de trabajo</li>
            </ul>

            <h5>🎭 Presentación</h5>
            <ul>
              <li><strong>Múltiples imágenes:</strong> Cambia automáticamente</li>
              <li><strong>Intervalo configurable:</strong> 1 minuto a 1 día</li>
              <li><strong>Orden:</strong> Secuencial o aleatorio</li>
              <li><strong>Carpetas personalizadas:</strong> Usar tu propia colección</li>
            </ul>
          </div>

          <h4>⚙️ Opciones de Ajuste de Imagen</h4>
          <div class="ajuste-imagen">
            <h5>📐 Modos de Ajuste:</h5>
            
            <h6>🔲 Rellenar</h6>
            <ul>
              <li><strong>Función:</strong> Llena toda la pantalla</li>
              <li><strong>Efecto:</strong> Puede recortar partes de la imagen</li>
              <li><strong>Mejor para:</strong> Imágenes con elementos centrales</li>
            </ul>

            <h6>📱 Ajustar</h6>
            <ul>
              <li><strong>Función:</strong> Muestra imagen completa</li>
              <li><strong>Efecto:</strong> Puede dejar bordes negros</li>
              <li><strong>Mejor para:</strong> Imágenes que quieres ver completas</li>
            </ul>

            <h6>🖼️ Expandir</h6>
            <ul>
              <li><strong>Función:</strong> Estira imagen para llenar pantalla</li>
              <li><strong>Efecto:</strong> Puede distorsionar proporción</li>
              <li><strong>Mejor para:</strong> Imágenes de resolución similar</li>
            </ul>

            <h6>🎯 Mosaico</h6>
            <ul>
              <li><strong>Función:</strong> Repite imagen en patrón</li>
              <li><strong>Efecto:</strong> Crea patrón repetitivo</li>
              <li><strong>Mejor para:</strong> Imágenes pequeñas o texturas</li>
            </ul>

            <h6>📍 Centrar</h6>
            <ul>
              <li><strong>Función:</strong> Coloca imagen en el centro</li>
              <li><strong>Efecto:</strong> Mantiene tamaño original</li>
              <li><strong>Mejor para:</strong> Logos o imágenes especiales</li>
            </ul>
          </div>

          <h4>🎨 Configuración de Presentación</h4>
          <div class="configuracion-presentacion">
            <h5>⏰ Opciones de Temporización:</h5>
            <ul>
              <li><strong>1 minuto:</strong> Cambio muy frecuente</li>
              <li><strong>10 minutos:</strong> Cambio regular</li>
              <li><strong>30 minutos:</strong> Cambio moderado</li>
              <li><strong>1 hora:</strong> Cambio espaciado</li>
              <li><strong>6 horas:</strong> Cambio por turno de trabajo</li>
              <li><strong>1 día:</strong> Imagen diaria</li>
            </ul>

            <h5>🔀 Orden de Reproducción:</h5>
            <ul>
              <li><strong>Secuencial:</strong> Orden alfabético o por fecha</li>
              <li><strong>Aleatorio:</strong> Selección al azar</li>
              <li><strong>Repetir:</strong> Volver al inicio al terminar</li>
            </ul>

            <h5>📁 Fuentes de Imágenes:</h5>
            <ul>
              <li><strong>Carpetas de Windows:</strong> Colecciones predefinidas</li>
              <li><strong>Carpetas personalizadas:</strong> Tu propia colección</li>
              <li><strong>Bibliotecas:</strong> Carpetas de imágenes indexadas</li>
              <li><strong>OneDrive:</strong> Imágenes en la nube</li>
            </ul>
          </div>

          <h4>🔍 Encontrando Imágenes de Calidad</h4>
          <div class="imagenes-calidad">
            <h5>📐 Consideraciones Técnicas:</h5>
            <ul>
              <li><strong>Resolución:</strong> Igual o mayor a tu pantalla</li>
              <li><strong>Formato:</strong> JPG para fotos, PNG para gráficos</li>
              <li><strong>Tamaño de archivo:</strong> Balance entre calidad y espacio</li>
              <li><strong>Proporción:</strong> 16:9 para pantallas widescreen</li>
            </ul>

            <h5>🌐 Fuentes Recomendadas:</h5>
            <ul>
              <li><strong>Bing Wallpapers:</strong> Colección diaria de Microsoft</li>
              <li><strong>Unsplash:</strong> Fotos profesionales gratuitas</li>
              <li><strong>Windows Spotlight:</strong> Imágenes de pantalla de bloqueo</li>
              <li><strong>Fotos personales:</strong> Tus propias capturas</li>
            </ul>

            <h5>⚖️ Consideraciones Legales:</h5>
            <ul>
              <li><strong>Derechos de autor:</strong> Usar solo imágenes libres</li>
              <li><strong>Licencias Creative Commons:</strong> Verificar permisos</li>
              <li><strong>Uso personal:</strong> Distinto del uso comercial</li>
              <li><strong>Atribución:</strong> Reconocer al autor si es requerido</li>
            </ul>
          </div>

          <h4>💡 Tips para Personalización Efectiva</h4>
          <ul>
            <li><strong>Contraste con iconos:</strong> Fondo que no oculte íconos del escritorio</li>
            <li><strong>Colores relajantes:</strong> Azules y verdes para reducir fatiga visual</li>
            <li><strong>Evitar imágenes muy ocupadas:</strong> Pueden distraer del trabajo</li>
            <li><strong>Rotar estacionalmente:</strong> Cambiar según épocas del año</li>
            <li><strong>Backup de favoritos:</strong> Guardar imágenes preferidas en carpeta especial</li>
            <li><strong>Múltiples monitores:</strong> Configurar fondo específico para cada pantalla</li>
          </ul>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/personalizacion-fondo-pantalla.jpg",
        infografia: "/images/teoria/tipos-ajuste-imagen.png",
        video: "/videos/cambiar-fondo-pantalla-windows.mp4"
      },
      actividades: [
        {
          tipo: "personalizacion",
          pregunta: "Cambia tu fondo de pantalla usando los 3 métodos diferentes",
          ayuda: "Prueba: clic derecho → Personalizar, Windows+I → Personalización, clic derecho en imagen"
        },
        {
          tipo: "configuracion",
          pregunta: "Configura una presentación con 5 imágenes que cambien cada 10 minutos",
          ayuda: "Personalización → Fondo → Presentación → Examinar → Seleccionar carpeta"
        }
      ]
    },
    {
      id: 3,
      titulo: "Organización de Iconos y Accesos Directos",
      contenido: `
        <h3>📐 Organización Visual del Escritorio</h3>
        
        <div class="organizacion-iconos">
          <h4>🎯 Principios de Organización</h4>
          <div class="principios-organizacion">
            <h5>👁️ Jerarquía Visual</h5>
            <ul>
              <li><strong>Elementos más importantes:</strong> Posiciones superiores e izquierdas</li>
              <li><strong>Flujo natural de lectura:</strong> De izquierda a derecha, arriba a abajo</li>
              <li><strong>Agrupación por uso:</strong> Elementos relacionados juntos</li>
              <li><strong>Espaciado consistente:</strong> Distancias uniformes</li>
            </ul>

            <h5>🎨 Estética y Funcionalidad</h5>
            <ul>
              <li><strong>Balance visual:</strong> Distribución equilibrada de elementos</li>
              <li><strong>Simplicidad:</strong> No sobrecargar el escritorio</li>
              <li><strong>Accesibilidad:</strong> Elementos importantes fácil de alcanzar</li>
              <li><strong>Consistencia:</strong> Patrones repetibles</li>
            </ul>
          </div>

          <h4>🔗 Creación de Accesos Directos</h4>
          <div class="crear-accesos">
            <h5>➕ Métodos de Creación</h5>
            
            <h6>Método 1: Wizard de Acceso Directo</h6>
            <ol>
              <li>Clic derecho en espacio vacío del escritorio</li>
              <li>Nuevo → <strong>Acceso directo</strong></li>
              <li>Hacer clic en <strong>"Examinar"</strong> para buscar programa</li>
              <li>Navegar hasta archivo .exe del programa</li>
              <li>Seleccionar archivo y hacer clic en <strong>"Aceptar"</strong></li>
              <li>Escribir nombre descriptivo para el acceso directo</li>
              <li>Hacer clic en <strong>"Finalizar"</strong></li>
            </ol>

            <h6>Método 2: Desde Menú Inicio</h6>
            <ol>
              <li>Abrir menú Inicio</li>
              <li>Localizar programa deseado</li>
              <li>Clic derecho en el programa</li>
              <li>Seleccionar <strong>"Más"</strong> → <strong>"Abrir ubicación de archivo"</strong></li>
              <li>En la ventana que se abre, clic derecho en programa</li>
              <li>Seleccionar <strong>"Enviar a"</strong> → <strong>"Escritorio (crear acceso directo)"</strong></li>
            </ol>

            <h6>Método 3: Desde Explorador de Archivos</h6>
            <ol>
              <li>Abrir explorador y navegar hasta programa</li>
              <li>Clic derecho en archivo .exe</li>
              <li><strong>"Enviar a"</strong> → <strong>"Escritorio (crear acceso directo)"</strong></li>
            </ol>

            <h6>Método 4: Arrastrar con Botón Derecho</h6>
            <ol>
              <li>Localizar programa en explorador</li>
              <li>Arrastrar con botón derecho al escritorio</li>
              <li>Soltar y seleccionar <strong>"Crear iconos de acceso directo aquí"</strong></li>
            </ol>

            <h5>🎨 Personalización de Accesos Directos</h5>
            <div class="personalizar-accesos">
              <h6>🖼️ Cambiar Icono:</h6>
              <ol>
                <li>Clic derecho en acceso directo</li>
                <li>Seleccionar <strong>"Propiedades"</strong></li>
                <li>En pestaña <strong>"Acceso directo"</strong>, clic en <strong>"Cambiar icono"</strong></li>
                <li>Seleccionar icono de la lista o buscar archivo .ico</li>
                <li>Aceptar cambios</li>
              </ol>

              <h6>✏️ Cambiar Nombre:</h6>
              <ul>
                <li><strong>F2:</strong> Seleccionar acceso directo y presionar F2</li>
                <li><strong>Clic lento:</strong> Clic, esperar, clic en nombre</li>
                <li><strong>Clic derecho:</strong> Menú contextual → "Cambiar nombre"</li>
              </ul>

              <h6>⚙️ Modificar Propiedades:</h6>
              <ul>
                <li><strong>Destino:</strong> Ruta del programa a ejecutar</li>
                <li><strong>Iniciar en:</strong> Carpeta de trabajo inicial</li>
                <li><strong>Ejecutar:</strong> Ventana normal, minimizada, maximizada</li>
                <li><strong>Tecla de método abreviado:</strong> Atajo de teclado personalizado</li>
              </ul>
            </div>
          </div>

          <h4>📐 Organización Automática</h4>
          <div class="organizacion-automatica">
            <h5>🔧 Opciones de Vista</h5>
            <ul>
              <li>Clic derecho en escritorio → <strong>"Ver"</strong></li>
              <li><strong>Iconos grandes:</strong> Fácil identificación</li>
              <li><strong>Iconos medianos:</strong> Balance entre tamaño y espacio</li>
              <li><strong>Iconos pequeños:</strong> Más elementos en menos espacio</li>
            </ul>

            <h5>📋 Organización Automática</h5>
            <ul>
              <li><strong>Organizar iconos automáticamente:</strong> Windows organiza en cuadrícula</li>
              <li><strong>Alinear iconos con la cuadrícula:</strong> Mantiene alineación sin organización automática</li>
              <li><strong>Ventaja:</strong> Apariencia ordenada y profesional</li>
              <li><strong>Desventaja:</strong> Menos control sobre posición específica</li>
            </ul>

            <h5>🎯 Ordenación Manual</h5>
            <div class="ordenacion-manual">
              <h6>Por Categoría:</h6>
              <ul>
                <li><strong>Tipo:</strong> Programas, documentos, carpetas</li>
                <li><strong>Nombre:</strong> A-Z, Z-A</li>
                <li><strong>Tamaño:</strong> De mayor a menor</li>
                <li><strong>Tipo de elemento:</strong> Accesos directos vs archivos reales</li>
                <li><strong>Fecha de modificación:</strong> Más recientes primero</li>
              </ul>

              <h6>Clic derecho en escritorio → "Ordenar por":</h6>
              <ul>
                <li>Seleccionar criterio deseado</li>
                <li>Orden ascendente o descendente</li>
                <li>Aplicación inmediata</li>
              </ul>
            </div>
          </div>

          <h4>🗂️ Estrategias de Organización</h4>
          <div class="estrategias-organizacion">
            <h5>📍 Por Zona del Escritorio</h5>
            <div class="zonas-escritorio">
              <h6>🔝 Esquina Superior Izquierda:</h6>
              <ul>
                <li><strong>Programas principales:</strong> Aplicaciones más usadas</li>
                <li><strong>Acceso inmediato:</strong> Primera zona visible</li>
                <li><strong>Máximo 4-6 iconos:</strong> Para evitar saturación</li>
              </ul>

              <h6>📊 Borde Izquierdo:</h6>
              <ul>
                <li><strong>Aplicaciones frecuentes:</strong> Programas de uso diario</li>
                <li><strong>Herramientas de trabajo:</strong> Software profesional</li>
                <li><strong>Orden por importancia:</strong> Más usado arriba</li>
              </ul>

              <h6>📁 Borde Derecho:</h6>
              <ul>
                <li><strong>Carpetas y archivos:</strong> Documentos temporales</li>
                <li><strong>Papelera de reciclaje:</strong> Posición tradicional</li>
                <li><strong>Elementos menos frecuentes:</strong> Uso esporádico</li>
              </ul>

              <h6>🎨 Centro:</h6>
              <ul>
                <li><strong>Generalmente vacío:</strong> Permite ver fondo de pantalla</li>
                <li><strong>Archivos temporales:</strong> Capturas, descargas recientes</li>
                <li><strong>Espacio de trabajo:</strong> Para arrastrar y soltar</li>
              </ul>
            </div>

            <h5>🏷️ Por Categoría Funcional</h5>
            <div class="categorias-funcionales">
              <h6>💼 Trabajo:</h6>
              <ul>
                <li>Office Suite (Word, Excel, PowerPoint)</li>
                <li>Software específico de profesión</li>
                <li>Herramientas de comunicación</li>
                <li>Carpetas de proyectos activos</li>
              </ul>

              <h6>🎮 Entretenimiento:</h6>
              <ul>
                <li>Juegos</li>
                <li>Reproductores multimedia</li>
                <li>Aplicaciones de streaming</li>
                <li>Editores de foto/video personales</li>
              </ul>

              <h6>🔧 Herramientas del Sistema:</h6>
              <ul>
                <li>Utilidades de mantenimiento</li>
                <li>Configuraciones avanzadas</li>
                <li>Software de seguridad</li>
                <li>Herramientas de diagnóstico</li>
              </ul>

              <h6>🌐 Internet y Comunicación:</h6>
              <ul>
                <li>Navegadores web</li>
                <li>Clientes de email</li>
                <li>Mensajería instantánea</li>
                <li>Redes sociales</li>
              </ul>
            </div>

            <h5>⏰ Por Frecuencia de Uso</h5>
            <ul>
              <li><strong>Uso diario:</strong> Posiciones más accesibles</li>
              <li><strong>Uso semanal:</strong> Posiciones secundarias</li>
              <li><strong>Uso ocasional:</strong> Pueden estar en subcarpetas</li>
              <li><strong>Uso raro:</strong> Solo en menú Inicio o carpetas</li>
            </ul>
          </div>

          <h4>🧹 Mantenimiento de la Organización</h4>
          <div class="mantenimiento">
            <h5>🗂️ Limpieza Regular</h5>
            <ul>
              <li><strong>Semanal:</strong> Eliminar archivos temporales del escritorio</li>
              <li><strong>Mensual:</strong> Revisar relevancia de accesos directos</li>
              <li><strong>Trimestral:</strong> Reorganizar según cambios en uso</li>
              <li><strong>Anual:</strong> Evaluación completa y rediseño si necesario</li>
            </ul>

            <h5>📋 Buenas Prácticas</h5>
            <ul>
              <li><strong>Menos es más:</strong> Máximo 15-20 iconos en escritorio</li>
              <li><strong>Nombres descriptivos:</strong> Evitar "Nueva carpeta" o "Acceso directo"</li>
              <li><strong>Consistencia visual:</strong> Iconos de estilo similar</li>
              <li><strong>Backup de organización:</strong> Documentar esquema de organización</li>
            </ul>

            <h5>🔄 Reorganización Eficiente</h5>
            <ul>
              <li><strong>Planificar antes de mover:</strong> Diseñar nuevo esquema</li>
              <li><strong>Usar carpetas temporales:</strong> Para elementos sin lugar definido</li>
              <li><strong>Probar por una semana:</strong> Validar nueva organización</li>
              <li><strong>Ajustar gradualmente:</strong> Cambios pequeños y constantes</li>
            </ul>
          </div>

          <h4>💡 Consejos Avanzados</h4>
          <ul>
            <li><strong>Múltiples escritorios virtuales:</strong> Organización por proyecto o contexto</li>
            <li><strong>Fences o similares:</strong> Software de terceros para crear áreas definidas</li>
            <li><strong>Iconos transparentes:</strong> Para espaciadores invisibles</li>
            <li><strong>Automatización:</strong> Scripts para organización automática</li>
            <li><strong>Perfiles de escritorio:</strong> Diferentes organizaciones según el momento</li>
          </ul>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/organizacion-iconos-escritorio.jpg",
        infografia: "/images/teoria/estrategias-organizacion-escritorio.png",
        video: "/videos/crear-organizar-accesos-directos.mp4"
      },
      actividades: [
        {
          tipo: "organizacion",
          pregunta: "Crea 5 accesos directos y organízalos por categorías en diferentes zonas del escritorio",
          ayuda: "Usa diferentes métodos de creación y organiza por función: trabajo, entretenimiento, herramientas"
        },
        {
          tipo: "personalizacion",
          pregunta: "Personaliza 2 accesos directos: cambiales el icono y el nombre",
          ayuda: "Clic derecho → Propiedades → Cambiar icono para personalizar apariencia"
        }
      ]
    },
    {
      id: 4,
      titulo: "Configuración de Pantalla y Protector",
      contenido: `
        <h3>🖥️ Configuración de Pantalla y Protector</h3>
        
        <div class="configuracion-pantalla">
          <h4>📐 Configuración de Resolución y Pantalla</h4>
          <div class="resolucion-pantalla">
            <h5>🎯 ¿Qué es la Resolución?</h5>
            <p>La <strong>resolución</strong> es la cantidad de píxeles que puede mostrar tu pantalla, expresada como ancho x alto (ejemplo: 1920x1080). Una resolución mayor significa más detalle y espacio en pantalla.</p>

            <h5>📊 Resoluciones Comunes:</h5>
            <ul>
              <li><strong>HD (1366x768):</strong> Resolución básica para laptops económicas</li>
              <li><strong>Full HD (1920x1080):</strong> Estándar actual para la mayoría de pantallas</li>
              <li><strong>2K/QHD (2560x1440):</strong> Alta resolución para trabajo profesional</li>
              <li><strong>4K/UHD (3840x2160):</strong> Ultra alta resolución para diseño y multimedia</li>
              <li><strong>Ultrawide (3440x1440):</strong> Pantallas panorámicas para productividad</li>
            </ul>

            <h5>⚙️ Cambiar Resolución:</h5>
            <ol>
              <li>Clic derecho en escritorio → <strong>"Configuración de pantalla"</strong></li>
              <li>O Windows + I → <strong>"Sistema"</strong> → <strong>"Pantalla"</strong></li>
              <li>En <strong>"Resolución de pantalla"</strong> seleccionar nueva resolución</li>
              <li>Hacer clic en <strong>"Aplicar"</strong></li>
              <li>Confirmar cambios en 15 segundos o se revierte automáticamente</li>
            </ol>

            <h5>🎛️ Escalado de Pantalla:</h5>
            <div class="escalado-pantalla">
              <h6>¿Qué es el Escalado?</h6>
              <p>El escalado ajusta el tamaño de texto, aplicaciones y otros elementos para que sean legibles independientemente de la resolución de pantalla.</p>

              <h6>Niveles de Escalado Comunes:</h6>
              <ul>
                <li><strong>100%:</strong> Tamaño original (recomendado para pantallas grandes)</li>
                <li><strong>125%:</strong> Ligeramente más grande (recomendado para 24-27")</li>
                <li><strong>150%:</strong> Considerablemente más grande (laptops de alta resolución)</li>
                <li><strong>175%-200%:</strong> Muy grande (pantallas 4K pequeñas)</li>
              </ul>

              <h6>Configurar Escalado:</h6>
              <ol>
                <li>Configuración de pantalla</li>
                <li>En <strong>"Escala y distribución"</strong></li>
                <li>Seleccionar porcentaje apropiado</li>
                <li>Cerrar sesión y volver a iniciar para mejor resultado</li>
              </ol>
            </div>
          </div>

          <h4>🖥️ Configuración de Múltiples Monitores</h4>
          <div class="multiples-monitores">
            <h5>🔗 Configuración Básica:</h5>
            <ol>
              <li>Conectar segundo monitor con cable apropiado</li>
              <li>Windows + P para abrir proyección rápida</li>
              <li>O Configuración → Sistema → Pantalla</li>
              <li>Windows detecta automáticamente monitores</li>
            </ol>

            <h5>🎛️ Modos de Pantalla:</h5>
            <ul>
              <li><strong>Solo pantalla de PC:</strong> Usar únicamente monitor principal</li>
              <li><strong>Duplicar:</strong> Misma imagen en ambos monitores</li>
              <li><strong>Extender:</strong> Escritorio continuo en ambos monitores</li>
              <li><strong>Solo segunda pantalla:</strong> Usar únicamente monitor secundario</li>
            </ul>

            <h5>📐 Configuración Avanzada:</h5>
            <ul>
              <li><strong>Posición relativa:</strong> Arrastrar monitores en configuración para establecer posición</li>
              <li><strong>Monitor principal:</strong> Designar cuál tendrá barra de tareas y menú Inicio</li>
              <li><strong>Resolución individual:</strong> Cada monitor puede tener resolución diferente</li>
              <li><strong>Orientación:</strong> Horizontal, vertical (90°), 180°, 270°</li>
            </ul>
          </div>

          <h4>🌙 Protector de Pantalla</h4>
          <div class="protector-pantalla">
            <h5>🎯 ¿Qué es y Para Qué Sirve?</h5>
            <p>El <strong>protector de pantalla</strong> es una imagen animada o estática que se activa cuando el computador está inactivo por un tiempo determinado. Originalmente protegía monitores CRT del "burn-in", hoy es principalmente decorativo y de seguridad.</p>

            <h5>🔧 Configurar Protector de Pantalla:</h5>
            <ol>
              <li>Clic derecho en escritorio → <strong>"Personalizar"</strong></li>
              <li>Clic en <strong>"Pantalla de bloqueo"</strong> (panel izquierdo)</li>
              <li>Desplazarse hacia abajo y clic en <strong>"Configuración del protector de pantalla"</strong></li>
              <li>O buscar "Protector de pantalla" en menú Inicio</li>
            </ol>

            <h5>🎨 Tipos de Protector Disponibles:</h5>
            <div class="tipos-protector">
              <h6>🔳 (Ninguno)</h6>
              <ul>
                <li><strong>Función:</strong> Desactivar protector de pantalla</li>
                <li><strong>Recomendado:</strong> Para uso activo constante</li>
              </ul>

              <h6>⚫ Pantalla en blanco</h6>
              <ul>
                <li><strong>Función:</strong> Pantalla completamente negra</li>
                <li><strong>Ventaja:</strong> Máximo ahorro de energía</li>
                <li><strong>Uso:</strong> Entornos donde no se quiere distracción</li>
              </ul>

              <h6>💭 Burbujas</h6>
              <ul>
                <li><strong>Función:</strong> Burbujas flotando y estallando</li>
                <li><strong>Personalización:</strong> Velocidad, transparencia, color</li>
                <li><strong>Configuración:</strong> Botón "Configuración" permite ajustes</li>
              </ul>

              <h6>🌀 Cintas místicas</h6>
              <ul>
                <li><strong>Función:</strong> Cintas de colores ondulantes</li>
                <li><strong>Efecto:</strong> Movimiento suave y relajante</li>
                <li><strong>Personalización:</strong> Velocidad y número de cintas</li>
              </ul>

              <h6>📸 Fotos</h6>
              <ul>
                <li><strong>Función:</strong> Presentación de fotos personales</li>
                <li><strong>Configuración:</strong> Seleccionar carpeta de imágenes</li>
                <li><strong>Opciones:</strong> Velocidad de cambio, efectos de transición</li>
                <li><strong>Personalización:</strong> Usar fotos familiares o paisajes favoritos</li>
              </ul>
            </div>

            <h5>⏰ Configuración de Tiempo:</h5>
            <ul>
              <li><strong>Esperar:</strong> Tiempo antes de activarse (1-9999 minutos)</li>
              <li><strong>Recomendado:</strong> 10-15 minutos para uso normal</li>
              <li><strong>Oficina:</strong> 5-10 minutos por seguridad</li>
              <li><strong>Casa:</strong> 15-30 minutos para comodidad</li>
            </ul>

            <h5>🔒 Seguridad del Protector:</h5>
            <ul>
              <li><strong>"Al reanudar, mostrar pantalla de inicio de sesión":</strong> Requiere contraseña para desactivar</li>
              <li><strong>Ventaja de seguridad:</strong> Protege información cuando te alejas</li>
              <li><strong>Consideración:</strong> Puede interrumpir presentaciones o demos</li>
            </ul>

            <h5>🎛️ Vista Previa y Prueba:</h5>
            <ul>
              <li><strong>Botón "Vista previa":</strong> Ver protector en pantalla completa</li>
              <li><strong>Mover ratón:</strong> Para salir de vista previa</li>
              <li><strong>Botón "Configuración":</strong> Opciones específicas del protector</li>
            </ul>
          </div>

          <h4>🎨 Configuración de Color y Temas</h4>
          <div class="color-temas">
            <h5>🎭 Temas de Windows:</h5>
            <div class="temas-windows">
              <h6>Acceso a Temas:</h6>
              <ol>
                <li>Personalización → <strong>"Temas"</strong></li>
                <li>Seleccionar tema predefinido</li>
                <li>O crear tema personalizado</li>
              </ol>

              <h6>Componentes de un Tema:</h6>
              <ul>
                <li><strong>Fondo de pantalla:</strong> Imagen o color de escritorio</li>
                <li><strong>Color de acento:</strong> Color principal de Windows</li>
                <li><strong>Sonidos:</strong> Efectos de audio del sistema</li>
                <li><strong>Cursor:</strong> Apariencia del puntero del ratón</li>
              </ul>
            </div>

            <h5>🌈 Configuración de Color:</h5>
            <ul>
              <li><strong>Personalización → Colores</strong></li>
              <li><strong>Elegir color:</strong> Automático, manual o personalizado</li>
              <li><strong>Modo oscuro/claro:</strong> Cambiar tema de Windows y aplicaciones</li>
              <li><strong>Efectos de transparencia:</strong> Activar/desactivar transparencia</li>
            </ul>

            <h5>🖱️ Configuración de Cursor:</h5>
            <ol>
              <li>Configuración → <strong>"Dispositivos"</strong> → <strong>"Mouse"</strong></li>
              <li>Clic en <strong>"Opciones adicionales del mouse"</strong></li>
              <li>Pestaña <strong>"Punteros"</strong></li>
              <li>Seleccionar esquema de cursor diferente</li>
              <li>O personalizar punteros individuales</li>
            </ol>
          </div>

          <h4>⚡ Configuración de Energía de Pantalla</h4>
          <div class="energia-pantalla">
            <h5>🔋 Opciones de Energía:</h5>
            <ol>
              <li>Configuración → <strong>"Sistema"</strong> → <strong>"Energía y suspensión"</strong></li>
              <li>Configurar tiempo para apagar pantalla</li>
              <li>Configurar tiempo para suspender PC</li>
            </ol>

            <h5>⏰ Tiempos Recomendados:</h5>
            <div class="tiempos-energia">
              <h6>💻 Laptop con Batería:</h6>
              <ul>
                <li><strong>Apagar pantalla:</strong> 2-5 minutos</li>
                <li><strong>Suspender:</strong> 10-15 minutos</li>
                <li><strong>Objetivo:</strong> Maximizar duración de batería</li>
              </ul>

              <h6>🖥️ PC de Escritorio:</h6>
              <ul>
                <li><strong>Apagar pantalla:</strong> 10-20 minutos</li>
                <li><strong>Suspender:</strong> 30-60 minutos o nunca</li>
                <li><strong>Objetivo:</strong> Balance entre energía y comodidad</li>
              </ul>

              <h6>💼 Uso Profesional:</h6>
              <ul>
                <li><strong>Apagar pantalla:</strong> 5-10 minutos</li>
                <li><strong>Suspender:</strong> 15-30 minutos</li>
                <li><strong>Consideración:</strong> Políticas de seguridad empresarial</li>
              </ul>
            </div>

            <h5>🔧 Configuración Avanzada:</h5>
            <ul>
              <li><strong>Opciones de energía avanzadas:</strong> Panel de control → Opciones de energía</li>
              <li><strong>Crear plan personalizado:</strong> Configuraciones específicas por uso</li>
              <li><strong>Configuración por adaptador:</strong> Diferentes ajustes con/sin batería</li>
            </ul>
          </div>

          <h4>💡 Consejos de Optimización</h4>
          <ul>
            <li><strong>Resolución nativa:</strong> Usar siempre la resolución recomendada por Windows</li>
            <li><strong>Escalado coherente:</strong> Mismo porcentaje en monitores similares</li>
            <li><strong>Protector simple:</strong> Efectos complejos consumen más energía</li>
            <li><strong>Modo nocturno:</strong> Luz nocturna para reducir fatiga visual</li>
            <li><strong>Calibración de color:</strong> Para trabajo profesional de diseño</li>
            <li><strong>Actualización de drivers:</strong> Mantener controladores de gráficos actualizados</li>
          </ul>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/configuracion-pantalla-windows.jpg",
        infografia: "/images/teoria/resoluciones-escalado-pantalla.png",
        video: "/videos/configuracion-protector-pantalla.mp4"
      },
      actividades: [
        {
          tipo: "configuracion",
          pregunta: "Configura un protector de pantalla de fotos con tus imágenes favoritas",
          ayuda: "Personalizar → Pantalla de bloqueo → Configuración del protector → Fotos → Configuración"
        },
        {
          tipo: "exploracion",
          pregunta: "Explora diferentes resoluciones y escalados, anota cuál es más cómodo para ti",
          ayuda: "Configuración → Sistema → Pantalla → probar diferentes combinaciones"
        }
      ]
    }
  ],
  recursos: {
    documentos: [
      {
        titulo: "Guía de Personalización Completa del Escritorio",
        url: "/docs/personalizacion-escritorio-completa.pdf",
        tipo: "pdf"
      },
      {
        titulo: "Manual de Organización Visual",
        url: "/docs/organizacion-visual-escritorio.pdf",
        tipo: "pdf"
      },
      {
        titulo: "Configuración de Pantalla y Resolución",
        url: "/docs/configuracion-pantalla-resolucion.pdf",
        tipo: "pdf"
      }
    ],
    enlaces: [
      {
        titulo: "Soporte Microsoft - Personalización de Windows",
        url: "https://support.microsoft.com/es-es/windows/personalizar-windows",
        tipo: "externo"
      },
      {
        titulo: "Configuración de Pantalla - Guía Oficial",
        url: "https://support.microsoft.com/es-es/windows/configuracion-pantalla",
        tipo: "externo"
      },
      {
        titulo: "Temas de Windows - Microsoft Store",
        url: "https://www.microsoft.com/es-es/store/collections/windowsthemes",
        tipo: "externo"
      }
    ],
    videos: [
      {
        titulo: "Personalización Completa del Escritorio",
        url: "/videos/personalizacion-completa-escritorio.mp4",
        duracion: "18:30"
      },
      {
        titulo: "Organización Eficiente de Iconos",
        url: "/videos/organizacion-eficiente-iconos.mp4",
        duracion: "12:15"
      },
      {
        titulo: "Configuración de Múltiples Monitores",
        url: "/videos/configuracion-multiples-monitores.mp4",
        duracion: "14:45"
      }
    ]
  },
  evaluacion: {
    tipo: "cuestionario",
    preguntas: [
      {
        pregunta: "¿Cómo se puede cambiar el fondo de pantalla en Windows?",
        tipo: "opcion_multiple",
        opciones: [
          "Solo reinstalando Windows",
          "Clic derecho en el escritorio → Personalizar",
          "Usando solo el Panel de Control",
          "No se puede cambiar"
        ],
        respuestaCorrecta: 1
      },
      {
        pregunta: "¿Qué significa que un icono tenga una flecha pequeña en la esquina?",
        tipo: "opcion_multiple",
        opciones: [
          "Es un archivo corrupto",
          "Es un acceso directo",
          "Es un archivo del sistema",
          "Es un virus"
        ],
        respuestaCorrecta: 1
      },
      {
        pregunta: "¿Cuál es la función principal del protector de pantalla en computadoras modernas?",
        tipo: "opcion_multiple",
        opciones: [
          "Proteger contra virus",
          "Acelerar el sistema",
          "Decoración y seguridad (bloqueo automático)",
          "Limpiar la pantalla"
        ],
        respuestaCorrecta: 2
      },
      {
        pregunta: "¿Qué atajo de teclado muestra u oculta el escritorio?",
        tipo: "opcion_multiple",
        opciones: [
          "Windows + E",
          "Windows + D",
          "Alt + Tab",
          "Ctrl + D"
        ],
        respuestaCorrecta: 1
      },
      {
        pregunta: "¿Qué sucede cuando activas 'Organizar iconos automáticamente'?",
        tipo: "opcion_multiple",
        opciones: [
          "Los iconos se eliminan",
          "Windows organiza los iconos en una cuadrícula ordenada",
          "Los iconos se vuelven invisibles",
          "Solo funciona en modo seguro"
        ],
        respuestaCorrecta: 1
      }
    ]
  }
};
