const express = require('express');
const router = express.Router();
const evaluacionController = require('../controllers/evaluacion.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const docenteMiddleware = require('../middlewares/docente.middleware');

// Rutas para Evaluaciones usando Sequelize
router.get('/', authMiddleware.verifyToken, docenteMiddleware, evaluacionController.list);
router.post('/', authMiddleware.verifyToken, docenteMiddleware, evaluacionController.create);
router.get('/:id', authMiddleware.verifyToken, docenteMiddleware, evaluacionController.getById);
router.put('/:id', authMiddleware.verifyToken, docenteMiddleware, evaluacionController.update);
router.delete('/:id', authMiddleware.verifyToken, docenteMiddleware, evaluacionController.delete);
router.post('/:id/assign', authMiddleware.verifyToken, docenteMiddleware, evaluacionController.assign);

module.exports = router;
