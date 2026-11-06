const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function findNumOfClick(m, a, b) {
  return a <= b ? b - a : ((m - a) + b);
}

let lines = [];

rl.on('line', (input) => {
  lines.push(input);

  if (lines.length === 3) {
    const m = parseInt(lines[0]);
    const a = parseInt(lines[1]);
    const b = parseInt(lines[2]);

    console.log(findNumOfClick(m, a, b));
    rl.close();
  }
});