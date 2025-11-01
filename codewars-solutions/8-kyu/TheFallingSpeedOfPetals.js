/*
  When it's spring Japanese cherries blossom, it's called "sakura" and it's admired a lot.
  The petals start to fall in late April.

  Suppose that the falling speed of a petal is 5 centimeters per second (5 cm/s), 
  and it takes 80 seconds for the petal to reach the ground from a certain branch.

  Write a function that receives the speed (in cm/s) of a petal as input, and returns the 
  time it takes for that petal to reach the ground from the same branch.

  Notes:

  The movement of the petal is quite complicated, so in this case we can see the velocity 
  as a constant during its falling.Pay attention to the data types.

  If the initial velocity is non-positive, the return value should be 0.
*/
function sakuraFall(petalSpeed) {
  const BASE_PETAL_SPEED = 5.0; // cm/s
  const BASE_FALL_TIME = 80.0; // seconds

  if (petalSpeed <= 0) {
    return 0;
  }

  const branchHeight = BASE_PETAL_SPEED * BASE_FALL_TIME;
  const fallTime = branchHeight / petalSpeed;

  return fallTime;
}

// Test cases
console.log(sakuraFall(0)); // 0
console.log(sakuraFall(1.7)); // 400 / 1.7 ≈ 235.29
console.log(sakuraFall(5)); // 400 / 5 = 80
console.log(sakuraFall(10)); // 400 / 10 = 40
console.log(sakuraFall(200)); // 400 / 200 = 2
console.log(sakuraFall(343.43)); // 400 / 343.43 ≈ 1.165
console.log(sakuraFall(-1)); // 0
