/* 
  Given an integer array nums, move all 0's to the end of it while maintaining 
  the relative order of the non-zero elements.
  
  Note that you must do this in-place without making a copy of the array.

  Example 1:
    Input: nums = [0,1,0,3,12]
    Output: [1,3,12,0,0]

  Example 2:
    Input: nums = [0]
    Output: [0]
  
  Constraints:
    1 <= nums.length <= 104
    -231 <= nums[i] <= 231 - 1
    
  Follow up: Could you minimize the total number of operations done?
*/

// Time complexity: O(n)
// Space complexity: O(1)
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let pos = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[pos] = nums[i];
      pos++;
    }
  }

  for (; pos < nums.length; pos++) {
    nums[pos] = 0;
  }
};

const testCases = [
  [[0], [0]],
  [[1], [1]],
  [[0, 0, 0], [0, 0, 0]],
  [[1, 2, 3], [1, 2, 3]],
  [[0, 0, 1], [1, 0, 0]],
  [[1, 0, 0], [1, 0, 0]],
  [[0, 1, 0, 3, 12], [1, 3, 12, 0, 0]],
  [[4, 0, 5, 0, 0, 6], [4, 5, 6, 0, 0, 0]],
  [[-1, 0, -3, 0, 2], [-1, -3, 2, 0, 0]],
];


testCases.forEach(([input, expected]) => {
  const original = [...input];
  moveZeroes(input);

  const status = JSON.stringify(input) === JSON.stringify(expected) ? 'OK' : 'FAIL';

  const from = JSON.stringify(original);
  const to = JSON.stringify(input);

  console.log(`${status} ${from} -> ${to} (ожидалось ${JSON.stringify(expected)})`);
});

