const twoSumBruteForce = (nums, target) => {
  const indices = [];
  const { length } = nums;

  for (let i = 0; i < length; i++) {
    let j = i;

    while (j < length) {
      if (j !== length) {
        j++;
      }

      const sum = nums[i] + nums[j];

      if (sum === target) {
        indices.push(i);
        indices.push(j);
      }
    }
  }
  return indices;
};

// implementaton with hash table
const twoSum = (nums, target) => {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    if (hash[item]) {
      return [+hash[item], i];
    }
    hash[target - item] = `${i}`;
  }
};

export default twoSum;
