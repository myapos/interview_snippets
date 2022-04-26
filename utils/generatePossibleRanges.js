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
    const arrayIsFullPoped = utils.compareArrays({
      arr1: arrayToPop,
      arr2: firstArray,
    });

    if (arrayIsFullPoped && i > 0) {
      console.log("is fully poped", i);
    }

    combinations = [
      ...utils.generateCombinationSwaps({
        array: arrayToPop,
        combinations,
      }),
    ];

    arrayToPop = utils.popArray(arrayToPop);
    console.log("arrayToPop", arrayToPop);
  }

  //!intermediary swaps A
  for (let i = firstArray.length - 1; i >= 0; i--) {
    let baseIndex = i;
    let previousOfBaseIndex = i - 1;

    if (previousOfBaseIndex >= 0) {
      const swappedArray = utils.swapElementsInArray(
        firstArray,
        baseIndex,
        previousOfBaseIndex
      );

      console.log("swappedArray", swappedArray);

      combinations = [
        ...utils.generateCombinationSwaps({
          array: swappedArray,
          combinations,
        }),
      ];
    }
  }

  //! swaps from the end
  for (let i = firstArray.length - 1; i >= 0; i--) {
    let baseIndex = firstArray.length - 1;
    let previousOfBaseIndex = i - 1;

    if (previousOfBaseIndex >= 0) {
      const swappedArray = utils.swapElementsInArray(
        firstArray,
        baseIndex,
        previousOfBaseIndex
      );

      console.log("swappedArray", swappedArray);

      combinations = [
        ...utils.generateCombinationSwaps({
          array: swappedArray,
          combinations,
        }),
      ];
    }
  }

  // xiasti

  // diades

  for (let i = 0; i <= firstArray.length - 1; i++) {
    const length = firstArray.length - 1;
    const pairA = [i, i + 1];
    const pairB = [length - i, length - i - 1];

    let baseIndex = firstArray.length - 1;
    let previousOfBaseIndex = i - 1;

    const isInRange =
      pairA[0] <= length &&
      pairA[1] <= length &&
      pairB[0] >= 0 &&
      pairB[1] >= 0;

    if (isInRange) {
      const swappedArray = utils.swapElementsInArray(
        utils.swapElementsInArray(firstArray, pairA[0], pairA[1]),
        pairB[0],
        pairB[1]
      );

      console.log("swappedArray", swappedArray);

      combinations = [
        ...utils.generateCombinationSwaps({
          array: swappedArray,
          combinations,
        }),
      ];
    }
  }

  const sumPairs = [];
  for (let i = 0; i <= firstArray.length - 1; i++) {
    for (let j = 0; j <= firstArray.length - 1; j++) {
      if (i + j === firstArray.length - 1) {
        console.log("found pair", firstArray.length, " i", i, " j ", j);
        sumPairs.push([i, j]);
      }
    }
  }

  for (let i = 0; i <= sumPairs.length - 1; i++) {
    let j = i + 1;

    if (j < sumPairs.length - 1) {
      let swappedArray = utils.swapElementsInArray(
        utils.swapElementsInArray(firstArray, sumPairs[i][0], sumPairs[i][1]),
        sumPairs[j][0],
        sumPairs[j][1]
      );

      combinations = [
        ...utils.generateCombinationSwaps({
          array: swappedArray,
          combinations,
        }),
      ];
    }
  }
  console.log("sumPairs", sumPairs);

  console.log("combinations", combinations);
  console.log("num of combinations", combinations.length);
};

export default generatePossibleRanges;
