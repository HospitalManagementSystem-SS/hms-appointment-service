import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  patientId: { type: Number, required: true },
  date: { type: Date, required: true },
  reason: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Appointment', appointmentSchema);
