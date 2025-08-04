import nodemailer from 'nodemailer';

const sendEmail = async (to, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,     // your_email@gmail.com
        pass: process.env.EMAIL_PASS      // app password
      }
    });

    const mailOptions = {
      from: `"Web LLM App" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent:', info.response);
    return true;
  } catch (error) {
    console.error('❌ Failed to send email:', error);
    return false;
  }
};

export default sendEmail;
