/*
  I have a cat and a dog.
  I got them at the same time as kitten/puppy. That was humanYears years ago.

  Return their respective ages now as [humanYears,catYears,dogYears]
  
  NOTES:
  humanYears >= 1
  humanYears are whole numbers only

  Cat Years
  15 cat years for first year
  +9 cat years for second year
  +4 cat years for each year after that
  
  Dog Years
  15 dog years for first year
  +9 dog years for second year
  +5 dog years for each year after that
*/
var calculatePetAgesMath = function(humanYears) {
  if (humanYears === 1) return [1, 15, 15];
  if (humanYears === 2) return [2, 24, 24];
  return [humanYears, 24 + (humanYears - 2) * 4, 24 + (humanYears - 2) * 5];
};

var calculatePetAgesLoop = function(humanYears) {

  let ages = [0,0,0]
  let catYears = 0;
  let dogYears = 0; 
  
  for (let i = 1; i <= humanYears; i++){
    if (i === 1){
      catYears += 15;
      dogYears = catYears;
    }
    else if (i === 2){
      catYears += 9;
      dogYears = catYears;
    }
    else {
      catYears += 4;
      dogYears += 5;
    }
  }

  return [humanYears, catYears, dogYears];
}

// Test cases
console.log(calculatePetAgesMath(1));
console.log(calculatePetAgesMath(2));
console.log(calculatePetAgesMath(3));
console.log(calculatePetAgesMath(4));
console.log(calculatePetAgesMath(5));
console.log();
console.log(calculatePetAgesLoop(1));
console.log(calculatePetAgesLoop(2));
console.log(calculatePetAgesLoop(3));
console.log(calculatePetAgesLoop(4));
console.log(calculatePetAgesLoop(5));
