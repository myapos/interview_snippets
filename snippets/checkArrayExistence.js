import * as utils from ".";

//! it will accept a list of arrays and check if an array exists in the list

const checkArrayExistence = ({ list, array }) => {
  let arrayExists = false;
  const hasLength = list.length > 0;
  // return (
  //   hasLength &&
  //   list.reduce((acc, val) => {
  //     // console.log(utils.compareArrays({ arr1: array, arr2: val }));
  //     return utils.compareArrays({ arr1: array, arr2: val }) && acc;
  //   }, true)
  // );

  if (!hasLength) {
    return false;
  }

  for (let i = 0; i < list.length; i++) {
    arrayExists = utils.compareArrays({ arr1: array, arr2: list[i] });

    if (arrayExists) {
      break;
    }
  }

  return arrayExists;
};

export default checkArrayExistence;
