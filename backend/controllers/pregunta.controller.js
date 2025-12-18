// Controlador Sequelize para Preguntas

exports.listByEvaluacion = async (req, res) => {
  try {
    const Pregunta = global.Pregunta;
    if (!Pregunta) return res.status(503).json({ error: 'Modelo Pregunta no inicializado' });

    const evaluacionId = req.params.evaluacionId;
    const preguntas = await Pregunta.findAll({ where: { evaluacion_id: evaluacionId }, order: [['orden', 'ASC']] });
    res.json({ preguntas });
  } catch (err) {
    console.error('Error listando preguntas:', err);
    res.status(500).json({ error: 'Error interno' });
  }
};

exports.create = async (req, res) => {
  try {
    const Pregunta = global.Pregunta;
    const Evaluacion = global.Evaluacion;
    if (!Pregunta || !Evaluacion) return res.status(503).json({ error: 'Modelos no inicializados' });

    const evaluacionId = req.params.evaluacionId;
    const e = await Evaluacion.findByPk(evaluacionId);
    if (!e) return res.status(404).json({ error: 'Evaluacion no encontrada' });
    if (e.autor_id !== req.user.id) return res.status(403).json({ error: 'Solo el autor puede agregar preguntas' });

    const data = req.body;
    data.evaluacion_id = evaluacionId;
    const p = await Pregunta.create(data);
    res.status(201).json({ pregunta: p });
  } catch (err) {
    console.error('Error creando pregunta:', err);
    res.status(400).json({ error: 'No se pudo crear pregunta', details: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const Pregunta = global.Pregunta;
    if (!Pregunta) return res.status(503).json({ error: 'Modelo Pregunta no inicializado' });

    const id = req.params.id;
    const p = await Pregunta.findByPk(id);
    if (!p) return res.status(404).json({ error: 'Pregunta no encontrada' });

    // Verificar autor mediante evaluacion
    const Evaluacion = global.Evaluacion;
    if (Evaluacion) {
      const e = await Evaluacion.findByPk(p.evaluacion_id);
      if (req.user.role === 'docente' && e.autor_id !== req.user.id) return res.status(403).json({ error: 'Acceso denegado' });
    }

    res.json({ pregunta: p });
  } catch (err) {
    console.error('Error obteniendo pregunta:', err);
    res.status(500).json({ error: 'Error interno' });
  }
};

exports.update = async (req, res) => {
  try {
    const Pregunta = global.Pregunta;
    if (!Pregunta) return res.status(503).json({ error: 'Modelo Pregunta no inicializado' });

    const id = req.params.id;
    const p = await Pregunta.findByPk(id);
    if (!p) return res.status(404).json({ error: 'Pregunta no encontrada' });

    const Evaluacion = global.Evaluacion;
    if (Evaluacion) {
      const e = await Evaluacion.findByPk(p.evaluacion_id);
      if (e.autor_id !== req.user.id) return res.status(403).json({ error: 'Solo el autor puede editar' });
    }

    await p.update(req.body);
    res.json({ pregunta: p });
  } catch (err) {
    console.error('Error actualizando pregunta:', err);
    res.status(400).json({ error: 'No se pudo actualizar', details: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const Pregunta = global.Pregunta;
    if (!Pregunta) return res.status(503).json({ error: 'Modelo Pregunta no inicializado' });

    const id = req.params.id;
    const p = await Pregunta.findByPk(id);
    if (!p) return res.status(404).json({ error: 'Pregunta no encontrada' });

    const Evaluacion = global.Evaluacion;
    if (Evaluacion) {
      const e = await Evaluacion.findByPk(p.evaluacion_id);
      if (e.autor_id !== req.user.id) return res.status(403).json({ error: 'Solo el autor puede eliminar' });
    }

    await p.destroy();
    res.json({ message: 'Pregunta eliminada' });
  } catch (err) {
    console.error('Error eliminando pregunta:', err);
    res.status(500).json({ error: 'Error interno' });
  }
};
