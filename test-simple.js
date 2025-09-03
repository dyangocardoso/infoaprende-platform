// Script simple para probar el registro de usuario
async function testRegistration() {
  try {
    console.log('Probando registro de usuario...');
    
    const response = await fetch('http://localhost:4000/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre: 'Usuario Prueba',
        email: `prueba${Date.now()}@test.com`,
        password: 'password123',
        grado: '6to Grado',
        rol: 'estudiante'
      })
    });
    
    const data = await response.json();
    console.log('Resultado:', data);
    
    if (response.ok) {
      console.log('✅ Registro exitoso!');
    } else {
      console.log('❌ Error en el registro:', data);
    }
    
  } catch (error) {
    console.error('❌ Error de conexión:', error);
  }
}

testRegistration();
