import * as utils from ".";

const generateMagicSquares = ({ dimensions }) => {
  const squares = utils.generateSquares({ dimensions });

  //! filter only the magic squares
  const magicSquares = utils.filterMagicSquares({ squares, dimensions });

  return magicSquares;
};

export default generateMagicSquares;
