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

  if (hasElementsToPermute) {
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
  } else {
    // add current permutation to generated permutations
    generatedPermutations = [...generatedPermutations, ...currentPermutation];
    // console.log("generatedPermutations", generatedPermutations);
    permutations.push(generatedPermutations);
  }

  return permutations;
};

export default generatePossiblePermutations;
