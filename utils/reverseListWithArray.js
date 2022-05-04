/* O(n) time complexity */
function reverseListWithArray(node) {
  //! initializations
  let prev = null;
  let current = node;
  let next = null;

  while (current !== null) {
    //!save node values
    next = current.next;
    //! set prev of current node in backwards direction
    current.next = prev;

    //! updates for the next iteration
    prev = current;
    current = next;
  }

  return prev;
}

export default reverseListWithArray;
