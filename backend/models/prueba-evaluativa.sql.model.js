const { DataTypes } = require('sequelize');

function definePruebaEvaluativaModel(sequelize) {
  const Prueba = sequelize.define('PruebaEvaluativa', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    curso: { type: DataTypes.STRING(255), allowNull: false },
    tipo: { type: DataTypes.ENUM('inicial','por-niveles','por-modulos'), allowNull: false },
    nivel: { type: DataTypes.STRING(128), allowNull: true },
    modulos: { type: DataTypes.JSON, allowNull: true },
    titulo: { type: DataTypes.STRING(512), allowNull: true },
    descripcion: { type: DataTypes.TEXT, allowNull: true },
    preguntas: { type: DataTypes.JSON, allowNull: false, defaultValue: [] },
    criterios_evaluacion: { type: DataTypes.JSON, allowNull: false, defaultValue: [] },
    tiempo_limite_min: { type: DataTypes.INTEGER, allowNull: true },
    creado_en: { type: DataTypes.DATE, allowNull: true },
    publicado: { type: DataTypes.BOOLEAN, defaultValue: false }
  }, {
    tableName: 'pruebas_evaluativas',
    timestamps: true,
    createdAt: 'creado_en',
    updatedAt: 'actualizado_en',
    indexes: [
      { fields: ['curso'] },
      { fields: ['tipo'] }
    ]
  });

  return Prueba;
}

module.exports = definePruebaEvaluativaModel;
