/*
  You get an array of numbers, return the sum of all of the positives ones.
  Example:
    [1, -4, 7, 12] => 1 + 7 + 12 = 20

  If there is nothing to sum, the sum is default to 0.
*/
function positiveSum(arr) {
  return arr.filter((num) => num > 0).reduce((sum, num) => sum + num, 0);
}
// Test cases
console.log(positiveSum([1, 2, 3, 4, 5])); // 15
console.log(positiveSum([1, -2, 3, 4, 5])); // 13
console.log(positiveSum([])); // 0
console.log(positiveSum([-1, -2, -3, -4, -5])); // 0
console.log(positiveSum([-1, 2, 3, 4, -5])); // 9
