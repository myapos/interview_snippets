import * as utils from "./utils";
import * as data from "./utils/trieData";
import maxProfitData from "./utils/data/maxProfitData";

// const matrix = [
//   ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//   ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//   [".", "9", "8", ".", ".", ".", ".", "6", "."],
//   ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//   ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//   ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//   [".", "6", ".", ".", ".", ".", "2", "8", "."],
//   [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//   [".", ".", ".", ".", "8", ".", ".", "7", "9"],
// ];

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
// const grid = [[0]];

// const grid = [[0, 2]];

// console.log(utils.orangesRotting(grid));

// const INF = 2147483647;

// const grid = [
//   [INF, -1, 0, INF],
//   [-1, INF, INF, -1],
//   [INF, -1, INF, -1],
//   [0, -1, INF, INF],
// ];

// const grid = [
//   [INF, -1, 0, INF],
//   [INF, INF, INF, -1],
//   [INF, -1, INF, -1],
//   [0, -1, INF, INF],
// ];

// const grid = [];
// const grid = [[0]];
// const grid = [[-1]];
// const grid = [
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 0, INF],
// ];

// const grid = [
//   [INF, INF, INF, INF],
//   [INF, INF, INF, INF],
//   [INF, INF, INF, INF],
//   [INF, INF, INF, 0],
// ];

// const grid = [
//   [-1, -1, -1, -1],
//   [-1, -1, 0, -1],
//   [-1, -1, -1, -1],
//   [-1, INF, INF, 0],
// ];

// console.log(utils.wallsAndGates(grid));

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// const matrix = [
//   [1, 2, 3, 7, 9],
//   [4, 5, 6, 8, 10],
// ];

// const matrix = [[3, 7, 8]];
// const matrix = [[5], [8]];
// const matrix = [
//   [1, 1, 1],
//   [1, 0, 1],
//   [1, 1, 1],
// ];

// const matrix = [
//   [0, 1, 2, 3, 0],
//   [3, 4, 5, 2, 6],
//   [1, 3, 1, 5, 5],
//   [1, 3, 1, 5, 5],
// ];

// console.log(utils.setZeroes(matrix));

// const maxHeap = new utils.maxHeap();
// maxHeap.insert(30);
// maxHeap.insert(50);
// maxHeap.insert(40);
// maxHeap.insert(20);
// maxHeap.insert(15);
// maxHeap.insert(50);
// maxHeap.insert(50);
// maxHeap.insert(50);
// maxHeap.insert(50);
// maxHeap.insert(50);
// maxHeap.insert(50);
// maxHeap.insert(50);
// maxHeap.insert(50);
// maxHeap.insert(12);
// maxHeap.insert(7);
// maxHeap.insert(40);
// maxHeap.insert(22);
// console.log(maxHeap);

// maxHeap.delete();
// maxHeap.delete();
// maxHeap.delete();
// maxHeap.delete();
// maxHeap.delete();
// maxHeap.delete();
// maxHeap.delete();

// maxHeap.insert(30);
// maxHeap.insert(20);
// maxHeap.insert(5);
// maxHeap.insert(80);

// console.log("prin", maxHeap);

// maxHeap.delete();
// maxHeap.delete();

// console.log("meta", maxHeap);

/* 
[ 
  [ 2, -1, 0, 0 ], 
  [ 1, 1, 0, 0 ], 
  [ 0, -1, 1, -1 ], 
  [ 0, -1, 2, 3 ] ]

*/

// console.log(utils.heapSort([2, 5, 1, 3, 4], (a, b) => a > b));
// console.log(utils.heapSort([7, 6, 4, 5, 3, 2, 1], (a, b) => a > b));
// console.log(utils.heapSort([2, 2, 5, 1, 3, 4], (a, b) => a > b));
// console.log(utils.heapSort([2, 5, 1, 3, 2, 4], (a, b) => a > b));

