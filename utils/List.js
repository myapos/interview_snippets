class Node {
  constructor(data, next) {
    this.data = data;
    this.next = null;

    if (this.next) {
      this.next = next;
    }
  }
}

class LinkedList {
  constructor(head) {
    this.node = null;

    if (head) {
      this.node = head;
    }
  }
}

export { Node, LinkedList };
