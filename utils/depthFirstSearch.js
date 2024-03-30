// https://www.greatfrontend.com/questions/javascript/depth-first-search

/**
 * @param {Record<string, Array<string>} graph The adjacency list representing the graph.
 * @param {string} source The source node to start traversal from. It has to exist as a node in the graph.
 * @return {Array<string>} A DFS-traversed order of nodes.
 */

const depthFirstSearch_ = (graph, source) => {
  const traversed = [];
  const seen = {};

  // empty graph
  if (Object.keys(graph).length == 0) return [];

  const keys = Object.keys(graph);
  // single node graph
  if (Object.keys(graph).length == 1) {
    // single node graph
    traversed.push(source);
    seen[source] = true;
    keys.forEach((key) => {
      if (!seen[key]) {
        traversed.push(key);
        seen[key] = true;
      }
    });

    return traversed;
  }

  // traverse with dfs

  const dfs = (graph, node) => {
    traversed.push(node);
    seen[node] = true;

    const hasNodes = Boolean(graph[node].length);
    if (!hasNodes) {
      return;
    }

    graph[node].forEach((curNode) => {
      if (!seen[curNode]) {
        dfs(graph, curNode);
      } else {
        console.log("curNode", curNode, " is seen again");
      }
    });
  };

  dfs(graph, source);

  return traversed;
};

const depthFirstSearch = (graph, source) => {
  // If there are no nodes in the graph, just return an empty array
  if (Object.keys(graph).length === 0) {
    return [];
  }

  // Create an stack to store the nodes to be visited. We can simulate
  // stacks using arrays in JavaScript.
  // Add the root node since we're doing a pre-order DFS.
  const toBeVisited = [];
  toBeVisited.push(source);

  // Initialize a set that tracks visited nodes.
  const visited = new Set();

  // Loop as long as array is empty (i.e. there are still nodes to be visited).
  while (toBeVisited.length !== 0) {
    // Pop top node from array (toBeVisited) and add it to the set (visited).
    const node = toBeVisited.pop();
    visited.add(node);

    // Retrieve neighbors (values of the adjacency list input Object)
    const neighbors = graph[node];
    // Push neighbors, in reverse order, onto array to be visited
    // to preserve original order of neighbors when visiting (popping off the array).
    for (let i = neighbors.length - 1; i >= 0; i--) {
      const neighbor = neighbors[i];
      // First check if the neighbor has already been visited before adding it.
      if (!visited.has(neighbor)) {
        toBeVisited.push(neighbor);
      }
    }
  }

  // The visited nodes is the traversal order.
  return Array.from(visited);
};

export default depthFirstSearch;
