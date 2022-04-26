import * as utils from "./";

// it will return if a square is magic
// it will calculate all su rows, columns and diagonals
// if they are all equal then it will return true or false
function isMagicSquare(arr) {
  let elementToCompare;
  let restElements;

  const sums = [];
  // extract rows
  const [row1, row2, row3] = arr;

  // calculate sums of rows
  const sumOfRow1 = utils.sumOfArray(row1);
  const sumOfRow2 = utils.sumOfArray(row2);
  const sumOfRow3 = utils.sumOfArray(row3);

  // calculate sums of columns
  let firstCol = [];
  let secondCol = [];
  let thirdCol = [];

  arr.map((row, index) => {
    // console.log(row);
    const [first, second, third] = row;
    firstCol = [...firstCol, first];
    secondCol = [...secondCol, second];
    thirdCol = [...thirdCol, third];
  });

  const sumOfCol1 = utils.sumOfArray(firstCol);
  const sumOfCol2 = utils.sumOfArray(secondCol);
  const sumOfCol3 = utils.sumOfArray(thirdCol);

  // calculate sums of diagonals
  const primaryDiagonal = [arr[0][0], arr[1][1], arr[2][2]];
  const reverseDiagonal = [arr[0][2], arr[1][1], arr[2][0]];

  const sumOfPrimaryDiagonal = utils.sumOfArray(primaryDiagonal);
  const sumOfReverseDiagonal = utils.sumOfArray(reverseDiagonal);

  sums.push(
    sumOfRow1,
    sumOfRow2,
    sumOfRow3,
    sumOfCol1,
    sumOfCol2,
    sumOfCol3,
    sumOfPrimaryDiagonal,
    sumOfReverseDiagonal
  );

  // console.log(sums);

  const isMagic = utils.checkArrayEquality(sums);

  // if (sumToCheck === 15 && isMagic) {
  //   // console.log("isMagic", arr);
  // }
  return isMagic;
}

export default isMagicSquare;

const squareA = [
  [5, 9, 5],
  [6, 7, 6],
  [8, 3, 8],
];

const squareB = [
  [8, 3, 4],
  [1, 5, 9],
  [6, 7, 2],
];
