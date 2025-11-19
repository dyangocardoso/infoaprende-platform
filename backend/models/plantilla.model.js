const mongoose = require('mongoose');
const { Schema } = mongoose;

const PlantillaSchema = new Schema({
  nombre: { type: String, required: true, trim: true },
  tipo: { type: String, required: true, enum: ['pdf', 'html'] },
  descripcion: { type: String, trim: true },
  contenidoHtml: { type: String },
  css: { type: String },
  recursos: [{ type: String }], // URLs o referencias a assets
  version: { type: String, default: '1.0' },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

PlantillaSchema.index({ nombre: 1 });

module.exports = mongoose.model('Plantilla', PlantillaSchema);
