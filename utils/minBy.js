const minBy = (array, iteratee) => {
  let minimum,
    lastMinConverted,
    foundMin = false;

  // initialization it will find the first defined
  // converted value and will use it for initialization
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    const converted = iteratee(item);
    if (converted === undefined) {
      continue;
    }
    minimum = item;
    lastMinConverted = converted;
    break;
  }

  // find minimum
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    const converted = iteratee(item);
    const areSameTypes = typeof minimum === typeof item;
    const isEqualWithLastMinConverted = converted === lastMinConverted;

    if (converted === undefined) {
      continue;
    }
    if (isEqualWithLastMinConverted && areSameTypes) {
      lastMinConverted = converted;
      foundMin = true;
      continue;
    }
    if (converted < lastMinConverted) {
      minimum = item;
      lastMinConverted = converted;
      foundMin = true;
    }
  }

  return !foundMin ? undefined : minimum;
};

export default minBy;
