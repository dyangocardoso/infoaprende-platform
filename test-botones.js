// Script de prueba para verificar funcionalidades de botones
// Ejecutar este script en la consola del navegador en la página del curso

console.log('🧪 INICIANDO PRUEBAS DE BOTONES');

// 1. Verificar que los elementos existen
const botonCursoCompleto = document.querySelector('button[title*="curso"]');
const botonesTema = document.querySelectorAll('button[title*="tema"]');

console.log('📋 VERIFICACIÓN DE ELEMENTOS:');
console.log('- Botón curso completo encontrado:', !!botonCursoCompleto);
console.log('- Botones de tema encontrados:', botonesTema.length);

// 2. Verificar que las funciones están disponibles en window
console.log('📋 VERIFICACIÓN DE FUNCIONES:');
console.log('- React DevTools disponible:', !!window.__REACT_DEVTOOLS_GLOBAL_HOOK__);

// 3. Simular clics (sin ejecutar la navegación real)
if (botonCursoCompleto) {
    console.log('🎯 Simulando clic en botón curso completo...');
    // No ejecutamos el clic real para evitar navegación
    console.log('- Botón disponible para clic');
} else {
    console.error('❌ Botón curso completo no encontrado');
}

// 4. Verificar localStorage
const progreso = localStorage.getItem('progreso-infoaprende');
console.log('💾 PROGRESO EN LOCALSTORAGE:', progreso ? JSON.parse(progreso) : 'No encontrado');

// 5. Verificar rutas disponibles
console.log('🛣️ RUTAS VERIFICADAS:');
console.log('- Ruta actual:', window.location.pathname);
console.log('- Hash actual:', window.location.hash);

console.log('✅ PRUEBAS COMPLETADAS - Revisa los resultados arriba');
