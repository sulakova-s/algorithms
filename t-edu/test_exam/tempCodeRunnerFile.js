let n = 0;
let strings = [];
let lineNumber = 0;

rl.on('line', (line) => {

  const trimmed = line.trim();
  if (trimmed === '') return;

  if (lineNumber === 0) {
    n = parseInt(trimmed, 10);
    lineNumber++;
  } else {
    strings.push(trimmed);

    if (strings.length === n) {
      const result = SortMostFrStr(strings);
      console.log(result.join('\n'));  // выводим каждую с новой строки
      rl.close();
    }
  }

});