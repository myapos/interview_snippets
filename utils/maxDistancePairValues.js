// https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/
// https://medium.com/swlh/problems-with-advanced-ds-binary-search-optimization-56efedb274d5
var maxDistancePairValues = function (nums1, nums2) {
  let maximuDistance = 0;

  const l1 = nums1.length;
  const l2 = nums2.length;

  //! get all possible values of i,j

  //   for (let i = 0; i < nums1.length; i++) {
  //     const num1 = nums1[i];
  //     for (let j = i + 1; j < nums2.length; j++) {
  //       const num2 = nums2[j];
  //       const isValidPair = num1 <= num2;

  //       if (isValidPair) {
  //         const distance = j - i;
  //         if (distance > maximuDistance) {
  //           maximuDistance = distance;
  //         }
  //       }
  //     }
  //   }

  return maximuDistance;
};

export default maxDistancePairValues;
