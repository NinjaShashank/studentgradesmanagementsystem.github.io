const form = document.getElementById('student-form');
const studentNameInput = document.getElementById('student-name');
const studentGradeInput = document.getElementById('student-grade');
const studentList = document.getElementById('student-list');
const averageGradeElement = document.getElementById('average-grade');
const clearAllButton = document.getElementById('clear-all');

let students = [];

form.addEventListener('submit', function (e) {
    e.preventDefault();
    addStudent();
});

clearAllButton.addEventListener('click', function () {
    clearAll();
});

function addStudent() {
    const name = studentNameInput.value;
    const grade = parseFloat(studentGradeInput.value);
    
    if (name && !isNaN(grade)) {
        students.push({ name, grade });
        updateStudentList();
        updateAverageGrade();
        studentNameInput.value = '';
        studentGradeInput.value = '';
    }
}

function updateStudentList() {
    studentList.innerHTML = '';
    students.forEach(student => {
        const li = document.createElement('li');
        li.textContent = `${student.name} - ${student.grade}`;
        studentList.appendChild(li);
    });
}

function updateAverageGrade() {
    if (students.length === 0) {
        averageGradeElement.textContent = '0';
        return;
    }
    const total = students.reduce((acc, student) => acc + student.grade, 0);
    const average = total / students.length;
    averageGradeElement.textContent = average.toFixed(2);
}

function clearAll() {
    students = [];
    updateStudentList();
    updateAverageGrade();
}