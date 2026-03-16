/*
  You will be given an array a and a value x. All you need to do is 
  check whether the provided array contains the value.
  
  a can contain numbers or strings. x can be either.

  Return true if the array contains the value, false if not.
*/
export const check = (a: (number | string)[], x: number | string): boolean => {
  return a.includes(x);

  // Alternative solutions:
  // return a.find((element) => element === x) !== undefined;
  // return a.indexOf(x) !== -1;
};

// Test cases
console.log(check([66, 101], 66)); // true
console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45)); // true
console.log(check(["t", "e", "s", "t"], "e")); // true
console.log(check(["what", "a", "great", "kata"], "kat")); // false
