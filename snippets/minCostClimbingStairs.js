// https://leetcode.com/problems/min-cost-climbing-stairs/

const minCost = (cost, n, hash) => {
  if (n === 0) {
    return cost[0];
  }

  if (n === 1) {
    return cost[1];
  }

  let costOneStepBefore, costTwoStepBefore;

  //! n>1
  if (typeof hash[`${n - 1}`] === "undefined") {
    costOneStepBefore = minCost(cost, n - 1, hash);
    hash[`${n - 1}`] = costOneStepBefore;
  } else {
    costOneStepBefore = hash[`${n - 1}`];
  }

  if (typeof hash[`${n - 2}`] === "undefined") {
    costTwoStepBefore = minCost(cost, n - 2, hash);
    hash[`${n - 2}`] = costTwoStepBefore;
  } else {
    costTwoStepBefore = hash[`${n - 2}`];
  }

  const minTwoSteps = Math.min(costOneStepBefore, costTwoStepBefore);

  const costAtStep = typeof cost[n] !== "undefined" ? cost[n] : 0;

  return costAtStep + minTwoSteps;
};

const minCostClimbingStairs = (cost) => {
  console.log("cost", cost);

  const minimumCost = minCost(cost, cost.length, {});

  return minimumCost;
};

export default minCostClimbingStairs;
