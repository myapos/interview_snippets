// https://leetcode.com/problems/shuffle-an-array/

const generateRandomNumberInRange = (min, max) => {
  const x = Math.random();

  return min + Math.floor(x * (max - min));
};

// https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
// Fisher - Yates algorithm
const shuffle = (ar) => {
  const length = ar.length;
  for (let i = length - 1; i > 0; i--) {
    const j = generateRandomNumberInRange(0, i + 1);

    // swap
    const current = ar[i];
    const temp = current;
    ar[i] = ar[j];
    ar[j] = temp;
  }

  return ar;
};

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

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  // use the sort array and rand
  // rand between zero and 0.5
  const temp = new Array(...this.initial);
  const shuffled = shuffle(temp);
  this.shuffled = [...shuffled];

  return this.shuffled;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

export default Solution;
