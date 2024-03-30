// https://leetcode.com/problems/n-ary-tree-postorder-traversal/

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

const naryDfsPostOrder = (root, order, visited) => {
  let { children } = root;

  for (let i = 0; i < children.length; i++) {
    naryDfsPostOrder(children[i], order, visited);
  }

  order.push(root.val);
};

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var naryPostorder = function (root) {
  if (!root) {
    return [];
  }
  const order = [];

  naryDfsPostOrder(root, order, {});

  return order;
};

export default naryPostorder;
