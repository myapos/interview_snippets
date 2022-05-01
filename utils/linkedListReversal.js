import * as utils from "./";

const printListWithRecursion = (list, collect) => {
  if (list.next === null) {
    collect.push(list.data);
    return;
  }

  collect.push(list.data);
  printListWithRecursion(list.next, collect);
};

const buildLinkedList = () => {
  const list = new utils.List.LinkedList();
  const head = new utils.List.Node(1, null);

  const node1 = new utils.List.Node(2, null);
  const node2 = new utils.List.Node(3, null);
  const node3 = new utils.List.Node(4, null);
  const tail = new utils.List.Node(5, null);

  head.next = node1;
  node1.next = node2;
  node2.next = node3;
  node3.next = tail;

  list.head = head;

  return list;
};

const reverseList = (node) => {
  if (node.next === null) {
    return node;
  }

  const p = reverseList(node.next);

  node.next.next = node;
  node.next = null;

  return p;
};

const linkedListReversal = () => {
  const list = buildLinkedList();
  const collect = utils.printListWithRecursionPure(list.head);
  console.log("collect", collect);

  const rev = reverseList(list.head);

  console.log("list", JSON.stringify(rev));
  //   const collectRev = printListWithRecursionPure(list.head);
  //   console.log("collectRev", collectRev);
};

export default linkedListReversal;
