const input1 = [4, 6, 5, 3, 3, 1];
const input2 = [3, 1, 5, 3];
const input3 = [4, 6, 5];
const input4 = [1, 2, 2, 3, 1, 2];
const input5 = [1, 2, 2, 2, 2, 3, 3, 3, 5, 5, 1, 2];
const input6 = [1, 2, 2, 2, 2, 3, 3, 3, 5, 5, 4, 4, 1, 2];
const input7 = [1];
const input8 = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];
const input9 = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2,
  2, 2, 2, 2, 2,
];

const input10 = [1, 8, 3, 2];
const input11 = [1, 99, 99, 99];
const input12 = [
  4, 97, 5, 97, 97, 4, 97, 4, 97, 97, 97, 97, 4, 4, 5, 5, 97, 5, 97, 99, 4, 97,
  5, 97, 97, 97, 5, 5, 97, 4, 5, 97, 97, 5, 97, 4, 97, 5, 4, 4, 97, 5, 5, 5, 4,
  97, 97, 4, 97, 5, 4, 4, 97, 97, 97, 5, 5, 97, 4, 97, 97, 5, 4, 97, 97, 4, 97,
  97, 97, 5, 4, 4, 97, 4, 4, 97, 5, 97, 97, 97, 97, 4, 97, 5, 97, 5, 4, 97, 4,
  5, 97, 97, 5, 97, 5, 97, 5, 97, 97, 97,
];

//! Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to .
//! https://www.hackerrank.com/challenges/picking-numbers/problem?h_r=next-challenge&h_v=zen

import filterMagicSquares from "./filterMagicSquares";

//! Input int a[n]: an array of integers
//! Returns int: the length of the longest subarray that meets the criterion
//! example array =[4, 6, 5, 3, 3, 1];

const checkDiffOfElementsInArray = (arr) => {
  let THRESHOLD = 1;
  let found = true;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      const difference = Math.abs(arr[i] - arr[j]);
      const isSmallerThanOne = difference <= THRESHOLD;

      found = isSmallerThanOne && found;
    }
  }

  return found;
};

const diff = (combs) => {
  const allCombsWithDiffLessThanOne = [];

  combs.forEach((comb) => {
    const found = checkDiffOfElementsInArray(comb);
    console.log("found", found);
    if (found) {
      allCombsWithDiffLessThanOne.push(comb);
    }
  });

  console.log("allCombsWithDiffLessThanOne", allCombsWithDiffLessThanOne);

  // find the longest
  const lengths = allCombsWithDiffLessThanOne.map((comb) => comb.length);
  lengths.sort();
  const biggerLength = lengths[lengths.length - 1];
  console.log("sorted", lengths, " biggerLength", biggerLength);

  return biggerLength;
};

const getCombinations = (array) => {
  // ! https://www.youtube.com/watch?v=NA2Oj9xqaZQ
  //! https://www.enjoyalgorithms.com/blog/find-all-combinations-of-k-numbers
  if (array.length === 0) {
    //! exit condition
    return [[]];
  }

  const [firstEl, ...rest] = array;
  const combsWithoutFirst = getCombinations(rest);

  const combsWithFirst = combsWithoutFirst.map((comb) => [...comb, firstEl]);

  return [...combsWithoutFirst, ...combsWithFirst];
};

const rebuild = ({ lengthToIterate, collect, startIndexFrom }) => {
  let output = [];
  let length = lengthToIterate;
  let temp = collect;
  let startIndex = startIndexFrom;

  const rebuildListWithRecursion = () => {
    console.log("looping in element", startIndex);
    if (startIndex === length) {
      //! exit
      output = temp;
      return;
    }

    temp.push(startIndex);

    console.log("temp", temp);
    startIndex = startIndex + 1;
    rebuildListWithRecursion();
  };

  rebuildListWithRecursion();

  return output;
};

const histWithMap = (array) => {
  const frequencies = new Map();

  array.forEach((element) => {
    //! create new entry
    if (!frequencies.has(element)) {
      frequencies.set(element, 1);
    } else {
      let occurences = frequencies.get(element);
      occurences++;
      frequencies.set(element, occurences);
    }
  });

  return frequencies;
};

const hist = (array) => {
  const frequencies = {};

  array.forEach((element) => {
    //! create new entry
    const hasElement = typeof frequencies[element] !== "undefined";
    if (!hasElement) {
      frequencies[element] = 1;
    } else {
      frequencies[element]++;
    }
  });

  return frequencies;
};

const pickingNumbers = (array) => {
  // sort first
  array.sort();
  console.log(array);
  const freqs = hist(array);
  let neighboors = new Map();

  const freqsInMap = Object.keys(freqs).map((key) => {
    return {
      [key]: freqs[key],
    };
  });

  let maximum = Number.NEGATIVE_INFINITY;
  let maximumKey = "";
  freqsInMap.forEach((freq, index) => {
    if (freqsInMap[index + 1]) {
      const [elA] = Object.keys(freqsInMap[index]);
      const [valA] = Object.values(freqsInMap[index]);

      const [elB] = Object.keys(freqsInMap[index + 1]);
      const [valB] = Object.values(freqsInMap[index + 1]);
      const theyAreAdjacent = Math.abs(elA - elB) <= 1;

      if (theyAreAdjacent) {
        const sum = valA + valB;

        neighboors.set(`${elA}-${elB}`, sum);
        if (sum > maximum) {
          // maximumKey
          maximum = sum;
          maximumKey = `${elA}-${elB}`;
        }
      }
    }

    const [occur] = Object.values(freq);
    const [key] = Object.keys(freq);
    if (occur > maximum) {
      //! check if the occurences of a single number is bigger than the adjacents
      maximum = occur;
      maximumKey = key;
      neighboors.set(maximumKey, maximum);
    }
  });

  // console.log("neighboors", neighboors.size);
  // console.log("freqsInMap", freqsInMap);

  let length;
  if (freqsInMap.length === 1) {
    length = array.length;
  }

  if (neighboors.get(maximumKey)) {
    length = neighboors.get(maximumKey);
  }

  // console.log("maximumKey", maximumKey, " length", length);

  return length;
};

export default pickingNumbers;
