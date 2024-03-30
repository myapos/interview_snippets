//https://leetcode.com/problems/memoize/
const memoize = (fn) => {
  let cache = {};
  return function (...args) {
    const key = JSON.stringify(args);

    const isInCache = typeof cache[key] !== "undefined";

    if (isInCache) {
      return cache[key];
    }

    const val = fn(...args);

    cache[key] = val;

    return val;
  };
};

export default memoize;
