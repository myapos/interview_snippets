import * as utils from ".";

//! it will calculate all possible permutations
//! generated permutations, current permutation, elements to permute
export const generatePossiblePermutationsSimpleRecursion = ({
  generatedPermutations,
  currentPermutation,
  elemementsToPermute,
}) => {
  const { length } = elemementsToPermute;
  const hasElementsToPermute = length > 0;

  if (!hasElementsToPermute) {
    //! exit condition
    //! add current permutation to generated permutations

    generatedPermutations.push(currentPermutation);
  }

  //! otherwise loop through the elementsToPermute
  for (let i = 0; i < length; i++) {
    const element = elemementsToPermute[i];
    const nextPermutation = [...currentPermutation, element];

    //! remove element from elements to permute
    const remainingElements = elemementsToPermute.filter(
      (elem) => elem !== element
    );

    const perm = generatePossiblePermutationsSimpleRecursion({
      currentPermutation: nextPermutation,
      elemementsToPermute: remainingElements,
      generatedPermutations,
    });
  }

  return generatedPermutations;
};

const generatePossiblePermutationsRecursiveHeaps = ({ arr }) => {
  const output = [];

  const swapInPlace = (arrToSwap, indexA, indexB) => {
    const temp = arrToSwap[indexA];
    arrToSwap[indexA] = arrToSwap[indexB];
    arrToSwap[indexB] = temp;
  };

  const generate = (n, heapArr) => {
    if (n === 1) {
      output.push(heapArr.slice());
      return;
    }

    generate(n - 1, heapArr);

    for (let i = 0; i < n - 1; i++) {
      if (n % 2 === 0) {
        swapInPlace(heapArr, i, n - 1);
      } else {
        swapInPlace(heapArr, 0, n - 1);
      }

      generate(n - 1, heapArr);
    }
  };

  generate(arr.length, arr.slice());

  return output;
};
export default generatePossiblePermutationsRecursiveHeaps;
