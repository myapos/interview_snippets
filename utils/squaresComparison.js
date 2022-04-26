// square A
// [9, 3, 4]
// [1, 5, 8]
// [6, 4, 2]

// square B
// [9, 3, 4]
// [1, 5, 8]
// [6, 4, 2]

// it should check if all items are equal or alternatively --> return true
// if at least one element is not equal --> return false
function squaresComparison(squareA, squareB) {
  let areEqual = true;
  const numOfRows = 3;
  let i, j;

  for (let row = 0; row < numOfRows; row++) {
    if (!areEqual) {
      break;
    }
    for (const [outerIndex, item] of squareA[row].entries()) {
      if (!areEqual) {
        break;
      }
      for (const [innerIndex, element] of squareB[row].entries()) {
        if (outerIndex === innerIndex) {
          areEqual = item === element && areEqual;
        }
        if (!areEqual) {
          i = row;
          j = outerIndex;
          break;
        }
      }
    }

    if (!areEqual) {
      // console.log(
      // 	`stop checking the rest rows. Found unequal value in positions ${i}, ${j}. Elements compared: ${squareA[i][j]} - ${squareB[i][j]}`
      // );
      break;
    }
  }

  return areEqual;
}

export default squaresComparison;

let squareA = [
  [9, 2, 4],
  [1, 5, 6],
  [6, 4, 2],
];
let squareA_ = [
  [9, 2, 4],
  [1, 5, 8],
  [6, 4, 2],
];
let squareB = [
  [9, 2, 4],
  [1, 5, 6],
  [6, 4, 2],
];

const squares = [squareA_, squareA, squareB];
let squareC = [
  [9, 2, 4],
  [1, 5, 6],
  [6, 4, 7],
];

// console.log("exists in squares", checkIfSquareAlreadyExists(squares, squareC));
