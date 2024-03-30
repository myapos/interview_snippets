const decimal1 = 233;
const decimal2 = 0;
const decimal3 = 5;
const decimal4 = 1000;
const decimal5 = 1000000;

const decimalToBinary = (decimal) => {
  const mod = decimal % 2;
  const floor = Math.floor(decimal / 2);

  if (floor < 1) {
    return mod;
  }

  const restBinary = decimalToBinary(floor);
  const binary = `${restBinary}${mod}`;
  return binary;
};

export default decimalToBinary;
