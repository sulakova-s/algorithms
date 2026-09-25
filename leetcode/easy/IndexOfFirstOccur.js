/* 
  Given two strings needle and haystack, return the index of the first occurrence of 
  needle in haystack, or -1 if needle is not part of haystack.
  
  Example 1:
    Input: haystack = "sadbutsad", needle = "sad"
    Output: 0
  
  Explanation: "sad" occurs at index 0 and 6.
  The first occurrence is at index 0, so we return 0.

  Example 2:
    Input: haystack = "leetcode", needle = "leeto"
    Output: -1
  Explanation: "leeto" did not occur in "leetcode", so we return -1.
*/

// Time complexity:  O(N * M), where N = haystack.length, M = needle.length
// Space complexity: O(1)
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {

  if (needle.length > haystack.length) return -1;

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let isMatch = true;

    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        isMatch = false;
        break;
      }
    }
    if (isMatch) return i;
  }

  return -1;
};

const testCases = [
  ["sadbutsad", "sad"],
  ["leetcode", "leeto"],
  ["abc", ""],
  ["", ""],
  ["", "a"],
  ["mississippi", "issip"],     // 4
  ["aabaaabaaac", "aabaaac"]    // 4
]

testCases.forEach(arr => console.log(`[${arr[0]}, ${arr[1]}] → ${strStr(arr[0], arr[1])}`));