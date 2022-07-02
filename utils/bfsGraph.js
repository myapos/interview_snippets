/**It will receive a graph list as an array.
 * It will receive an adjacency list for the graph
 * It will run a bfs traversal to the graph and return the order of visited nodes */
const bfsGraph = (adjList) => {
  //! initializations
  const queue = [adjList[1][0]];
  const visited = [];

  while (queue.length > 0) {
    //! get the first element of the queue
    const vertex = queue.shift();

    const neighbours = adjList[vertex];

    neighbours.forEach((neighbour) => {
      if (!visited.includes(neighbour)) {
        //! add edges of vertex to queue if it is not visited yet
        queue.push(neighbour);
      }
    });

    if (!visited.includes(vertex)) {
      //! add vertex to visited
      visited.push(vertex);
    }
  }

  return visited;
};

export default bfsGraph;
