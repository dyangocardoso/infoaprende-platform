// Configuración inteligente que detecta si PostgreSQL está disponible
const { Sequelize } = require('sequelize');
const path = require('path');

let sequelize = null;
let dbType = 'No inicializada';

// Función para detectar PostgreSQL
async function detectPostgreSQL() {
  try {
    const testSequelize = new Sequelize(
      process.env.DB_NAME || 'postgres',
      process.env.DB_USER || 'postgres',
      process.env.DB_PASSWORD || '',
      {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        dialect: 'postgres',
        logging: false
      }
    );
    
    await testSequelize.authenticate();
    await testSequelize.close();
    return true;
  } catch (error) {
    return false;
  }
}

// Inicializar base de datos
async function initializeDatabase() {
  const hasPostgreSQL = await detectPostgreSQL();
  
  if (hasPostgreSQL) {
    // Usar PostgreSQL
    sequelize = new Sequelize(
      process.env.DB_NAME || 'infoaprende',
      process.env.DB_USER || 'postgres',
      process.env.DB_PASSWORD || '',
      {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        dialect: 'postgres',
        logging: process.env.NODE_ENV === 'development' ? console.log : false,
        define: {
          timestamps: true,
          underscored: true,
          createdAt: 'created_at',
          updatedAt: 'updated_at'
        }
      }
    );
    dbType = 'PostgreSQL';
  } else {
    // Usar SQLite como fallback
    sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: path.join(__dirname, '..', 'database', 'infoaprende.sqlite'),
      logging: process.env.NODE_ENV === 'development' ? console.log : false,
      define: {
        timestamps: true,
        underscored: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
      }
    });
    dbType = 'SQLite (temporal)';
  }
  
  return { sequelize, dbType };
}

// Función para conectar
async function connectDB() {
  try {
    if (!sequelize) {
      const result = await initializeDatabase();
      sequelize = result.sequelize;
      dbType = result.dbType;
    }
    
    await sequelize.authenticate();
    console.log(`✅ Conectado a ${dbType} exitosamente`);
    
    if (dbType.includes('SQLite')) {
      console.log('📁 Archivo SQLite:', path.join(__dirname, '..', 'database', 'infoaprende.sqlite'));
      console.log('⚠️  Para usar PostgreSQL, instálalo y reinicia el servidor');
    }
    
    // No sincronizar aquí, se hará en index.js después de crear todos los modelos
    
    return sequelize;
    
  } catch (error) {
    console.error(`❌ Error conectando a ${dbType}:`, error);
    process.exit(1);
  }
}

// Función para cerrar conexión
async function closeDB() {
  try {
    if (sequelize) {
      await sequelize.close();
      console.log(`🔌 Conexión a ${dbType} cerrada`);
    }
  } catch (error) {
    console.error('❌ Error cerrando conexión:', error);
  }
}

module.exports = {
  get sequelize() { return sequelize; },
  get dbType() { return dbType; },
  connectDB,
  closeDB
};
