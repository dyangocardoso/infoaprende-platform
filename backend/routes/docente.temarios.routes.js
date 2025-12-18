const express = require('express');
const router = express.Router();
const temarioController = require('../controllers/temario.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const requireRole = require('../middlewares/role.middleware');

// Rutas para Temarios usando Sequelize (docente)
router.get('/', authMiddleware.verifyToken, requireRole('docente'), temarioController.list);
router.post('/', authMiddleware.verifyToken, requireRole('docente'), temarioController.create);
router.get('/:id', authMiddleware.verifyToken, requireRole('docente'), temarioController.getById);
router.put('/:id', authMiddleware.verifyToken, requireRole('docente'), temarioController.update);
router.delete('/:id', authMiddleware.verifyToken, requireRole('docente'), temarioController.delete);
router.post('/:id/publish', authMiddleware.verifyToken, requireRole('docente'), temarioController.publish);

module.exports = router;
