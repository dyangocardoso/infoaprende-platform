const express = require('express');
const router = express.Router();
const preguntaController = require('../controllers/pregunta.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const requireRole = require('../middlewares/role.middleware');

// Rutas para preguntas dentro de una evaluacion
router.get('/', authMiddleware.verifyToken, requireRole('docente'), preguntaController.listByEvaluacion);
router.post('/', authMiddleware.verifyToken, requireRole('docente'), preguntaController.create);
router.get('/:id', authMiddleware.verifyToken, requireRole('docente'), preguntaController.getById);
router.put('/:id', authMiddleware.verifyToken, requireRole('docente'), preguntaController.update);
router.delete('/:id', authMiddleware.verifyToken, requireRole('docente'), preguntaController.delete);

module.exports = router;
