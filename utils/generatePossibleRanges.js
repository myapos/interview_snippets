import * as utils from "./";
//! it will accept a range and return all possible combinations of x values in the range
//! [1..range]

const generatePossibleRanges = (range) => {
  let combinations = [];

  const firstArray = [];
  for (let i = 1; i <= range; i++) {
    firstArray.push(i);
  }

  console.log("firstArray", firstArray);

  let arrayExists = utils.checkArrayExistence({
    list: combinations,
    array: firstArray,
  });

  if (!arrayExists) {
    combinations.push(firstArray);
  }

  let arrayToPop = utils.deepCopy(firstArray);
  for (let i = 0; i < firstArray.length; i++) {
    arrayToPop = utils.popArray(arrayToPop);
    console.log("arrayToPop", arrayToPop);

    const arrayIsFullPoped = utils.compareArrays({
      arr1: arrayToPop,
      arr2: firstArray,
    });

    if (arrayIsFullPoped) {
      console.log("is fully poped", i);
    }
  }

  combinations = [
    ...utils.generateCombinationSwaps({
      array: firstArray,
      combinations,
    }),
  ];
  console.log("combinations", combinations);
};

export default generatePossibleRanges;
