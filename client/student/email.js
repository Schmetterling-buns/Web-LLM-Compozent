document.getElementById('emailForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const to = document.getElementById('to').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  const responseMessage = document.getElementById('responseMessage');

  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ to, subject, text: message }),
    });

    if (response.ok) {
      responseMessage.style.color = 'green';
      responseMessage.textContent = 'Email sent successfully!';
    } else {
      responseMessage.style.color = 'red';
      responseMessage.textContent = 'Failed to send email.';
    }
  } catch (error) {
    responseMessage.style.color = 'red';
    responseMessage.textContent = 'An error occurred while sending the email.';
  }

  responseMessage.style.display = 'block';
});
