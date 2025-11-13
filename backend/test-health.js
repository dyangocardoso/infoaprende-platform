// test-health.js - pequeño script para verificar /api/health
// Usa la API global fetch (Node 18+). Sale con código 0 en OK, distinto de 0 en fallo.
(async () => {
  const url = process.env.TEST_URL || 'http://localhost:4000/api/health';
  console.log('Running health check against', url);
  try {
    const res = await fetch(url, { method: 'GET' });
    const body = await res.text();
    if (res.ok) {
      console.log('Health check OK:', res.status);
      console.log(body);
      process.exit(0);
    }
    console.error('Health check failed:', res.status);
    console.error(body);
    process.exit(2);
  } catch (err) {
    console.error('Health check error:', err && err.message ? err.message : err);
    process.exit(3);
  }
})();
