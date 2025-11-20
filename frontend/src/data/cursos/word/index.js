/**
 * Índice del curso: Procesador de Texto Word
 * Sistema de contenido modular - InfoAprende
 */

// Importar todos los temas del curso
import tema01 from './tema-01-entorno-word.js';
import tema02 from './tema-02-edicion-basica.js';
import tema03 from './tema-03-formato-documento.js';
import tema04 from './tema-04-ortografia-gramatica.js';
import tema05 from './tema-05-estilos.js';
import tema06 from './tema-06-imagenes-graficos.js';
import tema07 from './tema-07-tablas.js';
import tema08 from './tema-08-diagramas-organigramas.js';

// Metadatos del curso
export const cursoInfo = {
  id: "word",
  titulo: "Procesador de Texto Word",
  descripcion: "Domina Microsoft Word desde lo básico hasta lo avanzado. Aprende a crear documentos profesionales con formato, estilos, imágenes, tablas y diagramas.",
  nivel: "Intermedio",
  duracion: "5-6 horas",
  categoria: "Ofimática",
  objetivos: [
    "Dominar el entorno de trabajo de Microsoft Word",
    "Aplicar técnicas de edición básica y avanzada",
    "Formatear documentos con estilos profesionales",
    "Utilizar herramientas de corrección ortográfica y gramatical",
    "Crear y personalizar estilos para documentos consistentes",
    "Insertar y manipular imágenes y gráficos",
    "Crear y formatear tablas para organizar información",
    "Diseñar diagramas y organigramas visuales"
  ],
  prerequisitos: [
    "Conocimientos básicos de computación",
    "Familiaridad con Windows y gestión de archivos",
    "Conceptos básicos de procesamiento de texto"
  ],
  audiencia: [
    "Estudiantes universitarios y escolares",
    "Profesionales de oficina",
    "Secretarias y asistentes administrativos",
    "Escritores y editores",
    "Cualquier persona que trabaje con documentos"
  ],
  skills: [
    "Procesamiento profesional de texto",
    "Formato y diseño de documentos",
    "Corrección y revisión de textos",
    "Creación de documentos estructurados",
    "Uso avanzado de Microsoft Office"
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
      "Entorno de Word",
      "Edición y formato de texto",
      "Herramientas de corrección",
      "Estilos y diseño",
      "Contenido multimedia y tabular"
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
  '7': tema07,
  '8': tema08
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
