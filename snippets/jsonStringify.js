// https://www.greatfrontend.com/questions/javascript/json-stringify
export default function jsonStringify(value) {
  function parse(value, isInitialized) {
    if (
      typeof value === "number" ||
      typeof value === "boolean" ||
      value === null
    ) {
      return `${value}`;
    }

    if (typeof value === "string") {
      return `"${value}"`;
    }

    if (Array.isArray(value)) {
      let strOpen = "[";
      let strClose = "]";
      let str;

      str = value.reduce((acc, item, idx) => {
        const stringifiedItem = parse(item, isInitialized);
        return idx < value.length - 1
          ? `${acc}${stringifiedItem},`
          : `${acc}${stringifiedItem}`;
      }, strOpen);

      return `${str}${strClose}`;
    }

    if (typeof value === "object") {
      let objStr = `{`;

      Object.entries(value).map(([key, item], index) => {
        const delimiter = index === Object.keys(value).length - 1 ? "" : ",";

        objStr = `${objStr}${parse(key, '"')}:${parse(item, true)}${delimiter}`;
      });
      return `${objStr}}`;
    }
  }

  return parse(value, false);
}
