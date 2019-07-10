// leetcode 152
// language: js
// https://leetcode.com/problems/maximum-product-subarray/
// author: yujin19


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if (nums === null || nums.length === 0){
        return 0;
    }
    var max = nums[0];
    var min = max;
    var ans = max;

    for (let i = 1; i < nums.length; i++){
        var tmax = nums[i] * max;
        var tmin = nums[i] * min;

        max = Math.max(Math.max(tmax, nums[i]), tmin);
        min = Math.min(Math.min(tmax, nums[i]), tmin);
        ans = Math.max(max, ans);
    }
    return ans;
};