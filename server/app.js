require('dotenv').config();
const express = require('express');
const cors = require('cors');

const emailRoutes = require('./routes/email'); // 👈 Add this
const attendanceRoutes = require('./routes/attendance');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api', emailRoutes); // 👈 Mount it here
app.use('/api', attendanceRoutes);
app.get('/', (req, res) => {
  res.send('Web LLM Backend Running ✅');
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
