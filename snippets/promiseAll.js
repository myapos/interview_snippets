// https://www.greatfrontend.com/questions/javascript/promise-all?list=one-week
/**
 * @param {Array} iterable
 * @return {Promise<Array>}
 */
export default function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    try {
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
          result[idx] = val;
          count++;
          checkResolve();
        };

        if (item instanceof Promise) {
          item.then(handlePromise).catch((error) => {
            reject(error);
          });

          return;
        }

        // non promise items
        Promise.resolve(item).then(handlePromise);
      });
    } catch (error) {
      reject(error);
    }
  });
}
