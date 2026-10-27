/* 
  Given a sorted array of distinct integers and a target value, return the index if the 
  target is found. If not, return the index where it would be if it were inserted in order.

  You must write an algorithm with O(log n) runtime complexity.

  Example 1:
    Input: nums = [1,3,5,6], target = 5
    Output: 2
  
  Example 2:
    Input: nums = [1,3,5,6], target = 2
    Output: 1
  
  Example 3:
    Input: nums = [1,3,5,6], target = 7
    Output: 4
  
  Constraints:
    1 <= nums.length <= 10^4
    -10^4 <= nums[i] <= 10^4
    nums contains distinct values sorted in ascending order.
    -10^4 <= target <= 10^4
*/

// Time complexity: O(log n)
// Space complexity:  O(1)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] < target) {
      left = mid + 1;
    }
    else {
      right = mid;
    }
  }
  return left;

};

const testCases = [
  [[1], 0], // 0
  [[1], 2], // 1

  [[1, 3, 5, 6], 1], // 0
  [[1, 3, 5, 6], 3], // 1
  [[1, 3, 5, 6], 5], // 2
  [[1, 3, 5, 6], 6],  // 3

  [[1, 3, 5, 6], 0],  // 0
  [[1, 3, 5, 6], 2],  // 1
  [[1, 3, 5, 6], 4], // 2
  [[1, 3, 5, 6], 7]  // 4
];

testCases.forEach(arr =>
  console.log(`[${arr[0]}], target = ${arr[1]} => ${searchInsert(arr[0], arr[1])}`)
);