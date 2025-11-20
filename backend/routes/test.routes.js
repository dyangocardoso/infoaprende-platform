const express = require('express');
const router = express.Router();

// Ejemplo de ruta protegida
router.get('/test', (req, res) => {
  res.json({ message: 'Ruta de prueba funcionando' });
});

module.exports = router;
