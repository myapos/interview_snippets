// https://www.greatfrontend.com/questions/javascript/camel-case-keys

const camelCaseStr = (str) => `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`;

const camelCaseWithUpperCase = (str) => {
  return `${str.slice(0, 1).toLowerCase()}${str.slice(1)}`;
};
const camelCaseStrWithUnderscores = (str) => {
  let camelCased = "";
  if (str.includes("_")) {
    const splitted = str.split("_");
    splitted.forEach((chunkStr, idx) => {
      if (idx === 0) {
        camelCased = chunkStr.toLowerCase();
      }
      if (idx >= 1) {
        camelCased = `${camelCased}${camelCaseStr(chunkStr)}`;
      }
    });
  } else {
    return str;
  }

  return camelCased;
};
const camelCaseKey = (str) => {
  let newStr = "";
  newStr = camelCaseStrWithUnderscores(str);
  newStr = camelCaseWithUpperCase(newStr);
  return newStr;
};

const isKey = (object) => typeof object !== "object" || object === null;
export default function camelCaseKeys(object) {
  const parse = (object) => {
    if (Array.isArray(object)) {
      return object.map((item) => parse(item));
    }

    if (isKey(object)) {
      return object;
    }

    return Object.fromEntries(
      Object.entries(object).map(([key, value]) => {
        return [camelCaseKey(key), parse(value)];
      })
    );
  };

  return parse(object);
}
