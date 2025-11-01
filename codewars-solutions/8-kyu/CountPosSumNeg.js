/*
  Given an array of integers.
  Return an array, where the first element is the count of positives numbers 
  and the second element is sum of negative numbers. 0 is neither positive nor negative.

  If the input is an empty array or is null, return an empty array.
 */

// 1st solution: with ForEach
function countPositivesSumNegativesForEach(input) {
  let sumPos = 0;
  let sumNeg = 0;

  if (input === null || input.length === 0) return [];

  input.forEach((element) => {
    if (element > 0) {
      sumPos += 1;
    } else if (element < 0) {
      sumNeg += element;
    }
  });
  let res = [sumPos, sumNeg];
  return res;
}

// 2nd solution: with Reduce
function countPositivesSumNegativesReduce(input) {
  if (input === null || input.length === 0) return [];

  return input.reduce(
    (acc, num) => {
      if (num > 0) {
        acc[0]++;
      } else if (num < 0) {
        acc[1] += num;
      }
      return acc;
    },
    [0, 0]
  );
}

// Test cases
console.log(
  countPositivesSumNegativesForEach([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
); // [10, -65]

console.log(
  countPositivesSumNegativesForEach([
    0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
  ])
); // [8, -50]

console.log(
  countPositivesSumNegativesForEach([])
); // []

console.log(
  countPositivesSumNegativesForEach(null)
); // []

console.log();

console.log(
  countPositivesSumNegativesReduce([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
); // [10, -65]

console.log(
  countPositivesSumNegativesReduce([
    0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
  ])
); // [8, -50]

console.log(
  countPositivesSumNegativesReduce([])
); // []

console.log(
  countPositivesSumNegativesReduce(null)
); // []