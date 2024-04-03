// https://www.greatfrontend.com/questions/javascript/union-by
export default function unionBy(iteratee, ...arrays) {
  if (arrays.length === 0) return [];

  const mapped = new Map();

  arrays.forEach((array) => {
    array.forEach((value) => {
      try {
        const isString = typeof iteratee === "string";
        const iterateed = isString ? value[iteratee] : iteratee(value);

        if (!mapped.has(iterateed)) {
          mapped.set(iterateed, value);
        }
      } catch (e) {
        console.log("error", e);
      }
    });
  });

  const result = [];
  mapped.forEach((value) => {
    result.push(value);
  });

  return result;
}
