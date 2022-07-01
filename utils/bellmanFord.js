// https://leetcode.com/problems/network-delay-time/
// solved with bellman ford algorithm

const updateDistanceCheck = (times, distances) => {
  let distancesChanged = false;
  times.forEach((time) => {
    const [sourceVertex, targetVertex, weight] = time;
    if (distances[targetVertex - 1] > distances[sourceVertex - 1] + weight) {
      //! update distances
      distances[targetVertex - 1] = distances[sourceVertex - 1] + weight;
      distancesChanged = true;
    }
  });

  return distancesChanged;
};

const bellmanFord = (times, n, k) => {
  //! initializations
  //! build distances
  const distances = new Array(n).fill(Infinity);
  distances[k - 1] = 0;

  /*   //! build Adjacency list
  const adjacencyList = [];

  distances.forEach((_, vertex) => {
    const vertexAdjacency = [];
    times.forEach((time) => {
      const [sourceVertex, targetVertex, weight] = time;
      if (sourceVertex === vertex + 1) {
        vertexAdjacency.push([targetVertex, weight]);
      }
    });
    adjacencyList.push(vertexAdjacency);
  }); */

  //! n-1 loops all edges a.k.a times array and run a check
  //! if target cost is smaller than edge cost + vertex cost from distances array then update the distance array for the target
  for (let i = 1; i < n - 1; i++) {
    let distancesChanged = false;

    distancesChanged = updateDistanceCheck(times, distances);

    if (!distancesChanged) {
      console.log(
        "No changes detected - terminating bellman ford algorithm in",
        i,
        "repetition"
      );
      break;
    }
  }

  //! check for negative cycles
  let distancesChanged = false;
  distancesChanged = updateDistanceCheck(times, distances);

  if (distancesChanged) {
    //! detected negative edge cycle
    console.log(" detected negative edge cycle");
  }

  console.log(distances);
  const ans = Math.max(...distances);

  return ans === Infinity ? -1 : ans;
};

export default bellmanFord;
