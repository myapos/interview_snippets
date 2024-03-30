// https://leetcode.com/problems/maximum-depth-of-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const max = (num1, num2) => {
  if (num1 > num2) {
    return num1;
  }

  return num2;
};

const dfs = (node, count) => {
  if (!node) {
    return count;
  }

  count++;
  //! visit left child
  const countLeft = dfs(node.left, count);

  //! visit right child
  const countRight = dfs(node.right, count);
  return max(countLeft, countRight);
};
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = (root) => {
  console.log("root", root);

  const depth = dfs(root, 0);

  console.log("depth", depth);

  return depth;
};

export default maxDepth;
