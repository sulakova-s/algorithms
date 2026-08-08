/*
  Дан массив целых чисел и целое число k. Нужно определить, есть ли в массиве два числа, сумма которых равна k .

  Пример:
    Вход: nums = [10, 15, 3, 7], k = 17
    Выход: True
  
  Примечание
  В качестве решения предоставьте функцию следующего вида:
  /** @returns Boolean *\ 
    module.exports = function(nums, k) {  
    // ваш код здесь
    }
  */

// O(n) - время, O(n) - память
const hasPairWithSum = function (nums, k) {
  const seen = new Set();

  for (const num of nums) {
    const complement = k - num;

    if (seen.has(complement)) {
      return true;
    }

    seen.add(num);
  }

  return false;
};

module.exports = hasPairWithSum;
console.log(hasPairWithSum([10, 15, 3, 7], 17)); // true
console.log(hasPairWithSum([3, 3], 6));          // true
console.log(hasPairWithSum([3], 6));             // true
console.log(hasPairWithSum([], 5));              // true


