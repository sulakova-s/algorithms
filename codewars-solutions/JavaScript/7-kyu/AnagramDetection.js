/*
  Description:
  An anagram is the result of rearranging the letters of a word to produce a new word 
  (see wikipedia).

  Note: anagrams are case insensitive
  Complete the function to return true if the two arguments given are anagrams of each other;
  return false otherwise.

  Examples:
  "foefet" is an anagram of "toffee"

  "Buckethead" is an anagram of "DeathCubeK"
*/
// write the function isAnagram
var isAnagram = function (test, original) {
  if (test.length !== original.length) return false;

  const firstWord = test.toLowerCase().split("").sort().join("");
  const secWord = original.toLowerCase().split("").sort().join("");

  return firstWord === secWord;
};

// Test cases
console.log(isAnagram("foefet", "toffee")); // true
console.log(isAnagram("Buckethead", "DeathCubeK")); // true
console.log(isAnagram("Twoo", "WooT")); // true
console.log(isAnagram("dumble", "bumble")); // false
console.log(isAnagram("ound", "round")); // false
console.log(isAnagram("apple", "pale")); // false
