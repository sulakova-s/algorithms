/* 
  Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour
  of cycling. You get given the time in hours and you need to return the number of litres
  Nathan will drink, rounded down.
 */

function litres(time) {
  const litresPerHour = 0.5;
  const litresPerCycling = litresPerHour * time;
  return Math.floor(litresPerCycling);
}

// Test cases
console.log(litres(3));     // 1
console.log(litres(6.7));   // 3
console.log(litres(11.8));  // 5
console.log(litres(0));     // 0
console.log(litres(1.4));   // 0