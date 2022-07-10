class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
    this.alive = true;
  }
}

class Monarchy {
  constructor(value) {
    const node = new Node(value);
    this.node = node;

    //! use an internal hash map for O(1) access
    this._nodes = {};
    this._nodes[value] = node;
  }

  _findNode(value) {
    if (this._nodes[value]) {
      return this._nodes[value];
    }

    return false;
  }

  birth(childValue, parentValue) {
    //! find parent

    const parentNode = this._findNode(parentValue);

    if (parentNode) {
      //! build childNode
      const childNode = new Node(childValue);
      parentNode.children.push(childNode);

      //! add new child node to nodes
      this._nodes[childValue] = childNode;
    }

    return false;
  }

  death(nodevalue) {
    //! find parent
    const parentNode = this._findNode(nodevalue);

    if (parentNode) {
      parentNode.alive = false;
    }

    return false;
  }

  getOrderOfSucession() {
    //! runs a preorder dfs
    let queue = [this.node];

    let order = [];
    while (queue.length > 0) {
      const first = queue.shift();
      if (first.alive) {
        order.push(first.value);
      }
      const { children } = first;
      queue = [...children, ...queue];
    }

    return order;
  }
}
export default Monarchy;
