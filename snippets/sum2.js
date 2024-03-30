const sum2 = (value) => {
  let sum = value;

  function calc(val) {
    if (typeof val === "undefined") {
      const result = sum;
      //! reset
      sum = value;
      return result;
    }

    sum += val;

    return calc;
  }

  return calc;
};

export default sum2;
