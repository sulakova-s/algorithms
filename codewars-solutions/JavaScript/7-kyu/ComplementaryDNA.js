/*
  DNA is a chemical found in the nucleus of cells and carries the "instructions" for the
  development and functioning of living organisms (http://en.wikipedia.org/wiki/DNA).
  
  In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
  Your function receives one side of the DNA (string); you need to return the other 
  complementary side. DNA strand is never empty or there is no DNA at all.

  More similar exercise are found here: http://rosalind.info/problems/list-view/.

  Example: (input --> output)
    "ATTGC" --> "TAACG"
    "GTAT" --> "CATA"
*/
function dnaStrand(dna) {
  const rules = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };

  return dna
    .split("")
    .map((symb) => rules[symb])
    .join("");
}

// Test cases
console.log(dnaStrand("AAAA")); // TTTT
console.log(dnaStrand("ATTGC")); // TAACG
console.log(dnaStrand("GTAT")); // CATA
