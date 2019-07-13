// leetcode 015
// language: js
// https://leetcode.com/problems/3sum/
// author: yujin19
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  //if (nums.length < 3) return [];
  nums.sort((a, b) => {
    return a - b;
  });
  // this sort step is necessary because js doesn't work well on negative number sorting
  let re = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        re.push([nums[i], nums[left], nums[right]]);
        //left++;
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        left++;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return re;
};
