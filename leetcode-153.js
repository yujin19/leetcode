// leetcode 153
// language: js
// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
// author: yujin19

/**
 * @param {number[]} nums
 * @return {number}
 */
// binary search --> O(log n)
var findMin = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  //let min;
  while (left < right - 1) {
    var mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < nums[left]) {
      right = mid;
    } else if (nums[mid] > nums[right]) {
      left = mid;
    } else {
      return nums[left];
    }
  }
  return Math.min(nums[left], nums[right]);
};

// brute force --> O(n)

var findMin = function(nums) {
  var min = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    }
  }
  return min;
};
