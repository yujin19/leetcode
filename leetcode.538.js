// leetcode 538
// language: js
// https://leetcode.com/problems/convert-bst-to-greater-tree/
// author: yujin19
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
  var sum = 0;
  convert(root);
  function convert(root) {
    if (!root) return root;
    convert(root.right);
    root.val += sum;
    sum = root.val;
    convert(root.left);
  }
  return root;
};
