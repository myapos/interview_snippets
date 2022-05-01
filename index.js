import * as utils from "./utils";

// console.log(utils.factorial(50));
// console.log(utils.factorialTCR(50));
// utils.mergeTwoSortedLinkedLists();

const tree = utils.Tree.buildTree();
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

console.log(utils.Tree.printLeafs(tree2.root, [], []));
