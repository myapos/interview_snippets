function curry(func) {
  const listArgs = [];
  return function curried(arg) {
    if (arg) {
      listArgs.push(arg);
    }
    console.log("arg", arg, " listArgs", listArgs);

    if (listArgs.length === func.length) {
      const retValue = func.apply(this, listArgs);
      // reset
      listArgs.length = 0;
      return retValue;
    }

    return (arg) => curried.call(this, arg);
  };
}

export default curry;
