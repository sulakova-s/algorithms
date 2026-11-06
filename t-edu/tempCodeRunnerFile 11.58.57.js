rl.on('line', (input) => {
  lines.push(input);

  const [n, m] = lines[0].split(' ').map(Number);
  console.log(lines[0].split(' ').map(Number));
  const matrix = [];

  for (let i = 0; i < n; i++) {
    matrix.push(lines[i].split(' '));
    console.log(matrix)
  }


});