const str = "123456789";
const str2 = "myros";
const str3 = "kayak";
const str4 = "racecar";

const palindrome_ = (str) => {
  const isEmpty = str.length === 0;

  if (isEmpty) {
    return true;
  }

  const [first] = str;
  const last = str[str.length - 1];
  const rest = str.slice(1, str.length - 1);

  const isPalindrome = palindrome(rest) && first === last;

  return isPalindrome;
};

const palindrome = (str) => {
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

export default palindrome;
