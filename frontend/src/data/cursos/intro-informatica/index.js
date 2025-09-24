/**
 * Índice del curso: Introducción a la Informática
 * Sistema de contenido modular - InfoAprende
 */

// Importar todos los temas del curso
import tema01 from './tema-01-evolucion-historica.js';
import tema02 from './tema-02-fundamentos-conceptos.js';
import tema03 from './tema-03-unidades-medida.js';
import tema04 from './tema-04-hardware.js';
import tema05 from './tema-05-software.js';
import tema06 from './tema-06-placa-base-procesamiento.js';
import tema07 from './tema-07-memoria-almacenamiento.js';

// Metadatos del curso
export const cursoInfo = {
  id: "intro-informatica",
  titulo: "Introducción a la Informática",
  descripcion: "Descubre los fundamentos de la informática, desde su evolución histórica hasta los conceptos actuales de hardware y software. Un curso completo que abarca desde los primeros dispositivos de cálculo hasta las tecnologías modernas de almacenamiento.",
  nivel: "Intermedio",
  duracion: "4-6 horas",
  categoria: "Fundamentos",
  objetivos: [
    "Comprender la evolución histórica de la informática y sus principales hitos",
    "Dominar los conceptos fundamentales: datos, información, sistemas y algoritmos",
    "Realizar conversiones entre unidades de medida digital con precisión",
    "Clasificar y analizar componentes de hardware según su función",
    "Distinguir tipos de software y comprender sus licencias",
    "Conocer la arquitectura de sistemas: placa base, CPU y memoria",
    "Comparar tecnologías de almacenamiento y sus aplicaciones"
  ],
  prerequisitos: [
    "Conocimientos básicos de computación",
    "Familiaridad con el uso de computadoras",
    "Conceptos matemáticos elementales"
  ],
  audiencia: [
    "Estudiantes de informática e ingeniería",
    "Profesionales que buscan actualizar conocimientos",
    "Entusiastas de la tecnología",
    "Educadores en el área de tecnología"
  ],
  skills: [
    "Fundamentos de informática",
    "Hardware de computadoras",
    "Software y licencias",
    "Unidades de medida digital",
    "Arquitectura de sistemas",
    "Tecnologías de almacenamiento"
  ],
  version: "1.0.0",
  fechaCreacion: "2024-01-01",
  fechaActualizacion: "2024-01-01",
  autor: "InfoAprende Education Team",
  idioma: "es",
  dificultad: {
    nivel: "Intermedio",
    escala: "Principiante | Intermedio | Avanzado",
    puntuacion: 6,
    escalaNumerica: "1-10"
  }
};

// Exportar todos los temas organizados
export const temas = {
  '1': tema01,
  '2': tema02,
  '3': tema03,
  '4': tema04,
  '5': tema05,
  '6': tema06,
  '7': tema07
};

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

// Función helper para obtener progreso total
export const getTotalObjetivos = () => {
  return Object.values(temas).reduce((total, tema) => {
    return total + (tema.objetivos ? tema.objetivos.length : 0);
  }, 0);
};

// Función helper para obtener duración total estimada
export const getDuracionTotal = () => {
  const duraciones = Object.values(temas).map(tema => {
    const duracion = tema.duracion || "0-0 minutos";
    const match = duracion.match(/(\d+)-(\d+)/);
    if (match) {
      return (parseInt(match[1]) + parseInt(match[2])) / 2;
    }
    return 0;
  });
  
  const totalMinutos = duraciones.reduce((sum, dur) => sum + dur, 0);
  const horas = Math.floor(totalMinutos / 60);
  const minutos = totalMinutos % 60;
  
  return `${horas}h ${minutos}m aproximadamente`;
};

// Función helper para validar integridad del curso
export const validarCurso = () => {
  const errores = [];
  
  // Verificar que todos los temas existen
  for (let i = 1; i <= 7; i++) {
    if (!temas[i.toString()]) {
      errores.push(`Falta tema ${i}`);
    }
  }
  
  // Verificar estructura básica de cada tema
  Object.entries(temas).forEach(([id, tema]) => {
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
    temasEsperados: 7
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
