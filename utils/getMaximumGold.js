// https://leetcode.com/problems/path-with-maximum-gold/
const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1], //left
];

const isInBounds = ({ startR, startC, grid }) => {
  return (
    startR >= 0 &&
    startR < grid.length &&
    startC >= 0 &&
    startC < grid[0].length
  );
};

const isZero = ({ startR, startC, grid }) => {
  return grid[startR][startC] === 0;
};

const getSum = (ar) => ar.reduce((acc, cur) => acc + cur, 0);

const getMaximumGold = (grid) => {
  let sum = [];
  let sums = [];

  const dfs = ({ startR, startC, seen, grid, sum }) => {
    if (
      !isInBounds({ startR, startC, grid }) ||
      seen[`${startR}, ${startC}`] ||
      isZero({ startR, startC, grid })
    )
      return;

    seen[`${startR}, ${startC}`] = true;
    sum.push(grid[startR][startC]);
    console.log("path", grid[startR][startC]);

    for (let i = 0; i < directions.length; i++) {
      const curDir = directions[i];
      const newRow = startR + curDir[0];
      const newCol = startC + curDir[1];

      // ignore zero elements

      dfs({
        startR: newRow,
        startC: newCol,
        seen,
        grid,
        sum,
      });
    }
    // console.log("sum", sum);
    sums.push(getSum(sum));
    sum.pop();
    seen[`${startR}, ${startC}`] = false;
  };

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      const cell = grid[row][col];

      if (cell === 0) continue;

      // starting position to collect gold and
      // find maximum is row, col
      // run dfs for that starting position
      // so for all the possible starting positions
      // we run dfs. the dfs cannot visit the same cell twice
      // will not visit cell with zero gold
      // will walk the grid one cell by the time

      const seen = {};
      dfs({ startR: row, startC: col, seen, grid, sum });

      //   console.log("sum", sum);
    }
  }

  return sums.length > 0 ? Math.max(...sums) : 0;
};

export default getMaximumGold;
