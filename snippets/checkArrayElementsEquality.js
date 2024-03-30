//! it will check if all elements of an array are equal

const checkArrayElementsEquality = (arr) => {
  const [first, ...restElements] = arr;

  const isEqual = restElements.reduce((acc, curr) => {
    return curr === first && acc;
  }, true);

  return isEqual;
};

export default checkArrayElementsEquality;
