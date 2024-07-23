const http = require('http');
const fs = require('fs');
const path = require('path');

// Function to read CSV file and return student data
async function getStudentData(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        return reject(new Error('Cannot load the database'));
      }

      const lines = data.trim().split('\n');
      const students = {};
      let totalStudents = 0;

      lines.forEach((line, index) => {
        if (index === 0) return; // Skip header line

        const [firstname, field] = line.split(',');
        if (!firstname || !field) return; // Skip invalid lines

        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstname);
        totalStudents++;
      });

      let output = `Number of students: ${totalStudents}\n`;
      Object.keys(students).forEach((field) => {
        output += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
      });

      resolve(output.trim());
    });
  });
}

// Create HTTP server
const app = http.createServer(async (req, res) => {
  const url = req.url;

  if (url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!\n');
  } else if (url === '/students') {
    try {
      const filePath = process.argv[2];
      const studentData = await getStudentData(filePath);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(`This is the list of our students\n${studentData}\n`);
    } catch (error) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end(`${error.message}\n`);
    }
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found\n');
  }
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
