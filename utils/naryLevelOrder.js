// https://leetcode.com/problems/binary-tree-level-order-traversal/
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
 * @return {number[][]}
 */
const naryLevelOrder = (root) => {
  if (!root) {
    return [];
  }

  let order = [];
  let queue = [root];
  const levels = [];

  while (queue.length > 0) {
    let currentLevel = [];
    let queueL = queue.length;
    let count = 0;

    while (count < queueL) {
      const first = queue.shift();

      order.push(first.val);
      const { children } = first;

      queue = [...queue, ...children];
      count++;
      currentLevel.push(first.val);
    }

    levels.push(currentLevel);
  }

  return levels;
};

export default naryLevelOrder;
