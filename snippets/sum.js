const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2 = Array(1000).keys();

const sum = (array) => {
  const reachedTheEndOfArray = array.length === 1;

  if (reachedTheEndOfArray) {
    return array[0];
  }

  const [first, ...rest] = array;

  const totalSum = sum(rest) + first;
  return totalSum;
};

export default sum;
