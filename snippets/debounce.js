/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */
export default function debounce(func, wait) {
  let timerId = undefined;
  let flashed = false;
  let canceled = false;
  let funcArgs = [];
  let scopedFunc;

  function reset() {
    timerId && clearTimeout(timerId);
    timerId = undefined;
    flashed = false;
  }

  function debounced(...args) {
    funcArgs = [...args];
    scopedFunc = func.bind(this);
    if (flashed) {
      scopedFunc(...funcArgs);
      reset();
      return;
    }

    if (!timerId) {
      timerId = setTimeout(function () {
        scopedFunc(...funcArgs);
        reset();
      }, wait);
    }
  }

  debounced.flush = function () {
    if (!canceled && timerId) {
      flashed = true;
      scopedFunc(...funcArgs);
      reset();
    }
  };

  debounced.cancel = function () {
    canceled = true;
    reset();
  };

  return debounced;
}
