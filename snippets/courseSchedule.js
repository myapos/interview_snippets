// https://leetcode.com/problems/course-schedule/

/* 

1. run a dfs traversal for each node
2. get the visited nodes
3. unconnected graphs case
    we should merge all visited nodes to a set
    if all vertices are included then all courses can be completed

*/

/**
 * It will get an adjacency list and a vertex and run a dfs algorithm
 *
 */
const dfsGraphFromVertex = (vertex, graph, values, seen, start) => {
  const neighbours = graph[vertex];
  values.push(vertex);
  seen[vertex] = true;
  let answer = false;

  for (let i = 0; i < neighbours.length; i++) {
    const neighbour = neighbours[i];
    console.log("seen", seen, "neighbour", neighbour);
    if (neighbour === start) {
      //! has cycle
      return true;
    }

    if (!seen[neighbour]) {
      answer = dfsGraphFromVertex(neighbour, graph, values, seen, start);
    }
  }

  return answer;
};

const canFinish__ = (numCourses, prerequisites) => {
  //! build an adjacency list
  const adjList = new Array(numCourses).fill(0).map(() => []);

  for (let i = 0; i < prerequisites.length; i++) {
    const pair = prerequisites[i];
    adjList[pair[1]].push(pair[0]);
  }

  //! for every vertex of adjacency list run bfs
  //! if startVertex is in seen then a cycle is detected

  for (let v = 0; v < numCourses; v++) {
    const queue = [];
    const seen = {};
    for (let i = 0; i < adjList[v].length; i++) {
      queue.push(adjList[v][i]);
    }

    while (queue.length) {
      const current = queue.shift();
      seen[current] = true;

      if (current === v) return false;
      const adjacent = adjList[current];
      for (let i = 0; i < adjacent.length; i++) {
        const next = adjacent[i];
        if (!seen[next]) {
          queue.push(next);
        }
      }
    }
  }

  return true;
};

/* it uses topological sort */
const canFinish = (numCourses, prerequisites) => {
  //! build an adjacency list
  const adjList = new Array(numCourses).fill(0).map(() => []);
  const inDegreeList = new Array(numCourses).fill(0);

  for (let i = 0; i < prerequisites.length; i++) {
    const pair = prerequisites[i];
    adjList[pair[1]].push(pair[0]);
    inDegreeList[pair[0]] += 1;
  }

  console.log("inDegreeList", inDegreeList, " adjList", adjList);

  const visited = [];
  const seen = {};
  const length = inDegreeList.length;

  while (visited.length < length) {
    //! find first zero
    let zeroIndex = -1;
    for (let i = 0; i < inDegreeList.length; i++) {
      if (inDegreeList[i] === 0 && !seen[i]) {
        zeroIndex = i;
        break;
      }
    }

    if (zeroIndex !== -1) {
      visited.push(zeroIndex);

      const connections = adjList[zeroIndex];

      connections.forEach((connection) => {
        inDegreeList[connection] -= 1;
      });

      seen[zeroIndex] = true;
    } else {
      //! cycle detected
      console.log("cycle detected??");
      return false;
    }
  }
  console.log("visited", visited);

  return true;
};
export default canFinish;
