import * as utils from "./utils";

// console.log(utils.factorialWithCaching(6));
// console.log(utils.factorialTCR(50));
// utils.mergeTwoSortedLinkedLists();
const list = utils.buildLinkedList();
// console.log("list", list);

const smallList = new utils.List.LinkedList();
const head = new utils.List.Node(3, null);
const tail = new utils.List.Node(5, null);

head.next = tail;

smallList.node = head;

// const reversedList = utils.reverseListWithArray(list.node);
// console.log("reversedList", reversedList);
// const mirroredList = utils.linkedListReversalFromRange(list.node, 2, 6);

// console.log("mirroredList", mirroredList);

const mirroredList = utils.linkedListReversalFromRange(smallList.node, 1, 2);

console.log("mirroredList", mirroredList);
