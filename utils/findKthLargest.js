import * as utils from "./";

const findKthLargest = (nums, k) => {
  console.log("nums", nums);
  utils.quickSort(nums, 0, nums.length - 1);
  console.log("nums", nums, " length", nums.length);

  return nums[nums.length - k];
};

export default findKthLargest;
