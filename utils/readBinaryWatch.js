// https://leetcode.com/problems/binary-watch/

const readTime = (digits, hDigits, totalDigits) => {
  let sumH = 0;
  let sumM = 0;

  for (let i = 0; i < digits.length; i++) {
    const digit = digits[i];
    if (digit.pos <= 3) {
      const pow = hDigits - 1 - digit.pos;
      sumH += Math.pow(2, pow);
    }

    if (digit.pos >= 4) {
      const pow = totalDigits - 1 - digit.pos;
      sumM += Math.pow(2, pow);
    }
  }

  return {
    sumH,
    sumM,
  };
};

const formatMinutes = (minutes) => {
  if (minutes.toString().length <= 1) {
    return `0${minutes}`;
  }

  return minutes;
};

const readBinaryWatchBackTracking = (turnedOn) => {
  /* Problem analysis 
  
  
  We have an available space of 10 places that needs to be filled by the leds that are turned on
  So we have to calculate the possible permutations of the leds numbers in the available space.
  We can use backtracking technique for this. If the calculated permutation is a valid time then we can keep it
  otherwise we can backtrack and explore a different branch of the space tree

  We also going to need to build a suitable space that can be used to map a place to a digit of the watch

  So for this if we have an array of 10 available places then we can do something like the following

  <---H-->     <----M---->
  [0,1,2,3,    4,5,6,7,8,9]

  For 
  
  - places 0-3 we can denote the H digits. 
        In order to find the correct value of the digit we can use the transformation 
        `#Available digits - 1 - position`
        Example 
        for position 3, hour digits are 4
        #Available digits - 1 - position = 4 - 1 - 3 = 0. 
            So we can use that number as the power of two. The final value is 
            2^0 = 1
        for position 2 4-1-2=1 --> 2^1 = 2 

  - places 4-9 we can denote the M digits
    In order to find the correct value of the digit we can use the transformation 
    `#total positions - curr position`
    Example
    for position 4

    9-4=5 --> 2^5 = 32 

    for position 7
    9-7=2 --> 2^2=4

    The constraints to build a valid hour could be that the sum of all the hour digits has to be 0<=sumH<=11
    and for the minutes 0<=sumM<=59
  
  */

  const totalDigits = 10;

  const space = new Array(totalDigits)
    .fill(0)
    .map((_, index) => ({ pos: index, used: false }));

  const result = [];
  const timeDigits = [];
  const hDigits = 4;

  const searchForTimes = (space, seen) => {
    const { sumH, sumM } = readTime(timeDigits, hDigits, totalDigits);

    const isValidTime = sumH <= 11 && sumM <= 59;
    if (!isValidTime) {
      return;
    }

    if (timeDigits.length === turnedOn) {
      const timeString = `${sumH}:${formatMinutes(sumM)}`;

      if (!seen[timeString]) {
        // push to result
        result.push(timeString);
      }

      seen[timeString] = timeString;
      return;
    }

    for (let i = 0; i < space.length; i++) {
      const curElement = space[i];

      if (curElement.used) continue;

      curElement.used = true;
      timeDigits.push(curElement);

      searchForTimes(space, seen);
      // back track
      curElement.used = false;
      timeDigits.pop();
    }
  };

  searchForTimes(space, {});

  return result;
};

const readBinaryWatch = (num) => {
  const times = [];
  for (let h = 0; h < 12; h++) {
    for (let m = 0; m < 60; m++) {
      const hOnes = h ? h.toString(2).match(/1/g).length : 0;
      const mOnes = m ? m.toString(2).match(/1/g).length : 0;
      if (hOnes + mOnes === num) {
        times.push(`${h}:${m < 10 ? `0${m}` : m}`);
      }
    }
  }
  return times;
};

export default readBinaryWatch;
