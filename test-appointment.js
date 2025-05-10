import axios from "axios";

async function testAppointmentCreate() {
  try {
    const res = await axios.post("http://localhost:3000/appointments", {
      patientId: 1,   // should exist in patient service
      date: "2025-05-10T10:00:00Z",
      reason: "General checkup"
    });
    console.log("Appointment created:", res.data);
  } catch (err) {
    console.error("Error:", err.response?.data || err.message);
  }
}

testAppointmentCreate();
