// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
const digitsToLettersMap = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  /*
    Problem analysis

    1. the final result should be of the same length as the digits string
    2. so for each digit we can get all possible combinations that could be used to 
        generate substrings of length n
    */

  const combinations = [];
  const combination = [];
  const length = digits.length;
  let strIdx = 0;

  const solve = (length, combinations, combination, strIdx, digits) => {
    if (combination.length === length && length > 0) {
      combinations.push(combination.join(""));
      return;
    }

    if (strIdx >= digits.length) {
      return;
    }

    const first = digitsToLettersMap[digits[strIdx]];

    for (let i = 0; i < first.length; i++) {
      combination.push(first[i]);
      solve(length, combinations, [...combination], strIdx + 1, digits);
      // back track
      combination.pop();
    }
  };

  solve(length, combinations, combination, strIdx, digits);

  //   console.log("combinations", combinations);
  return combinations;
};

export default letterCombinations;
