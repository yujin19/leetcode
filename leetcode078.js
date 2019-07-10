// leetcode 078
// language: js
// https://leetcode.com/problems/subsets/
// author: yujin19
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  return nums.reduce(
    (subsets, value) => subsets.concat(subsets.map(set => [value, ...set])),
    [[]]
  );
};
