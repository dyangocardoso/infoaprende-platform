const mongoose = require('mongoose');
const { Schema } = mongoose;

const RespuestaSchema = new Schema({
  preguntaId: { type: Schema.Types.ObjectId, required: true },
  respuesta: Schema.Types.Mixed,
  tiempoRespuestaSeg: { type: Number }
}, { _id: false });

const IntentoSchema = new Schema({
  evaluacion: { type: Schema.Types.ObjectId, ref: 'Evaluacion', required: true },
  alumno: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  respuestas: [RespuestaSchema],
  puntuacion: { type: Number, default: 0 },
  estado: { type: String, enum: ['en-progreso', 'completado'], default: 'en-progreso' },
  startedAt: { type: Date, default: Date.now },
  finishedAt: { type: Date }
}, { timestamps: true });

IntentoSchema.index({ evaluacion: 1 });
IntentoSchema.index({ alumno: 1 });
IntentoSchema.index({ finishedAt: 1 });

module.exports = mongoose.model('Intento', IntentoSchema);
