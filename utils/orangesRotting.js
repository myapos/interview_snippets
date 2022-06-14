const findRottenOranges = (grid) => {
  const rottenOranges = [];
  let numOfFreshOranges = 0;
  let emptyCells = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 2) {
        rottenOranges.push([i, j]);
      }

      if (grid[i][j] === 1) {
        numOfFreshOranges++;
      }

      if (grid[i][j] === 0) {
        emptyCells++;
      }
    }
  }

  return { rottenOranges, numOfFreshOranges, emptyCells };
};

/* 
[
[2,1,1],
[0,1,1],
[1,0,1]]

*/

//! [row,col]
const directions = [
  [-1, 0], //! go up
  [0, 1], //! go right
  [1, 0], //! go down
  [0, -1], //! go left
];

const printDirections = (i) => {
  if (i === 0) {
    console.log("goes up");
  } else if (i === 1) {
    console.log("goes right");
  } else if (i === 2) {
    console.log("goes down");
  } else if (i === 3) {
    console.log("goes left");
  }
};

const orangesRotting = (grid) => {
  if (grid.length === 0) {
    return -1;
  }

  let { rottenOranges, numOfFreshOranges, emptyCells } =
    findRottenOranges(grid);

  debugger;
  if (emptyCells === grid.length * grid[0].length) {
    return 0; //! all the cells are empty
  }

  if (rottenOranges.length === 0) {
    return -1;
  }

  let minutes = 0;
  let queue = [...rottenOranges];
  let { length: level } = queue;
  let changedValue = false;

  //! use bfs for every rottenOrange
  //! it will turn every adjacent orange to rotten
  //! when the length of the queue is 0 it will increase the number of
  //! minutes

  while (level > 0) {
    const currentRottenOrange = queue.shift();

    console.log("currentRottenOrange", currentRottenOrange);

    for (let i = 0; i < directions.length; i++) {
      const [row, col] = directions[i];
      printDirections(i);
      //! check for valid values in adjacent coords of current rotten orange

      const nextRow = currentRottenOrange[0] + row;
      const nextCol = currentRottenOrange[1] + col;

      const isInValidCoords =
        nextRow < 0 ||
        nextRow >= grid.length ||
        nextCol < 0 ||
        nextCol >= grid[0].length;

      if (isInValidCoords) {
        continue;
      }

      //! check in adjacent coords for fresh orange
      if (grid[nextRow][nextCol] === 1) {
        grid[nextRow][nextCol] = 2;
        queue.push([nextRow, nextCol]);
        numOfFreshOranges--;
        changedValue = true;
      }
    }

    level--;

    if (level === 0) {
      console.log("reset level");

      if (changedValue) {
        minutes++;
        level = queue.length;
        changedValue = false;
      }
    }
  }

  console.log(rottenOranges, numOfFreshOranges);
  console.log(grid);

  if (numOfFreshOranges > 0) {
    return -1;
  }

  return minutes;
};

export default orangesRotting;
