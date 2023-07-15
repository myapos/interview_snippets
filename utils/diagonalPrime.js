// it will calculate prime numbers up to a number
// it will return all prime numbers less than n
// https://www.youtube.com/watch?v=V0RTWy4XyCU

export const findPrimeNumbers = (n) => {
  if (n <= 0) {
    return new Set();
  }

  // a prime number is a natural number that is only divided by itself and one
  const primes = new Set();
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
        primes.add(i);
        continue;
      }

      // check to push
      // get the sqrt
      let square = Math.floor(Math.sqrt(i));

      let primesToCompare = [];
      // get the prime numbers up to square

      if (typeof hash[square] === "undefined") {
        hash[square] = Array.from(primes).filter((prime) => prime <= square);
        primesToCompare = Array.from(primes).filter((prime) => prime <= square);
      } else {
        primesToCompare = hash[square];
      }
      const isDivisible = primesToCompare.reduce(
        (acc, cur) => acc || i % cur === 0,
        false
      );

      if (!isDivisible) {
        primes.add(i);
      }
    }
  }

  return primes;
};

const isPrime = (number) => {
  // 1 and any negative number are not prime
  if (number <= 1) {
    return false;
  }

  // Check for divisibility from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
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

  for (let i = 0; i < nums.length; i++) {
    maxPrimeNumber = Math.max(
      maxPrimeNumber,
      isPrime(nums[i][i]) ? nums[i][i] : 0,
      isPrime(nums[i][nums.length - i - 1]) ? nums[i][nums.length - i - 1] : 0
    );
  }

  return maxPrimeNumber;
};

export default diagonalPrime;
