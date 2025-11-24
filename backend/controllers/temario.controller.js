// Controlador Sequelize para Temarios (docente)

// Lista de niveles permitidos (coincide con los enums en modelos/sql)
const ALLOWED_NIVELES = ['inicial', 'primario', 'secundario', 'tecnico', 'otros'];
const sanitizeHtml = require('sanitize-html');

// Opciones de sanitización para permitir marcado estructural pero eliminar scripts y contenidos peligrosos
const SANITIZE_OPTIONS = {
  allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'table', 'thead', 'tbody', 'tr', 'td', 'th']),
  allowedAttributes: Object.assign({}, sanitizeHtml.defaults.allowedAttributes, {
    '*': (sanitizeHtml.defaults.allowedAttributes['*'] || []).concat(['style', 'class']),
    a: (sanitizeHtml.defaults.allowedAttributes.a || []).concat(['target', 'rel']),
    img: ['src', 'alt', 'title', 'width', 'height']
  }),
  allowedSchemes: (sanitizeHtml.defaults.allowedSchemes || []).concat(['data']),
  allowVulnerableTags: false
};

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

    const data = req.body || {};
    // Validación explícita de 'nivel' antes de intentar persistir
    if (!data.nivel || !ALLOWED_NIVELES.includes(data.nivel)) {
      return res.status(400).json({ error: 'Nivel inválido. Valores permitidos: ' + ALLOWED_NIVELES.join(', ') });
    }

    // Si viene generated_html, moverlo a metadata.generated_html
    data.metadata = data.metadata || {};
    if (data.generated_html) {
      // Sanitizar HTML antes de persistir
      try {
        data.metadata.generated_html = sanitizeHtml(data.generated_html, SANITIZE_OPTIONS);
      } catch (e) {
        data.metadata.generated_html = data.generated_html;
      }
      delete data.generated_html;
    }

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

    // Si se intenta cambiar el nivel, validar
    if (req.body && req.body.nivel && !ALLOWED_NIVELES.includes(req.body.nivel)) {
      return res.status(400).json({ error: 'Nivel inválido. Valores permitidos: ' + ALLOWED_NIVELES.join(', ') });
    }

    // Si viene generated_html en body, integrarlo en metadata antes de actualizar
    if (req.body && req.body.generated_html) {
      const existingMeta = t.metadata || {};
      // Sanitizar antes de actualizar
      try {
        req.body.metadata = Object.assign({}, existingMeta, { generated_html: sanitizeHtml(req.body.generated_html, SANITIZE_OPTIONS) });
      } catch (e) {
        req.body.metadata = Object.assign({}, existingMeta, { generated_html: req.body.generated_html });
      }
      delete req.body.generated_html;
    }

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

exports.renderFromPlantilla = async (req, res) => {
  try {
    // Permitir sólo docentes
    if (!req.user || req.user.role !== 'docente') return res.status(403).json({ error: 'Solo docentes pueden generar vista previa' });

    const Plantilla = global.Plantilla;
    if (!Plantilla) return res.status(503).json({ error: 'Modelo Plantilla no inicializado' });

    const { plantilla_id, data = {} } = req.body || {};
    if (!plantilla_id) return res.status(400).json({ error: 'plantilla_id es requerido' });

    const p = await Plantilla.findByPk(plantilla_id);
    if (!p) return res.status(404).json({ error: 'Plantilla no encontrada' });

    // Reutilizar lógica de composición de plantilla (similar a plantilla.controller.preview)
    let recursos = [];
    try { recursos = p.recursos ? JSON.parse(p.recursos) : (p.recursos || []); } catch(e) { recursos = p.recursos || []; }

    let headIncludes = '';
    const partials = {};
    const baseUrl = (req.protocol + '://' + req.get('host'));

    recursos.forEach(r => {
      try {
        if (!r) return;
        if (r.tipo === 'css' && r.url) {
          const url = r.url.startsWith('http') ? r.url : `${baseUrl}${r.url.startsWith('/') ? '' : '/'}${r.url}`;
          headIncludes += `<link rel="stylesheet" href="${url}">`;
        } else if (r.tipo === 'inline-css' && r.content) {
          headIncludes += `<style>${r.content}</style>`;
        } else if (r.tipo === 'partial' && r.name) {
          partials[r.name] = r.content || '';
        } else if (r.tipo === 'link' && r.url) {
          headIncludes += `<link rel="stylesheet" href="${r.url}">`;
        }
      } catch (e) { /* ignore */ }
    });

    let html = p.contenido_html || '';
    Object.keys(partials).forEach(name => {
      const rePart = new RegExp(`{{\\s*>\\s*${name}\\s*}}`, 'g');
      html = html.replace(rePart, partials[name]);
    });

    // Reemplazos de variables simples
    Object.keys(data).forEach(key => {
      const re = new RegExp(`{{\\s*${key}\\s*}}`, 'g');
      html = html.replace(re, data[key]);
    });

    const cssField = p.css ? `<style>${p.css}</style>` : '';
    // Sanitizar únicamente el contenido del body antes de devolver (headIncludes proviene de recursos controlados)
    let safeBody = html;
    try { safeBody = sanitizeHtml(html, SANITIZE_OPTIONS); } catch (e) { /* si falla, enviar el body original */ }
    const fullHtml = `<!doctype html><html><head><meta charset="utf-8">${headIncludes}${cssField}</head><body>${safeBody}</body></html>`;

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    return res.send(fullHtml);
  } catch (err) {
    console.error('Error renderizando plantilla:', err && err.stack ? err.stack : err);
    res.status(500).json({ error: 'Error interno', details: err && err.message });
  }
};

// Nuevo endpoint para devolver los niveles permitidos
exports.getNiveles = (req, res) => {
  try {
    res.json({ niveles: ALLOWED_NIVELES });
  } catch (err) {
    res.status(500).json({ error: 'Error interno' });
  }
};
