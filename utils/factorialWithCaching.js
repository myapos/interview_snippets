//! it will hold already calculated values so that will not
//! be computed again
const cache = {
  0: 0,
  1: 1,
};

//! it will calculate factorialWithCaching with recursion
const factorialWithCaching = (n) => {
  //! check the cache first
  if (cache[n]) {
    return cache[n];
  }

  const calculated = n * factorialWithCaching(n - 1);
  cache[n] = calculated;
  return calculated;
};

export default factorialWithCaching;
