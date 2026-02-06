const express = require('express');
const router = express.Router();

// Montar rutas docentes adicionales
const pruebasRoutes = require('./docente.pruebas.routes');
router.use('/docente/pruebas', pruebasRoutes);

module.exports = router;
