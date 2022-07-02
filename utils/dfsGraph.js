/**
 * It will receive an adjacency list for the graph
 * It will run a dfs traversal to the graph and return the order of visited nodes */
const dfsGraph = (vertex, graph, values, seen) => {
  const neighbours = graph[vertex];

  values.push(vertex);
  seen[vertex] = true;
  neighbours.forEach((neighbour) => {
    if (!seen[neighbour]) {
      dfsGraph(neighbour, graph, values, seen);
    }
  });
};

export default dfsGraph;
