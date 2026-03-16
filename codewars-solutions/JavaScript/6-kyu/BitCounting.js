/*
  Write a function that takes an integer as input, and returns the number of bits 
  that are equal to one in the binary representation of that number. You can guarantee 
  that input is non-negative.

  Example: The binary representation of 1234 is 10011010010, so the function should 
  return 5 in this case
*/

// Converts the number to a binary string and counts '1's by splitting
function countBitsString(n) {
  return n.toString(2).split("1").length - 1;
}

// Repeatedly checks the last binary digit using modulo 2
// Increments counter when digit is 1
function countBitsModulo(n) {
  let count = 0;
  while (n > 0) {
    if (n % 2 === 1) count++;
    n = Math.floor(n / 2);
  }
  return count;
}

// Uses bitwise AND to check the last bit
// Right shift removes the checked bit
function countBitsBitwise(n) {
  let count = 0;
  while (n > 0) {
    count += n & 1;
    n >>= 1;
  }
  return count;
}

// Test cases
console.log(countBitsString(0)); // 0
console.log(countBitsString(4)); // 1
console.log(countBitsString(7)); // 3
console.log(countBitsString(9)); // 2
console.log(countBitsString(10)); // 2

console.log();

console.log(countBitsModulo(0)); // 0
console.log(countBitsModulo(4)); // 1
console.log(countBitsModulo(7)); // 3
console.log(countBitsModulo(9)); // 2
console.log(countBitsModulo(10)); // 2

console.log();

console.log(countBitsBitwise(0)); // 0
console.log(countBitsBitwise(4)); // 1
console.log(countBitsBitwise(7)); // 3
console.log(countBitsBitwise(9)); // 2
console.log(countBitsBitwise(10)); // 2
