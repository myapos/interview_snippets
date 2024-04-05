/**
 * @template T
 * @param {Promise<T>} promise
 * @param {number} duration
 * @return {Promise<T>}
 */
export default function promiseTimeout(promise, duration) {
  let timeoutPassed = false;

  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      timeoutPassed = true;
      reject("Promise timeout");
    }, duration);

    promise
      .then((val) => {
        if (!timeoutPassed) {
          resolve(val);
        }
      })
      .catch((e) => {
        if (!timeoutPassed) {
          reject(e);
        }
      })
      .finally(() => {
        clearTimeout(timeoutId);
      });
  });
}
