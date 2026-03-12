import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './src/config/db.js';
import authRoutes from './src/routes/authRoutes.js';
import petRoutes from './src/routes/petRoutes.js';
import applicationRoutes from './src/routes/applicationRoutes.js';

dotenv.config();
connectDB();

const app = express();

app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/pets', petRoutes);
app.use('/api/applications', applicationRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
