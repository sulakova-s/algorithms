/* 
  A phrase is a palindrome if, after converting all uppercase letters into lowercase
  letters and removing all non-alphanumeric characters, it reads the same forward and 
  backward. Alphanumeric characters include letters and numbers.
  
  Given a string s, return true if it is a palindrome, or false otherwise.
  
  Example 1:
    Input: s = "A man, a plan, a canal: Panama"
    Output: true
    Explanation: "amanaplanacanalpanama" is a palindrome.

  Example 2:
    Input: s = "race a car"
    Output: false
    Explanation: "raceacar" is not a palindrome.

  Example 3:
    Input: s = " "
    Output: true
    Explanation: s is an empty string "" after removing non-alphanumeric characters.
    Since an empty string reads the same forward and backward, it is a palindrome.
    
  Constraints:
    1 <= s.length <= 2 * 105
    s consists only of printable ASCII characters.
*/

// Time complexity: O(n)
// Space complexity: O(n)
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const input = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  let left = 0;
  let right = input.length - 1;

  while (left < right) {
    if (input[left] !== input[right]) return false;
    
    left++;
    right--;
  }

  return true;
};

const testCases = [
  ["A man, a plan, a canal: Panama", true],
  ["race a car", false],
  [" ", true],

  ["a", true],
  ["aa", true],
  ["ab", false],

  [".,!?", true],
  ["   ", true],

  ["Aa", true],
  ["AbBa", true],

  ["12321", true],
  ["123", false],
  ["1a1", true],
  ["0P", false],

  ["abba", true],
  ["abcba", true],
  ["abca", false],

  ["No 'x' in Nixon", true],
  ["Was it a car or a cat I saw?", true],
  ["ab_a", true],
];

testCases.forEach(([str, expected]) => {
  const result = isPalindrome(str);
  const status = result === expected ? "OK" : "Fail";
  console.log(`${status} "${str}" => ${result} (ожидали ${expected})`);
});