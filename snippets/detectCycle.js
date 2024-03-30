/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = (head) => {
  let tortoiseNode = head;
  let hairNode = head;

  while (true) {
    if (hairNode === null || hairNode.next === null) {
      return null;
    } else {
      hairNode = hairNode.next;
    }

    tortoiseNode = tortoiseNode.next;
    hairNode = hairNode.next;

    if (tortoiseNode === hairNode) {
      // cycle detected
      meetingPoint = tortoiseNode;
      break;
    }
  }

  //reset
  hairNode = head;

  while (hairNode !== tortoiseNode) {
    hairNode = hairNode.next;
    tortoiseNode = tortoiseNode.next;
  }

  return hairNode;
};

export default detectCycle;
