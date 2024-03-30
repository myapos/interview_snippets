const countBy = (array, iteratee) => {
  const hashMap = {};

  if (typeof iteratee === "string") {
    array.forEach((item) => {
      const result = item[iteratee];
      if (!result) {
        return;
      }
      if (hashMap[result]) {
        hashMap[result] += 1;
      } else {
        hashMap[result] = 1;
      }
    });

    return hashMap;
  }

  array.forEach((item) => {
    const result = iteratee(item);
    if (!result) {
      return;
    }

    if (hashMap[result]) {
      hashMap[result] += 1;
    } else {
      hashMap[result] = 1;
    }
  });

  return hashMap;
};

export default countBy;
