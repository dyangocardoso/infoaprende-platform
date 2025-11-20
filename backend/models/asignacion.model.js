const mongoose = require('mongoose');
const { Schema } = mongoose;

const AsignacionSchema = new Schema({
  evaluacion: { type: Schema.Types.ObjectId, ref: 'Evaluacion', required: true },
  cursoId: { type: String }, // dependerá de cómo se modelen cursos/grupos en el sistema
  grupoId: { type: String },
  fechaAsignacion: { type: Date, default: Date.now },
  fechaCierre: { type: Date },
  publicadoPor: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  condiciones: {
    reintentos: { type: Number, default: 1 },
    mostrarResultadosInmediatos: { type: Boolean, default: false }
  }
}, { timestamps: true });

AsignacionSchema.index({ evaluacion: 1 });
AsignacionSchema.index({ cursoId: 1, grupoId: 1 });

module.exports = mongoose.model('Asignacion', AsignacionSchema);
