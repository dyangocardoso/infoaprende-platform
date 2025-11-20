/**
 * Validadores para la estructura de contenido de cursos
 * Aseguran la integridad y consistencia de los datos
 */

/**
 * Valida la estructura básica de un tema
 * @param {Object} tema - Objeto tema a validar
 * @returns {Object} Resultado de validación
 */
export const validarEstructuraTema = (tema) => {
  const errores = [];
  const advertencias = [];

  // Validaciones obligatorias
  if (!tema.id) errores.push('El tema debe tener un ID');
  if (!tema.titulo) errores.push('El tema debe tener un título');
  if (!tema.duracion) errores.push('El tema debe tener una duración estimada');
  if (!Array.isArray(tema.objetivos)) errores.push('Los objetivos deben ser un array');
  if (!Array.isArray(tema.secciones)) errores.push('Las secciones deben ser un array');

  // Validaciones de contenido
  if (tema.objetivos && tema.objetivos.length === 0) {
    advertencias.push('El tema no tiene objetivos definidos');
  }

  if (tema.secciones && tema.secciones.length === 0) {
    advertencias.push('El tema no tiene secciones de contenido');
  }

  // Validar cada sección
  if (tema.secciones) {
    tema.secciones.forEach((seccion, index) => {
      const seccionErrores = validarEstructuraSeccion(seccion);
      if (seccionErrores.errores.length > 0) {
        errores.push(`Sección ${index + 1}: ${seccionErrores.errores.join(', ')}`);
      }
    });
  }

  return {
    esValido: errores.length === 0,
    errores,
    advertencias
  };
};

/**
 * Valida la estructura de una sección
 * @param {Object} seccion - Objeto sección a validar
 * @returns {Object} Resultado de validación
 */
export const validarEstructuraSeccion = (seccion) => {
  const errores = [];
  const advertencias = [];

  if (!seccion.id) errores.push('La sección debe tener un ID');
  if (!seccion.titulo) errores.push('La sección debe tener un título');
  if (!seccion.contenido) errores.push('La sección debe tener contenido');

  // Validar HTML básico
  if (seccion.contenido && typeof seccion.contenido === 'string') {
    if (!contieneHTMLValido(seccion.contenido)) {
      advertencias.push('El contenido HTML podría tener errores de formato');
    }
  }

  // Validar actividades
  if (seccion.actividades) {
    seccion.actividades.forEach((actividad, index) => {
      const actividadErrores = validarActividad(actividad);
      if (actividadErrores.errores.length > 0) {
        errores.push(`Actividad ${index + 1}: ${actividadErrores.errores.join(', ')}`);
      }
    });
  }

  return {
    esValido: errores.length === 0,
    errores,
    advertencias
  };
};

/**
 * Valida una actividad
 * @param {Object} actividad - Actividad a validar
 * @returns {Object} Resultado de validación
 */
export const validarActividad = (actividad) => {
  const errores = [];
  const advertencias = [];

  if (!actividad.tipo) errores.push('La actividad debe tener un tipo');

  const tiposValidos = ['reflexion', 'identificacion', 'practica', 'investigacion'];
  if (actividad.tipo && !tiposValidos.includes(actividad.tipo)) {
    errores.push(`Tipo de actividad no válido: ${actividad.tipo}`);
  }

  switch (actividad.tipo) {
    case 'reflexion':
      if (!actividad.pregunta) errores.push('Actividad de reflexión debe tener pregunta');
      break;
    case 'identificacion':
      if (!actividad.descripcion) errores.push('Actividad de identificación debe tener descripción');
      if (!Array.isArray(actividad.elementos)) errores.push('Actividad de identificación debe tener elementos');
      break;
    case 'practica':
      if (!actividad.descripcion) errores.push('Actividad práctica debe tener descripción');
      if (!Array.isArray(actividad.pasos)) errores.push('Actividad práctica debe tener pasos');
      break;
    case 'investigacion':
      if (!actividad.pregunta) errores.push('Actividad de investigación debe tener pregunta');
      break;
  }

  return {
    esValido: errores.length === 0,
    errores,
    advertencias
  };
};

/**
 * Valida la estructura de recursos
 * @param {Object} recursos - Recursos a validar
 * @returns {Object} Resultado de validación
 */
export const validarRecursos = (recursos) => {
  const errores = [];
  const advertencias = [];

  if (!recursos) {
    advertencias.push('No se definieron recursos para este tema');
    return { esValido: true, errores, advertencias };
  }

  // Validar documentos
  if (recursos.documentos) {
    recursos.documentos.forEach((doc, index) => {
      if (!doc.titulo) errores.push(`Documento ${index + 1}: debe tener título`);
      if (!doc.url) errores.push(`Documento ${index + 1}: debe tener URL`);
      if (!esURLValida(doc.url)) errores.push(`Documento ${index + 1}: URL no válida`);
    });
  }

  // Validar enlaces
  if (recursos.enlaces) {
    recursos.enlaces.forEach((enlace, index) => {
      if (!enlace.titulo) errores.push(`Enlace ${index + 1}: debe tener título`);
      if (!enlace.url) errores.push(`Enlace ${index + 1}: debe tener URL`);
      if (!esURLValida(enlace.url)) errores.push(`Enlace ${index + 1}: URL no válida`);
    });
  }

  // Validar videos
  if (recursos.videos) {
    recursos.videos.forEach((video, index) => {
      if (!video.titulo) errores.push(`Video ${index + 1}: debe tener título`);
      if (!video.url) errores.push(`Video ${index + 1}: debe tener URL`);
      if (!video.duracion) advertencias.push(`Video ${index + 1}: se recomienda especificar duración`);
    });
  }

  return {
    esValido: errores.length === 0,
    errores,
    advertencias
  };
};

