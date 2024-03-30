import * as utils from ".";
//! it will pop an array's elements and add it to the start
//! example [1,2,3] -> [3,1,2] -> [2,3,1] -> [1,2,3]
const popArray = (arr) => {
  const newArr = utils.deepCopy(arr);
  const lastElement = newArr.pop(); // changes arr length

  return [lastElement, ...newArr];
};

export default popArray;
