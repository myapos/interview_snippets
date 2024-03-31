// https://www.greatfrontend.com/questions/javascript/heap-sort

const getParentIdx = (idx) => Math.floor((idx - 1) / 2);

const swap = (arr, x, y) => {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
};

// heapifies the arr in a range i,...,length
const heapify = (arr, length, i, comparator = (a, b) => a > b) => {
  let largest = i;
  const leftIdx = 2 * i + 1;
  const rightIdx = 2 * i + 2;

  if (leftIdx < length && comparator(arr[leftIdx], arr[largest])) {
    largest = leftIdx;
  }

  if (rightIdx < length && comparator(arr[rightIdx], arr[largest])) {
    largest = rightIdx;
  }

  if (largest !== i) {
    swap(arr, i, largest);
    heapify(arr, length, largest, comparator);
  }
};

/**
 * @param {Array<number>} arr The input integer array to be sorted.
 * @return {Array<number>}
 */
const heapSortGFE = (arr) => {
  const length = arr.length;

  // Build max heap
  for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
    heapify(arr, length, i);
  }

  // Extract elements from heap one by one
  for (let i = length - 1; i > 0; i--) {
    swap(arr, 0, i);
    heapify(arr, i, 0);
  }

  return arr;
};

export default heapSortGFE;
