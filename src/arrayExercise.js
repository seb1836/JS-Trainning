const simpleArray = [1, 2, 3, 4, 5];
const nestedArray = [1, 2, 3, [4]];
const myString2 = "fsfsad";
const myMap = Array.prototype.map;
const nestedArray2 = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7]
];

const arrayCloner = array => {
  const clonedArray = array.map(entry => {
    return entry;
  });
  return clonedArray;
};

const returnRandomentry = array => {
  let index = Math.floor(Math.random() * Math.floor(array.length - 1));
  console.log(index);
  return array[index];
};
const arrayExtractor = (array, index) => {
  if (index === 0 || index === undefined) {
    return array.shift();
  } else if (array.length === 0 || index < 0) {
    return [];
  }
  const extractedArray = index > array.length ? array : array.slice(0, index);
  console.log(extractedArray);
  return extractedArray;
};

const arrayRange = (startingvalue, arraylength) => {
  let value = startingvalue;
  let returnedArray = [startingvalue];
  returnedArray.forEach(() => {
    value++;
    returnedArray.push(value);
    console.log(
      returnedArray,
      returnedArray.length,
      "lenght",
      arraylength !== returnedArray.length
    );
  });
  return returnedArray;
};

const findDifference = (array1, array2) => {
  const array1flattened = array1.flat(Infinity);
  const array2flattened = array2.flat(Infinity);

  return array1flattened.filter((entry, index) => {
    return entry !== array2flattened[index];
  });
};

const displayElementOfNestedArray = array => {
  for (let i = 0; i < array.length; i++) {
    console.log("row" + i);
    for (let j = 0; j < array[i].length; j++) {
      console.log(array[i][j]);
    }
  }
};

const arrayExercises = () => {
  console.log(arrayCloner(simpleArray), "simple");
  console.log(arrayCloner(nestedArray), "nested");
  console.log(arrayExtractor(simpleArray, 3));
  console.log(displayElementOfNestedArray(nestedArray2), "display nested");
  console.log(returnRandomentry(simpleArray), "random");
  console.log(findDifference(simpleArray, nestedArray2), "differences");
  console.log(arrayRange(-3, 4), "arrayRange");
};

export default arrayExercises;
