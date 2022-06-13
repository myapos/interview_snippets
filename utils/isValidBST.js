// https://leetcode.com/problems/validate-binary-search-tree/
import * as utils from "./";
const isLeaf = (node) =>
  typeof node.val !== "undefined" && !node.left && !node.right;

const dfs = (root, list) => {
  if (!root) {
    return;
  }

  list.push(root.val);
  dfs(root.left, list);

  dfs(root.right, list);

  return list;
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
