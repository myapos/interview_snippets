import * as utils from "./utils";

const matrix = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

// const invalidMatrix = [
//   [1, 1, 1],
//   [1, 2, 3],
//   [1, 2, 3],
// ];
// utils.sudokuSolver(matrix);
// console.log("matrix", matrix);

// console.log(
//   "longestSubStrWithoutRepeatingChars",
//   utils.longestSubStrWithoutRepeatingChars("")
// );
// console.log(
//   "longestSubStrWithoutRepeatingChars",
//   utils.longestSubStrWithoutRepeatingChars("c")
// );

// console.log(
//   "longestSubStrWithoutRepeatingChars",
//   utils.longestSubStrWithoutRepeatingChars("abcabcbb")
// );
// console.log(
//   "longestSubStrWithoutRepeatingChars",
//   utils.longestSubStrWithoutRepeatingChars("bbbbb")
// );
// console.log(
//   "longestSubStrWithoutRepeatingChars",
//   utils.longestSubStrWithoutRepeatingChars("pwwkew")
// );
// console.log(
//   "longestSubStrWithoutRepeatingChars",
//   utils.longestSubStrWithoutRepeatingChars("asjrgapa")
// );
// console.log(
//   "longestSubStrWithoutRepeatingChars",
//   utils.longestSubStrWithoutRepeatingChars("xxzqi")
// );

// console.log("almost palindrome:", utils.almostAPalindrome("abccdba"));
// console.log("almost palindrome:", utils.almostAPalindrome("race a car"));
// console.log("almost palindrome:", utils.almostAPalindrome("abcdefdba"));
// console.log("almost palindrome:", utils.almostAPalindrome("cxcaac"));
// console.log("almost palindrome:", utils.almostAPalindrome("abca"));

// console.log(utils.omitFourDigit(19));
// console.log(utils.omitFourDigit(5));
// console.log(utils.omitFourDigit(25));
// console.log(utils.omitFourDigit(4));
// console.log(utils.omitFourDigit(15));
// console.log(utils.omitFourDigit(0));
// console.log(utils.omitFourDigit(-1));

// const head = {
//   val: 1,
//   next: {
//     val: 2,
//     next: {
//       val: 3,
//       next: {
//         val: 4,
//         next: {
//           val: 5,
//           next: null,
//         },
//       },
//     },
//   },
// };

// utils.reverseBetween(head, 2, 4);

// const s = "";
// const s = "lee";
// const s = "lee(t(c)o)de)";
// const s = "a)b(c)d";
// const s = "a)b)(c)d";
// const s = "))((";

// console.log("ret", utils.minRemoveToMakeValid(s));
// var obj = new utils.MyQueue();
// obj.push(1);
// obj.push(2);
// obj.push(3);
// obj.push(4);
// obj.push(5);
// var param_1 = obj.pop();
// var param_2 = obj.pop();
// var param_3 = obj.peek();
// var param_4 = obj.empty();

// const ar = [4, 2, 1, 6, 7, 3];
// const ar = [5, 3, 1, 6, 4, 2];

// [1,2,3,4,6,7]
// const ar = [2, 1];
// const ar = [2, 1, 3];
// utils.quickSort(ar, 0, ar.length - 1);

// console.log("ar", ar);
// utils.quickSort([2, 1], 0, 1);

// console.log(utils.findKthLargest(ar, 3));

// const nums = [5, 7, 7, 8, 8, 10],
// const nums = [0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 5, 6, 6, 6, 6, 7, 8],
// const nums = [
//   5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
//   5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
//   5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
//   5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
//   5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
//   5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
// ],
// const nums = [5, 7, 7, 8, 10],
// const nums = [1, 2, 3],
// const nums = [1, 3],

// const nums = [1, 2, 3, 3, 3, 3, 4, 5, 9];

// const target = 3;

// console.log("range", utils.searchRange(nums, target));

// const tree = new utils.TreeNode(3, null, null);
// const nineNode = new utils.TreeNode(9, null, null);
// const twentyNode = new utils.TreeNode(20, null, null);
// const fifteenNode = new utils.TreeNode(15, null, null);
// const sevenNode = new utils.TreeNode(7, null, null);
// twentyNode.left = fifteenNode;
// twentyNode.right = sevenNode;

// tree.left = nineNode;
// tree.right = twentyNode;

// const tree2 = new utils.TreeNode(3, null, null);

// const tree3 = new utils.TreeNode(1, null, null);
// const twoNode = new utils.TreeNode(2, null, null);
// const threeNode = new utils.TreeNode(3, null, null);
// const fourNode = new utils.TreeNode(4, null, null);
// const fiveNode = new utils.TreeNode(5, null, null);

// tree3.left = twoNode;
// tree3.right = threeNode;
// twoNode.left = fourNode;
// threeNode.right = fiveNode;

// const tree4 = new utils.TreeNode(1, null, null);
// const secondNode = new utils.TreeNode(2, null, null);
// const threeNode = new utils.TreeNode(3, null, null);

// secondNode.left = threeNode;
// tree4.right = secondNode;

// const tree = new utils.TreeNodeClass(7);
// tree.insert([4, 2, 7, 1, 3, 6, 9]);

// const tree = new utils.TreeNodeClass(2);
// tree.insert([1, 3]);
// const tree = new utils.TreeNodeClass();
// tree.insert([0]);

// const tree = new utils.TreeNodeClass(1);
// tree.insert([2]);

// const tree = new utils.TreeNodeClass(5);
// tree.insert([1, 4, null, null, 3, 6]);

// const tree = new utils.TreeNodeClass(1);
// tree.insert([4, 3, 6, 4]);

// const tree = new utils.TreeNodeClass(5);
// tree.insert([1, 4, null, null, 3, 6]);

// const tree = new utils.TreeNodeClass(10);
// tree.insert([3, 12, 1, 4]);

// const tree = new utils.TreeNodeClass(0);
// tree.insert([1, 4, null, null, 3, 6]);

// const tree = new utils.TreeNodeClass(0);
// tree.insert([-1]);

// const tree = new utils.TreeNodeClass(0);
// tree.insert([null, -1]);

// console.log("tree", JSON.stringify(tree));
// console.log("preorder", utils.preorderTraversal(tree));
// console.log(utils.isValidBST(tree));

// const grid = [
//   [2, 1, 1],
//   [1, 1, 0],
//   [0, 1, 1],
// ];

// const grid = [
//   [2, 1],
//   [1, 1],
// ];

// const grid = [
//   [2, 0, 1, 0, 0],
//   [1, 1, 0, 0, 2],
//   [0, 1, 1, 1, 1],
//   [0, 1, 0, 0, 1],
// ];

// const grid = [[]];
// const grid = [[1]];
// const grid = [[2]];
// const grid = [[2, 1]];
const grid = [[0]];

// const grid = [[0, 2]];

console.log(utils.orangesRotting(grid));
