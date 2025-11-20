// Prueba para crear usuario como administrador
const adminEmail = 'admin@infoaprende.com';
const adminPassword = 'Admin123!';

async function testCreateUser() {
  try {
    // 1. Primero hacer login como administrador
    console.log('🔑 Iniciando sesión como administrador...');
    const loginResponse = await fetch('http://localhost:4000/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: adminEmail,
        password: adminPassword
      })
    });

    const loginData = await loginResponse.json();
    
    if (!loginResponse.ok || !loginData.token) {
      console.error('❌ Error en login:', loginData);
      return;
    }
    
    console.log('✅ Login exitoso, token obtenido');
    
    // 2. Crear un usuario docente
    const timestamp = Date.now();
    console.log('👨‍🏫 Creando usuario docente...');
    const createResponse = await fetch('http://localhost:4000/api/admin/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${loginData.token}`
      },
      body: JSON.stringify({
        nombre: 'Juan Pérez',
        email: `juan.profesor${timestamp}@escuela.com`,
        password: 'profesor123',
        rol: 'docente'
      })
    });

    const createData = await createResponse.json();
    
    if (createResponse.ok) {
      console.log('✅ Usuario docente creado exitosamente:');
      console.log(`   • Nombre: ${createData.user.nombre}`);
      console.log(`   • Email: ${createData.user.email}`);
      console.log(`   • Rol: ${createData.user.rol}`);
    } else {
      console.log('❌ Error creando usuario:', createData);
    }

    // 3. Crear un usuario estudiante
    console.log('👨‍🎓 Creando usuario estudiante...');
    const createStudentResponse = await fetch('http://localhost:4000/api/admin/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${loginData.token}`
      },
      body: JSON.stringify({
        nombre: 'Ana García',
        email: `ana.estudiante${timestamp}@escuela.com`,
        password: 'estudiante123',
        rol: 'estudiante',
        grado: '5° Básica'
      })
    });

    const createStudentData = await createStudentResponse.json();
    
    if (createStudentResponse.ok) {
      console.log('✅ Usuario estudiante creado exitosamente:');
      console.log(`   • Nombre: ${createStudentData.user.nombre}`);
      console.log(`   • Email: ${createStudentData.user.email}`);
      console.log(`   • Rol: ${createStudentData.user.rol}`);
      console.log(`   • Grado: ${createStudentData.user.grado}`);
    } else {
      console.log('❌ Error creando estudiante:', createStudentData);
    }

  } catch (error) {
    console.error('❌ Error de conexión:', error.message);
  }
}

// Ejecutar prueba
console.log('🚀 Iniciando prueba de creación de usuarios...');
testCreateUser();
