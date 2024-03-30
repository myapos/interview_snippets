import * as utils from ".";

const compareArrays = ({ arr1, arr2 }) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let arraysAreEqual = true;

  for (let i = 0; i < arr1.length; i++) {
    for (let j = i; j < arr2.length; j++) {
      if (i === j) {
        // console.log("i", i, " j ", j);
        arraysAreEqual = arraysAreEqual && arr1[i] === arr2[j];
      }
    }
  }

  return arraysAreEqual;
};

export default compareArrays;
