/* 
  An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

  Example:
    "Dermatoglyphics" --> true
    "aba" --> false
    "moOse" --> false (ignore letter case)
*/
// Reduce solution
function isIsogramReduce(str) {
  return str
    .toUpperCase()
    .split("")
    .sort()
    .reduce((acc, current, index, array) => {
      return acc && (index === 0 || current !== array[index - 1]);
    }, true);
}

// Set solution
function isIsogramSet(str) {
  return new Set(str.toUpperCase()).size === str.length;
}

// Test cases
console.log(isIsogramReduce("Dermatoglyphics")); // true
console.log(isIsogramReduce("isogram")); // true
console.log(isIsogramReduce("aba")); // false
console.log(isIsogramReduce("moOse")); // false
console.log(isIsogramReduce("isIsogram")); // false
console.log(isIsogramReduce("")); // true

console.log();

console.log(isIsogramSet("Dermatoglyphics")); // true
console.log(isIsogramSet("isogram")); // true
console.log(isIsogramSet("aba")); // false
console.log(isIsogramSet("moOse")); // false
console.log(isIsogramSet("isIsogram")); // false
console.log(isIsogramSet("")); // true
