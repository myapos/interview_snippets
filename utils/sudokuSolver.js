const DIMENSIONS = 9;
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numbersHash = {
  1: true,
  2: true,
  3: true,
  4: true,
  5: true,
  6: true,
  7: true,
  8: true,
  9: true,
};
const SUB_BOX_DIMENSION = 3;
const hashSubBox = {};

const checkValidity = (board) => {
  const hashRows = {};
  const hashCols = {};
  const hashSubBoxes = {};

  for (let i = 0; i < DIMENSIONS; i++) {
    for (let j = 0; j < DIMENSIONS; j++) {
      const item = board[i][j];
      const itemIsNumber = item !== ".";
      const subBoxKeyRow = Math.floor(i / SUB_BOX_DIMENSION);
      const subBoxKeyCol = Math.floor(j / SUB_BOX_DIMENSION);

      const subBoxKey = `${subBoxKeyRow},${subBoxKeyCol}`;
      //   console.log("subBoxKey", subBoxKey);

      const initializedHashForRow = typeof hashRows[i] !== "undefined";

      if (!initializedHashForRow) {
        hashRows[i] = {};
      }

      const initializedRowItem = typeof hashRows[i][item] !== "undefined";

      if (!initializedRowItem && itemIsNumber) {
        hashRows[i][item] = true;
      } else if (itemIsNumber) {
        return false;
      }

      const initializedHashForCol = typeof hashCols[j] !== "undefined";

      if (!initializedHashForCol) {
        hashCols[j] = {};
      }

      const initializedColItem = typeof hashCols[j][item] !== "undefined";

      if (!initializedColItem && itemIsNumber) {
        hashCols[j][item] = true;
      } else if (itemIsNumber) {
        return false;
      }

      //! check subboxes
      const initializedHashBoxItem =
        typeof hashSubBoxes[subBoxKey] !== "undefined";

      if (!initializedHashBoxItem) {
        hashSubBoxes[subBoxKey] = {};
      }

      const alreadyExists =
        initializedHashBoxItem && hashSubBoxes[subBoxKey][item];

      if (!alreadyExists && itemIsNumber) {
        hashSubBoxes[subBoxKey][item] = true;
      } else if (itemIsNumber) {
        return false;
      }
    }
  }

  return true;
};

//! it will generate permutations of array length
const permutations = (missingNumbers) => {
  //! base condition
  if (missingNumbers.length === 0) {
    return [[]];
  }

  const [firstElement, ...restElements] = missingNumbers;

  const permsWithoutFirst = permutations(restElements);

  const allPermutations = [];

  permsWithoutFirst.forEach((perm) => {
    for (let i = 0; i <= perm.length; i++) {
      const permsWithFirst = [
        ...perm.slice(0, i),
        firstElement,
        ...perm.slice(i),
      ];
      allPermutations.push(permsWithFirst);
    }
  });

  return allPermutations;
};

const findNextDot = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      const isDot = matrix[i][j] === ".";

      if (isDot) {
        return { i, j };
      }
    }
  }

  return { i: "null", j: "null" };
};
const sudokuSolver = (board) => {
  let solution = [];
  const sudokuSolverHelper = (board) => {
    let solvedMatrix = board.map((ar) => ar.map((item) => item));
    // let lastSolvedMatrix = matrix.map((ar) => ar.map((item) => item));

    const { i, j } = findNextDot(board);

    if (i === "null") {
      solution = board;
      return true; //! the entire matrix is parsed
    }

    //! loop throug range to try a solution
    for (let guess = 1; guess <= 9; guess++) {
      //! try guess and validate
      solvedMatrix[i][j] = `${guess}`;
      if (checkValidity(solvedMatrix)) {
        board = solvedMatrix;
        if (sudokuSolverHelper(board)) {
          return true;
        }
      }
    }

    return false;
  };

  sudokuSolverHelper(board);
  return solution;
};
//! accepted by leetcode
var solveSudoku = function (board) {
  // board[0][2] = '3'
  const { i, j } = findNextDot(board);

  if (i === "null") {
    solution = board;
    return true; //! the entire matrix is parsed
  }

  //! loop throug range to try a solution
  for (let guess = 1; guess <= 9; guess++) {
    //! try guess and validate
    board[i][j] = `${guess}`;

    if (checkValidity(board)) {
      if (solveSudoku(board)) {
        return true;
      }
    }

    board[i][j] = ".";
  }

  return false;
};

export default sudokuSolver;
