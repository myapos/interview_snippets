function getType(obj) {
  const lowerCaseTheFirstLetter = (str) => str[0].toLowerCase() + str.slice(1);
  const type = typeof obj;
  if (type !== "object") {
    return type;
  }

  return lowerCaseTheFirstLetter(
    Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, "$1")
  );
}

/**
 * @param {*} value
 * @return {string}
 */
export default function jsonStringify(value) {
  const cache = new Set();

  function parse(value) {
    const type = getType(value);

    if (type === "bigint") {
      throw new TypeError("Do not know how to serialize a BigInt");
    }

    if (type === "string") {
      return `"${value.replaceAll('"', '\\"')}"`;
    }

    if (
      (type === "number" && isNaN(value)) ||
      value === Infinity ||
      value === -Infinity
    ) {
      return `${null}`;
    }

    if (type === "symbol") {
      return undefined;
    }
    if (
      !isNaN(value) &&
      (type === "number" || type === "boolean" || value == null) // null or undefined
    ) {
      return `${value}`;
    }

    if (Array.isArray(value)) {
      let strOpen = "[";
      let strClose = "]";
      let str;

      str = value.reduce((acc, item, idx) => {
        const stringifiedItem = parse(item);
        return idx < value.length - 1
          ? `${acc}${stringifiedItem},`
          : `${acc}${stringifiedItem}`;
      }, strOpen);

      return `${str}${strClose}`;
    }

    if (type === "date") {
      return `"${value.toISOString()}"`;
    }
    if (
      type === "object" ||
      type === "regExp" ||
      type === "map" ||
      type === "set"
    ) {
      let objAr = [];

      cache.add(value);

      Object.entries(value).forEach(([key, item], index) => {
        if (cache.has(item)) {
          throw new TypeError("Converting circular structure to JSON");
        }

        let parsedKey = parse(key);
        let parsedItem = parse(item);
        if (parsedItem === undefined) {
          return; // continue for non json compatible values
        }

        objAr.push([parsedKey, parsedItem].join(":"));
      });
      cache.delete(value);

      return `{${objAr.join(",")}}`;
    }
  }

  return parse(value);
}
