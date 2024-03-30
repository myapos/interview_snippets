const array1 = [5, 2, 1, 8, 9, 4];
const array2 = [12, 11, 13, 5, 6, 7];
const array3 = [1, 2, 3, 4, 5, 6, 7];
const array4 = [2, 1];
const array5 = [2, 1, 3];
const merge = (data, start, midIndex, end) => {
  //! build temp array to avoid modifying the original contents
  const temp = []; //Array(end - start + 1);
  let i = start,
    j = midIndex + 1;

  //! while both sub-array have values, then try and merge them in sorted order
  while (i <= midIndex && j <= end) {
    if (data[i] <= data[j]) {
      temp.push(data[i]);
      i++;
    } else {
      temp.push(data[j]);
      j++;
    }
  }
  //! Add the rest of the values from the left sub-array into the result
  //! exchausting phase

  while (i <= midIndex) {
    temp.push(data[i]);
    i++;
  }
  //! Add the rest of the values from the right sub-array into the result
  //! exchausting phase
  while (j <= end) {
    temp.push(data[j]);
    j++;
  }

  //! copy phase
  //! we don't want to modify the entire original array
  //! we only want to modify the subsection we are dealing for the current recursion call

  //! data should be modified by reference
  for (let i = start; i <= end; i++) {
    data[i] = temp[i - start];
  }
};

const mergeSort = (data, start, end) => {
  if (start < end) {
    const length = start + end;

    const midIndex = Math.floor(length / 2);
    mergeSort(data, start, midIndex);
    mergeSort(data, midIndex + 1, end);
    merge(data, start, midIndex, end);
  }
};

export default mergeSort;
