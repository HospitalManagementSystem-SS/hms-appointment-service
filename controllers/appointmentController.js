import Appointment from '../models/Appointment.js';
import { validatePatient } from '../services/patientService.js';
import { publishAppointmentCreated } from '../services/eventPublisher.js';

export async function createAppointment(req, res) {
  const { patientId, date, reason } = req.body;

  if (!await validatePatient(patientId)) {
    return res.status(400).json({ error: 'Invalid patient ID' });
  }

  const appointment = await Appointment.create({ patientId, date, reason });

  publishAppointmentCreated({
    appointment_id: appointment._id,
    patient_id: patientId,
    date,
    reason
  });

  res.status(201).json(appointment);
}

export async function getAppointment(req, res) {
  const appt = await Appointment.findById(req.params.id);
  if (!appt) return res.status(404).json({ error: 'Appointment not found' });
  res.json(appt);
}

export async function getAppointmentsByPatient(req, res) {
  const appts = await Appointment.find({ patientId: req.query.patient_id });
  res.json(appts);
}
