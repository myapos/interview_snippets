import { findPrimeNumbers } from "../diagonalPrime";
const primes = [
  [2],
  [],
  [2, 3, 5, 7],
  [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97,
  ],
];

describe("findPrimeNumbers up to n", () => {
  it("should find prime numbers up to 2", () => {
    expect(findPrimeNumbers(2)).toEqual(primes[0]);
  });
  it("should return empty array", () => {
    expect(findPrimeNumbers(0)).toEqual(primes[1]);
  });
  it("should find prime numbers up to 100", () => {
    expect(findPrimeNumbers(100)).toEqual(primes[3]);
  });
});
