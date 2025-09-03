// Definición de relaciones entre modelos
// IMPORTANTE: Estas relaciones se configurarán después de que la base de datos esté conectada

function setupAssociations() {
  const User = require('./user.model');
  const Curso = require('./curso.model');
  const Leccion = require('./leccion.model');
  const ProgresoUsuario = require('./progreso.model');

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

    console.log('✅ Asociaciones de modelos configuradas');
  }
}

module.exports = {
  setupAssociations,
  // Exportar modelos individualmente
  get User() { return require('./user.model'); },
  get Curso() { return require('./curso.model'); },
  get Leccion() { return require('./leccion.model'); },
  get ProgresoUsuario() { return require('./progreso.model'); }
};
