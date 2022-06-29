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

  //   if (!minVertexIdx) {
  //     debugger;
  //   }
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
const networkDelayTime = (times, n, k) => {
  /* Initializations */
  let distances = new Array(n).fill(-1).map(() => Infinity);
  let visited = [];
  let unVisited = new Array(n).fill(-1).map((_, index) => index + 1);

  let currentVertex = k;

  distances[currentVertex - 1] = 0;
  while (unVisited.length > 0 && currentVertex) {
    //! find all edges for currentVertex
    const edges = findAllEdgesForNode(times, currentVertex);

    let currentVertexCost = distances[currentVertex - 1];
    console.log("edges", edges, " currentVertexCost", currentVertexCost);

    edges.forEach((edge) => {
      const [u, v, w] = edge;
      let minCost = Math.min(w + currentVertexCost, distances[v - 1]); //! u - 1 to keep ordering
      console.log("minCost", minCost);
      updateDistances(v - 1, minCost, distances);
    });

    //! remove currentVertex from unVisited
    unVisited = unVisited.filter((vertex) => vertex !== currentVertex);

    //! add currentVertex to visited
    visited.push(currentVertex - 1);

    const { minVertexIdx } = findNextVertex(distances, visited);

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
  }

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

  const ans = Math.max(...distances);

  return ans === Infinity ? -1 : ans;
};

export default networkDelayTime;
