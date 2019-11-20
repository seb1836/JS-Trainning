const simpleArray = [1, 2, 3, 4, 5];
const nestedArray = [1, 2, 3, [4]];
const myString2 = "fsfsad";
const myMap = Array.prototype.map;

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

const arrayExercises = () => {
  console.log(arrayCloner(simpleArray), "simple");
  console.log(arrayCloner(nestedArray), "nested");
  console.log(arrayExtractor(simpleArray, 3));
};

export default arrayExercises;
