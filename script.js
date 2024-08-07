const students = [
    'Student 1',
    'Student 2',
    'Student 3',
    // Add more students here
];

const studentList = document.getElementById('student-list');
const attendanceRecords = document.getElementById('attendance-records');

function loadStudents() {
    students.forEach(student => {
        const studentDiv = document.createElement('div');
        studentDiv.classList.add('student');
        studentDiv.innerHTML = `
            <label>
                <input type="checkbox" name="attendance" value="${student}">
                ${student}
            </label>
        `;
        studentList.appendChild(studentDiv);
    });
}

function markAttendance() {
    const checkboxes = document.querySelectorAll('input[name="attendance"]:checked');
    const presentStudents = Array.from(checkboxes).map(checkbox => checkbox.value);
    const date = new Date().toLocaleDateString();

    const recordDiv = document.createElement('div');
    recordDiv.classList.add('record');
    recordDiv.innerHTML = `<strong>${date}</strong>: ${presentStudents.join(', ')}`;
    attendanceRecords.appendChild(recordDiv);

    // Clear checkboxes
    checkboxes.forEach(checkbox => checkbox.checked = false);
}

// Load students on page load
window.onload = loadStudents;
