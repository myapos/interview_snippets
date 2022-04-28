import * as utils from "./";

/**
 * It will accept a sorted array and an element to search for using recursion.
 * It will perform a binary search and will return the index of the element found
 * Parameters
 *
 * arr: the array to be searched
 * element: the element to found
 * start: the starting index
 * end: the ending index
 *
 *  */
const binarySearch = (arr, start, end, element) => {
  const length = start + end;
  if (end < start) {
    return "Not found";
  }

  // get the mid
  const midIndex = Math.floor(length / 2);
  const mid = arr[midIndex];

  if (mid === element) {
    return midIndex;
  }

  if (mid > element) {
    //! go left
    return binarySearch(arr, start, midIndex - 1, element);
  } else {
    //! go right
    return binarySearch(arr, midIndex + 1, end, element);
  }
};

export default binarySearch;
