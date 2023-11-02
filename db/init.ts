import mongoose from 'mongoose';
import { MONGO_URI } from '../config';

export const connectDB = async () => {
  await mongoose.connect(MONGO_URI);
  console.log('Connected to Database');
};
