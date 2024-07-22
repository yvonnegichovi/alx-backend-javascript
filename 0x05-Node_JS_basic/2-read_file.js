const fs = require('fs');
const path = require('path');

function countStudents(filePath) {
  try {
    const data = fs.readFileSync(path.resolve(filePath), 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }
    const students = {};
    let totalStudents = 0;
    for (const line of lines.slice(1)) {
      const [firstName, , , field] = line.split(',');
      if (firstName && field) {
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstName);
        totalStudents = +1;
      }
    }
    console.log(`Number of students ${totalStudents}`);
    for (const field in students) {
      if (Object.prototype.hasOwnProperty.call(students, field)) {
        const list = students[field].join(', ');
        console.log(`Number of students in ${field}: ${students[field].length}. List: ${list}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
