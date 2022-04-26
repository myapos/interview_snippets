import * as utils from "./";

function isMagicSquare({ square, dimensions }) {
  const sums = [];
  let primaryDiagonal = [];
  let reverseDiagonal = [];

  square.forEach((row, rowIndex) => {
    sums.push(utils.sumOfArray(row));
    let col = [];

    //! calculate sums of cols
    row.forEach((_, colIndex) => {
      const elem = square[colIndex][rowIndex];
      col.push(elem);

      if (rowIndex === colIndex) {
        primaryDiagonal.push(square[rowIndex][colIndex]);
      }
    });

    // save reverseDiagonal
    reverseDiagonal.push(square[rowIndex][square.length - 1 - rowIndex]);
    //! calculate sums of columns
    sums.push(utils.sumOfArray(col));
  });

  //! calculate sums of diagonals
  sums.push(utils.sumOfArray(primaryDiagonal));
  sums.push(utils.sumOfArray(reverseDiagonal));

  // console.log("sums", sums);
  const isMagic = utils.checkArrayElementsEquality(sums);

  return isMagic;
}
export default isMagicSquare;
