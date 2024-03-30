const printListWithRecursionPure = (list) => {
  if (list.next === null) {
    return [list.data];
  }

  const dataArr = printListWithRecursionPure(list.next);

  return [list.data, ...dataArr];
};

export default printListWithRecursionPure;
