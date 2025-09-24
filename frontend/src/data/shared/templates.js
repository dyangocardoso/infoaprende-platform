/**
 * Plantillas reutilizables para crear contenido de cursos
 * Estas plantillas aseguran consistencia en la estructura
 */

/**
 * Crea una sección básica de contenido
 * @param {number} id - ID de la sección
 * @param {string} titulo - Título de la sección
 * @param {string} contenido - Contenido HTML de la sección
 * @param {Array} actividades - Array de actividades (opcional)
 * @param {Object} multimedia - Recursos multimedia (opcional)
 * @returns {Object} Objeto de sección estructurado
 */
export const crearSeccion = (id, titulo, contenido, actividades = [], multimedia = null) => {
  return {
    id,
    titulo,
    contenido,
    actividades,
    multimedia,
    fechaCreacion: new Date().toISOString(),
    version: '1.0.0'
  };
};

/**
 * Crea una actividad de tipo reflexión
 * @param {string} pregunta - Pregunta para reflexionar
 * @param {string} ayuda - Texto de ayuda (opcional)
 * @returns {Object} Actividad de reflexión
 */
export const crearActividadReflexion = (pregunta, ayuda = '') => {
  return {
    tipo: 'reflexion',
    pregunta,
    ayuda,
    puntos: 5
  };
};

/**
 * Crea una actividad de identificación
 * @param {string} descripcion - Descripción de la actividad
 * @param {Array} elementos - Elementos a identificar
 * @returns {Object} Actividad de identificación
 */
export const crearActividadIdentificacion = (descripcion, elementos) => {
  return {
    tipo: 'identificacion',
    descripcion,
    elementos,
    puntos: 10
  };
};

/**
 * Crea una actividad práctica
 * @param {string} descripcion - Descripción de la práctica
 * @param {Array} pasos - Pasos a seguir
 * @returns {Object} Actividad práctica
 */
export const crearActividadPractica = (descripcion, pasos) => {
  return {
    tipo: 'practica',
    descripcion,
    pasos,
    puntos: 15
  };
};

/**
 * Crea una actividad de investigación
 * @param {string} pregunta - Pregunta de investigación
 * @param {string} ayuda - Ayuda o pista para la investigación
 * @returns {Object} Actividad de investigación
 */
export const crearActividadInvestigacion = (pregunta, ayuda = '') => {
  return {
    tipo: 'investigacion',
    pregunta,
    ayuda,
    puntos: 20
  };
};

/**
 * Crea recursos multimedia para una sección
 * @param {Object} opciones - Opciones de multimedia
 * @param {string} opciones.imagen - URL de imagen
 * @param {string} opciones.video - URL de video
 * @param {string} opciones.infografia - URL de infografía
 * @param {string} opciones.audio - URL de audio
 * @returns {Object} Objeto multimedia
 */
export const crearMultimedia = ({ imagen = null, video = null, infografia = null, audio = null }) => {
  const multimedia = {};
  
  if (imagen) multimedia.imagen = imagen;
  if (video) multimedia.video = video;
  if (infografia) multimedia.infografia = infografia;
  if (audio) multimedia.audio = audio;
  
  return Object.keys(multimedia).length > 0 ? multimedia : null;
};

/**
 * Crea un tema completo con estructura estándar
 * @param {Object} datos - Datos del tema
 * @returns {Object} Tema estructurado
 */
export const crearTema = ({
  id,
  titulo,
  duracion,
  objetivos = [],
  secciones = [],
  recursos = null,
  evaluacion = null
}) => {
  return {
    id,
    titulo,
    duracion,
    objetivos,
    secciones,
    recursos: recursos || crearRecursosVacios(),
    evaluacion,
    fechaCreacion: new Date().toISOString(),
    version: '1.0.0',
    autor: 'InfoAprende',
    estado: 'activo'
  };
};

/**
 * Crea estructura vacía de recursos
 * @returns {Object} Estructura de recursos vacía
 */
export const crearRecursosVacios = () => {
  return {
    documentos: [],
    enlaces: [],
    videos: []
  };
};

/**
 * Crea un documento de recursos
 * @param {string} titulo - Título del documento
 * @param {string} url - URL del documento
 * @param {string} tipo - Tipo de documento (pdf, doc, etc.)
 * @returns {Object} Documento de recursos
 */
export const crearDocumento = (titulo, url, tipo = 'pdf') => {
  return {
    titulo,
    url,
    tipo,
    fechaAgregado: new Date().toISOString()
  };
};

/**
 * Crea un enlace de recursos
 * @param {string} titulo - Título del enlace
 * @param {string} url - URL del enlace
 * @param {string} tipo - Tipo de enlace (externo, interno)
 * @returns {Object} Enlace de recursos
 */
export const crearEnlace = (titulo, url, tipo = 'externo') => {
  return {
    titulo,
    url,
    tipo,
    fechaAgregado: new Date().toISOString()
  };
};

/**
 * Crea un video de recursos
 * @param {string} titulo - Título del video
 * @param {string} url - URL del video
 * @param {string} duracion - Duración del video
 * @returns {Object} Video de recursos
 */
export const crearVideo = (titulo, url, duracion) => {
  return {
    titulo,
    url,
    duracion,
    fechaAgregado: new Date().toISOString()
  };
};

/**
 * Crea una evaluación básica tipo cuestionario
 * @param {Array} preguntas - Array de preguntas
 * @returns {Object} Evaluación estructurada
 */
export const crearEvaluacion = (preguntas) => {
  return {
    tipo: 'cuestionario',
    preguntas,
    puntosTotales: preguntas.length * 10,
    tiempoEstimado: Math.ceil(preguntas.length * 1.5), // 1.5 min por pregunta
    fechaCreacion: new Date().toISOString()
  };
};

/**
 * Crea una pregunta de opción múltiple
 * @param {string} pregunta - Texto de la pregunta
 * @param {Array} opciones - Array de opciones
 * @param {number} respuestaCorrecta - Índice de respuesta correcta
 * @param {string} explicacion - Explicación de la respuesta (opcional)
 * @returns {Object} Pregunta estructurada
 */
export const crearPreguntaMultiple = (pregunta, opciones, respuestaCorrecta, explicacion = '') => {
  return {
    pregunta,
    tipo: 'opcion_multiple',
    opciones,
    respuestaCorrecta,
    explicacion,
    puntos: 10
  };
};

/**
 * Crea información básica de un curso
 * @param {Object} datos - Datos del curso
 * @returns {Object} Información del curso
 */
export const crearInfoCurso = ({
  id,
  titulo,
  descripcion,
  nivel = 'Principiante',
  duracion,
  categoria,
  prerequisitos = [],
  objetivosGenerales = []
}) => {
  return {
    id,
    titulo,
    descripcion,
    nivel,
    duracion,
    categoria,
    version: '1.0.0',
    fechaActualizacion: new Date().toISOString(),
    prerequisitos,
    objetivosGenerales,
    autor: 'InfoAprende',
    estado: 'activo'
  };
};
