// https://leetcode.com/problems/permute/
const permute = (nums) => {
  let count = 0;
  const generate = (available, permutation, result) => {
    count++;
    if (!Boolean(available.length)) {
      result.push([...permutation]);
      return;
    }

    /* 

    Problem analysis

    We are going to calculate its permutations
    for each number we are getting the first number from the available numbers
    we then reducing the available number space by one.
    We gather each permutation in the result array when the available
    num space is empty which means that all possible permutations are 
    already generated.

    Intuition
    We use a for loop to ensure that for each number the corresponding permutation is
    generated. For example
    if we have an input [1,2,3]
    then for each number we have the following state space tree
    

    (avail 2,3)   (avail 3) 
    1 -->         2           --> 3  (permutation 1,2,3 is complete add it)
                  (avail 2)
      -->         3           --> 2  (permutation 1, 3, 2 is complete add it)


    (avail 1,3)   (avail 2) 
    2 -->         1           --> 3  (permutation 2, 1, 3 is complete add it)
                  (avail 1)
      -->         3           --> 2  (permutation 2, 3, 2 is complete add it)
  
    (avail 1,2)   (avail 2) 
    3 -->         1           --> 2  (permutation 3, 1, 2 is complete add it)
                  (avail 1)
      -->         2           --> 1  (permutation 3, 2, 1 is complete add it)
    

      The total number of permutations can be calculated with the formula

      D = n! where n is the length of the nums array.

      In this case is D = 3*2*1 = 6
    */

    for (let i = 0; i < available.length; i++) {
      const currentNum = available[i];

      // calculate available numbers for the next permutation
      // Any number of the available space should be added except
      // the current number. So we filter the available array of numbers
      // const avail = available.filter((num) => num !== currentNum);

      // remove the currentNum from the array
      const avail = [...available.slice(0, i), ...available.slice(i + 1)];

      permutation.push(currentNum);
      generate([...avail], permutation, result);
      // back-track until the next number of the permutation
      permutation.pop();
    }
  };

  const permutations = [];
  generate(nums, [], permutations);
  console.log("count", count);

  return permutations;
};

export default permute;
