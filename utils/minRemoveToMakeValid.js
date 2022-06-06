/* Formally, a parentheses string is valid if and only if:

It is the empty string, contains only lowercase characters, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.
*/
/**
 * @param {string} s
 * @return {string}
 */
const minRemoveToMakeValid = (s) => {
  if (s.length === 0 || s.match(/[a-z]+$/)) {
    return s;
  }

  let arStr = [];

  for (let i = 0; i < s.length; i++) {
    arStr.push(s[i]);
  }

  console.log("arStr", arStr);
};

export default minRemoveToMakeValid;
