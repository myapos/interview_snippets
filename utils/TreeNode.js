/*
const tree = new utils.TreeNode(3, null, null);
const nineNode = new utils.TreeNode(9, null, null);
const twentyNode = new utils.TreeNode(20, null, null);
const fifteenNode = new utils.TreeNode(15, null, null);
const sevenNode = new utils.TreeNode(7, null, null);
twentyNode.left = fifteenNode;
twentyNode.right = sevenNode;

tree.left = nineNode;
tree.right = twentyNode;

*/
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

export default TreeNode;
