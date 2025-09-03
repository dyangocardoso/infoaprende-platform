// Test de funcionamiento completo del sistema
console.log('🧪 Iniciando test completo del sistema InfoAprende...\n');

async function testCompleto() {
  let errores = [];
  
  try {
    // 1. Test de configuración de base de datos
    console.log('1️⃣ Probando configuración de base de datos...');
    const { connectDB } = require('./config/database-smart');
    const sequelize = await connectDB();
    console.log('   ✅ Base de datos conectada');
    
    // 2. Test de modelos
    console.log('2️⃣ Probando modelos...');
    const defineUserModel = require('./models/user.model');
    const defineCursoModel = require('./models/curso.model');
    const defineProgresoModel = require('./models/progreso.model');
    
    const User = defineUserModel(sequelize);
    const Curso = defineCursoModel(sequelize);
    const ProgresoUsuario = defineProgresoModel(sequelize);
    
    console.log('   ✅ Modelos creados correctamente');
    
    // 3. Test de sincronización
    console.log('3️⃣ Sincronizando tablas...');
    await sequelize.sync({ force: false });
    console.log('   ✅ Tablas sincronizadas');
    
    // 4. Test básico de inserción (solo si no existe)
    console.log('4️⃣ Probando operaciones básicas...');
    const testUser = await User.findOne({ where: { email: 'test@test.com' } });
    if (!testUser) {
      const bcrypt = require('bcryptjs');
      const hashedPassword = await bcrypt.hash('123456', 10);
      
      await User.create({
        nombre: 'Usuario Test',
        email: 'test@test.com',
        password: hashedPassword,
        rol: 'estudiante',
        grado: 'Primero'
      });
      console.log('   ✅ Usuario de prueba creado');
    } else {
      console.log('   ✅ Usuario de prueba ya existe');
    }
    
    // 5. Test de consulta
    const usuarios = await User.findAll({ limit: 5 });
    console.log(`   ✅ Consulta exitosa: ${usuarios.length} usuarios encontrados`);
    
    await sequelize.close();
    console.log('\n🎉 Todos los tests pasaron correctamente!');
    
  } catch (error) {
    errores.push(error.message);
    console.error('\n❌ Error en test:', error.message);
    
    // Sugerencias de solución
    if (error.code === 'ECONNREFUSED') {
      console.log('💡 PostgreSQL no está disponible. El sistema usará SQLite automáticamente.');
    } else if (error.name === 'SequelizeValidationError') {
      console.log('💡 Error de validación en los datos.');
    } else if (error.name === 'SequelizeDatabaseError') {
      console.log('💡 Error en la base de datos. Verificar configuración.');
    }
  }
  
  if (errores.length === 0) {
    console.log('\n✅ SISTEMA FUNCIONANDO CORRECTAMENTE');
    console.log('🚀 Puedes iniciar el servidor con: npm run dev');
  } else {
    console.log('\n⚠️  SISTEMA TIENE PROBLEMAS:');
    errores.forEach((error, i) => console.log(`   ${i + 1}. ${error}`));
  }
}

testCompleto();
