//! it will create all possible combinations of dimensions of three in the range of 9
//! so it will have [x,x,x] where x is in range of [1,...9]

const generateCombinations = (range) => {
  const combinations = [];

  range.forEach((_, outerIndex) => {
    range.forEach((_, middleIndex) => {
      range.forEach((_, innerIndex) => {
        const slice = [
          range[innerIndex],
          range[middleIndex],
          range[innerIndex],
        ];
        combinations.push(slice);
      });
    });
  });

  return combinations;
};

export default generateCombinations;
