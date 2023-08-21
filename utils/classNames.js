const isObject = (obj) => typeof obj === "object" && !Array.isArray(obj);
const isLast = (args, idx) => idx === args.length - 1;

const classNames = (...args) => {
  let result = "";

  const recurse = (args, idx) => {
    let added = false;

    if (args.length === idx) {
      return;
    }

    const curArg = args[idx];

    if (!Boolean(curArg)) {
      return recurse(args, idx + 1);
    }

    const isLastElement = isLast(args, idx);

    if (typeof curArg === "string") {
      result = result.concat(curArg);
      added = true;
    }

    if (typeof curArg === "number") {
      result = result.concat(curArg);
      added = true;
    }

    if (isObject(curArg)) {
      // iterate over all properties of object
      const curArgKeys = Object.keys(curArg);

      let objString = "";
      curArgKeys.forEach((key, index) => {
        if (Object.hasOwn(curArg, key) && curArg[key] && Boolean(key)) {
          objString = objString.concat(`${key} `);
        }
      });

      result = result.concat(objString.trim());
      if (objString.length > 0) added = true;
    }

    if (!isLastElement && added) {
      result = result.concat(" ");
    }

    if (Array.isArray(curArg)) {
      return recurse(curArg, 0);
    }

    return recurse(args, idx + 1);
  };

  recurse(args, 0);
  return result.trim();
};

export default classNames;
