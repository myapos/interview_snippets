// https://leetcode.com/problems/reverse-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  // recursive solution
  // let previous = null;
  // const traverse = (head) => {
  //     if (head === null) return head;

  //     let current = head;
  //     let next = head.next;
  //     // reverse list references
  //     current.next = previous;
  //     previous = head;

  //     traverse(next);

  //     return previous;

  // }
  // return traverse(head);

  let previous = null;
  let current = head;

  while (current) {
    let next = current.next;
    current.next = previous;

    previous = current;
    current = next;
  }

  return previous;
};

export default reverseList;
