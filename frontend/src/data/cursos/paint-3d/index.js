/**
 * Índice del curso: Diseñador Gráfico Paint 3D
 * Sistema de contenido modular - InfoAprende
 */

// Importar todos los temas del curso - versiones corregidas
import tema01ExploracionPaint3D from './tema-01-exploracion-paint3d-corrected.js';
import tema02CreacionObjetos3D from './tema-02-creacion-objetos-3d-corrected.js';
import tema03PinturaDecoracion from './tema-03-pintura-decoracion-corrected.js';
import tema04EscenariosComposicion from './tema-04-escenarios-composicion-corrected.js';
import tema05ExposicionCreativa from './tema-05-exposicion-creativa-corrected.js';

// Metadatos del curso
export const cursoInfo = {
  id: "paint-3d",
  titulo: "Diseñador Gráfico Paint 3D",
  descripcion: "Explora el mundo del diseño tridimensional con Paint 3D de Microsoft. Aprende a crear, modelar y animar objetos 3D desde cero, desarrollando proyectos creativos y narrativas visuales innovadoras en un entorno intuitivo y accesible.",
  nivel: "Intermedio",
  duracion: "4-5 horas",
  categoria: "Diseño 3D",
  objetivos: [
    "Dominar la interfaz y herramientas especializadas de Paint 3D",
    "Crear y modificar objetos tridimensionales con precisión",
    "Aplicar texturas, colores y efectos visuales avanzados",
    "Componer escenas 3D complejas con múltiples elementos",
    "Desarrollar narrativas visuales utilizando técnicas de composición",
    "Exportar y compartir creaciones 3D en diferentes formatos",
    "Integrar técnicas de animación básica en proyectos 3D"
  ],
  prerequisitos: [
    "Conocimientos básicos de Windows",
    "Familiaridad con conceptos de diseño básico",
    "Experiencia con Paint o herramientas similares (recomendado)",
    "Comprensión básica de espacios tridimensionales"
  ],
  audiencia: [
    "Estudiantes de diseño gráfico y multimedia",
    "Profesores de arte y tecnología",
    "Diseñadores que buscan explorar el 3D",
    "Creadores de contenido digital",
    "Entusiastas del diseño tridimensional",
    "Desarrolladores de videojuegos indie"
  ],
  skills: [
    "Modelado 3D básico",
    "Diseño tridimensional",
    "Texturizado y materiales",
    "Composición de escenas 3D",
    "Animación básica",
    "Exportación de modelos 3D",
    "Narrativa visual 3D"
  ],
  version: "1.0.0",
  fechaCreacion: "2024-12-19",
  fechaActualizacion: "2024-12-19",
  autor: "InfoAprende Education Team",
  idioma: "es",
  dificultad: {
    nivel: "Intermedio",
    escala: "Principiante | Intermedio | Avanzado",
    puntuacion: 6,
    escalaNumerica: "1-10"
  },
  estado: "completado", // Curso completado y estructurado correctamente
  notas_revision: "Curso completamente reestructurado para compatibilidad del sistema. Todos los temas siguen la estructura modular requerida."
};

// Exportar todos los temas organizados
export const temas = {
  '1': tema01ExploracionPaint3D,
  '2': tema02CreacionObjetos3D,
  '3': tema03PinturaDecoracion,
  '4': tema04EscenariosComposicion,
  '5': tema05ExposicionCreativa
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
  for (let i = 1; i <= 5; i++) {
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
    temasEsperados: 5
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
