/* 
  Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
  determine if the input string is valid.

  An input string is valid if:

  Open brackets must be closed by the same type of brackets.
  Open brackets must be closed in the correct order.
  Every close bracket has a corresponding open bracket of the same type.

  Example 1:
    Input: s = "()"
    Output: true

  Example 2:
    Input: s = "()[]{}"
    Output: true

  Example 3:
    Input: s = "(]"
    Output: false

  Example 4:
    Input: s = "([])"
    Output: true

  Example 5:
    Input: s = "([)]"
    Output: false

  Constraints:
    1 <= s.length <= 104
    s consists of parentheses only '()[]{}'.
*/

const rules = {
  "(": ")",
  "[": "]",
  "{": "}",
};

// Time complexity: O(n) 
// Space complexity: O(n)
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

  const stack = [];

  for (const curr of s) {
    const expected = rules[stack[stack.length - 1]];

    if (expected === curr) {
      stack.pop();
    }
    else {
      stack.push(curr);
    }
  }

  return stack.length === 0;
};

// Test cases
const testCases = [
  "()",        // true
  "()[]{}",    // true
  "(]",        // false
  "([])",      // true
  "([)]",      // false
  "{[]}",      // true
  "((()))",    // true
  "())",       // false
];

testCases.forEach((s) => console.log(s, "→", isValid(s)));