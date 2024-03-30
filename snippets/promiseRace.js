// with thens
// const promiseRace = (iterable) => {
//   return new Promise((resolve, reject) => {
//     if (!Boolean(iterable.length)) {
//       return;
//     }
//     for (const promise of iterable) {
//       if (promise instanceof Promise) {
//         Promise.resolve(promise).then(resolve, reject);
//       } else {
//         Promise.resolve(promise).then((value) => {
//           resolve(value);
//         });
//       }
//     }
//   });
// };

const promiseRace = (iterable) => {
  return new Promise((resolve, reject) => {
    if (!Boolean(iterable.length)) {
      return;
    }
    iterable.forEach(async (item) => {
      try {
        resolve(await item);
      } catch (e) {
        reject(e);
      }
    });
  });
};

export default promiseRace;
