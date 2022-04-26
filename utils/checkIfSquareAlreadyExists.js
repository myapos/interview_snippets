import * as utils from "./";

function checkIfSquareAlreadyExists(squares, squareToCheck) {
  let squareExists = false;

  for (const [index, square] of squares.entries()) {
    squareExists = utils.squaresComparison(square, squareToCheck);

    // console.log("squaresComparison", squaresComparison(square, squareToCheck));

    if (squareExists) {
      break;
    }
  }

  return squareExists;
}

export default checkIfSquareAlreadyExists;
