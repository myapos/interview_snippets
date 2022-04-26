// it will accept an element to compare and an array
// it will return true if all elements are equal to elementToCompare
function compareElements(elementToCompare, arr) {
  let isEqual = false;
  isEqual = arr.every((element) => elementToCompare === element);

  return isEqual;
}

export default compareElements;
