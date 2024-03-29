// leetcode 234
// language: js
// https://leetcode.com/problems/palindrome-linked-list/
// author: yujin19
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  var cur = head;
  return travel(head);
  function travel(node) {
    if (!node) {
      return true;
    }
    var preBoolean = travel(node.next);
    var curBoolean = cur.val === node.val;
    cur = cur.next;
    return preBoolean && curBoolean;
  }
};

// more solution
var isPalindrome = function(head) {
  let re = [];
  while (head !== null) {
    re.push(head.val);
    head = head.next;
  }
  for (let i = 0; i < re.length; i++) {
    if (re[i] === re[re.length - i - 1]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};
