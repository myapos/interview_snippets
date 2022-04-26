import * as utils from "./";

const generateMagicSquares = (range) => {
  const sums = [];

  const combinations = utils.generateCombinations(range);

  console.log("combinations", combinations);

  const squares = utils.generateSquares({ sums, combinations });

  const magicSquares = utils.filterMagicSquares(squares);

  console.log("magic squares", magicSquares);
  return magicSquares;
};

export default generateMagicSquares;
