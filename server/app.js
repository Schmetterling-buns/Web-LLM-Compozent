import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

import emailRoutes from './routes/email.js';
import attendanceRoutes from './routes/attendance.js';
import llmRoute from './routes/llm.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api', emailRoutes);
app.use('/api', attendanceRoutes);
app.use('/api/llm', llmRoute);
app.get('/', (req, res) => {
  res.send('Web LLM Backend Running ✅');
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
