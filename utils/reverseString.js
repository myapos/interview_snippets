const reverseString = (str) => {
  const isEmpty = str.length === 0;

  if (isEmpty) {
    return "";
  }

  const [first, ...rest] = str;

  const strWithoutFirst = reverseString(rest);

  const reversed = `${strWithoutFirst}${first}`;

  return reversed;
};

export default reverseString;
