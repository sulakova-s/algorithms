/*
  4. Ход конём

  Дана прямоугольная доска N×M (N строк и M столбцов). В левом верхнем углу находится 
  шахматный конь, которого необходимо переместить в правый нижний угол доски. В данной 
  задаче конь может перемещаться на две клетки вниз и одну клетку вправо или на одну 
  клетку вниз и две клетки вправо.

  Необходимо определить, сколько существует различных маршрутов, ведущих из левого 
  верхнего в правый нижний угол. Путь нулевой длины также считается корректным маршрутом.
  
  Формат ввода
    Входной файл содержит два натуральных числа N и M (1⩽N, M⩽50)

  Формат вывода
    В выходной файл выведите единственное число — количество способов добраться конём
    до правого нижнего угла доски.
*/
function findNumberOfRoutes(N, M) {
  if (((N - 1) + (M - 1)) % 3 !== 0) return 0;

  const dp = [];
  for (let i = 0; i < N; i++) {
    const temp = [];
    for (let j = 0; j < M; j++) {
      temp.push(0);
    }
    dp.push(temp);
  }

  dp[0][0] = 1;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (i === 0 && j === 0) continue;

      if (isReachable(i, j)) {
        const path1 = i >= 2 && j >= 1 ? dp[i - 2][j - 1] : 0;
        const path2 = i >= 1 && j >= 2 ? dp[i - 1][j - 2] : 0;
        dp[i][j] = path1 + path2;
      }
    }
  }

  return dp[N - 1][M - 1];
}

/*
  Система уравнений:
    2a + b = i
    a + 2b = j

  детерминант = a1 * b2 - a2 * b1 =  4 - 1 = 3
  детерминант != 0 => есть одно решение

  x = (c1 * b2 - c2 * b1) / детерминант;
  y = (a1 * c2 - a2 * c1) / детерминант;
*/
function isReachable(i, j) {
  const determinant = 3;
  const x = (i * 2 - j * 1) / determinant;
  const y = (2 * j - 1 * i) / determinant;

  return Number.isInteger(x) && Number.isInteger(y) && x >= 0 && y >= 0;
}

// Тесты
console.log(findNumberOfRoutes(1, 1)); // 1 (путь нулевой длины)
console.log(findNumberOfRoutes(2, 2)); // 0
console.log(findNumberOfRoutes(2, 3)); // 1
console.log(findNumberOfRoutes(3, 2)); // 1
console.log(findNumberOfRoutes(3, 3)); // 0
console.log(findNumberOfRoutes(4, 4)); // 2
console.log(findNumberOfRoutes(5, 5)); // 0
console.log(findNumberOfRoutes(4, 5)); // 0 
console.log(findNumberOfRoutes(5, 4)); // 0 
console.log(findNumberOfRoutes(5, 6)); // 3
