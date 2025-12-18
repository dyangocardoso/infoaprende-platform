const { DataTypes } = require('sequelize');

function defineIntentoModel(sequelize) {
  const Intento = sequelize.define('Intento', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    evaluacion_id: { type: DataTypes.INTEGER, allowNull: false },
    alumno_id: { type: DataTypes.INTEGER, allowNull: false },
    respuestas: { type: DataTypes.JSON, allowNull: true },
    puntuacion: { type: DataTypes.FLOAT, allowNull: true, defaultValue: 0 },
    estado: { type: DataTypes.ENUM('en-progreso','completado'), defaultValue: 'en-progreso' },
    started_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    finished_at: { type: DataTypes.DATE, allowNull: true }
  }, {
    tableName: 'intentos',
    timestamps: true,
    indexes: [
      { fields: ['evaluacion_id'] },
      { fields: ['alumno_id'] },
      { fields: ['finished_at'] }
    ]
  });

  return Intento;
}

module.exports = defineIntentoModel;
