class maxHeap {
  constructor() {
    this.heap = [];
  }

  /* it will swap two elements in positions a,b */
  swap(ar, a, b) {
    const temp = ar[a];

    ar[a] = ar[b];
    ar[b] = temp;

    return ar;
  }

  size() {
    return this.heap.length;
  }

  parent(idx) {
    const parentIdx = Math.floor((idx - 1) / 2);
    const parent = this.heap[parentIdx];

    return { parent, parentIdx };
  }

  leftChild(idx) {
    const leftChildIdx = idx * 2 + 1;

    const leftChild = this.heap[leftChildIdx];
    return {
      leftChildIdx,
      leftChild,
    };
  }

  rightChild(idx) {
    const rightChildIdx = idx * 2 + 2;

    const rightChild = this.heap[rightChildIdx];
    return {
      rightChildIdx,
      rightChild,
    };
  }
  /**
   * It will use the array to insert an element
   * parent = floor((idx-1)/2)
   * left child: idx * 2 + 1
   * right child: idx * 2 + 2
   *
   * parent > left child
   * parent > right child
   *
   */

  insert(node) {
    this.heap.push(node);
    let curIndex = this.size() - 1;

    while (curIndex >= 0) {
      const { parent, parentIdx } = this.parent(curIndex);

      if (this.heap[curIndex] > parent) {
        this.swap(this.heap, curIndex, parentIdx);
      }

      curIndex = parentIdx;
    }
  }

  peek() {
    return this.heap[0];
  }

  isEmpty() {
    return this.size() === 0;
  }

  delete(node) {
    /* step 1 remove the first element from the array */
    this.heap.shift();

    /* step 2 get the last element in the array */

    const lastElement = this.heap.pop(); //this.heap[this.size() - 1];

    this.heap = lastElement ? [lastElement, ...this.heap] : [...this.heap];

    /* step 4  preserve the max heap property */

    let curIndex = 0;

    while (curIndex < this.size()) {
      //! get the two childs
      const { leftChild, leftChildIdx } = this.leftChild(curIndex);
      const { rightChild, rightChildIdx } = this.rightChild(curIndex);

      //! checks if there is only one child
      const onlyLeftChild = leftChild && !rightChild;
      const onlyRightChild = rightChild && !leftChild;

      if (onlyLeftChild && this.heap[curIndex] >= leftChild) {
        this.swap(this.heap, curIndex, leftChildIdx);
        curIndex = leftChildIdx;
      } else if (onlyRightChild && this.heap[curIndex] <= rightChild) {
        this.swap(this.heap, curIndex, rightChildIdx);
        curIndex = rightChildIdx;
      } else if (leftChild && rightChild && rightChild >= leftChild) {
        this.swap(this.heap, curIndex, rightChildIdx);
        curIndex = rightChildIdx;
      } else if (leftChild && rightChild && rightChild <= leftChild) {
        this.swap(this.heap, curIndex, leftChildIdx);
        curIndex = leftChildIdx;
      } else {
        curIndex = this.size();
      }
    }
  }
}

export default maxHeap;
