function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const skewedTreeFromArray = (nodes) => {
  console.log("nodes", nodes);

  let newTree = new TreeNode(nodes[0]);
  let curRoot = newTree; // is retaining the reference to newTree

  for (let i = 1; i < nodes.length; i++) {
    const node = new TreeNode(nodes[i]);

    curRoot.right = node;
    curRoot.left = null;
    console.log("before newTree", newTree, "---- curRoot", curRoot);
    curRoot = node;
    console.log("after newTree", newTree, "---- curRoot", curRoot);
  }

  return newTree;
};

export default skewedTreeFromArray;
