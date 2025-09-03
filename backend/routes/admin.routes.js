// Rutas para el Panel de Administración
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');
const { requireAdmin } = require('../middlewares/admin-new.middleware');

// Aplicar middleware de administrador a todas las rutas
router.use(requireAdmin);

// GET /api/admin/users - Obtener todos los usuarios
router.get('/users', adminController.getAllUsers);

// POST /api/admin/users - Crear nuevo usuario
router.post('/users', adminController.createUser);

// PUT /api/admin/users/:userId/role - Actualizar rol de usuario
router.put('/users/:userId/role', adminController.updateUserRole);

// DELETE /api/admin/users/:userId - Eliminar usuario
router.delete('/users/:userId', adminController.deleteUser);

// GET /api/admin/stats - Obtener estadísticas del sistema
router.get('/stats', adminController.getSystemStats);

module.exports = router;
