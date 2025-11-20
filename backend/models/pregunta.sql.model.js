const { DataTypes } = require('sequelize');

function definePreguntaModel(sequelize) {
  const Pregunta = sequelize.define('Pregunta', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    evaluacion_id: { type: DataTypes.INTEGER, allowNull: false },
    tipo: { type: DataTypes.ENUM('mcq','tf','short'), allowNull: false, defaultValue: 'mcq' },
    enunciado: { type: DataTypes.TEXT, allowNull: false },
    opciones: { type: DataTypes.JSON, allowNull: true },
    respuesta_correcta: { type: DataTypes.JSON, allowNull: true },
    peso: { type: DataTypes.FLOAT, allowNull: false, defaultValue: 1 },
    orden: { type: DataTypes.INTEGER, allowNull: true }
  }, {
    tableName: 'preguntas',
    timestamps: true,
    indexes: [
      { fields: ['evaluacion_id'] },
      { fields: ['tipo'] }
    ]
  });

  return Pregunta;
}

module.exports = definePreguntaModel;
