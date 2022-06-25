const swap = (ar, i, j) => {
  const temp = ar[i];
  ar[i] = ar[j];
  ar[j] = temp;
};

// To heapify a subtree rooted with node i which is
// an index in ar[]. n is size of heap
function heapify(ar, length, currentRoot) {
  let largest = currentRoot; // Initialize largest as root
  let l = 2 * currentRoot + 1; // left = 2*currentRoot + 1
  let r = 2 * currentRoot + 2; // right = 2*currentRoot + 2

  //! If left child is larger than root
  if (l < length && ar[l] > ar[largest]) largest = l;

  //! If right child is larger than largest so far
  if (r < length && ar[r] > ar[largest]) largest = r;

  //! If largest is not root
  if (largest != currentRoot) {
    swap(ar, currentRoot, largest);

    //! Recursively heapify the affected sub-tree
    heapify(ar, length, largest);
  }
}

const buildHeap = (ar, length, middle) => {
  //! Build heap (rearrange array)
  for (let currentRoot = middle; currentRoot >= 0; currentRoot--) {
    heapify(ar, length, currentRoot);
  }
};

const heapSort = (ar) => {
  let length = ar.length;

  if (length <= 1) {
    return ar;
  }

  const middle = Math.floor(length / 2) - 1;

  buildHeap(ar, length, middle);

  //! One by one extract an element from heap
  for (var i = length - 1; i > 0; i--) {
    swap(ar, 0, i);
    //! call max heapify on the reduced heap
    heapify(ar, i, 0);
  }

  return ar;
};

export default heapSort;

/* 

1. heapify 

from all parents from floor(l/2) - 1 to element with zero index check for heap properties and swap 
greater child with parent

*/
