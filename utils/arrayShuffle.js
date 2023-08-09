// https://leetcode.com/problems/shuffle-an-array/

/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.initial = [...nums];
  this.shuffled = [...nums];
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  this.shuffled = [...this.initial];
  return this.shuffled;
};

Solution.prototype.generateRandomNumberInRange = (min, max) => {
  const x = Math.random();

  return min + Math.floor(x * (max - min));
};
// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
// https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
// Fisher - Yates algorithm
/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const temp = new Array(...this.initial);

  const length = temp.length;
  for (let i = length - 1; i > 0; i--) {
    const j = this.generateRandomNumberInRange(0, i + 1);

    // swap
    const current = temp[i];
    const tempEl = current;
    temp[i] = temp[j];
    temp[j] = tempEl;
  }

  this.shuffled = [...temp];

  return this.shuffled;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

export default Solution;
