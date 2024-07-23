process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const read1 = process.stdin.read();
  if (read1 !== null) {
    process.stdout.write(`Your name is: ${read1}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
