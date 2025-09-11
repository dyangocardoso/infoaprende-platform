import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useProgreso } from '../../hooks/useProgreso';
import './LeccionTema.css';
import './CursoBase.css';

// Datos de ejemplo para las lecciones
const leccionData = {
  'nociones-computador': {
    '1': {
      titulo: "Algoritmo de encendido y apagado",
      tematica: "Procedimiento básico de uso seguro",
      duracion: "15 minutos",
      pasos: [
        {
          titulo: "Paso 1: Verificar conexiones",
          contenido: "Antes de encender el computador, asegúrate de que todos los cables estén conectados correctamente.",
          icono: "fas fa-plug",
          interactivo: {
            tipo: "checklist",
            elementos: [
              "Cable de alimentación conectado",
              "Monitor conectado",
              "Teclado y ratón conectados",
              "Cables de red (si es necesario)"
            ]
          }
        },
        {
          titulo: "Paso 2: Encender el computador",
          contenido: "Presiona el botón de encendido del computador. Generalmente se encuentra en la parte frontal de la torre.",
          icono: "fas fa-power-off",
          interactivo: {
            tipo: "simulacion",
            descripcion: "Simula presionar el botón de encendido"
          }
        },
        {
          titulo: "Paso 3: Esperar el arranque",
          contenido: "El computador tardará unos segundos en arrancar. Verás la pantalla de inicio del sistema operativo.",
          interactivo: {
            tipo: "quiz",
            pregunta: "¿Qué NO debes hacer mientras el computador está arrancando?",
            opciones: [
              "Esperar pacientemente",
              "Presionar varias teclas",
              "Mover el ratón",
              "Apagar el monitor"
            ],
            respuestaCorrecta: 1
          }
        },
        {
          titulo: "Paso 4: Apagado seguro",
          contenido: "Para apagar el computador, siempre usa la opción 'Apagar' del menú de inicio. Nunca desconectes directamente.",
          interactivo: {
            tipo: "practica",
            descripcion: "Practica el procedimiento de apagado seguro"
          }
        }
      ]
    },
    '2': {
      titulo: "Elementos que componen al computador",
      tematica: "Monitor, CPU, bocinas, ratón y teclado",
      duracion: "20 minutos",
      pasos: [
        {
          titulo: "Paso 1: Identificar el Monitor",
          contenido: "El monitor es la pantalla donde ves toda la información. Aprende a identificar sus partes principales y controles básicos.",
          icono: "fas fa-desktop",
          interactivo: {
            tipo: "identificacion",
            elementos: [
              "Pantalla LCD/LED",
              "Botón de encendido",
              "Controles de brillo",
              "Puertos de conexión"
            ]
          }
        },
        {
          titulo: "Paso 2: Conocer la CPU",
          contenido: "La CPU o torre es el cerebro del computador. Identifica sus partes principales y puertos de conexión.",
          icono: "fas fa-microchip",
          interactivo: {
            tipo: "identificacion",
            elementos: [
              "Botón de encendido",
              "Puertos USB",
              "Puerto de audio",
              "Puerto de red"
            ]
          }
        },
        {
          titulo: "Paso 3: Configurar las Bocinas",
          contenido: "Las bocinas permiten escuchar el audio del computador. Aprende a conectarlas y configurarlas correctamente.",
          audio: "/audio/test-sound.mp3",
          interactivo: {
            tipo: "configuracion",
            descripcion: "Configura el audio del sistema",
            elementos: [
              "Conectar a puerto de audio verde",
              "Ajustar volumen de Windows",
              "Probar sonido del sistema"
            ]
          }
        },
        {
          titulo: "Paso 4: Familiarizarse con el Ratón",
          contenido: "El ratón es tu herramienta principal de navegación. Conoce sus botones y funciones básicas.",
          interactivo: {
            tipo: "practica-raton",
            descripcion: "Practica los diferentes tipos de clic",
            actividades: [
              "Clic izquierdo: seleccionar",
              "Clic derecho: menú contextual",
              "Doble clic: abrir programas",
              "Rueda: desplazarse"
            ]
          }
        },
        {
          titulo: "Paso 5: Explorar el Teclado",
          contenido: "El teclado permite escribir y dar comandos al computador. Identifica las teclas más importantes.",
          interactivo: {
            tipo: "teclado-virtual",
            descripcion: "Identifica las teclas principales",
            zonas: [
              "Teclas alfabéticas (A-Z)",
              "Teclas numéricas (0-9)",
              "Teclas especiales (Enter, Espacio, Shift)",
              "Teclas de función (F1-F12)"
            ]
          }
        }
      ]
    },
    '3': {
      titulo: "Manejo del ratón",
      tematica: "Uso correcto y movimiento del cursor",
      duracion: "18 minutos",
      pasos: [
        {
          titulo: "Paso 1: Postura Correcta",
          contenido: "Aprende la posición correcta de la mano y el brazo para usar el ratón sin fatiga ni lesiones.",
          icono: "fas fa-hand-pointer",
          interactivo: {
            tipo: "postura",
            descripcion: "Ajusta tu postura según las recomendaciones",
            tips: [
              "Mano relajada sobre el ratón",
              "Muñeca recta y apoyada",
              "Brazo paralelo al escritorio",
              "Hombros relajados"
            ]
          }
        },
        {
          titulo: "Paso 2: Tipos de Clic",
          contenido: "Domina los diferentes tipos de clic y cuándo usar cada uno.",
          interactivo: {
            tipo: "practica-clics",
            descripcion: "Practica cada tipo de clic",
            clics: [
              "Clic simple: seleccionar elemento",
              "Doble clic: abrir archivo o programa",
              "Clic derecho: mostrar menú contextual",
              "Clic prolongado: arrastrar elemento"
            ]
          }
        },
        {
          titulo: "Paso 3: Movimiento del Cursor",
          contenido: "Desarrolla precisión en el movimiento del cursor para una navegación eficiente.",
          interactivo: {
            tipo: "precision",
            descripcion: "Ejercicios de precisión del cursor",
            ejercicios: [
              "Seguir líneas rectas",
              "Trazar círculos",
              "Apuntar a objetivos pequeños",
              "Movimiento suave y controlado"
            ]
          }
        },
        {
          titulo: "Paso 4: Arrastrar y Soltar",
          contenido: "Aprende la técnica de arrastrar y soltar para mover elementos en la pantalla.",
          interactivo: {
            tipo: "arrastrar-soltar",
            descripcion: "Practica arrastrar y soltar elementos",
            actividades: [
              "Seleccionar objeto",
              "Mantener presionado el botón",
              "Mover a la nueva posición",
              "Soltar el botón del ratón"
            ]
          }
        },
        {
          titulo: "Paso 5: Uso de la Rueda",
          contenido: "La rueda del ratón te permite desplazarte rápidamente por documentos y páginas web.",
          interactivo: {
            tipo: "rueda-scroll",
            descripcion: "Practica el desplazamiento con la rueda",
            tecnicas: [
              "Rodar hacia arriba para subir",
              "Rodar hacia abajo para bajar",
              "Clic en la rueda para desplazamiento automático",
              "Control de velocidad de desplazamiento"
            ]
          }
        },
        {
          titulo: "Paso 6: Ejercicios de Coordinación",
          contenido: "Combina todos los movimientos aprendidos en ejercicios que mejoran tu coordinación mano-cursor.",
          interactivo: {
            tipo: "coordinacion-avanzada",
            descripcion: "Completa ejercicios que combinan diferentes habilidades",
            desafios: [
              "Laberinto con el cursor",
              "Juego de precisión",
              "Selección rápida de objetivos",
              "Prueba de velocidad de clic"
            ]
          }
        }
      ]
    }
  },
  'intro-informatica': {
    '1': {
      titulo: "Evolución histórica",
      tematica: "Hitos de la era digital",
      duracion: "25 minutos",
      pasos: [
        {
          titulo: "Paso 1: Los primeros cálculos mecánicos",
          contenido: "Descubre los primeros dispositivos de cálculo como el ábaco, la pascalina de Blaise Pascal (1642) y la máquina de Leibniz (1673).",
          icono: "fas fa-calculator",
          interactivo: {
            tipo: "timeline",
            eventos: [
              { año: "3000 a.C.", evento: "Ábaco en Mesopotamia" },
              { año: "1642", evento: "Pascalina de Blaise Pascal" },
              { año: "1673", evento: "Máquina de Leibniz" },
              { año: "1801", evento: "Telar de Jacquard con tarjetas perforadas" }
            ]
          }
        },
        {
          titulo: "Paso 2: La era de las máquinas electromecánicas",
          contenido: "Conoce la máquina analítica de Charles Babbage (1837) y las contribuciones de Ada Lovelace, considerada la primera programadora.",
          icono: "fas fa-cogs",
          interactivo: {
            tipo: "biografia",
            personajes: [
              { nombre: "Charles Babbage", contribucion: "Máquina analítica - primer diseño de computadora" },
              { nombre: "Ada Lovelace", contribucion: "Primer algoritmo para ser procesado por máquina" },
              { nombre: "Herman Hollerith", contribucion: "Máquinas tabuladoras para censo de 1890" }
            ]
          }
        },
        {
          titulo: "Paso 3: Los pioneros de la computación moderna",
          contenido: "Explora los trabajos de Alan Turing, John von Neumann y las primeras computadoras como ENIAC y UNIVAC.",
          icono: "fas fa-laptop-code",
          interactivo: {
            tipo: "computadoras-historicas",
            maquinas: [
              { nombre: "ENIAC", año: "1946", caracteristica: "Primera computadora electrónica de propósito general" },
              { nombre: "UNIVAC I", año: "1951", caracteristica: "Primera computadora comercial en EE.UU." },
              { nombre: "IBM 701", año: "1952", caracteristica: "Primera computadora científica de IBM" }
            ]
          }
        },
        {
          titulo: "Paso 4: La revolución del microprocesador",
          contenido: "Descubre cómo Intel 4004 (1971) cambió la historia y el nacimiento de las computadoras personales.",
          icono: "fas fa-microchip",
          interactivo: {
            tipo: "evolucion-procesadores",
            procesadores: [
              { modelo: "Intel 4004", año: "1971", transistores: "2,300" },
              { modelo: "Intel 8008", año: "1972", transistores: "3,500" },
              { modelo: "Intel 8080", año: "1974", transistores: "6,000" },
              { modelo: "Intel 8086", año: "1978", transistores: "29,000" }
            ]
          }
        }
      ]
    },
    '2': {
      titulo: "Fundamentos y conceptos",
      tematica: "Informática, sistemas, computación, datos e información",
      duracion: "30 minutos",
      pasos: [
        {
          titulo: "Paso 1: ¿Qué es la Informática?",
          contenido: "La informática es la ciencia que estudia el tratamiento automático de la información mediante computadoras. Combina aspectos teóricos y prácticos.",
          icono: "fas fa-laptop",
          interactivo: {
            tipo: "definiciones",
            conceptos: [
              { termino: "Informática", definicion: "Ciencia del tratamiento automático de la información" },
              { termino: "Computación", definicion: "Proceso de usar computadoras para resolver problemas" },
              { termino: "Algoritmo", definicion: "Secuencia de pasos para resolver un problema" }
            ]
          }
        },
        {
          titulo: "Paso 2: Sistemas de Información",
          contenido: "Un sistema de información es un conjunto de elementos interrelacionados que recogen, procesan, almacenan y distribuyen información.",
          icono: "fas fa-sitemap",
          interactivo: {
            tipo: "componentes-sistema",
            elementos: [
              { componente: "Hardware", descripcion: "Equipos físicos del sistema" },
              { componente: "Software", descripcion: "Programas y aplicaciones" },
              { componente: "Datos", descripcion: "Información a procesar" },
              { componente: "Personas", descripcion: "Usuarios del sistema" },
              { componente: "Procedimientos", descripcion: "Métodos de trabajo" }
            ]
          }
        },
        {
          titulo: "Paso 3: Datos vs Información",
          contenido: "Los datos son hechos crudos sin procesar. La información son datos procesados, organizados y con significado.",
          icono: "fas fa-exchange-alt",
          interactivo: {
            tipo: "comparacion",
            ejemplos: [
              { dato: "25, 30, 28, 32", informacion: "Temperatura promedio: 28.75°C" },
              { dato: "Juan, María, Pedro", informacion: "Lista de estudiantes del curso" },
              { dato: "100, 200, 150", informacion: "Ventas totales: $450" }
            ]
          }
        },
        {
          titulo: "Paso 4: Procesamiento de la Información",
          contenido: "El ciclo básico: Entrada (Input) → Procesamiento → Salida (Output). El computador transforma datos en información útil.",
          icono: "fas fa-sync-alt",
          interactivo: {
            tipo: "ciclo-procesamiento",
            fases: [
              { fase: "Entrada", ejemplo: "Teclado, ratón, micrófono", icono: "fas fa-sign-in-alt" },
              { fase: "Procesamiento", ejemplo: "CPU ejecuta instrucciones", icono: "fas fa-cogs" },
              { fase: "Salida", ejemplo: "Monitor, impresora, altavoces", icono: "fas fa-sign-out-alt" },
              { fase: "Almacenamiento", ejemplo: "Disco duro, memoria", icono: "fas fa-save" }
            ]
          }
        }
      ]
    },
    '3': {
      titulo: "Unidades de medida y almacenamiento",
      tematica: "Conversión y aplicación práctica",
      duracion: "25 minutos",
      pasos: [
        {
          titulo: "Paso 1: El sistema binario y el bit",
          contenido: "El bit (binary digit) es la unidad mínima de información. Puede ser 0 o 1. Es la base de toda la información digital.",
          icono: "fas fa-toggle-on",
          interactivo: {
            tipo: "binario",
            ejercicios: [
              { decimal: "5", binario: "101" },
              { decimal: "10", binario: "1010" },
              { decimal: "15", binario: "1111" }
            ]
          }
        },
        {
          titulo: "Paso 2: Del bit al byte",
          contenido: "8 bits forman 1 byte. Un byte puede representar 256 valores diferentes (2^8). Es suficiente para almacenar un carácter.",
          icono: "fas fa-font",
          interactivo: {
            tipo: "caracteres",
            ejemplos: [
              { caracter: "A", ascii: "65", binario: "01000001" },
              { caracter: "a", ascii: "97", binario: "01100001" },
              { caracter: "0", ascii: "48", binario: "00110000" }
            ]
          }
        },
        {
          titulo: "Paso 3: Múltiplos del byte",
          contenido: "Las unidades crecen exponencialmente: KB (kilobyte), MB (megabyte), GB (gigabyte), TB (terabyte).",
          icono: "fas fa-layer-group",
          interactivo: {
            tipo: "conversiones",
            unidades: [
              { unidad: "1 Byte", equivale: "8 bits" },
              { unidad: "1 KB", equivale: "1,024 bytes" },
              { unidad: "1 MB", equivale: "1,024 KB" },
              { unidad: "1 GB", equivale: "1,024 MB" },
              { unidad: "1 TB", equivale: "1,024 GB" }
            ]
          }
        },
        {
          titulo: "Paso 4: Aplicaciones prácticas",
          contenido: "Aprende a calcular el espacio que ocupan diferentes tipos de archivos y dispositivos de almacenamiento.",
          icono: "fas fa-file-alt",
          interactivo: {
            tipo: "calculos-practicos",
            ejemplos: [
              { archivo: "Canción MP3 (3 min)", tamaño: "3-4 MB" },
              { archivo: "Foto digital", tamaño: "2-5 MB" },
              { archivo: "Video HD (1 hora)", tamaño: "1-3 GB" },
              { archivo: "Sistema operativo", tamaño: "4-8 GB" }
            ]
          }
        }
      ]
    },
    '4': {
      titulo: "Hardware",
      tematica: "Clasificación por función: entrada, salida, procesamiento, almacenamiento, mixtos",
      duracion: "35 minutos",
      pasos: [
        {
          titulo: "Paso 1: Dispositivos de entrada",
          contenido: "Permiten introducir datos al computador. Son la interfaz entre el usuario y el sistema.",
          icono: "fas fa-keyboard",
          interactivo: {
            tipo: "clasificacion-dispositivos",
            dispositivos: [
              { nombre: "Teclado", funcion: "Entrada de texto y comandos" },
              { nombre: "Ratón", funcion: "Navegación y selección" },
              { nombre: "Micrófono", funcion: "Entrada de audio" },
              { nombre: "Cámara web", funcion: "Captura de video" },
              { nombre: "Escáner", funcion: "Digitalización de documentos" }
            ]
          }
        },
        {
          titulo: "Paso 2: Dispositivos de salida",
          contenido: "Presentan información procesada al usuario en forma comprensible (visual, auditiva, táctil).",
          icono: "fas fa-desktop",
          interactivo: {
            tipo: "tipos-salida",
            dispositivos: [
              { nombre: "Monitor", tipo: "Visual", ejemplo: "Texto, imágenes, videos" },
              { nombre: "Impresora", tipo: "Visual/Físico", ejemplo: "Documentos en papel" },
              { nombre: "Altavoces", tipo: "Auditivo", ejemplo: "Música, sonidos, voz" },
              { nombre: "Auriculares", tipo: "Auditivo", ejemplo: "Audio personal" }
            ]
          }
        },
        {
          titulo: "Paso 3: Dispositivos de procesamiento",
          contenido: "Ejecutan las instrucciones y procesan los datos. El CPU es el componente principal.",
          icono: "fas fa-microchip",
          interactivo: {
            tipo: "componentes-procesamiento",
            elementos: [
              { componente: "CPU", funcion: "Unidad central de procesamiento" },
              { componente: "GPU", funcion: "Procesamiento gráfico" },
              { componente: "Coprocesador", funcion: "Tareas especializadas" },
              { componente: "Chipset", funcion: "Controladores del sistema" }
            ]
          }
        },
        {
          titulo: "Paso 4: Dispositivos de almacenamiento",
          contenido: "Guardan datos e información de forma temporal o permanente.",
          icono: "fas fa-hdd",
          interactivo: {
            tipo: "tipos-almacenamiento",
            dispositivos: [
              { tipo: "Primario", ejemplo: "RAM", caracteristica: "Volátil, rápido" },
              { tipo: "Secundario", ejemplo: "Disco duro", caracteristica: "Permanente, medio" },
              { tipo: "Terciario", ejemplo: "DVD, USB", caracteristica: "Portable, lento" },
              { tipo: "Nube", ejemplo: "Google Drive", caracteristica: "Remoto, accesible" }
            ]
          }
        },
        {
          titulo: "Paso 5: Dispositivos mixtos",
          contenido: "Combinan funciones de entrada y salida, proporcionando interacción bidireccional.",
          icono: "fas fa-exchange-alt",
          interactivo: {
            tipo: "dispositivos-mixtos",
            ejemplos: [
              { dispositivo: "Pantalla táctil", entrada: "Toque", salida: "Visual" },
              { dispositivo: "Impresora multifunción", entrada: "Escaneado", salida: "Impresión" },
              { dispositivo: "Módem", entrada: "Datos", salida: "Señal de red" },
              { dispositivo: "Tarjeta de red", entrada: "Red", salida: "Datos al sistema" }
            ]
          }
        }
      ]
    },
    '5': {
      titulo: "Software",
      tematica: "Clasificación, distribución y licencias",
      duracion: "30 minutos",
      pasos: [
        {
          titulo: "Paso 1: ¿Qué es el software?",
          contenido: "El software es el conjunto de programas, instrucciones y documentación que realiza tareas en un sistema computacional.",
          icono: "fas fa-code",
          interactivo: {
            tipo: "conceptos-software",
            elementos: [
              { elemento: "Programas", descripcion: "Secuencias de instrucciones" },
              { elemento: "Datos", descripcion: "Información procesada" },
              { elemento: "Documentación", descripcion: "Manuales y guías" },
              { elemento: "Configuración", descripcion: "Ajustes del sistema" }
            ]
          }
        },
        {
          titulo: "Paso 2: Software de sistema",
          contenido: "Controla y coordina las operaciones del computador. Incluye el sistema operativo, controladores y utilidades.",
          icono: "fas fa-cog",
          interactivo: {
            tipo: "software-sistema",
            categorias: [
              { tipo: "Sistema Operativo", ejemplos: "Windows, macOS, Linux", funcion: "Gestión del hardware" },
              { tipo: "Controladores", ejemplos: "Driver de impresora, GPU", funcion: "Comunicación con hardware" },
              { tipo: "Utilidades", ejemplos: "Antivirus, desfragmentador", funcion: "Mantenimiento del sistema" }
            ]
          }
        },
        {
          titulo: "Paso 3: Software de aplicación",
          contenido: "Programas diseñados para que el usuario realice tareas específicas como trabajar, estudiar o entretenerse.",
          icono: "fas fa-desktop",
          interactivo: {
            tipo: "software-aplicacion",
            categorias: [
              { categoria: "Ofimática", ejemplos: "Word, Excel, PowerPoint" },
              { categoria: "Multimedia", ejemplos: "Photoshop, VLC, Audacity" },
              { categoria: "Navegadores", ejemplos: "Chrome, Firefox, Safari" },
              { categoria: "Juegos", ejemplos: "Minecraft, Fortnite" }
            ]
          }
        },
        {
          titulo: "Paso 4: Software de programación",
          contenido: "Herramientas para crear otros programas. Incluye editores, compiladores, depuradores e IDEs.",
          icono: "fas fa-laptop-code",
          interactivo: {
            tipo: "herramientas-programacion",
            herramientas: [
              { herramienta: "Editor de código", ejemplo: "Visual Studio Code", uso: "Escribir código" },
              { herramienta: "Compilador", ejemplo: "GCC, Javac", uso: "Traducir código" },
              { herramienta: "Depurador", ejemplo: "GDB, Chrome DevTools", uso: "Encontrar errores" },
              { herramienta: "IDE", ejemplo: "IntelliJ, Eclipse", uso: "Ambiente completo" }
            ]
          }
        },
        {
          titulo: "Paso 5: Licencias de software",
          contenido: "Marcos legales que definen cómo se puede usar, modificar y distribuir el software.",
          icono: "fas fa-balance-scale",
          interactivo: {
            tipo: "tipos-licencias",
            licencias: [
              { tipo: "Propietario", características: "Código cerrado, licencia comercial", ejemplo: "Windows, Photoshop" },
              { tipo: "Libre", características: "Código abierto, libertades garantizadas", ejemplo: "Linux, LibreOffice" },
              { tipo: "Shareware", características: "Prueba limitada, compra posterior", ejemplo: "WinRAR" },
              { tipo: "Freeware", características: "Gratis pero código cerrado", ejemplo: "Skype, Chrome" }
            ]
          }
        }
      ]
    },
    '6': {
      titulo: "Placa base y dispositivos de procesamiento",
      tematica: "Arquitectura y funciones",
      duracion: "40 minutos",
      pasos: [
        {
          titulo: "Paso 1: La placa base (motherboard)",
          contenido: "Es el circuito principal que conecta todos los componentes del computador. Determina qué componentes son compatibles.",
          icono: "fas fa-memory",
          interactivo: {
            tipo: "componentes-placa",
            elementos: [
              { componente: "Socket CPU", funcion: "Conexión del procesador" },
              { componente: "Slots RAM", funcion: "Conexión de memoria" },
              { componente: "Slots expansión", funcion: "Tarjetas adicionales" },
              { componente: "Conectores SATA", funcion: "Discos duros/SSD" },
              { componente: "Puertos I/O", funcion: "Dispositivos externos" }
            ]
          }
        },
        {
          titulo: "Paso 2: El procesador (CPU)",
          contenido: "Unidad Central de Procesamiento. Ejecuta instrucciones y realiza cálculos. Su velocidad se mide en GHz.",
          icono: "fas fa-microchip",
          interactivo: {
            tipo: "arquitectura-cpu",
            componentes: [
              { parte: "Unidad de Control", funcion: "Coordina operaciones" },
              { parte: "ALU", funcion: "Operaciones aritméticas y lógicas" },
              { parte: "Registros", funcion: "Almacenamiento temporal" },
              { parte: "Caché", funcion: "Memoria ultra-rápida" }
            ]
          }
        },
        {
          titulo: "Paso 3: Memoria RAM",
          contenido: "Memoria de Acceso Aleatorio. Almacena datos e instrucciones que el CPU necesita inmediatamente. Es volátil.",
          icono: "fas fa-memory",
          interactivo: {
            tipo: "tipos-memoria",
            memorias: [
              { tipo: "DDR3", velocidad: "800-2133 MHz", año: "2007" },
              { tipo: "DDR4", velocidad: "2133-3200 MHz", año: "2014" },
              { tipo: "DDR5", velocidad: "4800-6400 MHz", año: "2020" }
            ]
          }
        },
        {
          titulo: "Paso 4: Chipset y buses",
          contenido: "El chipset coordina la comunicación entre componentes. Los buses son las 'carreteras' por donde viajan los datos.",
          icono: "fas fa-route",
          interactivo: {
            tipo: "sistema-buses",
            buses: [
              { bus: "Bus de datos", funcion: "Transporta información", ancho: "32/64 bits" },
              { bus: "Bus de direcciones", funcion: "Indica ubicaciones", ancho: "Determina RAM máxima" },
              { bus: "Bus de control", funcion: "Señales de coordinación", ejemplos: "R/W, Clock" }
            ]
          }
        },
        {
          titulo: "Paso 5: Arquitectura de von Neumann",
          contenido: "Modelo fundamental donde datos e instrucciones comparten el mismo espacio de memoria y bus.",
          icono: "fas fa-project-diagram",
          interactivo: {
            tipo: "modelo-von-neumann",
            componentes: [
              { elemento: "Unidad de Procesamiento", descripcion: "CPU con ALU y registros" },
              { elemento: "Unidad de Control", descripcion: "Coordina ejecución" },
              { elemento: "Memoria", descripcion: "Almacena datos e instrucciones" },
              { elemento: "Dispositivos E/S", descripcion: "Entrada y salida de datos" }
            ]
          }
        }
      ]
    },
    '7': {
      titulo: "Memoria y almacenamiento",
      tematica: "Tipos y tecnologías",
      duracion: "35 minutos",
      pasos: [
        {
          titulo: "Paso 1: Jerarquía de memoria",
          contenido: "Las memorias se organizan en niveles: más cerca del CPU = más rápida pero más cara y pequeña.",
          icono: "fas fa-layer-group",
          interactivo: {
            tipo: "piramide-memoria",
            niveles: [
              { nivel: "Registros CPU", velocidad: "1 ciclo", tamaño: "Bytes", costo: "Muy alto" },
              { nivel: "Caché L1/L2/L3", velocidad: "2-50 ciclos", tamaño: "KB-MB", costo: "Alto" },
              { nivel: "RAM", velocidad: "100-300 ciclos", tamaño: "GB", costo: "Medio" },
              { nivel: "Almacenamiento", velocidad: "Millones ciclos", tamaño: "TB", costo: "Bajo" }
            ]
          }
        },
        {
          titulo: "Paso 2: Memoria principal (RAM)",
          contenido: "Memoria volátil de acceso aleatorio. Almacena temporalmente programas y datos en uso.",
          icono: "fas fa-memory",
          interactivo: {
            tipo: "caracteristicas-ram",
            propiedades: [
              { propiedad: "Volátil", descripcion: "Se pierde al apagar el equipo" },
              { propiedad: "Acceso aleatorio", descripcion: "Cualquier posición en igual tiempo" },
              { propiedad: "Rápida", descripcion: "Nanosegundos de acceso" },
              { propiedad: "Cara", descripcion: "Por bit más costosa que almacenamiento" }
            ]
          }
        },
        {
          titulo: "Paso 3: Almacenamiento magnético",
          contenido: "Discos duros (HDD) que usan magnetismo para guardar datos. Más lentos pero con gran capacidad.",
          icono: "fas fa-hdd",
          interactivo: {
            tipo: "funcionamiento-hdd",
            componentes: [
              { parte: "Platos", descripcion: "Discos magnéticos giratorios" },
              { parte: "Cabezas", descripcion: "Leen/escriben datos magnéticamente" },
              { parte: "Brazo", descripcion: "Mueve cabezas sobre platos" },
              { parte: "Motor", descripcion: "Hace girar platos (5400-15000 RPM)" }
            ]
          }
        },
        {
          titulo: "Paso 4: Almacenamiento sólido (SSD)",
          contenido: "Usan memoria flash (sin partes móviles). Más rápidos, silenciosos y resistentes que los HDD.",
          icono: "fas fa-microchip",
          interactivo: {
            tipo: "comparacion-hdd-ssd",
            comparacion: [
              { aspecto: "Velocidad", hdd: "80-160 MB/s", ssd: "200-3500 MB/s" },
              { aspecto: "Consumo", hdd: "6-15W", ssd: "2-5W" },
              { aspecto: "Ruido", hdd: "Audible", ssd: "Silencioso" },
              { aspecto: "Durabilidad", hdd: "Frágil (partes móviles)", ssd: "Resistente" },
              { aspecto: "Precio/GB", hdd: "Menor", ssd: "Mayor" }
            ]
          }
        },
        {
          titulo: "Paso 5: Almacenamiento óptico y portátil",
          contenido: "CD, DVD, Blu-ray usan láser para leer datos. Memorias USB y tarjetas SD ofrecen portabilidad.",
          icono: "fas fa-compact-disc",
          interactivo: {
            tipo: "medios-almacenamiento",
            medios: [
              { medio: "CD", capacidad: "700 MB", uso: "Audio, software básico" },
              { medio: "DVD", capacidad: "4.7-8.5 GB", uso: "Video, software" },
              { medio: "Blu-ray", capacidad: "25-128 GB", uso: "Video HD, backups" },
              { medio: "USB", capacidad: "1 GB - 1 TB", uso: "Transporte de datos" },
              { medio: "Tarjeta SD", capacidad: "1 GB - 1 TB", uso: "Dispositivos móviles" }
            ]
          }
        }
      ]
    }
  }
};

