/**
 * Índice del curso: Introducción al Sistema Operativo Windows
 * Sistema de contenido modular - InfoAprende
 */

// Importar todos los temas del curso
import tema01 from './tema-01-elementos-funciones-basicas.js';
import tema02 from './tema-02-explorador-windows.js';
import tema03 from './tema-03-escritorio-windows.js';
import tema04 from './tema-04-barra-tareas.js';
import tema05 from './tema-05-menu-inicio.js';
import tema06 from './tema-06-papelera-reciclaje.js';
import tema07 from './tema-07-gestion-usuarios.js';
import tema08 from './tema-08-herramientas-utilidades.js';

// Metadatos del curso
export const cursoInfo = {
  id: "intro-windows",
  titulo: "Introducción al Sistema Operativo Windows",
  descripcion: "Aprende a navegar y utilizar Windows de manera eficiente. Desde los elementos básicos hasta las herramientas avanzadas del sistema operativo. Un curso completo que te llevará desde principiante hasta usuario competente de Windows.",
  nivel: "Principiante",
  duracion: "5-7 horas",
  categoria: "Sistemas Operativos",
  objetivos: [
    "Dominar los elementos básicos de Windows: ratón, teclado y ventanas",
    "Navegar eficientemente por el Explorador de Windows",
    "Personalizar y organizar el escritorio de manera óptima",
    "Utilizar la barra de tareas para el control de aplicaciones",
    "Aprovechar todas las funciones del menú de Inicio",
    "Gestionar archivos mediante la papelera de reciclaje",
    "Configurar usuarios y medidas básicas de seguridad",
    "Utilizar herramientas del sistema y mantener Windows actualizado"
  ],
  prerequisitos: [
    "Conocimientos básicos de computación",
    "Acceso a un equipo con Windows 10 o superior",
    "Familiaridad con conceptos básicos de informática"
  ],
  audiencia: [
    "Principiantes en informática",
    "Usuarios que migran de otros sistemas operativos",
    "Estudiantes de informática básica",
    "Adultos mayores que se inician en la computación",
    "Profesionales que necesitan actualizar conocimientos"
  ],
  skills: [
    "Navegación por Windows",
    "Gestión de archivos y carpetas",
    "Personalización del sistema",
    "Configuración básica de seguridad",
    "Uso de herramientas del sistema",
    "Organización del espacio de trabajo digital"
  ],
  version: "1.0.0",
  fechaCreacion: "2024-12-19",
  fechaActualizacion: "2024-12-19",
  autor: "InfoAprende Education Team",
  idioma: "es",
  dificultad: {
    nivel: "Principiante",
    escala: "Principiante | Intermedio | Avanzado",
    puntuacion: 3,
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
  '7': tema07,
  '8': tema08
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
  for (let i = 1; i <= 8; i++) {
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
