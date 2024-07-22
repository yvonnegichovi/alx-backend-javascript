const readline = require('readline');

const read1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Welcome to Holberton School, what is your name?')

read1.on('line', (input) => {
  console.log(`Your name is: ${input}`);
  read1.close();
});

read1.on('close', () => {
  console.log(`This important software is now closing`);
});
