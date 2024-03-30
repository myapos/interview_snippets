import * as utils from ".";

//! it will accept an array and swap elements in position i,j
//! it will returned the swapped array

const swapElementsInArray = (arr, i, j) => {
  const shouldExit = i > arr.length - 1 || j > arr.length - 1 || i < 0 || j < 0;
  if (shouldExit) {
    return "Check your indexes";
  }

  const newArr = utils.deepCopy(arr);
  const save = newArr[i];

  newArr[i] = newArr[j];
  newArr[j] = save;

  return newArr;
};

export default swapElementsInArray;
