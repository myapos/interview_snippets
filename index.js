import * as utils from "./utils";

const matrix = [
  [1, 2, 3],
  [3, 1, 2],
  [2, 3, 1],
];

const invalidMatrix = [
  [1, 1, 1],
  [1, 2, 3],
  [1, 2, 3],
];
const output = utils.checkEveryRowColumnContainAllNumbers(invalidMatrix);

console.log("output", output);
