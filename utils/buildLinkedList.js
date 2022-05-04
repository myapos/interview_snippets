import * as utils from "./";

const buildLinkedList = () => {
  const list = new utils.List.LinkedList();
  const head = new utils.List.Node(10, null);

  const node1 = new utils.List.Node(20, null);
  const node2 = new utils.List.Node(30, null);
  const node3 = new utils.List.Node(40, null);
  const node4 = new utils.List.Node(50, null);
  const node5 = new utils.List.Node(60, null);
  const node6 = new utils.List.Node(70, null);
  const node7 = new utils.List.Node(80, null);
  const tail = new utils.List.Node(90, null);

  head.next = node1;
  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;
  node5.next = node6;
  node6.next = node7;
  node7.next = tail;

  list.node = head;

  return list;
};

export default buildLinkedList;
