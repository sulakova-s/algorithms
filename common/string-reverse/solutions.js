/*
  Given a string, return it reversed.
  
  Examples: 
    "hello" -> "olleh"
    "A man, a plan, a canal, Panama" -> "amanaP ,lanac a ,nalp a ,nam A"
    "" -> ""
*/
// Time complexity: O(n)
// Space complexity: O(n) — split() and join() creating new arrays/strings

// Solution 1: Simple (one-line)
function reverseSimple(str) {
  return str.split("").reverse().join("");
}

// Solution 2: Two-pointer approach
function reverseTwoPointer(str) {
  const chars = str.split("");
  let left = 0;
  let right = chars.length - 1;

  while (left < right) {
    [chars[left], chars[right]] = [chars[right], chars[left]]; //swap
    left++;
    right--;
  }

  return chars.join("");
}

// Solution 3: for with concatenation
function reverseForBack(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

// Tests
const testCases = ["hello", "world", "", "a", "racecar"];

console.log("Solution 1:");
testCases.forEach((str) => {
  console.log(`  "${str}" -> "${reverseSimple(str)}"`);
});

console.log("\nSolution 2:");
testCases.forEach((str) => {
  console.log(`  "${str}" -> "${reverseTwoPointer(str)}"`);
});

console.log("\nSolution 3:");
testCases.forEach((str) => {
  console.log(` "${str}" -> "${reverseForBack(str)}"`);
});

export { reverseSimple, reverseTwoPointer, reverseForBack };
