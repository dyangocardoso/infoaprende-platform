const express = require('express');
const router = express.Router({ mergeParams: true });
const authMiddleware = require('../middlewares/auth.middleware');
const docenteMiddleware = require('../middlewares/docente.middleware');
const preguntaController = require('../controllers/pregunta.controller');

// Rutas para preguntas dentro de una evaluacion
router.get('/', authMiddleware.verifyToken, docenteMiddleware, preguntaController.listByEvaluacion);
router.post('/', authMiddleware.verifyToken, docenteMiddleware, preguntaController.create);
router.get('/:id', authMiddleware.verifyToken, docenteMiddleware, preguntaController.getById);
router.put('/:id', authMiddleware.verifyToken, docenteMiddleware, preguntaController.update);
router.delete('/:id', authMiddleware.verifyToken, docenteMiddleware, preguntaController.delete);

module.exports = router;
