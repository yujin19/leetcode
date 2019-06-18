// leetcode 151
// language: js
// https://leetcode.com/problems/reverse-words-in-a-string/
// author: yujin19

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s
    .split(" ")
    .reverse()
    .join(" ")
    .replace(/^\s+|\s+$/g, "")
    .replace(/\s+/g, " ");
};
