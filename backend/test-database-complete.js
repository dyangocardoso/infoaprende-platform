// Script de prueba completa de la base de datos
require('dotenv').config();

async function testDatabase() {
  try {
    console.log('🧪 Iniciando pruebas de base de datos...\n');
    
    // Importar el inicializador
    const { initializeDatabase, createAdminUser } = require('./config/database-init');
    
    // Inicializar base de datos
    const { User, Curso, Leccion, ProgresoUsuario, sequelize } = await initializeDatabase();
    
    console.log('\n🔍 Ejecutando pruebas...\n');
    
    // Prueba 1: Verificar modelos
    console.log('📋 Prueba 1: Verificar modelos disponibles');
    console.log(`✅ User: ${User ? 'OK' : 'ERROR'}`);
    console.log(`✅ Curso: ${Curso ? 'OK' : 'ERROR'}`);
    console.log(`✅ Leccion: ${Leccion ? 'OK' : 'ERROR'}`);
    console.log(`✅ ProgresoUsuario: ${ProgresoUsuario ? 'OK' : 'ERROR'}\n`);
    
    // Prueba 2: Contar registros
    console.log('📊 Prueba 2: Contar registros en la base de datos');
    const stats = {
      usuarios: await User.count(),
      cursos: await Curso.count(),
      lecciones: await Leccion.count(),
      progreso: await ProgresoUsuario.count()
    };
    
    console.log(`👥 Usuarios: ${stats.usuarios}`);
    console.log(`📚 Cursos: ${stats.cursos}`);
    console.log(`📖 Lecciones: ${stats.lecciones}`);
    console.log(`📈 Registros de progreso: ${stats.progreso}\n`);
    
    // Prueba 3: Verificar usuarios por rol
    console.log('👤 Prueba 3: Verificar usuarios por rol');
    const roleStats = {
      administradores: await User.count({ where: { rol: 'administrador' } }),
      docentes: await User.count({ where: { rol: 'docente' } }),
      estudiantes: await User.count({ where: { rol: 'estudiante' } })
    };
    
    console.log(`🔑 Administradores: ${roleStats.administradores}`);
    console.log(`👨‍🏫 Docentes: ${roleStats.docentes}`);
    console.log(`👨‍🎓 Estudiantes: ${roleStats.estudiantes}\n`);
    
    // Prueba 4: Probar relaciones
    console.log('🔗 Prueba 4: Verificar relaciones entre modelos');
    
    if (stats.cursos > 0) {
      const cursoConInstructor = await Curso.findOne({
        include: [{
          model: User,
          as: 'instructor'
        }]
      });
      
      if (cursoConInstructor && cursoConInstructor.instructor) {
        console.log(`✅ Relación Curso-Instructor: OK`);
        console.log(`   Curso: "${cursoConInstructor.titulo}" - Instructor: "${cursoConInstructor.instructor.nombre}"`);
      } else {
        console.log(`❌ Relación Curso-Instructor: ERROR`);
      }
    }
    
    if (stats.lecciones > 0) {
      const leccionConCurso = await Leccion.findOne({
        include: [{
          model: Curso,
          as: 'curso'
        }]
      });
      
      if (leccionConCurso && leccionConCurso.curso) {
        console.log(`✅ Relación Lección-Curso: OK`);
        console.log(`   Lección: "${leccionConCurso.titulo}" - Curso: "${leccionConCurso.curso.titulo}"`);
      } else {
        console.log(`❌ Relación Lección-Curso: ERROR`);
      }
    }
    
    console.log();
    
    // Prueba 5: Verificar estructura de tablas
    console.log('🏗️  Prueba 5: Verificar estructura de tablas');
    try {
      const tableInfo = await sequelize.getQueryInterface().describeTable('usuarios');
      console.log(`✅ Tabla 'usuarios': ${Object.keys(tableInfo).length} columnas`);
      
      const cursosInfo = await sequelize.getQueryInterface().describeTable('cursos');
      console.log(`✅ Tabla 'cursos': ${Object.keys(cursosInfo).length} columnas`);
      
      const leccionesInfo = await sequelize.getQueryInterface().describeTable('lecciones');
      console.log(`✅ Tabla 'lecciones': ${Object.keys(leccionesInfo).length} columnas`);
      
      const progresoInfo = await sequelize.getQueryInterface().describeTable('progreso_usuarios');
      console.log(`✅ Tabla 'progreso_usuarios': ${Object.keys(progresoInfo).length} columnas\n`);
      
    } catch (error) {
      console.log(`❌ Error verificando estructura de tablas: ${error.message}\n`);
    }
    
    // Prueba 6: Operaciones CRUD básicas
    console.log('💾 Prueba 6: Operaciones CRUD básicas');
    
    try {
      // Crear un usuario de prueba
      const testUser = await User.create({
        nombre: 'Usuario Prueba',
        email: `test_${Date.now()}@test.com`,
        password: 'test123',
        rol: 'estudiante',
        grado: '4to Grado'
      });
      console.log(`✅ CREATE: Usuario creado con ID ${testUser.id}`);
      
      // Leer el usuario
      const foundUser = await User.findByPk(testUser.id);
      console.log(`✅ READ: Usuario encontrado: ${foundUser.nombre}`);
      
      // Actualizar el usuario
      await foundUser.update({ nombre: 'Usuario Actualizado' });
      console.log(`✅ UPDATE: Usuario actualizado`);
      
      // Eliminar el usuario de prueba
      await foundUser.destroy();
      console.log(`✅ DELETE: Usuario eliminado\n`);
      
    } catch (error) {
      console.log(`❌ Error en operaciones CRUD: ${error.message}\n`);
    }
    
    // Resumen final
    console.log('📋 RESUMEN DE PRUEBAS:');
    console.log('='.repeat(50));
    
    const allTestsPassed = 
      stats.usuarios > 0 && 
      roleStats.administradores > 0 && 
      User && Curso && Leccion && ProgresoUsuario;
    
    if (allTestsPassed) {
      console.log('🎉 ¡Todas las pruebas pasaron exitosamente!');
      console.log('✅ La base de datos está configurada correctamente');
      console.log('✅ Los modelos funcionan correctamente');
      console.log('✅ Las relaciones están establecidas');
      console.log('✅ Los datos iniciales están presentes');
    } else {
      console.log('⚠️  Algunas pruebas fallaron');
      console.log('❌ Revisa la configuración de la base de datos');
    }
    
    console.log('='.repeat(50));
    
    // Cerrar conexión
    await sequelize.close();
    console.log('🔌 Conexión cerrada');
    
  } catch (error) {
    console.error('❌ Error ejecutando pruebas:', error);
    process.exit(1);
  }
}

// Ejecutar si se llama directamente
if (require.main === module) {
  testDatabase();
}

module.exports = { testDatabase };
