import * as utils from ".";

//! it will generate all possible squares
//! first it will calculate the sums of each row and
//! will extract only the sums that are equal
//! it will create triplets of these values
const generateSquares_ = ({ sums, combinations }) => {
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

        const sumsAreEqual = utils.checkArrayElementsEquality(tempSums);

        // console.log("tempSums", tempSums);
        // console.log(`comparing ${i} - ${j} ${sums[i]} - ${sums[j]}`);
        if (sumsAreEqual && sums[i] === 15) {
          // console.log("sumsAreEqual", sumsAreEqual, tempSums);
          // console.log(
          // 	`comparing ${i} - ${j} - ${l}  ${sums[i]} - ${sums[j]} - ${sums[l]} in rows combinations: ${combinations[i]} - ${combinations[j]} - ${combinations[l]}`
          // );
          const square = [combinations[i], combinations[j], combinations[l]];

          squares.push(square);
        }
      }
    }
  }

  console.log("num of squares", squares.length);
  return squares;
};

const generateSquares = ({ range }) => {
  const squares = [];
  const dimensions = 3;

  // prepei na dimiourgisw ola ta pithana ranges pou iparxoun me ennia arithmous
  // dld 9!

  utils.generateSingleSquare({ range, dimensions });
  console.log("num of squares", squares.length);
  return squares;
};
export default generateSquares;
