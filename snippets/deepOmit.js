// https://www.greatfrontend.com/questions/javascript/deep-omit
const isPrimitive = (val) => {
  if (val === null) {
    return true;
  }

  if (typeof val == "object" || typeof val == "function") {
    return false;
  }
  return true;
};

/**
 * @param {any} val
 * @param {Array<string>} keys
 * @returns any
 */
export default function deepOmit(val, keys) {
  if (typeof val !== "object" || val === null) return val;

  const keysSet = new Set(keys);

  const omitted = (val) => {
    if (isPrimitive(val)) {
      return val;
    }

    if (Array.isArray(val)) {
      return val.map((item) => omitted(item));
    }

    return Object.fromEntries(
      Object.entries(val)
        .filter(([key, value]) => {
          return !keysSet.has(key);
        })
        .map(([key, value]) => {
          return [key, omitted(value)];
        })
    );
  };

  return omitted(val);
}
