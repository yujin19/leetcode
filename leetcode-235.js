// leetcode 235
// language: js
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if (root === null) {
    return null;
  }
  let r_val = root.val;
  if (r_val > p.val && r_val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (r_val < p.val && r_val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
  return root;
};
