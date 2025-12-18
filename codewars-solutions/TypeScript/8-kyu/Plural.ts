/*
  We need a simple function that determines if a plural is needed or not. 
  It should take a number, and return true if a plural should be used with that number 
  or false if not. 
  
  This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.
*/
export function plural(n: number): boolean {
  return n !== 1;
}

// Test cases
console.log(plural(1));    // false
console.log(plural(2));    // true
console.log(plural(0));    // true
console.log(plural(0.5));  // true