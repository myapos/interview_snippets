// https://www.greatfrontend.com/questions/javascript/promise-merge

function isPlainObject(value) {
  // For null and undefined.
  if (value == null) {
    return false;
  }

  const prototype = Object.getPrototypeOf(value);
  return prototype === null || prototype === Object.prototype;
}

/**
 * @param {Promise} p1
 * @param {Promise} p2
 * @return {Promise<any>}
 */
export default function promiseMerge(p1, p2) {
  if (!(p1 instanceof Promise) || !(p2 instanceof Promise)) {
    return new Promise((res, rej) => rej("Not valid input"));
  }

  return new Promise((res, rej) => {
    p1.then((val1) => {
      p2.then((val2) => {
        if (typeof val1 !== typeof val2) {
          rej("Unsupported data types");
          return;
        }

        if (typeof val1 === "number" && typeof val2 === "number") {
          res(val1 + val2);
          return;
        }

        if (typeof val1 === "string" && typeof val2 === "string") {
          res(val1.concat(val2));
          return;
        }

        if (Array.isArray(val1) && Array.isArray(val2)) {
          res([...val1, ...val2]);
          return;
        }

        if (isPlainObject(val1) && isPlainObject(val2)) {
          res({
            ...val1,
            ...val2,
          });
          return;
        }

        rej("Unsupported data types");
      }).catch((e) => {
        rej(e);
      });
    }).catch((e) => {
      rej(e);
    });
  });
}
