// https://leetcode.com/problems/network-delay-time/
// solved with dijkstra's algorithm

const findNextVertex = (distances, visited) => {
  let minCost = Infinity;
  let minVertexIdx;

  for (let i = 0; i < distances.length; i++) {
    if (distances[i] < minCost && !visited.includes(i)) {
      minCost = distances[i];
      minVertexIdx = i;
    }
  }

  return {
    minCost,
    minVertexIdx: minVertexIdx + 1, //! for consistency with numbering
  };
};

//! it should receive
//! minCost=min(existingcost , edge cost + vertex cost)
//! distIdx is the ending vertex from a current source vertex
//! distances the array with vertices
const updateDistances = (distIndx, minCost, distances) => {
  if (minCost !== distances[distIndx]) {
    distances[distIndx] = minCost;
  }
};

const findAllEdgesForNode = (times, node) => {
  const edges = times.filter(([u]) => u === node);
  return edges;
};
/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const networkDelayTimeNotOptimized = (times, n, k) => {
  /* Initializations */
  let distances = new Array(n).fill(-1).map(() => Infinity);
  let visited = [];
  const adjacencyList = [];
  let unVisited = new Array(n).fill(-1).map((_, index) => index + 1);

  let currentVertex = k;

  distances.forEach((_, vertex) => {
    const vertexAdjacency = [];
    times.forEach((time) => {
      const [sourceVertex, targetVertex, weight] = time;
      if (sourceVertex === vertex + 1) {
        vertexAdjacency.push([targetVertex, weight]);
      }
    });
    adjacencyList.push(vertexAdjacency);
  });

  distances[currentVertex - 1] = 0;
  while (unVisited.length > 0 && currentVertex) {
    //! find all edges for currentVertex
    const edges = adjacencyList[currentVertex - 1];

    let currentVertexCost = distances[currentVertex - 1];

    edges.forEach((edge) => {
      const [v, w] = edge;
      let minCost = Math.min(w + currentVertexCost, distances[v - 1]); //! u - 1 to keep ordering
      updateDistances(v - 1, minCost, distances);
    });

    //! remove currentVertex from unVisited
    unVisited = unVisited.filter((vertex) => vertex !== currentVertex);

    //! add currentVertex to visited
    visited.push(currentVertex - 1);

    const { minVertexIdx } = findNextVertex(distances, visited);

    currentVertex = minVertexIdx;
  }

  const ans = Math.max(...distances);

  return ans === Infinity ? -1 : ans;
};

class PriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    this._heap = [];
    this._comparator = comparator;
  }

  size() {
    return this._heap.length;
  }

  peek() {
    return this._heap[0];
  }

  isEmpty() {
    return this._heap.length === 0;
  }

  _parent(idx) {
    return Math.floor((idx - 1) / 2);
  }

  _leftChild(idx) {
    return idx * 2 + 1;
  }

  _rightChild(idx) {
    return idx * 2 + 2;
  }

  _swap(i, j) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }

  _compare(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }

  push(value) {
    this._heap.push(value);
    this._siftUp();

    return this.size();
  }

  _siftUp() {
    let nodeIdx = this.size() - 1;

    while (0 < nodeIdx && this._compare(nodeIdx, this._parent(nodeIdx))) {
      this._swap(nodeIdx, this._parent(nodeIdx));
      nodeIdx = this._parent(nodeIdx);
    }
  }

  pop() {
    if (this.size() > 1) {
      this._swap(0, this.size() - 1);
    }

    const poppedValue = this._heap.pop();
    this._siftDown();
    return poppedValue;
  }

  _siftDown() {
    let nodeIdx = 0;

    while (
      (this._leftChild(nodeIdx) < this.size() &&
        this._compare(this._leftChild(nodeIdx), nodeIdx)) ||
      (this._rightChild(nodeIdx) < this.size() &&
        this._compare(this._rightChild(nodeIdx), nodeIdx))
    ) {
      const greaterChildIdx =
        this._rightChild(nodeIdx) < this.size() &&
        this._compare(this._rightChild(nodeIdx), this._leftChild(nodeIdx))
          ? this._rightChild(nodeIdx)
          : this._leftChild(nodeIdx);

      this._swap(greaterChildIdx, nodeIdx);
      nodeIdx = greaterChildIdx;
    }
  }
}

//! it should receive
//! minCost=min(existingcost , edge cost + vertex cost)
//! distIdx is the ending vertex from a current source vertex
//! distances the array with vertices
const updateDistancesWithPriorityQueue = (
  distIndx,
  minCost,
  heap,
  distances
) => {
  debugger;
  if (minCost !== distances[distIndx]) {
    distances[distIndx] = minCost;
    heap.push(distIndx);
  }
};

const findNextVertexWithPriorityQueue = (heap, visited) => {
  const first = heap.peek();
  while (visited.includes(heap.peek())) {
    heap.pop();
  }

  return heap.peek();
};

const networkDelayTime = (times, n, k) => {
  /* Initializations */
  let distances = new Array(n).fill(-1).map(() => Infinity);
  let visited = [];
  let unVisited = new Array(n).fill(-1).map((_, index) => index + 1);

  let currentVertex = k;

  distances[currentVertex - 1] = 0;

  const heap = new PriorityQueue((a, b) => distances[a] < distances[b]);
  heap.push(k - 1);

  while (unVisited.length > 0 && currentVertex) {
    debugger;
    //! find all edges for currentVertex
    const edges = findAllEdgesForNode(times, currentVertex);

    let currentVertexCost = distances[currentVertex - 1];
    console.log("edges", edges, " currentVertexCost", currentVertexCost);

    edges.forEach((edge) => {
      const [u, v, w] = edge;
      let minCost = Math.min(w + currentVertexCost, distances[v - 1]); //! u - 1 to keep ordering
      console.log("minCost", minCost);

      updateDistancesWithPriorityQueue(v - 1, minCost, heap, distances);
    });

    //! remove currentVertex from unVisited
    unVisited = unVisited.filter((vertex) => vertex !== currentVertex);

    //! add currentVertex to visited
    visited.push(currentVertex - 1);

    const minVertexIdx = findNextVertexWithPriorityQueue(heap, visited);

    currentVertex = minVertexIdx;

    // console.log(
    //   "distances",
    //   distances,
    //   " unVisited",
    //   unVisited,
    //   " visited",
    //   visited,
    //   " currentVertex",
    //   currentVertex
    // );
    //   }

    console.log(
      "distances",
      distances,
      " unVisited",
      unVisited,
      " visited",
      visited,
      " currentVertex",
      currentVertex
    );
  }

  const ans = Math.max(...distances);

  return ans === Infinity ? -1 : ans;
};

export default networkDelayTimeNotOptimized;
