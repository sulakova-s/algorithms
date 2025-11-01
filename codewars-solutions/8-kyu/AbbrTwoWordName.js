/*
  Write a function to convert a name into initials. 
  This kata strictly takes two words with one space in between them.
  
  The output should be two capital letters with a dot separating them.

  It should look like this:
    Sam Harris => S.H
    patrick feeney => P.F
*/
function abbrevName(name) {
  return name
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join(".");
}

// Test cases
console.log(abbrevName("Sam Harris")); // S.H
console.log(abbrevName("Patrick Feenan")); // P.F
console.log(abbrevName("evan cole")); // E.C
