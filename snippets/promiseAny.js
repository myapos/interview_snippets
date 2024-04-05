/**
 * @param {Array} iterable
 * @return {Promise}
 */
export default function promiseAny(iterable) {
  return new Promise((resolve, reject) => {
    if (iterable.length === 0) {
      reject(new AggregateError([]));
    }

    let promisesLength = iterable.length;
    const errors = new Array(promisesLength);
    let count = 0;

    const checkReject = () => {
      if (count === promisesLength) {
        reject(new AggregateError(errors));
      }
    };

    iterable.forEach((item, idx) => {
      const handlePromise = (val) => {
        resolve(val);
      };

      const handleReject = (err) => {
        count++;
        errors[idx] = err;
        checkReject();
      };

      if (item instanceof Promise) {
        item.then(handlePromise).catch(handleReject);
        return;
      }

      // non promise items
      Promise.resolve(item).then(handlePromise).catch(handleReject);
    });
  });
}
