// https://www.greatfrontend.com/questions/javascript/limit
/**
 * @callback func
 * @param {number} n
 * @return {Function}
 */
export default function limit(func, n) {
  let timesCalled = 0;
  let times = n;
  let result;

  function limited(...args) {
    if (timesCalled < times) {
      timesCalled++;
      result = func.call(this, ...args);
      return result;
    }

    return result;
  }

  return limited;
}
