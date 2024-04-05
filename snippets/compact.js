// https://www.greatfrontend.com/questions/javascript/compact-ii
const isPrimitive = (val) =>
  val === null ||
  typeof val === "boolean" ||
  typeof val === "number" ||
  typeof val === "string";

/**
 * @param {Array|Object} value
 * @return {Array|Object}
 */
export default function compact(array) {
  if (isPrimitive(array)) {
    return array;
  }

  if (Array.isArray(array)) {
    return array.filter(Boolean).map(compact);
  }

  if (typeof array === "object") {
    return Object.fromEntries(
      Object.entries(array)
        .filter(([key, value]) => {
          return Boolean(value);
        })
        .map(([key, value]) => {
          return [key, compact(value)];
        })
    );
  }
}
