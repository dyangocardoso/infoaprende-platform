// Índice del curso: Gestión de Amenazas en Ciberseguridad
// Estructura y helpers compatibles con el sistema modular de InfoAprende

import tema01 from './tema-01-introduccion-ciberseguridad.js';
import tema02 from './tema-02-tipos-amenazas.js';
import tema03 from './tema-03-ingenieria-social.js';
import tema04 from './tema-04-malware.js';
import tema05 from './tema-05-criptografia-contraseñas.js';
import tema06 from './tema-06-ataques-fisicos-cadena-suministro.js';
import tema07 from './tema-07-gestion-riesgos-vulnerabilidades.js';
import tema08 from './tema-08-principios-eticos.js';

// Metadatos del curso
export const cursoInfo = {
  id: 'ciberseguridad',
  titulo: 'Gestión de Amenazas en Ciberseguridad',
  descripcion: 'Curso sobre identificación y gestión de amenazas, ataques comunes, gestión de riesgos y principios éticos aplicados a la ciberseguridad.',
  nivel: 'Intermedio',
  duracion: '4-6 horas',
  categoria: 'Seguridad',
  objetivos: [
    'Identificar tipos de amenazas y vectores de ataque',
    'Reconocer técnicas de ingeniería social y vectores físicos',
    'Comprender malware y ataques criptográficos',
    'Aplicar conceptos básicos de gestión de riesgos y vulnerabilidades',
    'Conocer principios éticos y cumplimiento legal en seguridad'
  ],
  prerequisitos: [
    'Conocimientos básicos de informática',
    'Familiaridad con el uso de redes y sistemas operativos'
  ],
  audiencia: [
    'Técnicos de soporte y redes',
    'Estudiantes de seguridad informática',
    'Profesionales que requieren conocimiento en gestión de amenazas'
  ],
  skills: [
    'Identificación de amenazas',
    'Mitigación básica de incidentes',
    'Reconocimiento de vectores físicos y sociales',
    'Comprensión de marcos de gestión de riesgos'
  ],
  version: '1.0.0',
  fechaCreacion: '2025-10-23',
  fechaActualizacion: '2025-10-23',
  autor: 'InfoAprende Education Team',
  idioma: 'es',
  dificultad: {
    nivel: 'Intermedio',
    escala: 'Principiante | Intermedio | Avanzado',
    puntuacion: 6,
    escalaNumerica: '1-10'
  }
};

// Temas exportados (se inyecta la propiedad `id` en cada tema para compatibilidad con el UI)
const _temasRaw = {
  '1': tema01,
  '2': tema02,
  '3': tema03,
  '4': tema04,
  '5': tema05,
  '6': tema06,
  '7': tema07,
  '8': tema08
};

export const temas = Object.fromEntries(
  Object.entries(_temasRaw).map(([id, tema]) => [id, Object.assign({ id: id.toString() }, tema)])
);

// También exportar como array ordenado (útil para componentes que esperan lista)
export const temasArray = Object.keys(temas).map(id => temas[id]);

// Función helper para obtener tema por ID
export const getTema = (temaId) => {
  return temas[temaId.toString()] || null;
};

// Función helper para obtener lista de temas
export const getListaTemas = () => {
  return Object.keys(temas).map(id => ({
    id,
    titulo: temas[id].titulo,
    tematica: temas[id].tematica,
    duracion: temas[id].duracion
  }));
};

// Función helper para obtener total de objetivos
export const getTotalObjetivos = () => {
  return Object.values(temas).reduce((total, tema) => {
    return total + (tema.objetivos ? tema.objetivos.length : 0);
  }, 0);
};

// Función helper para obtener duración total estimada
export const getDuracionTotal = () => {
  const duraciones = Object.values(temas).map(tema => {
    const duracion = tema.duracion || '0-0 minutos';
    const match = duracion.match(/(\d+)-(\d+)/);
    if (match) {
      return (parseInt(match[1], 10) + parseInt(match[2], 10)) / 2;
    }
    return 0;
  });

  const totalMinutos = duraciones.reduce((sum, dur) => sum + dur, 0);
  const horas = Math.floor(totalMinutos / 60);
  const minutos = Math.round(totalMinutos % 60);

  return `${horas}h ${minutos}m aproximadamente`;
};

// Función helper para validar integridad del curso
export const validarCurso = () => {
  const errores = [];

  // Verificar que todos los temas existen (se esperan 8 temas)
  for (let i = 1; i <= 8; i++) {
    if (!temas[i.toString()]) {
      errores.push(`Falta tema ${i}`);
    }
  }

  // Verificar estructura básica de cada tema
  Object.entries(temas).forEach(([id, tema]) => {
    if (!tema) {
      errores.push(`Tema ${id} es nulo o indefinido`);
      return;
    }
    if (!tema.titulo) errores.push(`Tema ${id} sin título`);
    if (!tema.objetivos || tema.objetivos.length === 0) {
      errores.push(`Tema ${id} sin objetivos`);
    }
    if (!tema.secciones || tema.secciones.length === 0) {
      errores.push(`Tema ${id} sin secciones`);
    }
    if (!tema.evaluacion) errores.push(`Tema ${id} sin evaluación`);
  });

  return {
    valido: errores.length === 0,
    errores,
    temasEncontrados: Object.keys(temas).length,
    temasEsperados: 8
  };
};

// Función helper para obtener estadísticas del curso
export const getEstadisticas = () => {
  const totalSecciones = Object.values(temas).reduce((total, tema) => {
    return total + (tema.secciones ? tema.secciones.length : 0);
  }, 0);

  const totalPreguntas = Object.values(temas).reduce((total, tema) => {
    return total + (tema.evaluacion?.preguntas ? tema.evaluacion.preguntas.length : 0);
  }, 0);

  const totalRecursos = Object.values(temas).reduce((total, tema) => {
    const recursos = tema.recursos || {};
    return total +
      (recursos.documentos?.length || 0) +
      (recursos.enlaces?.length || 0) +
      (recursos.videos?.length || 0);
  }, 0);

  return {
    temas: Object.keys(temas).length,
    secciones: totalSecciones,
    objetivos: getTotalObjetivos(),
    preguntas: totalPreguntas,
    recursos: totalRecursos,
    duracion: getDuracionTotal()
  };
};

// Funciones helper para compatibilidad con el sistema
export const obtenerInfoCurso = () => cursoInfo;
export const obtenerTema = (temaId) => temas[temaId] || null;
export const obtenerTodosTemas = () => Object.values(temas);
export const temaExiste = (temaId) => Object.prototype.hasOwnProperty.call(temas, temaId);

// Exportar funciones de utilidad adicionales
export const utils = {
  getTema,
  getListaTemas,
  getTotalObjetivos,
  getDuracionTotal,
  validarCurso,
  getEstadisticas
};

// Exportar todo como default para compatibilidad con el sistema
export default {
  info: cursoInfo,
  temas,
  obtenerInfoCurso,
  obtenerTema,
  obtenerTodosTemas,
  temaExiste,
  utils
};
