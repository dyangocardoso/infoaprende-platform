import React, { createContext, useState } from 'react';

export const EvaluacionContext = createContext();

export const EvaluacionProvider = ({ children }) => {
  const [evaluaciones] = useState({});
  const [estadisticas] = useState({});

  // Datos de evaluaciones optimizados
  const evaluacionesData = {
    'intro-windows': {
      '1': {
        titulo: "Evaluación - Elementos y funciones básicas",
        descripcion: "Evalúa tus conocimientos sobre los elementos básicos de Windows",
        duracion: 15,
        preguntas: [
          {
            id: 1,
            pregunta: "¿Cuál es la función principal del clic derecho del ratón?",
            opciones: ["Seleccionar elementos", "Abrir menú contextual", "Arrastrar elementos", "Hacer doble clic"],
            respuestaCorrecta: 1,
            explicacion: "El clic derecho abre el menú contextual, que muestra opciones específicas según el elemento seleccionado."
          },
          {
            id: 2,
            pregunta: "¿Qué combinación de teclas permite copiar un elemento seleccionado?",
            opciones: ["Ctrl + X", "Ctrl + V", "Ctrl + C", "Ctrl + Z"],
            respuestaCorrecta: 2,
            explicacion: "Ctrl + C es el atajo universal para copiar elementos seleccionados."
          },
          {
            id: 3,
            pregunta: "¿Cómo se maximiza una ventana en Windows?",
            opciones: ["Doble clic en la barra de título", "Clic en el botón X", "Arrastrar hacia los bordes", "Presionar Alt + F4"],
            respuestaCorrecta: 0,
            explicacion: "El doble clic en la barra de título maximiza o restaura una ventana."
          },
          {
            id: 4,
            pregunta: "¿Cuál es la función del Teclado en Pantalla?",
            opciones: ["Decorar el escritorio", "Permitir escritura sin teclado físico", "Acelerar el sistema", "Bloquear el sistema"],
            respuestaCorrecta: 1,
            explicacion: "El Teclado en Pantalla permite escribir usando el ratón o dispositivos táctiles cuando no hay teclado físico disponible."
          },
          {
            id: 5,
            pregunta: "¿Qué sucede al presionar la tecla Windows?",
            opciones: ["Se cierra el sistema", "Se abre el menú Inicio", "Se minimiza todo", "Se abre el explorador"],
            respuestaCorrecta: 1,
            explicacion: "La tecla Windows abre el menú Inicio, que es el punto central de navegación en Windows."
          }
        ]
      },
      '2': {
        titulo: "Evaluación - Explorador de Windows",
        descripcion: "Evalúa tus conocimientos sobre la gestión de archivos y carpetas",
        duracion: 20,
        preguntas: [
          {
            id: 1,
            pregunta: "¿Cuál es la función principal del panel de navegación en el Explorador?",
            opciones: ["Mostrar propiedades de archivos", "Navegar entre carpetas y unidades", "Reproducir archivos multimedia", "Editar archivos de texto"],
            respuestaCorrecta: 1,
            explicacion: "El panel de navegación permite navegar fácilmente entre diferentes carpetas y unidades del sistema."
          },
          {
            id: 2,
            pregunta: "¿Qué atajo de teclado abre el Explorador de Windows?",
            opciones: ["Ctrl + E", "Windows + E", "Alt + E", "Shift + E"],
            respuestaCorrecta: 1,
            explicacion: "Windows + E es el atajo estándar para abrir el Explorador de Windows."
          },
          {
            id: 3,
            pregunta: "¿Cuál es la diferencia entre 'Cortar' y 'Copiar' un archivo?",
            opciones: ["No hay diferencia", "Cortar elimina el original, Copiar lo mantiene", "Copiar es más rápido que Cortar", "Cortar solo funciona con carpetas"],
            respuestaCorrecta: 1,
            explicacion: "Cortar mueve el archivo (elimina el original), mientras que Copiar crea una duplicado manteniendo el original."
          },
          {
            id: 4,
            pregunta: "¿Qué información muestra la vista 'Detalles' en el Explorador?",
            opciones: ["Solo nombres de archivos", "Nombre, tamaño, tipo y fecha de modificación", "Solo íconos grandes", "Solo carpetas"],
            respuestaCorrecta: 1,
            explicacion: "La vista Detalles muestra información completa: nombre, tamaño, tipo, fecha de modificación y otros metadatos."
          },
          {
            id: 5,
            pregunta: "¿Cómo se puede buscar un archivo específico en el Explorador?",
            opciones: ["Solo navegando manualmente", "Usando el cuadro de búsqueda", "Reiniciando el sistema", "Usando solo el menú Inicio"],
            respuestaCorrecta: 1,
            explicacion: "El cuadro de búsqueda en el Explorador permite encontrar archivos y carpetas rápidamente."
          }
        ]
      },
      '3': {
        titulo: "Evaluación - Escritorio de Windows",
        descripcion: "Evalúa tus conocimientos sobre personalización y organización del escritorio",
        duracion: 15,
        preguntas: [
          {
            id: 1,
            pregunta: "¿Cómo se puede cambiar el fondo de pantalla en Windows?",
            opciones: ["Solo reinstalando Windows", "Clic derecho en el escritorio → Personalizar", "Usando solo el Panel de Control", "No se puede cambiar"],
            respuestaCorrecta: 1,
            explicacion: "El método más rápido es hacer clic derecho en el escritorio y seleccionar 'Personalizar'."
          },
          {
            id: 2,
            pregunta: "¿Qué son los accesos directos en el escritorio?",
            opciones: ["Archivos originales de programas", "Enlaces que apuntan a programas o archivos", "Carpetas temporales", "Archivos de configuración"],
            respuestaCorrecta: 1,
            explicacion: "Los accesos directos son enlaces que permiten abrir rápidamente programas, archivos o carpetas sin navegar hasta su ubicación original."
          },
          {
            id: 3,
            pregunta: "¿Cómo se puede organizar automáticamente los íconos del escritorio?",
            opciones: ["Arrastrándolos manualmente", "Clic derecho → Ver → Organizar íconos automáticamente", "Reiniciando el sistema", "No es posible organizarlos automáticamente"],
            respuestaCorrecta: 1,
            explicacion: "Windows puede organizar automáticamente los íconos del escritorio usando la opción en el menú contextual."
          },
          {
            id: 4,
            pregunta: "¿Qué función cumple el protector de pantalla?",
            opciones: ["Acelerar el sistema", "Proteger la pantalla y dar privacidad", "Limpiar archivos temporales", "Actualizar el sistema"],
            respuestaCorrecta: 1,
            explicacion: "El protector de pantalla protege la pantalla de quemaduras y proporciona privacidad cuando el equipo no se usa."
          },
          {
            id: 5,
            pregunta: "¿Cómo se ajusta la resolución de pantalla?",
            opciones: ["Solo cambiando el monitor", "Configuración → Sistema → Pantalla", "No se puede ajustar", "Solo reiniciando"],
            respuestaCorrecta: 1,
            explicacion: "La resolución se ajusta en Configuración → Sistema → Pantalla, donde se pueden ver todas las resoluciones disponibles."
          }
        ]
      },
      '4': {
        titulo: "Evaluación - Barra de tareas",
        descripcion: "Evalúa tus conocimientos sobre el uso y personalización de la barra de tareas",
        duracion: 15,
        preguntas: [
          {
            id: 1,
            pregunta: "¿Cuáles son las partes principales de la barra de tareas?",
            opciones: ["Solo el botón Inicio", "Botón Inicio, área de aplicaciones y área de notificaciones", "Solo aplicaciones abiertas", "Solo el reloj"],
            respuestaCorrecta: 1,
            explicacion: "La barra de tareas tiene tres partes principales: botón Inicio, área de aplicaciones abiertas/ancladas y área de notificaciones."
          },
          {
            id: 2,
            pregunta: "¿Cómo se ancla un programa a la barra de tareas?",
            opciones: ["Arrastrando el archivo .exe", "Clic derecho en el programa → Anclar a la barra de tareas", "Copiando el programa a System32", "No se puede anclar programas"],
            respuestaCorrecta: 1,
            explicacion: "Se ancla haciendo clic derecho en el programa (abierto o en el menú Inicio) y seleccionando 'Anclar a la barra de tareas'."
          },
          {
            id: 3,
            pregunta: "¿Qué muestra el área de notificaciones?",
            opciones: ["Solo la hora", "Íconos del sistema, notificaciones y reloj", "Solo aplicaciones abiertas", "Solo el menú Inicio"],
            respuestaCorrecta: 1,
            explicacion: "El área de notificaciones muestra íconos del sistema (volumen, red, batería), notificaciones activas y el reloj."
          },
          {
            id: 4,
            pregunta: "¿Cómo se puede cambiar entre aplicaciones abiertas?",
            opciones: ["Solo cerrando y abriendo aplicaciones", "Haciendo clic en sus íconos en la barra de tareas", "Solo usando el menú Inicio", "No se puede cambiar entre aplicaciones"],
            respuestaCorrecta: 1,
            explicacion: "Se puede cambiar entre aplicaciones haciendo clic en sus íconos en la barra de tareas o usando Alt + Tab."
          },
          {
            id: 5,
            pregunta: "¿Dónde se configura la personalización de la barra de tareas?",
            opciones: ["No se puede personalizar", "Clic derecho en la barra → Configuración de la barra de tareas", "Solo en el Panel de Control", "Solo reiniciando Windows"],
            respuestaCorrecta: 1,
            explicacion: "Se accede a la configuración haciendo clic derecho en un área vacía de la barra de tareas y seleccionando las opciones de configuración."
          }
        ]
      },
      '5': {
        titulo: "Evaluación - Menú de Inicio",
        descripcion: "Evalúa tus conocimientos sobre navegación y personalización del menú Inicio",
        duracion: 18,
        preguntas: [
          {
            id: 1,
            pregunta: "¿Cuáles son las principales secciones del menú Inicio?",
            opciones: ["Solo lista de programas", "Lista de aplicaciones, mosaicos y opciones de usuario", "Solo buscador", "Solo configuración"],
            respuestaCorrecta: 1,
            explicacion: "El menú Inicio incluye la lista de aplicaciones, área de mosaicos personalizables y opciones de usuario/energía."
          },
          {
            id: 2,
            pregunta: "¿Cómo se busca un programa en el menú Inicio?",
            opciones: ["Solo navegando manualmente", "Escribiendo su nombre directamente después de abrir el menú", "Solo usando el Explorador", "No se puede buscar en el menú Inicio"],
            respuestaCorrecta: 1,
            explicacion: "Al abrir el menú Inicio y comenzar a escribir, Windows busca automáticamente programas, archivos y configuraciones."
          },
          {
            id: 3,
            pregunta: "¿Qué son los mosaicos en el menú Inicio?",
            opciones: ["Elementos decorativos", "Accesos directos visuales a aplicaciones y contenido", "Archivos temporales", "Configuraciones del sistema"],
            respuestaCorrecta: 1,
            explicacion: "Los mosaicos son accesos directos visuales que pueden mostrar información dinámica de las aplicaciones (Live Tiles)."
          },
          {
            id: 4,
            pregunta: "¿Cómo se personaliza el tamaño de un mosaico?",
            opciones: ["No se puede cambiar el tamaño", "Clic derecho en el mosaico → Cambiar tamaño", "Solo arrastrando las esquinas", "Solo desde el Panel de Control"],
            respuestaCorrecta: 1,
            explicacion: "Se hace clic derecho en el mosaico y se selecciona 'Cambiar tamaño' para elegir entre las opciones disponibles."
          },
          {
            id: 5,
            pregunta: "¿Dónde están las opciones de apagado en el menú Inicio?",
            opciones: ["En la parte superior", "En la parte inferior izquierda (botón de energía)", "No están en el menú Inicio", "Solo en el centro"],
            respuestaCorrecta: 1,
            explicacion: "Las opciones de apagado, reinicio y suspensión están en el botón de energía en la parte inferior izquierda del menú Inicio."
          }
        ]
      },
      '6': {
        titulo: "Evaluación - Papelera de reciclaje",
        descripcion: "Evalúa tus conocimientos sobre la gestión de elementos eliminados",
        duracion: 12,
        preguntas: [
          {
            id: 1,
            pregunta: "¿Cuál es la función principal de la Papelera de reciclaje?",
            opciones: ["Acelerar el sistema", "Almacenar temporalmente archivos eliminados", "Limpiar virus", "Actualizar Windows"],
            respuestaCorrecta: 1,
            explicacion: "La Papelera almacena temporalmente archivos eliminados, permitiendo su recuperación antes del borrado permanente."
          },
          {
            id: 2,
            pregunta: "¿Cómo se restaura un archivo desde la Papelera?",
            opciones: ["No se puede restaurar", "Clic derecho en el archivo → Restaurar", "Solo copiando manualmente", "Reiniciando el sistema"],
            respuestaCorrecta: 1,
            explicacion: "Se hace clic derecho en el archivo dentro de la Papelera y se selecciona 'Restaurar' para devolverlo a su ubicación original."
          },
          {
            id: 3,
            pregunta: "¿Qué sucede al vaciar la Papelera de reciclaje?",
            opciones: ["Los archivos se mueven a otra carpeta", "Los archivos se eliminan permanentemente", "Los archivos se comprimen", "No pasa nada"],
            respuestaCorrecta: 1,
            explicacion: "Al vaciar la Papelera, los archivos se eliminan permanentemente del sistema y no se pueden recuperar fácilmente."
          },
          {
            id: 4,
            pregunta: "¿Cómo se puede configurar el tamaño máximo de la Papelera?",
            opciones: ["No se puede configurar", "Clic derecho en la Papelera → Propiedades", "Solo desde el Registro", "Solo reinstalando Windows"],
            respuestaCorrecta: 1,
            explicacion: "En las Propiedades de la Papelera se puede configurar el tamaño máximo y otras opciones de funcionamiento."
          },
          {
            id: 5,
            pregunta: "¿Cuándo NO van los archivos a la Papelera?",
            opciones: ["Siempre van a la Papelera", "Al usar Shift + Supr o eliminar desde unidades externas", "Solo los domingos", "Cuando el archivo es muy pequeño"],
            respuestaCorrecta: 1,
            explicacion: "Los archivos se eliminan permanentemente (sin pasar por la Papelera) al usar Shift + Supr o al eliminar desde unidades USB/externas."
          }
        ]
      },
      '7': {
        titulo: "Evaluación - Gestión de usuarios y seguridad",
        descripcion: "Evalúa tus conocimientos sobre cuentas de usuario y seguridad del sistema",
        duracion: 25,
        preguntas: [
          {
            id: 1,
            pregunta: "¿Cuál es la principal diferencia entre una cuenta Administrador y una Estándar?",
            opciones: ["No hay diferencias", "El Administrador puede instalar software y modificar configuraciones del sistema", "Solo el nombre", "La cuenta Estándar es más rápida"],
            respuestaCorrecta: 1,
            explicacion: "La cuenta Administrador tiene permisos completos para instalar software, modificar configuraciones del sistema y gestionar otros usuarios."
          },
          {
            id: 2,
            pregunta: "¿Qué es el Control Parental en Windows?",
            opciones: ["Una función decorativa", "Sistema para restringir y supervisar el uso del equipo por menores", "Un juego", "Una función solo para empresas"],
            respuestaCorrecta: 1,
            explicacion: "El Control Parental permite a los padres establecer límites de tiempo, restringir contenido y supervisar la actividad de los menores."
          },
          {
            id: 3,
            pregunta: "¿Cómo se accede a la gestión de cuentas de usuario?",
            opciones: ["Solo reiniciando", "Configuración → Cuentas o Panel de Control → Cuentas de usuario", "No es posible acceder", "Solo desde el Registro"],
            respuestaCorrecta: 1,
            explicacion: "Se puede acceder desde Configuración → Cuentas o desde el Panel de Control → Cuentas de usuario."
          },
          {
            id: 4,
            pregunta: "¿Qué son los permisos de archivos y carpetas?",
            opciones: ["Decoraciones del sistema", "Reglas que determinan quién puede acceder y modificar archivos", "Archivos temporales", "Configuraciones de red"],
            respuestaCorrecta: 1,
            explicacion: "Los permisos determinan qué usuarios pueden leer, escribir, ejecutar o modificar archivos y carpetas específicos."
          },
          {
            id: 5,
            pregunta: "¿Para qué sirve Windows Defender?",
            opciones: ["Solo para decorar", "Proteger el sistema contra virus y malware", "Acelerar internet", "Cambiar el fondo de pantalla"],
            respuestaCorrecta: 1,
            explicacion: "Windows Defender es el antivirus integrado que protege el sistema contra virus, malware y otras amenazas de seguridad."
          }
        ]
      },
      '8': {
        titulo: "Evaluación - Herramientas y utilidades",
        descripcion: "Evalúa tus conocimientos sobre las herramientas esenciales de Windows",
        duracion: 22,
        preguntas: [
          {
            id: 1,
            pregunta: "¿Cuál es la función principal de Windows Defender?",
            opciones: ["Limpiar archivos temporales", "Proteger contra virus y malware en tiempo real", "Comprimir archivos", "Gestionar usuarios"],
            respuestaCorrecta: 1,
            explicacion: "Windows Defender proporciona protección antivirus en tiempo real, escaneando archivos y detectando amenazas automáticamente."
          },
          {
            id: 2,
            pregunta: "¿Cómo se crea un archivo ZIP en Windows?",
            opciones: ["Solo con software especial", "Clic derecho en archivos → Enviar a → Carpeta comprimida", "No se puede crear ZIP nativamente", "Solo desde la línea de comandos"],
            respuestaCorrecta: 1,
            explicacion: "Windows incluye compresión ZIP nativa. Se accede haciendo clic derecho en archivos/carpetas y seleccionando 'Enviar a → Carpeta comprimida'."
          },
          {
            id: 3,
            pregunta: "¿Cuál es la forma correcta de desinstalar un programa?",
            opciones: ["Eliminar su carpeta manualmente", "Configuración → Aplicaciones → Seleccionar programa → Desinstalar", "Solo arrastrar a la Papelera", "Formatear el disco duro"],
            respuestaCorrecta: 1,
            explicacion: "La forma correcta es usar Configuración → Aplicaciones para desinstalar, lo que elimina completamente el programa y sus componentes."
          },
          {
            id: 4,
            pregunta: "¿Qué es el Panel de Control?",
            opciones: ["Un juego de Windows", "Centro tradicional de configuración del sistema", "Un programa de edición", "Una herramienta solo para programadores"],
            respuestaCorrecta: 1,
            explicacion: "El Panel de Control es el centro tradicional donde se pueden configurar diversos aspectos del sistema operativo Windows."
          },
          {
            id: 5,
            pregunta: "¿Por qué es importante el Firewall de Windows?",
            opciones: ["Solo para acelerar internet", "Para controlar el tráfico de red y bloquear amenazas", "Para cambiar fondos de pantalla", "No es importante"],
            respuestaCorrecta: 1,
            explicacion: "El Firewall es crucial para la seguridad, ya que controla qué programas pueden acceder a internet y bloquea conexiones maliciosas."
          }
        ]
      }
    }
  };

  const getPreguntas = (cursoId, temaId) => {
    return evaluacionesData[cursoId]?.[temaId] || null;
  };

  const completarQuiz = (cursoId, temaId, respuestas, tiempoTotal) => {
    const evaluacion = evaluacionesData[cursoId]?.[temaId];
    if (!evaluacion) return null;

    const respuestasCorrectas = respuestas.filter((respuesta, index) => 
      respuesta === evaluacion.preguntas[index].respuestaCorrecta
    ).length;

    const porcentaje = Math.round((respuestasCorrectas / evaluacion.preguntas.length) * 100);
    
    const resultado = {
      fecha: new Date().toISOString(),
      respuestasCorrectas,
      totalPreguntas: evaluacion.preguntas.length,
      porcentaje,
      tiempoTotal,
      aprobado: porcentaje >= 70,
      calificacion: porcentaje >= 90 ? 'Excelente' : 
                   porcentaje >= 80 ? 'Muy Bueno' : 
                   porcentaje >= 70 ? 'Bueno' : 'Necesita Mejorar'
    };

    const key = `quiz_${cursoId}_${temaId}`;
    const historial = JSON.parse(localStorage.getItem(key) || '[]');
    historial.push(resultado);
    localStorage.setItem(key, JSON.stringify(historial));

    return resultado;
  };

  const getEstadisticasQuiz = (cursoId, temaId) => {
    const key = `quiz_${cursoId}_${temaId}`;
    const historial = JSON.parse(localStorage.getItem(key) || '[]');
    
    if (historial.length === 0) return null;

    const mejorPuntuacion = Math.max(...historial.map(h => h.porcentaje));
    const promedioTiempo = historial.reduce((acc, h) => acc + h.tiempoTotal, 0) / historial.length;
    const intentos = historial.length;
    const aprobados = historial.filter(h => h.aprobado).length;

    return {
      mejorPuntuacion,
      promedioTiempo,
      intentos,
      aprobados,
      tasaAprobacion: Math.round((aprobados / intentos) * 100)
    };
  };

  const reiniciarQuiz = (cursoId, temaId) => {
    const key = `quiz_${cursoId}_${temaId}`;
    localStorage.removeItem(key);
  };

  const value = {
    evaluaciones,
    estadisticas,
    getPreguntas,
    completarQuiz,
    getEstadisticasQuiz,
    reiniciarQuiz
  };

  return (
    <EvaluacionContext.Provider value={value}>
      {children}
    </EvaluacionContext.Provider>
  );
};
