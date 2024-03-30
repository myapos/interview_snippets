const maxBy = (array, iteratee) => {
  if (array.length === 0) {
    return undefined;
  }

  let max = { value: iteratee(array[0]), index: 0, found: false };

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    const iterated = iteratee(item);
    if (!iterated) {
      continue;
    }

    if (iterated >= max.value) {
      max.value = iterated;
      max.index = i;
      max.found = true;
    }
  }

  return max.found ? array[max.index] : undefined;
};

export default maxBy;
