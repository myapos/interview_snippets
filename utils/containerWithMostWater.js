const containerWithMostWater_ = (array) => {
  let maxArea = { value: 0, i: 0, j: 0 };

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      //! calculate area
      //! area = LxW
      //! Height = min(arr[i], arr[j])
      //! Length = j-i

      const area = Math.min(array[i], array[j]) * (j - i);

      if (area > maxArea.value) {
        maxArea = {
          value: area,
          i,
          j,
        };
      }
    }
  }

  return maxArea.value;
};

const containerWithMostWater = (heights) => {
  let maxArea = { value: 0, i: 0, j: 0 };

  let i = 0;
  let j = heights.length - 1;

  while (i < j) {
    //! calculate area
    //! area = LxW
    //! Height = min(arr[i], arr[j])
    //! Length = j-i
    const area = Math.min(heights[i], heights[j]) * (j - i);

    if (area > maxArea.value) {
      maxArea = {
        value: area,
        i,
        j,
      };
    }

    if (heights[i] <= heights[j]) {
      i++;
    } else {
      j--;
    }
  }

  return maxArea;
};

export default containerWithMostWater;
