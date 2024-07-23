const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.trim().split('\n').filter(line => line);
    const students = {};
    let totalStudents = 0;
    for (const line of lines) {
      const [field, firstName] = line.split(',');
      if (!field) continue;
      if (students[field]) {
        students[field].push(firstName);
      } else {
        students[field] = [firstName];
      }
      totalStudents += 1;
    }
    console.log(`Number of students: ${totalStudents}`);
    for (const field in students) {
      if (Object.prototype.hasOwnProperty.call(students, field)) {
        const list = students[field].join(', ');
        console.log(`Number of students in ${field}: ${students[field].length}. List ${list}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
