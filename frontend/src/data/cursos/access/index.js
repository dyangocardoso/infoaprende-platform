/**
 * Índice del curso: Gestor de Base de Datos Access
 * Estructura modular igual a otros cursos
 */

import tema01 from './tema-01-fundamentos-y-entorno.js';
import tema02 from './tema-02-tablas-y-tipos-de-datos.js';
import tema03 from './tema-03-relaciones.js';
import tema04 from './tema-04-propiedades-de-campos.js';
import tema05 from './tema-05-las-consultas.js';
import tema06 from './tema-06-formularios.js';
import tema07 from './tema-07-informes.js';
import tema08 from './tema-08-controles-de-formularios-e-informes.js';
import tema09 from './tema-09-macros.js';

// Temas como objeto para compatibilidad modular
const temas = {
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

// Metadatos del curso
export const cursoInfo = {
  id: "access",
  titulo: "Gestor de Base de Datos Access",
  descripcion: "Aprende a gestionar bases de datos con Microsoft Access desde cero hasta nivel avanzado.",
  nivel: "Intermedio",
  duracion: "3-4 horas",
  categoria: "Bases de datos"
};

const DEFAULT_RECURSOS = {
  documentos: [ { titulo: 'Material complementario: Access (guía rápida)', url: '/recursos/access/guia-rapida.pdf' } ],
  enlaces: [ { titulo: 'Documentación de Microsoft Access', url: 'https://support.microsoft.com/es-es/access' } ],
  videos: [ { titulo: 'Introducción a Microsoft Access', url: 'https://www.youtube.com/watch?v=QwQnYpF2F6A' } ]
};

const ensureRecursos = (t) => {
  if (!t) return t;
  if (!Object.prototype.hasOwnProperty.call(t, 'recursos')) {
    t.recursos = { documentos: [], enlaces: [], videos: [] };
  }

  const r = t.recursos || { documentos: [], enlaces: [], videos: [] };
  const estaVacio = (arr) => !arr || arr.length === 0;

  // Si el tema no tiene recursos (todas las listas vacías), asignar recursos por defecto
  if (estaVacio(r.documentos) && estaVacio(r.enlaces) && estaVacio(r.videos)) {
    // clonar DEFAULT_RECURSOS para evitar referencias compartidas
    t.recursos = JSON.parse(JSON.stringify(DEFAULT_RECURSOS));
  }

  return t;
};

export const obtenerTema = (id) => ensureRecursos(temas[id] || null);
export const obtenerTodosTemas = () => Object.values(temas).map(ensureRecursos);
export const temaExiste = (id) => Object.prototype.hasOwnProperty.call(temas, id);
export const obtenerInfoCurso = () => cursoInfo;

export default {
  info: cursoInfo,
  temas,
  obtenerTema,
  obtenerTodosTemas,
  obtenerInfoCurso,
  temaExiste
};
