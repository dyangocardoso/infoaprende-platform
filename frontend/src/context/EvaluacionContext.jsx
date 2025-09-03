import React, { createContext, useContext, useState, useEffect } from 'react';
import { useProgreso } from './ProgresoContext';

const EvaluacionContext = createContext();

export const useEvaluacion = () => {
  const context = useContext(EvaluacionContext);
  if (!context) {
    throw new Error('useEvaluacion debe ser usado dentro de EvaluacionProvider');
  }
  return context;
};

export const EvaluacionProvider = ({ children }) => {
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
            pregunta: "¿Para qué sirve la Barra de Tareas?",
            opciones: [
              "Para decorar la pantalla",
              "Para mostrar programas abiertos y acceder al menú Inicio",
              "Para cambiar el fondo de pantalla",
              "Para apagar el computador"
            ],
            respuestaCorrecta: 1,
            explicacion: "La Barra de Tareas muestra programas abiertos, permite acceder al menú Inicio y contiene notificaciones del sistema."
          },
          {
            id: 3,
            pregunta: "¿Qué contiene el menú Inicio de Windows?",
            opciones: [
              "Solo juegos",
              "Programas instalados, configuración y opciones de apagado",
              "Solo archivos de música",
              "Solo fotos"
            ],
            respuestaCorrecta: 1,
            explicacion: "El menú Inicio proporciona acceso a todos los programas instalados, configuración del sistema y opciones de energía."
          },
          {
            id: 4,
            pregunta: "¿Cómo se puede cambiar el fondo de pantalla?",
            opciones: [
              "Es imposible cambiarlo",
              "Clic derecho en el escritorio → Personalizar",
              "Solo desde el menú Inicio",
              "Reiniciando el computador"
            ],
            respuestaCorrecta: 1,
            explicacion: "Se puede cambiar el fondo haciendo clic derecho en el escritorio y seleccionando 'Personalizar' o desde Configuración."
          }
        ]
      },
      '2': {
        titulo: "Evaluación: Explorador de Archivos",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Qué es el Explorador de Archivos?",
            opciones: [
              "Un navegador web",
              "Una herramienta para navegar y administrar archivos y carpetas",
              "Un editor de texto",
              "Un reproductor de música"
            ],
            respuestaCorrecta: 1,
            explicacion: "El Explorador de Archivos permite navegar, buscar, copiar, mover y administrar archivos y carpetas en el computador."
          },
          {
            id: 2,
            pregunta: "¿Cuál es la diferencia entre un archivo y una carpeta?",
            opciones: [
              "No hay diferencia",
              "Los archivos contienen datos, las carpetas organizan y contienen archivos",
              "Las carpetas son más importantes",
              "Los archivos son más grandes"
            ],
            respuestaCorrecta: 1,
            explicacion: "Los archivos contienen información específica (documentos, fotos, etc.), mientras que las carpetas sirven para organizar y agrupar archivos."
          },
          {
            id: 3,
            pregunta: "¿Cómo se puede crear una nueva carpeta?",
            opciones: [
              "No se puede crear",
              "Clic derecho → Nuevo → Carpeta",
              "Solo desde el menú Inicio",
              "Apagando el computador"
            ],
            respuestaCorrecta: 1,
            explicacion: "Se puede crear una carpeta haciendo clic derecho en un espacio vacío del Explorador y seleccionando 'Nuevo' → 'Carpeta'."
          },
          {
            id: 4,
            pregunta: "¿Qué es la Papelera de Reciclaje?",
            opciones: [
              "Un programa antivirus",
              "Un lugar temporal donde van los archivos eliminados",
              "Una aplicación de limpieza",
              "Un navegador web"
            ],
            respuestaCorrecta: 1,
            explicacion: "La Papelera de Reciclaje almacena temporalmente archivos eliminados, permitiendo recuperarlos antes del borrado definitivo."
          }
        ]
      }
    },
    'paint': {
      '1': {
        titulo: "Evaluación: Conceptos Básicos de Paint",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Qué es Microsoft Paint?",
            opciones: [
              "Un procesador de textos",
              "Un programa simple de dibujo y edición de imágenes",
              "Un navegador web",
              "Un reproductor de música"
            ],
            respuestaCorrecta: 1,
            explicacion: "Microsoft Paint es una aplicación básica de dibujo y edición de imágenes incluida en Windows."
          },
          {
            id: 2,
            pregunta: "¿Cuáles son los formatos de imagen más comunes que maneja Paint?",
            opciones: [
              "Solo TXT",
              "BMP, JPG, PNG, GIF",
              "Solo DOC",
              "Solo PDF"
            ],
            respuestaCorrecta: 1,
            explicacion: "Paint puede abrir y guardar imágenes en varios formatos como BMP, JPEG, PNG, GIF, entre otros."
          },
          {
            id: 3,
            pregunta: "¿Para qué sirve la herramienta Pincel en Paint?",
            opciones: [
              "Para escribir texto",
              "Para dibujar líneas a mano alzada con diferentes grosores",
              "Para borrar",
              "Para copiar imágenes"
            ],
            respuestaCorrecta: 1,
            explicacion: "La herramienta Pincel permite dibujar líneas curvas y formas a mano alzada con diferentes tamaños y colores."
          },
          {
            id: 4,
            pregunta: "¿Cómo se puede cambiar el color de dibujo en Paint?",
            opciones: [
              "No se puede cambiar",
              "Haciendo clic en la paleta de colores",
              "Solo reiniciando el programa",
              "Escribiendo el nombre del color"
            ],
            respuestaCorrecta: 1,
            explicacion: "Se selecciona un color haciendo clic en la paleta de colores o usando los botones de color primario y secundario."
          }
        ]
      },
      '2': {
        titulo: "Evaluación: Herramientas de Dibujo",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Qué herramienta se usa para dibujar círculos perfectos?",
            opciones: [
              "Pincel",
              "Lápiz",
              "Elipse (manteniendo Shift presionado)",
              "Borrador"
            ],
            respuestaCorrecta: 2,
            explicacion: "La herramienta Elipse, manteniendo presionada la tecla Shift, permite dibujar círculos perfectos."
          },
          {
            id: 2,
            pregunta: "¿Para qué sirve la herramienta Relleno (bote de pintura)?",
            opciones: [
              "Para borrar",
              "Para dibujar líneas",
              "Para llenar áreas cerradas con color",
              "Para escribir texto"
            ],
            respuestaCorrecta: 2,
            explicacion: "La herramienta Relleno llena instantáneamente áreas cerradas con el color seleccionado."
          },
          {
            id: 3,
            pregunta: "¿Cuál es la diferencia entre el Pincel y el Lápiz?",
            opciones: [
              "No hay diferencia",
              "El Pincel crea trazos suaves, el Lápiz trazos más duros y definidos",
              "El Lápiz es más grande",
              "El Pincel solo dibuja en negro"
            ],
            respuestaCorrecta: 1,
            explicacion: "El Pincel produce trazos suaves y difuminados, mientras que el Lápiz crea líneas más nítidas y definidas."
          },
          {
            id: 4,
            pregunta: "¿Cómo se puede deshacer la última acción en Paint?",
            opciones: [
              "No se puede deshacer",
              "Ctrl + Z",
              "Alt + F4",
              "Cerrando el programa"
            ],
            respuestaCorrecta: 1,
            explicacion: "Ctrl + Z es el atajo universal para deshacer la última acción realizada en Paint y muchas otras aplicaciones."
          }
        ]
      },
      '3': {
        titulo: "Evaluación: Edición y Efectos",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Cómo se puede rotar una imagen en Paint?",
            opciones: [
              "No se puede rotar",
              "Menú Imagen → Rotar",
              "Solo con el mouse",
              "Apagando el computador"
            ],
            respuestaCorrecta: 1,
            explicacion: "Se puede rotar una imagen usando las opciones del menú 'Imagen' o los botones de rotación en la cinta de herramientas."
          },
          {
            id: 2,
            pregunta: "¿Qué permite hacer la herramienta Selección?",
            opciones: [
              "Solo dibujar",
              "Seleccionar partes de la imagen para copiar, mover o eliminar",
              "Cambiar colores",
              "Guardar archivos"
            ],
            respuestaCorrecta: 1,
            explicacion: "La herramienta Selección permite marcar áreas de la imagen para realizar operaciones como copiar, cortar, mover o aplicar efectos."
          },
          {
            id: 3,
            pregunta: "¿Cómo se puede cambiar el tamaño de una imagen en Paint?",
            opciones: [
              "Es imposible cambiar el tamaño",
              "Menú Inicio → Cambiar tamaño",
              "Solo aumentando el zoom",
              "Dibujando encima"
            ],
            respuestaCorrecta: 1,
            explicacion: "Se puede cambiar el tamaño de la imagen usando la opción 'Cambiar tamaño' en el menú Inicio o Imagen."
          },
          {
            id: 4,
            pregunta: "¿Para qué sirve la función Zoom en Paint?",
            opciones: [
              "Para cambiar el tamaño del archivo",
              "Para acercar o alejar la vista sin modificar la imagen",
              "Para rotar la imagen",
              "Para cambiar colores"
            ],
            respuestaCorrecta: 1,
            explicacion: "El Zoom permite acercar o alejar la vista de la imagen para trabajar con más detalle sin cambiar el tamaño real de la imagen."
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
