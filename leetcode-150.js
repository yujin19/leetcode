// leetcode 150
// language: js
// https://leetcode.com/problems/evaluate-reverse-polish-notation/
// author: yujin19

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  let stack = [];
  for (let i = 0; i < tokens.length; i++) {
    var token = tokens[i];
    var v1, v2;
    var v = parseInt(token);
    if (!isNaN(v)) {
      stack.push(v);
    } else {
      v1 = stack.pop();
      v2 = stack.pop();
      if (token === "*") {
        stack.push(parseInt(v1 * v2));
      } else if (token === "/") {
        stack.push(parseInt(v2 / v1));
      } else if (token === "+") {
        stack.push(v1 + v2);
      } else if (token === "-") {
        stack.push(v2 - v1);
      }
    }
  }
  return stack.pop();
};
