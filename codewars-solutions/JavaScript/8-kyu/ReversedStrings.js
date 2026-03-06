/*
  Complete the solution so that it reverses the string passed into it.
    'world'  =>  'dlrow'
    'word'   =>  'drow'
*/

// Functional approach
function reverseStringFunctional(str) {
  return str.split("").reverse().join("");
}

// Iterative approach
function reverseStringIterative(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Test cases
console.log(reverseStringFunctional("world")); // dlrow
console.log(reverseStringFunctional("hello")); // olleh
console.log(reverseStringFunctional("h")); // h
console.log(reverseStringFunctional("")); // ""

console.log("-------------------");

console.log(reverseStringIterative("world")); // dlrow
console.log(reverseStringIterative("hello")); // olleh
console.log(reverseStringIterative("h")); // h
console.log(reverseStringIterative("")); // ""
