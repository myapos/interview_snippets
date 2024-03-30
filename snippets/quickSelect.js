/*https://en.wikipedia.org/wiki/Quickselect  */

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

const quickSelect = (ar, l, r, k) => {
  if (l > r) return;
  const idxToFind = ar.length - k;

  const pivot = partition(ar, l, r);

  if (pivot === idxToFind) {
    return ar[idxToFind];
  } else if (pivot < idxToFind) {
    return quickSelect(ar, pivot + 1, r, k);
  } else {
    return quickSelect(ar, l, pivot - 1, k);
  }
};

export default quickSelect;
