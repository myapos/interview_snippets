import * as utils from "./";

const generateMagicSquares = ({ dimensions }) => {
  const squares = utils.generateSquares({ dimensions });
  console.log(`got ${squares.length} squares`);

  //! filter only the magic squares
  const magicSquares = utils.filterMagicSquares(squares);

  return magicSquares;
};

export default generateMagicSquares;
