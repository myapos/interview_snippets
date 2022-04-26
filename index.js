import * as utils from "./utils";

const input = [
  [5, 3, 4],
  [1, 5, 8],
  [6, 4, 2],
];

function formingMagicSquare(s) {
  // it will hold objects of Cost class
  let totalCosts = [];
  let numOfReplacements = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let range = [0, 1, 2];
  let combinations = combinationsOfLength(range);
  let squares = [];
  // Write your code here
  // test if input is magic square already

  if (utils.isMagicSquare(s)) {
    console.log("already magic square");
  } else {
    console.log("processing...");

    for (const [outerIndex, row] of s.entries()) {
      console.log("row", row, " outerIndex", outerIndex);

      for (let i = 0; i < numOfReplacements.length; i++) {
        const isInFirstRow = outerIndex === 0;

        if (isInFirstRow) {
          // only for the first element for start

          const newSquare = deepCopy(s);

          // replace
          newSquare[outerIndex][0] = numOfReplacements[i];
          const squareAlreadyExists = utils.checkIfSquareAlreadyExists(
            squares,
            newSquare
          );
          const isMagic = utils.isMagicSquare(newSquare);

          if (!squareAlreadyExists && isMagic) {
            squares.push(newSquare);
          }
        }
      }
    }
    console.log("squares", squares);
  }
}

const dimensions = 1;
const magicSquares = utils.generateMagicSquares({ dimensions });

console.log("magicSquares", magicSquares);
console.log(`got ${magicSquares.length} magicSquares`);

const square = [
  [8, 3, 4],
  [1, 5, 9],
  [6, 7, 2],
];

/* 
00 01 02
10 11 12
20 21 22


02, 11, 20
*/
// console.log(utils.isMagicSquare({ square, dimensions }));