// console.log(utils.heapSort([0], (a, b) => a > b));

// // console.log(utils.heapSort([5, 1, 2, 3, 4], (a, b) => a > b));
// console.log(utils.heapSort([1, 2, 3, 4, 5]));

// console.log(utils.heapSort([3, 2, 8, 10, 1]));
// console.log(
//   utils.heapSort([-7, 0, -1, 4, -4, -5, -1, 0, 7, 9], (a, b) => a > b)
// );

// console.log(utils.heapSort([5, 1, 1, 2, 0, 0]));
// console.log(
//   utils.greatestCommonDivisorOfStrings(
//     "TAUXXTAUXXTAUXXTAUXXTAUXX",
//     "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX"
//   )
// );

// const test = [
//   [3, 1, 100],
//   [3, 2, 80],
//   [2, 1, 30],
//   [4, 3, 120],
//   [5, 4, 150],
//   [5, 6, 25],
//   [6, 4, 100],
//   [6, 8, 140],
//   [6, 7, 90],
//   [7, 8, 100],
//   [8, 1, 170],
// ];

// console.log(utils.networkDelayTime(test, 8, 5));
// console.log(
//   utils.networkDelayTime(
//     [
//       [2, 1, 1],
//       [2, 3, 1],
//       [3, 4, 1],
//     ],
//     4,
//     2
//   )
// );

// console.log(
//   utils.networkDelayTime(
//     [
//       [1, 2, 1],
//       [2, 3, 2],
//     ],
//     3,
//     1
//   )
// );

// const adjList = [
//   [1, 3],
//   [0],
//   [3, 8],
//   [0, 4, 5, 2],
//   [3, 6],
//   [3],
//   [4, 7],
//   [6],
//   [2],
// ];

// console.log(utils.dfsGraph(adjList));

// const times = [
//   [1, 4, 2],
//   [1, 2, 9],
//   [4, 2, -4],
//   [2, 5, -3],
//   [4, 5, 6],
//   [3, 2, 3],
//   [5, 3, 7],
//   [3, 1, 5],
// ];

// const N = 5,
//   k = 1;

// console.log(utils.bellmanFord(times, N, k));
// console.log(utils.networkDelayTime(times, N, k));

// const adjacencyList = [
//   [1, 3],
//   [0],
//   [3, 8],
//   [0, 2, 4, 5],
//   [3, 6],
//   [3],
//   [4, 7],
//   [6],
//   [2],
// ];
// const values = [];
// console.log(utils.dfsGraph(0, adjacencyList, values, {}));
// console.log("values", values);

let prerequisites = [
  [1, 0],
  [2, 1],
  [3, 2],
];
let numCourses = 4;

// console.log(utils.canFinish(numCourses, prerequisites)); // true

prerequisites = [
  [1, 0],
  [2, 1],
  [0, 2],
]; // false --> cycle exists
numCourses = 3;

// console.log(utils.canFinish(numCourses, prerequisites));

prerequisites = [
  [0, 4],
  [1, 0],
  [3, 1],
  [2, 3],
  [1, 2],
]; // false --> cycle exists
numCourses = 5;

// console.log(utils.canFinish(numCourses, prerequisites));

prerequisites = [
  [1, 0],
  [2, 1],
  [4, 3],
  [3, 4],
]; // false --> unconnected cycle exists
numCourses = 5;

// console.log(utils.canFinish(numCourses, prerequisites));

prerequisites = [
  [1, 0],
  [3, 2],
]; // true --> unconnected no cycle
numCourses = 4;

// console.log(utils.canFinish(numCourses, prerequisites));

prerequisites = [
  [0, 1],
  [0, 2],
  [1, 2],
];
numCourses = 3;

// console.log(utils.canFinish(numCourses, prerequisites)); // true

// prerequisites = [
//   [1, 0],
//   [0, 3],
//   [0, 2],
//   [3, 2],
//   [2, 5],
//   [4, 5],
//   [5, 6],
//   [2, 4],
// ];
// numCourses = 7;

