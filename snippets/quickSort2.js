const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const partition = (arr, l, r) => {
  const pivotIdx = l;
  const pivot = arr[pivotIdx];

  let i = l,
    j = r;

  while (i < j) {
    do {
      i++;
    } while (arr[i] <= pivot);

    do {
      j--;
    } while (arr[j] > pivot);

    if (i < j) {
      swap(arr, i, j);
    }
  }
  // pivot swap with arr[j]
  swap(arr, pivotIdx, j);
  return j;
};

/**
 * @param {Array<number>} arr The input integer array to be sorted.
 * @return {Array<number>}
 */
export default function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const sort = (l, h) => {
    if (l < h) {
      const j = partition(arr, l, h);
      sort(l, j);
      sort(j + 1, h);
    }
  };

  sort(0, arr.length);
  return arr;
}
