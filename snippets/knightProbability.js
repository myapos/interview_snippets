// https://leetcode.com/problems/knight-probability-in-chessboard/

const probability = (n, k, row, column, DIRECTIONS, hash) => {
  const isOutOfBounds = row < 0 || row >= n || column < 0 || column >= n;
  if (isOutOfBounds) {
    return 0;
  }

  if (k === 0) {
    return 1;
  }

  let res = 0;
  for (let i = 0; i < DIRECTIONS.length; i++) {
    const [dr, dc] = DIRECTIONS[i];
    const newRow = row + dr;
    const newCol = column + dc;
    const newK = k - 1;
    let prob;

    if (typeof hash[`${newK}-${newRow}-${newCol}`] === "undefined") {
      prob = probability(n, newK, newRow, newCol, DIRECTIONS, hash) / 8;
      hash[`${newK}-${newRow}-${newCol}`] = prob;
    } else {
      prob = hash[`${newK}-${newRow}-${newCol}`];
    }

    res += prob;
  }

  return res;
};

/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
const knightProbability = (n, k, row, column) => {
  // dr,dc
  const DIRECTIONS = [
    [-2, -1],
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
  ];

  const ans = probability(n, k, row, column, DIRECTIONS, {});

  return ans;
};

export default knightProbability;
