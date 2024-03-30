import * as utils from ".";

//! it will generate a square from a range
//! of [1...9]

const generateSingleSquare = ({ range, dimensions }) => {
  const { length } = range;
  let rowIndex = 0;
  const square = [];
  let row = [];

  for (let i = 0; i < length; i++) {
    const mod = i % dimensions;
    // console.log("mod", mod);
    if (mod < dimensions - 1) {
      // console.log("writing to row", rowIndex);
      row.push(range[i]);
    } else {
      // change row
      rowIndex++;
      row.push(range[i]);
      square.push(row);
      row = [];
    }
  }

  // console.log("square", square);
  return square;
};

export default generateSingleSquare;
