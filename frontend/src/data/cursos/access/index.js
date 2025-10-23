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

export const obtenerTema = (id) => temas[id] || null;
export const obtenerInfoCurso = () => cursoInfo;

export default {
  info: cursoInfo,
  temas,
  obtenerTema,
  obtenerInfoCurso
};
