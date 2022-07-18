const printLogs = ({ logs, msg }) => {
  if (logs) {
    console.log(msg);
  }
};
// https://leetcode.com/problems/coin-change/
// https://www.hackmath.net/en/calculator/integer-diophantine-equations-solver
const coinCombinationExist = ({ coins, amount, hash, logs }) => {
  const hashIndex = `${amount}`;

  if (typeof hash[hashIndex] !== "undefined") {
    debugger;
    return hash[hashIndex];
  }

  let min = Infinity;

  for (let i = 0; i < coins.length; i++) {
    const coin = coins[i];
    let subAmount = amount - coin;

    if (subAmount >= 0) {
      let subMinCount = coinCombinationExist({
        coins,
        amount: subAmount,
        hash,
        logs,
      });

      //! calculate new min only when a solution exists
      if (subMinCount !== -1) {
        min = Math.min(min, subMinCount + 1);
      }
    }
  }

  if (min === Infinity) {
    min = -1;
  }

  hash[amount] = min;
  return min;
};

const calMinCount = function (coins, amount, memo) {
  if (memo.has(amount)) {
    //! if we have calculated the minimum coin needed for this amount, then return it from memo
    return memo.get(amount);
  }

  let result = Infinity; //! initialize the result as positive Infinity to track whether there's change in result value

  for (let coin of coins) {
    //! calculate the minimum coins needed for the amount minus each coin
    let subAmount = amount - coin;

    //! we aren't calculating for negative amount
    if (subAmount >= 0) {
      // !get the minimum coin of this subamount
      let subMinCount = calMinCount(coins, subAmount, memo);

      if (subMinCount !== -1) {
        //! if the minimum # of coins of this subamount isn't unreachable, then weight it against result value
        //! plus one to the subMinCount to account for the one coin needed for the subamount to reach the current amount

        result = Math.min(result, subMinCount + 1);
      }
    }
  }

  if (result === Infinity) {
    //! result wasn't changed, so default it to -1 as stated in the prompt
    result = -1;
  }

  memo.set(amount, result); //! record the result in memo

  return result; //!return result
};

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

const coinChange = (coins, amount) => {
  const hash = { 0: 0 };
  const sorted = [...coins.sort((a, b) => b - a)];
  const minimum = coinCombinationExist({
    coins: sorted,
    amount,
    hash,
    logs: true,
  });

  if (minimum === Infinity) {
    return -1;
  }

  return minimum;
};

export default coinChange;
