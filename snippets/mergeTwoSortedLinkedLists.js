import * as utils from ".";

const buildLinkedListA = () => {
  const list = new utils.List.LinkedList();
  const head = new utils.List.Node(1, null);

  const node1 = new utils.List.Node(3, null);
  const node2 = new utils.List.Node(6, null);
  const node3 = new utils.List.Node(9, null);
  const tail = new utils.List.Node(12, null);

  head.next = node1;
  node1.next = node2;
  node2.next = node3;
  node3.next = tail;

  list.head = head;

  return list;
};

const buildLinkedListB = () => {
  const list = new utils.List.LinkedList();
  const head = new utils.List.Node(2, null);

  const node1 = new utils.List.Node(4, null);
  const node2 = new utils.List.Node(8, null);
  const node3 = new utils.List.Node(10, null);
  const tail = new utils.List.Node(13, null);

  head.next = node1;
  node1.next = node2;
  node2.next = node3;
  node3.next = tail;

  list.head = head;

  return list;
};

//! it will accept two head-nodes (sorted lists) and will return
//! one merged sorted list

const sortedMerge = (nodeA, nodeB) => {
  if (nodeA === null) {
    return nodeB;
  }

  if (nodeB === null) {
    return nodeA;
  }

  if (nodeA.data < nodeB.data) {
    nodeA.next = sortedMerge(nodeA.next, nodeB);
    return nodeA;
  } else {
    nodeB.next = sortedMerge(nodeA, nodeB.next);
    return nodeB;
  }
};

const mergeTwoSortedLinkedLists = () => {
  const listA = buildLinkedListA();
  const collectA = utils.printListWithRecursionPure(listA.head);
  console.log("collectA", collectA);

  const listB = buildLinkedListB();
  const collectB = utils.printListWithRecursionPure(listB.head);
  console.log("collectB", collectB);

  const mergedList = sortedMerge(listA.head, listB.head);

  console.log("mergedList", utils.printListWithRecursionPure(mergedList));
};

export default mergeTwoSortedLinkedLists;

// mergeTwoSortedLinkedLists
