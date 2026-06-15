/*
  Implement a function that computes the difference between two lists. 
  The function should remove all occurrences of elements from the first list (a) 
  that are present in the second list (b). The order of elements in the first list 
  should be preserved in the result.

  Examples
    If a = [1, 2] and b = [1], the result should be [2].
    If a = [1, 2, 2, 2, 3] and b = [2], the result should be [1, 3].
*/
function arrayDiffFilter(a, b) {
  const uniqueSymb = new Set(b);
  return a.filter((value) => !uniqueSymb.has(value));
}

function arrayDiffFor(a, b) {
  const newArr = [];
  for (let i = 0; i < a.length; i++) {
    let add = true;
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) add = false;
    }
    if (add) newArr.push(a[i]);
  }
  return newArr;
}

console.log(arrayDiffFor([1, 2], [1]));       // [2], a was [1,2], b was [1]
console.log(arrayDiffFor([1, 2, 2], [1]));    // [2, 2], a was [1,2,2], b was [1]
console.log(arrayDiffFor([1, 2, 2], [2, 2])); // [1], a was [1,2,2], b was [2]
console.log(arrayDiffFor([1, 2, 2], []));     // [1, 2, 2], a was [1,2,2], b was []
console.log(arrayDiffFor([], [1, 2]));        // [], a was [], b was [1,2]
console.log(arrayDiffFor([1, 2, 3], [1, 2])); // [3],a was [1,2,3], b was [1,2]
console.log();
console.log(arrayDiffFilter([1, 2], [1]));        // [2], a was [1,2], b was [1]
console.log(arrayDiffFilter([1, 2, 2], [1]));     // [2, 2], a was [1,2,2], b was [1]
console.log(arrayDiffFilter([1, 2, 2], [2, 2]));  // [1], a was [1,2,2], b was [2]
console.log(arrayDiffFilter([1, 2, 2], []));      // [1, 2, 2], a was [1,2,2], b was []
console.log(arrayDiffFilter([], [1, 2]));         // [], a was [], b was [1,2]
console.log(arrayDiffFilter([1, 2, 3], [1, 2]));  // [3],a was [1,2,3], b was [1,2]
