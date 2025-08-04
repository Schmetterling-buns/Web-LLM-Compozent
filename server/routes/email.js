import express from 'express';
import sendEmail from '../utils/mailer.js';

const router = express.Router();

// POST /api/send-email
router.post('/send-email', async (req, res) => {
  const { to, subject, text } = req.body;

  try {
    const emailSent = await sendEmail(to, subject, text);
    if (emailSent) {
      console.log(`✅ Email successfully sent to ${to}`);
      res.status(200).json({ message: 'Email sent successfully.' });
    } else {
      console.error(`❌ Failed to send email to ${to}`);
      res.status(500).json({ message: 'Failed to send email.' });
    }
  } catch (error) {
    console.error('❌ Error in /api/send-email route:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

export default router;
