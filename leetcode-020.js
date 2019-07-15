// leetcode 020
// language: js
// https://leetcode.com/problems/valid-parentheses/
// author: yujin19
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let re = [];
  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    if (c === "(" || c === "[" || c === "{") {
      re.push(c);
    } else {
      if (c === ")") {
        if (re[re.length - 1] === "(") {
          re.pop();
          continue;
        } else {
          return false;
        }
      } else if (c === "]") {
        if (re[re.length - 1] === "[") {
          re.pop();
          continue;
        } else {
          return false;
        }
      } else {
        if (re[re.length - 1] == "{") {
          re.pop();
          continue;
        } else {
          return false;
        }
      }
    }
  }
  return re.length === 0 ? true : false;
};
