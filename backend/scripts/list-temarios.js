const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const dbPath = path.join(__dirname, '..', 'database', 'infoaprende.sqlite');
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY, (err) => {
  if (err) {
    console.error('Error abriendo BD:', err.message);
    process.exit(1);
  }
});

db.all('SELECT id, titulo, nivel, descripcion, autor_id, estado, created_at FROM temarios', [], (err, rows) => {
  if (err) {
    console.error('Error consultando temarios:', err.message);
    process.exit(1);
  }
  console.log(JSON.stringify(rows, null, 2));
  db.close();
});
