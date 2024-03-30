const swap = (ar, x, y) => {
  const i = ar[x];
  ar[x] = ar[y];
  ar[y] = i;
  return ar;
};

const findMinInSlice = (ar, x) => {
  const min = {
    value: Infinity,
    index: -1,
  };

  for (let i = x; i < ar.length; i++) {
    if (ar[i] < min.value) {
      min.value = ar[i];
      min.index = i;
    }
  }

  return min;
};

const selectionSort = (arr) => {
  if (arr.length === 1 || arr.length === 0) return arr;
  // the second starts from the current index of the first

  const isSwapped = {};

  for (let i = 0; i < arr.length; i++) {
    const min = findMinInSlice(arr, i);

    // !isSwapped[i] && !isSwapped[min.index] && swap(arr, i, min.index);
    swap(arr, i, min.index);
  }

  return arr;
};

export default selectionSort;
