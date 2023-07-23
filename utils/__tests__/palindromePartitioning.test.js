import palindromePartitioning from "../palindromePartitioning";

describe("palindromePartitioning", () => {
  it("should work with 'aab'", () => {
    expect(palindromePartitioning("aab")).toEqual([
      ["a", "a", "b"],
      ["aa", "b"],
    ]);
  });
  it("should work with 'a'", () => {
    expect(palindromePartitioning("a")).toEqual([["a"]]);
  });
  it("should work with 'aaba'", () => {
    expect(palindromePartitioning("aaba")).toEqual([
      ["a", "a", "b", "a"],
      ["a", "aba"],
      ["aa", "b", "a"],
    ]);
  });

  it("should work with  'abcbd'", () => {
    expect(palindromePartitioning("abcbd")).toEqual([
      ["a", "b", "c", "b", "d"],
      ["a", "bcb", "d"],
    ]);
  });

  it("should work with  'abcba'", () => {
    expect(palindromePartitioning("abcba")).toEqual([
      ["a", "b", "c", "b", "a"],
      ["a", "bcb", "a"],
      ["abcba"],
    ]);
  });

  it("should work with  'abbab'", () => {
    expect(palindromePartitioning("abbab")).toEqual([
      ["a", "b", "b", "a", "b"],
      ["a", "b", "bab"],
      ["a", "bb", "a", "b"],
      ["abba", "b"],
    ]);
  });
});
