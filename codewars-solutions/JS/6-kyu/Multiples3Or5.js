/*
  If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 
  and 9. The sum of these multiples is 23.

  Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the
  number passed in.

  Additionally, if the number is negative, return 0.

  Note: If a number is a multiple of both 3 and 5, only count it once.

  Courtesy of projecteuler.net (Problem 1)
*/
function solutionSimple(number) {
  if (number < 0) return 0;

  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

function solutionReduce(number) {
  return number < 3
    ? 0
    : [...Array(number).keys()].reduce(
        (sum, i) => sum + (i % 3 === 0 || i % 5 === 0 ? i : 0),
        0
      );
}

// Test cases
console.log(solutionSimple(10)); // 23
console.log(solutionSimple(-5)); // 0

console.log();

console.log(solutionSimple(10)); // 23
console.log(solutionReduce(-5)); // 0
