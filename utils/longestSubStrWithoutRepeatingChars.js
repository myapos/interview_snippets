//! https://leetcode.com/problems/longest-substring-without-repeating-characters
//! Given a string s, find the length of the longest substring without repeating characters.
const hasRepeatedChars = (s) => {
  const hash = {};
  let alreadyExists = false;

  for (let i = 0; i < s.length; i++) {
    const isInString = typeof hash[s[i]] !== "undefined";
    if (!isInString) {
      hash[s[i]] = true;
    } else {
      alreadyExists = true;
      break;
    }
  }

  return alreadyExists;
};

const findAllSubstrings = (s) => {
  const subStrings = [];

  const { length } = s;

  for (let i = 0; i <= length; i++) {
    //! find sub strings of a certain length
    //! use as starting point the element of second for loop
    for (let j = 0; j < length; j++) {
      let curSub = `${s[j]}`;
      for (let k = j + 1; k < i; k++) {
        curSub = `${curSub}${s[k]}`;
      }
      subStrings.push(curSub);
    }
  }

  return subStrings;
};
/* 
Brute force
1. find all substrings
2. remove the substrings with repeated characters and save length
3. return maximum length
*/
const longestSubStrWithoutRepeatingChars = (s) => {
  if (s.length === 0) {
    return 0;
  }
  const subStrings = findAllSubstrings(s);
  //! 2. remove the substrings with repeated characters and save length
  const notRepeatingSubStrings = [];

  for (let i = 0; i < subStrings.length; i++) {
    const isRepeatingString = hasRepeatedChars(subStrings[i]);
    if (!isRepeatingString) {
      notRepeatingSubStrings.push(subStrings[i].length);
    }
  }

  //! 3. return maximum length
  return Math.max(...notRepeatingSubStrings);
};

//! solution repl brute force
const lengthOfLongestSubstringRepl = function (s) {
  if (s.length <= 1) return s.length;

  let longest = 0;

  for (let left = 0; left < s.length; left++) {
    let seenChars = {},
      currentLength = 0;

    for (let right = left; right < s.length; right++) {
      const currentChar = s[right];

      if (!seenChars[currentChar]) {
        currentLength++;
        seenChars[currentChar] = true;
        longest = Math.max(longest, currentLength);
      } else {
        break;
      }
    }
  }

  return longest;
};

//! sliding window solution
const lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;

  let longest = 0;

  for (let left = 0; left < s.length; left++) {
    let seenChars = {};

    for (let right = left; right < s.length; right++) {
      const currentChar = s[right];

      if (typeof seenChars[currentChar] === "undefined") {
        seenChars[currentChar] = right;
        const values = Object.values(seenChars);
        const first = Math.min(...values);
        const last = Math.max(...values);
        const slidingWindow = s.slice(first, last + 1);
        longest = Math.max(longest, slidingWindow.length);
      } else {
        const values = Object.values(seenChars);
        const first = Math.min(...values);
        const last = Math.max(...values);
        const slidingWindow = s.slice(first, last + 1);
        longest = Math.max(longest, slidingWindow.length);
        break;
      }
    }
  }

  return longest;
};

export default lengthOfLongestSubstring;
