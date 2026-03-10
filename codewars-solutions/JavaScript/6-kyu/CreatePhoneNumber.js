/*
  Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

  Example:
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
  The returned format must be correct in order to complete this challenge.

  Don't forget the space after the closing parentheses!
*/
function createPhoneNumber(numbers) {
  const areaCode = numbers.slice(0, 3).join("");
  const numberFirstPart = numbers.slice(3, 6).join("");
  const numberSecPart = numbers.slice(6, 10).join("");

  phoneNumber = `(${areaCode}) ${numberFirstPart}-${numberSecPart}`;
  return phoneNumber;
}

function createPhoneNumberReg(numbers) {
  return numbers.join("").replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
}

function createPhoneNumberFor(numbers) {
  let format = "(xxx) xxx-xxxx";
  
  for (let i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}

// Test cases
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // (123) 456-7890
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // (111) 111-1111
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // (123) 456-7890
console.log();
console.log(createPhoneNumberReg([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // (123) 456-7890
console.log(createPhoneNumberReg([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // (111) 111-1111
console.log(createPhoneNumberReg([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // (123) 456-7890
console.log();
console.log(createPhoneNumberFor([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // (123) 456-7890
console.log(createPhoneNumberFor([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // (111) 111-1111
console.log(createPhoneNumberFor([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // (123) 456-7890
