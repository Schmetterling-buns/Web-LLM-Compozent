document.getElementById('emailForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const to = document.getElementById('to').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  const emailResponse = document.getElementById('emailResponse');

  try {
    const response = await fetch(`/api/send-email?to=${to}&subject=${subject}&text=${message}`, {
      method: 'GET',
    });

    if (response.ok) {
      emailResponse.style.color = 'green';
      emailResponse.textContent = 'Email sent successfully!';
    } else {
      emailResponse.style.color = 'red';
      emailResponse.textContent = 'Failed to send email.';
    }
  } catch (error) {
    emailResponse.style.color = 'red';
    emailResponse.textContent = 'An error occurred while sending the email.';
  }

  emailResponse.style.display = 'block';
});

// ...existing code for attendance and LLM...
