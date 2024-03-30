const cycle = (...values) => {
  let counter = 0;
  let state = [...values];

  return () => {
    if (counter === state.length) {
      counter = 0; // reset
    }

    let current = state[counter];

    counter++;

    return current;
  };
};

export default cycle;
