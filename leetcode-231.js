// leetcode 231
// language: js
// https://leetcode.com/problems/power-of-two/
// author: yujin19
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if (n === 1 || n === 2) {
    return true;
  } else if (n === 0 || n % 2 === 1) {
    return false;
  } else {
    return isPowerOfTwo(n / 2);
  }
};
