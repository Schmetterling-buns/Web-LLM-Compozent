// attendance.js for student attendance page
// Handles auto-filling student ID and attendance submission using localStorage

document.addEventListener('DOMContentLoaded', function () {
  // Dummy session: get student info from localStorage
  const user = JSON.parse(localStorage.getItem('currentUser'));
  if (!user || user.role !== 'student') {
    window.location.href = '../login.html';
    return;
  }

  // Auto-fill and hide student ID
  const studentIdInput = document.getElementById('studentId');
  studentIdInput.value = user.username || user.email || '';
  studentIdInput.readOnly = true;
  studentIdInput.style.background = '#f3f4f6';
  studentIdInput.style.color = '#888';

  // Attendance form submission
  const attendanceForm = document.getElementById('attendanceForm');
  const attendanceResponse = document.getElementById('attendanceResponse');
  attendanceForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const date = document.getElementById('date').value;
    const status = document.getElementById('status').value;
    const record = {
      studentId: studentIdInput.value,
      date,
      status
    };
    // Save to localStorage (append to 'attendanceRecords')
    let records = JSON.parse(localStorage.getItem('attendanceRecords') || '[]');
    records.push(record);
    localStorage.setItem('attendanceRecords', JSON.stringify(records));
    attendanceResponse.textContent = 'Attendance submitted!';
    attendanceResponse.style.display = 'block';
    attendanceResponse.style.color = 'green';
    attendanceForm.reset();
    studentIdInput.value = user.username || user.email || '';
  });
});
