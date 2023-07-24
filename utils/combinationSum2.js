const sum = (ar) => ar.reduce((acc, cur) => acc + cur, 0);

const combinationSum2 = (candidates, target) => {
  let output = [];
  let temp = [];

  candidates.sort((a, b) => {
    return a - b;
  });

  const backtracking = (ind, candidates, target, output, temp) => {
    //base case
    if (target === 0) {
      output.push([...temp]);
      return;
    }
    //backtrack
    for (let i = ind; i < candidates.length; i++) {
      if (i > ind && candidates[i] === candidates[i - 1]) continue;
      if (candidates[i] > target) break;
      temp.push(candidates[i]);
      backtracking(i + 1, candidates, target - candidates[i], output, [
        ...temp,
      ]);
      temp.pop();
    }
  };
  backtracking(0, candidates, target, output, temp);
  return output;
};

export default combinationSum2;
