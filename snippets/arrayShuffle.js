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
  return [...this.initial];
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
  const length = this.shuffled.length;
  for (let i = length - 1; i > 0; i--) {
    const j = this.generateRandomNumberInRange(0, i + 1);

    // swap
    const current = this.shuffled[i];
    this.shuffled[i] = this.shuffled[j];
    this.shuffled[j] = current;
  }

  return this.shuffled;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

export default Solution;
