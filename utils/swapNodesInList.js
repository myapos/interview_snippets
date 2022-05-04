/**
 * It will swap two nodes in a linked list
 *
 * Example:
 *
 * 10 -> 20 -> 30 -> 40 -> 50 -> 60, swap nodes 20, 50
 *
 * 10 -> 50 -> 30 -> 40 -> 20 -> 60
 *
 */

const swapNodesInList = (prev, nodeA, nodeB) => {
  const tempA = nodeA.data;
  const tempB = nodeB.data;

  nodeA.data = tempB;
  nodeB.data = tempA;
  //! do not return anything for now
  //! objects are passed by reference
};

export default swapNodesInList;
