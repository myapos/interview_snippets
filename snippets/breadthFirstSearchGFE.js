const breadthFirstSearchGFE = (graph, source) => {
  const visited = new Set();

  if (Object.keys(graph).length === 0) {
    return [];
  }

  // single node
  if (Object.keys(graph).length === 1) {
    visited.add(source);
    // single node
    graph[source] &&
      graph[source].forEach((node) => {
        if (!visited.has(node)) {
          visited.add(node);
        }
      });
  }

  // use a queue for bfs search

  const toBeVisited = [];
  // add source

  toBeVisited.push(source);
  visited.add(source);

  while (Boolean(toBeVisited.length)) {
    // get the first and reduce the toBeVisited length
    const node = toBeVisited.shift();

    const neighbors = graph[node];

    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i];
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        toBeVisited.push(neighbor);
      }
    }
  }

  return Array.from(visited);
};

export default breadthFirstSearchGFE;
