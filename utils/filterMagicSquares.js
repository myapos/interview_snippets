import * as utils from "./";

const filterMagicSquares = ({ squares, dimensions }) => {
  const magicSquares = [];

  for (const square of squares) {
    const isMagic = utils.isMagicSquare({ square, dimensions });
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
