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

// recursion
let re = [[]];
let cur = [];
var subsets1 = function(nums) {
  if (nums === null || nums.length === 0) {
    return;
  }
  helper(nums, 0, re, cur);
  re.shift();
  return re;
};

var helper = function(nums = [], index = 0, re = [[]], cur = []) {
  if (index >= nums.length) {
    re.push(cur.slice());
    return;
  }
  helper(nums, index + 1, re, cur);
  cur.push(nums[index]);
  helper(nums, index + 1, re, cur);
  cur.pop();
};
