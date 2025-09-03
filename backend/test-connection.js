// Script de prueba para verificar la conexión a PostgreSQL
require('dotenv').config();
const { Sequelize } = require('sequelize');

async function testConnection() {
  console.log('🔍 Probando conexión a PostgreSQL...');
  console.log('-----------------------------------');
  
  const sequelize = new Sequelize(
    process.env.DB_NAME || 'infoaprende',
    process.env.DB_USER || 'postgres',
    process.env.DB_PASSWORD || 'password',
    {
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 5432,
      dialect: 'postgres',
      logging: false
    }
  );

  try {
    // Probar autenticación
    await sequelize.authenticate();
    console.log('✅ Conexión a PostgreSQL exitosa');
    
    // Probar consulta simple
    const [results] = await sequelize.query('SELECT version()');
    console.log('📊 Versión de PostgreSQL:', results[0].version);
    
    // Verificar si existe la base de datos infoaprende
    const [databases] = await sequelize.query("SELECT datname FROM pg_database WHERE datname = 'infoaprende'");
    if (databases.length > 0) {
      console.log('✅ Base de datos "infoaprende" encontrada');
    } else {
      console.log('❌ Base de datos "infoaprende" NO encontrada');
      console.log('   Ejecuta: createdb infoaprende');
    }
    
    // Verificar tablas
    const [tables] = await sequelize.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_type = 'BASE TABLE'
    `);
    
    if (tables.length > 0) {
      console.log('✅ Tablas encontradas:', tables.map(t => t.table_name).join(', '));
    } else {
      console.log('⚠️  No se encontraron tablas');
      console.log('   Ejecuta el script: scripts/setup-postgresql.bat');
    }
    
  } catch (error) {
    console.error('❌ Error de conexión:');
    console.error('  Mensaje:', error.message);
    console.error('  Código:', error.code || 'N/A');
    
    if (error.code === 'ECONNREFUSED') {
      console.error('💡 Solución: PostgreSQL no está corriendo o no está instalado');
    } else if (error.code === 'ENOTFOUND') {
      console.error('💡 Solución: Verificar la dirección del host en .env');
    } else if (error.message.includes('password authentication failed')) {
      console.error('💡 Solución: Verificar usuario y contraseña en .env');
    }
  } finally {
    await sequelize.close();
    console.log('-----------------------------------');
    console.log('🔌 Conexión cerrada');
  }
}

// Ejecutar si se llama directamente
if (require.main === module) {
  testConnection();
}

module.exports = { testConnection };
