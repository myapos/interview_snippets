/**
 * @param {Object} objectParam
 * @param {string|Array<string>} pathParam
 * @param {*} [defaultValue]
 * @return {*}
 */
export default function get(objectParam, pathParam, defaultValue) {
  const props = Array.isArray(pathParam) ? pathParam : pathParam.split(".");

  function parse(pathAr, obj) {
    const [accessor, ...rest] = pathAr;

    if (!accessor) {
      return obj;
    }

    if (!obj) {
      return undefined;
    }

    if (typeof obj[accessor] === "undefined") {
      return undefined;
    }

    if (typeof obj[accessor] !== "undefined") {
      return parse(rest, obj[accessor]);
    }

    return obj;
  }

  const val = parse(props, objectParam);

  return typeof val !== "undefined" ? val : defaultValue;
}
