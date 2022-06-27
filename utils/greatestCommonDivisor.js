//! https://leetcode.com/problems/find-greatest-common-divisor-of-array/
//! https://www.youtube.com/watch?v=LUGiAk25WZU

const greatestCommonDivisor = (nums) => {
  const largest = Math.max(...nums);
  const smallest = Math.min(...nums);

  const modulos = { smallest, largest }; //! initialize
  let length = 2; // greatest common divisor of two numbers
  let numOfZeros = 0;

  //! step 1 find smallest and largest of two numbers
  //! step 2 add the smallest and largest to modulos
  //! step 3 add the lartest % smallest to the modulos arrays
  //! step 4 stp condition is that the modulos array contain zeros except the greatest common divisor

  while (numOfZeros < length - 1) {
    //! step1
    let smallest = Math.min(modulos.smallest, modulos.largest);
    let largest = Math.max(modulos.smallest, modulos.largest);

    //! step 2 get the modulo and replace the largest
    modulos.largest = largest % smallest;

    //! step 3 replace the smallest
    modulos.smallest = smallest;

    if (modulos.largest === 0) {
      numOfZeros++;
    }
  }

  //! the greatest common divisor is the not zero element in modulos
  if (modulos.largest !== 0) {
    return modulos.largest;
  }

  if (modulos.smallest !== 0) {
    return modulos.smallest;
  }
};

export default greatestCommonDivisor;
