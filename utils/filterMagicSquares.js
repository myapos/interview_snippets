import * as utils from "./";

const filterMagicSquares = (squares) => {
  const magicSquares = [];

  for (const square of squares) {
    // console.log("checking square", square);
    const isMagic = utils.isMagicSquare(square);
    const alreadyExists = utils.checkIfSquareAlreadyExists(
      magicSquares,
      square
    );
    if (isMagic && !alreadyExists) {
      // console.log("Found Magic square", square);
      magicSquares.push(square);
    }
  }

  return magicSquares;
};

export default filterMagicSquares;
