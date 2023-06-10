const memoize = (fn) => {
  let cache = {};
  return function (...args) {
    const key = args.toString();

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
