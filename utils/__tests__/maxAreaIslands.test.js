import maxAreaOfIslands from "../maxAreaOfIslands";
const boards = [
  [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  [
    [0, 0, 1, 0],
    [0, 0, 0, 0],
    [0, 1, 1, 0],
  ],
  [
    [0, 0, 1, 0],
    [0, 1, 0, 0],
    [0, 1, 1, 0],
  ],
  [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
  ],
  [
    [0, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 1],
  ],
  [
    [0, 1, 0, 0],
    [0, 1, 1, 1],
    [0, 1, 1, 1],
  ],
  [
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ],
];
describe("maxAreaIslands", () => {
  it("should return 0", () => {
    const area = maxAreaOfIslands(boards[0]);
    expect(area).toBe(0);
  });
  it("should return 2", () => {
    const area = maxAreaOfIslands(boards[1]);
    expect(area).toBe(2);
  });
  it("should return 3", () => {
    const area = maxAreaOfIslands(boards[2]);
    expect(area).toBe(3);
  });
  it("should return 4", () => {
    const area = maxAreaOfIslands(boards[3]);
    expect(area).toBe(4);
  });

  it("should return 6 with 4x4 dimensions", () => {
    const area = maxAreaOfIslands(boards[4]);
    expect(area).toBe(6);
  });
  it("should return 7", () => {
    const area = maxAreaOfIslands(boards[5]);
    expect(area).toBe(7);
  });
  it("should return 6", () => {
    const area = maxAreaOfIslands(boards[6]);
    expect(area).toBe(6);
  });
});
