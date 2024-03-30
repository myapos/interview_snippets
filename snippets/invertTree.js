// https://leetcode.com/problems/invert-binary-tree/
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
 * @return {TreeNode}
 */
const invertTree = (root) => {
  //! it uses dfs preorder traversal to invert a tree
  if (!root) {
    return root;
  }

  const left = invertTree(root.left);
  const right = invertTree(root.right);

  const temp = left;

  root.left = right;
  root.right = temp;

  return root;
};

export default invertTree;
