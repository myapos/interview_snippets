// https://www.greatfrontend.com/questions/javascript/classnames

const isPlainObject = (val) => {
  if (val == null) {
    return false;
  }

  const prototype = Object.getPrototypeOf(val);

  return prototype === null || prototype === Object.prototype;
};

const isValidClassName = (val) =>
  val === null ||
  typeof val === "number" ||
  (typeof val === "string" && Boolean(val.length));

const isFunction = (val) => typeof val === "function";

/**
 * @param {...(any|Object|Array<any|Object|Array>)} args
 * @return {string}
 */
export default function classNames(...args) {
  let classes = new Set();
  const getClassNames = (args) => {
    if (isValidClassName(args)) {
      classes.add(args.toString());
      return;
    }

    if (isFunction(args)) {
      classes.add(args.call(this).toString());
      return;
    }

    if (Array.isArray(args)) {
      args.filter(Boolean).forEach((item) => getClassNames(item));
      return;
    }

    if (isPlainObject(args)) {
      Object.entries(args)
        .filter(([key, value]) => {
          if (!value && classes.has(key)) {
            classes.delete(key);
          }
          return Boolean(value);
        })
        .forEach(([key, value]) => {
          getClassNames(key);
        });
    }
  };

  getClassNames(args);

  return Array.from(classes).join(" ").trim();
}
