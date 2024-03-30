//! https://leetcode.com/problems/transpose-matrix/

const transpose = (matrix) => {
  if (matrix.length === 0) {
    return matrix;
  }

  const At = new Array(matrix[0].length)
    .fill(0)
    .map(() => new Array(matrix.length).fill(false));

  for (let col = 0; col < matrix[0].length; col++) {
    for (let row = 0; row < matrix.length; row++) {
      At[col][row] = matrix[row][col];
    }
  }

  return At;
};

export default transpose;
