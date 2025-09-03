// Test rápido de las rutas del backend
async function testBackendRoutes() {
  console.log('🧪 Probando rutas del backend...\n');
  
  const tests = [
    { name: 'Root', url: 'http://localhost:4000' },
    { name: 'Health', url: 'http://localhost:4000/api/health' },
    { name: 'Register', url: 'http://localhost:4000/api/users/register', method: 'POST' }
  ];
  
  for (const test of tests) {
    try {
      console.log(`📡 Probando ${test.name}: ${test.url}`);
      
      if (test.method === 'POST') {
        const response = await fetch(test.url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            nombre: 'Test User',
            email: `test${Date.now()}@test.com`,
            password: 'password123',
            grado: '5to Grado',
            rol: 'estudiante'
          })
        });
        
        console.log(`Status: ${response.status}`);
        const data = await response.json();
        console.log('Response:', data);
      } else {
        const response = await fetch(test.url);
        console.log(`Status: ${response.status}`);
        
        if (response.ok) {
          const data = await response.json();
          console.log('Response:', data);
        } else {
          console.log('Error response');
        }
      }
      
      console.log(''); // Línea en blanco
      
    } catch (error) {
      console.error(`❌ Error en ${test.name}:`, error.message);
      console.log(''); // Línea en blanco
    }
  }
}

testBackendRoutes();
