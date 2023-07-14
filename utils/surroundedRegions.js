// [row, col]
const directions = [
  [-1, 0], // up,
  [0, 1], // right,
  [1, 0], // down,
  [0, -1], // left
];

function isOnBorders({ board, row, col }) {
  const res =
    row === 0 ||
    row === board.length - 1 ||
    col === 0 ||
    col === board[0].length - 1;

  return res;
}

function isInBounds({ board, row, col }) {
  return row >= 0 && row < board.length && col >= 0 && col < board[0].length;
}

function isO({ board, row, col }) {
  let isOResult = false;
  if (isInBounds({ board, row, col }) && board[row][col] === "O") {
    isOResult = true;
  }

  return isOResult;
}

function openLogs({ row, col, forRow, forCol }) {
  return row === forRow && col === forCol;
}

function isAdjacentToAnOThatCannotBeFlipped({ board, row, col }) {
  const seen = new Array(board.length)
    .fill(0)
    .map(() => new Array(board[0].length).fill(false));

  let hash = {};

  let result = true;

  function searchOs({ board, row, col, seen }) {
    // console.log("hash", hash);
    if (isO({ board, row, col }) && isOnBorders({ board, row, col })) {
      result = result && false;

      return false;
    }

    for (let i = 0; i < directions.length; i++) {
      const [rowChange, colChange] = directions[i];
      const adjacentCoords = [row + rowChange, col + colChange];
      const adjacentIsO = isO({
        board,
        row: adjacentCoords[0],
        col: adjacentCoords[1],
      });

      if (!adjacentIsO || seen[adjacentCoords[0]][adjacentCoords[1]]) {
        continue;
      }

      //   if (adjacentIsO && !seen[adjacentCoords[0]][adjacentCoords[1]]) {
      seen[adjacentCoords[0]][adjacentCoords[1]] = true;
      seen[row][col] = true;

      const output = searchOs({
        board,
        row: adjacentCoords[0],
        col: adjacentCoords[1],
        seen,
      });

      result = result && output;
    }

    return true;
  }

  searchOs({ board, row, col, seen });
  openLogs({ row, col, forRow: 3, forCol: 2 }) && console.log("seen", seen);

  return result;
}

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve_ = function (board) {
  const seen = new Array(board.length)
    .fill(0)
    .map(() => new Array(board[0].length).fill(false));

  const values = [];
  const queue = [[0, 0]];

  while (queue.length) {
    const [row, col] = queue.shift();

    if (!isInBounds({ board, row, col }) || seen[row][col]) {
      continue;
    }

    seen[row][col] = true;
    values.push(board[row][col]);

    const isAdjacent = isAdjacentToAnOThatCannotBeFlipped({ board, row, col });

    const shouldBeFlipped =
      isO({ board, row, col }) &&
      !isOnBorders({ board, row, col }) &&
      isAdjacent;

    if (shouldBeFlipped) {
      board[row][col] = "X";
    }

    for (let i = 0; i < directions.length; i++) {
      const [rowChange, colChange] = directions[i];
      queue.push([row + rowChange, col + colChange]);
    }
  }

  return board;
};

// it will scan and mark all the os with a special char
const scanOsFromTheBorders = ({ board, row, col }) => {
  const seen = new Array(board.length)
    .fill(0)
    .map(() => new Array(board[0].length).fill(false));

  function searchOs({ board, row, col, seen }) {
    if (isO({ board, row, col })) {
      board[row][col] = "U";
    }
    if (isO({ board, row, col }) && isOnBorders({ board, row, col })) {
      return;
    }

    for (let i = 0; i < directions.length; i++) {
      const [rowChange, colChange] = directions[i];
      const adjacentCoords = [row + rowChange, col + colChange];
      const adjacentIsO = isO({
        board,
        row: adjacentCoords[0],
        col: adjacentCoords[1],
      });

      if (!adjacentIsO || seen[adjacentCoords[0]][adjacentCoords[1]]) {
        continue;
      }

      if (adjacentIsO) {
        board[row][col] = "U";
      }

      seen[adjacentCoords[0]][adjacentCoords[1]] = true;
      seen[row][col] = true;

      searchOs({
        board,
        row: adjacentCoords[0],
        col: adjacentCoords[1],
        seen,
      });
    }
  }

  searchOs({ board, row, col, seen });
};

var solve = function (board) {
  const seen = new Array(board.length)
    .fill(0)
    .map(() => new Array(board[0].length).fill(false));

  const values = [];

  const dfs = function (board, row, col, seen, values) {
    if (
      row < 0 ||
      col < 0 ||
      row >= board.length ||
      col >= board[0].length ||
      seen[row][col]
    )
      return;

    seen[row][col] = true;
    if (
      row === 0 ||
      col === 0 ||
      col === board[0].length - 1 ||
      row === board.length - 1
    ) {
      const hasToBeScanned = isO({ board, row, col });

      if (hasToBeScanned) {
        board[row][col] = "U";
        scanOsFromTheBorders({ board, row, col });
      }
    }

    for (let i = 0; i < directions.length; i++) {
      const currentDir = directions[i];
      const newRow = row + currentDir[0];
      const newCol = col + currentDir[1];

      if (
        newRow === 0 ||
        newCol === 0 ||
        newCol === board[0].length - 1 ||
        newRow === board.length - 1
      ) {
        dfs(board, newRow, newCol, seen, values);
      }
    }
  };

  dfs(board, 0, 0, seen, values);

  console.log("before board", board);
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === "O") board[i][j] = "X";
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === "U") board[i][j] = "O";
    }
  }

  console.log("board", board);

  return board;
};
export default solve;
