// https://www.greatfrontend.com/questions/javascript/promise-all?list=one-week
const promiseAll = (iterable) => {
  if (iterable.length === 0) return [];
  let countPromises = 0;

  return new Promise((resolve, reject) => {
    const result = new Array(iterable.length).fill("-1");

    for (let index = 0; index < iterable.length; index++) {
      const promise = iterable[index];

      const handlePromise = (i) => {
        const isPromise = promise?.then;
        if (isPromise) {
          promise
            .then((value) => {
              result[i] = value;
              countPromises++;

              if (countPromises === iterable.length) {
                resolve(result);
              }
            })
            .catch((e) => {
              reject(e);
            });
          return;
        }

        // cases where the item is not a promise
        result[i] = promise;

        countPromises++;

        if (countPromises === iterable.length) {
          resolve(result);
        }
      };

      handlePromise(index);
    }
  });
};

export default promiseAll;
