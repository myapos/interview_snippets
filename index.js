import * as utils from "./utils";

const input = [
  [5, 3, 4],
  [1, 5, 8],
  [6, 4, 2],
];

function formingMagicSquare(s) {
  const dimensions = 3;
  const magicSquares = utils.generateMagicSquares({ dimensions });
  console.log("magicSquares", magicSquares);
  console.log(`got ${magicSquares.length} magicSquares`);

  let minCost = 100000;

  magicSquares.forEach((magicSquare, outerIndex) => {
    let cost = 0; //! for each magic square

    magicSquare.forEach((magicRow, magicIndex) => {
      s.forEach((row, index) => {
        cost =
          Math.abs(
            magicSquares[outerIndex][magicIndex][index] - s[magicIndex][index]
          ) + cost;
      });
    });

    if (cost < minCost) {
      minCost = cost;
    }
  });

  console.log("minCost", minCost);
  return minCost;
}

formingMagicSquare(input);
