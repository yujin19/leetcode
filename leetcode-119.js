// leetcode 119
// language: js
// https://leetcode.com/problems/pascals-triangle-ii/
// author: yujin19
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let cur_index = 0;
  let re = new Array(rowIndex + 1).fill(0);
  while (cur_index <= rowIndex) {
    re[cur_index] = 1; //tail
    // add value from tail to head
    for (let i = cur_index - 1; i > 0; i--) {
      re[i] += re[i - 1];
    }
    cur_index++;
  }
  return re;
};
