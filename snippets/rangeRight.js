const rangeRight = (start = 0, end, step = 1) => {
  const result = [];

  // Adjust parameters if only `end` is provided
  if (end === undefined) {
    end = start;
    start = 0;
  }

  // Adjust `step` for descending sequences
  if (end < start && step === 1) {
    step = -1;
  }

  // Determine the number of elements in `result`
  const length = (end - start) / (step || 1);

  // Generate the range
  for (let i = 0; i < length; i++) {
    result.unshift(start + i * step);
  }

  return result;
};

export default rangeRight;
