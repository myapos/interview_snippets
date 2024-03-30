import diagonalPrime from "../diagonalPrime";
const nums = [
  [
    [1, 2, 3],
    [5, 6, 7],
    [9, 10, 11],
  ],
  [
    [1, 2, 3],
    [5, 17, 7],
    [9, 11, 10],
  ],
  [
    [4, 4, 4],
    [4, 4, 4],
    [4, 4, 4],
  ],
  [
    [2, 2, 2],
    [2, 2, 2],
    [2, 2, 2],
  ],
];

describe("diagonalPrime", () => {
  it("should return 11", () => {
    expect(diagonalPrime(nums[0])).toBe(11);
  });
  it("should return 17", () => {
    expect(diagonalPrime(nums[1])).toBe(17);
  });
  it("should return 0", () => {
    expect(diagonalPrime(nums[2])).toBe(0);
  });
  it("should return 2", () => {
    expect(diagonalPrime(nums[3])).toBe(2);
  });
});
