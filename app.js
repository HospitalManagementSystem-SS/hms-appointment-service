import express from 'express';
import dotenv from 'dotenv';
import appointmentRoutes from './routes/appointmentRoutes.js';
import { connectDB } from './config/db.js';
import { connectRabbitMQ } from './config/rabbitmq.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use('/', appointmentRoutes);

const PORT = process.env.PORT || 3000;

const start = async () => {
  await connectDB();
  await connectRabbitMQ();
  app.listen(PORT, () => console.log(`🚀 Appointment Service running on port ${PORT}`));
};

start();
