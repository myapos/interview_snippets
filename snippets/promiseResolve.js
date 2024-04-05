/**
 * @param {*} value
 * @returns Promise
 */
export default function promiseResolve(value) {
  if (value instanceof Promise) {
    return value;
  }

  const isThenable = value?.then !== undefined && typeof value === "function";
  if (!isThenable) {
    return new Promise((resolve) => {
      resolve(value);
    });
  }

  return new Promise((resolve, reject) => value.then(resolve, reject));
}
