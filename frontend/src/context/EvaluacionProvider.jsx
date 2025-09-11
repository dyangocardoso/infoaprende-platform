import React, { useState, useEffect } from 'react';
import { useProgreso } from '../hooks/useProgreso';
import { EvaluacionContext } from './EvaluacionContext';

export default function EvaluacionProvider({ children }) {
  const { completarLeccion } = useProgreso();
  const [evaluaciones, setEvaluaciones] = useState({
    quizzesCompletados: [],
    evaluacionesAprobadas: [],
    intentosRealizados: {},
    mejoresPuntuaciones: {},
    tiempoRespuestas: {}
  });

  // Cargar evaluaciones desde localStorage
  useEffect(() => {
    const evaluacionesGuardadas = localStorage.getItem('evaluaciones-infoaprende');
    if (evaluacionesGuardadas) {
      setEvaluaciones(JSON.parse(evaluacionesGuardadas));
    }
  }, []);

  // Guardar evaluaciones en localStorage
  useEffect(() => {
    localStorage.setItem('evaluaciones-infoaprende', JSON.stringify(evaluaciones));
  }, [evaluaciones]);

  // Base de datos de preguntas por curso y tema
  const preguntasDB = {
    'nociones-computador': {
      '1': { // Algoritmo de encendido y apagado
        titulo: "Evaluación: Encendido y Apagado del Computador",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Cuál es el primer paso antes de encender un computador?",
            opciones: [
              "Presionar el botón de encendido inmediatamente",
              "Verificar que todos los cables estén conectados correctamente",
              "Abrir todos los programas",
              "Conectar a internet"
            ],
            respuestaCorrecta: 1,
            explicacion: "Es fundamental verificar las conexiones antes de encender para evitar daños al equipo."
          },
          {
            id: 2,
            pregunta: "¿Qué NO debes hacer mientras el computador está arrancando?",
            opciones: [
              "Esperar pacientemente",
              "Presionar varias teclas repetidamente",
              "Observar la pantalla",
              "Mantener el área limpia"
            ],
            respuestaCorrecta: 1,
            explicacion: "Presionar teclas durante el arranque puede interrumpir el proceso de inicio del sistema."
          },
          {
            id: 3,
            pregunta: "¿Cuál es la forma correcta de apagar un computador?",
            opciones: [
              "Desconectar el cable de alimentación directamente",
              "Presionar y mantener el botón de encendido",
              "Usar la opción 'Apagar' del menú de inicio",
              "Quitar la batería"
            ],
            respuestaCorrecta: 2,
            explicacion: "El apagado seguro a través del sistema operativo protege los datos y el sistema."
          },
          {
            id: 4,
            pregunta: "¿Qué puede suceder si apagas incorrectamente el computador?",
            opciones: [
              "Nada, es igual",
              "Pérdida de datos no guardados",
              "El computador funciona mejor",
              "Se ahorra energía"
            ],
            respuestaCorrecta: 1,
            explicacion: "El apagado incorrecto puede causar pérdida de datos y daños al sistema operativo."
          }
        ]
      },
      '2': { // Elementos que componen al computador
        titulo: "Evaluación: Elementos que componen al computador",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Cuáles son los cinco elementos básicos que componen un computador según este tema?",
            opciones: [
              "Monitor, CPU, impresora, ratón y teclado",
              "Monitor, CPU, bocinas, ratón y teclado",
              "Monitor, disco duro, bocinas, ratón y cables",
              "CPU, memoria, ratón, teclado y internet"
            ],
            respuestaCorrecta: 1,
            explicacion: "Los cinco elementos básicos son: monitor, CPU, bocinas, ratón y teclado."
          },
          {
            id: 2,
            pregunta: "¿Cuál es la función principal del monitor?",
            opciones: [
              "Procesar la información del computador",
              "Mostrar la información visual del computador",
              "Almacenar los archivos del usuario",
              "Conectar el computador a internet"
            ],
            respuestaCorrecta: 1,
            explicacion: "El monitor es el dispositivo que nos permite ver toda la información visual del computador."
          },
          {
            id: 3,
            pregunta: "¿Qué es la CPU en un computador?",
            opciones: [
              "La pantalla donde vemos las imágenes",
              "La caja o torre donde están los componentes internos",
              "Los altavoces para escuchar sonidos",
              "El cable que conecta todo"
            ],
            respuestaCorrecta: 1,
            explicacion: "La CPU es la caja o torre que contiene todos los componentes internos del computador."
          },
          {
            id: 4,
            pregunta: "¿Para qué sirven las bocinas en el computador?",
            opciones: [
              "Para mostrar imágenes en la pantalla",
              "Para escribir texto y números",
              "Para escuchar los sonidos del computador",
              "Para mover el cursor en la pantalla"
            ],
            respuestaCorrecta: 2,
            explicacion: "Las bocinas nos permiten escuchar todos los sonidos del computador: música, videos, notificaciones."
          },
          {
            id: 5,
            pregunta: "¿Cuáles son las partes principales del ratón?",
            opciones: [
              "Solo el botón izquierdo",
              "Botón izquierdo, botón derecho y rueda central",
              "Solo la rueda para desplazarse",
              "Solo el cable de conexión"
            ],
            respuestaCorrecta: 1,
            explicacion: "El ratón tiene tres partes principales: botón izquierdo, botón derecho y rueda central."
          },
          {
            id: 6,
            pregunta: "¿Cuál es la función principal del teclado?",
            opciones: [
              "Mostrar información en la pantalla",
              "Reproducir sonidos y música",
              "Escribir letras, números y comandos",
              "Mover el cursor por la pantalla"
            ],
            respuestaCorrecta: 2,
            explicacion: "El teclado nos permite escribir letras, números y dar comandos al computador."
          },
          {
            id: 7,
            pregunta: "¿Por qué es importante conectar correctamente todos los componentes?",
            opciones: [
              "Para que el computador funcione adecuadamente",
              "Para que se vea bonito",
              "Para ahorrar energía eléctrica",
              "Para que no se rompa la mesa"
            ],
            respuestaCorrecta: 0,
            explicacion: "Es fundamental conectar bien todos los componentes para que el computador funcione correctamente y de forma segura."
          }
        ]
      },
      '3': { // Manejo del ratón
        titulo: "Evaluación: Manejo del Ratón",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Cuál es la postura correcta de la mano al usar el ratón?",
            opciones: [
              "Agarrar el ratón muy fuerte",
              "Palma descansando sobre el ratón, dedos relajados",
              "Solo usar las puntas de los dedos",
              "Mover todo el brazo"
            ],
            respuestaCorrecta: 1,
            explicacion: "La palma debe descansar sobre el ratón con los dedos relajados para evitar fatiga y mejorar el control."
          },
          {
            id: 2,
            pregunta: "¿Qué tipo de clic se usa para seleccionar un elemento?",
            opciones: [
              "Clic derecho",
              "Doble clic",
              "Clic izquierdo",
              "Clic central"
            ],
            respuestaCorrecta: 2,
            explicacion: "El clic izquierdo es la acción básica para seleccionar elementos en la interfaz."
          },
          {
            id: 3,
            pregunta: "¿Para qué se utiliza principalmente el clic derecho?",
            opciones: [
              "Seleccionar elementos",
              "Arrastrar objetos",
              "Mostrar menús contextuales",
              "Cerrar ventanas"
            ],
            respuestaCorrecta: 2,
            explicacion: "El clic derecho despliega menús con opciones específicas para el elemento seleccionado."
          },
          {
            id: 4,
            pregunta: "¿Cuál es la función de la rueda del ratón?",
            opciones: [
              "Cambiar el volumen",
              "Desplazarse hacia arriba y abajo en la pantalla",
              "Cambiar de programa",
              "Apagar el computador"
            ],
            respuestaCorrecta: 1,
            explicacion: "La rueda del ratón permite desplazarse vertical y horizontalmente en documentos y páginas web."
          },
          {
            id: 5,
            pregunta: "¿Qué es el 'arrastrar y soltar' con el ratón?",
            opciones: [
              "Hacer clic dos veces rápido",
              "Mantener presionado el botón izquierdo y mover el ratón",
              "Usar solo el botón derecho",
              "Presionar la rueda central"
            ],
            respuestaCorrecta: 1,
            explicacion: "Arrastrar y soltar consiste en mantener presionado el botón izquierdo mientras se mueve el cursor para reubicar elementos."
          },
          {
            id: 6,
            pregunta: "¿Cuál es la altura correcta para usar el ratón?",
            opciones: [
              "Muy alta, por encima del hombro",
              "Codo a 90 grados, muñeca recta",
              "Muy baja, debajo de la mesa",
              "No importa la altura"
            ],
            respuestaCorrecta: 1,
            explicacion: "El codo debe estar a 90 grados y la muñeca recta para evitar lesiones por movimientos repetitivos."
          }
        ]
      }
    },
    'intro-windows': {
      '1': {
        titulo: "Evaluación: Elementos y funciones básicas",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Cuál es la función principal del ratón en Windows?",
            opciones: [
              "Solo mover el cursor",
              "Seleccionar, hacer clic, arrastrar y navegar por la interfaz",
              "Cambiar colores de pantalla",
              "Acelerar el sistema"
            ],
            respuestaCorrecta: 1,
            explicacion: "El ratón permite interactuar con Windows mediante selección, clics, arrastre y navegación por menús y ventanas."
          },
          {
            id: 2,
            pregunta: "¿Qué combinación de teclas permite copiar un elemento seleccionado?",
            opciones: [
              "Ctrl + X",
              "Ctrl + V", 
              "Ctrl + C",
              "Ctrl + Z"
            ],
            respuestaCorrecta: 2,
            explicacion: "Ctrl + C es el atajo universal para copiar elementos seleccionados."
          },
          {
            id: 3,
            pregunta: "¿Cómo se maximiza una ventana en Windows?",
            opciones: [
              "Doble clic en la barra de título",
              "Clic en el botón X",
              "Arrastrar hacia los bordes",
              "Presionar Alt + F4"
            ],
            respuestaCorrecta: 0,
            explicacion: "El doble clic en la barra de título maximiza o restaura una ventana."
          },
          {
            id: 4,
            pregunta: "¿Para qué sirve el Teclado en Pantalla?",
            opciones: [
              "Decorar el escritorio",
              "Permitir escritura sin teclado físico",
              "Acelerar el sistema",
              "Bloquear el sistema"
            ],
            respuestaCorrecta: 1,
            explicacion: "El Teclado en Pantalla permite escribir usando el ratón cuando no hay teclado físico disponible."
          },
          {
            id: 5,
            pregunta: "¿Qué sucede al presionar la tecla Windows?",
            opciones: [
              "Se cierra el sistema",
              "Se abre el menú Inicio",
              "Se minimiza todo",
              "Se abre el explorador"
            ],
            respuestaCorrecta: 1,
            explicacion: "La tecla Windows abre el menú Inicio, punto central de navegación en Windows."
          }
        ]
      },
      '2': {
        titulo: "Evaluación: Explorador de Windows",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Cuál es la función principal del panel de navegación en el Explorador?",
            opciones: [
              "Mostrar propiedades de archivos",
              "Navegar entre carpetas y unidades",
              "Reproducir archivos multimedia",
              "Editar archivos de texto"
            ],
            respuestaCorrecta: 1,
            explicacion: "El panel de navegación permite navegar fácilmente entre diferentes carpetas y unidades del sistema."
          },
          {
            id: 2,
            pregunta: "¿Qué atajo de teclado abre el Explorador de Windows?",
            opciones: [
              "Ctrl + E",
              "Windows + E",
              "Alt + E",
              "Shift + E"
            ],
            respuestaCorrecta: 1,
            explicacion: "Windows + E es el atajo estándar para abrir el Explorador de Windows."
          },
          {
            id: 3,
            pregunta: "¿Cuál es la diferencia entre Cortar y Copiar archivos?",
            opciones: [
              "No hay diferencia",
              "Cortar elimina el archivo original, Copiar lo mantiene",
              "Copiar es más rápido",
              "Solo funciona con carpetas"
            ],
            respuestaCorrecta: 1,
            explicacion: "Cortar mueve el archivo (elimina el original), mientras que Copiar crea una duplicación manteniendo el original."
          },
          {
            id: 4,
            pregunta: "¿Qué muestra la vista de Detalles en el Explorador?",
            opciones: [
              "Solo nombres de archivos",
              "Nombre, tamaño, fecha de modificación y tipo",
              "Solo íconos grandes",
              "Solo carpetas"
            ],
            respuestaCorrecta: 1,
            explicacion: "La vista Detalles muestra información completa: nombre, tamaño, fecha y tipo de archivo."
          },
          {
            id: 5,
            pregunta: "¿Cómo se puede buscar un archivo específico?",
            opciones: [
              "Solo navegando manualmente",
              "Usando el cuadro de búsqueda",
              "Reiniciando el sistema",
              "Solo desde el menú Inicio"
            ],
            respuestaCorrecta: 1,
            explicacion: "El cuadro de búsqueda en el Explorador permite encontrar archivos y carpetas rápidamente."
          }
        ]
      },
      '3': {
        titulo: "Evaluación: Escritorio de Windows",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Qué es el Escritorio de Windows?",
            opciones: [
              "Un programa de dibujo",
              "La pantalla principal donde aparecen íconos y la barra de tareas",
              "Una carpeta del computador",
              "Un navegador web"
            ],
            respuestaCorrecta: 1,
            explicacion: "El Escritorio es la pantalla principal de Windows donde se muestran íconos, accesos directos y la barra de tareas."
          },
          {
            id: 2,
            pregunta: "¿Cómo se puede cambiar el fondo de pantalla?",
            opciones: [
              "Solo reinstalando Windows",
              "Clic derecho en el escritorio → Personalizar",
              "Solo desde el Panel de Control",
              "No se puede cambiar"
            ],
            respuestaCorrecta: 1,
            explicacion: "El método más rápido es hacer clic derecho en el escritorio y seleccionar 'Personalizar'."
          },
          {
            id: 3,
            pregunta: "¿Qué son los accesos directos en el escritorio?",
            opciones: [
              "Archivos temporales",
              "Enlaces rápidos a programas, archivos o carpetas",
              "Virus del sistema",
              "Decoraciones de pantalla"
            ],
            respuestaCorrecta: 1,
            explicacion: "Los accesos directos son enlaces que permiten abrir rápidamente programas, archivos o carpetas."
          },
          {
            id: 4,
            pregunta: "¿Cómo se pueden organizar automáticamente los íconos del escritorio?",
            opciones: [
              "No es posible",
              "Clic derecho → Ver → Organizar íconos automáticamente",
              "Solo manualmente uno por uno",
              "Reiniciando el computador"
            ],
            respuestaCorrecta: 1,
            explicacion: "Windows puede organizar automáticamente los íconos usando la opción en el menú contextual."
          },
          {
            id: 5,
            pregunta: "¿Qué es el protector de pantalla?",
            opciones: [
              "Un programa antivirus",
              "Una imagen o animación que aparece cuando el PC está inactivo",
              "Un limpiador de archivos",
              "Un acelerador del sistema"
            ],
            respuestaCorrecta: 1,
            explicacion: "El protector de pantalla es una imagen o animación que se activa tras un período de inactividad."
          }
        ]
      },
      '4': {
        titulo: "Evaluación: Barra de tareas",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Cuáles son las partes principales de la barra de tareas?",
            opciones: [
              "Solo el botón Inicio",
              "Botón Inicio, área de aplicaciones y área de notificaciones",
              "Solo aplicaciones abiertas",
              "Solo el reloj"
            ],
            respuestaCorrecta: 1,
            explicacion: "La barra de tareas tiene tres partes principales: botón Inicio, área de aplicaciones y área de notificaciones."
          },
          {
            id: 2,
            pregunta: "¿Cómo se ancla un programa a la barra de tareas?",
            opciones: [
              "No se puede anclar",
              "Clic derecho en el programa → Anclar a la barra de tareas",
              "Solo arrastrando",
              "Solo desde el menú Inicio"
            ],
            respuestaCorrecta: 1,
            explicacion: "Se puede anclar haciendo clic derecho en el programa y seleccionando 'Anclar a la barra de tareas'."
          },
          {
            id: 3,
            pregunta: "¿Para qué sirve el área de notificaciones?",
            opciones: [
              "Solo mostrar la hora",
              "Mostrar íconos del sistema, notificaciones y acceso rápido a configuraciones",
              "Solo para decorar",
              "Cambiar fondos de pantalla"
            ],
            respuestaCorrecta: 1,
            explicacion: "El área de notificaciones muestra íconos del sistema, hora, notificaciones y acceso rápido a configuraciones."
          },
          {
            id: 4,
            pregunta: "¿Cómo se puede personalizar la apariencia de la barra de tareas?",
            opciones: [
              "No se puede personalizar",
              "Clic derecho en la barra → Configuración de la barra de tareas",
              "Solo cambiando el tema de Windows",
              "Solo desde el Panel de Control"
            ],
            respuestaCorrecta: 1,
            explicacion: "Se personaliza haciendo clic derecho en la barra de tareas y accediendo a su configuración."
          },
          {
            id: 5,
            pregunta: "¿Qué significa que un programa esté 'anclado' a la barra de tareas?",
            opciones: [
              "Que está bloqueado",
              "Que aparece permanentemente para acceso rápido",
              "Que está infectado",
              "Que no se puede usar"
            ],
            respuestaCorrecta: 1,
            explicacion: "Un programa anclado aparece permanentemente en la barra para acceso rápido, esté o no en ejecución."
          }
        ]
      },
      '5': {
        titulo: "Evaluación: Menú de Inicio",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Cuáles son las principales secciones del menú Inicio?",
            opciones: [
              "Solo lista de programas",
              "Lista de aplicaciones, mosaicos y opciones de usuario",
              "Solo buscador",
              "Solo configuración"
            ],
            respuestaCorrecta: 1,
            explicacion: "El menú Inicio incluye lista de aplicaciones, área de mosaicos y opciones de usuario/energía."
          },
          {
            id: 2,
            pregunta: "¿Cómo se busca un programa en el menú Inicio?",
            opciones: [
              "Solo navegando manualmente",
              "Escribiendo su nombre directamente después de abrir el menú",
              "Solo usando el Explorador",
              "No se puede buscar"
            ],
            respuestaCorrecta: 1,
            explicacion: "Al abrir el menú Inicio y escribir, Windows busca automáticamente programas y archivos."
          },
          {
            id: 3,
            pregunta: "¿Qué son los mosaicos en el menú Inicio?",
            opciones: [
              "Elementos decorativos",
              "Accesos directos visuales a aplicaciones",
              "Archivos temporales",
              "Configuraciones del sistema"
            ],
            respuestaCorrecta: 1,
            explicacion: "Los mosaicos son accesos directos visuales que pueden mostrar información dinámica de las aplicaciones."
          },
          {
            id: 4,
            pregunta: "¿Dónde se encuentran las opciones de apagado en el menú Inicio?",
            opciones: [
              "No están disponibles",
              "En la esquina inferior izquierda del menú",
              "Solo en el escritorio",
              "Solo con Ctrl+Alt+Supr"
            ],
            respuestaCorrecta: 1,
            explicacion: "Las opciones de energía (apagar, reiniciar, suspender) están en la esquina inferior izquierda del menú."
          },
          {
            id: 5,
            pregunta: "¿Cómo se puede personalizar el menú Inicio?",
            opciones: [
              "No se puede personalizar",
              "Configuración → Personalización → Inicio",
              "Solo cambiando de usuario",
              "Solo con software externo"
            ],
            respuestaCorrecta: 1,
            explicacion: "Se personaliza desde Configuración → Personalización → Inicio, donde se pueden ajustar mosaicos y apariencia."
          }
        ]
      },
      '6': {
        titulo: "Evaluación: Papelera de reciclaje",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Qué es la Papelera de Reciclaje?",
            opciones: [
              "Un programa antivirus",
              "Un área temporal donde se almacenan archivos eliminados",
              "Una aplicación de limpieza",
              "Un navegador web"
            ],
            respuestaCorrecta: 1,
            explicacion: "La Papelera es un área temporal que almacena archivos eliminados antes del borrado definitivo."
          },
          {
            id: 2,
            pregunta: "¿Cómo se restaura un archivo desde la Papelera?",
            opciones: [
              "No se puede restaurar",
              "Clic derecho en el archivo → Restaurar",
              "Solo copiando manualmente",
              "Reiniciando el sistema"
            ],
            respuestaCorrecta: 1,
            explicacion: "Se restaura haciendo clic derecho en el archivo dentro de la Papelera y seleccionando 'Restaurar'."
          },
          {
            id: 3,
            pregunta: "¿Qué sucede cuando se vacía la Papelera?",
            opciones: [
              "Los archivos se mueven a otra carpeta",
              "Los archivos se eliminan permanentemente",
              "Los archivos se comprimen",
              "Nada, es solo visual"
            ],
            respuestaCorrecta: 1,
            explicacion: "Al vaciar la Papelera, los archivos se eliminan permanentemente y no se pueden recuperar fácilmente."
          },
          {
            id: 4,
            pregunta: "¿Dónde se puede configurar el tamaño máximo de la Papelera?",
            opciones: [
              "No se puede configurar",
              "Clic derecho en la Papelera → Propiedades",
              "Solo desde el Panel de Control",
              "Solo reiniciando Windows"
            ],
            respuestaCorrecta: 1,
            explicacion: "En las Propiedades de la Papelera se puede configurar el tamaño máximo y otras opciones."
          },
          {
            id: 5,
            pregunta: "¿Cuándo NO van los archivos a la Papelera?",
            opciones: [
              "Siempre van a la Papelera",
              "Al usar Shift + Supr o eliminar desde unidades externas",
              "Solo los domingos",
              "Cuando el archivo es muy pequeño"
            ],
            respuestaCorrecta: 1,
            explicacion: "Los archivos se eliminan permanentemente al usar Shift + Supr o al eliminar desde unidades USB/externas."
          }
        ]
      },
      '7': {
        titulo: "Evaluación: Gestión de usuarios y seguridad",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Cuál es la diferencia principal entre una cuenta Administrador y una Estándar?",
            opciones: [
              "No hay diferencias",
              "El Administrador puede instalar software y modificar configuraciones del sistema",
              "Solo el nombre",
              "La cuenta Estándar es más rápida"
            ],
            respuestaCorrecta: 1,
            explicacion: "La cuenta Administrador tiene permisos completos para instalar software y modificar configuraciones del sistema."
          },
          {
            id: 2,
            pregunta: "¿Qué es el Control Parental en Windows?",
            opciones: [
              "Una función decorativa",
              "Sistema para restringir y supervisar el uso del equipo por menores",
              "Un juego",
              "Una función solo para empresas"
            ],
            respuestaCorrecta: 1,
            explicacion: "El Control Parental permite establecer límites de tiempo, restringir contenido y supervisar actividad."
          },
          {
            id: 3,
            pregunta: "¿Cómo se puede compartir una carpeta en la red?",
            opciones: [
              "No es posible",
              "Clic derecho en la carpeta → Propiedades → Compartir",
              "Solo copiando manualmente",
              "Solo con internet"
            ],
            respuestaCorrecta: 1,
            explicacion: "Se comparte una carpeta desde sus Propiedades, en la pestaña Compartir, configurando permisos apropiados."
          },
          {
            id: 4,
            pregunta: "¿Qué son los permisos de archivos?",
            opciones: [
              "Decoraciones del sistema",
              "Reglas que definen quién puede leer, escribir o ejecutar archivos",
              "Solo para programadores",
              "Archivos temporales"
            ],
            respuestaCorrecta: 1,
            explicacion: "Los permisos definen qué acciones pueden realizar diferentes usuarios sobre archivos y carpetas."
          },
          {
            id: 5,
            pregunta: "¿Para qué sirve cambiar la contraseña regularmente?",
            opciones: [
              "No sirve para nada",
              "Mejorar la seguridad y prevenir accesos no autorizados",
              "Acelerar el sistema",
              "Solo por decoración"
            ],
            respuestaCorrecta: 1,
            explicacion: "Cambiar contraseñas regularmente mejora la seguridad y reduce riesgos de acceso no autorizado."
          }
        ]
      },
      '8': {
        titulo: "Evaluación: Herramientas y utilidades",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Cuál es la función principal de Windows Defender?",
            opciones: [
              "Limpiar archivos temporales",
              "Proteger contra virus y malware en tiempo real",
              "Comprimir archivos",
              "Gestionar usuarios"
            ],
            respuestaCorrecta: 1,
            explicacion: "Windows Defender es el antivirus integrado que protege contra virus y malware en tiempo real."
          },
          {
            id: 2,
            pregunta: "¿Qué tipo de archivos se crean al comprimir con ZIP?",
            opciones: [
              "Archivos más grandes",
              "Archivos comprimidos que ocupan menos espacio",
              "Archivos duplicados",
              "Archivos temporales"
            ],
            respuestaCorrecta: 1,
            explicacion: "Los archivos ZIP son archivos comprimidos que ocupan menos espacio y pueden contener múltiples archivos."
          },
          {
            id: 3,
            pregunta: "¿Cómo se desinstala correctamente un programa en Windows?",
            opciones: [
              "Eliminar su carpeta manualmente",
              "Configuración → Aplicaciones → Seleccionar programa → Desinstalar",
              "Solo arrastrar a la Papelera",
              "Formatear el disco duro"
            ],
            respuestaCorrecta: 1,
            explicacion: "La forma correcta es usar Configuración → Aplicaciones para desinstalar completamente el programa."
          },
          {
            id: 4,
            pregunta: "¿Qué es el Panel de Control?",
            opciones: [
              "Un juego de Windows",
              "Centro tradicional de configuración del sistema",
              "Un programa de edición",
              "Una herramienta solo para programadores"
            ],
            respuestaCorrecta: 1,
            explicacion: "El Panel de Control es el centro tradicional donde se configuran diversos aspectos del sistema."
          },
          {
            id: 5,
            pregunta: "¿Por qué es importante el Firewall de Windows?",
            opciones: [
              "Solo para acelerar internet",
              "Para controlar el tráfico de red y bloquear amenazas",
              "Para cambiar fondos de pantalla",
              "No es importante"
            ],
            respuestaCorrecta: 1,
            explicacion: "El Firewall controla qué programas pueden acceder a internet y bloquea conexiones maliciosas."
          }
        ]
      }
    },
    'paint': {
      '1': {
        titulo: "Evaluación: Interfaz y herramientas",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Cuál es la función principal de la Cinta de Opciones (Ribbon) en Paint?",
            opciones: [
              "Solo decorar la interfaz",
              "Organizar todas las herramientas y comandos en pestañas",
              "Mostrar solo colores",
              "Controlar el volumen"
            ],
            respuestaCorrecta: 1,
            explicacion: "La Cinta de Opciones organiza todas las herramientas de Paint en pestañas lógicas (Archivo, Inicio, Ver) para facilitar el acceso."
          },
          {
            id: 2,
            pregunta: "¿Dónde se encuentra el cuadro de herramientas principal en Paint?",
            opciones: [
              "En la barra de estado inferior",
              "En la pestaña Inicio de la Cinta de Opciones",
              "Solo en menús desplegables",
              "No existe en Paint"
            ],
            respuestaCorrecta: 1,
            explicacion: "El cuadro de herramientas principal se encuentra en la pestaña Inicio, donde están organizadas las herramientas de dibujo, formas y colores."
          },
          {
            id: 3,
            pregunta: "¿Qué información muestra la barra de estado en la parte inferior de Paint?",
            opciones: [
              "Solo la hora actual",
              "Coordenadas del cursor, dimensiones de imagen y control de zoom",
              "Solo el nombre del archivo",
              "Información del sistema operativo"
            ],
            respuestaCorrecta: 1,
            explicacion: "La barra de estado muestra información útil como las coordenadas exactas del cursor, las dimensiones de la imagen y controles de zoom."
          },
          {
            id: 4,
            pregunta: "¿Cómo se puede configurar el área de trabajo para mayor precisión al dibujar?",
            opciones: [
              "No se puede configurar",
              "Activando la cuadrícula y las reglas desde la pestaña Ver",
              "Solo reiniciando Paint",
              "Cambiando el color de fondo"
            ],
            respuestaCorrecta: 1,
            explicacion: "Desde la pestaña Ver se puede activar la cuadrícula y las reglas, que ayudan a dibujar con mayor precisión y alineación."
          },
          {
            id: 5,
            pregunta: "¿Cuál es la diferencia entre Color 1 (primario) y Color 2 (secundario) en la paleta de colores?",
            opciones: [
              "No hay diferencia",
              "Color 1 para contornos (clic izquierdo), Color 2 para rellenos (clic derecho)",
              "Color 1 es más brillante",
              "Color 2 solo funciona los domingos"
            ],
            respuestaCorrecta: 1,
            explicacion: "Color 1 se usa para trazos y contornos (clic izquierdo), mientras que Color 2 se usa para rellenos y fondos (clic derecho)."
          }
        ]
      },
      '2': {
        titulo: "Evaluación: Técnicas básicas",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Cuál es la mejor técnica para realizar dibujo libre efectivo en Paint?",
            opciones: [
              "Dibujar muy rápido sin control",
              "Usar movimientos lentos y controlados con la herramienta adecuada",
              "Solo usar el mouse, nunca el trackpad",
              "Dibujar solo con líneas rectas"
            ],
            respuestaCorrecta: 1,
            explicacion: "Para dibujo libre efectivo se recomienda usar movimientos lentos y controlados, eligiendo la herramienta apropiada (lápiz para precisión, pincel para trazos suaves)."
          },
          {
            id: 2,
            pregunta: "¿Cómo se crean formas geométricas básicas perfectas en Paint?",
            opciones: [
              "Solo dibujando a mano alzada",
              "Usando las herramientas de formas y manteniendo Shift para proporciones perfectas",
              "No se pueden crear formas perfectas en Paint",
              "Solo con herramientas externas"
            ],
            respuestaCorrecta: 1,
            explicacion: "Se usan las herramientas de formas (rectángulo, elipse, línea) y se mantiene presionada la tecla Shift para crear formas perfectas (cuadrados, círculos, líneas rectas)."
          },
          {
            id: 3,
            pregunta: "¿Cuál es la función principal del Borrador en Paint y cómo se usa efectivamente?",
            opciones: [
              "Solo elimina todo el dibujo",
              "Borra selectivamente áreas específicas, puede configurarse en diferentes tamaños",
              "Solo funciona con el color negro",
              "No existe herramienta borrador en Paint"
            ],
            respuestaCorrecta: 1,
            explicacion: "El Borrador elimina selectivamente partes del dibujo, se puede configurar en diferentes tamaños y borra aplicando el color de fondo (generalmente blanco)."
          },
          {
            id: 4,
            pregunta: "¿Cómo se insertan y formatean cuadros de texto en Paint?",
            opciones: [
              "No se puede insertar texto en Paint",
              "Seleccionar herramienta Texto (A), hacer clic donde se quiere el texto, escribir y formatear",
              "Solo pegando texto desde Word",
              "El texto se inserta automáticamente"
            ],
            respuestaCorrecta: 1,
            explicacion: "Se selecciona la herramienta Texto (icono A), se hace clic donde se quiere colocar el texto, se escribe el contenido y se puede formatear usando las opciones de fuente."
          },
          {
            id: 5,
            pregunta: "¿Cuál es la técnica correcta para realizar recortes y selecciones en Paint?",
            opciones: [
              "No se pueden hacer recortes en Paint",
              "Usar herramientas de Selección (rectangular o libre), seleccionar área, luego Ctrl+X para recortar",
              "Solo usando el borrador",
              "Los recortes se hacen automáticamente"
            ],
            respuestaCorrecta: 1,
            explicacion: "Se usa la herramienta de Selección (rectangular o forma libre) para delimitar el área deseada, luego Ctrl+X para recortar o Ctrl+C para copiar la selección."
          }
        ]
      }
    },
    'paint-3d': {
      '1': {
        titulo: "Evaluación: Introducción a Paint 3D",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Qué es Paint 3D?",
            opciones: [
              "Una versión antigua de Paint",
              "Una aplicación moderna de Microsoft para crear arte 2D y 3D",
              "Un navegador web",
              "Un procesador de textos"
            ],
            respuestaCorrecta: 1,
            explicacion: "Paint 3D es la evolución moderna de Paint que permite crear y editar tanto imágenes 2D como objetos y escenas 3D."
          },
          {
            id: 2,
            pregunta: "¿Cuál es la principal diferencia entre Paint y Paint 3D?",
            opciones: [
              "No hay diferencia",
              "Paint 3D permite trabajar con objetos tridimensionales",
              "Paint 3D es más lento",
              "Paint 3D solo funciona en Internet"
            ],
            respuestaCorrecta: 1,
            explicacion: "La principal diferencia es que Paint 3D añade capacidades para crear, editar y manipular objetos en tres dimensiones."
          },
          {
            id: 3,
            pregunta: "¿Qué tipos de formas 3D básicas incluye Paint 3D?",
            opciones: [
              "Solo círculos",
              "Cubos, esferas, cilindros, conos, pirámides",
              "Solo líneas",
              "Solo texto"
            ],
            respuestaCorrecta: 1,
            explicacion: "Paint 3D incluye formas 3D básicas como cubos, esferas, cilindros, conos y pirámides que se pueden insertar y modificar."
          },
          {
            id: 4,
            pregunta: "¿Cómo se navega en el espacio 3D de Paint 3D?",
            opciones: [
              "No se puede navegar",
              "Arrastrando con el mouse para rotar la vista",
              "Solo con el teclado",
              "Cerrando el programa"
            ],
            respuestaCorrecta: 1,
            explicacion: "Se puede navegar arrastrando con el mouse para rotar la vista, usar la rueda para zoom, y moverse por el espacio 3D."
          }
        ]
      },
      '2': {
        titulo: "Evaluación: Herramientas 3D",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Qué permite hacer la herramienta de Formas 3D?",
            opciones: [
              "Solo dibujar líneas",
              "Insertar y crear objetos tridimensionales",
              "Cambiar colores solamente",
              "Guardar archivos"
            ],
            respuestaCorrecta: 1,
            explicacion: "La herramienta de Formas 3D permite insertar objetos tridimensionales predefinidos y crearlos desde cero."
          },
          {
            id: 2,
            pregunta: "¿Cómo se puede cambiar el color de un objeto 3D?",
            opciones: [
              "No se puede cambiar",
              "Seleccionando el objeto y eligiendo un color o textura",
              "Solo reiniciando el programa",
              "Dibujando encima"
            ],
            respuestaCorrecta: 1,
            explicacion: "Se puede cambiar el color seleccionando el objeto 3D y aplicando colores sólidos, gradientes o texturas desde la paleta."
          },
          {
            id: 3,
            pregunta: "¿Qué son las texturas en Paint 3D?",
            opciones: [
              "Errores del programa",
              "Patrones y materiales que se pueden aplicar a objetos 3D",
              "Solo colores sólidos",
              "Herramientas de borrado"
            ],
            respuestaCorrecta: 1,
            explicacion: "Las texturas son patrones, materiales y acabados (como madera, metal, tela) que se pueden aplicar a objetos 3D."
          },
          {
            id: 4,
            pregunta: "¿Cómo se redimensiona un objeto 3D?",
            opciones: [
              "No se puede redimensionar",
              "Arrastrando los puntos de control en las esquinas",
              "Solo escribiendo números",
              "Reiniciando el programa"
            ],
            respuestaCorrecta: 1,
            explicacion: "Los objetos 3D se redimensionan arrastrando los puntos de control que aparecen en las esquinas cuando están seleccionados."
          }
        ]
      },
      '3': {
        titulo: "Evaluación: Creación y Edición 3D",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Qué permite hacer la herramienta Doodle 3D?",
            opciones: [
              "Solo borrar",
              "Dibujar formas que se convierten automáticamente en objetos 3D",
              "Cambiar colores únicamente",
              "Guardar archivos"
            ],
            respuestaCorrecta: 1,
            explicacion: "Doodle 3D permite dibujar formas a mano alzada que automáticamente se extruyen y convierten en objetos tridimensionales."
          },
          {
            id: 2,
            pregunta: "¿Cómo se puede rotar un objeto 3D?",
            opciones: [
              "No se puede rotar",
              "Usando los controles de rotación circulares alrededor del objeto",
              "Solo con el teclado",
              "Apagando el computador"
            ],
            respuestaCorrecta: 1,
            explicacion: "Los objetos 3D se rotan usando los controles circulares que aparecen alrededor del objeto cuando está seleccionado."
          },
          {
            id: 3,
            pregunta: "¿Qué es una escena 3D en Paint 3D?",
            opciones: [
              "Un error del programa",
              "Un entorno tridimensional donde se colocan y organizan varios objetos",
              "Solo una imagen plana",
              "Una herramienta de texto"
            ],
            respuestaCorrecta: 1,
            explicacion: "Una escena 3D es un espacio tridimensional donde se pueden colocar, organizar e interactuar múltiples objetos 3D."
          },
          {
            id: 4,
            pregunta: "¿En qué formatos se puede exportar un proyecto de Paint 3D?",
            opciones: [
              "Solo en TXT",
              "2D (PNG, JPG) y 3D (GLB, PLY, OBJ)",
              "Solo en DOC",
              "No se puede exportar"
            ],
            respuestaCorrecta: 1,
            explicacion: "Paint 3D permite exportar en formatos 2D para imágenes y formatos 3D para usar en otras aplicaciones de modelado."
          }
        ]
      }
    },
    'word': {
      '1': {
        titulo: "Evaluación: Conceptos Básicos de Word",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Qué es Microsoft Word?",
            opciones: [
              "Un navegador web",
              "Un procesador de textos para crear y editar documentos",
              "Un programa de dibujo",
              "Un reproductor de música"
            ],
            respuestaCorrecta: 1,
            explicacion: "Microsoft Word es un procesador de textos que permite crear, editar y formatear documentos de texto de manera profesional."
          },
          {
            id: 2,
            pregunta: "¿Cuál es la extensión predeterminada de los archivos de Word?",
            opciones: [
              ".txt",
              ".docx",
              ".pdf",
              ".jpg"
            ],
            respuestaCorrecta: 1,
            explicacion: "Los documentos de Word moderno se guardan con la extensión .docx, aunque también puede manejar otros formatos."
          },
          {
            id: 3,
            pregunta: "¿Para qué sirve la cinta de opciones en Word?",
            opciones: [
              "Para decorar la ventana",
              "Para acceder a todas las herramientas y funciones organizadas en pestañas",
              "Solo para cambiar colores",
              "Para cerrar el programa"
            ],
            respuestaCorrecta: 1,
            explicacion: "La cinta de opciones organiza todas las herramientas en pestañas temáticas como Inicio, Insertar, Diseño, etc."
          },
          {
            id: 4,
            pregunta: "¿Cómo se puede guardar un documento en Word?",
            opciones: [
              "No se puede guardar",
              "Ctrl + S o Archivo → Guardar",
              "Solo cerrando el programa",
              "Alt + F4"
            ],
            respuestaCorrecta: 1,
            explicacion: "Se puede guardar usando Ctrl + S, o desde el menú Archivo → Guardar o Guardar como para especificar ubicación."
          }
        ]
      },
      '2': {
        titulo: "Evaluación: Formato de Texto",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Cómo se puede poner texto en negrita?",
            opciones: [
              "No se puede hacer",
              "Ctrl + B o botón Negrita en la cinta",
              "Solo escribiendo en mayúsculas",
              "Cambiando el color"
            ],
            respuestaCorrecta: 1,
            explicacion: "Se aplica negrita seleccionando el texto y presionando Ctrl + B o haciendo clic en el botón Negrita (B)."
          },
          {
            id: 2,
            pregunta: "¿Qué hace la función de subrayado?",
            opciones: [
              "Borra el texto",
              "Dibuja una línea debajo del texto seleccionado",
              "Cambia el color del texto",
              "Hace el texto más grande"
            ],
            respuestaCorrecta: 1,
            explicacion: "El subrayado (Ctrl + U) dibuja una línea debajo del texto para darle énfasis o destacarlo."
          },
          {
            id: 3,
            pregunta: "¿Cómo se cambia el tamaño de la fuente?",
            opciones: [
              "No se puede cambiar",
              "Seleccionando el texto y eligiendo un tamaño en la caja de fuente",
              "Solo con el zoom",
              "Reiniciando Word"
            ],
            respuestaCorrecta: 1,
            explicacion: "Se cambia seleccionando el texto y eligiendo el tamaño deseado en la caja de tamaño de fuente en la cinta."
          },
          {
            id: 4,
            pregunta: "¿Para qué sirve la alineación de texto?",
            opciones: [
              "Para cambiar colores",
              "Para posicionar el texto (izquierda, centro, derecha, justificado)",
              "Para borrar texto",
              "Para guardar el documento"
            ],
            respuestaCorrecta: 1,
            explicacion: "La alineación controla cómo se posiciona el texto horizontalmente en la página: izquierda, centro, derecha o justificado."
          }
        ]
      }
    },
    'powerpoint': {
      '1': {
        titulo: "Evaluación: Fundamentos de PowerPoint",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Qué es Microsoft PowerPoint?",
            opciones: [
              "Un editor de texto",
              "Un programa para crear presentaciones con diapositivas",
              "Un navegador web",
              "Una calculadora"
            ],
            respuestaCorrecta: 1,
            explicacion: "PowerPoint es una aplicación especializada en crear presentaciones multimedia con diapositivas, texto, imágenes y animaciones."
          },
          {
            id: 2,
            pregunta: "¿Qué es una diapositiva en PowerPoint?",
            opciones: [
              "Un archivo de música",
              "Una página individual de la presentación",
              "Un color de fondo",
              "Una animación"
            ],
            respuestaCorrecta: 1,
            explicacion: "Una diapositiva es cada página individual que compone la presentación, donde se coloca contenido como texto, imágenes, etc."
          },
          {
            id: 3,
            pregunta: "¿Cómo se puede agregar una nueva diapositiva?",
            opciones: [
              "No se puede agregar",
              "Botón 'Nueva diapositiva' en la pestaña Inicio",
              "Solo copiando diapositivas existentes",
              "Reiniciando PowerPoint"
            ],
            respuestaCorrecta: 1,
            explicacion: "Se agrega una nueva diapositiva usando el botón 'Nueva diapositiva' en la pestaña Inicio o con Ctrl + M."
          },
          {
            id: 4,
            pregunta: "¿Para qué sirven las plantillas en PowerPoint?",
            opciones: [
              "Solo para colores",
              "Para proporcionar diseños predefinidos y profesionales",
              "Para borrar contenido",
              "Para cambiar el idioma"
            ],
            respuestaCorrecta: 1,
            explicacion: "Las plantillas ofrecen diseños predefinidos con colores, fuentes y layouts profesionales para crear presentaciones atractivas."
          }
        ]
      },
      '2': {
        titulo: "Evaluación: Diseño y Contenido",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Cómo se puede insertar una imagen en una diapositiva?",
            opciones: [
              "No se puede insertar imágenes",
              "Pestaña Insertar → Imágenes",
              "Solo escribiendo texto",
              "Cerrando el programa"
            ],
            respuestaCorrecta: 1,
            explicacion: "Se insertan imágenes desde la pestaña Insertar → Imágenes, donde se puede elegir desde archivo, online o stock."
          },
          {
            id: 2,
            pregunta: "¿Qué son los marcadores de posición en PowerPoint?",
            opciones: [
              "Errores del programa",
              "Áreas predefinidas donde se puede agregar contenido específico",
              "Solo decoraciones",
              "Archivos temporales"
            ],
            respuestaCorrecta: 1,
            explicacion: "Los marcadores de posición son áreas predefinidas en los diseños para agregar títulos, texto, imágenes, gráficos, etc."
          },
          {
            id: 3,
            pregunta: "¿Cómo se puede cambiar el tema de toda la presentación?",
            opciones: [
              "No se puede cambiar",
              "Pestaña Diseño → seleccionar un tema",
              "Solo diapositiva por diapositiva",
              "Reiniciando PowerPoint"
            ],
            respuestaCorrecta: 1,
            explicacion: "Se cambia el tema de toda la presentación desde la pestaña Diseño, donde se muestran diferentes temas predefinidos."
          },
          {
            id: 4,
            pregunta: "¿Para qué sirven las transiciones en PowerPoint?",
            opciones: [
              "Para borrar diapositivas",
              "Para crear efectos visuales al cambiar entre diapositivas",
              "Para cambiar colores",
              "Para agregar texto"
            ],
            respuestaCorrecta: 1,
            explicacion: "Las transiciones crean efectos visuales animados cuando se cambia de una diapositiva a otra durante la presentación."
          }
        ]
      }
    },
    'excel': {
      '1': {
        titulo: "Evaluación: Conceptos Básicos de Excel",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Qué es Microsoft Excel?",
            opciones: [
              "Un procesador de textos",
              "Una hoja de cálculo para trabajar con datos y números",
              "Un programa de dibujo",
              "Un navegador web"
            ],
            respuestaCorrecta: 1,
            explicacion: "Excel es una aplicación de hoja de cálculo diseñada para organizar, calcular y analizar datos numéricos."
          },
          {
            id: 2,
            pregunta: "¿Qué es una celda en Excel?",
            opciones: [
              "Un archivo completo",
              "La intersección de una fila y una columna donde se ingresa información",
              "Solo un número",
              "Una carpeta"
            ],
            respuestaCorrecta: 1,
            explicacion: "Una celda es el espacio rectangular donde se cruzan una fila y una columna, identificada por coordenadas como A1, B2, etc."
          },
          {
            id: 3,
            pregunta: "¿Cómo se identifican las columnas en Excel?",
            opciones: [
              "Con números",
              "Con letras (A, B, C, D...)",
              "Con símbolos",
              "No se identifican"
            ],
            respuestaCorrecta: 1,
            explicacion: "Las columnas se identifican con letras consecutivas: A, B, C, D... hasta la columna XFD en versiones modernas."
          },
          {
            id: 4,
            pregunta: "¿Cómo se identifican las filas en Excel?",
            opciones: [
              "Con letras",
              "Con números (1, 2, 3, 4...)",
              "Con colores",
              "No se identifican"
            ],
            respuestaCorrecta: 1,
            explicacion: "Las filas se numeran consecutivamente con números: 1, 2, 3, 4... hasta más de un millón de filas."
          }
        ]
      },
      '2': {
        titulo: "Evaluación: Fórmulas y Funciones",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Cómo debe comenzar una fórmula en Excel?",
            opciones: [
              "Con una letra",
              "Con el signo igual (=)",
              "Con un número",
              "Con un espacio"
            ],
            respuestaCorrecta: 1,
            explicacion: "Todas las fórmulas en Excel deben comenzar con el signo igual (=) para que Excel las reconozca como cálculos."
          },
          {
            id: 2,
            pregunta: "¿Qué hace la función SUMA en Excel?",
            opciones: [
              "Resta números",
              "Suma todos los valores en un rango de celdas",
              "Multiplica valores",
              "Divide números"
            ],
            respuestaCorrecta: 1,
            explicacion: "La función SUMA(rango) calcula la suma total de todos los valores numéricos en el rango de celdas especificado."
          },
          {
            id: 3,
            pregunta: "¿Cuál es la sintaxis correcta para sumar las celdas A1 a A5?",
            opciones: [
              "SUMA A1:A5",
              "=SUMA(A1:A5)",
              "SUMA(A1-A5)",
              "=A1+A2+A3+A4+A5 solamente"
            ],
            respuestaCorrecta: 1,
            explicacion: "La sintaxis correcta es =SUMA(A1:A5), donde los dos puntos (:) indican un rango desde A1 hasta A5."
          },
          {
            id: 4,
            pregunta: "¿Qué función se usa para calcular el promedio de un rango?",
            opciones: [
              "SUMA",
              "PROMEDIO",
              "CONTAR",
              "MULTIPLICAR"
            ],
            respuestaCorrecta: 1,
            explicacion: "La función PROMEDIO calcula el valor promedio (media aritmética) de los números en un rango de celdas."
          }
        ]
      }
    },
    'intro-informatica': {
      '1': {
        titulo: "Evaluación: Evolución histórica",
        descripcion: "Evalúa tus conocimientos sobre los hitos de la era digital",
        duracion: 15,
        preguntas: [
          {
            id: 1,
            pregunta: "¿Cuál fue uno de los primeros dispositivos de cálculo mencionados en la historia?",
            opciones: [
              "La calculadora electrónica",
              "El ábaco",
              "La computadora personal",
              "El teléfono móvil"
            ],
            respuestaCorrecta: 1,
            explicacion: "El ábaco, usado en Mesopotamia alrededor del 3000 a.C., fue uno de los primeros dispositivos de cálculo conocidos."
          },
          {
            id: 2,
            pregunta: "¿Quién diseñó la máquina analítica en 1837?",
            opciones: [
              "Ada Lovelace",
              "Charles Babbage",
              "Alan Turing",
              "Herman Hollerith"
            ],
            respuestaCorrecta: 1,
            explicacion: "Charles Babbage diseñó la máquina analítica, considerada el primer diseño de computadora de propósito general."
          },
          {
            id: 3,
            pregunta: "¿Quién es considerada la primera programadora de la historia?",
            opciones: [
              "Marie Curie",
              "Ada Lovelace",
              "Grace Hopper",
              "Katherine Johnson"
            ],
            respuestaCorrecta: 1,
            explicacion: "Ada Lovelace escribió el primer algoritmo destinado a ser procesado por una máquina (la máquina analítica de Babbage)."
          },
          {
            id: 4,
            pregunta: "¿Cuál fue la primera computadora electrónica de propósito general?",
            opciones: [
              "UNIVAC I",
              "IBM 701",
              "ENIAC",
              "Intel 4004"
            ],
            respuestaCorrecta: 2,
            explicacion: "ENIAC (1946) fue la primera computadora electrónica de propósito general completamente funcional."
          },
          {
            id: 5,
            pregunta: "¿Qué microprocesador cambió la historia de la computación en 1971?",
            opciones: [
              "Intel 8080",
              "Intel 8086",
              "Intel 4004",
              "Intel 8008"
            ],
            respuestaCorrecta: 2,
            explicacion: "El Intel 4004 (1971) fue el primer microprocesador comercial y cambió para siempre la industria informática."
          }
        ]
      },
      '2': {
        titulo: "Evaluación: Fundamentos y conceptos",
        descripcion: "Evalúa tu comprensión de los conceptos fundamentales de la informática",
        duracion: 15,
        preguntas: [
          {
            id: 1,
            pregunta: "¿Qué es la informática?",
            opciones: [
              "El estudio de las computadoras únicamente",
              "La ciencia del tratamiento automático de la información",
              "El arte de programar",
              "La reparación de equipos electrónicos"
            ],
            respuestaCorrecta: 1,
            explicacion: "La informática es la ciencia que estudia el tratamiento automático de la información mediante computadoras."
          },
          {
            id: 2,
            pregunta: "¿Cuál es la diferencia principal entre datos e información?",
            opciones: [
              "No hay diferencia, son sinónimos",
              "Los datos son procesados, la información es cruda",
              "Los datos son hechos crudos, la información son datos procesados con significado",
              "Los datos son numéricos, la información es textual"
            ],
            respuestaCorrecta: 2,
            explicacion: "Los datos son hechos crudos sin procesar, mientras que la información son datos procesados, organizados y con significado."
          },
          {
            id: 3,
            pregunta: "¿Cuáles son las fases del ciclo básico de procesamiento?",
            opciones: [
              "Entrada → Salida → Procesamiento",
              "Procesamiento → Entrada → Salida",
              "Entrada → Procesamiento → Salida",
              "Salida → Entrada → Procesamiento"
            ],
            respuestaCorrecta: 2,
            explicacion: "El ciclo básico es: Entrada (Input) → Procesamiento → Salida (Output), con almacenamiento como fase adicional."
          },
          {
            id: 4,
            pregunta: "¿Cuáles son los componentes de un sistema de información?",
            opciones: [
              "Solo hardware y software",
              "Hardware, software, datos, personas y procedimientos",
              "Computadoras y programas",
              "Internet y aplicaciones"
            ],
            respuestaCorrecta: 1,
            explicacion: "Un sistema de información incluye hardware, software, datos, personas y procedimientos trabajando de manera integrada."
          },
          {
            id: 5,
            pregunta: "¿Qué convierte los datos en información útil?",
            opciones: [
              "El hardware únicamente",
              "Los usuarios",
              "El procesamiento y organización",
              "El almacenamiento"
            ],
            respuestaCorrecta: 2,
            explicacion: "El procesamiento y organización de los datos es lo que los convierte en información útil y con significado."
          }
        ]
      },
      '3': {
        titulo: "Evaluación: Unidades de medida y almacenamiento",
        descripcion: "Evalúa tu conocimiento sobre las unidades digitales y conversiones",
        duracion: 15,
        preguntas: [
          {
            id: 1,
            pregunta: "¿Qué es un bit?",
            opciones: [
              "8 bytes",
              "La unidad mínima de información (0 o 1)",
              "1024 bytes",
              "Un programa pequeño"
            ],
            respuestaCorrecta: 1,
            explicacion: "Un bit (binary digit) es la unidad mínima de información y puede tener valor 0 o 1."
          },
          {
            id: 2,
            pregunta: "¿Cuántos bits forman un byte?",
            opciones: [
              "4 bits",
              "16 bits",
              "8 bits",
              "32 bits"
            ],
            respuestaCorrecta: 2,
            explicacion: "Un byte está formado por 8 bits y puede representar 256 valores diferentes (2^8)."
          },
          {
            id: 3,
            pregunta: "¿Cuántos bytes hay en 1 KB (kilobyte)?",
            opciones: [
              "1,000 bytes",
              "1,024 bytes",
              "100 bytes",
              "10,000 bytes"
            ],
            respuestaCorrecta: 1,
            explicacion: "1 KB = 1,024 bytes. En informática se usan potencias de 2, no de 10."
          },
          {
            id: 4,
            pregunta: "¿Cuál es el orden correcto de unidades de menor a mayor?",
            opciones: [
              "Bit, Byte, MB, KB, GB",
              "Byte, Bit, KB, MB, GB",
              "Bit, Byte, KB, MB, GB",
              "KB, Bit, Byte, MB, GB"
            ],
            respuestaCorrecta: 2,
            explicacion: "El orden correcto es: bit, byte, KB (kilobyte), MB (megabyte), GB (gigabyte), TB (terabyte)."
          },
          {
            id: 5,
            pregunta: "¿Aproximadamente cuánto espacio ocupa una canción MP3 de 3 minutos?",
            opciones: [
              "3-4 MB",
              "300-400 KB",
              "30-40 GB",
              "3-4 bytes"
            ],
            respuestaCorrecta: 0,
            explicacion: "Una canción MP3 de 3 minutos típicamente ocupa entre 3-4 MB, dependiendo de la calidad de compresión."
          }
        ]
      },
      '4': {
        titulo: "Evaluación: Hardware",
        descripcion: "Evalúa tu conocimiento sobre la clasificación del hardware",
        duracion: 20,
        preguntas: [
          {
            id: 1,
            pregunta: "¿Cuál de estos es un dispositivo de entrada?",
            opciones: [
              "Monitor",
              "Teclado",
              "Impresora",
              "Altavoces"
            ],
            respuestaCorrecta: 1,
            explicacion: "El teclado es un dispositivo de entrada que permite introducir datos al computador."
          },
          {
            id: 2,
            pregunta: "¿Cuál es la función principal del CPU?",
            opciones: [
              "Mostrar información",
              "Almacenar datos permanentemente",
              "Ejecutar instrucciones y procesar datos",
              "Conectar a internet"
            ],
            respuestaCorrecta: 2,
            explicacion: "El CPU (Unidad Central de Procesamiento) ejecuta instrucciones y procesa datos."
          },
          {
            id: 3,
            pregunta: "¿Cuál de estos es un dispositivo mixto (entrada y salida)?",
            opciones: [
              "Ratón",
              "Pantalla táctil",
              "Monitor",
              "Teclado"
            ],
            respuestaCorrecta: 1,
            explicacion: "La pantalla táctil es mixta: muestra información (salida) y recibe toques (entrada)."
          },
          {
            id: 4,
            pregunta: "¿Qué tipo de almacenamiento es la memoria RAM?",
            opciones: [
              "Almacenamiento primario",
              "Almacenamiento secundario",
              "Almacenamiento terciario",
              "Almacenamiento en la nube"
            ],
            respuestaCorrecta: 0,
            explicacion: "La RAM es almacenamiento primario: volátil, rápido y directamente accesible por el CPU."
          },
          {
            id: 5,
            pregunta: "¿Cuál es la diferencia entre dispositivos de entrada y salida?",
            opciones: [
              "No hay diferencia",
              "Los de entrada permiten introducir datos, los de salida presentan información",
              "Los de entrada son más caros",
              "Los de salida son más importantes"
            ],
            respuestaCorrecta: 1,
            explicacion: "Los dispositivos de entrada permiten introducir datos al sistema, los de salida presentan información procesada."
          }
        ]
      },
      '5': {
        titulo: "Evaluación: Software",
        descripcion: "Evalúa tu comprensión sobre tipos de software y licencias",
        duracion: 15,
        preguntas: [
          {
            id: 1,
            pregunta: "¿Qué es el software de sistema?",
            opciones: [
              "Programas para entretenimiento",
              "Software que controla y coordina las operaciones del computador",
              "Aplicaciones de oficina",
              "Juegos de computadora"
            ],
            respuestaCorrecta: 1,
            explicacion: "El software de sistema controla y coordina las operaciones del computador, incluyendo el sistema operativo."
          },
          {
            id: 2,
            pregunta: "¿Cuál es un ejemplo de software de aplicación?",
            opciones: [
              "Windows",
              "Driver de impresora",
              "Microsoft Word",
              "BIOS"
            ],
            respuestaCorrecta: 2,
            explicacion: "Microsoft Word es software de aplicación diseñado para que el usuario realice tareas específicas (procesar texto)."
          },
          {
            id: 3,
            pregunta: "¿Qué caracteriza al software libre?",
            opciones: [
              "Es gratuito pero el código es cerrado",
              "Código abierto con libertades garantizadas",
              "Solo funciona en Linux",
              "No se puede modificar"
            ],
            respuestaCorrecta: 1,
            explicacion: "El software libre se caracteriza por tener código abierto y garantizar las libertades de usar, estudiar, modificar y distribuir."
          },
          {
            id: 4,
            pregunta: "¿Qué es un IDE en programación?",
            opciones: [
              "Un tipo de licencia",
              "Un lenguaje de programación",
              "Un ambiente de desarrollo integrado",
              "Un sistema operativo"
            ],
            respuestaCorrecta: 2,
            explicacion: "IDE (Integrated Development Environment) es un ambiente de desarrollo integrado con herramientas para programar."
          },
          {
            id: 5,
            pregunta: "¿Cuál es la diferencia entre freeware y software libre?",
            opciones: [
              "No hay diferencia",
              "Freeware es gratis pero código cerrado, software libre es código abierto",
              "Freeware es mejor",
              "Software libre es más caro"
            ],
            respuestaCorrecta: 1,
            explicacion: "Freeware es gratuito pero con código cerrado, mientras que software libre tiene código abierto y más libertades."
          }
        ]
      },
      '6': {
        titulo: "Evaluación: Placa base y dispositivos de procesamiento",
        descripcion: "Evalúa tu conocimiento sobre la arquitectura del computador",
        duracion: 20,
        preguntas: [
          {
            id: 1,
            pregunta: "¿Cuál es la función principal de la placa base?",
            opciones: [
              "Procesar datos",
              "Almacenar información",
              "Conectar todos los componentes del computador",
              "Mostrar imágenes"
            ],
            respuestaCorrecta: 2,
            explicacion: "La placa base (motherboard) es el circuito principal que conecta todos los componentes del computador."
          },
          {
            id: 2,
            pregunta: "¿Qué unidad del CPU realiza operaciones aritméticas y lógicas?",
            opciones: [
              "Unidad de Control",
              "ALU (Arithmetic Logic Unit)",
              "Registros",
              "Caché"
            ],
            respuestaCorrecta: 1,
            explicacion: "La ALU (Unidad Aritmético-Lógica) realiza todas las operaciones aritméticas y lógicas del procesador."
          },
          {
            id: 3,
            pregunta: "¿Qué característica define a la memoria RAM?",
            opciones: [
              "Es permanente",
              "Es volátil",
              "Es muy lenta",
              "No se puede cambiar"
            ],
            respuestaCorrecta: 1,
            explicacion: "La memoria RAM es volátil, lo que significa que pierde su contenido cuando se corta la energía."
          },
          {
            id: 4,
            pregunta: "¿Qué componente coordina la comunicación entre los demás componentes?",
            opciones: [
              "La RAM",
              "El disco duro",
              "El chipset",
              "El monitor"
            ],
            respuestaCorrecta: 2,
            explicacion: "El chipset coordina la comunicación entre el CPU, la memoria y otros componentes del sistema."
          },
          {
            id: 5,
            pregunta: "En la arquitectura de von Neumann, ¿qué comparten datos e instrucciones?",
            opciones: [
              "El CPU",
              "El mismo espacio de memoria y bus",
              "El disco duro",
              "La pantalla"
            ],
            respuestaCorrecta: 1,
            explicacion: "En la arquitectura de von Neumann, datos e instrucciones comparten el mismo espacio de memoria y bus de datos."
          }
        ]
      },
      '7': {
        titulo: "Evaluación: Memoria y almacenamiento",
        descripcion: "Evalúa tu comprensión sobre tipos de memoria y tecnologías de almacenamiento",
        duracion: 20,
        preguntas: [
          {
            id: 1,
            pregunta: "¿Cómo se organiza la jerarquía de memoria?",
            opciones: [
              "Más cerca del CPU = más lenta y barata",
              "Más cerca del CPU = más rápida pero más cara",
              "No hay jerarquía",
              "Todas las memorias son iguales"
            ],
            respuestaCorrecta: 1,
            explicacion: "En la jerarquía de memoria: más cerca del CPU = más rápida pero más cara y con menor capacidad."
          },
          {
            id: 2,
            pregunta: "¿Cuál es la principal ventaja de los SSD sobre los HDD?",
            opciones: [
              "Son más baratos",
              "Tienen mayor capacidad",
              "Son más rápidos y silenciosos",
              "Duran menos tiempo"
            ],
            respuestaCorrecta: 2,
            explicacion: "Los SSD son más rápidos, silenciosos y resistentes que los HDD porque no tienen partes móviles."
          },
          {
            id: 3,
            pregunta: "¿Qué tecnología utilizan los discos duros (HDD) para almacenar datos?",
            opciones: [
              "Luz láser",
              "Magnetismo",
              "Electricidad estática",
              "Ondas de radio"
            ],
            respuestaCorrecta: 1,
            explicacion: "Los HDD utilizan magnetismo para almacenar datos en platos magnéticos giratorios."
          },
          {
            id: 4,
            pregunta: "¿Cuál es la capacidad típica de un DVD?",
            opciones: [
              "700 MB",
              "4.7 GB",
              "25 GB",
              "128 GB"
            ],
            respuestaCorrecta: 1,
            explicacion: "Un DVD estándar tiene una capacidad de 4.7 GB (hasta 8.5 GB en doble capa)."
          },
          {
            id: 5,
            pregunta: "¿Qué tipo de acceso caracteriza a la memoria RAM?",
            opciones: [
              "Acceso secuencial",
              "Acceso aleatorio",
              "Acceso por bloques",
              "Acceso magnético"
            ],
            respuestaCorrecta: 1,
            explicacion: "La RAM tiene acceso aleatorio, permitiendo llegar a cualquier posición de memoria en el mismo tiempo."
          }
        ]
      }
    }
  };

  // Obtener preguntas para un quiz específico
  const getPreguntas = (cursoId, temaId) => {
    return preguntasDB[cursoId]?.[temaId] || null;
  };

  // Calcular puntuación de un quiz
  const calcularPuntuacion = (respuestas, preguntasData) => {
    let correctas = 0;
    const resultados = [];

    preguntasData.preguntas.forEach((pregunta, index) => {
      const respuestaUsuario = respuestas[index];
      const esCorrecta = respuestaUsuario === pregunta.respuestaCorrecta;
      
      if (esCorrecta) correctas++;
      
      resultados.push({
        preguntaId: pregunta.id,
        pregunta: pregunta.pregunta,
        respuestaUsuario,
        respuestaCorrecta: pregunta.respuestaCorrecta,
        esCorrecta,
        explicacion: pregunta.explicacion
      });
    });

    const puntuacion = Math.round((correctas / preguntasData.preguntas.length) * 100);
    
    return {
      puntuacion,
      correctas,
      total: preguntasData.preguntas.length,
      resultados,
      aprobado: puntuacion >= 70 // 70% para aprobar
    };
  };

  // Completar un quiz
  const completarQuiz = (cursoId, temaId, respuestas, tiempoTotal) => {
    const preguntasData = getPreguntas(cursoId, temaId);
    if (!preguntasData) return null;

    const resultado = calcularPuntuacion(respuestas, preguntasData);
    const quizId = `${cursoId}-${temaId}`;
    
    setEvaluaciones(prev => {
      const intentosActuales = prev.intentosRealizados[quizId] || 0;
      const mejorPuntuacion = prev.mejoresPuntuaciones[quizId] || 0;
      
      return {
        ...prev,
        quizzesCompletados: resultado.aprobado && !prev.quizzesCompletados.includes(quizId)
          ? [...prev.quizzesCompletados, quizId]
          : prev.quizzesCompletados,
        evaluacionesAprobadas: resultado.aprobado && !prev.evaluacionesAprobadas.includes(quizId)
          ? [...prev.evaluacionesAprobadas, quizId]
          : prev.evaluacionesAprobadas,
        intentosRealizados: {
          ...prev.intentosRealizados,
          [quizId]: intentosActuales + 1
        },
        mejoresPuntuaciones: {
          ...prev.mejoresPuntuaciones,
          [quizId]: Math.max(mejorPuntuacion, resultado.puntuacion)
        },
        tiempoRespuestas: {
          ...prev.tiempoRespuestas,
          [quizId]: tiempoTotal
        }
      };
    });

    // Si aprobó, otorgar puntos de progreso
    if (resultado.aprobado) {
      const puntosBonus = Math.round(resultado.puntuacion / 10); // 7-10 puntos bonus
      completarLeccion(cursoId, `quiz-${temaId}`, puntosBonus);
    }

    return resultado;
  };

  // Verificar si un quiz está completado
  const isQuizCompletado = (cursoId, temaId) => {
    const quizId = `${cursoId}-${temaId}`;
    return evaluaciones.quizzesCompletados.includes(quizId);
  };

  // Obtener estadísticas de un quiz
  const getEstadisticasQuiz = (cursoId, temaId) => {
    const quizId = `${cursoId}-${temaId}`;
    return {
      completado: evaluaciones.quizzesCompletados.includes(quizId),
      intentos: evaluaciones.intentosRealizados[quizId] || 0,
      mejorPuntuacion: evaluaciones.mejoresPuntuaciones[quizId] || 0,
      tiempoPromedio: evaluaciones.tiempoRespuestas[quizId] || 0
    };
  };

  // Obtener resumen general de evaluaciones
  const getResumenEvaluaciones = () => {
    const totalQuizzes = Object.keys(preguntasDB).reduce((total, curso) => {
      return total + Object.keys(preguntasDB[curso]).length;
    }, 0);

    return {
      quizzesCompletados: evaluaciones.quizzesCompletados.length,
      totalQuizzes,
      porcentajeCompletado: totalQuizzes > 0 ? Math.round((evaluaciones.quizzesCompletados.length / totalQuizzes) * 100) : 0,
      promedioGeneral: evaluaciones.mejoresPuntuaciones 
        ? Math.round(Object.values(evaluaciones.mejoresPuntuaciones).reduce((a, b) => a + b, 0) / Object.values(evaluaciones.mejoresPuntuaciones).length) || 0
        : 0
    };
  };

  // Reiniciar evaluaciones (para testing)
  const reiniciarEvaluaciones = () => {
    setEvaluaciones({
      quizzesCompletados: [],
      evaluacionesAprobadas: [],
      intentosRealizados: {},
      mejoresPuntuaciones: {},
      tiempoRespuestas: {}
    });
    localStorage.removeItem('evaluaciones-infoaprende');
  };

  const value = {
    evaluaciones,
    getPreguntas,
    completarQuiz,
    isQuizCompletado,
    getEstadisticasQuiz,
    getResumenEvaluaciones,
    reiniciarEvaluaciones
  };

  return (
    <EvaluacionContext.Provider value={value}>
      {children}
    </EvaluacionContext.Provider>
  );
};
