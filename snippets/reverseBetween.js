const reverseWithLoop = (stringified) => {
  let cn = JSON.parse(stringified);
  let prev = null;

  //! 1 -> 2 -> 3 -> 4 -> null
  //! null <- 1 <- 2 <- 3 <- 4

  while (cn) {
    const { next } = cn; //! save reference to next
    cn.next = prev; //! reverse the nodes of current node
    prev = cn; //! update the previous node to current node
    cn = next; //! save next to current node to continue the list traversal
  }

  return prev;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

//  const stringified = JSON.stringify(head);
//  reverseWithLoop(stringified);

var reverseBetween = function (head, left, right) {
  let currentPos = 1,
    currentNode = head;
  let start = head;

  while (currentPos < left) {
    start = currentNode;
    currentNode = currentNode.next;
    currentPos++;
  }

  let newList = null,
    tail = currentNode;

  while (currentPos >= left && currentPos <= right) {
    const { next } = currentNode;
    //! extra steps for reversion here
    currentNode.next = newList;
    newList = currentNode;
    //! end of extra steps here
    currentNode = next;
    currentPos++;
  }

  start.next = newList;
  tail.next = currentNode;

  if (left > 1) {
    return head;
  } else {
    return newList;
  }
};

export default reverseBetween;
