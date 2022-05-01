//! it will calculate factorial with tail call recursion

const tailFactorial = (n, acc) => {
  if ((n === 0) | (n === 1)) {
    return acc;
  }

  return tailFactorial(n - 1, acc * n);
};

const factorialTCR = (n) => {
  return tailFactorial(n, 1);
};

export default factorialTCR;
