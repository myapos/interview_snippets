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

const head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
};

utils.reverseBetween(head, 2, 4);
