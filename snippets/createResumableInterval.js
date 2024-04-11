/**
 * @param {Function} callback
 * @param {number} delay
 * @param {...any} args
 * @returns {{start: Function, pause: Function, stop: Function}}
 */
export default function createResumableInterval(callback, delay, ...args) {
  let timerId;
  let isPaused = true;

  return {
    start() {
      let context = this;
      if (isPaused) {
        callback.call(context, ...args);
      }

      isPaused = false;

      if (!timerId) {
        timerId = setInterval(() => {
          if (!isPaused) {
            callback.call(context, ...args);
          }
        }, delay);
      }
    },
    pause() {
      isPaused = true;
    },
    stop() {
      if (timerId) {
        clearInterval(timerId);
      }
    },
  };
}