// console.log(utils.canFinish(numCourses, prerequisites)); // true

// prerequisites = [[0, 1]];
// numCourses = 2;
// console.log(utils.canFinish(numCourses, prerequisites)); // true

// console.log(utils.knightProbability(3, 2, 0, 0));
// console.log(utils.knightProbability(1, 0, 0, 0));
// console.log(utils.knightProbability(8, 30, 6, 4));

// const monarchy = new utils.Monarchy("Jake");
// monarchy.birth("Catherine", "Jake");
// monarchy.birth("Jane", "Catherine");
// monarchy.birth("Farah", "Jane");
// monarchy.birth("Tom", "Jake");
// monarchy.birth("Celine", "Jake");
// monarchy.birth("Mark", "Catherine");
// monarchy.birth("Peter", "Celine");

// console.log(monarchy.getOrderOfSucession());
// monarchy.death("Jake");
// console.log(monarchy.getOrderOfSucession());
// monarchy.death("Jane");
// console.log(monarchy.getOrderOfSucession());

// console.log(utils.coinChange([2], 3));
// console.log(utils.coinChange([1], 0));
// console.log(utils.coinChange([1, 2, 5], 3));
// console.log(utils.coinChange([1, 2, 5], 12)); // 3
// console.log(utils.coinChange([1, 2, 5], 11));
// console.log(utils.coinChange([1, 2, 5], 12));

// console.log(utils.coinChange([2, 3, 7, 5], 17));
// console.log(utils.coinChange([7, 6], 12));
// console.log(utils.coinChange([1, 3, 7, 5], 8)); // 2
// console.log(utils.coinChange([186, 419, 83, 408], 6249)); // 20

// console.log(utils.coinChange([1, 2, 5], 100)); // 20
// console.log(utils.coinChange([3, 7, 405, 436], 8839)); // 25

// console.log(utils.maxProfit([7, 1, 5, 3, 6, 4])); // 5
// console.log(utils.maxProfit([7, 6, 4, 3, 1])); // 0
// console.log(
//   utils.maxProfit([
//     7, 6, 4, 7, 2, 4, 5, 7, 3, 4, 10, 3, 1, 7, 6, 4, 7, 2, 4, 5, 7, 3, 4, 10, 3,
//     1, 7, 6, 4, 7, 2, 4, 5, 7, 3, 4, 10, 3, 1, 7, 6, 4, 7, 2, 4, 5, 7, 3, 4, 10,
//     3, 1, 7, 6, 4, 7, 2, 4, 5, 7, 3, 4, 10, 3, 1, 15, 7, 6, 4, 7, 2, 4, 5, 7, 3,
//     4, 10, 3, 1,
//   ])
// ); // 14
// console.log(utils.maxProfit(maxProfitData)); // 0
// console.log(utils.maximumDifference([7, 1, 5, 4])); // 4
// console.log(utils.maximumDifference([9, 4, 3, 2])); // -1
// console.log(utils.maximumDifference([1, 5, 2, 10])); // 9
// console.log(utils.maxDistance([1, 1, 1, 6, 1, 1, 1])); // 3
// console.log(utils.maxDistance([1, 8, 3, 8, 3])); // 4

// console.log(
//   utils.maxDistancePairValues([55, 30, 5, 4, 2], [100, 20, 10, 10, 5])
// ); // 2
// console.log(utils.maxDistancePairValues([2, 2, 2], [10, 10, 1])); // 1
// console.log(utils.maxDistancePairValues([30, 29, 19, 5], [25, 25, 25, 25, 25])); // 2

// let counter = utils.counter(10);
// console.log("first time", counter());
// console.log("second time", counter());
// console.log("third time time", counter());
// console.log("third time time", counter());
// console.log("third time time", counter());

