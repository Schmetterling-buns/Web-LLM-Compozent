import express from 'express';

const router = express.Router();

// POST /api/attendance
router.post('/attendance', (req, res) => {
  const { studentId, date, status } = req.body;

  if (!studentId || !date || !status) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  console.log(`Attendance recorded: ${studentId}, ${date}, ${status}`);
  res.status(200).json({ message: 'Attendance recorded successfully.' });
});

export default router;
