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
    this.head = null;

    if (head) {
      this.head = head;
    }
  }
}

export { Node, LinkedList };