// counter = utils.counter(-2);
// console.log("first time", counter());
// console.log("second time", counter());
// console.log("third time time", counter());
// console.log("third time time", counter());
// console.log("third time time", counter());

// const functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x];
// const functions = [(x) => 10 * x, (x) => 10 * x, (x) => 10 * x];
// const functions = [(x) => x + 1, (x) => x * x];
// const functions = [];
// const composed = utils.compose(functions);

// console.log("composed", composed(1));

const sum = (a, b) => a + b;

const mergeObjects = function (a, b) {
  return { ...a, ...b };
};
const inversed = function (a) {
  return !!a;
};

const reduceFn = function (...arr) {
  return arr.reduce((a, b) => a + b, 0);
};

const memoizedSum = utils.memoizeAdvanced(sum);
const memoizedObjects = utils.memoizeAdvanced(mergeObjects);
const memoizeInversed = utils.memoizeAdvanced(inversed);
const memoizeReduceFn = utils.memoizeAdvanced(reduceFn);
// console.log(memoizedSum(2, 2));
// console.log(memoizedSum(2, 2));
// console.log(memoizedSum(0, 0));
// console.log(memoizedSum(0, 0));
// debugger;
// console.log(memoizedObjects({}, {}));
// console.log(memoizedObjects({}, {}));
// console.log(memoizeInversed(null));
// console.log(memoizeInversed(null));
// console.log(memoizeInversed(undefined));
// console.log(memoizeInversed(undefined));

// const getInputs___ = () => [[], [1], [1], [], [1, 2], [1, 2]];
// const getInputs = () => [[], [], [1, 2], [1, 2]];
// const getInputs__ = () => [
//   [2, 2],
//   [2, 2],
//   [1, 2],
// ];
// getInputs().forEach((input, index) => {
//   debugger;
//   if (index === 3) {
//     // debugger;
//   }
//   const res = memoizeReduceFn(...input);

//   console.log("res", res);
// });

// utils.skewedTreeFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// utils.skewedTreeFromArray([1, 5, 7]);

// const boards = [
//   [
//     [0, 1, 0, 0],
//     [0, 1, 1, 0],
//     [0, 1, 1, 1],
//   ],
// ];
// console.log(boards[1].length, boards[1][0].length);
// const solution = utils.surroundedRegions(boards[2]);

// console.log("solution", JSON.stringify(solution));

// const solution = utils.maxAreaOfIslands(boards[0]);
// utils.diagonalPrime();
// utils.palindromePartitioning("aab");
// console.log(utils.permute([1, 2, 3, 4]));
// console.log(utils.letterCombinations("234"));
// console.log(utils.letterCombinations(""));
// console.log(utils.generateParentheses(3));
// console.log(utils.combinationSum2([2, 5, 2, 1, 2], 5));

// console.log(
//   utils.getMaximumGold([
//     [1, 0, 7],
//     [2, 0, 6],
//     [3, 4, 5],
//     [0, 3, 0],
//     [9, 0, 20],
//   ])
// );
// 28

// console.log(
//   utils.getMaximumGold([
//     [0, 6, 0],
//     [5, 8, 7],
//     [0, 9, 0],
//   ])
// );
// 24

// console.log(
//   utils.getMaximumGold([
//     [1, 0, 7, 0, 0, 0],
//     [2, 0, 6, 0, 1, 0],
//     [3, 5, 6, 7, 4, 2],
//     [4, 3, 1, 0, 2, 0],
//     [3, 0, 5, 0, 20, 0],
//   ])
// ); // 60

// console.log(
//   utils.getMaximumGold([
//     [0, 0, 34, 0, 5, 0, 7, 0, 0, 0],
//     [0, 0, 0, 0, 21, 0, 0, 0, 0, 0],
//     [0, 18, 0, 0, 8, 0, 0, 0, 4, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [15, 0, 0, 0, 0, 22, 0, 0, 0, 21],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 7, 0, 0, 0, 0, 0, 0, 38, 0],
//   ])
// ); // 38

