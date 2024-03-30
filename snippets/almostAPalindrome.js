//! https://leetcode.com/problems/valid-palindrome-ii/

const isValidSubPalindrome = (str) => {
  const isEmpty = str.length === 0;

  if (isEmpty) {
    return false;
  }

  const stringToWork = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let last = stringToWork.length - 1;
  let isPalindrome = true;

  //!two pointers technique
  for (let first = 0; first < stringToWork.length; first++) {
    if (stringToWork[first] !== stringToWork[last]) {
      isPalindrome = false;
      break;
    }

    last--;
  }

  return isPalindrome;
};

const isValidPalindrome = (str) => {
  const isEmpty = str.length === 0;

  if (isEmpty) {
    return true;
  }

  const stringToWork = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let last = stringToWork.length - 1;
  let isPalindrome = true;

  //!two pointers technique
  for (let first = 0; first < stringToWork.length; first++) {
    if (stringToWork[first] !== stringToWork[last]) {
      isPalindrome = false;
      break;
    }

    last--;
  }

  return isPalindrome;
};

const almostAPalindromeBruteForce = (str) => {
  const stringToWork = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  //! constraints
  if (stringToWork.length <= 1) {
    return true;
  }

  //! if it is already a palindrome return true
  if (isValidPalindrome(stringToWork)) {
    return true;
  }

  let isAlmostAPalindrome = false;
  //! run the string and get remove one character each time
  //! generate a new string and check if it is a palindrome
  //! if no palindrome is found then return false

  for (let first = 0; first < stringToWork.length; first++) {
    //! create a copy
    let copy = stringToWork.slice(0, first) + stringToWork.slice(first + 1);

    if (isValidPalindrome(copy)) {
      isAlmostAPalindrome = true;
      break;
    }
  }
  return isAlmostAPalindrome;
};

const replaceCharAt = (str, index) => {
  const copy = str.slice(0, index) + str.slice(index + 1);

  return copy;
};

const almostAPalindrome = (str) => {
  const stringToWork = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  //! constraints
  if (stringToWork.length <= 1) {
    return true;
  }

  //! if it is already a palindrome return true
  if (isValidPalindrome(stringToWork)) {
    return true;
  }

  let isAlmostAPalindrome = false;
  let last = stringToWork.length - 1;

  for (let first = 0; first < stringToWork.length; first++) {
    if (stringToWork[first] !== stringToWork[last]) {
      const sub1 = stringToWork.slice(first + 1, last + 1);
      const sub2 = stringToWork.slice(first, last);

      if (isValidSubPalindrome(sub1) || isValidSubPalindrome(sub2)) {
        isAlmostAPalindrome = true;
        break;
      }
    }

    last--;
  }
  return isAlmostAPalindrome;
};

export default almostAPalindrome;
