// https://www.greatfrontend.com/questions/javascript/intersection-by
export default function intersectionWith(comparator, ...arrays) {
  if (arrays === undefined) return [];
  if (!Boolean(arrays.length)) return [];
  if (arrays.some((array) => array.length === 0)) return [];
  if (arrays.length === 1) return arrays[0];

  const [firstArray, ...restArrays] = arrays;

  const mappedArrays = firstArray.filter((a) => {
    return restArrays.every((array) => {
      return array.some((b) => {
        const compared = comparator(a, b);
        return compared;
      });
    });
  });

  return mappedArrays;
}
