/* 
  Given an integer x, return true if x is a palindrome, and false otherwise.
  
  Example 1:
    Input: x = 121
    Output: true
    Explanation: 121 reads as 121 from left to right and from right to left.
  
  Example 2:
    Input: x = -121
    Output: false
    Explanation: From left to right, it reads -121. From right to left, it becomes 121-.
    Therefore it is not a palindrome.
  
  Example 3:
    Input: x = 10
    Output: false
    Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/

// Time complexity: O(1) + O(log n) + O(1) = O(log n) -> only half of numbers
// Space complexity: O(1) + O(1) + O(1) = O(1)
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if ((x < 0) || (x % 10 === 0 && x != 0)) return false;

  let original = x;
  let reversed = 0;

  while (original > reversed) {
    const remainder = original % 10;
    reversed = reversed * 10 + remainder;
    original = Math.floor(original / 10);
  }

  return original === reversed || original === Math.floor(reversed / 10);

};

// Test cases
const testCases = [
  121,
  -121,
  10
];

testCases.forEach((num) => console.log(isPalindrome(num)));
