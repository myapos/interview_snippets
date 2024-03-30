const range = (start = 0, end, step = 1) => {
  const ar = [];

  const hasPositiveStart = start > 0;
  const hasPositiveEnd = end > 0;
  const hasPositiveStep = step > 0;
  const hasZeroStep = step === 0;
  const hasStep = !step;
  const hasEnd = !end;

  const shouldUseNegativeStep = !hasPositiveStart && (hasStep || hasEnd);
  const hasNegativeEndAndStep = !hasPositiveEnd && !hasPositiveStep;
  const hasPositiveStartEndAndNegStep =
    hasPositiveStart && hasPositiveEnd && !hasPositiveStep;
  const hasPositiveStartEnd = hasPositiveStart && hasPositiveEnd;
  const hasNegativeStartEnd = !hasPositiveStart && !hasPositiveEnd;

  let startIdx = end ? start : 0;
  let endIdx = end ? end : start;
  let stepToWalk = shouldUseNegativeStep ? -1 : step;

  if (hasZeroStep && hasPositiveStartEnd) {
    for (let i = startIdx; i < endIdx; i++) {
      ar.push(startIdx);
    }

    return ar;
  }

  if (hasZeroStep && hasNegativeStartEnd) {
    for (let i = startIdx; i < endIdx; i++) {
      ar.push(startIdx);
    }

    return ar;
  }

  if (hasPositiveStartEndAndNegStep) {
    for (let i = startIdx; i > endIdx; i = i + stepToWalk) {
      ar.push(i);
    }

    return ar;
  }

  if (shouldUseNegativeStep || hasNegativeEndAndStep) {
    for (let i = startIdx; i > endIdx; i = i + stepToWalk) {
      ar.push(i);
    }

    return ar;
  }

  for (let i = startIdx; i < endIdx; i = i + stepToWalk) {
    ar.push(i);
  }

  return ar;
};

export default range;
