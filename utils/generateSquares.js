import * as utils from ".";

//! it will generate all possible squares
//! first it will calculate the sums of each row and
//! will extract only the sums that are equal
//! it will create triplets of these values
const generateSquares = ({ sums, combinations }) => {
  const squares = [];

  combinations.forEach((slice) => {
    sums.push(utils.sumOfArray(slice));
  });

  for (let i = 0; i < sums.length; i++) {
    for (let j = 0; j < sums.length; j++) {
      for (let l = 0; l < sums.length; l++) {
        if (i === j && l === j) {
          continue;
        }

        const tempSums = [sums[i], sums[j], sums[l]];

        // console.log("tempSums", tempSums);
        // console.log(`comparing ${i} - ${j} ${sums[i]} - ${sums[j]}`);
        if (
          (sums[i] === sums[j] && sums[i] === sums[l]) ||
          (sums[j] === sums[l] && sums[i] === sums[j])
          // i !== j &&
          // i !== l &&
          // j !== l
        ) {
          // console.log(
          // 	`comparing ${i} - ${j} - ${l}  ${sums[i]} - ${sums[j]} - ${sums[l]} in rows combinations: ${combinations[i]} - ${combinations[j]} - ${combinations[l]}`
          // );
          const square = [combinations[i], combinations[j], combinations[l]];

          squares.push(square);
        }
      }
    }
  }

  return squares;
};

export default generateSquares;
