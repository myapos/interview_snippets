import * as snippets from "./snippets";

const asyncDouble = (x) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(x * 2);
    }, 10);
  });

const asyncRejectOdd = (x) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (x % 2 === 1) {
        reject(x * 3);
      }

      resolve(x * 2);
    }, 10);
  });

async function testMe() {
  const doubled = await snippets.mapAsync([2, 3], asyncRejectOdd);
  console.log(doubled); // [2, 4]
}

testMe();
