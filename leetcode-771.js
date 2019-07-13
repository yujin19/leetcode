// leetcode 771
// language: js
// https://leetcode.com/problems/jewels-and-stones/
// author: yujin19
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let set = new Set();
  for (let i = 0; i < J.length; i++) {
    set.add(J.charAt(i));
  }
  let count = 0;
  for (let i = 0; i < S.length; i++) {
    if (set.has(S.charAt(i))) {
      count++;
    }
  }
  return count;
};
