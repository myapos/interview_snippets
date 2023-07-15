// it will calculate prime numbers up to a number
// it will return all prime numbers less than n
// https://www.youtube.com/watch?v=V0RTWy4XyCU

export const findPrimeNumbers = (n) => {
  if (n <= 0) {
    return [];
  }

  // a prime number is a natural number that is only divided by itself and one
  const primes = [];
  const hash = {};

  for (let i = 2; i <= n; i++) {
    // if (i === 27) debugger;w
    const isEven = i % 2 === 0;
    const dividesByFive = i % 5 === 0;

    if ((isEven && i !== 2) || (dividesByFive && i !== 5)) {
      continue;
    }

    let canBeAPrime = !isEven || i === 2 || !dividesByFive;

    if (canBeAPrime) {
      if (i === 2 || i === 3) {
        primes.push(i);
        continue;
      }

      // check to push
      // get the sqrt
      let square = Math.floor(Math.sqrt(i));

      let primesToCompare = [];
      // get the prime numbers up to square

      if (typeof hash[square] === "undefined") {
        hash[square] = primes.filter((prime) => prime <= square);
        primesToCompare = primes.filter((prime) => prime <= square);
      } else {
        primesToCompare = hash[square];
      }
      const isDivisible = primesToCompare.reduce(
        (acc, cur) => acc || i % cur === 0,
        false
      );

      if (!isDivisible) {
        primes.push(i);
      }
    }
  }

  return primes;
};

const diagonalPrime = (nums) => {
  // Problem analysis
  // Subproblems
  // 1. find prime numbers up to a number
  // 2. traverse the 2d array and access the elements in the two diagonals
  // 3. check if any diagonal element is prime number
  // 4. keep the largest number that exists in diagonals and is a prime number
  // The algorithm should be T: O(n) and S:O(1)

  // another approach is to find the max number of the nums array
  // calculate the prime numbers up to the max number
  // use a hash map to save the prime numbers
  // modify the check if is a prime for primary and secondary diagonal
  // keep the max for those two

  let maxPrimeNumber = 0;
  let maxNum = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    maxNum = Math.max(maxNum, ...nums[i]);
  }

  const primeNumbers = findPrimeNumbers(maxNum);

  const primeNumbersSet = new Set(primeNumbers);

  for (let i = 0; i < nums.length; i++) {
    const primaryDiagonalElement = nums[i][i];
    const secondaryDiagonalElement = nums[i][nums.length - i - 1];

    let primaryElementIsPrime = primeNumbersSet.has(primaryDiagonalElement);
    let secondaryElementIsPrime = primeNumbersSet.has(secondaryDiagonalElement);

    maxPrimeNumber = Math.max(
      maxPrimeNumber,
      primaryElementIsPrime ? nums[i][i] : 0,
      secondaryElementIsPrime ? nums[i][nums.length - i - 1] : 0
    );
  }

  return maxPrimeNumber;
};

export default diagonalPrime;
