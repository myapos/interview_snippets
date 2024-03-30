// https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/
// An n x n matrix is valid if every row and every column contains all the integers from 1 to n (inclusive).
// Given an n x n integer matrix matrix, return true if the matrix is valid. Otherwise, return false.

/**
 * It will accept a nXn matrix dimensions. In order to check that all numbers are contain
 * every number from 1,...,n we create a hash index where the item will be stored as a key
 * If an item entry preexists in the hash then we know that the frequency of this item will
 * be greater than one. That means that the row does not contain all numbers and we return false
 * as an early exit of the function. We use the same logic to check every column with a different hash
 *
 */
const checkEveryRowColumnContainAllNumbers = (matrix) => {
  const hashR = {};
  const hashC = {};

  let isValid = true;

  for (let i = 0; i < matrix.length; i++) {
    hashR[i] = {};
    hashC[i] = {};

    for (let j = 0; j < matrix.length; j++) {
      let item = matrix[i][j];
      const alreadyExistsR = typeof hashR[i][item] !== "undefined";

      if (alreadyExistsR) {
        return false;
      }

      hashR[i][item] = item;

      item = matrix[j][i];

      const alreadyExistsC = typeof hashC[i][item] !== "undefined";

      if (alreadyExistsC) {
        return false;
      }

      hashC[i][item] = item;
    }
  }

  return isValid;
};

export default checkEveryRowColumnContainAllNumbers;
