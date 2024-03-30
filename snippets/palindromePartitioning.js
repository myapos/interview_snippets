import palindrome from "./palindrome";
// https://leetcode.com/problems/palindrome-partitioning/
const solve = (startingIdx, S, partialSplits, result) => {
  if (startingIdx === S.length) {
    result.push([...partialSplits]);
    return;
  }

  for (var i = startingIdx; i < S.length; i++) {
    const endIdx = i + 1;

    const palindromeSnippet = S.slice(startingIdx, endIdx);

    if (palindrome(palindromeSnippet)) {
      partialSplits.push(palindromeSnippet);

      solve(i + 1, S, partialSplits, result);
      partialSplits.pop();
    }
  }
};

const partition = (s) => {
  const result = [];

  solve(0, s, [], result);

  return result;
};

export default partition;
