/* 
  You are given an array of integers nums and an integer target, return indices of the 
  two numbers such that they add up to target.

  You may assume that each input would have exactly one solution, and you may not use 
  the same element twice.

  You can return the answer in any order.

  Example 1:
    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
  
  Example 2:
    Input: nums = [3,2,4], target = 6
    Output: [1,2]

  Example 3:
    Input: nums = [3,3], target = 6
    Output: [0,1]
    
  Constraints:
    2 <= nums.length <= 104
    -109 <= nums[i] <= 109
    -109 <= target <= 109
    Only one valid answer exists.
    
  Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
*/

// Time complexity: O(1 + n + 1) = O(n)
// Space complexity: O(1 + n) = O(n)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i];
    if (seen.has(difference)) {
      return [seen.get(difference), i];
    }
    seen.set(nums[i], i);
  }

  return [];
};

// Test cases
const testCases = [
  [[2, 7, 11, 15], 9],
  [[3, 2, 4], 6],
  [[3, 3], 6],
  [[3, 2], 6],
  [[3, 2, 4], 8],
  [[2, 7, 11, 15], 15],
];

testCases.forEach((num) => console.log(twoSum(num[0], num[1])));
