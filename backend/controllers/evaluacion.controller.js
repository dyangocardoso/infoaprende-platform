// Controlador Sequelize para Evaluaciones (docente)

exports.list = async (req, res) => {
  try {
    const Evaluacion = global.Evaluacion;
    if (!Evaluacion) return res.status(503).json({ error: 'Modelo Evaluacion no inicializado' });

    const where = {};
    if (req.user.role === 'docente') where.autor_id = req.user.id;

    const list = await Evaluacion.findAll({ where, order: [['created_at', 'DESC']] });
    res.json({ evaluaciones: list });
  } catch (err) {
    console.error('Error listando evaluaciones:', err);
    res.status(500).json({ error: 'Error interno' });
  }
};

exports.create = async (req, res) => {
  try {
    const Evaluacion = global.Evaluacion;
    if (!Evaluacion) return res.status(503).json({ error: 'Modelo Evaluacion no inicializado' });
    if (req.user.role !== 'docente') return res.status(403).json({ error: 'Solo docentes pueden crear evaluaciones' });

    const data = req.body;
    data.autor_id = req.user.id;
    const nuevo = await Evaluacion.create(data);
    res.status(201).json({ evaluacion: nuevo });
  } catch (err) {
    console.error('Error creando evaluacion:', err);
    res.status(400).json({ error: 'No se pudo crear', details: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const Evaluacion = global.Evaluacion;
    if (!Evaluacion) return res.status(503).json({ error: 'Modelo Evaluacion no inicializado' });

    const id = req.params.id;
    const e = await Evaluacion.findByPk(id);
    if (!e) return res.status(404).json({ error: 'Evaluacion no encontrada' });
    if (req.user.role === 'docente' && e.autor_id !== req.user.id) return res.status(403).json({ error: 'Acceso denegado' });

    res.json({ evaluacion: e });
  } catch (err) {
    console.error('Error obteniendo evaluacion:', err);
    res.status(500).json({ error: 'Error interno' });
  }
};

exports.update = async (req, res) => {
  try {
    const Evaluacion = global.Evaluacion;
    if (!Evaluacion) return res.status(503).json({ error: 'Modelo Evaluacion no inicializado' });

    const id = req.params.id;
    const e = await Evaluacion.findByPk(id);
    if (!e) return res.status(404).json({ error: 'Evaluacion no encontrada' });
    if (e.autor_id !== req.user.id) return res.status(403).json({ error: 'Solo el autor puede editar' });

    await e.update(req.body);
    res.json({ evaluacion: e });
  } catch (err) {
    console.error('Error actualizando evaluacion:', err);
    res.status(400).json({ error: 'No se pudo actualizar', details: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const Evaluacion = global.Evaluacion;
    if (!Evaluacion) return res.status(503).json({ error: 'Modelo Evaluacion no inicializado' });

    const id = req.params.id;
    const e = await Evaluacion.findByPk(id);
    if (!e) return res.status(404).json({ error: 'Evaluacion no encontrada' });
    if (e.autor_id !== req.user.id) return res.status(403).json({ error: 'Solo el autor puede eliminar' });

    await e.destroy();
    res.json({ message: 'Evaluacion eliminada' });
  } catch (err) {
    console.error('Error eliminando evaluacion:', err);
    res.status(500).json({ error: 'Error interno' });
  }
};

exports.assign = async (req, res) => {
  try {
    const Evaluacion = global.Evaluacion;
    const Asignacion = global.Asignacion;
    if (!Evaluacion || !Asignacion) return res.status(503).json({ error: 'Modelos no inicializados' });

    const id = req.params.id;
    const e = await Evaluacion.findByPk(id);
    if (!e) return res.status(404).json({ error: 'Evaluacion no encontrada' });
    if (e.autor_id !== req.user.id) return res.status(403).json({ error: 'Solo el autor puede asignar' });

    const aData = req.body;
    aData.evaluacion_id = e.id;
    aData.publicado_por = req.user.id;

    const a = await Asignacion.create(aData);
    res.status(201).json({ asignacion: a });
  } catch (err) {
    console.error('Error asignando evaluacion:', err);
    res.status(400).json({ error: 'No se pudo asignar', details: err.message });
  }
};
