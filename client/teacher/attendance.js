// attendance.js for teacher attendance page
// Displays all student attendance records from localStorage

document.addEventListener('DOMContentLoaded', function () {
  // Dummy session: get teacher info from localStorage
  const user = JSON.parse(localStorage.getItem('currentUser'));
  if (!user || user.role !== 'teacher') {
    window.location.href = '../login.html';
    return;
  }

  // Render attendance table
  const container = document.querySelector('.attendance-card');
  container.innerHTML = `
    <div class="attendance-title">Student Attendance Records</div>
    <div style="overflow-x:auto;">
      <table id="attendanceTable" style="width:100%;border-collapse:collapse;">
        <thead>
          <tr style="background:#f3f4f6;">
            <th style="padding:8px;border-bottom:1px solid #e5e7eb;">Student ID</th>
            <th style="padding:8px;border-bottom:1px solid #e5e7eb;">Date</th>
            <th style="padding:8px;border-bottom:1px solid #e5e7eb;">Status</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
    <p id="attendanceResponse" style="display:none;"></p>
  `;

  // Load records
  const records = JSON.parse(localStorage.getItem('attendanceRecords') || '[]');
  const tbody = document.querySelector('#attendanceTable tbody');
  if (records.length === 0) {
    tbody.innerHTML = '<tr><td colspan="3" style="text-align:center;color:#888;">No attendance records found.</td></tr>';
  } else {
    records.forEach(r => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="padding:8px;border-bottom:1px solid #e5e7eb;">${r.studentId}</td>
        <td style="padding:8px;border-bottom:1px solid #e5e7eb;">${r.date}</td>
        <td style="padding:8px;border-bottom:1px solid #e5e7eb;">${r.status}</td>
      `;
      tbody.appendChild(tr);
    });
  }
});
