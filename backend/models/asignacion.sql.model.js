const { DataTypes } = require('sequelize');

function defineAsignacionModel(sequelize) {
  const Asignacion = sequelize.define('Asignacion', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    evaluacion_id: { type: DataTypes.INTEGER, allowNull: false },
    curso_id: { type: DataTypes.INTEGER, allowNull: true },
    grupo_id: { type: DataTypes.STRING(255), allowNull: true },
    fecha_asignacion: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    fecha_cierre: { type: DataTypes.DATE, allowNull: true },
    publicado_por: { type: DataTypes.INTEGER, allowNull: false },
    condiciones: { type: DataTypes.JSON, allowNull: true }
  }, {
    tableName: 'asignaciones',
    timestamps: true,
    indexes: [
      { fields: ['evaluacion_id'] },
      { fields: ['curso_id', 'grupo_id'] }
    ]
  });

  return Asignacion;
}

module.exports = defineAsignacionModel;
