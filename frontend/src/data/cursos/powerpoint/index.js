/**
 * Índice del curso: Diseñador de Presentaciones PowerPoint
 * Sistema de contenido modular - InfoAprende
 */

// Importar todos los temas del curso
import tema01 from './tema-01-primeros-pasos.js';
import tema02 from './tema-02-vistas-diapositivas.js';
import tema03 from './tema-03-manejo-objetos.js';
import tema04 from './tema-04-diseno.js';
import tema05 from './tema-05-texto.js';
import tema06 from './tema-06-imagenes-formas.js';
import tema07 from './tema-07-animaciones-transiciones.js';

// Metadatos del curso
export const cursoInfo = {
  id: "powerpoint",
  titulo: "Diseñador de Presentaciones PowerPoint",
  descripcion: "Crea presentaciones impactantes y profesionales con Microsoft PowerPoint. Desde los fundamentos básicos hasta técnicas avanzadas de diseño y animación.",
  nivel: "Intermedio",
  duracion: "4-5 horas",
  categoria: "Ofimática",
  objetivos: [
    "Dominar la interfaz y herramientas fundamentales de PowerPoint",
    "Crear presentaciones profesionales con diseños atractivos",
    "Gestionar objetos, texto e imágenes de manera eficiente",
    "Aplicar animaciones y transiciones apropiadas",
    "Configurar presentaciones para diferentes audiencias",
    "Exportar y compartir presentaciones en múltiples formatos",
    "Implementar mejores prácticas de diseño y comunicación visual"
  ],
  prerequisitos: [
    "Conocimientos básicos de computación",
    "Familiaridad con Windows y gestión de archivos",
    "Conceptos básicos de ofimática"
  ],
  audiencia: [
    "Estudiantes y profesores",
    "Profesionales de todas las áreas",
    "Emprendedores y consultores",
    "Especialistas en marketing y ventas",
    "Cualquier persona que necesite crear presentaciones"
  ],
  skills: [
    "Creación de presentaciones multimedia",
    "Diseño visual y comunicación efectiva",
    "Gestión de contenido digital",
    "Técnicas de presentación profesional",
    "Uso avanzado de herramientas de Microsoft Office"
  ],
  version: "1.0.0",
  fechaCreacion: "2024-12-19",
  fechaActualizacion: "2024-12-19",
  autor: "InfoAprende Education Team",
  idioma: "es",
  dificultad: {
    conceptual: "Intermedio",
    tecnico: "Intermedio",
    practico: "Intermedio"
  },
  certificacion: {
    disponible: true,
    requisitoCompletitud: 85,
    tematicas: [
      "Fundamentos de PowerPoint",
      "Diseño de presentaciones", 
      "Gestión de contenido multimedia",
      "Animaciones y transiciones",
      "Presentación profesional"
    ]
  }
};

// Exportar todos los temas
export const temas = {
  '1': tema01,
  '2': tema02,
  '3': tema03,
  '4': tema04,
  '5': tema05,
  '6': tema06,
  '7': tema07
};

// Funciones helper
export const obtenerInfoCurso = () => cursoInfo;
export const obtenerTema = (temaId) => temas[temaId] || null;
export const obtenerTodosTemas = () => Object.values(temas);
export const temaExiste = (temaId) => Object.prototype.hasOwnProperty.call(temas, temaId);

// Función para validar integridad del curso
export const validarCurso = () => {
  const resultado = {
    valido: true,
    errores: [],
    estadisticas: {
      totalTemas: Object.keys(temas).length,
      temasConRecursos: 0,
      temasConEvaluacion: 0,
      duracionTotal: 0
    }
  };

  Object.entries(temas).forEach(([id, tema]) => {
    if (!tema.titulo || !tema.duracion || !tema.objetivos) {
      resultado.errores.push(`Tema ${id}: Faltan campos obligatorios`);
      resultado.valido = false;
    }
    
    if (tema.recursos && Object.keys(tema.recursos).length > 0) {
      resultado.estadisticas.temasConRecursos++;
    }
    
    if (tema.evaluacion) {
      resultado.estadisticas.temasConEvaluacion++;
    }
  });

  return resultado;
};

// Función para obtener estadísticas del curso
export const obtenerEstadisticas = () => {
  const stats = {
    totalTemas: Object.keys(temas).length,
    duracionPromedio: 0,
    objetivosPorTema: 0,
    seccionesPorTema: 0,
    actividadesPorTema: 0
  };

  const todosLosTemas = Object.values(temas);
  
  // Calcular promedios
  stats.objetivosPorTema = todosLosTemas.reduce((sum, tema) => 
    sum + (tema.objetivos ? tema.objetivos.length : 0), 0) / stats.totalTemas;
  
  stats.seccionesPorTema = todosLosTemas.reduce((sum, tema) => 
    sum + (tema.secciones ? tema.secciones.length : 0), 0) / stats.totalTemas;

  return stats;
};

export default {
  info: cursoInfo,
  temas,
  obtenerInfoCurso,
  obtenerTema,
  obtenerTodosTemas,
  temaExiste,
  validarCurso,
  obtenerEstadisticas
};
