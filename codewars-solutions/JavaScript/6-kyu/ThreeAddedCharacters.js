/*
  Given two strings, the first being a random string and the second being the same as the first, 
  but with three added characters somewhere in the string (three same characters).

  Write a function that returns the added character

  You can assume that string2 will aways be larger than string1, and there will always be three
  added characters in string2.

  Examples
    string1 = "hello"
    string2 = "aaahello"
    => 'a'

    string1 = "abcde"
    string2 = "2db2a2ec"
    => '2'

    string1 = "aabbcc"
    string2 = "aacccbbcc"
    => 'c'
*/
function addedCharWithSorting(s1, s2) {
  if (!s1.length || !s2.length || s1 === s2) return "no added character";

  const sortedS1 = s1.split("").sort();
  const sortedS2 = s2.split("").sort();
  let j = 0;

  for (let i = 0; i < sortedS2.length; i++) {
    if (j < sortedS1.length && sortedS2[i] === sortedS1[j]) {
      j++;
    } else {
      return sortedS2[i];
    }
  }
}

function addedCharWithObj(s1, s2) {
  if (!s1.length || !s2.length || s1 === s2) return "no added character";

  const addedChar = {};

  for (const char of s1) {
    addedChar[char] = (addedChar[char] || 0) + 1;
  }

  for (const char of s2) {
    if (addedChar[char] && addedChar[char] > 0) {
      addedChar[char]--;
    } else {
      return char;
    }
  }
}

// Tests
function runTests() {
  const tests = [
    ["", "hello"],
    ["hello", ""],
    ["hello", "hello"],
    ["hello", "aaahello"],
    ["abcde", "2db2a2ec"],
    ["aabbcc", "aacccbbcc"],
    ["abc", "xxxabc"],
  ];

  console.log("=== Sorting solution ===");
  tests.forEach((test) => {
    console.log(addedCharWithSorting(test[0], test[1]));
  });

  console.log("\n=== Object counter solution ===");
  tests.forEach((test) => {
    console.log(addedCharWithObj(test[0], test[1]));
  });
}

runTests();
