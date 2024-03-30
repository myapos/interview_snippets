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

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const networkDelayTimeNotOptimized = (times, n, k) => {
  /* Initializations */
  let distances = new Array(n).fill(Infinity);
  let visited = [];
  const adjacencyList = [];
  let unVisited = new Array(n).fill(-1).map((_, index) => index + 1);
  distances[k - 1] = 0;

  let currentVertex = k;

  console.log("distances", distances);

  //! build adjacencyList
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

  while (unVisited.length > 0 && currentVertex) {
    //! find edges for currentVertex
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

  console.log("distances", distances);
  const ans = Math.max(...distances);

  return ans === Infinity ? -1 : ans;
};

export default networkDelayTimeNotOptimized;
