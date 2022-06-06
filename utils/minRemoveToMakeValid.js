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
  if (s.length === 0 || (s.indexOf("(") === -1 && s.indexOf(")") === -1)) {
    return s;
  }

  let arStr = s.split("");
  let stack = []; //! save the indexes here
  let stackRightPar = [];

  let validArStr = [...arStr];
  for (let i = 0; i < arStr.length; i++) {
    const char = arStr[i];
    if (char === ")" && stack.length === 0) {
      //! check for ) without ( before
      stackRightPar.push(i);
    } else if (char === "(") {
      stack.push(i);
    } else if (char === ")") {
      stack.pop();
    }
  }

  stack = [...stack, ...stackRightPar];
  //!remove all the chars at indexes that are contained in the stack

  stack.forEach((el) => {
    validArStr[el] = "";
  });

  const validStr = validArStr.join("");

  return validStr;
};

export default minRemoveToMakeValid;

/* 
case 1. erxetai ) xwris na exei proigithei ( --> tote afairw epitopou tin )
case 2. erxetai ( --> tin bazw sto stack
case 3. erxetai ) meta pou exei erthei ( --> tote afairw ta indexes apo to stack

sto telos tou string koitazw poia indexes exoun meinei sto stack k afairw tous antistoixous xaraktires apo to string
epistrefw to string
  
  */
