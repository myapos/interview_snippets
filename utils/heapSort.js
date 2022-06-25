const swap = (ar, i, j) => {
  const temp = ar[i];
  ar[i] = ar[j];
  ar[j] = temp;
};

/** Heapifies a subtree from node with currentRootIdx
 * ar: the heap array to be sorted
 * currentRootIdx: the idx of the current root
 * length: the length of the current heap. It denotes the range of the current heap to be heapified
 *
 * Since arrays are passed by reference,
 * the modifications of the array are in place so this
 * function does not return anything.
 **/
function heapify(ar, currentRootIdx, length) {
  let largestIdx = currentRootIdx; //! Initialize largestIdx as root node
  let leftChildIdx = 2 * currentRootIdx + 1; //! leftChildIdx = 2*currentRootIdx + 1
  let rightChildIdx = 2 * currentRootIdx + 2; //! rightChildIdx = 2*currentRootIdx + 2

  const leftChildIdxIsInRange = leftChildIdx < length;
  const rightChildIdxIsInRange = rightChildIdx < length;

  //! detect the largest between the left and right child
  if (leftChildIdxIsInRange && ar[leftChildIdx] > ar[largestIdx])
    largestIdx = leftChildIdx;

  if (rightChildIdxIsInRange && ar[rightChildIdx] > ar[largestIdx])
    largestIdx = rightChildIdx;

  //! swap if parent is not the largest node between right and left child
  if (largestIdx != currentRootIdx) {
    swap(ar, currentRootIdx, largestIdx);

    //! heapify the sub-tree from the largest index to the end recursively
    heapify(ar, largestIdx, length);
  }
}

const buildHeap = (ar, length) => {
  let middle = Math.floor(length / 2) - 1;
  for (let currentRootIdx = middle; currentRootIdx >= 0; currentRootIdx--) {
    heapify(ar, currentRootIdx, length);
  }
};

const heapSort = (ar) => {
  let length = ar.length;

  if (length <= 1) {
    return ar;
  }

  //! Build heap (rearrange array)
  buildHeap(ar, length);

  //! One by one extract an element from heap
  for (var lastParentNode = length - 1; lastParentNode > 0; lastParentNode--) {
    //! root is the greater element so swap with the last element
    swap(ar, 0, lastParentNode);
    //! run heapify from 0 to lastParentNode
    heapify(ar, 0, lastParentNode);
  }

  return ar;
};

export default heapSort;
