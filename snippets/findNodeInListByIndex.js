const findNodeInListByIndex = (node, index) => {
  let nodeToSearch = node;

  if (index === 1) {
    return nodeToSearch;
  }

  let i = 1;

  if (index < i) {
    return null;
  }

  while (i < index && nodeToSearch) {
    nodeToSearch = nodeToSearch.next;
    i++;
  }

  return nodeToSearch;
};

export default findNodeInListByIndex;
