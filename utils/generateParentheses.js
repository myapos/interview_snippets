// https://leetcode.com/problems/generate-parentheses/

const generateParentheses_ = (n) => {
  const solve = (combination, result, open, close) => {
    if (open > n || close > n || close > open) return;

    if (combination.length === 2 * n && open === n && close === n) {
      result.push(combination.join(""));
    }

    solve([...combination, "("], result, open + 1, close);
    solve([...combination, ")"], result, open, close + 1);
  };

  let open = 0;
  let close = 0;
  let result = [];
  let combination = [];

  solve(combination, result, open, close);

  return result;
};

const generateParentheses = (n) => {
  const solve = (open, closed, combination, result) => {
    if (open > closed) return;

    if (open === 0 && closed === 0) {
      result.push(combination);
      return;
    }

    if (open > 0) solve(open - 1, closed, combination + "(", result);
    if (closed > 0) solve(open, closed - 1, combination + ")", result);
  };

  let open = n;
  let closed = n;
  let result = [];

  solve(open, closed, "", result);

  return result;
};

export default generateParentheses;
