const express = require('express');
const router = express.Router();
const evaluacionController = require('../controllers/evaluacion.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const requireRole = require('../middlewares/role.middleware');

// Rutas para Evaluaciones usando Sequelize
router.get('/', authMiddleware.verifyToken, requireRole('docente'), evaluacionController.list);
router.post('/', authMiddleware.verifyToken, requireRole('docente'), evaluacionController.create);
router.get('/:id', authMiddleware.verifyToken, requireRole('docente'), evaluacionController.getById);
router.put('/:id', authMiddleware.verifyToken, requireRole('docente'), evaluacionController.update);
router.delete('/:id', authMiddleware.verifyToken, requireRole('docente'), evaluacionController.delete);
router.post('/:id/assign', authMiddleware.verifyToken, requireRole('docente'), evaluacionController.assign);

module.exports = router;
