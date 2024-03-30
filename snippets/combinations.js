const combinations___ = (n, k) => {
  const range = [];

  for (let i = 1; i <= n; i++) {
    range.push(i);
  }

  console.log("range", range);

  const generateCombinations = (array, numOfSubset) => {
    //!base condition
    if (array.length === 0) {
      return [[]];
    }

    const [first, ...rest] = array;
    const combsWithoutFirst = generateCombinations(rest, numOfSubset);

    const combsWithFirst = combsWithoutFirst.map((comb) => [first, ...comb]);

    return [...combsWithoutFirst, ...combsWithFirst];
  };
  const combs = generateCombinations(range, k);

  console.log("combs", combs);
};

/**
 * Given two integers n and k, return all possible combinations of k numbers out of the range [1, n].
 * You may return the answer in any order.
 * https://leetcode.com/problems/combinations/
 */
const combinations = (n, k) => {
  const result = [];

  const generateCombinations = (array, start) => {
    //!base condition
    if (array.length === k) {
      result.push(array);
      return;
    }

    for (let i = start; i <= n; i++) {
      generateCombinations([...array, i], i + 1);
    }
  };

  generateCombinations([], 1);

  return result;
};

export default combinations;
