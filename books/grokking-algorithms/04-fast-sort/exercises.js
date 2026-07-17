/* 
  4.1 Write out the code for the sum function (from earlier).
  4.2 Write a recursive function to count the number of items in a list.
  4.3 Write a recursive function to find the maximum number in a list.

  4.4 Recall the binary search from chapter 1. It's a divide-and-conquer algorithm, too. 
      Can you come up with the base case and recursive case for binary search?

      Base case: the list has 0 or 1 element. 
      If the element matches what we're looking for, we stop and return it.
      If the list is empty, the element is not found.

      Recursive case: we split the list in half and continue searching 
      in the left or right half until we find the element or the list is empty.
*/
function sumArray(input) {
  if (!input.length) return 0;

  return input[0] + sumArray(input.slice(1));
}

function countItems(input) {
  if (!input.length) return 0;

  return 1 + countItems(input.slice(1));
}

function findMax(input) {
  if (!input.length) return null;
  if (input.length === 1) return input[0];

  return Math.max(input[0], findMax(input.slice(1)));
}

function runTest(fn, input, expected) {
  const result = fn(input);
  const status = result === expected ? "PASS" : "FAIL";

  console.log(`[${status}] ${fn.name}(${JSON.stringify(input)}) → ${result}`);
}

console.log("\nExercise 4.1:");
runTest(sumArray, [], 0);
runTest(sumArray, [2], 2);
runTest(sumArray, [2, 4], 6);
runTest(sumArray, [2, 4, 6], 12);

console.log("\nExercise 4.2:");
runTest(countItems, [], 0);
runTest(countItems, [2], 1);
runTest(countItems, [2, 4], 2);
runTest(countItems, [2, 4, 6], 3);

console.log("\nExercise 4.3:");
runTest(findMax, [], null);
runTest(findMax, [2], 2);
runTest(findMax, [2, 4], 4);
runTest(findMax, [2, 4, 6], 6);
runTest(findMax, [6, 4, 2], 6);
runTest(findMax, [-1, -2, -3], -1);