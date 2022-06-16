//! https://leetcode.com/problems/set-matrix-zeroes/
//! row, col

const setZeroes = (matrix) => {
  const flag = "TO_CHANGE";

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) {
        // zeroes.push([row, col]);
        for (let i = 0; i < matrix[0].length; i++) {
          if (matrix[row][i] !== 0) {
            matrix[row][i] = flag;
          }
        }

        for (let j = 0; j < matrix.length; j++) {
          if (matrix[j][col] !== 0) {
            matrix[j][col] = flag;
          }
        }
      }
    }
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      const hasToChange = matrix[row][col] === 0 || matrix[row][col] === flag;
      if (hasToChange) {
        matrix[row][col] = 0;
      }
    }
  }
  return matrix;
};

export default setZeroes;
