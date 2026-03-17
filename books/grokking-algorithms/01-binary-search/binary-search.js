function binarySearch(sortedArray, target) {
  let min = 0;
  let max = sortedArray.length - 1;

  while (min <= max) {
    let mid = Math.floor((max + min) / 2);

    if (sortedArray[mid] === target) return mid;
    if (sortedArray[mid] > target) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }

  return -1;
}

// Test cases
//  1) numbers
const sortedArray = [-4, -2, 5, 8, 12, 16, 23, 38, 45, 56, 72];
const notInArray = [1, 7, 15, 30, 100];

console.log("Case 1: numbers");
console.log(`Sorted array: [${sortedArray}]`);
for (let i = 0; i < sortedArray.length; i++) {
  console.log(
    `   Index of ${sortedArray[i]}:`,
    binarySearch(sortedArray, sortedArray[i]),
  );
}

for (let i = 0; i < notInArray.length; i++) {
  console.log(
    `   Index of ${notInArray[i]}:`,
    binarySearch(sortedArray, notInArray[i]),
  );
}

//  2) strings
console.log("\nCase 2: strings");
const stringArray = ["apple", "banana", "cherry", "date", "elderberry"];
const notInStringArray = ["fig", "grape"];

console.log(
  `Sorted array: [${stringArray.map((str) => `"${str}"`).join(", ")}]`,
);
for (let i = 0; i < stringArray.length; i++) {
  console.log(
    `   Index of "${stringArray[i]}":`,
    binarySearch(stringArray, stringArray[i]),
  );
}

for (let i = 0; i < notInStringArray.length; i++) {
  console.log(
    `   Index of "${notInStringArray[i]}":`,
    binarySearch(stringArray, notInStringArray[i]),
  );
}

// Case 3: dates
console.log("\nCase 3: dates");
const dateArray = [
  new Date("2024-01-01"),
  new Date("2024-03-15"),
  new Date("2024-06-30"),
  new Date("2024-09-01"),
  new Date("2024-12-25"),
];
const notInDateArray = [
  new Date("2024-02-01"),
  new Date("2024-07-15"),
  new Date("2025-01-01"),
];

console.log("Sorted array:");
dateArray.forEach((date) => console.log(`   "${date.toDateString()}"`));
console.log();

for (let i = 0; i < dateArray.length; i++) {
  console.log(
    `   Index of "${dateArray[i].toDateString()}":`,
    binarySearch(dateArray, dateArray[i]),
  );
}

for (let i = 0; i < notInDateArray.length; i++) {
  console.log(
    `   Index of "${notInDateArray[i].toDateString()}":`,
    binarySearch(dateArray, notInDateArray[i]),
  );
}

// Case 4: numbers with duplicates
console.log("\nCase 4: numbers with duplicates");
const duplicatesArray = [1, 2, 2, 2, 3, 4, 5];
const ArrWithoutDuplicates = [...new Set(duplicatesArray)];
console.log(`Sorted array with duplicates: [${duplicatesArray}]`);
console.log(`Sorted array without duplicates: [${ArrWithoutDuplicates}]`);
ArrWithoutDuplicates.forEach((num) => {
  console.log(`   Index of ${num}:`, binarySearch(duplicatesArray, num));
});
