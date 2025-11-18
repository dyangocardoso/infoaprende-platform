// Definición de relaciones entre modelos
// IMPORTANTE: Estas relaciones se configurarán después de que la base de datos esté conectada

function setupAssociations() {
  const User = require('./user.model');
  const Curso = require('./curso.model');
  const Leccion = require('./leccion.model');
  const ProgresoUsuario = require('./progreso.model');

  // Nuevos modelos opcionales (definidos para bases relacionales)
  let Temario, Evaluacion, Plantilla, Asignacion, Intento, Pregunta;
  try {
    Temario = require('./temario.sql.model');
    Evaluacion = require('./evaluacion.sql.model');
    Plantilla = require('./plantilla.sql.model');
    Asignacion = require('./asignacion.sql.model');
    Intento = require('./intento.sql.model');
    Pregunta = require('./pregunta.sql.model');
  } catch (e) {
    // No todos los modelos pueden estar disponibles; ignorar
  }

  // Definir asociaciones solo si los modelos están disponibles
  if (User && Curso && Leccion && ProgresoUsuario) {
    
    // Usuario -> Cursos (Un instructor puede tener muchos cursos)
    User.hasMany(Curso, {
      foreignKey: 'instructor_id',
      as: 'cursosImpartidos'
    });

    Curso.belongsTo(User, {
      foreignKey: 'instructor_id',
      as: 'instructor'
    });

    // Usuario -> Progreso (Un usuario puede tener progreso en muchos cursos)
    User.hasMany(ProgresoUsuario, {
      foreignKey: 'usuario_id',
      as: 'progresos'
    });

    ProgresoUsuario.belongsTo(User, {
      foreignKey: 'usuario_id',
      as: 'usuario'
    });

    // Curso -> Progreso (Un curso puede tener progreso de muchos usuarios)
    Curso.hasMany(ProgresoUsuario, {
      foreignKey: 'curso_id',
      as: 'progresos'
    });

    ProgresoUsuario.belongsTo(Curso, {
      foreignKey: 'curso_id',
      as: 'curso'
    });

    // Curso -> Lecciones (Un curso puede tener muchas lecciones)
    Curso.hasMany(Leccion, {
      foreignKey: 'curso_id',
      as: 'lecciones'
    });

    Leccion.belongsTo(Curso, {
      foreignKey: 'curso_id',
      as: 'curso'
    });

    // Leccion -> Progreso (Una lección puede tener progreso de muchos usuarios)
    Leccion.hasMany(ProgresoUsuario, {
      foreignKey: 'leccion_id',
      as: 'progresos'
    });

    ProgresoUsuario.belongsTo(Leccion, {
      foreignKey: 'leccion_id',
      as: 'leccion'
    });

    // Relación muchos a muchos: Usuario <-> Curso a través de ProgresoUsuario
    User.belongsToMany(Curso, {
      through: ProgresoUsuario,
      foreignKey: 'usuario_id',
      otherKey: 'curso_id',
      as: 'cursosInscritos'
    });

    Curso.belongsToMany(User, {
      through: ProgresoUsuario,
      foreignKey: 'curso_id',
      otherKey: 'usuario_id',
      as: 'estudiantesInscritos'
    });

    // Si modelos docentes están disponibles, configurar relaciones
    if (Temario && Evaluacion && Plantilla && Asignacion && Intento) {
      // Temario -> User
      Temario.belongsTo(User, { foreignKey: 'autor_id', as: 'autor' });
      User.hasMany(Temario, { foreignKey: 'autor_id', as: 'temarios' });

      // Evaluacion -> User
      Evaluacion.belongsTo(User, { foreignKey: 'autor_id', as: 'autor' });
      User.hasMany(Evaluacion, { foreignKey: 'autor_id', as: 'evaluaciones' });

      // Evaluacion -> Plantilla
      Evaluacion.belongsTo(Plantilla, { foreignKey: 'plantilla_id', as: 'plantilla' });
      Plantilla.hasMany(Evaluacion, { foreignKey: 'plantilla_id', as: 'evaluaciones' });

      // Asignacion -> Evaluacion
      Asignacion.belongsTo(Evaluacion, { foreignKey: 'evaluacion_id', as: 'evaluacion' });
      Evaluacion.hasMany(Asignacion, { foreignKey: 'evaluacion_id', as: 'asignaciones' });

      // Intento -> Evaluacion, Intento -> User
      Intento.belongsTo(Evaluacion, { foreignKey: 'evaluacion_id', as: 'evaluacion' });
      Evaluacion.hasMany(Intento, { foreignKey: 'evaluacion_id', as: 'intentos' });
      Intento.belongsTo(User, { foreignKey: 'alumno_id', as: 'alumno' });
      User.hasMany(Intento, { foreignKey: 'alumno_id', as: 'intentos' });
    }

    console.log('✅ Asociaciones de modelos configuradas');
  }
}

module.exports = {
  setupAssociations,
  // Exportar modelos individualmente
  get User() { return require('./user.model'); },
  get Curso() { return require('./curso.model'); },
  get Leccion() { return require('./leccion.model'); },
  get ProgresoUsuario() { return require('./progreso.model'); },
  // Nuevos modelos docentes
  get Temario() { try { return require('./temario.sql.model'); } catch(e) { return null; } },
  get Evaluacion() { try { return require('./evaluacion.sql.model'); } catch(e) { return null; } },
  get Plantilla() { try { return require('./plantilla.sql.model'); } catch(e) { return null; } },
  get Asignacion() { try { return require('./asignacion.sql.model'); } catch(e) { return null; } },
  get Intento() { try { return require('./intento.sql.model'); } catch(e) { return null; } },
  get Pregunta() { try { return require('./pregunta.sql.model'); } catch(e) { return null; } }
};
