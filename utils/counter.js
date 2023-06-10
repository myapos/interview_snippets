// https://leetcode.com/problems/counter/
/** Given an integer n, return a counter function. This counter function initially returns n and then returns 1
 * more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
 *
 *
 * Input:
 * n = 10
 * ["call","call","call"]
 * Output: [10,11,12]
 * Explanation:
 * counter() = 10 // The first time counter() is called, it returns n.
 * counter() = 11 // Returns 1 more than the previous time.
 * counter() = 12 // Returns 1 more than the previous time.
 * Example 2:
 * Input:
 * n = -2
 * ["call","call","call","call","call"]
 * Output: [-2,-1,0,1,2]
 * Explanation: counter() initially returns -2. Then increases after each sebsequent call.
 *
 * Constraints:
 * -1000 <= n <= 1000
 * At most 1000 calls to counter() will be made
 **/

// const counter = createCounter(10);

const createCounter = (n) => {
  let isAlreadyCalled = false;
  let innerCounter = n;

  return () => {
    if (!isAlreadyCalled) {
      isAlreadyCalled = true;
      return innerCounter;
    }

    innerCounter = innerCounter + 1;
    return innerCounter;
  };
};

/* or
first return then increase the value but not return

const createCounter = (n) => {
  return n++
};
*/

export default createCounter;
