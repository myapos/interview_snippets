const intersection = (...arrays) => {
  const hash = new Map();

  // loop arrays and creates hist
  arrays.forEach((array) => {
    const tempSet = new Set(array);

    tempSet.forEach((item) => {
      hash.set(item, (hash.get(item) || 0) + 1);
    });
  });

  const result = Array.from(hash.entries())
    .filter(([, occurrences]) => occurrences === arrays.length)
    .map(([item]) => item);

  return result;
};

export default intersection;
