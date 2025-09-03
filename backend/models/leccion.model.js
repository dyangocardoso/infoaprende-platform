// Modelo de Lección para PostgreSQL/SQLite
const { DataTypes } = require('sequelize');

function defineLeccionModel(sequelizeInstance) {
  const Leccion = sequelizeInstance.define('Leccion', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    curso_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cursos',
        key: 'id'
      }
    },
    titulo: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 255]
      }
    },
    contenido: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tipo: {
      type: DataTypes.ENUM('texto', 'video', 'quiz', 'ejercicio', 'evaluacion'),
      defaultValue: 'texto',
      allowNull: false
    },
    orden: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
    },
    activo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    duracion_estimada: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
      comment: 'Duración estimada en minutos'
    }
  }, {
    tableName: 'lecciones',
    indexes: [
      {
        fields: ['curso_id']
      },
      {
        fields: ['activo']
      },
      {
        fields: ['orden']
      },
      {
        fields: ['curso_id', 'orden'],
        unique: true
      }
    ]
  });

  return Leccion;
}

module.exports = defineLeccionModel;
