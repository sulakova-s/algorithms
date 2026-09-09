/* 
  Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

  Symbol       Value
  I             1
  V             5
  X             10
  L             50
  C             100
  D             500
  M             1000
  
  For example, 12 is XII, which is simply X + II. 
  The number 27 is written as XXVII, which is XX + V + II.

  I can be placed before V (5) and X (10) to make 4 and 9. 
  X can be placed before L (50) and C (100) to make 40 and 90. 
  C can be placed before D (500) and M (1000) to make 400 and 900.
  Given a roman numeral, convert it to an integer.

  Example 1:
    Input: s = "III"
    Output: 3
    Explanation: III = 3.
  
  Example 2:
    Input: s = "LVIII"
    Output: 58
    Explanation: L = 50, V= 5, III = 3.
  
  Example 3:
    Input: s = "MCMXCIV"
    Output: 1994
    Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
    
  Constraints:
    1 <= s.length <= 15
    s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
    It is guaranteed that s is a valid roman numeral in the range [1, 3999].
*/

// Time complexity: O(1) + O(n) = O(n)
// Space complexity: O(1) + O(1) + O(1) + O(1) = O(1) 
/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  const rules = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const curr = rules[s[i]];
    const next = rules[s[i + 1]] || 0;

    if (curr < next) {
      result += (next - curr);
      i++;
    }
    else {
      result += curr;
    }
  }

  return result;
};

// Test cases
const testCases = [
  "I",                   // 1
  "III",                 // 3
  "IV",                  // 4
  "VI",                  // 5
  "IX",                  // 9
  "XII",                 // 12
  "LVIII",               // 58
  "MCMXCIV"              // 1994 
];

testCases.forEach((num) => console.log(romanToInt(num)));
