// https://leetcode.com/problems/binary-tree-inorder-traversal

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
var depthFirstSearch = function (root, list) {
  if (!root) {
    return;
  }

  depthFirstSearch(root.left, list);
  list.push(root.val);
  depthFirstSearch(root.right, list);

  return list;
};

// inorder --> left-root - right
const inorderTraversal = (root) => {
  if (!root) {
    return [];
  }
  return depthFirstSearch(root, []);
};

export default inorderTraversal;
