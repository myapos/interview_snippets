import * as utils from "./";
const findLargestAndSmallestStrings = (str1, str2) => {
  let largestStr = str1;
  let smallestStr = str2;

  if (str2.length > str1.length) {
    largestStr = str2;
    smallestStr = str1;
  }

  return { largestStr, smallestStr };
};

const greatestCommonDivisorOfStrings = (str1, str2) => {
  if (!str1.includes(str2) && !str2.includes(str1)) {
    //! no common divisor
    return "";
  }

  //! get the greatest common divisor of string lengths
  //! and then return the substring of length of gcd from the smallest string

  //! step 1 get the largest string and the smallest

  let { largestStr, smallestStr } = findLargestAndSmallestStrings(str1, str2);

  const greaterCommonDivisor = utils.greatestCommonDivisor([
    largestStr.length,
    smallestStr.length,
  ]);

  let candidateStr = smallestStr.substring(0, greaterCommonDivisor);

  while (candidateStr.length !== largestStr.length) {
    candidateStr += smallestStr.substring(0, greaterCommonDivisor);
  }

  if (candidateStr === largestStr) {
    return smallestStr.substring(0, greaterCommonDivisor);
  }

  return "";
};

export default greatestCommonDivisorOfStrings;
