/**
 * It will return the fibonacci sequence until N
 * */
const fibonacci = (n) => {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};

export default fibonacci;
