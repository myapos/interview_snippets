// https://leetcode.com/problems/remove-invalid-parentheses/

const isValidParenthenses = (s) => {
  let count = 0;
  const stack = [];

  while (count < s.length) {
    const char = s[count];

    const isRightPar = char === "(";
    const isLeftPar = char === ")";

    if (stack.length === 0 && isLeftPar) {
      return false;
    }

    if (isRightPar) {
      stack.push(char);
    } else if (isLeftPar) {
      stack.pop();
    }

    count++;
  }

  return stack.length === 0;
};

const removeChar = (str, pos) => str.slice(0, pos) + str.slice(pos + 1);

const removeInvalidParentheses = (input) => {
  let numOfRemovals = 0;
  let seen = {};
  let min = Infinity;
  let result = [];
  let flag = "seen";

  const searchForMin = (s) => {
    const isValid = isValidParenthenses(s);

    if (isValid && numOfRemovals <= min) {
      min = numOfRemovals;
    }

    if (isValid) {
      result.push(s);
      seen[s.toString()] = flag;

      return flag;
    }

    if (s.length === 0) {
      seen[s.toString()] = flag;
      return flag;
    }

    for (let charIdx = 0; charIdx < s.length; charIdx++) {
      const char = s[charIdx];

      if (char === "(" || char === ")") {
        numOfRemovals++;
        const nextStr = removeChar(s, charIdx);

        const searched =
          typeof seen[nextStr.toString()] !== "undefined"
            ? seen[nextStr.toString()]
            : searchForMin(nextStr);

        seen[nextStr.toString()] = searched;
        numOfRemovals--;
      }
    }

    return flag;
  };

  searchForMin(input);

  return result.filter((s) => s.length === input.length - min);
};

export default removeInvalidParentheses;
