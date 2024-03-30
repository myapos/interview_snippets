const swap = (ar, x, y) => {
  let i = ar[x];
  ar[x] = ar[y];
  ar[y] = i;
  return ar;
};

const insertionSort = (arr) => {
  if (arr.length === 0 || arr.length === 1) return arr;

  let startIdx = 1; // second element

  let startedSearchForSwaps = 0;

  while (startIdx < arr.length) {
    console.log("startIdx", startIdx);
    startedSearchForSwaps = startIdx;
    // search backwards and make swaps
    for (let i = startIdx - 1; i >= 0; i--) {
      const A = arr[startIdx];
      const B = arr[i];

      console.log("A-B", A, B);
      if (A < B) {
        console.log("swapping", A, B);
        //swap
        swap(arr, startIdx, i);
        startIdx--;
      }
    }
    startIdx = startedSearchForSwaps;
    startIdx++;
  }

  return arr;
};

export default insertionSort;
