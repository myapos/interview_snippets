const INF = 2147483647;
const WALL = -1;
const GATE = 0;

//! [row,col]
const directions = [
  [-1, 0], //! up
  [0, 1], //! right
  [1, 0], //! down
  [0, -1], //! left
];

const findGates = (grid) => {
  let gates = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === GATE) {
        gates.push([i, j]);
      }
    }
  }

  return { gates };
};

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

const wallsAndGates = (rooms) => {
  if (rooms.length === 0) {
    return rooms;
  }

  const { gates } = findGates(rooms);

  let queue = [...gates];
  let steps = 1;
  let level = queue.length;

  while (level > 0) {
    //! get first gate

    const gate = queue.shift();
    console.log("gate", gate);

    for (let i = 0; i < directions.length; i++) {
      //! scan possible directions
      printDirections(i);
      const nextRow = gate[0] + directions[i][0];
      const nextCol = gate[1] + directions[i][1];

      const isInValidCoords =
        nextRow < 0 ||
        nextRow >= rooms.length ||
        nextCol < 0 ||
        nextRow >= rooms[0].length;

      if (isInValidCoords) {
        continue;
      }

      if (rooms[nextRow][nextCol] === INF) {
        //! replace num of steps to empty cell
        rooms[nextRow][nextCol] = steps;
        queue.push([nextRow, nextCol]);
      }
    }

    level--;

    if (level === 0) {
      //! reset
      level = queue.length;
      steps++;
    }
  }

  //! run bfs for every gate
  //! it will replace the content of INF with num of steps

  return rooms;
};

export default wallsAndGates;
