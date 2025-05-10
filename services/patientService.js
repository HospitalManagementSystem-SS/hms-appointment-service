import axios from 'axios';

export async function validatePatient(patientId) {
  try {
    const res = await axios.get(`${process.env.PATIENT_SERVICE_URL}/patients/${patientId}`);
    return res.status === 200;
  } catch {
    return false;
  }
}
