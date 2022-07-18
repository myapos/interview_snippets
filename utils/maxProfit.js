// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

const maxProfit__ = (prices) => {
  let minPrice = Number.POSITIVE_INFINITY;
  let maxProfit = 0;

  for (let buyDate = 0; buyDate < prices.length; buyDate++) {
    const priceToBuy = prices[buyDate];
    if (priceToBuy < minPrice) {
      minPrice = priceToBuy;
    } else if (priceToBuy - minPrice > maxProfit) {
      maxProfit = priceToBuy - minPrice;
    }
  }

  return maxProfit;
};

const getMaxProfit = (prices, buyDate, sellDate, max, hash) => {
  const priceToBuy = prices[buyDate];
  const priceToSell = prices[sellDate];
  const isHashed = typeof hash[`${priceToBuy}-${priceToSell}`] !== "undefined";

  if (isHashed) {
    return hash[`${priceToBuy}-${priceToSell}`];
  }

  let profit = prices[sellDate] - prices[buyDate];

  const hasNegativeProfit = profit < 0;
  const reachedTheEndOfArray = sellDate === prices.length - 1;

  if (reachedTheEndOfArray || hasNegativeProfit) {
    return 0;
  }

  let newSellDate = ++sellDate;

  const localMax = getMaxProfit(prices, buyDate, newSellDate, max, hash);
  const maximum = Math.max(localMax, profit);

  hash[`${priceToBuy}-${priceToSell}`] = maximum;
  return maximum;
};

const maxProfit = (prices) => {
  let max = 0;
  const hash = {};

  for (let i = 0; i < prices.length - 1; i++) {
    const priceToBuy = prices[i];
    const priceToSell = prices[i] + 1;

    const profit = priceToSell - priceToBuy;
    const isHashed =
      typeof hash[`${priceToBuy}-${priceToSell}`] !== "undefined";

    if (profit < 0) {
      continue;
    }

    if (!isHashed) {
      const ret = getMaxProfit(prices, i, i + 1, 0, hash);

      if (ret > max) {
        max = ret;
      }
    } else {
      const ret = hash[`${priceToBuy}-${priceToSell}`];

      if (ret > max) {
        max = ret;
      }
    }
    /*  if (typeof hash[`${priceToBuy}-${priceToSell}`] !== "undefined") {
      const ret = hash[`${priceToBuy}-${priceToSell}`];

      if (ret > max) {
        max = ret;
      }
    } else {
      const ret = getMaxProfit(prices, i, i + 1, 0, hash);

      if (ret > max) {
        max = ret;
      }
    } */
  }

  return max;
};
export default maxProfit__;
