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
// debugger;
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

const ar = [4, 2, 1, 6, 7, 3];
// const ar = [2, 1];
// const ar = [2, 1, 3];
// utils.quickSort(ar, 0, ar.length - 1);

// console.log("ar", ar);
// utils.quickSort([2, 1], 0, 1);

console.log(utils.findKthLargest(ar, 3));
