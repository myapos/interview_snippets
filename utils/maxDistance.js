// https://leetcode.com/problems/two-furthest-houses-with-different-colors/
var maxDistance = function (colors) {
  let maxDistance = 0;

  for (let i = 0; i < colors.length; i++) {
    for (let j = i + 1; j < colors.length; j++) {
      const dist = Math.abs(i - j);
      const colorIsDifferent = colors[i] !== colors[j];
      if (dist > maxDistance && colorIsDifferent) {
        maxDistance = dist;
      }
    }
  }

  return maxDistance;
};

export default maxDistance;
