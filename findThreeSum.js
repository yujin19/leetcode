var array = [1, 4, 3, 5, 7, 8, 1, 3, 2, 2, 1, 2];
var target = 5;

const findThreeSum = function(nums, target) {
  let re = [];
  nums.sort();
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      if (nums[left] + nums[right] + nums[i] === target) {
        re.push([nums[i], nums[left], nums[right]]);
        left++;
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
      } else if (nums[left] + nums[right] + nums[i] < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return re;
};

console.log(findThreeSum(array, target));
