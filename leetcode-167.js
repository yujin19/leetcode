// leetcode 167
// language: js
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// author: yujin19
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  let re = [];
  while (left < right) {
    if (numbers[left] + numbers[right] === target) {
      re.push(left + 1);
      re.push(right + 1);
      return re;
    } else if (numbers[left] + numbers[right] < target) {
      left++;
    } else {
      right--;
    }
  }
  return re;
};
