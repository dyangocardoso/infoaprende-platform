// Modelo de Curso para PostgreSQL/SQLite
const { DataTypes } = require('sequelize');

function defineCursoModel(sequelizeInstance) {
  const Curso = sequelizeInstance.define('Curso', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo: {
    type: DataTypes.STRING(255),
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [3, 255]
    }
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  instructor_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'usuarios',
      key: 'id'
    }
  },
  grado: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  activo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  tableName: 'cursos',
  indexes: [
    {
      fields: ['instructor_id']
    },
    {
      fields: ['activo']
    },
    {
      fields: ['grado']
    }
  ]
});

  return Curso;
}

module.exports = defineCursoModel;
