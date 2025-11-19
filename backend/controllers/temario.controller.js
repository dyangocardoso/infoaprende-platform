// Controlador Sequelize para Temarios (docente)

exports.list = async (req, res) => {
  try {
    const Temario = global.Temario;
    if (!Temario) return res.status(503).json({ error: 'Modelo Temario no inicializado' });

    const where = {};
    if (req.user.role === 'docente') {
      where.autor_id = req.user.id;
    }

    const temarios = await Temario.findAll({ where, order: [['created_at', 'DESC']] });
    res.json({ temarios });
  } catch (err) {
    console.error('Error listando temarios:', err);
    res.status(500).json({ error: 'Error interno al listar temarios' });
  }
};

exports.create = async (req, res) => {
  try {
    const Temario = global.Temario;
    if (!Temario) return res.status(503).json({ error: 'Modelo Temario no inicializado' });

    if (req.user.role !== 'docente') return res.status(403).json({ error: 'Solo docentes pueden crear temarios' });

    const data = req.body;
    data.autor_id = req.user.id;

    const nuevo = await Temario.create(data);
    res.status(201).json({ temario: nuevo });
  } catch (err) {
    console.error('Error creando temario:', err);
    res.status(400).json({ error: 'No se pudo crear el temario', details: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const Temario = global.Temario;
    if (!Temario) return res.status(503).json({ error: 'Modelo Temario no inicializado' });

    const id = req.params.id;
    const t = await Temario.findByPk(id);
    if (!t) return res.status(404).json({ error: 'Temario no encontrado' });

    // Permitir acceso al autor o admin
    if (req.user.role === 'docente' && t.autor_id !== req.user.id) {
      return res.status(403).json({ error: 'Acceso denegado' });
    }

    res.json({ temario: t });
  } catch (err) {
    console.error('Error obteniendo temario:', err);
    res.status(500).json({ error: 'Error interno' });
  }
};

exports.update = async (req, res) => {
  try {
    const Temario = global.Temario;
    if (!Temario) return res.status(503).json({ error: 'Modelo Temario no inicializado' });

    const id = req.params.id;
    const t = await Temario.findByPk(id);
    if (!t) return res.status(404).json({ error: 'Temario no encontrado' });
    if (t.autor_id !== req.user.id) return res.status(403).json({ error: 'Solo el autor puede editar' });

    await t.update(req.body);
    res.json({ temario: t });
  } catch (err) {
    console.error('Error actualizando temario:', err);
    res.status(400).json({ error: 'No se pudo actualizar', details: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const Temario = global.Temario;
    if (!Temario) return res.status(503).json({ error: 'Modelo Temario no inicializado' });

    const id = req.params.id;
    const t = await Temario.findByPk(id);
    if (!t) return res.status(404).json({ error: 'Temario no encontrado' });
    if (t.autor_id !== req.user.id) return res.status(403).json({ error: 'Solo el autor puede eliminar' });

    await t.destroy();
    res.json({ message: 'Temario eliminado' });
  } catch (err) {
    console.error('Error eliminando temario:', err);
    res.status(500).json({ error: 'Error interno' });
  }
};

exports.publish = async (req, res) => {
  try {
    const Temario = global.Temario;
    if (!Temario) return res.status(503).json({ error: 'Modelo Temario no inicializado' });

    const id = req.params.id;
    const t = await Temario.findByPk(id);
    if (!t) return res.status(404).json({ error: 'Temario no encontrado' });
    if (t.autor_id !== req.user.id) return res.status(403).json({ error: 'Solo el autor puede publicar' });

    t.estado = 'publicado';
    await t.save();
    res.json({ temario: t });
  } catch (err) {
    console.error('Error publicando temario:', err);
    res.status(500).json({ error: 'Error interno' });
  }
};
