/*
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/
function getCount(str) {
  return str.split("").filter((char) => "aeiou".includes(char)).length;
}

// Test cases
console.log(getCount("abracadabra")); // 5
console.log(getCount("aeiouaeiou")); // 5
console.log(getCount("bcdfgh")); // 5
console.log(getCount("")); // 0
