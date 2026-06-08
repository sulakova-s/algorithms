/*
  The goal of this exercise is to convert a string to a new string where each character 
  in the new string is "(" if that character appears only once in the original string, or ")"
  if that character appears more than once in the original string. Ignore capitalization when
  determining if a character is a duplicate.

  Examples
  "din"      =>  "((("
  "recede"   =>  "()()()"
  "Success"  =>  ")())())"
  "(( @"     =>  "))((" 
  
  Notes
  Assertion messages may be unclear about what they display in some languages. 
  If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

function duplicateEncodeObj(word) {
  const timesSeen = {};
  const input = word.toLowerCase();
  const result = new Array(word.length);

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    timesSeen[char] = (timesSeen[char] || 0) + 1;
  }

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    result[i] = timesSeen[char] > 1 ? ")" : "(";
  }

  return result.join("");
}

function duplicateEncodeSet(word) {
  const seen = new Set();
  const duplicates = new Set();
  const input = word.toLowerCase();

  const result = new Array(word.length);

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (seen.has(char)) {
      duplicates.add(char);
    }
    seen.add(char);
  }

  for (let i = 0; i < input.length; i++) {
    result[i] = duplicates.has(input[i]) ? ")" : "(";
  }

  return result.join("");
}

function test(encodeFn) {
  console.log(encodeFn("din"));     // "((("
  console.log(encodeFn("recede"));  // "()()()"
  console.log(encodeFn("Success")); // ")())())" (should ignore case)
  console.log(encodeFn("(( @"));    // "))(("
}

console.log("Set version:");
test(duplicateEncodeSet);

console.log();

console.log("Object version:");
test(duplicateEncodeObj);