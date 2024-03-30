const concat = (ar, ...items) => {
  if (!Boolean(items.length)) {
    return ar;
  }

  // flatten items until ar.length = 0

  const collect = [];
  const parse = (items) => {
    if (items.length === 0) {
      return;
    }

    items?.forEach((item) => {
      if (Array.isArray(item)) {
        // get first element of array
        let [first, ...restItems] = item;

        Array.isArray(first)
          ? parse(first)
          : first
          ? collect.push(first)
          : null;
        parse(restItems);
      } else {
        collect.push(item);
      }
    });
  };

  parse(items);

  return [...ar, ...collect];
};

export default concat;
