function quicksort(inputArray) {
  if (inputArray.length < 2) return inputArray;

  const pivot = inputArray[0];
  const lessThanPivot = inputArray.filter(
    (num, ind) => num <= pivot && ind > 0,
  );
  const greaterThanPivot = inputArray.filter(
    (num, ind) => num > pivot && ind > 0,
  );

  const result = [
    ...quicksort(lessThanPivot),
    pivot,
    ...quicksort(greaterThanPivot),
  ];

  return result;
}

function runTest(testData) {
  const original = [...testData];
  const sorted = quicksort(testData);

  console.log("Input data:", original);
  console.log("Result:", sorted);
  console.log();
}

// Test cases
runTest([]); // []
runTest([1]); // [1]
runTest([5, 4, 3, 2, 1]); // [1, 2, 3, 4, 5]
runTest([1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5]
runTest([3, 1, 4, 1, 5, 9, 2, 6, 5]); // [1, 1, 2, 3, 4, 5, 5, 6, 9]
runTest([-3, -1, -7, -5, -2]); // [-7, -5, -3, -2, -1]
runTest([-5, 0, 3, -2, 7, -1]); // [-5, -2, -1, 0, 3, 7]

runTest(Array.from({ length: 20 }, () => Math.floor(Math.random() * 100)));
