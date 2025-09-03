// Script simple para verificar el estado de la base de datos sin ejecutar migraciones
require('dotenv').config();

async function verifyDatabase() {
  try {
    console.log('🔍 Verificando estado de la base de datos...\n');
    
    // Conectar a la base de datos sin migraciones
    const { connectDB } = require('./config/database-smart');
    const sequelize = await connectDB();
    
    // Importar modelos sin crear asociaciones
    const defineUserModel = require('./models/user.model');
    const defineCursoModel = require('./models/curso.model');
    const defineLeccionModel = require('./models/leccion.model');
    const defineProgresoModel = require('./models/progreso.model');
    
    const User = defineUserModel(sequelize);
    const Curso = defineCursoModel(sequelize);
    const Leccion = defineLeccionModel(sequelize);
    const ProgresoUsuario = defineProgresoModel(sequelize);
    
    // Verificar solo conteos - sin migraciones
    const stats = {
      usuarios: await User.count(),
      cursos: await Curso.count(),
      lecciones: await Leccion.count(),
      progreso: await ProgresoUsuario.count()
    };
    
    console.log('📊 Estado actual de la base de datos:');
    console.log(`👥 Usuarios: ${stats.usuarios}`);
    console.log(`📚 Cursos: ${stats.cursos}`);
    console.log(`📖 Lecciones: ${stats.lecciones}`);
    console.log(`📈 Registros de progreso: ${stats.progreso}\n`);
    
    // Verificar usuarios por rol
    const roleStats = {
      administradores: await User.count({ where: { rol: 'administrador' } }),
      docentes: await User.count({ where: { rol: 'docente' } }),
      estudiantes: await User.count({ where: { rol: 'estudiante' } })
    };
    
    console.log('👤 Distribución por roles:');
    console.log(`🔑 Administradores: ${roleStats.administradores}`);
    console.log(`👨‍🏫 Docentes: ${roleStats.docentes}`);
    console.log(`👨‍🎓 Estudiantes: ${roleStats.estudiantes}\n`);
    
    // Verificar si hay datos suficientes
    let status = '✅ EXCELENTE';
    let issues = [];
    
    if (stats.usuarios === 0) {
      status = '❌ CRITICO';
      issues.push('No hay usuarios en la base de datos');
    } else if (roleStats.administradores === 0) {
      status = '⚠️ ADVERTENCIA';
      issues.push('No hay administradores');
    }
    
    if (stats.cursos === 0) {
      status = status === '✅ EXCELENTE' ? '⚠️ ADVERTENCIA' : status;
      issues.push('No hay cursos disponibles');
    }
    
    if (stats.lecciones === 0 && stats.cursos > 0) {
      status = status === '✅ EXCELENTE' ? '⚠️ ADVERTENCIA' : status;
      issues.push('Los cursos no tienen lecciones');
    }
    
    console.log(`🎯 Estado general: ${status}`);
    
    if (issues.length > 0) {
      console.log('\n🔍 Problemas detectados:');
      issues.forEach((issue, index) => {
        console.log(`   ${index + 1}. ${issue}`);
      });
      
      console.log('\n💡 Recomendación:');
      if (stats.usuarios === 0 || stats.cursos === 0) {
        console.log('   Ejecuta: node recreate-database.js');
      } else {
        console.log('   Ejecuta: node populate-database.js');
      }
    } else {
      console.log('\n🎉 ¡La base de datos está completamente configurada!');
    }
    
    await sequelize.close();
    
  } catch (error) {
    console.error('❌ Error verificando base de datos:', error.message);
    process.exit(1);
  }
}

// Ejecutar si se llama directamente
if (require.main === module) {
  verifyDatabase();
}

module.exports = { verifyDatabase };
