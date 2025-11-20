// Controlador Sequelize para Plantillas (admin)

exports.list = async (req, res) => {
  try {
    const Plantilla = global.Plantilla;
    if (!Plantilla) return res.status(503).json({ error: 'Modelo Plantilla no inicializado' });

    const plantillas = await Plantilla.findAll({ order: [['created_at', 'DESC']] });
    res.json({ plantillas });
  } catch (err) {
    console.error('Error listando plantillas:', err);
    res.status(500).json({ error: 'Error interno' });
  }
};

exports.create = async (req, res) => {
  try {
    const Plantilla = global.Plantilla;
    if (!Plantilla) return res.status(503).json({ error: 'Modelo Plantilla no inicializado' });
    if (req.user.rol !== 'administrador') return res.status(403).json({ error: 'Solo administradores pueden crear plantillas' });

    const data = req.body;
    data.created_by = req.user.id;
    const p = await Plantilla.create(data);
    res.status(201).json({ plantilla: p });
  } catch (err) {
    console.error('Error creando plantilla:', err);
    res.status(400).json({ error: 'No se pudo crear plantilla', details: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const Plantilla = global.Plantilla;
    if (!Plantilla) return res.status(503).json({ error: 'Modelo Plantilla no inicializado' });

    const p = await Plantilla.findByPk(req.params.id);
    if (!p) return res.status(404).json({ error: 'Plantilla no encontrada' });
    res.json({ plantilla: p });
  } catch (err) {
    console.error('Error obteniendo plantilla:', err);
    res.status(500).json({ error: 'Error interno' });
  }
};

exports.update = async (req, res) => {
  try {
    const Plantilla = global.Plantilla;
    if (!Plantilla) return res.status(503).json({ error: 'Modelo Plantilla no inicializado' });

    const p = await Plantilla.findByPk(req.params.id);
    if (!p) return res.status(404).json({ error: 'Plantilla no encontrada' });
    if (req.user.rol !== 'administrador') return res.status(403).json({ error: 'Solo administradores pueden editar plantillas' });

    await p.update(req.body);
    res.json({ plantilla: p });
  } catch (err) {
    console.error('Error actualizando plantilla:', err);
    res.status(400).json({ error: 'No se pudo actualizar', details: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const Plantilla = global.Plantilla;
    if (!Plantilla) return res.status(503).json({ error: 'Modelo Plantilla no inicializado' });

    const p = await Plantilla.findByPk(req.params.id);
    if (!p) return res.status(404).json({ error: 'Plantilla no encontrada' });
    if (req.user.rol !== 'administrador') return res.status(403).json({ error: 'Solo administradores pueden eliminar' });

    await p.destroy();
    res.json({ message: 'Plantilla eliminada' });
  } catch (err) {
    console.error('Error eliminando plantilla:', err);
    res.status(500).json({ error: 'Error interno' });
  }
};

exports.export = async (req, res) => {
  try {
    const Plantilla = global.Plantilla;
    if (!Plantilla) return res.status(503).json({ error: 'Modelo Plantilla no inicializado' });

    const id = req.params.id;
    const p = await Plantilla.findByPk(id);
    if (!p) return res.status(404).json({ error: 'Plantilla no encontrada' });

    // Sólo administradores pueden exportar plantillas en este endpoint
    const userRole = (req.user && (req.user.rol || req.user.role)) || null;
    if (userRole !== 'administrador') {
      return res.status(403).json({ error: 'No autorizado' });
    }

    const format = (req.query.format || req.body.format || 'pdf').toLowerCase();
    const data = req.body.data || {};

    // Recursos: soportar JSON con partials y CSS externos/inline
    let recursos = [];
    try { recursos = p.recursos ? JSON.parse(p.recursos) : (p.recursos || []); } catch(e) { recursos = p.recursos || []; }

    let headIncludes = '';
    const partials = {};

    // baseUrl para recursos relativos (si se desea servir desde public/template-assets)
    const baseUrl = (req.protocol + '://' + req.get('host'));

    recursos.forEach(r => {
      try {
        if (!r) return;
        // r.tipo: 'css', 'inline-css', 'partial', 'link'(generic)
        if (r.tipo === 'css' && r.url) {
          // incluir como link (permite carga por Puppeteer)
          const url = r.url.startsWith('http') ? r.url : `${baseUrl}${r.url.startsWith('/') ? '' : '/'}${r.url}`;
          headIncludes += `<link rel="stylesheet" href="${url}">`;
        } else if (r.tipo === 'inline-css' && r.content) {
          headIncludes += `<style>${r.content}</style>`;
        } else if (r.tipo === 'partial' && r.name) {
          partials[r.name] = r.content || '';
        } else if (r.tipo === 'link' && r.url) {
          headIncludes += `<link rel="stylesheet" href="${r.url}">`;
        }
      } catch (e) {
        // ignorar recurso inválido
        console.warn('Recurso inválido en plantilla:', e.message);
      }
    });

    // Render simple de placeholders {{key}} y partials {{> name }}
    let html = p.contenido_html || '';

    // Reemplazar partials: sintaxis {{> nombre }}
    Object.keys(partials).forEach(name => {
      const rePart = new RegExp(`{{\\s*>\\s*${name}\\s*}}`, 'g');
      html = html.replace(rePart, partials[name]);
    });

    // Reemplazos de variables simples
    Object.keys(data).forEach(key => {
      const re = new RegExp(`{{\\s*${key}\\s*}}`, 'g');
      html = html.replace(re, data[key]);
    });

    // Incluir CSS adicional de plantilla (campo css) como inline
    const cssField = p.css ? `<style>${p.css}</style>` : '';

    // Render completo con headIncludes y cssField
    const fullHtml = `<!doctype html><html><head><meta charset="utf-8">${headIncludes}${cssField}</head><body>${html}</body></html>`;

    if (format === 'html') {
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      return res.send(fullHtml);
    }

    // Generar PDF con Puppeteer
    let puppeteer;
    try {
      puppeteer = require('puppeteer');
    } catch (e) {
      console.error('Puppeteer require error:', e && e.message);
      return res.status(500).json({ error: 'Puppeteer no está instalado o falla al cargar. Ejecuta npm install puppeteer en backend', details: e && e.message });
    }

    let browser;
    try {
      browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
      const page = await browser.newPage();
      // Permitir navegación para que las hojas de estilo externas se carguen
      await page.setContent(fullHtml, { waitUntil: 'networkidle0' });

      const pdfBuffer = await page.pdf({ format: 'A4', printBackground: true });

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename="plantilla-${p.id}.pdf"`);
      res.send(pdfBuffer);
    } catch (e) {
      console.error('Error al generar PDF con Puppeteer:', e && e.stack ? e.stack : e);
      return res.status(500).json({ error: 'Error generando PDF', details: e && e.message });
    } finally {
      try { if (browser) await browser.close(); } catch(closeErr) { console.warn('Error cerrando browser Puppeteer:', closeErr && closeErr.message); }
    }

  } catch (err) {
    console.error('Error exportando plantilla:', err && err.stack ? err.stack : err);
    res.status(500).json({ error: 'Error interno exportando plantilla', details: err && err.message });
  }
};

// Preview endpoint: devuelve HTML listo para mostrar en frontend (sin generar PDF)
exports.preview = async (req, res) => {
  try {
    const Plantilla = global.Plantilla;
    if (!Plantilla) return res.status(503).json({ error: 'Modelo Plantilla no inicializado' });

    const id = req.params.id;
    const p = await Plantilla.findByPk(id);
    if (!p) return res.status(404).json({ error: 'Plantilla no encontrada' });

    // Permitir acceso a administradores y docentes (si corresponde)
    const userRole = (req.user && (req.user.rol || req.user.role)) || null;
    if (!userRole) return res.status(401).json({ error: 'No autorizado' });

    // Reutilizar la lógica de composición de HTML (partials, recursos, css)
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

    const cssField = p.css ? `<style>${p.css}</style>` : '';
    const fullHtml = `<!doctype html><html><head><meta charset="utf-8">${headIncludes}${cssField}</head><body>${html}</body></html>`;

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    return res.send(fullHtml);
  } catch (err) {
    console.error('Error preview plantilla:', err && err.stack ? err.stack : err);
    res.status(500).json({ error: 'Error interno', details: err && err.message });
  }
};
