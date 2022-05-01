/* const tree = utils.Tree.buildTree();
let node = new utils.Tree.Node(10);

const nodes = [6, 5, 3, 7, 8, 12, 15];
let newTree = utils.Tree.insertNodeToBinarySearchTree(tree.root, node);
nodes.forEach((node) => {
  node = new utils.Tree.Node(node);
  utils.Tree.insertNodeToBinarySearchTree(newTree, node);
});

console.log("newTree", newTree);

console.log(utils.Tree.printLeafs(newTree, [], []));

const tree2 = utils.Tree.buildTree();

console.log(utils.Tree.printLeafs(tree2.root, [], [])); */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}

const buildTree = () => {
  const tree = new BinarySearchTree();
  return tree;
};

const insertNodeToBinarySearchTree = (head, node) => {
  const isLeaf = head === null;

  if (isLeaf) {
    const head = new Node();
    head.data = node.data;
    return head;
  }

  if (node.data < head.data) {
    head.left = insertNodeToBinarySearchTree(head.left, node);
  } else {
    head.right = insertNodeToBinarySearchTree(head.right, node);
  }

  return head;
};

//! it will print leafs of a binary search tree
//! it will accept an array of visited nodes
//! and an array to collect leafs
const printLeafs = (node, visited, leafs) => {
  const isNode = node !== null;
  if (!isNode) {
    return [...leafs];
  }

  const isLeaf = node.left === null && node.right === null;

  if (isLeaf) {
    visited.push(node.data);
    leafs.push(node.data);
    return;
  }

  if (!visited.includes(node.data)) {
    visited.push(node.data);
    printLeafs(node.left, visited, leafs);
    printLeafs(node.right, visited, leafs);
  }

  return [...leafs];
};

export {
  Node,
  BinarySearchTree,
  insertNodeToBinarySearchTree,
  buildTree,
  printLeafs,
};
