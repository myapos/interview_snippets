const merge = (arr1, arr2) => {
  let merged = [];

  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    let min1 = arr1[i];
    let min2 = arr2[j];

    if (min1 < min2) {
      merged.push(min1);
      i++;
    } else if (min1 > min2) {
      merged.push(min2);
      j++;
    } else if (min1 === min2) {
      // duplicates case
      merged.push(min1);
      merged.push(min2);
      i++;
      j++;
    }
  }

  // pending elements from both subarrays
  if (i < arr1.length) {
    merged = [...merged, ...arr1.slice(i)];
  }

  if (j < arr2.length) {
    merged = [...merged, ...arr2.slice(j)];
  }
  return merged;
};

/**
 * @param {Array<number>} arr The input integer array to be sorted.
 * @return {Array<number>}
 */
export default function recursiveMergeSort(arr) {
  if (arr.length <= 0) return arr;

  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);

  const leftSlice = arr.slice(0, mid);
  const rightSlice = arr.slice(mid);

  const leftAr = recursiveMergeSort(leftSlice);
  const rightAr = recursiveMergeSort(rightSlice);

  return merge(leftAr, rightAr);
}
