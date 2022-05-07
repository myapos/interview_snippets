/**
 * It will get a matrix and check rows or columns depending on the direction
 * For this function the index will be a constant
 * The matrix is a 2D array
 * */
const getValidation = (matrix, index, direction) => {
  let isValid = true;

  let hash = {};

  if (index > matrix.length) {
    console.log("Please check your input");
  }

  if (direction !== "row" && direction !== "col") {
    console.log("Please check your input");
  }

  for (var i = 0; i < matrix.length; i++) {
    const item = direction === "col" ? matrix[i][index] : matrix[index][i]; //! direction will be row or col

    const itemIsNumber = item !== ".";
    const isAlreadySavedInHash = typeof hash[item] !== "undefined";

    if (itemIsNumber && !isAlreadySavedInHash) {
      hash[item] = true;
    } else if (isAlreadySavedInHash && itemIsNumber) {
      console.log("found it twice");
      isValid = false;
      break;
    }
  }
  return isValid;
};

const getSubBoxesValidation__ = (matrix, i_b, j_b) => {
  let isValid = true;

  let hash = {};

  console.log("printing box:", i_b, j_b);
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix.length; j++) {
      const boxIndexR = Math.floor(i / 3);
      const boxIndexC = Math.floor(j / 3);

      if (i_b === boxIndexR && j_b === boxIndexC) {
        const item = matrix[i][j];
        console.log(`${i},${j}:${matrix[i][j]}`);
        //! save to hash if it does not exist
        const isInHash = typeof hash[item] !== "undefined";
        const isNumber = item !== ".";

        if (!isInHash && isNumber) {
          hash[item] = true;
        } else if (isNumber) {
          console.log("found it in subbox");
          return false;
        }
      }
    }
  }
  return isValid;
};

const getSubBoxesValidation = (matrix, i_b, j_b, i, j, hashBoxes) => {
  let isValid = true;

  const boxIndexR = Math.floor(i / 3);
  const boxIndexC = Math.floor(j / 3);

  if (i_b === boxIndexR && j_b === boxIndexC) {
    const item = matrix[i][j];
    // console.log(`${i},${j}:${matrix[i][j]}`);
    //! save to hash if it does not exist
    const isInHash = typeof hashBoxes[`${i_b},${j_b}`][item] !== "undefined";
    const isNumber = item !== ".";

    if (!isInHash && isNumber) {
      hashBoxes[`${i_b},${j_b}`][item] = true;
    } else if (isNumber) {
      console.log("found it in subbox");
      return false;
    }
  }
  return isValid;
};
/**
 * It will accept a 2d 9X9 array as a sudoku board for validation
 *
 * Rules:
 * Each row must contain the digits 1-9 without repetition.
 * Each column must contain the digits 1-9 without repetition.
 * Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 *
 * It will return if the sudoku board is valid
 * link: https://leetcode.com/problems/valid-sudoku/
 **/
const validSudoku = (sudokuBoard) => {
  const SUB_BOX_DIMENSION = 3;
  let hashBoxes = {};

  for (let i = 0; i < sudokuBoard.length; i++) {
    let hasValidCurrentColumn = true;
    let hasValidCurrentRow = true;
    let hasValidCurrentSubBox = true;

    hasValidCurrentColumn = getValidation(sudokuBoard, i, "col");
    hasValidCurrentRow = getValidation(sudokuBoard, i, "row");

    if (!hasValidCurrentColumn) {
      return false;
    }
    if (!hasValidCurrentRow) {
      return false;
    }

    //! check subboxes
    const rowOfSubbox = Math.floor(i / SUB_BOX_DIMENSION);

    for (let j = 0; j < sudokuBoard.length; j++) {
      const colOfSubbox = Math.floor(j / SUB_BOX_DIMENSION);

      if (typeof hashBoxes[`${rowOfSubbox},${colOfSubbox}`] === "undefined") {
        hashBoxes[`${rowOfSubbox},${colOfSubbox}`] = {};
      }

      hasValidCurrentSubBox = getSubBoxesValidation(
        sudokuBoard,
        rowOfSubbox,
        colOfSubbox,
        i,
        j,
        hashBoxes
      );
      if (!hasValidCurrentSubBox) {
        return false;
      }
    }
  }

  return true;
};

export default validSudoku;
