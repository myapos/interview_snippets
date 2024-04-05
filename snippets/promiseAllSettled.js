/**
 * @param {Array} iterable
 * @return {Promise<Array<{status: 'fulfilled', value: *}|{status: 'rejected', reason: *}>>}
 */
export default function promiseAllSettled(iterable) {
  return new Promise((resolve, reject) => {
    if (iterable.length === 0) {
      resolve([]);
    }

    let promisesLength = iterable.length;
    let result = new Array(promisesLength); // create an array with empty slots
    let count = 0;

    const checkResolve = () => {
      if (count === promisesLength) {
        resolve(result);
      }
    };

    iterable.forEach((item, idx) => {
      const handlePromise = (val) => {
        result[idx] = {
          status: "fulfilled",
          value: val,
        };
        count++;
        checkResolve();
      };

      const handleReject = (err) => {
        result[idx] = {
          status: "rejected",
          reason: err,
        };
        count++;
        checkResolve();
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
