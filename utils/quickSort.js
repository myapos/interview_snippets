/**
 * 1. select an element as a pivot (last element)
 * 2. partition the array each element that is less than the pivot
 * will be in left of the pivot
 * 3. each element greater than the pivot will be in the right of the pivot
 * divide and conquer for each partition left and right
 * 4. the pivot will be in the 'middle' between the two partitions
 *
 * We will use two pointers from the beginning
 *
 * */
const swap = (ar, i, j) => {
  const temp = ar[j];
  ar[j] = ar[i];
  ar[i] = temp;
};

const partition = (ar, l, r) => {
  const pivot = ar[r]; //! get the last element as a pivot

  let pivotIndex = l,
    j = l;

  while (j <= r - 1) {
    if (ar[j] >= pivot) {
      j++;
    } else if (ar[j] < pivot) {
      swap(ar, pivotIndex, j);
      pivotIndex++;
      j++;
    }

    if (j === r) {
      swap(ar, pivotIndex, r);
    }
  }

  return pivotIndex;
};

const quickSort = (ar, l, r) => {
  if (l > r) return;

  const pivot = partition(ar, l, r);
  quickSort(ar, l, pivot - 1);
  quickSort(ar, pivot + 1, r);
};

export default quickSort;
