/**
 * @callback func
 * @param {number} wait
 * @return {Function}
 */
export default function throttle(func, wait) {
  let isResolving = false;

  function throttled(...args) {
    if (!isResolving) {
      func.call(this, ...args);
      setTimeout(() => {
        isResolving = false;
      }, wait);
    }

    isResolving = true;
  }
  return throttled;
}
