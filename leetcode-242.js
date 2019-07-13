// leetcode 242
// language: js
// https://leetcode.com/problems/valid-anagram/
// author: yujin19
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  let hash1 = {};
  let hash2 = {};
  hash1 = helper(hash1, s);
  hash2 = helper(hash2, t);
  for (let i = 0; i < t.length; i++) {
    if (hash1[t[i]] !== hash2[t[i]]) {
      return false;
    }
  }
  return true;
};

var helper = function(hash = {}, s = "") {
  for (let i = 0; i < s.length; i++) {
    !hash[s[i]] ? (hash[s[i]] = 1) : hash[s[i]]++;
  }
  return hash;
};

/**
 * notes:
 * 1. use count sort will lead over time
 * 2. can also use two maps to compare
 */