// console.log(
//   utils.getMaximumGold([
//     [0, 0, 0],
//     [0, 0, 0],
//     [0, 0, 0],
//   ])
// ); // 0

// console.log(
//   utils.wordSearch(
//     [
//       ["A", "B", "C", "E"],
//       ["S", "F", "C", "S"],
//       ["A", "D", "E", "E"],
//     ],
//     "ABCCED"
//   )
// ); // true

// console.log(
//   utils.wordSearch(
//     [
//       ["A", "B", "C", "E"],
//       ["S", "F", "C", "S"],
//       ["A", "D", "E", "E"],
//     ],
//     "SEE"
//   )
// );
// // true

// console.log(
//   utils.wordSearch(
//     [
//       ["A", "B", "C", "E"],
//       ["S", "F", "C", "S"],
//       ["A", "D", "E", "E"],
//     ],
//     "ABCB"
//   )
// );
// false

// console.log(
//   utils.wordSearch(
//     [
//       ["a", "a", "b", "a", "a", "b"],
//       ["b", "a", "b", "a", "b", "b"],
//       ["b", "a", "b", "b", "b", "b"],
//       ["a", "a", "b", "a", "b", "a"],
//       ["b", "b", "a", "a", "a", "b"],
//       ["b", "b", "b", "a", "b", "a"],
//     ],
//     "aaaababab"
//   )
// );
// true

// console.log(utils.grayCode(3));
// [0,1,3,2,6,7,5,4]
// [
// 000, 001, 011,
// 010, 110, 111,
// 101, 100]
// wrong [0,1,3,2,6,4,5,7]

// console.log(utils.readBinaryWatch(1));
// console.log(utils.removeInvalidParentheses("())("));
// const solution = new utils.ArrayShuffle([1, 2, 3]);

// console.log("initial solution.initial", solution.initial);
// solution.shuffle();
// console.log("shuffled solution.shuffled", solution.shuffled);
// solution.reset();
// console.log("reset solution.shuffled", solution.shuffled);
// solution.shuffle();
// console.log("shuffled solution.shuffled", solution.shuffled);

// console.log(utils.numTilePossibilities("AAB"));

// const empty = () => 0;
// const square = (a) => a * a;
// const add = (a, b) => a * b;
// const mulThree = (a, b, c) => a * b * c;

// const curried = utils.curry(mulThree);

// console.log(curried(7)(3)(2));

// console.log(utils.classNames("foo", "bar"));
// console.log(
//   utils.classNames("foo", { bar: true, foo2: false }, "baz", { quux: true })
// );

// console.log(
//   utils.classNames(null, false, "bar", undefined, 0, 1, { baz: null }, "")
// );

// console.log(utils.classNames("a", ["b", { c: true, d: false }]));
// console.log(utils.classNames("a", ["b", ["c", ["d"]]]));
// console.log(utils.classNames("foo"));
// console.log(utils.classNames([]));
// console.log(utils.classNames({ foo: true, bar: false, qux: true }));
// console.log(utils.classNames({ "foo-bar": true }));
// console.log(utils.classNames({ foo: true }, { bar: true }));
// console.log(
//   utils.classNames("boo", true && "loo", false && "booz", {
//     foo: true,
//     bar: false,
//     baz: 1,
//   })
// );

// console.log(
//   utils.classNames(null, false, "bar", undefined, 0, 1, { baz: null }, "")
// );

// console.log(utils.listFormat(["Bob"]));
// console.log(utils.listFormat(["Bob"], { length: 2 }));
// console.log(
//   utils.listFormat(["Bob", "Ben", "Tim", "Jane", "John"], { length: 4 })
// );

console.log(
  utils.listFormat(["Bob", "Ben", "Tim", "Jane", "John"], { length: 3 })
);
