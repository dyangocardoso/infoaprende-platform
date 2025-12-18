const { DataTypes } = require('sequelize');

function definePlantillaModel(sequelize) {
  const Plantilla = sequelize.define('Plantilla', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING(255), allowNull: false },
    tipo: { type: DataTypes.ENUM('pdf','html'), allowNull: false },
    descripcion: { type: DataTypes.TEXT, allowNull: true },
    contenido_html: { type: DataTypes.TEXT, allowNull: true },
    css: { type: DataTypes.TEXT, allowNull: true },
    recursos: { type: DataTypes.JSON, allowNull: true },
    version: { type: DataTypes.STRING(50), defaultValue: '1.0' },
    created_by: { type: DataTypes.INTEGER, allowNull: false }
  }, {
    tableName: 'plantillas',
    timestamps: true,
    indexes: [
      { fields: ['nombre'] }
    ]
  });

  return Plantilla;
}

module.exports = definePlantillaModel;
