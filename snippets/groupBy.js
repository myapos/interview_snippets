const groupBy = (array, iteratee) => {
  const grouped = {};

  if (typeof iteratee === "string") {
    // iteratee is string
    array.forEach((item) => {
      const result = item[iteratee];

      if (!result) {
        return;
      }

      if (grouped[result]) {
        grouped[result].push(item);
        return;
      }

      grouped[result] = [item];
    });
    return grouped;
  }

  // iteratee is function
  array.forEach((item) => {
    const result = iteratee(item);

    if (!result) {
      return;
    }

    if (grouped[result]) {
      grouped[result].push(item);
      return;
    }

    grouped[result] = [item];
  });
  return grouped;
};

export default groupBy;
