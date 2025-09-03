// Script de diagnóstico para InfoAprende
require('dotenv').config();

async function diagnostico() {
  console.log('🔍 DIAGNÓSTICO DE INFOAPRENDE');
  console.log('='.repeat(50));
  
  console.log('\n📋 Variables de entorno:');
  console.log('PORT:', process.env.PORT || 'No definido');
  console.log('DB_HOST:', process.env.DB_HOST || 'No definido');
  console.log('DB_PORT:', process.env.DB_PORT || 'No definido');
  console.log('DB_NAME:', process.env.DB_NAME || 'No definido');
  console.log('DB_USER:', process.env.DB_USER || 'No definido');
  console.log('DB_PASSWORD:', process.env.DB_PASSWORD ? '***' : 'No definido');
  console.log('JWT_SECRET:', process.env.JWT_SECRET ? '***' : 'No definido');
  
  console.log('\n🔌 Probando conexión a PostgreSQL...');
  try {
    const { Sequelize } = require('sequelize');
    const sequelize = new Sequelize(
      process.env.DB_NAME || 'infoaprende',
      process.env.DB_USER || 'postgres',
      process.env.DB_PASSWORD || '',
      {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        dialect: 'postgres',
        logging: false
      }
    );
    
    await sequelize.authenticate();
    console.log('✅ PostgreSQL: Conectado exitosamente');
    await sequelize.close();
  } catch (error) {
    console.log('❌ PostgreSQL: Error de conexión:', error.message);
  }
  
  console.log('\n💾 Probando SQLite (fallback)...');
  try {
    const { Sequelize } = require('sequelize');
    const path = require('path');
    const sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: path.join(__dirname, 'backend', 'database', 'infoaprende.sqlite'),
      logging: false
    });
    
    await sequelize.authenticate();
    console.log('✅ SQLite: Conectado exitosamente');
    await sequelize.close();
  } catch (error) {
    console.log('❌ SQLite: Error de conexión:', error.message);
  }
  
  console.log('\n🌐 Probando servidor...');
  try {
    const response = await fetch('http://localhost:4000');
    if (response.ok) {
      console.log('✅ Servidor: Funcionando en http://localhost:4000');
    } else {
      console.log('⚠️  Servidor: Respuesta no OK:', response.status);
    }
  } catch (error) {
    console.log('❌ Servidor: No accesible:', error.message);
  }
  
  console.log('\n📁 Verificando archivos importantes...');
  const fs = require('fs');
  const files = [
    'backend/index.js',
    'backend/.env',
    'backend/models/user.model.js',
    'backend/controllers/auth.controller.js',
    'backend/config/database-smart.js'
  ];
  
  for (const file of files) {
    if (fs.existsSync(file)) {
      console.log(`✅ ${file}: Existe`);
    } else {
      console.log(`❌ ${file}: No encontrado`);
    }
  }
}

diagnostico().catch(console.error);
