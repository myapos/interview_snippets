import * as utils from ".";

const linkedListReversalFromRange = (node, left, right) => {
  // utils.findNodeInListByIndex(node, 1);
  const startingNode = utils.findNodeInListByIndex(node, left);

  let leftIndex = left;
  let rightIndex = right;

  let diff = rightIndex - leftIndex;

  while (diff > 0) {
    const nodeA = utils.findNodeInListByIndex(node, leftIndex);
    const nodeB = utils.findNodeInListByIndex(node, rightIndex);

    utils.swapNodesInList(startingNode, nodeA, nodeB);
    leftIndex++;
    rightIndex--;
    diff = rightIndex - leftIndex;
  }

  return node;
};

export default linkedListReversalFromRange;
