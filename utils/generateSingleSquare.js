import * as utils from ".";

//! it will generate a square from a range
//! of [1...9]

const generateSingleSquare = ({ range, dimensions }) => {
  const { length } = range;
  let tripletIndex = 0;
  const square = [];
  let triplet = [];

  for (let i = 0; i < length; i++) {
    const mod = i % dimensions;
    // console.log("mod", mod);
    if (mod < 2) {
      // console.log("writing to triplet", tripletIndex);
      triplet.push(range[i]);
    } else {
      // change triplet
      tripletIndex++;
      triplet.push(range[i]);
      square.push(triplet);
      triplet = [];
    }
  }

  // console.log("square", square);
  return square;
};

export default generateSingleSquare;
