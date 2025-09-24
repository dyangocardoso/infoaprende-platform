/**
 * Constantes y configuraciones para el sistema de contenido
 */

// Tipos de actividades disponibles
export const TIPOS_ACTIVIDAD = {
  REFLEXION: 'reflexion',
  IDENTIFICACION: 'identificacion', 
  PRACTICA: 'practica',
  INVESTIGACION: 'investigacion'
};

// Tipos de recursos disponibles
export const TIPOS_RECURSO = {
  DOCUMENTO: 'documento',
  ENLACE: 'enlace',
  VIDEO: 'video',
  AUDIO: 'audio'
};

// Tipos de multimedia
export const TIPOS_MULTIMEDIA = {
  IMAGEN: 'imagen',
  VIDEO: 'video',
  INFOGRAFIA: 'infografia',
  AUDIO: 'audio'
};

// Tipos de evaluación
export const TIPOS_EVALUACION = {
  CUESTIONARIO: 'cuestionario',
  PRACTICA: 'practica',
  PROYECTO: 'proyecto'
};

// Tipos de pregunta
export const TIPOS_PREGUNTA = {
  OPCION_MULTIPLE: 'opcion_multiple',
  VERDADERO_FALSO: 'verdadero_falso',
  COMPLETAR: 'completar',
  DESARROLLO: 'desarrollo'
};

// Niveles de dificultad
export const NIVELES_DIFICULTAD = {
  PRINCIPIANTE: 'Principiante',
  INTERMEDIO: 'Intermedio',
  AVANZADO: 'Avanzado'
};

// Categorías de cursos
export const CATEGORIAS_CURSO = {
  FUNDAMENTOS: 'Fundamentos',
  SISTEMAS_OPERATIVOS: 'Sistemas Operativos',
  APLICACIONES: 'Aplicaciones',
  INTERNET: 'Internet y Web',
  MULTIMEDIA: 'Multimedia',
  PROGRAMACION: 'Programación',
  SEGURIDAD: 'Seguridad'
};

// Estados de contenido
export const ESTADOS_CONTENIDO = {
  BORRADOR: 'borrador',
  REVISION: 'revision',
  ACTIVO: 'activo',
  ARCHIVADO: 'archivado'
};

// Configuración de puntuación
export const PUNTUACION = {
  ACTIVIDAD_REFLEXION: 5,
  ACTIVIDAD_IDENTIFICACION: 10,
  ACTIVIDAD_PRACTICA: 15,
  ACTIVIDAD_INVESTIGACION: 20,
  PREGUNTA_EVALUACION: 10,
  COMPLETAR_TEMA: 50,
  COMPLETAR_CURSO: 100
};

// Configuración de tiempo
export const TIEMPO_CONFIG = {
  MINUTOS_POR_PREGUNTA: 1.5,
  MINUTOS_POR_SECCION_BASE: 5,
  MINUTOS_LECTURA_POR_PALABRA: 0.004 // ~250 palabras por minuto
};

// Extensiones de archivo permitidas
export const EXTENSIONES_PERMITIDAS = {
  IMAGENES: ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp'],
  VIDEOS: ['.mp4', '.webm', '.ogg', '.avi', '.mov'],
  AUDIOS: ['.mp3', '.wav', '.ogg', '.m4a'],
  DOCUMENTOS: ['.pdf', '.doc', '.docx', '.txt', '.rtf']
};

// Rutas base para recursos
export const RUTAS_RECURSOS = {
  IMAGENES: '/images',
  VIDEOS: '/videos', 
  AUDIOS: '/audio',
  DOCUMENTOS: '/docs',
  TEORIA: '/images/teoria'
};

// Configuración de validación
export const VALIDACION_CONFIG = {
  TITULO_MIN_LENGTH: 3,
  TITULO_MAX_LENGTH: 100,
  DESCRIPCION_MIN_LENGTH: 10,
  DESCRIPCION_MAX_LENGTH: 500,
  CONTENIDO_MIN_LENGTH: 50,
  MAX_OPCIONES_PREGUNTA: 6,
  MIN_OPCIONES_PREGUNTA: 2,
  MAX_ACTIVIDADES_POR_SECCION: 5,
  MAX_SECCIONES_POR_TEMA: 10
};

// Mensajes de error comunes
export const MENSAJES_ERROR = {
  TEMA_NO_ENCONTRADO: 'Tema no encontrado',
  SECCION_NO_ENCONTRADA: 'Sección no encontrada',
  CURSO_NO_ENCONTRADO: 'Curso no encontrado',
  CONTENIDO_NO_DISPONIBLE: 'Contenido no disponible',
  ERROR_CARGA: 'Error al cargar el contenido',
  ESTRUCTURA_INVALIDA: 'Estructura de datos inválida',
  RECURSO_NO_ACCESIBLE: 'Recurso no accesible'
};

// Mensajes de éxito
export const MENSAJES_EXITO = {
  TEMA_COMPLETADO: '¡Tema completado exitosamente!',
  CURSO_COMPLETADO: '¡Curso completado! ¡Felicitaciones!',
  ACTIVIDAD_COMPLETADA: 'Actividad completada',
  EVALUACION_APROBADA: '¡Evaluación aprobada!',
  PROGRESO_GUARDADO: 'Progreso guardado correctamente'
};

// Configuración de cache
export const CACHE_CONFIG = {
  TTL_CONTENIDO: 1000 * 60 * 30, // 30 minutos
  TTL_RECURSOS: 1000 * 60 * 60 * 24, // 24 horas
  MAX_ITEMS_CACHE: 50
};

// IDs de cursos (para referencia)
export const IDS_CURSOS = {
  NOCIONES_COMPUTADOR: 'nociones-computador',
  INTRO_INFORMATICA: 'intro-informatica',
  INTRO_WINDOWS: 'intro-windows',
  PAINT: 'paint',
  PAINT_3D: 'paint-3d',
  WORD: 'word',
  POWERPOINT: 'powerpoint',
  EXCEL: 'excel'
};

// Configuración de desarrollo
export const DEV_CONFIG = {
  MOSTRAR_LOGS: true,
  VALIDACION_ESTRICTA: true,
  MOCK_DATOS: false,
  DEBUG_CACHE: false
};

// Esquemas de colores para diferentes tipos de contenido
export const COLORES_TEMA = {
  FUNDAMENTOS: '#3f51b5',
  HARDWARE: '#ff9800',
  SOFTWARE: '#4caf50',
  INTERNET: '#2196f3',
  MULTIMEDIA: '#e91e63',
  SEGURIDAD: '#f44336'
};

// Iconos por defecto para diferentes tipos
export const ICONOS_DEFAULT = {
  CURSO: 'fas fa-book',
  TEMA: 'fas fa-bookmark',
  SECCION: 'fas fa-file-alt',
  ACTIVIDAD_REFLEXION: 'fas fa-lightbulb',
  ACTIVIDAD_IDENTIFICACION: 'fas fa-search',
  ACTIVIDAD_PRACTICA: 'fas fa-hands',
  ACTIVIDAD_INVESTIGACION: 'fas fa-microscope',
  RECURSO_DOCUMENTO: 'fas fa-file-pdf',
  RECURSO_VIDEO: 'fas fa-play-circle',
  RECURSO_ENLACE: 'fas fa-external-link-alt'
};
