import express from 'express';
import dotenv from 'dotenv';
import llmRoutes from './routes/llm.js';
import authRoutes from './routes/auth.js';
import attendanceRoutes from './routes/attendance.js';
import emailRoutes from './routes/email.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/llm', llmRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/email', emailRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
