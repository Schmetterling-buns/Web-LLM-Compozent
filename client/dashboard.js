document.getElementById('emailForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const to = document.getElementById('to').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  const emailResponse = document.getElementById('emailResponse');

  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ to, subject, text: message }),
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

document.getElementById('attendanceForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const studentId = document.getElementById('studentId').value;
  const date = document.getElementById('date').value;
  const status = document.getElementById('status').value;

  const attendanceResponse = document.getElementById('attendanceResponse');

  try {
    const response = await fetch('/api/attendance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ studentId, date, status }),
    });

    if (response.ok) {
      attendanceResponse.style.color = 'green';
      attendanceResponse.textContent = 'Attendance recorded successfully!';
    } else {
      attendanceResponse.style.color = 'red';
      attendanceResponse.textContent = 'Failed to record attendance.';
    }
  } catch (error) {
    attendanceResponse.style.color = 'red';
    attendanceResponse.textContent = 'An error occurred while recording attendance.';
  }

  attendanceResponse.style.display = 'block';
});

document.getElementById('llmButton').addEventListener('click', () => {
  const input = document.getElementById('llmInput').value;
  const response = `Mock response for: ${input}`; // Replace with real LLM logic later
  const responseElement = document.getElementById('llmResponse');
  responseElement.textContent = response;
  responseElement.style.display = 'block';
});
