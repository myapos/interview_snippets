const isPlainObject = (val) => {
  // null or undefined
  if (val == null) {
    return false;
  }

  const prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
};
/**
 * @param {any} value
 * @param {Function} fn
 * @returns any
 */
export default function deepMap(value, fn) {
  function mapped(value, fn, context) {
    if (!Array.isArray(value) && !isPlainObject(value)) {
      return fn.call(context, value);
    }

    if (Array.isArray(value)) {
      return value.filter(Boolean).map((item) => mapped(item, fn, context));
    }

    if (typeof value === "object") {
      const test = Object.entries(value).map(([key, value]) => {
        return [key, mapped(value, fn, context)];
      });

      return Object.fromEntries(test);
    }
  }

  return mapped(value, fn, value);
}
