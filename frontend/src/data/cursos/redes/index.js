/**
 * Índice del curso: Introducción a las Redes Informáticas
 * Estructura compatible con `intro-informatica/index.js`
 * Fecha: 2025-10-23
 */

// Importar temas
import tema01 from './tema-01-fundamentos-ventajas.js';
import tema02 from './tema-02-tipos-clasificacion.js';
import tema03 from './tema-03-topologias.js';
import tema04 from './tema-04-cableado-estructurado.js';
import tema05 from './tema-05-dispositivos-red.js';
import tema06 from './tema-06-protocolos.js';
import tema07 from './tema-07-modelos-osi-tcpip.js';
import tema08 from './tema-08-direccionamiento-ip.js';
import tema09 from './tema-09-seguridad-basica.js';

// Metadatos del curso
export const cursoInfo = {
  id: 'redes',
  titulo: 'Introducción a las Redes Informáticas',
  descripcion: 'Curso básico sobre conceptos, topologías, dispositivos, protocolos, direccionamiento y seguridad en redes.',
  nivel: 'Principiante',
  duracion: '4-6 horas',
  categoria: 'Redes',
  objetivos: [
    'Conocer los fundamentos y ventajas de las redes informáticas',
    'Identificar tipos y clasificación de redes',
    'Comprender topologías y cableado estructurado',
    'Diferenciar dispositivos de red y su función',
    'Entender modelos de referencia OSI y TCP/IP',
    'Manejar conceptos básicos de direccionamiento IP',
    'Aplicar nociones de seguridad básica en redes'
  ],
  prerequisitos: [
    'Conocimientos básicos de computación',
    'Uso elemental de sistemas operativos'
  ],
  audiencia: [
    'Estudiantes iniciando en redes',
    'Técnicos que requieren fundamentos de redes',
    'Profesionales que desean una visión general'
  ],
  skills: [
    'Fundamentos de redes',
    'Topologías y cableado',
    'Configuración básica de dispositivos',
    'Conceptos de direccionamiento IP',
    'Buenas prácticas de seguridad'
  ],
  version: '1.0.0',
  fechaCreacion: '2025-10-23',
  fechaActualizacion: '2025-10-23',
  autor: 'InfoAprende Education Team',
  idioma: 'es',
  dificultad: {
    nivel: 'Principiante',
    escala: 'Principiante | Intermedio | Avanzado',
    puntuacion: 4,
    escalaNumerica: '1-10'
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
  '8': tema08,
  '9': tema09
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

  // Verificar que todos los temas existen (se esperan 9 temas)
  for (let i = 1; i <= 9; i++) {
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
    temasEsperados: 9
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
