// https://leetcode.com/problems/memoize-ii/

function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    let key = args.length > 0 ? getCacheKey(cache, args) : cache;

    if (key.has("result")) {
      return key.get("result");
    }

    const result = fn.apply(this, args);
    key.set("result", result);
    return result;
  };
}

function getCacheKey(cache, args) {
  let argCache = cache;

  for (let i = 0; i < args.length; i++) {
    let argKey = args[i];
    if (argCache.has(argKey)) {
      argCache = argCache.get(argKey);
    } else {
      let newCache = new Map();
      argCache.set(argKey, newCache);
      argCache = newCache;
    }
  }

  return argCache;
}

export default memoize;
