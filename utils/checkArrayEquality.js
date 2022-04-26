//! it will check if all elements of an array are equal

const checkArrayEquality = (arr) => {
  const [first, ...restElements] = arr;

  const isEqual = restElements.reduce((acc, curr) => {
    return curr === first && true;
  }, true);

  return isEqual;
};

export default checkArrayEquality;
