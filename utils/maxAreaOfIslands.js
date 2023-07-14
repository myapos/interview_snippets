const directions = [
  [-1, 0], // up
  [0, 1], //right
  [1, 0], // down
  [0, -1], // left
];

// https://leetcode.com/problems/max-area-of-island/

const isInBounds = (row, col, grid) =>
  row >= 0 && row < grid.length && col >= 0 && col < grid[0].length;

const countArea = ({ grid, rowStart, colStart, area, seenDfs }) => {
  const ground = 1;
  // run dfs

  //   console.log("area", area);

  if (!isInBounds(rowStart, colStart, grid) || seenDfs[rowStart][colStart])
    return area;

  seenDfs[rowStart][colStart] = true;
  let totalArea = area + 1;

  for (let i = 0; i < directions.length; i++) {
    const [rowChange, colChange] = directions[i];

    if (isInBounds(rowStart + rowChange, colStart + colChange, grid)) {
      const nextElement = grid[rowStart + rowChange][colStart + colChange];
      if (
        nextElement === ground &&
        !seenDfs[rowStart + rowChange][colStart + colChange]
      ) {
        totalArea = countArea({
          grid,
          rowStart: rowStart + rowChange,
          colStart: colStart + colChange,
          area: totalArea,
          seenDfs,
        });
      }
    }
  }

  return totalArea;
};

const maxAreaOfIslands = (grid) => {
  // Problem analysis

  // step 1 traverse the 2D matrix
  // step 2 when you meet a cell with a value of 1 then
  // step 2.1 use as a starting point the current cell with the 1 value
  // traverse the adjacent area in 4 directions and count ones
  // keep only the max counter of ones and return that

  //   bfs
  const seenBfs = new Array(grid.length)
    .fill(0)
    .map((item) => Array(grid[0].length).fill(false));

  const values = [];

  const queue = [[0, 0]]; // starting point

  let maxArea = 0;

  while (Boolean(queue.length)) {
    const [row, col] = queue.shift();

    if (!isInBounds(row, col, grid) || seenBfs[row][col]) {
      continue;
    }

    seenBfs[row][col] = true;
    values.push(grid[row][col]);

    const isGround = grid[row][col] === 1;

    if (isGround) {
      const seenDfs = new Array(grid.length)
        .fill(0)
        .map((item) => Array(grid[0].length).fill(false));
      // traverse all connected ground 4-directionally
      const area = countArea({
        grid,
        rowStart: row,
        colStart: col,
        area: 0,
        seenDfs,
      });

      if (area > maxArea) maxArea = area;
    }

    for (let i = 0; i < directions.length; i++) {
      const [rowChange, colChange] = directions[i];
      queue.push([row + rowChange, col + colChange]);
    }
  }

  return maxArea;
};

export default maxAreaOfIslands;
