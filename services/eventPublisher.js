let channel = null;

export function setChannel(ch) {
  channel = ch;
}

export function publishAppointmentCreated(appointment) {
  if (!channel) return;

  channel.publish(
    'appointment_exchange',
    'appointment.created',
    Buffer.from(JSON.stringify(appointment))
  );
}
