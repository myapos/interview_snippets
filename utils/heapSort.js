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
  let largest = currentRootIdx; //! Initialize largest as root node
  let leftChildIdx = 2 * currentRootIdx + 1; //! leftChildIdx = 2*currentRootIdx + 1
  let rightChildIdx = 2 * currentRootIdx + 2; //! rightChildIdx = 2*currentRootIdx + 2

  //! If left child is larger than root
  if (leftChildIdx < length && ar[leftChildIdx] > ar[largest])
    largest = leftChildIdx;

  //! If right child is larger than largest so far
  if (rightChildIdx < length && ar[rightChildIdx] > ar[largest])
    largest = rightChildIdx;

  //! If largest is not root
  if (largest != currentRootIdx) {
    swap(ar, currentRootIdx, largest);

    //! Recursively heapify the affected sub-tree
    heapify(ar, largest, length);
  }
}

const buildHeap = (ar, length) => {
  let middle = Math.floor(length / 2) - 1;
  //! Build heap (rearrange array)
  for (let currentRootIdx = middle; currentRootIdx >= 0; currentRootIdx--) {
    heapify(ar, currentRootIdx, length);
  }
};

const heapSort = (ar) => {
  let length = ar.length;

  if (length <= 1) {
    return ar;
  }

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
