const { DataTypes } = require('sequelize');

// Lista de niveles permitidos, centralizada para coherencia con migraciones y controladores
const ALLOWED_NIVELES = ['inicial', 'primario', 'secundario', 'tecnico', 'otros'];

function defineTemarioModel(sequelize) {
  const Temario = sequelize.define('Temario', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    titulo: { type: DataTypes.STRING(512), allowNull: false },
    nivel: { 
      type: DataTypes.ENUM(...ALLOWED_NIVELES), 
      allowNull: false,
      validate: { isIn: { args: [ALLOWED_NIVELES], msg: 'Nivel inválido. Valores permitidos: ' + ALLOWED_NIVELES.join(', ') } }
    },
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
