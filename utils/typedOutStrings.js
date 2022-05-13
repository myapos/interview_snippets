//! https://leetcode.com/problems/backspace-string-compare/

const buildString = ([...string]) => {
  const tempString = [];

  string.forEach((char) => {
    if (char === "#") {
      tempString.pop();
    } else {
      tempString.push(char);
    }
  });

  return tempString.join("");
};

//! backspaceCompare
//! brute force
const typedOutStringsBruteForce = (s, t) => {
  const firstString = buildString(s);
  const secondString = buildString(t);

  if (firstString === secondString) {
    return true;
  }

  return false;
};

const typedOutStrings = (s, t) => {
  let p1 = s.length - 1;
  let p2 = t.length - 1;

  while (p1 > 0) {
    if (s[p1] === "#") {
      s = s.slice(0, p1 - 1) + s.slice(p1 + 1); // delete # at p1 position
    }

    p1--;
  }

  while (p2 > 0) {
    if (t[p2] === "#") {
      t = t.slice(0, p2 - 1) + t.slice(p2 + 1); // delete # at p1 position
    }

    p2--;
  }

  if (s === t) {
    return true;
  }

  return false;
};

export default typedOutStrings;
