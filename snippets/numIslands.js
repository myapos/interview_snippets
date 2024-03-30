// https://leetcode.com/problems/number-of-islands/

const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1], //left
];

const numIslands = (grid) => {
  if (grid.length === 0) return 0;
  let islandCount = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === "1") {
        islandCount++;
        grid[row][col] = "0";
        const queue = [];
        queue.push([row, col]);

        while (queue.length) {
          const currentPos = queue.shift();
          const currentRow = currentPos[0];
          const currentCol = currentPos[1];

          for (let i = 0; i < directions.length; i++) {
            const currentDir = directions[i];
            const nextRow = currentRow + currentDir[0];
            const nextCol = currentCol + currentDir[1];

            if (
              nextRow < 0 ||
              nextRow >= grid.length ||
              nextCol < 0 ||
              nextCol >= grid[0].length
            )
              continue;

            if (grid[nextRow][nextCol] === "1") {
              queue.push([nextRow, nextCol]);
              grid[nextRow][nextCol] = "0";
            }
          }
        }
      }
    }
  }

  return islandCount;
};

export default numIslands;
