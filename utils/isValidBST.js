// https://leetcode.com/problems/validate-binary-search-tree/
import * as utils from "./";
const isLeaf = (node) =>
  typeof node.val !== "undefined" && !node.left && !node.right;

const validNode = (node) => {
  if (isLeaf(node)) {
    return true;
  }

  let isValidNode = true;

  const hasLeftSubTree = node.left;
  const hasRightSubTree = node.right;

  if (hasLeftSubTree && !hasRightSubTree) {
    isValidNode = node.val > node.left?.val;
  }

  if (hasRightSubTree && !hasLeftSubTree) {
    isValidNode = node.val < node.right?.val;
  }

  if (hasRightSubTree && hasLeftSubTree) {
    isValidNode = node.val > node.left?.val && node.val < node.right?.val;
  }

  return isValidNode;
};

const breadthFirstSearch = (tree, hash) => {
  const list = [];
  const queue = [];

  queue.push(tree);

  while (queue.length > 0) {
    const curNode = queue.shift();

    list.push(curNode);

    //! collisions checks
    const isAlreadyInHash = typeof hash[curNode.val] !== "undefined";

    if (!isAlreadyInHash) {
      hash[curNode.val] = curNode.val;
    } else {
      return false;
    }

    if (curNode.left) {
      queue.push(curNode.left);
    }

    if (curNode.right) {
      queue.push(curNode.right);
    }

    // check all nodes in queue for validity
    for (let i = 0; i < list.length; i++) {
      const isValidBSNode = validNode(list[i]);

      if (!isValidBSNode) {
        return false;
      }
    }

    const curNodeIsValid = validNode(curNode);

    if (!curNodeIsValid) {
      return false;
    }
  }

  return true;
};

const dfs = (root, list) => {
  if (!root) {
    return;
  }

  list.push(root.val);
  dfs(root.left, list);

  dfs(root.right, list);

  return list;
};

const validateNodes = (node, direction) => {
  if (!node) {
    return node;
  }

  const left = validateNodes(node.left, "left");

  const right = validateNodes(node.right, "right");

  const nodeIsValid = validNode(node);

  console.log(
    "left",
    left,
    " right",
    right,
    " node",
    node,
    direction,
    "nodeIsValid",
    nodeIsValid
  );

  return node;
};

const arrayIsSorted = (ar) => {
  let isSorted = true;
  for (let i = 0; i <= ar.length - 2; i++) {
    const isInOrder = ar[i] < ar[i + 1];
    isSorted = isSorted && isInOrder;
  }

  return isSorted;
};
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
 * @return {boolean}
 */
const isValidBST = (root) => {
  let isValid = true;
  if (!root) {
    return true;
  }

  if (isLeaf(root)) {
    return true;
  }

  const list = dfs(root, []); //! check for duplicates

  const hash = {};
  //! check collisions
  for (let i = 0; i < list.length; i++) {
    const hasCollision = typeof hash[list[i]] !== "undefined";
    if (hasCollision) {
      return false;
    }
    hash[list[i]] = list[i];
  }

  const inorder = utils.inorderTraversal(root);

  isValid = arrayIsSorted(inorder);

  return isValid;
};

export default isValidBST;
