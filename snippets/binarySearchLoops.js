const getMiddleIdxOfSearchSpace = (leftIdx, rightIdx) =>
  Math.floor((leftIdx + rightIdx) / 2);
/**
 * @param {Array<number>} arr The input integer array to be searched.
 * @param {number} target The target integer to search within the array.
 * @return {number} The index of target element in the array, or -1 if not found.
 */
function binarySearchLoops(arr, target) {
  if (arr.length === 0) return -1;

  let leftIdx = 0,
    rightIdx = arr.length;
  let middleIdx = getMiddleIdxOfSearchSpace(leftIdx, rightIdx);
  let middle = arr[middleIdx];

  const isInBounds = target >= arr[0] && target <= arr[arr.length - 1];

  if (!isInBounds) {
    return -1;
  }

  if (middle === target) {
    // no need to search more
    return middleIdx;
  }

  while (leftIdx <= rightIdx) {
    if (middle > target) {
      // go left
      rightIdx = middleIdx - 1;
    } else if (middle < target) {
      // go right
      leftIdx = middleIdx + 1;
    } else if (middle === target) {
      break;
    }
    middleIdx = getMiddleIdxOfSearchSpace(leftIdx, rightIdx);

    middle = arr[middleIdx];
  }
  return middle === target ? middleIdx : -1;
}

export default binarySearchLoops;
