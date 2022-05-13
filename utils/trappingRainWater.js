//! https://leetcode.com/problems/trapping-rain-water/

//! brute force
const trapBruteForce = function (heights) {
  let totalWater = 0;
  //! cw = min(maxLeft, maxRight) - currentHeight
  for (let p = 0; p < heights.length; p++) {
    let maxLeft = 0;
    let maxRight = 0;
    let currentWater = 0;

    //! find maxLeft
    let i = p;
    while (i >= 0) {
      if (heights[i] > maxLeft) {
        maxLeft = heights[i];
      }
      i--;
    }
    //! find maxRight
    let j = p;
    while (j < heights.length) {
      if (heights[j] > maxRight) {
        maxRight = heights[j];
      }
      j++;
    }

    currentWater = Math.min(maxLeft, maxRight) - heights[p];

    if (currentWater > 0) {
      totalWater = totalWater + currentWater;
    }
  }

  return totalWater;
};

//! optimal solution
//! 1. identify pointer with lesser value
//! 2. Is this pointer value greate than or equal to max on that side
//! yes --> update max on that side
//! no --> get water for pointer value, add to total
//!3. move pointer inwards
//!4. repeat for other pointer

const trap = function (heights) {
  let left = 0,
    right = heights.length - 1,
    totalWater = 0,
    maxLeft = 0,
    maxRight = 0;

  while (left < right) {
    if (heights[left] <= heights[right]) {
      if (heights[left] >= maxLeft) {
        maxLeft = heights[left];
      } else {
        totalWater += maxLeft - heights[left];
      }
      left++;
    } else {
      if (heights[right] >= maxRight) {
        maxRight = heights[right];
      } else {
        totalWater += maxRight - heights[right];
      }

      right--;
    }
  }

  return totalWater;
};
export default trap;
