/*
  Consider an array/list of sheep where some sheep may be missing from their place. 
  We need a function that counts the number of sheep present in the array (true means present).
  For example:
    [true,  true,  true,  false,
      true,  true,  true,  true ,
      true,  false, true,  false,
      true,  false, false, true ,
      true,  true,  true,  true ,
      false, false, true,  true]
  
  The correct answer would be 17.
  Hint: Don't forget to check for bad values like null/undefined
*/

// Bitwise approach
function countSheepsReduce(sheep) {
  return sheep.reduce((count, sheep) => count + (sheep & 1), 0);
}

// Filter approach
function countSheepsFilter(sheep) {
  return sheep.filter(Boolean).length;
}

// Test cases
console.log(countSheepsReduce([])); // 0
console.log(countSheepsReduce([undefined])); // 0
console.log(countSheepsReduce([null])); // 0
console.log(countSheepsReduce([false])); // 0
console.log(countSheepsReduce([true])); // 1
console.log(countSheepsReduce([undefined, null, false, true])); // 1
console.log(
  countSheepsReduce([
    undefined,
    null,
    false,
    true,
    true,
    false,
    null,
    undefined,
  ])
); // 2

console.log(
  countSheepsReduce([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
); // 17

console.log();

console.log(countSheepsFilter([])); // 0
console.log(countSheepsFilter([undefined])); // 0
console.log(countSheepsFilter([null])); // 0
console.log(countSheepsFilter([false])); // 0
console.log(countSheepsFilter([true])); // 1
console.log(countSheepsFilter([undefined, null, false, true])); // 1
console.log(
  countSheepsFilter([
    undefined,
    null,
    false,
    true,
    true,
    false,
    null,
    undefined,
  ])
); // 2

console.log(
  countSheepsFilter([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
); // 17
