export default function uniqBy(array, iteratee = (value) => value) {
  if (array.length === 0) return [];

  const mapped = new Map();

  array.forEach((item) => {
    if (!mapped.has(iteratee(item))) {
      mapped.set(iteratee(item), item);
    }
  });

  const result = [];

  mapped.forEach((value, key) => {
    result.push(value);
  });

  return result;
}
