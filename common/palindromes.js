/*
  Given an array of usernames, return only those that are case-insensitive palindromes.
  
  Examples:
    "AbBa"                      -> true
    "Dino1"                     -> not a palindrome
    ["AbBa", "Dino1", "aAa"]    -> ["AbBa", "aAa"]
    ["raptor99", "Stegos77"]    -> []

  Constraints:
    - Each username consists of letters and digits, starts with a letter
    - username.length > 0
*/

// Solution 1: Simple (one-line)
// Time complexity: O(n * m), n = number of usernames, m = average username length
// Space complexity: O(n * m) - split() and join() creating new arrays/strings
function findAllPalindromes(usernames) {
  const palindromes = [];

  for (const username of usernames) {
    const word = username.toLowerCase();
    if (!word.length) continue;

    const reversed = word.split("").reverse().join("");
    if (word === reversed) palindromes.push(username);
  }

  return palindromes;
}

// Solution 2: Two-pointer approach
// Time complexity: O(n * m)
// Space complexity: O(n * m)
function findPalindromesPtr(usernames) {
  const palindromes = [];

  for (const username of usernames) {
    const word = username.toLowerCase();
    if (!word.length) continue;

    let left = 0;
    let right = word.length - 1;

    while (left < right && word[left] === word[right]) {
      left++;
      right--;
    }

    if (left >= right) palindromes.push(username);
  }

  return palindromes;
}

// Tests
const testCases = [
  ["AbBa", "Dino1", "aAa", "raptor99", "Stegos77"],
  ["RexeR", "TREXerT", "aAa", "X"],
  ["Tricer66", "BRACHI33", "Dino"],
  ["AbBa"],
  ["", "A", "aa", ""],
  ["a1b1a", "a1b2a", "1a2a1", "ab1ba"],
  [],
  ["PterodactylP", "DinoSaurRuaSoniD", "StegosSogets"],
];

console.log("Solution 1: ");
testCases.forEach((arr, index) => {
  const result = findAllPalindromes(arr);
  console.log(`Test ${index + 1}:`);
  console.log(`  Input:  [${arr.join(", ")}]`);
  console.log(`  Output: [${result.join(", ")}] \n`);
});

console.log("Solution 2: ");
testCases.forEach((arr, index) => {
  const result = findPalindromesPtr(arr);
  console.log(`Test ${index + 1}:`);
  console.log(`  Input:  [${arr.join(", ")}]`);
  console.log(`  Output: [${result.join(", ")}] \n`);
});
