import * as utils from ".";

function createNumbersInRange(inRange) {
  return Array.from({ length: inRange }, (_, i) => i + 1);
}
export default createNumbersInRange;
