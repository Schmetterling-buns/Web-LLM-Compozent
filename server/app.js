require('dotenv').config();
const express = require('express');
const cors = require('cors');

const emailRoutes = require('./routes/email');
const attendanceRoutes = require('./routes/attendance');
const llmRoute = require('./routes/llm');

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
