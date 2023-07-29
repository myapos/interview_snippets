// https://leetcode.com/problems/gray-code/

/**
 * It will generate a number that differs by one bit
 * a is in decimal system
 *
 * accepts a number and the position that will be flipped
 * starting from the left
 */

const createBinNumWithZeros = (a, n) => {
  const binary = a.toString(2);
  const zeros = new Array(n - binary.length).fill(0).join("");

  return `${zeros}${binary}`;
};

const createAvailableSpace = (n) => {
  if (n === 0 || !n) return [];
  let max = Math.pow(2, n);
  const result = new Array(max).fill(-1).map((_, index) => {
    const binary = index.toString(2);

    const zeros = new Array(n - binary.length).fill(0).join("");

    return {
      decimal: index,
      binary: `${zeros}${binary}`,
      added: false,
    };
  });

  return result;
};

const difLessThanOneBit = (a, b) => {
  if (a === "00" && b === "11") {
  }
  if (a.length !== b.length) return false;

  let check = true;
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      count++;
    }

    if (count > 1) {
      check = false;
      break;
    }
  }

  return check;
};

const grayCode = (n) => {
  /* 
    Problem analysis

    an integeger appears no more than once --> 0 or 1 appearances
    first integer is 0
    select a number that differs from the previous by a bit
    the last number has to differ from the first and the previous by a bit

    1. Sequence of 2^n integers
    2. first integer is 0,
    3. an integer appears no more than once --> available space
    4. adjacent differs by exactly one bit
    5. first and last integers differs exactly one bit

    xor briskw tin diafora se diadiko sistima
    xrisimopoiw tin toString gia na parw to binary representation
    me tin match(/1/ig) metraw emfaniseis tou 1 se kathe string prepei na einai akribws mia emfanisi
    me to shift << pollaplasiazw epi dio

*/

  let max = Math.pow(2, n);
  let result = [];
  // let space = createAvailableSpace(n);

  // result[0] = space[0].decimal;
  // space[0].added = true;
  /**
   *
   **/

  const generateCodeBackTrack = (space) => {
    if (result.length === max) {
      return;
    }

    for (let i = 0; i < space.length; i++) {
      const curElement = space[i];

      const lastRes = result[result.length - 1];
      const lastResBin = createBinNumWithZeros(lastRes, n);

      if (
        !curElement.added &&
        difLessThanOneBit(curElement.binary, lastResBin)
      ) {
        result.push(curElement.decimal);
        curElement.added = true;
        generateCode(space);

        if (result.length === max) {
          const isValid = difLessThanOneBit(
            createBinNumWithZeros(result[0], n),
            createBinNumWithZeros(result[result.length - 1], n)
          );

          if (isValid) {
            return;
          }
        }
        curElement.added = false;
        result.pop();
      }
    }
  };

  const generateCode = () => {
    const max = 1 << n;

    for (let i = 0; i < max; i++) {
      result.push(i ^ (i >> 1));
    }
  };

  generateCode();
  // generateCode(space);

  return result;
};

export default grayCode;
