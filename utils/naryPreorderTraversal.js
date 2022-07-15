//https://leetcode.com/problems/n-ary-tree-preorder-traversal/
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

//! runs a dfs preorder traversal in an n-ary tree
const naryPreorderTraversal = (root) => {
  let order = [];
  let queue = [root];
  while (queue.length > 0) {
    const first = queue.shift();
    if (first && typeof first.val !== "undefined") {
      order.push(first.val);
      const { children } = first;
      queue = [...children, ...queue];
    }
  }

  return order;
};

export default naryPreorderTraversal;
