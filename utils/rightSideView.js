// https://leetcode.com/problems/binary-tree-right-side-view/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const rightSideView = (root) => {
  if (!root) return [];
  const result = [];
  const queue = [root];

  while (queue.length) {
    const currentLevelValues = [];
    let length = queue.length,
      count = 0;

    while (count < length) {
      const currentNode = queue.shift();

      currentLevelValues.push(currentNode.val);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }

      count++;
    }

    const lastNodeOfLevel = currentLevelValues[currentLevelValues.length - 1];
    result.push(lastNodeOfLevel);
  }

  return result;
};

export default rightSideView;
