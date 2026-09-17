const fs = require('fs');

fs.writeFileSync(
    'student.txt',
    'Name: Rahul\n' +
    'Roll Number: 101\n' +
    'Branch: CSE\n' +
    'Semester: 3\n'
);

console.log('File created successfully');

const data = fs.readFileSync('student.txt', 'utf8');

console.log('\nStudent Details:');
console.log(data);

fs.appendFileSync(
    'student.txt',
    'Subject: Full Stack Development\n' +
    'Marks: 85\n' +
    'Attendance: 92%\n'
);

console.log('File updated successfully');

const updatedData = fs.readFileSync('student.txt', 'utf8');

console.log('\nUpdated Student Details:');
console.log(updatedData);