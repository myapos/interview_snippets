const uniqueArray = (array) => {
  // if (array.length === 0 ) return array;

  debugger;
  const myMap = new Map();
  array.forEach((item) => myMap.set(item, item));

  console.log("myMap", myMap);
  // invert the conversion to array
  const result = [];
  for (const [, item] of myMap.entries()) {
    result.push(item);
  }

  return result;
};

export default uniqueArray;
