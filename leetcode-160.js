// leetcode 160
// language: js
// https://leetcode.com/problems/intersection-of-two-linked-lists/
// author: yujin19

// over time
function ListNode(val) {
  this.val = val;
  this.next = null;
}
var getIntersectionNode = function(headA, headB) {
  let size1 = findSize(headA);
  let size2 = findSize(headB);
  let diff = size1 - size2;
  let slow = headA;
  let fast = headB;
  while (diff > 0) {
    if (slow !== null) slow = slow.next;
    diff--;
  }

  while (diff < 0) {
    if (fast !== null) fast = fast.next;
    diff++;
  }

  while (slow !== fast && slow !== null && fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
};

var findSize = function(head) {
  var count = 0;
  while (head !== null) {
    count++;
  }
  return count;
};

var head1 = new ListNode(1);

node1 = new ListNode(2);
node2 = new ListNode(3);
head1.next = node1;

var head2 = new ListNode(1);
node3 = new ListNode(4);
node3.next = node1;
node1.next = node2;

console.log(getIntersectionNode(head1, head2));
