const { spawn } = require('child_process');

const child = spawn('node', ['1-stdin.js']);

child.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
    if (data.toString().includes('Welcome to Holberton School, what is your name?')) {
        child.stdin.write('John Doe\n');
    }
});

child.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

child.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});
