/* 
  You are going to be given a non-empty string. Your job is to return the middle character(s)
  of the string.

  If the string's length is odd, return the middle character.
  If the string's length is even, return the middle 2 characters.

  Examples:
    "test" --> "es"
    "testing" --> "t"
    "middle" --> "dd"
    "A" --> "A" 
*/
function getMiddle(str) {
  const mid = Math.floor(str.length / 2);
  return str.length % 2 === 0 ? str.slice(mid - 1, mid + 1) : str[mid];
}

// Test cases
console.log(getMiddle("test")); // es
console.log(getMiddle("testing")); // t
console.log(getMiddle("middle")); // dd
console.log(getMiddle("A")); // A
