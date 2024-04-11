/**
 * @param {Object} obj
 * @return {Object}
 */
export default function squashObject(obj) {
  if (Object.keys(obj).length === 0) {
    return {};
  }

  const newObj = {};

  function traverse(path, val) {
    Object.entries(val).forEach(([key, value]) => {
      const newPath = [...path, key];
      if (typeof value !== "object" || value === null) {
        newObj[newPath.filter(Boolean).join(".")] = value;
      } else {
        traverse(newPath, value);
      }
    });
  }

  traverse([], obj);

  return newObj;
}
