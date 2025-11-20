/**
 * Índice del curso: Diseñador Gráfico Paint
 * Sistema de contenido modular - InfoAprende
 */

// Importar todos los temas del curso
import tema01InterfazHerramientas from './tema-01-interfaz-herramientas.js';
import tema02TecnicasBasicas from './tema-02-tecnicas-basicas-corrected.js';

// Metadatos del curso
export const cursoInfo = {
  id: "paint",
  titulo: "Diseñador Gráfico Paint",
  descripcion: "Crea y edita imágenes con la herramienta clásica de Windows. Domina Paint desde lo básico hasta técnicas avanzadas de diseño gráfico. Aprende a usar todas las herramientas disponibles para crear composiciones atractivas y profesionales.",
  nivel: "Principiante",
  duracion: "2-3 horas",
  categoria: "Diseño Gráfico",
  objetivos: [
    "Dominar la interfaz y herramientas principales de Paint",
    "Aplicar técnicas básicas de dibujo digital",
    "Crear formas geométricas y diseños estructurados",
    "Utilizar herramientas de relleno, pincel y borrador eficientemente",
    "Manejar texto y elementos de diseño",
    "Realizar recortes y selecciones precisas",
    "Combinar técnicas para crear composiciones completas"
  ],
  prerequisitos: [
    "Conocimientos básicos de Windows",
    "Familiaridad con el uso del ratón",
    "Conceptos básicos de archivos y carpetas"
  ],
  audiencia: [
    "Principiantes en diseño gráfico",
    "Estudiantes que se inician en herramientas digitales",
    "Profesores de informática básica",
    "Personas que desean crear gráficos simples",
    "Usuarios de Windows que quieren aprovechar Paint"
  ],
  skills: [
    "Uso de Paint de Windows",
    "Dibujo digital básico",
    "Creación de formas geométricas",
    "Manejo de colores y rellenos",
    "Edición básica de imágenes",
    "Diseño gráfico elemental"
  ],
  version: "1.0.0",
  fechaCreacion: "2024-12-19",
  fechaActualizacion: "2024-12-19",
  autor: "InfoAprende Education Team",
  idioma: "es",
  dificultad: {
    nivel: "Principiante",
    escala: "Principiante | Intermedio | Avanzado",
    puntuacion: 2,
    escalaNumerica: "1-10"
  },
  estado: "completado", // Curso completado y estructurado correctamente
  notas_revision: "Curso reestructurado para compatibilidad del sistema. Todos los temas siguen la estructura modular requerida."
};

// Exportar todos los temas organizados
export const temas = {
  '1': tema01InterfazHerramientas,
  '2': tema02TecnicasBasicas
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
  for (let i = 1; i <= 2; i++) {
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
    if (!tema.introduccion) errores.push(`Tema ${id} sin introducción`);
  });
  
  return {
    valido: errores.length === 0,
    errores,
    temasEncontrados: Object.keys(temas).length,
    temasEsperados: 2
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
