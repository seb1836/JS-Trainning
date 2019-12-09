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
};

export default arrayExercises;
