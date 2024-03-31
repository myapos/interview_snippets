const deepClone = (value) => {
  let newValue = value;
  // strings

  if (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean" ||
    typeof value === "symbol" ||
    value == undefined
  ) {
    return newValue;
  }

  // arrays
  if (Array.isArray(value)) {
    newValue = value.map((item) => {
      return deepClone(item);
    });
    return newValue;
  }

  // objects
  if (typeof value === "object") {
    const cloned = {};
    Object.keys(newValue).forEach((key) => {
      cloned[key] = deepClone(newValue[key]);
    });

    newValue = {
      ...cloned,
    };

    return newValue;
  }
};

export default deepClone;
