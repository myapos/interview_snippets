// https://www.greatfrontend.com/questions/javascript/conforms-to
// similiar to https://lodash.com/docs/4.17.15#conformsTo

const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export default function conformsTo(object, source) {
  if (isEmptyObject(object)) {
    return false;
  }

  const objectKeysSet = new Set(Object.keys(object));

  return Object.entries(source).reduce((acc, [curKey, predicateFn]) => {
    const objHasSourcePredicate = objectKeysSet.has(curKey);
    const sourcePredicateIsFunction = typeof predicateFn === "function";

    if (!objHasSourcePredicate) {
      return false;
    }

    if (!sourcePredicateIsFunction) {
      throw new TypeError("Predicate is not a function");
    }

    const predicateCheck = acc && predicateFn(object[curKey]);

    return predicateCheck && acc;
  }, true);
}
