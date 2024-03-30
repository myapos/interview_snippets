/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  console.log("s", s, s.split());

  const startingAlphabet = ["{", "(", "["];

  const stack = [];

  const pairs = {
    "{": "}",
    "(": ")",
    "[": "]",
  };

  let isMatched = false;
  for (let i = 0; i < s.length; i++) {
    if (startingAlphabet.includes(s[i])) {
      stack.push(s[i]);
    } else {
      const char = stack.pop();

      isMatched = pairs[char] === s[i];

      if (!isMatched) {
        break;
      }
    }
  }

  const isValidParentheses = isMatched && stack.length === 0;

  return isValidParentheses;
};

export default isValid;

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

/* 

s = "()[]{}" "({})" "[({})]" "{[]()}"
s = "({}"
s = "(]"


arxika prepei na xrisimopoiisw tin ennoia tou stack. ena stack einai lifo
last in first out
stin js to stack mporei na ilopoiithei me ena array. ara prepei na balw olous tous
xaraktires tou string se ena stack.

algorithmos

mporw na exw ena hash me pairs k matches tha elegxw ana zeugi

*/
