// https://leetcode.com/problems/word-search/
const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1], //left
];

const exist = (board, word) => {
  const dfs = (row, col, index) => {
    if (
      row < 0 ||
      row >= board.length ||
      col < 0 ||
      col >= board[0].length ||
      board[row][col] !== word[index]
    ) {
      return false;
    }

    if (index === word.length - 1) {
      return true;
    }

    const originalChar = board[row][col];
    board[row][col] = "#"; // Mark cell as visited

    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;
      if (dfs(newRow, newCol, index + 1)) {
        return true;
      }
    }

    board[row][col] = originalChar; // Restore the original value
    return false;
  };

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (dfs(row, col, 0)) {
        return true;
      }
    }
  }

  return false;
};

export default exist;
