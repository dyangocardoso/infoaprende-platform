const { DataTypes } = require('sequelize');

function defineEvaluacionModel(sequelize) {
  const Evaluacion = sequelize.define('Evaluacion', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    titulo: { type: DataTypes.STRING(512), allowNull: false },
    nivel: { type: DataTypes.ENUM('inicial','primario','secundario','tecnico','otros'), allowNull: false },
    descripcion: { type: DataTypes.TEXT, allowNull: true },
    preguntas: { type: DataTypes.JSON, allowNull: true },
    tiempo_limite_min: { type: DataTypes.INTEGER, allowNull: true },
    ponderacion_total: { type: DataTypes.FLOAT, allowNull: true },
    autor_id: { type: DataTypes.INTEGER, allowNull: false },
    estado: { type: DataTypes.ENUM('borrador','publicada'), defaultValue: 'borrador' },
    plantilla_id: { type: DataTypes.INTEGER, allowNull: true }
  }, {
    tableName: 'evaluaciones',
    timestamps: true,
    indexes: [
      { fields: ['autor_id'] },
      { fields: ['nivel'] },
      { fields: ['estado'] }
    ]
  });

  return Evaluacion;
}

module.exports = defineEvaluacionModel;
