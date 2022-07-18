// https://leetcode.com/problems/maximum-difference-between-increasing-elements/
var maximumDifference = function (nums) {
  let minNumber = Number.POSITIVE_INFINITY;
  let maxDifference = 0;

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    if (number < minNumber) {
      minNumber = number;
    } else if (number - minNumber > maxDifference) {
      maxDifference = number - minNumber;
    }
  }

  return maxDifference === 0 ? -1 : maxDifference;
};

export default maximumDifference;
