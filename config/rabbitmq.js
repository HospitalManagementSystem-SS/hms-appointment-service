import amqp from 'amqplib';
import { setChannel } from '../services/eventPublisher.js';

export async function connectRabbitMQ(retries = 5, delay = 3000) {
  while (retries > 0) {
    try {
      const connection = await amqp.connect(process.env.RABBITMQ_URL || 'amqp://localhost');
      const channel = await connection.createChannel();
      await channel.assertExchange('appointment_exchange', 'topic', { durable: true });
      setChannel(channel);
      console.log('[✔] Connected to RabbitMQ');
      return; // Exit if successful
    } catch (err) {
      retries--;
      console.warn(`[!] RabbitMQ not available yet. Retrying in ${delay / 1000}s... (${retries} retries left)`);
      if (retries === 0) {
        console.error('[✖] Failed to connect to RabbitMQ. Exiting.');
        process.exit(1);
      }
      await new Promise(res => setTimeout(res, delay));
    }
  }
}
