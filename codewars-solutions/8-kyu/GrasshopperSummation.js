/*
  Summation:
  Write a program that finds the summation of every number from 1 to num (both inclusive).
  The number will always be a positive integer greater than 0. Your function only needs 
  to return the result, what is shown between parentheses in the example below is how you
  reach that result and it's not part of it, see the sample tests.

  For example (Input -> Output):
    2 -> 3 (1 + 2)
    8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
*/
// Solution 1: Mathematical approach
const summationMath = n => n * (n + 1) / 2;

// Solution 2: Iterative approach
const summationLoop = n => {
  let sum = 0;
  for (let i = 1; i <= n; i++) sum += i;
  return sum;
};

// Test cases
console.log(summationMath(1)); // 1
console.log(summationMath(2)); // 3
console.log(summationMath(8)); // 36

console.log(); 

console.log(summationLoop(1)); // 1
console.log(summationLoop(2)); // 3
console.log(summationLoop(8)); // 36
