//  https://www.greatfrontend.com/questions/javascript/topological-sort

// `Queue` data structure is provided in case you want to use it.
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Queue {
  constructor() {
    this._dummyHead = new Node();
    this._dummyTail = new Node();
    this._dummyHead.prev = this._dummyTail;
    this._dummyTail.next = this._dummyHead;
    this._length = 0;
  }

  /**
   * Adds an item to the back of the queue.
   * @param {*} item The item to be pushed onto the queue.
   * @return {number} The new length of the queue.
   */
  enqueue(item) {
    const node = new Node(item);
    const prevLast = this._dummyTail.next;
    prevLast.prev = node;

    node.next = prevLast;
    node.prev = this._dummyTail;
    this._dummyTail.next = node;
    this._length++;
    return this._length;
  }

  /**
   * Remove an item from the front of the queue.
   * @return {*} The item at the front of the queue if it is not empty, `undefined` otherwise.
   */
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    const node = this._dummyHead.prev;
    const newFirst = node.prev;
    this._dummyHead.prev = newFirst;
    newFirst.next = this._dummyHead;
    // Unlink the node to be dequeued.
    node.prev = null;
    node.next = null;
    this._length--;
    return node.value;
  }

  /**
   * Determines if the queue is empty.
   * @return {boolean} `true` if the queue has no items, `false` otherwise.
   */
  isEmpty() {
    return this._length === 0;
  }

  /**
   * Returns the item at the front of the queue without removing it from the queue.
   * @return {*} The item at the front of the queue if it is not empty, `undefined` otherwise.
   */
  front() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this._dummyHead.prev.value;
  }

  /**
   * Returns the item at the back of the queue without removing it from the queue it.
   * @return {*} The item at the back of the queue if it is not empty, `undefined` otherwise.
   */
  back() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this._dummyTail.next.value;
  }

  /**
   * Returns the number of items in the queue.
   * @return {number} The number of items in the queue.
   */
  length() {
    return this._length;
  }
}

const findZeroDependencyVertex = (graph) => {
  let vertex = null;
  const graphEntries = graph.entries();
  let counter = 0;
  while (counter < graph.size) {
    let {
      value: [key, value],
    } = graphEntries.next();

    const hasZeroDependencies = value === 0;
    vertex = hasZeroDependencies ? key : null;

    if (hasZeroDependencies) {
      break;
    }

    counter++;
  }
  //! this part does not work in GFE
  //   for (let [key, value] of graph) {
  //     const hasZeroDependencies = value === 0;
  //     vertex = hasZeroDependencies ? key : null;

  //     if (hasZeroDependencies) {
  //       break;
  //     }
  //   }

  return vertex;
};

const topologicalSort = (graph) => {
  const graphLength = Object.keys(graph).length;
  if (graphLength === 0) {
    return [];
  }

  // build in degree map first
  const inDegreeMap = new Map();

  Object.keys(graph).forEach((dependsOn) => {
    const dependencies = graph[dependsOn];

    if (!inDegreeMap.has(dependsOn)) {
      // initialize
      inDegreeMap.set(dependsOn, 0);
    }

    dependencies.forEach((dependency) => {
      if (!inDegreeMap.has(dependency)) {
        // initialize
        inDegreeMap.set(dependency, 0);
      }

      const inDegree = inDegreeMap.get(dependency);
      inDegreeMap.set(dependency, inDegree + 1);
    });
  });

  const sorted = [];
  const queue = new Queue();

  // steps

  // 1. find the vertex with zero dependencies and add it to the queue
  const vertex = findZeroDependencyVertex(inDegreeMap);
  vertex && queue.enqueue(vertex);

  while (!queue.isEmpty()) {
    const vertex = queue.dequeue();
    sorted.push(vertex);
    // 2. add it to the sorted

    // remove from inDegreeMap
    inDegreeMap.delete(vertex);
    // 3. reduce dependencies on the inDegreeMap by one
    const dependencies = graph[vertex];
    dependencies.forEach((dependency) => {
      const storedDependencyDegree = inDegreeMap.get(dependency);
      inDegreeMap.set(dependency, storedDependencyDegree - 1);
    });

    // 4. add to the queue the dependencies of vertex with zero indegree

    const newVertexWithZero = findZeroDependencyVertex(inDegreeMap);
    newVertexWithZero && queue.enqueue(newVertexWithZero);
  }

  return sorted.length === graphLength ? sorted : [];
};

export default topologicalSort;
