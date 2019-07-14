// leetcode 387
// language: js
// https://leetcode.com/problems/first-unique-character-in-a-string/
// author: yujin19
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (s.indexOf(c) === i && s.indexOf(c, i + 1) === -1) {
      return i;
    }
  }
  return -1;
};