export default function LeccionTema() {
  const { cursoId, temaId } = useParams();
  const [currentStep, setCurrentStep] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [error, setError] = useState(null);
  const { completarLeccion, agregarTiempoEstudio, isLeccionCompletada } = useProgreso();
  
  // Debug: logging de parámetros recibidos
  console.log('🎓 LeccionTema cargada con parámetros:', { cursoId, temaId });
  console.log('🔍 Datos disponibles en leccionData:', Object.keys(leccionData));
  console.log('🎯 Curso específico disponible:', !!leccionData[cursoId]);
  if (leccionData[cursoId]) {
    console.log('📚 Temas disponibles en el curso:', Object.keys(leccionData[cursoId]));
  }
  
  // Validar parámetros al cargar el componente
  useEffect(() => {
    if (!cursoId || !temaId) {
      setError('Parámetros de curso o tema no válidos');
      return;
    }
    
    // Convertir temaId a número para validación
    const temaNumero = parseInt(temaId);
    if (isNaN(temaNumero) || temaNumero < 1) {
      setError('ID de tema no válido');
      return;
    }
    
    // Verificar que el curso existe en los datos
    if (!leccionData[cursoId]) {
      setError(`Curso "${cursoId}" no encontrado`);
      return;
    }
    
    // Verificar que el tema existe en el curso
    if (!leccionData[cursoId][temaId]) {
      setError(`Tema ${temaId} no encontrado en el curso ${cursoId}`);
      return;
    }
    
    // Si todo está bien, inicializar tiempo
    setStartTime(Date.now());
    setError(null);
  }, [cursoId, temaId]);
  
  // Función para completar la lección
  const handleCompletarLeccion = () => {
    if (!isLeccionCompletada(cursoId, temaId)) {
      // Calcular tiempo de estudio
      const tiempoEstudio = startTime ? Math.round((Date.now() - startTime) / 60000) : 15; // default 15 min
      
      // Completar lección y agregar tiempo
      completarLeccion(cursoId, temaId, 20); // 20 puntos por lección
      agregarTiempoEstudio(tiempoEstudio);
      
      // Mostrar notificación de logro
      alert(`¡Felicidades! Has completado la lección y ganado 20 puntos. Tiempo de estudio: ${tiempoEstudio} minutos.`);
    }
  };

  const cursoTitulos = {
    'nociones-computador': 'Nociones generales del computador'
  };

  // Manejar casos de error
  if (error) {
    return (
      <div className="leccion-container">
        <div className="error-message" style={{
          textAlign: 'center',
          padding: '40px',
          backgroundColor: '#f8d7da',
          border: '1px solid #f5c6cb',
          borderRadius: '8px',
          color: '#721c24',
          margin: '20px'
        }}>
          <h2>⚠️ Error</h2>
          <p>{error}</p>
          <Link to="/" style={{
            display: 'inline-block',
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px'
          }}>
            🏠 Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  const leccion = leccionData[cursoId]?.[temaId];
  const cursoTitulo = cursoTitulos[cursoId];

  if (!leccion) {
    return (
      <div className="leccion-container">
        <div className="error-message">
          <h2>Lección no encontrada</h2>
          <Link to="/">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  const handleNextStep = () => {
    if (currentStep < leccion.pasos.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentPaso = leccion.pasos[currentStep];

  return (
    <div className="leccion-container">
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link to="/">🏠 Inicio</Link>
        <span> / </span>
        <Link to={`/curso/${cursoId}`}>{cursoTitulo}</Link>
        <span> / </span>
        <span>Tema {temaId}: {leccion.titulo}</span>
      </nav>

      {/* Header de la lección */}
      <header className="leccion-header">
        <div className="leccion-meta">
          <span className="tema-badge">Tema {temaId}</span>
          <span className="duracion">⏱️ {leccion.duracion}</span>
        </div>
        <h1>{leccion.titulo}</h1>
        <p className="leccion-subtitulo">{leccion.tematica}</p>
        
        {/* Barra de progreso */}
        <div className="progreso-leccion">
          <div className="progreso-bar">
            <div 
              className="progreso-fill" 
              style={{width: `${((currentStep + 1) / leccion.pasos.length) * 100}%`}}
            ></div>
          </div>
          <span className="progreso-texto">
            Paso {currentStep + 1} de {leccion.pasos.length}
          </span>
        </div>
      </header>

      {/* Contenido del paso actual */}
      <div className="paso-container">
        <div className="paso-content">
          <h2>{currentPaso.titulo}</h2>
          <p>{currentPaso.contenido}</p>
          
          {/* Icono del paso */}
          {currentPaso.icono && (
            <div className="paso-icono">
              <i className={currentPaso.icono}></i>
            </div>
          )}
          
          {/* Imagen del paso (fallback para imágenes reales) */}
          {currentPaso.imagen && (
            <div className="paso-imagen">
              <img src={currentPaso.imagen} alt={currentPaso.titulo} />
            </div>
          )}
          
          {/* Video del paso */}
          {currentPaso.video && (
            <div className="paso-video">
              <video controls>
                <source src={currentPaso.video} type="video/mp4" />
                Tu navegador no soporta video HTML5.
              </video>
            </div>
          )}
          
          {/* Audio del paso */}
          {currentPaso.audio && (
            <div className="paso-audio">
              <audio controls>
                <source src={currentPaso.audio} type="audio/mpeg" />
                Tu navegador no soporta audio HTML5.
              </audio>
            </div>
          )}
          
          {/* Elementos interactivos */}
          {currentPaso.interactivo && (
            <div className="elemento-interactivo">
              {currentPaso.interactivo.tipo === 'checklist' && (
                <div className="checklist">
                  <h4>✅ Lista de verificación:</h4>
                  <div className="checklist-items">
                    {currentPaso.interactivo.elementos.map((elemento, index) => (
                      <label key={index} className="checklist-item">
                        <input type="checkbox" />
                        <span>{elemento}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
              
              {currentPaso.interactivo.tipo === 'identificacion' && (
                <div className="identificacion">
                  <h4>🔍 Identifica los elementos:</h4>
                  <div className="elementos-list">
                    {currentPaso.interactivo.elementos.map((elemento, index) => (
                      <div key={index} className="elemento-item">
                        {elemento}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {currentPaso.interactivo.tipo === 'quiz' && (
                <div className="quiz">
                  <h4>❓ Pregunta:</h4>
                  <p>{currentPaso.interactivo.pregunta}</p>
                  <div className="quiz-opciones">
                    {currentPaso.interactivo.opciones.map((opcion, index) => (
                      <button key={index} className="quiz-opcion">
                        {opcion}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {currentPaso.interactivo.tipo === 'simulacion' && (
                <div className="simulacion">
                  <h4>🖱️ Simulación:</h4>
                  <p>{currentPaso.interactivo.descripcion}</p>
                  <button className="btn-simulacion">Iniciar Simulación</button>
                </div>
              )}
              
              {currentPaso.interactivo.tipo === 'practica' && (
                <div className="practica">
                  <h4>🎯 Práctica:</h4>
                  <p>{currentPaso.interactivo.descripcion}</p>
                  <button className="btn-practica">Comenzar Práctica</button>
                </div>
              )}

              {/* Elementos interactivos adicionales para otros tipos */}
              {(currentPaso.interactivo.actividades || currentPaso.interactivo.zonas || 
                currentPaso.interactivo.tips || currentPaso.interactivo.ejercicios) && (
                <div className="actividades">
                  <h4>📋 Actividades:</h4>
                  <ul>
                    {(currentPaso.interactivo.actividades || 
                      currentPaso.interactivo.zonas || 
                      currentPaso.interactivo.tips || 
                      currentPaso.interactivo.ejercicios || 
                      currentPaso.interactivo.tecnicas ||
                      currentPaso.interactivo.desafios || 
                      currentPaso.interactivo.clics)?.map((actividad, index) => (
                      <li key={index}>{actividad}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Navegación de pasos */}
      <div className="navegacion-pasos">
        <button 
          className="btn btn-outline" 
          onClick={handlePrevStep}
          disabled={currentStep === 0}
        >
          <i className="fas fa-chevron-left"></i> Anterior
        </button>
        
        <div className="pasos-indicator">
          {leccion.pasos.map((_, index) => (
            <button 
              key={index}
              className={`paso-dot ${index === currentStep ? 'active' : ''} ${index < currentStep ? 'completed' : ''}`}
              onClick={() => setCurrentStep(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        
        {currentStep < leccion.pasos.length - 1 ? (
          <button 
            className="btn btn-primary" 
            onClick={handleNextStep}
          >
            Siguiente <i className="fas fa-chevron-right"></i>
          </button>
        ) : (
          <Link to={`/curso/${cursoId}`}>
            <button 
              className="btn btn-success"
              onClick={handleCompletarLeccion}
            >
              <i className="fas fa-check"></i> Completar Lección
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
