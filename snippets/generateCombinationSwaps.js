import * as utils from ".";

const generateCombinationSwaps = ({ array, combinations }) => {
  const newCombinations = utils.deepCopy(combinations);

  for (let swapIndex = 0; swapIndex < array.length; swapIndex++) {
    const baseIndex = 0;
    const newArray = utils.swapElementsInArray(array, baseIndex, swapIndex);

    const arrayExists = utils.checkArrayExistence({
      list: newCombinations,
      array: newArray,
    });

    if (!arrayExists) {
      newCombinations.push(newArray);
    }
  }

  return newCombinations;
};

export default generateCombinationSwaps;
