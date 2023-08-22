// https://www.greatfrontend.com/questions/javascript/list-format?list=one-week

const compactTwoElements = ({ collection }) => {
  let formattedA = collection.slice(0, collection.length - 1);
  let formattedB = collection.slice(collection.length - 1);

  // two items
  return `${formattedA.join(", ")} and ${formattedB.toString()}`;
};

const compactLengthElements = ({ collection, length }) => {
  let formattedA = collection.slice(0, length);

  const remainder = collection.length - length;
  // length items
  return `${formattedA.join(", ")} and ${remainder} other${
    remainder > 1 ? "s" : ""
  }`;
};

const listFormat = (items, options) => {
  let sorted, length, unique;

  if (options) {
    ({ sorted, length, unique } = options);
  }

  if (items === undefined || items.length === 0) return "";

  if (items.length === 1) return items[0].toString();

  let collection = [...items].filter((item) => item.length > 0);

  if (sorted) {
    collection.sort();
  }

  if (unique) {
    // remove duplicate
    const collectionSet = new Set(collection);
    collection = Array.from(collectionSet);
  }

  // length handling
  if (length !== undefined && length > 0 && length < collection.length) {
    return compactLengthElements({ collection: [...collection], length });
  }

  return compactTwoElements({ collection: [...collection] });
};

export default listFormat;
