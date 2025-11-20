// Modelo de Progreso del Usuario
const { DataTypes } = require('sequelize');

function defineProgresoModel(sequelizeInstance) {
  const ProgresoUsuario = sequelizeInstance.define('ProgresoUsuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'usuarios',
      key: 'id'
    }
  },
  curso_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'cursos',
      key: 'id'
    }
  },
  leccion_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'lecciones',
      key: 'id'
    }
  },
  completado: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  fecha_completado: {
    type: DataTypes.DATE,
    allowNull: true
  },
  tiempo_dedicado: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    comment: 'Tiempo en minutos'
  },
  puntuacion: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    validate: {
      min: 0,
      max: 100
    }
  }
}, {
  tableName: 'progreso_usuarios',
  indexes: [
    {
      unique: true,
      fields: ['usuario_id', 'leccion_id']
    },
    {
      fields: ['usuario_id']
    },
    {
      fields: ['curso_id']
    }
  ],
  hooks: {
    beforeUpdate: (progreso, options) => {
      // Establecer fecha de completado automáticamente
      if (progreso.completado && !progreso.fecha_completado) {
        progreso.fecha_completado = new Date();
      }
    }
  }
});

  return ProgresoUsuario;
}

module.exports = defineProgresoModel;
