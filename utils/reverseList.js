const reverseList = (node) => {
  if (node.next === null) {
    return node;
  }

  const p = reverseList(node.next);

  node.next.next = node;
  node.next = null;

  return p;
};

export default reverseList;