/**
 * Valida una evaluación
 * @param {Object} evaluacion - Evaluación a validar
 * @returns {Object} Resultado de validación
 */
export const validarEvaluacion = (evaluacion) => {
  const errores = [];
  const advertencias = [];

  if (!evaluacion) {
    advertencias.push('No se definió evaluación para este tema');
    return { esValido: true, errores, advertencias };
  }

  if (!evaluacion.tipo) errores.push('La evaluación debe tener un tipo');
  if (!Array.isArray(evaluacion.preguntas)) errores.push('La evaluación debe tener preguntas');

  if (evaluacion.preguntas && evaluacion.preguntas.length === 0) {
    errores.push('La evaluación debe tener al menos una pregunta');
  }

  // Validar cada pregunta
  if (evaluacion.preguntas) {
    evaluacion.preguntas.forEach((pregunta, index) => {
      const preguntaErrores = validarPregunta(pregunta);
      if (preguntaErrores.errores.length > 0) {
        errores.push(`Pregunta ${index + 1}: ${preguntaErrores.errores.join(', ')}`);
      }
    });
  }

  return {
    esValido: errores.length === 0,
    errores,
    advertencias
  };
};

/**
 * Valida una pregunta de evaluación
 * @param {Object} pregunta - Pregunta a validar
 * @returns {Object} Resultado de validación
 */
export const validarPregunta = (pregunta) => {
  const errores = [];

  if (!pregunta.pregunta) errores.push('Debe tener texto de pregunta');
  if (!pregunta.tipo) errores.push('Debe tener tipo de pregunta');

  if (pregunta.tipo === 'opcion_multiple') {
    if (!Array.isArray(pregunta.opciones)) errores.push('Debe tener opciones');
    if (pregunta.opciones && pregunta.opciones.length < 2) {
      errores.push('Debe tener al menos 2 opciones');
    }
    if (typeof pregunta.respuestaCorrecta !== 'number') {
      errores.push('Debe especificar respuesta correcta');
    }
    if (pregunta.respuestaCorrecta >= pregunta.opciones?.length) {
      errores.push('Índice de respuesta correcta fuera de rango');
    }
  }

  return {
    esValido: errores.length === 0,
    errores
  };
};

/**
 * Valida información de curso
 * @param {Object} cursoInfo - Información del curso
 * @returns {Object} Resultado de validación
 */
export const validarInfoCurso = (cursoInfo) => {
  const errores = [];
  const advertencias = [];

  if (!cursoInfo.id) errores.push('El curso debe tener un ID');
  if (!cursoInfo.titulo) errores.push('El curso debe tener un título');
  if (!cursoInfo.descripcion) errores.push('El curso debe tener una descripción');
  if (!cursoInfo.duracion) errores.push('El curso debe tener duración estimada');

  if (!Array.isArray(cursoInfo.objetivosGenerales)) {
    errores.push('Los objetivos generales deben ser un array');
  }

  if (cursoInfo.objetivosGenerales && cursoInfo.objetivosGenerales.length === 0) {
    advertencias.push('El curso no tiene objetivos generales definidos');
  }

  return {
    esValido: errores.length === 0,
    errores,
    advertencias
  };
};

/**
 * Valida todo un curso completo
 * @param {Object} curso - Curso completo a validar
 * @returns {Object} Resultado de validación completa
 */
export const validarCursoCompleto = (curso) => {
  const errores = [];
  const advertencias = [];

  // Validar información del curso
  const infoValidacion = validarInfoCurso(curso.info);
  errores.push(...infoValidacion.errores);
  advertencias.push(...infoValidacion.advertencias);

  // Validar que existe al menos un tema
  if (!curso.temas || Object.keys(curso.temas).length === 0) {
    errores.push('El curso debe tener al menos un tema');
    return { esValido: false, errores, advertencias };
  }

  // Validar cada tema
  Object.entries(curso.temas).forEach(([temaId, tema]) => {
    const temaValidacion = validarEstructuraTema(tema);
    if (!temaValidacion.esValido) {
      errores.push(`Tema ${temaId}: ${temaValidacion.errores.join(', ')}`);
    }
    advertencias.push(...temaValidacion.advertencias.map(adv => `Tema ${temaId}: ${adv}`));
  });

  return {
    esValido: errores.length === 0,
    errores,
    advertencias,
    estadisticas: {
      totalTemas: Object.keys(curso.temas).length,
      totalSecciones: Object.values(curso.temas).reduce((total, tema) => total + (tema.secciones?.length || 0), 0),
      totalActividades: Object.values(curso.temas).reduce((total, tema) => {
        return total + (tema.secciones?.reduce((secTotal, seccion) => {
          return secTotal + (seccion.actividades?.length || 0);
        }, 0) || 0);
      }, 0)
    }
  };
};

// Funciones auxiliares

/**
 * Verifica si una URL es válida
 * @param {string} url - URL a verificar
 * @returns {boolean} True si es válida
 */
const esURLValida = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    // Si no es una URL completa, verificar si es una ruta relativa válida
    return url.startsWith('/') || url.startsWith('./') || url.startsWith('../');
  }
};

/**
 * Verifica si el contenido HTML es básicamente válido
 * @param {string} html - Contenido HTML a verificar
 * @returns {boolean} True si parece válido
 */
const contieneHTMLValido = (html) => {
  // Verificaciones básicas de HTML
  const aperturas = (html.match(/</g) || []).length;
  const cierres = (html.match(/>/g) || []).length;
  
  // Debe tener al menos el mismo número de aperturas y cierres
  return aperturas === cierres;
};
