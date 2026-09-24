/* 
  Write a function to find the longest common prefix string amongst an array of strings.
  If there is no common prefix, return an empty string "".

  Example 1:
    Input: strs = ["flower","flow","flight"]
    Output: "fl"

  Example 2:
    Input: strs = ["dog","racecar","car"]
    Output: ""
  Explanation: There is no common prefix among the input strings.

  Constraints:
    1 <= strs.length <= 200
    0 <= strs[i].length <= 200
    strs[i] consists of only lowercase English letters if it is non-empty.
*/

// Time complexity: O(N * M), N = strs.length, M = length of the shortest string.
// Space complexity: O(M)
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefixVertical = function (strs) {
  const reference = strs[0];

  for (let i = 0; i < reference.length; i++) {
    const char = reference[i];

    for (let word of strs) {
      if (i >= word.length || word[i] !== char) {
        return reference.slice(0, i);
      }
    }
  }

  return reference;
};

const testCases = [
  ["flower", "flow", "flight"],
  ["dog", "racecar", "car"],
  ["alone"],
  ["abc", "abc", "abc"],
  ["", "abc"],
];

testCases.forEach(arr => console.log(`[${arr}] → ${longestCommonPrefixVertical(arr)}`));
