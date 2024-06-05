// https://www.greatfrontend.com/questions/javascript/deep-clone-ii

const isCyclic = (obj) => {
  // Use the Set data type to store detected objects
  let stackSet = new Set();
  let detected = false;

  const detect = (obj) => {
    if ((obj && typeof obj != "object") || obj == null) {
      return;
    }

    if (stackSet.has(obj)) {
      detected = true;
      return;
    }
    stackSet.add(obj);
    Object.entries(obj).forEach(([key, value]) => {
      detect(value);
    });

    stackSet.delete(obj);
  };

  detect(obj);

  return detected;
};

/**
 * @template T
 * @param {T} value
 * @return {T}
 */
export default function deepClone(value) {
  let newValue = value;
  // strings

  if (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean" ||
    typeof value === "symbol" ||
    typeof value === "function" ||
    value instanceof Date ||
    value instanceof RegExp ||
    value == undefined // null && undefined cases
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
    const cloned = Object.create(Object.getPrototypeOf(value));

    for (const key of Reflect.ownKeys(value)) {
      const propValue = value[key];
      if (isCyclic(propValue)) {
        cloned[key] = { ...propValue };
        continue;
      }
      cloned[key] = deepClone(propValue);
    }

    newValue = cloned;

    return newValue;
  }
}
