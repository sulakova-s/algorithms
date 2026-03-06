/*
  Write a function that takes in a string of one or more words, and returns the same string,
  but with all words that have five or more letters reversed (just like the name of this kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

  Examples:
  "Hey fellow warriors"  --> "Hey wollef sroirraw" 
  "This is a test        --> "This is a test" 
  "This is another test" --> "This is rehtona test"
*/
function spinWords(string) {
  const words = string.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
      words[i] = words[i].split("").reverse().join("");
    }
  }

  return words.join(" ");
}

function spinWordsMap(string) {
  const words = string
    .split(" ")
    .map((word) =>
      word.length >= 5 ? word.split("").reverse().join("") : word,
    );

  return words.join(" ");
}

// Test cases
console.log(spinWords("")); // ""
console.log(spinWords("Hey fellow warriors")); // Hey wollef sroirraw
console.log(spinWords("This is a test")); // This is a test
console.log(spinWords("This is rehtona test")); // This is rehtona test
console.log();
console.log(spinWords("")); // ""
console.log(spinWordsMap("Hey fellow warriors")); // Hey wollef sroirraw
console.log(spinWordsMap("This is a test")); // This is a test
console.log(spinWordsMap("This is rehtona test")); // This is rehtona test
