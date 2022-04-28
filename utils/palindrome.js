const str = "123456789";
const str2 = "myros";
const str3 = "kayak";
const str4 = "racecar";

const palindrome = (str) => {
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

export default palindrome;
