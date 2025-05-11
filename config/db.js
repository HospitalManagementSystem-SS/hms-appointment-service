import mongoose from 'mongoose';

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/appointments');
    console.log('[✔] MongoDB connected');
  } catch (error) {
    console.error('[✖] MongoDB connection error:', error);
    process.exit(1);
  }
}
