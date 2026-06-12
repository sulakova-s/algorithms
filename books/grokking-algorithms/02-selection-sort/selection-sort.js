function selectionSort(inputArray, key, orderedBy = "asc") {
  const copyInputArray = [...inputArray];
  const sortedArray = [];

  while (copyInputArray.length) {
    let extremeIndex = 0;

    for (let i = 1; i < copyInputArray.length; i++) {
      const current = copyInputArray[i][key];
      const extreme = copyInputArray[extremeIndex][key];

      const needUpdate =
        orderedBy === "desc" ? current < extreme : extreme < current;

      if (needUpdate) {
        extremeIndex = i;
      }
    }

    sortedArray.push(copyInputArray[extremeIndex]);
    copyInputArray.splice(extremeIndex, 1);
  }

  return sortedArray;
}

// Test cases
const songs = [
  { title: "Bohemian Rhapsody", artist: "Queen", plays: 900 },
  { title: "Man of Devotion", artist: "Man of Devotion", plays: 2800 },
  { title: "Imagine", artist: "John Lennon", plays: 1200 },
  { title: "Like him", artist: "Tyler, The Creator", plays: 3500 },
  { title: "Creep", artist: "Radiohead", plays: 2600 },
];
console.log(selectionSort(songs, "plays"));
console.log();

const employees = [
  { name: "Alice", salary: 50000 },
  { name: "Bob", salary: 75000 },
  { name: "Charlie", salary: 62000 },
  { name: "Diana", salary: 90000 },
  { name: "Eve", salary: 48000 },
];
console.log(selectionSort(employees, "salary", "desc"));
console.log();

const duplicates = [{ score: 5 }, { score: 2 }, { score: 5 }, { score: 1 }];
console.log(selectionSort(duplicates, "score"));
