import * as utils from ".";

//! it will calculate all possible permutations
//! generated permutations, current permutation, elements to permute
const generatePossiblePermutations = ({
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

    generatePossiblePermutations({
      currentPermutation: nextPermutation,
      elemementsToPermute: remainingElements,
      generatedPermutations,
    });
  }

  return generatedPermutations;
};

export default generatePossiblePermutations;
