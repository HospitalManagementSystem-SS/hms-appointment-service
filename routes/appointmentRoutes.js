import express from 'express';
import {
  createAppointment,
  getAppointment,
  getAppointmentsByPatient
} from '../controllers/appointmentController.js';

const router = express.Router();

router.post('/appointments', createAppointment);
router.get('/appointments/:id', getAppointment);
router.get('/appointments', getAppointmentsByPatient);

export default router;
