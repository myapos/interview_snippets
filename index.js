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

// console.log(utils.containerWithMostWater([7, 1, 2, 3, 9]));
// console.log("typedOutStrings", utils.typedOutStrings("ab#c", "ad#c"));
// console.log("typedOutStrings", utils.typedOutStrings("ab#c", "ad#c"));
// console.log("typedOutStrings", utils.typedOutStrings("ab##", "c#d#"));
// console.log("typedOutStrings", utils.typedOutStrings("a#c", "b"));
console.log("typedOutStrings", utils.typedOutStrings("ab##", "c#d#"));
