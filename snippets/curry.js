function curry_(func) {
  let args = [];

  function calc(val) {
    if (func.length === 0) {
      return func.call(this);
    }

    if (val === undefined) {
      return calc.bind(this);
    }

    args.push(val);
    if (args.length === func.length) {
      let finalArgs = [...args];
      args = []; // reset
      return func.call(this, ...finalArgs);
    }

    // this refers to object scope
    return calc.bind(this);
  }

  return calc;

  //   const curried = function (val) {

  //     if (func.length === 0) {
  //       return func.call(this);
  //     }

  //     args.push(val);

  //     if (args.length === func.length) {
  //       let finalArgs = [...args];
  //       args = []; // reset
  //       return func.call(this, ...finalArgs);
  //     }

  //     return curried.bind(this);
  //   };

  //   return curried;
}

function curry(func) {
  function curried(...vals) {
    const fn = curried.bind(this, ...vals);

    fn[Symbol.toPrimitive] = () => func.apply(this, vals);

    return fn;
  }

  return curried;
}

export default curry;
