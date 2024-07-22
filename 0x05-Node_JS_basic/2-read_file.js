const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
  }
  catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
