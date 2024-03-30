// https://leetcode.com/problems/binary-tree-preorder-traversal/

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

  list.push(root.val);

  depthFirstSearch(root.left, list);
  depthFirstSearch(root.right, list);

  return list;
};

// preorder  --> root - left - right
const preorderTraversal = (root) => {
  if (!root) {
    return [];
  }
  return depthFirstSearch(root, []);
};

export default preorderTraversal;
