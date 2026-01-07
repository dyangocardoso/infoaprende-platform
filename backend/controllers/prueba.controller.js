const Ajv = require('ajv');
const ajv = new Ajv({ allErrors: true, strict: false });
const fs = require('fs');
const path = require('path');

let schema = null;
try {
  schema = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', '..', 'schemas', 'prueba-evaluativa.schema.json'), 'utf8'));
} catch (e) {
  console.warn('Prueba schema not found or invalid:', e.message);
}

exports.list = async (req, res) => {
  try {
    const Prueba = global.PruebaEvaluativa;
    if (!Prueba) return res.status(503).json({ error: 'Modelo Prueba no inicializado' });

    const where = {};
    if (req.query.curso) where.curso = req.query.curso;
    if (req.query.tipo) where.tipo = req.query.tipo;
    if (req.query.nivel) where.nivel = req.query.nivel;

    const list = await Prueba.findAll({ where, order: [['creado_en', 'DESC']] });
    res.json({ pruebas: list });
  } catch (err) {
    console.error('Error listando pruebas:', err);
    res.status(500).json({ error: 'Error interno' });
  }
};

exports.create = async (req, res) => {
  try {
    const Prueba = global.PruebaEvaluativa;
    if (!Prueba) return res.status(503).json({ error: 'Modelo Prueba no inicializado' });
    if (!req.user || req.user.role !== 'docente') return res.status(403).json({ error: 'Solo docentes pueden crear pruebas' });

    const data = req.body;
    data.creado_en = new Date();

    if (schema) {
      const validate = ajv.compile(schema);
      const valid = validate(data);
      if (!valid) return res.status(400).json({ error: 'Schema validation failed', details: validate.errors });
    }

    const created = await Prueba.create(data);
    res.status(201).json({ prueba: created });
  } catch (err) {
    console.error('Error creando prueba:', err);
    res.status(400).json({ error: 'No se pudo crear', details: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const Prueba = global.PruebaEvaluativa;
    if (!Prueba) return res.status(503).json({ error: 'Modelo Prueba no inicializado' });
    const id = req.params.id;
    const p = await Prueba.findByPk(id);
    if (!p) return res.status(404).json({ error: 'Prueba no encontrada' });
    res.json({ prueba: p });
  } catch (err) {
    console.error('Error obteniendo prueba:', err);
    res.status(500).json({ error: 'Error interno' });
  }
};

exports.update = async (req, res) => {
  try {
    const Prueba = global.PruebaEvaluativa;
    if (!Prueba) return res.status(503).json({ error: 'Modelo Prueba no inicializado' });
    const id = req.params.id;
    const p = await Prueba.findByPk(id);
    if (!p) return res.status(404).json({ error: 'Prueba no encontrada' });
    if (!req.user || req.user.role !== 'docente') return res.status(403).json({ error: 'Solo docentes pueden editar pruebas' });

    await p.update(req.body);
    res.json({ prueba: p });
  } catch (err) {
    console.error('Error actualizando prueba:', err);
    res.status(400).json({ error: 'No se pudo actualizar', details: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const Prueba = global.PruebaEvaluativa;
    if (!Prueba) return res.status(503).json({ error: 'Modelo Prueba no inicializado' });
    const id = req.params.id;
    const p = await Prueba.findByPk(id);
    if (!p) return res.status(404).json({ error: 'Prueba no encontrada' });
    if (!req.user || req.user.role !== 'docente') return res.status(403).json({ error: 'Solo docentes pueden eliminar pruebas' });

    await p.destroy();
    res.json({ message: 'Prueba eliminada' });
  } catch (err) {
    console.error('Error eliminando prueba:', err);
    res.status(500).json({ error: 'Error interno' });
  }
};
