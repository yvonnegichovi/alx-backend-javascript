const fs = require('fs');

function countStudents (path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');
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
        totalStudents++;
      }
    }
    console.log(`Number of students ${totalStudents}`);
    for (const field in students) {
      const list = students[field].join(', ');
      console.log(`Number of students in ${field}: ${students[field].length}. List: ${list}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
