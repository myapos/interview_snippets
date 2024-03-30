const IdentityFn = (x) => x;

/**
 * https://leetcode.com/problems/function-composition/
 * Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that
 * is the function composition of the array of functions.
 */
const composeSol1 = (functions) => {
  const isEmptyList = functions.length === 0;

  if (isEmptyList) {
    return IdentityFn;
  }

  /* I can calculate the last function first then pass the result as 
    input to the previous until I get to the start of the array
  */

  // flip array

  const flipped = functions.reverse();
  const [firstFn, ...restFn] = flipped;

  return (x) => {
    let calculated = firstFn(x);
    restFn.forEach((fn) => {
      calculated = fn(calculated);
    });

    return calculated;
  };
};

const composeSol2 = (functions) => {
  const isEmptyList = functions.length === 0;

  if (isEmptyList) {
    return (x) => x;
  }

  /**
   * I can calculate the last function first then pass the result as
   * input to the previous until I get to the start of the array
   */

  return (x) => {
    let calculated;
    for (let i = functions.length - 1; i >= 0; i--) {
      const isLastFn = i === functions.length - 1;
      calculated = functions[i](isLastFn ? x : calculated);
    }

    return calculated;
  };
};

const composeSol3 = (functions) => {
  const isEmptyList = functions.length === 0;

  if (isEmptyList) {
    return (x) => x;
  }

  /**
   * I can calculate the last function first then pass the result as
   * input to the previous until I get to the start of the array
   */

  return (x) => {
    let calculated = functions.reverse().reduce((acc, curVal) => {
      return curVal(acc);
    }, x);

    return calculated;
  };
};

const composeTwoFunctions = (f1) => (f2) => {
  return f1(f2);
};

const composeSol4 = (functions) => {
  const isEmptyList = functions.length === 0;

  if (isEmptyList) {
    return (x) => x;
  }

  return (x) => {
    let calculated = functions.reduceRight((acc, curVal) => {
      return curVal(acc);
    }, x);

    return calculated;
  };
};

const compose = (fns) => (x) => fns.reduceRight((y, f) => f(y), x);

export default compose;

/* 
f(x) = x
g(x) = x + 1
h(x) = x * x

f(g(x)) = f(x + 1) = x + 1
f(g(h(x))) = f(g(x * x)) = f (x * x + 1) = x * x + 1

1o iteration
return f(g(x))

2o iteration
f(g((h(x))))



*/
