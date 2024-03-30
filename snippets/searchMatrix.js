// https://leetcode.com/problems/search-a-2d-matrix/

const binarySearch = (matrix, start, end, element) => {
  const length = start + end;
  if (end < start) {
    return false;
  }

  // get the mid
  const midIndex = Math.floor(length / 2);
  const mid =
    matrix[Math.floor(midIndex / matrix[0].length)][
      Math.floor(midIndex % matrix[0].length)
    ];

  if (mid === element) {
    return true;
  }

  if (mid > element) {
    //! go left
    return binarySearch(matrix, start, midIndex - 1, element);
  } else {
    //! go right
    return binarySearch(matrix, midIndex + 1, end, element);
  }
};

const searchMatrix = (matrix, target) => {
  if (matrix.length === 0) {
    return false;
  }

  const lowBoundary = 0;
  const upperBoundary =
    (matrix.length - 1) * matrix[0].length + matrix[0].length - 1;

  return binarySearch(matrix, lowBoundary, upperBoundary, target);
};

export default searchMatrix;
