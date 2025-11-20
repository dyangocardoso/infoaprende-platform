const mongoose = require('mongoose');
const { Schema } = mongoose;

const RecursoSchema = new Schema({
  tipo: { type: String, trim: true }, // e.g. "pdf", "link", "video"
  url: { type: String, trim: true },
  descripcion: { type: String, trim: true }
}, { _id: false });

const UnidadSchema = new Schema({
  titulo: { type: String, required: true, trim: true },
  objetivos: [{ type: String, trim: true }],
  recursos: [RecursoSchema]
}, { _id: false });

const TemarioSchema = new Schema({
  titulo: { type: String, required: true, trim: true },
  nivel: { type: String, required: true, enum: ['inicial', 'primario', 'secundario', 'tecnico', 'otros'] },
  descripcion: { type: String, trim: true },
  unidades: [UnidadSchema],
  autor: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  estado: { type: String, enum: ['borrador', 'publicado'], default: 'borrador' },
  metadata: {
    visitas: { type: Number, default: 0 }
  }
}, { timestamps: true });

// Índices recomendados
TemarioSchema.index({ autor: 1 });
TemarioSchema.index({ nivel: 1 });
TemarioSchema.index({ estado: 1 });

module.exports = mongoose.model('Temario', TemarioSchema);
