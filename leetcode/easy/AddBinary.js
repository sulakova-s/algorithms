/* 
  Given two binary strings a and b, return their sum as a binary string.

  Example 1:
    Input: a = "11", b = "1"
    Output: "100"
  
  Example 2:
    Input: a = "1010", b = "1011"
    Output: "10101"

  Constraints:
    1 <= a.length, b.length <= 104
    a and b consist only of '0' or '1' characters.
    Each string does not contain leading zeros except for the zero itself.
*/

// Time complexity: O(n), where n = length of the longest string
// Space complexity: O(n)
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {

  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = "";

  while (carry || i >= 0 || j >= 0) {
    const digA = Number(a[i]) || 0;
    const digB = Number(b[j]) || 0;

    const sum = digA + digB + carry;
    const remainder = sum % 2;
    carry = Math.floor(sum / 2);

    result = remainder + result;
    i--;
    j--;
  }

  return result;

};

const testCases = [
  ["11", "1"],          // 100
  ["1010", "1011"]      // 10101
];

testCases.forEach(str => console.log(addBinary(str[0], str[1])));