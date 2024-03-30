// https://www.greatfrontend.com/questions/javascript/compose

const compose = (...fns) => {
  return (val) => {
    if (fns.length === 0) {
      return val;
    }

    return fns.reduceRight((acc, fn) => {
      return fn(acc);
    }, val);
  };
};

export default compose;
