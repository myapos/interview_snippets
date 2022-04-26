import * as utils from ".";

//! it will calculate all possible permutations
//! generated permutations, current permutation, elements to permute
const generatePossiblePermutations = (
  generatedPermutations,
  currentPermutation,
  elemementsToPermute,
  permutations
) => {
  const hasElementsToPermute = elemementsToPermute.length > 0;

  if (!hasElementsToPermute) {
    //! exit condition
    //! add current permutation to generated permutations

    generatedPermutations = [...generatedPermutations, ...currentPermutation];
    permutations.push(generatedPermutations);
  }
  //! otherwise loop through the elementsToPermute
  for (let i = 0; i < elemementsToPermute.length; i++) {
    const element = elemementsToPermute[i];
    const nextPermutation = [...currentPermutation, element];

    //! remove element from elements to permute
    const remainingElements = elemementsToPermute.filter(
      (elem) => elem !== element
    );

    generatePossiblePermutations(
      generatedPermutations,
      nextPermutation,
      remainingElements,
      permutations
    );
  }

  return permutations;
};

export default generatePossiblePermutations;
