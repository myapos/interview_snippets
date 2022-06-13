// https://leetcode.com/problems/binary-tree-postorder-traversal/

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
  depthFirstSearch(root.right, list);
  list.push(root.val);

  return list;
};

// inorder --> left-root - right
const postorderTraversal = (root) => {
  if (!root) {
    return [];
  }
  return depthFirstSearch(root, []);
};

export default postorderTraversal;
