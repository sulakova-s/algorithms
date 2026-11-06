const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lines = [];

rl.on('line', (input) => {
  lines.push(input);
});

rl.on('close', () => {
  const [n, m] = lines[0].split(' ').map(Number);
  const matrix = [];

  for (let i = 1; i <= n; i++) {
    matrix.push(lines[i].split(' '));
  }

  console.log(matrixPalindrome(n, m, matrix));
});

function matrixPalindrome(n, m, matrix) {
  let visited = Array.from({ length: n }, () => Array(m).fill(false));
  let changes = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (visited[i][j]) continue;

      let values = [
        matrix[i][j],
        matrix[i][m - 1 - j],
        matrix[n - 1 - i][j],
        matrix[n - 1 - i][m - 1 - j]
      ];

      let freq = {};
      for (let v of values) {
        freq[v] = (freq[v] || 0) + 1;
      }

      let maxFreq = Math.max(...Object.values(freq));
      changes += values.length - maxFreq;

      visited[i][j] = true;
      visited[i][m - 1 - j] = true;
      visited[n - 1 - i][j] = true;
      visited[n - 1 - i][m - 1 - j] = true;
    }
  }

  return changes;
}
