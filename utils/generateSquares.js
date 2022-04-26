import * as utils from ".";

const generateSquares = ({ dimensions }) => {
  const squares = [];
  const range = dimensions * dimensions;
  const numbers = utils.createNumbersInRange(range);

  //! get all permutations of numbers in range
  const permutations = utils.generatePossiblePermutations({
    generatedPermutations: [],
    currentPermutation: [],
    elemementsToPermute: numbers,
  });

  //! get all possible squares

  permutations.forEach((permutation, index) => {
    const square = utils.generateSingleSquare({
      range: permutation,
      dimensions,
    });
    squares.push(square);
  });

  return squares;
};
export default generateSquares;
