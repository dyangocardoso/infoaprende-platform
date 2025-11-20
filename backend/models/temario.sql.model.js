const { DataTypes } = require('sequelize');

function defineTemarioModel(sequelize) {
  const Temario = sequelize.define('Temario', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    titulo: { type: DataTypes.STRING(512), allowNull: false },
    nivel: { type: DataTypes.ENUM('inicial','primario','secundario','tecnico','otros'), allowNull: false },
    descripcion: { type: DataTypes.TEXT, allowNull: true },
    unidades: { type: DataTypes.JSON, allowNull: true },
    autor_id: { type: DataTypes.INTEGER, allowNull: false },
    estado: { type: DataTypes.ENUM('borrador','publicado'), defaultValue: 'borrador' },
    metadata: { type: DataTypes.JSON, allowNull: true }
  }, {
    tableName: 'temarios',
    timestamps: true,
    indexes: [
      { fields: ['autor_id'] },
      { fields: ['nivel'] },
      { fields: ['estado'] }
    ]
  });

  return Temario;
}

module.exports = defineTemarioModel;
