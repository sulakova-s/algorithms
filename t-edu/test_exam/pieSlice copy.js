function getInverList(n, k) {
  const result = [];
  let left = 1;
  let right = n;

  while (left <= right) {
    const remaining = right - left;

    if (remaining > 0 && k >= remaining) {
      result.push(right);
      k -= remaining;
      right--;
    } else {
      result.push(left);
      left++;
    }
  }

  return result;
}

let n = 0;
let k = 0;
let lineNumber = 0;

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    const trimmed = line.trim();
    if (trimmed === '') return;

    const parts = trimmed.split(' ').map(Number);
    n = parts[0];
    k = parts[1];

    console.log(getInverList(n, k).join(' '));
    rl.close();
});