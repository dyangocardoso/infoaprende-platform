/**
 * Índice del curso: Nociones generales del computador
 * Generado automáticamente por herramientas de migración
 */

import tema01 from './tema-01-algoritmos-y-uso-basico.js';
import tema02 from './tema-02-elementos-que-componen-al-computador.js';
import tema03 from './tema-03-manejo-del-raton.js';

// Metadatos del curso
export const cursoInfo = {
  "id": "nociones-computador",
  "titulo": "Nociones generales del computador",
  "descripcion": "Aprende los conceptos básicos sobre el computador, sus componentes y algoritmos fundamentales.",
  "nivel": "Principiante",
  "duracion": "2-3 horas",
  "categoria": "Fundamentos"
};

// Exportar todos los temas
export const temas = {
  '1': tema01,
  '2': tema02,
  '3': tema03
};

// Funciones helper
export const obtenerInfoCurso = () => cursoInfo;

const ensureRecursos = (t) => {
  if (!t) return t;
  if (!Object.prototype.hasOwnProperty.call(t, 'recursos')) {
    t.recursos = { documentos: [], enlaces: [], videos: [] };
  }
  return t;
};

export const obtenerTema = (temaId) => ensureRecursos(temas[temaId] || null);
export const obtenerTodosTemas = () => Object.values(temas).map(ensureRecursos);
export const temaExiste = (temaId) => Object.prototype.hasOwnProperty.call(temas, temaId);

export default {
  info: cursoInfo,
  temas,
  obtenerInfoCurso,
  obtenerTema,
  obtenerTodosTemas,
  temaExiste
};
