/* 
  Given a non-negative integer x, return the square root of x rounded down to the 
  nearest integer. The returned integer should be non-negative as well.

  You must not use any built-in exponent function or operator.

  For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
  
  Example 1:
    Input: x = 4
    Output: 2
    Explanation: The square root of 4 is 2, so we return 2.
 
  Example 2:
    Input: x = 8
    Output: 2
    Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
  
  Constraints:
    0 <= x <= 2^31 - 1
*/

// Time complexity: O(log n)
// Space complexity: O(1)
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 0;
  let right = x + 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (mid === left) return left;

    const sqr = mid * mid;
    if (sqr === x) return mid;

    if (sqr > x) {
      right = mid;
    }
    else {
      left = mid;
    }
  }

  return left;
};

const testCases = [
  0,
  1,
  5,
  8,
  16,
  64,
  65,
  100,
  101,
  10000,
  10001,
  2147483647
];

testCases.forEach(num => console.log(mySqrt(num)));