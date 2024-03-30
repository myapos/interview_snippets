const deepEqual = (valueA, valueB) => {
  let isEqual = true;

  const recurse = (valueA, valueB) => {
    if (!isEqual) {
      return;
    }
    const valuesAreDifferentType = typeof valueA !== typeof valueB;

    const isValueAString = typeof valueA === "string";
    const isValueBString = typeof valueB === "string";

    const isValueANumber = typeof valueA === "number";
    const isValueBNumber = typeof valueB === "number";

    const isValueAArray = Array.isArray(valueA);
    const isValueBArray = Array.isArray(valueB);

    const isValueABoolean = typeof valueA === "boolean";
    const isValueBBoolean = typeof valueB === "boolean";

    const isValueANull = valueA === null;
    const isValueBNull = valueB === null;

    const isValueAObject = !Array.isArray(valueA) && typeof valueA === "object";
    const isValueBObject = !Array.isArray(valueB) && typeof valueB === "object";

    if (valuesAreDifferentType) {
      isEqual = isEqual && valueA === valueB;
      return;
    }
    if (isValueANumber && isValueBNumber) {
      isEqual = isEqual && valueA === valueB;
      return;
    }

    if (isValueAString && isValueBString) {
      isEqual = isEqual && valueA === valueB;
      return;
    }

    if (isValueABoolean && isValueBBoolean) {
      isEqual = isEqual && valueA === valueB;
      return;
    }

    if (isValueANull && isValueBNull) {
      isEqual = isEqual && valueA === valueB;
      return;
    }

    if (isValueAArray && isValueBArray && valueA.length !== valueB.length) {
      isEqual = false;
      return;
    }

    if (
      isValueAObject &&
      isValueBObject &&
      Object.keys(valueA).length !== Object.keys(valueB).length
    ) {
      isEqual = false;
      return;
    }

    if (
      (isValueAArray && !isValueBArray) ||
      (!isValueAArray && isValueBArray) ||
      (isValueAObject && !isValueBObject) ||
      (!isValueAObject && isValueBObject)
    ) {
      isEqual = false;
      return;
    }

    //! array cases both values should have same length if they base conditions
    if (isValueAArray) {
      for (let i = 0; i < valueA.length; i++) {
        let newValueA = valueA[i];
        let newValueB = valueB[i];

        recurse(newValueA, newValueB);
      }
    }

    //! object cases both values should have same length if they base conditions
    if (isValueBObject) {
      Object.keys(valueA).forEach((key) => {
        let newValueA = valueA[key];
        let newValueB = valueB[key];

        recurse(newValueA, newValueB);
      });
    }
  };

  recurse(valueA, valueB);

  return isEqual;
};

export default deepEqual;
