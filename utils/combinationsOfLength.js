// it should return possible combinations of two length
const combinationsOfLength = (range) => {
  const slices = [];

  range.forEach((_, outerIndex) => {
    range.forEach((_, innerIndex) => {
      // console.log('checking', outerIndex, ' :', innerIndex);
      if (innerIndex !== outerIndex) {
        // drop 1,1 2,2 pairs
        const slice = [range[innerIndex], range[outerIndex]];
        slices.push(slice);
      }
    });
  });

  return slices;
};

export default combinationsOfLength;
