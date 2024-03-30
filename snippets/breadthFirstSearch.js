const breadthFirstSearch = (tree) => {
  const list = [];
  const queue = [];

  queue.push(tree);

  while (queue.length > 0) {
    const curNode = queue.shift();

    list.push(curNode.val);
    if (curNode.left) {
      queue.push(curNode.left);
    }

    if (curNode.right) {
      queue.push(curNode.right);
    }
  }

  return list;
};

export default breadthFirstSearch;
