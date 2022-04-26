import * as utils from "./";

const checkArrayExistence = ({ list, array }) => {
  const hasLength = list.length > 0;
  return (
    hasLength &&
    list.reduce((acc, val) => {
      console.log(utils.compareArrays({ arr1: array, arr2: val }));
      return utils.compareArrays({ arr1: array, arr2: val }) && acc;
    }, true)
  );
};

export default checkArrayExistence;
