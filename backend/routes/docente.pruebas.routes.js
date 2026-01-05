const express = require('express');
const router = express.Router();
const pruebaController = require('../controllers/prueba.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const requireRole = require('../middlewares/role.middleware');

router.get('/', authMiddleware.verifyToken, requireRole('docente'), pruebaController.list);
router.post('/', authMiddleware.verifyToken, requireRole('docente'), pruebaController.create);
router.get('/:id', authMiddleware.verifyToken, requireRole('docente'), pruebaController.getById);
router.put('/:id', authMiddleware.verifyToken, requireRole('docente'), pruebaController.update);
router.delete('/:id', authMiddleware.verifyToken, requireRole('docente'), pruebaController.delete);

module.exports = router;
